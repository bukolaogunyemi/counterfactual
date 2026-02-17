// api/community.js — Vercel serverless function for community-submitted figures
// Uses Vercel KV (same as daily.js). Supports: list, submit, vote, get.
// If KV isn't configured, returns { available: false } so client falls back.

let kv;
try { kv = require("@vercel/kv"); } catch (e) { kv = null; }

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash).toString(36);
}

function getFingerprint(req) {
  const ip = req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown";
  const ua = req.headers["user-agent"] || "unknown";
  return simpleHash(`${ip}:${ua}`);
}

// Sanitize figure data before storing — strip anything dangerous, keep only game fields
function sanitizeFigure(fig) {
  const allowed = [
    "name", "born", "died", "field", "cat", "cat2", "quote",
    "contributions", "r", "_r", "reasoning", "counterfactual",
    "ripples", "timeline", "cascade", "modernDay", "impact",
  ];
  const clean = {};
  for (const key of allowed) {
    if (fig[key] !== undefined) clean[key] = fig[key];
  }
  // Validate critical fields
  if (!clean.name || typeof clean.name !== "string") return null;
  if (typeof clean.r !== "number" || clean.r < 0 || clean.r > 1) return null;
  if (!clean.reasoning || typeof clean.reasoning !== "string") return null;
  // Truncate strings to prevent abuse
  clean.name = clean.name.slice(0, 100);
  clean.reasoning = clean.reasoning.slice(0, 2000);
  if (clean.quote) clean.quote = String(clean.quote).slice(0, 300);
  if (clean.field) clean.field = String(clean.field).slice(0, 100);
  if (clean.counterfactual) clean.counterfactual = String(clean.counterfactual).slice(0, 2000);
  return clean;
}

module.exports = async function handler(req, res) {
  // CORS
  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v));
  if (req.method === "OPTIONS") return res.status(200).end();

  if (!kv) {
    return res.status(200).json({ available: false, reason: "kv_not_configured" });
  }

  const fingerprint = getFingerprint(req);

  // ── POST: Submit or vote ──
  if (req.method === "POST") {
    const { action } = req.body;

    // ─── SUBMIT a new community figure ───
    if (action === "submit") {
      try {
        const { figure, submitterName } = req.body;
        const clean = sanitizeFigure(figure);
        if (!clean) return res.status(400).json({ error: "invalid_figure" });

        // Rate limit: max 5 submissions per fingerprint per day
        const dayKey = new Date().toISOString().slice(0, 10);
        const rateKey = `community:rate:${dayKey}:${fingerprint}`;
        const count = parseInt(await kv.get(rateKey) || "0");
        if (count >= 5) {
          return res.status(200).json({ accepted: false, reason: "rate_limited" });
        }

        // Generate ID from name
        const id = "cmty_" + simpleHash(clean.name + Date.now());

        const entry = {
          id,
          figure: clean,
          submitterName: (submitterName || "Anonymous").slice(0, 30),
          submitterFingerprint: fingerprint,
          votes: 0,
          upvoters: [],
          downvoters: [],
          playCount: 0,
          submittedAt: Date.now(),
          status: "active", // active | flagged | removed
        };

        // Store the entry
        await kv.set(`community:fig:${id}`, JSON.stringify(entry));

        // Add to the index (sorted set, scored by submission time)
        await kv.zadd("community:index", { score: Date.now(), member: id });

        // Increment rate limit
        await kv.set(rateKey, String(count + 1), { ex: 86400 });

        return res.status(200).json({ accepted: true, id });
      } catch (err) {
        console.error("Community submit error:", err);
        return res.status(500).json({ error: "server_error" });
      }
    }

    // ─── VOTE on a figure ───
    if (action === "vote") {
      try {
        const { figureId, direction } = req.body; // direction: "up" | "down"
        if (!figureId || !["up", "down"].includes(direction)) {
          return res.status(400).json({ error: "invalid_vote" });
        }

        // Check if already voted
        const voteKey = `community:voted:${fingerprint}:${figureId}`;
        const existing = await kv.get(voteKey);
        if (existing) {
          return res.status(200).json({ accepted: false, reason: "already_voted" });
        }

        // Load figure
        const raw = await kv.get(`community:fig:${figureId}`);
        if (!raw) return res.status(404).json({ error: "not_found" });

        const entry = typeof raw === "string" ? JSON.parse(raw) : raw;

        // Apply vote
        entry.votes += direction === "up" ? 1 : -1;
        if (direction === "up") entry.upvoters.push(fingerprint);
        else entry.downvoters.push(fingerprint);

        // Flag if too many downvotes
        if (entry.votes <= -5) entry.status = "flagged";

        await kv.set(`community:fig:${figureId}`, JSON.stringify(entry));
        await kv.set(voteKey, direction, { ex: 86400 * 30 }); // Remember vote for 30 days

        // Update index score (votes + recency bonus)
        const recencyBonus = Math.max(0, 1000 - (Date.now() - entry.submittedAt) / 86400000);
        await kv.zadd("community:index", {
          score: entry.votes * 100 + recencyBonus,
          member: figureId,
        });

        return res.status(200).json({ accepted: true, newVotes: entry.votes });
      } catch (err) {
        console.error("Community vote error:", err);
        return res.status(500).json({ error: "server_error" });
      }
    }

    // ─── PLAY: increment play count ───
    if (action === "play") {
      try {
        const { figureId } = req.body;
        if (!figureId) return res.status(400).json({ error: "missing_id" });
        const raw = await kv.get(`community:fig:${figureId}`);
        if (!raw) return res.status(200).json({ accepted: false });
        const entry = typeof raw === "string" ? JSON.parse(raw) : raw;
        entry.playCount = (entry.playCount || 0) + 1;
        await kv.set(`community:fig:${figureId}`, JSON.stringify(entry));
        return res.status(200).json({ accepted: true });
      } catch (err) {
        return res.status(200).json({ accepted: false });
      }
    }

    return res.status(400).json({ error: "unknown_action" });
  }

  // ── GET: List or get single figure ──
  if (req.method === "GET") {
    try {
      const { id, sort, offset, limit } = req.query || {};

      // Single figure fetch
      if (id) {
        const raw = await kv.get(`community:fig:${id}`);
        if (!raw) return res.status(404).json({ error: "not_found" });
        const entry = typeof raw === "string" ? JSON.parse(raw) : raw;
        if (entry.status === "removed") return res.status(404).json({ error: "removed" });

        // Check if this user already voted
        const voteKey = `community:voted:${fingerprint}:${id}`;
        const userVote = await kv.get(voteKey);

        return res.status(200).json({
          available: true,
          figure: entry,
          userVote: userVote || null,
        });
      }

      // List figures
      const count = Math.min(parseInt(limit) || 20, 50);
      const start = parseInt(offset) || 0;

      // Get IDs from sorted index (highest score first)
      const ids = await kv.zrange("community:index", start, start + count - 1, {
        rev: sort !== "newest", // default: by score desc; "newest" = by time desc
      });

      if (!ids || ids.length === 0) {
        return res.status(200).json({ available: true, figures: [], total: 0 });
      }

      // Fetch all figures
      const figures = [];
      for (const fid of ids) {
        try {
          const raw = await kv.get(`community:fig:${fid}`);
          if (!raw) continue;
          const entry = typeof raw === "string" ? JSON.parse(raw) : raw;
          if (entry.status === "removed") continue;
          // Check user's vote
          const voteKey = `community:voted:${fingerprint}:${fid}`;
          const userVote = await kv.get(voteKey);
          figures.push({ ...entry, userVote: userVote || null });
        } catch { continue; }
      }

      const total = await kv.zcard("community:index") || 0;

      return res.status(200).json({ available: true, figures, total });
    } catch (err) {
      console.error("Community GET error:", err);
      return res.status(200).json({ available: false, reason: "server_error" });
    }
  }

  return res.status(405).json({ error: "method_not_allowed" });
};
