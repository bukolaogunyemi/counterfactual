import { toWeight } from "../helpers.js";

export const getInterludePhases = (subject, prediction) => {
  const name = subject.name;
  const reasoning = subject.reasoning || "";
  
  // Split reasoning into sentences, clean up
  const sentences = reasoning
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 10 && s.length < 200);
  
  // Build phases: intro â†’ reasoning sentences â†’ verdict tease
  const phases = [];
  
  // Opening: set the scene with what the player committed to
  const predPct = Math.round(prediction * 100);
  const predWord = predPct >= 70 ? "history-defining" : predPct >= 40 ? "moderately consequential" : "low-weight";
  phases.push({
    icon: "ðŸŽ¯",
    text: `You called ${name} ${predWord} at ${predPct}% weight. Let's see...`,
    style: "prediction",
  });
  
  // Middle: reasoning sentences (take up to 3)
  const icons = ["ðŸ”", "âš–ï¸", "ðŸŒ€", "ðŸ“"];
  const useSentences = sentences.slice(0, Math.min(3, sentences.length));
  useSentences.forEach((s, i) => {
    phases.push({ icon: icons[i] || "ðŸ”", text: s, style: "analysis" });
  });
  
  // If we got fewer than 2 reasoning sentences, add a category-specific filler
  if (useSentences.length < 2) {
    const catFillers = {
      science: `Checking who else was close to ${name}'s breakthroughs...`,
      politics: `Would the same movement have found a different champion?`,
      military: `Would a different commander have changed the outcome?`,
      arts: `How much of this legacy belongs to the individual vs. the moment?`,
      philosophy: `Were these ideas waiting to be thought, or truly original?`,
      medicine: `How many lives hinge on the timing of one breakthrough?`,
      computing: "Was this a question of who, or just when?",
      finance: "Would the same market forces have produced the same outcome?",
      exploration: "Separating the explorer from the conditions that made exploration possible...",
      social: "Was this change driven by one person, or by forces larger than any individual?",
      sports: `Would the sport have evolved the same way without ${name}?`,
      events: `Was this moment inevitable, or could it have gone completely differently?`,
      institutions: "Would other organizations have converged on the same model?",
      inventions: "Was the underlying science ready for anyone to find this?",
    };
    phases.push({ icon: "ðŸŒ€", text: catFillers[subject.cat] || "Weighing the evidence...", style: "analysis" });
  }
  
  // Closing: verdict incoming
  phases.push({ icon: "ðŸ“Š", text: "Rendering the verdict...", style: "verdict" });
  
  return phases;
};

// DIRECTIONAL INSIGHT â€” explains why the player was off, using actual subject context
export const getDirectionInsight = (prediction, rValue, subject) => {
  const actual = toWeight(rValue); // convert to weight
  const diff = prediction - actual; // positive = player said MORE impactful than reality
  const absDiff = Math.abs(diff);
  if (absDiff < 0.10) return null; // close enough, no need

  const name = subject.name || "this entry";
  const field = subject.field || "";
  const reasoning = subject.reasoning || "";

  // Extract a concrete detail from reasoning to ground the feedback
  const sentences = reasoning.match(/[^.!?]+[.!?]+/g) || [];
  const detailSentence = sentences.find(s =>
    s.length > 30 && s.length < 150 &&
    !s.includes("score") && !s.includes("weight")
  );
  const detail = detailSentence ? detailSentence.trim() : "";

  if (diff > 0) {
    // Player overestimated impact (thought more important than analysis says)
    if (actual < 0.30) {
      return `${name} mattered less than intuition suggests. ${detail || `The conditions in ${field.toLowerCase()} were converging â€” the same outcome was arriving from multiple directions.`}`;
    } else if (actual < 0.50) {
      return `${name}'s impact was real but not as singular as it seems. ${detail || `Similar forces in ${field.toLowerCase()} were pushing toward the same outcome.`}`;
    } else {
      return `${name} was important, but the underlying conditions were doing more of the work than it appears. ${detail}`.trim();
    }
  } else {
    // Player underestimated impact (thought less consequential than analysis says)
    if (actual > 0.70) {
      return `${name} carried more weight than you thought. ${detail || `Nothing else in ${field.toLowerCase()} was converging on this specific outcome.`}`;
    } else if (actual > 0.50) {
      return `The specific form of ${name} mattered more than the outcome alone suggests. ${detail || `It wasn't just that it happened â€” how it happened shaped what came after.`}`;
    } else {
      return `Even with similar forces at work, ${name}'s particular version of events carried more weight than expected. ${detail}`.trim();
    }
  }
};

// TENSION HOOK â€” extracts the debatable framing from reasoning for predict screen
export const getTensionHook = (subject) => {
  if (!subject.reasoning) return null;
  const sentences = subject.reasoning.match(/[^.!?]+[.!?]+/g) || [];
  if (sentences.length < 2) return null;
  // First two sentences typically frame the "on one hand / but on the other" tension
  const hook = sentences.slice(0, 2).join('').trim();
  // Only show if it's meaty enough to be interesting
  if (hook.length < 40 || hook.length > 300) return null;
  return hook;
};

