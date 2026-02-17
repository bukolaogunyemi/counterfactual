// Sound & Haptics Engine - Web Audio API, no external files
export const SFX_KEY = "counterfactual_sfx";
export const SFX = (() => {
  let ctx = null;
  let enabled = true;
  try { enabled = localStorage.getItem(SFX_KEY) !== "off"; } catch(e) {}

  const getCtx = () => {
    if (!ctx || ctx.state === "closed") {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { return null; }
    }
    if (ctx.state === "suspended") ctx.resume().catch(() => {});
    return ctx;
  };

  const tone = (freq, duration, vol = 0.12, type = "sine", delay = 0) => {
    if (!enabled) return;
    const c = getCtx(); if (!c) return;
    const t = c.currentTime + delay;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
    osc.connect(gain); gain.connect(c.destination);
    osc.start(t); osc.stop(t + duration);
  };

  // Haptic helper - safe on all platforms
  const vibrate = (pattern) => {
    if (!enabled) return;
    try { navigator?.vibrate?.(pattern); } catch(e) {}
  };

  return {
    isEnabled: () => enabled,
    toggle: () => { enabled = !enabled; try { localStorage.setItem(SFX_KEY, enabled ? "on" : "off"); } catch(e) {} return enabled; },
    setEnabled: (v) => { enabled = v; try { localStorage.setItem(SFX_KEY, v ? "on" : "off"); } catch(e) {} },

    // Slider tick - very short, very quiet
    tick: (() => {
      let last = 0;
      return (val) => {
        const now = Date.now();
        if (now - last < 60) return; // throttle to ~16/sec max
        last = now;
        tone(800 + val * 4, 0.03, 0.04, "sine");
        vibrate(5);
      };
    })(),

    // Lock in prediction
    lock: () => {
      tone(440, 0.08, 0.15, "sine");
      tone(660, 0.12, 0.15, "sine", 0.06);
      vibrate(30);
    },

    // Interlude building tension - step 0-4
    interludeStep: (step) => {
      const freqs = [260, 330, 390, 440, 520];
      const f = freqs[Math.min(step, 4)];
      tone(f, 0.25, 0.06 + step * 0.02, "triangle");
      vibrate(15);
    },

    // Result reveal - score-dependent
    reveal: (pts) => {
      if (pts >= 64) {
        // Bright ascending chord
        tone(523, 0.3, 0.12, "sine");
        tone(659, 0.3, 0.10, "sine", 0.05);
        tone(784, 0.4, 0.10, "sine", 0.10);
        vibrate([30, 30, 50]);
      } else if (pts >= 36) {
        // Neutral two-tone
        tone(440, 0.2, 0.10, "sine");
        tone(523, 0.25, 0.08, "sine", 0.08);
        vibrate(20);
      } else {
        // Soft descending
        tone(350, 0.2, 0.08, "sine");
        tone(280, 0.25, 0.06, "sine", 0.1);
        vibrate(15);
      }
    },

    // Streak milestone celebration
    milestone: () => {
      [523, 659, 784, 1047].forEach((f, i) => {
        tone(f, 0.25, 0.12, "sine", i * 0.08);
      });
      vibrate([40, 40, 40, 40, 80]);
    },

    // Achievement unlocked
    achievement: () => {
      tone(660, 0.15, 0.10, "sine");
      tone(880, 0.20, 0.12, "sine", 0.08);
      tone(1100, 0.30, 0.10, "sine", 0.16);
      vibrate([30, 50, 30]);
    },

    // Button click - subtle
    click: () => {
      tone(600, 0.04, 0.06, "sine");
      vibrate(8);
    },
  };
})();
