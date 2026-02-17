import { ALL_SUBJECTS } from "../subjects.js";

export const fieldKeywords = (field) => field.toLowerCase().replace(/[&,]/g, ' ').split(/\s+/).filter(w => w.length > 2);

export const getConnectedFigures = (current, playedIds = [], count = 4) => {
  if (!current || current._isCustom) return [];

  const curKeys = fieldKeywords(current.field);
  const curBorn = current.born || 0;
  const curDied = current.died || (curBorn + 70);

  const scored = ALL_SUBJECTS
    .filter(s => s.id !== current.id)
    .map(s => {
      let score = 0;
      const sBorn = s.born || 0;
      const sDied = s.died || (sBorn + 70);

      // Same category: strong signal
      if (s.cat === current.cat) score += 4;

      // Field keyword overlap
      const sKeys = fieldKeywords(s.field);
      const overlap = curKeys.filter(k => sKeys.includes(k)).length;
      score += overlap * 3;

      // Contemporaries: lifetimes overlap
      if (sBorn <= curDied && sDied >= curBorn) score += 2;

      // Close era: born within 50 years
      if (Math.abs(sBorn - curBorn) < 50) score += 1;

      // Similar inevitability score (interesting comparison)
      if (Math.abs(s.r - current.r) < 0.12) score += 1;

      // Slight bias toward unplayed figures
      if (!playedIds.includes(s.id)) score += 1;

      // Break ties with a deterministic hash so results are stable
      const tiebreak = (hashString(current.id + s.id) % 100) / 1000;

      return { figure: s, score: score + tiebreak };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(s => s.figure);

  return scored;
};

// Connection label — why these figures are related
export const getConnectionLabel = (current, other) => {
  const sameCat = current.cat === other.cat;
  const curKeys = fieldKeywords(current.field);
  const otherKeys = fieldKeywords(other.field);
  const fieldOverlap = curKeys.some(k => otherKeys.includes(k));
  const curBorn = current.born || 0;
  const curDied = current.died || (curBorn + 70);
  const oBorn = other.born || 0;
  const oDied = other.died || (oBorn + 70);
  const contemporary = oBorn <= curDied && oDied >= curBorn;
  const similarR = Math.abs(other.r - current.r) < 0.12;

  if (fieldOverlap && contemporary) return "Same field, same era";
  if (fieldOverlap) return "Same field";
  if (sameCat && contemporary) return "Contemporary";
  if (sameCat && similarR) return "Similar weight";
  if (sameCat) return CATS[current.cat]?.label || "Related";
  if (contemporary) return "Same era";
  if (similarR) return "Similar score";
  return "Related";
};
