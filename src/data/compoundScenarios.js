// Compound scenarios — remove multiple figures at once
export const COMPOUND_SCENARIOS = [
  {
    id: "no_modern_physics",
    title: "The Unlit Universe",
    subtitle: "Remove Einstein + Maxwell + Newton",
    emoji: "🌑",
    color: "#1e3a5f",
    figureIds: ["einstein", "maxwell", "newton"],
    compoundEffect: "Without Newton's mechanics, Maxwell's electromagnetism, and Einstein's relativity, the physical sciences are set back by a century or more. The Scientific Revolution still happens — Galileo, Kepler, and Leibniz ensure that — but the grand unification of physics never occurs in the 18th or 19th century. Electricity is discovered empirically in the 1800s but understood theoretically only in the 1900s. Nuclear physics doesn't exist until perhaps the 2000s. The atomic bomb is never built in the 20th century. No satellites, no GPS, no cell phones. The world in 2026 looks like the 1950s technologically.",
    modernWorld: [
      {area: "Technology", detail: "No nuclear power, no satellites, no GPS, no cell phones. Radio exists (discovered empirically) but television is more primitive. Computers exist but are much less powerful — transistor physics relies on quantum mechanics that hasn't been fully developed."},
      {area: "War", detail: "WWII ends differently — no atomic bomb. The invasion of Japan proceeds. The Cold War either doesn't happen or is purely conventional. No nuclear deterrence means major power wars are more likely."},
      {area: "Daily Life", detail: "You drive a car (internal combustion doesn't need relativity). You have electricity (discovered empirically). But you don't have a smartphone, GPS, or the internet. Your doctor can't do an MRI. Your world is roughly 1960s-level."}
    ]
  },
  {
    id: "no_computing",
    title: "The Analog World",
    subtitle: "Remove Turing + Von Neumann + Berners-Lee",
    emoji: "📟",
    color: "#4a1e6e",
    figureIds: ["turing", "neumann", "berners"],
    compoundEffect: "Without Turing's theoretical foundations, Von Neumann's architecture, and Berners-Lee's web, computing develops much more slowly and never achieves its current form. Calculating machines exist — Babbage's ideas eventually get built — but the stored-program concept takes decades longer to emerge. By 2025, computers exist but are mainframe-era: large, expensive, institutional. No personal computers, no internet, no web. Information is stored on paper and microfilm. Communication is telephone and fax.",
    modernWorld: [
      {area: "Work", detail: "Office work is paper-based. Typewriters, filing cabinets, carbon copies. Accounting uses adding machines. Engineering calculations done by teams of human 'computers' — the job title."},
      {area: "Communication", detail: "Telephone, fax, postal mail, and telegram. No email, no texting, no social media. News comes from newspapers, radio, and TV. If you want to know something, you go to a library."},
      {area: "Daily Life", detail: "No smartphones, no GPS, no streaming, no online shopping. You navigate with paper maps. You browse shelves at Blockbuster. You look things up in encyclopedias. Friday nights, you watch whatever's on TV."}
    ]
  },
  {
    id: "no_nonviolence",
    title: "The Harder Path",
    subtitle: "Remove Gandhi + MLK + Mandela",
    emoji: "🔥",
    color: "#8b1a1a",
    figureIds: ["gandhi", "mlk", "mandela"],
    compoundEffect: "Without the three towering figures of nonviolent resistance, the 20th century's liberation movements still happen — the forces driving them were too powerful — but they follow more militant paths. Indian independence involves more armed resistance. American civil rights is more confrontational from the start. South Africa's transition is bloodier. The template of nonviolent resistance that inspired movements worldwide doesn't exist as a proven strategy.",
    modernWorld: [
      {area: "Philosophy", detail: "Nonviolent resistance exists as theory (Thoreau, Tolstoy) but lacks its three greatest proof cases. When oppressed populations organize, they default more quickly to armed resistance. Liberation movements are bloodier worldwide."},
      {area: "Race Relations", detail: "The United States and South Africa achieve similar legal outcomes — civil rights, end of apartheid — but through more confrontational processes. The reconciliation narratives are weaker. Racial tensions in both countries are arguably sharper."},
      {area: "Daily Life", detail: "If you're American, no MLK Day. If you're South African, the transition from apartheid was probably a civil war rather than a negotiated settlement. India's independence story is one of armed struggle, not salt marches."}
    ]
  },
  {
    id: "no_printing_internet",
    title: "The Silent Majority",
    subtitle: "Remove Gutenberg + Internet + Berners-Lee",
    emoji: "🤫",
    color: "#5c4033",
    figureIds: ["printingpress", "internet", "berners"],
    compoundEffect: "Remove both the printing press and the internet and you've eliminated the two great democratizations of information in human history. Knowledge stays in the hands of scribes, priests, and elites for centuries longer. When mechanical printing eventually arrives (someone invents it), it does so without the internet to amplify it. Mass literacy develops, but the second revolution — anyone can publish to everyone — never happens.",
    modernWorld: [
      {area: "Knowledge", detail: "Libraries exist but books are expensive. Literacy is high (mechanical printing eventually arrived) but publishing is gatekept. No blogs, no Wikipedia, no YouTube tutorials. If you want to learn something, you need formal education or access to a library."},
      {area: "Power", detail: "Without mass self-publishing, institutional gatekeepers — governments, media corporations, universities — maintain enormous control over information. Dissent is harder to organize. Propaganda is harder to counter."},
      {area: "Daily Life", detail: "You read books and newspapers. You watch TV. You talk on the phone. But you can't Google something. You can't watch a how-to video. You can't fact-check a politician's claim in real time. Information is scarce, curated, and controlled."}
    ]
  },
  {
    id: "no_conquerors",
    title: "The Unconquered World",
    subtitle: "Remove Genghis Khan + Alexander + Napoleon",
    emoji: "🗺️",
    color: "#2d5016",
    figureIds: ["genghis", "alexander", "napoleon"],
    compoundEffect: "Remove history's three greatest conquerors and the political map of the world is unrecognizable. The Mongol Empire never connects East and West. Alexander never spreads Greek culture across Persia and Egypt. Napoleon never reshapes Europe's legal and political order. Empires still form — the impulse is human — but these specific, personality-driven explosions of conquest don't happen.",
    modernWorld: [
      {area: "Geography", detail: "The Middle East likely remains the world's intellectual center much longer (no Mongol destruction of Baghdad). Europe's political fragmentation persists — no Napoleon to dissolve the Holy Roman Empire. Hellenistic culture never penetrates Central Asia."},
      {area: "Law", detail: "No Napoleonic Code means European civil law develops from a patchwork of local traditions. No Alexander means Greek philosophy doesn't reach Persia and India in the same way — the intellectual cross-pollination is weaker."},
      {area: "Daily Life", detail: "Honestly unpredictable. These three removals change so much that the modern world doesn't exist in any recognizable form. Different nations, different borders, different dominant cultures."}
    ]
  },
  {
    id: "no_ancient_foundations",
    title: "The Unexamined World",
    subtitle: "Remove Aristotle + Plato + Euclid",
    emoji: "🏛️",
    color: "#6b4c2a",
    figureIds: ["aristotle", "plato", "euclid"],
    compoundEffect: "Strip out the three pillars of Western intellectual method and the entire trajectory of European thought changes. Plato's academy — the template for the university — never exists. Aristotle's systematic classification of knowledge (logic, biology, ethics, politics) never provides the scaffolding that medieval scholars build on. Euclid's axiomatic method — the idea that you can derive complex truths from simple premises — never becomes the gold standard for reasoning. Other civilizations develop their own mathematics and philosophy, but the specific Western tradition of deductive proof, formal logic, and systematic inquiry either doesn't emerge or emerges centuries later from different roots.",
    modernWorld: [
      {area: "Education", detail: "Universities don't exist in their current form — the Platonic academy was the prototype. Higher learning develops through apprenticeship, religious instruction, and guild systems instead. The idea of liberal arts as a curriculum has no anchor."},
      {area: "Science", detail: "Without Euclid's axiomatic method, mathematical proof develops differently. Islamic mathematicians likely lead — al-Khwarizmi's algebra fills some of the gap — but the geometric foundations of physics are weaker. Newton's Principia, modeled explicitly on Euclid, never takes that form."},
      {area: "Daily Life", detail: "The scientific revolution still happens (empirical observation is human), but later and from different roots. Maybe Chinese or Islamic traditions dominate. The modern world exists but its intellectual DNA is unrecognizable."}
    ]
  },
  {
    id: "no_nuclear_age",
    title: "The Unsplit Atom",
    subtitle: "Remove Fermi + Bohr + Rutherford",
    emoji: "⚛️",
    color: "#0f4c75",
    figureIds: ["fermi", "bohr", "rutherford"],
    compoundEffect: "Rutherford discovers the atomic nucleus. Bohr builds the first working model of the atom. Fermi builds the first nuclear reactor. Remove all three and the atomic age is delayed by decades. Other physicists — Chadwick, Heisenberg, Oppenheimer — were brilliant but dependent on this chain. Without Rutherford's nucleus, atomic physics stalls in the 1910s. Without Bohr's model, quantum mechanics develops from different starting assumptions and much more slowly. Without Fermi's engineering genius, even if the theory eventually arrives, nobody knows how to build a working reactor.",
    modernWorld: [
      {area: "War", detail: "No atomic bomb in WWII. The Pacific war ends with Operation Downfall — the invasion of Japan — costing an estimated 500,000+ Allied and millions of Japanese casualties. The Cold War is purely conventional. No MAD, no nuclear deterrence."},
      {area: "Energy", detail: "No nuclear power plants. France still burns coal. Climate change is arguably worse (no nuclear baseload) or arguably the same (fossil fuel interests were always going to dominate). The entire nuclear debate — waste, proliferation, meltdowns — never happens."},
      {area: "Daily Life", detail: "You've never heard of Chernobyl, Three Mile Island, or Fukushima. Nuclear anxiety doesn't shape your culture. No Godzilla, no fallout shelters, no atomic clocks. Cancer treatment loses radiation therapy. Medical imaging loses PET scans."}
    ]
  },
  {
    id: "no_abolition",
    title: "The Unbroken Chains",
    subtitle: "Remove Douglass + Tubman + Lincoln + Toussaint",
    emoji: "⛓️",
    color: "#3d1c02",
    figureIds: ["douglass", "tubman", "lincoln", "toussaint"],
    compoundEffect: "Remove the four figures most responsible for ending slavery in the Americas and the institution persists decades longer. Toussaint's Haitian Revolution — the only successful slave revolt in history — never provides its proof-of-concept. Lincoln never issues the Emancipation Proclamation or fights the Civil War on abolition's terms. Douglass never writes the autobiographies that made slavery real to Northern whites. Tubman never builds the Underground Railroad. Abolitionism still grows as a movement (the economics of slavery were already under pressure), but without these catalysts, legal slavery in the United States persists into the 1880s or 1890s, ending through economic obsolescence rather than moral revolution.",
    modernWorld: [
      {area: "Race in America", detail: "The absence of a moral reckoning changes everything. Slavery ends not because it was wrong but because it stopped being profitable — a very different national narrative. No Emancipation Proclamation means no 13th, 14th, 15th Amendments in their current form. Reconstruction never happens. The legal framework for civil rights doesn't exist."},
      {area: "Global", detail: "Without Haiti's revolution, Caribbean slavery persists longer. Brazil, which only abolished slavery in 1888, might hold on until the 1900s. The moral argument against slavery is weaker worldwide without its greatest American voices."},
      {area: "Culture", detail: "American identity is fundamentally different. The Civil War — if it happens — is fought over economics, not freedom. Lincoln isn't martyred. There's no Gettysburg Address. The American mythology of equality as aspiration barely exists."}
    ]
  },
  {
    id: "no_silicon_valley",
    title: "The Analog Economy",
    subtitle: "Remove Jobs + Page & Brin + Zuckerberg",
    emoji: "📼",
    color: "#7c2d12",
    figureIds: ["jobs", "page_brin", "zuckerberg"],
    compoundEffect: "Personal computers still exist (IBM, Microsoft, Dell). The internet still exists (Berners-Lee, Cerf/Kahn). But the three products that brought computing into daily life for non-technical people — the iPhone, Google Search, and Facebook — never take their specific forms. Other companies fill the gaps (Nokia stays dominant in phones, Yahoo in search, MySpace in social), but the specific vision and execution of these three shaped how billions interact with technology. The smartphone revolution happens later and looks different. Search is less dominant. Social media is more fragmented.",
    modernWorld: [
      {area: "Your Phone", detail: "You're probably carrying a Nokia or BlackBerry descendant. Touchscreens exist but the app ecosystem is fragmented. No App Store means software distribution stays messy. Your phone is a communication device, not a pocket computer."},
      {area: "Information", detail: "Without Google's PageRank, search quality is worse. You probably use several specialized search engines. Finding information online is slower and less reliable. Yahoo-style curated directories persist longer. Wikipedia is harder to find."},
      {area: "Social Life", detail: "Social media exists but it's smaller, more fragmented, and less addictive. No News Feed algorithm means no viral misinformation machine. Political polarization is lower. But so is the ability of grassroots movements to organize instantly."}
    ]
  },
  {
    id: "no_germ_theory",
    title: "The Invisible Enemy Wins",
    subtitle: "Remove Pasteur + Lister + Fleming",
    emoji: "🦠",
    color: "#065f46",
    figureIds: ["pasteur", "lister", "fleming"],
    compoundEffect: "Pasteur proves germs cause disease. Lister invents antiseptic surgery. Fleming discovers penicillin. Remove all three and modern medicine loses its three foundational breakthroughs. Other scientists were working on similar problems (Koch also studied germs, Ehrlich pioneered chemotherapy), so germ theory still arrives — but 20-30 years later. Antiseptic surgery takes longer to develop without Lister's advocacy. Antibiotics arrive in the 1950s instead of the 1940s. The net effect: roughly 100 million additional deaths from infection between 1870 and 1960.",
    modernWorld: [
      {area: "Surgery", detail: "Without Lister's antiseptic revolution in the 1860s, surgical mortality stays above 40% until Koch's work gains traction in the 1890s. Millions of operations that would have succeeded kill the patient instead. Surgery remains a last resort well into the 20th century."},
      {area: "World Wars", detail: "Both World Wars see far higher casualty rates from wound infection. Penicillin's absence in WWII is devastating — in our timeline it saved an estimated 12-15% of wounded soldiers who would have died from infection."},
      {area: "Daily Life", detail: "Childbirth remains the leading killer of women until the 1920s (puerperal fever was a germ theory triumph). You have fewer grandparents. Your great-grandparents had more dead siblings. A scratch that gets infected can still kill you until the 1950s."}
    ]
  },
  {
    id: "no_democratic_revolutions",
    title: "The King's World",
    subtitle: "Remove American Revolution + French Revolution + Magna Carta",
    emoji: "👑",
    color: "#7e22ce",
    figureIds: ["american_revolution", "french_revolution", "magna_carta"],
    compoundEffect: "Magna Carta establishes that even kings answer to law. The American Revolution proves you can build a republic from scratch. The French Revolution demonstrates that the people can overthrow monarchy entirely. Remove all three and the trajectory of democratic governance changes. Democracy as an idea still exists (it's ancient Greek), but its modern form — constitutional government, individual rights, representative legislatures — lacks its three defining proof cases. Monarchies and empires persist much longer. Self-governance arrives eventually (industrialization and literacy create pressure), but the timeline shifts by a century.",
    modernWorld: [
      {area: "Government", detail: "Most of Europe is still governed by constitutional monarchies with real power, not the ceremonial kind. The American continent is likely still a collection of European colonies or recently independent states with authoritarian governments. Democracy exists in pockets, not as the global default."},
      {area: "Rights", detail: "The Bill of Rights doesn't exist. The Declaration of the Rights of Man doesn't exist. The UN Universal Declaration of Human Rights has no precedent to draw on. Individual rights are granted by sovereigns, not assumed as natural."},
      {area: "Daily Life", detail: "You might live in a monarchy. Your relationship to government is more like a subject than a citizen. Freedom of speech, religion, and assembly are privileges, not rights. Voting — if it exists — is limited to landed elites."}
    ]
  },
  {
    id: "no_art_titans",
    title: "The Silent Canvas",
    subtitle: "Remove Shakespeare + Beethoven + Da Vinci",
    emoji: "🎭",
    color: "#9f1239",
    figureIds: ["shakespeare", "beethoven", "davinci"],
    compoundEffect: "Leonardo defines the Renaissance ideal: art and science as one endeavor. Shakespeare invents the modern interior life in fiction — his characters think, doubt, contradict themselves. Beethoven breaks music free from aristocratic patronage and invents the idea of the artist as heroic individual. Remove all three and Western culture still produces great art, but the specific idea of the lone creative genius — the figure who transforms an entire medium through sheer force of vision — doesn't crystallize until much later. Art remains more institutional, more collaborative, more craftsman-like.",
    modernWorld: [
      {area: "Language", detail: "Shakespeare coined over 1,700 English words and phrases. No 'lonely,' no 'eyeball,' no 'bedroom,' no 'break the ice,' no 'wild goose chase.' The English language is measurably smaller. The modern psychological novel develops later — who shows characters' inner lives without Hamlet as the template?"},
      {area: "Music", detail: "Without Beethoven, Romantic music develops differently. The symphony doesn't become the dominant orchestral form. Music stays lighter, more courtly. The idea of the suffering artist isn't established. Rock and roll, which draws a direct line from Romantic self-expression, sounds different."},
      {area: "Culture", detail: "The Renaissance still happens, but without Leonardo it peaks differently. Anatomy studies advance more slowly. The Vitruvian Man doesn't become shorthand for human potential. The idea that one person can master art, science, and engineering simultaneously — the 'Renaissance Man' — barely exists."}
    ]
  },
  {
    id: "no_climate_awareness",
    title: "The Blind Garden",
    subtitle: "Remove Carson + Goodall + Humboldt",
    emoji: "🌿",
    color: "#15803d",
    figureIds: ["carson", "goodall", "humboldt"],
    compoundEffect: "Humboldt invented the idea that nature is an interconnected system — before him, people studied individual species and rocks, not ecosystems. Carson proved that industrial chemicals could poison entire food chains, launching the modern environmental movement. Goodall demonstrated that animals have emotional and social lives, changing humanity's relationship with other species. Without all three, environmentalism still exists (pollution is visible), but the intellectual framework — that everything is connected, that human industry has systemic effects, that animals deserve moral consideration — develops later and from different roots.",
    modernWorld: [
      {area: "Policy", detail: "The EPA isn't founded in 1970 (Carson's Silent Spring was the direct catalyst). DDT continues killing birds into the 1980s. Environmental regulation develops 20-30 years later, driven by visible disasters rather than systemic understanding. The ozone hole might get fixed, but slowly."},
      {area: "Climate Change", detail: "Without the Humboldtian tradition of seeing Earth as an interconnected system, climate science develops more slowly. The concept of 'ecosystem' doesn't exist in its current form. When scientists eventually raise the alarm about CO₂, they lack the vocabulary and framework to explain why it matters."},
      {area: "Daily Life", detail: "Recycling programs start later. Organic food isn't a movement. National parks may exist (Muir was a separate tradition) but the idea of biodiversity as something worth protecting for its own sake barely registers. Your kids don't learn about food webs in school."}
    ]
  },
  {
    id: "no_navigation",
    title: "The Uncharted World",
    subtitle: "Remove Columbus + Magellan + Compass + Zheng He",
    emoji: "🧭",
    color: "#1e40af",
    figureIds: ["columbus", "magellan", "compass", "zhenghe"],
    compoundEffect: "Remove the compass, its two greatest European users, and its greatest Eastern one, and the Age of Exploration collapses. Open-ocean navigation is nearly impossible without reliable direction-finding. Vikings reached North America by island-hopping, and coastal navigation continues, but the great transoceanic voyages don't happen in the 15th-16th centuries. The Americas remain unknown to Europe for decades or centuries longer. China doesn't project naval power into the Indian Ocean. The globalization of trade, disease, culture, and empire that shaped the modern world is delayed — perhaps by a century, perhaps more.",
    modernWorld: [
      {area: "Americas", detail: "Indigenous civilizations persist much longer without European contact. The Aztec and Inca empires survive into the 1600s or beyond. When contact eventually comes (coastal exploration slowly extends), the power dynamics may be less one-sided — European diseases are still devastating, but the Americas have more time to develop."},
      {area: "Trade", detail: "The Silk Road remains the primary East-West trade route well into the 1600s. Overland trade empires — Ottoman, Persian, Mongol successor states — remain far more powerful. Maritime powers like Portugal and Spain never rise. Capitalism develops differently without colonial extraction."},
      {area: "Daily Life", detail: "The Columbian Exchange (tomatoes, potatoes, corn, chocolate going to Europe; wheat, horses, smallpox going to the Americas) is delayed by a century. Italian food has no tomatoes until the 1700s. Irish cuisine never centers on the potato. The global diet is profoundly different."}
    ]
  },
  {
    id: "no_economic_architects",
    title: "The Invisible Hand, Missing",
    subtitle: "Remove Adam Smith + Marx + Keynes",
    emoji: "📊",
    color: "#92400e",
    figureIds: ["adamsmith", "marx", "keynes"],
    compoundEffect: "Smith provides the intellectual framework for capitalism. Marx provides the most powerful critique of it. Keynes saves it from itself during the Great Depression. Remove all three and economic thought still develops — Ricardo handles trade theory, Hayek and Schumpeter contribute — but the great ideological battle of the 20th century never takes its specific form. Without Marx, there's no Marxism, which means no Bolshevik Revolution in its ideological form. Without Keynes, the response to the Great Depression is purely classical (let markets self-correct), likely extending the depression into the 1940s.",
    modernWorld: [
      {area: "Cold War", detail: "Without Marx, revolutionary communism doesn't have its intellectual foundation. Lenin still leads a revolution (the conditions existed), but it's a populist uprising without Marxist theory. The resulting system looks different — perhaps more like agrarian authoritarianism. The Cold War's ideological dimension barely exists."},
      {area: "Economics", detail: "Without Keynes, governments don't learn to use fiscal stimulus during recessions. The Great Depression lasts longer. WWII spending ends it anyway, but the lesson isn't learned. Every subsequent recession is deeper and longer. Social safety nets develop more slowly."},
      {area: "Daily Life", detail: "Without Smith's Wealth of Nations, free-market capitalism still develops (it was already happening), but governments intervene more in trade — mercantilism persists longer. Without Keynes, your government doesn't send stimulus checks during recessions. Without Marx, your college doesn't have a sociology department in its current form."}
    ]
  }
];
