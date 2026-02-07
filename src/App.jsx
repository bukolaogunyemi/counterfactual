import { useState, useEffect, useRef } from "react";

// ─── CATEGORIES ───
const CATS = {
  science:{label:"Science & Tech",color:"#2563eb",bg:"rgba(37,99,235,0.08)",light:"#dbeafe"},
  politics:{label:"Politics",color:"#dc2626",bg:"rgba(220,38,38,0.06)",light:"#fee2e2"},
  military:{label:"Military",color:"#475569",bg:"rgba(71,85,105,0.08)",light:"#e2e8f0"},
  arts:{label:"Arts & Culture",color:"#9333ea",bg:"rgba(147,51,234,0.06)",light:"#f3e8ff"},
  philosophy:{label:"Philosophy & Religion",color:"#0d9488",bg:"rgba(13,148,136,0.06)",light:"#ccfbf1"},
  medicine:{label:"Medicine",color:"#16a34a",bg:"rgba(22,163,74,0.06)",light:"#dcfce7"},
  computing:{label:"Math & Computing",color:"#7c3aed",bg:"rgba(124,58,237,0.06)",light:"#ede9fe"},
  finance:{label:"Finance & Economics",color:"#ca8a04",bg:"rgba(202,138,4,0.06)",light:"#fef9c3"},
  exploration:{label:"Exploration",color:"#ea580c",bg:"rgba(234,88,12,0.06)",light:"#ffedd5"},
  social:{label:"Social Movements",color:"#db2777",bg:"rgba(219,39,119,0.06)",light:"#fce7f3"},
  institutions:{label:"Institutions",color:"#0891b2",bg:"rgba(8,145,178,0.06)",light:"#cffafe"},
};

// ─── FIGURES DATABASE ───
const FIGURES = [
  // ── Science & Technology (12) ──
  {id:"tesla",name:"Nikola Tesla",born:1856,died:1943,cat:"science",field:"Electrical Engineering",
    quote:"The present is theirs; the future, for which I really worked, is mine.",
    contributions:["AC power system","Induction motor","Radio technology foundations","Wireless energy concepts"],r:0.60,
    reasoning:"Westinghouse and others were developing AC systems. Tesla accelerated adoption by 5-10 years, but the technology was coming regardless. His more speculative ideas (wireless power) remained unrealized.",
    impact:{lives:"Enabled electrification reaching 8B people",econ:"$5T+ global electrical industry",cultural:"'Mad scientist' archetype in popular culture",reach:"Every electrified nation",timeline:"Accelerated electrical adoption by 5-10 years"}},
  {id:"einstein",name:"Albert Einstein",born:1879,died:1955,cat:"science",field:"Theoretical Physics",
    quote:"Imagination is more important than knowledge.",
    contributions:["Special & General Relativity","Photoelectric effect","E=mc²","Brownian motion proof"],r:0.30,
    reasoning:"Special relativity was in the air — Lorentz and Poincaré were close. But General Relativity was a singular leap. No one else was approaching gravity as curved spacetime. Without Einstein, it might have taken 20-50 years for someone to make that conceptual jump.",
    impact:{lives:"Nuclear energy/weapons: millions affected",econ:"GPS, semiconductors: $500B+ industries",cultural:"Redefined genius in public imagination",reach:"Global scientific framework",timeline:"General relativity delayed 15-30 years without him"}},
  {id:"newton",name:"Isaac Newton",born:1643,died:1727,cat:"science",field:"Physics & Mathematics",
    quote:"If I have seen further, it is by standing on the shoulders of giants.",
    contributions:["Laws of motion & gravitation","Calculus","Optics","Principia Mathematica"],r:0.25,
    reasoning:"Leibniz independently developed calculus, but Newton's laws of motion and universal gravitation were a unique synthesis. Hooke had pieces, but no one else was close to the full picture. The Principia was decades ahead of its time.",
    impact:{lives:"Foundation for all modern engineering",econ:"Enabled Industrial Revolution",cultural:"Defined scientific method for 300 years",reach:"Universal",timeline:"Physics delayed 20-50 years"}},
  {id:"curie",name:"Marie Curie",born:1867,died:1934,cat:"science",field:"Physics & Chemistry",
    quote:"Nothing in life is to be feared, it is only to be understood.",
    contributions:["Discovery of radium & polonium","Radioactivity research","First woman Nobel laureate","Mobile X-ray units"],r:0.50,
    reasoning:"Becquerel had discovered radioactivity. Multiple labs were investigating. Curie's systematic isolation of radium was exceptional work, but the field was active. Her social impact — proving women could do frontier science — was less replaceable than her discoveries.",
    impact:{lives:"Cancer treatment, X-rays: millions saved",econ:"Nuclear medicine: $45B industry",cultural:"Opened science to women globally",reach:"Medical systems worldwide",timeline:"Radioactivity research delayed 3-5 years"}},
  {id:"galileo",name:"Galileo Galilei",born:1564,died:1642,cat:"science",field:"Astronomy & Physics",
    quote:"And yet it moves.",
    contributions:["Telescopic observations","Heliocentrism support","Laws of falling bodies","Scientific method"],r:0.55,
    reasoning:"Others were building telescopes and would have seen Jupiter's moons. Kepler was already a Copernican. Galileo's unique contribution was his confrontational style and popular writing — he made heliocentrism a public controversy rather than an academic debate.",
    impact:{lives:"Foundation of modern astronomy",econ:"Space industry origins",cultural:"Church-science conflict archetype",reach:"Western scientific tradition",timeline:"Heliocentrism acceptance delayed 10-20 years"}},
  {id:"darwin",name:"Charles Darwin",born:1809,died:1882,cat:"science",field:"Natural History",
    quote:"It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
    contributions:["Evolution by natural selection","Origin of Species","Biogeography","Sexual selection theory"],r:0.75,
    reasoning:"Alfred Russel Wallace independently conceived natural selection and forced Darwin to publish. The idea was ripe — both men drew on Malthus, biogeography, and breeding knowledge. Without Darwin, we'd call it 'Wallaceism' and it would have arrived within 2-5 years.",
    impact:{lives:"Modern medicine, genetics foundation",econ:"Biotech industry: $600B+",cultural:"Transformed human self-understanding",reach:"Global biology",timeline:"Wallace independently close; 2-5 year delay"}},
  {id:"edison",name:"Thomas Edison",born:1847,died:1931,cat:"science",field:"Invention & Industry",
    quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
    contributions:["Practical light bulb","Phonograph","Motion pictures","Research lab model"],r:0.70,
    reasoning:"Swan was developing light bulbs simultaneously in England. The phonograph had multiple near-inventors. Edison's real innovation was the industrial research lab — systematic invention — but even that model was emerging elsewhere. He was fast, not unique.",
    impact:{lives:"Entertainment reaching billions",econ:"$100B+ industries created",cultural:"Inventor-entrepreneur archetype",reach:"Global media/lighting",timeline:"Others racing; 2-5 year delay on most"}},
  {id:"ibnhaytham",name:"Ibn al-Haytham",born:965,died:1040,cat:"science",field:"Optics & Scientific Method",
    quote:"The duty of the man who investigates the writings of scientists is to make himself an enemy of all that he reads.",
    contributions:["Book of Optics","Scientific method foundations","Camera obscura","Vision theory"],r:0.25,
    reasoning:"His insistence on experimental verification over ancient authority was centuries ahead. No one in the Islamic or European world was doing science this way. The Book of Optics shaped Bacon, Kepler, and the entire Western scientific tradition when translated.",
    impact:{lives:"Foundation of experimental science",econ:"Optics industry origins",cultural:"Islamic Golden Age pinnacle",reach:"European Renaissance via translations",timeline:"Scientific method delayed centuries"}},
  {id:"ramanujan",name:"Srinivasa Ramanujan",born:1887,died:1920,cat:"science",field:"Mathematics",
    quote:"An equation means nothing to me unless it expresses a thought of God.",
    contributions:["Infinite series","Ramanujan conjecture","Partition functions","Mock theta functions"],r:0.15,
    reasoning:"His results came from nowhere — no formal training, no school, no collaborators until Hardy. Many of his theorems have still never been independently re-derived. He seemed to pull mathematics from a place no one else could access.",
    impact:{lives:"Cryptography, computing foundations",econ:"Modern computing theory",cultural:"Self-taught genius archetype",reach:"Pure mathematics globally",timeline:"Some theorems still not re-derived"}},
  {id:"mendeleev",name:"Dmitri Mendeleev",born:1834,died:1907,cat:"science",field:"Chemistry",
    quote:"I saw in a dream a table where all elements fell into place as required.",
    contributions:["Periodic table","Predicted undiscovered elements","Periodicity law","Chemical systematization"],r:0.70,
    reasoning:"Lothar Meyer developed a nearly identical table independently at the same time. Newlands had proposed the law of octaves earlier. The periodic table was an idea whose time had come — atomic weights were known, patterns were visible, someone was going to organize them.",
    impact:{lives:"All modern chemistry applications",econ:"Chemical industry: $5T+",cultural:"Ordering nature's building blocks",reach:"Universal chemistry education",timeline:"Others converging; 5-10 year delay"}},
  {id:"maxwell",name:"James Clerk Maxwell",born:1831,died:1879,cat:"science",field:"Physics",
    quote:"The special theory of relativity owes its origins to Maxwell's equations of the electromagnetic field.",
    contributions:["Maxwell's equations","Electromagnetic light theory","Statistical mechanics","Color photography"],r:0.30,
    reasoning:"Faraday had the intuitions, but Maxwell's mathematical synthesis — showing light was electromagnetic — was a unique creative leap. No one else was close to unifying electricity, magnetism, and optics. It took Hertz eight more years just to verify the equations experimentally.",
    impact:{lives:"Radio, TV, phones: billions connected",econ:"Telecommunications: $2T+ industry",cultural:"Unified electricity and magnetism",reach:"All wireless technology",timeline:"Electromagnetism understanding delayed 10-20 years"}},
  {id:"copernicus",name:"Nicolaus Copernicus",born:1473,died:1543,cat:"science",field:"Astronomy",
    quote:"To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge.",
    contributions:["Heliocentric model","De revolutionibus","Challenged geocentrism","Quantity theory of money"],r:0.50,
    reasoning:"Ancient Greeks had proposed heliocentrism. The problems with Ptolemy's system were widely known. Copernicus's model wasn't even more accurate — it still needed epicycles. His real contribution was making heliocentrism respectable again. Someone would have, eventually.",
    impact:{lives:"Changed humanity's cosmic self-image",econ:"Navigation improvements",cultural:"Scientific Revolution catalyst",reach:"Global astronomy",timeline:"Others approaching; 20-40 year delay"}},

  // ── Politics & Governance (12) ──
  {id:"cleopatra",name:"Cleopatra VII",born:-69,died:-30,cat:"politics",field:"Pharaoh & Diplomat",
    quote:"I will not be triumphed over.",
    contributions:["Last Ptolemaic ruler","Caesar/Antony alliances","Preserved Egypt 20 years","Shaped Roman Republic fall"],r:0.35,
    reasoning:"Her personal relationships with Caesar and Antony weren't replicable by another ruler. A different Egyptian monarch would have been annexed immediately. She bought Egypt two more decades of independence through force of personality alone.",
    impact:{lives:"Delayed Roman annexation affecting millions",econ:"Controlled Egypt's grain wealth",cultural:"Enduring symbol of female power",reach:"Mediterranean world",timeline:"Rome absorbs Egypt 20 years earlier"}},
  {id:"lincoln",name:"Abraham Lincoln",born:1809,died:1865,cat:"politics",field:"US Presidency",
    quote:"Those who deny freedom to others deserve it not for themselves.",
    contributions:["Preserved the Union","Emancipation Proclamation","Gettysburg Address","Reconstruction vision"],r:0.35,
    reasoning:"Other Republicans would have opposed slavery's expansion, but Lincoln's specific combination — moderate enough to win, principled enough to persist, rhetorical genius to reframe the war as moral crusade — was rare. McClellan or Seward as president likely means a different outcome.",
    impact:{lives:"4 million enslaved people freed",econ:"United US economy: now $25T GDP",cultural:"American unity mythology",reach:"United States",timeline:"Union survival uncertain without him"}},
  {id:"napoleon",name:"Napoleon Bonaparte",born:1769,died:1821,cat:"politics",field:"Military & Governance",
    quote:"Impossible is a word to be found only in the dictionary of fools.",
    contributions:["Napoleonic Code","Reshaped Europe","Spread revolutionary ideals","Meritocratic reforms"],r:0.20,
    reasoning:"The Revolution created opportunities for ambitious generals, but Napoleon's specific combination of military genius, administrative talent, and boundless ambition was unique. Other generals rose and fell. Only Napoleon could have conquered Europe and reshaped its legal systems.",
    impact:{lives:"Napoleonic Wars: 3-6 million deaths",econ:"Modern legal/administrative systems",cultural:"Shaped modern nationalism",reach:"Europe, colonies, legal systems globally",timeline:"European order completely different"}},
  {id:"mao",name:"Mao Zedong",born:1893,died:1976,cat:"politics",field:"Revolutionary Leadership",
    quote:"Political power grows out of the barrel of a gun.",
    contributions:["Founded PRC","Land reform","Cultural Revolution","Guerrilla warfare doctrine"],r:0.30,
    reasoning:"Chinese communism would have existed without Mao, but its specific character — peasant-based guerrilla warfare, cult of personality, Cultural Revolution — was Mao's. Zhou Enlai or other leaders would have built a different China, likely less catastrophic and less transformative.",
    impact:{lives:"Great Leap Forward: 15-55M deaths; lifted millions from poverty",econ:"China now $18T GDP",cultural:"Defined Chinese 20th century",reach:"1.4 billion Chinese",timeline:"China's path radically different"}},
  {id:"mandela",name:"Nelson Mandela",born:1918,died:2013,cat:"politics",field:"Anti-Apartheid Leadership",
    quote:"It always seems impossible until it's done.",
    contributions:["27-year imprisonment","Peaceful transition","Truth & Reconciliation","First Black president"],r:0.25,
    reasoning:"The ANC had other leaders, but Mandela's 27-year imprisonment gave him unique moral authority. His personal choice to pursue reconciliation over revenge wasn't inevitable — it was a decision. Another leader might have won, but the transition could have been Zimbabwe, not South Africa.",
    impact:{lives:"Prevented potential civil war",econ:"South Africa's peaceful transition",cultural:"Reconciliation over revenge model",reach:"South Africa, global inspiration",timeline:"Violent transition likely without him"}},
  {id:"akbar",name:"Akbar the Great",born:1542,died:1605,cat:"politics",field:"Mughal Empire",
    quote:"A monarch should be ever intent on conquest, otherwise his neighbours rise in arms against him.",
    contributions:["Religious tolerance","Administrative reforms","Din-i-Ilahi","Cultural golden age"],r:0.20,
    reasoning:"His policy of religious tolerance was a personal philosophy, not a Mughal tradition. His successors abandoned it. Akbar's specific combination of military conquest, administrative genius, and interfaith curiosity created the Mughal golden age. No other emperor matched it.",
    impact:{lives:"Ruled 100M+ people peacefully",econ:"Mughal India: 25% of world GDP",cultural:"Hindu-Muslim synthesis",reach:"Indian subcontinent",timeline:"Mughal decline accelerated"}},
  {id:"bolivar",name:"Simón Bolívar",born:1783,died:1830,cat:"politics",field:"Revolutionary Leadership",
    quote:"The art of victory is learned in defeat.",
    contributions:["Liberated six nations","Gran Colombia","Pan-American vision","Republican governance"],r:0.40,
    reasoning:"Independence movements were erupting across Latin America — San Martín in the south, Hidalgo in Mexico. Bolívar's specific achievement was unifying the northern campaigns and briefly creating Gran Colombia. Independence was coming; the specific map was his.",
    impact:{lives:"Freed millions from Spanish rule",econ:"Independent Latin American economies",cultural:"Libertador mythology",reach:"Venezuela, Colombia, Ecuador, Peru, Bolivia, Panama",timeline:"Independence delayed 10-20 years"}},
  {id:"augustus",name:"Augustus Caesar",born:-63,died:14,cat:"politics",field:"Roman Empire",
    quote:"I found Rome a city of bricks and left it a city of marble.",
    contributions:["Founded Roman Empire","Pax Romana","Administrative transformation","Cultural golden age"],r:0.25,
    reasoning:"The Republic was dying — someone would have become first emperor. But Augustus's specific genius was making it last. He created institutions that endured centuries. Antony would have been a different, likely shorter-lived, empire.",
    impact:{lives:"200 years of relative peace for 60M+",econ:"Roman economic integration",cultural:"Western civilization foundation",reach:"Mediterranean world",timeline:"Roman instability continues"}},
  {id:"qinshi",name:"Qin Shi Huang",born:-259,died:-210,cat:"politics",field:"Chinese Unification",
    quote:"I have collected all the writings of the Empire and burnt those which were of no use.",
    contributions:["First unified China","Standardized measures/writing","Great Wall start","Legalist system"],r:0.20,
    reasoning:"China had been trending toward consolidation, but Qin's brutal efficiency — standardizing writing, weights, axle widths — created a template that shaped all subsequent Chinese history. A different unifier might have allowed more regional variation.",
    impact:{lives:"Unified 40M+ under one rule",econ:"Standardized Chinese economy",cultural:"Created Chinese imperial model",reach:"All subsequent Chinese history",timeline:"China remains fragmented longer"}},
  {id:"nkrumah",name:"Kwame Nkrumah",born:1909,died:1972,cat:"politics",field:"Pan-Africanism",
    quote:"We face neither East nor West; we face forward.",
    contributions:["Ghana independence","Pan-African leadership","OAU founder","Neo-colonialism critique"],r:0.40,
    reasoning:"Decolonization was happening across Africa regardless. But Nkrumah's early success in Ghana (1957) set the template and accelerated the timeline. His Pan-African vision was more personal — the OAU might have been weaker or later without his push.",
    impact:{lives:"Inspired independence for 50+ nations",econ:"African self-governance",cultural:"Pan-African consciousness",reach:"Sub-Saharan Africa",timeline:"African independence delayed 5-10 years"}},
  {id:"fdr",name:"Franklin D. Roosevelt",born:1882,died:1945,cat:"politics",field:"US Presidency",
    quote:"The only thing we have to fear is fear itself.",
    contributions:["New Deal","Led US through WWII","UN founding vision","Four-term presidency"],r:0.35,
    reasoning:"Another Democrat might have tried stimulus programs, but FDR's specific personality — the fireside chats, the coalition-building, the willingness to experiment — shaped the New Deal's form. His wartime leadership was less unique; the US was going to fight.",
    impact:{lives:"WWII leadership: millions affected",econ:"Modern American welfare state",cultural:"Redefined presidential power",reach:"United States, global order",timeline:"US WWII entry/strategy different"}},
  {id:"bismarck",name:"Otto von Bismarck",born:1815,died:1898,cat:"politics",field:"German Statesmanship",
    quote:"Politics is the art of the possible.",
    contributions:["Unified Germany","Realpolitik","Welfare state pioneer","European balance of power"],r:0.20,
    reasoning:"German unification was in the air, but Bismarck's specific method — three quick wars, Prussian dominance, excluding Austria — wasn't inevitable. A different path might have meant a more federal Germany, or unification under Austria, or continued fragmentation.",
    impact:{lives:"Created nation of 40M+",econ:"German industrial power",cultural:"Modern diplomacy model",reach:"Germany, European order",timeline:"Germany remains fragmented"}},

  // ── Military & Conquest (8) ──
  {id:"genghis",name:"Genghis Khan",born:1162,died:1227,cat:"military",field:"Empire Building",
    quote:"I am the punishment of God. If you had not committed great sins, God would not have sent a punishment like me upon you.",
    contributions:["Largest contiguous empire","Silk Road revival","Religious tolerance","Diplomatic immunity"],r:0.15,
    reasoning:"The Mongol tribes had been raiding for centuries without uniting. Temüjin's personal history — betrayed, enslaved, rebuilding from nothing — forged a leader who could transcend tribal loyalty. No one else was building that coalition. No one else had his vision of world conquest.",
    impact:{lives:"Conquests: 40M deaths; connected Eurasia",econ:"Trade routes: pre-globalization",cultural:"Pax Mongolica enabled exchange",reach:"Asia, Eastern Europe, Middle East",timeline:"Mongol unification doesn't happen"}},
  {id:"alexander",name:"Alexander the Great",born:-356,died:-323,cat:"military",field:"Military Conquest",
    quote:"There is nothing impossible to him who will try.",
    contributions:["Conquered Greece to India","Hellenistic spread","Founded 20+ cities","Fused cultures"],r:0.15,
    reasoning:"Philip II built the army, but Alexander's relentless drive to the ends of the earth was purely personal. He didn't need to cross the Hindu Kush. He didn't need to push to India. No other Macedonian king would have. The Hellenistic world was his singular creation.",
    impact:{lives:"Hellenistic culture for 300 years",econ:"East-West trade routes",cultural:"Greek language/culture spread",reach:"Mediterranean to Central Asia",timeline:"Hellenistic age doesn't happen"}},
  {id:"suntzu",name:"Sun Tzu",born:-544,died:-496,cat:"military",field:"Military Strategy",
    quote:"The supreme art of war is to subdue the enemy without fighting.",
    contributions:["The Art of War","Strategic philosophy","Psychological warfare","Intelligence doctrine"],r:0.45,
    reasoning:"Military strategy was being theorized across ancient civilizations. The Art of War crystallized ideas that were emerging from warfare practice. Its influence is vast, but similar strategic thinking appeared in India, Greece, and Rome independently.",
    impact:{lives:"Influenced all subsequent warfare",econ:"Business strategy applications",cultural:"Strategy as intellectual discipline",reach:"Global military/business",timeline:"Strategic thought develops differently"}},
  {id:"hannibal",name:"Hannibal Barca",born:-247,died:-183,cat:"military",field:"Military Tactics",
    quote:"We will either find a way, or make one.",
    contributions:["Crossed Alps with elephants","Battle of Cannae","Second Punic War","Envelopment tactics"],r:0.20,
    reasoning:"Carthage had other generals, but none with Hannibal's audacity or tactical genius. Crossing the Alps was considered impossible. Cannae's double envelopment was unprecedented. Without him, Carthage likely loses the Second Punic War faster, and Rome's rise accelerates.",
    impact:{lives:"Challenged Roman supremacy",econ:"Carthaginian trade competition",cultural:"Tactical genius archetype",reach:"Mediterranean world",timeline:"Rome's rise accelerated"}},
  {id:"saladin",name:"Saladin",born:1137,died:1193,cat:"military",field:"Ayyubid Sultanate",
    quote:"I warn you against shedding blood, indulging in it and making a habit of it, for blood never sleeps.",
    contributions:["Recaptured Jerusalem","United Muslims","Chivalric warfare","Ayyubid dynasty"],r:0.35,
    reasoning:"Muslim leaders had been trying to retake Jerusalem for decades. Saladin's achievement was uniting Egypt and Syria first. His chivalric reputation — releasing prisoners, respecting enemies — was personal, not inevitable. A different conqueror might have been bloodier.",
    impact:{lives:"Crusader-Muslim balance",econ:"Middle Eastern trade control",cultural:"Chivalry across cultures",reach:"Middle East, Crusader states",timeline:"Jerusalem remains Crusader longer"}},
  {id:"shaka",name:"Shaka Zulu",born:1787,died:1828,cat:"military",field:"Military Innovation",
    quote:"Never leave an enemy behind, or it will rise again to fly at your throat.",
    contributions:["Zulu revolution","Iklwa tactics","Impi system","Southern African reshaping"],r:0.15,
    reasoning:"The Zulu were one small clan among many. Shaka's military innovations — the short stabbing spear, the buffalo horns formation, the regimental system — were his inventions. Without him, there is no Zulu nation, no Mfecane, and southern African history looks completely different.",
    impact:{lives:"Mfecane: 1-2M displaced/killed",econ:"Southern African power restructure",cultural:"Zulu identity formation",reach:"Southern Africa",timeline:"Zulu nation doesn't emerge"}},
  {id:"tokugawa",name:"Tokugawa Ieyasu",born:1543,died:1616,cat:"military",field:"Japanese Unification",
    quote:"Life is like unto a long journey with a heavy burden.",
    contributions:["Founded shogunate","250 years of peace","Sakoku policy","Edo cultural flourishing"],r:0.35,
    reasoning:"Japan was trending toward unification — Nobunaga and Hideyoshi had done most of the work. Ieyasu's specific achievement was the stable settlement: the hostage system, the isolation policy, the arrangements that lasted 250 years. Another victor might have meant renewed civil war.",
    impact:{lives:"Peace for 30M Japanese",econ:"Domestic Japanese development",cultural:"Edo period arts/culture",reach:"Japan",timeline:"Japanese civil wars continue"}},
  {id:"cortes",name:"Hernán Cortés",born:1485,died:1547,cat:"military",field:"Conquest",
    quote:"I and my companions suffer from a disease of the heart which can be cured only with gold.",
    contributions:["Conquered Aztec Empire","Opened Mesoamerica","Indigenous alliances","Columbian Exchange"],r:0.55,
    reasoning:"Spain was sending conquistadors throughout the Americas. The Aztec Empire, weakened by disease and internal enemies, was vulnerable. Cortés's genius was diplomacy with the Tlaxcalans, but another conquistador with similar allies could have achieved similar results within a decade or two.",
    impact:{lives:"Aztec population collapse: 90%",econ:"Spanish colonial wealth",cultural:"Mestizo civilization",reach:"Mexico, Central America",timeline:"Aztec conquest delayed 10-20 years"}},

  // ── Arts & Culture (12) ──
  {id:"shakespeare",name:"William Shakespeare",born:1564,died:1616,cat:"arts",field:"Literature & Drama",
    quote:"All the world's a stage, and all the men and women merely players.",
    contributions:["37+ plays","Invented 1700+ words","Hamlet, Macbeth, Lear","Modern storytelling"],r:0.10,
    reasoning:"Marlowe was talented. Jonson was skilled. But no one else was Shakespeare. The depth of psychological insight, the poetry, the sheer quantity of great work — it's not a gap that another Elizabethan dramatist could have filled. English literature would be fundamentally poorer.",
    impact:{lives:"Shaped English language for 400M+ speakers",econ:"Theater industry foundations",cultural:"Human psychology exploration",reach:"English-speaking world and beyond",timeline:"English literature fundamentally different"}},
  {id:"davinci",name:"Leonardo da Vinci",born:1452,died:1519,cat:"arts",field:"Art & Polymath",
    quote:"Learning never exhausts the mind.",
    contributions:["Mona Lisa, Last Supper","Anatomical drawings","Flying machine designs","Renaissance ideal"],r:0.15,
    reasoning:"Other Renaissance artists were brilliant — Michelangelo, Raphael. But Leonardo's range across art, science, and engineering was unique. His notebooks contain ideas centuries ahead of their time. The 'Renaissance Man' ideal exists because of him specifically.",
    impact:{lives:"Art-science integration model",econ:"Art market: Mona Lisa alone priceless",cultural:"Renaissance Man archetype",reach:"Western art tradition",timeline:"Art-science synthesis delayed"}},
  {id:"beethoven",name:"Ludwig van Beethoven",born:1770,died:1827,cat:"arts",field:"Music Composition",
    quote:"Music is the mediator between the spiritual and the sensual life.",
    contributions:["Classical-Romantic bridge","9 symphonies","Composed while deaf","Emotional range expansion"],r:0.15,
    reasoning:"The Romantic movement was coming, but Beethoven showed how to get there. The Third Symphony broke every rule. Composing the Ninth while deaf was a triumph of will that no one else achieved. Without him, the transition from Mozart to Brahms looks completely different.",
    impact:{lives:"Shaped all subsequent Western music",econ:"Classical music industry",cultural:"Artist as hero narrative",reach:"Global classical tradition",timeline:"Romantic music develops differently"}},
  {id:"kahlo",name:"Frida Kahlo",born:1907,died:1954,cat:"arts",field:"Visual Art",
    quote:"I paint myself because I am so often alone and because I am the subject I know best.",
    contributions:["Surrealist self-portraiture","Mexican identity in art","Pain as subject","Feminist icon"],r:0.25,
    reasoning:"Mexican muralism was flourishing — Rivera, Orozco, Siqueiros. But Kahlo's intensely personal style, turning her suffering into art, was hers alone. Her posthumous influence on feminist art and disability representation grew from her specific biography.",
    impact:{lives:"Disability representation in art",econ:"Art market: paintings worth $30M+",cultural:"Female artist as icon",reach:"Global art world",timeline:"Mexican art takes different path"}},
  {id:"hokusai",name:"Katsushika Hokusai",born:1760,died:1849,cat:"arts",field:"Ukiyo-e Art",
    quote:"When I am 110, everything I draw, be it a dot or a line, will be alive.",
    contributions:["Great Wave","36 Views of Fuji","Influenced Impressionism","Coined 'manga'"],r:0.20,
    reasoning:"Ukiyo-e had other masters, but Hokusai's Great Wave became the image of Japan for the world. His influence on Impressionism — on Monet, Van Gogh — was specific to his compositions. Without him, the Japonisme movement would have looked different.",
    impact:{lives:"Connected Japanese-Western art",econ:"Japanese art market globally",cultural:"Ukiyo-e global recognition",reach:"Japan, European Impressionists",timeline:"Japonisme movement weaker"}},
  {id:"murasaki",name:"Murasaki Shikibu",born:973,died:1014,cat:"arts",field:"Literature",
    quote:"The truth is I found real life tedious.",
    contributions:["Tale of Genji (first novel)","Heian court literature","Psychological realism","Japanese literary tradition"],r:0.10,
    reasoning:"The Tale of Genji is arguably the first novel in any language. Its psychological depth was unprecedented. Heian court culture was rich, but no one else produced anything like it. Without Murasaki, the novel form might have emerged elsewhere, centuries later.",
    impact:{lives:"Invented the novel form",econ:"Japanese literary tradition",cultural:"Female authorship precedent",reach:"Global literature",timeline:"Novel form emerges elsewhere later"}},
  {id:"picasso",name:"Pablo Picasso",born:1881,died:1973,cat:"arts",field:"Visual Art",
    quote:"Every child is an artist. The problem is how to remain an artist once we grow up.",
    contributions:["Co-founded Cubism","Guernica","Seven decades of reinvention","Most prolific artist"],r:0.30,
    reasoning:"Braque was developing Cubism alongside Picasso — they worked so closely that some paintings are hard to attribute. Modern art was happening regardless. Picasso's unique contribution was his celebrity, productivity, and constant reinvention. Cubism would exist; Picasso's career wouldn't.",
    impact:{lives:"Redefined visual representation",econ:"Art market: paintings worth $100M+",cultural:"Artist as celebrity",reach:"Global modern art",timeline:"Cubism emerges anyway via Braque"}},
  {id:"disney",name:"Walt Disney",born:1901,died:1966,cat:"arts",field:"Animation & Entertainment",
    quote:"All our dreams can come true, if we have the courage to pursue them.",
    contributions:["Feature animation","Disneyland","Mickey Mouse","Entertainment empire"],r:0.30,
    reasoning:"Animation was being developed by multiple studios. The Fleischers were innovative. But Disney's specific vision — feature-length animated films as art, theme parks as immersive storytelling — was personal. Snow White was a bet no one else would have made.",
    impact:{lives:"Entertainment for billions",econ:"Disney company: $200B+ value",cultural:"Childhood imagination shaped globally",reach:"Global entertainment",timeline:"Animation advances slower"}},
  {id:"fela",name:"Fela Kuti",born:1938,died:1997,cat:"arts",field:"Music & Activism",
    quote:"Music is the weapon of the future.",
    contributions:["Created Afrobeat","Political resistance music","Kalakuta Republic","Pan-African movement"],r:0.10,
    reasoning:"Afrobeat — the fusion of James Brown funk, highlife, and Yoruba rhythms — was Fela's invention. His musical style, political confrontation, and communal living were a package no one else was offering. Without him, the genre simply doesn't exist.",
    impact:{lives:"Nigerian political consciousness",econ:"Afrobeat global music industry",cultural:"Music as resistance model",reach:"Africa, global music",timeline:"Afrobeat doesn't exist"}},
  {id:"tagore",name:"Rabindranath Tagore",born:1861,died:1941,cat:"arts",field:"Literature & Music",
    quote:"You can't cross the sea merely by standing and staring at the water.",
    contributions:["First non-European Nobel","Bengali renaissance","Two national anthems","Shantiniketan"],r:0.15,
    reasoning:"Tagore's influence on Bengali culture — the poetry, songs, novels, and educational philosophy — was so total that modern Bengali identity is partly his creation. Two nations chose his songs as anthems. No other figure so completely shaped a culture's modern form.",
    impact:{lives:"Bengali cultural identity",econ:"Indian arts/education institutions",cultural:"East-West cultural bridge",reach:"India, Bangladesh, global literature",timeline:"Bengali cultural development different"}},
  {id:"rumi",name:"Jalal ad-Din Rumi",born:1207,died:1273,cat:"arts",field:"Poetry & Mysticism",
    quote:"What you seek is seeking you.",
    contributions:["Masnavi epic","Sufi poetry","Whirling dervishes","Best-selling poet in US"],r:0.15,
    reasoning:"Sufi poetry existed before and after Rumi, but his specific voice — ecstatic, accessible, universal — made him the most-read poet in America seven centuries later. The Mevlevi order and its whirling dervishes exist because of his specific teachings.",
    impact:{lives:"Spiritual influence: millions",econ:"Sufi tourism, publishing",cultural:"Mystical poetry tradition",reach:"Islamic world, Western spirituality",timeline:"Sufi poetry tradition different"}},
  {id:"achebe",name:"Chinua Achebe",born:1930,died:2013,cat:"arts",field:"Literature",
    quote:"Until the lions have their own historians, the history of the hunt will always glorify the hunter.",
    contributions:["Things Fall Apart","African literature in English","Challenged colonialism","African voice globally"],r:0.20,
    reasoning:"African writers were emerging, but Achebe's Things Fall Apart was first — the book that proved Africans could tell their own stories in English at the highest level. His critique of Conrad defined post-colonial literary debate. Others might have followed, but he opened the door.",
    impact:{lives:"African self-representation",econ:"African publishing industry",cultural:"Post-colonial literature",reach:"Africa, global literature",timeline:"African literature emerges differently"}},

  // ── Philosophy & Religion (9) ──
  {id:"confucius",name:"Confucius",born:-551,died:-479,cat:"philosophy",field:"Philosophy & Ethics",
    quote:"It does not matter how slowly you go as long as you do not stop.",
    contributions:["Confucian ethics","The Analects","East Asian governance","Meritocratic civil service"],r:0.20,
    reasoning:"Other Chinese philosophers offered competing visions — Mohism, Legalism, Daoism. But Confucius's specific synthesis of virtue ethics, filial piety, and meritocratic governance became the operating system of East Asian civilization. 2,500 years later, his influence remains measurable.",
    impact:{lives:"Shaped 1.5B+ East Asians",econ:"Bureaucratic governance model",cultural:"Family/hierarchy values",reach:"China, Korea, Japan, Vietnam",timeline:"East Asian philosophy completely different"}},
  {id:"muhammad",name:"Prophet Muhammad",born:570,died:632,cat:"philosophy",field:"Religion & Governance",
    quote:"The best among you is the one who doesn't harm others with his tongue and hands.",
    contributions:["Founded Islam","Quran revelation","United Arabia","Islamic framework"],r:0.10,
    reasoning:"Islam's specific form — its theology, law, and practice — emerged from Muhammad's life and recitations. No one else was receiving those revelations. Without him, the Arabian Peninsula remains polytheist, and one of history's major civilizations doesn't exist.",
    impact:{lives:"1.8B Muslims today",econ:"Islamic finance, halal industries",cultural:"Major world civilization",reach:"Global Islamic world",timeline:"Islam doesn't exist"}},
  {id:"luther",name:"Martin Luther",born:1483,died:1546,cat:"philosophy",field:"Theology & Reform",
    quote:"Here I stand. I can do no other.",
    contributions:["95 Theses","Protestant Reformation","German Bible","Individual conscience"],r:0.50,
    reasoning:"Church corruption was widely criticized — Hus, Wycliffe, Erasmus all challenged Rome. The printing press made dissent spreadable. Luther's specific theology mattered less than the moment. Without him, another reformer likely triggers a similar break within decades.",
    impact:{lives:"Protestantism: 800M+ adherents",econ:"Protestant work ethic debates",cultural:"Religious pluralism",reach:"Europe, Americas, global",timeline:"Reformation delayed 20-50 years"}},
  {id:"buddha",name:"Siddhartha Gautama",born:-563,died:-483,cat:"philosophy",field:"Spiritual Philosophy",
    quote:"Peace comes from within. Do not seek it without.",
    contributions:["Founded Buddhism","Four Noble Truths","Monastic tradition","500M+ influenced"],r:0.15,
    reasoning:"Indian spirituality was rich with renunciants and seekers, but the Buddha's specific framework — Four Noble Truths, Eightfold Path, monastic rules — was his creation. His emphasis on suffering and liberation shaped Asian civilization in ways no one else's teachings did.",
    impact:{lives:"500M Buddhists today",econ:"Buddhist institutions globally",cultural:"Meditation, mindfulness global",reach:"Asia, increasingly global",timeline:"Buddhism doesn't exist"}},
  {id:"socrates",name:"Socrates",born:-470,died:-399,cat:"philosophy",field:"Philosophy",
    quote:"The only true wisdom is in knowing you know nothing.",
    contributions:["Socratic method","Western philosophy","Examined life","Mentor of Plato"],r:0.20,
    reasoning:"Without Socrates, there's no Plato. Without Plato, there's no Aristotle. The entire Western philosophical tradition flows from those Athenian conversations. Other Greeks were thinking, but no one else generated that specific lineage of world-changing students.",
    impact:{lives:"Shaped Western thought",econ:"Educational methods",cultural:"Critical thinking tradition",reach:"Western civilization",timeline:"Western philosophy develops differently"}},
  {id:"marx",name:"Karl Marx",born:1818,died:1883,cat:"philosophy",field:"Political Philosophy",
    quote:"The philosophers have only interpreted the world; the point is to change it.",
    contributions:["Das Kapital","Communist Manifesto","Historical materialism","Class struggle"],r:0.40,
    reasoning:"Socialist ideas were emerging from multiple sources — Proudhon, Owen, Saint-Simon. Industrial capitalism was generating its own critics. Marx's specific synthesis was influential, but revolutionary movements would have found other theorists. The Russian Revolution might have had a different bible.",
    impact:{lives:"Communist states: billions affected",econ:"Socialist economies",cultural:"Capitalism critique",reach:"Global political thought",timeline:"Socialist movements take different form"}},
  {id:"laozi",name:"Laozi",born:-601,died:-531,cat:"philosophy",field:"Philosophy",
    quote:"A journey of a thousand miles begins with a single step.",
    contributions:["Tao Te Ching","Founded Daoism","Wu wei concept","2500 years of influence"],r:0.25,
    reasoning:"Laozi may be semi-legendary — multiple authors possibly contributed to the Tao Te Ching. But the text's distinctive voice and philosophy shaped Chinese religion, medicine, and aesthetics. Daoism's specific character comes from those 81 chapters.",
    impact:{lives:"Chinese spiritual tradition",econ:"Daoist practices/medicine",cultural:"Balance, harmony philosophy",reach:"China, East Asia",timeline:"Chinese philosophy different"}},
  {id:"aquinas",name:"Thomas Aquinas",born:1225,died:1274,cat:"philosophy",field:"Theology & Philosophy",
    quote:"To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.",
    contributions:["Summa Theologica","Aristotle-Christianity synthesis","Natural law","Catholic tradition"],r:0.35,
    reasoning:"Aristotle's works were flooding back into Europe via Arabic translations. Other scholastics were trying to reconcile faith and reason. Aquinas's synthesis was most successful, but the project was collective. Without him, Albertus Magnus or Duns Scotus fills a similar role.",
    impact:{lives:"Catholic intellectual foundation",econ:"University tradition",cultural:"Faith-reason integration",reach:"Catholic world",timeline:"Catholic philosophy develops differently"}},
  {id:"shankara",name:"Adi Shankara",born:788,died:820,cat:"philosophy",field:"Hindu Philosophy",
    quote:"Brahman alone is real; the world is appearance.",
    contributions:["Advaita Vedanta","Unified Hindu schools","Matha system","Upanishad commentaries"],r:0.20,
    reasoning:"Shankara didn't just philosophize — he walked across India founding monasteries and debating rivals, creating institutional Hinduism. His Advaita Vedanta became the default educated Hindu philosophy. Without him, Hinduism might have fragmented further or been absorbed by Buddhism.",
    impact:{lives:"Hindu philosophy systematized",econ:"Hindu institutions",cultural:"Non-dualism globally influential",reach:"India, Hindu diaspora",timeline:"Hindu philosophy remains fragmented"}},

  // ── Medicine & Health (10) ──
  {id:"fleming",name:"Alexander Fleming",born:1881,died:1955,cat:"medicine",field:"Microbiology",
    quote:"One sometimes finds what one is not looking for.",
    contributions:["Discovered penicillin","Antibiotic foundation","Surgery transformation","200M+ lives saved"],r:0.80,
    reasoning:"Fleming noticed mold killing bacteria and published it — but didn't develop it. Florey and Chain actually made penicillin usable. Multiple researchers were investigating antibacterial agents. Sulfa drugs were already working. The antibiotic era was coming; Fleming's specific contribution was noticing something and writing it down.",
    impact:{lives:"200M+ saved directly",econ:"Antibiotic industry: $50B+",cultural:"Medical breakthrough archetype",reach:"Global healthcare",timeline:"Antibiotics discovered 5-10 years later"}},
  {id:"hippocrates",name:"Hippocrates",born:-460,died:-370,cat:"medicine",field:"Medicine",
    quote:"First, do no harm.",
    contributions:["Hippocratic Oath","Medicine from religion","Clinical observation","Natural disease theory"],r:0.40,
    reasoning:"Greek medicine was professionalizing, moving away from temple healing. The Hippocratic corpus was likely written by multiple authors. But the ethical framework — do no harm, patient confidentiality, natural rather than supernatural disease — coalesced around his school.",
    impact:{lives:"Medical ethics foundation",econ:"Medical profession",cultural:"Do no harm principle",reach:"Western medicine",timeline:"Medical ethics develops differently"}},
  {id:"jenner",name:"Edward Jenner",born:1749,died:1823,cat:"medicine",field:"Immunology",
    quote:"I hope that some day the practice of producing cowpox in human beings will spread over the world.",
    contributions:["Smallpox vaccination","Founded immunology","Most lives saved","Eradication path"],r:0.60,
    reasoning:"Folk knowledge that milkmaids didn't get smallpox was widespread. Variolation (using smallpox itself) was already practiced. Jenner systematized cowpox vaccination, but others were experimenting. His contribution was legitimizing the practice, but the idea was in the air.",
    impact:{lives:"500M+ saved from smallpox",econ:"Vaccine industry: $50B+",cultural:"Preventive medicine model",reach:"Global public health",timeline:"Vaccination delayed 10-20 years"}},
  {id:"pasteur",name:"Louis Pasteur",born:1822,died:1895,cat:"medicine",field:"Microbiology",
    quote:"In the fields of observation, chance favors only the prepared mind.",
    contributions:["Germ theory","Pasteurization","Rabies vaccine","Disproved spontaneous generation"],r:0.45,
    reasoning:"Koch was doing parallel work in Germany. The microscope was revealing bacteria to multiple researchers. Pasteur's specific contributions — pasteurization process, rabies vaccine — were important but not solitary. Germ theory was emerging from collective scientific work.",
    impact:{lives:"Billions via food safety",econ:"Food industry transformation",cultural:"Science-based medicine",reach:"Global food/medicine",timeline:"Germ theory delayed 10-15 years"}},
  {id:"nightingale",name:"Florence Nightingale",born:1820,died:1910,cat:"medicine",field:"Nursing & Statistics",
    quote:"I attribute my success to this: I never gave or took any excuse.",
    contributions:["Modern nursing","Statistical graphics","Sanitation reform","Mortality reduction"],r:0.30,
    reasoning:"Hospitals were deadly, and reformers knew it. But Nightingale's specific combination — statistical proof, political connections, training programs, personal celebrity — transformed nursing from menial work to profession. Her polar area diagrams changed how people visualized data.",
    impact:{lives:"Hospital mortality halved",econ:"Nursing profession: millions employed",cultural:"Women in healthcare",reach:"Global nursing",timeline:"Nursing professionalization delayed"}},
  {id:"tuyouyou",name:"Tu Youyou",born:1930,died:2024,cat:"medicine",field:"Pharmaceutical Science",
    quote:"I feel that the Chinese medicine community should be proud.",
    contributions:["Artemisinin discovery","Malaria treatment","Traditional medicine integration","Nobel 2015"],r:0.35,
    reasoning:"The Chinese government had assembled hundreds of scientists to find malaria treatments. Tu Youyou's insight — extracting artemisinin using traditional low-temperature methods — was crucial, but the institutional effort was massive. Someone might have found it eventually, but she found it first.",
    impact:{lives:"Millions saved from malaria",econ:"Antimalarial drug industry",cultural:"Traditional-modern medicine bridge",reach:"Developing world",timeline:"Artemisinin found eventually"}},
  {id:"salk",name:"Jonas Salk",born:1914,died:1995,cat:"medicine",field:"Virology",
    quote:"Could you patent the sun?",
    contributions:["Polio vaccine","Refused patent","Mass vaccination model","Ended polio epidemics"],r:0.65,
    reasoning:"Multiple labs were racing toward a polio vaccine. Sabin developed an oral version shortly after. Salk's inactivated vaccine worked, but the problem was being attacked from many angles. His most distinctive contribution — refusing to patent — was ethical, not scientific.",
    impact:{lives:"Millions saved from polio",econ:"Vaccination programs",cultural:"Selfless scientist archetype",reach:"Global polio eradication",timeline:"Sabin or others within 5 years"}},
  {id:"semmelweis",name:"Ignaz Semmelweis",born:1818,died:1865,cat:"medicine",field:"Obstetrics & Hygiene",
    quote:"When I look back upon the past, I can only dispel the sadness by gazing into that happy future.",
    contributions:["Hand hygiene","90% mortality reduction","Germ theory precursor","Rejected by peers"],r:0.55,
    reasoning:"Semmelweis proved hand-washing saved lives, but his peers rejected him and he died in an asylum. Lister later established antiseptic surgery using different reasoning. The discovery was made; the tragedy was that Semmelweis couldn't get anyone to listen. Someone else would have proven it eventually.",
    impact:{lives:"Millions of mothers saved",econ:"Hospital infection control",cultural:"Tragedy of ignored evidence",reach:"Global obstetrics",timeline:"Hand hygiene discovered via Lister"}},
  {id:"vesalius",name:"Andreas Vesalius",born:1514,died:1564,cat:"medicine",field:"Anatomy",
    quote:"I am not accustomed to saying anything with certainty after only one or two observations.",
    contributions:["De humani corporis fabrica","Modern anatomy","Corrected Galen","Observation over authority"],r:0.40,
    reasoning:"The Renaissance was encouraging direct observation over ancient authority. Artists were dissecting bodies for accuracy. Vesalius systematized anatomical knowledge brilliantly, but the move toward empirical anatomy was cultural, not individual.",
    impact:{lives:"Surgery advancement foundation",econ:"Medical education",cultural:"Empirical medicine",reach:"Western medicine",timeline:"Anatomy advances slower"}},
  {id:"ibnsina",name:"Ibn Sina (Avicenna)",born:980,died:1037,cat:"medicine",field:"Medicine & Philosophy",
    quote:"The knowledge of anything, since all things have causes, is not acquired or complete unless it is known by its causes.",
    contributions:["Canon of Medicine","Clinical trials","Contagious disease theory","Greek-Islamic synthesis"],r:0.25,
    reasoning:"The Canon of Medicine was the standard medical text in Europe and the Islamic world for 600 years. His synthesis of Greek and Arabic knowledge was encyclopedic. Other scholars were working, but no one else produced anything so comprehensive or influential.",
    impact:{lives:"Medical text for 600 years",econ:"Medieval medicine",cultural:"Islamic Golden Age height",reach:"Islamic world, Europe",timeline:"Medieval medicine less advanced"}},

  // ── Math & Computing (10) ──
  {id:"turing",name:"Alan Turing",born:1912,died:1954,cat:"computing",field:"Computer Science",
    quote:"Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
    contributions:["Turing machine","Broke Enigma","Turing Test","Morphogenesis"],r:0.40,
    reasoning:"Church developed equivalent computability concepts independently. Bletchley Park had other brilliant cryptanalysts. But Turing's specific contributions — the Turing machine concept, the bombe design, the test for AI — were distinctively his. WWII might have lasted longer without him.",
    impact:{lives:"WWII shortened 2+ years",econ:"Computing: $5T+ industry",cultural:"AI conceptual foundation",reach:"Global computing",timeline:"Computation theory via Church; Enigma harder"}},
  {id:"lovelace",name:"Ada Lovelace",born:1815,died:1852,cat:"computing",field:"Computing Pioneer",
    quote:"The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.",
    contributions:["First algorithm","General-purpose vision","Beyond calculation","Analytical Engine notes"],r:0.50,
    reasoning:"Babbage designed the Analytical Engine; Lovelace saw its potential beyond calculation. Her Notes were visionary but didn't directly enable later computing — that happened independently a century later. She was right, but being right in 1843 didn't change when computers actually arrived.",
    impact:{lives:"Computing conceptualization",econ:"Programming field",cultural:"Women in computing symbol",reach:"Computing history",timeline:"Vision dormant until 1930s anyway"}},
  {id:"euclid",name:"Euclid",born:-325,died:-265,cat:"computing",field:"Mathematics",
    quote:"There is no royal road to geometry.",
    contributions:["Elements","Axiomatic proof","Euclidean geometry","Number theory"],r:0.35,
    reasoning:"Greek mathematicians had proven most of Euclid's theorems individually. His contribution was organization — the axiomatic method that derived everything from five postulates. It was brilliant synthesis, but the mathematical knowledge existed. He made it teachable.",
    impact:{lives:"Mathematical education for 2000+ years",econ:"Engineering foundations",cultural:"Logical reasoning model",reach:"Global mathematics",timeline:"Geometry systematized later"}},
  {id:"khwarizmi",name:"Al-Khwarizmi",born:780,died:850,cat:"computing",field:"Mathematics",
    quote:"When I considered what people generally want in calculating, I found that it always is a number.",
    contributions:["Algebra systematization","Algorithm namesake","Hindu-Arabic numerals","Astronomical tables"],r:0.35,
    reasoning:"Indian mathematicians had developed the numeral system. Others were working on algebraic techniques. Al-Khwarizmi systematized and transmitted this knowledge to the Islamic world and eventually Europe. The math existed; he was the great communicator.",
    impact:{lives:"All computation",econ:"Mathematical foundations of commerce",cultural:"Islamic mathematical tradition",reach:"Global mathematics",timeline:"Algebra develops in India/elsewhere"}},
  {id:"gauss",name:"Carl Friedrich Gauss",born:1777,died:1855,cat:"computing",field:"Mathematics",
    quote:"Mathematics is the queen of sciences and number theory is the queen of mathematics.",
    contributions:["All math branches","Number theory","Gaussian distribution","Non-Euclidean geometry"],r:0.20,
    reasoning:"Gauss made fundamental contributions to almost every mathematical field of his time. Many of his discoveries he kept private; when others published similar results, he'd reveal he'd found them years earlier. The breadth of his genius was unmatched. Many theorems would have been delayed decades.",
    impact:{lives:"Statistics used everywhere",econ:"Actuarial science, finance",cultural:"'Prince of Mathematics'",reach:"Global mathematics",timeline:"Many discoveries delayed decades"}},
  {id:"noether",name:"Emmy Noether",born:1882,died:1935,cat:"computing",field:"Mathematics & Physics",
    quote:"My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.",
    contributions:["Noether's theorem","Abstract algebra","Ring theory","Most important woman in math"],r:0.15,
    reasoning:"Noether's theorem — that every symmetry implies a conservation law — is one of the most profound results in physics. No one else was thinking in those terms. Her contributions to abstract algebra were similarly original. Einstein called her the most important woman in mathematical history.",
    impact:{lives:"Physics conservation laws understood",econ:"Theoretical physics foundations",cultural:"Women in mathematics",reach:"Global physics/math",timeline:"Symmetry-conservation link delayed"}},
  {id:"brahmagupta",name:"Brahmagupta",born:598,died:668,cat:"computing",field:"Mathematics & Astronomy",
    quote:"As the sun eclipses the stars by its brilliancy, so the man of knowledge will eclipse the fame of others.",
    contributions:["Zero rules","Negative numbers","Brahmagupta's formula","Hindu numerals"],r:0.30,
    reasoning:"Indian mathematics was developing zero and negative numbers, but Brahmagupta wrote the rules for calculating with them. His systematization allowed the concepts to spread. Others were working on similar problems; he wrote the textbook.",
    impact:{lives:"All modern mathematics",econ:"Accounting, commerce",cultural:"Indian mathematical tradition",reach:"Global via Arabs to Europe",timeline:"Zero concepts develop elsewhere"}},
  {id:"pascal",name:"Blaise Pascal",born:1623,died:1662,cat:"computing",field:"Mathematics & Philosophy",
    quote:"The heart has its reasons which reason knows nothing of.",
    contributions:["Probability theory","Pascaline calculator","Pascal's Wager","Hydraulics"],r:0.50,
    reasoning:"Fermat was developing probability theory in correspondence with Pascal — their letters created the field together. The mechanical calculator had other inventors. Pascal's unique contributions were more philosophical than mathematical.",
    impact:{lives:"Gambling theory, risk assessment",econ:"Insurance, finance",cultural:"Faith-reason tension",reach:"Mathematics, philosophy",timeline:"Fermat develops probability alone"}},
  {id:"euler",name:"Leonhard Euler",born:1707,died:1783,cat:"computing",field:"Mathematics",
    quote:"Logic is the foundation of the certainty of all the knowledge we acquire.",
    contributions:["Most prolific ever","Graph theory","Euler's identity","Mathematical notation"],r:0.25,
    reasoning:"Euler wrote more mathematics than anyone before or since — over 800 papers. He invented much of modern notation. Graph theory, topology, analysis — he founded or transformed multiple fields. No single mathematician could have replaced his output.",
    impact:{lives:"Engineering mathematics",econ:"All applied mathematics",cultural:"Mathematical beauty",reach:"Global mathematics",timeline:"Many fields develop slower"}},
  {id:"gutenberg",name:"Johannes Gutenberg",born:1400,died:1468,cat:"computing",field:"Printing Technology",
    quote:"It is a press, certainly, but a press from which shall flow inexhaustible streams of the most abundant and most marvelous liquor.",
    contributions:["Movable type press","Oil-based ink","Mass book production","Reformation catalyst"],r:0.70,
    reasoning:"Printing was invented in China centuries earlier. Korean movable type existed. Multiple Europeans were working on printing technology. Gutenberg's specific innovation was the complete system — type, press, ink. But printing was coming to Europe regardless; he got there first.",
    impact:{lives:"Literacy for billions",econ:"Publishing industry",cultural:"Information democratization",reach:"Global literacy",timeline:"Printing 20-30 years later"}},

  // ── Finance & Economics (8) ──
  {id:"adamsmith",name:"Adam Smith",born:1723,died:1790,cat:"finance",field:"Economics",
    quote:"It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner.",
    contributions:["Wealth of Nations","Free market theory","Division of labor","Invisible hand"],r:0.45,
    reasoning:"Physiocrats were developing economic theory in France. Hume wrote on economics. The Scottish Enlightenment was producing social theory. Smith's specific synthesis was influential, but market economics was being theorized by multiple thinkers.",
    impact:{lives:"Capitalism for billions",econ:"Modern economics field",cultural:"Self-interest as virtue",reach:"Global economic systems",timeline:"Economics develops via others"}},
  {id:"jpmorgan",name:"J.P. Morgan",born:1837,died:1913,cat:"finance",field:"Banking & Finance",
    quote:"A man always has two reasons for doing anything: a good reason and the real reason.",
    contributions:["Rescued US economy 1907","Created US Steel, GE","Investment banking","Fed catalyst"],r:0.35,
    reasoning:"Morgan personally stopped the 1907 panic by locking bankers in his library until they agreed to act collectively. No one else had that combination of wealth, authority, and will. His role convinced everyone the US needed a central bank — hence the Federal Reserve.",
    impact:{lives:"Stabilized US financial system",econ:"Modern corporate structure",cultural:"Banker as power figure",reach:"US, global finance",timeline:"1907 panic worse; Fed earlier"}},
  {id:"mansamusa",name:"Mansa Musa",born:1280,died:1337,cat:"finance",field:"Wealth & Governance",
    quote:"I bring gold from a land rich beyond measure.",
    contributions:["Richest person ever","Hajj crashed gold prices","Timbuktu intellectual center","Mali golden age"],r:0.20,
    reasoning:"Mali's gold wealth existed before Musa, but he deployed it uniquely. His hajj distributed so much gold it depressed Mediterranean prices for a decade. His patronage made Timbuktu a center of learning. A different mansa wouldn't have had his ambition.",
    impact:{lives:"West African prosperity",econ:"Destabilized Mediterranean gold",cultural:"African wealth in global memory",reach:"West Africa, Mediterranean",timeline:"Mali empire less prominent"}},
  {id:"keynes",name:"John Maynard Keynes",born:1883,died:1946,cat:"finance",field:"Economics",
    quote:"The difficulty lies not so much in developing new ideas as in escaping from old ones.",
    contributions:["Keynesian economics","Demand-side theory","Bretton Woods","Fiscal policy"],r:0.40,
    reasoning:"The Great Depression was destroying faith in classical economics. Multiple economists were rethinking the role of government. Keynes's specific framework dominated, but countercyclical fiscal policy was being discovered by necessity. FDR didn't read Keynes before the New Deal.",
    impact:{lives:"Depression/recession responses",econ:"Government economic intervention",cultural:"Economist as policy maker",reach:"Global economic policy",timeline:"Depression responses different"}},
  {id:"yunus",name:"Muhammad Yunus",born:1940,died:2024,cat:"finance",field:"Microfinance",
    quote:"Poor people are bonsai people. There is nothing wrong with their seeds.",
    contributions:["Grameen Bank","Microcredit movement","Nobel Peace 2006","Social business"],r:0.30,
    reasoning:"Small-scale lending to the poor existed in various forms. But Yunus institutionalized it, proved it could work at scale, and created a replicable model. His specific innovation — group lending, women's focus — became the template. Others might have developed similar models, but later.",
    impact:{lives:"Millions lifted from poverty",econ:"Microfinance: $100B+ industry",cultural:"Banking for the poor",reach:"Developing world",timeline:"Microfinance develops differently"}},
  {id:"medici",name:"Lorenzo de' Medici",born:1449,died:1492,cat:"finance",field:"Banking & Patronage",
    quote:"It is impossible to live as a citizen and rule the state.",
    contributions:["Medici Bank","Patronized Michelangelo","Renaissance catalyst","Banking-politics model"],r:0.30,
    reasoning:"The Medici bank was founded by Lorenzo's grandfather. Other wealthy families patronized artists. But Lorenzo's specific taste and cultivation shaped the High Renaissance — he identified teenage Michelangelo and brought him into his household. His eye was personal.",
    impact:{lives:"Renaissance culture",econ:"Modern banking practices",cultural:"Art patronage model",reach:"Italy, European art",timeline:"Florentine Renaissance weaker"}},
  {id:"wedgwood",name:"Josiah Wedgwood",born:1730,died:1795,cat:"finance",field:"Industrial Innovation",
    quote:"Everything gives way to experiment.",
    contributions:["Factory system","Modern marketing","Wedgwood pottery","Abolitionist funding"],r:0.50,
    reasoning:"The factory system was emerging across English industries. Other potters were innovating. Wedgwood's specific contributions — money-back guarantees, celebrity endorsements, catalogs — were marketing innovations that others would have developed. He was early, not unique.",
    impact:{lives:"Industrial workers' lives",econ:"Mass production model",cultural:"Branding invention",reach:"Britain, industrial world",timeline:"Factory model develops elsewhere"}},
  {id:"giannini",name:"A.P. Giannini",born:1870,died:1949,cat:"finance",field:"Retail Banking",
    quote:"No man actually owns a fortune. It owns him.",
    contributions:["Bank of America","Banking for ordinary people","Golden Gate funding","Hollywood financing"],r:0.40,
    reasoning:"Banking was traditionally for the wealthy. Giannini deliberately sought immigrant and working-class customers, pioneering retail banking. He financed the Golden Gate Bridge and Hollywood. Others were moving toward mass banking, but he committed to it as mission.",
    impact:{lives:"Banking democratization",econ:"Retail banking model",cultural:"Immigrant success story",reach:"US banking",timeline:"Retail banking develops slower"}},

  // ── Exploration & Discovery (8) ──
  {id:"columbus",name:"Christopher Columbus",born:1451,died:1506,cat:"exploration",field:"Exploration",
    quote:"By prevailing over all obstacles and distractions, one may unfailingly arrive at his chosen goal or destination.",
    contributions:["Americas contact 1492","Columbian Exchange","Atlantic colonization","Global demographics shift"],r:0.75,
    reasoning:"Europeans were probing the Atlantic. The Portuguese were sailing down Africa. Someone would have reached the Americas soon — the Columbian Exchange was coming. Columbus was first, but the contact was inevitable within a decade or two.",
    impact:{lives:"Indigenous deaths: 90%; Global population reshuffled",econ:"Global trade transformation",cultural:"'New World' concept",reach:"Americas, global",timeline:"Americas found within 10-20 years"}},
  {id:"zhenghe",name:"Zheng He",born:1371,died:1433,cat:"exploration",field:"Naval Exploration",
    quote:"We have traversed more than 100,000 li of immense water spaces.",
    contributions:["Seven treasure voyages","300+ ship fleet","Reached Africa","Ming naval power"],r:0.20,
    reasoning:"No one else in China was commanding fleets of 300 ships reaching Africa. When Zheng He died, China turned inward — the ships rotted, the records were destroyed. His voyages were entirely dependent on imperial favor he personally cultivated. Without him, Chinese maritime expansion simply doesn't happen.",
    impact:{lives:"Chinese diplomatic connections",econ:"Indian Ocean trade",cultural:"Chinese maritime history",reach:"Indian Ocean world",timeline:"Chinese expansion never happens"}},
  {id:"ibnbattuta",name:"Ibn Battuta",born:1304,died:1369,cat:"exploration",field:"Travel & Documentation",
    quote:"Traveling—it leaves you speechless, then turns you into a storyteller.",
    contributions:["75,000 miles traveled","Rihla chronicle","Islamic world documented","Connected communities"],r:0.45,
    reasoning:"Other travelers crossed the Islamic world, but only Ibn Battuta wrote it down comprehensively. His Rihla is our main source for 14th-century society across three continents. Without it, we lose irreplaceable historical knowledge — but other travelers would have partially filled the gap.",
    impact:{lives:"Historical knowledge preserved",econ:"Trade route documentation",cultural:"Travel writing tradition",reach:"Afro-Eurasia",timeline:"Medieval world less documented"}},
  {id:"cook",name:"James Cook",born:1728,died:1779,cat:"exploration",field:"Naval Exploration",
    quote:"Ambition leads me not only farther than any other man has been before me, but as far as I think it possible for man to go.",
    contributions:["Mapped Pacific","Australian east coast","New Zealand charted","Scientific expeditions"],r:0.50,
    reasoning:"European powers were probing the Pacific. The French were sending scientific expeditions. Cook was the best navigator of his era, but the Pacific would have been mapped by others. His specific legacy was the scientific thoroughness — collecting specimens, preventing scurvy, precise cartography.",
    impact:{lives:"Colonization of Pacific",econ:"Pacific trade routes",cultural:"Scientific exploration model",reach:"Pacific, Australia, NZ",timeline:"Pacific mapping delayed 20 years"}},
  {id:"dagama",name:"Vasco da Gama",born:1460,died:1524,cat:"exploration",field:"Maritime Exploration",
    quote:"I am not afraid of the darkness. Real death is preferable to a life without living.",
    contributions:["Sea route to India","Europe-Asia trade","Portuguese empire","Broke Venice monopoly"],r:0.60,
    reasoning:"Portuguese navigators had been pushing down the African coast for decades. Bartolomeu Dias rounded the Cape before da Gama. The sea route to India was a national project; da Gama completed what others started. Another captain could have done it within years.",
    impact:{lives:"Indian Ocean colonization",econ:"Spice trade transformation",cultural:"Age of Exploration",reach:"Indian Ocean, global trade",timeline:"Route found within 10 years"}},
  {id:"armstrong",name:"Neil Armstrong",born:1930,died:2012,cat:"exploration",field:"Space Exploration",
    quote:"That's one small step for man, one giant leap for mankind.",
    contributions:["First Moon landing","'One small step'","Apollo 11 commander","Space age icon"],r:0.85,
    reasoning:"Armstrong was chosen to go first partly by accident of crew rotation. Aldrin was right behind him. The Apollo program had trained many astronauts who could have commanded the mission. Armstrong's poise was perfect, but the moon landing was a program achievement, not an individual one.",
    impact:{lives:"Inspired millions in STEM",econ:"Space industry: $400B+",cultural:"Humanity's cosmic reach",reach:"Global inspiration",timeline:"Aldrin or others within months"}},
  {id:"amundsen",name:"Roald Amundsen",born:1872,died:1928,cat:"exploration",field:"Polar Exploration",
    quote:"Adventure is just bad planning.",
    contributions:["First to South Pole","Northwest Passage","Polar techniques","Beat Scott"],r:0.55,
    reasoning:"Scott was racing to the same pole and nearly made it. If Amundsen hadn't gone, Scott would have been first (and might have survived). Polar exploration was a competitive field. Amundsen's meticulous preparation made the difference, but the goal was being attempted by multiple expeditions.",
    impact:{lives:"Polar exploration knowledge",econ:"Antarctic research",cultural:"Exploration competition",reach:"Polar regions",timeline:"Scott arrives first, dies"}},
  {id:"magellan",name:"Ferdinand Magellan",born:1480,died:1521,cat:"exploration",field:"Maritime Exploration",
    quote:"The church says the earth is flat; but I have seen its shadow on the moon, and I have more confidence in a shadow than in the church.",
    contributions:["First circumnavigation","Proved Earth's scale","Crossed Pacific","Strait discovery"],r:0.55,
    reasoning:"Spain and Portugal were sending expeditions worldwide. Magellan died mid-voyage; Elcano completed it. The strait might have taken decades to find otherwise, but circumnavigation was being attempted. His specific contribution was the westward route — others would have followed eventually.",
    impact:{lives:"Global geography proven",econ:"Pacific trade routes",cultural:"World as navigable sphere",reach:"Global geography",timeline:"Circumnavigation within 20 years"}},

  // ── Social Movements (11) ──
  {id:"mlk",name:"Martin Luther King Jr.",born:1929,died:1968,cat:"social",field:"Civil Rights",
    quote:"Injustice anywhere is a threat to justice everywhere.",
    contributions:["I Have a Dream","Nonviolent resistance","Civil Rights Act catalyst","Nobel Peace 1964"],r:0.30,
    reasoning:"The civil rights movement had many leaders — Rustin, Lewis, Abernathy. The movement would have continued without King. But his specific voice — the rhetorical genius, the theological grounding, the appeal to American ideals — shaped how the movement was received. A different leader might have been more militant or less effective.",
    impact:{lives:"40M+ African Americans",econ:"Economic integration",cultural:"American moral conscience",reach:"United States, global inspiration",timeline:"Civil rights slower, possibly violent"}},
  {id:"gandhi",name:"Mahatma Gandhi",born:1869,died:1948,cat:"social",field:"Independence & Nonviolence",
    quote:"Be the change you wish to see in the world.",
    contributions:["Indian independence","Satyagraha","Salt March","Global influence"],r:0.25,
    reasoning:"Indian nationalism was growing with or without Gandhi. But satyagraha — nonviolent resistance as political philosophy — was his invention. A different independence movement might have been violent. His influence on King and Mandela extended his impact far beyond India.",
    impact:{lives:"400M Indians freed",econ:"Indian self-governance",cultural:"Nonviolence as power",reach:"India, global movements",timeline:"Indian independence more violent"}},
  {id:"tubman",name:"Harriet Tubman",born:1822,died:1913,cat:"social",field:"Abolition",
    quote:"I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.",
    contributions:["Underground Railroad","70+ rescued","Union Army scout","Resistance symbol"],r:0.35,
    reasoning:"The Underground Railroad had many conductors. Others rescued enslaved people. Tubman's unique contribution was her personal courage and symbolic power — an escaped slave returning repeatedly to the South. The railroad would have functioned without her; it wouldn't have had the same legend.",
    impact:{lives:"70+ directly; symbolism for millions",econ:"Abolition movement",cultural:"Black resistance icon",reach:"United States",timeline:"Underground Railroad less effective"}},
  {id:"pankhurst",name:"Emmeline Pankhurst",born:1858,died:1928,cat:"social",field:"Women's Suffrage",
    quote:"Deeds, not words.",
    contributions:["UK suffrage leader","WSPU tactics","'Deeds not words'","Won suffrage 1918"],r:0.40,
    reasoning:"Suffrage movements existed worldwide. Peaceful suffragists had been campaigning for decades. Pankhurst's specific contribution was militancy — window-smashing, hunger strikes, martyrdom. Whether that accelerated or delayed suffrage is debated. The vote was coming; her tactics shaped the story.",
    impact:{lives:"UK women's voting rights",econ:"Women's economic participation",cultural:"Militant protest model",reach:"UK, global suffrage",timeline:"UK suffrage delayed 10 years"}},
  {id:"douglass",name:"Frederick Douglass",born:1818,died:1895,cat:"social",field:"Abolition & Civil Rights",
    quote:"If there is no struggle, there is no progress.",
    contributions:["Escaped slavery, became leader","Autobiography","Advised Lincoln","Universal suffrage"],r:0.25,
    reasoning:"Douglass's autobiography was the most powerful anti-slavery document of its era — an enslaved person writing at the highest literary level, disproving racist claims about Black intellectual capacity. His rhetorical skill in debates was unmatched. Other abolitionists could organize; only Douglass could embody the argument.",
    impact:{lives:"Abolition movement catalyst",econ:"Post-slavery possibilities",cultural:"Self-made man narrative",reach:"United States",timeline:"Abolition movement weaker"}},
  {id:"toussaint",name:"Toussaint Louverture",born:1743,died:1803,cat:"social",field:"Revolution",
    quote:"I was born a slave, but nature gave me the soul of a free man.",
    contributions:["Haitian Revolution","Only successful slave revolt","Defeated Napoleon","Global inspiration"],r:0.15,
    reasoning:"Slave revolts happened constantly, but they failed. Only in Haiti did one succeed in creating a free nation. Toussaint's genius was military, political, and diplomatic — he played colonial powers against each other while building an army. Without him, the revolution likely fails like all the others.",
    impact:{lives:"500,000 Haitians freed",econ:"First free Black republic",cultural:"Proof of Black self-governance",reach:"Caribbean, Americas, Africa",timeline:"Haitian revolution fails"}},
  {id:"parks",name:"Rosa Parks",born:1913,died:2005,cat:"social",field:"Civil Rights",
    quote:"I would like to be remembered as a person who wanted to be free.",
    contributions:["Bus Boycott catalyst","Resistance symbol","NAACP activist","'Mother of civil rights'"],r:0.60,
    reasoning:"Civil rights leaders had been planning a bus boycott and looking for the right test case. Claudette Colvin had refused to give up her seat months earlier but was deemed unsuitable as a symbol. Parks was chosen. The movement was ready; she was the right person at the right moment, but the moment was engineered.",
    impact:{lives:"Sparked mass movement",econ:"Desegregation economics",cultural:"Individual courage narrative",reach:"United States",timeline:"Different catalyst emerges soon"}},
  {id:"maathai",name:"Wangari Maathai",born:1940,died:2011,cat:"social",field:"Environmentalism",
    quote:"Until you dig a hole, you plant a tree, you water it and make it survive, you haven't done a thing.",
    contributions:["Green Belt Movement","51M trees","Nobel Peace Prize","Democracy-environment link"],r:0.30,
    reasoning:"Environmental movements existed elsewhere, but Maathai connected tree-planting to women's empowerment, democracy, and anti-corruption in a specifically African context. Her model — paying women to plant trees — was scalable and replicable. Others might have developed similar programs, but she built the template.",
    impact:{lives:"Environmental improvement millions",econ:"Sustainable development model",cultural:"African women's leadership",reach:"Kenya, Africa, global",timeline:"Kenyan environmentalism weaker"}},
  {id:"truth",name:"Sojourner Truth",born:1797,died:1883,cat:"social",field:"Abolition & Women's Rights",
    quote:"Ain't I a woman?",
    contributions:["Ain't I a Woman?","Abolition-feminism intersection","Escaped slavery","Civil War recruiter"],r:0.30,
    reasoning:"The 'Ain't I a Woman?' speech connected abolition and feminism in a way white feminists and Black male abolitionists hadn't. Truth embodied the intersection — a Black woman demanding rights on both fronts. Others shared her position; none articulated it as memorably.",
    impact:{lives:"Intersectional activism",econ:"Women's rights movement",cultural:"Black feminist founding",reach:"United States",timeline:"Intersectional voice emerges later"}},
  {id:"chavez",name:"César Chávez",born:1927,died:1993,cat:"social",field:"Labor Rights",
    quote:"Once social change begins, it cannot be reversed.",
    contributions:["United Farm Workers","Grape boycott","Nonviolent labor activism","Latino rights"],r:0.35,
    reasoning:"Agricultural workers had tried to organize before and failed. Chávez's specific combination — religious imagery, nonviolent tactics, consumer boycotts, coalition with urban liberals — made the UFW successful where others weren't. Latino labor activism would have existed, but less effectively.",
    impact:{lives:"Farm workers' conditions",econ:"Agricultural labor standards",cultural:"Latino civil rights",reach:"United States",timeline:"Farm worker movement weaker"}},
  {id:"stowe",name:"Harriet Beecher Stowe",born:1811,died:1896,cat:"social",field:"Literature & Abolition",
    quote:"The bitterest tears shed over graves are for words left unsaid and deeds left undone.",
    contributions:["Uncle Tom's Cabin","Changed opinion on slavery","'Started this war'","Best-selling novel"],r:0.35,
    reasoning:"Abolitionists were publishing extensively. But Uncle Tom's Cabin sold 300,000 copies in its first year — an unprecedented phenomenon. It made slavery emotionally vivid for Northern readers who'd ignored the issue. Other novels might have had some impact; none would have been that novel, at that moment.",
    impact:{lives:"Abolition sentiment shift",econ:"Book as political weapon",cultural:"Fiction as activism",reach:"United States, Europe",timeline:"Abolition sentiment builds slower"}},

  // ── Institutions (12) ──
  {id:"un",name:"United Nations",born:1945,died:null,cat:"institutions",field:"International Governance",
    quote:"We the peoples of the United Nations determined to save succeeding generations from the scourge of war.",
    contributions:["Peacekeeping missions","Universal Declaration of Human Rights","Sustainable Development Goals","Forum for diplomacy"],r:0.55,
    reasoning:"The League of Nations had failed, but international cooperation was needed. The post-WWII powers would have created some forum. The UN's specific structure — Security Council vetoes, General Assembly — reflected 1945 power dynamics. A different organization would have emerged with different rules.",
    impact:{lives:"Peacekeeping: millions protected",econ:"International development: $50B+ annually",cultural:"Global cooperation model",reach:"193 member states",timeline:"League of Nations successor emerges differently"}},
  {id:"redcross",name:"Red Cross / Red Crescent",born:1863,died:null,cat:"institutions",field:"Humanitarian Aid",
    quote:"Inter arma caritas — In war, charity.",
    contributions:["Geneva Conventions","Disaster relief","Blood banks","War prisoner protection"],r:0.40,
    reasoning:"Henry Dunant founded the Red Cross after witnessing the Battle of Solferino. Humanitarian impulses existed, but institutionalizing them — the Geneva Conventions, neutral humanitarian space — was the specific achievement. Without Dunant, humanitarian law might have developed very differently or much later.",
    impact:{lives:"Billions aided since 1863",econ:"$3B+ annual humanitarian aid",cultural:"Neutral humanitarian symbol",reach:"192 national societies",timeline:"Humanitarian law develops slower"}},
  {id:"gatesfoundation",name:"Gates Foundation",born:2000,died:null,cat:"institutions",field:"Global Health & Development",
    quote:"All lives have equal value.",
    contributions:["Malaria/polio eradication efforts","Vaccine funding","Agricultural development","US education reform"],r:0.35,
    reasoning:"Billionaire philanthropy existed before Gates, but no one had deployed so much money so strategically on global health. The Foundation's focus — vaccines, malaria, polio — reflected Gates's systems thinking. Other billionaires had different priorities. This specific allocation wasn't inevitable.",
    impact:{lives:"122M children's lives saved (with partners)",econ:"$77B endowment deployed",cultural:"Billionaire philanthropy model",reach:"Global health systems",timeline:"Global health funding gap; slower progress on polio/malaria"}},
  {id:"worldbank",name:"World Bank",born:1944,died:null,cat:"institutions",field:"Development Finance",
    quote:"Our dream is a world free of poverty.",
    contributions:["Infrastructure financing","Poverty reduction programs","Development research","Climate finance"],r:0.60,
    reasoning:"Post-WWII reconstruction required institutional financing. The Bretton Woods conference created the World Bank alongside the IMF. Some development bank would have existed — the specific form, lending criteria, and ideology weren't predetermined, but the need was clear.",
    impact:{lives:"Billions affected by development projects",econ:"$100B+ annual commitments",cultural:"Development paradigm setter",reach:"189 member countries",timeline:"Regional development banks fill gap differently"}},
  {id:"who",name:"World Health Organization",born:1948,died:null,cat:"institutions",field:"Global Health",
    quote:"Health is a state of complete physical, mental and social well-being.",
    contributions:["Smallpox eradication","Disease surveillance","Health standards","Pandemic coordination"],r:0.50,
    reasoning:"International health coordination existed before WHO (PAHO since 1902). The UN system was creating specialized agencies. But WHO's specific achievement — smallpox eradication — required institutional capacity that might not have existed otherwise. Disease surveillance also needed a global coordinator.",
    impact:{lives:"Smallpox: 300M+ would have died",econ:"Global health standards",cultural:"Health as human right",reach:"194 member states",timeline:"Disease eradication slower; weaker pandemic response"}},
  {id:"nato",name:"NATO",born:1949,died:null,cat:"institutions",field:"Military Alliance",
    quote:"An attack against one is an attack against all.",
    contributions:["Collective defense","Cold War deterrence","Balkans intervention","Article 5 principle"],r:0.45,
    reasoning:"The Cold War was creating blocs regardless. Western Europe needed American security guarantees. But NATO's specific form — integrated command, Article 5, expansion after 1991 — wasn't inevitable. A different alliance structure might have meant different European security dynamics.",
    impact:{lives:"Cold War stability for 600M+ Europeans",econ:"Defense spending coordination",cultural:"Western alliance symbol",reach:"32 member nations",timeline:"European security fragmented; Cold War dynamics different"}},
  {id:"eu",name:"European Union",born:1993,died:null,cat:"institutions",field:"Political & Economic Union",
    quote:"United in diversity.",
    contributions:["Single market","Free movement","Euro currency","Peace in Europe"],r:0.40,
    reasoning:"European integration began with coal and steel, driven by the specific vision of Monnet and Schuman. The trajectory from ECSC to EU wasn't inevitable — it required political will at each stage. A different history might have stopped at free trade, without political union or the Euro.",
    impact:{lives:"Peace for 450M Europeans",econ:"$18T GDP bloc",cultural:"Post-war reconciliation model",reach:"27 member states",timeline:"European integration slower; nationalism stronger"}},
  {id:"imf",name:"International Monetary Fund",born:1944,died:null,cat:"institutions",field:"Financial Stability",
    quote:"Working together to foster global monetary cooperation.",
    contributions:["Currency stability","Balance of payments support","Economic surveillance","Crisis lending"],r:0.55,
    reasoning:"Bretton Woods was designed to prevent the competitive devaluations and protectionism that worsened the Depression. Some monetary coordination was needed. The IMF's specific form — conditionality, quotas, structural adjustment — was contested from the start. Different designers might have built differently.",
    impact:{lives:"Economic stability for billions",econ:"$1T lending capacity",cultural:"Controversial structural adjustment",reach:"190 member countries",timeline:"Financial crises more severe; regional alternatives emerge"}},
  {id:"wwf",name:"World Wildlife Fund",born:1961,died:null,cat:"institutions",field:"Conservation",
    quote:"For a living planet.",
    contributions:["Species conservation","Protected areas","Climate advocacy","Sustainable development"],r:0.45,
    reasoning:"Conservation organizations existed, but WWF's strategy — working with governments and corporations, celebrity endorsement, the panda logo — was distinctive. Environmental concern was growing regardless. WWF channeled it in specific directions that might have been different under different leadership.",
    impact:{lives:"Ecosystems for billions",econ:"$400M+ annual conservation",cultural:"Panda as conservation symbol",reach:"100+ countries",timeline:"Conservation movement weaker; more extinctions"}},
  {id:"amnesty",name:"Amnesty International",born:1961,died:null,cat:"institutions",field:"Human Rights",
    quote:"It is better to light a candle than curse the darkness.",
    contributions:["Prisoner of conscience campaigns","Death penalty opposition","Human rights documentation","Nobel Peace Prize 1977"],r:0.40,
    reasoning:"Human rights advocacy existed, but Amnesty's innovation was the letter-writing campaign — mobilizing ordinary people to pressure governments about specific prisoners. This model was replicable and powerful. Without Amnesty, human rights advocacy might have remained more elite and less grassroots.",
    impact:{lives:"Thousands of prisoners freed",econ:"Human rights as policy factor",cultural:"Letter-writing activism model",reach:"150+ countries",timeline:"Human rights documentation weaker"}},
  {id:"opec",name:"OPEC",born:1960,died:null,cat:"institutions",field:"Energy Economics",
    quote:"Coordination and unification of petroleum policies.",
    contributions:["Oil price coordination","1973 oil crisis","Producer solidarity","Energy geopolitics"],r:0.50,
    reasoning:"Oil-producing countries were being exploited by Western companies. Collective action was logical. Venezuela and Saudi Arabia led, but the impulse toward producer cartels was strong. Without OPEC specifically, a similar organization would likely have formed — though perhaps less effectively.",
    impact:{lives:"Global economy shaped",econ:"Controls 40% of oil production",cultural:"Resource nationalism",reach:"13 member countries",timeline:"Oil markets more volatile; different price history"}},
  {id:"wikipedia",name:"Wikipedia",born:2001,died:null,cat:"institutions",field:"Knowledge Sharing",
    quote:"The free encyclopedia that anyone can edit.",
    contributions:["Free knowledge access","Collaborative editing","Neutral point of view","59M+ articles"],r:0.35,
    reasoning:"The internet enabled collaborative knowledge-building. Nupedia tried an expert model and failed. Wales and Sanger's insight — let anyone edit — was specific and counterintuitive. Other encyclopedias (Citizendium, Knol) tried and failed. Wikipedia's success wasn't inevitable; it required getting the culture right.",
    impact:{lives:"Billions of readers",econ:"Disrupted encyclopedia industry",cultural:"Democratized knowledge",reach:"300+ language editions",timeline:"Proprietary encyclopedias dominate longer; knowledge less accessible"}},
];

// ─── DIFFICULTY SORTING ───
// Sort by how far from 50% (easier to judge extremes)
function getDifficulty(r) {
  return Math.abs(r - 0.5); // 0 = hardest (50%), 0.5 = easiest (0% or 100%)
}

function sortByDifficulty(figures, mode = "progressive") {
  return [...figures].sort((a, b) => {
    if (mode === "progressive") {
      return getDifficulty(b.r) - getDifficulty(a.r); // Easy first
    }
    return getDifficulty(a.r) - getDifficulty(b.r); // Hard first
  });
}

// ─── UTILITIES ───
function fy(y){return y===null?"present":y<0?`${Math.abs(y)} BCE`:`${y}`;}

function getReplaceabilityLabel(r){
  if(r>=0.70) return {label:"Highly Replaceable",desc:"Multiple alternatives existed. Someone else would have achieved this soon.",color:"#16a34a"};
  if(r>=0.50) return {label:"Somewhat Replaceable",desc:"Others were working toward similar goals. The timeline would shift, but not drastically.",color:"#ca8a04"};
  if(r>=0.30) return {label:"Mostly Irreplaceable",desc:"Few alternatives existed. Without them, this might have been delayed by decades.",color:"#ea580c"};
  return {label:"Completely Irreplaceable",desc:"No one else was close. History would be fundamentally different.",color:"#dc2626"};
}

function getInitials(name){
  const parts = name.split(' ');
  if(parts.length === 1) return name.substring(0,2).toUpperCase();
  return (parts[0][0] + parts[parts.length-1][0]).toUpperCase();
}

// ─── LOCAL STORAGE ───
function saveProgress(data) {
  try {
    localStorage.setItem('counterfactual_progress', JSON.stringify(data));
  } catch (e) { console.warn('Could not save progress'); }
}

function loadProgress() {
  try {
    const data = localStorage.getItem('counterfactual_progress');
    return data ? JSON.parse(data) : null;
  } catch (e) { return null; }
}

function clearProgress() {
  try {
    localStorage.removeItem('counterfactual_progress');
  } catch (e) {}
}

// ─── CHALLENGE MODE ───
function generateChallengeCode(figureIds) {
  // Simple encoding: join IDs with delimiter, base64 encode
  return btoa(figureIds.join('|'));
}

function parseChallengeCode(code) {
  try {
    const decoded = atob(code);
    return decoded.split('|');
  } catch (e) { return null; }
}

function getChallengeFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('challenge');
}

// ─── API CALLS ───
async function fetchAltHistory(fig){
  const res = await fetch("/api/claude", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1200,
      messages:[{role:"user",content:`You are a counterfactual historian analyzing ${fig.name} (${fig.field}, ${fy(fig.born)}–${fy(fig.died)}).

Contributions: ${fig.contributions.join("; ")}
Replaceability Score: ${Math.round(fig.r*100)}% (high = someone else would have done it; low = uniquely irreplaceable)

Return ONLY raw JSON, no markdown:
{"summary":"2-3 vivid sentences about the alternate world without them","keyChanges":[{"area":"Label","change":"2-3 sentences"},{"area":"Label","change":"..."},{"area":"Label","change":"..."}],"verdict":"2-3 punchy sentences summarizing their true replaceability","timeline":[{"year":YEAR,"real":"What happened","alt":"Alternate"},{"year":YEAR,"real":"...","alt":"..."},{"year":YEAR,"real":"...","alt":"..."},{"year":YEAR,"real":"...","alt":"..."}]}`}]})
  });
  const data = await res.json();
  const text = data.content?.map(c=>c.text||"").join("")||"";
  return JSON.parse(text.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim());
}

async function fetchCustomFigure(name){
  const res = await fetch("/api/claude", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1500,
      messages:[{role:"user",content:`Analyze historical figure or institution: "${name}"

Return ONLY raw JSON:
{"name":"Full name","born":YEAR_OR_NULL,"died":YEAR_OR_NULL,"field":"Primary field","category":"science|politics|military|arts|philosophy|medicine|computing|finance|exploration|social|institutions","contributions":["c1","c2","c3","c4"],"replaceability":0.XX,"reasoning":"2-3 sentences explaining why this replaceability score","quote":"A famous quote from them or about them","impact":{"lives":"Impact on lives","econ":"Economic impact","cultural":"Cultural legacy","reach":"Geographic reach","timeline":"Timeline effect"},"summary":"2-3 sentences about alternate world","keyChanges":[{"area":"Label","change":"2-3 sentences"},{"area":"...","change":"..."},{"area":"...","change":"..."}],"verdict":"2-3 sentences","timeline":[{"year":YEAR,"real":"Event","alt":"Alternate"},{"year":YEAR,"real":"...","alt":"..."},{"year":YEAR,"real":"...","alt":"..."},{"year":YEAR,"real":"...","alt":"..."}]}

Replaceability = how likely others would achieve the same (0.10=irreplaceable, 0.90=highly replaceable). Round to nearest 0.05. Negative years for BCE. Use null for "died" if still active.`}]})
  });
  const data = await res.json();
  const text = data.content?.map(c=>c.text||"").join("")||"";
  return JSON.parse(text.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim());
}

// ─── STYLES ───
const FL = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=DM+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap";

const S = {
  bg:"#faf8f5",bg2:"#f5f2ed",card:"#ffffff",border:"#e0dcd6",borderLight:"#ebe7e1",
  text:"#1a1714",textMid:"#3d3833",textDim:"#5c564e",textMuted:"#8a8279",
  accent:"#b45309",accentLight:"#fef3c7",accentDark:"#92400e",
  green:"#16a34a",red:"#dc2626",orange:"#ea580c",blue:"#2563eb",
  sf:"'Fraunces',Georgia,serif",bf:"'DM Sans',-apple-system,sans-serif",
};

// ─── COMPONENTS ───
function Avatar({name,cat,size=40}){
  const c = CATS[cat]||CATS.science;
  return(
    <div style={{width:size,height:size,borderRadius:"50%",background:`linear-gradient(135deg,${c.color}22,${c.color}44)`,
      border:`2px solid ${c.color}33`,display:"flex",alignItems:"center",justifyContent:"center",
      fontFamily:S.sf,fontSize:size*0.38,fontWeight:500,color:c.color,flexShrink:0}}>
      {getInitials(name)}
    </div>
  );
}

function ReplaceabilityMeter({value,animated,showLabel=true}){
  const [w,setW]=useState(0);
  useEffect(()=>{if(animated){const t=setTimeout(()=>setW(value*100),150);return()=>clearTimeout(t);}setW(value*100);},[value,animated]);
  const info = getReplaceabilityLabel(value);
  return(<div style={{width:"100%"}}>
    {showLabel && <div style={{fontSize:15,color:info.color,fontWeight:600,marginBottom:8,fontFamily:S.bf}}>{info.label}</div>}
    <div style={{display:"flex",justifyContent:"space-between",fontSize:12,color:S.textDim,marginBottom:6,fontFamily:S.bf,fontWeight:500}}>
      <span>Irreplaceable</span><span>Replaceable</span></div>
    <div style={{width:"100%",height:12,background:S.border,borderRadius:6,overflow:"hidden",position:"relative"}}>
      <div style={{width:`${w}%`,height:"100%",background:`linear-gradient(90deg,${S.red},${S.orange},${S.green})`,
        backgroundSize:"300% 100%",backgroundPosition:`${w}% 0`,borderRadius:6,transition:animated?"width 1s ease-out":"none"}}/></div>
    {showLabel && <div style={{fontSize:15,color:S.textMid,marginTop:10,lineHeight:1.6}}>{info.desc}</div>}
  </div>);
}

function Slider({value,onChange}){
  const info = getReplaceabilityLabel(value/100);
  return(<div style={{width:"100%",maxWidth:460,margin:"0 auto"}}>
    <div style={{display:"flex",justifyContent:"space-between",fontSize:13,color:S.textDim,marginBottom:10,fontFamily:S.bf,fontWeight:500}}>
      <span>0% — No one else could have</span><span>100% — Others would have</span></div>
    <input type="range" min="0" max="100" step="5" value={value} onChange={e=>onChange(+e.target.value)} 
      style={{width:"100%",accentColor:S.accent,cursor:"pointer",height:10}}/>
    <div style={{textAlign:"center",marginTop:18}}>
      <div style={{fontFamily:S.sf,fontSize:42,color:S.text,fontWeight:400}}>{value}<span style={{fontSize:22,color:S.textDim}}>%</span></div>
      <div style={{fontSize:16,color:info.color,marginTop:8,fontWeight:500}}>{info.label}</div>
    </div>
  </div>);
}

function Timeline({events}){
  if(!events?.length) return null;
  return(<div style={{position:"relative",padding:"8px 0"}}>
    <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:2,background:`linear-gradient(180deg,transparent,${S.accent}44,transparent)`,transform:"translateX(-50%)"}}/>
    {events.map((e,i)=>(<div key={i} style={{display:"flex",alignItems:"flex-start",marginBottom:20,position:"relative",
      opacity:0,animation:"fadeSlideIn 0.4s ease forwards",animationDelay:`${i*0.1}s`}}>
      <div style={{flex:1,textAlign:"right",paddingRight:18}}>
        <div style={{fontSize:15,fontFamily:S.sf,color:S.accent,fontWeight:500,marginBottom:3}}>{e.year<0?`${Math.abs(e.year)} BCE`:e.year}</div>
        <div style={{fontSize:16,fontFamily:S.bf,color:S.text,lineHeight:1.6}}>{e.real}</div></div>
      <div style={{width:14,height:14,borderRadius:"50%",background:S.accent,flexShrink:0,marginTop:4,zIndex:1,boxShadow:`0 0 0 4px ${S.bg}`}}/>
      <div style={{flex:1,paddingLeft:18}}>
        <div style={{fontSize:11,fontFamily:S.bf,color:S.textMuted,marginBottom:3,letterSpacing:"0.06em",textTransform:"uppercase",fontWeight:600}}>Alternate</div>
        <div style={{fontSize:16,fontFamily:S.bf,color:S.textMid,lineHeight:1.6,fontStyle:"italic"}}>{e.alt}</div></div></div>))}</div>);
}

function ImpactCard({impact}){
  if(!impact) return null;
  const items = [
    {icon:"👥",label:"Lives Affected",value:impact.lives},
    {icon:"💰",label:"Economic Impact",value:impact.econ},
    {icon:"🌍",label:"Geographic Reach",value:impact.reach},
    {icon:"🎭",label:"Cultural Legacy",value:impact.cultural},
    {icon:"⏳",label:"Timeline Effect",value:impact.timeline},
  ].filter(x=>x.value);
  return(
    <div style={{background:S.bg2,borderRadius:12,padding:20,marginBottom:16}}>
      <div style={{fontSize:12,fontFamily:S.bf,color:S.accent,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:14,fontWeight:600}}>
        Estimated Impact</div>
      <div style={{display:"grid",gap:14}}>
        {items.map((it,i)=>(
          <div key={i} style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <span style={{fontSize:20,lineHeight:1}}>{it.icon}</span>
            <div>
              <div style={{fontSize:13,color:S.textDim,fontFamily:S.bf,marginBottom:2,fontWeight:500}}>{it.label}</div>
              <div style={{fontSize:16,color:S.text,fontFamily:S.bf,lineHeight:1.5}}>{it.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShareButtons({text,label}){
  const url = "https://counterfactual.app";
  const fullText = text + "\n\nPlay at " + url;
  
  const share = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
    };
    window.open(urls[platform],'_blank','width=600,height=400');
  };
  
  const copy = () => {
    navigator.clipboard.writeText(fullText);
  };
  
  return(
    <div style={{marginTop:16}}>
      {label && <div style={{fontSize:13,color:S.textDim,marginBottom:10,textAlign:"center",fontWeight:500}}>{label}</div>}
      <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
        <button onClick={()=>share('twitter')} style={{display:"flex",alignItems:"center",gap:6,padding:"10px 16px",borderRadius:8,
          background:"#1da1f2",color:"#fff",border:"none",fontFamily:S.bf,fontSize:14,cursor:"pointer",fontWeight:500}}>
          𝕏 Share</button>
        <button onClick={()=>share('linkedin')} style={{display:"flex",alignItems:"center",gap:6,padding:"10px 16px",borderRadius:8,
          background:"#0077b5",color:"#fff",border:"none",fontFamily:S.bf,fontSize:14,cursor:"pointer",fontWeight:500}}>
          in Share</button>
        <button onClick={()=>share('facebook')} style={{display:"flex",alignItems:"center",gap:6,padding:"10px 16px",borderRadius:8,
          background:"#1877f2",color:"#fff",border:"none",fontFamily:S.bf,fontSize:14,cursor:"pointer",fontWeight:500}}>
          f Share</button>
        <button onClick={copy} style={{display:"flex",alignItems:"center",gap:6,padding:"10px 16px",borderRadius:8,
          background:S.border,color:S.text,border:"none",fontFamily:S.bf,fontSize:14,cursor:"pointer",fontWeight:500}}>
          📋 Copy</button>
      </div>
    </div>
  );
}

function ChallengeLink({scores}){
  const [copied, setCopied] = useState(false);
  const figureIds = scores.map(s => FIGURES.find(f => f.name === s.name)?.id).filter(Boolean).slice(0,5);
  const code = generateChallengeCode(figureIds);
  const url = `https://counterfactual.app?challenge=${code}`;
  
  const copy = () => {
    navigator.clipboard.writeText(`I challenge you to beat my Counterfactual score! Play the same 5 figures I did:\n\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  if (figureIds.length < 3) return null;
  
  return (
    <div style={{marginTop:20,padding:16,background:S.bg2,borderRadius:12,textAlign:"center"}}>
      <div style={{fontSize:13,color:S.accent,fontWeight:600,marginBottom:8}}>⚔️ Challenge a Friend</div>
      <p style={{fontSize:14,color:S.textMid,marginBottom:12}}>Send them your exact figures and compare scores</p>
      <button onClick={copy} style={{padding:"10px 20px",borderRadius:8,background:S.accent,color:"#fff",
        border:"none",fontFamily:S.bf,fontSize:14,cursor:"pointer",fontWeight:500}}>
        {copied ? "✓ Copied!" : "Copy Challenge Link"}
      </button>
    </div>
  );
}

function ReasoningPanel({reasoning, isOpen, onToggle}){
  if (!reasoning) return null;
  return (
    <div style={{marginTop:16}}>
      <button onClick={onToggle} style={{display:"flex",alignItems:"center",gap:8,padding:"10px 16px",
        borderRadius:8,background:"transparent",border:`1px solid ${S.border}`,color:S.textMid,
        fontFamily:S.bf,fontSize:14,cursor:"pointer",width:"100%",justifyContent:"center"}}>
        <span>{isOpen ? "▼" : "▶"}</span>
        <span>Why this score?</span>
      </button>
      {isOpen && (
        <div style={{marginTop:12,padding:16,background:S.bg2,borderRadius:10,
          fontSize:15,color:S.textMid,lineHeight:1.7,fontFamily:S.bf}}>
          {reasoning}
        </div>
      )}
    </div>
  );
}

function Loading({name}){
  const ms=["Erasing "+name+" from history...","Calculating alternate timelines...","Exploring what might have been...","Measuring historical ripples..."];
  const [i,si]=useState(0);
  useEffect(()=>{const t=setInterval(()=>si(j=>(j+1)%ms.length),2000);return()=>clearInterval(t);},[]);
  return(<div style={{textAlign:"center",padding:"60px 20px"}}>
    <div style={{width:40,height:40,border:`3px solid ${S.border}`,borderTop:`3px solid ${S.accent}`,borderRadius:"50%",margin:"0 auto 24px",animation:"spin 0.8s linear infinite"}}/>
    <div style={{fontFamily:S.sf,fontSize:20,color:S.textMid,fontStyle:"italic"}}>{ms[i]}</div></div>);
}

// ─── MAIN APP ───
export default function App(){
  useEffect(()=>{
    if(!document.querySelector('link[href*="Fraunces"]')){const l=document.createElement("link");l.rel="stylesheet";l.href=FL;document.head.appendChild(l);}
    const s=document.createElement("style");
    s.textContent=`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes fadeSlideIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
    input[type=range]{-webkit-appearance:none;appearance:none;background:${S.border};border-radius:6px;outline:none}
    input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:28px;height:28px;border-radius:50%;background:${S.accent};cursor:pointer;box-shadow:0 2px 8px rgba(180,83,9,0.3)}
    ::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:${S.border};border-radius:4px}
    *{box-sizing:border-box}`;
    document.head.appendChild(s);
  },[]);

  // Check for challenge mode on mount
  const [challengeMode, setChallengeMode] = useState(null);
  const [challengeFigures, setChallengeFigures] = useState([]);
  
  useEffect(() => {
    const code = getChallengeFromURL();
    if (code) {
      const ids = parseChallengeCode(code);
      if (ids && ids.length > 0) {
        const figures = ids.map(id => FIGURES.find(f => f.id === id)).filter(Boolean);
        if (figures.length > 0) {
          setChallengeMode(true);
          setChallengeFigures(figures);
        }
      }
    }
  }, []);

  // Load saved progress
  const [ph,setPh]=useState("menu");
  const [fig,setFig]=useState(null);
  const [pred,setPred]=useState(50);
  const [scores,setScores]=useState([]);
  const [played,setPlayed]=useState([]);
  const [alt,setAlt]=useState(null);
  const [loading,setLoading]=useState(false);
  const [err,setErr]=useState(null);
  const [fade,setFade]=useState(true);
  const [cf,setCf]=useState("all");
  const [q,setQ]=useState("");
  const [cn,setCn]=useState("");
  const [showReasoning, setShowReasoning] = useState(false);
  const cache=useRef({});

  // Load progress on mount
  useEffect(() => {
    const saved = loadProgress();
    if (saved && !challengeMode) {
      setScores(saved.scores || []);
      setPlayed(saved.played || []);
    }
  }, [challengeMode]);

  // Save progress on change
  useEffect(() => {
    if (scores.length > 0 || played.length > 0) {
      saveProgress({ scores, played });
    }
  }, [scores, played]);

  const go=cb=>{setFade(false);setTimeout(()=>{cb();setFade(true);},200);};
  
  const bp={background:`linear-gradient(135deg,${S.accent},${S.accentDark})`,color:"#fff",border:"none",borderRadius:10,
    padding:"14px 32px",fontFamily:S.bf,fontSize:17,fontWeight:600,cursor:"pointer",transition:"transform 0.15s,box-shadow 0.15s"};
  const bs={background:"transparent",color:S.accent,border:`2px solid ${S.accent}44`,borderRadius:10,
    padding:"12px 24px",fontFamily:S.bf,fontSize:15,fontWeight:500,cursor:"pointer",transition:"all 0.2s"};
  const cd={background:S.card,border:`1px solid ${S.border}`,borderRadius:14,padding:"22px 26px",marginBottom:14,
    boxShadow:"0 2px 4px rgba(0,0,0,0.04)"};
  const hv=e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow="0 6px 20px rgba(180,83,9,0.2)";};
  const hl=e=>{e.target.style.transform="";e.target.style.boxShadow="";};
  
  const wrap={minHeight:"100vh",fontFamily:S.bf,color:S.text,background:S.bg,padding:"24px 20px 70px",
    opacity:fade?1:0,transition:"opacity 0.2s"};

  const handleSelect=f=>{go(()=>{setFig(f);setPred(50);setAlt(null);setErr(null);setShowReasoning(false);setPh("predict");});};

  const handlePredict=async()=>{
    setLoading(true);setErr(null);
    try{
      let d;if(cache.current[fig.id])d=cache.current[fig.id];
      else{d=await fetchAltHistory(fig);cache.current[fig.id]=d;}
      const a=Math.round(fig.r*100),df=Math.abs(pred-a),pts=Math.max(0,Math.round(100-df*2));
      setScores(s=>[...s,{name:fig.name,prediction:pred,actual:a,points:pts,cat:fig.cat}]);
      if(!fig._custom)setPlayed(p=>[...p,fig.id]);
      setAlt(d);setLoading(false);go(()=>setPh("reveal"));
    }catch(e){console.error(e);setErr("Failed to generate. Check connection.");setLoading(false);}
  };

  const handleCustom=async()=>{
    if(!cn.trim())return;setLoading(true);setErr(null);
    try{
      const d=await fetchCustomFigure(cn.trim());
      const rnd = Math.round((d.replaceability||d.convergence||0.5)*20)/20;
      const f={id:"c_"+Date.now(),name:d.name,born:d.born,died:d.died,cat:d.category||"science",field:d.field,
        contributions:d.contributions,r:rnd,impact:d.impact,quote:d.quote,reasoning:d.reasoning,_custom:true};
      cache.current[f.id]={summary:d.summary,keyChanges:d.keyChanges,verdict:d.verdict,timeline:d.timeline};
      setFig(f);setPred(50);setAlt(null);setCn("");setLoading(false);go(()=>setPh("predict"));
    }catch(e){console.error(e);setErr("Couldn't analyze. Try another name.");setLoading(false);}
  };

  // Get next figure for challenge mode
  const getNextChallengeFigure = () => {
    if (!challengeMode) return null;
    const playedIds = new Set(played);
    return challengeFigures.find(f => !playedIds.has(f.id));
  };

  // Filter and sort figures
  const baseFigures = FIGURES.filter(f=>(cf==="all"||f.cat===cf)&&(!q||f.name.toLowerCase().includes(q.toLowerCase())||f.field.toLowerCase().includes(q.toLowerCase())));
  const fl = sortByDifficulty(baseFigures, "progressive");
  
  const cc={},cp={};Object.keys(CATS).forEach(k=>{cc[k]=0;cp[k]=0;});
  FIGURES.forEach(f=>{cc[f.cat]++;if(played.includes(f.id))cp[f.cat]++;});
  
  const rem = challengeMode 
    ? challengeFigures.filter(f => !played.includes(f.id)).length
    : FIGURES.filter(f=>!played.includes(f.id)).length;
  const tot=scores.reduce((s,r)=>s+r.points,0);
  const mx=scores.length*100;

  const getResultShareText = (figName, pred, actual, pts) => {
    const diff = Math.abs(pred - actual);
    let reaction = "";
    if (diff <= 10) reaction = "🎯 Nailed it!";
    else if (diff <= 25) reaction = "Pretty close!";
    else if (diff <= 40) reaction = "Not bad...";
    else reaction = "😅 Way off!";
    return `${reaction} I guessed ${figName} was ${pred}% replaceable. Actual: ${actual}%. (+${pts} points)\n\nCan you predict who history could have done without?`;
  };

  // ═══ MENU ═══
  if(ph==="menu") return(
    <div style={wrap}><div style={{maxWidth:600,margin:"0 auto",textAlign:"center",paddingTop:40}}>
      {challengeMode && (
        <div style={{background:S.accentLight,padding:"12px 20px",borderRadius:10,marginBottom:24}}>
          <div style={{fontSize:14,color:S.accent,fontWeight:600}}>⚔️ Challenge Mode</div>
          <div style={{fontSize:13,color:S.textMid,marginTop:4}}>Someone challenged you to beat their score on {challengeFigures.length} specific figures!</div>
        </div>
      )}
      
      <div style={{display:"inline-block",padding:"6px 16px",background:S.accentLight,borderRadius:20,fontSize:13,color:S.accent,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:20}}>
        A History Game</div>
      <h1 style={{fontFamily:S.sf,fontSize:56,fontWeight:400,lineHeight:1.1,margin:"0 0 12px",color:S.text}}>
        Counterfactual</h1>
      <p style={{fontSize:20,color:S.textMid,marginBottom:12}}>What if they never existed?</p>
      <div style={{width:60,height:3,background:S.accent,margin:"28px auto",borderRadius:2}}/>
      
      <p style={{fontSize:19,lineHeight:1.75,color:S.textMid,maxWidth:480,margin:"0 auto 24px"}}>
        Some achievements would have happened anyway — someone else was close behind. Others depended entirely on one person's unique vision.</p>
      <p style={{fontSize:19,lineHeight:1.75,color:S.textMid,maxWidth:480,margin:"0 auto 40px"}}>
        <strong style={{color:S.text}}>Your challenge:</strong> Predict how replaceable each historical figure really was.</p>
      
      <div style={{display:"flex",flexDirection:"column",gap:12,maxWidth:320,margin:"0 auto"}}>
        <button style={bp} onClick={()=>go(()=>setPh("select"))} onMouseEnter={hv} onMouseLeave={hl}>
          {challengeMode ? "Start Challenge" : "Play Now"}</button>
        
        {!challengeMode && (
          <button style={{...bs,display:"flex",alignItems:"center",justifyContent:"center",gap:8}} 
            onClick={()=>go(()=>setPh("custom"))}>
            <span>🔮</span> Analyze Any Figure
          </button>
        )}
      </div>
      
      {scores.length > 0 && !challengeMode && (
        <div style={{marginTop:32,padding:16,background:S.bg2,borderRadius:12}}>
          <div style={{fontSize:13,color:S.textDim,marginBottom:6}}>Your progress is saved</div>
          <div style={{fontSize:20,color:S.accent,fontWeight:600}}>{played.length} figures played · {tot} points</div>
          <button onClick={()=>{clearProgress();setScores([]);setPlayed([]);}} 
            style={{marginTop:10,fontSize:13,color:S.textDim,background:"none",border:"none",cursor:"pointer",textDecoration:"underline"}}>
            Reset progress
          </button>
        </div>
      )}
      
      <div style={{marginTop:44,display:"flex",justifyContent:"center",gap:28,flexWrap:"wrap"}}>
        {[["🎭","112 Figures"],["🏛️","12 Institutions"],["🔮","AI Analysis"],["⚔️","Challenge Friends"]].map(([e,t])=>(
          <div key={t} style={{fontSize:15,color:S.textDim,display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:18}}>{e}</span>{t}</div>))}
      </div>
    </div></div>);

  // ═══ CUSTOM ANALYSIS MODE ═══
  if(ph==="custom") return(
    <div style={wrap}><div style={{maxWidth:580,margin:"0 auto"}}>
      <button style={{...bs,marginBottom:20,fontSize:13,padding:"8px 14px"}} onClick={()=>go(()=>setPh("menu"))}>← Back</button>
      
      <div style={{textAlign:"center",marginBottom:28}}>
        <div style={{fontSize:48,marginBottom:12}}>🔮</div>
        <h2 style={{fontFamily:S.sf,fontSize:32,fontWeight:400,margin:"0 0 8px"}}>Analyze Any Figure</h2>
        <p style={{fontSize:17,color:S.textMid,lineHeight:1.6,maxWidth:440,margin:"0 auto"}}>
          Enter any historical figure or institution — real or fictional. The AI will estimate their replaceability and generate an alternate history.
        </p>
      </div>

      <div style={cd}>
        <div style={{marginBottom:16}}>
          <input value={cn} onChange={e=>setCn(e.target.value)} placeholder="e.g. Hypatia, UNICEF, Steve Jobs, Genghis Khan's mother..."
            onKeyDown={e=>e.key==="Enter"&&handleCustom()}
            style={{width:"100%",background:S.bg,border:`2px solid ${S.border}`,borderRadius:10,padding:"16px 18px",
              color:S.text,fontFamily:S.bf,fontSize:17,outline:"none"}}/>
        </div>
        <button style={{...bp,width:"100%"}} onClick={handleCustom} disabled={loading || !cn.trim()}>
          {loading?"Analyzing...":"Analyze Figure"}</button>
        {err&&<div style={{color:S.red,fontSize:15,marginTop:12,textAlign:"center"}}>{err}</div>}
      </div>
      
      <div style={{fontSize:14,color:S.textDim,textAlign:"center"}}>
        <p style={{marginBottom:8}}>Try people, organizations, or "what if" scenarios:</p>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center"}}>
          {["Cleopatra's son","DARPA","Nikita Khrushchev","The Library of Alexandria","Zhuge Liang"].map(ex=>(
            <button key={ex} onClick={()=>setCn(ex)} style={{padding:"6px 12px",borderRadius:6,background:S.bg2,
              border:"none",color:S.textMid,fontSize:13,cursor:"pointer"}}>{ex}</button>
          ))}
        </div>
      </div>
      
      {loading && <Loading name={cn}/>}
    </div></div>);

  // ═══ SELECT ═══
  if(ph==="select") {
    // In challenge mode, auto-select next figure
    if (challengeMode) {
      const next = getNextChallengeFigure();
      if (next && !fig) {
        setTimeout(() => handleSelect(next), 100);
        return <div style={wrap}><Loading name="challenge"/></div>;
      }
      if (!next && scores.length > 0) {
        setTimeout(() => go(() => setPh("score")), 100);
        return <div style={wrap}><Loading name="results"/></div>;
      }
    }
    
    return(
    <div style={wrap}><div style={{maxWidth:780,margin:"0 auto"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20,flexWrap:"wrap",gap:12}}>
        <div>
          <div style={{fontSize:12,fontWeight:600,color:S.accent,marginBottom:3}}>COUNTERFACTUAL</div>
          <h2 style={{fontFamily:S.sf,fontSize:30,fontWeight:400,margin:0}}>Choose a figure</h2>
          <p style={{fontSize:14,color:S.textDim,margin:"4px 0 0"}}>Sorted by difficulty — easier judgments first</p>
        </div>
        <div style={{display:"flex",gap:8"}}>
          {scores.length>0&&<button style={bs} onClick={()=>go(()=>setPh("score"))}>Scores ({scores.length})</button>}
          <button style={{...bs,display:"flex",alignItems:"center",gap:6}} onClick={()=>go(()=>setPh("custom"))}>
            🔮 Any Figure</button>
        </div>
      </div>

      <div style={{marginBottom:14}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name or field..."
          style={{width:"100%",background:S.card,border:`1px solid ${S.border}`,borderRadius:10,padding:"14px 18px",
            color:S.text,fontFamily:S.bf,fontSize:16,outline:"none"}}/>
      </div>

      <div style={{display:"flex",gap:8,marginBottom:18,overflowX:"auto",paddingBottom:6,flexWrap:"wrap"}}>
        <button onClick={()=>setCf("all")} style={{padding:"9px 18px",borderRadius:20,
          border:`1px solid ${cf==="all"?S.accent:S.border}`,background:cf==="all"?S.accentLight:S.card,
          color:cf==="all"?S.accent:S.textDim,fontFamily:S.bf,fontSize:14,fontWeight:500,cursor:"pointer"}}>
          All ({FIGURES.length})</button>
        {Object.keys(CATS).map(k=>{const c=CATS[k];return(
          <button key={k} onClick={()=>setCf(k)} style={{display:"inline-flex",alignItems:"center",gap:5,padding:"9px 16px",borderRadius:20,
            border:`1px solid ${cf===k?c.color+"66":S.border}`,background:cf===k?c.bg:S.card,
            color:cf===k?c.color:S.textDim,fontFamily:S.bf,fontSize:14,fontWeight:500,cursor:"pointer"}}>
            {c.label} <span style={{fontSize:12,opacity:0.7}}>{cp[k]}/{cc[k]}</span></button>);})}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(340px,1fr))",gap:12}}>
        {fl.map(f=>{const p=played.includes(f.id),c=CATS[f.cat];return(
          <button key={f.id} disabled={p} onClick={()=>handleSelect(f)} style={{
            ...cd,cursor:p?"default":"pointer",opacity:p?0.5:1,textAlign:"left",display:"flex",alignItems:"center",gap:14,
            padding:"18px 20px",transition:"all 0.2s",marginBottom:0}}
            onMouseEnter={e=>{if(!p){e.currentTarget.style.borderColor=c.color+"44";e.currentTarget.style.boxShadow="0 4px 12px rgba(0,0,0,0.06)";}}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=S.border;e.currentTarget.style.boxShadow="0 2px 4px rgba(0,0,0,0.04)";}}>
            <Avatar name={f.name} cat={f.cat} size={50}/>
            <div style={{flex:1,minWidth:0}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                <span style={{fontFamily:S.sf,fontSize:17,fontWeight:500,color:p?S.textDim:S.text}}>{f.name}</span>
                {p&&<span style={{fontSize:11,color:S.green,fontWeight:600}}>✓</span>}
              </div>
              <div style={{fontSize:15,color:S.textDim}}>{f.field} · {fy(f.born)}–{fy(f.died)}</div>
            </div>
          </button>);})}
      </div>
      {fl.length===0&&<div style={{textAlign:"center",padding:40,color:S.textDim,fontFamily:S.sf,fontSize:17}}>No matches found. Try the AI analysis.</div>}
    </div></div>);}

  // ═══ PREDICT ═══
  if(ph==="predict"&&fig){const c=CATS[fig.cat];return(
    <div style={wrap}><div style={{maxWidth:600,margin:"0 auto"}}>
      <button style={{...bs,marginBottom:20,fontSize:14,padding:"8px 16px"}} onClick={()=>go(()=>{setFig(null);setPh(challengeMode?"menu":"select");})}>← Back</button>
      
      <div style={{textAlign:"center",marginBottom:30}}>
        <Avatar name={fig.name} cat={fig.cat} size={80}/>
        <h2 style={{fontFamily:S.sf,fontSize:36,fontWeight:400,margin:"16px 0 8px"}}>{fig.name}</h2>
        <div style={{fontSize:17,color:S.textDim}}>{fig.field} · {fy(fig.born)}–{fy(fig.died)}</div>
        <div style={{marginTop:12}}><span style={{fontSize:13,padding:"6px 16px",borderRadius:12,background:c?.bg,color:c?.color,fontWeight:500}}>{c?.label}</span></div>
      </div>

      <div style={cd}>
        <div style={{fontSize:12,letterSpacing:"0.12em",color:S.accent,marginBottom:14,textTransform:"uppercase",fontWeight:600}}>Key Contributions</div>
        {fig.contributions.map((x,i)=>(<div key={i} style={{padding:"10px 0",borderBottom:i<fig.contributions.length-1?`1px solid ${S.borderLight}`:"none",
          fontSize:17,color:S.textMid,display:"flex",gap:14,lineHeight:1.6}}>
          <span style={{color:c?.color,fontSize:14,fontWeight:600,minWidth:22}}>{String(i+1).padStart(2,"0")}</span>{x}</div>))}
      </div>

      {fig.impact&&<ImpactCard impact={fig.impact}/>}

      <div style={{...cd,textAlign:"center",background:S.bg2,border:"none",padding:"32px 28px"}}>
        <div style={{fontSize:13,letterSpacing:"0.12em",color:S.accent,marginBottom:12,textTransform:"uppercase",fontWeight:600}}>Make Your Prediction</div>
        <p style={{fontSize:18,color:S.textMid,marginBottom:28,lineHeight:1.6,maxWidth:420,margin:"0 auto 28px"}}>
          If <strong style={{color:S.text}}>{fig.name}</strong> had never existed, how likely is it that someone else would have achieved the same things?</p>
        <Slider value={pred} onChange={setPred}/>
        {err&&<div style={{color:S.red,fontSize:15,marginTop:14}}>{err}</div>}
        <div style={{marginTop:32}}>
          <button style={bp} onClick={handlePredict} disabled={loading} onMouseEnter={hv} onMouseLeave={hl}>
            {loading?"Analyzing...":"Lock In Prediction"}</button>
        </div>
      </div>
      {loading&&<Loading name={fig.name}/>}
    </div></div>);}

  // ═══ REVEAL ═══
  if(ph==="reveal"&&fig&&alt){
    const a=Math.round(fig.r*100),df=Math.abs(pred-a),pts=Math.max(0,Math.round(100-df*2)),ls=scores[scores.length-1],c=CATS[fig.cat];
    const shareText = getResultShareText(fig.name, pred, a, pts);
    
    const nextFig = challengeMode ? getNextChallengeFigure() : null;
    const challengeComplete = challengeMode && !nextFig;
    
    return(
    <div style={wrap}><div style={{maxWidth:680,margin:"0 auto"}}>
      <div style={{textAlign:"center",marginBottom:26}}>
        <Avatar name={fig.name} cat={fig.cat} size={60}/>
        <h2 style={{fontFamily:S.sf,fontSize:30,fontWeight:400,margin:"14px 0 8px"}}>A World Without {fig.name}</h2>
        <span style={{fontSize:13,padding:"5px 14px",borderRadius:10,background:c?.bg,color:c?.color,fontWeight:500}}>{c?.label}</span>
      </div>

      <div style={{...cd,display:"flex",justifyContent:"space-around",textAlign:"center",padding:"24px 16px"}}>
        {[{l:"Your Guess",v:`${pred}%`,c:S.text},{l:"Actual",v:`${a}%`,c:S.accent},{l:"Points",v:ls?.points??pts,c:pts>70?S.green:pts>40?S.orange:S.red}].map((x,i)=>(
          <div key={i} style={{flex:1,borderLeft:i?`1px solid ${S.border}`:"none",paddingLeft:i?14:0}}>
            <div style={{fontSize:13,color:S.textDim,marginBottom:5,letterSpacing:"0.08em",textTransform:"uppercase",fontWeight:500}}>{x.l}</div>
            <div style={{fontSize:36,color:x.c,fontFamily:S.sf,fontWeight:400}}>{x.v}</div></div>))}
      </div>

      <div style={{...cd,background:S.bg2,border:"none"}}>
        <div style={{fontSize:12,letterSpacing:"0.1em",color:S.accent,marginBottom:14,textTransform:"uppercase",fontWeight:600}}>Replaceability Score</div>
        <ReplaceabilityMeter value={fig.r} animated={true}/>
        <ReasoningPanel reasoning={fig.reasoning} isOpen={showReasoning} onToggle={()=>setShowReasoning(!showReasoning)} />
      </div>

      {/* Quote moved to reveal — "What the world would lose" */}
      {fig.quote && (
        <div style={{...cd,textAlign:"center",padding:"24px 30px",borderLeft:`4px solid ${S.accent}`}}>
          <div style={{fontSize:11,color:S.accent,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:10,fontWeight:600}}>What the World Would Lose</div>
          <p style={{fontSize:19,fontStyle:"italic",color:S.text,margin:0,lineHeight:1.7,fontFamily:S.sf}}>"{fig.quote}"</p>
        </div>
      )}

      <div style={cd}><p style={{fontSize:18,lineHeight:1.8,color:S.textMid,margin:0}}>{alt.summary}</p></div>

      {/* Show all ripple effects at once */}
      <div style={{fontSize:12,letterSpacing:"0.12em",color:S.accent,marginBottom:14,marginTop:24,textTransform:"uppercase",fontWeight:600}}>Ripple Effects</div>
      {alt.keyChanges?.map((kc,i)=>(<div key={i} style={{...cd,opacity:0,animation:"fadeSlideIn 0.4s ease forwards",animationDelay:`${i*0.15}s`}}>
        <div style={{fontSize:14,color:c?.color,fontWeight:600,marginBottom:6}}>{kc.area}</div>
        <p style={{fontSize:17,lineHeight:1.65,color:S.textMid,margin:0}}>{kc.change}</p></div>))}

      {alt.timeline?.length>0&&(<div style={{marginTop:20}}>
        <div style={{fontSize:12,letterSpacing:"0.12em",color:S.accent,marginBottom:12,textTransform:"uppercase",fontWeight:600,display:"flex",justifyContent:"center",gap:28}}>
          <span>What Happened</span><span style={{color:S.textMuted}}>↔</span><span>Alternate Timeline</span></div>
        <div style={{...cd,padding:"20px 16px"}}><Timeline events={alt.timeline}/></div>
      </div>)}

      <div style={{...cd,marginTop:24,background:S.accentLight,borderColor:`${S.accent}22`}}>
        <div style={{fontSize:12,letterSpacing:"0.12em",color:S.accent,marginBottom:12,textTransform:"uppercase",fontWeight:600}}>The Verdict</div>
        <p style={{fontSize:19,lineHeight:1.8,color:S.text,margin:0,fontStyle:"italic",fontFamily:S.sf}}>{alt.verdict}</p>
      </div>
      
      <ShareButtons text={shareText} label="Share this result" />
      
      <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:30,flexWrap:"wrap"}}>
        <button style={bp} onClick={()=>go(()=>{setFig(null);setAlt(null);setShowReasoning(false);
          if(challengeComplete || rem<=1){setPh("score");}
          else if(challengeMode){const nf=getNextChallengeFigure();if(nf)handleSelect(nf);else setPh("score");}
          else{setPh("select");}})} onMouseEnter={hv} onMouseLeave={hl}>
          {challengeComplete ? "See Challenge Results" : rem>1 ? "Next Figure" : "See Final Score"}</button>
        {scores.length>=2&&!challengeMode&&<button style={bs} onClick={()=>go(()=>setPh("score"))}>All Scores</button>}
      </div>
    </div></div>);}

  // ═══ SCORE ═══
  if(ph==="score"){
    const pct=mx?Math.round(tot/mx*100):0;
    let rk="Novice Historian";
    if(pct>=85)rk="Master Counterfactualist";else if(pct>=70)rk="Timeline Expert";
    else if(pct>=55)rk="Alternate Historian";else if(pct>=40)rk="Armchair Theorist";else if(pct>=25)rk="History Student";
    const finalShareText = `I scored ${tot}/${mx} (${pct}%) on Counterfactual!\n\nRank: ${rk}\n\nCan you predict who history could have done without?`;
    return(
    <div style={wrap}><div style={{maxWidth:600,margin:"0 auto",textAlign:"center"}}>
      <div style={{fontSize:13,fontWeight:600,color:S.accent,marginBottom:6}}>COUNTERFACTUAL</div>
      
      {challengeMode && (
        <div style={{background:S.accentLight,padding:"12px 20px",borderRadius:10,marginBottom:20}}>
          <div style={{fontSize:14,color:S.accent,fontWeight:600}}>⚔️ Challenge Complete!</div>
          <div style={{fontSize:13,color:S.textMid,marginTop:4}}>Share your score and see if your friend can beat it</div>
        </div>
      )}
      
      <div style={{fontSize:12,letterSpacing:"0.15em",color:S.textDim,marginBottom:16,textTransform:"uppercase"}}>{rem===0||challengeMode?"Game Complete":"Progress Report"}</div>
      <h2 style={{fontFamily:S.sf,fontSize:36,fontWeight:400,margin:"0 0 10px"}}>{rk}</h2>
      <div style={{fontSize:56,fontFamily:S.sf,color:S.accent,fontWeight:400,margin:"16px 0"}}>{tot}<span style={{fontSize:24,color:S.textDim}}> / {mx}</span></div>
      <div style={{fontSize:18,color:S.textMid}}>{scores.length} figure{scores.length!==1?"s":""} analyzed · {pct}% accuracy</div>
      
      <ShareButtons text={finalShareText} label="Share your score" />
      
      {!challengeMode && <ChallengeLink scores={scores} />}
      
      <div style={{width:60,height:2,background:S.accent,margin:"28px auto",borderRadius:2}}/>

      {scores.map((s,i)=>{const c=CATS[s.cat];return(
        <div key={i} style={{...cd,display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"left",padding:"16px 20px"}}>
          <div style={{display:"flex",alignItems:"center",gap:14,flex:1}}>
            <Avatar name={s.name} cat={s.cat} size={44}/>
            <div>
              <div style={{fontFamily:S.sf,fontSize:17,fontWeight:500,color:S.text}}>{s.name}</div>
              <div style={{fontSize:14,color:S.textDim}}>Guessed {s.prediction}% · Actual {s.actual}%</div>
            </div>
          </div>
          <div style={{fontSize:28,fontFamily:S.sf,fontWeight:400,minWidth:44,textAlign:"right",
            color:s.points>70?S.green:s.points>40?S.orange:S.red}}>{s.points}</div>
        </div>);})}

      <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:30,flexWrap:"wrap"}}>
        {(rem>0 && !challengeMode) && <button style={bp} onClick={()=>go(()=>setPh("select"))} onMouseEnter={hv} onMouseLeave={hl}>Continue ({rem} left)</button>}
        <button style={bs} onClick={()=>{
          clearProgress();
          setScores([]);
          setPlayed([]);
          setChallengeMode(null);
          setChallengeFigures([]);
          // Clear URL params
          window.history.replaceState({}, '', window.location.pathname);
          go(()=>setPh("menu"));
        }}>Start Over</button>
      </div>
    </div></div>);}

  if(loading) return <div style={wrap}><Loading name={fig?.name||cn||"figure"}/></div>;
  return null;
}