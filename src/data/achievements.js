// Achievement definitions
import { ALL_SUBJECTS } from '../subjects.js';
import { CATS } from '../categories.js';
import { COLLECTIONS } from './collections.js';
import { getDifficulty } from '../engine/scoring.js';

export const ACHIEVEMENTS = [
  { id: "first_play", icon: "ðŸŒ±", title: "First Steps", desc: "Play your first round", check: (h, p) => p.length >= 1 },
  { id: "ten_played", icon: "ðŸ“–", title: "History Student", desc: "Play 10 rounds", check: (h, p) => p.length >= 10 },
  { id: "fifty_played", icon: "ðŸ“š", title: "Well Read", desc: "Play 50 rounds", check: (h, p) => p.length >= 50 },
  { id: "century", icon: "ðŸ’¯", title: "Century Club", desc: "Play 100 rounds", check: (h, p) => p.length >= 100 },
  { id: "completionist", icon: "ðŸ†", title: "Completionist", desc: "Play every built-in entry", check: (h, p) => {
    const builtIn = new Set(ALL_SUBJECTS.map(s => s.id));
    return p.filter(id => builtIn.has(id)).length >= ALL_SUBJECTS.length;
  }},
  { id: "bullseye", icon: "ðŸŽ¯", title: "Bullseye", desc: "Guess within 3% of actual", check: (h) => h.some(g => g.diff <= 3) },
  { id: "sharpshooter", icon: "ðŸ”«", title: "Sharpshooter", desc: "5 games within 5% accuracy", check: (h) => h.filter(g => g.diff <= 5).length >= 5 },
  { id: "sniper", icon: "ðŸŽ–ï¸", title: "Sniper", desc: "10 games within 3% accuracy", check: (h) => h.filter(g => g.diff <= 3).length >= 10 },
  { id: "perfect", icon: "ðŸ’Ž", title: "Perfection", desc: "Score a perfect 100", check: (h) => h.some(g => g.pts === 100) },
  { id: "high_roller", icon: "ðŸ”¥", title: "High Roller", desc: "Score 80+ five times", check: (h) => h.filter(g => g.pts >= 80).length >= 5 },
  { id: "all_cats", icon: "ðŸŒ", title: "Renaissance Mind", desc: "Play one from every category", check: (h, p) => {
    const catSet = new Set(ALL_SUBJECTS.filter(s => p.includes(s.id)).map(s => s.cat));
    return catSet.size >= Object.keys(CATS).length;
  }},
  { id: "hard_nail", icon: "ðŸ§Š", title: "Hard Mode Hero", desc: "Score 70+ on a Hard entry", check: (h) => {
    return h.some(g => {
      const fig = ALL_SUBJECTS.find(s => s.id === g.id);
      return fig && getDifficulty(fig.r) >= 0.25 && g.pts >= 70;
    });
  }},
  { id: "streak5", icon: "âš¡", title: "Hot Streak", desc: "5-game accuracy streak", check: (h) => {
    let run = 0, max = 0;
    h.forEach(g => { run = g.diff <= 15 ? run + 1 : 0; max = Math.max(max, run); });
    return max >= 5;
  }},
  { id: "streak10", icon: "ðŸ”¥", title: "Unstoppable", desc: "10-game accuracy streak", check: (h) => {
    let run = 0, max = 0;
    h.forEach(g => { run = g.diff <= 15 ? run + 1 : 0; max = Math.max(max, run); });
    return max >= 10;
  }},
  { id: "collection_done", icon: "ðŸ“¦", title: "Collector", desc: "Complete any themed collection", check: (h, p) => {
    return COLLECTIONS.some(col => {
      const figs = col.figures.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);
      return figs.length > 0 && figs.every(f => p.includes(f.id));
    });
  }},
  { id: "three_collections", icon: "ðŸ—‚ï¸", title: "Curator", desc: "Complete 3 themed collections", check: (h, p) => {
    const done = COLLECTIONS.filter(col => {
      const figs = col.figures.map(id => ALL_SUBJECTS.find(s => s.id === id)).filter(Boolean);
      return figs.length > 0 && figs.every(f => p.includes(f.id));
    });
    return done.length >= 3;
  }},
  { id: "daily_7", icon: "ðŸ“…", title: "Weekly Warrior", desc: "7-day daily challenge streak", check: (h, p, ds) => (ds?.dailyStreak || 0) >= 7 },
  { id: "shield_save", icon: "ðŸ›¡ï¸", title: "Close Call", desc: "Have a Streak Shield save your streak", check: (h, p, ds, sr) => sr && sr.includes("streak_shield") },
  { id: "streak_15", icon: "ðŸ‘‘", title: "Historian's Run", desc: "Reach a 15-round accuracy streak", check: (h) => {
    let run = 0, max = 0;
    h.forEach(g => { run = g.diff <= 15 ? run + 1 : 0; max = Math.max(max, run); });
    return max >= 15;
  }},
  { id: "hard_5", icon: "ðŸ’€", title: "Trial by Fire", desc: "Score 60+ on 5 Hard entries", check: (h) => {
    return h.filter(g => {
      const fig = ALL_SUBJECTS.find(s => s.id === g.id);
      return fig && getDifficulty(fig.r) >= 0.25 && g.pts >= 60;
    }).length >= 5;
  }},
];

