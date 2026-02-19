// Engine barrel — re-exports all engine modules
export {
  DIFFICULTY_MULTIPLIER, getScoreLabel, getDifficulty, calculatePoints,
  CONVICTION_MULT, getAccuracyFeedback, getDifficultyLabel, RANK_LADDER, getRank
} from './scoring.js';
export { getInterludePhases, getDirectionInsight, getTensionHook } from './interlude.js';
export { fieldKeywords, getConnectedFigures, getConnectionLabel } from './connections.js';
export { CATEGORY_HEURISTICS, CROSS_PATTERNS, getPatternInsights, getRecommendations } from './patterns.js';
export { saveProgress, loadProgress, saveHistory, loadHistory, saveCustomCache, loadCustomCache, exportAllData, importAllData, isStorageAvailable, hydrateFromPersistentStorage } from './storage.js';
export {
  DAILY_KEY, DAILY_LAUNCH, getTodayStr, getDayNumber, getDailyFigure,
  loadDailyState, saveDailyState, getTimeUntilNext, getYesterdayStr,
  generateCommunityStats, getDailyPercentile,
  submitDailyPrediction, fetchCommunityStats, generateModelEstimate
} from './daily.js';
