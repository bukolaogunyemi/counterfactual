// Scoring engine — points, difficulty, ranks, feedback
import { toWeight } from '../helpers.js';

export const DIFFICULTY_MULTIPLIER = (r) => {
  const d = getDifficulty(r);
  if (d >= 0.30) return { mult: 1.5, label: "1.5×", tier: "hard" };
  if (d >= 0.15) return { mult: 1.25, label: "1.25×", tier: "medium" };
  return { mult: 1.0, label: "1×", tier: "easy" };
};

export const getScoreLabel = (score, subject) => {
  const cat = subject?.cat || "";
  const isEvent = cat === "events";
  const isInvention = cat === "inventions";
  const isInstitution = cat === "institutions";

  if (score >= 0.80) return { label: "Turning Point", color: "#b91c1c", desc:
    isEvent ? "Remove this event and the world becomes unrecognizable"
    : isInvention ? "Without this invention, the world in 2026 looks fundamentally different"
    : isInstitution ? "Without this institution, the systems it shaped don't develop the same way"
    : "Remove them from history and the world we know doesn't arrive" };
  if (score >= 0.50) return { label: "Major Force", color: "#c2410c", desc:
    isEvent ? "The specific way this unfolded mattered — change the details and you change the outcome"
    : isInvention ? "The specific form mattered — a different version changes what followed"
    : isInstitution ? "This institution shaped its domain in ways the underlying need alone wouldn't guarantee"
    : "Remove this and the world looks meaningfully different — the specifics mattered" };
  if (score >= 0.20) return { label: "Supporting Role", color: "#a16207", desc:
    isEvent ? "The underlying forces were real, but the timing and shape still mattered"
    : isInvention ? "The need was real, but how and when it was met still shaped what followed"
    : isInstitution ? "Something like this was needed — the specific form shifted the outcome, but not dramatically"
    : "The world without this still arrives somewhere similar — but the path there looks different" };
  return { label: "Footnote", color: "#15803d", desc:
    isEvent ? "Remove this and the world barely flinches — the same destination, slightly different route"
    : isInvention ? "The world without this looks almost the same — you just get there a little later"
    : isInstitution ? "The need it filled gets met regardless — the world without it is hard to distinguish"
    : "The world without this looks surprisingly similar — the broad strokes don't change" };
};

export const getDifficulty = (r) => Math.abs(r - 0.5);

// Steeper scoring curve — rewards precision, punishes lazy guessing
// diff=0 → 100, diff=0.05 → 81, diff=0.10 → 64, diff=0.15 → 49, diff=0.25 → 25, diff=0.50 → 0
export const calculatePoints = (diff) => {
  if (diff >= 0.5) return 0;
  return Math.round(100 * Math.pow(1 - diff * 2, 2));
};

// Conviction multiplier — penalizes hedging near 50%, rewards bold predictions
// prediction at 50% → 0.75x, at 35%/65% → ~0.98x, at 15%/85% → 1.15x, at 0%/100% → 1.25x
export const CONVICTION_MULT = (prediction) => {
  const conviction = Math.pow(Math.abs(prediction - 0.5) / 0.5, 0.65);
  const mult = 0.75 + 0.5 * conviction;
  if (mult >= 1.05) return { mult, label: `${Math.round((mult - 1) * 100)}% conviction`, tier: "bonus" };
  if (mult <= 0.90) return { mult, label: `${Math.round((1 - mult) * 100)}% hedge penalty`, tier: "penalty" };
  return { mult, label: null, tier: "neutral" };
};

export const getAccuracyFeedback = (diff, pts, subject, prediction) => {
  const name = subject ? subject.name : "this entry";
  const w = subject ? toWeight(subject.r ?? subject._r ?? 0.5) : 0.5;
  const over = prediction > w; // player said MORE impactful than analysis
  if (diff < 0.03) return { emoji: "🎯", msg: `Near-perfect read on ${name}. You saw right through this one.`, tier: "perfect" };
  if (diff < 0.08) return { emoji: "🔥", msg: `Very close. You had a strong feel for ${name}'s place in history.`, tier: "great" };
  if (diff < 0.15) return { emoji: "✨", msg: over
    ? `Solid, though you gave ${name} a bit too much credit.`
    : `Solid, though ${name} carried more weight than you thought.`, tier: "good" };
  if (diff < 0.25) return { emoji: "🤔", msg: over
    ? `You thought ${name} was more impactful than the analysis shows.`
    : `${name} shaped history more than you'd expect.`, tier: "okay" };
  if (diff < 0.40) return { emoji: "📚", msg: over
    ? `The world without ${name} doesn't look as different as you assumed.`
    : `${name} left a deeper mark on history than most people realize.`, tier: "miss" };
  return { emoji: "😮", msg: over
    ? `Way off — ${name} carried far less weight than you guessed.`
    : `Way off — ${name} was far more impactful than you thought.`, tier: "far" };
};

export const getDifficultyLabel = (r) => {
  const d = getDifficulty(r);
  if (d < 0.10) return { label: "Hard", color: "#dc2626" };
  if (d < 0.25) return { label: "Medium", color: "#ca8a04" };
  return { label: "Easy", color: "#16a34a" };
};

// RANK SYSTEM — based on avg points per round + minimum games
export const RANK_LADDER = [
  { title: "Oracle", icon: "🏛️", color: "#7c2d12", avgReq: 84, gamesReq: 50, pctPlayers: "~2%", topPct: 2, desc: "Top tier — you see what others miss" },
  { title: "Master", icon: "👑", color: "#6d28d9", avgReq: 76, gamesReq: 40, pctPlayers: "~5%", topPct: 7, desc: "Rare air — consistent and deep" },
  { title: "Fellow", icon: "🎓", color: "#1d4ed8", avgReq: 68, gamesReq: 30, pctPlayers: "~12%", topPct: 19, desc: "Strong instincts across the board" },
  { title: "Scholar", icon: "📜", color: "#0d9488", avgReq: 58, gamesReq: 20, pctPlayers: "~22%", topPct: 41, desc: "You know your history" },
  { title: "Analyst", icon: "🔍", color: "#ca8a04", avgReq: 45, gamesReq: 10, pctPlayers: "~28%", topPct: 69, desc: "Getting sharper every round" },
  { title: "Novice", icon: "📖", color: "#64748b", avgReq: 0, gamesReq: 5, pctPlayers: "~24%", topPct: 93, desc: "Finding your footing" },
  { title: "Newcomer", icon: "🌱", color: "#94a3b8", avgReq: 0, gamesReq: 0, pctPlayers: "~7%", topPct: 100, desc: "Just getting started" },
];

export const getRank = (avgPts, gamesPlayed) => {
  for (const r of RANK_LADDER) {
    if (r.title === "Newcomer") continue;
    if (avgPts >= r.avgReq && gamesPlayed >= r.gamesReq) {
      const idx = RANK_LADDER.indexOf(r);
      const nextUp = idx > 0 ? RANK_LADDER[idx - 1] : null;
      let nextHint = null;
      if (nextUp) {
        const parts = [];
        if (avgPts < nextUp.avgReq) parts.push(`+${nextUp.avgReq - avgPts} avg pts`);
        if (gamesPlayed < nextUp.gamesReq) parts.push(`${nextUp.gamesReq - gamesPlayed} more rounds`);
        nextHint = parts.length > 0 ? `${parts.join(" · ")} → ${nextUp.title}` : null;
      }
      return { ...r, next: nextHint };
    }
  }
  const newcomer = RANK_LADDER[RANK_LADDER.length - 1];
  return { ...newcomer, next: `Play ${5 - gamesPlayed} more rounds → Novice` };
};
