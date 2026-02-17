// Daily challenge system - real community data when available, honest estimates when not
import { ALL_SUBJECTS } from "../subjects.js";
import { hashString, toWeight } from "../helpers.js";
import { DAILY_KEY, saveDailyRaw, loadDailyRaw } from "./storage.js";

// ─────────────────────────────────────────────────────────────────────────────
export { DAILY_KEY };
export const DAILY_LAUNCH = new Date("2026-02-11");

export const getTodayStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const getDayNumber = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const launch = new Date(DAILY_LAUNCH);
  launch.setHours(0, 0, 0, 0);
  return Math.max(1, Math.floor((today - launch) / 86400000) + 1);
};

export const getDailyFigure = () => {
  const dateStr = getTodayStr();
  const hash = hashString("daily_v2_" + dateStr);
  return ALL_SUBJECTS[hash % ALL_SUBJECTS.length];
};

export const loadDailyState = () => loadDailyRaw();

export const saveDailyState = (data) => saveDailyRaw(data);

export const getTimeUntilNext = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diff = tomorrow - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `${h}h ${m}m`;
};

export const getYesterdayStr = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

// ─────────────────────────────────────────────────────────────────────────────
// COMMUNITY STATS - real API with model-based fallback
// ─────────────────────────────────────────────────────────────────────────────

// The API base URL - set to "" for same-origin Vercel deployment,
// or override for local dev / different hosting
const API_BASE = (typeof window !== "undefined" && window.__CF_API_BASE) || "";

// Submit the player's daily prediction to the real community pool
export const submitDailyPrediction = async (prediction, figureId, points, diff) => {
  try {
    const resp = await fetch(`${API_BASE}/api/daily`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prediction, figureId, points, diff }),
    });
    return await resp.json();
  } catch (e) {
    // Silently fail - community features are non-critical
    return { accepted: false, reason: "network_error" };
  }
};

// Fetch real community stats from the API, fall back to model estimates
export const fetchCommunityStats = async (figureR) => {
  try {
    const resp = await fetch(`${API_BASE}/api/daily`);
    const data = await resp.json();

    if (data.available && data.sufficient && data.stats) {
      // Real data with enough submissions - use it directly
      return {
        ...data.stats,
        isReal: true,
        sampleSize: data.count,
      };
    }

    if (data.available && !data.sufficient && data.submissions) {
      // Some real data but not enough - blend with model
      return blendWithModel(data.submissions, figureR, data.count);
    }
  } catch (e) {
    // Network error - fall through to pure model
  }

  // No API available - use model-based estimates
  return generateModelEstimate(figureR);
};

// Pure model-based estimate - uses figure difficulty to project likely responses.
// Labeled as "estimated" everywhere it appears.
export const generateModelEstimate = (figureR) => {
  const w = toWeight(figureR);

  // Model: most players cluster near the actual answer with noise proportional to difficulty
  // Harder figures (r near 0.5) produce wider spread
  const difficulty = Math.abs(figureR - 0.5);
  const spread = 0.18 + (0.25 - difficulty) * 0.4; // harder = wider spread

  const dateStr = getTodayStr();
  const seed = hashString("model_" + dateStr);
  const seededRandom = (n) => ((seed * (n + 1) * 9301 + 49297) % 233280) / 233280;

  // Average guess: near actual weight with slight offset
  const offset = (seededRandom(0) - 0.5) * 0.10;
  const avgGuess = Math.max(0.05, Math.min(0.95, w + offset));

  // % who got within 10 points - correlates inversely with difficulty
  const pctClose = Math.round(20 + (1 - difficulty * 2) * 15 + seededRandom(2) * 8);

  // Distribution buckets (0-20, 20-40, 40-60, 60-80, 80-100)
  const buckets = [0, 0, 0, 0, 0];
  for (let i = 0; i < 200; i++) {
    const noise = (seededRandom(i + 10) - 0.5) * spread * 2;
    const guess = Math.max(0, Math.min(0.999, w + noise));
    buckets[Math.min(4, Math.floor(guess * 5))]++;
  }

  return {
    avgGuess,
    totalPlayers: null,  // Don't fake a player count
    pctClose,
    buckets,
    maxBucket: Math.max(...buckets),
    isReal: false,
    sampleSize: 0,
  };
};

// Blend small real sample with model estimate
const blendWithModel = (realSubmissions, figureR, realCount) => {
  const model = generateModelEstimate(figureR);
  const realPredictions = realSubmissions.map(s => s.p);

  // Weight real data proportionally - at 5+ submissions it dominates
  const realWeight = Math.min(0.8, realCount / 8);
  const modelWeight = 1 - realWeight;

  const realAvg = realPredictions.reduce((a, b) => a + b, 0) / realPredictions.length;
  const blendedAvg = realAvg * realWeight + model.avgGuess * modelWeight;

  // Build blended histogram
  const buckets = [...model.buckets].map(b => Math.round(b * modelWeight));
  realPredictions.forEach(p => {
    buckets[Math.min(4, Math.floor(p * 5))] += Math.round(200 * realWeight / realCount);
  });

  const realDiffs = realSubmissions.map(s => s.d).filter(d => typeof d === "number");
  const realPctClose = realDiffs.length > 0
    ? Math.round((realDiffs.filter(d => d <= 0.10).length / realDiffs.length) * 100)
    : model.pctClose;

  return {
    avgGuess: blendedAvg,
    totalPlayers: realCount,
    pctClose: Math.round(realPctClose * realWeight + model.pctClose * modelWeight),
    buckets,
    maxBucket: Math.max(...buckets),
    isReal: false,  // Not fully real yet - blended
    sampleSize: realCount,
  };
};

// Calculate player's percentile - model-based, honest about it
export const getDailyPercentile = (playerDiff, figureR) => {
  const w = toWeight(figureR);
  const dateStr = getTodayStr();
  const seed = hashString("pct_" + dateStr);
  const seededRandom = (n) => ((seed * (n + 1) * 9301 + 49297) % 233280) / 233280;

  const difficulty = Math.abs(figureR - 0.5);
  const spread = 0.18 + (0.25 - difficulty) * 0.4;

  let worse = 0;
  for (let i = 0; i < 200; i++) {
    const noise = (seededRandom(i) - 0.5) * spread * 2;
    const otherGuess = Math.max(0, Math.min(1, w + noise));
    const otherDiff = Math.abs(otherGuess - w);
    if (otherDiff > playerDiff) worse++;
  }
  return Math.round((worse / 200) * 100);
};

// ─── DEPRECATED - kept for backward compatibility during migration ───
export const generateCommunityStats = (figureR) => generateModelEstimate(figureR);
