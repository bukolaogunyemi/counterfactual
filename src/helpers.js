// Utility helpers

export const toWeight = (r) => 1 - r;

export const getLabel = (r) => {
  const w = toWeight(r);
  if (w >= 0.80) return { label: "Turning Point", color: "#dc2626" };
  if (w >= 0.50) return { label: "Major Force", color: "#ea580c" };
  if (w >= 0.20) return { label: "Supporting Role", color: "#ca8a04" };
  return { label: "Footnote", color: "#16a34a" };
};


// Formatting and hashing
export const formatYear = (y) => {
  if (y === null || y === undefined) return "";
  if (y < 0) return `${Math.abs(y).toLocaleString()} BCE`;
  return String(y);
};

export const formatLifespan = (born, died) => {
  if (!born && born !== 0) return "";
  let s = formatYear(born);
  if (died) s += ` – ${formatYear(died)}`;
  return s;
};

// Deterministic hash for consistent custom figure scores
export const hashString = (str) => {
  let hash = 0;
  const normalized = str.toLowerCase().trim().replace(/\s+/g, ' ');
  for (let i = 0; i < normalized.length; i++) {
    const char = normalized.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export const getConsistentScore = (name) => {
  const hash = hashString(name);
  return 0.10 + (hash % 800) / 1000;
};

// ─────────────────────────────────────────────────────────────────────────────
// HISTORIAN VARIANCE — different perspectives on replayed figures
// Historians genuinely disagree about how replaceable historical actors were.
// On replay, we surface this ambiguity with a named perspective and adjusted score.

const HISTORIAN_PERSPECTIVES = [
  { name: "Structuralist", school: "Structural determinism", direction: -1,
    desc: "Broader forces matter more than individuals — the conditions were ripe regardless." },
  { name: "Great Person Theorist", school: "Great person theory", direction: 1,
    desc: "Individual agency was decisive here — remove the person and the outcome changes." },
  { name: "Contingency Historian", school: "Contingency theory", direction: 1,
    desc: "Timing and accident shaped events — small changes could have produced very different results." },
  { name: "Marxist Analyst", school: "Marxist historiography", direction: -1,
    desc: "Material conditions and class dynamics drove the outcome — the individual was secondary." },
  { name: "Institutionalist", school: "Institutional analysis", direction: -1,
    desc: "Organizations and systems shaped events more than any single person." },
  { name: "Cultural Historian", school: "Cultural history", direction: 1,
    desc: "Ideas and cultural currents created a unique moment — not easily replicated." },
];

export const getHistorianVariance = (subjectId, playCount) => {
  // Deterministic but different each replay: hash subject ID + play number
  const seed = hashString(subjectId + "_replay_" + playCount);
  
  // Pick perspective based on seed
  const perspective = HISTORIAN_PERSPECTIVES[seed % HISTORIAN_PERSPECTIVES.length];
  
  // Generate variance: 3-8% shift in the perspective's direction
  const magnitude = 0.03 + ((seed >> 4) % 60) / 1000; // 0.03 to 0.089
  const shift = magnitude * perspective.direction;
  
  return {
    shift,            // Add to r (positive = more replaceable, negative = less)
    magnitude,
    perspective,
  };
};

// Apply variance to a subject's r value, clamped to valid range
export const applyHistorianVariance = (r, subjectId, playCount) => {
  if (playCount <= 1) return { adjustedR: r, variance: null };
  
  const variance = getHistorianVariance(subjectId, playCount);
  const adjustedR = Math.max(0.02, Math.min(0.98, r + variance.shift));
  
  return { adjustedR, variance };
};

// ─────────────────────────────────────────────────────────────────────────────
// CONNECTED FIGURES
