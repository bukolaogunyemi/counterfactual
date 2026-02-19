# CounterFactual — Module Architecture

Refactored from a single 16,700-line file into 23 focused modules.

## Directory Structure

```
counterfactual/
├── App.jsx                    # Main component — UI, state, screens (5,664 lines)
├── sounds.js                  # Web Audio API sound engine (111 lines)
├── categories.js              # CATS, CAT_ICONS, figInCat (28 lines)
├── helpers.js                 # toWeight, getLabel, formatYear, hashString, etc. (46 lines)
├── subjects.js                # ALL_SUBJECTS — combined + cascade-enriched (22 lines)
├── styles.js                  # globalCSS + inline style objects (241 lines)
│
├── api/                       # Vercel serverless functions
│   └── daily.js               # Community stats — real predictions via Vercel KV (153 lines)
│
├── data/                      # Pure data — no logic, no imports (9,550+ lines total)
│   ├── index.js               # Barrel re-export
│   ├── figures.js             # 100+ historical figures (3,657 lines)
│   ├── institutions.js        # 50 institutions (1,504 lines)
│   ├── inventions.js          # 50 inventions (954 lines)
│   ├── events.js              # Historical events (461 lines)
│   ├── cascadeData.js         # Cascade chains, timelines, modern-day impact (2,974 lines)
│   ├── compoundScenarios.js   # Multi-figure what-if scenarios (73 lines)
│   ├── collections.js         # Themed collections (113 lines)
│   ├── achievements.js        # Achievement definitions (67 lines)
│   ├── eras.js                # Era definitions (11 lines)
│   ├── streakMilestones.js    # Streak reward tiers (8 lines)
│   └── warmupTips.js          # New-player coaching tips (5 lines)
│
└── engine/                    # Game logic — scoring, patterns, daily, storage
    ├── index.js               # Barrel re-export
    ├── scoring.js             # Points, difficulty, ranks, conviction multiplier (114 lines)
    ├── interlude.js           # Pre-reveal stepped analysis phases (109 lines)
    ├── connections.js         # Related-figure linking (72 lines)
    ├── patterns.js            # Cognitive bias detection + recommendations (336 lines)
    ├── storage.js             # localStorage persistence (32 lines)
    └── daily.js               # Daily challenge, community stats, countdown (109 lines)
```

## Dependency Graph

```
data/* (pure data, no imports)
  ↓
subjects.js ← figures, institutions, inventions, events, cascadeData
  ↓
engine/scoring.js ← helpers
engine/interlude.js ← helpers
engine/connections.js ← subjects
engine/patterns.js ← subjects, helpers, scoring
engine/daily.js ← subjects, helpers
engine/storage.js (standalone)
  ↓
data/achievements.js ← subjects, categories, collections, scoring.getDifficulty
  ↓
App.jsx ← everything
```

No circular dependencies. Data flows one direction: raw data → subjects → engine → App.

## What Changed

**Refactor #1: Architecture** — One 16,700-line file becomes 23 focused modules.

**Refactor #2: Community Stats Honesty** — The old code faked community data using seeded RNG — "328 players," "Beat 85% of players" — all deterministic lies. Two players comparing notes would notice the numbers never change.

New approach:
- **`api/daily.js`** — Vercel serverless function that stores real anonymous daily predictions in Vercel KV (Redis). Deduplication via IP+UA fingerprint hash. Auto-expires after 48h.
- **`engine/daily.js`** — `fetchCommunityStats()` tries the real API first, falls back to model-based estimates. Three display modes:
  - **Real data** (≥5 submissions): Shows actual player count, real histogram, real percentile. Labeled plainly.
  - **Blended** (<5 real submissions): Combines real data with difficulty model. Labeled "X players + est."
  - **Model only** (no API): Shows difficulty-based distribution. Labeled "Est. distribution" and "Estimated ranking based on difficulty."
- **Share cards** say "Est. top X%" instead of "Beat X% of players" when using estimates.
- `totalPlayers` is `null` for model-only — no fake counts.

To enable real community data: `npm i @vercel/kv`, add KV storage in Vercel dashboard, deploy. The client gracefully falls back until then.

**After:**
- **Data files are pure JSON-like exports.** Content writers can edit `data/figures.js` without touching game logic. Adding a new figure is a single-file change.
- **Engine modules are testable in isolation.** `scoring.js` can be unit-tested without rendering any UI. Pattern detection can be validated against known histories.
- **App.jsx is UI only.** At 5,664 lines it's still large, but it's all component rendering and state management — one concern instead of seven.

## Migration Notes

- `import` paths use `.js` extensions for ESM compatibility
- Barrel files (`data/index.js`, `engine/index.js`) allow either granular or grouped imports
- No runtime behavior changed — this is a pure structural refactor
- App.jsx can be further split into screen components as a future step (would need React Context or state management to avoid prop-drilling 40+ state variables)
