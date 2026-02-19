// Tiered persistence: window.storage (artifact API) → localStorage → in-memory fallback
// Reads are synchronous (localStorage/memory). Writes mirror to window.storage async.
// On mount, hydrateFromPersistentStorage() pulls durable data into localStorage if empty.

export const STORAGE_KEY = "counterfactual_progress";
export const CUSTOM_CACHE_KEY = "counterfactual_custom_cache";
export const HISTORY_KEY = "counterfactual_history";
export const DAILY_KEY = "counterfactual_daily";
const BACKUP_VERSION = 2;

// ─── In-memory fallback (for incognito / restricted environments) ────────────
const memoryStore = new Map();

// ─── Environment detection ──────────────────────────────────────────────────
export const isStorageAvailable = () => {
  try {
    const test = "__cf_storage_test__";
    localStorage.setItem(test, "1");
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
};

const isPersistentStorageAvailable = () => {
  try {
    return typeof window !== "undefined" && window.storage && typeof window.storage.get === "function";
  } catch (e) {
    return false;
  }
};

// ─── Core read/write with tiered fallback ───────────────────────────────────
const readKey = (key, fallback = null) => {
  // Try localStorage first (synchronous, fast)
  try {
    const d = localStorage.getItem(key);
    if (d !== null) return JSON.parse(d);
  } catch (e) { /* restricted */ }

  // Try in-memory fallback
  if (memoryStore.has(key)) return memoryStore.get(key);

  return fallback;
};

const writeKey = (key, data) => {
  const json = JSON.stringify(data);

  // Write to localStorage
  try { localStorage.setItem(key, json); } catch (e) { /* full or restricted */ }

  // Write to in-memory fallback
  memoryStore.set(key, data);

  // Mirror to persistent storage (fire-and-forget)
  mirrorToPersistent(key, json);
};

// ─── Persistent storage mirror (artifact environment API) ────────────────────
// window.storage is async. We write to it as a durable backup so data survives
// browser clears, device switches, and incognito sessions.
const mirrorToPersistent = async (key, json) => {
  if (!isPersistentStorageAvailable()) return;
  try {
    await window.storage.set(`cf:${key}`, json);
  } catch (e) {
    // Silently fail — persistent storage is a bonus, not a requirement
  }
};

// ─── Hydration: pull durable data into localStorage on mount ────────────────
// Call once on app startup. If localStorage is empty but window.storage has
// data (user cleared browser, switched devices, artifact env), this recovers it.
export const hydrateFromPersistentStorage = async () => {
  if (!isPersistentStorageAvailable()) return { hydrated: false, reason: "no_persistent_storage" };

  const keys = [STORAGE_KEY, HISTORY_KEY, CUSTOM_CACHE_KEY, DAILY_KEY];
  let recovered = 0;

  for (const key of keys) {
    const localExists = (() => {
      try { return localStorage.getItem(key) !== null; } catch { return false; }
    })();

    if (localExists) continue;

    try {
      const result = await window.storage.get(`cf:${key}`);
      if (result && result.value) {
        const data = typeof result.value === "string" ? result.value : JSON.stringify(result.value);
        try { localStorage.setItem(key, data); } catch (e) { /* restricted */ }
        memoryStore.set(key, JSON.parse(data));
        recovered++;
      }
    } catch (e) {
      // Key doesn't exist in persistent storage — fine
    }
  }

  return { hydrated: recovered > 0, recovered };
};

// ─── Public API: progress ───────────────────────────────────────────────────
export const saveProgress = (data) => writeKey(STORAGE_KEY, data);
export const loadProgress = () => readKey(STORAGE_KEY, null);

// ─── Public API: game history ───────────────────────────────────────────────
export const saveHistory = (data) => writeKey(HISTORY_KEY, data);
export const loadHistory = () => readKey(HISTORY_KEY, []);

// ─── Public API: custom figure cache ────────────────────────────────────────
export const saveCustomCache = (data) => writeKey(CUSTOM_CACHE_KEY, data);
export const loadCustomCache = () => readKey(CUSTOM_CACHE_KEY, {});

// ─── Public API: daily state (used by daily.js) ─────────────────────────────
export const saveDailyRaw = (data) => writeKey(DAILY_KEY, data);
export const loadDailyRaw = () => readKey(DAILY_KEY, null);

// ─── Full data export (manual backup) ───────────────────────────────────────
export const exportAllData = () => {
  const bundle = {
    _meta: {
      version: BACKUP_VERSION,
      exportedAt: new Date().toISOString(),
      app: "CounterFactual",
    },
    progress: loadProgress(),
    history: loadHistory(),
    customCache: loadCustomCache(),
    daily: readKey(DAILY_KEY, null),
  };
  const json = JSON.stringify(bundle, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `counterfactual-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  return true;
};

// ─── Full data import (manual restore) ──────────────────────────────────────
export const importAllData = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const bundle = JSON.parse(e.target.result);

        if (!bundle._meta || bundle._meta.app !== "CounterFactual") {
          resolve({ success: false, message: "This doesn't look like a CounterFactual backup." });
          return;
        }

        let restored = 0;
        if (bundle.progress) { saveProgress(bundle.progress); restored++; }
        if (bundle.history) { saveHistory(bundle.history); restored++; }
        if (bundle.customCache) { saveCustomCache(bundle.customCache); restored++; }
        if (bundle.daily) { writeKey(DAILY_KEY, bundle.daily); restored++; }

        const games = bundle.progress?.played?.length || 0;
        const histEntries = bundle.history?.length || 0;
        resolve({
          success: true,
          message: `Restored ${games} games, ${histEntries} history entries. Reload to see changes.`,
          stats: { games, history: histEntries, keys: restored },
        });
      } catch (err) {
        resolve({ success: false, message: "Couldn't read the file. Make sure it's a valid backup JSON." });
      }
    };
    reader.onerror = () => resolve({ success: false, message: "Failed to read file." });
    reader.readAsText(file);
  });
};
