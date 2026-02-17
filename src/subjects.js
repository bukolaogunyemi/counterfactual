// ALL_SUBJECTS â€” deduplicated, cascade-enriched master list
import { FIGURES } from './data/figures.js';
import { INSTITUTIONS } from './data/institutions.js';
import { INVENTIONS } from './data/inventions.js';
import { EVENTS } from './data/events.js';
import { CASCADE_DATA } from './data/cascadeData.js';

export const ALL_SUBJECTS = (() => {
  const combined = [...FIGURES, ...INSTITUTIONS, ...INVENTIONS, ...EVENTS];
  const seen = new Set();
  const deduped = combined.filter(s => {
    if (seen.has(s.id)) return false;
    seen.add(s.id);
    return true;
  });
  // Enrich with cascade data
  return deduped.map(s => {
    const extra = CASCADE_DATA[s.id];
    if (extra) return { ...s, ...extra };
    return s;
  });
})();

