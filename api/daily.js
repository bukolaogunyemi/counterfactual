// api/daily.js — Vercel serverless function for community daily stats
// Requires: Vercel KV (Redis) — add via `vercel link` then `vercel env pull`
// If KV is not configured, returns { available: false } so the client falls back gracefully

let kv;
try {
  // Dynamic import so the function doesn't crash if @vercel/kv isn't installed
  kv = require("@vercel/kv");
} catch (e) {
  kv = null;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

module.exports = async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return res.status(200).setHeader("Access-Control-Allow-Origin", "*").end();
  }

  // If KV isn't available, signal the client to use local estimates
  if (!kv) {
    return res
      .status(200)
      .json({ available: false, reason: "kv_not_configured" });
  }

  const dateKey = `daily:${getTodayStr()}`;

  // ── POST: Submit a prediction ──
  if (req.method === "POST") {
    try {
      const { prediction, figureId, points, diff } = req.body;

      // Basic validation
      if (
        typeof prediction !== "number" ||
        prediction < 0 ||
        prediction > 1 ||
        typeof figureId !== "string" ||
        !figureId
      ) {
        return res.status(400).json({ error: "invalid_payload" });
      }

      // Rate limit: one submission per fingerprint per day
      // Use a hash of IP + UA as a rough fingerprint (no PII stored)
      const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
      const ua = req.headers["user-agent"] || "unknown";
      const fingerprint = simpleHash(`${ip}:${ua}`);
      const dedupKey = `daily_dedup:${getTodayStr()}:${fingerprint}`;

      const alreadySubmitted = await kv.get(dedupKey);
      if (alreadySubmitted) {
        return res
          .status(200)
          .json({ accepted: false, reason: "already_submitted" });
      }

      // Store the submission in a sorted list for today
      const submission = {
        p: Math.round(prediction * 1000) / 1000, // prediction (0-1)
        pts: Math.round(points || 0),
        d: Math.round((diff || 0) * 1000) / 1000, // diff from actual
        t: Date.now(),
      };

      // Append to today's list (expire after 48h so old data cleans itself)
      await kv.lpush(dateKey, JSON.stringify(submission));
      await kv.expire(dateKey, 172800); // 48 hours

      // Mark this fingerprint as submitted
      await kv.set(dedupKey, "1", { ex: 86400 }); // 24 hours

      return res.status(200).json({ accepted: true });
    } catch (err) {
      console.error("POST /api/daily error:", err);
      return res.status(500).json({ available: false, reason: "server_error" });
    }
  }

  // ── GET: Retrieve community stats for today ──
  if (req.method === "GET") {
    try {
      const raw = await kv.lrange(dateKey, 0, -1);
      const submissions = (raw || []).map((s) => {
        try { return typeof s === "string" ? JSON.parse(s) : s; }
        catch { return null; }
      }).filter(Boolean);

      if (submissions.length < 5) {
        // Not enough real data yet — signal client to blend with estimates
        return res.status(200).json({
          available: true,
          sufficient: false,
          count: submissions.length,
          submissions: submissions.map((s) => ({ p: s.p, d: s.d })),
        });
      }

      // Compute real community stats
      const predictions = submissions.map((s) => s.p);
      const diffs = submissions.map((s) => s.d);
      const avgGuess = predictions.reduce((a, b) => a + b, 0) / predictions.length;
      const pctClose = Math.round(
        (diffs.filter((d) => d <= 0.10).length / diffs.length) * 100
      );

      // Build histogram buckets (0-20, 20-40, 40-60, 60-80, 80-100)
      const buckets = [0, 0, 0, 0, 0];
      predictions.forEach((p) => {
        buckets[Math.min(4, Math.floor(p * 5))]++;
      });

      return res.status(200).json({
        available: true,
        sufficient: true,
        count: submissions.length,
        stats: {
          avgGuess,
          totalPlayers: submissions.length,
          pctClose,
          buckets,
          maxBucket: Math.max(...buckets),
        },
      });
    } catch (err) {
      console.error("GET /api/daily error:", err);
      return res.status(200).json({ available: false, reason: "server_error" });
    }
  }

  return res.status(405).json({ error: "method_not_allowed" });
};

// Simple non-crypto hash for deduplication (not security-sensitive)
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash + chr) | 0;
  }
  return Math.abs(hash).toString(36);
}
