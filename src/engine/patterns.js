// Pattern insights â€” teaches transferable counterfactual reasoning
import { ALL_SUBJECTS } from "../subjects.js";
import { toWeight } from "../helpers.js";
import { getDifficulty } from "./scoring.js";

export const CATEGORY_HEURISTICS = {
  science: {
    over: [
      { at: 4, title: "The Convergence Trap", text: (n, total) => `You've overestimated ${n} of ${total} science entries. When multiple labs race toward the same breakthrough, the specific discoverer matters less than intuition suggests. Ask: was anyone else close?` },
      { at: 10, title: "Simultaneous Discovery", text: (n, total) => `Still overestimating science (${n}/${total}). Calculus, evolution, oxygen, the telephone â€” history is full of near-simultaneous discovery. In competitive fields, "who" matters less than "when."` },
    ],
    under: [
      { at: 4, title: "Vision vs. Discovery", text: (n, total) => `You've underestimated ${n} of ${total} science entries. Some breakthroughs aren't just about getting there first â€” they require conceptual leaps that reshape how entire fields think. The framework can matter more than the finding.` },
    ],
  },
  arts: {
    over: [
      { at: 4, title: "Art Isn't Convergent", text: (n, total) => `You've overestimated ${n} of ${total} arts entries. Unlike science, a different artist wouldn't produce the same work. No one else writes Hamlet. Art is personal â€” the creator's specific vision carries enormous weight.` },
    ],
    under: [
      { at: 4, title: "Movements vs. Artists", text: (n, total) => `You've underestimated ${n} of ${total} arts entries. Artistic movements often have structural causes â€” cultural conditions that produce Impressionism or hip-hop regardless of any single artist. The movement was coming; the specific masterpieces weren't.` },
    ],
  },
  politics: {
    over: [
      { at: 4, title: "Structural Forces Matter", text: (n, total) => `You've overestimated ${n} of ${total} political entries. Political outcomes often reflect deep structural forces â€” economics, demographics, geography â€” that constrain what any leader can do. The office shapes the person as much as the reverse.` },
      { at: 10, title: "The Substitute Leader", text: (n, total) => `Still overestimating politics (${n}/${total}). When a political need is urgent enough, someone fills the role. Revolutions find their leaders; crises produce their commanders. The question is whether *this specific person's* decisions diverged from what a typical leader would have chosen.` },
    ],
    under: [
      { at: 4, title: "Decisions at the Pivot", text: (n, total) => `You've underestimated ${n} of ${total} political entries. Leaders at critical junctures make choices that foreclose other paths. A different person in the same office, facing the same pressures, might have chosen differently â€” and history would have forked.` },
    ],
  },
  military: {
    over: [
      { at: 4, title: "Wars Have Many Generals", text: (n, total) => `You've overestimated ${n} of ${total} military entries. Most armies have deep benches of competent officers. Wars are won by logistics, resources, and institutional strength as much as individual brilliance. Ask: would a merely competent commander have lost?` },
    ],
    under: [
      { at: 4, title: "Tactical Genius Is Real", text: (n, total) => `You've underestimated ${n} of ${total} military entries. Some commanders made decisions so unconventional that no one else would have attempted them. When victory hinged on a specific bold move, the individual mattered enormously.` },
    ],
  },
  social: {
    over: [
      { at: 4, title: "Movements Have Roots", text: (n, total) => `You've overestimated ${n} of ${total} social movement entries. Social movements grow from structural conditions â€” inequality, oppression, demographic change. The pressure existed before the leader. Someone would have channeled it.` },
    ],
    under: [
      { at: 4, title: "The Shape of the Movement", text: (n, total) => `You've underestimated ${n} of ${total} social entries. Movements feel inevitable in retrospect, but specific leaders shaped their character, timing, and strategy in ways that produced very different outcomes. Nonviolence wasn't inevitable. Neither was that specific vision of justice.` },
    ],
  },
  inventions: {
    over: [
      { at: 4, title: "Multiple Inventors", text: (n, total) => `You've overestimated ${n} of ${total} invention entries. Most inventions had near-simultaneous inventors. The telephone, lightbulb, radio, calculus â€” when the prerequisite technologies exist, the next step becomes almost inevitable. Focus on timing, not credit.` },
      { at: 15, title: "Implementation Matters", text: (n, total) => `You keep overestimating inventions (${n}/${total}). Here's the nuance: even when the invention was coming, the *specific implementation* often shaped everything after. VHS vs Betamax. QWERTY keyboards. The form factor gets locked in.` },
    ],
    under: [
      { at: 4, title: "Convergent Technology", text: (n, total) => `You've underestimated ${n} of ${total} invention entries. Technology is highly convergent â€” when the components exist, someone assembles them. The question isn't "would it have been invented?" but "how much later, and in what form?"` },
    ],
  },
  events: {
    over: [
      { at: 4, title: "Contingent Triggers", text: (n, total) => `You've overestimated ${n} of ${total} event entries. The underlying pressures were real, but the specific trigger was often contingent. An assassination, a storm, a chance meeting â€” remove the trigger and the explosion might not happen, or happen very differently.` },
    ],
    under: [
      { at: 4, title: "Pressure Finds Release", text: (n, total) => `You've underestimated ${n} of ${total} event entries. When structural pressures build â€” economic crisis, political repression, technological change â€” *something* happens. The specific event might differ, but the category of outcome was likely.` },
    ],
  },
  institutions: {
    over: [
      { at: 4, title: "Needs Find Expression", text: (n, total) => `You've overestimated ${n} of ${total} institution entries. When a genuine need exists â€” for governance, coordination, knowledge â€” some institution forms to fill it. The specific institution might look different, but the function would be served.` },
      { at: 15, title: "Institutional Inertia", text: (n, total) => `Still overestimating institutions (${n}/${total}). Once formed, institutions develop internal logic, culture, and constituencies. The specific founder's choices get locked in for decades. The need was generic; the institution that resulted was not.` },
    ],
    under: [
      { at: 4, title: "The Founder's Imprint", text: (n, total) => `You've underestimated ${n} of ${total} institution entries. Founders imprint their vision on organizations in ways that persist long after they leave. A different founder facing the same need would have built something meaningfully different.` },
    ],
  },
  computing: {
    over: [
      { at: 4, title: "Computing Is Convergent", text: (n, total) => `You've overestimated ${n} of ${total} computing entries. Computing advances are among the most convergent in history. Multiple teams build similar hardware, write similar software, have similar ideas. Moore's Law doesn't care who's in the chair.` },
    ],
    under: [
      { at: 4, title: "Architecture Gets Locked In", text: (n, total) => `You've underestimated ${n} of ${total} computing entries. The specific architecture â€” x86, Unix, TCP/IP â€” shapes decades of development once adopted. Someone else builds *a* computer, but the one we got sent ripples through every system built on top of it.` },
    ],
  },
  medicine: {
    over: [
      { at: 4, title: "Medical Convergence", text: (n, total) => `You've overestimated ${n} of ${total} medicine entries. Medical breakthroughs often have multiple near-discoverers working with the same tools and knowledge. The cure was coming â€” usually within a decade. The question is how many lives that decade costs.` },
    ],
    under: [
      { at: 4, title: "Unique Clinical Insight", text: (n, total) => `You've underestimated ${n} of ${total} medicine entries. Some medical advances required a specific person's unusual perspective â€” a surgeon willing to try what others wouldn't, a researcher connecting fields no one else bridged.` },
    ],
  },
  philosophy: {
    over: [
      { at: 4, title: "Ideas Have Preconditions", text: (n, total) => `You've overestimated ${n} of ${total} philosophy entries. Philosophical ideas emerge from cultural and intellectual conditions. The questions were being asked; someone would have answered them. But the *articulation* â€” how the idea was expressed â€” shaped how it was received.` },
    ],
    under: [
      { at: 4, title: "Articulation Is Everything", text: (n, total) => `You've underestimated ${n} of ${total} philosophy entries. In philosophy, how an idea is expressed can matter as much as the idea itself. A different thinker might reach similar conclusions but frame them in ways that fail to catch fire.` },
    ],
  },
  finance: {
    over: [
      { at: 4, title: "Financial Innovation Clusters", text: (n, total) => `You've overestimated ${n} of ${total} finance entries. Financial innovations tend to emerge when market conditions demand them. Multiple people were developing similar instruments. The specific form mattered, but the capability was arriving.` },
    ],
    under: [
      { at: 4, title: "Path Dependence in Markets", text: (n, total) => `You've underestimated ${n} of ${total} finance entries. Financial systems are deeply path-dependent. The specific design choices â€” of a currency, a market, an institution â€” get locked in and shape behavior for generations.` },
    ],
  },
  exploration: {
    over: [
      { at: 4, title: "Someone Was Coming", text: (n, total) => `You've overestimated ${n} of ${total} exploration entries. Once the technology and motivation exist, "discovery" is mostly a matter of timing. Others were literally sailing the same oceans. But the *timing* of contact shaped centuries of what followed.` },
    ],
    under: [
      { at: 4, title: "First Contact Shapes Everything", text: (n, total) => `You've underestimated ${n} of ${total} exploration entries. Who arrives first â€” and what they do on arrival â€” shapes the trajectory of entire civilizations. A different explorer with different priorities could have meant radically different colonial outcomes.` },
    ],
  },
};

// Cross-category pattern detectors
export const CROSS_PATTERNS = [
  {
    id: "great_person_bias",
    icon: "ðŸ‘¤",
    title: "Great Person Bias",
    check: (catData) => {
      const cats = Object.values(catData);
      if (cats.reduce((a, c) => a + c.games.length, 0) < 12) return null;
      const overCats = cats.filter(c => c.games.length >= 3 && c.overPct > 0.55);
      if (overCats.length >= 3) return "You consistently overrate individual impact across multiple categories. This is the 'Great Person' bias â€” history tends to be more driven by structural forces, competing actors, and convergent pressures than our narratives suggest.";
      return null;
    },
  },
  {
    id: "structural_determinism",
    icon: "âš™ï¸",
    title: "Structural Determinism",
    check: (catData) => {
      const cats = Object.values(catData);
      if (cats.reduce((a, c) => a + c.games.length, 0) < 12) return null;
      const underCats = cats.filter(c => c.games.length >= 3 && c.underPct > 0.55);
      if (underCats.length >= 3) return "You consistently underrate individual impact across categories. Structural forces are powerful, but history repeatedly shows that specific people and decisions at critical junctures produce outcomes no \"underlying force\" would have generated on its own.";
      return null;
    },
  },
  {
    id: "convergent_vs_divergent",
    icon: "ðŸ”€",
    title: "Convergence Blindspot",
    check: (catData) => {
      const convergent = ["science", "inventions", "computing", "medicine"].filter(c => catData[c] && catData[c].games.length >= 3);
      const divergent = ["arts", "politics", "military", "social"].filter(c => catData[c] && catData[c].games.length >= 3);
      if (convergent.length < 1 || divergent.length < 1) return null;
      const convOver = convergent.filter(c => catData[c].overPct > 0.55).length;
      const divUnder = divergent.filter(c => catData[c].underPct > 0.55).length;
      if (convOver >= 1 && divUnder >= 1) return "You overrate individuals in convergent fields (science, tech) while underrating them in divergent ones (arts, politics). That's backwards â€” science has substitute discoverers; art and political leadership don't. Try flipping your instincts.";
      const convUnder = convergent.filter(c => catData[c].underPct > 0.55).length;
      const divOver = divergent.filter(c => catData[c].overPct > 0.55).length;
      if (convUnder >= 1 && divOver >= 1) return "You've got good instincts about convergent fields â€” you correctly sense that science and tech breakthroughs have substitute discoverers. But you're also calibrated well on the personal nature of art and leadership. That's the right mental model.";
      return null;
    },
  },
];

export const getPatternInsights = (history) => {
  if (history.length < 8) return [];

  // Build per-category data
  const catData = {};
  history.forEach(g => {
    if (!catData[g.cat]) catData[g.cat] = { games: [], overCount: 0, underCount: 0, totalBias: 0 };
    const cd = catData[g.cat];
    cd.games.push(g);
    const bias = g.pred - g.r;
    cd.totalBias += bias;
    if (bias > 5) cd.overCount++;
    if (bias < -5) cd.underCount++;
  });

  // Compute percentages
  Object.values(catData).forEach(cd => {
    cd.overPct = cd.games.length > 0 ? cd.overCount / cd.games.length : 0;
    cd.underPct = cd.games.length > 0 ? cd.underCount / cd.games.length : 0;
    cd.avgBias = cd.games.length > 0 ? cd.totalBias / cd.games.length : 0;
  });

  const insights = [];

  // Category-specific insights â€” threshold: 4+ games, >55% directional bias
  Object.entries(catData).forEach(([cat, data]) => {
    const h = CATEGORY_HEURISTICS[cat];
    if (!h) return;
    const n = data.games.length;
    if (n < 4) return;

    if (data.overPct > 0.55 && h.over) {
      const tier = [...h.over].reverse().find(t => n >= t.at);
      if (tier) insights.push({ icon: "ðŸŽ“", title: tier.title, text: tier.text(data.overCount, n), cat });
    } else if (data.underPct > 0.55 && h.under) {
      const tier = [...h.under].reverse().find(t => n >= t.at);
      if (tier) insights.push({ icon: "ðŸŽ“", title: tier.title, text: tier.text(data.underCount, n), cat });
    }
  });

  // Cross-category patterns
  CROSS_PATTERNS.forEach(p => {
    const result = p.check(catData);
    if (result) insights.push({ icon: p.icon, title: p.title, text: result, cross: true });
  });

  // Fallback: if no category insights fired but we have enough data,
  // surface the player's sharpest contrast between categories
  if (insights.length === 0 && history.length >= 12) {
    const ranked = Object.entries(catData)
      .filter(([, d]) => d.games.length >= 3)
      .map(([cat, d]) => ({
        cat,
        avgErr: d.games.reduce((a, g) => a + g.diff, 0) / d.games.length,
        avgBias: d.avgBias,
        n: d.games.length,
      }))
      .sort((a, b) => a.avgErr - b.avgErr);

    if (ranked.length >= 2) {
      const best = ranked[0];
      const worst = ranked[ranked.length - 1];
      const bestLabel = CATS[best.cat]?.label || best.cat;
      const worstLabel = CATS[worst.cat]?.label || worst.cat;
      if (worst.avgErr - best.avgErr > 5) {
        insights.push({
          icon: "ðŸ”", title: "Category Gap",
          text: `Your ${bestLabel} predictions average ${Math.round(best.avgErr)} points off â€” strong intuition. But ${worstLabel} averages ${Math.round(worst.avgErr)} points off. What's different about how historical weight works in ${worstLabel.toLowerCase()}?`,
          cross: true,
        });
      }
    }
  }

  return insights;
};

export const getRecommendations = (playedIds, history, allSubjects) => {
  if (!history || history.length < 3) return [];
  const recs = [];
  const unplayed = allSubjects.filter(s => !playedIds.includes(s.id));
  if (unplayed.length === 0) return [];

  // Seeded shuffle for stability within a session (changes daily)
  const daySeed = Math.floor(Date.now() / 86400000);
  const seededShuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = ((daySeed * 31 + i * 17) >>> 0) % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // 1. "Because you played X" â€” connected figure from most recent game
  const recentEntry = history[history.length - 1];
  const recentFig = allSubjects.find(s => s.id === recentEntry?.id || s.name === recentEntry?.name);
  if (recentFig) {
    const connected = getConnectedFigures(recentFig, playedIds, 6)
      .filter(f => !playedIds.includes(f.id));
    if (connected.length > 0) {
      const pick = connected[0];
      const label = getConnectionLabel(recentFig, pick);
      recs.push({
        type: "connected",
        label: `Because you played ${recentFig.name}`,
        sublabel: label.toLowerCase(),
        figure: pick,
      });
    }
  }

  // 2. "Weak spot" â€” category with lowest avg score (min 2 games in that cat)
  const catStats = {};
  history.forEach(g => {
    if (!catStats[g.cat]) catStats[g.cat] = { total: 0, count: 0 };
    catStats[g.cat].total += g.pts;
    catStats[g.cat].count++;
  });
  const weakCats = Object.entries(catStats)
    .filter(([, s]) => s.count >= 2)
    .map(([cat, s]) => ({ cat, avg: s.total / s.count, count: s.count }))
    .sort((a, b) => a.avg - b.avg);

  if (weakCats.length > 0) {
    const weakCat = weakCats[0];
    const catUnplayed = seededShuffle(unplayed.filter(s => s.cat === weakCat.cat));
    // Prefer medium difficulty for weak categories
    const medium = catUnplayed.filter(s => getDifficulty(s.r) < 0.25);
    const pick = medium[0] || catUnplayed[0];
    if (pick && (!recs[0] || recs[0].figure.id !== pick.id)) {
      const catLabel = CATS[weakCat.cat]?.label || weakCat.cat;
      recs.push({
        type: "weak",
        label: `Sharpen your weak spot`,
        sublabel: `${catLabel} â€” avg ${Math.round(weakCat.avg)} pts`,
        figure: pick,
      });
    }
  }

  // 3. "Step up" â€” harder difficulty if recent accuracy is good
  const recent10 = history.slice(-10);
  const recentAvg = recent10.reduce((s, g) => s + g.pts, 0) / recent10.length;
  if (recentAvg >= 55) {
    const hardUnplayed = seededShuffle(
      unplayed.filter(s => getDifficulty(s.r) >= 0.25 && !recs.some(r => r.figure.id === s.id))
    );
    const pick = hardUnplayed[0];
    if (pick) {
      recs.push({
        type: "challenge",
        label: "Step up the difficulty",
        sublabel: `You're averaging ${Math.round(recentAvg)} pts lately`,
        figure: pick,
      });
    }
  } else if (recent10.length >= 5 && recentAvg < 40) {
    // Struggling â€” suggest an easier one
    const easyUnplayed = seededShuffle(
      unplayed.filter(s => getDifficulty(s.r) < 0.10 && !recs.some(r => r.figure.id === s.id))
    );
    const pick = easyUnplayed[0];
    if (pick) {
      recs.push({
        type: "comfort",
        label: "Build some momentum",
        sublabel: "Try an easier read to find your rhythm",
        figure: pick,
      });
    }
  }

  return recs;
};

