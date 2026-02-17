import { useState, useEffect, useRef } from "react";

// Sound engine
import { SFX } from "./sounds.js";

// Categories
import { CATS, CAT_ICONS, figInCat } from "./categories.js";

// Helpers
import { toWeight, getLabel, formatYear, formatLifespan, hashString, getConsistentScore, applyHistorianVariance } from "./helpers.js";

// Data
import { FIGURES } from "./data/figures.js";
import { INSTITUTIONS } from "./data/institutions.js";
import { INVENTIONS } from "./data/inventions.js";
import { EVENTS } from "./data/events.js";
import { CASCADE_DATA } from "./data/cascadeData.js";
import { COMPOUND_SCENARIOS } from "./data/compoundScenarios.js";
import { COLLECTIONS } from "./data/collections.js";
import { ACHIEVEMENTS } from "./data/achievements.js";
import { ERAS } from "./data/eras.js";
import { STREAK_MILESTONES } from "./data/streakMilestones.js";
import { WARMUP_TIPS } from "./data/warmupTips.js";

// Subjects (combined + enriched)
import { ALL_SUBJECTS } from "./subjects.js";

// Engine
import {
  DIFFICULTY_MULTIPLIER, getScoreLabel, getDifficulty, calculatePoints,
  CONVICTION_MULT, getAccuracyFeedback, getDifficultyLabel, RANK_LADDER, getRank
} from "./engine/scoring.js";
import { getInterludePhases, getDirectionInsight, getTensionHook } from "./engine/interlude.js";
// Inline connection logic to avoid module resolution issues
const fieldKeywords = (field) => field.toLowerCase().replace(/[&,]/g, ' ').split(/\s+/).filter(w => w.length > 2);
const getConnectedFigures = (current, playedIds = [], count = 4) => {
  try {
    if (!current || current._isCustom) return [];
    const curKeys = fieldKeywords(current.field);
    const curBorn = current.born || 0;
    const curDied = current.died || (curBorn + 70);
    return ALL_SUBJECTS
      .filter(s => s.id !== current.id)
      .map(s => {
        let score = 0;
        const sBorn = s.born || 0;
        const sDied = s.died || (sBorn + 70);
        if (s.cat === current.cat) score += 4;
        const sKeys = fieldKeywords(s.field);
        score += curKeys.filter(k => sKeys.includes(k)).length * 3;
        if (sBorn <= curDied && sDied >= curBorn) score += 2;
        if (Math.abs(sBorn - curBorn) < 50) score += 1;
        if (Math.abs(s.r - current.r) < 0.12) score += 1;
        if (!playedIds.includes(s.id)) score += 1;
        const tiebreak = (hashString(current.id + s.id) % 100) / 1000;
        return { figure: s, score: score + tiebreak };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, count)
      .map(s => s.figure);
  } catch (e) { return []; }
};
const getConnectionLabel = (current, other) => {
  try {
    const sameCat = current.cat === other.cat;
    const curKeys = fieldKeywords(current.field);
    const fieldOverlap = curKeys.some(k => fieldKeywords(other.field).includes(k));
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
  } catch (e) { return "Related"; }
};
import { CATEGORY_HEURISTICS, CROSS_PATTERNS, getPatternInsights, getRecommendations } from "./engine/patterns.js";
import { saveProgress, loadProgress, saveHistory, loadHistory, saveCustomCache, loadCustomCache, exportAllData, importAllData, isStorageAvailable, hydrateFromPersistentStorage } from "./engine/storage.js";
import {
  DAILY_KEY, DAILY_LAUNCH, getTodayStr, getDayNumber, getDailyFigure,
  loadDailyState, saveDailyState, getTimeUntilNext, getYesterdayStr,
  generateCommunityStats, getDailyPercentile,
  submitDailyPrediction, fetchCommunityStats
} from "./engine/daily.js";

// Styles
import { fontStack, sansStack, globalCSS, S } from "./styles.js";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeTab, setActiveTab] = useState("play"); // "play" | "browse" | "stats"
  const [subject, setSubject] = useState(null);
  const [prediction, setPrediction] = useState(0.5);
  const [lockingIn, setLockingIn] = useState(false);
  const gaugeRef = useRef(null);
  const lastZoneRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [played, setPlayed] = useState([]);
  const [customName, setCustomName] = useState("");
  const [customResult, setCustomResult] = useState(null);
  const [customLoading, setCustomLoading] = useState(false);
  const [customCache, setCustomCache] = useState({});
  const [filterCat, setFilterCat] = useState("all");
  const [challengeData, setChallengeData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [animateResult, setAnimateResult] = useState(false);
  const [revealPhase, setRevealPhase] = useState(0);
  const [animatedActual, setAnimatedActual] = useState(null);
  const [shakeActive, setShakeActive] = useState(false);
  const [cascadeStep, setCascadeStep] = useState(0);
  const [activeResultCard, setActiveResultCard] = useState(0);
  const [visitedResultCards, setVisitedResultCards] = useState({});
  const resultScrollRef = useRef(null);
  const celebCanvasRef = useRef(null);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [navHistory, setNavHistory] = useState([]);
  const [interludeStep, setInterludeStep] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [streakMilestone, setStreakMilestone] = useState(null);
  const [streakShields, setStreakShields] = useState(0);
  const [streakRewards, setStreakRewards] = useState([]); // earned reward IDs
  const [pointBoostRounds, setPointBoostRounds] = useState(0); // rounds of +10% remaining
  const [challengeMode, setChallengeMode] = useState(false); // hard figures only, 2× points
  const [sfxEnabled, setSfxEnabled] = useState(SFX.isEnabled());
  const [newAchievement, setNewAchievement] = useState(null);
  const prevEarnedRef = useRef(new Set());
  const [lastPts, setLastPts] = useState(0);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [onboardStep, setOnboardStep] = useState(0);
  const [onboardPred, setOnboardPred] = useState(50);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);
  const [dailyState, setDailyState] = useState(null);
  const [isDaily, setIsDaily] = useState(false);
  const [dailyCountdown, setDailyCountdown] = useState("");
  const [activeCollection, setActiveCollection] = useState(null);
  const [h2hMode, setH2hMode] = useState(null); // { figures, currentIndex, myPredictions, myPoints, opponent? }
  const [gameHistory, setGameHistory] = useState([]);
  const [activeEra, setActiveEra] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [shareModal, setShareModal] = useState(null); // { text, url, imageBlob, figureName }
  const [communityData, setCommunityData] = useState(null); // { avgGuess, totalPlayers, pctClose, buckets, maxBucket, isReal, sampleSize }
  const [debatePhase, setDebatePhase] = useState(null); // null | 'writing' | 'evaluating' | 'result'
  const [debateDirection, setDebateDirection] = useState(null); // 'higher' | 'lower'
  const [debateArgument, setDebateArgument] = useState("");
  const [debateResult, setDebateResult] = useState(null); // { score, grade, rebuttal, concessions }
  const [communityFigures, setCommunityFigures] = useState([]); // fetched list from API
  const [communityLoading, setCommunityLoading] = useState(false);
  const [communityAvailable, setCommunityAvailable] = useState(null); // null = unknown, true/false
  const [communitySort, setCommunitySort] = useState("top"); // "top" | "newest"

  const showToast = (msg, duration = 2500) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ msg, leaving: false });
    toastTimer.current = setTimeout(() => {
      setToast(prev => prev ? { ...prev, leaving: true } : null);
      setTimeout(() => setToast(null), 250);
    }, duration);
  };

  // Load progress and cache on mount
  useEffect(() => {
    // Warn if storage is unavailable (incognito, restricted, etc.)
    if (!isStorageAvailable()) {
      setTimeout(() => showToast("⚠️ Browser storage unavailable — progress won't be saved", 5000), 500);
    }

    const saved = loadProgress();
    if (saved) {
      setScore(saved.score || 0);
      setPlayed(saved.played || []);
      setStreak(saved.streak || 0);
      setBestStreak(saved.bestStreak || 0);
      setHasSeenIntro(saved.hasSeenIntro || false);
      setStreakShields(saved.streakShields || 0);
      setStreakRewards(saved.streakRewards || []);
      setPointBoostRounds(saved.pointBoostRounds || 0);
    }
    // Load and clean custom cache — purge stale entries from when API was broken
    const cached = loadCustomCache();
    const cleaned = {};
    Object.entries(cached).forEach(([key, val]) => {
      const isStale = val.contributions && val.contributions[0] === "Primary achievement";
      if (!isStale) cleaned[key] = val;
    });
    if (Object.keys(cleaned).length !== Object.keys(cached).length) saveCustomCache(cleaned);
    setCustomCache(cleaned);

    // Load game history
    setGameHistory(loadHistory());

    // Load daily challenge state
    const savedDaily = loadDailyState();
    const today = getTodayStr();
    if (savedDaily && savedDaily.date === today) {
      setDailyState(savedDaily);
    } else {
      // New day — calculate streak
      const prevStreak = savedDaily?.dailyStreak || 0;
      const lastDate = savedDaily?.lastCompletedDate;
      const yesterday = getYesterdayStr();
      const streakContinues = lastDate === yesterday;
      setDailyState({
        date: today,
        completed: false,
        prediction: null,
        figureId: null,
        points: 0,
        dailyStreak: streakContinues ? prevStreak : 0,
        lastCompletedDate: savedDaily?.lastCompletedDate || null,
      });
    }

    const params = new URLSearchParams(window.location.search);
    const challenge = params.get("c");
    if (challenge) {
      try {
        const decoded = JSON.parse(atob(challenge));
        setChallengeData(decoded);
        const subj = ALL_SUBJECTS.find(s => s.id === decoded.id);
        if (subj) {
          setSubject(subj);
          setScreen("predict");
        }
      } catch(e) {}
    }

    // Deep link: counterfactual.app/#figure-id
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (hash && !challenge) {
      if (hash === 'daily') {
        // Handled after state loads — just flag it
        window.__deepLinkDaily = true;
      } else {
        const fig = ALL_SUBJECTS.find(s => s.id === hash);
        if (fig) {
          setSubject(fig);
          setScreen("predict");
        }
      }
    }

    // Head-to-head challenge link
    const h2hParam = params.get("h2h");
    if (h2hParam) {
      try {
        const decoded = JSON.parse(atob(h2hParam));
        if (decoded.figs && decoded.figs.length > 0) {
          const figObjects = decoded.figs.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);
          if (figObjects.length === decoded.figs.length) {
            setH2hMode({
              figures: figObjects,
              currentIndex: 0,
              myPredictions: [],
              myPoints: [],
              opponentName: decoded.name || "Challenger",
              opponentPredictions: decoded.preds || [],
              opponentPoints: decoded.pts || [],
            });
            setScreen("h2h_lobby");
          }
        }
        // Clean URL
        window.history.replaceState({}, "", window.location.pathname);
      } catch(e) {}
    }

    // Async hydration: if localStorage was empty, try recovering from persistent storage
    hydrateFromPersistentStorage().then(result => {
      if (result.hydrated) {
        // Re-read state from the now-populated localStorage/memory
        const restored = loadProgress();
        if (restored) {
          setScore(restored.score || 0);
          setPlayed(restored.played || []);
          setStreak(restored.streak || 0);
          setBestStreak(restored.bestStreak || 0);
          setHasSeenIntro(restored.hasSeenIntro || false);
          setStreakShields(restored.streakShields || 0);
          setStreakRewards(restored.streakRewards || []);
          setPointBoostRounds(restored.pointBoostRounds || 0);
        }
        setCustomCache(loadCustomCache());
        setGameHistory(loadHistory());
        showToast(`☁️ Recovered ${result.recovered} saved data from cloud storage`, 3500);
      }
    }).catch(() => {}); // Silent failure — hydration is best-effort
  }, []);

  // Handle daily deep link after state loads
  useEffect(() => {
    if (window.__deepLinkDaily && dailyState && !dailyState.completed) {
      delete window.__deepLinkDaily;
      startDaily();
    }
  }, [dailyState]);

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Daily countdown timer
  useEffect(() => {
    if (!dailyState?.completed) return;
    const update = () => setDailyCountdown(getTimeUntilNext());
    update();
    const interval = setInterval(update, 60000); // update every minute
    return () => clearInterval(interval);
  }, [dailyState?.completed]);

  // Save progress
  useEffect(() => {
    if (played.length > 0) saveProgress({ score, played, streak, bestStreak, hasSeenIntro, streakShields, streakRewards, pointBoostRounds });
  }, [score, played, streak, bestStreak, hasSeenIntro, streakShields, streakRewards, pointBoostRounds]);

  // Trigger result animation
  useEffect(() => {
    if (screen === "result") {
      setAnimateResult(false);
      requestAnimationFrame(() => setAnimateResult(true));
    }
  }, [screen]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const startRandom = () => {
    SFX.click();
    setLockingIn(false);
    lastZoneRef.current = null;
    const unplayed = ALL_SUBJECTS.filter(s => !played.includes(s.id));
    if (unplayed.length === 0) {
      showToast("🔄 All subjects played! Resetting for another round...");
      setPlayed([]);
      setScore(0);
      setStreak(0);
      return;
    }
    setNavHistory(prev => [...prev, screen]);

    // Challenge mode: only hard figures
    if (challengeMode) {
      const hardOnly = unplayed.filter(s => getDifficulty(s.r) >= 0.25);
      if (hardOnly.length === 0) {
        showToast("No hard entries left! Turning off Challenge Mode.");
        setChallengeMode(false);
      } else {
        const pick = hardOnly[Math.floor(Math.random() * hardOnly.length)];
        setSubject(pick);
        setPrediction(0.5);
        setRevealed(false);
        setStreakMilestone(null);
        setScreen("predict");
        scrollTop();
        return;
      }
    }

    // Difficulty progression: weights shift as player gains experience
    const n = played.length;
    const hard = unplayed.filter(s => getDifficulty(s.r) >= 0.30);
    const medium = unplayed.filter(s => { const d = getDifficulty(s.r); return d >= 0.15 && d < 0.30; });
    const easy = unplayed.filter(s => getDifficulty(s.r) < 0.15);

    // Warm-up: first 3 games always easy
    if (n < 3 && easy.length > 0) {
      const pick = easy[Math.floor(Math.random() * easy.length)];
      setSubject(pick);
      setPrediction(0.5);
      setRevealed(false);
      setStreakMilestone(null);
      setScreen("predict");
      scrollTop();
      return;
    }

    // Standard progression
    let wHard, wMed;
    if (n < 5) { wHard = 0.10; wMed = 0.30; }       // 60% easy
    else if (n < 15) { wHard = 0.25; wMed = 0.40; }  // 35% easy
    else if (n < 30) { wHard = 0.35; wMed = 0.35; }  // 30% easy
    else { wHard = 0.45; wMed = 0.35; }               // 20% easy — full mix
    const roll = Math.random();
    let pool;
    if (roll < wHard && hard.length > 0) pool = hard;
    else if (roll < wHard + wMed && medium.length > 0) pool = medium;
    else if (easy.length > 0) pool = easy;
    else pool = unplayed;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSubject(pick);
    setPrediction(0.5);
    setRevealed(false);
    setStreakMilestone(null);
    setScreen("predict");
    scrollTop();
  };

  const selectSubject = (s) => {
    SFX.click();
    setNavHistory(prev => [...prev, screen]);
    setSubject(s);
    setPrediction(0.5);
    setLockingIn(false);
    lastZoneRef.current = null;
    setRevealed(false);
    setIsDaily(false);
    setStreakMilestone(null);
    setCascadeStep(0);
    setDebatePhase(null); setDebateDirection(null); setDebateArgument(""); setDebateResult(null);
    setScreen("predict");
    if (s.id && !s._isCustom) window.history.replaceState({}, '', `#${s.id}`);
    scrollTop();
  };

  const startDaily = () => {
    if (dailyState?.completed) return;
    setNavHistory(prev => [...prev, screen]);
    const fig = getDailyFigure();
    setSubject(fig);
    setPrediction(0.5);
    setLockingIn(false);
    lastZoneRef.current = null;
    setRevealed(false);
    setIsDaily(true);
    setStreakMilestone(null);
    setScreen("predict");
    window.history.replaceState({}, '', '#daily');
    scrollTop();
  };

  const submitPrediction = () => {
    SFX.lock();
    setRevealed(true);
    const r = subject.r ?? subject._r;
    const w = toWeight(r);
    const diff = Math.abs(prediction - w);
    let basePts = calculatePoints(diff);
    const isReplay = played.includes(subject.id);

    // Only award points and track on first play
    if (!isReplay) {
      // --- Conviction multiplier (penalizes 50% hedge, rewards bold calls) ---
      const convMult = CONVICTION_MULT(prediction);
      let finalPts = Math.round(basePts * convMult.mult);

      // --- Difficulty multiplier ---
      const diffMult = DIFFICULTY_MULTIPLIER(r);
      finalPts = Math.round(finalPts * diffMult.mult);

      // Challenge mode: 2× all points
      if (challengeMode) finalPts = Math.round(finalPts * 2);

      // Point boost (earned at streak 15): +10% for limited rounds
      if (pointBoostRounds > 0) {
        finalPts = Math.round(finalPts * 1.10);
        setPointBoostRounds(prev => prev - 1);
      }

      let bonusPts = 0;
      setScore(prev => prev + finalPts);
      setPlayed(prev => [...prev, subject.id]);

      // Streak: within 15% counts as "good"
      if (diff < 0.15) {
        setStreak(prev => {
          const next = prev + 1;
          setBestStreak(best => Math.max(best, next));
          // Check if we just crossed a milestone
          const milestone = STREAK_MILESTONES.find(m => m.at === next);
          if (milestone) {
            setStreakMilestone(milestone);
            bonusPts = milestone.bonus;
            setScore(s => s + bonusPts);
            setTimeout(() => SFX.milestone(), 300);
            // Grant streak reward
            if (milestone.reward && !streakRewards.includes(milestone.reward)) {
              setStreakRewards(prev => [...prev, milestone.reward]);
              // Special reward effects
              if (milestone.reward === "streak_shield" || milestone.reward === "streak_shield_2") {
                setStreakShields(prev => prev + 1);
              }
              if (milestone.reward === "point_boost") {
                setPointBoostRounds(5);
              }
            }
          } else {
            setStreakMilestone(null);
          }
          return next;
        });
      } else {
        // Streak broken — but check for streak shield
        if (streakShields > 0 && streak >= 3) {
          // Shield consumed — streak preserved!
          setStreakShields(prev => prev - 1);
          setStreakMilestone({ at: streak, bonus: 0, emoji: "🛡️", label: "Streak Shield activated!", reward: "shield_used", rewardLabel: `Shield saved your ${streak}-round streak` });
          setTimeout(() => SFX.milestone(), 200);
        } else {
          setStreak(0);
          setStreakMilestone(null);
        }
      }

      // Store the final computed points for display (replacing raw basePts)
      basePts = finalPts;
    }

    // Save daily challenge result
    if (isDaily && dailyState && !dailyState.completed) {
      const today = getTodayStr();
      const newDailyStreak = (dailyState.dailyStreak || 0) + 1;
      const newDailyState = {
        ...dailyState,
        date: today,
        completed: true,
        prediction,
        figureId: subject.id,
        points: basePts,
        dailyStreak: newDailyStreak,
        lastCompletedDate: today,
      };
      setDailyState(newDailyState);
      saveDailyState(newDailyState);

      // Submit to real community stats API (fire-and-forget)
      submitDailyPrediction(prediction, subject.id, basePts, diff);

      // Fetch community stats for the result screen
      const figR = subject.r ?? subject._r ?? 0.5;
      fetchCommunityStats(figR).then(data => setCommunityData(data));
    }

    // Record H2H result
    if (h2hMode) {
      setH2hMode(prev => ({
        ...prev,
        myPredictions: [...prev.myPredictions, Math.round(prediction * 100)],
        myPoints: [...prev.myPoints, basePts],
      }));
    }

    // Record game history
    if (!isReplay) {
      const entry = {
        id: subject.id || subject.name,
        name: subject.name,
        cat: subject.cat,
        r: Math.round(w * 100),
        pred: Math.round(prediction * 100),
        pts: basePts,
        diff: Math.round(diff * 100),
        ts: Date.now(),
      };
      setGameHistory(prev => {
        const updated = [...prev, entry];
        saveHistory(updated);
        return updated;
      });
    }

    setLastPts(isReplay ? 0 : basePts);
    setInterludeStep(0);
    setScreen("interlude");
    scrollTop();
  };

  // Detect newly earned achievements after each game
  useEffect(() => {
    if (played.length === 0) return;
    const currentEarned = new Set(
      ACHIEVEMENTS.filter(a => a.check(gameHistory, played, dailyState, streakRewards)).map(a => a.id)
    );
    const prev = prevEarnedRef.current;
    // Find achievements that are new since last check
    const fresh = ACHIEVEMENTS.filter(a => currentEarned.has(a.id) && !prev.has(a.id));
    if (fresh.length > 0) {
      // Show the most recent one (last in the list = harder = more impressive)
      const show = fresh[fresh.length - 1];
      setNewAchievement(show);
      SFX.achievement();
      showToast(`🏅 Achievement: ${show.title} — ${show.desc}`);
      setTimeout(() => setNewAchievement(null), 5000);
    }
    prevEarnedRef.current = currentEarned;
  }, [played.length, gameHistory.length]);

  // Initialize prevEarnedRef on mount
  useEffect(() => {
    prevEarnedRef.current = new Set(
      ACHIEVEMENTS.filter(a => a.check(gameHistory, played, dailyState, streakRewards)).map(a => a.id)
    );
  }, []);

  // Interlude timer — cycle through steps, then reveal
  useEffect(() => {
    if (screen !== "interlude" || !subject) return;
    const phases = getInterludePhases(subject, prediction);
    const totalSteps = phases.length;
    const stepDuration = 1200; // 1.2s per step — slightly longer for reading
    const timer = setInterval(() => {
      setInterludeStep(prev => {
        if (prev >= totalSteps) {
          clearInterval(timer);
          SFX.reveal(lastPts);
          setRevealPhase(0);
          setScreen("result");
          scrollTop();
          return prev;
        }
        SFX.interludeStep(prev);
        return prev + 1;
      });
    }, stepDuration);
    return () => clearInterval(timer);
  }, [screen, lastPts]);

  // ─── Celebration canvas drawing ───
  const fireCelebration = (canvas, type) => {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.scale(dpr, dpr);

    const particles = [];
    const cx = W / 2;
    const cy = type === "confetti" ? 0 : H * 0.35;
    const count = type === "confetti" ? 80 : type === "burst" ? 40 : 20;

    const colors = type === "confetti"
      ? ["#6d28d9", "#d97706", "#dc2626", "#15803d", "#2563eb", "#f59e0b", "#ec4899"]
      : type === "burst"
        ? ["#6d28d9", "#a855f7", "#f59e0b", "#fbbf24", "#fff"]
        : ["#fbbf24", "#fde68a", "#fff", "#f59e0b"];

    for (let i = 0; i < count; i++) {
      const angle = type === "confetti"
        ? (Math.PI * 0.2) + Math.random() * (Math.PI * 0.6)
        : Math.random() * Math.PI * 2;
      const speed = type === "confetti"
        ? 2 + Math.random() * 6
        : type === "burst"
          ? 3 + Math.random() * 8
          : 1.5 + Math.random() * 4;
      particles.push({
        x: type === "confetti" ? Math.random() * W : cx,
        y: cy,
        vx: Math.cos(angle) * speed * (type === "confetti" ? (Math.random() - 0.5) * 2 : 1),
        vy: type === "confetti" ? 1 + Math.random() * 3 : Math.sin(angle) * speed - 2,
        size: type === "confetti" ? 4 + Math.random() * 4 : 2 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: 0.012 + Math.random() * 0.015,
        gravity: type === "confetti" ? 0.08 : 0.12,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        shape: type === "confetti" ? (Math.random() > 0.5 ? "rect" : "circle") : "circle",
        w: 3 + Math.random() * 5,
        h: 6 + Math.random() * 4,
      });
    }

    let frame = 0;
    const maxFrames = type === "confetti" ? 150 : 90;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      let alive = 0;
      for (const p of particles) {
        if (p.alpha <= 0) continue;
        alive++;
        p.x += p.vx;
        p.vy += p.gravity;
        p.y += p.vy;
        p.vx *= 0.99;
        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;
        if (p.alpha <= 0) continue;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillStyle = p.color;
        if (p.shape === "rect") {
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      frame++;
      if (alive > 0 && frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, W, H);
      }
    };
    requestAnimationFrame(animate);
  };

  // Progressive reveal — horizontal result cards + celebrations
  useEffect(() => {
    if (screen !== "result") return;
    setActiveResultCard(0);
    setVisitedResultCards({ 0: true });
    setAnimatedActual(null);
    setShakeActive(false);
    setRevealPhase(0);

    // Phase 1: start number countdown
    const t1 = setTimeout(() => {
      setRevealPhase(1);
      // Animated number countdown from prediction to actual
      const sub = subject;
      if (!sub) return;
      const actW = toWeight(sub.r ?? sub._r ?? 0.5);
      const predPct = Math.round(prediction * 100);
      const actPct = Math.round(actW * 100);
      const startTime = performance.now();
      const duration = 800;
      const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOutQuad
      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = ease(progress);
        const current = Math.round(predPct + (actPct - predPct) * eased);
        setAnimatedActual(current);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          // Countdown complete — fire celebrations
          setAnimatedActual(actPct);
          const d = Math.abs(prediction - actW);
          const p = lastPts;
          // Screen shake on big miss
          if (d > 0.24) {
            setShakeActive(true);
            setTimeout(() => setShakeActive(false), 500);
          }
          // Canvas celebrations
          const canvas = celebCanvasRef.current;
          if (canvas && p > 0) {
            if (p >= 81) fireCelebration(canvas, "confetti");
            else if (p >= 49) fireCelebration(canvas, "burst");
            else fireCelebration(canvas, "sparkle");
          }
        }
      };
      requestAnimationFrame(tick);
    }, 600);

    // Phase 2: streak badge
    const t2 = setTimeout(() => setRevealPhase(2), 1800);

    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [screen]);

  // Track horizontal scroll position for result cards
  useEffect(() => {
    const el = resultScrollRef.current;
    if (!el || screen !== "result") return;
    const handler = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveResultCard(prev => {
        if (idx !== prev && idx >= 0) {
          setVisitedResultCards(v => ({ ...v, [idx]: true }));
          return idx;
        }
        return prev;
      });
    };
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [screen]);

  // Keyboard arrow navigation for result cards
  useEffect(() => {
    if (screen !== "result") return;
    const handler = (e) => {
      const el = resultScrollRef.current;
      if (!el) return;
      const cardW = el.clientWidth;
      if (cardW <= 0) return;
      const currentIdx = Math.round(el.scrollLeft / cardW);
      const maxIdx = Math.round(el.scrollWidth / cardW) - 1;
      let targetIdx = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        targetIdx = Math.min(currentIdx + 1, maxIdx);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        targetIdx = Math.max(currentIdx - 1, 0);
      }
      if (targetIdx !== null && targetIdx !== currentIdx) {
        e.preventDefault();
        el.scrollTo({ left: targetIdx * cardW, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [screen]);

  const handleCustomSubmit = async () => {
    if (!customName.trim()) return;
    const cacheKey = customName.toLowerCase().trim().replace(/\s+/g, ' ');

    // Check existing database
    const existing = ALL_SUBJECTS.find(s => s.name.toLowerCase() === cacheKey);
    if (existing) {
      setSubject(existing);
      setPrediction(0.5);
      setRevealed(false);
      setScreen("predict");
      setCustomName("");
      scrollTop();
      return;
    }

    // Check cache (validate entry has real data, not stale fallback)
    const cached = customCache[cacheKey];
    const isValidCache = cached &&
      cached.contributions && cached.contributions[0] !== "Primary achievement" &&
      cached.reasoning && !cached.reasoning.startsWith("Analysis of") &&
      cached.quote;
    if (isValidCache) {
      setCustomResult(cached);
      setScreen("custom_confirm");
      scrollTop();
      return;
    }

    setCustomLoading(true);

    const apiBody = JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 3000,
      messages: [{
        role: "user",
        content: `Analyze the historical inevitability of "${customName}". The question: if this never existed or never happened, would history have found another way to the same outcome? Return ONLY valid JSON — no markdown, no backticks, no preamble — using this exact structure:
{
  "name": "Full proper name",
  "born": year as number (negative for BCE, null if unknown),
  "died": year as number or null if alive/unknown,
  "field": "Primary field, 2-4 words",
  "cat": "one of: science, politics, military, arts, philosophy, medicine, computing, finance, exploration, social, sports, events, institutions, inventions",
  "cat2": "optional secondary category from the same list above, or null if it fits cleanly in one category",
  "quote": "A famous quote by or about them",
  "contributions": ["contribution 1", "contribution 2", "contribution 3", "contribution 4"],
  "r": inevitability score 0.0 to 1.0 (0=singular, nothing else could have produced this outcome; 1=highly inevitable, multiple paths converging — consider contemporaries, timing, convergent forces). We display this as "historical weight" (inverted: weight = 1 - r),
  "reasoning": "2-3 sentences explaining the score. Name specific contemporaries or alternatives.",
  "counterfactual": "3-4 sentences: what does the world look like without this? Be concrete and specific.",

  "impact": {
    "lives": "How many lives affected and how",
    "econ": "Economic impact with dollar figure if applicable",
    "cultural": "Cultural or intellectual legacy",
    "reach": "Geographic or demographic reach",
    "timeline": "How long until the same outcome arrives another way"
  },
  "timeline": [
    {"year": number, "happened": "What actually happened", "alternate": "What would have happened without this"},
    {"year": number, "happened": "...", "alternate": "..."},
    {"year": number, "happened": "...", "alternate": "..."},
    {"year": number, "happened": "...", "alternate": "..."}
  ],
  "cascade": [
    {"event": "First domino — what doesn't happen", "consequence": "What follows from that absence, 1-2 sentences", "delay": "Immediate or ~X years", "severity": "high/medium/low", "icon": "single emoji"},
    {"event": "Second domino", "consequence": "...", "delay": "...", "severity": "...", "icon": "emoji"},
    {"event": "Third domino", "consequence": "...", "delay": "...", "severity": "...", "icon": "emoji"},
    {"event": "Fourth domino", "consequence": "...", "delay": "...", "severity": "...", "icon": "emoji"}
  ],
  "modernDay": {
    "tech": "How technology in 2026 differs without this (1-2 sentences)",
    "culture": "How culture in 2026 differs (1-2 sentences)",
    "politics": "How politics in 2026 differs (1-2 sentences)",
    "daily": "What you'd notice differently in daily life (1-2 sentences)"
  }
}

Be historically precise. The cascade should show a chain reaction where each domino triggers the next — cause and effect flowing through decades. The modernDay section should describe concrete, specific differences you'd notice in 2026. The inevitability score should reflect genuine counterfactual analysis.`
      }],
    });

    // Try serverless proxy first, fall back to direct API (works in artifact preview)
    const tryFetch = async (url, opts) => {
      const res = await fetch(url, opts);
      if (!res.ok) {
        const errBody = await res.text().catch(() => "");
        throw new Error(`${res.status}: ${errBody.slice(0, 200)}`);
      }
      return res.json();
    };

    try {
      let data;
      try {
        // Primary: Vercel serverless proxy (production)
        data = await tryFetch("/api/claude", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: apiBody,
        });
      } catch (proxyErr) {
        console.warn("Proxy failed, trying direct API:", proxyErr.message);
        // Fallback: direct Anthropic API (works in Claude artifact environment)
        data = await tryFetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: apiBody,
        });
      }

      const text = data.content.map(i => i.text || "").join("");
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);

      const hashScore = getConsistentScore(customName);
      parsed.r = Math.round(((parsed.r + hashScore) / 2) * 100) / 100;
      parsed._r = parsed.r;
      parsed.id = "custom_" + cacheKey.replace(/\s/g, '_');
      parsed._isCustom = true;

      const newCache = { ...customCache, [cacheKey]: parsed };
      setCustomCache(newCache);
      saveCustomCache(newCache);
      setCustomResult(parsed);
      setScreen("custom_confirm");
    } catch (err) {
      console.error("Custom figure error:", err);
      showToast("Analysis failed — check the debug steps below", 4000);
    }

    setCustomLoading(false);
    scrollTop();
  };

  // ─── DEBATE MODE: Evaluate player's counterargument ─────────────────────────
  const submitDebate = async () => {
    if (!debateArgument.trim() || debateArgument.trim().length < 20) {
      showToast("Write at least a few sentences to make your case", 3000);
      return;
    }
    setDebatePhase("evaluating");
    SFX.lock();

    const actualPct = Math.round(toWeight(subject.r ?? subject._r) * 100);
    const dirLabel = debateDirection === "higher" ? "higher (more irreplaceable)" : "lower (more replaceable)";

    const apiBody = JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 600,
      messages: [{
        role: "user",
        content: `You are a history professor evaluating a student's counterargument in a counterfactual history game.

CONTEXT:
- Subject: ${subject.name} (${subject.field || subject.cat})
- The game scored this figure's "historical weight" (how irreplaceable they were) at ${actualPct}%.
- The game's reasoning: "${subject.reasoning}"
- The student argues the score should be ${dirLabel}.

STUDENT'S ARGUMENT:
"${debateArgument.trim()}"

EVALUATE this argument. Respond in JSON only (no markdown, no backticks):
{
  "score": <0-100 integer, how strong the argument is>,
  "grade": "<A+/A/B+/B/C+/C/D/F>",
  "concessions": "<1-2 sentences: what the student got RIGHT, specific points you'd grant>",
  "rebuttal": "<2-3 sentences: where the argument breaks down or what it misses, be specific and educational>",
  "adjustedWeight": <if the argument is strong enough (score >= 70), what you'd adjust the weight to, otherwise null>
}`
      }],
    });

    const tryFetch = async (url, opts) => {
      const res = await fetch(url, opts);
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    };

    try {
      let data;
      try {
        data = await tryFetch("/api/claude", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: apiBody,
        });
      } catch {
        data = await tryFetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: apiBody,
        });
      }

      const text = data.content.map(i => i.text || "").join("");
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);

      setDebateResult(parsed);
      setDebatePhase("result");

      // Track debate in game history
      const debateEntry = {
        id: subject.id,
        name: subject.name,
        type: "debate",
        direction: debateDirection,
        argumentLength: debateArgument.trim().length,
        score: parsed.score,
        grade: parsed.grade,
        timestamp: Date.now(),
      };
      const updatedHistory = [...gameHistory, debateEntry];
      setGameHistory(updatedHistory);
      saveHistory(updatedHistory);

      if (parsed.score >= 80) {
        showToast(`🏆 ${parsed.grade} — outstanding argument!`, 3000);
      } else if (parsed.score >= 60) {
        showToast(`📝 ${parsed.grade} — solid reasoning`, 3000);
      }
    } catch (err) {
      console.error("Debate evaluation error:", err);
      showToast("Couldn't evaluate your argument — try again", 3000);
      setDebatePhase("writing");
    }
  };

  // ─── COMMUNITY FIGURES API ───────────────────────────────────────────────
  const COMMUNITY_API = "/api/community";
  const communityFetch = async (url, opts) => {
    try {
      const res = await fetch(url, opts);
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    } catch (e) {
      return { available: false, reason: "fetch_error" };
    }
  };

  const fetchCommunityFigures = async (sort = communitySort) => {
    setCommunityLoading(true);
    const data = await communityFetch(
      `${COMMUNITY_API}?sort=${sort === "newest" ? "newest" : "top"}&limit=20`
    );
    if (data.available !== false) {
      setCommunityAvailable(true);
      setCommunityFigures(data.figures || []);
    } else {
      setCommunityAvailable(false);
    }
    setCommunityLoading(false);
  };

  const submitToCommunity = async (figure, submitterName) => {
    const data = await communityFetch(COMMUNITY_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "submit", figure, submitterName }),
    });
    if (data.accepted) {
      showToast("🌍 Shared with the community!", 3000);
      fetchCommunityFigures(); // refresh list
    } else if (data.reason === "rate_limited") {
      showToast("Slow down — max 5 submissions per day", 3000);
    } else {
      showToast("Couldn't submit — try again later", 3000);
    }
    return data;
  };

  const voteCommunityFigure = async (figureId, direction) => {
    SFX.click();
    const data = await communityFetch(COMMUNITY_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "vote", figureId, direction }),
    });
    if (data.accepted) {
      // Optimistic update
      setCommunityFigures(prev => prev.map(f =>
        f.id === figureId
          ? { ...f, votes: data.newVotes, userVote: direction }
          : f
      ));
    } else if (data.reason === "already_voted") {
      showToast("You've already voted on this one", 2000);
    }
  };

  const playCommunityFigure = (entry) => {
    const fig = {
      ...entry.figure,
      id: entry.id,
      _isCustom: true,
      _isCommunity: true,
      _communityVotes: entry.votes,
      _communitySubmitter: entry.submitterName,
    };
    // Track the play (fire-and-forget)
    communityFetch(COMMUNITY_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "play", figureId: entry.id }),
    });
    selectSubject(fig);
  };

  const confirmCustomFigure = () => {
    setSubject(customResult);
    setPrediction(0.5);
    setRevealed(false);
    setScreen("predict");
    setCustomName("");
    scrollTop();
  };

  const rejectCustomFigure = () => {
    setCustomResult(null);
    setScreen("home");
    setCustomName("");
    scrollTop();
  };

  const goHome = () => {
    setScreen("home");
    setActiveTab("play");
    setSubject(null);
    setRevealed(false);
    setCustomResult(null);
    setCustomName("");
    setChallengeData(null);
    setIsDaily(false);
    setSelectedScenario(null);
    setActiveCollection(null);
    setActiveEra(null);
    setActiveCategory(null);
    setSearchQuery("");
    setH2hMode(null);
    setCommunityData(null);
    setNavHistory([]);
    window.history.replaceState({}, '', window.location.pathname + window.location.search);
    scrollTop();
  };

  const goBack = () => {
    const history = [...navHistory];
    let target = null;
    while (history.length > 0) {
      const prev = history.pop();
      // Skip game-flow screens — go back to the selection screen
      if (prev !== "predict" && prev !== "interlude" && prev !== "result") {
        target = prev;
        break;
      }
    }
    if (!target) { goHome(); return; }
    setNavHistory(history);
    setSubject(null);
    setRevealed(false);
    setCascadeStep(0);
    // Map target to correct tab
    const BROWSE_SCREENS = ["category", "era", "collection", "scenario"];
    if (target === "home") {
      setScreen("home");
      // Keep current tab when returning to home
    } else if (BROWSE_SCREENS.includes(target)) {
      setScreen(target);
      setActiveTab("browse");
    } else if (target === "stats") {
      setScreen(target);
      setActiveTab("stats");
    } else {
      setScreen(target);
    }
    window.history.replaceState({}, '', window.location.pathname + window.location.search);
    scrollTop();
  };

  // Navigate to browse root
  const goToBrowse = () => {
    setScreen("home");
    setActiveTab("browse");
    setActiveCategory(null);
    setActiveEra(null);
    setActiveCollection(null);
    setSelectedScenario(null);
    setSearchQuery("");
    window.history.replaceState({}, '', window.location.pathname + window.location.search);
    scrollTop();
  };

  // ─────────────────────────────────────────────────────────────────────────
  // HEAD-TO-HEAD FUNCTIONS
  // ─────────────────────────────────────────────────────────────────────────
  const startH2H = () => {
    const unplayed = ALL_SUBJECTS.filter(s => !played.includes(s.id) && !s._isCustom);
    const pool = unplayed.length >= 5 ? unplayed : ALL_SUBJECTS.filter(s => !s._isCustom);
    // Pick 5 figures with varied difficulty
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const hard = shuffled.filter(s => getDifficulty(s.r) >= 0.25);
    const med = shuffled.filter(s => { const d = getDifficulty(s.r); return d >= 0.10 && d < 0.25; });
    const easy = shuffled.filter(s => getDifficulty(s.r) < 0.10);
    const picks = [];
    if (hard.length > 0) picks.push(hard[0]);
    if (easy.length > 0) picks.push(easy[0]);
    // Fill remaining from shuffled pool, avoiding duplicates
    for (const s of shuffled) {
      if (picks.length >= 5) break;
      if (!picks.find(p => p.id === s.id)) picks.push(s);
    }

    setH2hMode({
      figures: picks.slice(0, 5),
      currentIndex: 0,
      myPredictions: [],
      myPoints: [],
      opponentName: null,
      opponentPredictions: null,
      opponentPoints: null,
    });
    const first = picks[0];
    setSubject(first);
    setPrediction(0.5);
    setRevealed(false);
    setStreakMilestone(null);
    setScreen("predict");
    scrollTop();
  };

  const h2hAdvance = () => {
    if (!h2hMode) return;
    const nextIdx = h2hMode.currentIndex + 1;
    if (nextIdx >= h2hMode.figures.length) {
      // All done — show summary
      setScreen("h2h_summary");
      scrollTop();
      return;
    }
    setH2hMode(prev => ({ ...prev, currentIndex: nextIdx }));
    const nextFig = h2hMode.figures[nextIdx];
    setSubject(nextFig);
    setPrediction(0.5);
    setRevealed(false);
    setStreakMilestone(null);
    setScreen("predict");
    scrollTop();
  };

  const generateH2HLink = () => {
    if (!h2hMode) return "";
    const data = {
      figs: h2hMode.figures.map(f => f.id),
      name: "A challenger",
      preds: h2hMode.myPredictions,
      pts: h2hMode.myPoints,
    };
    return `${window.location.origin}?h2h=${btoa(JSON.stringify(data))}`;
  };

  const shareH2H = async () => {
    const myTotal = h2hMode.myPoints.reduce((a, b) => a + b, 0);
    const hasOpponent = h2hMode.opponentPoints && h2hMode.opponentPoints.length > 0;
    let text;

    if (hasOpponent) {
      const oppTotal = h2hMode.opponentPoints.reduce((a, b) => a + b, 0);
      const won = myTotal > oppTotal;
      const tied = myTotal === oppTotal;
      text = `⚔️ Counterfactual Head-to-Head\n\n${won ? "Victory!" : tied ? "Tied!" : "Defeated!"} ${myTotal} vs ${oppTotal} against ${h2hMode.opponentName}.\n\nhttps://counterfactual.app`;
    } else {
      const url = generateH2HLink();
      text = `⚔️ Counterfactual Head-to-Head\n\nI scored ${myTotal} points across 5 figures. Think you can beat me?\n\n${url}`;
    }

    try {
      if (navigator.share) {
        await navigator.share({ title: "Counterfactual Head-to-Head Challenge", text });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        showToast("⚔️ Challenge link copied!");
      }
    } catch(e) {
      try { await navigator.clipboard.writeText(text); showToast("⚔️ Copied!"); } catch(e2) {}
    }
  };

  // Generate a visual share card using Canvas API
  const generateShareCard = async () => {
    const r = subject.r ?? subject._r;
    const w = toWeight(r);
    const diff = Math.abs(prediction - w);
    const pts = calculatePoints(diff);
    const userPct = Math.round(prediction * 100);
    const actualPct = Math.round(w * 100);
    const userLabel = getScoreLabel(prediction, subject);
    const actualLabel = getScoreLabel(w, subject);
    const dayNum = isDaily ? getDayNumber() : null;
    const percentile = isDaily ? getDailyPercentile(diff, r) : null;

    // Extract counterfactual hook (first sentence, trimmed)
    const cfRaw = subject.counterfactual || "";
    const cfFirst = cfRaw.match(/^[^.!?]+[.!?]+/)?.[0]?.trim() || "";

    const W = 1080, H = 1080;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    // Background — warm dark gradient
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#1a1a18");
    bg.addColorStop(0.5, "#222220");
    bg.addColorStop(1, "#1a1a18");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Subtle grid lines for texture
    ctx.strokeStyle = "rgba(255,255,255,0.02)";
    ctx.lineWidth = 1;
    for (let i = 0; i < W; i += 60) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke();
    }

    // Accent line at top
    const topLine = ctx.createLinearGradient(0, 0, W, 0);
    topLine.addColorStop(0, "#15803d");
    topLine.addColorStop(0.4, "#d97706");
    topLine.addColorStop(0.65, "#c2410c");
    topLine.addColorStop(1, "#b91c1c");
    ctx.fillStyle = topLine;
    ctx.fillRect(0, 0, W, 6);

    // Helper: draw centered text
    const centerText = (text, y, font, color, maxWidth) => {
      ctx.font = font;
      ctx.fillStyle = color;
      ctx.textAlign = "center";
      if (maxWidth) {
        let t = text;
        while (ctx.measureText(t).width > maxWidth && t.length > 3) t = t.slice(0, -4) + "...";
        ctx.fillText(t, W / 2, y);
      } else {
        ctx.fillText(text, W / 2, y);
      }
    };

    // Helper: wrap text across lines, returns array of lines
    const wrapText = (text, font, maxWidth) => {
      ctx.font = font;
      const words = text.split(" ");
      const lines = [];
      let current = "";
      for (const word of words) {
        const test = current ? current + " " + word : word;
        if (ctx.measureText(test).width > maxWidth) {
          if (current) lines.push(current);
          current = word;
        } else {
          current = test;
        }
      }
      if (current) lines.push(current);
      return lines;
    };

    // ── LAYOUT ──

    // "Counterfactual" branding — top left, subtle
    ctx.font = "italic 32px Georgia, serif";
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.textAlign = "left";
    ctx.fillText("Counterfactual", 60, 70);

    // Daily badge — top right
    if (isDaily) {
      ctx.fillStyle = "#d97706";
      const badgeText = `Daily #${dayNum}`;
      ctx.font = "bold 20px 'Helvetica Neue', sans-serif";
      const badgeW = ctx.measureText(badgeText).width + 40;
      const badgeX = W - 60 - badgeW;
      ctx.beginPath(); ctx.roundRect(badgeX, 46, badgeW, 38, 10); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.textAlign = "center";
      ctx.fillText(badgeText, badgeX + badgeW / 2, 72);
    }

    // Figure name — hero element
    const nameY = 145;
    centerText(subject.name, nameY, "52px Georgia, serif", "#ffffff", W - 120);

    // Field + lifespan — subtle context
    const fieldText = `${subject.field}  ·  ${formatLifespan(subject.born, subject.died)}`;
    centerText(fieldText, nameY + 48, "20px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.4)", W - 120);

    // ── COUNTERFACTUAL HOOK — the centerpiece ──
    const hookY = nameY + 120;
    if (cfFirst) {
      // Italic counterfactual text, wrapped
      const hookFont = "italic 30px Georgia, serif";
      const hookLines = wrapText(cfFirst, hookFont, W - 200);
      const lineH = 42;
      // Background panel
      const panelH = hookLines.length * lineH + 36;
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.beginPath(); ctx.roundRect(60, hookY - 24, W - 120, panelH, 16); ctx.fill();
      // Left accent bar
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.fillRect(60, hookY - 24, 4, panelH);
      // Text
      ctx.font = hookFont;
      ctx.fillStyle = "rgba(255,255,255,0.75)";
      ctx.textAlign = "center";
      hookLines.forEach((line, i) => {
        ctx.fillText(line, W / 2, hookY + 14 + i * lineH);
      });
    }

    // ── VERDICT CARDS — "My Call" vs "Actual" side by side ──
    const cfLines = cfFirst ? wrapText(cfFirst, "italic 30px Georgia, serif", W - 200).length : 0;
    const verdictY = hookY + (cfFirst ? cfLines * 42 + 60 : 20);

    const cardW = 420, cardH = 150, gap = 40;
    const leftX = (W - cardW * 2 - gap) / 2;
    const rightX = leftX + cardW + gap;

    // My Call card
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.beginPath(); ctx.roundRect(leftX, verdictY, cardW, cardH, 16); ctx.fill();
    ctx.font = "bold 14px 'Helvetica Neue', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.textAlign = "center";
    ctx.fillText("MY CALL", leftX + cardW / 2, verdictY + 35);
    ctx.font = "bold 48px Georgia, serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${userPct}%`, leftX + cardW / 2, verdictY + 88);
    ctx.font = "bold 18px 'Helvetica Neue', sans-serif";
    ctx.fillStyle = userLabel.color;
    ctx.fillText(userLabel.label, leftX + cardW / 2, verdictY + 120);

    // Actual card
    ctx.fillStyle = `${actualLabel.color}18`;
    ctx.beginPath(); ctx.roundRect(rightX, verdictY, cardW, cardH, 16); ctx.fill();
    ctx.strokeStyle = `${actualLabel.color}40`;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(rightX, verdictY, cardW, cardH, 16); ctx.stroke();
    ctx.font = "bold 14px 'Helvetica Neue', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.textAlign = "center";
    ctx.fillText("ACTUAL", rightX + cardW / 2, verdictY + 35);
    ctx.font = "bold 48px Georgia, serif";
    ctx.fillStyle = actualLabel.color;
    ctx.fillText(`${actualPct}%`, rightX + cardW / 2, verdictY + 88);
    ctx.font = "bold 18px 'Helvetica Neue', sans-serif";
    ctx.fillStyle = actualLabel.color;
    ctx.fillText(actualLabel.label, rightX + cardW / 2, verdictY + 120);

    // ── GRADIENT BAR with both markers ──
    const barY = verdictY + cardH + 50;
    const barX = 100, barW = W - 200, barH = 20;
    const barGrad = ctx.createLinearGradient(barX, 0, barX + barW, 0);
    barGrad.addColorStop(0, "#15803d");
    barGrad.addColorStop(0.4, "#d97706");
    barGrad.addColorStop(0.65, "#c2410c");
    barGrad.addColorStop(1, "#b91c1c");
    ctx.fillStyle = barGrad;
    ctx.beginPath(); ctx.roundRect(barX, barY, barW, barH, 10); ctx.fill();

    // Gap highlight between prediction and actual
    if (diff > 0.08) {
      const lo = Math.min(prediction, w), hi = Math.max(prediction, w);
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.beginPath();
      ctx.roundRect(barX + lo * barW, barY - 3, (hi - lo) * barW, barH + 6, 6);
      ctx.fill();
    }

    // Player marker (white dot)
    const playerX = barX + (userPct / 100) * barW;
    ctx.fillStyle = "#ffffff";
    ctx.beginPath(); ctx.arc(playerX, barY + barH / 2, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath(); ctx.arc(playerX, barY + barH / 2, 8, 0, Math.PI * 2); ctx.fill();

    // Actual marker (colored dot)
    const actualX = barX + (actualPct / 100) * barW;
    ctx.fillStyle = actualLabel.color;
    ctx.beginPath(); ctx.arc(actualX, barY + barH / 2, 14, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#ffffff";
    ctx.beginPath(); ctx.arc(actualX, barY + barH / 2, 6, 0, Math.PI * 2); ctx.fill();

    // Bar labels
    ctx.font = "14px 'Helvetica Neue', sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillText("Footnote", barX, barY + barH + 26);
    ctx.textAlign = "right";
    ctx.fillText("Turning Point", barX + barW, barY + barH + 26);

    // Legend dots
    ctx.textAlign = "center";
    const legendY = barY + barH + 55;
    // You
    ctx.fillStyle = "#ffffff";
    ctx.beginPath(); ctx.arc(W / 2 - 80, legendY, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#1a1a1a";
    ctx.beginPath(); ctx.arc(W / 2 - 80, legendY, 3, 0, Math.PI * 2); ctx.fill();
    ctx.font = "14px 'Helvetica Neue', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fillText("You", W / 2 - 55, legendY + 5);
    // Actual
    ctx.fillStyle = actualLabel.color;
    ctx.beginPath(); ctx.arc(W / 2 + 40, legendY, 6, 0, Math.PI * 2); ctx.fill();
    ctx.font = "14px 'Helvetica Neue', sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.fillText("Actual", W / 2 + 72, legendY + 5);

    // ── POINTS — competitive centerpiece ──
    const ptsY = legendY + 75;
    const ptsColor = pts >= 80 ? "#22c55e" : pts >= 50 ? "#d97706" : "#ef4444";
    centerText(`${pts}`, ptsY, "bold 84px Georgia, serif", ptsColor);
    centerText("points", ptsY + 36, "18px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.35)");

    // Daily extras
    if (isDaily && percentile !== null) {
      const rankLabel = communityData?.isReal
        ? `Beat ${percentile}% of players`
        : `Est. top ${100 - percentile}%`;
      centerText(rankLabel, ptsY + 74, "bold 20px 'Helvetica Neue', sans-serif", "#d97706");
    }
    if (isDaily && dailyState?.dailyStreak >= 2) {
      const streakY = ptsY + (percentile !== null ? 104 : 74);
      centerText(`🔥 ${dailyState.dailyStreak}-day streak`, streakY, "18px 'Helvetica Neue', sans-serif", "#d97706");
    }

    // ── CTA ──
    centerText("What would you predict?", H - 100, "bold 22px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.55)");

    // Bottom accent line
    const botLine = ctx.createLinearGradient(0, 0, W, 0);
    botLine.addColorStop(0, "#b91c1c");
    botLine.addColorStop(0.35, "#c2410c");
    botLine.addColorStop(0.6, "#d97706");
    botLine.addColorStop(1, "#15803d");
    ctx.fillStyle = botLine;
    ctx.fillRect(0, H - 6, W, 6);

    // URL with deep link
    const figLink = subject.id && !subject._isCustom ? `counterfactual.app/#${subject.id}` : "counterfactual.app";
    centerText(figLink, H - 36, "16px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.25)");

    return new Promise(resolve => canvas.toBlob(resolve, "image/png"));
  };

  // Generate a profile/achievement share card
  const generateMilestoneCard = async (opts = {}) => {
    const { achievement, isRankUp, isProfile } = opts;
    const avgPts = played.length > 0 ? Math.round(score / played.length) : 0;
    const rank = getRank(avgPts, played.length);
    const earnedCount = ACHIEVEMENTS.filter(a => a.check(gameHistory, played, dailyState, streakRewards)).length;

    const W = 1080, H = 1080;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");

    // Background
    const bg = ctx.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, "#1a1a18"); bg.addColorStop(0.5, "#222220"); bg.addColorStop(1, "#1a1a18");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    // Grid
    ctx.strokeStyle = "rgba(255,255,255,0.025)"; ctx.lineWidth = 1;
    for (let i = 0; i < W; i += 60) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(W, i); ctx.stroke();
    }

    // Accent lines
    const topLine = ctx.createLinearGradient(0, 0, W, 0);
    topLine.addColorStop(0, "#f59e0b"); topLine.addColorStop(1, "#16a34a");
    ctx.fillStyle = topLine; ctx.fillRect(0, 0, W, 6);
    ctx.fillRect(0, H - 6, W, 6);

    const cText = (text, y, font, color) => {
      ctx.font = font; ctx.fillStyle = color; ctx.textAlign = "center";
      ctx.fillText(text, W / 2, y);
    };

    // Title
    cText("Counterfactual", 80, "italic 38px Georgia, serif", "rgba(255,255,255,0.4)");

    if (achievement) {
      // Achievement unlocked card
      cText("🏅 Achievement Unlocked", 160, "bold 28px 'Helvetica Neue', sans-serif", "#f59e0b");

      // Achievement icon — large
      cText(achievement.icon, 300, "120px serif", "#ffffff");

      // Achievement title
      cText(achievement.title, 410, "bold 52px 'Helvetica Neue', sans-serif", "#ffffff");

      // Description
      cText(achievement.desc, 470, "28px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.6)");

      // Stats row
      const statsY = 580;
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.beginPath(); ctx.roundRect(140, statsY - 40, W - 280, 120, 16); ctx.fill();

      const cols = [{ v: `${played.length}`, l: "Figures" }, { v: `${avgPts}`, l: "Avg Pts" }, { v: `${earnedCount}/${ACHIEVEMENTS.length}`, l: "Badges" }];
      cols.forEach((c, i) => {
        const x = 240 + i * 240;
        cText(c.v, statsY + 15, "bold 36px 'Helvetica Neue', sans-serif", "#ffffff");
        cText(c.l, statsY + 50, "18px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.4)");
        // Reposition per column
        ctx.textAlign = "center";
        ctx.font = "bold 36px 'Helvetica Neue', sans-serif"; ctx.fillStyle = "#ffffff";
        ctx.fillText(c.v, x, statsY + 15);
        ctx.font = "18px 'Helvetica Neue', sans-serif"; ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fillText(c.l, x, statsY + 50);
      });

      // Rank
      cText(`${rank.icon} ${rank.title}`, 780, "bold 34px 'Helvetica Neue', sans-serif", rank.color);

    } else {
      // Profile / rank card
      const label = isRankUp ? "🎖️ Rank Up!" : "📊 Player Profile";
      cText(label, 160, "bold 28px 'Helvetica Neue', sans-serif", isRankUp ? "#f59e0b" : "rgba(255,255,255,0.5)");

      // Rank icon
      cText(rank.icon, 310, "120px serif", "#ffffff");
      cText(rank.title, 420, "bold 56px 'Helvetica Neue', sans-serif", rank.color);

      // Stats grid
      const statsY = 530;
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.beginPath(); ctx.roundRect(100, statsY - 40, W - 200, 130, 16); ctx.fill();

      const cols2 = [
        { v: `${played.length}`, l: "Played" },
        { v: `${avgPts}`, l: "Avg Pts" },
        { v: `${bestStreak}`, l: "Best Streak" },
        { v: `${earnedCount}`, l: "Badges" },
      ];
      cols2.forEach((c, i) => {
        const x = 200 + i * 190;
        ctx.textAlign = "center";
        ctx.font = "bold 34px 'Helvetica Neue', sans-serif"; ctx.fillStyle = "#ffffff";
        ctx.fillText(c.v, x, statsY + 20);
        ctx.font = "17px 'Helvetica Neue', sans-serif"; ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.fillText(c.l, x, statsY + 55);
      });

      // Achievement showcase — top 3 earned
      const topEarned = ACHIEVEMENTS.filter(a => a.check(gameHistory, played, dailyState, streakRewards)).slice(-3);
      if (topEarned.length > 0) {
        const achY = 730;
        cText("Recent Achievements", achY - 20, "20px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.35)");
        topEarned.forEach((a, i) => {
          const x = W / 2 + (i - 1) * 180;
          ctx.textAlign = "center";
          ctx.font = "48px serif"; ctx.fillStyle = "#ffffff";
          ctx.fillText(a.icon, x, achY + 40);
          ctx.font = "16px 'Helvetica Neue', sans-serif"; ctx.fillStyle = "rgba(255,255,255,0.5)";
          ctx.fillText(a.title, x, achY + 70);
        });
      }
    }

    // URL
    cText("counterfactual.app", H - 36, "18px 'Helvetica Neue', sans-serif", "rgba(255,255,255,0.3)");

    return new Promise(resolve => canvas.toBlob(resolve, "image/png"));
  };

  // Share achievement or profile
  const shareMilestone = async (opts = {}) => {
    const { achievement, isRankUp } = opts;
    const avgPts = played.length > 0 ? Math.round(score / played.length) : 0;
    const rank = getRank(avgPts, played.length);
    const earnedCount = ACHIEVEMENTS.filter(a => a.check(gameHistory, played, dailyState, streakRewards)).length;

    let text;
    if (achievement) {
      text = `🏅 ${achievement.title}\n\n${achievement.desc}\n\n${rank.icon} ${rank.title} · ${played.length} entries · ${avgPts} avg pts\n\nCounterfactual — predict who shaped history.`;
    } else if (isRankUp) {
      text = `${rank.icon} Ranked up to ${rank.title}!\n\n${played.length} entries played · ${avgPts} avg pts · ${earnedCount} badges earned\n\nCounterfactual — predict who shaped history.`;
    } else {
      text = `${rank.icon} ${rank.title}\n\n${played.length} entries · ${avgPts} avg pts · best streak: ${bestStreak}\n\nCounterfactual — predict who shaped history.`;
    }

    let imageBlob = null;
    try { imageBlob = await generateMilestoneCard(opts); } catch(e) {}

    setShareModal({
      text,
      url: "https://counterfactual.app",
      imageBlob,
      figureName: achievement ? achievement.title : "Profile",
    });
  };

  const shareResult = async () => {
    const r = subject.r ?? subject._r;
    const w = toWeight(r);
    const diff = Math.abs(prediction - w);
    const pts = calculatePoints(diff);
    const figLink = subject.id && !subject._isCustom ? `https://counterfactual.app/#${subject.id}` : "https://counterfactual.app";
    const userPct = Math.round(prediction * 100);
    const actualPct = Math.round(w * 100);
    const userLabel = getScoreLabel(prediction, subject);
    const actualLabel = getScoreLabel(w, subject);

    // Extract a short hook from the counterfactual (first sentence)
    const cfRaw = subject.counterfactual || "";
    const cfFirst = cfRaw.match(/^[^.!?]+[.!?]+/)?.[0]?.trim() || "";

    // Build the hook — counterfactual-driven when available
    const isEvent = subject.cat === "events";
    const isInstitution = subject.cat === "institutions";
    const isInvention = subject.cat === "inventions";

    let hook;
    if (cfFirst) {
      // Use the counterfactual first sentence as the hook
      hook = cfFirst;
    } else if (isEvent) {
      hook = `Was ${subject.name} a turning point or was history already headed there?`;
    } else if (isInstitution) {
      hook = `Would someone else have built what ${subject.name} built?`;
    } else if (isInvention) {
      hook = `Was ${subject.name} inevitable, or did it reshape everything?`;
    } else {
      hook = `Without ${subject.name}, how different would the world be?`;
    }

    // Score commentary — varied and specific
    let verdict;
    if (userLabel.label === actualLabel.label) {
      // Same bucket
      verdict = pts >= 80
        ? `I called it: ${actualLabel.label}. ${pts} pts.`
        : `We both said ${actualLabel.label} — but the exact number matters. ${pts} pts.`;
    } else if (diff <= 0.1) {
      verdict = `I said ${userLabel.label} (${userPct}%). Actual: ${actualLabel.label} (${actualPct}%). Close — ${pts} pts.`;
    } else if (prediction > w) {
      verdict = `I said ${userLabel.label} (${userPct}%). Actual: ${actualLabel.label} (${actualPct}%). Overrated. ${pts} pts.`;
    } else {
      verdict = `I said ${userLabel.label} (${userPct}%). Actual: ${actualLabel.label} (${actualPct}%). Underrated. ${pts} pts.`;
    }

    let text;
    if (isDaily) {
      const dayNum = getDayNumber();
      const percentile = getDailyPercentile(diff, r);
      const streakText = dailyState?.dailyStreak >= 2 ? `\n🔥 ${dailyState.dailyStreak}-day streak` : "";
      const rankText = communityData?.isReal
        ? `Beat ${percentile}% of players.`
        : `Est. top ${100 - percentile}%.`;
      text = `Counterfactual Daily #${dayNum}\n\n${hook}\n\n${verdict} ${rankText}${streakText}`;
    } else {
      text = `${hook}\n\n${verdict}\n\nCounterfactual — predict who shaped history.`;
    }

    // Generate image in background
    let imageBlob = null;
    try { imageBlob = await generateShareCard(); } catch(e) {}

    setShareModal({
      text,
      url: figLink,
      imageBlob,
      figureName: subject.name,
      isDaily,
    });
  };

  const createChallenge = () => {
    if (subject._isCustom) {
      showToast("Challenge mode is only for built-in entries");
      return;
    }
    const data = btoa(JSON.stringify({ id: subject.id, score: Math.round(prediction * 100) }));
    const url = `${window.location.origin}?c=${data}`;
    navigator.clipboard?.writeText(url);
    showToast("🎯 Challenge link copied!");
  };

  // ─────────────────────────────────────────────────────────────────────────
  // SHARED COMPONENTS
  // ─────────────────────────────────────────────────────────────────────────

  const Chevron = ({ size = 16 }) => (
    <svg className="chevron-icon" width={size} height={size} viewBox="0 0 16 16" fill="none" style={{ transition: "transform 0.2s ease", flexShrink: 0 }}>
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const BackButton = ({ label, icon, action }) => {
    // Smart defaults: check where we came from via navHistory
    const BROWSE_SCREENS = ["category", "era", "collection", "scenario"];
    const backTarget = [...navHistory].reverse().find(s => s !== "predict" && s !== "interlude" && s !== "result");
    
    let defaultAction, defaultLabel, defaultIcon;
    if (action) {
      defaultAction = action; defaultLabel = label || "Back"; defaultIcon = icon || "←";
    } else if (BROWSE_SCREENS.includes(screen)) {
      // Currently IN a browse sub-view → back to browse root
      defaultAction = goToBrowse;
      defaultLabel = "Browse";
      defaultIcon = "📂";
    } else if (backTarget && BROWSE_SCREENS.includes(backTarget)) {
      // Came FROM a browse sub-view → go back there
      defaultAction = goBack;
      const labels = { category: "Category", collection: "Collection", era: "Era", scenario: "Scenarios" };
      const icons = { category: "📂", collection: "📚", era: "🕰️", scenario: "🦋" };
      defaultLabel = labels[backTarget] || "Browse";
      defaultIcon = icons[backTarget] || "📂";
    } else if (backTarget === "stats") {
      defaultAction = () => { setActiveTab("stats"); setScreen("stats"); scrollTop(); };
      defaultLabel = "Stats";
      defaultIcon = "📊";
    } else {
      defaultAction = goHome;
      defaultLabel = "Home";
      defaultIcon = "🏠";
    }
    const btnAction = action || defaultAction;
    const btnLabel = label || defaultLabel;
    const btnIcon = icon || defaultIcon;
    return (
      <button onClick={btnAction} style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        padding: "8px 14px", borderRadius: 12, fontSize: 13, fontWeight: 600,
        background: "#f7f6f3", color: "#7a7770", border: "1px solid #e5e2db",
        cursor: "pointer", fontFamily: sansStack, marginBottom: 20,
        transition: "all 0.15s ease",
      }}
        onMouseEnter={e => { e.currentTarget.style.background = "#f0efec"; e.currentTarget.style.color = "#3a3a3a"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "#f7f6f3"; e.currentTarget.style.color = "#7a7770"; }}
      >
        <span style={{ fontSize: 14 }}>←</span> {btnIcon} {btnLabel}
      </button>
    );
  };

  // ─── TAB BAR ─────────────────────────────────────────────────────────
  const GAME_SCREENS = ["predict", "interlude", "result", "h2h_lobby", "h2h_summary", "custom_confirm"];
  const TabBar = () => {
    if (GAME_SCREENS.includes(screen)) return null;
    if (!hasSeenIntro && played.length === 0) return null;
    const tabs = [
      { id: "play", label: "Play", icon: "🎯", activeIcon: "🎯" },
      { id: "browse", label: "Browse", icon: "📂", activeIcon: "📂" },
      { id: "stats", label: "Stats", icon: "📊", activeIcon: "📊" },
    ];
    return (
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
        borderTop: "1px solid #e5e2db",
        boxShadow: "0 -1px 8px rgba(0,0,0,0.03)",
        display: "flex", justifyContent: "center", padding: "0 0 env(safe-area-inset-bottom, 0px)",
      }}>
        <div style={{ display: "flex", maxWidth: 420, width: "100%", justifyContent: "space-around" }}>
          {tabs.map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => {
                SFX.click();
                setActiveTab(tab.id);
                if (tab.id === "play") {
                  setScreen("home");
                  setActiveCategory(null); setActiveEra(null);
                  setActiveCollection(null); setSelectedScenario(null);
                  scrollTop();
                } else if (tab.id === "browse") {
                  setScreen("home");
                  setActiveCategory(null); setActiveEra(null);
                  setActiveCollection(null); setSelectedScenario(null);
                  scrollTop();
                } else if (tab.id === "stats") {
                  setScreen("stats");
                  scrollTop();
                }
              }} style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                padding: "10px 20px 8px", background: "none", border: "none",
                cursor: "pointer", transition: "all 0.15s ease",
                position: "relative",
              }}>
                {isActive && <div style={{
                  position: "absolute", top: -1, left: "20%", right: "20%", height: 2.5,
                  background: "#1a1a1a", borderRadius: "0 0 3px 3px",
                }} />}
                <span style={{ fontSize: 18, filter: isActive ? "none" : "grayscale(0.6)", opacity: isActive ? 1 : 0.5 }}>
                  {tab.icon}
                </span>
                <span style={{
                  fontSize: 10, fontWeight: isActive ? 700 : 500, letterSpacing: "0.02em",
                  color: isActive ? "#1a1a1a" : "#9a9890", fontFamily: sansStack,
                }}>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const ScrollRow = ({ children }) => {
    const ref = useRef(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);

    const checkScroll = () => {
      const el = ref.current;
      if (!el) return;
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    useEffect(() => {
      checkScroll();
      const el = ref.current;
      if (!el) return;
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => { el.removeEventListener("scroll", checkScroll); window.removeEventListener("resize", checkScroll); };
    }, [children]);

    const scroll = (dir) => {
      const el = ref.current;
      if (!el) return;
      el.scrollBy({ left: dir * 300, behavior: "smooth" });
    };

    const arrowStyle = (side) => ({
      position: "absolute", top: "50%", [side]: -4,
      transform: "translateY(-50%)", zIndex: 2,
      width: 32, height: 32, borderRadius: "50%",
      background: "#fff", border: "1px solid #e5e2db",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      display: "flex", alignItems: "center", justifyContent: "center",
      cursor: "pointer", fontSize: 14, color: "#5a5850",
      transition: "opacity 0.15s ease",
    });

    return (
      <div style={{ position: "relative" }}>
        {canLeft && (
          <button onClick={() => scroll(-1)} style={arrowStyle("left")} aria-label="Scroll left">‹</button>
        )}
        <div ref={ref} className="collection-scroll" style={{
          display: "flex", gap: 10, overflowX: "auto",
          paddingBottom: 6, scrollSnapType: "x mandatory",
        }}>
          {children}
        </div>
        {canRight && (
          <button onClick={() => scroll(1)} style={arrowStyle("right")} aria-label="Scroll right">›</button>
        )}
      </div>
    );
  };

  const ToastOverlay = () => toast ? (
    <div style={{
      position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)",
      zIndex: 9999, pointerEvents: "none",
    }}>
      <div style={{
        background: "#1a1a1a", color: "#fff", padding: "12px 24px",
        borderRadius: 12, fontSize: 14, fontWeight: 500, fontFamily: sansStack,
        boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
        animation: toast.leaving ? "toastOut 0.25s ease forwards" : "toastIn 0.3s ease both",
        whiteSpace: "nowrap",
      }}>
        {toast.msg}
      </div>
    </div>
  ) : null;

  // ── Share Modal ──
  const ShareModal = () => {
    if (!shareModal) return null;
    const { text, url, imageBlob, figureName, isDaily: isD } = shareModal;
    const imageUrl = imageBlob ? URL.createObjectURL(imageBlob) : null;

    const fullText = `${text}\n\n${url}`;

    const shareTo = (platform) => {
      const encoded = encodeURIComponent(text);
      const encodedUrl = encodeURIComponent(url);
      let shareUrl;
      switch (platform) {
        case "x":
          shareUrl = `https://twitter.com/intent/tweet?text=${encoded}&url=${encodedUrl}`;
          break;
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encoded}`;
          break;
        case "linkedin":
          shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
          break;
        case "whatsapp":
          shareUrl = `https://wa.me/?text=${encodeURIComponent(text + "\n\n" + url)}`;
          break;
        case "reddit":
          shareUrl = `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodeURIComponent(`How much did ${figureName} shape history? — Counterfactual`)}`;
          break;
        default: return;
      }
      window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=500");
    };

    const copyText = async () => {
      try {
        await navigator.clipboard.writeText(fullText);
        showToast("📋 Copied to clipboard");
      } catch(e) {}
    };

    const downloadImage = () => {
      if (!imageBlob) return;
      const a = document.createElement("a");
      a.href = imageUrl;
      a.download = `counterfactual-${(figureName || "share").replace(/\s+/g, "-").toLowerCase()}.png`;
      a.click();
      showToast("📥 Image downloaded");
    };

    const nativeShare = async () => {
      try {
        const shareData = { text: fullText };
        if (imageBlob) {
          const file = new File([imageBlob], "counterfactual.png", { type: "image/png" });
          if (navigator.canShare?.({ files: [file] })) shareData.files = [file];
        }
        await navigator.share(shareData);
        setShareModal(null);
      } catch(e) {}
    };

    const platformBtnStyle = (bg, hover) => ({
      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
      padding: "12px 16px", borderRadius: 12, border: "none",
      fontSize: 14, fontWeight: 600, color: "#fff", cursor: "pointer",
      background: bg, transition: "all 0.15s ease", flex: 1, minWidth: 0,
    });

    return (
      <div
        onClick={(e) => { if (e.target === e.currentTarget) setShareModal(null); }}
        style={{
          position: "fixed", inset: 0, zIndex: 10000,
          background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 16, animation: "fadeUp 0.2s ease both",
        }}
      >
        <div style={{
          background: "#fff", borderRadius: 20, width: "100%", maxWidth: 420,
          maxHeight: "90vh", overflow: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}>
          {/* Header */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "18px 22px 0",
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", margin: 0, fontFamily: fontStack }}>
              Share{figureName && figureName !== "Profile" ? ` — ${figureName}` : ""}
            </h3>
            <button
              onClick={() => setShareModal(null)}
              style={{
                background: "#f5f4f0", border: "none", borderRadius: "50%",
                width: 32, height: 32, fontSize: 16, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", color: "#7a7770",
              }}
            >✕</button>
          </div>

          <div style={{ padding: "16px 22px 22px" }}>
            {/* Image preview */}
            {imageUrl && (
              <div style={{
                borderRadius: 12, overflow: "hidden", marginBottom: 16,
                border: "1px solid #e5e2db", position: "relative",
              }}>
                <img src={imageUrl} alt="Share card" style={{ width: "100%", display: "block" }} />
                <button
                  onClick={downloadImage}
                  style={{
                    position: "absolute", bottom: 8, right: 8,
                    background: "rgba(0,0,0,0.7)", color: "#fff",
                    border: "none", borderRadius: 8, padding: "6px 12px",
                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  📥 Save Image
                </button>
              </div>
            )}

            {/* Text preview */}
            <div style={{
              background: "#faf9f6", border: "1px solid #e5e2db", borderRadius: 12,
              padding: "12px 14px", marginBottom: 16, fontSize: 13, lineHeight: 1.6,
              color: "#4a4840", whiteSpace: "pre-wrap", fontFamily: sansStack,
            }}>
              {fullText}
            </div>

            {/* Platform buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
              <button onClick={() => shareTo("x")} style={platformBtnStyle("#000")}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                X / Twitter
              </button>
              <button onClick={() => shareTo("facebook")} style={platformBtnStyle("#1877F2")}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </button>
              <button onClick={() => shareTo("linkedin")} style={platformBtnStyle("#0A66C2")}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </button>
              <button onClick={() => shareTo("whatsapp")} style={platformBtnStyle("#25D366")}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </button>
            </div>

            {/* Copy + Native share row */}
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={copyText} style={{
                ...platformBtnStyle("#4a4840"), flex: 1,
                background: "#f5f4f0", color: "#4a4840", border: "1px solid #e5e2db",
              }}
                onMouseEnter={e => e.currentTarget.style.background = "#eeedea"}
                onMouseLeave={e => e.currentTarget.style.background = "#f5f4f0"}
              >
                📋 Copy Text
              </button>
              {typeof navigator !== "undefined" && navigator.share && (
                <button onClick={nativeShare} style={{
                  ...platformBtnStyle("#4a4840"), flex: 1,
                  background: "#f5f4f0", color: "#4a4840", border: "1px solid #e5e2db",
                }}
                  onMouseEnter={e => e.currentTarget.style.background = "#eeedea"}
                  onMouseLeave={e => e.currentTarget.style.background = "#f5f4f0"}
                >
                  📱 More Options
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ContributionTags = ({ items }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {items.map((c, i) => (
        <span key={i} style={{
          fontSize: 13, padding: "7px 14px", background: "#f5f4f0",
          borderRadius: 8, color: "#4a4840", border: "1px solid #e8e6e1",
          lineHeight: 1.3,
        }}>{c}</span>
      ))}
    </div>
  );

  const SectionBox = ({ bg, border, titleColor, textColor, icon, title, children }) => (
    <div style={{
      marginBottom: 20, background: bg, borderRadius: 12,
      padding: "20px 22px", border: `1px solid ${border}`,
      opacity: revealPhase >= 3 ? 1 : 0,
      transform: revealPhase >= 3 ? "translateY(0)" : "translateY(12px)",
      transition: "opacity 0.5s ease, transform 0.5s ease",
    }}>
      <h4 style={{ ...S.sectionHeader, color: titleColor, marginBottom: 12 }}>
        <span>{icon}</span> {title}
      </h4>
      <div style={{ color: textColor, lineHeight: 1.75, fontSize: 14, margin: 0 }}>
        {children}
      </div>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  // GUIDED ONBOARDING
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "home" && !hasSeenIntro && played.length === 0) {
    const tutorialFig = ALL_SUBJECTS.find(s => s.id === "telephone");
    const tutR = tutorialFig.r;
    const tutW = toWeight(tutR);
    const tutPredNorm = onboardPred / 100;
    const tutDiff = Math.abs(tutPredNorm - tutW);
    const tutPts = calculatePoints(tutDiff);
    const step = onboardStep;
    const tutLabel = getScoreLabel(tutW, tutorialFig);

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <div style={{ ...S.inner, maxWidth: 520, paddingTop: 40 }}>

          {/* Step 0: Hook — no rules, just a question */}
          {step === 0 && (
            <div style={{ textAlign: "center", animation: "fadeUp 0.4s ease both" }}>
              <h1 style={{ ...S.h1, fontSize: 42, marginBottom: 16 }}>
                <span style={{ fontStyle: "italic" }}>Counterfactual</span>
              </h1>
              <p style={{ fontSize: 17, color: "#5a5750", lineHeight: 1.65, maxWidth: 400, margin: "0 auto 32px" }}>
                Could history have happened without <em>that</em> person, invention, or moment? You predict. We'll see how close you get.
              </p>

              <div style={{
                ...S.card, padding: "22px 26px", marginBottom: 32,
                textAlign: "left",
              }}>
                <p style={{ margin: "0 0 10px", fontSize: 14, color: "#3a3a3a", lineHeight: 1.6 }}>
                  Every entry gets a <strong>historical weight</strong> from 0–100%.
                </p>
                <div style={{ display: "flex", gap: 12, fontSize: 13, color: "#5a5750", lineHeight: 1.5, marginBottom: 14 }}>
                  <div style={{ flex: 1, padding: "10px 12px", background: "#f0fdf4", borderRadius: 8, border: "1px solid #bbf7d0" }}>
                    <strong style={{ color: "#15803d" }}>Low weight</strong> — the same outcome was arriving regardless. Someone else would've done it.
                  </div>
                  <div style={{ flex: 1, padding: "10px 12px", background: "#fef2f2", borderRadius: 8, border: "1px solid #fecaca" }}>
                    <strong style={{ color: "#b91c1c" }}>High weight</strong> — nothing else was converging here. History genuinely hinged on it.
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#78716c", lineHeight: 1.6, padding: "12px 14px", background: "#faf9f6", borderRadius: 8 }}>
                  <strong style={{ color: "#1a1a1a" }}>For example:</strong> Edison's lightbulb? About <strong style={{ color: "#15803d" }}>20%</strong> — twenty other inventors were racing toward the same thing. But Shakespeare? <strong style={{ color: "#b91c1c" }}>75%</strong> — nobody else was writing like that. The surprise is what counts as inevitable and what doesn't.
                </div>
              </div>

              <button
                onClick={() => setOnboardStep(1)}
                style={{
                  ...S.btn, padding: "16px 40px", fontSize: 17, fontWeight: 700,
                  background: "#1a1a1a", color: "#fff", border: "none",
                }}
              >
                Try one →
              </button>
            </div>
          )}

          {/* Step 1: The telephone — presented like a real round */}
          {step === 1 && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: "#9a9890", letterSpacing: "0.05em",
                textTransform: "uppercase", marginBottom: 16, textAlign: "center",
              }}>
                Your first prediction
              </div>

              <div style={{ ...S.card, padding: "28px", marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
                  <span style={S.tag(CATS[tutorialFig.cat].color, CATS[tutorialFig.cat].bg)}>
                    {CATS[tutorialFig.cat].label}
                  </span>
                </div>
                <h2 style={{ ...S.h2, fontSize: 30, marginBottom: 4 }}>{tutorialFig.name}</h2>
                <p style={{ ...S.muted, fontSize: 14, marginBottom: 16 }}>
                  {tutorialFig.field} · {tutorialFig.born}
                </p>

                <blockquote style={{
                  margin: "0 0 18px", padding: "12px 18px",
                  borderLeft: "3px solid rgba(146,64,14,0.25)",
                  fontStyle: "italic", color: "#7a7770", fontSize: 14, lineHeight: 1.55,
                }}>
                  "{tutorialFig.quote}"
                </blockquote>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {tutorialFig.contributions.map((c, i) => (
                    <span key={i} style={{
                      fontSize: 12, padding: "4px 10px", borderRadius: 6,
                      background: "#f5f4f0", color: "#5a5750",
                    }}>{c}</span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setOnboardStep(2)}
                style={{
                  ...S.btn, width: "100%", padding: "16px", fontSize: 16, fontWeight: 700,
                  background: "#1a1a1a", color: "#fff", border: "none",
                }}
              >
                Make my prediction →
              </button>
            </div>
          )}

          {/* Step 2: Predict */}
          {step === 2 && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: "#9a9890", letterSpacing: "0.05em",
                textTransform: "uppercase", marginBottom: 16, textAlign: "center",
              }}>
                Your prediction
              </div>

              <div style={{ ...S.card, padding: "28px", marginBottom: 20 }}>
                <h3 style={{ ...S.h3, fontSize: 18, marginBottom: 4, textAlign: "center" }}>
                  The Telephone
                </h3>
                <p style={{ fontSize: 13, color: "#9a9890", textAlign: "center", marginBottom: 28 }}>
                  If the telephone had never been invented in 1876, how different would history be?
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, padding: "0 4px" }}>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#15803d" }}>0%</div>
                    <div style={{ fontSize: 10, color: "#9a9890" }}>Bound to happen</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#a16207" }}>50%</div>
                    <div style={{ fontSize: 10, color: "#9a9890" }}>Debatable</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#b91c1c" }}>100%</div>
                    <div style={{ fontSize: 10, color: "#9a9890" }}>History-defining</div>
                  </div>
                </div>

                <input
                  type="range" min="0" max="100" step="1"
                  value={onboardPred}
                  onChange={e => setOnboardPred(parseInt(e.target.value))}
                  className="prediction-slider"
                  style={{ width: "100%", marginBottom: 12 }}
                />

                <div style={{
                  textAlign: "center", fontSize: 36, fontWeight: 300,
                  color: "#1a1a1a", fontFamily: fontStack, letterSpacing: "-0.03em",
                  marginBottom: 8,
                }}>
                  {onboardPred}%
                </div>

                <div style={{
                  textAlign: "center", fontSize: 13, color: "#9a9890", marginBottom: 4,
                }}>
                  {onboardPred < 20 ? "Low weight — someone else invents it anyway"
                    : onboardPred < 40 ? "Modest weight — others were close"
                    : onboardPred < 60 ? "Mixed — some parts were inevitable, some weren't"
                    : onboardPred < 80 ? "High weight — history doesn't look the same without this"
                    : "History-defining — the world changes without it"}
                </div>
              </div>

              <button
                onClick={() => setOnboardStep(3)}
                style={{
                  ...S.btn, width: "100%", padding: "16px", fontSize: 16, fontWeight: 700,
                  background: "#1a1a1a", color: "#fff", border: "none",
                }}
              >
                Lock it in →
              </button>
            </div>
          )}

          {/* Step 3: The reveal — the surprise */}
          {step === 3 && (
            <div style={{ animation: "fadeUp 0.4s ease both" }}>

              <div style={{ ...S.card, padding: "28px", marginBottom: 20, textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>
                  {tutDiff < 0.15 ? "🎯" : tutPredNorm > tutW ? "😮" : "👏"}
                </div>
                <h3 style={{ ...S.h3, fontSize: 18, marginBottom: 16 }}>
                  The Telephone
                </h3>

                {/* Score comparison grid */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12,
                  marginBottom: 20, textAlign: "center", padding: "18px 0",
                  borderTop: "1px solid #e8e6e1", borderBottom: "1px solid #e8e6e1",
                }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>You Said</div>
                    <div style={{ fontSize: 32, fontWeight: 400, color: "#1a1a1a", fontFamily: fontStack }}>{onboardPred}%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>Actual</div>
                    <div style={{ fontSize: 32, fontWeight: 400, color: tutLabel.color, fontFamily: fontStack }}>{Math.round(tutW * 100)}%</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>Points</div>
                    <div style={{ fontSize: 32, fontWeight: 400, color: tutPts >= 64 ? "#6d28d9" : "#b0ada6", fontFamily: fontStack }}>+{tutPts}</div>
                  </div>
                </div>

                {/* Weight bar */}
                <div style={{ marginBottom: 20, padding: "0 4px" }}>
                  <div style={{
                    position: "relative", height: 12, borderRadius: 6,
                    background: "linear-gradient(90deg, #15803d, #a16207 40%, #c2410c 65%, #b91c1c)",
                    overflow: "visible",
                  }}>
                    {tutDiff > 0.08 && (() => {
                      const lo = Math.min(tutPredNorm, tutW), hi = Math.max(tutPredNorm, tutW);
                      return <div style={{
                        position: "absolute", top: -2, bottom: -2,
                        left: `${lo * 100}%`, width: `${(hi - lo) * 100}%`,
                        background: "rgba(255,255,255,0.35)", borderRadius: 4,
                        border: "1px solid rgba(255,255,255,0.5)",
                      }} />;
                    })()}
                    <div style={{
                      position: "absolute", top: "50%", transform: "translate(-50%,-50%)",
                      left: `${onboardPred}%`, width: 16, height: 16, borderRadius: "50%",
                      background: "#fff", border: "3px solid #1a1a1a",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.2)", zIndex: 2,
                    }} />
                    <div style={{
                      position: "absolute", top: "50%", transform: "translate(-50%,-50%)",
                      left: `${Math.round(tutW * 100)}%`, width: 16, height: 16, borderRadius: "50%",
                      background: tutLabel.color, border: "3px solid #fff",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.25)", zIndex: 3,
                    }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                    <span style={{ fontSize: 10, color: "#9a9890" }}>0%</span>
                    <div style={{ display: "flex", gap: 12 }}>
                      <span style={{ fontSize: 10, color: "#9a9890", display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#fff", border: "2px solid #1a1a1a" }} /> You
                      </span>
                      <span style={{ fontSize: 10, color: "#9a9890", display: "flex", alignItems: "center", gap: 4 }}>
                        <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: tutLabel.color, border: "2px solid #fff" }} /> Actual
                      </span>
                    </div>
                    <span style={{ fontSize: 10, color: "#9a9890" }}>100%</span>
                  </div>
                </div>

                <div style={{ fontSize: 13, color: "#9a9890", marginBottom: 0 }}>
                  {tutDiff < 0.05 ? "Incredible — you already think like a historian."
                    : tutDiff < 0.15 ? "Strong intuition. You've got the instinct."
                    : tutDiff < 0.25 ? "Not bad for your first try."
                    : "Most people miss this one. That's what makes it fun."}
                </div>
              </div>

              {/* The surprise — this is the teaching moment */}
              <div style={{
                ...S.card, padding: "20px 22px", marginBottom: 16,
                background: "#fffbeb", borderColor: "#fde68a",
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#92400e", marginBottom: 8, fontFamily: sansStack }}>
                  Wait — only {Math.round(tutW * 100)}%?
                </div>
                <p style={{ fontSize: 14, color: "#78350f", lineHeight: 1.7, margin: 0 }}>
                  Elisha Gray filed a telephone patent <strong>the same day</strong> as Alexander Graham Bell — February 14, 1876. Antonio Meucci had a working device years earlier. Philipp Reis transmitted speech in 1861. The science of electromagnetism made the telephone inevitable. Bell won a patent race, but if he'd never been born, you'd still be making phone calls.
                </p>
              </div>

              <div style={{
                ...S.card, padding: "20px 22px", marginBottom: 20,
                background: `${tutLabel.color}06`, borderLeft: `4px solid ${tutLabel.color}`,
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 6, fontFamily: sansStack }}>
                  That's what this game is about.
                </div>
                <p style={{ fontSize: 13, color: "#5a5750", lineHeight: 1.65, margin: 0 }}>
                  Not whether something mattered — the telephone obviously changed everything — but whether it needed <em>that specific person</em>. Some inventions were inevitable. Some people shaped history in ways no one else could have. The fun is figuring out which is which.
                </p>
              </div>

              {/* Scoring — brief, embedded, not a separate lesson */}
              <div style={{
                ...S.card, padding: "16px 20px", marginBottom: 24,
              }}>
                <div style={{ fontSize: 13, color: "#5a5750", lineHeight: 1.6 }}>
                  <strong style={{ color: "#1a1a1a" }}>Scoring:</strong> The closer your prediction, the more points. Harder figures earn bonus multipliers. Bold predictions (away from 50%) earn a conviction bonus. Build streaks by landing within 15%.
                </div>
              </div>

              <button
                onClick={() => {
                  setHasSeenIntro(true);
                  setOnboardStep(0);
                  setOnboardPred(50);
                }}
                style={{
                  ...S.btn, width: "100%", padding: "16px", fontSize: 17, fontWeight: 700,
                  background: "#1a1a1a", color: "#fff", border: "none",
                }}
              >
                Start playing →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // HOME SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "home") {
    const avgScore = played.length > 0 ? Math.round(score / played.length) : 0;
    const rank = getRank(avgScore, played.length);

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{...S.inner, paddingBottom: 70}}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 24, paddingTop: 16, position: "relative" }}>
            {/* Sound toggle */}
            <button
              onClick={() => { const next = SFX.toggle(); setSfxEnabled(next); if (next) SFX.click(); }}
              style={{
                position: "absolute", top: 16, right: 0,
                background: "none", border: "1px solid #e5e2db", borderRadius: 8,
                padding: "6px 10px", cursor: "pointer", fontSize: 16, lineHeight: 1,
                color: sfxEnabled ? "#78716c" : "#d1cdc4",
              }}
              title={sfxEnabled ? "Sound on" : "Sound off"}
            >
              {sfxEnabled ? "🔊" : "🔇"}
            </button>
            <h1 style={{ ...S.h1, fontSize: activeTab === "browse" ? 32 : 44, marginBottom: 4, transition: "font-size 0.2s ease" }}>
              <span style={{ fontStyle: "italic" }}>Counterfactual</span>
            </h1>
            <p style={{ ...S.muted, fontSize: 14, margin: "0 auto" }}>
              {activeTab === "browse" ? `${ALL_SUBJECTS.length} figures across history` : "Could history have gone another way?"}
            </p>
          </div>

          {activeTab === "play" && (<>
          {/* Rank card — clickable → stats */}
          {played.length > 0 && (
            <div
              onClick={() => { SFX.click(); setActiveTab("stats"); setScreen("stats"); scrollTop(); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 18px", marginBottom: 16, borderRadius: 12,
                background: `${rank.color}06`, border: `1px solid ${rank.color}18`,
                cursor: "pointer", transition: "all 0.15s ease",
              }}
              onMouseOver={e => { e.currentTarget.style.borderColor = `${rank.color}40`; e.currentTarget.style.background = `${rank.color}10`; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = `${rank.color}18`; e.currentTarget.style.background = `${rank.color}06`; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 26 }}>{rank.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: rank.color }}>{rank.title}</div>
                  {rank.next && <div style={{ fontSize: 11, color: "#9a9890" }}>{rank.next}</div>}
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {[
                  { val: score, label: "Pts" },
                  { val: played.length, label: "Played" },
                  { val: avgScore, label: "Avg" },
                  ...(streak > 0 ? [{ val: `${streak}🔥`, label: "Streak" }] : []),
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#1a1a1a", fontFamily: fontStack }}>{s.val}</div>
                    <div style={{ fontSize: 9, color: "#9a9890", fontWeight: 500, letterSpacing: "0.03em" }}>{s.label}</div>
                  </div>
                ))}
                <span style={{ fontSize: 16, color: "#d1cdc4", marginLeft: 4 }}>›</span>
              </div>
            </div>
          )}

          {/* Play tabs — Daily + Random side by side */}
          {(() => {
            const dailyFig = dailyState ? getDailyFigure() : null;
            const dayNum = dailyState ? getDayNumber() : 0;
            const dailyDone = dailyState?.completed;
            const dailyStrk = dailyState?.dailyStreak || 0;

            return (
              <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
                {/* Daily Challenge tab */}
                {dailyState && (
                  <button
                    onClick={dailyDone ? undefined : startDaily}
                    style={{
                      flex: 1, padding: "18px 14px", borderRadius: 12,
                      background: dailyDone
                        ? "#fefce8"
                        : "linear-gradient(135deg, #fffbeb, #fef3c7)",
                      border: dailyDone ? "1px solid #fde68a" : "2px solid #f59e0b",
                      cursor: dailyDone ? "default" : "pointer",
                      textAlign: "left", transition: "all 0.15s ease",
                      opacity: dailyDone ? 0.85 : 1,
                    }}
                    onMouseEnter={e => { if (!dailyDone) { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(245,158,11,0.12)"; }}}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 18 }}>🗓️</span>
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#92400e" }}>
                        Daily Challenge
                      </span>
                      {dailyStrk >= 2 && <span style={{ fontSize: 12, color: "#b45309" }}>🔥 {dailyStrk}</span>}
                    </div>
                    {dailyDone ? (
                      <div style={{ fontSize: 12, color: "#a16207" }}>
                        ✓ +{dailyState.points} pts · Next: {dailyCountdown || getTimeUntilNext()}
                      </div>
                    ) : (
                      <div style={{ fontSize: 12, color: "#a16207" }}>
                        {dailyFig.name} · {dailyFig.field}
                      </div>
                    )}
                  </button>
                )}

                {/* Play Random tab */}
                <button
                  onClick={startRandom}
                  style={{
                    flex: 1, padding: "18px 14px", borderRadius: 12,
                    background: challengeMode
                      ? "linear-gradient(135deg, #7c2d12, #991b1b)"
                      : "linear-gradient(135deg, #1a1a1a, #292524)",
                    border: "2px solid transparent",
                    cursor: "pointer", textAlign: "left", transition: "all 0.15s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 18 }}>{challengeMode ? "⚔️" : "🎲"}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>
                      {challengeMode ? "Challenge" : "Play Random"}
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                    {challengeMode ? "Hard entries · 2× points" : `${ALL_SUBJECTS.length - played.length} entries remaining`}
                  </div>
                </button>
              </div>
            );
          })()}

          {/* Secondary modes — compact pill row */}
          <div style={{
            display: "flex", gap: 8, justifyContent: "center", alignItems: "center",
            marginBottom: 24, flexWrap: "wrap",
          }}>
            <button onClick={startH2H} style={{
              ...S.btn, padding: "8px 16px", fontSize: 12, fontWeight: 700, borderRadius: 20,
              background: "#faf9f6", color: "#dc2626",
              border: "1px solid #fecaca",
            }}>
              ⚔️ Head-to-Head
            </button>
            {played.length >= 10 && (
              <button
                onClick={() => { setChallengeMode(prev => !prev); SFX.click(); }}
                style={{
                  ...S.btn, padding: "8px 16px", fontSize: 12, fontWeight: 700, borderRadius: 20,
                  background: challengeMode ? "#7c2d12" : "#faf9f6",
                  color: challengeMode ? "#fff" : "#7c2d12",
                  border: `1px solid ${challengeMode ? "#7c2d12" : "#ddd9d0"}`,
                }}
              >
                {challengeMode ? "🔥 Challenge: ON" : "⚔️ Challenge Mode"}
              </button>
            )}
            {streakShields > 0 && (
              <span style={{
                padding: "5px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                background: "#f0fdfa", border: "1px solid #99f6e4", color: "#0d9488",
              }}>
                🛡️ {streakShields}
              </span>
            )}
            {pointBoostRounds > 0 && (
              <span style={{
                padding: "5px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                background: "#fffbeb", border: "1px solid #fde68a", color: "#d97706",
              }}>
                ✨ +10% · {pointBoostRounds} left
              </span>
            )}
            {streak >= 3 && (
              <span style={{
                padding: "5px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                background: "#faf5ff", border: "1px solid #e9d5ff", color: "#7c3aed",
              }}>
                🔥 {streak}
              </span>
            )}
          </div>

          {/* Smart Recommendations — compact */}
          {(() => {
            const recs = getRecommendations(played, gameHistory, ALL_SUBJECTS);
            if (recs.length === 0) return null;
            const typeIcons = { connected: "🔗", weak: "🎯", challenge: "⬆️", comfort: "💪" };
            return (
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ ...S.h3, fontSize: 14, marginBottom: 10, color: "#7a7770" }}>
                  ✨ Recommended for You
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {recs.slice(0, 3).map((rec, i) => {
                    const fig = rec.figure;
                    const cat = CATS[fig.cat];
                    return (
                      <button key={i} onClick={() => selectSubject(fig)} style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "12px 16px", borderRadius: 12,
                        background: "#fff", border: "1px solid #e5e2db",
                        cursor: "pointer", textAlign: "left", width: "100%",
                        transition: "all 0.15s ease", minHeight: 48,
                      }}
                        onMouseOver={e => { e.currentTarget.style.borderColor = "#d1cdc4"; e.currentTarget.style.background = "#faf9f6"; }}
                        onMouseOut={e => { e.currentTarget.style.borderColor = "#e5e2db"; e.currentTarget.style.background = "#fff"; }}
                      >
                        <span style={{ fontSize: 18, flexShrink: 0 }}>{typeIcons[rec.type] || "✨"}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>{fig.name}</span>
                          <span style={{ fontSize: 12, color: "#9a9890", marginLeft: 8 }}>{rec.label}</span>
                          {streakRewards.includes("difficulty_peek") && (() => {
                            const dl = getDifficultyLabel(fig.r);
                            const dm = DIFFICULTY_MULTIPLIER(fig.r);
                            return (
                              <span style={{
                                fontSize: 10, fontWeight: 700, marginLeft: 6, padding: "1px 6px", borderRadius: 4,
                                background: dm.tier === "hard" ? "rgba(220,38,38,0.08)" : dm.tier === "medium" ? "rgba(217,119,6,0.08)" : "rgba(22,163,74,0.08)",
                                color: dm.tier === "hard" ? "#dc2626" : dm.tier === "medium" ? "#d97706" : "#16a34a",
                              }}>
                                {dl.label} {dm.mult > 1 ? dm.label : ""}
                              </span>
                            );
                          })()}
                        </div>
                        <span style={{ fontSize: 14, color: "#d1cdc4", flexShrink: 0 }}>›</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Analyze Any Figure — compact */}
          <div style={{
            padding: "14px 18px", borderRadius: 12, marginBottom: 24,
            background: "#fff", border: "1px solid #e5e2db",
          }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>🔍</span>
              <input
                type="text" value={customName}
                onChange={e => setCustomName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCustomSubmit()}
                placeholder="Analyze any figure not in the database..."
                style={{ ...S.input, flex: 1, border: "none", background: "transparent", padding: "4px 0" }}
              />
              <button
                onClick={handleCustomSubmit}
                disabled={!customName.trim() || customLoading}
                style={{
                  ...S.btn, ...S.btnPrimary, whiteSpace: "nowrap", padding: "8px 16px", fontSize: 13,
                  opacity: (!customName.trim() || customLoading) ? 0.4 : 1,
                  cursor: (!customName.trim() || customLoading) ? "not-allowed" : "pointer",
                }}
              >
                {customLoading ? "..." : "Go →"}
              </button>
            </div>
            {customLoading && (
              <div style={{ marginTop: 10, textAlign: "center", color: "#7a7770", fontSize: 13 }}>
                <div style={{ display: "inline-block", width: 14, height: 14, border: "2px solid #ddd9d0", borderTopColor: "#1a1a1a", borderRadius: "50%", animation: "spin 0.7s linear infinite", marginRight: 8, verticalAlign: "middle" }} />
                Researching {customName}...
              </div>
            )}
          </div>

          {/* Quick category picks on Play tab */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#9a9890", marginBottom: 10 }}>
              Or pick a category
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {Object.entries(CATS).slice(0, 8).map(([key, cat]) => {
                const total = ALL_SUBJECTS.filter(s => figInCat(s, key)).length;
                if (total === 0) return null;
                return (
                  <button key={key} onClick={() => { SFX.click(); setActiveTab("browse"); setActiveCategory(key); setSearchQuery(""); setScreen("category"); scrollTop(); }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      padding: "8px 14px", borderRadius: 20,
                      background: cat.bg, border: `1px solid ${cat.color}20`,
                      cursor: "pointer", fontSize: 13, fontWeight: 600, color: cat.color,
                      transition: "all 0.12s ease",
                    }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = `${cat.color}50`; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = `${cat.color}20`; }}
                  >
                    <span style={{ fontSize: 14 }}>{CAT_ICONS[key] || "📁"}</span>
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
          </>)}

          {activeTab === "browse" && (<>
          {/* Browse search bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 16px", marginBottom: 20, borderRadius: 12,
            background: "#fff", border: "1px solid #e5e2db",
          }}>
            <span style={{ fontSize: 15, color: "#b0ada6" }}>🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search all figures..."
              style={{ ...S.input, flex: 1, border: "none", background: "transparent", padding: "6px 0", fontSize: 14 }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#9a9890", padding: "4px" }}>✕</button>
            )}
          </div>

          {/* Browse search results */}
          {searchQuery.trim() && (() => {
            const q = searchQuery.toLowerCase().trim();
            const results = ALL_SUBJECTS.filter(s =>
              s.name.toLowerCase().includes(q) ||
              s.field.toLowerCase().includes(q) ||
              (s.cat && s.cat.toLowerCase().includes(q))
            ).slice(0, 12);
            if (results.length === 0) return (
              <div style={{ textAlign: "center", padding: "20px 0 24px", color: "#9a9890", fontSize: 14 }}>
                No figures found for "{searchQuery}"
              </div>
            );
            return (
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 12, color: "#9a9890", marginBottom: 10, fontWeight: 600 }}>
                  {results.length} result{results.length !== 1 ? "s" : ""}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {results.map(s => {
                    const cat = CATS[s.cat] || { color: "#64748b" };
                    const isPlayed = played.includes(s.id);
                    return (
                      <button key={s.id} onClick={() => selectSubject(s)} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "10px 14px", borderRadius: 12,
                        background: isPlayed ? "#f5f4f0" : "#fff",
                        border: "1px solid #e5e2db",
                        cursor: "pointer", width: "100%", textAlign: "left",
                        transition: "all 0.15s ease",
                      }}
                        onMouseOver={e => { e.currentTarget.style.borderColor = "#d1cdc4"; }}
                        onMouseOut={e => { e.currentTarget.style.borderColor = "#e5e2db"; }}
                      >
                        <span style={{ fontSize: 16 }}>{CAT_ICONS[s.cat] || "👤"}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#1a1a1a" }}>{s.name}</div>
                          <div style={{ fontSize: 11, color: "#9a9890" }}>{s.field}</div>
                        </div>
                        {isPlayed && <span style={{ fontSize: 10, color: "#16a34a", fontWeight: 600 }}>✓</span>}
                        <span style={{ fontSize: 12, color: "#d1cdc4" }}>›</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Browse by Category — people categories only */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ ...S.h3, fontSize: 14, marginBottom: 10, color: "#7a7770" }}>
              📂 Browse by Category
            </h3>
            <ScrollRow>
              {Object.entries(CATS).filter(([key]) => !["events","institutions","inventions"].includes(key)).map(([key, cat]) => {
                const catFigures = ALL_SUBJECTS.filter(s => figInCat(s, key));
                const catPlayed = catFigures.filter(f => played.includes(f.id)).length;
                const total = catFigures.length;
                const pct = total > 0 ? Math.round((catPlayed / total) * 100) : 0;
                if (total === 0) return null;

                return (
                  <div
                    key={key}
                    onClick={() => { setActiveTab("browse"); setActiveCategory(key); setSearchQuery(""); setScreen("category"); scrollTop(); }}
                    style={{
                      flex: "0 0 180px", scrollSnapAlign: "start",
                      padding: "14px 16px", borderRadius: 12,
                      background: cat.bg, border: `1px solid ${cat.color}18`,
                      cursor: "pointer", transition: "all 0.15s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 4px 14px ${cat.color}12`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{CAT_ICONS[key] || "📁"}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: cat.color, marginBottom: 2 }}>{cat.label}</div>
                    <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 8 }}>{total} figures</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ flex: 1, height: 3, borderRadius: 2, background: `${cat.color}15`, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: pct === 100 ? "#16a34a" : cat.color }} />
                      </div>
                      <span style={{ fontSize: 10, color: `${cat.color}88`, fontWeight: 600 }}>{catPlayed}/{total}</span>
                    </div>
                  </div>
                );
              })}
            </ScrollRow>
          </div>

          {/* Events / Institutions / Inventions — dedicated rows */}
          {[
            { key: "events", icon: "📅", title: "Events", desc: "Turning points that shaped the world" },
            { key: "institutions", icon: "🏢", title: "Institutions", desc: "Organizations that changed the game" },
            { key: "inventions", icon: "⚙️", title: "Inventions", desc: "Technologies that rewired civilization" },
          ].map(group => {
            const cat = CATS[group.key];
            const entries = ALL_SUBJECTS.filter(s => s.cat === group.key);
            if (entries.length === 0) return null;
            const groupPlayed = entries.filter(e => played.includes(e.id)).length;
            return (
              <div key={group.key} style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
                  <h3 style={{ ...S.h3, fontSize: 14, margin: 0, color: "#7a7770" }}>
                    {group.icon} {group.title}
                  </h3>
                  <span style={{ fontSize: 11, color: "#b0ada6" }}>{groupPlayed}/{entries.length} played</span>
                </div>
                <ScrollRow>
                  {entries.map(s => {
                    const isPlayed = played.includes(s.id);
                    return (
                      <div
                        key={s.id}
                        onClick={() => selectSubject(s)}
                        style={{
                          flex: "0 0 160px", scrollSnapAlign: "start",
                          padding: "12px 14px", borderRadius: 12,
                          background: isPlayed ? "#f5f4f0" : cat.bg,
                          border: `1px solid ${isPlayed ? "#d4d0c8" : cat.color + "18"}`,
                          cursor: "pointer", transition: "all 0.15s ease",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 4px 12px ${cat.color}12`; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                      >
                        <div style={{ fontSize: 13, fontWeight: 700, color: isPlayed ? "#7a7770" : "#1a1a1a", marginBottom: 4, lineHeight: 1.3 }}>
                          {s.name}
                        </div>
                        <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6 }}>{s.field}</div>
                        <div style={{ fontSize: 11, color: "#b0ada6" }}>
                          {s.born}{isPlayed && <span style={{ color: "#16a34a", fontWeight: 600, marginLeft: 6 }}>✓</span>}
                        </div>
                      </div>
                    );
                  })}
                </ScrollRow>
              </div>
            );
          })}

          {/* Themed Collections — compact */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ ...S.h3, fontSize: 14, marginBottom: 10, color: "#7a7770" }}>
              📚 Collections
            </h3>
            <ScrollRow>
              {COLLECTIONS.map(col => {
                const colFigures = col.figures.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);
                const playedCount = colFigures.filter(f => played.includes(f.id)).length;
                const total = colFigures.length;
                const pct = total > 0 ? Math.round((playedCount / total) * 100) : 0;

                return (
                  <div
                    key={col.id}
                    onClick={() => { setActiveTab("browse"); setActiveCollection(col); setScreen("collection"); scrollTop(); }}
                    style={{
                      flex: "0 0 180px", scrollSnapAlign: "start",
                      padding: "14px 16px", borderRadius: 12,
                      background: col.bg, border: `1px solid ${col.border}`,
                      cursor: "pointer", transition: "all 0.15s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 4px 14px ${col.color}12`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{col.emoji}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: col.color, marginBottom: 2 }}>{col.title}</div>
                    <div style={{ fontSize: 11, color: `${col.color}aa`, marginBottom: 8 }}>{col.subtitle}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ flex: 1, height: 3, borderRadius: 2, background: `${col.color}15`, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: col.color }} />
                      </div>
                      <span style={{ fontSize: 10, color: `${col.color}88`, fontWeight: 600 }}>{playedCount}/{total}</span>
                    </div>
                  </div>
                );
              })}
            </ScrollRow>
          </div>

          {/* Browse by Era — compact */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ ...S.h3, fontSize: 14, marginBottom: 10, color: "#7a7770" }}>
              🕰️ Eras
            </h3>
            <ScrollRow>
              {ERAS.map(era => {
                const eraFigures = ALL_SUBJECTS.filter(s => s.born >= era.min && s.born < era.max);
                const eraPlayed = eraFigures.filter(f => played.includes(f.id)).length;
                const total = eraFigures.length;
                const pct = total > 0 ? Math.round((eraPlayed / total) * 100) : 0;
                if (total === 0) return null;

                return (
                  <div
                    key={era.id}
                    onClick={() => { setActiveTab("browse"); setActiveEra(era); setScreen("era"); scrollTop(); }}
                    style={{
                      flex: "0 0 180px", scrollSnapAlign: "start",
                      padding: "14px 16px", borderRadius: 12,
                      background: era.bg, border: `1px solid ${era.color}18`,
                      cursor: "pointer", transition: "all 0.15s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 4px 14px ${era.color}12`; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontSize: 22, marginBottom: 6 }}>{era.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: era.color, marginBottom: 2 }}>{era.label}</div>
                    <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 8 }}>{era.range}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ flex: 1, height: 3, borderRadius: 2, background: `${era.color}15`, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: pct === 100 ? "#16a34a" : era.color }} />
                      </div>
                      <span style={{ fontSize: 10, color: `${era.color}88`, fontWeight: 600 }}>{eraPlayed}/{total}</span>
                    </div>
                  </div>
                );
              })}
            </ScrollRow>
          </div>

          {/* ═══ SCENARIO EXPLORER — compound "what if" scenarios ═══ */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ ...S.h3, fontSize: 14, marginBottom: 10, color: "#7a7770" }}>
              🦋 What If Scenarios
            </h3>
            <ScrollRow>
              {COMPOUND_SCENARIOS.map(sc => {
                const figures = sc.figureIds.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);
                const playedCount = figures.filter(f => played.includes(f.id)).length;
                const total = figures.length;
                const unlocked = playedCount === total;
                const unplayedFigs = figures.filter(f => !played.includes(f.id));

                return (
                  <div
                    key={sc.id}
                    onClick={() => {
                      if (unlocked) { setActiveTab("browse"); setSelectedScenario(sc); setScreen("scenario"); scrollTop(); }
                      else if (unplayedFigs.length === 1) { selectSubject(unplayedFigs[0]); }
                    }}
                    style={{
                      flex: "0 0 220px", scrollSnapAlign: "start",
                      padding: "16px 18px", borderRadius: 12,
                      background: unlocked
                        ? `linear-gradient(145deg, ${sc.color}08, ${sc.color}15)`
                        : "linear-gradient(145deg, #f8f7f5, #f0efec)",
                      border: `1px solid ${unlocked ? sc.color + "25" : "#e5e2db"}`,
                      cursor: unlocked || unplayedFigs.length === 1 ? "pointer" : "default",
                      transition: "all 0.2s ease",
                      opacity: unlocked ? 1 : 0.85,
                    }}
                    onMouseEnter={e => { if (unlocked || unplayedFigs.length === 1) { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 6px 20px ${unlocked ? sc.color : "#999"}18`; }}}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 8 }}>
                      {unlocked ? sc.emoji : "🔒"}
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: unlocked ? sc.color : "#7a7770", marginBottom: 3, lineHeight: 1.3 }}>
                      {sc.title}
                    </div>
                    <div style={{ fontSize: 12, color: unlocked ? `${sc.color}bb` : "#9a9890", marginBottom: 10, lineHeight: 1.4 }}>
                      {unlocked ? sc.subtitle : `Play all ${total} entries to unlock`}
                    </div>
                    {/* Figure chips with played state */}
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: unlocked ? 0 : 8 }}>
                      {figures.map(fig => {
                        const isPlayed = played.includes(fig.id);
                        return (
                          <span key={fig.id} style={{
                            fontSize: 11, padding: "4px 10px", borderRadius: 6, fontWeight: 600,
                            lineHeight: 1.3,
                            background: isPlayed
                              ? (unlocked ? `${sc.color}12` : "#dcfce720")
                              : "#f5f4f0",
                            color: isPlayed
                              ? (unlocked ? sc.color : "#16a34a")
                              : "#b0ada6",
                            border: isPlayed ? "none" : "1px dashed #d4d0c8",
                          }}>
                            {isPlayed ? "✓ " : ""}{fig.name.split(" ").pop()}
                          </span>
                        );
                      })}
                    </div>
                    {/* Progress bar + unlock hint */}
                    {!unlocked && (
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <div style={{ flex: 1, height: 4, borderRadius: 2, background: "#e5e2db", overflow: "hidden" }}>
                            <div style={{ width: `${(playedCount / total) * 100}%`, height: "100%", borderRadius: 2, background: "#7c3aed", transition: "width 0.3s ease" }} />
                          </div>
                          <span style={{ fontSize: 10, color: "#9a9890", fontWeight: 600 }}>{playedCount}/{total}</span>
                        </div>
                        {unplayedFigs.length === 1 && (
                          <div style={{ fontSize: 11, color: "#7c3aed", fontWeight: 600, marginTop: 6 }}>
                            ▶ Play {unplayedFigs[0].name.split(" ").pop()} to unlock →
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </ScrollRow>
          </div>

          {/* ═══ COMMUNITY FIGURES ═══ */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <h3 style={{ ...S.h3, fontSize: 14, color: "#7a7770", margin: 0 }}>
                🌍 Community Figures
              </h3>
              {communityAvailable && communityFigures.length > 0 && (
                <div style={{ display: "flex", gap: 4 }}>
                  {["top", "newest"].map(s => (
                    <button key={s} onClick={() => { setCommunitySort(s); fetchCommunityFigures(s); }} style={{
                      padding: "4px 10px", borderRadius: 8, border: "none", cursor: "pointer",
                      fontSize: 11, fontWeight: 600, fontFamily: sansStack,
                      background: communitySort === s ? "#1a1a1a" : "#f0efec",
                      color: communitySort === s ? "#fff" : "#7a7770",
                    }}>{s === "top" ? "Top voted" : "Newest"}</button>
                  ))}
                </div>
              )}
            </div>

            {communityAvailable === null && (
              <button onClick={() => fetchCommunityFigures()} style={{
                ...S.card, width: "100%", padding: "20px 22px", cursor: "pointer",
                textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
              }}>
                <span style={{ fontSize: 20 }}>🌍</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", fontFamily: fontStack }}>Browse community figures</div>
                  <div style={{ fontSize: 12, color: "#9a9890", fontFamily: sansStack, marginTop: 2 }}>Play figures created by other players</div>
                </div>
              </button>
            )}

            {communityLoading && (
              <div style={{ ...S.card, padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: 20, marginBottom: 8, animation: "pulse 1.5s ease-in-out infinite" }}>🌍</div>
                <div style={{ fontSize: 13, color: "#9a9890", fontFamily: sansStack }}>Loading community figures...</div>
              </div>
            )}

            {communityAvailable === false && !communityLoading && (
              <div style={{ ...S.card, padding: "16px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "#9a9890", fontFamily: sansStack }}>
                  Community figures aren't available yet — use the custom figure search to create and share your own!
                </div>
              </div>
            )}

            {communityAvailable && !communityLoading && communityFigures.length === 0 && (
              <div style={{ ...S.card, padding: "20px 22px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>🌱</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", fontFamily: fontStack, marginBottom: 4 }}>No community figures yet</div>
                <div style={{ fontSize: 13, color: "#9a9890", fontFamily: sansStack }}>
                  Be the first — search for a custom figure and share it!
                </div>
              </div>
            )}

            {communityAvailable && !communityLoading && communityFigures.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {communityFigures.map(entry => {
                  const fig = entry.figure;
                  const figCat = CATS[fig.cat] || { label: fig.cat || "Custom", color: "#64748b", bg: "rgba(100,116,139,0.06)" };
                  return (
                    <div key={entry.id} style={{
                      ...S.card, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12,
                    }}>
                      {/* Vote column */}
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, minWidth: 36 }}>
                        <button onClick={(e) => { e.stopPropagation(); voteCommunityFigure(entry.id, "up"); }} style={{
                          background: "none", border: "none", cursor: entry.userVote === "up" ? "default" : "pointer",
                          fontSize: 14, padding: "2px", color: entry.userVote === "up" ? "#16a34a" : "#c4c0b8",
                          opacity: entry.userVote === "down" ? 0.3 : 1,
                        }} disabled={!!entry.userVote}>▲</button>
                        <span style={{
                          fontSize: 14, fontWeight: 700, fontFamily: fontStack,
                          color: entry.votes > 0 ? "#16a34a" : entry.votes < 0 ? "#dc2626" : "#9a9890",
                        }}>{entry.votes}</span>
                        <button onClick={(e) => { e.stopPropagation(); voteCommunityFigure(entry.id, "down"); }} style={{
                          background: "none", border: "none", cursor: entry.userVote === "down" ? "default" : "pointer",
                          fontSize: 14, padding: "2px", color: entry.userVote === "down" ? "#dc2626" : "#c4c0b8",
                          opacity: entry.userVote === "up" ? 0.3 : 1,
                        }} disabled={!!entry.userVote}>▼</button>
                      </div>

                      {/* Figure info */}
                      <button onClick={() => playCommunityFigure(entry)} style={{
                        flex: 1, textAlign: "left", background: "none", border: "none",
                        cursor: "pointer", padding: 0, minWidth: 0,
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                          <span style={S.tag(figCat.color, figCat.bg)}>{figCat.label}</span>
                          {entry.playCount > 0 && (
                            <span style={{ fontSize: 10, color: "#9a9890", fontFamily: sansStack }}>
                              {entry.playCount} play{entry.playCount !== 1 ? "s" : ""}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", fontFamily: fontStack }}>{fig.name}</div>
                        <div style={{ fontSize: 12, color: "#7a7770", fontFamily: sansStack, marginTop: 2 }}>
                          {fig.field}{fig.born != null ? ` · ${formatLifespan(fig.born, fig.died)}` : ""}
                        </div>
                        <div style={{ fontSize: 11, color: "#a8a29e", fontFamily: sansStack, marginTop: 3 }}>
                          by {entry.submitterName}
                        </div>
                      </button>

                      {/* Play arrow */}
                      <span style={{ fontSize: 16, color: figCat.color, fontWeight: 700 }}>→</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          </>)}
        </div>
      <TabBar />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SCENARIO EXPLORER SCREEN — compound "what if" scenarios
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "scenario" && selectedScenario) {
    const sc = selectedScenario;
    const figures = sc.figureIds.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 680, paddingBottom: 70 }}>
          <BackButton />
          <div style={{ ...S.card, padding: 32 }}>

            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 52, marginBottom: 12 }}>{sc.emoji}</div>
              <h2 style={{ ...S.h2, fontSize: 26, marginBottom: 6, color: sc.color }}>{sc.title}</h2>
              <p style={{ fontSize: 14, color: "#7a7770", margin: 0 }}>{sc.subtitle}</p>
            </div>

            {/* Removed figures grid — show player's results */}
            <div style={{
              display: "grid", gridTemplateColumns: `repeat(${Math.min(figures.length, 3)}, 1fr)`, gap: 10,
              marginBottom: 24,
            }}>
              {figures.map(fig => {
                const history = gameHistory.find(h => h.id === fig.id);
                const playerPred = history ? history.pred : null;
                const actual = Math.round(toWeight(fig.r ?? 0.5) * 100);
                return (
                  <div key={fig.id} style={{
                    textAlign: "center", padding: "16px 12px", borderRadius: 12,
                    background: "#fef2f2", border: "1px solid #fecaca",
                  }}>
                    <div style={{
                      fontSize: 28, marginBottom: 6, position: "relative",
                      display: "inline-block",
                    }}>
                      <span style={{ opacity: 0.3, filter: "grayscale(1)" }}>{CAT_ICONS[fig.cat] || "👤"}</span>
                      <span style={{
                        position: "absolute", top: -4, right: -8, fontSize: 16,
                      }}>❌</span>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#991b1b", lineHeight: 1.3 }}>
                      {fig.name}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 400, color: "#dc2626", marginTop: 4, fontFamily: fontStack }}>
                      {actual}%
                    </div>
                    <div style={{ fontSize: 10, color: "#b91c1c", marginTop: 1 }}>weight</div>
                    {playerPred !== null && (
                      <div style={{
                        fontSize: 11, color: Math.abs(playerPred - actual) < 15 ? "#16a34a" : "#9a9890",
                        marginTop: 4, fontWeight: 600,
                      }}>
                        You guessed {playerPred}%
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Compound effect narrative */}
            <div style={{
              padding: "20px 22px", borderRadius: 12,
              background: `linear-gradient(145deg, ${sc.color}06, ${sc.color}10)`,
              border: `2px solid ${sc.color}20`,
              marginBottom: 24,
            }}>
              <h3 style={{ ...S.sectionHeader, color: sc.color, marginBottom: 10 }}>
                <span>🔗</span> The Compound Effect
              </h3>
              <p style={{ color: "#3a3a3a", lineHeight: 1.75, fontSize: 14, margin: 0 }}>
                {sc.compoundEffect}
              </p>
            </div>

            {/* Modern world consequences */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ ...S.sectionHeader, color: sc.color, marginBottom: 12 }}>
                <span>🌍</span> The Modern World Without Them
              </h3>
              <div style={{ display: "grid", gap: 12 }}>
                {sc.modernWorld.map((mw, i) => (
                  <div key={i} style={{
                    padding: "16px 18px", borderRadius: 12,
                    background: i === 0 ? "#fef2f2" : i === 1 ? "#fefce8" : "#f0f9ff",
                    border: `1px solid ${i === 0 ? "#fecaca" : i === 1 ? "#fef08a" : "#bae6fd"}`,
                  }}>
                    <div style={{
                      fontSize: 12, fontWeight: 700, textTransform: "uppercase",
                      letterSpacing: "0.05em", marginBottom: 8,
                      color: i === 0 ? "#dc2626" : i === 1 ? "#ca8a04" : "#0369a1",
                    }}>
                      {mw.area}
                    </div>
                    <div style={{ fontSize: 14, color: "#3a3a3a", lineHeight: 1.7 }}>
                      {mw.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual figure links */}
            <div style={{ marginBottom: 8 }}>
              <h3 style={{ ...S.sectionHeader, color: "#7a7770", marginBottom: 10 }}>
                <span>👤</span> Explore Individually
              </h3>
              <div style={{ display: "grid", gap: 8 }}>
                {figures.map(fig => {
                  const figCat = CATS[fig.cat] || { color: "#64748b" };
                  const wasPlayed = played.includes(fig.id);
                  return (
                    <button
                      key={fig.id}
                      onClick={() => selectSubject(fig)}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "14px 16px", borderRadius: 12,
                        background: wasPlayed ? "#f5f4f0" : "#fff",
                        border: `1px solid ${wasPlayed ? "#e5e2db" : figCat.color + "30"}`,
                        cursor: "pointer", width: "100%", textAlign: "left",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                    >
                      <span style={{ fontSize: 20 }}>{CAT_ICONS[fig.cat] || "👤"}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a", fontFamily: fontStack }}>{fig.name}</div>
                        <div style={{ fontSize: 12, color: "#9a9890", marginTop: 1 }}>{fig.field}</div>
                      </div>
                      {wasPlayed && <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600 }}>✓ played</span>}
                      <span style={{ fontSize: 14, color: "#b0ada5" }}>→</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      <TabBar />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // STATS & ACHIEVEMENTS SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "stats") {
    const avgPts = played.length > 0 ? Math.round(score / played.length) : 0;
    const rank = getRank(avgPts, played.length);
    const history = gameHistory;
    const totalGames = history.length;

    // Category breakdown
    const catStats = {};
    Object.keys(CATS).forEach(key => { catStats[key] = { played: 0, totalPts: 0, totalDiff: 0 }; });
    history.forEach(g => {
      if (catStats[g.cat]) {
        catStats[g.cat].played++;
        catStats[g.cat].totalPts += g.pts;
        catStats[g.cat].totalDiff += g.diff;
      }
    });

    // Best and worst games
    const sortedByPts = [...history].sort((a, b) => b.pts - a.pts);
    const bestGames = sortedByPts.slice(0, 5);
    const worstGames = sortedByPts.slice(-5).reverse();

    // Accuracy distribution
    const distBuckets = [0, 0, 0, 0, 0]; // 90-100, 64-89, 36-63, 1-35, 0
    history.forEach(g => {
      if (g.pts >= 90) distBuckets[0]++;
      else if (g.pts >= 64) distBuckets[1]++;
      else if (g.pts >= 36) distBuckets[2]++;
      else if (g.pts >= 1) distBuckets[3]++;
      else distBuckets[4]++;
    });
    const distMax = Math.max(...distBuckets, 1);

    // Recent performance (last 20 games)
    const recent20 = history.slice(-20);
    const recentAvg = recent20.length > 0 ? Math.round(recent20.reduce((a, g) => a + g.pts, 0) / recent20.length) : 0;

    // Achievements
    const earned = ACHIEVEMENTS.filter(a => a.check(history, played, dailyState, streakRewards));
    const locked = ACHIEVEMENTS.filter(a => !a.check(history, played, dailyState, streakRewards));

    // Collections progress
    const colProgress = COLLECTIONS.map(col => {
      const figs = col.figures.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);
      const done = figs.filter(f => played.includes(f.id)).length;
      return { ...col, done, total: figs.length, complete: done === figs.length };
    });

    const distLabels = ["🎯 90-100", "🔥 64-89", "✨ 36-63", "🤔 1-35", "😮 0"];
    const distColors = ["#16a34a", "#65a30d", "#ca8a04", "#ea580c", "#dc2626"];

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <ShareModal />
        <div style={{...S.inner, paddingBottom: 70}}>

          {/* Profile card — rank hero + stats banner + horizontal ladder */}
          <div style={{
            ...S.card, textAlign: "center", marginBottom: 24,
            background: "linear-gradient(180deg, #faf9f6, #f5f4f0)",
            animation: "fadeUp 0.35s ease both",
          }}>
            {/* Rank hero */}
            <div style={{ fontSize: 48, marginBottom: 6 }}>{rank.icon}</div>
            <h2 style={{ ...S.h2, fontSize: 28, color: rank.color, marginBottom: 4 }}>
              {rank.title}
              {streakRewards.includes("oracle_badge") && (
                <span style={{ fontSize: 14, marginLeft: 8, padding: "2px 8px", borderRadius: 12, background: "#fce7f3", color: "#be185d", fontWeight: 600, verticalAlign: "middle" }}>
                  🏛️ Oracle
                </span>
              )}
            </h2>
            <p style={{ fontSize: 14, color: "#9a9890", fontWeight: 600, marginBottom: 2 }}>
              Top {rank.topPct}% of players
            </p>
            {rank.next && (
              <p style={{ fontSize: 12, color: rank.color, fontWeight: 600, marginBottom: 0, opacity: 0.8 }}>
                {rank.next}
              </p>
            )}

            {/* Stats banner */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1,
              background: "#e5e2db", borderRadius: 12, overflow: "hidden",
              marginTop: 20,
            }}>
              {[
                { label: "Played", value: played.length, icon: "📚" },
                { label: "Total Pts", value: score, icon: "⭐" },
                { label: "Avg Pts", value: avgPts, icon: "🎯" },
                { label: "Accuracy", value: totalGames > 0 ? `${Math.round(history.reduce((a, g) => a + (100 - g.diff), 0) / totalGames)}%` : "—", icon: "🎪" },
                { label: "Best Streak", value: bestStreak, icon: "🔥" },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "#fff", padding: "14px 4px",
                  textAlign: "center",
                }}>
                  <div style={{ fontSize: 16, marginBottom: 3 }}>{stat.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a" }}>{stat.value}</div>
                  <div style={{ fontSize: 9, color: "#9a9890", fontWeight: 600 }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Horizontal rank ladder */}
            <div style={{ marginTop: 20, padding: "0 4px" }}>
              {/* Track */}
              <div style={{
                display: "flex", alignItems: "stretch",
                borderRadius: 12, overflow: "hidden", border: "1px solid #e5e2db",
                background: "#f5f4f0",
              }}>
                {[...RANK_LADDER].reverse().map((r, i) => {
                  const isCurrent = r.title === rank.title;
                  const isBelow = RANK_LADDER.indexOf(r) > RANK_LADDER.findIndex(x => x.title === rank.title);
                  const isLast = i === RANK_LADDER.length - 1;
                  return (
                    <div key={r.title} style={{
                      flex: 1, padding: "10px 2px 8px", textAlign: "center",
                      background: isCurrent
                        ? `${r.color}15`
                        : isBelow ? "#f5f4f0" : `${r.color}08`,
                      borderRight: isLast ? "none" : "1px solid #e5e2db",
                      position: "relative",
                    }}>
                      {isCurrent && (
                        <div style={{
                          position: "absolute", top: 0, left: 0, right: 0, height: 3,
                          background: r.color, borderRadius: "0 0 2px 2px",
                        }} />
                      )}
                      <div style={{
                        fontSize: isCurrent ? 18 : 14,
                        marginBottom: 2,
                        opacity: isBelow ? 0.35 : isCurrent ? 1 : 0.6,
                      }}>{r.icon}</div>
                      <div style={{
                        fontSize: isCurrent ? 11 : 9,
                        fontWeight: isCurrent ? 800 : 600,
                        color: isCurrent ? r.color : isBelow ? "#d1cdc4" : "#9a9890",
                        lineHeight: 1.2,
                      }}>{r.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Share Profile */}
            {played.length >= 5 && (
              <button onClick={() => shareMilestone({ isProfile: true })} style={{
                ...S.btn, ...S.btnSecondary, marginTop: 16, fontSize: 13, padding: "10px 20px",
              }}>
                📤 Share Profile Card
              </button>
            )}
          </div>

          {/* Your Tendencies — only show with enough data */}
          {totalGames >= 10 && (() => {
            // Bias: average of (pred - actual), positive = overestimates impact
            const biasSum = history.reduce((a, g) => a + (g.pred - g.r), 0);
            const avgBias = biasSum / totalGames;
            const biasDir = avgBias > 3 ? "over" : avgBias < -3 ? "under" : "balanced";
            const biasAbs = Math.abs(Math.round(avgBias));

            // Best & worst categories (min 3 games in category)
            const catEntries = Object.entries(catStats)
              .filter(([, s]) => s.played >= 3)
              .map(([key, s]) => ({ key, avg: Math.round(s.totalPts / s.played), label: CATS[key]?.label || key }));
            catEntries.sort((a, b) => b.avg - a.avg);
            const bestCat = catEntries[0];
            const worstCat = catEntries.length > 1 ? catEntries[catEntries.length - 1] : null;

            // Improvement: first half vs second half
            const half = Math.floor(totalGames / 2);
            const firstHalf = history.slice(0, half);
            const secondHalf = history.slice(half);
            const firstAvg = Math.round(firstHalf.reduce((a, g) => a + g.pts, 0) / firstHalf.length);
            const secondAvg = Math.round(secondHalf.reduce((a, g) => a + g.pts, 0) / secondHalf.length);
            const improving = secondAvg - firstAvg;

            // Build insight sentences
            const insights = [];
            if (biasDir === "over") {
              insights.push({ icon: "📐", text: `You tend to overestimate historical weight by about ${biasAbs} points. Many entries carried less weight than your gut says.` });
            } else if (biasDir === "under") {
              insights.push({ icon: "📐", text: `You tend to underestimate historical weight by about ${biasAbs} points. The specific form matters more than you think.` });
            } else {
              insights.push({ icon: "📐", text: "Your predictions are well-calibrated — no consistent lean toward overrating or underrating impact." });
            }
            if (bestCat) {
              insights.push({ icon: "💪", text: `Strongest category: ${bestCat.label} (${bestCat.avg} avg pts)${worstCat && worstCat.avg < bestCat.avg - 10 ? `. Weakest: ${worstCat.label} (${worstCat.avg} avg pts).` : "."}` });
            }
            if (improving > 5) {
              insights.push({ icon: "📈", text: `You're improving — your recent games average ${secondAvg} pts, up from ${firstAvg} in your first ${half} games.` });
            } else if (improving < -5) {
              insights.push({ icon: "📉", text: `Your early games averaged ${firstAvg} pts, but recent ones dropped to ${secondAvg}. Harder entries, or getting overconfident?` });
            } else {
              insights.push({ icon: "📊", text: `Consistent performer — averaging ${firstAvg} pts early and ${secondAvg} pts recently.` });
            }

            return (
              <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.1s both" }}>
                <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 16 }}>
                  🧠 Your Tendencies
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {insights.map((ins, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 12, alignItems: "flex-start",
                      padding: "12px 14px", borderRadius: 12,
                      background: "#faf9f6", border: "1px solid #f0efeb",
                    }}>
                      <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.4 }}>{ins.icon}</span>
                      <p style={{ fontSize: 14, color: "#4a4840", lineHeight: 1.55, margin: 0 }}>{ins.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Pattern Insights — teaches transferable counterfactual thinking */}
          {(() => {
            const patterns = getPatternInsights(history);
            if (patterns.length === 0) return null;
            return (
              <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.12s both" }}>
                <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 6 }}>
                  🎓 Pattern Insights
                </h3>
                <p style={{ ...S.muted, fontSize: 13, marginBottom: 16 }}>
                  Thinking patterns from your play history
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {patterns.map((p, i) => {
                    const catInfo = p.cat ? CATS[p.cat] : null;
                    return (
                      <div key={i} style={{
                        padding: "16px 18px", borderRadius: 12,
                        background: p.cross ? "linear-gradient(135deg, #faf5ff, #f0f9ff)" : "#faf9f6",
                        border: p.cross ? "1px solid #e9d5ff" : "1px solid #f0efeb",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                          <span style={{ fontSize: 16 }}>{p.icon}</span>
                          <span style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a" }}>{p.title}</span>
                          {catInfo && (
                            <span style={{
                              fontSize: 10, fontWeight: 700, color: catInfo.color,
                              padding: "2px 8px", borderRadius: 4, background: catInfo.bg,
                              marginLeft: "auto",
                            }}>
                              {catInfo.label}
                            </span>
                          )}
                          {p.cross && (
                            <span style={{
                              fontSize: 10, fontWeight: 700, color: "#7c3aed",
                              padding: "2px 8px", borderRadius: 4, background: "rgba(124,58,237,0.06)",
                              marginLeft: "auto",
                            }}>
                              Cross-category
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize: 13, color: "#4a4840", lineHeight: 1.65, margin: 0 }}>
                          {p.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })()}

          {/* Achievements */}
          <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.15s both" }}>
            <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 4 }}>
              🏅 Achievements
            </h3>
            <p style={{ ...S.muted, fontSize: 13, marginBottom: 16 }}>
              {earned.length} of {ACHIEVEMENTS.length} unlocked
            </p>

            {/* Progress bar */}
            <div style={{
              height: 6, borderRadius: 4, background: "#f0efeb", marginBottom: 18, overflow: "hidden",
            }}>
              <div style={{
                width: `${(earned.length / ACHIEVEMENTS.length) * 100}%`,
                height: "100%", borderRadius: 4,
                background: "linear-gradient(90deg, #f59e0b, #16a34a)",
                transition: "width 0.5s ease",
              }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 8 }}>
              {earned.map(a => (
                <div key={a.id} style={{
                  padding: "12px", borderRadius: 12,
                  background: "#fefce8", border: "1px solid #fde68a",
                  position: "relative",
                }}>
                  <div style={{ fontSize: 24, marginBottom: 4 }}>{a.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>{a.title}</div>
                  <div style={{ fontSize: 11, color: "#92400e", marginBottom: 6 }}>{a.desc}</div>
                  <button
                    onClick={(e) => { e.stopPropagation(); shareMilestone({ achievement: a }); }}
                    style={{
                      background: "none", border: "none", cursor: "pointer",
                      fontSize: 11, color: "#b45309", fontWeight: 600,
                      padding: "2px 0", opacity: 0.7,
                    }}
                    onMouseOver={e => e.currentTarget.style.opacity = "1"}
                    onMouseOut={e => e.currentTarget.style.opacity = "0.7"}
                  >
                    📤 Share
                  </button>
                </div>
              ))}
              {locked.map(a => (
                <div key={a.id} style={{
                  padding: "12px", borderRadius: 12,
                  background: "#faf9f6", border: "1px solid #e5e2db",
                  opacity: 0.5,
                }}>
                  <div style={{ fontSize: 24, marginBottom: 4, filter: "grayscale(1)" }}>{a.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#9a9890" }}>{a.title}</div>
                  <div style={{ fontSize: 11, color: "#b0ada5" }}>{a.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Streak Rewards */}
          <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.2s both" }}>
            <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 4 }}>
              ⚡ Streak Rewards
            </h3>
            <p style={{ ...S.muted, fontSize: 13, marginBottom: 16 }}>
              Earn rewards by building accuracy streaks · Best: {bestStreak}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {STREAK_MILESTONES.map(m => {
                const unlocked = streakRewards.includes(m.reward);
                const isNext = !unlocked && STREAK_MILESTONES.filter(sm => sm.at < m.at).every(sm => streakRewards.includes(sm.reward) || bestStreak >= sm.at);
                return (
                  <div key={m.at} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                    borderRadius: 12,
                    background: unlocked ? "linear-gradient(135deg, #fefce8, #fffbeb)" : isNext ? "#faf9f6" : "#faf9f6",
                    border: `1px solid ${unlocked ? "#fde68a" : isNext ? "#e8e6e1" : "#f0efeb"}`,
                    opacity: unlocked || isNext ? 1 : 0.55,
                  }}>
                    <div style={{ fontSize: 24, flexShrink: 0 }}>{unlocked ? m.emoji : "🔒"}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: unlocked ? "#92400e" : "#7a7770" }}>
                        {m.at}-Round Streak — {m.label}
                      </div>
                      <div style={{ fontSize: 12, color: unlocked ? "#b45309" : "#9a9890", marginTop: 2 }}>
                        {unlocked ? `✓ ${m.rewardLabel}` : m.rewardLabel}
                      </div>
                    </div>
                    <div style={{
                      fontSize: 13, fontWeight: 700, whiteSpace: "nowrap",
                      color: unlocked ? "#16a34a" : "#b0ada6",
                    }}>
                      {unlocked ? "Earned" : `+${m.bonus} pts`}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active perks summary */}
            {(streakShields > 0 || pointBoostRounds > 0 || streakRewards.includes("oracle_badge") || streakRewards.includes("golden_share") || streakRewards.includes("difficulty_peek")) && (
              <div style={{
                marginTop: 14, padding: "12px 14px", borderRadius: 12,
                background: "#f0fdf4", border: "1px solid #bbf7d0",
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#166534", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Active Perks
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {streakShields > 0 && (
                    <span style={{ padding: "4px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, background: "#ccfbf1", color: "#0d9488" }}>
                      🛡️ {streakShields} Streak Shield{streakShields > 1 ? "s" : ""}
                    </span>
                  )}
                  {pointBoostRounds > 0 && (
                    <span style={{ padding: "4px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, background: "#fef3c7", color: "#d97706" }}>
                      ✨ +10% Boost ({pointBoostRounds} rounds)
                    </span>
                  )}
                  {streakRewards.includes("difficulty_peek") && (
                    <span style={{ padding: "4px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, background: "#faf5ff", color: "#7c3aed" }}>
                      👁️ Difficulty Peek
                    </span>
                  )}
                  {streakRewards.includes("golden_share") && (
                    <span style={{ padding: "4px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, background: "#fef3c7", color: "#b45309" }}>
                      ✨ Golden Share Card
                    </span>
                  )}
                  {streakRewards.includes("oracle_badge") && (
                    <span style={{ padding: "4px 10px", borderRadius: 12, fontSize: 12, fontWeight: 600, background: "#fce7f3", color: "#be185d" }}>
                      🏛️ Oracle Badge
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Category Breakdown */}
          {totalGames > 0 && (
            <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.25s both" }}>
              <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 6 }}>
                🗂️ Category Breakdown
              </h3>
              {/* Score distribution summary — compact inline */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                {[
                  { label: "90+", count: distBuckets[0], color: "#16a34a" },
                  { label: "64-89", count: distBuckets[1], color: "#65a30d" },
                  { label: "36-63", count: distBuckets[2], color: "#ca8a04" },
                  { label: "<36", count: distBuckets[3] + distBuckets[4], color: "#dc2626" },
                ].filter(b => b.count > 0).map((b, i) => (
                  <span key={i} style={{
                    fontSize: 11, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                    background: `${b.color}10`, color: b.color,
                  }}>
                    {b.label}: {b.count}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {Object.entries(catStats)
                  .filter(([, s]) => s.played > 0)
                  .sort((a, b) => b[1].played - a[1].played)
                  .map(([key, stats]) => {
                    const cat = CATS[key];
                    if (!cat) return null;
                    const avg = Math.round(stats.totalPts / stats.played);
                    const total = ALL_SUBJECTS.filter(s => figInCat(s, key)).length;
                    return (
                      <div key={key} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "10px 14px", borderRadius: 12,
                        background: cat.bg, border: `1px solid ${cat.color}15`,
                      }}>
                        <span style={{
                          ...S.tag(cat.color, cat.bg), fontSize: 11, flexShrink: 0,
                        }}>{cat.label}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                            <span style={{ fontSize: 12, color: "#7a7770" }}>
                              {stats.played}/{total} played
                            </span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: avg >= 64 ? "#16a34a" : avg >= 36 ? "#ca8a04" : "#dc2626" }}>
                              {avg} avg pts
                            </span>
                          </div>
                          <div style={{ height: 4, borderRadius: 2, background: `${cat.color}15`, overflow: "hidden" }}>
                            <div style={{
                              width: `${(stats.played / total) * 100}%`,
                              height: "100%", borderRadius: 2,
                              background: cat.color,
                            }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Best Calls */}
          {bestGames.length > 0 && (
            <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.3s both" }}>
              <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 14 }}>
                🏆 Best Calls
              </h3>
              {bestGames.map((g, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "8px 0",
                  borderBottom: i < bestGames.length - 1 ? "1px solid #f0efeb" : "none",
                }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: "50%",
                    background: i === 0 ? "#fef3c7" : "#f5f4f0",
                    color: i === 0 ? "#d97706" : "#9a9890",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, flexShrink: 0,
                  }}>{i + 1}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {g.name}
                    </div>
                    <div style={{ fontSize: 11, color: "#9a9890" }}>
                      Guessed {g.pred}% · Actual {g.r}%
                    </div>
                  </div>
                  <span style={{
                    fontSize: 14, fontWeight: 700,
                    color: g.pts >= 90 ? "#16a34a" : g.pts >= 64 ? "#65a30d" : "#ca8a04",
                  }}>{g.pts}</span>
                </div>
              ))}
            </div>
          )}

          {/* Collections Progress */}
          <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.35s both" }}>
            <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 14 }}>
              📚 Collections Progress
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {colProgress.map(col => (
                <div key={col.id} onClick={() => { setActiveTab("browse"); setActiveCollection(col); setScreen("collection"); scrollTop(); }} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 14px", borderRadius: 12, cursor: "pointer",
                  background: col.complete ? col.bg : "#faf9f6",
                  border: `1px solid ${col.complete ? col.color + "40" : "#e5e2db"}`,
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{col.complete ? "✅" : col.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: col.complete ? col.color : "#1a1a1a" }}>
                      {col.title}
                    </div>
                    <div style={{ height: 4, borderRadius: 2, background: `${col.color}15`, marginTop: 4, overflow: "hidden" }}>
                      <div style={{
                        width: `${col.total > 0 ? (col.done / col.total) * 100 : 0}%`,
                        height: "100%", borderRadius: 2, background: col.color,
                      }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: col.complete ? col.color : "#9a9890" }}>
                    {col.done}/{col.total}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Debate History */}
          {(() => {
            const debates = gameHistory.filter(h => h.type === "debate");
            if (debates.length === 0) return null;
            const avgScore = Math.round(debates.reduce((s, d) => s + (d.score || 0), 0) / debates.length);
            const bestDebate = debates.reduce((best, d) => (d.score || 0) > (best.score || 0) ? d : best, debates[0]);
            const wins = debates.filter(d => (d.score || 0) >= 70).length;
            return (
              <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.38s both" }}>
                <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 12 }}>
                  ⚔️ Debate Record
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 14 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 24, fontWeight: 700, fontFamily: fontStack, color: "#6d28d9" }}>{debates.length}</div>
                    <div style={{ fontSize: 11, color: "#9a9890", fontFamily: sansStack }}>debates</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 24, fontWeight: 700, fontFamily: fontStack, color: wins > 0 ? "#16a34a" : "#9a9890" }}>{wins}</div>
                    <div style={{ fontSize: 11, color: "#9a9890", fontFamily: sansStack }}>won (70+)</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 24, fontWeight: 700, fontFamily: fontStack, color: avgScore >= 60 ? "#d97706" : "#9a9890" }}>{avgScore}</div>
                    <div style={{ fontSize: 11, color: "#9a9890", fontFamily: sansStack }}>avg score</div>
                  </div>
                </div>
                {bestDebate && bestDebate.score > 0 && (
                  <div style={{
                    padding: "10px 14px", borderRadius: 10,
                    background: "#f5f3ff", border: "1px solid #e9d5ff",
                    fontSize: 13, color: "#6d28d9", fontFamily: sansStack,
                  }}>
                    Best debate: <strong>{bestDebate.name}</strong> — {bestDebate.grade} ({bestDebate.score}/100)
                  </div>
                )}
              </div>
            );
          })()}

          {/* Backup & Restore */}
          <div style={{ ...S.card, marginBottom: 24, animation: "fadeUp 0.35s ease 0.4s both" }}>
            <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 6 }}>
              💾 Backup & Restore
            </h3>
            <p style={{ fontSize: 13, color: "#78716c", margin: "0 0 16px", lineHeight: 1.5, fontFamily: sansStack }}>
              Your progress lives in this browser's storage. Export a backup to keep it safe or move it to another device.
            </p>
            {typeof window !== "undefined" && window.storage && typeof window.storage.get === "function" && (
              <div style={{ padding: "8px 12px", borderRadius: 8, background: "#f0fdf4", border: "1px solid #bbf7d0", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 14 }}>☁️</span>
                <span style={{ fontSize: 12, color: "#166534", fontFamily: sansStack }}>
                  Cloud sync active — your progress is backed up automatically
                </span>
              </div>
            )}
            {!isStorageAvailable() && (
              <div style={{ padding: "10px 14px", borderRadius: 10, background: "#fef2f2", border: "1px solid #fecaca", marginBottom: 14 }}>
                <span style={{ fontSize: 13, color: "#b91c1c", fontFamily: sansStack }}>
                  ⚠️ Browser storage is unavailable (incognito mode or restricted). Your progress won't be saved between sessions.
                </span>
              </div>
            )}
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => { exportAllData(); showToast("📦 Backup downloaded"); }}
                style={{
                  flex: 1, padding: "12px 16px", borderRadius: 10,
                  background: "#1a1a1a", color: "#fff", border: "none",
                  fontFamily: sansStack, fontWeight: 600, fontSize: 14,
                  cursor: "pointer",
                }}
              >
                ⬇️ Export Backup
              </button>
              <label style={{
                flex: 1, padding: "12px 16px", borderRadius: 10,
                background: "#faf9f6", color: "#1a1a1a", border: "1px solid #e5e2db",
                fontFamily: sansStack, fontWeight: 600, fontSize: 14,
                cursor: "pointer", textAlign: "center",
              }}>
                ⬆️ Import Backup
                <input
                  type="file"
                  accept=".json"
                  style={{ display: "none" }}
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const result = await importAllData(file);
                    if (result.success) {
                      showToast(`✅ ${result.message}`, 4000);
                      setTimeout(() => window.location.reload(), 2000);
                    } else {
                      showToast(`❌ ${result.message}`, 4000);
                    }
                    e.target.value = "";
                  }}
                />
              </label>
            </div>
            {played.length > 0 && (
              <div style={{ fontSize: 12, color: "#a8a29e", marginTop: 10, fontFamily: sansStack, textAlign: "center" }}>
                {played.length} games · {gameHistory.length} history entries
              </div>
            )}
          </div>

        </div>
      <TabBar />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CATEGORY SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "category" && activeCategory) {
    const catKey = activeCategory;
    const cat = CATS[catKey] || { label: catKey, color: "#64748b", bg: "#f5f4f0" };
    const catFigures = ALL_SUBJECTS.filter(s => figInCat(s, catKey));
    const playedCount = catFigures.filter(f => played.includes(f.id)).length;
    const total = catFigures.length;
    const allDone = playedCount === total;
    const nextUnplayed = catFigures.find(f => !played.includes(f.id));

    const filtered = searchQuery.trim()
      ? catFigures.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.field.toLowerCase().includes(searchQuery.toLowerCase()))
      : catFigures;

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{...S.inner, paddingBottom: 70}}>
          <BackButton />

          {/* Category header */}
          <div style={{
            background: cat.bg, borderRadius: 16, padding: "24px 24px 20px",
            border: `2px solid ${cat.color}25`, marginBottom: 24,
            animation: "fadeUp 0.35s ease both",
          }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>{CAT_ICONS[catKey] || "📁"}</div>
            <h2 style={{ ...S.h2, fontSize: 28, color: cat.color, marginBottom: 6 }}>{cat.label}</h2>
            <p style={{ fontSize: 14, color: `${cat.color}bb`, margin: "0 0 18px" }}>
              {total} figures
            </p>

            {/* Progress */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <div style={{ flex: 1, height: 8, borderRadius: 4, background: `${cat.color}15`, overflow: "hidden" }}>
                <div style={{
                  width: `${total > 0 ? (playedCount / total) * 100 : 0}%`,
                  height: "100%", borderRadius: 4, background: allDone ? "#16a34a" : cat.color,
                  transition: "width 0.5s ease",
                }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: cat.color }}>
                {playedCount}/{total}
              </span>
            </div>

            {allDone ? (
              <div style={{
                padding: "10px 16px", background: `${cat.color}12`,
                borderRadius: 12, textAlign: "center",
                fontSize: 14, fontWeight: 600, color: cat.color,
              }}>
                🏆 Category complete!
              </div>
            ) : (
              <button
                onClick={() => { if (nextUnplayed) selectSubject(nextUnplayed); }}
                style={{
                  ...S.btn, width: "100%", padding: "14px",
                  fontSize: 15, fontWeight: 700,
                  background: cat.color, color: "#fff", border: "none",
                }}
              >
                ▶ Play Next
              </button>
            )}
          </div>

          {/* Search within category */}
          {total > 8 && (
            <input
              type="text" value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={`Search ${cat.label}...`}
              style={{ ...S.input, marginBottom: 16 }}
            />
          )}

          {/* Figures grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {filtered.map(s => {
              const wasPlayed = played.includes(s.id);
              const diff = getDifficultyLabel(s.r);
              const histEntry = gameHistory.find(g => g.id === s.id);

              return (
                <div
                  key={s.id}
                  onClick={() => selectSubject(s)}
                  style={{
                    ...S.card, marginBottom: 0, padding: 18, cursor: "pointer",
                    background: wasPlayed ? "#faf9f6" : "#fff",
                    borderLeft: wasPlayed ? `3px solid ${cat.color}` : `3px solid ${cat.color}20`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = cat.color; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = wasPlayed ? cat.color : `${cat.color}20`; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, color: diff.color,
                      background: `${diff.color}12`, padding: "2px 7px", borderRadius: 6,
                    }}>{diff.label}{streakRewards.includes("difficulty_peek") && (() => {
                      const dm = DIFFICULTY_MULTIPLIER(s.r);
                      return dm.mult > 1 ? ` · ${dm.label}` : "";
                    })()}</span>
                    {wasPlayed && histEntry && (
                      <span style={{
                        fontSize: 12, fontWeight: 700,
                        color: histEntry.pts >= 64 ? "#16a34a" : histEntry.pts >= 36 ? "#ca8a04" : "#dc2626",
                      }}>{histEntry.pts} pts</span>
                    )}
                    {wasPlayed && !histEntry && <span style={{ fontSize: 11, color: cat.color, fontWeight: 600 }}>✓</span>}
                  </div>
                  <h3 style={{ ...S.h3, fontSize: 16, marginBottom: 3 }}>{s.name}</h3>
                  <p style={{ ...S.muted, fontSize: 13, marginBottom: 2 }}>{s.field}</p>
                  <p style={{ fontSize: 12, color: "#b0ada5" }}>{formatLifespan(s.born, s.died)}</p>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: 40, color: "#9a9890" }}>
              No matches found.
            </div>
          )}
        </div>
      <TabBar />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // ERA SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "era" && activeEra) {
    const era = activeEra;
    const eraFigures = ALL_SUBJECTS
      .filter(s => s.born >= era.min && s.born < era.max)
      .sort((a, b) => a.born - b.born);
    const playedCount = eraFigures.filter(f => played.includes(f.id)).length;
    const total = eraFigures.length;
    const allDone = playedCount === total;
    const nextUnplayed = eraFigures.find(f => !played.includes(f.id));

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{...S.inner, paddingBottom: 70}}>
          <BackButton />

          {/* Era header */}
          <div style={{
            background: era.bg, borderRadius: 16, padding: "28px 28px 24px",
            border: `2px solid ${era.color}25`, marginBottom: 28,
            animation: "fadeUp 0.35s ease both",
          }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>{era.icon}</div>
            <h2 style={{ ...S.h2, fontSize: 30, color: era.color, marginBottom: 6 }}>{era.label}</h2>
            <p style={{ fontSize: 15, color: `${era.color}bb`, margin: "0 0 20px", lineHeight: 1.5 }}>
              {era.range} · {total} figures
            </p>

            {/* Progress */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, height: 8, borderRadius: 4, background: `${era.color}15`, overflow: "hidden" }}>
                <div style={{
                  width: `${total > 0 ? (playedCount / total) * 100 : 0}%`,
                  height: "100%", borderRadius: 4, background: allDone ? "#16a34a" : era.color,
                  transition: "width 0.5s ease",
                }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: era.color }}>
                {playedCount}/{total}
              </span>
            </div>

            {allDone ? (
              <div style={{
                padding: "12px 16px", background: `${era.color}12`,
                borderRadius: 12, textAlign: "center",
                fontSize: 14, fontWeight: 600, color: era.color,
              }}>
                🏆 Era complete!
              </div>
            ) : (
              <button
                onClick={() => { if (nextUnplayed) selectSubject(nextUnplayed); }}
                style={{
                  ...S.btn, width: "100%", padding: "14px",
                  fontSize: 15, fontWeight: 700,
                  background: era.color, color: "#fff", border: "none",
                }}
              >
                ▶ Play Next in Era
              </button>
            )}
          </div>

          {/* Figures grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {eraFigures.map((s, idx) => {
              const cat = CATS[s.cat] || { label: s.cat, color: "#64748b", bg: "rgba(100,116,139,0.06)" };
              const wasPlayed = played.includes(s.id);
              const diff = getDifficultyLabel(s.r);
              const histEntry = gameHistory.find(g => g.id === s.id);

              return (
                <div
                  key={s.id}
                  onClick={() => selectSubject(s)}
                  style={{
                    ...S.card, marginBottom: 0, padding: 20, cursor: "pointer",
                    background: wasPlayed ? "#faf9f6" : "#fff",
                    borderLeft: wasPlayed ? `3px solid ${era.color}` : `3px solid ${era.color}20`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = era.color; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = wasPlayed ? era.color : `${era.color}20`; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: "#9a9890",
                        background: "#f5f4f0", padding: "2px 8px", borderRadius: 6,
                        fontFamily: fontStack,
                      }}>{s.born < 0 ? `${Math.abs(s.born)} BC` : s.born}</span>
                      <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: diff.color,
                        background: `${diff.color}12`, padding: "2px 7px", borderRadius: 6,
                      }}>{diff.label}</span>
                    </div>
                    {wasPlayed && histEntry && (
                      <span style={{
                        fontSize: 12, fontWeight: 700,
                        color: histEntry.pts >= 64 ? "#16a34a" : histEntry.pts >= 36 ? "#ca8a04" : "#dc2626",
                      }}>{histEntry.pts} pts</span>
                    )}
                    {wasPlayed && !histEntry && <span style={{ fontSize: 11, color: era.color, fontWeight: 600 }}>✓</span>}
                  </div>
                  <h3 style={{ ...S.h3, fontSize: 17, marginBottom: 3 }}>{s.name}</h3>
                  <p style={{ ...S.muted, fontSize: 13, marginBottom: 2 }}>{s.field}</p>
                  <p style={{ fontSize: 12, color: "#b0ada5" }}>{formatLifespan(s.born, s.died)}</p>
                </div>
              );
            })}
          </div>
        </div>
      <TabBar />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // COLLECTION SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "collection" && activeCollection) {
    const col = activeCollection;
    const colFigures = col.figures.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);
    const playedCount = colFigures.filter(f => played.includes(f.id)).length;
    const total = colFigures.length;
    const allDone = playedCount === total;
    const nextUnplayed = colFigures.find(f => !played.includes(f.id));

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{...S.inner, paddingBottom: 70}}>
          <BackButton />

          {/* Collection header */}
          <div style={{
            background: col.bg, borderRadius: 16, padding: "28px 28px 24px",
            border: `2px solid ${col.border}`, marginBottom: 28,
            animation: "fadeUp 0.35s ease both",
          }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>{col.emoji}</div>
            <h2 style={{ ...S.h2, fontSize: 30, color: col.color, marginBottom: 6 }}>{col.title}</h2>
            <p style={{ fontSize: 15, color: `${col.color}bb`, margin: "0 0 20px", lineHeight: 1.5 }}>
              {col.subtitle}
            </p>

            {/* Progress */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, height: 8, borderRadius: 4, background: `${col.color}15`, overflow: "hidden" }}>
                <div style={{
                  width: `${total > 0 ? (playedCount / total) * 100 : 0}%`,
                  height: "100%", borderRadius: 4, background: col.color,
                  transition: "width 0.5s ease",
                }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: col.color }}>
                {playedCount}/{total}
              </span>
            </div>

            {allDone ? (
              <div style={{
                padding: "12px 16px", background: `${col.color}12`,
                borderRadius: 12, textAlign: "center",
                fontSize: 14, fontWeight: 600, color: col.color,
              }}>
                🏆 Collection complete!
              </div>
            ) : (
              <button
                onClick={() => { if (nextUnplayed) selectSubject(nextUnplayed); }}
                style={{
                  ...S.btn, width: "100%", padding: "14px",
                  fontSize: 15, fontWeight: 700,
                  background: col.color, color: "#fff", border: "none",
                }}
              >
                ▶ Play Next in Collection
              </button>
            )}
          </div>

          {/* Figures grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {colFigures.map((s, idx) => {
              const cat = CATS[s.cat] || { label: s.cat, color: "#64748b", bg: "rgba(100,116,139,0.06)" };
              const wasPlayed = played.includes(s.id);
              const diff = getDifficultyLabel(s.r);

              return (
                <div
                  key={s.id}
                  onClick={() => selectSubject(s)}
                  style={{
                    ...S.card, marginBottom: 0, padding: 20, cursor: "pointer",
                    background: wasPlayed ? "#faf9f6" : "#fff",
                    borderLeft: wasPlayed ? `3px solid ${col.color}` : `3px solid ${col.border}`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = col.color; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = wasPlayed ? col.color : col.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: col.color,
                        background: `${col.color}10`, padding: "2px 8px", borderRadius: 6,
                      }}>#{idx + 1}</span>
                      <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: diff.color,
                        background: `${diff.color}12`, padding: "2px 7px", borderRadius: 6,
                      }}>{diff.label}</span>
                    </div>
                    {wasPlayed && <span style={{ fontSize: 11, color: col.color, fontWeight: 600 }}>✓</span>}
                  </div>
                  <h3 style={{ ...S.h3, fontSize: 17, marginBottom: 3 }}>{s.name}</h3>
                  <p style={{ ...S.muted, fontSize: 13, marginBottom: 2 }}>{s.field}</p>
                  <p style={{ fontSize: 12, color: "#b0ada5" }}>{formatLifespan(s.born, s.died)}</p>
                </div>
              );
            })}
          </div>
        </div>
      <TabBar />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // HEAD-TO-HEAD LOBBY SCREEN (when opening a challenge link)
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "h2h_lobby" && h2hMode) {
    const oppTotal = h2hMode.opponentPoints ? h2hMode.opponentPoints.reduce((a, b) => a + b, 0) : 0;
    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 600 }}>
          <BackButton label="Home" icon="🏠" action={goHome} />

          <div style={{
            ...S.card, animation: "fadeUp 0.35s ease both", textAlign: "center",
            background: "linear-gradient(180deg, #fef2f2, #fff7ed, #fffbeb)",
            border: "2px solid #fecaca",
          }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>⚔️</div>
            <h2 style={{ ...S.h2, fontSize: 28, marginBottom: 6 }}>Head-to-Head Challenge</h2>
            <p style={{ fontSize: 15, color: "#7a7770", marginBottom: 24 }}>
              <strong>{h2hMode.opponentName}</strong> scored <strong>{oppTotal} points</strong> across 5 figures.
              <br />Can you beat them?
            </p>

            {/* Figure preview */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24, textAlign: "left" }}>
              {h2hMode.figures.map((fig, i) => {
                const cat = CATS[fig.cat] || { label: fig.cat, color: "#64748b", bg: "rgba(100,116,139,0.06)" };
                return (
                  <div key={fig.id} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "10px 14px", background: "#fff", borderRadius: 12,
                    border: "1px solid #e5e2db",
                  }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: "#fef2f2", color: "#dc2626",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 13, fontWeight: 700, flexShrink: 0,
                    }}>{i + 1}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>{fig.name}</div>
                      <div style={{ fontSize: 12, color: "#9a9890" }}>{fig.field}</div>
                    </div>
                    <span style={{ ...S.tag(cat.color, cat.bg), fontSize: 10 }}>{cat.label}</span>
                  </div>
                );
              })}
            </div>

            <button onClick={() => {
              const first = h2hMode.figures[0];
              setSubject(first);
              setPrediction(0.5);
              setRevealed(false);
              setScreen("predict");
              scrollTop();
            }} style={{
              ...S.btn, width: "100%", padding: "16px", fontSize: 17, fontWeight: 700,
              background: "linear-gradient(135deg, #dc2626, #ea580c)",
              color: "#fff", border: "none",
            }}>
              Accept Challenge →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // HEAD-TO-HEAD SUMMARY SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "h2h_summary" && h2hMode) {
    const myTotal = h2hMode.myPoints.reduce((a, b) => a + b, 0);
    const hasOpponent = h2hMode.opponentPoints && h2hMode.opponentPoints.length > 0;
    const oppTotal = hasOpponent ? h2hMode.opponentPoints.reduce((a, b) => a + b, 0) : 0;
    const iWon = hasOpponent && myTotal > oppTotal;
    const tied = hasOpponent && myTotal === oppTotal;
    const myRoundsWon = hasOpponent ? h2hMode.myPoints.filter((p, i) => p > h2hMode.opponentPoints[i]).length : 0;
    const oppRoundsWon = hasOpponent ? h2hMode.opponentPoints.filter((p, i) => p > h2hMode.myPoints[i]).length : 0;

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 600 }}>
          <div style={{
            ...S.card, animation: "fadeUp 0.35s ease both", textAlign: "center",
            background: "linear-gradient(180deg, #fef2f2, #fff7ed, #fffbeb)",
            border: "2px solid #fecaca",
          }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>
              {hasOpponent ? (iWon ? "🏆" : tied ? "🤝" : "😤") : "⚔️"}
            </div>
            <h2 style={{ ...S.h2, fontSize: 26, marginBottom: 6 }}>
              {hasOpponent
                ? (iWon ? "You Win!" : tied ? "It's a Tie!" : `${h2hMode.opponentName} Wins!`)
                : "Challenge Complete!"
              }
            </h2>

            {hasOpponent && (
              <p style={{ fontSize: 14, color: "#7a7770", marginBottom: 20 }}>
                {iWon
                  ? `You beat ${h2hMode.opponentName} by ${myTotal - oppTotal} points.`
                  : tied
                    ? "Perfectly matched — same total score."
                    : `${h2hMode.opponentName} beat you by ${oppTotal - myTotal} points.`
                }
                {' '}{myRoundsWon > oppRoundsWon ? `Won ${myRoundsWon} of 5 rounds.` : oppRoundsWon > myRoundsWon ? `Won ${myRoundsWon} of 5 rounds.` : ''}
              </p>
            )}

            {/* Score comparison header */}
            {hasOpponent && (
              <div style={{
                display: "flex", justifyContent: "space-around", padding: "16px 0",
                borderTop: "1px solid #e5e2db", borderBottom: "1px solid #e5e2db",
                marginBottom: 16,
              }}>
                <div>
                  <div style={{ fontSize: 12, color: "#9a9890", fontWeight: 600, marginBottom: 4 }}>YOU</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: iWon || tied ? "#16a34a" : "#dc2626" }}>{myTotal}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", fontSize: 20, color: "#ddd9d0" }}>vs</div>
                <div>
                  <div style={{ fontSize: 12, color: "#9a9890", fontWeight: 600, marginBottom: 4 }}>{h2hMode.opponentName?.toUpperCase()}</div>
                  <div style={{ fontSize: 32, fontWeight: 800, color: !iWon && !tied ? "#16a34a" : "#dc2626" }}>{oppTotal}</div>
                </div>
              </div>
            )}

            {!hasOpponent && (
              <div style={{
                fontSize: 36, fontWeight: 800, color: "#1a1a1a", marginBottom: 20,
                padding: "12px 0", borderTop: "1px solid #e5e2db", borderBottom: "1px solid #e5e2db",
              }}>
                {myTotal} points
              </div>
            )}

            {/* Round-by-round breakdown */}
            <div style={{ textAlign: "left", marginBottom: 20 }}>
              {h2hMode.figures.map((fig, i) => {
                const myPts = h2hMode.myPoints[i] || 0;
                const oppPts = hasOpponent ? (h2hMode.opponentPoints[i] || 0) : null;
                const myPred = h2hMode.myPredictions[i];
                const oppPred = hasOpponent ? h2hMode.opponentPredictions[i] : null;
                const r = fig.r;
                const actualPct = Math.round(toWeight(r) * 100);
                const roundWon = oppPts !== null ? myPts > oppPts : null;
                const roundTied = oppPts !== null ? myPts === oppPts : null;

                return (
                  <div key={fig.id} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "12px 14px", borderRadius: 12, marginBottom: 6,
                    background: roundWon ? "#f0fdf4" : roundTied ? "#faf9f6" : (oppPts !== null ? "#fef2f2" : "#faf9f6"),
                    border: `1px solid ${roundWon ? "#bbf7d0" : roundTied ? "#e5e2db" : (oppPts !== null ? "#fecaca" : "#e5e2db")}`,
                  }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: roundWon ? "#dcfce7" : "#f5f5f4",
                      color: roundWon ? "#16a34a" : "#9a9890",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700, flexShrink: 0,
                    }}>{i + 1}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "#1a1a1a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {fig.name}
                      </div>
                      <div style={{ fontSize: 11, color: "#9a9890" }}>
                        Actual: {actualPct}%
                      </div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#1a1a1a" }}>
                        {myPred}% → <span style={{ color: myPts >= 64 ? "#16a34a" : myPts >= 36 ? "#ca8a04" : "#dc2626" }}>{myPts}pts</span>
                      </div>
                      {oppPts !== null && (
                        <div style={{ fontSize: 11, color: "#9a9890" }}>
                          vs {oppPred}% → {oppPts}pts
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={goHome} style={{ ...S.btn, ...S.btnSecondary, flex: 1, minWidth: 100 }}>
                🏠 Home
              </button>
              {!hasOpponent && (
                <button onClick={shareH2H} style={{
                  ...S.btn, flex: 2, padding: "14px", fontSize: 15, fontWeight: 700,
                  background: "linear-gradient(135deg, #dc2626, #ea580c)",
                  color: "#fff", border: "none",
                }}>
                  ⚔️ Send Challenge
                </button>
              )}
              {hasOpponent && (
                <button onClick={() => {
                  // Play again with new figures
                  startH2H();
                }} style={{
                  ...S.btn, ...S.btnPrimary, flex: 1, minWidth: 100,
                }}>
                  Rematch ⚔️
                </button>
              )}
            </div>

            {hasOpponent && (
              <button onClick={shareH2H} style={{
                ...S.btn, ...S.btnSecondary, width: "100%", marginTop: 10,
                padding: "10px", fontSize: 13,
              }}>
                📤 Share Result
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CUSTOM CONFIRM SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "custom_confirm" && customResult) {
    const cat = CATS[customResult.cat] || { label: customResult.cat || "Custom", color: "#64748b", bg: "rgba(100,116,139,0.06)" };
    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 600 }}>
          <BackButton />
          <div style={{ ...S.card, animation: "scaleIn 0.3s ease both" }}>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 32, marginBottom: 6 }}>🔍</div>
              <p style={{ ...S.muted, fontSize: 15 }}>Is this who you meant?</p>
            </div>

            <hr style={S.divider} />

            <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
            <h2 style={{ ...S.h2, marginTop: 12, marginBottom: 6 }}>{customResult.name}</h2>
            <p style={{ ...S.muted, marginBottom: 20 }}>
              {customResult.field}{customResult.born != null && <> · {formatLifespan(customResult.born, customResult.died)}</>}
            </p>

            {customResult.quote && (
              <div style={{
                fontStyle: "italic", color: "#4a4840", padding: "16px 20px",
                background: "#faf9f6", borderRadius: 12, borderLeft: "3px solid #d1cdc4",
                marginBottom: 20, fontSize: 15, lineHeight: 1.65, fontFamily: fontStack,
              }}>
                "{customResult.quote}"
              </div>
            )}

            {customResult.contributions && (
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ fontSize: 12, color: "#9a9890", fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>Known for</h4>
                <ContributionTags items={customResult.contributions} />
              </div>
            )}

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={rejectCustomFigure} style={{ ...S.btn, ...S.btnSecondary, flex: 1 }}>
                Not right — go back
              </button>
              <button onClick={confirmCustomFigure} style={{ ...S.btn, ...S.btnPrimary, flex: 1 }}>
                Yes — make my prediction →
              </button>
            </div>
            <button
              onClick={async () => {
                const res = await submitToCommunity(customResult, "Anonymous");
                if (res.accepted) confirmCustomFigure();
              }}
              style={{
                ...S.btn, width: "100%", marginTop: 8, textAlign: "center",
                background: "transparent", border: "1px solid #e5e2db",
                color: "#7a7770", fontSize: 13,
              }}
            >
              🌍 Share to community & play
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PREDICT SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "predict" && subject) {
    const cat = CATS[subject.cat] || { label: subject.cat || "Custom", color: "#64748b", bg: "rgba(100,116,139,0.06)" };
    const predLabel = getScoreLabel(prediction, subject);

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 600 }}>
          <BackButton />
          <div style={{ ...S.card, animation: "fadeUp 0.35s ease both" }}>
            {/* First-visit explainer for deep link arrivals */}
            {played.length === 0 && !hasSeenIntro && (
              <div style={{
                padding: "12px 16px", borderRadius: 12, marginBottom: 16,
                background: "linear-gradient(135deg, #f0f9ff, #eff6ff)",
                border: "1px solid #bfdbfe", fontSize: 13, lineHeight: 1.6, color: "#1e40af",
              }}>
                <strong>How to play:</strong> Predict this entry's historical weight — was this a turning point that reshaped everything (high weight), or was the same outcome arriving regardless (low weight)?
              </div>
            )}
            {isDaily && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 12px", borderRadius: 8, marginBottom: 12,
                background: "#fef3c7", border: "1px solid #fde68a",
                fontSize: 12, fontWeight: 700, color: "#d97706",
              }}>
                🗓️ Daily Challenge
              </div>
            )}
            {h2hMode && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 12px", borderRadius: 8, marginBottom: 12,
                background: "#fef2f2", border: "1px solid #fecaca",
                fontSize: 12, fontWeight: 700, color: "#dc2626",
              }}>
                ⚔️ Round {h2hMode.currentIndex + 1} of {h2hMode.figures.length}
              </div>
            )}
            {subject._isCommunity && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 12px", borderRadius: 8, marginBottom: 12,
                background: "#f0fdf4", border: "1px solid #bbf7d0",
                fontSize: 12, fontWeight: 700, color: "#16a34a",
              }}>
                🌍 Community · by {subject._communitySubmitter || "Anonymous"}
              </div>
            )}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 4 }}>
              <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
              {/* Difficulty badge — always visible, helps players learn the system */}
              {(() => {
                const r = subject.r ?? subject._r ?? 0.5;
                const diff = getDifficultyLabel(r);
                const mult = DIFFICULTY_MULTIPLIER(r);
                return (
                  <span style={{
                    ...S.tag(
                      mult.tier === "hard" ? "#dc2626" : mult.tier === "medium" ? "#d97706" : "#16a34a",
                      mult.tier === "hard" ? "rgba(220,38,38,0.08)" : mult.tier === "medium" ? "rgba(217,119,6,0.08)" : "rgba(22,163,74,0.08)"
                    ),
                  }}>
                    {diff.label} {mult.mult > 1 ? `· ${mult.label} pts` : ""}
                  </span>
                );
              })()}
              {challengeMode && (
                <span style={{ ...S.tag("#7c2d12", "rgba(124,45,18,0.08)"), fontWeight: 700 }}>
                  ⚔️ Challenge
                </span>
              )}
            </div>
            {/* Active streak + shield indicator */}
            {(streak >= 2 || streakShields > 0 || pointBoostRounds > 0) && (
              <div style={{
                display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 8, marginTop: 4,
              }}>
                {streak >= 2 && (
                  <span style={{ fontSize: 12, color: "#7c3aed", fontWeight: 600 }}>
                    🔥 {streak}-round streak
                  </span>
                )}
                {streakShields > 0 && (
                  <span style={{ fontSize: 12, color: "#0d9488", fontWeight: 600 }}>
                    🛡️ {streakShields} shield{streakShields > 1 ? "s" : ""}
                  </span>
                )}
                {pointBoostRounds > 0 && (
                  <span style={{ fontSize: 12, color: "#d97706", fontWeight: 600 }}>
                    ✨ +10% boost ({pointBoostRounds} left)
                  </span>
                )}
              </div>
            )}
            <h2 style={{ ...S.h2, fontSize: 32, marginTop: 8, marginBottom: 6 }}>{subject.name}</h2>
            <p style={{ ...S.muted, marginBottom: 22 }}>
              {subject.field} · {formatLifespan(subject.born, subject.died)}
            </p>

            {/* Quote — gives flavor without tipping off the answer */}
            {subject.quote && (
              <div style={{
                fontStyle: "italic", color: "#4a4840", padding: "16px 20px",
                background: "#faf9f6", borderRadius: 12, borderLeft: "3px solid #d1cdc4",
                marginBottom: 24, fontSize: 15, lineHeight: 1.65, fontFamily: fontStack,
              }}>
                "{subject.quote}"
              </div>
            )}

            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 12, color: "#9a9890", fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Known For
              </h4>
              <ContributionTags items={subject.contributions} />
            </div>

            {/* Key Moments — chronological context so players can reason, not guess */}
            {subject.timeline && subject.timeline.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ fontSize: 12, color: "#9a9890", fontWeight: 700, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Key Moments
                </h4>
                <div style={{ position: "relative", paddingLeft: 20 }}>
                  {/* Vertical thread */}
                  <div style={{
                    position: "absolute", left: 5, top: 6, bottom: 6, width: 1,
                    background: "linear-gradient(180deg, #d4d0c8, #e8e6e1)",
                  }} />
                  {subject.timeline.map((event, i) => (
                    <div key={i} style={{
                      position: "relative", marginBottom: i === subject.timeline.length - 1 ? 0 : 14,
                      display: "flex", gap: 12, alignItems: "baseline",
                    }}>
                      {/* Dot */}
                      <div style={{
                        position: "absolute", left: -18, top: 6,
                        width: 7, height: 7, borderRadius: "50%",
                        background: i === 0 || i === subject.timeline.length - 1 ? "#78716c" : "#b0ada6",
                        border: "1.5px solid #fff",
                        boxShadow: "0 0 0 1px #d4d0c8",
                        flexShrink: 0,
                      }} />
                      <span style={{
                        fontSize: 12, fontWeight: 700, color: "#78716c",
                        whiteSpace: "nowrap", fontFamily: fontStack, flexShrink: 0,
                      }}>
                        {formatYear(event.year)}
                      </span>
                      <span style={{
                        fontSize: 13, color: "#4a4840", lineHeight: 1.5,
                      }}>
                        {event.happened}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tension hook — frames why this figure is debatable */}
            {(() => {
              const hook = getTensionHook(subject);
              if (!hook) return null;
              return (
                <div style={{
                  padding: "14px 18px", borderRadius: 12, marginBottom: 24,
                  background: "linear-gradient(135deg, #fefce8, #fef9ee)",
                  border: "1px solid #fde68a",
                  fontSize: 14, lineHeight: 1.6, color: "#78716c",
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#b45309", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    ⚖️ The Debate
                  </div>
                  {hook}
                </div>
              );
            })()}

            {challengeData && (
              <div style={{ background: "#faf5ff", padding: "12px 16px", borderRadius: 12, marginBottom: 24, border: "1px solid #e9d5ff", fontSize: 14 }}>
                🎯 A friend said <strong>{challengeData.score}%</strong> historical weight. What's your call?
              </div>
            )}

            <hr style={S.divider} />

            {/* Warm-up coaching tip for first 3 games */}
            {played.length < 3 && (
              <div style={{
                padding: "12px 16px", borderRadius: 12, marginBottom: 16,
                background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)",
                border: "1px solid #bbf7d0", fontSize: 13, lineHeight: 1.6, color: "#166534",
              }}>
                💡 <strong>Tip:</strong> {WARMUP_TIPS[played.length] || WARMUP_TIPS[0]}
              </div>
            )}

            {/* ═══ PREDICTION GAUGE ═══ */}
            {(() => {
              const pct = Math.round(prediction * 100);
              const cm = CONVICTION_MULT(prediction);

              // Gauge geometry
              const W = 280, CX = 140, CY = 140, R = 110;
              const toRad = (deg) => (deg * Math.PI) / 180;
              const valToAngle = (v) => 180 - v * 180;
              const angleToXY = (deg, r) => ({
                x: CX + r * Math.cos(toRad(deg)),
                y: CY - r * Math.sin(toRad(deg)),
              });

              const needleAngle = valToAngle(prediction);
              const needleTip = angleToXY(needleAngle, R - 10);
              const needleBase1 = angleToXY(needleAngle + 90, 5);
              const needleBase2 = angleToXY(needleAngle - 90, 5);

              // Full semicircle path
              const semiPath = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`;

              // Needle color interpolates green → amber → red across the range
              const needleColor = prediction < 0.25 ? "#15803d"
                : prediction < 0.50 ? "#a16207"
                : prediction < 0.75 ? "#c2410c"
                : "#b91c1c";

              const zones = [
                { from: 0, to: 0.20, color: "#15803d" },
                { from: 0.20, to: 0.50, color: "#a16207" },
                { from: 0.50, to: 0.80, color: "#c2410c" },
                { from: 0.80, to: 1.0, color: "#b91c1c" },
              ];

              // Pointer interaction
              const pointerToValue = (clientX, clientY) => {
                const svg = gaugeRef.current;
                if (!svg) return null;
                const rect = svg.getBoundingClientRect();
                const sx = W / rect.width;
                const sy = 148 / rect.height;
                const px = (clientX - rect.left) * sx;
                const py = (clientY - rect.top) * sy;
                let angle = Math.atan2(CY - py, px - CX) * (180 / Math.PI);
                if (angle < -10) angle = 0;
                if (angle > 190) angle = 180;
                angle = Math.max(0, Math.min(180, angle));
                let val = (180 - angle) / 180;
                val = Math.round(val * 20) / 20;
                return Math.max(0, Math.min(1, val));
              };

              const handlePointerDown = (e) => {
                e.preventDefault();
                const update = (cx, cy) => {
                  const v = pointerToValue(cx, cy);
                  if (v === null) return;
                  setPrediction(v);
                  SFX.tick(v * 100);
                  const z = zones.find(zn => v >= zn.from && v < zn.to) || zones[zones.length - 1];
                  if (lastZoneRef.current && lastZoneRef.current !== z.color) SFX.click();
                  lastZoneRef.current = z.color;
                };
                update(e.clientX, e.clientY);
                const onMove = (ev) => update(ev.clientX, ev.clientY);
                const onUp = () => {
                  window.removeEventListener("pointermove", onMove);
                  window.removeEventListener("pointerup", onUp);
                  window.removeEventListener("pointercancel", onUp);
                };
                window.addEventListener("pointermove", onMove);
                window.addEventListener("pointerup", onUp);
                window.addEventListener("pointercancel", onUp);
              };

              const handleLockIn = () => {
                setLockingIn(true);
                SFX.lock();
                setTimeout(() => { setLockingIn(false); submitPrediction(); }, 500);
              };

              return (
                <div style={{ marginBottom: 20 }}>
                  <h4 style={{ fontSize: 15, color: "#1a1a1a", marginBottom: 6, fontWeight: 600, textAlign: "center" }}>
                    How much did {subject.name} shape history?
                  </h4>

                  {/* Gauge — just the arc outline and needle */}
                  <div style={{
                    width: "100%", maxWidth: 280, margin: "0 auto",
                    animation: lockingIn ? "lockShake 0.4s ease" : "none",
                  }}>
                    <svg
                      ref={gaugeRef}
                      viewBox={`0 6 ${W} 142`}
                      style={{ width: "100%", height: "auto", touchAction: "none", cursor: "pointer", display: "block", overflow: "hidden" }}
                      onPointerDown={handlePointerDown}
                    >
                      {/* Semicircle — thin arc */}
                      <path d={semiPath} fill="none" stroke="#e0ddd6" strokeWidth={2} />

                      {/* Tick marks at 0, 25, 50, 75, 100 */}
                      {[0, 25, 50, 75, 100].map(v => {
                        const angle = valToAngle(v / 100);
                        const outer = angleToXY(angle, R + 6);
                        const inner = angleToXY(angle, R - 6);
                        const labelPos = angleToXY(angle, R + 18);
                        return (
                          <g key={v}>
                            <line
                              x1={outer.x} y1={outer.y} x2={inner.x} y2={inner.y}
                              stroke="#b0ada6" strokeWidth={1.5} strokeLinecap="round"
                            />
                            <text x={labelPos.x} y={labelPos.y}
                              textAnchor="middle" dominantBaseline="middle"
                              style={{ fontSize: 9, fill: "#9a9890", fontWeight: 600, fontFamily: sansStack, userSelect: "none" }}
                            >{v}</text>
                          </g>
                        );
                      })}

                      {/* Needle — color shifts with position */}
                      <polygon
                        points={`${needleTip.x},${needleTip.y} ${needleBase1.x},${needleBase1.y} ${needleBase2.x},${needleBase2.y}`}
                        fill={needleColor}
                        style={{ transition: "fill 0.15s ease" }}
                      />
                      <circle cx={CX} cy={CY} r={8} fill={needleColor} style={{ transition: "fill 0.15s ease" }} />
                      <circle cx={CX} cy={CY} r={4} fill="#fff" />
                    </svg>
                  </div>

                  {/* Scale labels */}
                  <div style={{
                    display: "flex", justifyContent: "space-between", padding: "0 6px",
                    maxWidth: 280, margin: "2px auto 0",
                  }}>
                    <span style={{ fontSize: 11, color: "#15803d", fontWeight: 600 }}>Footnote</span>
                    <span style={{ fontSize: 11, color: "#b91c1c", fontWeight: 600 }}>Turning Point</span>
                  </div>

                  {/* Readout with fine-tune controls */}
                  <div style={{ textAlign: "center", marginTop: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                      {/* Minus buttons */}
                      <button
                        onClick={() => { const v = Math.max(0, prediction - 0.05); setPrediction(v); SFX.tick(v * 100); }}
                        style={{
                          width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #e5e2db",
                          background: "#faf9f6", cursor: "pointer", fontSize: 16, fontWeight: 700,
                          color: "#78716c", display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: sansStack, lineHeight: 1, padding: 0,
                        }}
                        aria-label="Decrease by 5%"
                      >−5</button>
                      <button
                        onClick={() => { const v = Math.max(0, prediction - 0.01); setPrediction(v); SFX.tick(v * 100); }}
                        style={{
                          width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #e5e2db",
                          background: "#faf9f6", cursor: "pointer", fontSize: 14, fontWeight: 600,
                          color: "#9a9890", display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: sansStack, lineHeight: 1, padding: 0,
                        }}
                        aria-label="Decrease by 1%"
                      >−</button>

                      {/* Percentage display */}
                      <div style={{
                        fontSize: 56, fontWeight: 400, color: needleColor,
                        fontFamily: fontStack, letterSpacing: "-0.03em", lineHeight: 1,
                        transition: "color 0.15s ease",
                        animation: lockingIn ? "gaugePulse 0.3s ease" : "none",
                        minWidth: 120, textAlign: "center",
                      }}>
                        {pct}<span style={{ fontSize: 28, fontWeight: 300 }}>%</span>
                      </div>

                      {/* Plus buttons */}
                      <button
                        onClick={() => { const v = Math.min(1, prediction + 0.01); setPrediction(v); SFX.tick(v * 100); }}
                        style={{
                          width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #e5e2db",
                          background: "#faf9f6", cursor: "pointer", fontSize: 14, fontWeight: 600,
                          color: "#9a9890", display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: sansStack, lineHeight: 1, padding: 0,
                        }}
                        aria-label="Increase by 1%"
                      >+</button>
                      <button
                        onClick={() => { const v = Math.min(1, prediction + 0.05); setPrediction(v); SFX.tick(v * 100); }}
                        style={{
                          width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #e5e2db",
                          background: "#faf9f6", cursor: "pointer", fontSize: 16, fontWeight: 700,
                          color: "#78716c", display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: sansStack, lineHeight: 1, padding: 0,
                        }}
                        aria-label="Increase by 5%"
                      >+5</button>
                    </div>
                    <div style={{
                      fontSize: 16, color: needleColor, fontWeight: 700, marginTop: 6,
                      transition: "color 0.15s ease",
                    }}>
                      {predLabel.label}
                    </div>
                    <div style={{ ...S.muted, fontSize: 13, marginTop: 6, maxWidth: 320, margin: "6px auto 0" }}>
                      {predLabel.desc}
                    </div>
                    {cm.tier === "penalty" && (
                      <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, color: "#dc2626" }}>
                        ⚠️ {cm.label} — move away from 50%
                      </div>
                    )}
                    {cm.tier === "bonus" && (
                      <div style={{ marginTop: 10, fontSize: 11, fontWeight: 700, color: "#059669" }}>
                        ✦ +{cm.label}
                      </div>
                    )}
                  </div>

                  {/* Lock In Button */}
                  <button
                    onClick={lockingIn ? undefined : handleLockIn}
                    disabled={lockingIn}
                    style={{
                      ...S.btn, width: "100%", padding: "20px", fontSize: 17, fontWeight: 700,
                      marginTop: 28, borderRadius: 16, border: "none", cursor: lockingIn ? "default" : "pointer",
                      color: "#fff", overflow: "hidden",
                      background: lockingIn
                        ? needleColor
                        : `linear-gradient(135deg, ${needleColor}ee, ${needleColor})`,
                      boxShadow: lockingIn
                        ? `0 0 40px ${needleColor}50, 0 0 80px ${needleColor}20`
                        : `0 4px 20px ${needleColor}30, 0 1px 3px ${needleColor}15`,
                      transform: lockingIn ? "scale(0.97)" : "scale(1)",
                      transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {lockingIn ? (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                        <span style={{ display: "inline-block", width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.5s linear infinite" }} />
                        Locking in {pct}%...
                      </span>
                    ) : (
                      <>🎯 Lock in at {pct}%</>
                    )}
                  </button>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INTERLUDE SCREEN — builds anticipation before reveal
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "interlude" && subject) {
    const cat = CATS[subject.cat] || { label: subject.cat || "Custom", color: "#64748b", bg: "rgba(100,116,139,0.06)" };
    const phases = getInterludePhases(subject, prediction);
    const currentPhase = phases[Math.min(interludeStep, phases.length - 1)];
    const isAnalysis = currentPhase.style === "analysis";

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 540, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
          <div style={{
            textAlign: "center", width: "100%",
            animation: "fadeUp 0.4s ease both",
          }}>
            {/* Figure identity — compact */}
            {isDaily && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 12px", borderRadius: 8, marginBottom: 12,
                background: "#fef3c7", border: "1px solid #fde68a",
                fontSize: 12, fontWeight: 700, color: "#d97706",
              }}>
                🗓️ Daily Challenge
              </div>
            )}
            {subject._isCommunity && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "5px 12px", borderRadius: 8, marginBottom: 12,
                background: "#f0fdf4", border: "1px solid #bbf7d0",
                fontSize: 12, fontWeight: 700, color: "#16a34a",
              }}>
                🌍 Community figure
              </div>
            )}
            <h2 style={{ ...S.h2, fontSize: 28, marginBottom: 4 }}>{subject.name}</h2>
            <p style={{ ...S.muted, marginBottom: 36, fontSize: 14 }}>{subject.field}</p>

            {/* Central icon */}
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: isAnalysis ? `${cat.color}08` : "linear-gradient(135deg, #f7f6f3, #e8e6e1)",
              border: isAnalysis ? `2px solid ${cat.color}20` : "2px solid #ddd9d0",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 28px",
              animation: "pulse 1.4s ease-in-out infinite",
              fontSize: 32,
            }}>
              {currentPhase.icon}
            </div>

            {/* Phase text — larger and more prominent for analysis */}
            <div key={interludeStep} style={{
              minHeight: 80, marginBottom: 32, padding: "0 16px",
              animation: "fadeUp 0.35s ease both",
            }}>
              {isAnalysis ? (
                <p style={{
                  fontSize: 16, color: "#2a2a28", fontWeight: 400,
                  lineHeight: 1.65, fontFamily: fontStack,
                  fontStyle: "italic",
                  maxWidth: 440, margin: "0 auto",
                }}>
                  {currentPhase.text}
                </p>
              ) : (
                <p style={{
                  fontSize: 15, color: currentPhase.style === "prediction" ? cat.color : "#7a7770",
                  fontWeight: currentPhase.style === "prediction" ? 600 : 500,
                  lineHeight: 1.5,
                }}>
                  {currentPhase.text}
                </p>
              )}
            </div>

            {/* Progress dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
              {phases.map((_, i) => (
                <div key={i} style={{
                  width: i <= interludeStep ? 10 : 8,
                  height: i <= interludeStep ? 10 : 8,
                  borderRadius: "50%",
                  background: i <= interludeStep
                    ? i === interludeStep ? cat.color : `${cat.color}60`
                    : "#e0ded8",
                  transition: "all 0.3s ease",
                }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RESULT SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "result" && subject) {
    const cat = CATS[subject.cat] || { label: subject.cat || "Custom", color: "#64748b", bg: "rgba(100,116,139,0.06)" };
    const baseR = subject.r ?? subject._r;
    const playCount = gameHistory.filter(h => h.id === subject.id).length;
    const { adjustedR, variance: historianVariance } = applyHistorianVariance(baseR, subject.id, playCount);
    const r = playCount > 1 ? adjustedR : baseR;
    const w = toWeight(r);
    const originalW = toWeight(baseR);
    const diff = Math.abs(prediction - w);
    const pts = lastPts;
    const correct = diff < 0.15;
    const actualLabel = getScoreLabel(w, subject);
    const feedback = getAccuracyFeedback(diff, pts, subject, prediction);
    const difficulty = getDifficultyLabel(r);
    const isReplay = playCount > 1;

    // Build dynamic card list
    const resultCards = ["score", "reasoning"];
    if (subject.cascade && subject.cascade.length > 0) resultCards.push("cascade");
    if (subject.modernDay) resultCards.push("world");
    if (subject.timeline && subject.timeline.length > 0) resultCards.push("timeline");
    resultCards.push("actions");
    const totalResultCards = resultCards.length;

    const rcFade = (cardIdx, delay = 0) => ({
      opacity: visitedResultCards[cardIdx] ? 1 : 0,
      transform: visitedResultCards[cardIdx] ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    });

    const goToResultCard = (idx) => {
      const el = resultScrollRef.current;
      if (!el || idx < 0 || idx >= totalResultCards) return;
      el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
    };

    const swipeHint = (text) => (
      <div style={{
        marginTop: "auto", paddingTop: 24, textAlign: "center",
        fontSize: 13, color: "#9a9890", fontFamily: sansStack,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        animation: "pulse 3s ease-in-out infinite",
      }}>
        {text} <span style={{ fontSize: 15 }}>→</span>
      </div>
    );

    const cardShell = (extra = {}) => ({
      minWidth: "100vw", width: "100vw", height: "100%",
      scrollSnapAlign: "start",
      overflowY: "auto", overflowX: "hidden",
      WebkitOverflowScrolling: "touch",
      position: "relative", background: "#f7f6f3",
      ...extra,
    });

    const cardInner = (extra = {}) => ({
      maxWidth: 600, margin: "0 auto",
      padding: "48px 24px 88px",
      minHeight: "100%",
      display: "flex", flexDirection: "column",
      ...extra,
    });

    // ═══ CARD: SCORE REVEAL ═══
    const ScoreCard = () => {
      const ci = resultCards.indexOf("score");
      const countdownDone = animatedActual !== null && animatedActual === Math.round(w * 100);
      return (
        <div style={cardShell()}>
          <div style={{
            ...cardInner(),
            animation: shakeActive ? "celebShake 0.5s ease" : "none",
          }}>
            <div style={{ ...S.card, padding: "28px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>

              {/* Glow ring behind emoji on great scores */}
              {countdownDone && pts >= 64 && (
                <div style={{
                  position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)",
                  width: 80, height: 80, borderRadius: "50%",
                  background: pts >= 81 ? "radial-gradient(circle, rgba(109,40,217,0.15), transparent 70%)" : "radial-gradient(circle, rgba(245,158,11,0.12), transparent 70%)",
                  animation: "glowRing 1.2s ease-out forwards",
                  pointerEvents: "none",
                }} />
              )}

              {isDaily && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "5px 14px", borderRadius: 8, marginBottom: 12,
                  background: "#fef3c7", border: "1px solid #fde68a",
                  fontSize: 12, fontWeight: 700, color: "#d97706", fontFamily: sansStack,
                }}>
                  🗓️ Daily Challenge #{getDayNumber()}
                </div>
              )}

              {subject._isCommunity && (
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "5px 14px", borderRadius: 8, marginBottom: 12,
                  background: "#f0fdf4", border: "1px solid #bbf7d0",
                  fontSize: 12, fontWeight: 700, color: "#16a34a", fontFamily: sansStack,
                }}>
                  🌍 Community · by {subject._communitySubmitter || "Anonymous"}
                </div>
              )}

              <div style={{
                fontSize: 52, marginBottom: 8,
                ...rcFade(ci, 0),
                animation: revealPhase >= 1 ? "emojiDrop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both" : "none",
                opacity: revealPhase >= 1 ? undefined : 0,
              }}>{feedback.emoji}</div>

              <h2 style={{ ...S.h2, fontSize: 28, marginBottom: 6, ...rcFade(ci, 0.06) }}>{subject.name}</h2>

              <p style={{
                fontSize: 15, color: "#3a3a3a", fontWeight: 500, margin: "0 0 8px",
                maxWidth: 400, marginLeft: "auto", marginRight: "auto", lineHeight: 1.55,
                fontFamily: sansStack, ...rcFade(ci, 0.1),
              }}>{feedback.msg}</p>

              {/* Tags */}
              <div style={{ ...rcFade(ci, 0.14), marginBottom: 6 }}>
                <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
                <span style={{ ...S.tag(difficulty.color), marginLeft: 6 }}>{difficulty.label}</span>
              </div>

              {/* Contribution tags */}
              {subject.contributions && subject.contributions.length > 0 && (
                <div style={{ marginTop: 12, marginBottom: 4, ...rcFade(ci, 0.18) }}>
                  <ContributionTags items={subject.contributions} />
                </div>
              )}
            </div>

            {/* Score grid */}
            <div style={{
              ...S.card, padding: "22px 24px", textAlign: "center",
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12,
              ...rcFade(ci, 0.26),
            }}>
              <div>
                <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>You Said</div>
                <div style={{ fontSize: 32, fontWeight: 400, color: "#1a1a1a", fontFamily: fontStack }}>{Math.round(prediction * 100)}%</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>Actual</div>
                <div style={{
                  fontSize: 32, fontWeight: 400, fontFamily: fontStack,
                  color: animatedActual !== null ? actualLabel.color : "#d4d0c8",
                  transition: "color 0.3s ease",
                  overflow: "hidden",
                }}>
                  {animatedActual !== null ? (
                    <span style={{
                      display: "inline-block",
                      animation: countdownDone ? "none" : "none",
                    }}>{animatedActual}%</span>
                  ) : "—"}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>Points</div>
                <div style={{
                  fontSize: 32, fontWeight: 400, fontFamily: fontStack,
                  color: countdownDone ? (pts > 0 ? "#6d28d9" : "#b0ada6") : "#d4d0c8",
                }}>
                  {countdownDone ? (
                    <span style={{
                      display: "inline-block",
                      animation: "scorePop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both",
                    }}>{pts > 0 ? `+${pts}` : isReplay ? "—" : "+0"}</span>
                  ) : "—"}
                </div>
                {countdownDone && pts > 0 && !isReplay && (() => {
                  const mult = DIFFICULTY_MULTIPLIER(r);
                  if (mult.mult > 1) return (
                    <div style={{ fontSize: 11, color: mult.tier === "hard" ? "#dc2626" : "#d97706", fontWeight: 700, marginTop: 2, fontFamily: sansStack, animation: "fadeUp 0.3s ease 0.2s both" }}>
                      {mult.label} {mult.tier} bonus
                    </div>
                  );
                  return null;
                })()}
                {countdownDone && !isReplay && (() => {
                  const cm = CONVICTION_MULT(prediction);
                  if (cm.tier === "bonus") return <div style={{ fontSize: 11, color: "#059669", fontWeight: 700, marginTop: 2, fontFamily: sansStack, animation: "fadeUp 0.3s ease 0.3s both" }}>+{cm.label}</div>;
                  if (cm.tier === "penalty") return <div style={{ fontSize: 11, color: "#dc2626", fontWeight: 700, marginTop: 2, fontFamily: sansStack, animation: "fadeUp 0.3s ease 0.3s both" }}>−{cm.label}</div>;
                  return null;
                })()}
                {countdownDone && challengeMode && pts > 0 && !isReplay && (
                  <div style={{ fontSize: 11, color: "#7c2d12", fontWeight: 700, marginTop: 2, fontFamily: sansStack, animation: "fadeUp 0.3s ease 0.35s both" }}>2× challenge mode</div>
                )}
                {countdownDone && streakMilestone && !isReplay && streakMilestone.bonus > 0 && (
                  <div style={{ fontSize: 12, color: "#92400e", fontWeight: 700, marginTop: 2, fontFamily: sansStack, animation: "fadeUp 0.3s ease 0.4s both" }}>+{streakMilestone.bonus} streak</div>
                )}
                {countdownDone && isReplay && (
                  <div style={{ fontSize: 11, color: "#b0ada6", marginTop: 4, fontFamily: sansStack }}>
                    {historianVariance ? "Different perspective" : "Already played"}
                  </div>
                )}
              </div>
            </div>

            {/* Weight bar */}
            <div style={{ ...S.card, padding: "18px 22px", ...rcFade(ci, 0.34) }}>
              <div style={{
                position: "relative", height: 12, borderRadius: 6,
                background: "linear-gradient(90deg, #15803d, #a16207 40%, #c2410c 65%, #b91c1c)",
                overflow: "visible",
              }}>
                {/* Gap highlight — animates during countdown */}
                {diff > 0.08 && animatedActual !== null && (() => {
                  const animW = (animatedActual ?? Math.round(prediction * 100)) / 100;
                  const lo = Math.min(prediction, animW), hi = Math.max(prediction, animW);
                  if (hi - lo < 0.02) return null;
                  return <div style={{
                    position: "absolute", top: -2, bottom: -2,
                    left: `${lo * 100}%`, width: `${(hi - lo) * 100}%`,
                    background: "rgba(255,255,255,0.35)", borderRadius: 4, border: "1px solid rgba(255,255,255,0.5)",
                    transition: "left 0.05s linear, width 0.05s linear",
                  }} />;
                })()}
                {/* You dot — always visible */}
                <div style={{
                  position: "absolute", top: "50%", transform: "translate(-50%,-50%)",
                  left: `${Math.round(prediction * 100)}%`,
                  width: 16, height: 16, borderRadius: "50%",
                  background: "#fff", border: "3px solid #1a1a1a",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.2)", zIndex: 2,
                }} />
                {/* Actual dot — slides during countdown */}
                {animatedActual !== null && <div style={{
                  position: "absolute", top: "50%", transform: "translate(-50%,-50%)",
                  left: `${animatedActual}%`,
                  width: countdownDone ? 16 : 14, height: countdownDone ? 16 : 14, borderRadius: "50%",
                  background: actualLabel.color, border: "3px solid #fff",
                  boxShadow: countdownDone ? "0 1px 6px rgba(0,0,0,0.3)" : "0 1px 4px rgba(0,0,0,0.2)", zIndex: 3,
                  transition: "width 0.2s, height 0.2s, box-shadow 0.2s",
                }} />}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontFamily: sansStack }}>
                <span style={{ fontSize: 10, color: "#9a9890" }}>0%</span>
                <div style={{ display: "flex", gap: 12 }}>
                  <span style={{ fontSize: 10, color: "#9a9890", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: "#fff", border: "2px solid #1a1a1a" }} /> You
                  </span>
                  <span style={{ fontSize: 10, color: "#9a9890", display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: actualLabel.color, border: "2px solid #fff" }} /> Actual
                  </span>
                </div>
                <span style={{ fontSize: 10, color: "#9a9890" }}>100%</span>
              </div>
            </div>

            {/* Big miss commentary — appears after countdown with shake */}
            {diff > 0.24 && countdownDone && (
              <div style={{
                textAlign: "center", padding: "14px 22px",
                borderRadius: 12, fontSize: 14, lineHeight: 1.6,
                color: prediction > w ? "#991b1b" : "#166534",
                background: prediction > w ? "#fef2f2" : "#f0fdf4",
                border: prediction > w ? "1px solid #fecaca" : "1px solid #bbf7d0",
                fontFamily: sansStack, fontWeight: 500,
                animation: "fadeUp 0.4s ease both",
              }}>
                {(() => {
                  const gap = Math.round(diff * 100);
                  const isEvent = subject.cat === "events";
                  const isInstitution = subject.cat === "institutions";
                  const isInvention = subject.cat === "inventions";
                  const isPerson = !isEvent && !isInstitution && !isInvention;
                  const overMisses = isPerson ? [
                    `Off by ${gap} points. ${subject.name}'s contribution was real, but the conditions were ripe — someone else was close.`,
                    `${gap} points high. Strip away the name, and the outcome likely still arrives.`,
                    `Off by ${gap}. Individual genius mattered less here than the forces that made it possible.`,
                    `${gap}-point miss. History remembers the name, but the work was more convergent than it looks.`,
                  ] : isEvent ? [
                    `Off by ${gap} points. The underlying pressures made something like this likely — the specific form was less decisive than it feels.`,
                    `${gap} points high. Events like this feel singular in the moment, but the conditions were already in place.`,
                    `Off by ${gap}. The shock was real, but the deeper trends were already moving this direction.`,
                    `${gap}-point miss. Change the trigger, and a similar outcome probably still unfolds.`,
                  ] : isInstitution ? [
                    `Off by ${gap} points. The need this filled was real, but another structure would have emerged to meet it.`,
                    `${gap} points high. Institutions feel permanent, but the function matters more than the specific form.`,
                    `Off by ${gap}. Remove this one, and the vacuum gets filled — maybe differently, but filled.`,
                  ] : [
                    `Off by ${gap} points. The technology was converging — the specific implementation mattered less than it seems.`,
                    `${gap} points high. Multiple paths led here. This one won, but wasn't the only possible route.`,
                    `Off by ${gap}. The invention was coming. The question was when and in what form, not whether.`,
                  ];
                  const underMisses = isPerson ? [
                    `Off by ${gap} points. ${subject.name} bent the arc of history more than the surface story suggests.`,
                    `${gap} points low. Remove this person and the ripple effects run deeper than expected.`,
                    `Off by ${gap}. What looks inevitable in retrospect was actually hanging by a thread.`,
                    `${gap}-point miss. The specific vision and timing made all the difference.`,
                  ] : isEvent ? [
                    `Off by ${gap} points. This event's specific timing and form shaped everything that followed.`,
                    `${gap} points low. A different version of this event would have produced a very different world.`,
                    `Off by ${gap}. The details of how this happened — not just that it happened — changed the trajectory.`,
                    `${gap}-point miss. Delay or alter this, and decades of downstream history shift.`,
                  ] : isInstitution ? [
                    `Off by ${gap} points. This institution's specific structure and decisions shaped outcomes more than you'd think.`,
                    `${gap} points low. The form matters, not just the function — and this form was hard to replicate.`,
                    `Off by ${gap}. Without this specific institution, the alternatives would have looked very different.`,
                  ] : [
                    `Off by ${gap} points. The specific design choices locked in a path that shaped everything after.`,
                    `${gap} points low. This wasn't just "the next step" — the particular form it took redirected whole fields.`,
                    `Off by ${gap}. Implementation matters. A different version would have produced a different world.`,
                  ];
                  const pool = prediction > w ? overMisses : underMisses;
                  return pool[Math.abs(hashString(subject.name + "miss")) % pool.length];
                })()}
              </div>
            )}

            {/* Historian variance — shows when replaying a figure */}
            {isReplay && historianVariance && countdownDone && (
              <div style={{
                padding: "14px 18px", borderRadius: 12,
                background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                border: "1px solid #e2e8f0",
                ...rcFade(ci, 0.42),
                animation: "fadeUp 0.4s ease 0.3s both",
              }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 8, marginBottom: 8,
                }}>
                  <span style={{ fontSize: 16 }}>🔄</span>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#475569", fontFamily: sansStack }}>
                    {historianVariance.perspective.name} View
                  </div>
                  <div style={{
                    fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 6,
                    background: historianVariance.shift > 0 ? "#fef2f2" : "#f0fdf4",
                    color: historianVariance.shift > 0 ? "#dc2626" : "#16a34a",
                    fontFamily: sansStack,
                  }}>
                    {historianVariance.shift > 0 ? "−" : "+"}{Math.round(historianVariance.magnitude * 100)}% weight
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55, fontFamily: sansStack }}>
                  {historianVariance.perspective.desc}
                </div>
                <div style={{
                  marginTop: 10, display: "flex", alignItems: "center", gap: 12,
                  fontSize: 12, color: "#94a3b8", fontFamily: sansStack,
                }}>
                  <span>Original: <strong style={{ color: "#475569" }}>{Math.round(originalW * 100)}%</strong></span>
                  <span>→</span>
                  <span>This view: <strong style={{ color: actualLabel.color }}>{Math.round(w * 100)}%</strong></span>
                </div>
              </div>
            )}

            {/* Streak */}
            {revealPhase >= 2 && ((streak >= 2 && !isReplay) || (streakMilestone && streakMilestone.reward === "shield_used")) && (
              <div style={{
                textAlign: "center", padding: streakMilestone ? "16px 20px" : "10px 16px",
                background: streakMilestone
                  ? streakMilestone.reward === "shield_used" ? "linear-gradient(135deg, #f0fdfa, #ccfbf1)" : "linear-gradient(135deg, #fffbeb, #fef3c7)"
                  : "linear-gradient(135deg, #faf5ff, #f3e8ff)",
                borderRadius: 12,
                border: streakMilestone
                  ? streakMilestone.reward === "shield_used" ? "1px solid #99f6e4" : "1px solid #fde68a"
                  : "1px solid #e9d5ff",
                ...rcFade(ci, 0.46),
              }}>
                {streakMilestone ? (
                  <>
                    <div style={{ fontSize: 28, marginBottom: 6 }}>{streakMilestone.emoji}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, fontFamily: sansStack, color: streakMilestone.reward === "shield_used" ? "#0d9488" : "#92400e", marginBottom: 4 }}>
                      {streakMilestone.reward === "shield_used" ? "Streak Shield Activated!" : `${streak}-Round Streak — ${streakMilestone.label}!`}
                    </div>
                    {streakMilestone.bonus > 0 && (
                      <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 8, background: "#92400e", color: "#fff", fontSize: 14, fontWeight: 700, marginTop: 4, fontFamily: sansStack }}>
                        +{streakMilestone.bonus} bonus points
                      </div>
                    )}
                    {streakMilestone.rewardLabel && streakMilestone.reward !== "shield_used" && (
                      <div style={{ marginTop: 10, padding: "8px 14px", borderRadius: 8, background: "rgba(109,40,217,0.08)", border: "1px solid rgba(109,40,217,0.15)", fontSize: 13, color: "#6d28d9", fontWeight: 600, fontFamily: sansStack }}>
                        🎁 {streakMilestone.rewardLabel}
                      </div>
                    )}
                    {streakMilestone.reward === "shield_used" && (
                      <div style={{ marginTop: 8, fontSize: 13, color: "#0d9488", fontFamily: sansStack }}>{streakMilestone.rewardLabel}</div>
                    )}
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: 15 }}>🔥 {streak}-round streak</span>
                    <span style={{ fontSize: 12, color: "#7c3aed", marginLeft: 8, fontFamily: sansStack }}>
                      {(() => { const n = STREAK_MILESTONES.find(m => m.at > streak); return n ? `${n.at - streak} more for +${n.bonus} bonus!` : "Maximum streak!"; })()}
                    </span>
                  </>
                )}
              </div>
            )}

            {/* Exploration prompt — shows exactly what content is ahead */}
            <div style={{ ...rcFade(ci, 0.55), marginTop: "auto", paddingTop: 20 }}>
              <div style={{
                fontSize: 11, fontWeight: 700, color: "#9a9890", textTransform: "uppercase",
                letterSpacing: "0.06em", marginBottom: 10, textAlign: "center", fontFamily: sansStack,
              }}>Keep exploring</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  { card: "reasoning", icon: "💡", title: "Why this score", desc: "The historical reasoning" },
                  ...(subject.cascade?.length ? [{ card: "cascade", icon: "🌊", title: "Ripple effects", desc: "The chain of consequences" }] : []),
                  ...(subject.modernDay ? [{ card: "world", icon: "🌍", title: `World without ${subject.name.split(" ").pop()}`, desc: "What changes today" }] : []),
                  ...(subject.timeline?.length ? [{ card: "timeline", icon: "📅", title: "Alternate timeline", desc: "Year by year, what shifts" }] : []),
                ].map((item, idx) => (
                  <button key={item.card} onClick={() => goToResultCard(resultCards.indexOf(item.card))} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "10px 14px", borderRadius: 10, border: "1px solid #e5e2db",
                    background: idx === 0 ? "#faf9f6" : "#fff",
                    cursor: "pointer", textAlign: "left", width: "100%",
                    animation: `fadeUp 0.35s ease ${0.5 + idx * 0.08}s both`,
                  }}>
                    <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1a1a", fontFamily: fontStack }}>{item.title}</div>
                      <div style={{ fontSize: 11, color: "#9a9890", fontFamily: sansStack, marginTop: 1 }}>{item.desc}</div>
                    </div>
                    <span style={{ fontSize: 13, color: "#c4c0b8", fontFamily: sansStack }}>→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    };

    // ═══ CARD: REASONING ═══
    const ReasoningCard = () => {
      const ci = resultCards.indexOf("reasoning");
      const hasCounterfactual = !!subject.counterfactual;
      return (
        <div style={cardShell()}>
          <div style={cardInner()}>
            {/* Verdict */}
            <div style={{
              ...S.card, padding: "20px 22px",
              background: `${actualLabel.color}06`,
              borderLeft: `4px solid ${actualLabel.color}`,
              ...rcFade(ci, 0),
            }}>
              <h3 style={{ ...S.sectionHeader, color: actualLabel.color, marginBottom: 4 }}>
                <span>⚖️</span> {actualLabel.label}
              </h3>
              <p style={{ color: actualLabel.color, fontSize: 12, margin: "0 0 12px", opacity: 0.8, fontWeight: 500, fontFamily: sansStack }}>{actualLabel.desc}</p>
              <p style={{ color: "#4a4840", lineHeight: 1.75, fontSize: 15, margin: 0, fontFamily: sansStack }}>{subject.reasoning}</p>

              {(() => {
                const insight = getDirectionInsight(prediction, r, subject);
                return insight ? (
                  <div style={{
                    color: prediction > w ? "#991b1b" : "#166534",
                    fontSize: 13, lineHeight: 1.65, marginTop: 14,
                    padding: "12px 16px", borderRadius: 12,
                    background: prediction > w ? "#fef2f2" : "#f0fdf4",
                    fontFamily: sansStack, fontWeight: 500,
                  }}>
                    <span style={{ fontWeight: 700 }}>{prediction > w ? "↑ You overestimated" : "↓ You underestimated"} the weight.</span>{" "}
                    {insight}
                  </div>
                ) : null;
              })()}
            </div>

            {/* Counterfactual — same card */}
            {hasCounterfactual && (
              <div style={{
                ...S.card, padding: "22px 24px",
                background: "#fffbeb", borderColor: "#fde68a",
                ...rcFade(ci, 0.2),
              }}>
                <h3 style={{ ...S.sectionHeader, color: "#92400e", marginBottom: 12 }}>
                  <span>🔮</span> The Counterfactual
                </h3>
                <p style={{
                  color: "#78350f", lineHeight: 1.75, fontSize: 15, margin: 0,
                  fontFamily: fontStack, fontStyle: "italic",
                }}>{subject.counterfactual}</p>
              </div>
            )}

            {/* ═══ DEBATE MODE ═══ */}
            {!subject._isCustom && (
              <div style={{ ...rcFade(ci, hasCounterfactual ? 0.35 : 0.25) }}>
                {debatePhase === null && (
                  <button onClick={() => { setDebatePhase("writing"); SFX.click(); }} style={{
                    ...S.card, padding: "16px 20px", width: "100%", cursor: "pointer",
                    textAlign: "left", display: "flex", alignItems: "center", gap: 12,
                    background: "#faf9f6", borderColor: "#e5e2db",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#6d28d9"; e.currentTarget.style.background = "#f5f3ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e2db"; e.currentTarget.style.background = "#faf9f6"; }}
                  >
                    <span style={{ fontSize: 22 }}>⚔️</span>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", fontFamily: fontStack }}>Challenge this score</div>
                      <div style={{ fontSize: 12, color: "#7a7770", fontFamily: sansStack, marginTop: 2 }}>
                        Think the {Math.round(w * 100)}% is wrong? Make your case.
                      </div>
                    </div>
                  </button>
                )}

                {debatePhase === "writing" && (
                  <div style={{ ...S.card, padding: "20px 22px" }}>
                    <h3 style={{ ...S.sectionHeader, color: "#6d28d9", marginBottom: 12 }}>
                      <span>⚔️</span> Challenge: {subject.name}
                    </h3>

                    {/* Direction picker */}
                    <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                      {[
                        { val: "higher", label: "Score should be higher", icon: "↑", desc: "More irreplaceable" },
                        { val: "lower", label: "Score should be lower", icon: "↓", desc: "More replaceable" },
                      ].map(opt => (
                        <button key={opt.val} onClick={() => setDebateDirection(opt.val)} style={{
                          flex: 1, padding: "10px 12px", borderRadius: 10, cursor: "pointer",
                          border: debateDirection === opt.val ? "2px solid #6d28d9" : "1px solid #e5e2db",
                          background: debateDirection === opt.val ? "#f5f3ff" : "#fff",
                          textAlign: "center",
                        }}>
                          <div style={{ fontSize: 18, marginBottom: 2 }}>{opt.icon}</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: debateDirection === opt.val ? "#6d28d9" : "#4a4840", fontFamily: sansStack }}>{opt.desc}</div>
                        </button>
                      ))}
                    </div>

                    {/* Argument textarea */}
                    <textarea
                      value={debateArgument}
                      onChange={e => setDebateArgument(e.target.value)}
                      placeholder={debateDirection === "higher"
                        ? `Why was ${subject.name} more irreplaceable than ${Math.round(w * 100)}%? What would NOT have happened without them?`
                        : debateDirection === "lower"
                        ? `Why was ${subject.name} more replaceable than ${Math.round(w * 100)}%? Who else could have done it?`
                        : `First pick a direction above, then write your argument...`
                      }
                      disabled={!debateDirection}
                      style={{
                        width: "100%", minHeight: 120, padding: "14px 16px",
                        borderRadius: 10, border: "1px solid #e5e2db",
                        fontFamily: sansStack, fontSize: 14, lineHeight: 1.6,
                        resize: "vertical", background: debateDirection ? "#fff" : "#f5f4f0",
                        color: "#1a1a1a", outline: "none",
                        boxSizing: "border-box",
                      }}
                      onFocus={e => e.target.style.borderColor = "#6d28d9"}
                      onBlur={e => e.target.style.borderColor = "#e5e2db"}
                    />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                      <span style={{ fontSize: 11, color: debateArgument.trim().length >= 20 ? "#16a34a" : "#9a9890", fontFamily: sansStack }}>
                        {debateArgument.trim().length} chars {debateArgument.trim().length < 20 ? "(min 20)" : "✓"}
                      </span>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button onClick={() => { setDebatePhase(null); setDebateDirection(null); setDebateArgument(""); }} style={{
                          ...S.btn, ...S.btnSecondary, fontSize: 13, padding: "8px 16px",
                        }}>Cancel</button>
                        <button onClick={submitDebate} disabled={!debateDirection || debateArgument.trim().length < 20} style={{
                          ...S.btn, fontSize: 13, padding: "8px 20px",
                          background: debateDirection && debateArgument.trim().length >= 20 ? "#6d28d9" : "#d4d0c8",
                          color: "#fff", cursor: debateDirection && debateArgument.trim().length >= 20 ? "pointer" : "not-allowed",
                          border: "none", fontWeight: 700,
                        }}>Submit argument</button>
                      </div>
                    </div>
                  </div>
                )}

                {debatePhase === "evaluating" && (
                  <div style={{ ...S.card, padding: "32px 22px", textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 12, animation: "pulse 1.5s ease-in-out infinite" }}>⚖️</div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "#6d28d9", fontFamily: sansStack }}>Evaluating your argument...</div>
                    <div style={{ fontSize: 12, color: "#9a9890", marginTop: 6, fontFamily: sansStack }}>A historian is reading your case</div>
                  </div>
                )}

                {debatePhase === "result" && debateResult && (
                  <div style={{ ...S.card, padding: "20px 22px", animation: "fadeUp 0.4s ease both" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <h3 style={{ ...S.sectionHeader, color: "#6d28d9", margin: 0 }}>
                        <span>⚔️</span> Debate Result
                      </h3>
                      <div style={{
                        display: "flex", alignItems: "center", gap: 8,
                      }}>
                        <div style={{
                          fontSize: 20, fontWeight: 800, fontFamily: fontStack,
                          color: debateResult.score >= 80 ? "#16a34a" : debateResult.score >= 60 ? "#d97706" : debateResult.score >= 40 ? "#ea580c" : "#dc2626",
                        }}>{debateResult.grade}</div>
                        <div style={{
                          fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 8,
                          background: debateResult.score >= 70 ? "#f0fdf4" : debateResult.score >= 40 ? "#fffbeb" : "#fef2f2",
                          color: debateResult.score >= 70 ? "#16a34a" : debateResult.score >= 40 ? "#d97706" : "#dc2626",
                          fontFamily: sansStack,
                        }}>{debateResult.score}/100</div>
                      </div>
                    </div>

                    {/* Player's argument summary */}
                    <div style={{
                      padding: "10px 14px", borderRadius: 8,
                      background: "#f5f3ff", border: "1px solid #e9d5ff",
                      marginBottom: 12,
                    }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", marginBottom: 4, fontFamily: sansStack }}>
                        YOUR ARGUMENT ({debateDirection === "higher" ? "↑ should be higher" : "↓ should be lower"})
                      </div>
                      <div style={{ fontSize: 13, color: "#4a4840", lineHeight: 1.5, fontFamily: sansStack }}>
                        {debateArgument.trim().length > 200 ? debateArgument.trim().slice(0, 200) + "..." : debateArgument.trim()}
                      </div>
                    </div>

                    {/* Concessions — what the evaluator grants */}
                    {debateResult.concessions && (
                      <div style={{
                        padding: "12px 16px", borderRadius: 10,
                        background: "#f0fdf4", border: "1px solid #bbf7d0",
                        marginBottom: 10,
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", marginBottom: 4, fontFamily: sansStack }}>✓ POINTS GRANTED</div>
                        <div style={{ fontSize: 14, color: "#166534", lineHeight: 1.6, fontFamily: sansStack }}>{debateResult.concessions}</div>
                      </div>
                    )}

                    {/* Rebuttal */}
                    {debateResult.rebuttal && (
                      <div style={{
                        padding: "12px 16px", borderRadius: 10,
                        background: "#fef2f2", border: "1px solid #fecaca",
                        marginBottom: 10,
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#dc2626", marginBottom: 4, fontFamily: sansStack }}>✗ COUNTERPOINT</div>
                        <div style={{ fontSize: 14, color: "#991b1b", lineHeight: 1.6, fontFamily: sansStack }}>{debateResult.rebuttal}</div>
                      </div>
                    )}

                    {/* Adjusted weight if argument was strong */}
                    {debateResult.adjustedWeight !== null && debateResult.adjustedWeight !== undefined && debateResult.score >= 70 && (
                      <div style={{
                        padding: "10px 14px", borderRadius: 10,
                        background: "#fffbeb", border: "1px solid #fde68a",
                        textAlign: "center",
                      }}>
                        <div style={{ fontSize: 12, color: "#92400e", fontFamily: sansStack }}>
                          Your argument was strong enough to shift the assessment: <strong>{Math.round(w * 100)}%</strong> → <strong>{debateResult.adjustedWeight}%</strong>
                        </div>
                      </div>
                    )}

                    <button onClick={() => { setDebatePhase(null); setDebateDirection(null); setDebateArgument(""); setDebateResult(null); }} style={{
                      ...S.btn, ...S.btnSecondary, width: "100%", marginTop: 12, textAlign: "center", fontSize: 13,
                    }}>Done</button>
                  </div>
                )}
              </div>
            )}

            <div style={rcFade(ci, hasCounterfactual ? 0.45 : 0.35)}>
              {subject.cascade?.length ? swipeHint("Trace the butterfly effect") : subject.modernDay ? swipeHint("The world without " + subject.name.split(" ").pop()) : swipeHint("Your results")}
            </div>
          </div>
        </div>
      );
    };

    // ═══ CARD: CASCADE ═══
    const CascadeCard = () => {
      if (!subject.cascade || subject.cascade.length === 0) return null;
      const ci = resultCards.indexOf("cascade");

      return (
        <div style={cardShell()}>
          <div style={cardInner()}>
            <div style={{
              ...S.card, padding: "20px 22px",
              background: "#faf9f6", borderColor: `${cat.color}20`,
              ...rcFade(ci, 0),
            }}>
              <h3 style={{ ...S.sectionHeader, color: cat.color, marginBottom: 16 }}>
                <span>🦋</span> Butterfly Effect
              </h3>

              <div style={{ position: "relative", paddingLeft: 28 }}>
                <div style={{
                  position: "absolute", left: 13, top: 12, bottom: 12, width: 2,
                  background: `linear-gradient(180deg, ${cat.color}40, ${cat.color}08)`,
                }} />

                {subject.cascade.map((step, i) => {
                  const vis = i <= cascadeStep;
                  const nxt = i === cascadeStep + 1 && cascadeStep < subject.cascade.length - 1;
                  const cur = i === cascadeStep;
                  const sc = step.severity === "high" ? "#dc2626" : step.severity === "medium" ? "#d97706" : "#6b7280";

                  return (
                    <div key={i} style={{
                      position: "relative", marginBottom: i === subject.cascade.length - 1 ? 0 : 20,
                      opacity: vis ? 1 : nxt ? 0.45 : 0.15,
                      transform: vis ? "translateX(0)" : "translateX(8px)",
                      transition: "all 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
                      cursor: nxt ? "pointer" : "default",
                    }} onClick={() => { if (nxt) { setCascadeStep(i); SFX.interludeStep(i); } }}>
                      <div style={{
                        position: "absolute", left: -21, top: 10,
                        width: 16, height: 16, borderRadius: "50%",
                        background: vis ? cat.color : "#e5e2db",
                        border: `2px solid ${vis ? cat.color : "#d4d0c8"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 8, transition: "all 0.3s",
                        boxShadow: cur ? `0 0 0 3px ${cat.color}20` : "none",
                      }}>{vis && <span style={{ fontSize: 9 }}>{step.icon}</span>}</div>

                      <div style={{
                        padding: "12px 14px", borderRadius: 12,
                        background: vis ? (cur ? "#fff" : "#faf9f6") : "#f5f4f0",
                        border: cur ? `2px solid ${cat.color}25` : "1px solid #e5e2db",
                        boxShadow: cur ? "0 2px 12px rgba(0,0,0,0.04)" : "none",
                        transition: "all 0.35s",
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{
                            fontSize: 9, fontWeight: 700, color: sc, textTransform: "uppercase",
                            letterSpacing: "0.05em", padding: "2px 7px", borderRadius: 4,
                            background: `${sc}08`, border: `1px solid ${sc}15`, fontFamily: sansStack,
                          }}>{step.severity} impact</span>
                          <span style={{ fontSize: 10, color: "#9a9890", fontStyle: "italic", fontFamily: sansStack }}>{step.delay}</span>
                        </div>
                        <div style={{ fontSize: 13.5, fontWeight: 700, color: "#1a1a1a", marginBottom: vis ? 6 : 0, lineHeight: 1.4, fontFamily: sansStack }}>{step.event}</div>
                        {vis && <div style={{ fontSize: 13, color: "#4a4840", lineHeight: 1.65, fontFamily: sansStack }}>{step.consequence}</div>}
                      </div>

                      {nxt && (
                        <div style={{
                          textAlign: "center", fontSize: 11, color: cat.color,
                          marginTop: 5, fontWeight: 600, animation: "pulse 2s ease-in-out infinite", fontFamily: sansStack,
                        }}>↓ Tap to see what happens next</div>
                      )}
                    </div>
                  );
                })}
              </div>

              {cascadeStep < subject.cascade.length - 1 && (
                <button onClick={() => { setCascadeStep(subject.cascade.length - 1); SFX.reveal(80); }} style={{
                  display: "block", margin: "16px auto 0", padding: "9px 22px",
                  fontSize: 12, fontWeight: 600, color: cat.color, fontFamily: sansStack,
                  background: `${cat.color}08`, border: `1px solid ${cat.color}20`,
                  borderRadius: 8, cursor: "pointer",
                }}>Reveal all steps →</button>
              )}
            </div>

            {cascadeStep >= subject.cascade.length - 1 && (
              <div style={rcFade(ci, 0)}>
                {subject.modernDay ? swipeHint("The world without " + subject.name.split(" ").pop()) : subject.timeline?.length ? swipeHint("Alternate timeline") : swipeHint("Your results")}
              </div>
            )}
          </div>
        </div>
      );
    };

    // ═══ CARD: TIMELINE ═══
    const TimelineCard = () => {
      if (!subject.timeline || subject.timeline.length === 0) return null;
      const ci = resultCards.indexOf("timeline");
      return (
        <div style={cardShell()}>
          <div style={cardInner()}>
            <div style={{
              ...S.card, padding: "20px 22px",
              background: "#faf9f6", borderColor: "#e5e2db",
              ...rcFade(ci, 0),
            }}>
              <h3 style={{ ...S.sectionHeader, color: "#1a1a1a", marginBottom: 16 }}>
                <span>🔀</span> What Happened vs. Alternate Timeline
              </h3>

              <div style={{ display: "grid", gap: 16 }}>
                {subject.timeline.map((event, i) => (
                  <div key={i} style={{ ...rcFade(ci, 0.08 + i * 0.08) }}>
                    <div style={{
                      fontWeight: 700, fontSize: 15, color: "#1a1a1a",
                      fontFamily: fontStack, marginBottom: 10,
                    }}>{formatYear(event.year)}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div style={{
                        padding: 12, background: "#f0fdf4", borderRadius: 12,
                        border: "1px solid #bbf7d0",
                      }}>
                        <div style={{
                          fontSize: 10, fontWeight: 700, color: "#15803d", marginBottom: 5,
                          textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack,
                        }}>✓ What happened</div>
                        <div style={{ fontSize: 12.5, color: "#166534", lineHeight: 1.55, fontFamily: sansStack }}>{event.happened}</div>
                      </div>
                      <div style={{
                        padding: 12, background: "#fffbeb", borderRadius: 12,
                        border: "1px solid #fde68a",
                      }}>
                        <div style={{
                          fontSize: 10, fontWeight: 700, color: "#d97706", marginBottom: 5,
                          textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack,
                        }}>⚡ Alternate</div>
                        <div style={{ fontSize: 12.5, color: "#92400e", lineHeight: 1.55, fontFamily: sansStack }}>{event.alternate}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={rcFade(ci, 0.3)}>
              {swipeHint("Your results")}
            </div>
          </div>
        </div>
      );
    };

    // ═══ CARD: WORLD TODAY ═══
    const WorldCard = () => {
      if (!subject.modernDay) return null;
      const ci = resultCards.indexOf("world");
      const domains = [
        { key: "daily", label: "Your Daily Life", icon: "🏠", accent: "#0d9488", bg: "#f0fdfa", border: "#99f6e4" },
        { key: "tech", label: "Technology", icon: "💻", accent: "#6d28d9", bg: "#faf5ff", border: "#e9d5ff" },
        { key: "culture", label: "Culture", icon: "🎭", accent: "#92400e", bg: "#fffbeb", border: "#fde68a" },
        { key: "politics", label: "Politics & Power", icon: "🏛️", accent: "#1e40af", bg: "#eff6ff", border: "#bfdbfe" },
      ].filter(d => subject.modernDay[d.key]);

      return (
        <div style={cardShell()}>
          <div style={cardInner()}>
            <div style={{ ...rcFade(ci, 0), marginBottom: 16 }}>
              <h3 style={{ ...S.sectionHeader, color: "#1a1a1a", marginBottom: 4 }}>
                <span>🌍</span> The World Without {subject.name.split(" ").pop()}
              </h3>
              <p style={{ fontSize: 12, color: "#9a9890", margin: 0, fontFamily: sansStack }}>What changes in everyday life, technology, culture, and power</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {domains.map((d, i) => (
                <div key={d.key} style={{
                  ...S.card, padding: "16px 18px",
                  background: d.bg, borderColor: d.border,
                  ...rcFade(ci, 0.06 + i * 0.08),
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                    <span style={{ fontSize: 14 }}>{d.icon}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, color: d.accent,
                      textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack,
                    }}>{d.label}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "#3a3a3a", lineHeight: 1.65, margin: 0, fontFamily: sansStack }}>{subject.modernDay[d.key]}</p>
                </div>
              ))}
            </div>

            <div style={rcFade(ci, 0.4)}>{subject.timeline?.length ? swipeHint("Alternate timeline") : swipeHint("Your results")}</div>
          </div>
        </div>
      );
    };

    // ═══ CARD: ACTIONS ═══
    const ActionsCard = () => {
      const ci = resultCards.indexOf("actions");
      return (
        <div style={cardShell()}>
          <div style={cardInner()}>

            {/* Summary card */}
            <div style={{ ...S.card, padding: "24px 22px", textAlign: "center", ...rcFade(ci, 0) }}>
              <div style={{ fontSize: 42, marginBottom: 8 }}>{feedback.emoji}</div>
              <h2 style={{ ...S.h2, fontSize: 22, marginBottom: 3 }}>{subject.name}</h2>
              <p style={{ fontSize: 12, color: "#9a9890", margin: 0, fontFamily: sansStack }}>{actualLabel.label}</p>
              <div style={{
                fontSize: 44, fontWeight: 400, fontFamily: fontStack,
                color: pts > 0 ? "#6d28d9" : "#b0ada6",
                margin: "12px 0 2px",
              }}>{pts > 0 ? `+${pts}` : isReplay ? "—" : "+0"}</div>
              <p style={{ fontSize: 13, color: "#9a9890", margin: 0, fontFamily: sansStack }}>
                {isReplay ? "already played" : "points earned"}
              </p>

              {/* Quick stats */}
              <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 18, paddingTop: 16, borderTop: "1px solid #e8e6e1" }}>
                {[
                  { lab: "You", val: `${Math.round(prediction * 100)}%` },
                  { lab: "Actual", val: `${Math.round(w * 100)}%` },
                  { lab: "Off by", val: `${Math.round(diff * 100)}%` },
                ].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 10, color: "#9a9890", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4, fontFamily: sansStack }}>{s.lab}</div>
                    <div style={{ fontSize: 16, color: "#1a1a1a", fontFamily: sansStack }}>{s.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily stats */}
            {isDaily && (() => {
              const figR = subject.r ?? subject._r;
              const figW = toWeight(figR);
              const playerDiff = Math.abs(prediction - figW);
              // Use async communityData if available, fall back to model estimate
              const community = communityData || generateCommunityStats(figR);
              const percentile = getDailyPercentile(playerDiff, figR);
              const bucketLabels = ["0-20%", "20-40%", "40-60%", "60-80%", "80-100%"];
              const playerBucket = Math.min(4, Math.floor(prediction * 5));
              const isRealData = community.isReal === true;
              const hasPartialData = community.sampleSize > 0 && !isRealData;

              return (
                <div style={{
                  background: "#fffbeb", borderRadius: 12, padding: "20px 22px",
                  marginBottom: 0, border: "2px solid #f59e0b",
                  ...rcFade(ci, 0.08),
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <h3 style={{ ...S.sectionHeader, color: "#d97706", margin: 0 }}><span>🗓️</span> Daily Challenge</h3>
                    <span style={{ fontSize: 11, color: "#92400e", fontWeight: 600, fontFamily: sansStack }}>
                      {isRealData
                        ? `${community.totalPlayers.toLocaleString()} players`
                        : hasPartialData
                          ? `${community.sampleSize} players + est.`
                          : "Est. distribution"}
                    </span>
                  </div>
                  <div style={{
                    textAlign: "center", padding: "14px 16px", marginBottom: 18,
                    background: percentile >= 70 ? "#dcfce7" : percentile >= 40 ? "#fef9ee" : "#fff1f2",
                    borderRadius: 12,
                    border: `1px solid ${percentile >= 70 ? "#bbf7d0" : percentile >= 40 ? "#fde68a" : "#fecdd3"}`,
                  }}>
                    <div style={{ fontSize: 32, fontWeight: 400, fontFamily: fontStack, color: percentile >= 70 ? "#15803d" : percentile >= 40 ? "#d97706" : "#b91c1c" }}>
                      Top {100 - percentile}%
                    </div>
                    <div style={{ fontSize: 13, color: "#4a4840", marginTop: 4, fontFamily: sansStack }}>
                      {isRealData
                        ? <>You beat <strong>{percentile}%</strong> of players</>
                        : <>Estimated ranking based on difficulty</>
                      }
                    </div>
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#92400e", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>
                      {isRealData ? "How Players Guessed" : "Expected Guess Distribution"}
                    </div>
                    <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 60 }}>
                      {community.buckets.map((count, i) => {
                        const height = Math.max(8, (count / community.maxBucket) * 56);
                        const isPlayer = i === playerBucket;
                        return (
                          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                            <div style={{
                              width: "100%", height, borderRadius: 4,
                              background: isPlayer ? "linear-gradient(180deg, #f59e0b, #d97706)" : "#fde68a",
                              border: isPlayer ? "1px solid #b45309" : "1px solid #fbbf24",
                              position: "relative",
                            }}>
                              {isPlayer && <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", fontSize: 9, fontWeight: 700, color: "#92400e", fontFamily: sansStack }}>YOU</div>}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
                      {bucketLabels.map((label, i) => <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 8, color: "#92400e", fontFamily: sansStack }}>{label}</div>)}
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-around", padding: "10px 0", borderTop: "1px solid #fde68a", fontSize: 13, color: "#78350f" }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: "#a16207", fontWeight: 600, marginBottom: 2, fontFamily: sansStack }}>{isRealData ? "AVG GUESS" : "EST. AVG"}</div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{Math.round(community.avgGuess * 100)}%</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: "#a16207", fontWeight: 600, marginBottom: 2, fontFamily: sansStack }}>YOUR GUESS</div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{Math.round(prediction * 100)}%</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontSize: 11, color: "#a16207", fontWeight: 600, marginBottom: 2, fontFamily: sansStack }}>WITHIN 10%</div>
                      <div style={{ fontWeight: 700, fontSize: 16 }}>{community.pctClose}%</div>
                    </div>
                  </div>
                  {dailyState?.dailyStreak >= 2 && (
                    <div style={{ textAlign: "center", marginTop: 12, padding: 8, background: "#fef9ee", borderRadius: 8, fontSize: 13, color: "#b45309", fontFamily: sansStack }}>
                      🔥 {dailyState.dailyStreak}-day daily streak
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Rank */}
            {(() => {
              const avgPts = played.length > 0 ? Math.round(score / played.length) : 0;
              const currentRank = getRank(avgPts, played.length);
              return played.length >= 3 ? (
                <div style={{
                  ...S.card, padding: "14px 18px",
                  display: "flex", alignItems: "center", gap: 12,
                  ...rcFade(ci, 0.15),
                }}>
                  <span style={{ fontSize: 22 }}>{currentRank.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: currentRank.color, fontFamily: sansStack }}>{currentRank.title}</div>
                    {currentRank.next && <div style={{ fontSize: 11, color: "#7a7770", marginTop: 2, fontFamily: sansStack }}>{currentRank.next}</div>}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", fontFamily: fontStack }}>{score}</div>
                    <div style={{ fontSize: 10, color: "#9a9890", fontFamily: sansStack }}>total pts</div>
                  </div>
                </div>
              ) : null;
            })()}

            {/* Smart next suggestions — primary CTA for replay loop */}
            {!h2hMode && !isDaily && !subject._isCustom && (() => {
              const suggestions = [];
              const connected = getConnectedFigures(subject, played);
              const unplayedConnected = connected.filter(f => !played.includes(f.id));
              if (unplayedConnected.length > 0) {
                const pick = unplayedConnected[0];
                suggestions.push({ figure: pick, reason: getConnectionLabel(subject, pick), icon: "🔗" });
              }
              if (gameHistory.length >= 3) {
                const recs = getRecommendations(played, gameHistory, ALL_SUBJECTS);
                const rec = recs.find(r => !suggestions.some(s => s.figure.id === r.figure.id));
                if (rec) {
                  const icons = { connected: "🔗", weak: "🎯", challenge: "⬆️", comfort: "💪" };
                  suggestions.push({ figure: rec.figure, reason: rec.label, icon: icons[rec.type] || "→" });
                }
              }
              if (suggestions.length === 0) return null;
              return (
                <div style={{ marginTop: 4, marginBottom: 8, ...rcFade(ci, 0.18) }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#9a9890", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: sansStack }}>Continue Playing</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {suggestions.map((s, idx) => {
                      const sCat = CATS[s.figure.cat] || { color: "#64748b", bg: "rgba(100,116,139,0.06)" };
                      const isPrimary = idx === 0;
                      return (
                        <button key={s.figure.id} onClick={() => selectSubject(s.figure)} style={{
                          ...S.card, padding: isPrimary ? "16px 18px" : "12px 16px", marginBottom: 0,
                          display: "flex", alignItems: "center", gap: 12,
                          cursor: "pointer", textAlign: "left",
                          background: isPrimary ? `${sCat.color}08` : "#fff",
                          borderColor: isPrimary ? `${sCat.color}35` : `${sCat.color}25`,
                          borderWidth: isPrimary ? 2 : 1,
                        }}>
                          <span style={{ fontSize: isPrimary ? 22 : 18 }}>{s.icon}</span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: isPrimary ? 16 : 15, fontWeight: 600, color: "#1a1a1a", fontFamily: fontStack }}>{s.figure.name}</div>
                            <div style={{ fontSize: 12, color: "#7a7770", marginTop: 2, fontFamily: sansStack }}>{s.reason}</div>
                          </div>
                          <span style={{
                            fontSize: 13, fontWeight: 700, color: isPrimary ? sCat.color : "#9a9890",
                            fontFamily: sansStack,
                          }}>{isPrimary ? "Play →" : "→"}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4, ...rcFade(ci, 0.22) }}>
              {isDaily ? (
                <button onClick={shareResult} style={{ ...S.btn, ...S.btnPrimary, width: "100%", textAlign: "center" }}>📤 Share Daily</button>
              ) : (
                <button onClick={shareResult} style={{ ...S.btn, ...S.btnPrimary, width: "100%", textAlign: "center" }}>📤 Share Result</button>
              )}
              <div style={{ display: "flex", gap: 10 }}>
                {h2hMode ? (
                  <>
                    <button onClick={goHome} style={{ ...S.btn, ...S.btnSecondary, flex: 1, textAlign: "center" }}>Quit</button>
                    <button onClick={h2hAdvance} style={{ ...S.btn, flex: 2, textAlign: "center", background: "#dc2626", color: "#fff" }}>
                      {h2hMode.myPoints.length >= h2hMode.figures.length ? "See Results ⚔️" : "Next Round →"}
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={goHome} style={{ ...S.btn, ...S.btnSecondary, flex: 1, textAlign: "center" }}>🏠 Home</button>
                    <button onClick={startRandom} style={{ ...S.btn, ...S.btnSecondary, flex: 1, textAlign: "center" }}>🎲 Random</button>
                    {!subject._isCustom && (
                      <button onClick={createChallenge} style={{ ...S.btn, ...S.btnSecondary, flex: 1, textAlign: "center" }}>🎯 Challenge</button>
                    )}
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      );
    };

    return (
      <div style={{ ...S.page, overflow: "hidden" }}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <ShareModal />

        {/* Celebration canvas overlay */}
        <canvas ref={celebCanvasRef} style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          pointerEvents: "none", zIndex: 200,
        }} />

        {/* Bottom navigation — labeled so players know what's ahead */}
        <div style={{
          position: "fixed", bottom: 14, left: "50%", transform: "translateX(-50%)",
          zIndex: 100, display: "flex", gap: 4, padding: "5px 8px",
          background: "rgba(247,246,243,0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          borderRadius: 20, border: "1px solid #e5e2db",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          maxWidth: "95vw", overflowX: "auto", scrollbarWidth: "none",
        }}>
          {resultCards.map((c, i) => {
            const labels = { score: "Score", reasoning: "Why", cascade: "Ripples", world: "Today", timeline: "Timeline", actions: "Next" };
            const icons = { score: "🎯", reasoning: "💡", cascade: "🌊", world: "🌍", timeline: "📅", actions: "▶️" };
            const active = i === activeResultCard;
            return (
              <button key={c} onClick={() => goToResultCard(i)} style={{
                display: "flex", alignItems: "center", gap: 3,
                padding: active ? "4px 10px" : "4px 6px",
                borderRadius: 14, border: "none", cursor: "pointer",
                background: active ? (isDaily ? "#fef3c7" : "#f0f0ee") : "transparent",
                fontSize: 11, fontWeight: active ? 700 : 500,
                color: active ? (isDaily ? "#92400e" : "#1a1a1a") : "#9a9890",
                transition: "all 0.25s ease", whiteSpace: "nowrap",
                fontFamily: sansStack,
              }} aria-label={`${labels[c]} card`}>
                <span style={{ fontSize: 10 }}>{icons[c]}</span>
                {active && <span>{labels[c]}</span>}
              </button>
            );
          })}
        </div>

        {/* Card counter */}
        <div style={{
          position: "fixed", top: 12, right: 14, zIndex: 100,
          fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", fontFamily: sansStack,
          color: "#9a9890", background: "rgba(247,246,243,0.85)",
          padding: "5px 11px", borderRadius: 8,
          backdropFilter: "blur(8px)", border: "1px solid #e5e2db",
        }}>{activeResultCard + 1} / {totalResultCards}</div>

        {/* Horizontal scroll container */}
        <div ref={resultScrollRef} className="result-scroll" style={{
          height: "100%", display: "flex",
          overflowX: "scroll", overflowY: "hidden",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none", scrollbarWidth: "none",
        }}>
          <ScoreCard />
          <ReasoningCard />
          {subject.cascade && subject.cascade.length > 0 && <CascadeCard />}
          {subject.modernDay && <WorldCard />}
          {subject.timeline && subject.timeline.length > 0 && <TimelineCard />}
          <ActionsCard />
        </div>
      </div>
    );
  }

  return null;
}
