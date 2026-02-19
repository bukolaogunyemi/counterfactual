import { toWeight } from "../helpers.js";

export const getInterludePhases = (subject, prediction) => {
  const name = subject.name;
  const reasoning = subject.reasoning || "";
  
  // Split reasoning into sentences, clean up
  const sentences = reasoning
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 10 && s.length < 200);
  
  // Build phases: intro → reasoning sentences → verdict tease
  const phases = [];
  
  // Opening: set the scene with what the player committed to
  const predPct = Math.round(prediction * 100);
  const predWord = predPct >= 70 ? "history-defining" : predPct >= 40 ? "moderately consequential" : "low-weight";
  phases.push({
    icon: "🎯",
    text: `You called ${name} ${predWord} at ${predPct}% weight. Let's see...`,
    style: "prediction",
  });
  
  // Middle: reasoning sentences (take up to 3)
  const icons = ["🔍", "⚖️", "🌀", "📐"];
  const useSentences = sentences.slice(0, Math.min(3, sentences.length));
  useSentences.forEach((s, i) => {
    phases.push({ icon: icons[i] || "🔍", text: s, style: "analysis" });
  });
  
  // If we got fewer than 2 reasoning sentences, add a category-specific filler
  if (useSentences.length < 2) {
    const catFillers = {
      science: `How different does science look without ${name}'s breakthroughs?`,
      politics: `Remove this from history. How much changes?`,
      military: `Take this out of the equation. Does the war end differently?`,
      arts: `Remove this from the record. How different does the cultural landscape look?`,
      philosophy: `Would the same ideas have shaped the world without this specific voice?`,
      medicine: `How many lives change if you erase this from the timeline?`,
      computing: "Remove this and fast-forward to 2026. What looks different?",
      finance: "Erase this and trace the ripple effects forward...",
      exploration: "Take this out of the history books. Does the map look different?",
      social: "Remove this from the timeline. Does society still arrive at the same place?",
      sports: `Erase ${name} from the record books. Does the sport look different today?`,
      events: `Rewind and delete this moment. How much actually changes?`,
      institutions: "Remove this institution. Does the world organize itself the same way?",
      inventions: "Take this invention off the table. Does 2026 look different?",
    };
    phases.push({ icon: "🌀", text: catFillers[subject.cat] || "Weighing the evidence...", style: "analysis" });
  }
  
  // Closing: verdict incoming
  phases.push({ icon: "📊", text: "Rendering the verdict...", style: "verdict" });
  
  return phases;
};

// DIRECTIONAL INSIGHT — explains why the player was off, using actual subject context
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
      return `${name} mattered less than intuition suggests. ${detail || `Remove it from the timeline and ${field.toLowerCase()} still ends up in a similar place.`}`;
    } else if (actual < 0.50) {
      return `${name}'s impact was real but the world without it doesn't diverge as much as you'd think. ${detail || `The broad trajectory of ${field.toLowerCase()} doesn't shift dramatically.`}`;
    } else {
      return `${name} was important, but the underlying conditions were doing more of the work than it appears. ${detail}`.trim();
    }
  } else {
    // Player underestimated impact (thought less consequential than analysis says)
    if (actual > 0.70) {
      return `${name} carried more weight than you thought. ${detail || `Remove it and the world of ${field.toLowerCase()} looks very different.`}`;
    } else if (actual > 0.50) {
      return `The specific form of ${name} mattered more than the outcome alone suggests. ${detail || `It wasn't just that it happened — how it happened shaped what came after.`}`;
    } else {
      return `Even with similar forces at work, ${name}'s particular version of events carried more weight than expected. ${detail}`.trim();
    }
  }
};

// TENSION HOOK — extracts the debatable framing from reasoning for predict screen
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
