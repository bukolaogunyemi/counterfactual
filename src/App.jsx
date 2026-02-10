import { useState, useEffect, useRef } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────
const CATS = {
  science:{label:"Science & Tech",color:"#2563eb",bg:"rgba(37,99,235,0.08)"},
  politics:{label:"Politics",color:"#dc2626",bg:"rgba(220,38,38,0.06)"},
  military:{label:"Military",color:"#475569",bg:"rgba(71,85,105,0.08)"},
  arts:{label:"Arts & Culture",color:"#9333ea",bg:"rgba(147,51,234,0.06)"},
  philosophy:{label:"Philosophy & Religion",color:"#0d9488",bg:"rgba(13,148,136,0.06)"},
  medicine:{label:"Medicine",color:"#16a34a",bg:"rgba(22,163,74,0.06)"},
  computing:{label:"Math & Computing",color:"#7c3aed",bg:"rgba(124,58,237,0.06)"},
  finance:{label:"Finance & Economics",color:"#ca8a04",bg:"rgba(202,138,4,0.06)"},
  exploration:{label:"Exploration",color:"#ea580c",bg:"rgba(234,88,12,0.06)"},
  social:{label:"Social Movements",color:"#db2777",bg:"rgba(219,39,119,0.06)"},
  institutions:{label:"Institutions",color:"#0891b2",bg:"rgba(8,145,178,0.06)"},
  inventions:{label:"Inventions",color:"#059669",bg:"rgba(5,150,105,0.06)"},
};

// ─────────────────────────────────────────────────────────────────────────────
// INEVITABILITY SCALE
// 0-19%: Singular — history needed exactly this person/thing
// 20-49%: Low Inevitability — hard to see who else pulls it off  
// 50-79%: Moderate Inevitability — others converging on similar ideas
// 80-100%: High Inevitability — this was happening regardless
// ─────────────────────────────────────────────────────────────────────────────
const getLabel = (r) => {
  if (r < 0.20) return { label: "Singular", color: "#dc2626" };
  if (r < 0.50) return { label: "Low Inevitability", color: "#ea580c" };
  if (r < 0.80) return { label: "Moderate Inevitability", color: "#ca8a04" };
  return { label: "High Inevitability", color: "#16a34a" };
};

// ─────────────────────────────────────────────────────────────────────────────
// FIGURES DATABASE - 200+ Historical Figures
// ─────────────────────────────────────────────────────────────────────────────
const FIGURES = [
  // SCIENCE & TECHNOLOGY
  {id:"einstein",name:"Albert Einstein",born:1879,died:1955,cat:"science",field:"Theoretical Physics",
    quote:"Imagination is more important than knowledge.",
    contributions:["Special & General Relativity","Photoelectric effect explanation","E=mc² mass-energy equivalence","Brownian motion proof of atoms"],
    r:0.25,reasoning:"Special relativity was in the air — Lorentz and Poincaré had the mathematics. But General Relativity was a singular conceptual leap. No one else was approaching gravity as curved spacetime. Hilbert came close in 1915 but followed Einstein's physical insights. Without Einstein, general relativity might have taken 20-50 years to emerge.",
    counterfactual:"Without Einstein, special relativity would have emerged within a few years via Lorentz and Poincaré. But general relativity — the revolutionary insight that gravity is curved spacetime — had no comparable parallel. Physicists would have continued with Newtonian gravity modified by ad-hoc corrections. GPS satellites wouldn't work properly, gravitational wave detection would be unimaginable, and our understanding of black holes and the universe's expansion might still be incomplete.",
    ripples:[
      {category:"Physics Revolution",detail:"Special relativity emerges via Lorentz/Poincaré around 1908-1910, but general relativity remains undiscovered until perhaps the 1940s-1960s when experimental anomalies force a rethink."},
      {category:"Nuclear Age",detail:"E=mc² eventually derived from special relativity by others, but the specific path to nuclear weapons might be delayed, potentially changing WWII's end and Cold War dynamics."},
      {category:"Modern Technology",detail:"GPS requires relativistic corrections to work. Without general relativity, satellite navigation systems would have systematic errors, forcing workarounds that might delay or limit the technology."},
      {category:"Cosmology",detail:"The expanding universe, Big Bang theory, and black holes all rely on general relativity. Our understanding of the cosmos would be fundamentally different and more limited."}
    ],
    timeline:[
      {year:1905,happened:"Einstein publishes special relativity and photoelectric effect",alternate:"Lorentz continues refining transformations, photoelectric effect explained by 1910"},
      {year:1915,happened:"General relativity published, revolutionizing gravity",alternate:"Mercury's orbital anomaly remains unexplained; Hilbert publishes field equations without physical interpretation"},
      {year:1919,happened:"Eclipse confirms light bending, Einstein becomes world-famous",alternate:"Eddington expedition still happens, but results interpreted as Newtonian anomaly"},
      {year:1939,happened:"Einstein letter to FDR initiates Manhattan Project",alternate:"Szilard finds another prominent scientist; nuclear program proceeds slightly differently"}
    ],
    impact:{lives:"Nuclear energy/weapons affecting millions",econ:"GPS ($300B industry) requires relativistic corrections",cultural:"Redefined 'genius' in popular imagination",reach:"Global scientific framework",timeline:"General relativity delayed 20-50 years"}},
  {id:"newton",name:"Isaac Newton",born:1643,died:1727,cat:"science",field:"Physics & Mathematics",
    quote:"If I have seen further, it is by standing on the shoulders of giants.",
    contributions:["Laws of motion and universal gravitation","Calculus (developed simultaneously with Leibniz)","Optics and light spectrum analysis","Principia Mathematica"],
    r:0.30,reasoning:"Leibniz independently developed calculus. Hooke had ideas about gravity. But Newton's synthesis — unifying terrestrial and celestial mechanics into one mathematical framework — was decades ahead. The Principia's rigor and scope had no parallel.",
    counterfactual:"Without Newton, calculus would have arrived via Leibniz (and his notation is what we use today anyway). But the grand synthesis of the Principia — explaining planetary motion, tides, comets, and falling apples with one mathematical law — might have taken another generation. The Scientific Revolution would have proceeded more slowly, and the Enlightenment's faith in rational order might have developed differently.",
    ripples:[
      {category:"Mathematical Foundation",detail:"Leibniz's calculus eventually dominates, but without Newton's physical applications, the tool remains more abstract. Applied mathematics develops more slowly."},
      {category:"Physics Progress",detail:"Gravity remains mysterious until someone synthesizes Kepler's laws with terrestrial mechanics. Possibly delayed until Euler or Lagrange, 50-100 years later."},
      {category:"Engineering Revolution",detail:"The Industrial Revolution's mechanical engineering relies on Newtonian mechanics. Without this foundation, steam engines and machines develop more empirically, with slower optimization."},
      {category:"Scientific Method",detail:"The Principia was a model of how science should work — mathematical, predictive, comprehensive. Without this exemplar, the scientific method might have developed differently."}
    ],
    timeline:[
      {year:1666,happened:"Newton discovers calculus and gravity (annus mirabilis)",alternate:"Leibniz develops calculus by 1675, but gravity remains separate phenomena"},
      {year:1687,happened:"Principia published, unifying physics",alternate:"Gravity theories proliferate without synthesis; Hooke's inverse square law tested but not generalized"},
      {year:1704,happened:"Opticks published, wave theory debated",alternate:"Huygens' wave theory dominates earlier; particle-wave debate delayed"},
      {year:1727,happened:"Newton dies as most famous scientist ever",alternate:"Leibniz remembered as calculus inventor; physics awaits its Newton"}
    ],
    impact:{lives:"Foundation for all engineering",econ:"Enabled Industrial Revolution",cultural:"Defined scientific method for 300 years",reach:"Universal",timeline:"Physics delayed 20-40 years"}},
  {id:"darwin",name:"Charles Darwin",born:1809,died:1882,cat:"science",field:"Natural History",
    quote:"It is not the strongest of the species that survives, but the one most responsive to change.",
    contributions:["Theory of evolution by natural selection","On the Origin of Species","Sexual selection theory","Biogeographical evidence"],
    r:0.80,reasoning:"Alfred Russel Wallace independently conceived natural selection and forced Darwin to publish. Both drew on Malthus. The idea was ripe. Without Darwin, Wallace's 1858 paper would have launched the revolution — we'd call it Wallaceism instead.",
    counterfactual:"Without Darwin, Alfred Russel Wallace would have published natural selection theory in 1858, and we'd call it 'Wallaceism.' The scientific content would be nearly identical, though Wallace's version gave more weight to environmental selection and less to sexual selection. The religious controversy would have been similar, though Wallace's spiritualist beliefs might have made the science-religion debate messier. Evolution was an idea whose time had come.",
    ripples:[
      {category:"Scientific Theory",detail:"Wallace publishes natural selection in 1858. The scientific content is 95% identical, though Wallace emphasizes environmental adaptation over sexual selection."},
      {category:"Religious Debate",detail:"The creation-evolution controversy happens similarly, though Wallace's later spiritualism and belief in human exceptionalism might have created a different cultural dynamic."},
      {category:"Genetics Integration",detail:"The modern synthesis merging genetics with evolution happens similarly in the 1930s-40s, perhaps called 'Neo-Wallaceism' instead."},
      {category:"Cultural Impact",detail:"'Wallaceism' becomes the term, but popular understanding of evolution would be essentially the same. Social Darwinism might be called 'Social Wallaceism.'"}
    ],
    timeline:[
      {year:1858,happened:"Darwin and Wallace jointly present natural selection",alternate:"Wallace presents alone to Linnean Society; Darwin's 20 years of notes remain unpublished"},
      {year:1859,happened:"On the Origin of Species published",alternate:"Wallace publishes 'The Origin of Species by Natural Selection' — similar content, different author"},
      {year:1871,happened:"Darwin publishes The Descent of Man",alternate:"Wallace's version focuses less on sexual selection, more on environmental adaptation"},
      {year:1882,happened:"Darwin dies as most celebrated naturalist",alternate:"Wallace remembered as evolution's discoverer; Darwin a footnote"}
    ],
    impact:{lives:"Modern medicine and genetics foundation",econ:"Biotech industry: $600B+",cultural:"Transformed human self-understanding",reach:"Global biology",timeline:"Evolution theory arrives within 1-2 years via Wallace"}},
  {id:"curie",name:"Marie Curie",born:1867,died:1934,cat:"science",field:"Physics & Chemistry",
    quote:"Nothing in life is to be feared, it is only to be understood.",
    contributions:["Discovered polonium and radium","Pioneered radioactivity research","First woman to win Nobel Prize","Mobile X-ray units in WWI"],
    r:0.55,reasoning:"Becquerel discovered radioactivity in 1896. Multiple labs were investigating. The Curies' systematic isolation of radium was exceptional work, but the elements were there to be found. Her greater irreplaceable impact was social — proving women could lead frontier science.",
    counterfactual:"Without Marie Curie, radioactivity would have been discovered by others like Becquerel and Rutherford, but likely 5-10 years later and with less systematic rigor. The medical applications of radium would have emerged more slowly, and women's entry into scientific leadership would have been significantly delayed, potentially by decades.",
    ripples:[
      {category:"Scientific Discovery",detail:"Radium and polonium discovered by German or British researchers around 1905-1910, with less precise isolation techniques and slower understanding of radioactive properties."},
      {category:"Medical Applications",detail:"Cancer treatments using radioactive elements delayed by 10-15 years, and mobile X-ray units during WWI either non-existent or far more primitive, costing thousands more lives."},
      {category:"Women in Science",detail:"The barrier-breaking example of a female Nobel laureate absent, leading to even greater exclusion of women from advanced scientific research and academic positions well into the mid-20th century."},
      {category:"Nuclear Physics Foundation",detail:"The fundamental understanding of atomic structure and radioactive decay processes develops more slowly, potentially delaying the nuclear age by several years."}
    ],
    timeline:[
      {year:1898,happened:"Marie Curie discovers radium and polonium",alternate:"Becquerel continues studying uranium rays alone, makes slower progress on new elements"},
      {year:1903,happened:"Marie Curie wins Nobel Prize in Physics",alternate:"Nobel Prize goes to Becquerel and Pierre Curie only, no recognition for women in physics"},
      {year:1911,happened:"Marie Curie wins Nobel Prize in Chemistry",alternate:"Radium finally isolated by German research team, Curie remains unknown"},
      {year:1914,happened:"Curie develops mobile X-ray units for WWI",alternate:"Military medical corps relies on stationary equipment, higher casualty rates from delayed treatment"}
    ],
    impact:{lives:"Cancer treatment saves millions",econ:"Nuclear medicine: $45B industry",cultural:"Opened science to women globally",reach:"Medical systems worldwide",timeline:"Radioactivity research delayed 3-5 years"}},
  {id:"tesla",name:"Nikola Tesla",born:1856,died:1943,cat:"science",field:"Electrical Engineering",
    quote:"The present is theirs; the future, for which I really worked, is mine.",
    contributions:["AC power system and induction motor","Rotating magnetic field","Radio technology foundations","Wireless power concepts"],
    r:0.60,reasoning:"Westinghouse and others were developing AC systems. Ferraris independently invented the induction motor. The AC vs DC battle would have been won by AC regardless — the physics favored it. Tesla accelerated adoption by 5-10 years.",
    counterfactual:"Without Tesla, AC power would still have won the 'War of Currents' — the physics of long-distance transmission made it inevitable. Ferraris had independently invented the induction motor in Italy. Westinghouse's engineers were capable. Tesla accelerated AC adoption and added elegance to the systems, but the electrical age was coming regardless. His biggest irreplaceable impact might be cultural — the 'mad genius inventor' archetype he embodied.",
    ripples:[
      {category:"AC Power Systems",detail:"Ferraris's induction motor designs adopted instead; Westinghouse engineers develop polyphase systems by 1895. AC wins the current war, just 5-10 years later."},
      {category:"Radio Technology",detail:"Marconi's radio work proceeds without Tesla's contributions. The patent disputes never happen; Marconi is unambiguously credited with radio invention."},
      {category:"Cultural Impact",detail:"No Tesla coils, no 'mad scientist' archetype based on him. Edison remains the dominant inventor figure. Geek culture looks different without Tesla worship."},
      {category:"Wireless Power",detail:"Tesla's wireless transmission dreams remain unexplored until much later. Modern wireless charging develops without his conceptual precedent."}
    ],
    timeline:[
      {year:1888,happened:"Tesla patents AC induction motor",alternate:"Ferraris's Italian patents become primary; Westinghouse licenses from Europe"},
      {year:1893,happened:"Tesla demonstrates AC at World's Fair",alternate:"Westinghouse demonstrates Ferraris-based system; less dramatic but functional"},
      {year:1899,happened:"Colorado Springs experiments",alternate:"No dramatic lightning experiments; wireless power concepts emerge later"},
      {year:1943,happened:"Supreme Court rules Tesla invented radio",alternate:"Marconi's radio patents remain unchallenged; Tesla dies obscure"}
    ],
    impact:{lives:"Electrification reaching 8B people",econ:"$5T+ global electrical industry",cultural:"'Mad scientist' archetype",reach:"Every electrified nation",timeline:"AC adoption delayed 5-10 years"}},
  {id:"galileo",name:"Galileo Galilei",born:1564,died:1642,cat:"science",field:"Astronomy & Physics",
    quote:"And yet it moves.",
    contributions:["Telescopic astronomical observations","Support for Copernican heliocentrism","Laws of falling bodies","Scientific method advocacy"],
    r:0.55,reasoning:"Others were building telescopes — Harriot observed the Moon before Galileo published. Kepler was already Copernican. Galileo's unique contribution was confrontational style and popular writing. The observations would have been made; the fight might have been different.",
    counterfactual:"Without Galileo, the Copernican revolution proceeds more quietly. Kepler's mathematical astronomy convinces specialists. Thomas Harriot in England makes similar telescopic observations but doesn't publish controversially. The Church-science conflict might have been less dramatic, or might have found another flashpoint. The scientific revolution still happens, but its mythology is different.",
    ripples:[
      {category:"Astronomical Observation",detail:"Harriot and others make similar telescopic discoveries. The moons of Jupiter are found, but perhaps by Dutch or English astronomers. Published in Latin for specialists, not Italian for popular audiences."},
      {category:"Church-Science Relations",detail:"Without the Galileo affair, the Church-science narrative is less dramatic. Bruno's burning remains the main martyrdom story. Catholic science continues longer without the chilling effect."},
      {category:"Scientific Method",detail:"The 'experimental philosophy' develops through Bacon and others. Galileo's specific contributions to methodology are absorbed by the broader movement."},
      {category:"Physics Development",detail:"Laws of falling bodies discovered by others; the specific experiments at Pisa (likely apocryphal anyway) never become legend. Newton still synthesizes mechanics."}
    ],
    timeline:[
      {year:1609,happened:"Galileo builds telescope, observes Moon",alternate:"Harriot publishes detailed lunar maps; Dutch astronomers follow"},
      {year:1610,happened:"Galileo discovers Jupiter's moons",alternate:"Simon Marius (who also observed them) gets priority"},
      {year:1632,happened:"Dialogue published, Church confrontation",alternate:"No dramatic trial; Copernican ideas spread through academic channels"},
      {year:1642,happened:"Galileo dies under house arrest",alternate:"No martyrdom narrative; science-religion conflict less mythologized"}
    ],
    impact:{lives:"Foundation of modern astronomy",econ:"Space industry origins",cultural:"Church-science conflict archetype",reach:"Western scientific tradition",timeline:"Heliocentrism acceptance delayed 10-20 years"}},
  {id:"faraday",name:"Michael Faraday",born:1791,died:1867,cat:"science",field:"Electromagnetism",
    quote:"Nothing is too wonderful to be true if it be consistent with the laws of nature.",
    contributions:["Electromagnetic induction","Electric motor principles","Faraday cage","Electrochemistry foundations"],
    r:0.45,reasoning:"Henry discovered induction independently in America. Ørsted had shown electricity and magnetism were related. But Faraday's intuitive genius — thinking in fields rather than forces — was unique. His concepts shaped Maxwell's mathematics.",
    counterfactual:"Without Faraday, Joseph Henry in America discovers electromagnetic induction independently (as he actually did, just slightly later). But Faraday's conceptual innovation — thinking in terms of 'lines of force' and fields rather than action at a distance — was harder to replace. Maxwell might have struggled without Faraday's physical intuitions to mathematize. The field concept in physics could have developed decades later.",
    ripples:[
      {category:"Electromagnetic Induction",detail:"Henry gets priority for induction discovery. American physics gets an earlier boost. Practical generators and motors still emerge by 1840s."},
      {category:"Field Theory",detail:"Without Faraday's 'lines of force,' Maxwell has less to mathematize. Field theory emerges later, possibly through different physical intuitions. Relativity is affected."},
      {category:"Electrochemistry",detail:"Laws of electrolysis discovered by others. The terminology would be different — perhaps no 'ion,' 'electrode,' 'anode,' 'cathode.'"},
      {category:"Science Communication",detail:"Faraday's Christmas Lectures and public demonstrations set a template. Without them, science popularization develops differently."}
    ],
    timeline:[
      {year:1821,happened:"Faraday demonstrates electromagnetic rotation",alternate:"Ampère or others discover it; motor concept emerges in France"},
      {year:1831,happened:"Faraday discovers electromagnetic induction",alternate:"Henry publishes first; America claims the discovery"},
      {year:1845,happened:"Faraday discovers diamagnetism, magneto-optic effect",alternate:"These effects found later; connection between light and magnetism delayed"},
      {year:1855,happened:"Faraday's field concepts inspire young Maxwell",alternate:"Maxwell works from Ampère's mathematics instead; field theory delayed"}
    ],
    impact:{lives:"All electric motors and generators",econ:"Electrical power industry",cultural:"Self-taught genius narrative",reach:"Global electrification",timeline:"Electromagnetic applications delayed 10 years"}},
  {id:"hawking",name:"Stephen Hawking",born:1942,died:2018,cat:"science",field:"Theoretical Physics",
    quote:"Intelligence is the ability to adapt to change.",
    contributions:["Hawking radiation from black holes","Singularity theorems (with Penrose)","A Brief History of Time","Black hole information paradox"],
    r:0.50,reasoning:"Penrose was developing singularity theorems independently. But Hawking radiation — combining quantum mechanics with general relativity at black hole horizons — was his unique insight. His science popularization was even more singular.",
    counterfactual:"Without Hawking, singularity theorems would still emerge via Penrose. But Hawking radiation — the insight that black holes emit thermal radiation and eventually evaporate — might have waited decades. More uniquely, science popularization would have lacked its most recognizable face. 'A Brief History of Time' brought cosmology to millions who would never have encountered it otherwise.",
    ripples:[
      {category:"Theoretical Physics",detail:"Singularity theorems credited to Penrose alone. Hawking radiation discovered later, perhaps in the 1990s or 2000s, by someone working on quantum gravity."},
      {category:"Black Hole Physics",detail:"The information paradox emerges later. Without Hawking's specific formulation, quantum gravity research takes different paths."},
      {category:"Science Popularization",detail:"'A Brief History of Time' never written. Cosmology remains more obscure to general public. Carl Sagan remains the primary science popularizer of the era."},
      {category:"Disability Representation",detail:"The most visible example of intellectual achievement despite severe disability doesn't exist. Advocacy and inspiration for disabled people is diminished."}
    ],
    timeline:[
      {year:1970,happened:"Hawking-Penrose singularity theorems",alternate:"Penrose publishes singularity theorems; receives sole credit"},
      {year:1974,happened:"Hawking radiation proposed",alternate:"Black holes remain strictly black; thermal emission discovered much later"},
      {year:1988,happened:"A Brief History of Time published",alternate:"No bestselling cosmology book; physics remains less accessible to public"},
      {year:2014,happened:"The Theory of Everything film released",alternate:"No iconic biographical film; no cultural icon of physics overcoming disability"}
    ],
    impact:{lives:"Scientific literacy for millions",econ:"Popular science publishing boom",cultural:"Disability representation in science",reach:"Global physics education",timeline:"Hawking radiation discovered later by others"}},
  {id:"feynman",name:"Richard Feynman",born:1918,died:1988,cat:"science",field:"Theoretical Physics",
    quote:"The first principle is that you must not fool yourself — and you are the easiest person to fool.",
    contributions:["Quantum electrodynamics","Feynman diagrams","Path integral formulation","Manhattan Project work"],
    r:0.45,reasoning:"Schwinger and Tomonaga independently developed QED renormalization. But Feynman diagrams — a visual calculus for particle interactions — were uniquely his. They transformed how physicists think and calculate.",
    counterfactual:"Without Feynman, QED renormalization still happens via Schwinger and Tomonaga — they shared the Nobel Prize for independently solving the same problem. But Feynman diagrams never exist. Physicists use Schwinger's more algebraic methods. Particle physics calculations become more cumbersome. The intuitive, visual way of thinking about quantum interactions is lost. Physics education is more abstract and less accessible.",
    ripples:[
      {category:"Quantum Electrodynamics",detail:"Schwinger and Tomonaga get full credit for QED renormalization. Their algebraic methods dominate. Same physics, harder calculations."},
      {category:"Physics Visualization",detail:"No Feynman diagrams means particle physics is more opaque. Graduate education is harder. Fewer people can intuitively grasp quantum interactions."},
      {category:"Path Integrals",detail:"Path integral formulation might emerge later through other routes, but Feynman's specific insight accelerated quantum field theory development."},
      {category:"Science Communication",detail:"No 'Surely You're Joking' books, no Challenger investigation testimony. The archetype of the playful, irreverent genius physicist doesn't exist in the same way."}
    ],
    timeline:[
      {year:1948,happened:"Feynman develops QED renormalization",alternate:"Schwinger and Tomonaga credited; algebraic methods dominate"},
      {year:1949,happened:"Feynman diagrams published",alternate:"Visual particle physics calculations never invented; field remains more abstract"},
      {year:1965,happened:"Nobel Prize shared for QED",alternate:"Schwinger and Tomonaga share prize; Feynman remains less famous"},
      {year:1986,happened:"Challenger disaster investigation",alternate:"No iconic 'O-ring in ice water' demonstration; investigation less memorable"}
    ],
    impact:{lives:"Particle physics enabling technologies",econ:"Particle accelerator science",cultural:"Physics communication transformed",reach:"Global physics education",timeline:"QED arrives anyway; diagrams delayed"}},
  {id:"maxwell",name:"James Clerk Maxwell",born:1831,died:1879,cat:"science",field:"Physics",
    quote:"The special theory of relativity owes its origins to Maxwell's equations.",
    contributions:["Maxwell's equations unifying electromagnetism","Electromagnetic theory of light","Statistical mechanics foundations","Color photography"],
    r:0.30,reasoning:"Faraday had the physical intuitions. But Maxwell's mathematical synthesis — showing light was electromagnetic waves — was a unique creative leap. No one else was close to unifying electricity, magnetism, and optics.",
    counterfactual:"Without Maxwell, Faraday's field intuitions remain physical pictures without mathematical expression. The unification of electricity, magnetism, and light — recognizing they're all electromagnetic phenomena — doesn't happen until much later. Radio waves aren't predicted theoretically before being discovered accidentally. Einstein's path to special relativity is completely different. The entire edifice of classical field theory is delayed by decades.",
    ripples:[
      {category:"Electromagnetic Unification",detail:"Electricity, magnetism, and light remain separate phenomena until someone else achieves the synthesis — perhaps Helmholtz, Hertz, or Lorentz, but likely 20-40 years later."},
      {category:"Radio Technology",detail:"Hertz doesn't look for electromagnetic waves because Maxwell didn't predict them. Radio discovered accidentally, perhaps much later, without theoretical framework."},
      {category:"Special Relativity",detail:"Einstein's 1905 paper was motivated by asymmetries in Maxwell's equations. Without Maxwell, the path to relativity is completely different and likely much delayed."},
      {category:"Statistical Mechanics",detail:"Maxwell-Boltzmann distribution developed differently. Boltzmann alone develops statistical mechanics, but Maxwell's specific contributions to gas theory are missing."}
    ],
    timeline:[
      {year:1865,happened:"Maxwell publishes unified electromagnetic theory",alternate:"Faraday's field concepts remain qualitative; unification awaits"},
      {year:1873,happened:"Treatise on Electricity and Magnetism",alternate:"No comprehensive electromagnetic theory; physics remains fragmented"},
      {year:1887,happened:"Hertz confirms Maxwell's electromagnetic waves",alternate:"Electromagnetic waves discovered accidentally, much later, without prediction"},
      {year:1905,happened:"Einstein uses Maxwell's equations for relativity",alternate:"Special relativity emerges through different path, possibly decades later"}
    ],
    impact:{lives:"Radio, TV, phones: billions connected",econ:"Telecommunications: $2T+ industry",cultural:"Unified electricity and magnetism",reach:"All wireless technology",timeline:"Electromagnetism understanding delayed 15-25 years"}},
  {id:"bohr",name:"Niels Bohr",born:1885,died:1962,cat:"science",field:"Quantum Physics",
    quote:"Prediction is very difficult, especially about the future.",
    contributions:["Bohr model of the atom","Copenhagen interpretation","Nuclear fission understanding","Complementarity principle"],
    r:0.50,reasoning:"Rutherford's atomic model needed fixing. Bohr's specific solution was one approach. Eventually wave mechanics superseded it. Bohr's institutional role leading Copenhagen discussions may have been more irreplaceable than his physics.",
    counterfactual:"Without Bohr, atomic physics still needs to explain atomic spectra. Sommerfeld or others extend Rutherford's model differently. Wave mechanics (Schrödinger) and matrix mechanics (Heisenberg) still emerge in the 1920s, but without the Copenhagen interpretation dominating. Quantum mechanics might develop with different philosophical foundations — perhaps more realist, less 'shut up and calculate.'",
    ripples:[
      {category:"Atomic Model",detail:"Sommerfeld or others patch Rutherford's model. The specific quantization rules differ. Hydrogen spectrum still explained, but history credits someone else."},
      {category:"Copenhagen Interpretation",detail:"Without Bohr's institute and personality, no dominant 'Copenhagen' interpretation. Quantum mechanics develops with more diverse philosophical approaches."},
      {category:"Nuclear Physics",detail:"Bohr's liquid-drop model of nuclear fission developed by others. The Manhattan Project proceeds similarly, but theoretical understanding comes from different sources."},
      {category:"Physics Training",detail:"The Copenhagen institute doesn't exist. Heisenberg, Pauli, and others train elsewhere. The social structure of 20th-century physics is different."}
    ],
    timeline:[
      {year:1913,happened:"Bohr model of hydrogen atom",alternate:"Sommerfeld or others develop quantized atomic models; Bohr remains unknown"},
      {year:1920,happened:"Copenhagen becomes physics center",alternate:"Göttingen or Cambridge dominates; no 'Copenhagen interpretation'"},
      {year:1927,happened:"Como lecture establishes Copenhagen interpretation",alternate:"Quantum mechanics develops with multiple competing interpretations, no orthodoxy"},
      {year:1939,happened:"Bohr explains nuclear fission mechanism",alternate:"Fission explained by others; Manhattan Project proceeds similarly"}
    ],
    impact:{lives:"Nuclear physics applications",econ:"Nuclear power industry",cultural:"Quantum interpretation debates",reach:"Global physics",timeline:"Atomic theory develops differently"}},
  {id:"planck",name:"Max Planck",born:1858,died:1947,cat:"science",field:"Theoretical Physics",
    quote:"Science cannot solve the ultimate mystery of nature because we ourselves are part of the mystery.",
    contributions:["Quantum theory origination","Planck constant discovery","Black-body radiation solution","Energy quantization"],
    r:0.45,reasoning:"The black-body radiation problem was recognized by many. Planck's desperation move — quantizing energy — was not immediately embraced, even by him. But someone had to make the leap. The ultraviolet catastrophe forced some solution.",
    counterfactual:"Without Planck, the ultraviolet catastrophe still exists — classical physics can't explain black-body radiation. Someone else makes the desperate move of quantizing energy, perhaps Rayleigh, Jeans, or Wien working forward from their approximations. The quantum revolution happens anyway, but starts differently. Planck's specific constant and formula might be discovered 5-15 years later, and the 'quantum' concept might have a different name and history.",
    ripples:[
      {category:"Quantum Theory Origins",detail:"Black-body problem solved by others, perhaps by 1910. Quantization introduced with different justification. Einstein's photoelectric paper still catalyzes quantum thinking."},
      {category:"Physical Constants",detail:"The fundamental quantum of action discovered by others, perhaps with different numerical approach. 'Planck units' named for someone else."},
      {category:"German Physics Leadership",detail:"Without Planck's institutional role in Berlin, German physics develops differently. The Kaiser Wilhelm Institute and later Max Planck Institute have different history."},
      {category:"Philosophy of Physics",detail:"Planck's conservative approach to quantum mechanics absent. More radical interpretations might dominate earlier."}
    ],
    timeline:[
      {year:1900,happened:"Planck introduces energy quantization",alternate:"Ultraviolet catastrophe persists until ~1905-1910; someone else proposes quantization"},
      {year:1905,happened:"Einstein uses Planck's ideas for photoelectric effect",alternate:"Photoelectric explanation still emerges but references different quantum origin"},
      {year:1918,happened:"Planck wins Nobel Prize",alternate:"Nobel for quantum origins goes to someone else"},
      {year:1930,happened:"Planck leads German physics establishment",alternate:"Different institutional leadership; German physics still prominent but organized differently"}
    ],
    impact:{lives:"All quantum technology",econ:"Electronics, computing",cultural:"Revolution in physics worldview",reach:"Global technology",timeline:"Quantum theory delayed 5-15 years"}},
  {id:"rutherford",name:"Ernest Rutherford",born:1871,died:1937,cat:"science",field:"Nuclear Physics",
    quote:"All science is either physics or stamp collecting.",
    contributions:["Nuclear model of the atom","Alpha particle discovery","First artificial nuclear transmutation","Proton discovery"],
    r:0.50,reasoning:"Radioactivity research was active in multiple labs. The gold foil experiment's interpretation required Rutherford's insight, but the phenomenon would have been observed. His institutional role — training Chadwick, Bohr — may have been as important.",
    counterfactual:"Without Rutherford, alpha particle scattering still produces surprising results, but the interpretation — that atoms have a tiny, dense nucleus — might take longer to emerge. The 'solar system' model of atoms comes from someone else, perhaps later. More importantly, Rutherford's Cavendish Laboratory trained an entire generation of nuclear physicists. Without his mentorship, Chadwick, Cockcroft, Walton, and others develop differently.",
    ripples:[
      {category:"Atomic Structure",detail:"Gold foil experiment performed by others; large-angle scattering observed but perhaps interpreted differently. Nuclear model of atom emerges 5-10 years later."},
      {category:"Nuclear Transmutation",detail:"Artificial transmutation of elements discovered by others in the 1920s. 'Splitting the atom' still happens but credited to different researchers."},
      {category:"Physics Training",detail:"Cavendish Laboratory led by someone else. The specific network of British nuclear physicists that emerged from Rutherford's mentorship doesn't exist."},
      {category:"Manhattan Project",detail:"Nuclear physics still advances sufficiently for atomic weapons, but the British contribution and specific personnel differ."}
    ],
    timeline:[
      {year:1909,happened:"Gold foil experiment reveals nuclear atom",alternate:"Scattering experiments done elsewhere; nuclear model emerges later"},
      {year:1917,happened:"First artificial nuclear transmutation",alternate:"Transmutation discovered by others; 'splitting the atom' credited differently"},
      {year:1919,happened:"Rutherford leads Cavendish Laboratory",alternate:"Different Cavendish director; British physics develops along different lines"},
      {year:1932,happened:"Chadwick discovers neutron (Rutherford's protégé)",alternate:"Neutron discovered by others; perhaps German or French researchers"}
    ],
    impact:{lives:"Nuclear physics applications",econ:"Nuclear industry",cultural:"Atom as miniature solar system image",reach:"Global physics",timeline:"Atomic structure understood somewhat later"}},
  {id:"edison",name:"Thomas Edison",born:1847,died:1931,cat:"science",field:"Invention & Industry",
    quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
    contributions:["Practical incandescent light bulb","Phonograph","Motion picture camera","Industrial research laboratory"],
    r:0.70,reasoning:"Swan developed light bulbs in England simultaneously. The phonograph had multiple near-inventors. Edison's real innovation was the industrial research lab — systematic invention. But he was fast and prolific, not unique.",
    counterfactual:"Without Edison, Joseph Swan's light bulb (developed simultaneously in England) illuminates the world instead. The phonograph emerges from one of several competing approaches — Charles Cros had similar ideas. Motion pictures develop through Lumière and others. The more interesting counterfactual is the industrial research lab: Edison's Menlo Park created the model of systematic, team-based invention. Without it, innovation might remain more individual and haphazard for longer.",
    ripples:[
      {category:"Electric Lighting",detail:"Swan's incandescent bulb dominates. The 'Edison socket' is the 'Swan socket.' Practical lighting still arrives in the 1880s."},
      {category:"Sound Recording",detail:"Phonograph emerges from Charles Cros or others. The specific technology might differ — perhaps different groove patterns or materials."},
      {category:"Motion Pictures",detail:"Lumière brothers and others develop cinema without Edison's contributions. Hollywood might look different without Edison's patents and litigation."},
      {category:"Industrial Research",detail:"The team-based, systematic approach to invention develops later or differently. Corporate R&D labs might emerge more slowly."}
    ],
    timeline:[
      {year:1877,happened:"Edison invents phonograph",alternate:"Charles Cros or others develop sound recording; different format emerges"},
      {year:1879,happened:"Edison demonstrates practical light bulb",alternate:"Swan's bulb demonstrated same year gets credit; 'Swan Electric' dominates"},
      {year:1889,happened:"Kinetoscope motion picture viewer",alternate:"Lumière and others develop motion pictures without Edison's input"},
      {year:1900,happened:"Edison's lab model spreads to corporations",alternate:"Industrial research develops more slowly; innovation remains individual"}
    ],
    impact:{lives:"Entertainment reaching billions",econ:"$100B+ industries created",cultural:"Inventor-entrepreneur archetype",reach:"Global media/lighting",timeline:"Most inventions arrive 2-5 years later"}},
  {id:"copernicus",name:"Nicolaus Copernicus",born:1473,died:1543,cat:"science",field:"Astronomy",
    quote:"To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge.",
    contributions:["Heliocentric model revival","De revolutionibus orbium coelestium","Challenged Ptolemaic geocentrism"],
    r:0.55,reasoning:"Aristarchus proposed heliocentrism in ancient Greece. Ptolemy's problems were recognized. Copernicus's model wasn't even more accurate initially. His contribution was making heliocentrism mathematically respectable again.",
    counterfactual:"Without Copernicus, heliocentrism still returns — the Ptolemaic system's problems (epicycles upon epicycles) were becoming untenable. Perhaps a student of Regiomontanus develops the idea, or it emerges from Islamic astronomical traditions. Tycho Brahe still makes his observations, Kepler still needs to explain them. The Copernican Revolution happens, just credited to someone else and perhaps 20-50 years later.",
    ripples:[
      {category:"Astronomical Theory",detail:"Heliocentrism revived by others, perhaps by 1570. Tycho's hybrid system might dominate longer. Kepler still eventually derives correct laws."},
      {category:"Scientific Revolution",detail:"The 'Copernican Revolution' has a different name and perhaps different timing. The challenge to Aristotelian cosmology comes from someone else."},
      {category:"Religious Conflict",detail:"The Church-astronomy conflict still emerges but centered on different figures. Bruno still burned, but for heliocentrism learned from different source."},
      {category:"Philosophy of Science",detail:"The 'Copernican revolution' as metaphor doesn't exist. Kant uses different language for his philosophical transformation."}
    ],
    timeline:[
      {year:1543,happened:"De revolutionibus published on Copernicus's deathbed",alternate:"Heliocentric theory doesn't emerge until 1560s-1580s from other astronomers"},
      {year:1570,happened:"Copernican system gains adherents",alternate:"Different heliocentric model circulates among astronomers"},
      {year:1600,happened:"Bruno burned partly for Copernican beliefs",alternate:"Bruno still burned for heliocentrism but learned from different source"},
      {year:1610,happened:"Galileo uses telescope to support Copernican system",alternate:"Galileo supports whoever proposed heliocentrism; same observations, different attribution"}
    ],
    impact:{lives:"Changed humanity's cosmic self-image",econ:"Navigation improvements",cultural:"Scientific Revolution catalyst",reach:"Global astronomy",timeline:"Heliocentric revival delayed 20-50 years"}},
  {id:"mendeleev",name:"Dmitri Mendeleev",born:1834,died:1907,cat:"science",field:"Chemistry",
    quote:"I saw in a dream a table where all elements fell into place as required.",
    contributions:["Periodic table of elements","Predicted undiscovered elements","Periodicity law","Chemical systematization"],
    r:0.80,reasoning:"Lothar Meyer developed a nearly identical table independently at the same time. Newlands had proposed the law of octaves. The periodic table was an idea whose time had come.",
    counterfactual:"Without Mendeleev, we'd study the 'Meyer Periodic Table.' Lothar Meyer in Germany published a virtually identical arrangement in 1869-1870. John Newlands had already proposed periodicity in 1865. The predictive power of leaving gaps for undiscovered elements might have been realized slightly later, but the periodic organization of elements was inevitable once atomic weights were well-established. We'd call it 'Meyer's Law' instead.",
    ripples:[
      {category:"Chemical Organization",detail:"Meyer's table published 1870 becomes the standard. Periodic table named for Meyer. Chemistry textbooks look nearly identical."},
      {category:"Element Prediction",detail:"Meyer might not have boldly predicted undiscovered elements as Mendeleev did. Gallium and germanium discovered without prior prediction, but still fit the table."},
      {category:"Russian Science",detail:"Russia loses its most famous scientist. Mendeleev's institutional contributions to Russian chemistry don't happen."},
      {category:"Chemistry Education",detail:"Students learn Meyer's table. The concept is identical; only the name and national pride differ."}
    ],
    timeline:[
      {year:1869,happened:"Mendeleev publishes periodic table",alternate:"Meyer publishes virtually identical table same year, gets credit"},
      {year:1871,happened:"Mendeleev predicts gallium, germanium, scandium",alternate:"Elements discovered without prediction; periodic patterns noted after the fact"},
      {year:1875,happened:"Gallium discovered, confirming Mendeleev's prediction",alternate:"Gallium discovered and fits Meyer's table; prediction not emphasized"},
      {year:1906,happened:"Mendeleev narrowly loses Nobel Prize",alternate:"Meyer would likely have died (1895) before Nobel began; periodic table might never get Nobel"}
    ],
    impact:{lives:"All modern chemistry",econ:"Chemical industry: $5T+",cultural:"Ordering nature's building blocks",reach:"Universal chemistry education",timeline:"Periodic table arrives via Meyer within 1-2 years"}},
  {id:"lavoisier",name:"Antoine Lavoisier",born:1743,died:1794,cat:"science",field:"Chemistry",
    quote:"Nothing is lost, nothing is created, everything is transformed.",
    contributions:["Oxygen theory of combustion","Disproved phlogiston theory","Law of conservation of mass","Chemical nomenclature"],
    r:0.55,reasoning:"Priestley and Scheele discovered oxygen independently. The phlogiston theory was crumbling. Lavoisier's systematic approach established the new chemistry, but the revolution was coming.",
    counterfactual:"Without Lavoisier, oxygen is still discovered by Priestley and Scheele, who both isolated it independently. But the theoretical framework — understanding combustion as combination with oxygen rather than release of phlogiston — takes longer to emerge. Lavoisier's systematic approach, including quantitative methods and new nomenclature, established chemistry as an exact science. Without him, chemistry remains more alchemical for another generation.",
    ripples:[
      {category:"Combustion Theory",detail:"Priestley's 'dephlogisticated air' remains the terminology longer. The oxygen theory of combustion emerges gradually from German or British chemists."},
      {category:"Chemical Nomenclature",detail:"The systematic naming of chemicals — oxygen, hydrogen, etc. — develops differently. Perhaps German terms dominate instead of French."},
      {category:"Quantitative Chemistry",detail:"Conservation of mass in chemical reactions established later. The analytical balance approach to chemistry develops more slowly."},
      {category:"French Science",detail:"The Paris Academy loses its leading figure during the Revolution. French chemistry's dominance in the 19th century might be reduced."}
    ],
    timeline:[
      {year:1777,happened:"Lavoisier names oxygen, explains combustion",alternate:"Priestley's phlogiston-based explanation persists; oxygen theory emerges later"},
      {year:1787,happened:"Chemical nomenclature system published",alternate:"Chemical naming remains chaotic; systematic nomenclature delayed 20+ years"},
      {year:1789,happened:"Elementary Treatise on Chemistry published",alternate:"No foundational chemistry textbook; field remains fragmented"},
      {year:1794,happened:"Lavoisier guillotined in French Revolution",alternate:"Without him, French chemistry survives Revolution intact; different trajectory"}
    ],
    impact:{lives:"Modern chemistry foundation",econ:"Chemical industry",cultural:"Chemistry as exact science",reach:"Global",timeline:"Chemical revolution delayed 10-15 years"}},
  {id:"kepler",name:"Johannes Kepler",born:1571,died:1630,cat:"science",field:"Astronomy",
    quote:"I much prefer the sharpest criticism of a single intelligent man to the thoughtless approval of the masses.",
    contributions:["Three laws of planetary motion","Elliptical orbits discovery","Astronomical calculations"],
    r:0.35,reasoning:"Brahe's data existed; someone needed to analyze it. But Kepler's willingness to abandon circular orbits — sacred since the Greeks — was unusual. His persistence through thousands of failed calculations showed unique dedication.",
    counterfactual:"Without Kepler, Tycho Brahe's precise observations of Mars still exist, awaiting explanation. But who would have the obsessive dedication to test hundreds of orbital models, finally abandoning the sacred circle for the ellipse? Kepler's laws might have waited decades for someone equally persistent and iconoclastic. Newton would have had to derive planetary motion from observations directly, or someone else would need to find the elliptical pattern first.",
    ripples:[
      {category:"Orbital Mechanics",detail:"Elliptical orbits discovered later, perhaps by 1650-1680, by someone analyzing Brahe's data. Ptolemaic epicycles might persist longer."},
      {category:"Newtonian Physics",detail:"Newton's Principia relies on Kepler's laws. Without them, Newton must derive planetary motion from scratch or wait for someone else to find the pattern."},
      {category:"Scientific Persistence",detail:"The archetype of the scientist grinding through failed hypotheses until finding truth is less clear without Kepler's example."},
      {category:"Celestial Harmony",detail:"Kepler's mystical search for cosmic harmony — finding mathematical beauty in planetary orbits — influences science differently."}
    ],
    timeline:[
      {year:1601,happened:"Kepler inherits Brahe's observational data",alternate:"Brahe's data passes to different astronomer; analysis proceeds differently"},
      {year:1609,happened:"Laws of elliptical orbits published",alternate:"Elliptical orbits not discovered until 1640s-1660s by someone else"},
      {year:1619,happened:"Third law relating orbital periods and distances",alternate:"Planetary period-distance relationship found later, possibly by Newton himself"},
      {year:1687,happened:"Newton uses Kepler's laws in Principia",alternate:"Newton must derive orbital mechanics from raw data; Principia delayed or different"}
    ],
    impact:{lives:"Foundation for Newtonian mechanics",econ:"Space navigation",cultural:"Laws of nature concept",reach:"Global astronomy",timeline:"Planetary motion laws delayed 20-40 years"}},
  {id:"pasteur",name:"Louis Pasteur",born:1822,died:1895,cat:"science",field:"Microbiology",
    quote:"In the fields of observation, chance favors only the prepared mind.",
    contributions:["Germ theory of disease","Pasteurization process","Rabies vaccine","Disproved spontaneous generation"],
    r:0.55,reasoning:"Koch was doing parallel work in Germany. The microscope was revealing bacteria to multiple researchers. Pasteur's specific contributions were important but the field was active. Germ theory was emerging from collective work.",
    counterfactual:"Without Pasteur, Robert Koch in Germany still develops germ theory and establishes bacteriology. The microscope was revealing bacteria to multiple researchers across Europe. Pasteurization might have a different name (perhaps 'Kochization'), and French contributions to microbiology would be reduced. The Franco-German rivalry in bacteriology tilts decisively toward Germany. Koch might have won two Nobel Prizes instead of one.",
    ripples:[
      {category:"Germ Theory",detail:"Koch gets full credit for germ theory of disease. German bacteriology dominates. Anthrax and tuberculosis discoveries still happen on similar timeline."},
      {category:"Food Safety",detail:"Heat treatment of milk and beverages discovered by others, perhaps slightly later. Named for someone else — 'Kochization' or 'tyndallization.'"},
      {category:"Vaccination",detail:"Rabies vaccine developed later, perhaps by Koch's students. Vaccine development continues but with different timeline."},
      {category:"French Science",detail:"France loses its most famous scientist. The Pasteur Institute doesn't exist or has different founder. French microbiology is diminished."}
    ],
    timeline:[
      {year:1857,happened:"Pasteur disproves spontaneous generation",alternate:"Others disprove it; spontaneous generation debate continues slightly longer"},
      {year:1862,happened:"Pasteurization process developed",alternate:"Heat sterilization developed by Tyndall or Koch; different name"},
      {year:1881,happened:"Anthrax vaccine demonstrated",alternate:"Koch develops similar vaccines; German methods dominate"},
      {year:1885,happened:"Rabies vaccine successfully tested",alternate:"Rabies vaccine delayed 5-10 years; developed elsewhere"}
    ],
    impact:{lives:"Billions via food safety",econ:"Food industry transformation",cultural:"Science-based medicine",reach:"Global food/medicine",timeline:"Germ theory delayed 10-15 years"}},
  {id:"ibnhaytham",name:"Ibn al-Haytham",born:965,died:1040,cat:"science",field:"Optics & Scientific Method",
    quote:"The duty of the man who investigates the writings of scientists is to make himself an enemy of all that he reads.",
    contributions:["Book of Optics","Scientific method foundations","Camera obscura explanation","Correct theory of vision"],
    r:0.25,reasoning:"His insistence on experimental verification over ancient authority was centuries ahead of his time. No one else was doing science this rigorously. His Book of Optics shaped Bacon, Kepler, and the entire Western scientific tradition.",
    counterfactual:"Without Ibn al-Haytham, medieval optics develops from Euclid and Ptolemy without correction. The emission theory of vision (that eyes emit rays) might persist longer. More importantly, his methodological innovations — systematic experimentation, skepticism of authorities, mathematical analysis of physical phenomena — might not enter the Western tradition when they did. Roger Bacon, who built on al-Haytham's work, would have had less to work with.",
    ripples:[
      {category:"Vision Theory",detail:"The correct intromission theory of vision (light entering eyes) takes longer to establish. Emission theories persist past the Renaissance."},
      {category:"Scientific Method",detail:"The emphasis on experimental verification over authority develops differently. Perhaps it emerges later through different sources."},
      {category:"Optics Development",detail:"Kepler's work on optics and telescopes builds on different foundations. The camera obscura is understood later."},
      {category:"Islamic Science",detail:"The Golden Age of Islamic science has a different character without its most methodologically rigorous practitioner."}
    ],
    timeline:[
      {year:1011,happened:"Book of Optics completed",alternate:"No systematic optics treatise; knowledge develops fragmentarily"},
      {year:1200,happened:"Book of Optics translated to Latin, influences Europe",alternate:"European optics develops from Euclid and Ptolemy alone"},
      {year:1267,happened:"Roger Bacon builds on al-Haytham's work",alternate:"Bacon works from Greek sources only; less rigorous approach"},
      {year:1604,happened:"Kepler's Astronomiae Pars Optica cites al-Haytham",alternate:"Kepler develops optics with less foundation; progress is slower"}
    ],
    impact:{lives:"Foundation of experimental science",econ:"Optics industry origins",cultural:"Islamic Golden Age pinnacle",reach:"European Renaissance via translations",timeline:"Scientific method delayed possibly centuries"}},
  {id:"ramanujan",name:"Srinivasa Ramanujan",born:1887,died:1920,cat:"science",field:"Mathematics",
    quote:"An equation means nothing to me unless it expresses a thought of God.",
    contributions:["Infinite series for pi","Ramanujan conjecture","Partition function formulas","Mock theta functions"],
    r:0.15,reasoning:"His results came from nowhere — no formal training, no school, no collaborators until Hardy. Many of his theorems have still never been independently re-derived. He seemed to access mathematics from a place no one else could reach.",
    counterfactual:"Without Ramanujan, large areas of number theory and infinite series simply don't exist for decades — perhaps ever in the same form. His results weren't extensions of existing work; they appeared from his intuition without proof. Mathematicians are still mining his notebooks for theorems a century later. His mock theta functions weren't understood until the 21st century. Without him, we might never have these results, or they might look completely different.",
    ripples:[
      {category:"Number Theory",detail:"The partition function formulas, mock theta functions, and dozens of identities never discovered or discovered much later in different form."},
      {category:"Mathematical Methods",detail:"Ramanujan's intuitive methods — seeing deep patterns without proof — don't enter the mathematical tradition. Pure analysis dominates more completely."},
      {category:"Modular Forms",detail:"The connection between modular forms and number theory develops later and differently without Ramanujan's conjectures driving research."},
      {category:"Indian Mathematics",detail:"India's most famous mathematician doesn't exist. Indian mathematical identity and pride develop differently."}
    ],
    timeline:[
      {year:1913,happened:"Ramanujan writes to Hardy with 120 theorems",alternate:"Hardy never receives letter; Ramanujan's work remains unknown"},
      {year:1914,happened:"Ramanujan arrives in Cambridge",alternate:"Without Hardy's invitation, Ramanujan dies obscure in India"},
      {year:1918,happened:"Elected Fellow of Royal Society",alternate:"No recognition; his notebooks eventually lost"},
      {year:1920,happened:"Ramanujan dies; notebooks preserved",alternate:"Without Cambridge period, notebooks may never be preserved or studied"}
    ],
    impact:{lives:"Cryptography, computing theory",econ:"Number theory applications",cultural:"Self-taught genius archetype",reach:"Pure mathematics globally",timeline:"Some theorems may never have been discovered"}},
  {id:"crick",name:"Francis Crick",born:1916,died:2004,cat:"science",field:"Molecular Biology",
    quote:"Almost all aspects of life are engineered at the molecular level.",
    contributions:["DNA double helix structure (with Watson)","Central dogma of molecular biology","Genetic code research"],
    r:0.65,reasoning:"Rosalind Franklin's X-ray data was crucial and nearly solved the structure. Linus Pauling was close. Watson and Crick synthesized others' data into the correct model. The structure would have been solved within months to a year or two by others.",
    counterfactual:"Without Crick, the DNA double helix is still solved — probably within months. Franklin was close to determining the structure from her X-ray data alone. Pauling's triple helix was wrong, but he would have corrected it. Watson without Crick might have been less successful, but Wilkins and Franklin at King's College were nearly there. The race to DNA was a race with multiple competitors near the finish line.",
    ripples:[
      {category:"DNA Discovery",detail:"Franklin or Pauling solves the structure by late 1953 or 1954. Watson becomes a footnote. The double helix is associated with different names."},
      {category:"Molecular Biology",detail:"The 'central dogma' (DNA → RNA → protein) articulated by someone else, perhaps in different terms."},
      {category:"Genetic Code",detail:"The code is cracked similarly — Crick contributed but wasn't sole solver. Timeline similar."},
      {category:"Popular Science",detail:"No 'The Double Helix' memoir. DNA's cultural story is different."}
    ],
    timeline:[
      {year:1953,happened:"Watson and Crick propose double helix",alternate:"Franklin solves structure from Photo 51 by late 1953"},
      {year:1958,happened:"Crick proposes central dogma",alternate:"DNA-to-protein pathway described by others; different terminology"},
      {year:1962,happened:"Nobel Prize to Watson, Crick, Wilkins",alternate:"Nobel to Franklin (if alive), Wilkins, and whoever solved structure"},
      {year:1968,happened:"'The Double Helix' published",alternate:"No controversial memoir; DNA history told differently"}
    ],
    impact:{lives:"All genetic medicine",econ:"Biotech industry: $600B+",cultural:"Molecular biology paradigm",reach:"Global medicine",timeline:"DNA structure solved 1-2 years later"}},
  {id:"rosalind",name:"Rosalind Franklin",born:1920,died:1958,cat:"science",field:"X-ray Crystallography",
    quote:"Science and everyday life cannot and should not be separated.",
    contributions:["Photo 51 (crucial X-ray of DNA)","DNA structure evidence","Virus structure research","Coal and carbon research"],
    r:0.55,reasoning:"Her X-ray data was critical for the DNA discovery, but she was close to solving it herself. Wilkins, Watson, and Crick also contributed. The structure was nearly solved by multiple groups. Her early death obscured her full potential contribution.",
    counterfactual:"Without Franklin, DNA's structure takes longer to solve — perhaps 1-2 years. Her Photo 51 was the clearest evidence for the helical structure. Wilkins would have continued X-ray work, but with less skill. Pauling might have corrected his triple helix faster without competition. More interestingly, Franklin's virus research was leading-edge work that continued until her death. Virus structure biology might have developed differently.",
    ripples:[
      {category:"DNA Discovery",detail:"Without Photo 51, Watson and Crick lack key evidence. Pauling might solve the structure first from chemical reasoning, or discovery delayed to 1954-1955."},
      {category:"X-ray Crystallography",detail:"Franklin's meticulous methods in crystallography don't influence the next generation as directly. The field develops with different techniques."},
      {category:"Virus Research",detail:"Franklin's tobacco mosaic virus work doesn't happen. Virus structure biology advances through different researchers."},
      {category:"Women in Science",detail:"The Franklin-DNA story — including the controversy about credit — doesn't exist. Women in science history has different examples and narratives."}
    ],
    timeline:[
      {year:1952,happened:"Photo 51 taken, showing DNA helix",alternate:"No clear X-ray evidence; helical structure harder to confirm"},
      {year:1953,happened:"Franklin's data shown to Watson without permission",alternate:"Without this data, Watson and Crick make slower progress"},
      {year:1958,happened:"Franklin dies of cancer at 37",alternate:"Without earlier research, she pursues different career; might live longer"},
      {year:1962,happened:"Nobel Prize for DNA; Franklin ineligible (dead)",alternate:"If structure solved differently, Nobel might go to different people"}
    ],
    impact:{lives:"DNA discovery foundation",econ:"Structural biology",cultural:"Women in science recognition (posthumous)",reach:"Molecular biology",timeline:"DNA structure solved similarly; different credit"}},

  // MORE SCIENCE & TECHNOLOGY
  {id:"heisenberg",name:"Werner Heisenberg",born:1901,died:1976,cat:"science",field:"Quantum Physics",
    quote:"What we observe is not nature itself, but nature exposed to our method of questioning.",
    contributions:["Uncertainty principle","Matrix mechanics","Quantum theory development","German nuclear program (failed)"],
    r:0.45,reasoning:"Schrödinger developed wave mechanics independently. Both formulations proved equivalent. The uncertainty principle was Heisenberg's unique insight, but quantum mechanics was being developed by many.",
    counterfactual:"Without Heisenberg, quantum mechanics still arrives via Schrödinger's wave mechanics in 1926. The two formulations proved mathematically equivalent, and Schrödinger's was more intuitive to most physicists. The uncertainty principle might have been discovered later through different reasoning — it's implied by the mathematical structure. The bigger counterfactual: Heisenberg's failed German nuclear program. Had he been absent, might Germany have found a physicist who could actually build a bomb?",
    ripples:[
      {category:"Quantum Mechanics",detail:"Schrödinger's wave mechanics dominates from the start. Matrix mechanics emerges as equivalent formulation later, perhaps from Dirac or Born."},
      {category:"Uncertainty Principle",detail:"The fundamental limits on measurement discovered later, perhaps by Bohr or others through different reasoning. Same physics, different discoverer."},
      {category:"German Nuclear Program",detail:"Without Heisenberg's leadership, Germany might have assigned someone more competent — or more willing. The failed Nazi bomb program could have succeeded."},
      {category:"Copenhagen Interpretation",detail:"The Bohr-Heisenberg philosophical discussions at Copenhagen don't happen. Quantum mechanics interpretation develops differently."}
    ],
    timeline:[
      {year:1925,happened:"Heisenberg develops matrix mechanics",alternate:"Schrödinger's wave mechanics (1926) becomes first quantum formulation"},
      {year:1927,happened:"Uncertainty principle published",alternate:"Measurement limits discovered later, perhaps through different route"},
      {year:1941,happened:"Heisenberg visits Bohr in Copenhagen",alternate:"No mysterious meeting; German program develops with different leadership"},
      {year:1945,happened:"German nuclear program fails under Heisenberg",alternate:"Different leadership might have succeeded — or failed faster"}
    ],
    impact:{lives:"Quantum technology foundation",econ:"Electronics, computing",cultural:"Limits of knowledge concept",reach:"Global physics",timeline:"Quantum mechanics develops similarly via Schrödinger"}},
  {id:"dirac",name:"Paul Dirac",born:1902,died:1984,cat:"science",field:"Theoretical Physics",
    quote:"A theory with mathematical beauty is more likely to be correct than an ugly one.",
    contributions:["Dirac equation","Predicted antimatter","Quantum field theory foundations","Fermi-Dirac statistics"],
    r:0.35,reasoning:"The Dirac equation — unifying quantum mechanics and special relativity — was a singular achievement. His prediction of antimatter from pure mathematics was remarkable.",
    counterfactual:"Without Dirac, relativistic quantum mechanics takes longer to develop. The Dirac equation's specific form — predicting antimatter's existence from pure mathematical necessity — might never have been found in the same way. Someone else eventually unifies quantum mechanics and special relativity, but the specific insight that the mathematics requires antimatter might have been discovered only after positrons were observed, reversing the order of prediction and discovery.",
    ripples:[
      {category:"Relativistic Quantum Mechanics",detail:"Klein-Gordon equation dominates longer despite problems with negative probability. A consistent relativistic quantum mechanics emerges later, perhaps through different mathematics."},
      {category:"Antimatter Prediction",detail:"Positrons discovered experimentally by Anderson (1932) without theoretical prediction. Antimatter understood after the fact rather than predicted."},
      {category:"Quantum Field Theory",detail:"The foundations develop differently without Dirac's specific contributions. Feynman and Schwinger build on different foundations."},
      {category:"Mathematical Physics Style",detail:"Dirac's extreme elegance and 'beauty as guide' philosophy doesn't influence physics. Theoretical physics develops with different aesthetic."}
    ],
    timeline:[
      {year:1928,happened:"Dirac equation published",alternate:"Relativistic QM develops later through different, less elegant route"},
      {year:1931,happened:"Dirac predicts antimatter's existence",alternate:"No prediction; antimatter discovered unexpectedly in 1932"},
      {year:1932,happened:"Anderson discovers positron, confirming Dirac",alternate:"Positron discovered; theorists scramble to explain it"},
      {year:1933,happened:"Dirac wins Nobel Prize",alternate:"Nobel for antimatter discovery goes to Anderson alone; theory comes later"}
    ],
    impact:{lives:"Antimatter physics",econ:"Particle physics applications",cultural:"Mathematical beauty in physics",reach:"Global physics",timeline:"Relativistic QM delayed 5-10 years"}},
  {id:"fermi",name:"Enrico Fermi",born:1901,died:1954,cat:"science",field:"Nuclear Physics",
    quote:"There are two possible outcomes: if the result confirms the hypothesis, then you've made a measurement. If the result is contrary to the hypothesis, then you've made a discovery.",
    contributions:["First nuclear reactor","Beta decay theory","Fermi-Dirac statistics","Manhattan Project leadership"],
    r:0.45,reasoning:"Nuclear physics had many contributors. The first reactor was a team effort. Fermi's unique gift was bridging theory and experiment.",
    counterfactual:"Without Fermi, the first nuclear reactor is still built — the Manhattan Project had thousands of scientists. Szilard, Wigner, and others had the theoretical understanding. But Fermi's unique combination of theoretical insight and experimental skill meant he could personally verify calculations by building reactors. Without him, the margin of safety might have been different; Chicago Pile-1 might have been built by someone less capable of intuiting when to stop.",
    ripples:[
      {category:"Manhattan Project",detail:"First reactor still built, but perhaps with more conservative design and slower timeline. The December 1942 deadline might have slipped months."},
      {category:"Nuclear Theory",detail:"Beta decay theory developed by others; Fermi's Golden Rule named differently. The theoretical framework is similar but credited to different physicists."},
      {category:"Physics Style",detail:"Fermi's 'back of the envelope' estimation style doesn't become famous. Physics pedagogy develops with different examples."},
      {category:"Italian Physics",detail:"Italy loses its greatest 20th-century physicist. The Italian nuclear physics tradition develops differently."}
    ],
    timeline:[
      {year:1934,happened:"Fermi produces transuranic elements (actually fission)",alternate:"Fission recognized earlier by others; nuclear history changes"},
      {year:1938,happened:"Fermi wins Nobel, emigrates to US",alternate:"Without Nobel, Italian physicist emigrates anyway or doesn't — history branches"},
      {year:1942,happened:"Chicago Pile-1 achieves first controlled fission",alternate:"First reactor built by others, perhaps 6-12 months later"},
      {year:1945,happened:"Fermi witnesses Trinity test",alternate:"Manhattan Project succeeds without Fermi; similar outcome"}
    ],
    impact:{lives:"Nuclear age begun",econ:"Nuclear power industry",cultural:"Atomic era",reach:"Global",timeline:"Nuclear reactor delayed 2-5 years"}},
  {id:"schrodinger",name:"Erwin Schrödinger",born:1887,died:1961,cat:"science",field:"Quantum Physics",
    quote:"The task is not so much to see what no one has yet seen; but to think what nobody has yet thought.",
    contributions:["Schrödinger equation","Wave mechanics","What is Life? (influenced DNA research)","Schrödinger's cat thought experiment"],
    r:0.50,reasoning:"Heisenberg's matrix mechanics arrived first. De Broglie proposed matter waves. Schrödinger's wave equation provided an alternative formulation that proved equivalent.",
    counterfactual:"Without Schrödinger, Heisenberg's matrix mechanics dominates quantum theory. The wave formulation eventually emerges from others building on de Broglie's matter waves. Physics might be taught more algebraically, less intuitively. Interestingly, Schrödinger's 'What is Life?' — which inspired Watson, Crick, and other molecular biologists — wouldn't exist. DNA researchers might have been inspired differently, possibly delaying molecular biology.",
    ripples:[
      {category:"Quantum Mechanics",detail:"Heisenberg's matrix mechanics becomes the standard formulation. Wave mechanics developed later by others, perhaps less elegantly."},
      {category:"Physics Education",detail:"Without the intuitive wave picture, quantum mechanics is taught more abstractly. Fewer students develop physical intuition for quantum phenomena."},
      {category:"Molecular Biology",detail:"'What is Life?' never written. Watson and Crick not inspired by Schrödinger's vision of life as information. DNA research follows different path."},
      {category:"Quantum Philosophy",detail:"Schrödinger's cat thought experiment doesn't exist. Quantum measurement problem discussed with different examples."}
    ],
    timeline:[
      {year:1926,happened:"Schrödinger equation published",alternate:"Wave mechanics emerges later; matrix mechanics dominates for years"},
      {year:1935,happened:"Schrödinger's cat thought experiment",alternate:"Quantum measurement paradox illustrated differently; 'cat' never becomes icon"},
      {year:1944,happened:"'What is Life?' published",alternate:"No interdisciplinary inspiration; molecular biology develops with different motivation"},
      {year:1953,happened:"Watson and Crick cite Schrödinger as inspiration",alternate:"DNA researchers inspired by other sources; similar discovery, different narrative"}
    ],
    impact:{lives:"Quantum physics foundation",econ:"All quantum technology",cultural:"Wave-particle duality",reach:"Global physics",timeline:"Wave mechanics via others within years"}},
  {id:"pauling",name:"Linus Pauling",born:1901,died:1994,cat:"science",field:"Chemistry",
    quote:"The best way to have a good idea is to have lots of ideas.",
    contributions:["Chemical bond nature","Molecular biology foundations","Two Nobel Prizes (Chemistry, Peace)","Vitamin C advocacy"],
    r:0.40,reasoning:"Pauling's work on chemical bonds was foundational but building on quantum mechanics others developed. He nearly solved DNA structure but got it wrong.",
    counterfactual:"Without Pauling, quantum chemistry develops through others — Slater, Mulliken, Heitler, London all contributed. The specific insights about hybridization and resonance might emerge differently. Most intriguingly, without Pauling's wrong triple-helix DNA model, the race to DNA might have proceeded differently. His failure accelerated Watson and Crick's success. Also lost: the model of the scientist-activist, working for both pure science and world peace.",
    ripples:[
      {category:"Chemical Bonding",detail:"The nature of chemical bonds understood through Slater, Mulliken, and others. Hybridization concept might have different name and presentation."},
      {category:"DNA Race",detail:"Without Pauling's failed triple helix, Watson and Crick might have had less urgency. Or Pauling might have corrected himself and won."},
      {category:"Peace Activism",detail:"The model of the Nobel laureate using prestige for political activism is weaker. Anti-nuclear movement has different scientific champions."},
      {category:"Alternative Medicine",detail:"The vitamin C megadose controversy never happens. Pauling's late-career advocacy doesn't exist; orthomolecular medicine less prominent."}
    ],
    timeline:[
      {year:1931,happened:"Pauling publishes 'The Nature of the Chemical Bond'",alternate:"Chemical bonding quantum theory develops through multiple authors"},
      {year:1953,happened:"Pauling proposes wrong triple helix for DNA",alternate:"Different competitor in DNA race; outcome might change"},
      {year:1954,happened:"Nobel Prize in Chemistry",alternate:"Quantum chemistry Nobel goes to others; Slater, Mulliken, or shared"},
      {year:1962,happened:"Nobel Peace Prize for nuclear activism",alternate:"No scientist-activist model; peace movement has different champions"}
    ],
    impact:{lives:"Chemistry education transformed",econ:"Pharmaceutical chemistry",cultural:"Scientist-activist model",reach:"Global chemistry",timeline:"Chemical bonding understood slightly later"}},
  {id:"hubble",name:"Edwin Hubble",born:1889,died:1953,cat:"science",field:"Astronomy",
    quote:"Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
    contributions:["Proved galaxies exist beyond Milky Way","Hubble's Law (universe expanding)","Galaxy classification","Changed cosmic understanding"],
    r:0.50,reasoning:"Slipher had measured redshifts earlier. Lemaître proposed expansion before Hubble published. The observations were coming; Hubble was best positioned.",
    counterfactual:"Without Hubble, Vesto Slipher's redshift measurements and Henrietta Leavitt's Cepheid distance method still exist. Lemaître published the expansion relationship in 1927, before Hubble. The universe's expansion would still be discovered — perhaps we'd call it 'Lemaître's Law.' Hubble's contribution was having access to the 100-inch Hooker telescope and combining others' tools. Someone else at Mount Wilson would have made similar discoveries.",
    ripples:[
      {category:"Cosmic Expansion",detail:"Lemaître's 1927 paper gets priority. We study 'Lemaître's Law' instead of 'Hubble's Law.' The Big Bang theory has the same physics, different origin story."},
      {category:"Galaxy Classification",detail:"The Hubble tuning fork classification developed by someone else. Galaxy types still catalogued, but with different naming conventions."},
      {category:"Modern Cosmology",detail:"The expanding universe discovered similarly, but credited to Lemaître and Slipher. American astronomy's role somewhat reduced."},
      {category:"Space Telescope",detail:"No 'Hubble Space Telescope' — perhaps the 'Lemaître Space Telescope' or named for someone else entirely."}
    ],
    timeline:[
      {year:1923,happened:"Hubble proves galaxies beyond Milky Way",alternate:"Another Mount Wilson astronomer makes discovery; perhaps Shapley who was skeptical"},
      {year:1929,happened:"Hubble's Law published",alternate:"Lemaître's 1927 work gains recognition; expansion attributed to him"},
      {year:1930,happened:"Hubble dominates observational cosmology",alternate:"Observational cosmology has different leader; perhaps Shapley or European astronomer"},
      {year:1990,happened:"Hubble Space Telescope launched",alternate:"Space telescope named for Lemaître, Slipher, or another astronomer"}
    ],
    impact:{lives:"Cosmic understanding",econ:"Space science",cultural:"Universe vastly larger than thought",reach:"Global astronomy",timeline:"Expanding universe discovered within 5 years"}},
  {id:"goodall",name:"Jane Goodall",born:1934,died:null,cat:"science",field:"Primatology",
    quote:"What you do makes a difference, and you have to decide what kind of difference you want to make.",
    contributions:["Chimpanzee behavior studies","Tool use discovery in chimps","Conservation advocacy","Roots & Shoots program"],
    r:0.35,reasoning:"Her discovery that chimps use tools was paradigm-shifting. Her 60+ years with Gombe chimps is unreplicable data. Her long-term, intimate approach was pioneering.",
    counterfactual:"Without Goodall, Leakey still sends someone to study chimpanzees — perhaps Birutė Galdikas (who studied orangutans) or Dian Fossey (gorillas) might have taken that role. But Goodall's specific approach — living among the chimps, naming them, observing tool use — was deeply personal. Her 60+ years of continuous data is irreplaceable. Someone else might have studied chimps scientifically, but the specific relationship with the Gombe community, and the bridge she built between scientific observation and public emotion, might never have formed.",
    ripples:[
      {category:"Tool Use Discovery",detail:"Chimp tool use discovered later, perhaps by Toshisada Nishida in Japan or another researcher. The 'Man the Toolmaker' definition of humanity challenged differently."},
      {category:"Long-term Data",detail:"No 60-year continuous study of a chimp community. The specific behavioral and social data from Gombe doesn't exist."},
      {category:"Conservation Movement",detail:"The emotional connection between public and great apes is weaker. Conservation relies more on abstract arguments, less on personal stories."},
      {category:"Women in Science",detail:"The image of the young woman living with wild animals doesn't exist. Primatology develops with different gender dynamics."}
    ],
    timeline:[
      {year:1960,happened:"Goodall begins Gombe research",alternate:"Leakey sends different researcher; chimp study begins differently"},
      {year:1964,happened:"Tool use in chimps documented",alternate:"Tool use discovered later by Japanese or other researchers"},
      {year:1977,happened:"Jane Goodall Institute founded",alternate:"Chimp conservation develops through different organizations"},
      {year:2020,happened:"60 years of continuous Gombe data",alternate:"No such long-term primate study exists; behavioral knowledge is fragmentary"}
    ],
    impact:{lives:"Conservation movement",econ:"Ecotourism",cultural:"Human-animal boundary blurred",reach:"Global conservation",timeline:"Primate behavior understood differently"}},
  {id:"carson",name:"Rachel Carson",born:1907,died:1964,cat:"science",field:"Marine Biology & Environmentalism",
    quote:"In nature nothing exists alone.",
    contributions:["Silent Spring","DDT dangers exposed","Modern environmental movement catalyst","EPA creation catalyst"],
    r:0.35,reasoning:"Environmental concerns were growing, but Silent Spring crystallized them into a movement. Her combination of scientific credibility and literary skill was rare.",
    counterfactual:"Without Carson, pesticide concerns still simmer through the 1960s as bird populations decline. Eventually, someone documents DDT's effects — perhaps Barry Commoner or another environmental scientist. But Carson's unique combination of poetic writing, scientific rigor, and personal courage in facing the chemical industry's attacks was hard to replicate. The environmental movement might have emerged later, weaker, or more fragmented.",
    ripples:[
      {category:"Environmental Movement",detail:"The modern environmental movement lacks its founding text. Earth Day 1970 might not happen, or might focus on different issues."},
      {category:"Pesticide Regulation",detail:"DDT use continues longer. The bald eagle goes extinct or nearly so. Pesticide regulation comes later, perhaps after more visible damage."},
      {category:"EPA Creation",detail:"Without Silent Spring's impact, the EPA might not be created in 1970 or might have a different mandate."},
      {category:"Science Communication",detail:"The model of the scientist-writer engaging public audiences on environmental issues is weaker."}
    ],
    timeline:[
      {year:1962,happened:"Silent Spring published",alternate:"No rallying text for environmental movement; concerns remain scattered"},
      {year:1963,happened:"Kennedy orders investigation of pesticides",alternate:"No presidential response to environmental concerns"},
      {year:1970,happened:"EPA created partly due to Carson's influence",alternate:"Environmental regulation delayed or organized differently"},
      {year:1972,happened:"DDT banned in US",alternate:"DDT use continues; bird extinctions accelerate"}
    ],
    impact:{lives:"Environmental health for billions",econ:"Pesticide regulation",cultural:"Environmental movement birth",reach:"Global environmentalism",timeline:"Environmental movement delayed 10+ years"}},
  {id:"hoyle",name:"Fred Hoyle",born:1915,died:2001,cat:"science",field:"Astrophysics",
    quote:"Space isn't remote at all. It's only an hour's drive away if your car could go straight upwards.",
    contributions:["Stellar nucleosynthesis","Coined 'Big Bang' (skeptically)","Panspermia advocacy","B2FH paper"],
    r:0.45,reasoning:"His work on how stars create elements was crucial but collaborative. His steady-state cosmology was wrong. His coining of 'Big Bang' was ironic — he opposed it.",
    counterfactual:"Without Hoyle, stellar nucleosynthesis still develops through Burbidge, Burbidge, and Fowler (the other B2FH authors). The basic insight — that stars forge elements heavier than hydrogen — comes from multiple researchers. Most amusingly, without Hoyle we wouldn't have the term 'Big Bang,' which he coined dismissively. Perhaps we'd call it 'Lemaître's primeval atom' or something less catchy. The steady-state cosmology might have had a different champion.",
    ripples:[
      {category:"Stellar Nucleosynthesis",detail:"The B2FH paper is the BFB paper — Burbidge, Fowler, Burbidge. Same physics, different authorship order."},
      {category:"Big Bang Terminology",detail:"Without Hoyle's dismissive term, we call it the 'primeval atom' or some other name. The catchy branding is lost."},
      {category:"Steady-State Cosmology",detail:"The steady-state alternative to the Big Bang might have a different champion, or might be proposed later or not at all."},
      {category:"Science Fiction",detail:"Hoyle's science fiction novels don't exist. A Black Cloud and other works never written."}
    ],
    timeline:[
      {year:1946,happened:"Hoyle proposes stellar nucleosynthesis",alternate:"Stellar element production understood through other researchers"},
      {year:1949,happened:"Hoyle coins 'Big Bang' on BBC radio",alternate:"No catchy term for cosmological origin; different naming convention"},
      {year:1957,happened:"B2FH paper on stellar nucleosynthesis",alternate:"Similar paper with Hoyle absent; same science, different credit"},
      {year:1965,happened:"Cosmic microwave background confirms Big Bang",alternate:"Steady-state cosmology collapses without Hoyle's advocacy"}
    ],
    impact:{lives:"Understanding element origins",econ:"Nuclear astrophysics",cultural:"Big Bang term",reach:"Global cosmology",timeline:"Stellar nucleosynthesis understood similarly"}},
  {id:"lyell",name:"Charles Lyell",born:1797,died:1875,cat:"science",field:"Geology",
    quote:"The present is the key to the past.",
    contributions:["Principles of Geology","Uniformitarianism","Influenced Darwin","Deep time concept"],
    r:0.50,reasoning:"Hutton proposed uniformitarianism earlier. Lyell systematized and popularized it. His influence on Darwin was profound. Others were reaching similar geological conclusions.",
    counterfactual:"Without Lyell, Hutton's uniformitarianism develops through other geologists. But Lyell's Principles of Geology was on the Beagle with Darwin, shaping how Darwin saw South American geology. Without Lyell's influence, Darwin might have thought more catastrophically about change. Evolution by natural selection requires deep time and gradual change — both Lyellian concepts. The theory might have developed differently, perhaps with more saltational elements.",
    ripples:[
      {category:"Geology Development",detail:"Uniformitarianism advances through Hutton's other followers. The debate with catastrophists continues longer."},
      {category:"Darwin's Thinking",detail:"Darwin lacks his intellectual framework for thinking about gradual change over deep time. Evolution theory might have different character."},
      {category:"Deep Time",detail:"The concept of Earth being millions of years old spreads more slowly. Religious resistance to geological time might last longer."},
      {category:"Scientific Methodology",detail:"Lyell's 'the present is key to the past' becomes foundational later or through different formulation."}
    ],
    timeline:[
      {year:1830,happened:"Principles of Geology published",alternate:"Uniformitarianism advances more slowly through other texts"},
      {year:1831,happened:"Darwin takes Lyell's book on Beagle voyage",alternate:"Darwin influenced by different geological framework"},
      {year:1859,happened:"Lyell's deep time concept underpins Origin of Species",alternate:"Darwin's theory shaped by different time concepts"},
      {year:1860,happened:"Lyell (reluctantly) accepts evolution",alternate:"Evolution debate has different geological voices"}
    ],
    impact:{lives:"Earth science foundation",econ:"Geology profession",cultural:"Deep time understanding",reach:"Global geology",timeline:"Deep time concept spreads more slowly"}},
  {id:"wegener",name:"Alfred Wegener",born:1880,died:1930,cat:"science",field:"Geophysics",
    quote:"Scientists still do not appear to understand sufficiently that all earth sciences must contribute evidence toward unveiling the state of our planet.",
    contributions:["Continental drift theory","Pangaea concept","Meteorological research","Died on Greenland expedition"],
    r:0.40,reasoning:"His continental drift theory was rejected for decades, vindicated by plate tectonics. The evidence was visible; he saw it. Others might have proposed it later. His specific synthesis was early and correct.",
    counterfactual:"Without Wegener, the matching coastlines of Africa and South America remain a curiosity. Geologists continue to puzzle over similar fossils on different continents. The continental drift hypothesis emerges later — perhaps in the 1940s or 1950s — as paleomagnetism provides the mechanism Wegener lacked. The vindication comes in the 1960s regardless, through seafloor spreading evidence. Wegener's tragedy was being right before the evidence could convince others.",
    ripples:[
      {category:"Continental Drift",detail:"The hypothesis emerges later, perhaps around 1950, as paleomagnetism develops. The scientific establishment is spared decades of rejection."},
      {category:"Plate Tectonics",detail:"The revolution of the 1960s happens similarly — the seafloor spreading evidence is decisive regardless of earlier theories."},
      {category:"Scientific Resistance",detail:"The story of Wegener's rejection becomes a lesson in scientific conservatism. Without him, a different cautionary tale emerges."},
      {category:"German Science",detail:"German Earth science loses its most famous 20th-century figure."}
    ],
    timeline:[
      {year:1912,happened:"Wegener proposes continental drift",alternate:"Continental matching remains unexplained curiosity"},
      {year:1915,happened:"Origins of Continents and Oceans published",alternate:"No systematic continental drift theory until later"},
      {year:1930,happened:"Wegener dies on Greenland expedition",alternate:"No romantic death; the eventual proposer might live to see vindication"},
      {year:1960,happened:"Plate tectonics vindicates Wegener posthumously",alternate:"Plate tectonics vindicates later proposer who might still be alive"}
    ],
    impact:{lives:"Earthquake understanding",econ:"Resource geology",cultural:"Unified Earth theory",reach:"Global geology",timeline:"Plate tectonics delayed 20-30 years"}},
  {id:"leavitt",name:"Henrietta Leavitt",born:1868,died:1921,cat:"science",field:"Astronomy",
    quote:"[No known quotes survive — her work spoke for her]",
    contributions:["Period-luminosity relation for Cepheids","Cosmic distance measurement enabled","1,777 variable stars catalogued","Hubble's work built on hers"],
    r:0.40,reasoning:"Her discovery that Cepheid variable star brightness correlates with period enabled measuring cosmic distances. Others were cataloguing stars, but she noticed the pattern. Her work enabled Hubble's discoveries.",
    counterfactual:"Without Leavitt, the period-luminosity relation for Cepheid variables remains undiscovered longer. Harvard's 'computers' — the women cataloguing stars — continue their work, but the crucial pattern isn't recognized. Hubble can't use Cepheids to prove Andromeda is a separate galaxy. The expansion of the universe is discovered differently, perhaps later. The entire cosmic distance ladder is delayed.",
    ripples:[
      {category:"Cosmic Distance",detail:"Without Cepheid distance measurements, Hubble can't prove galaxies exist beyond the Milky Way in the same way."},
      {category:"Expanding Universe",detail:"The discovery of cosmic expansion is delayed or comes through different methods. The 'Hubble constant' might be discovered differently."},
      {category:"Women in Astronomy",detail:"The most important female astronomer's contribution doesn't exist. The story of women 'computers' has different heroes."},
      {category:"Harvard Observatory",detail:"The method that makes Harvard data useful for cosmology is missing. Other observatories might advance faster."}
    ],
    timeline:[
      {year:1908,happened:"Leavitt discovers period-luminosity relation",alternate:"Cepheid pattern remains unnoticed; cosmic distances unmeasurable"},
      {year:1912,happened:"Leavitt publishes definitive relationship",alternate:"No distance measurement tool; cosmic structure debates unresolved"},
      {year:1923,happened:"Hubble uses Leavitt's method to prove Andromeda's distance",alternate:"Andromeda debate continues without distance measurement"},
      {year:1929,happened:"Hubble uses Cepheids for expanding universe",alternate:"Expanding universe discovered differently, perhaps later"}
    ],
    impact:{lives:"Cosmic distance measurement",econ:"Astronomy research",cultural:"Women in astronomy",reach:"Global astronomy",timeline:"Cosmic distances delayed 10-20 years"}},

  // POLITICS & GOVERNANCE
  {id:"lincoln",name:"Abraham Lincoln",born:1809,died:1865,cat:"politics",field:"US Presidency",
    quote:"Those who deny freedom to others deserve it not for themselves.",
    contributions:["Preserved the Union during Civil War","Emancipation Proclamation","Gettysburg Address","Reconstruction vision"],
    r:0.35,reasoning:"Other Republicans opposed slavery's expansion, but Lincoln's combination — moderate enough to win, principled enough to persist, rhetorically brilliant enough to reframe the war as moral crusade — was rare.",
    counterfactual:"Without Lincoln, the 1860 Republican nominee might have been Seward (more radical) or Chase (less politically skilled). The Union might still have fought to preserve itself, but the war's framing as a moral crusade against slavery — and the timing of emancipation — would have been different. Lincoln's rhetoric permanently linked union and freedom in American identity. Another president might have preserved the Union without transforming its meaning.",
    ripples:[
      {category:"Civil War Outcome",detail:"Seward or another Republican might have won 1860, but their response to secession could have been more aggressive (provoking border states to leave) or more conciliatory (allowing peaceful separation). Either path changes everything."},
      {category:"Emancipation Timing",detail:"The Emancipation Proclamation was a careful military and political calculation. A different president might have emancipated earlier (losing border states) or later (prolonging slavery), with cascading effects on freedpeople's lives."},
      {category:"Reconstruction",detail:"Lincoln's assassination elevated Johnson, who sabotaged Reconstruction. Ironically, Lincoln's death may have been worse for Black Americans than his absence entirely — a different president surviving might have managed Reconstruction better."},
      {category:"American Identity",detail:"The Gettysburg Address redefined America as 'conceived in liberty' with government 'of, by, and for the people.' Without Lincoln's rhetoric, American identity might be more about states' rights than universal ideals."}
    ],
    timeline:[
      {year:1860,happened:"Lincoln elected, Southern states begin secession",alternate:"Seward nominated instead; might win but with different coalition and approach"},
      {year:1862,happened:"Emancipation Proclamation prepared",alternate:"Different president might emancipate earlier or later, changing war's moral dimension"},
      {year:1863,happened:"Gettysburg Address reframes the war",alternate:"No 'new birth of freedom' language; war remains about union, not ideals"},
      {year:1865,happened:"Lincoln assassinated; Johnson sabotages Reconstruction",alternate:"Different president survives, potentially manages Reconstruction more effectively"}
    ],
    impact:{lives:"4 million enslaved people freed",econ:"United US economy: now $25T GDP",cultural:"American unity mythology",reach:"United States",timeline:"Union survival uncertain without him"}},
  {id:"napoleon",name:"Napoleon Bonaparte",born:1769,died:1821,cat:"politics",field:"Military & Governance",
    quote:"Impossible is a word to be found only in the dictionary of fools.",
    contributions:["Napoleonic Code legal system","Reshaped European borders","Spread revolutionary ideals","Meritocratic reforms"],
    r:0.20,reasoning:"The Revolution created opportunities for ambitious generals, but Napoleon's combination of military genius, administrative talent, and boundless ambition was unique. Only Napoleon could have conquered Europe and permanently reshaped its legal systems.",
    counterfactual:"Without Napoleon, the French Revolution ends differently — perhaps with a military dictator who merely stabilizes France, or with a restored constitutional monarchy, or with collapse. No one else combined Napoleon's military genius, administrative ability, and personal ambition. Europe doesn't experience 20 years of war. The Napoleonic Code doesn't spread across Europe. Nationalism develops more slowly. The entire 19th century looks different — no German unification in reaction to French humiliation, different colonial patterns, different legal traditions.",
    ripples:[
      {category:"European Wars",detail:"The 3-6 million deaths from Napoleonic Wars don't happen, but neither does the spread of revolutionary ideals across Europe through conquest."},
      {category:"Legal Systems",detail:"The Napoleonic Code doesn't spread. Civil law systems develop differently. Property, contract, and family law across Europe and former colonies look entirely different."},
      {category:"Nationalism",detail:"Without Napoleon's conquests triggering nationalist resistance, German and Italian unification might happen later or differently."},
      {category:"Colonial Patterns",detail:"The Louisiana Purchase might not happen — Napoleon wouldn't be selling to fund wars. Haiti's independence follows different path."}
    ],
    timeline:[
      {year:1799,happened:"Napoleon seizes power in coup",alternate:"Directory continues or collapses differently; France stabilizes under different leader"},
      {year:1804,happened:"Napoleonic Code enacted",alternate:"French law reformed piecemeal; no unified code spreads across Europe"},
      {year:1812,happened:"Napoleon invades Russia, beginning of end",alternate:"No such campaign; European balance maintained differently"},
      {year:1815,happened:"Waterloo; Congress of Vienna redraws Europe",alternate:"No need for continental restructuring; Europe looks completely different"}
    ],
    impact:{lives:"Napoleonic Wars: 3-6 million deaths",econ:"Modern legal/administrative systems",cultural:"Shaped modern nationalism",reach:"Europe, colonies, legal systems globally",timeline:"European order completely different"}},
  {id:"mandela",name:"Nelson Mandela",born:1918,died:2013,cat:"politics",field:"Anti-Apartheid Leadership",
    quote:"It always seems impossible until it's done.",
    contributions:["27-year imprisonment became moral authority","Peaceful transition from apartheid","Truth and Reconciliation Commission","First Black South African president"],
    r:0.25,reasoning:"The ANC had other leaders, but Mandela's 27-year imprisonment gave him unique moral authority. His personal choice to pursue reconciliation over revenge wasn't inevitable — it was a decision.",
    counterfactual:"Without Mandela, apartheid still falls — the system was unsustainable. But the transition is likely violent. Other ANC leaders — Tambo, Sisulu, or younger firebrands like Winnie Mandela or Chris Hani — might not have chosen reconciliation. The Truth and Reconciliation Commission doesn't happen. South Africa might have experienced Zimbabwe-style land seizures, civil war, or white flight. Mandela's personal transformation in prison — and his choice to forgive — wasn't replicable.",
    ripples:[
      {category:"Transition Violence",detail:"Without Mandela's reconciliation approach, South Africa's transition involves more violence, possibly civil war or white exodus."},
      {category:"Economic Stability",detail:"Without peaceful transition, international investment flees. South Africa's economy collapses like Zimbabwe's."},
      {category:"Truth and Reconciliation",detail:"The TRC model — amnesty for truth — doesn't exist. Transitional justice worldwide follows different models."},
      {category:"Global Inspiration",detail:"The Mandela model of forgiveness and reconciliation isn't available for other conflicts."}
    ],
    timeline:[
      {year:1964,happened:"Mandela sentenced to life imprisonment",alternate:"Mandela executed; martyrdom without living symbol"},
      {year:1990,happened:"Mandela released after 27 years",alternate:"Without him, different ANC leaders negotiate differently"},
      {year:1994,happened:"Mandela elected president, promises reconciliation",alternate:"Different ANC leader might pursue retribution"},
      {year:1995,happened:"Truth and Reconciliation Commission established",alternate:"Nuremberg-style trials or summary justice instead"}
    ],
    impact:{lives:"Prevented potential civil war",econ:"South Africa's peaceful transition",cultural:"Reconciliation over revenge model",reach:"South Africa, global inspiration",timeline:"Violent transition likely without him"}},
  {id:"churchill",name:"Winston Churchill",born:1874,died:1965,cat:"politics",field:"British Leadership",
    quote:"We shall never surrender.",
    contributions:["Led Britain through WWII","'We shall fight' speeches","Refused to negotiate with Hitler","Iron Curtain speech"],
    r:0.35,reasoning:"Halifax was the alternative in 1940, and he favored negotiation. Churchill's personal stubbornness and rhetorical power kept Britain fighting when rational calculation suggested surrender.",
    counterfactual:"Without Churchill, Lord Halifax becomes Prime Minister in May 1940 and likely explores peace terms with Hitler after Dunkirk. Britain might have accepted a negotiated peace — preserving the Empire but leaving Hitler dominant in Europe. Without British resistance, no staging ground for American entry into Europe, no North African campaign, no D-Day. The war might have ended with Nazi control of Europe and a cold war between Germany and the Soviet Union.",
    ripples:[
      {category:"British Resistance",detail:"Halifax negotiates with Hitler. Britain exits the war with empire intact but Hitler controlling Europe. No 'finest hour.'"},
      {category:"American Strategy",detail:"Without Britain as unsinkable aircraft carrier, US cannot project power into Europe. Pacific-first strategy by default."},
      {category:"Holocaust",detail:"With no Allied advance from the west, the Holocaust continues longer or differently. Soviet liberation only."},
      {category:"Cold War",detail:"The Cold War is between Nazi Germany and Soviet Union, not US/UK and USSR. Completely different world order."}
    ],
    timeline:[
      {year:1940,happened:"Churchill becomes PM, refuses to negotiate",alternate:"Halifax becomes PM, explores peace terms after Dunkirk"},
      {year:1940,happened:"'We shall fight on the beaches' speech",alternate:"No rallying rhetoric; British morale collapses"},
      {year:1941,happened:"Britain holds out until US enters war",alternate:"Britain already at peace; US fights Japan alone"},
      {year:1944,happened:"D-Day launches from Britain",alternate:"No western front; Soviets advance alone against Germany"}
    ],
    impact:{lives:"WWII outcome affecting hundreds of millions",econ:"Post-war European order",cultural:"Wartime leadership archetype",reach:"Global",timeline:"Possible British negotiated peace with Germany"}},
  {id:"gandhi",name:"Mahatma Gandhi",born:1869,died:1948,cat:"politics",field:"Independence & Nonviolence",
    quote:"Be the change you wish to see in the world.",
    contributions:["Indian independence movement leadership","Satyagraha (nonviolent resistance)","Salt March","Influenced MLK and Mandela"],
    r:0.30,reasoning:"Indian nationalism was growing regardless. But satyagraha — nonviolent resistance as political philosophy — was Gandhi's invention developed in South Africa. A different independence movement might have been violent.",
    counterfactual:"Without Gandhi, Indian independence still comes — the British Empire was weakening post-WWI. But the method is different. Subhas Chandra Bose's armed resistance becomes the dominant strategy. Independence might come through violence, possibly with more partition casualties, possibly with a military government. The philosophy of nonviolent resistance — which inspired MLK, Mandela, and dozens of movements — doesn't exist in the same form.",
    ripples:[
      {category:"Indian Independence",detail:"Independence achieved through Bose-style armed resistance or post-WWII British exhaustion. Possibly more violent partition."},
      {category:"Nonviolence Philosophy",detail:"Satyagraha doesn't exist as philosophical system. Civil rights movements worldwide lack this model."},
      {category:"Civil Rights Movement",detail:"MLK draws on different traditions. American civil rights movement might be more confrontational without Gandhian model."},
      {category:"Anti-Colonial Movements",detail:"Decolonization proceeds through violence and negotiation, but without the nonviolent middle path Gandhi exemplified."}
    ],
    timeline:[
      {year:1920,happened:"Non-cooperation movement begins",alternate:"Indian resistance takes more violent form"},
      {year:1930,happened:"Salt March demonstrates nonviolent power",alternate:"No iconic nonviolent protest; armed resistance dominates"},
      {year:1942,happened:"Quit India movement",alternate:"Different form of wartime resistance, possibly supporting Bose and Axis"},
      {year:1947,happened:"Independence through negotiation",alternate:"Independence possibly through violence; partition even bloodier"}
    ],
    impact:{lives:"400M Indians freed",econ:"Indian self-governance",cultural:"Nonviolence as political power",reach:"India, global movements",timeline:"Indian independence possibly violent"}},
  {id:"washington",name:"George Washington",born:1732,died:1799,cat:"politics",field:"American Founding",
    quote:"Liberty, when it begins to take root, is a plant of rapid growth.",
    contributions:["Led Continental Army to victory","Presided over Constitutional Convention","First US President","Left power after two terms"],
    r:0.30,reasoning:"Other generals could have led the army. But Washington's combination of military persistence, political judgment, and willingness to surrender power was rare. His voluntary departure established the precedent.",
    counterfactual:"Without Washington, the Revolution might still succeed — the Continental Congress had other generals. But Washington's specific genius was losing battles while keeping an army intact, and knowing when to retreat. More importantly, his voluntary departure after two terms established American democracy's most important norm. Another leader — a Charles Lee or Horatio Gates — might have become president for life. American democracy could have failed in its first generation.",
    ripples:[
      {category:"Revolutionary War",detail:"The war is led by Gates, Lee, or others. Possibly lost at Valley Forge without Washington's persistence. Or won, but with different leadership culture."},
      {category:"Constitutional Convention",detail:"Without Washington presiding, the Convention might fail or produce different constitution. His presence legitimized the radical project."},
      {category:"Presidential Precedent",detail:"Another first president might not leave voluntarily. American presidency could have become a lifetime position."},
      {category:"Civil-Military Relations",detail:"Washington's model of civilian control of military might not be established. Coups become possible in American politics."}
    ],
    timeline:[
      {year:1776,happened:"Washington appointed commander; keeps army together",alternate:"Different general might lose army at New York or Valley Forge"},
      {year:1787,happened:"Washington presides over Constitutional Convention",alternate:"Convention lacks legitimizing figure; might fail"},
      {year:1789,happened:"Washington elected first president unanimously",alternate:"Different first president sets different precedents"},
      {year:1797,happened:"Washington voluntarily leaves office after two terms",alternate:"Different leader might stay; lifetime presidency established"}
    ],
    impact:{lives:"Founded American republic",econ:"US economic system",cultural:"Peaceful transfer of power model",reach:"United States, global influence",timeline:"American republic's early stability uncertain"}},
  {id:"caesar",name:"Julius Caesar",born:-100,died:-44,cat:"politics",field:"Roman Republic/Empire",
    quote:"I came, I saw, I conquered.",
    contributions:["Conquered Gaul","Crossed the Rubicon","Calendar reform (Julian calendar)","Expanded Roman citizenship"],
    r:0.40,reasoning:"The Roman Republic was collapsing; someone would have become dictator. But Caesar's specific military genius in Gaul, his political skills, and his reforms reflected individual choices.",
    counterfactual:"Without Caesar, the Roman Republic still collapses — the system was failing under the weight of empire. Pompey might have become the first dictator, or Crassus, or someone else. But Caesar's specific conquest of Gaul (bringing 1-2 million deaths), his calendar reform (still used today), and his choice to cross the Rubicon shaped the specific way Rome fell. His assassination and the triumvirate wars that followed were contingent on his existence.",
    ripples:[
      {category:"Gallic Conquest",detail:"Gaul remains independent longer, possibly Romanized more gradually. 1-2 million Gauls don't die in conquest. Celtic culture survives stronger."},
      {category:"Republican Fall",detail:"The Republic falls to Pompey or another strongman. The specific civil wars are different. Antony and Octavian rise differently or not at all."},
      {category:"Calendar",detail:"No Julian calendar reform. The Roman calendar remains chaotic until someone else fixes it — perhaps Augustus."},
      {category:"Augustus's Rise",detail:"Without Caesar, no adoptive heir Octavian. The future Augustus has no path to power. Roman Empire founded by someone else entirely."}
    ],
    timeline:[
      {year:-58,happened:"Caesar begins Gallic Wars",alternate:"Gaul remains unconquered; someone else might conquer later"},
      {year:-49,happened:"Caesar crosses Rubicon, civil war begins",alternate:"Pompey dominates Rome; civil war happens differently"},
      {year:-45,happened:"Julian calendar introduced",alternate:"Calendar remains chaotic until later reform"},
      {year:-44,happened:"Caesar assassinated; Octavian rises",alternate:"Different dictator dies differently; no Augustus"}
    ],
    impact:{lives:"Roman expansion affecting millions",econ:"Roman economic integration",cultural:"Fall of the Republic",reach:"Mediterranean world",timeline:"Roman transition happens differently"}},
  {id:"augustus",name:"Augustus Caesar",born:-63,died:14,cat:"politics",field:"Roman Empire",
    quote:"I found Rome a city of bricks and left it a city of marble.",
    contributions:["Founded Roman Empire","Pax Romana (200 years of peace)","Administrative transformation","Cultural golden age"],
    r:0.25,reasoning:"The Republic was dying — someone would have become first emperor. But Augustus's specific genius was making it last. He created institutions that endured for centuries. Antony would have been different.",
    counterfactual:"Without Augustus, someone else becomes first emperor — probably Antony if he defeats Octavian's generals, or one of the other triumvirs. But Augustus's genius was in institutional design: he created an empire that pretended to be a republic, gave the Senate a role, established provincial administration that lasted centuries. Antony, with his Hellenistic court style, would have created something more obviously autocratic and probably less stable.",
    ripples:[
      {category:"Imperial System",detail:"The Roman Empire looks more like Hellenistic kingdoms — openly autocratic, less stable, shorter-lived."},
      {category:"Pax Romana",detail:"Without Augustus's careful system, civil wars continue more frequently. No 200-year peace."},
      {category:"Cultural Golden Age",detail:"The Augustan age of Virgil, Horace, and Ovid doesn't happen. Roman literature develops differently."},
      {category:"Provincial Administration",detail:"Without Augustus's reforms, provinces are governed more chaotically. Roman Empire fragments earlier."}
    ],
    timeline:[
      {year:-31,happened:"Augustus defeats Antony at Actium",alternate:"Antony wins; Hellenistic-style empire centered on Alexandria"},
      {year:-27,happened:"Augustus establishes principate system",alternate:"Open autocracy instead; Senate abolished or irrelevant"},
      {year:9,happened:"Varus disaster in Germany; Augustus limits expansion",alternate:"Different emperor might overextend or collapse earlier"},
      {year:14,happened:"Augustus dies; system transfers peacefully",alternate:"Succession crisis; civil war resumes"}
    ],
    impact:{lives:"200 years of relative peace for 60M+",econ:"Roman economic integration",cultural:"Western civilization foundation",reach:"Mediterranean world",timeline:"Roman Empire shorter without him"}},
  {id:"qinshi",name:"Qin Shi Huang",born:-259,died:-210,cat:"politics",field:"Chinese Unification",
    quote:"I have collected all the writings of the Empire and burnt those which were of no use.",
    contributions:["First unified China","Standardized writing and measures","Began Great Wall","Legalist governance"],
    r:0.25,reasoning:"China was trending toward consolidation, but Qin's brutal efficiency — standardizing everything from axle widths to writing — created a template for all subsequent Chinese history.",
    counterfactual:"Without Qin Shi Huang, China might still have unified — the Warring States period was creating larger and larger kingdoms. But the specific form of unification — Legalist, brutally standardized, administratively centralized — was Qin's choice. A different unifier might have created a looser federation, preserved more regional scripts, or ruled through Confucian propriety rather than law. All subsequent Chinese history — the very concept of 'China' as a unified civilization — might look different.",
    ripples:[
      {category:"Chinese Unity",detail:"Without Qin's template, China might be like Europe — multiple states with shared culture but separate governments."},
      {category:"Written Language",detail:"Different regional scripts might survive. Chinese written unity — which transcends spoken dialects — might not exist."},
      {category:"Great Wall",detail:"The Wall concept might not exist, or might take different form. Northern defense organized differently."},
      {category:"Imperial Model",detail:"Chinese empire governed through different principles — perhaps Confucian from the start, possibly more decentralized."}
    ],
    timeline:[
      {year:-221,happened:"Qin unifies China under one rule",alternate:"Warring States period continues longer; different kingdom might unify"},
      {year:-220,happened:"Writing, weights, measures standardized",alternate:"Regional variations persist; China less unified culturally"},
      {year:-213,happened:"Burning of books and scholars",alternate:"More diverse philosophical traditions survive"},
      {year:-210,happened:"Qin dies; dynasty collapses quickly",alternate:"Different unifier might create more durable dynasty"}
    ],
    impact:{lives:"Unified 40M+ under one rule",econ:"Standardized Chinese economy",cultural:"Created Chinese imperial model",reach:"All subsequent Chinese history",timeline:"China remains fragmented longer"}},
  {id:"cleopatra",name:"Cleopatra VII",born:-69,died:-30,cat:"politics",field:"Egyptian Pharaoh",
    quote:"I will not be triumphed over.",
    contributions:["Last Ptolemaic ruler","Alliances with Caesar and Antony","Preserved Egyptian independence","Shaped Roman Republic's fall"],
    r:0.35,reasoning:"Her personal relationships with Caesar and Antony weren't replicable. A different Egyptian monarch would have been annexed immediately. She bought Egypt two more decades through force of personality.",
    counterfactual:"Without Cleopatra, Egypt falls to Rome decades earlier. A weaker Ptolemaic ruler couldn't have seduced Caesar or Antony — and seduction here was political genius, not merely personal charm. The Roman civil wars proceed differently: no Antony-Cleopatra alliance, no Battle of Actium as decisive Mediterranean showdown. Egypt becomes a Roman province earlier, its grain feeding Rome's armies sooner. The romantic legend of Cleopatra — which shaped Western images of Egypt for millennia — doesn't exist.",
    ripples:[
      {category:"Egyptian Independence",detail:"Egypt annexed 20-30 years earlier. The treasure of the Ptolemies seized by Rome sooner, funding different wars."},
      {category:"Roman Civil Wars",detail:"Without Cleopatra's alliance, Antony's position is weaker. Octavian's victory comes easier or through different path."},
      {category:"Cultural Image",detail:"No Cleopatra legend. Western images of Egypt lack this iconic figure. Shakespeare's play doesn't exist."},
      {category:"Gender and Power",detail:"The image of female power embodied by Cleopatra doesn't enter Western culture in the same way."}
    ],
    timeline:[
      {year:-48,happened:"Cleopatra allies with Caesar",alternate:"Weaker Egyptian ruler overthrown; Egypt annexed immediately"},
      {year:-41,happened:"Cleopatra allies with Antony",alternate:"No Egyptian alliance; Antony fights Octavian from weaker position"},
      {year:-31,happened:"Battle of Actium",alternate:"Different climactic battle or Octavian wins earlier without dramatic showdown"},
      {year:-30,happened:"Cleopatra's death; Egypt becomes Roman province",alternate:"Egypt already Roman province for decades"}
    ],
    impact:{lives:"Delayed Roman annexation",econ:"Controlled Egypt's grain wealth",cultural:"Enduring symbol of female power",reach:"Mediterranean world",timeline:"Rome absorbs Egypt 20 years earlier"}},
  {id:"akbar",name:"Akbar the Great",born:1542,died:1605,cat:"politics",field:"Mughal Empire",
    quote:"A monarch should be ever intent on conquest, otherwise his neighbours rise in arms against him.",
    contributions:["Religious tolerance policy","Administrative reforms","Din-i-Ilahi syncretic faith","Cultural golden age"],
    r:0.20,reasoning:"His policy of religious tolerance was a personal philosophy, not Mughal tradition. Successors abandoned it. Akbar's combination of military conquest, administrative genius, and interfaith curiosity was unique.",
    counterfactual:"Without Akbar, the Mughal Empire still exists — Babur founded it, Humayun recovered it — but it might not have thrived. Akbar's religious tolerance (sulh-i-kul) was a personal philosophy, not inherited policy. His successors Jahangir and Shah Jahan maintained it, but Aurangzeb abandoned it. Without Akbar's example of Hindu-Muslim synthesis, the Mughal period might have been more conflictual from the start, the empire smaller, its art and architecture less magnificent.",
    ripples:[
      {category:"Religious Policy",detail:"Without Akbar's tolerance model, Hindu-Muslim relations in India more conflictual. The syncretic tradition weaker."},
      {category:"Empire Size",detail:"Without Akbar's military and administrative genius, Mughal Empire might never reach its peak size and stability."},
      {category:"Cultural Golden Age",detail:"The magnificent blend of Persian, Hindu, and Islamic art that defines Mughal culture might not emerge."},
      {category:"Modern India",detail:"Hindu-Muslim coexistence traditions weaker. Partition dynamics might be even more violent."}
    ],
    timeline:[
      {year:1556,happened:"Akbar becomes emperor at age 13",alternate:"Different young Mughal ruler, possibly with regents who pursue conquest without synthesis"},
      {year:1575,happened:"Din-i-Ilahi syncretic religion proposed",alternate:"No interfaith dialogue; Mughal court remains traditionally Islamic"},
      {year:1580,happened:"Administrative reforms create durable system",alternate:"Mughal administration remains less efficient; empire fragments earlier"},
      {year:1605,happened:"Akbar dies; his model partially continues",alternate:"No model to continue or abandon; different trajectory entirely"}
    ],
    impact:{lives:"Ruled 100M+ people peacefully",econ:"Mughal India: 25% of world GDP",cultural:"Hindu-Muslim synthesis",reach:"Indian subcontinent",timeline:"Mughal decline accelerated without him"}},
  {id:"bismarck",name:"Otto von Bismarck",born:1815,died:1898,cat:"politics",field:"German Statesmanship",
    quote:"Politics is the art of the possible.",
    contributions:["Unified Germany through three wars","Realpolitik diplomacy","Pioneered welfare state","Maintained European balance"],
    r:0.25,reasoning:"German unification was in the air, but Bismarck's specific method — three quick wars, Prussian dominance — wasn't inevitable. His diplomatic juggling kept Europe peaceful until he left.",
    counterfactual:"Without Bismarck, German unification still happens — nationalism was too strong. But it might happen differently: through revolution (1848-style), or through Austrian leadership, or more gradually. Bismarck's specific achievement was quick, decisive wars followed by diplomatic restraint. He unified Germany in 1871 and then kept it peaceful for 19 years. Without his restraint, WWI might have started in the 1870s or 1880s.",
    ripples:[
      {category:"Unification Method",detail:"Germany unified through revolution or Austrian-led federation or gradual merger. Different timing, different leadership, different constitution."},
      {category:"European Balance",detail:"Without Bismarck's diplomatic juggling, the new German state immediately antagonizes France, Russia, or Britain."},
      {category:"Welfare State",detail:"Bismarck invented social insurance to undercut socialists. Without him, welfare state might develop later or differently."},
      {category:"WWI Timing",detail:"Without Bismarck's restraint, a major European war might occur earlier. Or his successors might have managed better."}
    ],
    timeline:[
      {year:1862,happened:"Bismarck becomes Prussian minister-president",alternate:"Different leader pursues German unification differently"},
      {year:1871,happened:"German Empire proclaimed after three quick wars",alternate:"Unification through revolution, Austrian leadership, or gradual merger"},
      {year:1883,happened:"Social insurance laws pioneer welfare state",alternate:"Welfare state develops later, differently, or not at all"},
      {year:1890,happened:"Bismarck dismissed; his alliance system decays",alternate:"Different leader might maintain system better — or worse"}
    ],
    impact:{lives:"Created nation of 40M+",econ:"German industrial power",cultural:"Modern diplomacy model",reach:"Germany, European order",timeline:"Germany unified differently or not at all"}},
  {id:"fdr",name:"Franklin D. Roosevelt",born:1882,died:1945,cat:"politics",field:"US Presidency",
    quote:"The only thing we have to fear is fear itself.",
    contributions:["New Deal programs","Led US through WWII","United Nations vision","Four-term presidency"],
    r:0.40,reasoning:"Another Democrat would have tried stimulus programs, but FDR's specific personality — fireside chats, coalition-building — shaped the New Deal's form. His wartime leadership was less unique; the US would have fought.",
    counterfactual:"Without FDR, the Depression still prompts government response — Hoover was already intervening, just inadequately. A different Democrat (Al Smith? Newton Baker?) tries different programs. The specific New Deal coalition — labor, farmers, African Americans, urban machines — might not form. Social Security might look different or not exist. Wartime leadership is easier to replace; the US fights WWII regardless. The UN still emerges, perhaps with different structure.",
    ripples:[
      {category:"New Deal Programs",detail:"Different programs address the Depression. Social Security might have different structure or not exist. Labor relations develop differently."},
      {category:"Democratic Coalition",detail:"The New Deal coalition that dominates American politics for 40 years might not form in the same way."},
      {category:"Wartime Leadership",detail:"US fights WWII regardless; a different president manages the war, possibly with different relationships with Churchill and Stalin."},
      {category:"Four-Term Precedent",detail:"No four-term presidency; the 22nd Amendment might not be passed."}
    ],
    timeline:[
      {year:1933,happened:"FDR inaugurated, launches New Deal",alternate:"Different Democrat tries different approach to Depression"},
      {year:1935,happened:"Social Security Act passed",alternate:"Pension system designed differently or not created"},
      {year:1941,happened:"Pearl Harbor; FDR leads US into WWII",alternate:"US enters war regardless; different commander-in-chief"},
      {year:1945,happened:"FDR dies; Truman takes over",alternate:"Different president manages end of war and early Cold War"}
    ],
    impact:{lives:"60M+ Americans through Depression",econ:"Modern American government",cultural:"Presidential leadership model",reach:"United States, global",timeline:"New Deal looks different; WWII outcome similar"}},
  {id:"elizabeth1",name:"Elizabeth I",born:1533,died:1603,cat:"politics",field:"English Monarchy",
    quote:"I have the body of a weak and feeble woman, but I have the heart and stomach of a king.",
    contributions:["Elizabethan Settlement","Defeated Spanish Armada","English Renaissance","Established Protestant England"],
    r:0.35,reasoning:"Her religious settlement — neither fully Catholic nor Puritan — reflected personal pragmatism. The Armada's defeat had luck, but her preparations mattered. The cultural flourishing happened under her stability.",
    counterfactual:"Without Elizabeth, her half-sister Mary I continues ruling (if she lives longer) or the succession is contested. England might have returned to Catholicism or descended into religious civil war. The Elizabethan Settlement — that uniquely English compromise between Protestant theology and Catholic ceremony — was Elizabeth's personal creation. Without her 45 years of stability, no Shakespeare, no Drake, no Protestant England.",
    ripples:[
      {category:"Religious Settlement",detail:"Without Elizabeth's compromise, England becomes either firmly Catholic (under Mary) or faces religious civil war decades earlier than the 1640s."},
      {category:"Spanish Armada",detail:"A weaker monarch might not have prepared defenses or inspired resistance. Spanish invasion succeeds or doesn't happen under different circumstances."},
      {category:"Cultural Golden Age",detail:"No stable Elizabethan age means no Shakespeare (or a very different one), no Marlowe, no English Renaissance."},
      {category:"Colonial Expansion",detail:"English maritime expansion might be delayed or take different form without Elizabeth's patronage of explorers."}
    ],
    timeline:[
      {year:1558,happened:"Elizabeth becomes queen",alternate:"Mary I lives longer or succession contested; different religious direction"},
      {year:1559,happened:"Elizabethan Settlement establishes English religion",alternate:"No compromise; England either Catholic or torn by civil war"},
      {year:1588,happened:"Spanish Armada defeated",alternate:"Without Elizabeth's preparations, invasion succeeds or doesn't happen"},
      {year:1603,happened:"Elizabeth dies; 45 years of stability end",alternate:"Without this stability, English culture and empire develop differently"}
    ],
    impact:{lives:"Religious peace in England",econ:"English mercantile expansion",cultural:"Shakespearean golden age",reach:"England, English-speaking world",timeline:"English religious wars possible without her"}},
  {id:"charlemagne",name:"Charlemagne",born:747,died:814,cat:"politics",field:"Frankish Empire",
    quote:"To have another language is to possess a second soul.",
    contributions:["United Western Europe","Carolingian Renaissance","Crowned Holy Roman Emperor","Educational reforms"],
    r:0.30,reasoning:"The Frankish kingdom was powerful, but Charlemagne's combination of military campaigns, educational revival, and alliance with the papacy created something new — a revived Western Roman Empire concept.",
    counterfactual:"Without Charlemagne, the Frankish kingdom still exists but doesn't become an empire. No unification of France, Germany, and Italy under one rule. The Carolingian Renaissance — which preserved classical learning through the Dark Ages — doesn't happen or happens differently. The concept of a revived Western Roman Empire doesn't emerge, so the Holy Roman Empire might never exist. Medieval European political thought develops along completely different lines.",
    ripples:[
      {category:"Western European Unity",detail:"Without Charlemagne's conquests, Western Europe remains fragmented into smaller kingdoms. The concept of 'Europe' as a political unit weaker."},
      {category:"Classical Learning",detail:"The Carolingian Renaissance that preserved Roman learning might not happen. More classical texts lost. Medieval scholarship impoverished."},
      {category:"Holy Roman Empire",detail:"The papal-imperial alliance that creates the Holy Roman Emperor concept doesn't form. European political theory develops differently."},
      {category:"Church Relations",detail:"The close alliance between Frankish rulers and popes develops differently. Church-state relations in Europe have different model."}
    ],
    timeline:[
      {year:768,happened:"Charlemagne becomes sole king of Franks",alternate:"Frankish kingdom divided differently; no unifying leader emerges"},
      {year:782,happened:"Carolingian Renaissance learning revival",alternate:"Classical learning preservation happens differently or not at all"},
      {year:800,happened:"Charlemagne crowned Emperor by Pope",alternate:"No revival of Western Roman Emperor concept; papacy finds other protectors"},
      {year:814,happened:"Charlemagne dies; empire begins splitting",alternate:"No empire to split; Europe remains fragmented throughout"}
    ],
    impact:{lives:"United Western Europe",econ:"Medieval economic development",cultural:"Preserved classical learning",reach:"Western Europe",timeline:"Medieval Europe more fragmented"}},
  {id:"bolivar",name:"Simón Bolívar",born:1783,died:1830,cat:"politics",field:"Revolutionary Leadership",
    quote:"The art of victory is learned in defeat.",
    contributions:["Liberated six South American nations","Gran Colombia vision","Republican governance","'El Libertador'"],
    r:0.40,reasoning:"Independence movements were erupting across Latin America. Bolívar's specific achievement was unifying the northern campaigns. Independence was coming; the specific timing and map were his influence.",
    counterfactual:"Without Bolívar, South American independence still happens — Napoleon's invasion of Spain fatally weakened colonial control. San Martín liberates the south, others emerge in the north. But without Bolívar's unifying vision of Gran Colombia, the continent fragments even faster. The specific borders of modern Venezuela, Colombia, Ecuador, Peru, and Bolivia might look completely different. The republican ideals he spread might have been weaker without his military prestige.",
    ripples:[
      {category:"Independence Pattern",detail:"Independence happens more piecemeal without Bolívar's continental campaigns. Each region finds its own path more slowly."},
      {category:"Gran Colombia",detail:"The vision of a unified northern South America never exists. Colombia, Venezuela, Ecuador never share even brief union."},
      {category:"National Borders",detail:"Modern borders of northern South America look completely different. Bolivia might not exist as separate nation."},
      {category:"Republican Ideals",detail:"Without Bolívar's prestige behind republican government, more regions might have sought monarchies or caudillo rule."}
    ],
    timeline:[
      {year:1811,happened:"Venezuelan independence declared",alternate:"Independence declared regardless; different military leadership"},
      {year:1819,happened:"Gran Colombia established under Bolívar",alternate:"No unified state; fragmented republics from the start"},
      {year:1824,happened:"Battle of Ayacucho ends Spanish rule",alternate:"Spanish rule ends differently; San Martín or others finish the job"},
      {year:1830,happened:"Bolívar dies as Gran Colombia collapses",alternate:"No Gran Colombia to collapse; fragmentation happens earlier"}
    ],
    impact:{lives:"Freed millions from Spanish rule",econ:"Independent Latin American economies",cultural:"Libertador mythology",reach:"Venezuela, Colombia, Ecuador, Peru, Bolivia, Panama",timeline:"Independence delayed 10-20 years"}},
  {id:"ataturk",name:"Mustafa Kemal Atatürk",born:1881,died:1938,cat:"politics",field:"Turkish Republic",
    quote:"Peace at home, peace in the world.",
    contributions:["Founded Turkish Republic","Abolished caliphate","Secularization reforms","Latin alphabet adoption"],
    r:0.20,reasoning:"The Ottoman Empire was collapsing, but Atatürk's specific vision — radical secularization, Western orientation — was personal. Other leaders might have preserved more Islamic elements.",
    counterfactual:"Without Atatürk, the Ottoman Empire still collapses after WWI — the Allies guaranteed that. But the successor state looks completely different. Atatürk's radical secularization — abolishing the caliphate, banning the fez, adopting Latin alphabet, giving women the vote — was personal ideology, not inevitable. Another Turkish leader might have created an Islamic republic, preserved the caliphate, or accepted the Sèvres Treaty's partition. Modern Turkey is Atatürk's creation.",
    ripples:[
      {category:"Secularization",detail:"Without Atatürk, Turkey becomes an Islamic state, possibly preserving the caliphate. The entire Muslim world develops differently."},
      {category:"Territorial Integrity",detail:"Without Atatürk's military victories, the Treaty of Sèvres might have partitioned Anatolia. Kurdistan might exist. Armenia larger."},
      {category:"Alphabet and Culture",detail:"Ottoman script continues. Turkey remains oriented toward Islamic world rather than Europe."},
      {category:"Model for Others",detail:"The model of secular Muslim-majority state doesn't exist. Egypt, Iran, others develop without Turkish template."}
    ],
    timeline:[
      {year:1919,happened:"Atatürk begins resistance to Allied partition",alternate:"Turkey accepts Sèvres Treaty partition; Anatolia divided"},
      {year:1923,happened:"Turkish Republic founded, Caliphate abolished",alternate:"Ottoman successor state preserves caliphate; Islamic orientation"},
      {year:1928,happened:"Latin alphabet adopted",alternate:"Arabic script continues; Turkey remains culturally oriented East"},
      {year:1934,happened:"Women given vote; surnames required",alternate:"Traditional gender roles preserved; society modernizes more slowly"}
    ],
    impact:{lives:"Transformed Turkish society",econ:"Turkish modernization",cultural:"Secular Muslim-majority state model",reach:"Turkey, influenced other nations",timeline:"Turkey develops very differently"}},
  {id:"mao",name:"Mao Zedong",born:1893,died:1976,cat:"politics",field:"Revolutionary Leadership",
    quote:"Political power grows out of the barrel of a gun.",
    contributions:["Founded People's Republic of China","Land reform","Cultural Revolution","Guerrilla warfare doctrine"],
    r:0.30,reasoning:"Chinese communism would have existed without Mao, but its specific character — peasant-based revolution, cult of personality, Cultural Revolution — was Mao's. A different China, likely less catastrophic and less transformative.",
    counterfactual:"Without Mao, Chinese communism still exists — the CCP had other leaders like Zhou Enlai, Liu Shaoqi, Deng Xiaoping. But the specific catastrophes — the Great Leap Forward killing 15-55 million, the Cultural Revolution destroying a generation — were Mao's personal projects. A different leader might have created a China more like Vietnam: communist but not so convulsive. Alternatively, Chiang Kai-shek might have won the civil war, creating a very different China.",
    ripples:[
      {category:"Great Leap Forward",detail:"Without Mao's insistence on impossible steel quotas and collectivization, 15-55 million people don't starve. China industrializes more gradually."},
      {category:"Cultural Revolution",detail:"Without Mao's attack on 'capitalist roaders,' intellectuals and officials aren't persecuted. An entire generation isn't 'sent down.'"},
      {category:"Korean War",detail:"A different Chinese leader might not have intervened in Korea, changing that war's outcome entirely."},
      {category:"Sino-Soviet Split",detail:"Mao's personal rivalry with Khrushchev drove the split. Different leaders might have maintained alliance."}
    ],
    timeline:[
      {year:1949,happened:"Mao proclaims People's Republic",alternate:"CCP wins under different leader, or Nationalists win civil war"},
      {year:1958,happened:"Great Leap Forward begins",alternate:"Gradual industrialization without mass famine"},
      {year:1966,happened:"Cultural Revolution launched",alternate:"No attack on 'capitalist roaders'; China develops more steadily"},
      {year:1976,happened:"Mao dies; Deng reforms begin",alternate:"Earlier reform without waiting for Mao's death"}
    ],
    impact:{lives:"Great Leap Forward: 15-55M deaths",econ:"China's communist transformation",cultural:"Defined Chinese 20th century",reach:"1.4 billion Chinese",timeline:"China's path radically different"}},
  {id:"lenin",name:"Vladimir Lenin",born:1870,died:1924,cat:"politics",field:"Revolutionary Leadership",
    quote:"There are decades where nothing happens; and there are weeks where decades happen.",
    contributions:["Led Bolshevik Revolution","Founded Soviet Union","Vanguard party theory","New Economic Policy"],
    r:0.30,reasoning:"Russia was ripe for revolution in 1917. But the Bolsheviks were a minority — Lenin's decision to seize power in October, when others hesitated, was personal. A different revolution might have emerged.",
    counterfactual:"Without Lenin, Russia still has a revolution in 1917 — the Tsar was doomed. But the February Revolution produced a democratic provisional government. Without Lenin's insistence on seizing power in October, Russia might have become a social democracy, not a communist state. The Mensheviks, Socialist Revolutionaries, or even Kerensky's liberals might have prevailed. No Soviet Union means no Stalin, no Cold War as we knew it, no communist Eastern Europe.",
    ripples:[
      {category:"October Revolution",detail:"Without Lenin pushing for immediate seizure, the Provisional Government continues. Russia becomes social democracy, not communist state."},
      {category:"Soviet Model",detail:"No Bolshevik state means no template for communist parties worldwide. China, Cuba, Vietnam develop differently."},
      {category:"World Wars",detail:"A democratic Russia might have stayed in WWI longer, changing that war's outcome. WWII dynamics completely different."},
      {category:"Cold War",detail:"No Soviet Union means no Cold War as we knew it. The entire 20th century restructured."}
    ],
    timeline:[
      {year:1917,happened:"Lenin leads October Revolution",alternate:"Provisional Government survives; democratic Russia emerges"},
      {year:1918,happened:"Treaty of Brest-Litovsk; civil war begins",alternate:"Russia stays in WWI; different peace settlement"},
      {year:1921,happened:"New Economic Policy introduced",alternate:"No communist experiment to moderate; different economic path"},
      {year:1924,happened:"Lenin dies; Stalin eventually takes power",alternate:"No Stalin because no Soviet system; entirely different Russia"}
    ],
    impact:{lives:"Soviet system affecting hundreds of millions",econ:"Command economy model",cultural:"Communist ideology spread",reach:"USSR, global communism",timeline:"Russian Revolution takes different form"}},
  {id:"thatcher",name:"Margaret Thatcher",born:1925,died:2013,cat:"politics",field:"British Leadership",
    quote:"The lady's not for turning.",
    contributions:["Privatization program","Defeated miners' strike","Falklands War victory","Neoliberal policies"],
    r:0.45,reasoning:"Britain's post-war consensus was crumbling; reform was coming. But Thatcher's approach — confrontational, ideological — wasn't inevitable. A different leader might have reformed more gradually.",
    counterfactual:"Without Thatcher, Britain still faces economic crisis in the 1970s — the 'British disease' was real. A different Conservative leader (Heath? Whitelaw?) or continued Labour rule tries different remedies. Privatization happens more slowly or not at all. The miners' union isn't crushed in the same way. British politics might have evolved toward continental European social democracy rather than Anglo-American neoliberalism. The 'special relationship' with Reagan-era America looks different.",
    ripples:[
      {category:"Privatization",detail:"British Rail, British Telecom, British Gas remain state-owned longer or privatized differently. The global privatization wave might be weaker."},
      {category:"Union Power",detail:"Without Thatcher's confrontation, British unions remain powerful longer. Industrial relations develop along German or Scandinavian lines."},
      {category:"Falklands War",detail:"A different PM might have negotiated or lost the war. Thatcher's political survival depended on military victory."},
      {category:"Global Neoliberalism",detail:"Without Thatcher-Reagan partnership, the neoliberal revolution is weaker globally."}
    ],
    timeline:[
      {year:1979,happened:"Thatcher becomes Prime Minister",alternate:"Labour continues or different Conservative leader; gradualist approach"},
      {year:1982,happened:"Falklands War victory saves Thatcher",alternate:"War lost or never fought; Thatcher's career ends earlier"},
      {year:1984,happened:"Miners' strike defeated",alternate:"Compromise with unions; British labor remains stronger"},
      {year:1990,happened:"Thatcher forced out; her revolution permanent",alternate:"Without her, Britain evolves toward European social democracy"}
    ],
    impact:{lives:"Transformed British economy",econ:"Privatization model",cultural:"End of post-war consensus",reach:"UK, influenced global policy",timeline:"British reform happens more gradually"}},
  
  // MORE POLITICS
  {id:"nehru",name:"Jawaharlal Nehru",born:1889,died:1964,cat:"politics",field:"Indian Independence",
    quote:"A moment comes, which comes but rarely in history, when we step out from the old to the new.",
    contributions:["First Indian Prime Minister","Non-alignment movement founder","Democratic India foundation","Industrial policy"],
    r:0.40,reasoning:"Indian independence was coming with or without Nehru. But his specific vision — secular, democratic, non-aligned — shaped India's character. Patel or others might have led differently. The democratic tradition wasn't guaranteed.",
    counterfactual:"Without Nehru, India still becomes independent — that was inevitable by 1947. But Nehru's specific vision — secular democracy, non-alignment, mixed economy — wasn't guaranteed. Sardar Patel might have led a more Hindu-nationalist India. Subhas Chandra Bose (if alive) might have created a more authoritarian state. The Non-Aligned Movement might not exist. India's commitment to democracy through its early decades wasn't inevitable; many new nations became dictatorships.",
    ripples:[
      {category:"Secular Democracy",detail:"Without Nehru's secular vision, India might have become officially Hindu, changing Hindu-Muslim relations and Pakistan dynamics."},
      {category:"Non-Alignment",detail:"The Non-Aligned Movement might not exist. India might have allied with US or USSR rather than leading the third way."},
      {category:"Economic Policy",detail:"Nehru's mixed economy and Five-Year Plans shaped India for decades. Different leader, different economic model."},
      {category:"Democratic Stability",detail:"India's democratic survival wasn't guaranteed. A different leader might have become authoritarian like many post-colonial states."}
    ],
    timeline:[
      {year:1947,happened:"Nehru becomes first Prime Minister",alternate:"Patel or other leader shapes India differently"},
      {year:1955,happened:"Bandung Conference; Non-Aligned Movement begins",alternate:"India aligns with Cold War bloc or no third-world movement"},
      {year:1962,happened:"China-India war humiliates Nehru",alternate:"Different leader might have handled China differently"},
      {year:1964,happened:"Nehru dies; Shastri then Indira succeed",alternate:"Different founding leader creates different succession dynamics"}
    ],
    impact:{lives:"400M+ Indians governed",econ:"Indian industrial policy",cultural:"Secular democracy model",reach:"India, Non-Aligned Movement",timeline:"India potentially more religious, less democratic"}},
  {id:"hochiminh",name:"Ho Chi Minh",born:1890,died:1969,cat:"politics",field:"Vietnamese Independence",
    quote:"Nothing is more precious than independence and freedom.",
    contributions:["Vietnamese independence","Defeated French and American forces","Vietnamese Communist Party founder","National unification"],
    r:0.30,reasoning:"Vietnamese nationalism would have found a leader, but Ho's combination — internationalist experience, patient strategy, iconic status — was unique. His moral authority held the movement together through decades of war.",
    counterfactual:"Without Ho Chi Minh, Vietnamese nationalism still exists — the independence movement was powerful. But Ho's unique combination of qualities — his years in Paris and Moscow, his patient strategy, his iconic 'Uncle Ho' image — held the movement together through decades of war against France and America. A different leader might have been more aggressive (provoking American escalation earlier) or less persistent (accepting partition). The Vietnam War might have ended very differently.",
    ripples:[
      {category:"Independence Movement",detail:"Vietnamese nationalism finds different leader. Movement might be more divided, less patient, or more willing to compromise on partition."},
      {category:"French War",detail:"Without Ho's leadership, the Viet Minh might lose to France or win differently. Dien Bien Phu might not happen."},
      {category:"American War",detail:"A different leader might have provoked or avoided American intervention differently. War timeline and outcome change."},
      {category:"Communist Model",detail:"Vietnamese communism might look more Soviet or Chinese without Ho's specific adaptation."}
    ],
    timeline:[
      {year:1945,happened:"Ho declares Vietnamese independence",alternate:"Different nationalist leader emerges; movement more fragmented"},
      {year:1954,happened:"Dien Bien Phu defeats French",alternate:"Without Ho's leadership, French might hold longer or Viet Minh might win earlier"},
      {year:1965,happened:"American escalation begins",alternate:"Different Vietnamese leader might provoke or avoid US intervention differently"},
      {year:1969,happened:"Ho dies before reunification",alternate:"Different leader; reunification might come sooner or later or not at all"}
    ],
    impact:{lives:"Vietnam unified under communism",econ:"Vietnamese development path",cultural:"Anti-colonial icon",reach:"Vietnam, Southeast Asia",timeline:"Vietnamese independence takes different form"}},
  {id:"nasser",name:"Gamal Abdel Nasser",born:1918,died:1970,cat:"politics",field:"Egyptian Leadership",
    quote:"What was taken by force can only be restored by force.",
    contributions:["Suez Crisis victory","Pan-Arab nationalism","Aswan Dam construction","Free Officers Revolution"],
    r:0.30,reasoning:"Arab nationalism was rising, but Nasser embodied it uniquely. His defiance during Suez made him the Arab world's hero. A different Egyptian leader might not have challenged colonial powers so dramatically.",
    counterfactual:"Without Nasser, Egypt still has a revolution — the Free Officers were a group, not just Nasser. But pan-Arab nationalism loses its most charismatic voice. The Suez Crisis might not have the same galvanizing effect. Egypt might have remained more aligned with the West, or another Arab leader (perhaps in Iraq or Syria) might have become the nationalist icon. The Arab-Israeli conflict develops with different Egyptian leadership.",
    ripples:[
      {category:"Suez Crisis",detail:"Without Nasser's nationalization and defiance, Suez Crisis doesn't happen or has different character. British-French colonialism might persist longer."},
      {category:"Pan-Arab Nationalism",detail:"Without Nasser's charisma, pan-Arab movement is weaker. The brief Egypt-Syria union (UAR) doesn't happen."},
      {category:"Cold War Alignment",detail:"A different Egyptian leader might align with West rather than playing superpowers against each other."},
      {category:"Arab-Israeli Conflict",detail:"The 1967 and 1973 wars happen under different Egyptian leadership with potentially different outcomes."}
    ],
    timeline:[
      {year:1952,happened:"Free Officers overthrow monarchy",alternate:"Revolution happens; different officer emerges as leader"},
      {year:1956,happened:"Suez Crisis makes Nasser Arab hero",alternate:"No nationalization or handled differently; no galvanizing moment"},
      {year:1958,happened:"United Arab Republic formed with Syria",alternate:"No pan-Arab union attempt; nationalism takes different form"},
      {year:1967,happened:"Six-Day War disaster",alternate:"Different Egyptian leader; war might be avoided or outcome different"}
    ],
    impact:{lives:"Arab political consciousness",econ:"Suez nationalization",cultural:"Pan-Arab identity",reach:"Middle East, Africa",timeline:"Arab nationalism less unified"}},
  {id:"marcos",name:"Ferdinand Marcos",born:1917,died:1989,cat:"politics",field:"Philippine Leadership",
    quote:"Leadership is the other side of the coin of loneliness.",
    contributions:["Martial law declaration","Authoritarian rule","Economic mismanagement","People Power Revolution target"],
    r:0.50,reasoning:"Philippine authoritarianism might have emerged differently. Marcos's specific corruption and Imelda's excess were personal choices. The People Power Revolution specifically targeted him; another dictator might have handled transition differently.",
    counterfactual:"Without Marcos, Philippine authoritarianism might still emerge — the Cold War context encouraged strongmen. But Marcos's specific corruption was extraordinary: estimates of $5-10 billion stolen, Imelda's thousands of shoes, crony capitalism that enriched his allies while impoverishing the nation. A different authoritarian might have been less personally corrupt, managed the economy better. The People Power Revolution that overthrew him was a response to his specific excesses.",
    ripples:[
      {category:"Philippine Economy",detail:"Without Marcos's corruption, Philippine economy might have followed the 'tiger' path of South Korea or Taiwan."},
      {category:"People Power",detail:"The specific People Power Revolution that inspired movements globally might not happen or happen differently."},
      {category:"Aquino Family",detail:"Benigno Aquino's assassination sparked the revolution. Without Marcos, different political dynasty."},
      {category:"Marcos Family",detail:"The political dynasty continues today. Without Ferdinand, different family might dominate."}
    ],
    timeline:[
      {year:1972,happened:"Martial law declared",alternate:"Different authoritarian or continued democracy; uncertain"},
      {year:1983,happened:"Aquino assassinated; opposition galvanized",alternate:"Different political trigger; different opposition"},
      {year:1986,happened:"People Power Revolution; Marcos flees",alternate:"Different transition; possibly more violent"},
      {year:2024,happened:"Marcos Jr. is president",alternate:"Different political families dominate Philippines"}
    ],
    impact:{lives:"Filipino democracy suppressed",econ:"Philippine economic decline",cultural:"Dictator archetype",reach:"Philippines",timeline:"Philippine history very different"}},
  {id:"mugabe",name:"Robert Mugabe",born:1924,died:2019,cat:"politics",field:"Zimbabwean Leadership",
    quote:"The only white man you can trust is a dead white man.",
    contributions:["Zimbabwe independence leader","Land reform (violent)","Economic collapse","37 years in power"],
    r:0.40,reasoning:"Zimbabwean independence was coming. Mugabe's specific choices — refusing to leave power, violent land reform, economic mismanagement — were personal. A different leader might have managed the post-colonial transition better.",
    counterfactual:"Without Mugabe, Zimbabwean independence still comes — ZANU and ZAPU were fighting for it. But Mugabe's specific choices shaped the disaster: refusing to leave power, violent farm seizures that collapsed agricultural production, printing money into hyperinflation. Joshua Nkomo or another leader might have managed the transition better. Zimbabwe had the 'breadbasket of Africa'; under different leadership, it might have prospered.",
    ripples:[
      {category:"Land Reform",detail:"Different approach to addressing colonial land injustice. Possibly gradual, compensated, maintaining production."},
      {category:"Economy",detail:"Without hyperinflation and economic collapse, Zimbabwe remains regional power. Different trajectory."},
      {category:"Regional Model",detail:"Zimbabwe as failed state becomes cautionary tale. Under different leadership, might have been success story."},
      {category:"Brain Drain",detail:"Millions of educated Zimbabweans fled. Different leadership might have retained them."}
    ],
    timeline:[
      {year:1980,happened:"Zimbabwe independent; Mugabe PM",alternate:"Different leader; different early policies"},
      {year:2000,happened:"Farm seizures begin economic collapse",alternate:"Land reform handled differently; agriculture maintained"},
      {year:2008,happened:"Hyperinflation reaches 89.7 sextillion percent",alternate:"Sound economic management; Zimbabwe prospers"},
      {year:2017,happened:"Mugabe finally ousted",alternate:"Different leader might have transitioned power earlier"}
    ],
    impact:{lives:"Zimbabwean economic collapse",econ:"Hyperinflation, exodus",cultural:"Liberation hero to dictator arc",reach:"Zimbabwe, Africa",timeline:"Zimbabwe potentially more prosperous"}},
  {id:"pinochet",name:"Augusto Pinochet",born:1915,died:2006,cat:"politics",field:"Chilean Dictatorship",
    quote:"Sometimes democracy must be bathed in blood.",
    contributions:["1973 coup against Allende","Neoliberal economic experiment","Human rights abuses","Transitioned to democracy 1990"],
    r:0.45,reasoning:"US-backed coup might have installed different general. Pinochet's specific brutality and embrace of Chicago School economics were personal choices. Chile's economic trajectory reflected his specific policies.",
    counterfactual:"Without Pinochet, the 1973 coup might still happen — the US wanted Allende gone, and other generals were involved. But Pinochet's specific choices shaped Chile: the 'Chicago Boys' economic experiment, the systematic torture, the caravan of death. Another general might have been less ideological about economics, less brutal about repression. Chile's path — becoming the neoliberal laboratory — was Pinochet's choice.",
    ripples:[
      {category:"Neoliberal Economics",detail:"Chile became the laboratory for Chicago School economics. Without Pinochet, this experiment happens elsewhere or not at all."},
      {category:"Human Rights",detail:"Different general might be less brutal. 3,000+ deaths, 40,000 tortured might be fewer under different dictator."},
      {category:"Transition Model",detail:"Pinochet's negotiated transition became a model. Different dictator might have handled exit differently."},
      {category:"Political Legacy",detail:"Chilean politics still divided over Pinochet. Different coup leader, different legacy."}
    ],
    timeline:[
      {year:1973,happened:"Coup overthrows Allende; Pinochet takes power",alternate:"Different general leads junta; different policies"},
      {year:1975,happened:"Chicago Boys implement shock therapy",alternate:"Different economic approach; Chile not neoliberal laboratory"},
      {year:1990,happened:"Pinochet hands over power but keeps military command",alternate:"Different transition; possibly cleaner break"},
      {year:2006,happened:"Pinochet dies; never tried",alternate:"Different dictator; different legacy of justice"}
    ],
    impact:{lives:"3,000+ killed, 40,000 tortured",econ:"Neoliberal experiment",cultural:"Dictator-economist alliance",reach:"Chile, Latin America",timeline:"Chilean history very different"}},
  {id:"wbrandt",name:"Willy Brandt",born:1913,died:1992,cat:"politics",field:"German Statesmanship",
    quote:"We knelt, and we shall continue to kneel before the victims of this war.",
    contributions:["Ostpolitik with Eastern Europe","Kneeling at Warsaw Ghetto Memorial","German reunification groundwork","Nobel Peace Prize"],
    r:0.35,reasoning:"German reconciliation with the East was needed. But Brandt's specific gestures — the Warsaw genuflection — and his Ostpolitik created the framework for eventual reunification. His personal history (exile, resistance) gave him unique credibility.",
    counterfactual:"Without Brandt, German reconciliation with the East still happens eventually — the Cold War's end would require it. But Brandt's specific gestures were powerful. The spontaneous genuflection at the Warsaw Ghetto Memorial became an image of German moral reckoning. His Ostpolitik — recognizing the Oder-Neisse line, treating with East Germany — laid groundwork that made reunification smoother. Without him, reunification comes harder, later, with more bitterness.",
    ripples:[
      {category:"Warsaw Genuflection",detail:"This spontaneous gesture became iconic for German atonement. Without it, different symbols for reconciliation."},
      {category:"Ostpolitik",detail:"The normalization with Eastern Europe happens differently. Reunification groundwork is weaker."},
      {category:"Cold War Détente",detail:"Brandt's policies contributed to East-West thaw. Without him, détente develops differently."},
      {category:"German Identity",detail:"The narrative of German moral reckoning is shaped by Brandt. Different leaders, different narrative."}
    ],
    timeline:[
      {year:1969,happened:"Brandt becomes Chancellor; Ostpolitik begins",alternate:"CDU continues; harder line with East"},
      {year:1970,happened:"Warsaw genuflection",alternate:"German atonement symbolized differently"},
      {year:1971,happened:"Nobel Peace Prize for Ostpolitik",alternate:"Different or no recognition for German reconciliation"},
      {year:1990,happened:"German reunification, enabled by Ostpolitik",alternate:"Reunification harder, more contentious without groundwork"}
    ],
    impact:{lives:"Cold War tension reduction",econ:"East-West trade",cultural:"German moral reckoning",reach:"Europe",timeline:"German reunification harder, later"}},
  {id:"jfk",name:"John F. Kennedy",born:1917,died:1963,cat:"politics",field:"US Presidency",
    quote:"Ask not what your country can do for you – ask what you can do for your country.",
    contributions:["Cuban Missile Crisis resolution","Moon landing commitment","Peace Corps","Civil rights support"],
    r:0.45,reasoning:"The Cuban Missile Crisis required steady leadership; others might have escalated. The Moon commitment was discretionary — any president could have made it. His assassination mythology exceeds his actual legislative achievements.",
    counterfactual:"Without JFK, the Cuban Missile Crisis is the crucial test. Would Nixon (if he'd won 1960) or LBJ have handled it the same way? JFK's specific combination of firmness and restraint — resisting the Joint Chiefs' push for invasion while maintaining the blockade — wasn't guaranteed. The crisis could have gone nuclear. The Moon commitment was inspirational but any president could have made it. JFK's assassination created a mythology that exceeds his legislative record.",
    ripples:[
      {category:"Cuban Missile Crisis",detail:"A different president might have escalated to invasion or backed down earlier. The crisis might have ended differently — possibly catastrophically."},
      {category:"Space Program",detail:"The Moon commitment was discretionary. A different president might not have made it, or made it later, or with different framing."},
      {category:"Civil Rights",detail:"JFK's civil rights support was cautious. A different president might have been more or less aggressive."},
      {category:"Vietnam",detail:"JFK was increasing involvement but might have withdrawn. His death made escalation under LBJ more likely — or maybe not."}
    ],
    timeline:[
      {year:1960,happened:"JFK narrowly defeats Nixon",alternate:"Nixon wins; handles early 1960s differently"},
      {year:1962,happened:"Cuban Missile Crisis resolved peacefully",alternate:"Different president might escalate or back down; outcome uncertain"},
      {year:1963,happened:"JFK assassinated; Camelot mythology begins",alternate:"JFK lives; actual record evaluated, not mythologized"},
      {year:1969,happened:"Moon landing fulfills JFK's commitment",alternate:"Without JFK's speech, space program might develop differently"}
    ],
    impact:{lives:"Nuclear war avoided",econ:"Space program acceleration",cultural:"Camelot mythology",reach:"United States, global",timeline:"Cuban Missile Crisis outcome uncertain"}},
  {id:"reagan",name:"Ronald Reagan",born:1911,died:2004,cat:"politics",field:"US Presidency",
    quote:"Government is not the solution to our problem; government is the problem.",
    contributions:["Conservative revolution","Cold War rhetoric","Tax cuts","Iran-Contra scandal"],
    r:0.45,reasoning:"Conservative movement was rising with or without Reagan. His specific style — optimism, communication skills — shaped how conservatism was sold. But the policy direction was supported by broader forces.",
    counterfactual:"Without Reagan, the conservative movement still exists — it was building since Goldwater. But Reagan's specific genius was selling conservative ideas with optimism rather than anger. A different Republican (George H.W. Bush? Howard Baker?) might have won 1980 but governed more moderately. The specific Reagan-Thatcher partnership that defined 1980s neoliberalism might not have formed. The Cold War's end might have looked different without Reagan's rhetoric.",
    ripples:[
      {category:"Conservative Movement",detail:"Conservatism wins without Reagan but might be harsher in tone. Reagan's optimistic framing might not exist."},
      {category:"Economic Policy",detail:"Tax cuts and deregulation happen regardless of conservative president. Specific policies might differ."},
      {category:"Cold War Rhetoric",detail:"Without Reagan's 'evil empire' rhetoric and military buildup, Cold War dynamics might differ."},
      {category:"Political Realignment",detail:"Reagan Democrats might not exist as concept. Conservative coalition looks different."}
    ],
    timeline:[
      {year:1980,happened:"Reagan defeats Carter",alternate:"Different Republican wins or Carter reelected; different 1980s"},
      {year:1981,happened:"Reagan tax cuts passed",alternate:"Conservative economics still likely; specific policies differ"},
      {year:1983,happened:"Reagan calls USSR 'evil empire'",alternate:"Different rhetoric might lead to different Cold War dynamics"},
      {year:1989,happened:"Cold War ends; Reagan credited",alternate:"Cold War still ends but credit goes elsewhere; different narrative"}
    ],
    impact:{lives:"American politics realigned",econ:"Supply-side economics",cultural:"Conservative ascendancy",reach:"United States, global influence",timeline:"Conservative revolution happens differently"}},
  {id:"gorbachev",name:"Mikhail Gorbachev",born:1931,died:2022,cat:"politics",field:"Soviet Leadership",
    quote:"If what you have done yesterday still looks big to you, you haven't done much today.",
    contributions:["Glasnost and Perestroika","Cold War ending","Soviet Union dissolution","Nobel Peace Prize"],
    r:0.25,reasoning:"The Soviet system was failing, but Gorbachev's specific choice — to reform rather than repress — wasn't inevitable. A different leader might have used force (like China) and maintained the Soviet system longer, at great cost.",
    counterfactual:"Without Gorbachev, the Soviet Union still faces crisis — the system was failing economically. But a different General Secretary might have responded like China did in 1989: reform the economy while crushing political dissent. The Soviet Union might have survived another decade or more through repression. Eastern Europe might not have been freed peacefully. The Cold War might have ended violently or dragged on much longer. Gorbachev's personal choice not to use force was the crucial variable.",
    ripples:[
      {category:"Soviet Reform",detail:"A different leader uses force like China. Soviet Union survives through repression but eventually faces worse crisis."},
      {category:"Eastern Europe",detail:"Without Gorbachev refusing to intervene, the 1989 revolutions are crushed. Berlin Wall stands longer."},
      {category:"Cold War End",detail:"The Cold War ends differently — possibly violently, possibly dragging on for years."},
      {category:"Russian Democracy",detail:"Without Gorbachev's reforms, Russia doesn't attempt democracy. Different path to present."}
    ],
    timeline:[
      {year:1985,happened:"Gorbachev becomes General Secretary",alternate:"Different leader chosen; reform not attempted"},
      {year:1989,happened:"Gorbachev refuses to intervene in Eastern Europe",alternate:"Revolutions crushed; Berlin Wall stands; Cold War continues"},
      {year:1991,happened:"Soviet Union dissolved peacefully",alternate:"Soviet Union survives through repression or collapses violently"},
      {year:2022,happened:"Gorbachev dies; legacy debated",alternate:"Different Soviet path; different 21st century Russia"}
    ],
    impact:{lives:"Peaceful Cold War end",econ:"Soviet bloc transition",cultural:"Hope for reform",reach:"Global",timeline:"Soviet collapse violent or delayed"}},

  // MILITARY & CONQUEST
  {id:"alexander",name:"Alexander the Great",born:-356,died:-323,cat:"military",field:"Military Conquest",
    quote:"There is nothing impossible to him who will try.",
    contributions:["Conquered from Greece to India","Spread Hellenistic culture","Founded Alexandria and 20+ cities","Fused Greek and Persian cultures"],
    r:0.15,reasoning:"Philip II built the Macedonian army, but Alexander's relentless drive to the ends of the earth was purely personal. He didn't need to cross the Hindu Kush or push to India. No other Macedonian king would have.",
    counterfactual:"Without Alexander, Philip II's Macedonian army still exists, but it's used for Greek hegemony, not world conquest. Alexander's burning drive — to India, to the edge of the known world — was purely personal. A sane successor might have consolidated Philip's gains and conquered Persia, but stopped there. The Hellenistic world — that fusion of Greek and Eastern cultures that shaped everything from the Ptolemies to the Buddhist art of Gandhara — might never exist.",
    ripples:[
      {category:"Hellenistic Culture",detail:"Without Alexander's conquests, Greek culture doesn't spread to Persia, Egypt, and Central Asia. The Hellenistic synthesis doesn't happen."},
      {category:"Eastern Connections",detail:"The trade routes and cultural connections between Mediterranean and India don't form. Buddhism never encounters Greek philosophy."},
      {category:"Successor Kingdoms",detail:"No Ptolemaic Egypt, no Seleucid Empire. Rome faces different opponents when it expands eastward."},
      {category:"Persian Empire",detail:"Persia might survive in some form, creating a very different ancient world."}
    ],
    timeline:[
      {year:-336,happened:"Alexander becomes king; begins conquests",alternate:"Philip II lives longer or different successor; Greece united but not expanding"},
      {year:-331,happened:"Persia conquered after Gaugamela",alternate:"Persia survives under different circumstances; world remains divided"},
      {year:-326,happened:"Alexander reaches India",alternate:"No Greek presence in Central Asia or India; Buddhism develops differently"},
      {year:-323,happened:"Alexander dies; empire divides",alternate:"No Hellenistic kingdoms; Mediterranean-Eastern cultural fusion doesn't happen"}
    ],
    impact:{lives:"Hellenistic culture for 300+ years",econ:"East-West trade routes",cultural:"Greek language/culture spread globally",reach:"Mediterranean to Central Asia",timeline:"Hellenistic age doesn't happen"}},
  {id:"genghis",name:"Genghis Khan",born:1162,died:1227,cat:"military",field:"Empire Building",
    quote:"I am the punishment of God.",
    contributions:["Largest contiguous land empire ever","Silk Road revival","Religious tolerance policy","Meritocratic military"],
    r:0.15,reasoning:"Mongol tribes had been raiding for centuries without uniting. Temüjin's personal history forged a leader who transcended tribal loyalty. No one else was building that coalition or had his vision of world conquest.",
    counterfactual:"Without Genghis Khan, the Mongol tribes remain exactly that — raiding tribes on the steppe, never uniting. Temüjin's personal history was unique: the murdered father, enslaved childhood, rise through personal charisma. His vision of transcending tribal loyalty and building a meritocratic empire was unprecedented. The largest contiguous land empire in history simply doesn't exist. The Silk Road isn't revived. The Plague might not spread to Europe. Asian and European history look completely different.",
    ripples:[
      {category:"Mongol Unification",detail:"Without Genghis, Mongol tribes remain divided. No world-conquering horde. The steppe remains fragmented."},
      {category:"Eurasian Trade",detail:"The Silk Road isn't revived under Mongol peace. East-West trade remains fragmented. Technology transfer slowed."},
      {category:"Chinese History",detail:"Song Dynasty might survive longer. The Yuan Dynasty doesn't exist. China's trajectory is entirely different."},
      {category:"Black Death",detail:"Without Mongol trade routes, the Plague might not spread from Central Asia to Europe. European history radically different."}
    ],
    timeline:[
      {year:1206,happened:"Genghis unites Mongol tribes",alternate:"Tribes remain divided; no unified Mongol threat"},
      {year:1215,happened:"Mongols conquer northern China",alternate:"Jin Dynasty survives; Chinese history very different"},
      {year:1220,happened:"Mongols destroy Khwarezmian Empire",alternate:"Khwarezmia survives; different Islamic world"},
      {year:1227,happened:"Genghis dies; empire continues under successors",alternate:"No empire; steppe politics as usual"}
    ],
    impact:{lives:"Conquests: 40M deaths; connected Eurasia",econ:"Trade routes: pre-globalization",cultural:"Pax Mongolica enabled cultural exchange",reach:"Asia, Eastern Europe, Middle East",timeline:"Mongol unification doesn't happen"}},
  {id:"hannibal",name:"Hannibal Barca",born:-247,died:-183,cat:"military",field:"Military Tactics",
    quote:"We will either find a way, or make one.",
    contributions:["Crossed Alps with elephants","Battle of Cannae (double envelopment)","15-year campaign in Italy","Nearly destroyed Rome"],
    r:0.20,reasoning:"Carthage had other generals, but none with Hannibal's audacity or tactical genius. Crossing the Alps was considered impossible. Cannae's double envelopment was unprecedented.",
    counterfactual:"Without Hannibal, Carthage still fights Rome in the Second Punic War — the conflict was structural. But no one else crosses the Alps with elephants and devastates Italy for 15 years. Cannae's double envelopment — killing 50,000+ Romans in a day — might never happen. Rome might win the war faster and easier. Or, without facing Hannibal's existential threat, Rome might not develop the resilience and military adaptations that made it unstoppable.",
    ripples:[
      {category:"Roman Development",detail:"Without Hannibal's pressure, Rome might not develop the same military adaptations and resilience that made it dominant."},
      {category:"Military Tactics",detail:"Cannae's double envelopment becomes the model studied for millennia. Without Hannibal, tactical history is different."},
      {category:"Carthaginian Fate",detail:"Carthage might negotiate a better peace without the Roman fear and hatred Hannibal created. 'Carthago delenda est' might not resonate."},
      {category:"Punic Wars",detail:"The Second Punic War is shorter, less traumatic. Roman expansion continues but from different base."}
    ],
    timeline:[
      {year:-218,happened:"Hannibal crosses Alps; invades Italy",alternate:"Carthage fights defensively; Spain-focused war"},
      {year:-216,happened:"Battle of Cannae; Rome nearly destroyed",alternate:"No catastrophic Roman defeat; war proceeds conventionally"},
      {year:-202,happened:"Hannibal defeated at Zama",alternate:"Different generals fight different battles; Carthage might get better terms"},
      {year:-183,happened:"Hannibal dies in exile",alternate:"Different Carthaginian general; different fate"}
    ],
    impact:{lives:"Challenged Roman supremacy",econ:"Carthaginian trade power",cultural:"Tactical genius archetype",reach:"Mediterranean world",timeline:"Rome's rise accelerated"}},
  {id:"suntzu",name:"Sun Tzu",born:-544,died:-496,cat:"military",field:"Military Strategy",
    quote:"The supreme art of war is to subdue the enemy without fighting.",
    contributions:["The Art of War","Strategic philosophy foundation","Psychological warfare concepts","Intelligence doctrine"],
    r:0.45,reasoning:"Military strategy was being theorized across ancient civilizations. The Art of War crystallized ideas emerging from practice. Its influence is vast, but similar strategic thinking appeared independently elsewhere.",
    counterfactual:"Without Sun Tzu, strategic thinking still develops — every ancient civilization produced military theory. The specific formulations of The Art of War — deception, indirect approach, winning without fighting — might emerge through other texts like the Six Secret Teachings or Wu Qi's works. The text's influence is enormous, but the ideas weren't unique to one person. The Warring States period was generating strategic thought across multiple schools.",
    ripples:[
      {category:"Military Theory",detail:"Chinese strategic thought develops through other texts. The 'Seven Military Classics' might have different canon."},
      {category:"Business Application",detail:"Without The Art of War, business strategy lacks its most quoted source. Different metaphors dominate."},
      {category:"Western Adoption",detail:"Western militaries don't adopt Sun Tzu's specific formulations. Different Eastern influence or none."},
      {category:"Philosophical Tradition",detail:"The Daoist-influenced approach to strategy might be less prominent. More Confucian military ethics instead."}
    ],
    timeline:[
      {year:-512,happened:"Sun Tzu writes The Art of War",alternate:"Strategic wisdom preserved in other texts or lost"},
      {year:-350,happened:"Text widely studied in Warring States period",alternate:"Other strategic texts dominate; similar ideas, different formulation"},
      {year:1772,happened:"Art of War translated to French",alternate:"Different Chinese military text influences Europe, or none"},
      {year:1987,happened:"Wall Street embraces Art of War",alternate:"Business strategy uses different metaphors and sources"}
    ],
    impact:{lives:"Influenced all subsequent warfare",econ:"Business strategy applications",cultural:"Strategy as intellectual discipline",reach:"Global military/business",timeline:"Strategic thought develops differently"}},
  {id:"saladin",name:"Saladin",born:1137,died:1193,cat:"military",field:"Ayyubid Sultanate",
    quote:"I warn you against shedding blood, indulging in it and making a habit of it, for blood never sleeps.",
    contributions:["Recaptured Jerusalem from Crusaders","United Egypt and Syria","Chivalric warfare code","Ayyubid dynasty founder"],
    r:0.35,reasoning:"Muslim leaders had been trying to retake Jerusalem for decades. Saladin's achievement was uniting Egypt and Syria first. His chivalric reputation was personal choice, not inevitable.",
    counterfactual:"Without Saladin, Jerusalem is still eventually retaken — Muslim leaders had been trying for decades. But Saladin's achievement was strategic: uniting Egypt and Syria under one command, then applying that power to the Crusader states. His chivalric reputation — releasing prisoners, honoring truces, earning respect from his enemies — was a personal choice that shaped how Muslims and Christians interacted. Without him, the reconquest might be bloodier, later, and remembered differently.",
    ripples:[
      {category:"Jerusalem",detail:"Crusaders hold Jerusalem longer. Eventually retaken, but by different leader, different circumstances."},
      {category:"Chivalric Code",detail:"Saladin's honor influenced European chivalry. Without his example, cross-cultural respect develops differently."},
      {category:"Third Crusade",detail:"Richard the Lionheart faces different opponent. Different outcome, different legends."},
      {category:"Muslim Unity",detail:"Egypt and Syria united under Saladin. Without him, Muslim response to Crusades is more fragmented."}
    ],
    timeline:[
      {year:1171,happened:"Saladin unites Egypt and Syria",alternate:"Muslim world remains fragmented; Crusaders face weaker opposition"},
      {year:1187,happened:"Battle of Hattin; Jerusalem recaptured",alternate:"Jerusalem remains Crusader for decades longer"},
      {year:1192,happened:"Truce with Richard; Saladin's reputation established",alternate:"Different outcome; less chivalric memory of Crusades"},
      {year:2024,happened:"Saladin remains hero in East and West",alternate:"Different figure represents Muslim-Christian interaction"}
    ],
    impact:{lives:"Crusader-Muslim balance",econ:"Middle Eastern trade control",cultural:"Chivalry across cultures",reach:"Middle East, Crusader states",timeline:"Jerusalem remains Crusader longer"}},
  {id:"shaka",name:"Shaka Zulu",born:1787,died:1828,cat:"military",field:"Military Innovation",
    quote:"Never leave an enemy behind, or it will rise again to fly at your throat.",
    contributions:["Zulu military revolution","Short stabbing spear (iklwa)","'Buffalo horns' formation","Impi regimental system"],
    r:0.15,reasoning:"The Zulu were one small clan among many. Shaka's military innovations were his inventions. Without him, there is no Zulu nation, no Mfecane, and southern African history looks completely different.",
    counterfactual:"Without Shaka, there is no Zulu nation. The Zulu were one small clan among many; Shaka transformed them through military innovations that were entirely his own: the iklwa stabbing spear replacing throwing spears, the 'buffalo horns' encirclement tactic, the impi regimental system that created disciplined armies. Without him, the Mfecane — the massive displacement of peoples across southern Africa — doesn't happen. When the British arrive, they face a completely different political landscape.",
    ripples:[
      {category:"Zulu Nation",detail:"Without Shaka, the Zulu remain a small clan. No Zulu kingdom, no Isandlwana, no iconic resistance to colonialism."},
      {category:"Mfecane",detail:"The chaos of the Mfecane — 1-2 million displaced, new nations formed — doesn't happen. Southern African demography very different."},
      {category:"British Colonization",detail:"Without the Zulu threat, British colonization of southern Africa proceeds against more fragmented opposition."},
      {category:"African Military History",detail:"The Zulu military innovations don't spread. Different tactics dominate among African peoples."}
    ],
    timeline:[
      {year:1816,happened:"Shaka becomes Zulu chief",alternate:"Zulu remain small clan among many"},
      {year:1820,happened:"Zulu dominate region; Mfecane begins",alternate:"No regional upheaval; stable but fragmented polities"},
      {year:1828,happened:"Shaka assassinated; Zulu continue",alternate:"No Zulu kingdom to continue"},
      {year:1879,happened:"Zulu War with British; Isandlwana",alternate:"British face different opponents; different colonial history"}
    ],
    impact:{lives:"Mfecane: 1-2M displaced/killed",econ:"Southern African power restructure",cultural:"Zulu identity formation",reach:"Southern Africa",timeline:"Zulu nation doesn't emerge"}},
  {id:"tokugawa",name:"Tokugawa Ieyasu",born:1543,died:1616,cat:"military",field:"Japanese Unification",
    quote:"Life is like unto a long journey with a heavy burden.",
    contributions:["Founded Tokugawa shogunate","250 years of peace (Edo period)","Sakoku isolation policy","Stable feudal order"],
    r:0.35,reasoning:"Japan was trending toward unification. Ieyasu's specific achievement was the stable settlement: the hostage system, isolation policy, arrangements that lasted 250 years. Another victor might have meant renewed civil war.",
    counterfactual:"Without Tokugawa Ieyasu, Japan still unifies — Nobunaga and Hideyoshi had already done most of the work. But Ieyasu's specific genius was the stable settlement: the sankin-kōtai hostage system that kept daimyo weak, the isolation policy that prevented Christian influence, the arrangements that made rebellion impossible. Another victor at Sekigahara might have been overthrown within a generation. The 250 years of peace that created Edo culture might have been another century of civil war.",
    ripples:[
      {category:"Edo Period Peace",detail:"Without the Tokugawa settlement, civil wars might continue. No 250 years of stability that created Edo culture."},
      {category:"Isolation Policy",detail:"Sakoku might not happen. Japan might have remained more open to Western influence, with unpredictable consequences."},
      {category:"Samurai Culture",detail:"The warrior class without wars develops differently. Bushido as a philosophy evolves differently."},
      {category:"Meiji Restoration",detail:"When modernization comes, it comes to a Japan shaped by different centuries. The starting conditions are very different."}
    ],
    timeline:[
      {year:1600,happened:"Tokugawa wins Battle of Sekigahara",alternate:"Different victor; possibly renewed civil war"},
      {year:1603,happened:"Tokugawa shogunate established",alternate:"Less stable regime; possibly overthrown"},
      {year:1639,happened:"Sakoku isolation completed",alternate:"Japan might remain more open to West"},
      {year:1868,happened:"Meiji Restoration ends Tokugawa rule",alternate:"Japan enters modernity from very different conditions"}
    ],
    impact:{lives:"Peace for 30M Japanese",econ:"Domestic Japanese development",cultural:"Edo period arts/culture",reach:"Japan",timeline:"Japanese civil wars continue"}},
  {id:"nelson",name:"Horatio Nelson",born:1758,died:1805,cat:"military",field:"Naval Warfare",
    quote:"England expects that every man will do his duty.",
    contributions:["Battle of Trafalgar victory","Destroyed Napoleon's naval power","Innovative naval tactics","British naval supremacy"],
    r:0.40,reasoning:"Britain had other capable admirals, but Nelson's specific tactical innovations and inspiring leadership were personal. The Royal Navy was dominant anyway, but Nelson's victories were decisive.",
    counterfactual:"Without Nelson, Britain probably still wins the naval war — the Royal Navy had more ships, better crews, and other capable admirals. But Nelson's specific innovations — breaking the line at Trafalgar, aggressive pursuit — made British victories more decisive. Without Trafalgar's completeness, Napoleon might have had another naval threat. The invasion of Britain becomes more plausible. The war at sea drags on longer, tying up British resources.",
    ripples:[
      {category:"Trafalgar",detail:"Without Nelson's tactics, Trafalgar might be a closer battle or not happen in this form. French and Spanish navies might survive to fight again."},
      {category:"Invasion Threat",detail:"Without decisive naval victory, the threat of French invasion of Britain persists longer. British strategy changes."},
      {category:"Naval Tactics",detail:"Nelson's aggressive breaking of the line becomes doctrine. Without him, more cautious tactics might persist."},
      {category:"British Hero",detail:"The Nelson legend doesn't exist. British naval heroism has a different face."}
    ],
    timeline:[
      {year:1798,happened:"Nelson destroys French fleet at Nile",alternate:"French fleet survives; Egypt campaign proceeds differently"},
      {year:1801,happened:"Nelson wins at Copenhagen",alternate:"Danish neutrality handled differently"},
      {year:1805,happened:"Trafalgar; Nelson dies but destroys enemy",alternate:"Less decisive naval victory; invasion threat persists"},
      {year:1815,happened:"Britain emerges as global naval power",alternate:"British dominance similar but achieved more slowly, costlily"}
    ],
    impact:{lives:"British naval supremacy",econ:"British global trade dominance",cultural:"Naval hero archetype",reach:"Global maritime",timeline:"Napoleonic Wars at sea drag on longer"}},
  {id:"zhukov",name:"Georgy Zhukov",born:1896,died:1974,cat:"military",field:"WWII Command",
    quote:"If we come to a minefield, our infantry attacks exactly as it were not there.",
    contributions:["Defended Moscow and Leningrad","Battle of Stalingrad","Operation Bagration","Captured Berlin"],
    r:0.45,reasoning:"The Soviet Union had other capable generals and would have won eventually through sheer numbers. But Zhukov's decisions at Moscow, Stalingrad, Kursk shaped the war's timeline.",
    counterfactual:"Without Zhukov, the Soviet Union probably still wins — the industrial base, the population, the distances, the winter all favored Russia. But Zhukov's specific decisions mattered: the defense of Moscow in 1941, the Stalingrad counteroffensive, Operation Bagration. Without him, the war might last another year. Millions more die. Germany might have time to develop more advanced weapons. The postwar territorial settlement might be different.",
    ripples:[
      {category:"Moscow Defense",detail:"Without Zhukov's organization, Moscow might fall in 1941. Even if not, the defense is less effective."},
      {category:"Stalingrad",detail:"The counteroffensive that encircled the German 6th Army might be less complete. More Germans escape."},
      {category:"War Duration",detail:"Without Zhukov's operational skill, the war lasts longer. Each month costs hundreds of thousands of lives."},
      {category:"Berlin",detail:"Someone else captures Berlin. The symbolic victory goes to another general."}
    ],
    timeline:[
      {year:1941,happened:"Zhukov organizes Moscow defense",alternate:"Moscow falls or holds less effectively; war extends"},
      {year:1942,happened:"Zhukov plans Stalingrad counteroffensive",alternate:"Encirclement less complete; 6th Army partially escapes"},
      {year:1944,happened:"Operation Bagration destroys Army Group Center",alternate:"German retreat more orderly; war extends"},
      {year:1945,happened:"Zhukov captures Berlin",alternate:"Berlin falls to someone else; symbolic difference"}
    ],
    impact:{lives:"Eastern Front: millions",econ:"Soviet survival",cultural:"Soviet military hero",reach:"Eastern Front",timeline:"War lasts longer, more Soviet casualties"}},
  {id:"cortes",name:"Hernán Cortés",born:1485,died:1547,cat:"military",field:"Conquest",
    quote:"I and my companions suffer from a disease of the heart which can be cured only with gold.",
    contributions:["Conquered Aztec Empire","Allied with Aztec enemies","Opened Mexico to Spanish colonization","Columbian Exchange catalyst"],
    r:0.55,reasoning:"Spain was sending conquistadors throughout the Americas. The Aztec Empire, weakened by disease and internal enemies, was vulnerable. Another conquistador with similar alliances could have achieved similar results.",
    counterfactual:"Without Cortés, the Aztec Empire still falls — disease alone killed 90% of the population, and Spain was sending conquistadors throughout the Americas. The indigenous enemies of the Aztecs (Tlaxcala especially) were eager for alliance against their oppressors. Another conquistador, with similar alliances and similar timing, achieves similar results. The conquest might be delayed 10-20 years, but the outcome is the same: Spanish Mexico.",
    ripples:[
      {category:"Timing",detail:"Conquest delayed by a decade or two. The Aztec might have more time, but disease was doing most of the work."},
      {category:"Indigenous Alliances",detail:"Another conquistador makes similar alliances. The Tlaxcalans and others still want the Aztecs destroyed."},
      {category:"Colonial Structure",detail:"Spanish Mexico emerges regardless. Different founding governor, but similar colonial system."},
      {category:"Historical Memory",detail:"Different conquistador name in the history books. Different origin stories for Mexican identity."}
    ],
    timeline:[
      {year:1519,happened:"Cortés lands in Mexico, makes alliances",alternate:"Different conquistador arrives; makes similar alliances within decade"},
      {year:1521,happened:"Tenochtitlan falls",alternate:"Aztec capital falls within 20 years regardless; disease doing most of work"},
      {year:1535,happened:"Viceroyalty of New Spain established",alternate:"Spanish Mexico established regardless; different founding dates"},
      {year:2024,happened:"Cortés remains controversial figure",alternate:"Different conquistador plays same historical role"}
    ],
    impact:{lives:"Aztec population collapse: 90%",econ:"Spanish colonial wealth",cultural:"Mestizo civilization",reach:"Mexico, Central America",timeline:"Aztec conquest delayed 10-20 years"}},
  {id:"zhenghe",name:"Zheng He",born:1371,died:1433,cat:"military",field:"Naval Exploration",
    quote:"We have traversed more than 100,000 li of immense water spaces.",
    contributions:["Seven treasure voyages","300+ ship fleet","Reached Africa from China","Ming naval power"],
    r:0.20,reasoning:"No one else in China commanded fleets of 300 ships reaching Africa. When Zheng He died, China turned inward — ships rotted, records destroyed. Without him, Chinese maritime expansion simply doesn't happen.",
    counterfactual:"Without Zheng He, Chinese maritime expansion to Africa simply doesn't happen. The voyages were a personal project of Emperor Yongle using a unique figure — a Muslim eunuch who commanded the trust of the emperor. After Zheng He died, the ships rotted, the records were destroyed, and China turned inward. This wasn't inevitable; it was a choice. But without Zheng He, there was no one to make the voyages happen in the first place. China never demonstrates its potential maritime supremacy.",
    ripples:[
      {category:"Chinese Maritime Power",detail:"China never demonstrates its ability to dominate the Indian Ocean. The potential is never realized."},
      {category:"Historical Memory",detail:"The 'what if China had colonized' counterfactual doesn't have its evidence. Different Chinese historical narrative."},
      {category:"Indian Ocean Trade",detail:"Chinese presence in Indian Ocean trade is less dramatic. Arab and Indian merchants don't see Chinese power."},
      {category:"Ming Dynasty",detail:"The turn inward happens anyway, but without the voyages as contrast. Different understanding of Ming potential."}
    ],
    timeline:[
      {year:1405,happened:"First treasure voyage begins",alternate:"No voyages; China never demonstrates maritime potential"},
      {year:1433,happened:"Seventh voyage; Zheng He dies",alternate:"No maritime tradition to end"},
      {year:1500,happened:"Portuguese reach Indian Ocean; China absent",alternate:"Same Portuguese arrival; but no Chinese history to contrast"},
      {year:2024,happened:"Zheng He invoked for Chinese maritime claims",alternate:"No historical figure to invoke for maritime tradition"}
    ],
    impact:{lives:"Chinese diplomatic connections",econ:"Indian Ocean trade",cultural:"Chinese maritime history",reach:"Indian Ocean world",timeline:"Chinese expansion never happens"}},
  {id:"tamerlane",name:"Tamerlane",born:1336,died:1405,cat:"military",field:"Conquest",
    quote:"As there is but one God in heaven, there ought to be but one ruler on the earth.",
    contributions:["Timurid Empire","Defeated Ottomans and Delhi Sultanate","17 million killed","Cultural patronage in Samarkand"],
    r:0.20,reasoning:"Claiming descent from Genghis Khan, Tamerlane built an empire through exceptional brutality and military skill. His conquests were personal achievements — the empire fragmented after his death.",
    counterfactual:"Without Tamerlane, the Ottoman Empire is never defeated at Ankara (1402). This changes everything. The Ottomans might have conquered Constantinople decades earlier. The Delhi Sultanate doesn't collapse, so the Mughal Empire (founded by Tamerlane's descendant Babur) might never exist. Central Asia is spared the pyramids of skulls, but the Timurid Renaissance in Samarkand doesn't happen either. 17 million people don't die, but the entire arc of Asian history changes.",
    ripples:[
      {category:"Ottoman Empire",detail:"Without the defeat at Ankara, Ottomans expand faster. Constantinople might fall earlier. European history changes."},
      {category:"Mughal Empire",detail:"Babur, Tamerlane's descendant, founded the Mughals. Without Tamerlane's dynasty, no Mughal Empire, no Taj Mahal."},
      {category:"Death Toll",detail:"17 million people don't die in Tamerlane's conquests. Cities like Isfahan and Delhi aren't destroyed."},
      {category:"Timurid Renaissance",detail:"The cultural flowering in Samarkand doesn't happen. Persian miniature painting and astronomy develop differently."}
    ],
    timeline:[
      {year:1370,happened:"Tamerlane takes power in Central Asia",alternate:"Central Asia remains fragmented; different regional powers"},
      {year:1398,happened:"Tamerlane sacks Delhi",alternate:"Delhi Sultanate continues; different Indian history"},
      {year:1402,happened:"Tamerlane defeats Ottomans at Ankara",alternate:"Ottomans never defeated; expand faster into Europe"},
      {year:1526,happened:"Babur (Tamerlane's descendant) founds Mughal Empire",alternate:"No Timurid dynasty means no Mughals; Indian history very different"}
    ],
    impact:{lives:"17M deaths estimated",econ:"Central Asian trade disruption",cultural:"Timurid Renaissance in Samarkand",reach:"Central Asia to India to Anatolia",timeline:"Ottoman and Indian history very different"}},
  
  // MORE MILITARY
  {id:"eisenhower",name:"Dwight D. Eisenhower",born:1890,died:1969,cat:"military",field:"WWII Command & Politics",
    quote:"Plans are worthless, but planning is everything.",
    contributions:["Supreme Allied Commander Europe","D-Day planner","Two-term US President","Interstate Highway System"],
    r:0.50,reasoning:"Other generals could have commanded OVERLORD — Marshall was initially favored. Eisenhower's specific talent was coalition management. As president, his policies were moderate; another Republican might have been similar.",
    counterfactual:"Without Eisenhower, D-Day still happens — Marshall was initially favored for command, and the operation reflected Allied strategic consensus. But Eisenhower's specific talent was managing the fractious Allied coalition: keeping Montgomery and Patton from each other's throats, balancing British and American interests, making the final decision to go despite weather. Someone else might have managed this less well, possibly delaying or complicating the invasion.",
    ripples:[
      {category:"D-Day Command",detail:"Marshall or another general commands OVERLORD. The invasion succeeds but possibly with more Allied friction."},
      {category:"Coalition Management",detail:"Without Ike's diplomatic skill, British-American tensions might be worse. Postwar alliance starts more strained."},
      {category:"1952 Election",detail:"Without Eisenhower, a different Republican nominee. Taft isolationism might prevail."},
      {category:"Interstate Highways",detail:"Highway system happens regardless — the need was obvious — but perhaps under different administration, different design."}
    ],
    timeline:[
      {year:1944,happened:"Eisenhower commands D-Day",alternate:"Marshall or other general commands; invasion proceeds"},
      {year:1945,happened:"Germany defeated; Eisenhower accepts surrender",alternate:"Same outcome; different commander"},
      {year:1952,happened:"Eisenhower elected president",alternate:"Taft or other Republican; different postwar policies"},
      {year:1956,happened:"Interstate Highway System authorized",alternate:"Highways built under different administration"}
    ],
    impact:{lives:"WWII European victory",econ:"Interstate highways",cultural:"Military-industrial complex warning",reach:"United States, Europe",timeline:"D-Day succeeds under different command"}},
  {id:"macarthur",name:"Douglas MacArthur",born:1880,died:1964,cat:"military",field:"WWII & Korea",
    quote:"In war there is no substitute for victory.",
    contributions:["Pacific Theater command","Japanese occupation architect","Inchon landing","Fired by Truman over Korea"],
    r:0.45,reasoning:"The Pacific war would have been won without MacArthur — Nimitz was equally important. His Japanese occupation was successful but reflected broader US policy. His insubordination in Korea showed personal flaws.",
    counterfactual:"Without MacArthur, the Pacific war is still won — Nimitz's naval campaign was equally important, and the atomic bombs would have ended the war regardless. His Japanese occupation was successful, but reflected broader US policy more than personal genius. The Inchon landing was brilliant, but his subsequent push to the Yalu was disastrous. A more cautious general might have avoided Chinese intervention entirely.",
    ripples:[
      {category:"Pacific Strategy",detail:"Without MacArthur's 'island hopping,' the war might focus more on Nimitz's central Pacific drive. Same outcome, different route."},
      {category:"Japanese Occupation",detail:"Another general oversees occupation. US policy shapes Japan similarly, but implementation details differ."},
      {category:"Korean War",detail:"Without Inchon, the war might proceed more conventionally. Without the Yalu push, perhaps no Chinese intervention."},
      {category:"Civil-Military Relations",detail:"The Truman-MacArthur confrontation doesn't happen. Different precedents for presidential authority over military."}
    ],
    timeline:[
      {year:1942,happened:"MacArthur escapes Philippines; commands Southwest Pacific",alternate:"Different general assigned; war proceeds similarly"},
      {year:1945,happened:"MacArthur accepts Japanese surrender, oversees occupation",alternate:"Different occupation commander; US policy still shapes Japan"},
      {year:1950,happened:"Inchon landing; MacArthur pushes to Yalu",alternate:"More cautious approach; possibly no Chinese intervention"},
      {year:1951,happened:"Truman fires MacArthur",alternate:"No dramatic confrontation; different civil-military precedent"}
    ],
    impact:{lives:"Pacific war conduct",econ:"Japanese reconstruction",cultural:"'Old soldiers never die'",reach:"Pacific, Japan, Korea",timeline:"Pacific war similar; Japan occupation different"}},
  {id:"montgomery",name:"Bernard Montgomery",born:1887,died:1976,cat:"military",field:"WWII Command",
    quote:"Rule 1: On pages 14 and 15, delete the words 'no' and 'not'.",
    contributions:["El Alamein victory","D-Day ground forces commander","Operation Market Garden (failure)","British military leadership"],
    r:0.55,reasoning:"Britain had other capable generals. El Alamein was partly won by superior resources. Market Garden was his failure. His personality clashes with Americans complicated alliance. Competent but not irreplaceable.",
    counterfactual:"Without Montgomery, Britain finds another general for the Eighth Army. El Alamein is won anyway — by November 1942, Rommel was desperately short of fuel and supplies while Montgomery had massive superiority. The British needed a victory and a hero after years of defeats, and they would have found one. Market Garden doesn't happen in its disastrous form. The alliance might actually run smoother without Monty's ego.",
    ripples:[
      {category:"El Alamein",detail:"British win anyway with material superiority. Different general becomes the hero Britain needed."},
      {category:"Allied Relations",detail:"Without Montgomery's ego clashes with Americans, the alliance might actually function better."},
      {category:"Market Garden",detail:"The disastrous Operation Market Garden probably doesn't happen. Arnhem not 'a bridge too far.'"},
      {category:"British Morale",detail:"Britain still gets its desert victory hero; just with a different name."}
    ],
    timeline:[
      {year:1942,happened:"Montgomery takes Eighth Army; wins El Alamein",alternate:"Different general wins; same material advantages"},
      {year:1944,happened:"Montgomery commands D-Day ground forces",alternate:"Different British commander; similar operation"},
      {year:1944,happened:"Operation Market Garden fails",alternate:"Without Monty's ambition, more cautious approach; Arnhem not attempted"},
      {year:1945,happened:"Montgomery accepts German surrender in northwest Europe",alternate:"Different British general; same outcome"}
    ],
    impact:{lives:"North African campaign",econ:"British morale",cultural:"British war hero",reach:"North Africa, Western Europe",timeline:"North African campaign similar"}},
  {id:"giap",name:"Võ Nguyên Giáp",born:1911,died:2013,cat:"military",field:"Revolutionary Warfare",
    quote:"Every minute, hundreds of thousands of people die on this earth. The life or death of a hundred, a thousand, tens of thousands of human beings, even our compatriots, means little.",
    contributions:["Dien Bien Phu victory","Defeated French and Americans","People's war doctrine","Tet Offensive planning"],
    r:0.30,reasoning:"Giáp developed revolutionary warfare tactics that defeated two major powers. His specific strategies at Dien Bien Phu and during the American war were personal achievements. Another general might not have had his patience and vision.",
    counterfactual:"Without Giáp, Vietnam still fights for independence — the nationalist and communist movements were deep-rooted. But Giáp's specific genius was patience and understanding of revolutionary warfare. Dien Bien Phu might not have been attempted or might have failed; the French war drags on differently. The American war might have seen more conventional tactics that played to American strengths. Vietnamese independence comes eventually, but the path is very different.",
    ripples:[
      {category:"Dien Bien Phu",detail:"Without Giáp's audacity in moving artillery, the siege might not succeed. French war continues longer."},
      {category:"People's War Doctrine",detail:"Revolutionary warfare tactics develop differently. Mao's model might dominate without Vietnamese adaptations."},
      {category:"American War",detail:"More conventional tactics might favor American firepower. War might be even costlier for Vietnam."},
      {category:"Global Insurgencies",detail:"Giáp's example shaped guerrilla movements worldwide. Without it, different models dominate."}
    ],
    timeline:[
      {year:1954,happened:"Giáp wins at Dien Bien Phu; French withdraw",alternate:"Dien Bien Phu might not be attempted or might fail; war continues"},
      {year:1968,happened:"Tet Offensive shocks America",alternate:"Different strategy; possibly less dramatic turning point"},
      {year:1975,happened:"North Vietnam conquers South",alternate:"Unification still likely but via different path"},
      {year:2013,happened:"Giáp dies as national hero",alternate:"Different heroes of Vietnamese independence"}
    ],
    impact:{lives:"French and American defeat in Vietnam",econ:"Vietnamese independence",cultural:"Revolutionary warfare doctrine",reach:"Vietnam, global insurgencies",timeline:"Vietnamese wars unfold very differently"}},
  {id:"suleiman",name:"Suleiman the Magnificent",born:1494,died:1566,cat:"military",field:"Ottoman Empire",
    quote:"I am God's slave and sultan of this world.",
    contributions:["Ottoman golden age","Conquered Belgrade, Rhodes, Hungary","Legal reforms","Cultural patronage"],
    r:0.35,reasoning:"The Ottoman Empire was rising before Suleiman, and his conquests reflected accumulated power. His legal reforms were significant. Another capable sultan might have achieved similar expansion, though his cultural patronage was personal.",
    counterfactual:"Without Suleiman, the Ottoman Empire still expands — the military machine was built, the momentum was there. Belgrade and Rhodes fall to Ottoman power regardless of who's sultan. But Suleiman's legal reforms (the Kanuni — 'Lawgiver') shaped Ottoman administration for centuries. His cultural patronage created the Ottoman golden age. A different sultan might have been a conqueror but not a lawgiver.",
    ripples:[
      {category:"Ottoman Expansion",detail:"Conquests similar; Ottoman momentum would carry forward. Specifics of campaigns might differ."},
      {category:"Legal Reforms",detail:"Without the Kanuni, Ottoman administration develops differently. Less codified, more arbitrary perhaps."},
      {category:"Cultural Golden Age",detail:"Without Suleiman's patronage, Sinan's architecture, Ottoman literature might not flourish the same way."},
      {category:"European Balance",detail:"Ottoman pressure on Vienna and Mediterranean similar; different personality but same strategic situation."}
    ],
    timeline:[
      {year:1521,happened:"Suleiman captures Belgrade",alternate:"Belgrade falls to Ottoman expansion regardless"},
      {year:1529,happened:"First Siege of Vienna",alternate:"Ottoman expansion toward Vienna continues under any sultan"},
      {year:1534,happened:"Legal code (Kanuni) implemented",alternate:"Without these reforms, Ottoman law less systematic"},
      {year:1566,happened:"Suleiman dies; long decline begins",alternate:"Decline happens regardless; timing might differ"}
    ],
    impact:{lives:"Ottoman power at peak",econ:"Mediterranean trade dominance",cultural:"Ottoman golden age",reach:"Middle East, Europe, Africa",timeline:"Ottoman expansion similar but different focus"}},
  {id:"moltke",name:"Helmuth von Moltke the Elder",born:1800,died:1891,cat:"military",field:"Military Strategy",
    quote:"No plan survives first contact with the enemy.",
    contributions:["Prussian military reforms","Wars of German unification victories","General staff system","Railway mobilization"],
    r:0.40,reasoning:"Prussian military modernization was happening. But Moltke's specific innovations — the general staff system, railway logistics — created the machine that won three wars quickly. His operational art was distinctive.",
    counterfactual:"Without Moltke, Prussia still modernizes — Bismarck was the political driver, and military reform was underway. But Moltke's specific innovations made the wars of German unification quick and decisive. The general staff system, railway mobilization, mission-type tactics — these were his contributions. Without them, the wars against Denmark, Austria, and France might have been longer, costlier, messier. German unification still happens, but less efficiently.",
    ripples:[
      {category:"General Staff System",detail:"The model of professional military planning develops differently. Other armies copy a different model."},
      {category:"Wars of Unification",detail:"Prussia still wins, but wars are longer and messier. Different military reputation."},
      {category:"WWI Precedent",detail:"The Schlieffen Plan built on Moltke's railway logistics. Different military tradition, different WWI planning."},
      {category:"Professional Military",detail:"The officer corps as a profession of systematic planning develops differently."}
    ],
    timeline:[
      {year:1864,happened:"Moltke wins Danish War quickly",alternate:"War takes longer; less efficient mobilization"},
      {year:1866,happened:"Seven Weeks War destroys Austrian power",alternate:"Austro-Prussian war longer; outcome similar"},
      {year:1870,happened:"Franco-Prussian War: rapid victory",alternate:"War with France longer; Paris siege extended"},
      {year:1914,happened:"Schlieffen Plan based on Moltke's methods",alternate:"Different military tradition; different WWI strategy"}
    ],
    impact:{lives:"German unification wars",econ:"Modern military organization",cultural:"Staff officer profession",reach:"Germany, global military",timeline:"German unification slower, messier"}},

  // ARTS & CULTURE
  {id:"shakespeare",name:"William Shakespeare",born:1564,died:1616,cat:"arts",field:"Literature & Drama",
    quote:"All the world's a stage, and all the men and women merely players.",
    contributions:["37+ plays including Hamlet, Macbeth, King Lear","Invented 1700+ words","Sonnets","Defined English literary tradition"],
    r:0.10,reasoning:"Marlowe was talented. Jonson was skilled. But no one else was Shakespeare. The psychological depth, the poetry, the sheer quantity of great work — it's not a gap another Elizabethan dramatist could have filled.",
    counterfactual:"Without Shakespeare, the English language would be noticeably different — missing words like 'lonely,' 'generous,' 'countless,' and phrases like 'break the ice' and 'wild-goose chase.' Elizabethan drama would have produced Marlowe's Faustus and Jonson's comedies, but the psychological depth of Hamlet, the cosmic tragedy of Lear, the complex villainy of Iago — these specific explorations of human nature wouldn't exist. English literature's central reference point would be missing.",
    ripples:[
      {category:"English Language",detail:"1,700+ words and countless phrases never enter English. No 'assassination,' 'lonely,' 'eventful,' 'bedroom.' Language still evolves but loses this specific vocabulary and expressiveness."},
      {category:"Literary Tradition",detail:"Marlowe becomes the greatest Elizabethan dramatist. His darker, more cynical vision dominates. English literature develops without Hamlet's introspection, Falstaff's humor, or Prospero's forgiveness."},
      {category:"Theater Development",detail:"The Globe Theatre's repertoire is different. Without Shakespeare's commercial success, the economic model of English theater might have developed differently. The theatrical tradition is less psychologically complex."},
      {category:"Cultural References",detail:"No 'to be or not to be,' no 'star-crossed lovers,' no 'band of brothers.' These phrases that pervade English-speaking culture simply don't exist. Our shared language of emotion and drama is impoverished."}
    ],
    timeline:[
      {year:1590,happened:"Shakespeare begins writing plays in London",alternate:"Marlowe dominates London theater until his death in 1593; no clear successor emerges"},
      {year:1600,happened:"Hamlet written — the 'first modern man'",alternate:"No Hamlet; psychological drama develops differently or later"},
      {year:1606,happened:"Macbeth, King Lear, Antony and Cleopatra",alternate:"Jonson's classicism dominates; tragedy is less cosmic and psychological"},
      {year:1623,happened:"First Folio published, preserving 36 plays",alternate:"Marlowe's works carefully preserved instead; half of Shakespeare's plays would be lost anyway"}
    ],
    impact:{lives:"Shaped English language for 400M+ speakers",econ:"Theater industry foundations",cultural:"Human psychology exploration",reach:"English-speaking world and beyond",timeline:"English literature fundamentally different"}},
  {id:"davinci",name:"Leonardo da Vinci",born:1452,died:1519,cat:"arts",field:"Art & Polymath",
    quote:"Learning never exhausts the mind.",
    contributions:["Mona Lisa, Last Supper","Anatomical drawings","Flying machine designs","Renaissance polymath ideal"],
    r:0.15,reasoning:"Other Renaissance artists were brilliant. But Leonardo's range across art, science, engineering, and anatomy was unique. His notebooks contain ideas centuries ahead. The 'Renaissance Man' ideal exists because of him.",
    counterfactual:"Without Leonardo, the Renaissance still happens — Michelangelo, Raphael, and Botticelli all flourish. But the specific combination of art and science that Leonardo embodied is missing. The Mona Lisa and Last Supper don't exist. His anatomical drawings, centuries ahead of their time, don't influence medical illustration. His notebooks full of helicopters and tanks aren't there to inspire later inventors. The 'Renaissance Man' ideal — the polymath who masters multiple domains — might not have the same cultural force.",
    ripples:[
      {category:"Art-Science Integration",detail:"The model of artist as scientist is weaker. Art and science remain more separated without Leonardo's example."},
      {category:"Iconic Works",detail:"No Mona Lisa — perhaps the most famous painting in history. No Last Supper. Renaissance art peaks differently."},
      {category:"Anatomical Drawing",detail:"Medical illustration develops without Leonardo's pioneering work. Andreas Vesalius still revolutionizes anatomy, but from different foundation."},
      {category:"Inventor Mythology",detail:"Without Leonardo's notebooks, the myth of the visionary inventor ahead of his time is weaker."}
    ],
    timeline:[
      {year:1482,happened:"Leonardo moves to Milan; begins major career",alternate:"Verrocchio's workshop produces other artists; different Florentine trajectory"},
      {year:1498,happened:"Last Supper completed",alternate:"Different artist paints refectory; different iconography dominates"},
      {year:1503,happened:"Mona Lisa begun",alternate:"No Mona Lisa; most famous painting in history is something else"},
      {year:1519,happened:"Leonardo dies; notebooks scattered",alternate:"No notebooks to rediscover; Renaissance polymath ideal weaker"}
    ],
    impact:{lives:"Art-science integration model",econ:"Mona Lisa: priceless cultural asset",cultural:"Renaissance Man archetype",reach:"Western art tradition",timeline:"Art-science synthesis delayed"}},
  {id:"beethoven",name:"Ludwig van Beethoven",born:1770,died:1827,cat:"arts",field:"Music Composition",
    quote:"Music is the mediator between the spiritual and the sensual life.",
    contributions:["9 symphonies bridging Classical and Romantic","Composed major works while deaf","Piano sonatas","String quartets"],
    r:0.15,reasoning:"Romantic music was coming, but Beethoven showed how to get there. The Third Symphony broke every rule. The Ninth, composed while deaf, was unprecedented. Without him, the transition from Mozart to Brahms looks different.",
    counterfactual:"Without Beethoven, classical music still evolves toward Romanticism — the cultural forces were there. But the specific bridge from Mozart to Brahms is missing. The Third Symphony (Eroica) that broke every classical rule doesn't exist to show how. The Ninth Symphony's choral finale — 'Ode to Joy' — isn't there. The image of the artist as heroic individual struggling against fate (including his own deafness) is weaker. Western music's trajectory changes.",
    ripples:[
      {category:"Classical-Romantic Bridge",detail:"Without Beethoven showing how to break classical rules, the transition to Romanticism takes different path."},
      {category:"Symphony Form",detail:"The symphony after Mozart develops differently. Schubert, Brahms, Mahler build on different foundation."},
      {category:"Artist as Hero",detail:"The image of the tortured genius — composing while deaf, shaking fist at fate — is missing. Romantic artist mythology weaker."},
      {category:"Ode to Joy",detail:"The EU anthem doesn't exist. The most recognizable melody in Western classical music is something else."}
    ],
    timeline:[
      {year:1804,happened:"Eroica Symphony premieres; classical rules broken",alternate:"Classical style continues longer; Romantic revolution delayed"},
      {year:1808,happened:"Fifth Symphony; 'fate knocking'",alternate:"Different composer defines symphonic drama; different vocabulary"},
      {year:1824,happened:"Ninth Symphony premieres; Beethoven deaf",alternate:"No choral symphony; no 'Ode to Joy' in this form"},
      {year:1827,happened:"Beethoven dies; Romantic era accelerates",alternate:"Different trajectory from Mozart to Brahms; Romanticism emerges differently"}
    ],
    impact:{lives:"Shaped all subsequent Western music",econ:"Classical music industry",cultural:"Artist as hero narrative",reach:"Global classical tradition",timeline:"Romantic music develops differently"}},
  {id:"mozart",name:"Wolfgang Amadeus Mozart",born:1756,died:1791,cat:"arts",field:"Music Composition",
    quote:"Neither a lofty degree of intelligence nor imagination nor both together go to the making of genius. Love, love, love, that is the soul of genius.",
    contributions:["Over 600 compositions","Operas: Don Giovanni, Magic Flute","Piano concertos","Requiem Mass"],
    r:0.15,reasoning:"Child prodigy who matured into singular genius. Haydn could compose symphonies, but Mozart's operas combined dramatic and musical genius uniquely. Classical period music would lack its highest achievements without him.",
    counterfactual:"Without Mozart, Haydn still develops the symphony and string quartet. Beethoven still revolutionizes music. But the specific 600+ Mozart compositions don't exist. The Marriage of Figaro, Don Giovanni, The Magic Flute — operas that combined musical and dramatic genius uniquely — are gone. The piano concerto form loses its greatest examples. Classical period music is recognizable but impoverished.",
    ripples:[
      {category:"Opera",detail:"Without Mozart's dramatic-musical synthesis, opera develops differently. The Italian tradition continues without this peak."},
      {category:"Piano Concerto",detail:"The form exists but lacks its greatest examples. Beethoven builds on different foundation."},
      {category:"Classical Period",detail:"Haydn and early Beethoven define the classical style. The effortless perfection Mozart represents is missing."},
      {category:"Child Prodigy Archetype",detail:"The cultural image of the musical prodigy might center on someone else or be weaker."}
    ],
    timeline:[
      {year:1762,happened:"Six-year-old Mozart tours Europe",alternate:"No child prodigy phenomenon; classical music develops from adult composers"},
      {year:1786,happened:"Marriage of Figaro premieres",alternate:"Opera continues without Mozart's innovations; different form"},
      {year:1791,happened:"Mozart dies at 35; Requiem unfinished",alternate:"No Mozart legacy; classical period sounds different"},
      {year:1800,happened:"Mozart's influence shapes Beethoven",alternate:"Beethoven builds on Haydn alone; different trajectory"}
    ],
    impact:{lives:"Classical music canon",econ:"Opera and concert industry",cultural:"Prodigy genius archetype",reach:"Global classical tradition",timeline:"Classical period music less rich"}},
  {id:"picasso",name:"Pablo Picasso",born:1881,died:1973,cat:"arts",field:"Visual Art",
    quote:"Every child is an artist. The problem is how to remain an artist once we grow up.",
    contributions:["Co-founded Cubism with Braque","Guernica","Blue and Rose periods","Seven decades of reinvention"],
    r:0.35,reasoning:"Braque was developing Cubism alongside Picasso — they worked so closely some paintings are hard to attribute. Modern art was happening regardless. Picasso's unique contribution was celebrity, productivity, and constant reinvention.",
    counterfactual:"Without Picasso, Cubism still emerges — Georges Braque was developing it simultaneously, and the two worked so closely that some paintings are hard to attribute. Modern art's trajectory continues through Matisse, Kandinsky, Duchamp. But Picasso's specific contributions — the Blue Period, Guernica, seven decades of constant reinvention — don't exist. The model of the artist as celebrity-genius-provocateur is weaker.",
    ripples:[
      {category:"Cubism",detail:"Braque develops Cubism anyway. The movement exists but is associated with different name."},
      {category:"Artist as Celebrity",detail:"Without Picasso's 70-year career of self-reinvention and publicity, the artist-as-celebrity model is weaker."},
      {category:"Political Art",detail:"Guernica doesn't exist. The most famous political artwork of the 20th century is something else."},
      {category:"Art Market",detail:"Different works become the most expensive. The Picasso premium doesn't exist."}
    ],
    timeline:[
      {year:1907,happened:"Les Demoiselles d'Avignon shocks art world",alternate:"Cubism emerges through Braque more gradually"},
      {year:1912,happened:"Picasso and Braque develop synthetic cubism",alternate:"Braque alone develops the style; credited differently"},
      {year:1937,happened:"Guernica painted for Spanish Pavilion",alternate:"Different artist responds to Guernica bombing; different icon"},
      {year:1973,happened:"Picasso dies; 50,000+ works in estate",alternate:"Modern art history has different central figure"}
    ],
    impact:{lives:"Redefined visual representation",econ:"Art market: paintings worth $100M+",cultural:"Artist as celebrity",reach:"Global modern art",timeline:"Cubism emerges anyway via Braque"}},
  {id:"michelangelo",name:"Michelangelo",born:1475,died:1564,cat:"arts",field:"Visual Art & Architecture",
    quote:"I saw the angel in the marble and carved until I set him free.",
    contributions:["Sistine Chapel ceiling","David sculpture","Pietà","St. Peter's Basilica design"],
    r:0.15,reasoning:"Other Renaissance artists were capable, but Michelangelo's combination of sculpture, painting, and architecture at the highest level was unique. The Sistine Chapel ceiling alone represents years of work no one else could have done.",
    counterfactual:"Without Michelangelo, the Renaissance still happens — Leonardo, Raphael, Bramante all contribute. But the Sistine Chapel ceiling doesn't exist in this form. The David in Florence is by someone else or doesn't exist. St. Peter's Basilica has a different dome. The specific vision of human physical and spiritual perfection that Michelangelo embodied — the terribilità — is missing from Western art.",
    ripples:[
      {category:"Sistine Chapel",detail:"Different artist paints the ceiling. The specific vision of Creation, the prophets, the Last Judgment — all different."},
      {category:"Sculpture",detail:"The David doesn't exist. Renaissance sculpture peaks with someone else — perhaps Donatello's legacy continues differently."},
      {category:"St. Peter's Basilica",detail:"Different architect completes the dome. The Roman skyline looks different."},
      {category:"Artistic Standard",detail:"The idea of the artist as tortured genius working alone at impossible scale is weaker."}
    ],
    timeline:[
      {year:1499,happened:"Pietà completed at age 24",alternate:"Different sculptor makes name in Rome; different trajectory"},
      {year:1504,happened:"David unveiled in Florence",alternate:"Florentine civic sculpture by someone else; different symbol"},
      {year:1512,happened:"Sistine Chapel ceiling completed",alternate:"Different artist paints ceiling; Renaissance art peaks differently"},
      {year:1564,happened:"Michelangelo dies; St. Peter's dome unfinished",alternate:"Different architect; different dome; different Roman skyline"}
    ],
    impact:{lives:"Western art standard",econ:"Vatican as art destination",cultural:"Artistic genius archetype",reach:"Global art",timeline:"Renaissance art less towering"}},
  {id:"bach",name:"Johann Sebastian Bach",born:1685,died:1750,cat:"arts",field:"Music Composition",
    quote:"The aim and final end of all music should be none other than the glory of God and the refreshment of the soul.",
    contributions:["Well-Tempered Clavier","Brandenburg Concertos","Mass in B minor","Fugue mastery"],
    r:0.15,reasoning:"Baroque music had many composers, but Bach's contrapuntal mastery was unmatched. His work was obscure until Mendelssohn's revival. Once rediscovered, it became foundational. No one else achieved his complexity with such beauty.",
    counterfactual:"Without Bach, Baroque music still exists — Handel, Vivaldi, Telemann all flourish. But the specific contrapuntal mastery Bach achieved is missing. The Well-Tempered Clavier, which taught generations of pianists, doesn't exist. When Mendelssohn revived Bach in 1829, there would be nothing to revive. Western music loses its deepest foundation.",
    ripples:[
      {category:"Counterpoint",detail:"The art of fugue doesn't reach its peak. Musical complexity develops along different lines."},
      {category:"Piano Pedagogy",detail:"The Well-Tempered Clavier doesn't exist. Pianists learn from different repertoire."},
      {category:"Musical Architecture",detail:"The sense of music as logical structure — mathematics made audible — is weaker."},
      {category:"Classical Foundation",detail:"Mozart and Beethoven build on different foundation. The 'Bach revival' never happens."}
    ],
    timeline:[
      {year:1722,happened:"Well-Tempered Clavier Book I completed",alternate:"No systematic exploration of all keys; keyboard pedagogy different"},
      {year:1750,happened:"Bach dies relatively obscure",alternate:"No body of work to rediscover; Baroque remembered for Handel"},
      {year:1829,happened:"Mendelssohn revives Bach's St. Matthew Passion",alternate:"No Bach revival; classical music has different foundation"},
      {year:1900,happened:"Bach established as foundational composer",alternate:"Different composers define Western music's roots"}
    ],
    impact:{lives:"Western music foundation",econ:"Classical music industry",cultural:"Musical architecture",reach:"Global",timeline:"Baroque music less complex"}},
  {id:"tolstoy",name:"Leo Tolstoy",born:1828,died:1910,cat:"arts",field:"Literature",
    quote:"Everyone thinks of changing the world, but no one thinks of changing himself.",
    contributions:["War and Peace","Anna Karenina","Christian anarchist philosophy","Influenced Gandhi"],
    r:0.20,reasoning:"Russian literature had Dostoevsky, Turgenev, Chekhov. But Tolstoy's specific achievements were unmatched. His late-life philosophy influenced Gandhi directly. His combination of novelist and moral philosopher was unique.",
    counterfactual:"Without Tolstoy, Russian literature still produces Dostoevsky, Turgenev, Chekhov — a golden age regardless. But War and Peace and Anna Karenina don't exist. The epic social novel that captures an entire society is missing its greatest example. Tolstoy's late-life moral philosophy, which influenced Gandhi directly, doesn't exist. The tradition of writer-as-prophet is weaker.",
    ripples:[
      {category:"Epic Novel",detail:"War and Peace doesn't exist. The model of the novel that captures an entire society and era is missing its peak example."},
      {category:"Gandhi's Philosophy",detail:"Tolstoy's correspondence with Gandhi directly shaped his nonviolent philosophy. Without Tolstoy, Gandhi's ideas develop differently."},
      {category:"Russian Literature",detail:"Dostoevsky becomes the undisputed peak of Russian fiction. The balance between his darkness and Tolstoy's breadth is gone."},
      {category:"Writer as Prophet",detail:"The model of the novelist who becomes moral teacher — renouncing fiction for philosophy — is weaker."}
    ],
    timeline:[
      {year:1869,happened:"War and Peace completed",alternate:"No epic Russian novel; the form's peak is elsewhere"},
      {year:1877,happened:"Anna Karenina published",alternate:"No Anna Karenina; realist novel develops without this example"},
      {year:1886,happened:"Tolstoy's religious conversion",alternate:"No Tolstoyan movement; Russian pacifism develops differently"},
      {year:1910,happened:"Tolstoy dies; Gandhi mourns",alternate:"Gandhi's nonviolent philosophy develops from different sources"}
    ],
    impact:{lives:"Literary influence globally",econ:"Publishing industry",cultural:"Novel as epic form",reach:"Global literature",timeline:"Russian literature less towering"}},
  {id:"dostoevsky",name:"Fyodor Dostoevsky",born:1821,died:1881,cat:"arts",field:"Literature",
    quote:"The soul is healed by being with children.",
    contributions:["Crime and Punishment","The Brothers Karamazov","Notes from Underground","Psychological depth in fiction"],
    r:0.15,reasoning:"No one else wrote like Dostoevsky — the psychological intensity, the religious questioning, the examination of extremity. His influence on existentialism, psychology, and literature was unique.",
    counterfactual:"Without Dostoevsky, Russian literature still flourishes — Tolstoy, Turgenev, Gogol all contribute. But the specific exploration of psychological extremity is missing. Crime and Punishment's tortured conscience, The Brothers Karamazov's religious doubt, Notes from Underground's spite — these specific territories go unexplored. Existentialism loses a crucial precursor. Freud loses a key influence.",
    ripples:[
      {category:"Psychological Novel",detail:"The exploration of extreme mental states — guilt, spite, religious doubt — happens differently or later."},
      {category:"Existentialism",detail:"Nietzsche still develops his philosophy, but existentialism loses a crucial literary precursor."},
      {category:"Freud's Development",detail:"Freud explicitly drew on Dostoevsky. Psychoanalysis develops from different literary sources."},
      {category:"Russian Literature",detail:"Tolstoy becomes the undisputed master. Russian fiction is more social, less psychological."}
    ],
    timeline:[
      {year:1866,happened:"Crime and Punishment published",alternate:"Psychological crime fiction develops differently or later"},
      {year:1869,happened:"The Idiot explores goodness and madness",alternate:"Literature of extreme psychological states is missing"},
      {year:1880,happened:"Brothers Karamazov completed",alternate:"The religious novel, the problem of evil in fiction, develops differently"},
      {year:1881,happened:"Dostoevsky dies; influence begins",alternate:"Existentialism and depth psychology lack this literary foundation"}
    ],
    impact:{lives:"Influenced Freud, existentialists",econ:"Literary tradition",cultural:"Psychological novel",reach:"Global literature",timeline:"Modern psychology of literature delayed"}},
  {id:"murasaki",name:"Murasaki Shikibu",born:973,died:1014,cat:"arts",field:"Literature",
    quote:"The truth is I found real life tedious.",
    contributions:["Tale of Genji (world's first novel)","Heian court literature","Psychological realism in fiction","Japanese literary foundation"],
    r:0.10,reasoning:"The Tale of Genji is arguably the first novel in any language — certainly the first with psychological complexity. Without Murasaki, the novel form might have emerged elsewhere, centuries later, in different form.",
    counterfactual:"Without Murasaki Shikibu, the novel as literary form might have emerged elsewhere, centuries later. The Tale of Genji — with its psychological complexity, its exploration of time and memory, its focus on inner life — was unprecedented. Japanese literature develops without its foundational text. The entire tradition of prose fiction that explores consciousness might have emerged differently.",
    ripples:[
      {category:"Novel Form",detail:"The novel as we know it might have emerged in Europe centuries later, from different roots. The form's Asian origin is lost."},
      {category:"Japanese Literature",detail:"Japanese literary tradition develops without its foundational text. Court literature takes different form."},
      {category:"Female Authorship",detail:"The precedent of women writing major literature is weaker. Heian court women's literary culture might still exist but without its peak."},
      {category:"Psychological Realism",detail:"The exploration of inner life in fiction develops later or differently. Western novel might claim priority."}
    ],
    timeline:[
      {year:1008,happened:"Tale of Genji written",alternate:"Novel form doesn't emerge in Asia; Western prose fiction later claims primacy"},
      {year:1100,happened:"Genji becomes Japanese literary foundation",alternate:"Japanese literature develops from different roots; no Genji tradition"},
      {year:1925,happened:"First English translation",alternate:"Western literature never discovers this early psychological novel"},
      {year:2000,happened:"Genji recognized as world's first novel",alternate:"The novel's origins are defined entirely by European tradition"}
    ],
    impact:{lives:"Invented the novel form",econ:"Japanese literary tradition",cultural:"Female authorship precedent",reach:"Global literature",timeline:"Novel form emerges elsewhere, later"}},
  {id:"fela",name:"Fela Kuti",born:1938,died:1997,cat:"arts",field:"Music & Activism",
    quote:"Music is the weapon of the future.",
    contributions:["Created Afrobeat genre","Political resistance through music","Kalakuta Republic commune","Pan-African movement"],
    r:0.10,reasoning:"Afrobeat — the fusion of James Brown funk, highlife, jazz, and Yoruba rhythms — was Fela's invention. His musical style, political confrontation, and communal living were a package no one else offered. Without him, the genre doesn't exist.",
    counterfactual:"Without Fela Kuti, Afrobeat doesn't exist — the genre was his personal invention, fusing James Brown's funk with highlife, jazz, and Yoruba rhythms. Nigerian music develops differently, probably more toward jùjú or highlife. The model of African musician as political revolutionary is weaker. His sons Femi and Seun don't carry forward a tradition that never existed. Global music lacks this specific sound.",
    ripples:[
      {category:"Afrobeat Genre",detail:"The genre doesn't exist. Nigerian music develops along different lines — more highlife, more jùjú."},
      {category:"Political Music in Africa",detail:"The model of musician as political revolutionary confronting dictatorship directly is weaker."},
      {category:"Global Music",detail:"Contemporary artists from Vampire Weekend to Beyoncé lack this influence. Global music sounds different."},
      {category:"Pan-African Identity",detail:"Fela's specific vision of Pan-African consciousness through music doesn't exist."}
    ],
    timeline:[
      {year:1969,happened:"Fela develops Afrobeat sound",alternate:"Nigerian music continues along highlife/jùjú path; no Afrobeat"},
      {year:1977,happened:"Kalakuta Republic attacked by soldiers",alternate:"No confrontation; no 'Zombie'; political music in Nigeria is different"},
      {year:1997,happened:"Fela dies; sons continue legacy",alternate:"No Afrobeat legacy to continue; different Nigerian music scene"},
      {year:2010,happened:"Fela! Broadway musical",alternate:"No Afrobeat story to tell; Nigerian music history remembered differently"}
    ],
    impact:{lives:"Nigerian political consciousness",econ:"Afrobeat global music industry",cultural:"Music as resistance",reach:"Africa, global music",timeline:"Afrobeat doesn't exist"}},
  {id:"tagore",name:"Rabindranath Tagore",born:1861,died:1941,cat:"arts",field:"Literature & Music",
    quote:"You can't cross the sea merely by standing and staring at the water.",
    contributions:["First non-European Nobel in Literature","Bengali poetry and songs","Two national anthems (India, Bangladesh)","Santiniketan university"],
    r:0.15,reasoning:"Tagore's influence on Bengali culture was so total that modern Bengali identity is partly his creation. Two nations chose his songs as anthems. No other figure so completely shaped a culture's modern form.",
    counterfactual:"Without Tagore, Bengal still has a literary renaissance, but it lacks its central figure. The Nobel Prize for Literature in 1913 goes to someone else — no non-European breaks that barrier yet. India and Bangladesh have different national anthems. The model of poet-philosopher-educator-nationalist that Tagore embodied doesn't exist. Bengali cultural identity develops differently.",
    ripples:[
      {category:"Bengali Identity",detail:"Modern Bengali cultural identity is partly Tagore's creation. Without him, the renaissance takes different shape."},
      {category:"National Anthems",detail:"India and Bangladesh have different national anthems. The songs that define these nations don't exist."},
      {category:"Nobel Prize",detail:"The 1913 Nobel goes elsewhere. The barrier of 'non-European' literature breaks later."},
      {category:"Education",detail:"Santiniketan doesn't exist. The alternative education model Tagore created isn't available."}
    ],
    timeline:[
      {year:1901,happened:"Tagore founds Santiniketan school",alternate:"Different educational model in Bengal; different institution"},
      {year:1913,happened:"Nobel Prize for Gitanjali",alternate:"Nobel goes elsewhere; non-European literature recognized later"},
      {year:1941,happened:"Tagore dies; songs become anthems",alternate:"India and Bangladesh choose different anthems after independence"},
      {year:1971,happened:"Bangladesh adopts Tagore song as anthem",alternate:"Different anthem; different national symbolism"}
    ],
    impact:{lives:"Bengali cultural identity for 300M+",econ:"Indian arts/education institutions",cultural:"East-West cultural bridge",reach:"India, Bangladesh, global literature",timeline:"Bengali cultural development different"}},
  {id:"rumi",name:"Jalal ad-Din Rumi",born:1207,died:1273,cat:"arts",field:"Poetry & Mysticism",
    quote:"What you seek is seeking you.",
    contributions:["Masnavi epic poem","Sufi poetry tradition","Whirling dervishes (Mevlevi order)","Best-selling poet in America"],
    r:0.15,reasoning:"Sufi poetry existed before and after Rumi, but his specific voice — ecstatic, accessible, universal — made him the most-read poet in America seven centuries later. The Mevlevi order exists because of his teachings.",
    counterfactual:"Without Rumi, Sufi poetry still exists — Hafez, Attar, Saadi all contribute. But the specific voice that made Rumi the best-selling poet in America seven centuries later is missing. The Mevlevi order (whirling dervishes) doesn't exist. The accessible, ecstatic, universal mysticism that crosses cultural boundaries might not have the same ambassador.",
    ripples:[
      {category:"Sufi Poetry",detail:"Hafez or Attar becomes the primary Sufi voice in the West. Different selections, different emphasis."},
      {category:"Mevlevi Order",detail:"The whirling dervishes don't exist. Sufi practice develops without this distinctive form."},
      {category:"Western Spirituality",detail:"The New Age absorption of Sufi poetry focuses on someone else or doesn't happen the same way."},
      {category:"Persian Literature",detail:"The Masnavi doesn't exist. Persian literary tradition has different peak."}
    ],
    timeline:[
      {year:1244,happened:"Rumi meets Shams; transformation begins",alternate:"No transformative friendship; Rumi remains conventional scholar"},
      {year:1273,happened:"Rumi dies; Mevlevi order founded",alternate:"No whirling dervishes; Sufi practice develops differently"},
      {year:1988,happened:"Coleman Barks translations popularize Rumi",alternate:"Different Sufi poet becomes Western phenomenon, or none does"},
      {year:2007,happened:"Rumi is best-selling poet in America",alternate:"Different poet holds that title; spiritual poetry has different face"}
    ],
    impact:{lives:"Spiritual influence: millions",econ:"Sufi tourism, publishing",cultural:"Mystical poetry tradition",reach:"Islamic world, Western spirituality",timeline:"Sufi poetry tradition less universal"}},
  {id:"tarkovsky",name:"Andrei Tarkovsky",born:1932,died:1986,cat:"arts",field:"Film",
    quote:"The artist exists because the world is not perfect.",
    contributions:["Stalker, Solaris, Andrei Rublev","Poetic cinema style","Influenced generations of filmmakers","Time and memory in film"],
    r:0.15,reasoning:"Other art filmmakers existed. But Tarkovsky's specific approach to time, spirituality, and image was unique. His influence on directors from Nolan to Villeneuve is direct. No one else made films that felt like his.",
    counterfactual:"Without Tarkovsky, art cinema still exists — Bergman, Fellini, Antonioni all contribute. But the specific exploration of time, spirituality, and image that defined Tarkovsky is missing. Stalker, Solaris, Andrei Rublev don't exist. Directors from Lars von Trier to Denis Villeneuve lose a crucial influence. The 'Tarkovskian' approach to cinema — long takes, natural sound, spiritual searching — doesn't exist as a reference point.",
    ripples:[
      {category:"Art Cinema",detail:"The Tarkovskian style doesn't exist. Art cinema develops along different lines — perhaps more Bergmanesque."},
      {category:"Science Fiction",detail:"Philosophical sci-fi loses Solaris and Stalker. The genre is more action-oriented."},
      {category:"Film Language",detail:"The vocabulary of long takes, natural sound, water imagery that Tarkovsky pioneered doesn't exist."},
      {category:"Director Influence",detail:"Nolan, Villeneuve, von Trier all cite Tarkovsky. Their work develops from different sources."}
    ],
    timeline:[
      {year:1966,happened:"Andrei Rublev completed; banned",alternate:"Soviet art cinema develops differently; Rublev's meditation on art doesn't exist"},
      {year:1972,happened:"Solaris released",alternate:"Philosophical sci-fi cinema has different foundation"},
      {year:1979,happened:"Stalker released",alternate:"The 'zone' as metaphor doesn't exist; different spiritual cinema"},
      {year:1986,happened:"Tarkovsky dies; influence grows",alternate:"Art cinema reference points are different; 'Tarkovskian' not a word"}
    ],
    impact:{lives:"Film as art form",econ:"Art cinema",cultural:"Poetic filmmaking",reach:"Global cinema",timeline:"Art cinema misses a crucial voice"}},
  {id:"kurosawa",name:"Akira Kurosawa",born:1910,died:1998,cat:"arts",field:"Film",
    quote:"In a mad world, only the mad are sane.",
    contributions:["Seven Samurai, Rashomon, Yojimbo","Influenced Star Wars, westerns","Japanese cinema globally","Samurai film genre"],
    r:0.20,reasoning:"Kurosawa's techniques influenced Hollywood permanently. Seven Samurai became The Magnificent Seven; Yojimbo became A Fistful of Dollars. His specific visual style created a global film language.",
    counterfactual:"Without Kurosawa, Japanese cinema still exists — Ozu, Mizoguchi continue. But the specific techniques that influenced Hollywood are missing. Seven Samurai doesn't become The Magnificent Seven. Yojimbo doesn't become A Fistful of Dollars. George Lucas doesn't cite Hidden Fortress as Star Wars' inspiration. The global film language is different.",
    ripples:[
      {category:"Hollywood Influence",detail:"Western and action cinema develop without Kurosawa's techniques. The wipe, the weather as drama, the multi-character action."},
      {category:"Samurai Genre",detail:"The samurai film exists but without Kurosawa's reinvention. Different visual vocabulary."},
      {category:"Remakes",detail:"No Magnificent Seven, no Fistful of Dollars, no Star Wars in same form. These films are different or don't exist."},
      {category:"Rashomon Effect",detail:"The narrative technique of multiple perspectives isn't named. The concept exists but with different reference."}
    ],
    timeline:[
      {year:1950,happened:"Rashomon wins Venice Golden Lion",alternate:"Japanese cinema reaches West differently; no 'Rashomon effect'"},
      {year:1954,happened:"Seven Samurai released",alternate:"Action cinema develops without this template; no Magnificent Seven"},
      {year:1961,happened:"Yojimbo influences Leone's westerns",alternate:"Spaghetti westerns develop from different sources or not at all"},
      {year:1977,happened:"Lucas cites Hidden Fortress for Star Wars",alternate:"Star Wars draws from different sources; different film"}
    ],
    impact:{lives:"Global cinema techniques",econ:"Film industry",cultural:"East-West film influence",reach:"Global cinema",timeline:"Action filmmaking develops differently"}},
  {id:"homer",name:"Homer",born:-800,died:-701,cat:"arts",field:"Epic Poetry",
    quote:"There is nothing more admirable than when two people who see eye to eye keep house as man and wife.",
    contributions:["Iliad and Odyssey","Founded Western literature","Oral poetry tradition","Greek mythology codification"],
    r:0.25,reasoning:"The historicity of Homer is debated. But someone composed these foundational texts. The specific poems as we have them shaped all Western literature that followed.",
    counterfactual:"Without Homer — or whoever composed the Iliad and Odyssey — Western literature has a different foundation. These weren't the only Greek epics; the 'Epic Cycle' contained other poems, now lost. But the Iliad's exploration of honor, rage, and mortality, and the Odyssey's journey narrative, became the templates. Every war story echoes the Iliad; every homecoming echoes the Odyssey. Different foundational texts would have meant different literary archetypes.",
    ripples:[
      {category:"Literary Foundation",detail:"Other Greek epics become foundational instead. Different templates for narrative."},
      {category:"Educational Tradition",detail:"Greek and Roman education centered on Homer. Different texts, different cultural transmission."},
      {category:"Mythological Canon",detail:"The specific versions of Greek myths that dominated came through Homer. Different tellings might prevail."},
      {category:"Literary Archetypes",detail:"The journey home, the warrior's rage, the faithful wife — these archetypes come from Homer. Different stories, different archetypes."}
    ],
    timeline:[
      {year:-750,happened:"Homeric epics composed/compiled",alternate:"Different oral poems become canonical; different foundation"},
      {year:-500,happened:"Homer central to Greek education",alternate:"Greeks educated on different texts; different cultural values"},
      {year:-30,happened:"Virgil writes Aeneid in response to Homer",alternate:"Roman epic responds to different Greek foundation"},
      {year:2024,happened:"Homer still read, referenced everywhere",alternate:"Different foundational texts shape Western literature"}
    ],
    impact:{lives:"Western literary tradition",econ:"Classical education",cultural:"Epic poetry archetype",reach:"Western civilization",timeline:"Greek literature develops differently"}},
  {id:"dante",name:"Dante Alighieri",born:1265,died:1321,cat:"arts",field:"Literature",
    quote:"In the middle of the journey of our life I found myself within a dark woods where the straight way was lost.",
    contributions:["Divine Comedy","Established Italian as literary language","Medieval worldview synthesis","Influenced all subsequent literature"],
    r:0.15,reasoning:"Dante wrote in vernacular Italian when Latin was the literary language — revolutionary. The Divine Comedy's scope and ambition had no predecessor. His vision of Hell, Purgatory, and Heaven became Western default imagery.",
    counterfactual:"Without Dante, the Divine Comedy doesn't exist — and with it, our visual imagination of Hell, Purgatory, and Heaven. The nine circles of Hell, Satan frozen in ice, the climb up Mount Purgatory — this is how the medieval world understood the afterlife, and how we still picture it. The choice to write in Italian (not Latin) legitimized vernacular literature across Europe. Without Dante, Italian might not have become a literary language when it did.",
    ripples:[
      {category:"Italian Language",detail:"Without Dante's Tuscan, Italian might have taken longer to become a literary language. Latin persists longer."},
      {category:"Afterlife Imagery",detail:"Our visual imagination of Hell and Heaven comes largely from Dante. Different imagery might dominate."},
      {category:"Vernacular Literature",detail:"The legitimization of writing in local languages might come later. Chaucer, etc. write differently."},
      {category:"Literary Ambition",detail:"The Divine Comedy's comprehensive worldview set a standard. Without it, literary ambition might aim lower."}
    ],
    timeline:[
      {year:1308,happened:"Dante begins Divine Comedy in exile",alternate:"No Divine Comedy; medieval worldview expressed differently"},
      {year:1321,happened:"Divine Comedy completed; Dante dies",alternate:"Italian vernacular literature develops later or differently"},
      {year:1400,happened:"Boccaccio lectures on Dante; canonization begins",alternate:"Different Italian author becomes foundational"},
      {year:2024,happened:"Dante's Hell imagery still dominant",alternate:"Different visualizations of afterlife in Western imagination"}
    ],
    impact:{lives:"Italian language and identity",econ:"Italian literary tradition",cultural:"Medieval worldview art",reach:"Western literature",timeline:"Italian literature develops differently"}},
  {id:"disney",name:"Walt Disney",born:1901,died:1966,cat:"arts",field:"Animation & Entertainment",
    quote:"All our dreams can come true, if we have the courage to pursue them.",
    contributions:["Feature animated films (Snow White)","Disneyland theme park","Mickey Mouse","Entertainment empire"],
    r:0.35,reasoning:"Animation was developing at multiple studios. But Disney's specific vision — feature-length animated films as art, theme parks as immersive storytelling — was personal. Snow White was a bet no one else would have made.",
    counterfactual:"Without Disney, animation still develops — the Fleischer brothers, Warner Bros., and others were producing cartoons. But Disney's specific ambitions were unique: feature-length animated films as serious art (Snow White was called 'Disney's Folly'), theme parks as immersive storytelling environments. These were bets no one else would have made. Animation might have remained shorts. Theme parks might have stayed amusement parks.",
    ripples:[
      {category:"Feature Animation",detail:"Without Snow White's success, feature-length animation might not happen for decades. The form stays short."},
      {category:"Theme Parks",detail:"Disneyland's specific vision — immersive storytelling, not just rides — might not emerge. Theme parks stay carnivals."},
      {category:"Childhood Entertainment",detail:"The specific Disney formula — fairy tales, princesses, happy endings — doesn't become the default."},
      {category:"Media Empire",detail:"The Disney company doesn't exist. Entertainment industry structure is very different."}
    ],
    timeline:[
      {year:1928,happened:"Mickey Mouse debuts in Steamboat Willie",alternate:"Different character or studio defines early animation"},
      {year:1937,happened:"Snow White proves feature animation viable",alternate:"Feature animation not attempted or fails; stays shorts"},
      {year:1955,happened:"Disneyland opens",alternate:"Theme parks remain amusement parks; different entertainment model"},
      {year:2024,happened:"Disney dominates entertainment",alternate:"Entertainment industry structured very differently; no single dominant brand"}
    ],
    impact:{lives:"Entertainment for billions",econ:"Disney company: $200B+ value",cultural:"Childhood imagination shaped globally",reach:"Global entertainment",timeline:"Animation advances slower, differently"}},
  
  // MORE ARTS & CULTURE
  {id:"vangogh",name:"Vincent van Gogh",born:1853,died:1890,cat:"arts",field:"Visual Art",
    quote:"I dream my painting and I paint my dream.",
    contributions:["Post-Impressionist style","Starry Night, Sunflowers","2,100+ artworks","Influenced Expressionism"],
    r:0.20,reasoning:"Van Gogh's style was unique — no one else painted with that emotional intensity and brushwork. He sold one painting in his lifetime but became the most influential post-Impressionist. His specific vision was irreplaceable.",
    counterfactual:"Without Van Gogh, Post-Impressionism still exists — Cézanne, Gauguin, Seurat were all working. But Van Gogh's specific contribution — the emotional intensity, the visible brushwork that captured inner states, the color as feeling — was uniquely his. Starry Night, Sunflowers, the Bedroom at Arles don't exist. Expressionism loses a crucial precursor. The 'tortured artist' narrative loses its central example.",
    ripples:[
      {category:"Expressionism",detail:"Without Van Gogh's example, Expressionism develops differently. Munch becomes more central perhaps."},
      {category:"Art Market",detail:"The most expensive paintings ever sold include many Van Goghs. Different artists top the list."},
      {category:"Popular Imagination",detail:"The 'tortured artist' narrative loses its central example. Different stories about creativity and madness."},
      {category:"Post-Impressionism",detail:"The movement looks different without his contribution. Cézanne and Gauguin dominate more completely."}
    ],
    timeline:[
      {year:1886,happened:"Van Gogh moves to Paris; style transforms",alternate:"Post-Impressionism develops without his contribution"},
      {year:1888,happened:"Arles period; most famous works",alternate:"Starry Night, Sunflowers, Bedroom don't exist"},
      {year:1890,happened:"Van Gogh dies; sold one painting",alternate:"No posthumous discovery narrative"},
      {year:2024,happened:"Van Gogh most recognized artist",alternate:"Different artist represents 'genius'; different art narrative"}
    ],
    impact:{lives:"Art world transformed",econ:"Paintings worth $100M+",cultural:"Tortured artist archetype",reach:"Global art",timeline:"Expressionism develops differently"}},
  {id:"monet",name:"Claude Monet",born:1840,died:1926,cat:"arts",field:"Visual Art",
    quote:"Color is my day-long obsession, joy, and torment.",
    contributions:["Founded Impressionism","Water Lilies series","Impression, Sunrise","Light and color revolution"],
    r:0.35,reasoning:"Impressionism had multiple founders — Renoir, Pissarro, Degas. Monet was first among equals. His specific obsession with light and color was influential but the movement was collective. His Water Lilies were uniquely his.",
    counterfactual:"Without Monet, Impressionism still emerges — Renoir, Pissarro, Degas, Sisley were all moving in similar directions. The movement was a collective response to photography, to new paints, to painting outdoors. But 'Impression, Sunrise' named the movement, and Monet's later Water Lilies pushed toward abstraction. The specific trajectory toward abstract art might be different. Impressionism might be called something else.",
    ripples:[
      {category:"Impressionism's Name",detail:"Without 'Impression, Sunrise,' the movement might be called something else. Different art history terminology."},
      {category:"Water Lilies",detail:"The late masterpieces don't exist. The bridge to abstract art is different."},
      {category:"Light as Subject",detail:"Other Impressionists painted light, but Monet's obsession was extreme. The emphasis might be different."},
      {category:"Art Market",detail:"Impressionism's popularity is partly Monet's. Different artists might dominate the popular imagination."}
    ],
    timeline:[
      {year:1874,happened:"'Impression, Sunrise' names the movement",alternate:"Impressionism called something else; different founding moment"},
      {year:1883,happened:"Monet settles at Giverny",alternate:"No water garden; no Water Lilies series"},
      {year:1926,happened:"Monet dies; Orangerie murals completed",alternate:"No monumental late work; Impressionism ends differently"},
      {year:2024,happened:"Monet most popular Impressionist",alternate:"Different artist dominates Impressionist public appeal"}
    ],
    impact:{lives:"Art appreciation globally",econ:"Impressionist market",cultural:"Light as subject",reach:"Global art",timeline:"Impressionism emerges similarly"}},
  {id:"coltrane",name:"John Coltrane",born:1926,died:1967,cat:"arts",field:"Music - Jazz",
    quote:"My music is the spiritual expression of what I am.",
    contributions:["A Love Supreme","Modal jazz development","Spiritual jazz pioneer","Sheets of sound technique"],
    r:0.25,reasoning:"Coltrane's spiritual jazz created a new direction. His 'sheets of sound' technique was imitated but never equaled. A Love Supreme became a sacred text. Without him, jazz develops differently in the 1960s.",
    counterfactual:"Without Coltrane, jazz still evolves in the 1960s — the forces pushing toward free jazz and fusion were broad. But Coltrane's specific contribution — the spiritual intensity, 'A Love Supreme' as sacred text, the 'sheets of sound' technique — was uniquely his. The bridge between bebop and free jazz looks different. Spiritual jazz might not exist as a category. The saxophone has a different central figure.",
    ripples:[
      {category:"Spiritual Jazz",detail:"Without 'A Love Supreme,' the category of spiritual jazz might not exist. Jazz's religious dimension less explicit."},
      {category:"Free Jazz Bridge",detail:"Coltrane's late work bridged accessible and avant-garde. Without him, the split might be sharper."},
      {category:"Saxophone Playing",detail:"Coltrane's technical innovations influenced every saxophonist after. Different techniques dominate."},
      {category:"Jazz Canon",detail:"'A Love Supreme' is one of jazz's sacred texts. Without it, different albums define the tradition."}
    ],
    timeline:[
      {year:1959,happened:"Giant Steps revolutionizes harmony",alternate:"Jazz harmony evolves without these changes"},
      {year:1964,happened:"A Love Supreme recorded",alternate:"Spiritual jazz lacks its defining statement"},
      {year:1967,happened:"Coltrane dies; legacy begins",alternate:"Jazz evolution from different sources; different canon"},
      {year:2024,happened:"Coltrane still most influential saxophonist",alternate:"Different saxophonist defines the instrument's potential"}
    ],
    impact:{lives:"Jazz musicians worldwide",econ:"Jazz industry",cultural:"Spiritual jazz genre",reach:"Global jazz",timeline:"Jazz 1960s evolution different"}},
  {id:"marley",name:"Bob Marley",born:1945,died:1981,cat:"arts",field:"Music - Reggae",
    quote:"One good thing about music, when it hits you, you feel no pain.",
    contributions:["Reggae globally popularized","Rastafari ambassador","Political music","'One Love' universal anthem"],
    r:0.25,reasoning:"Other reggae artists existed, but Marley's combination of musical genius, spiritual depth, and political consciousness made him the global ambassador. Without him, reggae might remain a local Jamaican genre.",
    counterfactual:"Without Marley, reggae still exists — it was a Jamaican musical movement with many artists. But Marley's combination of musical genius, spiritual depth, and political consciousness made him the global ambassador. Without him, reggae might remain primarily a Caribbean genre. Rastafari doesn't get its global spokesman. 'One Love' doesn't become a universal anthem. Jamaica's global cultural influence is much smaller.",
    ripples:[
      {category:"Reggae's Global Reach",detail:"Without Marley as ambassador, reggae remains more regional. Different global music landscape."},
      {category:"Rastafari",detail:"Without Marley's evangelism, Rastafari remains obscure outside Jamaica. Different religious landscape."},
      {category:"Third World Voice",detail:"Marley gave voice to postcolonial struggles. Without him, different artists (or none) fill this role."},
      {category:"Jamaica's Influence",detail:"Jamaica's outsized cultural influence comes largely through Marley. Without him, different national image."}
    ],
    timeline:[
      {year:1973,happened:"'Catch a Fire' brings reggae to world",alternate:"Reggae remains regional; different internationalization"},
      {year:1977,happened:"'Exodus' named album of century",alternate:"Different reggae albums (or none) achieve this status"},
      {year:1978,happened:"One Love Peace Concert unites Jamaican factions",alternate:"Different political history in Jamaica"},
      {year:1981,happened:"Marley dies; becomes legend",alternate:"Reggae has different or no global icon"}
    ],
    impact:{lives:"Global reggae culture",econ:"Jamaican music industry",cultural:"Rastafari worldwide",reach:"Global music",timeline:"Reggae remains more regional"}},
  {id:"hendrix",name:"Jimi Hendrix",born:1942,died:1970,cat:"arts",field:"Music - Rock",
    quote:"When the power of love overcomes the love of power, the world will know peace.",
    contributions:["Electric guitar reinvented","Psychedelic rock pioneer","Monterey and Woodstock performances","Feedback as art"],
    r:0.20,reasoning:"Other guitarists were good. Hendrix was transcendent. His use of feedback, distortion, and the wah-wah pedal created sounds no one had imagined. His Woodstock 'Star-Spangled Banner' became the defining statement of a generation.",
    counterfactual:"Without Hendrix, electric guitar develops differently. Other great guitarists existed — Clapton, Beck, Page — but Hendrix's specific innovations in feedback, distortion, and effects were uniquely his. The wah-wah pedal doesn't get its definitive user. The Woodstock 'Star-Spangled Banner' doesn't exist. The range of what an electric guitar could do would be smaller.",
    ripples:[
      {category:"Guitar Technique",detail:"Feedback as art, the use of the whammy bar, effects pedals — these innovations don't happen the same way."},
      {category:"Woodstock",detail:"The festival's defining moment — the 'Star-Spangled Banner' — doesn't exist. Different cultural memory."},
      {category:"Rock Guitar",detail:"The instrument's vocabulary is smaller. Different techniques might dominate."},
      {category:"Crossover",detail:"Hendrix bridged Black and white music. Without him, rock's racial integration might look different."}
    ],
    timeline:[
      {year:1967,happened:"Hendrix burns guitar at Monterey",alternate:"Rock showmanship develops without this defining moment"},
      {year:1967,happened:"'Are You Experienced' revolutionizes guitar",alternate:"Psychedelic rock develops from different sources"},
      {year:1969,happened:"Woodstock 'Star-Spangled Banner'",alternate:"Festival lacks its defining statement; different memory"},
      {year:1970,happened:"Hendrix dies at 27",alternate:"Rock guitar develops from different figures"}
    ],
    impact:{lives:"Rock music globally",econ:"Music industry",cultural:"Guitar hero archetype",reach:"Global rock",timeline:"Electric guitar's range smaller"}},
  {id:"bowie",name:"David Bowie",born:1947,died:2016,cat:"arts",field:"Music & Art",
    quote:"I don't know where I'm going from here, but I promise it won't be boring.",
    contributions:["Ziggy Stardust","Constant reinvention","Glam rock pioneer","Art-pop fusion"],
    r:0.30,reasoning:"Bowie's influence was in constant reinvention more than any single sound. He showed artists could evolve. Others were innovative; few changed personas so radically and successfully across five decades.",
    counterfactual:"Without Bowie, glam rock still emerges — the cultural moment was ready. But Bowie's specific contribution was proving that constant reinvention could be a career strategy. Ziggy Stardust, the Thin White Duke, Berlin-era electronica, 'Let's Dance' pop — each era was a new persona. Without him, pop music might be more about consistency. Gender fluidity in mainstream music comes later or differently.",
    ripples:[
      {category:"Artist Reinvention",detail:"Without Bowie's model, artists might stick to one sound. Madonna's constant reinvention follows Bowie's template."},
      {category:"Gender Fluidity",detail:"Bowie's androgyny brought gender fluidity to mainstream pop. Without him, this comes later or differently."},
      {category:"Art Pop",detail:"The fusion of avant-garde art concepts with pop music has a different evolution."},
      {category:"Berlin Trilogy",detail:"The influential Berlin albums don't exist. Electronic music's development is different."}
    ],
    timeline:[
      {year:1972,happened:"Ziggy Stardust creates character rock",alternate:"Concept albums exist but persona-based performance develops differently"},
      {year:1977,happened:"Berlin trilogy pioneers electronic rock",alternate:"Electronic rock develops from different sources"},
      {year:1983,happened:"'Let's Dance' proves reinvention works",alternate:"Artists less willing to change; consistency preferred"},
      {year:2016,happened:"Bowie dies; 'Blackstar' as farewell",alternate:"Pop music has different model for career arcs"}
    ],
    impact:{lives:"Music and fashion fused",econ:"Reinvention as brand strategy",cultural:"Gender fluidity in mainstream",reach:"Global pop culture",timeline:"Pop music less theatrical"}},
  {id:"joyce",name:"James Joyce",born:1882,died:1941,cat:"arts",field:"Literature",
    quote:"Mistakes are the portals of discovery.",
    contributions:["Ulysses","Stream of consciousness technique","Finnegans Wake","Modernist literature"],
    r:0.20,reasoning:"Ulysses changed what the novel could do. No one else was writing with that density, that experimentation, that ambition. Woolf and Proust were also modernist; Joyce was more radical and influential on subsequent literature.",
    counterfactual:"Without Joyce, modernist literature still exists — Woolf, Proust, Kafka were all experimenting. But the specific radical ambition of Ulysses — a single day in Dublin containing all of human experience, every chapter a different style — was uniquely Joyce's. Finnegans Wake's dream logic goes further than anyone else dared. Without him, the novel's experimental range is narrower. Literature remains more conventional.",
    ripples:[
      {category:"Stream of Consciousness",detail:"Woolf uses it too, but Joyce's extremity sets the benchmark. The technique develops less radically."},
      {category:"Literary Ambition",detail:"Ulysses showed the novel could contain everything. Without it, literary ambition aims lower."},
      {category:"Academic Industry",detail:"Ulysses and Finnegans Wake created an academic industry. Different texts become the focus of literary study."},
      {category:"Bloomsday",detail:"June 16 isn't celebrated in Dublin. Literary tourism looks different."}
    ],
    timeline:[
      {year:1914,happened:"Dubliners establishes Joyce's voice",alternate:"Modernist short fiction develops without this benchmark"},
      {year:1922,happened:"Ulysses published; literature transformed",alternate:"Modernist novel develops but with narrower range"},
      {year:1939,happened:"Finnegans Wake pushes language to limit",alternate:"No one attempts this; dream logic unexplored"},
      {year:2024,happened:"Bloomsday celebrated globally",alternate:"Different literary anniversaries; Joyce not central"}
    ],
    impact:{lives:"Modernist literature",econ:"Academic industry",cultural:"Novel as experiment",reach:"Global literature",timeline:"Modernist novel develops differently"}},
  {id:"woolf",name:"Virginia Woolf",born:1882,died:1941,cat:"arts",field:"Literature",
    quote:"A woman must have money and a room of her own if she is to write fiction.",
    contributions:["Mrs Dalloway, To the Lighthouse","Stream of consciousness","A Room of One's Own","Bloomsbury Group"],
    r:0.25,reasoning:"Woolf's specific voice — interior, psychological, feminist — was unique. Others experimented; her combination of formal innovation and feminist thought was hers alone. She and Joyce transformed the novel independently.",
    counterfactual:"Without Woolf, modernist literature still exists — Joyce, Proust, Kafka were experimenting. But Woolf's specific combination of formal innovation and feminist thought was uniquely hers. 'A Room of One's Own' becomes a founding feminist text. Mrs Dalloway and To the Lighthouse explore female consciousness as no one else did. Without her, modernist literature has fewer female voices, and feminist literary criticism has a different foundation.",
    ripples:[
      {category:"Feminist Literature",detail:"'A Room of One's Own' is a founding text. Without it, feminist literary criticism has different origins."},
      {category:"Female Consciousness",detail:"The exploration of women's inner lives in fiction is less developed. Different representations of female experience."},
      {category:"Bloomsbury Group",detail:"The group still exists but without its most famous member. Different cultural influence."},
      {category:"Modernist Novel",detail:"The novel's exploration of interiority loses one of its key voices. Less psychological depth perhaps."}
    ],
    timeline:[
      {year:1925,happened:"Mrs Dalloway published",alternate:"Modernist exploration of female consciousness less developed"},
      {year:1927,happened:"To the Lighthouse",alternate:"Mother-daughter relationship less explored in literature"},
      {year:1929,happened:"A Room of One's Own",alternate:"Feminist literary criticism has different founding text"},
      {year:1941,happened:"Woolf dies; legacy grows",alternate:"Modernism has different balance of voices; less feminist"}
    ],
    impact:{lives:"Feminist literature",econ:"Women's studies",cultural:"Female interior life in fiction",reach:"Global literature",timeline:"Modernist novel less feminist"}},
  {id:"orwell",name:"George Orwell",born:1903,died:1950,cat:"arts",field:"Literature",
    quote:"In a time of deceit, telling the truth is a revolutionary act.",
    contributions:["1984","Animal Farm","Political writing clarity","'Orwellian' entered language"],
    r:0.30,reasoning:"Dystopian fiction existed before Orwell. But 1984 specifically shaped how we talk about surveillance, propaganda, and totalitarianism. The vocabulary — Big Brother, doublethink, thoughtcrime — is now universal.",
    counterfactual:"Without Orwell, dystopian fiction still exists — Huxley's Brave New World, Zamyatin's We preceded 1984. But Orwell's specific vocabulary became how we discuss totalitarianism. 'Big Brother,' 'doublethink,' 'thoughtcrime,' 'Orwellian' — these terms wouldn't exist. We'd lack a common language for surveillance and propaganda. Animal Farm's critique of Soviet communism might come from someone else, but the specificity of 'some animals are more equal than others' might be lost.",
    ripples:[
      {category:"Political Vocabulary",detail:"Without 'Orwellian,' 'Big Brother,' 'doublethink,' we discuss surveillance and propaganda differently."},
      {category:"Soviet Critique",detail:"Animal Farm's specific allegory doesn't exist. Criticism of Stalinism takes different form."},
      {category:"Dystopian Fiction",detail:"Huxley's Brave New World might dominate. Different vision of dystopia — pleasure-based rather than fear-based."},
      {category:"Prose Style",detail:"'Politics and the English Language' doesn't exist. Different advice for clear writing."}
    ],
    timeline:[
      {year:1945,happened:"Animal Farm published",alternate:"Soviet allegory made by someone else or not at all"},
      {year:1949,happened:"1984 published",alternate:"Dystopian fiction lacks this specific vocabulary and vision"},
      {year:1984,happened:"Year arrives; Orwell proven prescient",alternate:"Different metaphors for discussing surveillance"},
      {year:2024,happened:"'Orwellian' in every discussion of surveillance",alternate:"Different vocabulary for totalitarianism"}
    ],
    impact:{lives:"Political consciousness",econ:"Surveillance discourse",cultural:"Orwellian vocabulary",reach:"Global",timeline:"Totalitarianism critiqued differently"}},
  {id:"spielberg",name:"Steven Spielberg",born:1946,died:null,cat:"arts",field:"Film",
    quote:"I dream for a living.",
    contributions:["Jaws, ET, Schindler's List","Modern blockbuster inventor","Most commercially successful director","Academy Awards"],
    r:0.40,reasoning:"Spielberg invented the modern blockbuster with Jaws. His influence on Hollywood is enormous. But Lucas was doing similar things; Coppola and Scorsese pushed film art. His specific commercial-artistic balance was influential but not unique.",
    counterfactual:"Without Spielberg, blockbuster cinema still emerges — Lucas was doing similar things, and the economic incentives were clear. But Spielberg's specific range is harder to replace: Jaws and ET for spectacle, Schindler's List and Saving Private Ryan for prestige. The idea that you could be both the most commercial and most respected director — that balance was his achievement. Hollywood's grammar for action, wonder, and sentiment would be different.",
    ripples:[
      {category:"Blockbuster Cinema",detail:"Jaws invented summer blockbusters. Without Spielberg, the phenomenon emerges differently — maybe Lucas leads it entirely."},
      {category:"Holocaust Memory",detail:"Schindler's List shaped how a generation understood the Holocaust. Different films, different public memory."},
      {category:"Sentimental Register",detail:"Spielberg's emotional style — wonder, childhood, family — influenced countless directors. Different aesthetic dominates."},
      {category:"Commercial-Art Balance",detail:"The idea that blockbuster directors could also win Oscars — that bridge was Spielberg's. Categories might stay more separate."}
    ],
    timeline:[
      {year:1975,happened:"Jaws creates summer blockbuster phenomenon",alternate:"Blockbuster cinema develops differently; Lucas leads the way"},
      {year:1982,happened:"ET becomes highest-grossing film",alternate:"Different touchstone for family entertainment"},
      {year:1993,happened:"Schindler's List wins Best Picture",alternate:"Holocaust cinema looks different; different films dominate"},
      {year:2024,happened:"Spielberg still most influential director of era",alternate:"Lucas or Coppola might hold that status instead"}
    ],
    impact:{lives:"Film industry transformed",econ:"Blockbuster economics",cultural:"Popcorn cinema",reach:"Global film",timeline:"Blockbuster era emerges similarly"}},
  {id:"beyonce",name:"Beyoncé",born:1981,died:null,cat:"arts",field:"Music & Performance",
    quote:"I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.",
    contributions:["Visual albums (Lemonade)","Black female empowerment","Performance innovation","Cultural icon status"],
    r:0.40,reasoning:"Pop music would have had other stars. But Beyoncé's specific combination — vocal talent, visual artistry, political content, perfectionism — is unique. Lemonade showed what pop albums could be. Her influence on Black female artists is profound.",
    counterfactual:"Without Beyoncé, pop music still has stars — Rihanna, Adele, and others fill airwaves. But Beyoncé's specific combination is unique: the vocal power, the visual perfectionism, the political content, the album as complete artistic statement. Lemonade as a meditation on Black womanhood, infidelity, and Southern heritage — that ambition for pop doesn't exist. The idea that a pop star could be an artist on that level, while maintaining maximum commercial success, wouldn't be proven.",
    ripples:[
      {category:"Visual Albums",detail:"Lemonade proved pop albums could be cinematic art. Without it, visual albums are less ambitious."},
      {category:"Black Female Artists",detail:"Beyoncé's influence on subsequent Black female artists is profound. Different mentorship, different inspiration."},
      {category:"Performance Standards",detail:"Her live shows set standards for precision and spectacle. Different benchmarks for pop performance."},
      {category:"Pop Politics",detail:"Formation and the Super Bowl performance politicized pop. Without Beyoncé, pop stays less overtly political."}
    ],
    timeline:[
      {year:2003,happened:"Crazy in Love; solo career launches",alternate:"Destiny's Child continues or dissolves differently"},
      {year:2013,happened:"Surprise album drop changes release strategy",alternate:"Traditional album releases remain standard longer"},
      {year:2016,happened:"Lemonade redefines visual album",alternate:"Pop albums remain less ambitious, less personal"},
      {year:2024,happened:"Beyoncé most influential pop artist of generation",alternate:"Different artist defines this era of pop"}
    ],
    impact:{lives:"Pop music evolution",econ:"Entertainment industry",cultural:"Black excellence icon",reach:"Global",timeline:"Pop culture less visually ambitious"}},

  // PHILOSOPHY & RELIGION
  {id:"confucius",name:"Confucius",born:-551,died:-479,cat:"philosophy",field:"Philosophy & Ethics",
    quote:"It does not matter how slowly you go as long as you do not stop.",
    contributions:["Confucian ethics system","The Analects","Meritocratic civil service","East Asian governance philosophy"],
    r:0.20,reasoning:"Other Chinese philosophers offered competing visions. But Confucius's specific synthesis of virtue ethics, filial piety, and meritocratic governance became the operating system of East Asian civilization for 2,500 years.",
    counterfactual:"Without Confucius, Chinese philosophy still develops — Mozi, the Legalists, Daoists all compete. But the specific synthesis of virtue ethics, filial piety, and meritocratic governance that Confucius articulated doesn't become the dominant framework. The civil service examination system might never exist. East Asian civilization develops with a different operating system — perhaps more Legalist, more Daoist, or something entirely different.",
    ripples:[
      {category:"East Asian Governance",detail:"The civil service examination — selecting leaders by merit not birth — might not develop. Asian societies are structured differently."},
      {category:"Family Structure",detail:"The specific emphasis on filial piety that structures East Asian families might be different."},
      {category:"Education Philosophy",detail:"The emphasis on learning and self-cultivation that defines Confucian societies might not exist."},
      {category:"Regional Philosophy",detail:"Korea, Japan, Vietnam all absorbed Confucianism. Without it, these societies develop from different foundations."}
    ],
    timeline:[
      {year:-500,happened:"Confucius teaches; Analects compiled",alternate:"Chinese philosophy fragments among competing schools; no dominant synthesis"},
      {year:-221,happened:"Qin Dynasty burns Confucian texts",alternate:"Different texts targeted; different philosophical tradition threatened"},
      {year:-136,happened:"Han Dynasty makes Confucianism official",alternate:"Legalism or another school becomes state philosophy; China very different"},
      {year:1905,happened:"Civil service exams abolished after 1,300 years",alternate:"No exam tradition to abolish; Asian meritocracy develops differently"}
    ],
    impact:{lives:"Shaped 1.5B+ East Asians",econ:"Bureaucratic governance model",cultural:"Family/hierarchy values",reach:"China, Korea, Japan, Vietnam",timeline:"East Asian civilization fundamentally different"}},
  {id:"buddha",name:"Siddhartha Gautama (Buddha)",born:-563,died:-483,cat:"philosophy",field:"Spiritual Philosophy",
    quote:"Peace comes from within. Do not seek it without.",
    contributions:["Founded Buddhism","Four Noble Truths","Eightfold Path","Monastic tradition"],
    r:0.15,reasoning:"Indian spirituality was rich with seekers, but the Buddha's specific framework was his creation. His emphasis on individual liberation and monastic discipline shaped Asian civilization. No one else articulated this particular path.",
    counterfactual:"Without the Buddha, Indian spirituality continues to produce teachers and seekers. But the specific framework — Four Noble Truths, Eightfold Path, monastic sangha — doesn't exist. No Buddhism means no spread to China, Japan, Tibet, Southeast Asia. Hinduism dominates India without this major competitor. Asian civilization develops without meditation techniques, without 'nirvana,' without Buddhist art and philosophy.",
    ripples:[
      {category:"Asian Religion",detail:"Hinduism faces no major Indian competitor. Asian spirituality develops without Buddhist meditation techniques."},
      {category:"Chinese Thought",detail:"Chan/Zen Buddhism doesn't exist. Chinese philosophy is only Confucianism and Daoism."},
      {category:"Art and Architecture",detail:"Buddhist temples, statues, and art throughout Asia don't exist. Different aesthetic traditions develop."},
      {category:"Mindfulness Movement",detail:"The modern mindfulness movement has no Buddhist roots. Meditation might never become global."}
    ],
    timeline:[
      {year:-528,happened:"Buddha achieves enlightenment; begins teaching",alternate:"Indian spirituality continues without this specific framework"},
      {year:-250,happened:"Ashoka spreads Buddhism throughout Asia",alternate:"Different religion or nothing spreads; Asian spiritual geography very different"},
      {year:100,happened:"Buddhism reaches China",alternate:"Chinese thought develops without Buddhist influence; very different trajectory"},
      {year:2020,happened:"500M Buddhists worldwide; mindfulness mainstream",alternate:"Different spiritual traditions fill this space, or none"}
    ],
    impact:{lives:"500M Buddhists today",econ:"Buddhist institutions globally",cultural:"Meditation, mindfulness global spread",reach:"Asia, increasingly global",timeline:"Buddhism doesn't exist"}},
  {id:"socrates",name:"Socrates",born:-470,died:-399,cat:"philosophy",field:"Philosophy",
    quote:"The only true wisdom is in knowing you know nothing.",
    contributions:["Socratic method of questioning","Western philosophy foundation","'Know thyself'","Examined life ideal"],
    r:0.20,reasoning:"Without Socrates, there's no Plato. Without Plato, there's no Aristotle. The entire Western philosophical tradition flows from those Athenian conversations.",
    counterfactual:"Without Socrates, there's no Plato as we know him — Plato's dialogues are about Socrates. Without Plato, Aristotle develops differently or not at all. The entire Western philosophical tradition flows from those Athenian conversations. The Socratic method of questioning might never develop. The examined life as ideal might not exist. Philosophy might remain cosmological (like the pre-Socratics) rather than ethical and epistemological.",
    ripples:[
      {category:"Socratic Method",detail:"The technique of learning through questioning doesn't develop. Education is more about assertion than inquiry."},
      {category:"Plato's Work",detail:"Plato either doesn't exist or writes very differently. No dialogues, no Socrates as character."},
      {category:"Western Philosophy",detail:"The entire tradition from Aristotle through modern philosophy develops from different roots or not at all."},
      {category:"Trial and Death",detail:"The model of the philosopher who dies for principles doesn't exist. No 'gadfly' of Athens."}
    ],
    timeline:[
      {year:-450,happened:"Socrates begins questioning in Athens",alternate:"Athenian philosophy remains pre-Socratic; cosmological focus continues"},
      {year:-399,happened:"Socrates executed; Plato devastated",alternate:"No trial, no Apology, no martyrdom narrative"},
      {year:-387,happened:"Plato founds Academy; preserves Socrates",alternate:"No Academy, no dialogues, no preserved Socratic thought"},
      {year:-335,happened:"Aristotle founds Lyceum",alternate:"Without Plato's Academy, Aristotle develops differently or not at all"}
    ],
    impact:{lives:"Shaped Western thought",econ:"Educational methods",cultural:"Critical thinking tradition",reach:"Western civilization",timeline:"Western philosophy develops differently"}},
  {id:"plato",name:"Plato",born:-428,died:-348,cat:"philosophy",field:"Philosophy",
    quote:"Be kind, for everyone you meet is fighting a hard battle.",
    contributions:["Theory of Forms","The Republic","Academy founding","Dialogues as philosophy"],
    r:0.20,reasoning:"Plato preserved and transformed Socrates's teachings, then added his own vast system. The Academy trained Aristotle and lasted 900 years. Without Plato, the transmission from Socrates breaks.",
    counterfactual:"Without Plato, Socrates's teachings might be lost — we know Socrates primarily through Plato. The Academy, which lasted 900 years and trained Aristotle, doesn't exist. The Theory of Forms, the allegory of the cave, the Republic's political philosophy — gone. Western philosophy might develop from the pre-Socratics or from entirely different roots.",
    ripples:[
      {category:"Socrates Preservation",detail:"Without Plato's dialogues, we lose most knowledge of Socrates. The tradition breaks."},
      {category:"Theory of Forms",detail:"The idea of abstract perfect forms that physical things imitate doesn't shape Western thought."},
      {category:"Political Philosophy",detail:"The Republic doesn't exist. Western political thought develops from different starting points."},
      {category:"Aristotle's Development",detail:"Without Plato's Academy, Aristotle either isn't trained or develops very differently."}
    ],
    timeline:[
      {year:-387,happened:"Plato founds Academy",alternate:"No institutional philosophy in Athens; tradition doesn't continue"},
      {year:-375,happened:"Republic written",alternate:"No ideal state theory; political philosophy develops differently"},
      {year:-367,happened:"Aristotle joins Academy",alternate:"No Academy to join; Aristotle's trajectory entirely different"},
      {year:529,happened:"Justinian closes Academy after 900 years",alternate:"No Academy; Western philosophical tradition entirely different"}
    ],
    impact:{lives:"Western philosophy foundation",econ:"Academy as educational model",cultural:"Idealism in Western thought",reach:"Western civilization",timeline:"Western philosophy very different"}},
  {id:"aristotle",name:"Aristotle",born:-384,died:-322,cat:"philosophy",field:"Philosophy & Science",
    quote:"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    contributions:["Logic systemization","Natural philosophy","Ethics and politics","Tutored Alexander the Great"],
    r:0.25,reasoning:"Aristotle systematized knowledge across fields. His methods dominated for two millennia. But he built on Plato's academy, and others were working on similar problems.",
    counterfactual:"Without Aristotle, knowledge systematization happens differently — the Stoics, Epicureans, and later Islamic scholars were capable. But his specific frameworks — syllogistic logic, the four causes, virtue ethics — don't dominate for two millennia. Islamic philosophy develops from different Greek sources. Medieval universities have different curricula. The scientific method might emerge from different foundations.",
    ripples:[
      {category:"Logic",detail:"Syllogistic logic doesn't become the standard for 2,000 years. Logical thinking develops along different lines."},
      {category:"Medieval Universities",detail:"Without Aristotle as the authority, medieval education looks very different. Different texts are studied."},
      {category:"Islamic Philosophy",detail:"Islamic scholars translated and built on Aristotle. Without him, Al-Farabi, Averroes develop from different sources."},
      {category:"Scientific Method",detail:"Aristotle's systematic observation influenced later science. The method might develop from different roots."}
    ],
    timeline:[
      {year:-350,happened:"Aristotle writes across all fields",alternate:"Greek philosophy fragments; no systematic attempt at all knowledge"},
      {year:-335,happened:"Aristotle founds Lyceum; teaches Alexander",alternate:"Alexander tutored by someone else; different philosophical education"},
      {year:1200,happened:"Aristotle dominates medieval universities",alternate:"Different Greek philosopher becomes 'the philosopher'; different curricula"},
      {year:1600,happened:"Scientific revolution challenges Aristotle",alternate:"Different framework to challenge; different revolution"}
    ],
    impact:{lives:"Scientific method foundation",econ:"University curriculum",cultural:"Systematic knowledge ideal",reach:"Western and Islamic civilization",timeline:"Knowledge systematization delayed"}},
  {id:"kant",name:"Immanuel Kant",born:1724,died:1804,cat:"philosophy",field:"Philosophy",
    quote:"Two things fill the mind with ever new and increasing admiration and awe: the starry heavens above me and the moral law within me.",
    contributions:["Critique of Pure Reason","Categorical imperative","Transcendental idealism","Modern ethics foundation"],
    r:0.20,reasoning:"Kant synthesized rationalism and empiricism in ways that shaped all subsequent philosophy. His ethical framework remains foundational. Others were grappling with Hume's skepticism, but Kant's solutions were uniquely his.",
    counterfactual:"Without Kant, someone eventually responds to Hume's skepticism — the problem was pressing. But the specific synthesis of rationalism and empiricism, the categorical imperative, transcendental idealism — these might not emerge. German idealism (Hegel, Fichte, Schelling) loses its foundation. Modern ethics lacks its dominant framework. The distinction between phenomena and noumena might not structure philosophy.",
    ripples:[
      {category:"Response to Hume",detail:"Hume's skepticism challenges philosophy. Without Kant's synthesis, different responses dominate — perhaps more empiricist."},
      {category:"German Idealism",detail:"Hegel, Fichte, Schelling all respond to Kant. Without him, German philosophy develops entirely differently."},
      {category:"Modern Ethics",detail:"The categorical imperative doesn't become the standard deontological framework. Ethics develops from different foundations."},
      {category:"Phenomena/Noumena",detail:"The distinction between appearance and thing-in-itself might not structure philosophical thinking."}
    ],
    timeline:[
      {year:1781,happened:"Critique of Pure Reason published",alternate:"Hume's skepticism answered differently or not at all; philosophy stalls"},
      {year:1785,happened:"Groundwork for Metaphysics of Morals",alternate:"Categorical imperative doesn't exist; ethics develops differently"},
      {year:1800,happened:"German Idealism flourishes",alternate:"Without Kant's foundation, German philosophy develops differently"},
      {year:2000,happened:"Kant remains central to philosophy",alternate:"Different figure defines modern philosophy's problems"}
    ],
    impact:{lives:"Modern philosophy",econ:"Legal philosophy",cultural:"Enlightenment culmination",reach:"Western philosophy",timeline:"Modern philosophy develops differently"}},
  {id:"nietzsche",name:"Friedrich Nietzsche",born:1844,died:1900,cat:"philosophy",field:"Philosophy",
    quote:"He who has a why to live can bear almost any how.",
    contributions:["'God is dead'","Will to power","Eternal recurrence","Influenced existentialism"],
    r:0.20,reasoning:"Nietzsche's critique of morality, psychological insights, and literary style were unique. His influence on existentialism, postmodernism, and psychology was enormous.",
    counterfactual:"Without Nietzsche, critiques of Christian morality still emerge — the secularization was happening. But the specific concepts — the will to power, eternal recurrence, the Übermensch — don't enter philosophical vocabulary. Existentialism lacks a key precursor. Foucault, Derrida, and postmodernism develop from different sources. Even his (mis)appropriation by the Nazis doesn't happen.",
    ripples:[
      {category:"Existentialism",detail:"Without Nietzsche, existentialism develops from Kierkegaard and Dostoevsky alone. Different emphasis."},
      {category:"Postmodernism",detail:"Foucault and Derrida explicitly built on Nietzsche. Postmodern thought develops from different roots."},
      {category:"Psychology",detail:"Freud and Jung both drew on Nietzsche. Depth psychology develops differently."},
      {category:"Nazi Misappropriation",detail:"The Nazis couldn't misuse what doesn't exist. Different philosophy is distorted instead."}
    ],
    timeline:[
      {year:1883,happened:"Thus Spoke Zarathustra published",alternate:"No Übermensch concept; no 'God is dead' in this form"},
      {year:1889,happened:"Nietzsche collapses into madness",alternate:"No Nietzsche to collapse; different philosophical landscape"},
      {year:1930,happened:"Nazis misappropriate Nietzsche",alternate:"Different thinker misused; different philosophical victim"},
      {year:1960,happened:"Nietzsche revival in France",alternate:"Postmodernism develops from different sources; different concepts"}
    ],
    impact:{lives:"Modern philosophy and psychology",econ:"Cultural criticism",cultural:"Existentialism foundation",reach:"Western thought",timeline:"Existentialism develops differently"}},
  {id:"marx",name:"Karl Marx",born:1818,died:1883,cat:"philosophy",field:"Political Philosophy",
    quote:"The philosophers have only interpreted the world; the point is to change it.",
    contributions:["Das Kapital","Communist Manifesto","Historical materialism","Class struggle theory"],
    r:0.40,reasoning:"Socialist ideas emerged from multiple sources. Marx's specific synthesis was influential, but revolutionary movements would have found other theorists.",
    counterfactual:"Without Marx, socialist and labor movements still emerge — industrial capitalism was creating obvious conflicts. Proudhon, Bakunin, or other socialists might dominate instead. But the specific framework — historical materialism, surplus value, class struggle as history's engine — doesn't exist. Communist states might never form, or form from different ideology. The entire 20th century looks different.",
    ripples:[
      {category:"Communist States",detail:"Without Marxism, revolutionary movements find different ideologies. The USSR, China might not exist in recognizable form."},
      {category:"Historical Materialism",detail:"The idea that economic conditions determine history doesn't become dominant. Different frameworks analyze social change."},
      {category:"Labor Movements",detail:"Workers still organize, but under different banners — perhaps anarchist, perhaps reformist social democratic."},
      {category:"Academic Influence",detail:"Without Marx, sociology, history, and economics develop from different theoretical foundations."}
    ],
    timeline:[
      {year:1848,happened:"Communist Manifesto published",alternate:"Different socialist text becomes foundational; different language of class"},
      {year:1867,happened:"Das Kapital Volume 1",alternate:"No systematic critique of capitalism in this form"},
      {year:1917,happened:"Russian Revolution explicitly Marxist",alternate:"Revolution happens under different ideology or not at all"},
      {year:1949,happened:"Chinese Revolution explicitly Marxist",alternate:"Chinese transformation takes different ideological form"}
    ],
    impact:{lives:"Communist states: billions affected",econ:"Socialist economics",cultural:"Capitalism critique",reach:"Global political thought",timeline:"Socialist movements take different form"}},
  {id:"luther",name:"Martin Luther",born:1483,died:1546,cat:"philosophy",field:"Theology & Reform",
    quote:"Here I stand. I can do no other.",
    contributions:["95 Theses","Protestant Reformation","German Bible translation","Priesthood of all believers"],
    r:0.50,reasoning:"Church corruption was widely criticized. The printing press made dissent spreadable. Luther's specific theology mattered less than the moment. Without him, another reformer likely triggers similar break.",
    counterfactual:"Without Luther, another reformer triggers the break — Zwingli, Calvin, and others were independently critical of Rome. The printing press made dissent spreadable. Church corruption was real. But the specific trajectory changes: different doctrinal emphasis (perhaps less faith-alone, more Zwinglian), different timing, different geography of Protestant/Catholic divide. The German Bible that shaped German language might not exist.",
    ripples:[
      {category:"Reformation Timing",detail:"The break with Rome still happens but perhaps 20-30 years later, centered on Zurich or Geneva rather than Wittenberg."},
      {category:"German Language",detail:"Luther's Bible translation shaped modern German. Without it, German develops differently."},
      {category:"Doctrinal Emphasis",detail:"Sola fide (faith alone) might not be central. A Zwinglian or Calvinist reformation might emphasize different doctrines."},
      {category:"Religious Wars",detail:"The Thirty Years' War happens differently or not at all. European history restructured."}
    ],
    timeline:[
      {year:1517,happened:"95 Theses posted; Reformation begins",alternate:"Reformation delayed 20-30 years; different spark, different geography"},
      {year:1534,happened:"Luther's German Bible completed",alternate:"Different translation shapes German; Luther Bible idioms don't exist"},
      {year:1555,happened:"Peace of Augsburg; Protestant states recognized",alternate:"Different settlement; different map of Protestant/Catholic Europe"},
      {year:1618,happened:"Thirty Years' War begins",alternate:"Different religious conflict or none; European history very different"}
    ],
    impact:{lives:"Protestantism: 800M+ adherents",econ:"Protestant work ethic debates",cultural:"Religious pluralism",reach:"Europe, Americas, global",timeline:"Reformation delayed 20-50 years"}},
  {id:"aquinas",name:"Thomas Aquinas",born:1225,died:1274,cat:"philosophy",field:"Theology & Philosophy",
    quote:"To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.",
    contributions:["Summa Theologica","Aristotle-Christianity synthesis","Natural law theory","Scholastic method"],
    r:0.35,reasoning:"Aristotle's works were returning to Europe. Other scholastics tried to reconcile faith and reason. Aquinas's synthesis was most successful, but the project was collective.",
    counterfactual:"Without Aquinas, the Aristotle-Christianity synthesis still happens — other scholastics were working on it. But Aquinas's specific achievement was making it orthodox: his natural law theory, his proofs of God's existence, his integration of reason and revelation. The Church could have rejected Aristotle as pagan; Aquinas made him safe. Without this synthesis, Catholic thought might be more Augustinian, more mystical, less systematic.",
    ripples:[
      {category:"Catholic Philosophy",detail:"Thomism doesn't become the dominant Catholic philosophy. Different synthesis, more Augustinian perhaps."},
      {category:"Natural Law",detail:"Aquinas's natural law theory influenced Western legal philosophy. Different foundations for law."},
      {category:"Faith and Reason",detail:"The specific balance between faith and reason in Catholic thought is different."},
      {category:"University Tradition",detail:"Scholastic method shapes university education. Without Aquinas, different intellectual methods dominate."}
    ],
    timeline:[
      {year:1265,happened:"Summa Theologica begun",alternate:"No comprehensive Catholic synthesis; theology more fragmented"},
      {year:1274,happened:"Aquinas dies; work unfinished",alternate:"No Thomism; Catholic thought develops from different sources"},
      {year:1323,happened:"Aquinas canonized; Thomism becomes official",alternate:"Different philosopher becomes Catholic authority"},
      {year:1879,happened:"Pope declares Thomism Catholic philosophy",alternate:"Different philosophical tradition dominates Catholic thought"}
    ],
    impact:{lives:"Catholic intellectual tradition",econ:"University tradition",cultural:"Faith-reason integration",reach:"Catholic world",timeline:"Catholic philosophy develops differently"}},
  {id:"laozi",name:"Laozi",born:-601,died:-531,cat:"philosophy",field:"Philosophy",
    quote:"A journey of a thousand miles begins with a single step.",
    contributions:["Tao Te Ching","Founded Daoism","Wu wei (non-action) concept","Yin-yang philosophy"],
    r:0.30,reasoning:"Laozi may be semi-legendary. But the text's distinctive voice shaped Chinese religion, medicine, and aesthetics for millennia.",
    counterfactual:"Without Laozi — or whoever wrote the Tao Te Ching — Chinese civilization develops differently. Daoism might not exist as a coherent tradition. The concept of wu wei (non-action, effortless action) might not enter Chinese thought. The counterbalance to Confucian activism might be missing. Chinese medicine, art, and spirituality all absorbed Daoist ideas; without the foundational text, this integration doesn't happen.",
    ripples:[
      {category:"Daoism",detail:"Without the Tao Te Ching, Daoism might not cohere as a tradition. Chinese religion looks very different."},
      {category:"Chinese Medicine",detail:"Daoist concepts of balance, flow, and naturalness shaped traditional Chinese medicine. Different foundations."},
      {category:"Confucian Balance",detail:"Confucianism dominates without Daoist counterweight. Chinese thought is more activist, less contemplative."},
      {category:"Aesthetics",detail:"Daoist naturalism influenced Chinese art and poetry. Different aesthetic tradition."}
    ],
    timeline:[
      {year:-500,happened:"Tao Te Ching composed",alternate:"Chinese philosophy lacks this foundational text; Daoism doesn't cohere"},
      {year:-200,happened:"Daoism competes with Confucianism",alternate:"Confucianism dominates without organized alternative"},
      {year:200,happened:"Religious Daoism develops",alternate:"Chinese religion very different without Daoist foundation"},
      {year:2024,happened:"'The Tao' referenced globally",alternate:"Different or no Chinese philosophical export to West"}
    ],
    impact:{lives:"Chinese spiritual tradition",econ:"Daoist practices/medicine",cultural:"Balance, harmony philosophy",reach:"China, East Asia",timeline:"Chinese philosophy different"}},
  {id:"augustine",name:"Augustine of Hippo",born:354,died:430,cat:"philosophy",field:"Theology",
    quote:"The world is a book and those who do not travel read only one page.",
    contributions:["Confessions, City of God","Original sin doctrine","Just war theory","Shaped Western Christianity"],
    r:0.25,reasoning:"Augustine shaped Christianity's development at a crucial moment. His influence on both Catholic and Protestant traditions was unmatched.",
    counterfactual:"Without Augustine, Western Christianity develops very differently. The doctrines of original sin and predestination might not dominate. The Confessions invented spiritual autobiography as a genre. City of God provided Christianity's response to Rome's fall. The just war tradition might not exist. Both Catholic and Protestant traditions would lack their most influential theologian.",
    ripples:[
      {category:"Original Sin",detail:"The doctrine might not become central to Western Christianity. Different understanding of human nature."},
      {category:"Just War Theory",detail:"Christian ethics of warfare develops differently. Different moral framework for violence."},
      {category:"Autobiography",detail:"The Confessions invented spiritual autobiography. This genre might not exist."},
      {category:"Protestant Reformation",detail:"Luther and Calvin built on Augustine. Reformation theology has different foundations."}
    ],
    timeline:[
      {year:397,happened:"Confessions written",alternate:"Spiritual autobiography not invented; different literary tradition"},
      {year:426,happened:"City of God completed",alternate:"Christianity lacks response to Rome's fall; different political theology"},
      {year:1517,happened:"Luther cites Augustine for Reformation",alternate:"Reformation has different theological foundations"},
      {year:2024,happened:"Augustine still most cited Church Father",alternate:"Western Christianity shaped by different theologian"}
    ],
    impact:{lives:"Western Christianity",econ:"Church institutions",cultural:"Christian theology foundation",reach:"Western civilization",timeline:"Christianity develops differently"}},
  {id:"wittgenstein",name:"Ludwig Wittgenstein",born:1889,died:1951,cat:"philosophy",field:"Philosophy",
    quote:"The limits of my language mean the limits of my world.",
    contributions:["Tractatus Logico-Philosophicus","Philosophical Investigations","Language games","Two philosophical careers"],
    r:0.20,reasoning:"Wittgenstein uniquely had two revolutionary phases. Both transformed their fields. His specific personality and insights were irreplaceable.",
    counterfactual:"Without Wittgenstein, analytic philosophy still exists — Russell, Frege, the Vienna Circle were working. But Wittgenstein uniquely had two revolutionary phases: the Tractatus seemed to solve philosophy's problems through logic, then the Investigations undermined his own earlier work and introduced 'language games.' No one else would have made both moves. Philosophy develops along one path rather than both.",
    ripples:[
      {category:"Early Analytic Philosophy",detail:"The Tractatus shaped logical positivism. Without it, the Vienna Circle develops from different foundations."},
      {category:"Ordinary Language Philosophy",detail:"The Investigations founded this school. Without it, philosophy remains more formal, less attentive to everyday language."},
      {category:"Two-Phase Career",detail:"The model of a thinker revolutionizing a field then revolutionizing it again is rare. This example is lost."},
      {category:"Philosophy's Self-Image",detail:"Wittgenstein's claim that philosophy should be therapy, dissolving problems, might not emerge."}
    ],
    timeline:[
      {year:1921,happened:"Tractatus published; seems to solve philosophy",alternate:"Logical positivism develops from different source"},
      {year:1953,happened:"Philosophical Investigations published posthumously",alternate:"Ordinary language philosophy doesn't emerge this way"},
      {year:1970,happened:"Wittgenstein dominates Cambridge philosophy",alternate:"Different figure dominates; different analytic tradition"},
      {year:2024,happened:"Wittgenstein remains most cited 20th c. philosopher",alternate:"Different philosopher holds this position"}
    ],
    impact:{lives:"Analytic philosophy",econ:"Logic foundations",cultural:"Language philosophy",reach:"Western philosophy",timeline:"Analytic philosophy develops differently"}},
  
  // MORE PHILOSOPHY
  {id:"simone",name:"Simone de Beauvoir",born:1908,died:1986,cat:"philosophy",field:"Philosophy & Feminism",
    quote:"One is not born, but rather becomes, a woman.",
    contributions:["The Second Sex","Existentialist feminism","Sartre partnership","Gender as construction"],
    r:0.30,reasoning:"The Second Sex was foundational for second-wave feminism. Her argument that gender is constructed was groundbreaking. Others were thinking about women's condition; she provided the philosophical framework.",
    counterfactual:"Without de Beauvoir, second-wave feminism still emerges — the social conditions were ripening. But 'The Second Sex' provided the philosophical framework. 'One is not born, but rather becomes, a woman' — the idea that gender is constructed rather than natural — was revolutionary. Without her, feminism might be more pragmatic, less theoretically grounded. Gender studies has different foundations.",
    ripples:[
      {category:"Gender Construction",detail:"The idea that gender is made, not born, might not be articulated this clearly. Essentialism persists longer."},
      {category:"Second-Wave Feminism",detail:"The movement still happens but without its philosophical foundation. More practical, less theoretical."},
      {category:"Existentialist Ethics",detail:"De Beauvoir's ethics of ambiguity is lost. Existentialism has fewer ethical resources."},
      {category:"Public Intellectual",detail:"The model of the female public intellectual is weaker. Different figures dominate."}
    ],
    timeline:[
      {year:1949,happened:"The Second Sex published",alternate:"Feminism lacks its philosophical foundation; develops differently"},
      {year:1963,happened:"Friedan cites de Beauvoir",alternate:"Second-wave feminism builds from different sources"},
      {year:1970,happened:"Gender studies emerges",alternate:"Academic feminism has different theoretical foundation"},
      {year:2024,happened:"De Beauvoir still central to feminist theory",alternate:"Different figure or no single figure dominates"}
    ],
    impact:{lives:"Feminist philosophy",econ:"Gender studies field",cultural:"Gender constructionism",reach:"Global feminism",timeline:"Second-wave feminism develops differently"}},
  {id:"sartre",name:"Jean-Paul Sartre",born:1905,died:1980,cat:"philosophy",field:"Philosophy",
    quote:"Man is condemned to be free.",
    contributions:["Being and Nothingness","Existentialism popularization","Political engagement","Refused Nobel Prize"],
    r:0.35,reasoning:"Existentialism had multiple sources — Heidegger, Kierkegaard. Sartre made it a popular movement. His specific formulation was influential but built on others. His café philosopher image was partly self-creation.",
    counterfactual:"Without Sartre, existentialism remains academic — Heidegger was German and difficult, Kierkegaard was 19th century. Sartre made existentialism a café movement, a lifestyle, a political stance. The image of the engaged intellectual in post-war Paris is his creation. Without him, philosophy remains in universities. The specific formulas — 'existence precedes essence,' 'condemned to be free' — don't enter popular culture.",
    ripples:[
      {category:"Public Philosophy",detail:"Philosophy remains academic without Sartre's popularization. No café philosophy movement."},
      {category:"Political Engagement",detail:"The model of the politically engaged intellectual is weaker. Different post-war culture."},
      {category:"Existentialist Vocabulary",detail:"'Existence precedes essence,' 'bad faith,' 'condemned to be free' — these phrases don't enter culture."},
      {category:"French Intellectual Life",detail:"Post-war French intellectual culture looks very different. Different figures dominate."}
    ],
    timeline:[
      {year:1943,happened:"Being and Nothingness published",alternate:"Existentialism remains Heideggerian and academic"},
      {year:1945,happened:"'Existentialism Is a Humanism' lecture",alternate:"No popular existentialist movement"},
      {year:1964,happened:"Sartre refuses Nobel Prize",alternate:"Different model of intellectual integrity"},
      {year:2024,happened:"'Existentialist' still common term",alternate:"Philosophy remains more academic, less cultural"}
    ],
    impact:{lives:"Post-war intellectual culture",econ:"Philosophy as public discourse",cultural:"Existentialist vogue",reach:"France, global",timeline:"Existentialism less popular, more academic"}},
  {id:"arendt",name:"Hannah Arendt",born:1906,died:1975,cat:"philosophy",field:"Political Philosophy",
    quote:"The sad truth is that most evil is done by people who never make up their minds to be good or evil.",
    contributions:["Banality of evil concept","The Human Condition","Origins of Totalitarianism","Eichmann trial coverage"],
    r:0.25,reasoning:"Her concept of the 'banality of evil' changed how we understand how ordinary people commit atrocities. Her analysis of totalitarianism remains essential. No one else was thinking about these problems in quite her way.",
    counterfactual:"Without Arendt, we lack the concept of the 'banality of evil' — the idea that atrocities are committed by ordinary bureaucrats just doing their jobs. Her Eichmann coverage was controversial precisely because it challenged heroic narratives of evil. 'The Origins of Totalitarianism' provided the framework for understanding Nazism and Stalinism together. Without her, we understand 20th century political evil differently.",
    ripples:[
      {category:"Banality of Evil",detail:"This concept doesn't exist. We understand perpetrators of atrocities differently — perhaps more demonically."},
      {category:"Totalitarianism Theory",detail:"The conceptual link between Nazism and Stalinism might not be made as clearly."},
      {category:"Holocaust Understanding",detail:"The Eichmann trial is interpreted differently. Different narratives about perpetrators."},
      {category:"Public Space",detail:"Arendt's concept of the public sphere as essential to politics might not be articulated."}
    ],
    timeline:[
      {year:1951,happened:"Origins of Totalitarianism published",alternate:"Nazism and Stalinism analyzed separately; no unified theory"},
      {year:1961,happened:"Eichmann in Jerusalem; 'banality of evil'",alternate:"Eichmann trial interpreted differently; perpetrators seen as monsters"},
      {year:1958,happened:"The Human Condition",alternate:"Political philosophy lacks this analysis of action and labor"},
      {year:2024,happened:"'Banal evil' referenced constantly",alternate:"Different vocabulary for ordinary perpetrators of atrocities"}
    ],
    impact:{lives:"Political understanding",econ:"Political theory",cultural:"Evil as banal",reach:"Global political thought",timeline:"Totalitarianism understood differently"}},
  {id:"foucault",name:"Michel Foucault",born:1926,died:1984,cat:"philosophy",field:"Philosophy & History",
    quote:"Where there is power, there is resistance.",
    contributions:["Power/knowledge analysis","History of sexuality","Discipline and Punish","Discourse theory"],
    r:0.30,reasoning:"Foucault's analysis of how power operates through discourse and institutions was influential. Others were critiquing institutions; his specific archaeological method was his contribution. Derrida and Deleuze offered alternatives.",
    counterfactual:"Without Foucault, critical theory still develops — the Frankfurt School, Derrida, Deleuze all contribute. But Foucault's specific contribution was showing how power operates through knowledge and discourse, not just through force. Prisons, asylums, sexuality — he showed how these institutions produce 'subjects.' Without him, we analyze power differently. The tools for critiquing institutions are different.",
    ripples:[
      {category:"Power Analysis",detail:"We analyze power through force and ideology, not through discourse and knowledge production."},
      {category:"Institutional Critique",detail:"Prisons, hospitals, schools analyzed differently. The idea that they 'produce' subjects is weaker."},
      {category:"Sexuality Studies",detail:"The history of sexuality is told differently. Different understanding of how sexuality is constructed."},
      {category:"Academic Humanities",detail:"The specific Foucauldian methods don't exist. Different tools for cultural analysis."}
    ],
    timeline:[
      {year:1961,happened:"Madness and Civilization published",alternate:"History of psychiatry told differently"},
      {year:1975,happened:"Discipline and Punish",alternate:"Prison analysis without 'panopticon'; different critique"},
      {year:1976,happened:"History of Sexuality begins",alternate:"Sexuality studies develops from different foundation"},
      {year:2024,happened:"'Foucauldian' is standard academic term",alternate:"Different or no single thinker dominates cultural studies"}
    ],
    impact:{lives:"Social sciences transformed",econ:"Academic industry",cultural:"Power analysis everywhere",reach:"Global humanities",timeline:"Critical theory develops differently"}},
  {id:"rawls",name:"John Rawls",born:1921,died:2002,cat:"philosophy",field:"Political Philosophy",
    quote:"Justice is the first virtue of social institutions.",
    contributions:["A Theory of Justice","Veil of ignorance concept","Political liberalism","Revived political philosophy"],
    r:0.35,reasoning:"Political philosophy was nearly dead in Anglo-American academia. Rawls revived it. His veil of ignorance thought experiment became standard. Others would have revived the field; his specific framework dominated.",
    counterfactual:"Without Rawls, political philosophy still revives — the social movements of the 1960s demanded theoretical response. But Rawls's specific framework — the 'veil of ignorance' thought experiment, justice as fairness — dominated Anglo-American political philosophy for decades. Without him, the field might have developed along more communitarian or libertarian lines. Nozick's response wouldn't exist in the same form.",
    ripples:[
      {category:"Political Philosophy Revival",detail:"The field revives but from different foundations. Perhaps more communitarian or libertarian."},
      {category:"Veil of Ignorance",detail:"This thought experiment doesn't exist. Different tools for thinking about justice."},
      {category:"Liberal Theory",detail:"Liberalism lacks its most sophisticated theoretical defense. Different philosophical foundations."},
      {category:"Nozick's Response",detail:"Anarchy, State, and Utopia doesn't exist as response to Rawls. Libertarian philosophy develops differently."}
    ],
    timeline:[
      {year:1971,happened:"A Theory of Justice published",alternate:"Political philosophy revives from different foundations"},
      {year:1974,happened:"Nozick responds with Anarchy, State, and Utopia",alternate:"No Rawlsian target; libertarianism develops differently"},
      {year:1993,happened:"Political Liberalism refines theory",alternate:"Liberal theory has different evolution"},
      {year:2024,happened:"'Rawlsian' standard in political philosophy",alternate:"Different framework dominates discussions of justice"}
    ],
    impact:{lives:"Liberal political theory",econ:"Distributive justice debates",cultural:"Philosophy matters again",reach:"Anglo-American thought",timeline:"Political philosophy revives differently"}},
  {id:"turing_phil",name:"Alan Turing",born:1912,died:1954,cat:"philosophy",field:"Philosophy of Mind",
    quote:"A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
    contributions:["Turing Test","Computability theory","AI foundations","Philosophy of mind"],
    r:0.40,reasoning:"The Turing Test framed AI debates for decades. His work on computability was paralleled by Church. His specific contribution was bridging mathematics and philosophy of mind. His tragic death cut short further contributions.",
    counterfactual:"Without Turing's 1950 paper, AI debates are framed differently. The question 'Can machines think?' might be asked, but the specific test — can a machine fool a human into thinking it's human? — doesn't become the benchmark. Church's lambda calculus handled computability, but Turing machines are more intuitive. The specific bridge between mathematics and philosophy of mind is different.",
    ripples:[
      {category:"AI Benchmark",detail:"The Turing Test doesn't exist. Different criteria for machine intelligence — perhaps more about behavior, less about deception."},
      {category:"Philosophy of Mind",detail:"The specific question of whether computers can 'think' is framed differently."},
      {category:"Computability",detail:"Church's lambda calculus might dominate. Different foundation for theoretical computer science."},
      {category:"AI Ethics",detail:"Current debates about AI consciousness reference Turing. Without him, different philosophical tools."}
    ],
    timeline:[
      {year:1936,happened:"Turing machines define computability",alternate:"Church's lambda calculus dominates; different conceptual framework"},
      {year:1950,happened:"'Computing Machinery and Intelligence' published",alternate:"AI debates framed differently; no Turing Test"},
      {year:1956,happened:"AI field founded; references Turing",alternate:"AI field has different founding questions"},
      {year:2024,happened:"Turing Test still debated re: LLMs",alternate:"Different benchmark for AI capability"}
    ],
    impact:{lives:"AI debates framed",econ:"AI industry foundations",cultural:"Machine intelligence question",reach:"Global",timeline:"AI philosophy develops via Church differently"}},

  // MEDICINE & HEALTH
  {id:"hippocrates",name:"Hippocrates",born:-460,died:-370,cat:"medicine",field:"Medicine",
    quote:"First, do no harm.",
    contributions:["Hippocratic Oath","Medicine separated from religion","Clinical observation method","Natural disease theory"],
    r:0.40,reasoning:"Greek medicine was professionalizing. The Hippocratic corpus was written by multiple authors. But the ethical framework coalesced around his school and shaped medicine for two millennia.",
    counterfactual:"Without Hippocrates, Greek medicine still develops — the Hippocratic corpus was written by multiple authors over decades. But the specific ethical framework ('First, do no harm'), the separation of medicine from religion, the focus on natural causes rather than divine intervention — these might emerge differently. The Hippocratic Oath that guided medical ethics for 2,400 years might not exist. Medicine might have developed with different ethical foundations.",
    ripples:[
      {category:"Medical Ethics",detail:"Without the Hippocratic Oath, medical ethics develops differently. Different principles might guide physician behavior."},
      {category:"Secular Medicine",detail:"The separation of medicine from religion might happen later or incompletely. Priests might remain healers longer."},
      {category:"Clinical Observation",detail:"The emphasis on careful observation of symptoms might be weaker. Medicine more theoretical, less empirical."},
      {category:"Natural Causation",detail:"Diseases attributed to gods rather than natural causes longer. Scientific medicine delayed."}
    ],
    timeline:[
      {year:-420,happened:"Hippocratic school flourishes at Cos",alternate:"Greek medicine develops without unified school; more fragmented"},
      {year:-350,happened:"Hippocratic corpus compiled",alternate:"Greek medical knowledge less organized; different texts dominate"},
      {year:200,happened:"Galen builds on Hippocrates",alternate:"Roman medicine builds on different foundation"},
      {year:1948,happened:"Hippocratic Oath still sworn by physicians",alternate:"Medical ethics based on different historical tradition"}
    ],
    impact:{lives:"Medical ethics foundation",econ:"Medical profession",cultural:"Do no harm principle",reach:"Western medicine",timeline:"Medical ethics develops differently"}},
  {id:"fleming",name:"Alexander Fleming",born:1881,died:1955,cat:"medicine",field:"Microbiology",
    quote:"One sometimes finds what one is not looking for.",
    contributions:["Discovered penicillin's antibacterial properties","Lysozyme discovery","Nobel Prize 1945","Antibiotic era initiation"],
    r:0.80,reasoning:"Fleming noticed mold killing bacteria but didn't develop penicillin for use — Florey and Chain did. Multiple researchers were investigating antibacterial agents. Sulfa drugs were already working.",
    counterfactual:"Without Fleming noticing the penicillin mold in 1928, antibiotics still emerge — sulfa drugs were already working, and multiple researchers were investigating antibacterial agents. Florey and Chain, who actually developed penicillin for medical use, might have discovered the mold themselves or developed other antibiotics. Fleming's contribution was observation; the antibiotic revolution was coming. The delay might have been 5-10 years.",
    ripples:[
      {category:"WWII Medicine",detail:"If antibiotics are delayed to late 1940s instead of early 1940s, more soldiers die from infections."},
      {category:"Sulfa Drugs",detail:"Without penicillin, sulfa drugs dominate longer. Different antibiotic resistance patterns develop."},
      {category:"Discovery Narrative",detail:"The story of scientific serendipity changes. Different icon of accidental discovery."},
      {category:"Development Credit",detail:"Florey and Chain might get more recognition. The penicillin story is told differently."}
    ],
    timeline:[
      {year:1928,happened:"Fleming notices penicillin mold",alternate:"Mold noticed by someone else or antibiotics develop via different path"},
      {year:1940,happened:"Florey and Chain develop penicillin for use",alternate:"Without Fleming's paper, they work on other antibiotics"},
      {year:1944,happened:"Penicillin saves lives in WWII",alternate:"Sulfa drugs or later antibiotics treat infections; more deaths"},
      {year:2020,happened:"Antibiotics save 200M+ lives since",alternate:"Antibiotic era begins later; fewer saved initially"}
    ],
    impact:{lives:"200M+ saved by antibiotics",econ:"Antibiotic industry: $50B+",cultural:"Medical breakthrough archetype",reach:"Global healthcare",timeline:"Antibiotics discovered 5-10 years later"}},
  {id:"jenner",name:"Edward Jenner",born:1749,died:1823,cat:"medicine",field:"Immunology",
    quote:"I hope that some day the practice of producing cowpox in human beings will spread over the world.",
    contributions:["Smallpox vaccination development","Founded immunology field","Coined 'vaccination'","Started smallpox eradication"],
    r:0.60,reasoning:"Folk knowledge that milkmaids didn't get smallpox was widespread. Variolation was already practiced. Jenner systematized cowpox vaccination, but the idea was circulating.",
    counterfactual:"Without Jenner, vaccination still emerges — the folk knowledge that milkmaids didn't get smallpox was widespread, and variolation (deliberate infection with mild smallpox) was already practiced. Jenner's contribution was systematic testing and publication that made vaccination credible to the medical establishment. Someone else would have made the connection within 10-20 years. But that delay could have cost millions of lives.",
    ripples:[
      {category:"Smallpox Deaths",detail:"Every decade of delay in vaccination costs millions of lives. Smallpox killed 300-500 million in 20th century even with vaccine."},
      {category:"Immunology Field",detail:"The term 'vaccination' (from vacca, cow) might not exist. Immunology develops with different terminology."},
      {category:"Public Health",detail:"The model of mass vaccination programs develops later. Epidemic control happens differently."},
      {category:"Vaccine Movement",detail:"Anti-vaccine sentiment has different history. Different founding controversies."}
    ],
    timeline:[
      {year:1796,happened:"Jenner tests cowpox vaccination",alternate:"Systematic vaccination delayed; folk practice continues informally"},
      {year:1801,happened:"Vaccination spreads through Europe",alternate:"Without Jenner's credibility, medical establishment slower to adopt"},
      {year:1900,happened:"Smallpox vaccination widespread",alternate:"Vaccination catches up; still widespread by 1900"},
      {year:1980,happened:"Smallpox eradicated",alternate:"Eradication delayed by same years as initial vaccination delay"}
    ],
    impact:{lives:"500M+ saved from smallpox",econ:"Vaccine industry: $50B+",cultural:"Preventive medicine model",reach:"Global public health",timeline:"Vaccination delayed 10-20 years"}},
  {id:"nightingale",name:"Florence Nightingale",born:1820,died:1910,cat:"medicine",field:"Nursing & Statistics",
    quote:"I attribute my success to this: I never gave or took any excuse.",
    contributions:["Modern nursing profession","Statistical graphics in medicine","Hospital sanitation reform","Nursing education system"],
    r:0.35,reasoning:"Hospital reform was needed. But Nightingale's combination of statistical proof, political connections, training programs, and personal celebrity was unique. She professionalized nursing from menial work.",
    counterfactual:"Without Nightingale, hospital reform still happens — the Crimean War's death rates were scandalous regardless. But her unique combination of statistical analysis (proving deaths came from disease, not wounds), political connections, media celebrity, and institution-building professionalized nursing in a specific way. Without her, nursing might have remained low-status menial work longer. Hospital mortality statistics might not have been collected as systematically.",
    ripples:[
      {category:"Nursing Profession",detail:"Without Nightingale's training schools and advocacy, nursing remains lower-status longer. Different professionalization path."},
      {category:"Medical Statistics",detail:"Her statistical graphics (pie charts, polar area diagrams) influenced data visualization. Medical statistics might develop differently."},
      {category:"Hospital Sanitation",detail:"Sanitation reforms happen anyway as germ theory spreads, but systematic data collection might lag."},
      {category:"Women in Healthcare",detail:"Nursing becomes a path to professional status for women. Without Nightingale, this path is narrower or delayed."}
    ],
    timeline:[
      {year:1854,happened:"Nightingale arrives in Crimea; mortality drops",alternate:"Crimean hospital scandal eventually reformed; slower, less systematic"},
      {year:1860,happened:"Nightingale Training School opens",alternate:"Nursing education develops differently; remains apprenticeship longer"},
      {year:1859,happened:"Notes on Nursing published",alternate:"Nursing knowledge transmitted differently; less codified"},
      {year:1900,happened:"Nursing professionalized globally",alternate:"Nursing professionalization delayed or takes different form"}
    ],
    impact:{lives:"Hospital mortality halved",econ:"Nursing profession: millions employed",cultural:"Women in healthcare leadership",reach:"Global nursing",timeline:"Nursing professionalization delayed"}},
  {id:"salk",name:"Jonas Salk",born:1914,died:1995,cat:"medicine",field:"Virology",
    quote:"Could you patent the sun?",
    contributions:["Polio vaccine development","Refused to patent vaccine","Mass vaccination model","Salk Institute founding"],
    r:0.65,reasoning:"Multiple labs were racing toward a polio vaccine. Sabin developed an oral version shortly after. His most distinctive contribution — refusing to patent — was ethical, not scientific.",
    counterfactual:"Without Salk, the polio vaccine still arrives within a few years — multiple labs were racing, and Sabin's oral vaccine came shortly after. Salk's most distinctive contribution wasn't scientific but ethical: when asked who owned the patent, he replied, 'The people. Could you patent the sun?' By forgoing billions in potential royalties, he made the vaccine available worldwide faster. That choice was personal, and a different developer might not have made it.",
    ripples:[
      {category:"Vaccine Access",detail:"A different developer might have patented. Polio vaccine might have been more expensive, less accessible globally."},
      {category:"Scientific Ethics",detail:"Salk's choice became a model of science for public good. Different example might lead to different norms."},
      {category:"March of Dimes",detail:"The public funding model that developed the vaccine might be credited differently."},
      {category:"Salk vs. Sabin",detail:"The rivalry between killed-virus (Salk) and live-virus (Sabin) vaccines might not exist. Sabin's approach might dominate."}
    ],
    timeline:[
      {year:1952,happened:"Salk tests vaccine on himself and family",alternate:"Different researcher first; different development path"},
      {year:1955,happened:"Salk vaccine approved; Salk refuses patent",alternate:"Vaccine patented; access delayed in poor countries"},
      {year:1962,happened:"Sabin oral vaccine approved",alternate:"Without Salk, Sabin might be first; oral vaccine dominates earlier"},
      {year:2020,happened:"Polio nearly eradicated",alternate:"Eradication might be delayed if vaccine access limited"}
    ],
    impact:{lives:"Millions saved from polio",econ:"Vaccination programs model",cultural:"Selfless scientist archetype",reach:"Global polio eradication",timeline:"Polio vaccine within 5 years via others"}},
  {id:"lister",name:"Joseph Lister",born:1827,died:1912,cat:"medicine",field:"Surgery",
    quote:"The irritation of the wound by the antiseptic was well worth bearing for the unmeasured benefit.",
    contributions:["Antiseptic surgery","Carbolic acid use","Reduced surgical mortality","Built on Pasteur's germ theory"],
    r:0.50,reasoning:"Lister applied Pasteur's germ theory to surgery — a logical step others could have made. His contribution was bridging laboratory science and surgical practice.",
    counterfactual:"Without Lister, antiseptic surgery still comes — Semmelweis had already demonstrated that hand-washing saved lives, and Pasteur's germ theory was spreading. But Lister specifically brought carbolic acid and systematic antiseptic technique to surgery. Without him, antiseptic surgery is delayed 5-10 years while others make the connection. In that window, more surgical patients die of infection. The specific technique might differ — alcohol, heat, other antiseptics — but the principle was coming.",
    ripples:[
      {category:"Delay",detail:"Antiseptic surgery delayed 5-10 years. More surgical deaths from infection in that period."},
      {category:"Technique",detail:"Different antiseptic methods might dominate. Carbolic acid was Lister's choice; others might choose differently."},
      {category:"Semmelweis",detail:"Semmelweis showed hand-washing worked. Someone else might have systematized his insights."},
      {category:"Germ Theory",detail:"Pasteur's germ theory spreads regardless. Application to surgery was logical next step."}
    ],
    timeline:[
      {year:1867,happened:"Lister publishes antiseptic principles",alternate:"Antiseptic surgery develops more slowly"},
      {year:1880,happened:"Antiseptic technique spreads",alternate:"Higher surgical mortality in this period"},
      {year:1890,happened:"Aseptic technique develops",alternate:"Same endpoint; more deaths getting there"},
      {year:2024,happened:"Lister remembered as father of antiseptic surgery",alternate:"Different pioneer credited; same techniques eventually"}
    ],
    impact:{lives:"Surgery survival rates transformed",econ:"Modern surgery possible",cultural:"Science-based medicine",reach:"Global surgery",timeline:"Antiseptic surgery delayed 5-10 years"}},
  {id:"ibnsina",name:"Ibn Sina (Avicenna)",born:980,died:1037,cat:"medicine",field:"Medicine & Philosophy",
    quote:"The knowledge of anything is not acquired or complete unless it is known by its causes.",
    contributions:["Canon of Medicine (500+ years standard)","Clinical trials concept","Contagious disease recognition","Aristotle-medicine synthesis"],
    r:0.25,reasoning:"The Canon of Medicine was the standard text for over 500 years. His synthesis of Greek and Arabic knowledge was encyclopedic. No one else produced anything so comprehensive.",
    counterfactual:"Without Ibn Sina, medieval medicine lacks its encyclopedic synthesis. The Canon of Medicine was the standard text in both Islamic and European medical schools for over 500 years. His systematic organization of Galenic medicine, his clinical observations, his concept of testing treatments — these shaped how medicine was taught. Without him, medical knowledge remains more fragmented, transmission to Europe happens differently.",
    ripples:[
      {category:"Medical Education",detail:"Without the Canon, medical education lacks its standard text. Different organization of medical knowledge."},
      {category:"European Medicine",detail:"The Canon was used in European universities until the 1700s. Without it, different texts dominate."},
      {category:"Islamic Science",detail:"The Islamic Golden Age loses one of its brightest lights. Different historical narrative."},
      {category:"Clinical Method",detail:"Ibn Sina's systematic approach to observation and treatment testing develops differently."}
    ],
    timeline:[
      {year:1025,happened:"Canon of Medicine completed",alternate:"Medical knowledge remains more fragmented; no encyclopedic synthesis"},
      {year:1200,happened:"Canon translated into Latin; dominates Europe",alternate:"Different texts shape European medicine"},
      {year:1500,happened:"Canon still standard in medical schools",alternate:"Different medical tradition in universities"},
      {year:2024,happened:"Ibn Sina remembered as greatest medieval physician",alternate:"Different figure represents Islamic Golden Age medicine"}
    ],
    impact:{lives:"Medical text for 600 years",econ:"Medieval medicine",cultural:"Islamic Golden Age height",reach:"Islamic world, Europe",timeline:"Medieval medicine less advanced"}},
  {id:"tuyouyou",name:"Tu Youyou",born:1930,died:2024,cat:"medicine",field:"Pharmaceutical Science",
    quote:"I feel that the Chinese medicine community should be proud.",
    contributions:["Artemisinin discovery","Malaria treatment revolution","Traditional-modern medicine integration","Nobel Prize 2015"],
    r:0.40,reasoning:"Chinese government assembled hundreds of scientists. Tu's insight — low-temperature extraction — was crucial, but the institutional effort was massive.",
    counterfactual:"Without Tu Youyou, artemisinin is probably still discovered — the Chinese government had assembled hundreds of scientists in Project 523 to find antimalarials. But Tu's specific insight — using low-temperature extraction based on a 1,600-year-old text — was the breakthrough. Without her, the project might have taken years longer, and millions more would have died from drug-resistant malaria in the interim.",
    ripples:[
      {category:"Malaria Deaths",detail:"Every year of delay in artemisinin costs hundreds of thousands of lives. Different timeline means different death toll."},
      {category:"Traditional Medicine",detail:"Tu's success validated traditional Chinese medicine to modern science. Without this, the relationship develops differently."},
      {category:"Drug Discovery",detail:"The model of mining traditional texts for drug leads might be less validated."},
      {category:"Nobel Recognition",detail:"China's first Nobel in science goes to someone else or comes later."}
    ],
    timeline:[
      {year:1972,happened:"Tu discovers artemisinin extraction method",alternate:"Project 523 continues searching; discovery delayed years"},
      {year:1986,happened:"Artemisinin approved for malaria",alternate:"Drug-resistant malaria kills more while alternative treatments sought"},
      {year:2015,happened:"Tu wins Nobel Prize",alternate:"Different or no Nobel for traditional medicine research"},
      {year:2024,happened:"Artemisinin saves millions annually",alternate:"Malaria treatment relies on less effective drugs longer"}
    ],
    impact:{lives:"Millions saved from malaria annually",econ:"Antimalarial drug industry",cultural:"Traditional medicine validation",reach:"Developing world",timeline:"Artemisinin found eventually, later"}},
  
  // MORE MEDICINE
  {id:"osler",name:"William Osler",born:1849,died:1919,cat:"medicine",field:"Clinical Medicine",
    quote:"The good physician treats the disease; the great physician treats the patient who has the disease.",
    contributions:["Modern medical education","Bedside teaching method","Johns Hopkins founding faculty","Medical humanities"],
    r:0.40,reasoning:"Medical education was reforming globally. Osler's specific bedside teaching method was influential but others advocated similar reforms. His humanistic approach was personal but the trend was broader.",
    counterfactual:"Without Osler, medical education still reforms — the Flexner Report was coming, and German models were influential. But Osler's specific contribution was bedside teaching: students learning from actual patients, not just lectures. His humanistic approach — treating patients as people, not cases — was personally influential. Without him, medical education might be more scientific but less humane.",
    ripples:[
      {category:"Bedside Teaching",detail:"Medical education might remain more lecture-based. Less emphasis on clinical experience."},
      {category:"Johns Hopkins Model",detail:"The model that shaped American medicine develops differently without Osler's influence."},
      {category:"Medical Humanities",detail:"The integration of humanities into medical education is weaker."},
      {category:"Textbooks",detail:"Osler's Principles and Practice of Medicine was hugely influential. Different texts dominate."}
    ],
    timeline:[
      {year:1889,happened:"Osler joins Johns Hopkins; reshapes medical education",alternate:"Johns Hopkins develops differently; different model"},
      {year:1892,happened:"Osler's textbook becomes standard",alternate:"Different textbook dominates medical education"},
      {year:1910,happened:"Flexner Report transforms medical schools",alternate:"Reform happens but with different models"},
      {year:2024,happened:"'Oslerian' still describes humanistic medicine",alternate:"Different vocabulary for patient-centered care"}
    ],
    impact:{lives:"Medical education transformed",econ:"Hospital-based training model",cultural:"Physician as humanist",reach:"Anglo-American medicine",timeline:"Medical education reforms similarly"}},
  {id:"lister",name:"Joseph Lister",born:1827,died:1912,cat:"medicine",field:"Surgery",
    quote:"The material which I have employed is carbolic or phenic acid.",
    contributions:["Antiseptic surgery","Carbolic acid application","Infection theory applied","Surgical survival transformed"],
    r:0.40,reasoning:"Semmelweis had proven hand-washing worked. Pasteur's germ theory was known. Lister systematically applied it to surgery. Others would have made the connection; Lister did it most effectively.",
    counterfactual:"Without Lister, antiseptic surgery still emerges — Semmelweis had shown hand-washing prevented infection, and Pasteur's germ theory was being published. The connection was logical. But Lister systematically applied carbolic acid to surgery and evangelized the technique against fierce resistance. Without his persistence, surgical infection rates remain high for another decade or two. Millions who could have survived surgery die.",
    ripples:[
      {category:"Surgical Mortality",detail:"Every year of delay in antiseptic technique costs thousands of surgical patients their lives."},
      {category:"Germ Theory Application",detail:"The practical application of Pasteur's theory comes later. Different bridge between theory and practice."},
      {category:"Surgical Culture",detail:"The idea that surgeons should be clean takes longer to establish."},
      {category:"Hospital Design",detail:"The redesign of hospitals for hygiene might be delayed."}
    ],
    timeline:[
      {year:1867,happened:"Lister publishes on antiseptic surgery",alternate:"Antiseptic technique develops later; more post-surgical deaths"},
      {year:1880,happened:"Antiseptic surgery accepted after resistance",alternate:"Acceptance takes longer without Lister's advocacy"},
      {year:1890,happened:"Aseptic surgery replaces antiseptic",alternate:"Progression to aseptic technique delayed"},
      {year:2024,happened:"Lister remembered as surgery transformer",alternate:"Different figure credited with surgical hygiene"}
    ],
    impact:{lives:"Millions of surgical patients",econ:"Modern surgery possible",cultural:"Evidence-based practice",reach:"Global surgery",timeline:"Antiseptic surgery within 10-20 years"}},
  {id:"barnard",name:"Christiaan Barnard",born:1922,died:2001,cat:"medicine",field:"Surgery",
    quote:"It is infinitely better to transplant a heart than to bury it to be eaten by worms.",
    contributions:["First human heart transplant","Surgical celebrity","Transplant medicine pioneer","Ethical debates catalyst"],
    r:0.55,reasoning:"Heart transplantation was being pursued by several teams. Shumway in the US was equally prepared. Barnard got there first by weeks. The technique would have emerged very soon regardless.",
    counterfactual:"Without Barnard, the first heart transplant happens within weeks or months — Norman Shumway at Stanford was equally prepared and had done more animal research. Barnard got there first partly through willingness to take risks. The technique was ready; it was a race. The main difference would be who gets the fame. Shumway becomes the celebrity surgeon instead.",
    ripples:[
      {category:"Timing",detail:"First heart transplant happens within months via Shumway. Almost no medical difference."},
      {category:"Celebrity",detail:"Shumway or another surgeon becomes the public face of transplant medicine."},
      {category:"South Africa",detail:"South Africa doesn't have this moment of medical pride. Different national narrative."},
      {category:"Ethical Debates",detail:"The debates about brain death and transplant ethics happen regardless; sparked by different surgery."}
    ],
    timeline:[
      {year:1967,happened:"Barnard performs first heart transplant",alternate:"Shumway performs first transplant within months"},
      {year:1968,happened:"Global transplant attempts follow",alternate:"Same expansion of transplant medicine"},
      {year:1980,happened:"Cyclosporine makes transplants viable long-term",alternate:"Same immunosuppression advances"},
      {year:2024,happened:"Barnard remembered as pioneer",alternate:"Shumway remembered as pioneer instead"}
    ],
    impact:{lives:"Transplant medicine founded",econ:"Cardiac surgery industry",cultural:"Medical miracles era",reach:"Global medicine",timeline:"Heart transplant within months via Shumway"}},
  {id:"blackwell",name:"Elizabeth Blackwell",born:1821,died:1910,cat:"medicine",field:"Medicine",
    quote:"It is not easy to be a pioneer — but oh, it is fascinating!",
    contributions:["First US female MD","Medical College for Women","Public health advocacy","Women in medicine pathway"],
    r:0.35,reasoning:"Women were entering medicine in various places. Blackwell's specific achievement opened US medical education. Her influence on subsequent generations was direct. Someone would have broken the barrier; she did it and mentored others.",
    counterfactual:"Without Blackwell, women still enter medicine — the barrier would have fallen eventually. But Blackwell's specific achievement was being first in the US, then founding a medical college for women, then mentoring the next generation. Her influence on figures like Mary Putnam Jacobi and Rebecca Lee Crumpler was direct. Without her, women's medical education in the US is delayed by a decade or two, and the early mentorship network doesn't exist.",
    ripples:[
      {category:"Timing",detail:"Women enter US medicine 10-20 years later. Different pioneers, different path."},
      {category:"Medical Colleges",detail:"The Woman's Medical College of New York doesn't exist. Women's medical education takes different form."},
      {category:"Mentorship",detail:"The network of early women physicians doesn't form the same way. Different connections."},
      {category:"Public Health",detail:"Blackwell's focus on preventive medicine and public health develops differently."}
    ],
    timeline:[
      {year:1849,happened:"Blackwell receives MD from Geneva Medical College",alternate:"First US female MD is someone else, 10-20 years later"},
      {year:1857,happened:"New York Infirmary for Women and Children founded",alternate:"Women's hospitals develop later or differently"},
      {year:1868,happened:"Woman's Medical College founded",alternate:"Women's medical education takes different path"},
      {year:2024,happened:"Women majority of US medical students",alternate:"Same eventual outcome, different pioneers in the story"}
    ],
    impact:{lives:"Women in medicine globally",econ:"Medical workforce doubled potential",cultural:"Gender barrier broken",reach:"US, global influence",timeline:"Women's medical education delayed 10-20 years"}},
  {id:"apgar",name:"Virginia Apgar",born:1909,died:1974,cat:"medicine",field:"Anesthesiology & Neonatology",
    quote:"Nobody, but nobody, is going to stop breathing on me.",
    contributions:["Apgar Score for newborns","Neonatal resuscitation standardized","Birth defects research","Anesthesiology pioneer"],
    r:0.35,reasoning:"The Apgar Score — a simple, immediate assessment of newborn health — saved countless lives by ensuring quick response. Her specific contribution was recognizing what needed measurement. Others might have developed similar scores eventually.",
    counterfactual:"Without Apgar, newborn assessment still develops — the need was obvious. But Apgar's specific score — five measurements at one and five minutes, each scored 0-2, totaling 0-10 — was elegantly simple. It ensured immediate attention to struggling newborns. Without it, assessment might be more subjective, less consistent, and response slower. The 'Apgar Score' as a universal standard doesn't exist; something else, probably less elegant, takes its place.",
    ripples:[
      {category:"Newborn Survival",detail:"Without standardized assessment, some struggling newborns aren't identified quickly. Different mortality rates."},
      {category:"Delivery Room Practice",detail:"The routine of immediate assessment might be less consistent without the Apgar Score."},
      {category:"Medical Scoring",detail:"The Apgar Score pioneered simple clinical scores. Without it, this approach develops differently."},
      {category:"Neonatology",detail:"The field develops without this foundational tool. Different starting point."}
    ],
    timeline:[
      {year:1952,happened:"Apgar Score introduced",alternate:"Newborn assessment less standardized; different approach"},
      {year:1960,happened:"Apgar Score becomes universal",alternate:"Different or no universal standard emerges"},
      {year:1970,happened:"APGAR backronym created (Appearance, Pulse, Grimace, Activity, Respiration)",alternate:"Different mnemonic or none"},
      {year:2024,happened:"Apgar Score still used on every newborn",alternate:"Different assessment tool, possibly less simple"}
    ],
    impact:{lives:"Millions of newborns",econ:"Neonatal medicine field",cultural:"Quantified baby health",reach:"Global",timeline:"Neonatal assessment delayed"}},
  {id:"folkman",name:"Judah Folkman",born:1933,died:2008,cat:"medicine",field:"Medical Research",
    quote:"Science goes where you imagine it.",
    contributions:["Angiogenesis theory","Cancer blood supply targeting","Anti-angiogenic drugs","Tumor biology revolution"],
    r:0.30,reasoning:"Folkman's insight that tumors need blood supply, and that cutting it could treat cancer, was initially dismissed. He persisted for decades. The specific insight was his; others weren't thinking this way. Now it's a major treatment approach.",
    counterfactual:"Without Folkman, angiogenesis therapy is significantly delayed — no one else was thinking about tumors this way in the 1960s. His insight that tumors recruit their own blood supply, and that blocking this could starve them, was dismissed for decades. He persisted against enormous skepticism. Without him, this entire class of cancer treatments — Avastin, etc. — might not exist for another 20-30 years. Cancer patients who benefited from these drugs die instead.",
    ripples:[
      {category:"Cancer Treatment",detail:"An entire class of anti-cancer drugs doesn't exist. Patients who benefited die."},
      {category:"Tumor Biology",detail:"Our understanding of how tumors grow and spread is different. Different research directions."},
      {category:"Scientific Persistence",detail:"Folkman's story of decades of rejection then vindication is a model. Without it, different narrative."},
      {category:"Drug Development",detail:"The model of targeting tumor microenvironment develops differently."}
    ],
    timeline:[
      {year:1971,happened:"Folkman proposes angiogenesis theory",alternate:"Insight not made; tumors studied differently"},
      {year:1990,happened:"After decades of rejection, vindication begins",alternate:"Theory never proposed; cancer research takes different path"},
      {year:2004,happened:"Avastin approved; anti-angiogenic drugs arrive",alternate:"This drug class doesn't exist; patients die"},
      {year:2024,happened:"Angiogenesis therapy is standard oncology",alternate:"Cancer treatment lacks this entire approach"}
    ],
    impact:{lives:"Cancer patients",econ:"Anti-cancer drug class",cultural:"Persistence in science",reach:"Global oncology",timeline:"Angiogenesis therapy delayed decades"}},
  {id:"sabin",name:"Albert Sabin",born:1906,died:1993,cat:"medicine",field:"Virology",
    quote:"A scientist who is also a human being cannot rest while knowledge which might be used to reduce suffering rests on a shelf.",
    contributions:["Oral polio vaccine","Global polio eradication campaign","Refused to patent vaccine","Public health over profit"],
    r:0.50,reasoning:"Salk's injected vaccine came first. Sabin's oral vaccine was easier to administer and provided better community immunity. Both contributed. The polio effort involved many researchers.",
    counterfactual:"Without Sabin, oral polio vaccine still emerges — other researchers were working on live attenuated vaccines. Hilary Koprowski was close. But Sabin's specific strains became the global standard because they had the best safety profile. Without him, the strains might be different, possibly with more side effects. Global polio eradication might be harder because the oral vaccine was key to mass campaigns.",
    ripples:[
      {category:"Vaccine Strains",detail:"Different attenuated strains become standard. Possibly more side effects."},
      {category:"Mass Vaccination",detail:"Oral vaccine was key to mass campaigns. Without Sabin's version, campaigns might be harder."},
      {category:"Polio Eradication",detail:"The campaign toward global eradication might be slower or structured differently."},
      {category:"Salk vs. Sabin",detail:"The scientific rivalry that pushed both vaccines forward looks different."}
    ],
    timeline:[
      {year:1961,happened:"Sabin oral vaccine licensed in US",alternate:"Different oral vaccine, possibly with more side effects"},
      {year:1970,happened:"Oral vaccine dominates global campaigns",alternate:"Mass vaccination harder with injected or different oral vaccine"},
      {year:1988,happened:"Global Polio Eradication Initiative",alternate:"Eradication campaign proceeds but possibly less effectively"},
      {year:2024,happened:"Polio nearly eradicated",alternate:"Eradication possibly slower without optimal oral vaccine"}
    ],
    impact:{lives:"Polio near-eradication",econ:"Vaccine distribution model",cultural:"Scientist as humanitarian",reach:"Global",timeline:"Oral vaccine via others eventually"}},
  {id:"salk",name:"Jonas Salk",born:1914,died:1995,cat:"medicine",field:"Virology",
    quote:"Could you patent the sun?",
    contributions:["First polio vaccine","Refused to patent","Salk Institute founded","Public health hero"],
    r:0.45,reasoning:"Polio vaccine research was well-funded with many researchers. Salk's killed-virus approach worked but Sabin's live-virus also worked. His decision not to patent was personal and influential. The vaccine would have come from the research community.",
    counterfactual:"Without Salk, a polio vaccine still emerges — the research was massively funded with many teams working. Sabin's oral vaccine might come first instead. The killed-virus approach might be delayed or come from another researcher. The most significant difference is cultural: Salk's refusal to patent ('Could you patent the sun?') became a model for science as public good. Without this moment, the ethics of vaccine patents might develop differently.",
    ripples:[
      {category:"Vaccine Development",detail:"Polio vaccine still emerges; Sabin's oral version might dominate from the start."},
      {category:"Patent Ethics",detail:"Salk's refusal to patent was a cultural moment. Without it, different vaccine patent norms."},
      {category:"Scientific Celebrity",detail:"Salk became America's scientist hero. Someone else plays this role."},
      {category:"Salk Institute",detail:"The institute doesn't exist. Research develops at different institutions."}
    ],
    timeline:[
      {year:1955,happened:"Salk vaccine announced; wild celebration",alternate:"Polio vaccine from different researcher; similar celebration"},
      {year:1955,happened:"Salk refuses patent; 'sun' quote",alternate:"Vaccine possibly patented; different ethical moment"},
      {year:1960,happened:"Salk Institute founded",alternate:"Different research institutions flourish"},
      {year:2024,happened:"Salk remembered as public health hero",alternate:"Different figure remembered; possibly different vaccine ethics"}
    ],
    impact:{lives:"Millions saved from polio",econ:"Vaccine forgoing billions",cultural:"Science for public good",reach:"Global",timeline:"Polio vaccine within years"}},

  // MATH & COMPUTING
  {id:"turing",name:"Alan Turing",born:1912,died:1954,cat:"computing",field:"Computer Science",
    quote:"Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
    contributions:["Turing machine concept","Broke Enigma code","Turing Test for AI","Morphogenesis mathematics"],
    r:0.40,reasoning:"Church developed equivalent computability theory independently. Bletchley Park had other cryptanalysts. But Turing's specific contributions were distinctively his. WWII might have lasted longer; computing theory would have emerged via Church.",
    counterfactual:"Without Turing, computability theory still emerges — Alonzo Church developed equivalent results independently. But Turing's specific contributions were uniquely his: the Turing machine as a conceptual tool is more intuitive than Church's lambda calculus. At Bletchley Park, others worked on Enigma, but Turing's Bombe machines accelerated decryption. WWII might have lasted longer, costing millions more lives. The Turing Test, framing AI as imitation, shaped how we think about machine intelligence.",
    ripples:[
      {category:"WWII Duration",detail:"Without Turing's Enigma work, the war might last longer. Historians estimate his work shortened the war by 2+ years, saving millions."},
      {category:"Computation Theory",detail:"Church's lambda calculus becomes the foundation instead. Computer science develops with different conceptual tools."},
      {category:"AI Framing",detail:"Without the Turing Test, the field of AI might be framed differently. Different benchmarks, different debates."},
      {category:"Personal Tragedy",detail:"Turing's prosecution for homosexuality and chemical castration led to his likely suicide. Without this injustice, he might have contributed for decades more."}
    ],
    timeline:[
      {year:1936,happened:"Turing machine paper; computability defined",alternate:"Church's lambda calculus defines computability; different conceptual tools"},
      {year:1941,happened:"Turing's Bombe breaks Enigma",alternate:"Enigma broken more slowly; WWII lasts longer"},
      {year:1950,happened:"Turing Test proposed",alternate:"AI evaluated by different criteria; different field development"},
      {year:1954,happened:"Turing dies; persecution for homosexuality",alternate:"Without Turing, this specific tragedy doesn't occur (though persecution of others continues)"}
    ],
    impact:{lives:"WWII shortened 2+ years",econ:"Computing: $5T+ industry",cultural:"AI conceptual foundation",reach:"Global computing",timeline:"Computation theory via Church; Enigma harder"}},
  {id:"neumann",name:"John von Neumann",born:1903,died:1957,cat:"computing",field:"Mathematics & Computing",
    quote:"If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.",
    contributions:["von Neumann architecture","Game theory foundation","Manhattan Project calculations","Quantum mechanics axioms"],
    r:0.35,reasoning:"Von Neumann contributed fundamentally to multiple fields. His breadth was rare. Others worked on each area, but his synthesis was uniquely his combination.",
    counterfactual:"Without von Neumann, each of his fields develops differently. Game theory emerges via others (Nash, Morgenstern continued alone). Quantum mechanics formalization comes from Dirac's approach. The Manhattan Project has other brilliant physicists. But the von Neumann architecture — the stored-program concept that shaped all computers — might look different. The synthesis across fields that von Neumann uniquely provided doesn't happen.",
    ripples:[
      {category:"Computer Architecture",detail:"Without the von Neumann architecture, early computers develop differently. Harvard architecture might dominate. Programming paradigms change."},
      {category:"Game Theory",detail:"Game theory develops via Nash and others, but the 1944 book with Morgenstern doesn't exist. Economics adopts game theory later or differently."},
      {category:"Manhattan Project",detail:"The bomb is still built — others could do the calculations — but certain insights might be delayed."},
      {category:"Mathematical Methods",detail:"The synthesis across fields — computers, game theory, automata, quantum mechanics — doesn't happen in one person."}
    ],
    timeline:[
      {year:1928,happened:"Minimax theorem; game theory begins",alternate:"Game theory develops differently, perhaps decades later"},
      {year:1944,happened:"Game theory book with Morgenstern",alternate:"Game theory remains more obscure; economics less mathematized"},
      {year:1945,happened:"EDVAC report; von Neumann architecture",alternate:"Different computer architecture; programming develops differently"},
      {year:1957,happened:"Von Neumann dies at 53",alternate:"Each field missing different insights; synthesis doesn't happen"}
    ],
    impact:{lives:"Computing architecture",econ:"Game theory in economics",cultural:"Polymath ideal",reach:"Global technology",timeline:"Multiple fields develop slower"}},
  {id:"lovelace",name:"Ada Lovelace",born:1815,died:1852,cat:"computing",field:"Computing Pioneer",
    quote:"The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.",
    contributions:["First algorithm written","Envisioned general-purpose computing","Notes on Analytical Engine","Saw beyond calculation"],
    r:0.50,reasoning:"Babbage designed the Analytical Engine; Lovelace saw its potential beyond calculation. Her Notes were visionary but didn't directly enable later computing. She was right early, but that didn't change when computers arrived.",
    counterfactual:"Without Lovelace, the vision of what computers could be develops differently. Babbage designed the Analytical Engine, but Lovelace saw it could do more than calculation — she envisioned it composing music, creating patterns. Her Notes explained what the machine could become. Without her, Babbage is remembered as a calculator designer, not a proto-computer inventor. The conceptual vision of general-purpose computing has a different origin story. The practical timeline of computing doesn't change — her insights lay dormant until the 1930s anyway.",
    ripples:[
      {category:"Vision",detail:"Without Lovelace's Notes, the Analytical Engine is remembered as a calculator, not a proto-computer."},
      {category:"History",detail:"Computing history is narrated differently. Different origin story for the field."},
      {category:"Symbol",detail:"Ada Lovelace Day, the Ada programming language — different symbols for women in tech."},
      {category:"Practical Timeline",detail:"Computing still develops in 1930s-40s. Her vision didn't accelerate the practical work."}
    ],
    timeline:[
      {year:1843,happened:"Lovelace publishes Notes on the Analytical Engine",alternate:"Babbage's machine understood as calculator only"},
      {year:1930,happened:"Notes rediscovered; seen as visionary",alternate:"Different computing origin story"},
      {year:1980,happened:"Ada programming language named for her",alternate:"Different symbol for early computing"},
      {year:2024,happened:"Lovelace celebrated as computing pioneer",alternate:"Babbage alone credited; women in computing have different symbol"}
    ],
    impact:{lives:"Computing conceptualization",econ:"Programming vision",cultural:"Women in computing symbol",reach:"Computing history",timeline:"Vision dormant until 1930s anyway"}},
  {id:"euclid",name:"Euclid",born:-325,died:-265,cat:"computing",field:"Mathematics",
    quote:"There is no royal road to geometry.",
    contributions:["Elements (geometry textbook for 2000+ years)","Axiomatic proof method","Euclidean geometry","Number theory foundations"],
    r:0.35,reasoning:"Greek mathematicians had proven most theorems. His contribution was organization — the axiomatic method. Brilliant synthesis, but the knowledge existed.",
    counterfactual:"Without Euclid, the mathematical knowledge still exists — other Greek mathematicians had proven the theorems. But the Elements' specific contribution was organization: the axiomatic method, starting from self-evident truths and building rigorously. This became the model for all mathematics and much philosophy. Without Euclid, geometry is taught differently, proof is conceptualized differently, and the axiomatic method might develop later.",
    ripples:[
      {category:"Axiomatic Method",detail:"The model of starting from axioms and proving theorems develops later or differently. Mathematics is less rigorous."},
      {category:"Mathematical Education",detail:"Without the Elements, geometry is taught differently for 2,000 years. Different textbooks, different organization."},
      {category:"Proof Culture",detail:"The idea that mathematics must be proven rigorously might develop more slowly."},
      {category:"Non-Euclidean Geometry",detail:"Without Euclid's parallel postulate, the discovery of non-Euclidean geometry happens differently."}
    ],
    timeline:[
      {year:-300,happened:"Elements compiled and organized",alternate:"Geometry remains collection of separate results; axiomatic method develops later"},
      {year:1200,happened:"Elements translated into Latin; shapes European math",alternate:"European mathematics develops from different Greek sources"},
      {year:1800,happened:"Non-Euclidean geometry challenges Elements",alternate:"Geometry's foundations challenged differently"},
      {year:2024,happened:"'Euclidean geometry' still taught everywhere",alternate:"Different terminology; different organization of geometry"}
    ],
    impact:{lives:"Mathematical education globally",econ:"Engineering foundations",cultural:"Logical reasoning model",reach:"Global mathematics",timeline:"Geometry systematized later, differently"}},
  {id:"gauss",name:"Carl Friedrich Gauss",born:1777,died:1855,cat:"computing",field:"Mathematics",
    quote:"Mathematics is the queen of sciences.",
    contributions:["Contributions to all math branches","Normal distribution","Non-Euclidean geometry work","Number theory advances"],
    r:0.25,reasoning:"Gauss made fundamental contributions to almost every mathematical field. Many discoveries he kept private. The breadth was unmatched.",
    counterfactual:"Without Gauss, mathematics still advances — others were working in each field. But Gauss was uniquely prolific and broad. The normal distribution might bear another name. The method of least squares might be credited solely to Legendre. Non-Euclidean geometry might be discovered more slowly. Number theory would lack its greatest contributor. Mathematics would be noticeably less advanced by 1855.",
    ripples:[
      {category:"Statistics",detail:"The normal distribution might bear another name. Statistical methods develop slightly differently."},
      {category:"Number Theory",detail:"The Disquisitiones Arithmeticae doesn't exist. Number theory develops without this organizing work."},
      {category:"Astronomy",detail:"Gauss's method for calculating orbits doesn't exist. Asteroid tracking develops differently."},
      {category:"Many Fields",detail:"Contributions to magnetism, optics, differential geometry all delayed. Breadth impossible to replace."}
    ],
    timeline:[
      {year:1801,happened:"Disquisitiones Arithmeticae published",alternate:"Number theory develops without this synthesis"},
      {year:1801,happened:"Gauss calculates Ceres's orbit",alternate:"Asteroid tracking develops different methods"},
      {year:1809,happened:"Normal distribution in error analysis",alternate:"Statistics develops from different sources"},
      {year:1855,happened:"Gauss dies; many discoveries unpublished",alternate:"Those discoveries never made; mathematics less advanced"}
    ],
    impact:{lives:"Statistics used everywhere",econ:"Actuarial science, finance",cultural:"'Prince of Mathematics'",reach:"Global mathematics",timeline:"Many discoveries delayed 20+ years"}},
  {id:"euler",name:"Leonhard Euler",born:1707,died:1783,cat:"computing",field:"Mathematics",
    quote:"Logic is the foundation of the certainty of all the knowledge we acquire.",
    contributions:["Most prolific mathematician ever","Graph theory founder","Euler's identity","Modern mathematical notation"],
    r:0.25,reasoning:"Euler wrote more mathematics than anyone. He invented much modern notation. No single mathematician could have replaced his staggering output and range.",
    counterfactual:"Without Euler, mathematics develops more slowly — his output was simply too large to be replaced. He invented modern mathematical notation (f(x), e, i, Σ). He founded graph theory with the Königsberg bridges. Euler's identity (e^(iπ) + 1 = 0) doesn't exist. The entire mathematical vocabulary and notation we use would be different. Mathematics would be decades behind.",
    ripples:[
      {category:"Notation",detail:"Modern mathematical notation (f(x), e, i, Σ) doesn't exist. Different symbols, different conventions."},
      {category:"Graph Theory",detail:"The field doesn't start with Königsberg bridges. Develops later from different origins."},
      {category:"Analysis",detail:"Euler dominated analysis. Without him, the field develops more slowly."},
      {category:"Applied Mathematics",detail:"Euler's contributions to mechanics, optics, astronomy all delayed. Engineering mathematics weaker."}
    ],
    timeline:[
      {year:1736,happened:"Seven Bridges of Königsberg; graph theory born",alternate:"Graph theory develops later from different problem"},
      {year:1748,happened:"Introductio in analysin infinitorum",alternate:"Analysis developed without this synthesis"},
      {year:1783,happened:"Euler dies; 866 publications",alternate:"Mathematical progress significantly slower"},
      {year:2024,happened:"Euler's notation still universal",alternate:"Different mathematical symbols; different conventions"}
    ],
    impact:{lives:"Engineering mathematics",econ:"All applied mathematics",cultural:"Mathematical beauty",reach:"Global mathematics",timeline:"Many fields develop slower"}},
  {id:"noether",name:"Emmy Noether",born:1882,died:1935,cat:"computing",field:"Mathematics & Physics",
    quote:"My methods are really methods of working and thinking; this is why they have crept in everywhere anonymously.",
    contributions:["Noether's theorem (symmetry implies conservation)","Abstract algebra foundations","Ring theory","'Most important woman in math history' - Einstein"],
    r:0.15,reasoning:"Noether's theorem — every symmetry implies a conservation law — is one of the most profound results in physics. No one else was thinking in those terms.",
    counterfactual:"Without Noether, abstract algebra develops differently — she practically founded the field in its modern form. But her most profound contribution is Noether's theorem: that every symmetry in physics implies a conservation law. Energy conservation comes from time symmetry. Momentum conservation from space symmetry. This insight underlies all modern physics. Without her, the connection might not be made for decades.",
    ripples:[
      {category:"Noether's Theorem",detail:"The connection between symmetry and conservation might not be made for decades. Physics less unified."},
      {category:"Abstract Algebra",detail:"The field develops differently. Ring theory, ideal theory have different founders."},
      {category:"Women in Mathematics",detail:"Einstein called her the most important woman in math history. Different symbolic figure."},
      {category:"Physics Foundations",detail:"Modern physics relies on symmetry arguments. Without Noether's insight, different foundations."}
    ],
    timeline:[
      {year:1918,happened:"Noether's theorem published",alternate:"Symmetry-conservation connection not made; physics develops differently"},
      {year:1920,happened:"Noether transforms abstract algebra",alternate:"Field develops from different sources; different structure"},
      {year:1935,happened:"Noether dies; Einstein writes obituary",alternate:"Different figure represents women in mathematics"},
      {year:2024,happened:"Noether's theorem fundamental to physics",alternate:"Physics lacks this unifying principle; less elegant"}
    ],
    impact:{lives:"Physics understanding",econ:"Theoretical physics",cultural:"Women in mathematics",reach:"Global physics/math",timeline:"Symmetry-conservation link delayed decades"}},
  {id:"shannon",name:"Claude Shannon",born:1916,died:2001,cat:"computing",field:"Information Theory",
    quote:"I just wondered how things were put together.",
    contributions:["Information theory founding","Bit as information unit","Channel capacity theorem","Digital circuit design theory"],
    r:0.30,reasoning:"Shannon's 1948 paper created information theory essentially complete. No one else was approaching communication mathematically in his way. Both achievements were singular insights.",
    counterfactual:"Without Shannon, information theory eventually emerges — the practical needs of communication drive it. But Shannon's 1948 paper created the field essentially complete in one work. No one else was thinking about communication as a mathematical problem in this way. The concept of the 'bit' as fundamental unit, the channel capacity theorem, the separation of source and channel coding — all from one paper. Digital communication might be delayed by a decade or more.",
    ripples:[
      {category:"Information Theory",detail:"The field develops more slowly, piecemeal, possibly with different foundations. Telecommunications less mathematically rigorous."},
      {category:"Digital Communication",detail:"Without the theoretical framework, digital communication develops more by trial and error. Less efficient, slower progress."},
      {category:"Compression",detail:"Shannon's source coding theorem underlies all compression. Without it, data compression develops differently or later."},
      {category:"Cryptography",detail:"Information-theoretic security concepts come from Shannon. Modern cryptography has different foundations."}
    ],
    timeline:[
      {year:1937,happened:"Shannon's master's thesis; Boolean algebra for circuits",alternate:"Digital circuit design develops more slowly"},
      {year:1948,happened:"A Mathematical Theory of Communication published",alternate:"Information theory develops piecemeal over decades"},
      {year:1960,happened:"Information theory enables space communication",alternate:"Space communication less reliable, slower development"},
      {year:2000,happened:"Shannon's work underlies all digital communication",alternate:"Digital communication less theoretically grounded"}
    ],
    impact:{lives:"All digital communication",econ:"Telecommunications",cultural:"Information age foundation",reach:"Global",timeline:"Information theory delayed 10+ years"}},
  {id:"berners",name:"Tim Berners-Lee",born:1955,died:null,cat:"computing",field:"Computer Science",
    quote:"The Web as I envisaged it, we have not seen it yet.",
    contributions:["World Wide Web invention","HTML and HTTP protocols","First web browser","Web standards advocacy"],
    r:0.45,reasoning:"Hypertext existed. Internet existed. But Berners-Lee's specific combination made the web usable. Others might have created something, but his design choices shaped the internet we have.",
    counterfactual:"Without Berners-Lee, the web still emerges — hypertext existed, the internet existed, the need was clear. But his specific design choices — HTTP as stateless protocol, HTML as simple markup, URLs as universal addressing — shaped everything. Another inventor might have created something more proprietary, more complex, less open. The commercial internet might have looked more like CompuServe or AOL. The open, decentralized web we know might not exist.",
    ripples:[
      {category:"Web Openness",detail:"Without Berners-Lee's insistence on open standards, the web might have been proprietary. Walled gardens instead of open internet."},
      {category:"Protocol Design",detail:"Different protocols might have been more complex, less accessible. Fewer people could build websites."},
      {category:"E-commerce",detail:"The open web enabled Amazon, Google, etc. A proprietary web might have kept commerce in walled gardens."},
      {category:"Information Access",detail:"The democratization of information publishing might not have happened. Traditional media might retain more control."}
    ],
    timeline:[
      {year:1989,happened:"Berners-Lee proposes World Wide Web",alternate:"Hypertext systems remain fragmented; no unified web"},
      {year:1991,happened:"First web browser and server",alternate:"Different system emerges; possibly proprietary"},
      {year:1993,happened:"Web opens to public; Mosaic browser",alternate:"Without open standards, commercial internet is walled gardens"},
      {year:2020,happened:"4B+ web users; open standards maintained",alternate:"Internet might be less open, more controlled by corporations"}
    ],
    impact:{lives:"4B+ internet users",econ:"$10T+ web economy",cultural:"Information access transformed",reach:"Global",timeline:"Web develops differently, possibly less openly"}},
  {id:"hopper",name:"Grace Hopper",born:1906,died:1992,cat:"computing",field:"Computer Science",
    quote:"It's easier to ask forgiveness than it is to get permission.",
    contributions:["First compiler (A-0)","COBOL development","'Debugging' term popularization","Programming advocacy"],
    r:0.50,reasoning:"Compilers were an emerging idea. Hopper's specific contributions were important but part of a movement. Her advocacy for accessible programming made her uniquely influential culturally.",
    counterfactual:"Without Hopper, compilers still develop — the idea was emerging. But Hopper's specific contributions and advocacy were influential. COBOL might look different or not exist. The idea that programming should be accessible to non-mathematicians might develop more slowly. Her cultural role as 'Amazing Grace' — making computing seem approachable — is harder to replace.",
    ripples:[
      {category:"Compilers",detail:"Compilers develop anyway, but Hopper's early work accelerated the field."},
      {category:"COBOL",detail:"Business computing might use different languages. Different syntax, different approach."},
      {category:"Accessible Programming",detail:"Hopper advocated for plain-English programming. Without her, programming might stay more mathematical longer."},
      {category:"Women in Computing",detail:"Hopper was a cultural icon. Different figure represents women's contributions to computing."}
    ],
    timeline:[
      {year:1952,happened:"First compiler (A-0) developed",alternate:"Compilers develop slightly later; different approach"},
      {year:1959,happened:"COBOL development begins",alternate:"Business computing uses different language"},
      {year:1969,happened:"First person called 'Man of the Year' by industry",alternate:"Different computing icon emerges"},
      {year:1992,happened:"Hopper dies; legacy as 'Amazing Grace'",alternate:"Different narrative about early computing pioneers"}
    ],
    impact:{lives:"Programming accessibility",econ:"Business computing (COBOL)",cultural:"Women in computing",reach:"Global computing",timeline:"Compilers develop slightly differently"}},
  
  // MORE COMPUTING & TECH
  {id:"jobs",name:"Steve Jobs",born:1955,died:2011,cat:"computing",field:"Technology & Design",
    quote:"Stay hungry. Stay foolish.",
    contributions:["Apple co-founder","iPhone revolution","Macintosh personal computer","Pixar success"],
    r:0.40,reasoning:"Personal computers were coming. Smartphones were coming. But Jobs's specific obsession with design, user experience, and integration created products others weren't making. The iPhone specifically changed mobile computing.",
    counterfactual:"Without Jobs, personal computers and smartphones still arrive — the technology was developing regardless. But Apple doesn't become Apple. The specific design philosophy — obsessive integration of hardware and software, 'it just works,' the aesthetic minimalism — doesn't dominate consumer electronics. The iPhone might never exist in its form; touchscreen smartphones emerge via Nokia, Blackberry, or Google with different designs. Pixar might not succeed without Jobs's leadership during the Disney conflict.",
    ripples:[
      {category:"Smartphone Design",detail:"Without the iPhone's specific design, smartphones might look more like Blackberries. Touch interfaces develop differently."},
      {category:"App Economy",detail:"The App Store model might not exist or emerge differently. Mobile software distribution changes."},
      {category:"Design Philosophy",detail:"The elevation of design in tech products is weaker. Function over form might dominate consumer electronics."},
      {category:"Pixar",detail:"Without Jobs keeping Pixar alive, CGI animation might be dominated by different studios."}
    ],
    timeline:[
      {year:1984,happened:"Macintosh launches",alternate:"Personal computers more utilitarian; GUI develops differently"},
      {year:1997,happened:"Jobs returns to Apple; near-bankrupt",alternate:"Apple dies or becomes minor player; Microsoft dominates"},
      {year:2007,happened:"iPhone launches; smartphone revolution",alternate:"Smartphones emerge via Nokia/Blackberry; different design"},
      {year:2011,happened:"Jobs dies; Apple continues his vision",alternate:"Without iPhone, mobile computing looks very different"}
    ],
    impact:{lives:"Billions use Apple products",econ:"$3T+ company",cultural:"Design as competitive advantage",reach:"Global",timeline:"Mobile revolution happens differently, less elegantly"}},
  {id:"torvalds",name:"Linus Torvalds",born:1969,died:null,cat:"computing",field:"Software",
    quote:"Talk is cheap. Show me the code.",
    contributions:["Linux kernel creator","Open source champion","Git version control","Runs most of the internet"],
    r:0.40,reasoning:"Unix-like systems existed. BSD was available. But Linux's specific open development model and Torvalds's stewardship created the dominant server OS. Git transformed software development. His personality shaped open source culture.",
    counterfactual:"Without Torvalds, Unix-like open source operating systems still emerge — BSD was available, and the hacker community was building free software. But Linux's specific development model — 'benevolent dictator,' bazaar-style development, Torvalds's stewardship — might not exist. The dominant server OS might be FreeBSD or something else. Git, which transformed how all software is developed, doesn't exist. The open source movement looks different without Linux's success story.",
    ripples:[
      {category:"Server Operating Systems",detail:"FreeBSD or another Unix-like system might dominate. Android might run on different kernel."},
      {category:"Git",detail:"Without Git, version control develops differently. GitHub doesn't exist. Software collaboration changes."},
      {category:"Open Source Model",detail:"Linux proved that cathedral (BSD) and bazaar (Linux) could both work. Different success story, different model."},
      {category:"Cloud Computing",detail:"AWS, Google Cloud, etc. run on Linux. Different kernel might mean different cloud architecture."}
    ],
    timeline:[
      {year:1991,happened:"Torvalds releases Linux kernel",alternate:"BSD or other Unix-like system fills the need"},
      {year:2000,happened:"Linux dominates servers",alternate:"FreeBSD or proprietary Unix dominates; different ecosystem"},
      {year:2005,happened:"Git created for Linux development",alternate:"No Git; version control develops differently"},
      {year:2020,happened:"Linux runs most of internet",alternate:"Different kernel; different development culture"}
    ],
    impact:{lives:"Internet infrastructure",econ:"$10B+ companies built on Linux",cultural:"Open source movement",reach:"Global internet",timeline:"Open source develops differently"}},
  {id:"page_brin",name:"Larry Page & Sergey Brin",born:1973,died:null,cat:"computing",field:"Technology",
    quote:"Don't be evil.",
    contributions:["Google/Alphabet founders","PageRank algorithm","Search engine dominance","AI investment"],
    r:0.50,reasoning:"Search engines existed. Others were working on ranking algorithms. PageRank was elegant but AltaVista and others were functional. Google's execution and business model were distinctive but search was competitive.",
    counterfactual:"Without Page and Brin, search engines still dominate the internet — AltaVista, Yahoo, and others were functional. But PageRank was elegantly effective: using link structure to determine relevance rather than just keyword matching. Google's clean interface, speed, and ad business model were execution brilliance. Without them, Yahoo or Microsoft might dominate search. The internet is organized differently. Perhaps less effectively, perhaps equally well through different methods.",
    ripples:[
      {category:"Search Dominance",detail:"Yahoo or Microsoft dominates search instead. Different corporate power in the internet economy."},
      {category:"Ad Business Model",detail:"Google's ad model shaped internet economics. Different company means different business models might prevail."},
      {category:"AI Investment",detail:"Google's DeepMind and other AI investments might not happen. AI development proceeds via different leaders."},
      {category:"Information Access",detail:"Search might be less effective or just different. Internet information organization develops differently."}
    ],
    timeline:[
      {year:1998,happened:"Google founded",alternate:"Search engine landscape dominated by Yahoo, AltaVista, or Microsoft"},
      {year:2004,happened:"Google IPO",alternate:"Different company is dominant search provider"},
      {year:2014,happened:"DeepMind acquired",alternate:"AI research concentrated at different companies"},
      {year:2024,happened:"Google/Alphabet one of world's most valuable companies",alternate:"Different corporate titan dominates internet infrastructure"}
    ],
    impact:{lives:"Internet access for billions",econ:"$1.5T+ company",cultural:"Information organization",reach:"Global",timeline:"Search engine dominance via someone else"}},
  {id:"lovelace",name:"Ada Lovelace",born:1815,died:1852,cat:"computing",field:"Computing Pioneer",
    quote:"The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.",
    contributions:["First algorithm for a machine","Babbage collaboration","Computing vision ahead of its time","First programmer (conceptually)"],
    r:0.35,reasoning:"Her notes on Babbage's Analytical Engine included the first algorithm intended for machine execution. Her vision of computing's potential went beyond Babbage. No one else was thinking this way in 1843.",
    counterfactual:"Without Lovelace, Babbage's Analytical Engine is still designed — it was his project. But her notes, including the first algorithm intended for machine computation, don't exist. More importantly, her vision that the engine could manipulate symbols beyond mere numbers — potentially composing music, etc. — was uniquely hers. Babbage saw a calculator; Lovelace saw a computer. Without her, the conceptual leap to general-purpose computing might be delayed by decades.",
    ripples:[
      {category:"Computing Vision",detail:"The idea that machines could manipulate symbols beyond numbers — compose music, process language — might emerge later."},
      {category:"First Algorithm",detail:"The Bernoulli numbers algorithm doesn't exist. Different claim to 'first program.'"},
      {category:"Women in Computing",detail:"Lovelace became a symbol for women in tech. Different or no such figure from early computing."},
      {category:"Computing History",detail:"The narrative of computing's origins is different. Babbage seen as sole visionary."}
    ],
    timeline:[
      {year:1843,happened:"Lovelace publishes notes on Analytical Engine",alternate:"No algorithmic vision; Babbage's machine seen only as calculator"},
      {year:1843,happened:"First algorithm written",alternate:"'First program' claimed by later figure"},
      {year:1950,happened:"Lovelace's notes rediscovered",alternate:"Computing history written without her insights"},
      {year:2024,happened:"Lovelace Day celebrates women in STEM",alternate:"Different symbol or no such celebration"}
    ],
    impact:{lives:"Computing history",econ:"Programming concept",cultural:"Women in computing icon",reach:"Global computing history",timeline:"Computing concepts develop later"}},
  {id:"cerf_kahn",name:"Vint Cerf & Bob Kahn",born:1943,died:null,cat:"computing",field:"Internet Architecture",
    quote:"The internet is a reflection of our society.",
    contributions:["TCP/IP protocol","Internet architecture","'Fathers of the Internet'","Packet switching implementation"],
    r:0.45,reasoning:"Packet switching was developed by others. ARPANET existed. But TCP/IP's specific design enabled the modern internet. The architecture decisions they made shaped what the internet became. Others might have created something different.",
    counterfactual:"Without Cerf and Kahn, the internet still develops — packet switching existed, ARPANET was funded, others were working on networking. But TCP/IP's specific design decisions shaped everything: the end-to-end principle, the separation of layers, the way packets are addressed. Different architects might have created something more centralized, more proprietary, less flexible. The open, decentralized internet we know might not exist.",
    ripples:[
      {category:"Protocol Design",detail:"Different protocols might be more centralized, more controlled. The end-to-end principle might not dominate."},
      {category:"Internet Openness",detail:"The specific architecture enabled the internet's openness. Different design might favor gatekeepers."},
      {category:"Network Effects",detail:"TCP/IP became universal because it was well-designed. Different protocols might fragment the network."},
      {category:"Innovation Platform",detail:"The internet as platform for innovation depends on its architecture. Different design, different possibilities."}
    ],
    timeline:[
      {year:1974,happened:"TCP/IP paper published",alternate:"Different protocol emerges; possibly more proprietary"},
      {year:1983,happened:"ARPANET switches to TCP/IP",alternate:"Different transition; internet might be more fragmented"},
      {year:1995,happened:"Commercial internet explosion on TCP/IP",alternate:"Commercial internet on different protocols; different characteristics"},
      {year:2024,happened:"TCP/IP underlies entire internet",alternate:"Different protocol stack; possibly less open, less flexible"}
    ],
    impact:{lives:"4B+ internet users",econ:"Digital economy foundation",cultural:"Global connectivity",reach:"Global",timeline:"Internet develops with different protocols"}},
  {id:"altman",name:"Sam Altman",born:1985,died:null,cat:"computing",field:"AI Leadership",
    quote:"AI is probably the most important thing humanity has ever worked on.",
    contributions:["OpenAI CEO","ChatGPT launch","GPT model development","AI safety advocacy"],
    r:0.55,reasoning:"GPT research had many contributors. OpenAI had other leaders before Altman's return. AI was advancing at multiple companies. Altman's specific role was commercializing and popularizing AI. The technology was coming regardless.",
    counterfactual:"Without Altman, GPT technology still develops — the research was happening at OpenAI, Google, Anthropic, and elsewhere. But Altman's specific contribution was commercialization: the decision to release ChatGPT publicly, the partnership with Microsoft, the aggressive deployment strategy. Without him, AI advances might stay in research labs longer. The AI moment of 2023 might be delayed a year or two, or look different — perhaps Google leads instead, perhaps deployment is slower.",
    ripples:[
      {category:"ChatGPT Launch",detail:"ChatGPT's specific launch and timing was Altman's decision. Different timing, different public reaction, different political response."},
      {category:"Microsoft Partnership",detail:"The specific Microsoft deal might not happen. AI deployment proceeds through different corporate structures."},
      {category:"AI Race",detail:"The specific competitive dynamics — Google's panic, Anthropic's founding — might play out differently."},
      {category:"Safety vs. Deployment",detail:"Altman balanced safety and deployment in specific ways. Different leader, different balance."}
    ],
    timeline:[
      {year:2019,happened:"Altman becomes OpenAI CEO",alternate:"Different leadership; different strategic direction"},
      {year:2022,happened:"ChatGPT released; AI enters public consciousness",alternate:"ChatGPT delayed or released differently; AI moment comes later"},
      {year:2023,happened:"AI race accelerates globally",alternate:"Slower deployment; different competitive dynamics"},
      {year:2024,happened:"Altman central figure in AI development",alternate:"Different figures lead AI commercialization"}
    ],
    impact:{lives:"AI affecting hundreds of millions",econ:"AI industry acceleration",cultural:"AI in public consciousness",reach:"Global",timeline:"ChatGPT-style AI emerges within 1-2 years via others"}},

  // FINANCE & ECONOMICS
  {id:"adamsmith",name:"Adam Smith",born:1723,died:1790,cat:"finance",field:"Economics",
    quote:"It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner.",
    contributions:["Wealth of Nations","Free market theory","Division of labor analysis","Invisible hand concept"],
    r:0.45,reasoning:"Physiocrats developed economic theory in France. The Scottish Enlightenment produced social theory. Smith's specific synthesis was influential, but market economics was being theorized by multiple thinkers.",
    counterfactual:"Without Smith, economics still emerges as a discipline — the Physiocrats in France were developing economic theory, and the Scottish Enlightenment produced multiple social theorists. But Smith's specific synthesis — the invisible hand, division of labor analysis, the moral philosophy underlying markets — was uniquely his. The Wealth of Nations became the founding text; without it, economics might have developed from different principles, perhaps more mercantilist or physiocratic.",
    ripples:[
      {category:"Economics as Discipline",detail:"Without Wealth of Nations as founding text, economics develops from different roots. Possibly more French, more agricultural-focused."},
      {category:"Free Market Ideology",detail:"The invisible hand metaphor doesn't exist. Market economics is argued differently, perhaps less elegantly."},
      {category:"Industrial Revolution Understanding",detail:"Smith's analysis of division of labor shaped how we understood industrialization. Different framework, different understanding."},
      {category:"Policy Framework",detail:"Free trade arguments made differently. Laissez-faire has different intellectual origins."}
    ],
    timeline:[
      {year:1776,happened:"Wealth of Nations published",alternate:"Economics develops from Physiocrats or other Scottish thinkers"},
      {year:1800,happened:"Smith's ideas shape British economic policy",alternate:"Different economic orthodoxy; possibly more mercantilist"},
      {year:1900,happened:"Classical economics built on Smith",alternate:"Different founders, different classical tradition"},
      {year:2000,happened:"Smith remains foundational figure",alternate:"Different founding father of economics"}
    ],
    impact:{lives:"Capitalism for billions",econ:"Modern economics field",cultural:"Self-interest as social benefit",reach:"Global economic systems",timeline:"Economics develops via others"}},
  {id:"keynes",name:"John Maynard Keynes",born:1883,died:1946,cat:"finance",field:"Economics",
    quote:"The difficulty lies not so much in developing new ideas as in escaping from old ones.",
    contributions:["Keynesian economics","Demand-side theory","Bretton Woods architect","Government intervention theory"],
    r:0.40,reasoning:"The Great Depression destroyed faith in classical economics. Multiple economists rethought government's role. Keynes's framework dominated, but countercyclical fiscal policy was being discovered by necessity.",
    counterfactual:"Without Keynes, the Great Depression still discredits classical economics — the failure was too obvious. Governments still intervene (they had to). But the theoretical framework justifying intervention might be different. Keynes provided intellectual legitimacy for what politicians were doing anyway. Without him, demand-side economics might be called something else, justified differently, or might face stronger intellectual opposition.",
    ripples:[
      {category:"Depression Response",detail:"Governments still intervene — they had no choice — but without clear theory. Policy is more ad hoc, less systematic."},
      {category:"Postwar Order",detail:"Bretton Woods happens but with different intellectual architecture. IMF and World Bank structured differently."},
      {category:"Economic Debate",detail:"The Keynesian vs. classical debate doesn't exist in this form. Different economic schools dominate."},
      {category:"Policy Legitimacy",detail:"Government intervention lacks intellectual legitimacy longer. Laissez-faire ideology might persist more strongly."}
    ],
    timeline:[
      {year:1936,happened:"General Theory published",alternate:"Depression economics develops without central text"},
      {year:1944,happened:"Keynes shapes Bretton Woods",alternate:"Postwar monetary order designed differently"},
      {year:1971,happened:"'We are all Keynesians now'",alternate:"Different economic consensus, different name"},
      {year:2008,happened:"Keynesian response to financial crisis",alternate:"Crisis response has different theoretical justification"}
    ],
    impact:{lives:"Depression responses globally",econ:"Government economic intervention",cultural:"Economist as policy maker",reach:"Global economic policy",timeline:"Depression responses different in form"}},
  {id:"jpmorgan",name:"J.P. Morgan",born:1837,died:1913,cat:"finance",field:"Banking & Finance",
    quote:"A man always has two reasons for doing anything: a good reason and the real reason.",
    contributions:["Rescued US economy in 1907 Panic","Created US Steel and GE","Investment banking model","Federal Reserve catalyst"],
    r:0.35,reasoning:"Morgan personally stopped the 1907 panic by locking bankers in his library. No one else had that combination of wealth, authority, and will. His role convinced everyone the US needed a central bank.",
    counterfactual:"Without Morgan, the Panic of 1907 is much worse. Morgan personally stopped the collapse by locking bankers in his library until they agreed to a rescue. No one else had the combination of wealth, authority, and sheer will to do this. A worse panic might have meant earlier creation of the Federal Reserve — or a deeper depression that changed American capitalism. The fact that one man could save the economy terrified everyone; the Fed was created to ensure it never happened again.",
    ripples:[
      {category:"1907 Panic",detail:"Without Morgan's intervention, the panic is worse. Banks fail. The depression is deeper. Political consequences follow."},
      {category:"Federal Reserve",detail:"The Fed might be created earlier or with different structure. The lesson that one man shouldn't have this power is learned differently."},
      {category:"Corporate Structure",detail:"US Steel, GE, and other Morgan creations might not exist. American corporate consolidation takes different form."},
      {category:"Investment Banking",detail:"The Morgan model of investment banking might develop differently. Different financial architecture."}
    ],
    timeline:[
      {year:1901,happened:"Morgan creates US Steel",alternate:"Steel industry consolidates differently; different corporate structure"},
      {year:1907,happened:"Morgan stops panic single-handedly",alternate:"Panic worse; deeper recession; political consequences"},
      {year:1913,happened:"Federal Reserve created",alternate:"Fed created earlier or with different structure"},
      {year:2008,happened:"Modern crises handled by Fed, not individuals",alternate:"This lesson might have been learned differently"}
    ],
    impact:{lives:"US financial stability",econ:"Modern corporate structure",cultural:"Banker as power figure",reach:"US, global finance",timeline:"1907 Panic worse; Fed earlier maybe"}},
  {id:"mansamusa",name:"Mansa Musa",born:1280,died:1337,cat:"finance",field:"Wealth & Governance",
    quote:"I bring gold from a land rich beyond measure.",
    contributions:["Richest person ever (inflation-adjusted)","Hajj destabilized gold prices","Timbuktu as intellectual center","Mali Empire golden age"],
    r:0.25,reasoning:"Mali's gold wealth existed before Musa, but he deployed it uniquely. His hajj distributed so much gold it depressed Mediterranean prices for a decade. A different mansa wouldn't have had his vision.",
    counterfactual:"Without Mansa Musa, the Mali Empire still exists and is still wealthy — the gold mines don't disappear. But Musa's specific choices — the legendary hajj that distributed so much gold it crashed Mediterranean prices for a decade, the investment in Timbuktu as intellectual center — were his personal vision. A different mansa might have hoarded wealth, or spent it differently. Mali remains obscure to the wider world; Timbuktu doesn't become a center of Islamic learning.",
    ripples:[
      {category:"Global Awareness of Africa",detail:"Without the hajj, Mali remains obscure to Mediterranean world. European knowledge of African wealth is delayed."},
      {category:"Mediterranean Gold Prices",detail:"No gold price crash in 1324-1334. Egyptian and European economies don't experience this specific disruption."},
      {category:"Timbuktu",detail:"Without Musa's investment, Timbuktu doesn't become a center of Islamic scholarship. Different intellectual history."},
      {category:"Historical Memory",detail:"West African wealth not in global consciousness. Different understanding of African history."}
    ],
    timeline:[
      {year:1324,happened:"Musa's hajj crashes Mediterranean gold prices",alternate:"Mali remains wealthy but obscure; no price disruption"},
      {year:1330,happened:"Timbuktu becomes intellectual center",alternate:"Different development; less investment in scholarship"},
      {year:1375,happened:"Mali appears on Catalan Atlas",alternate:"European maps might not feature Mali as prominently"},
      {year:2020,happened:"Musa remembered as richest ever",alternate:"Different understanding of African wealth in history"}
    ],
    impact:{lives:"West African prosperity",econ:"Mediterranean gold market disruption",cultural:"African wealth in global memory",reach:"West Africa, Mediterranean",timeline:"Mali Empire less globally visible"}},
  {id:"yunus",name:"Muhammad Yunus",born:1940,died:2024,cat:"finance",field:"Microfinance",
    quote:"Poor people are bonsai people. There is nothing wrong with their seeds.",
    contributions:["Grameen Bank founder","Microcredit movement","Nobel Peace Prize 2006","Social business concept"],
    r:0.35,reasoning:"Small-scale lending existed. But Yunus institutionalized it, proved it worked at scale, and created a replicable model. Others might have developed similar approaches, but later.",
    counterfactual:"Without Yunus, microfinance eventually emerges — the idea of lending small amounts to poor entrepreneurs isn't unique. But Yunus's specific innovation was institutional: proving it could work at scale, creating the Grameen Bank model, and evangelizing the concept globally. Without him, microfinance might remain informal or develop decades later. Millions who started small businesses with Grameen loans don't get that opportunity when they needed it.",
    ripples:[
      {category:"Grameen Model",detail:"Without Grameen Bank's success, microfinance remains theory. Other countries don't have model to copy."},
      {category:"Women's Empowerment",detail:"Grameen focused on women borrowers. Without this model, women's economic empowerment develops differently."},
      {category:"Development Economics",detail:"The idea that the poor are creditworthy takes longer to establish. Development policy focuses elsewhere."},
      {category:"Social Enterprise",detail:"Yunus's concept of social business is less developed. Impact investing has different origins."}
    ],
    timeline:[
      {year:1976,happened:"Yunus begins lending to poor in Bangladesh",alternate:"Microfinance remains informal, unscalable"},
      {year:1983,happened:"Grameen Bank formally established",alternate:"No institutional model; microfinance develops later"},
      {year:2006,happened:"Yunus wins Nobel Peace Prize",alternate:"Microfinance less globally recognized"},
      {year:2020,happened:"Microfinance: $100B+ industry",alternate:"Industry smaller or develops later"}
    ],
    impact:{lives:"Millions lifted from poverty",econ:"Microfinance: $100B+ industry",cultural:"Banking for the poor",reach:"Developing world",timeline:"Microfinance develops differently"}},
  
  // MORE FINANCE & ECONOMICS
  {id:"buffett",name:"Warren Buffett",born:1930,died:null,cat:"finance",field:"Investment",
    quote:"Be fearful when others are greedy, and greedy when others are fearful.",
    contributions:["Value investing mastery","Berkshire Hathaway empire","Giving Pledge founder","Financial wisdom popularization"],
    r:0.45,reasoning:"Value investing came from Graham. Others practice it successfully. Buffett's specific track record is extraordinary but others have done well. His philanthropic influence may be more unique than his investing.",
    counterfactual:"Without Buffett, value investing still exists — Ben Graham invented it, and others practice it successfully. But Buffett's extraordinary track record over 60+ years proved the strategy works better than academic theory suggested. His folksy wisdom made complex investing accessible. The Giving Pledge, convincing billionaires to donate half their wealth, might not exist. Berkshire Hathaway doesn't become the unique conglomerate it is.",
    ripples:[
      {category:"Value Investing Proof",detail:"Without Buffett's track record, value investing remains more theoretical. Different proof points, different investment culture."},
      {category:"Giving Pledge",detail:"Without Buffett co-founding it with Gates, billionaire philanthropy might not have this specific commitment mechanism."},
      {category:"Investment Culture",detail:"Buffett's annual letters educated a generation. Without them, financial literacy develops differently."},
      {category:"Berkshire Hathaway",detail:"The specific conglomerate — GEICO, See's Candies, etc. — doesn't exist. Different corporate structure."}
    ],
    timeline:[
      {year:1965,happened:"Buffett takes control of Berkshire Hathaway",alternate:"Value investing continues without this specific vehicle"},
      {year:1990,happened:"Buffett becomes billionaire; wisdom popularized",alternate:"Different investor becomes the 'Oracle'"},
      {year:2010,happened:"Giving Pledge launched with Gates",alternate:"Billionaire philanthropy pledge might not exist"},
      {year:2024,happened:"Buffett's track record still best ever",alternate:"Value investing proven by other examples"}
    ],
    impact:{lives:"Charitable giving movement",econ:"$100B+ charitable commitment",cultural:"Patient capital model",reach:"Global finance",timeline:"Value investing continues without him"}},
  {id:"bezos",name:"Jeff Bezos",born:1964,died:null,cat:"finance",field:"E-commerce & Space",
    quote:"Your brand is what other people say about you when you're not in the room.",
    contributions:["Amazon creation","E-commerce revolution","Blue Origin","Washington Post owner"],
    r:0.50,reasoning:"E-commerce was coming. Others were building online retail. Bezos's specific execution — ruthless focus, long-term thinking — made Amazon dominant. But some e-commerce giant would have emerged.",
    counterfactual:"Without Bezos, e-commerce still happens — the technology enabled it, and others were building online retail. But Amazon's specific dominance might not occur. Bezos's particular genius was long-term thinking: accepting losses for years to build infrastructure, AWS emerging from internal needs, the relentless focus on customer experience. A different company wins e-commerce, possibly with different model — higher margins, less infrastructure investment. The cloud might develop differently without AWS.",
    ripples:[
      {category:"E-commerce Dominance",detail:"Some company wins online retail, but possibly more fragmented. eBay or Walmart might dominate instead."},
      {category:"AWS and Cloud",detail:"Cloud computing develops anyway, but AWS specifically might not exist. Different cloud architecture."},
      {category:"Delivery Expectations",detail:"Next-day delivery might not become standard. Different consumer expectations."},
      {category:"Labor Practices",detail:"Different e-commerce winner might treat warehouse workers differently. Amazon's labor practices might not dominate."}
    ],
    timeline:[
      {year:1994,happened:"Bezos founds Amazon",alternate:"E-commerce develops via other companies; more fragmented"},
      {year:2006,happened:"AWS launches; cloud computing begins",alternate:"Cloud develops but with different architecture"},
      {year:2015,happened:"Amazon becomes most valuable retailer",alternate:"Different company dominates retail; possibly less concentrated"},
      {year:2024,happened:"Amazon in everything; Bezos in space",alternate:"E-commerce and space both develop but differently"}
    ],
    impact:{lives:"Consumer behavior transformed",econ:"$2T+ company value",cultural:"Next-day delivery expectation",reach:"Global commerce",timeline:"E-commerce develops via others, possibly less dominant"}},
  {id:"zuckerberg",name:"Mark Zuckerberg",born:1984,died:null,cat:"finance",field:"Technology & Social Media",
    quote:"Move fast and break things.",
    contributions:["Facebook/Meta creation","Social networking dominance","Instagram/WhatsApp acquisitions","Metaverse pursuit"],
    r:0.55,reasoning:"Social networking was emerging. Friendster, MySpace existed. Zuckerberg's specific choices — college-only launch, real names, acquisition strategy — built dominance. But social networks were coming regardless.",
    counterfactual:"Without Zuckerberg, social networking still emerges — Friendster and MySpace proved the demand existed. But Facebook's specific dominance might not happen. Zuckerberg's key decisions — starting college-only for exclusivity, requiring real names, the aggressive acquisition of Instagram and WhatsApp — built monopoly power. Social networking might be more fragmented: MySpace for music, LinkedIn for professionals, regional networks. The concentration of social media in one company might not occur.",
    ripples:[
      {category:"Social Media Concentration",detail:"Without Facebook's dominance, social media is more fragmented. Different platforms for different purposes."},
      {category:"Real Name Policy",detail:"Anonymous social networks might dominate instead. Different online identity norms."},
      {category:"Acquisition Strategy",detail:"Instagram and WhatsApp remain independent. Different social media landscape."},
      {category:"Platform Power",detail:"Without Facebook's reach, social media's political influence is distributed differently."}
    ],
    timeline:[
      {year:2004,happened:"Facebook founded at Harvard",alternate:"Social networking develops via MySpace or others"},
      {year:2012,happened:"Facebook acquires Instagram",alternate:"Instagram remains independent; different competitive landscape"},
      {year:2014,happened:"Facebook acquires WhatsApp",alternate:"WhatsApp remains independent; messaging more fragmented"},
      {year:2024,happened:"Meta dominates social; pursues metaverse",alternate:"Social media more fragmented; different VR development"}
    ],
    impact:{lives:"3B+ users connected",econ:"$1T+ market cap",cultural:"Social media age",reach:"Global",timeline:"Social networking via others, possibly more fragmented"}},
  {id:"musk",name:"Elon Musk",born:1971,died:null,cat:"finance",field:"Technology & Space",
    quote:"When something is important enough, you do it even if the odds are not in your favor.",
    contributions:["Tesla electric vehicles","SpaceX reusable rockets","Neuralink, Boring Company","X/Twitter acquisition"],
    r:0.40,reasoning:"Electric cars were coming. Space launch was privatizing. But Musk's specific willingness to bet everything multiple times, and his engineering-first approach, accelerated timelines significantly. Others would have gotten there eventually.",
    counterfactual:"Without Musk, electric vehicles and commercial space both develop — the technology was advancing and others were working on both. But Musk accelerated timelines by 5-10 years through sheer will: Tesla proved EVs could be desirable, not just practical; SpaceX proved rockets could land and be reused. Without this acceleration, climate transition is slower, space access more expensive longer. Others eventually succeed, but later.",
    ripples:[
      {category:"Electric Vehicle Adoption",detail:"EVs come later or are less desirable. Legacy automakers dominate the transition. Climate progress slower."},
      {category:"Reusable Rockets",detail:"Commercial space develops but more expensively. Space access for others (NASA, other companies) costs more."},
      {category:"Startup Culture",detail:"The model of CEO as chief engineer, willing to risk everything, is less prominent."},
      {category:"Twitter/X",detail:"Twitter continues as independent company or is acquired by someone else. Different platform evolution."}
    ],
    timeline:[
      {year:2008,happened:"Tesla Roadster proves EVs can be cool",alternate:"EVs remain utilitarian; slower adoption"},
      {year:2015,happened:"SpaceX lands rocket booster",alternate:"Reusable rockets come later; space access more expensive"},
      {year:2020,happened:"Tesla most valuable automaker",alternate:"EV transition led by legacy automakers; slower"},
      {year:2024,happened:"SpaceX dominates commercial launch",alternate:"NASA and others pay more for space access"}
    ],
    impact:{lives:"EV adoption accelerated",econ:"Space launch costs down 90%",cultural:"Tech CEO as celebrity",reach:"Global",timeline:"EVs and space 5-10 years behind"}},
  {id:"ricardo",name:"David Ricardo",born:1772,died:1823,cat:"finance",field:"Economics",
    quote:"The interest of the landlord is always opposed to the interest of every other class in the community.",
    contributions:["Comparative advantage theory","Labor theory of value","Trade theory foundation","Classical economics"],
    r:0.40,reasoning:"Ricardo's comparative advantage remains fundamental to trade theory. But economics was developing with multiple contributors. His specific formulations were influential but Smith and others laid groundwork.",
    counterfactual:"Without Ricardo, classical economics still develops — Smith laid the foundation, and many were contributing. But Ricardo's specific concept of comparative advantage might not be formulated so clearly. The argument that countries benefit from trade even if one is more efficient at everything — this counterintuitive insight might take longer to articulate. Free trade arguments would be weaker; protectionism might be more intellectually respectable.",
    ripples:[
      {category:"Trade Theory",detail:"Comparative advantage might not be articulated so elegantly. Free trade arguments are weaker intellectually."},
      {category:"Protectionism",detail:"Without clear theoretical case for free trade, protectionist arguments might prevail more often."},
      {category:"Labor Theory of Value",detail:"Marx built on Ricardo's labor theory. Without Ricardo, Marx's economics might look different."},
      {category:"Economic Method",detail:"Ricardo's abstract modeling approach influenced how economics is done. Different methodology might dominate."}
    ],
    timeline:[
      {year:1817,happened:"Principles of Political Economy published",alternate:"Trade theory develops more slowly; comparative advantage articulated later"},
      {year:1846,happened:"Corn Laws repealed partly due to Ricardian arguments",alternate:"British protectionism lasts longer without clear free trade theory"},
      {year:1867,happened:"Marx's Capital builds on Ricardo",alternate:"Marx's economics built on different foundations"},
      {year:2024,happened:"Comparative advantage still taught in Econ 101",alternate:"Different formulation of trade benefits, if any"}
    ],
    impact:{lives:"Global trade theory",econ:"Free trade arguments",cultural:"Economic analysis method",reach:"Global economics",timeline:"Trade theory develops via others"}},
  {id:"schumpeter",name:"Joseph Schumpeter",born:1883,died:1950,cat:"finance",field:"Economics",
    quote:"The process of Creative Destruction is the essential fact about capitalism.",
    contributions:["Creative destruction concept","Entrepreneurship theory","Business cycles analysis","Innovation economics"],
    r:0.35,reasoning:"His concept of creative destruction changed how we think about capitalism and innovation. Others wrote about business cycles; Schumpeter's specific framework was influential and prescient.",
    counterfactual:"Without Schumpeter, economics still develops — business cycles were studied by many. But his specific framework is missing: creative destruction, the entrepreneur as hero, innovation as the driver of capitalism. Without this, Silicon Valley's ideology is different. The celebration of 'disruption' doesn't have its intellectual foundation. Capitalism is understood more statically, less dynamically.",
    ripples:[
      {category:"Disruption Ideology",detail:"Without 'creative destruction,' Silicon Valley's ideology is different. 'Disruption' might not be celebrated."},
      {category:"Entrepreneurship",detail:"The entrepreneur as economic hero is weaker as concept. Business culture differs."},
      {category:"Innovation Economics",detail:"The study of innovation as central to capitalism develops differently or later."},
      {category:"Understanding Capitalism",detail:"Capitalism understood more statically. The dynamic, ever-changing nature is less emphasized."}
    ],
    timeline:[
      {year:1911,happened:"Theory of Economic Development published",alternate:"Entrepreneurship not theorized as economic engine"},
      {year:1942,happened:"Capitalism, Socialism and Democracy; creative destruction concept",alternate:"No 'creative destruction' framework; different understanding of capitalism"},
      {year:1990,happened:"Schumpeterian economics influential in growth theory",alternate:"Innovation economics built on different foundations"},
      {year:2024,happened:"'Disruption' ubiquitous in business culture",alternate:"Different vocabulary; possibly less celebration of disruption"}
    ],
    impact:{lives:"Innovation understanding",econ:"Entrepreneurship economics",cultural:"Disruption as progress",reach:"Global economics",timeline:"Innovation economics develops differently"}},
  {id:"hayek",name:"Friedrich Hayek",born:1899,died:1992,cat:"finance",field:"Economics",
    quote:"The curious task of economics is to demonstrate to men how little they really know about what they imagine they can design.",
    contributions:["Road to Serfdom","Knowledge problem in planning","Austrian economics","Nobel Prize 1974"],
    r:0.35,reasoning:"Hayek's critique of central planning was influential, especially after Soviet collapse. Mises made similar arguments. Hayek's popular writing (Road to Serfdom) reached broader audiences.",
    counterfactual:"Without Hayek, critiques of central planning still exist — Mises, his teacher, made similar arguments. But Hayek's specific contribution — the knowledge problem, the argument that central planners can never have enough information — is missing in its clearest form. The Road to Serfdom doesn't galvanize opposition to socialism. Thatcher and Reagan have different intellectual heroes or no such figure. Market liberalism might be weaker intellectually.",
    ripples:[
      {category:"Thatcher/Reagan",detail:"Road to Serfdom influenced both leaders. Without Hayek, their intellectual foundations differ."},
      {category:"Knowledge Problem",detail:"The argument that markets process information better than planners is articulated differently or later."},
      {category:"Soviet Collapse Interpretation",detail:"Hayek seemed vindicated by 1989. Without him, the collapse is interpreted through different framework."},
      {category:"Neoliberalism",detail:"The neoliberal turn of the 1980s has different intellectual foundations or doesn't happen the same way."}
    ],
    timeline:[
      {year:1944,happened:"Road to Serfdom published",alternate:"Critique of planning less popular; no accessible anti-socialist book"},
      {year:1974,happened:"Hayek wins Nobel; vindication after decades of marginalization",alternate:"Austrian economics remains marginal"},
      {year:1979,happened:"Thatcher cites Hayek; market reforms begin",alternate:"British politics has different intellectual foundations"},
      {year:1991,happened:"Soviet collapse; Hayek seems vindicated",alternate:"Collapse interpreted through different framework"}
    ],
    impact:{lives:"Economic policy globally",econ:"Market economics advocacy",cultural:"Thatcher/Reagan intellectual foundation",reach:"Global",timeline:"Market economics arguments similar via others"}},

  // EXPLORATION
  {id:"columbus",name:"Christopher Columbus",born:1451,died:1506,cat:"exploration",field:"Exploration",
    quote:"By prevailing over all obstacles and distractions, one may unfailingly arrive at his chosen goal.",
    contributions:["1492 Americas contact","Columbian Exchange initiation","Atlantic colonization catalyst","Transformed global demographics"],
    r:0.80,reasoning:"Europeans were probing the Atlantic. Portuguese were sailing down Africa. Someone would have reached the Americas soon. Columbus was first, but contact was inevitable within a decade or two.",
    counterfactual:"Without Columbus, the Americas are still 'discovered' by Europeans within 10-20 years — the Portuguese were sailing down Africa, the Spanish were probing the Atlantic, and Cabot reached North America in 1497 anyway. But the timing matters: every decade of delay means different indigenous populations, different colonial patterns, different diseases spreading at different times. The Columbian Exchange still happens; the specific demographics and power dynamics might differ.",
    ripples:[
      {category:"Timing of Contact",detail:"A decade of delay means millions of indigenous people live or die differently. Disease patterns, resistance, survival rates all change."},
      {category:"Colonial Power",detail:"If Portuguese or English reach the Americas first, colonial patterns differ. Spanish empire might not dominate Central/South America."},
      {category:"Columbian Exchange",detail:"The exchange of crops, animals, diseases still happens but with different timing. Potatoes reach Europe later; smallpox reaches Americas later."},
      {category:"Historical Memory",detail:"Different 'discoverer' is celebrated or condemned. Different founding myth of the Americas."}
    ],
    timeline:[
      {year:1492,happened:"Columbus reaches Caribbean",alternate:"Americas still unknown to Europe for 5-20 more years"},
      {year:1494,happened:"Treaty of Tordesillas divides world",alternate:"Different colonial powers, different treaty, different division"},
      {year:1519,happened:"Cortés conquers Aztec Empire",alternate:"Conquest happens eventually; timing and conqueror might differ"},
      {year:1600,happened:"Millions dead from disease exchange",alternate:"Disease exchange still happens; timing changes specific outcomes"}
    ],
    impact:{lives:"Indigenous deaths: 90%; global population reshuffled",econ:"Global trade transformation",cultural:"'New World' concept",reach:"Americas, global",timeline:"Americas found within 10-20 years"}},
  {id:"armstrong",name:"Neil Armstrong",born:1930,died:2012,cat:"exploration",field:"Space Exploration",
    quote:"That's one small step for man, one giant leap for mankind.",
    contributions:["First Moon landing (1969)","'One small step' phrase","Apollo 11 commander","Space exploration symbol"],
    r:0.85,reasoning:"Armstrong was chosen partly by crew rotation. Aldrin was right behind him. Apollo trained many astronauts who could have commanded. The Moon landing was a program achievement, not individual.",
    counterfactual:"Without Armstrong, Aldrin walks on the moon first — he was right there. Or a different crew rotation puts different astronauts on Apollo 11. The specific phrase 'one small step for man' doesn't exist; different words are remembered. The Moon landing was a program achievement involving 400,000 people; any of dozens of astronauts could have commanded the mission. Armstrong's humility and reluctance to profit made him a particular kind of hero.",
    ripples:[
      {category:"First Words",detail:"'One small step for man' doesn't exist. Different phrase enters history. Different moment remembered."},
      {category:"Public Hero",detail:"Aldrin or another astronaut becomes the face of Apollo. Different personality, different public image."},
      {category:"Program Achievement",detail:"The Moon landing still happens on schedule. 400,000 people still made it happen."},
      {category:"Historical Memory",detail:"Different first moonwalker is celebrated. Different name in history books."}
    ],
    timeline:[
      {year:1969,happened:"Armstrong first on Moon",alternate:"Aldrin first, or different Apollo 11 crew entirely"},
      {year:1969,happened:"'One small step' broadcast globally",alternate:"Different words become iconic; different phrase in history"},
      {year:1972,happened:"Armstrong returns to private life",alternate:"Different astronaut handles fame differently; more or less public"},
      {year:2012,happened:"Armstrong dies as most famous astronaut",alternate:"Different person holds that distinction"}
    ],
    impact:{lives:"Inspired millions in STEM",econ:"Space industry: $400B+",cultural:"Humanity's cosmic reach",reach:"Global inspiration",timeline:"Aldrin or others within months"}},
  {id:"humboldt",name:"Alexander von Humboldt",born:1769,died:1859,cat:"exploration",field:"Scientific Exploration",
    quote:"The most dangerous worldview is the worldview of those who have not viewed the world.",
    contributions:["Scientific exploration model","Ecological thinking pioneer","Cosmos (popular science)","Influenced Darwin"],
    r:0.30,reasoning:"Humboldt invented scientific exploration. He directly influenced Darwin. His ecological thinking was ahead of his time. Others explored; none synthesized as he did.",
    counterfactual:"Without Humboldt, scientific exploration still happens — the era of expeditions was beginning. But Humboldt's unique synthesis — measuring everything, connecting phenomena across disciplines, seeing nature as interconnected whole — was personal genius. He directly influenced Darwin (who took Humboldt's books on the Beagle), Thoreau, Muir, and the entire tradition of ecological thinking. Without him, environmentalism might emerge later or differently.",
    ripples:[
      {category:"Darwin's Development",detail:"Darwin explicitly credited Humboldt as inspiration. Without Personal Narrative, the Beagle voyage is framed differently."},
      {category:"Ecological Thinking",detail:"The idea of nature as interconnected system — ecosystems — might emerge later without Humboldt's synthesis."},
      {category:"Popular Science",detail:"Cosmos was the most popular science book of its era. Without it, science communication develops differently."},
      {category:"Conservation",detail:"The American conservation movement drew on Humboldt. Muir and Thoreau were influenced. Without Humboldt, different origins."}
    ],
    timeline:[
      {year:1799,happened:"Humboldt begins South American expedition",alternate:"Scientific exploration continues but less synthetically"},
      {year:1807,happened:"Personal Narrative published; Darwin influenced",alternate:"Darwin has different inspiration; maybe delays Beagle voyage"},
      {year:1845,happened:"Cosmos begins publication",alternate:"No popular science masterwork; science communication develops differently"},
      {year:1859,happened:"Humboldt dies as most famous scientist",alternate:"Different figure defines scientific exploration"}
    ],
    impact:{lives:"Environmental science foundation",econ:"Scientific expeditions",cultural:"Nature writing",reach:"Global science",timeline:"Ecological thinking delayed"}},
  {id:"gagarin",name:"Yuri Gagarin",born:1934,died:1968,cat:"exploration",field:"Space Exploration",
    quote:"Orbiting Earth in the spaceship, I saw how beautiful our planet is.",
    contributions:["First human in space (1961)","108-minute orbit","Soviet space triumph","Space exploration symbol"],
    r:0.85,reasoning:"Soviet space program had multiple trained cosmonauts. The technological achievement was the program's, not individual. Gagarin was healthy, charismatic, and available. Someone was going to be first.",
    counterfactual:"Without Gagarin, another cosmonaut orbits Earth in April 1961 — Titov, Nelyubov, or another of the trained cosmonauts. The technological achievement was the program's. Gagarin was selected partly for charisma and humble background (perfect Soviet hero). Someone else becomes the symbol of human spaceflight. The 108-minute orbit still happens; different person is remembered.",
    ripples:[
      {category:"Soviet Symbol",detail:"Different cosmonaut becomes the face of Soviet space achievement. Different propaganda, different hero."},
      {category:"Space Race",detail:"The American response is the same — Kennedy's Moon speech was about program, not person."},
      {category:"Historical Memory",detail:"Different name is first in space. Different face represents the achievement."},
      {category:"Program Achievement",detail:"Korolev's engineering triumph is the same. Vostok 1 launches on schedule with different pilot."}
    ],
    timeline:[
      {year:1961,happened:"Gagarin orbits Earth",alternate:"Titov or another cosmonaut orbits instead"},
      {year:1961,happened:"'I saw how beautiful our planet is'",alternate:"Different words, different reflection on spaceflight"},
      {year:1968,happened:"Gagarin dies in plane crash",alternate:"Different cosmonaut's fate; different legacy"},
      {year:2011,happened:"Gagarin remains most famous cosmonaut",alternate:"Different name associated with first spaceflight"}
    ],
    impact:{lives:"Space race acceleration",econ:"Space program funding",cultural:"Human spaceflight",reach:"Global",timeline:"Another cosmonaut within days"}},
  
  // MORE EXPLORATION
  {id:"magellan",name:"Ferdinand Magellan",born:1480,died:1521,cat:"exploration",field:"Exploration",
    quote:"The Church says the earth is flat, but I know that it is round.",
    contributions:["First circumnavigation expedition","Pacific Ocean crossing","Global geography proven","Died in Philippines"],
    r:0.50,reasoning:"Circumnavigation was going to happen. The route was sought by multiple nations. Magellan's specific determination got one expedition through. But Spanish and Portuguese were racing; someone would have completed it.",
    counterfactual:"Without Magellan, circumnavigation still happens within decades — Spanish and Portuguese were racing for it. But Magellan's specific achievement was getting through the strait that bears his name: months of searching, mutiny suppressed, determination beyond reason. Another captain might have turned back. The Pacific crossing might have happened differently — possibly around Africa first, possibly later. The specific route and timing were his contribution.",
    ripples:[
      {category:"Timing",detail:"Circumnavigation delayed by years to decades. Different captain, different route, different timing."},
      {category:"Strait of Magellan",detail:"Someone else finds and names it. Different name, different circumstances of discovery."},
      {category:"Pacific Knowledge",detail:"The vastness of the Pacific — Magellan's crew nearly starved crossing it — is learned differently."},
      {category:"Spanish Empire",detail:"Spanish claims in the Pacific develop differently. Philippines might be reached by different route."}
    ],
    timeline:[
      {year:1519,happened:"Magellan departs Seville",alternate:"Different expedition attempts circumnavigation; different route"},
      {year:1520,happened:"Strait of Magellan discovered after months of searching",alternate:"Strait found later by different explorer; different name"},
      {year:1521,happened:"Magellan killed in Philippines",alternate:"Different explorer, different death, different story"},
      {year:1522,happened:"Victoria returns; circumnavigation complete",alternate:"First circumnavigation comes later; different ship, different crew"}
    ],
    impact:{lives:"Global geography understood",econ:"Pacific trade routes",cultural:"World is one sphere",reach:"Global",timeline:"Circumnavigation within 20 years"}},
  {id:"cook",name:"James Cook",born:1728,died:1779,cat:"exploration",field:"Exploration",
    quote:"Ambition leads me not only farther than any other man has been before me, but as far as I think it possible for man to go.",
    contributions:["Pacific mapping","Australia discovery for Europe","Scurvy prevention methods","Scientific exploration model"],
    r:0.40,reasoning:"European powers were exploring the Pacific. Cook's systematic approach and scientific methods were distinctive. Others would have mapped the Pacific; Cook did it more thoroughly and with better health outcomes.",
    counterfactual:"Without Cook, the Pacific is still mapped — French, Dutch, and Spanish were all exploring. But Cook's specific contribution was methodology: systematic charting, scientific observation, scurvy prevention through diet. His three voyages mapped more Pacific coastline than all predecessors combined. Australia might be 'discovered' by the French (who arrived weeks after Cook). The model of scientific exploration — bringing naturalists, making observations — might develop differently.",
    ripples:[
      {category:"Australia",detail:"Without Cook, Australia is 'discovered' by the French or later British expedition. Different colonization history."},
      {category:"Pacific Mapping",detail:"The Pacific is mapped more slowly, less accurately. Navigation remains more dangerous longer."},
      {category:"Scurvy",detail:"Cook's dietary methods prevented scurvy. Without his example, naval health develops more slowly."},
      {category:"Scientific Exploration",detail:"The model of exploration with naturalists and scientists develops differently."}
    ],
    timeline:[
      {year:1768,happened:"First voyage begins; scientific exploration model",alternate:"Pacific mapped by less methodical expeditions"},
      {year:1770,happened:"Cook charts Australia's east coast",alternate:"French expedition likely claims Australia"},
      {year:1779,happened:"Cook killed in Hawaii",alternate:"Different explorer; different circumstances"},
      {year:2024,happened:"Cook remembered as greatest explorer of era",alternate:"Different figures dominate exploration history"}
    ],
    impact:{lives:"Pacific colonization",econ:"British Pacific trade",cultural:"Scientific exploration",reach:"Pacific, global",timeline:"Pacific mapping takes longer"}},
  {id:"amundsen",name:"Roald Amundsen",born:1872,died:1928,cat:"exploration",field:"Polar Exploration",
    quote:"Adventure is just bad planning.",
    contributions:["First South Pole (1911)","Northwest Passage navigation","Polar exploration expertise","Beat Scott by 34 days"],
    r:0.50,reasoning:"Scott was also racing to the Pole. Amundsen's careful planning beat Scott's suffering. The Pole would have been reached regardless. Amundsen's methods were superior but the achievement was coming.",
    counterfactual:"Without Amundsen, Scott reaches the South Pole first — and survives, probably. Scott's party died partly because they arrived exhausted, 34 days after Amundsen, and found the Norwegian flag already there. The psychological blow of losing the race contributed to their fatal decisions. Without Amundsen, Scott wins, becomes a hero of success rather than heroic failure. The lesson of polar exploration — careful planning beats suffering — is learned differently.",
    ripples:[
      {category:"Scott's Fate",detail:"Without Amundsen, Scott reaches the Pole first and probably lives. Hero of success, not martyrdom."},
      {category:"British Identity",detail:"Scott's death became central to British identity — noble failure. Without Amundsen, different national mythology."},
      {category:"Exploration Methods",detail:"Amundsen's meticulous planning versus Scott's man-hauling became a parable. Without the contrast, different lessons."},
      {category:"Norwegian Pride",detail:"Norway's greatest exploration achievement doesn't exist. Different national heroes."}
    ],
    timeline:[
      {year:1911,happened:"Amundsen reaches South Pole first",alternate:"Scott reaches Pole first; probably survives return journey"},
      {year:1912,happened:"Scott dies; noble failure mythology",alternate:"Scott returns as hero; different British narrative"},
      {year:1928,happened:"Amundsen dies in Arctic rescue",alternate:"Different Norwegian explorer remembered for polar achievement"},
      {year:2024,happened:"Amundsen remembered for competence over drama",alternate:"Scott dominates polar exploration memory"}
    ],
    impact:{lives:"Exploration methodology",econ:"Limited direct impact",cultural:"Competence vs. heroism",reach:"Global exploration",timeline:"South Pole reached via Scott"}},
  {id:"shackleton",name:"Ernest Shackleton",born:1874,died:1922,cat:"exploration",field:"Polar Exploration",
    quote:"Difficulties are just things to overcome, after all.",
    contributions:["Endurance expedition survival","Antarctic exploration","Leadership under pressure","All men saved"],
    r:0.30,reasoning:"Shackleton's achievement was leadership, not exploration. When Endurance was crushed, his decisions saved all 27 men over 22 months. Another leader might have lost them. His specific character was irreplaceable in that situation.",
    counterfactual:"Without Shackleton, the Endurance expedition probably ends in disaster. When the ship was crushed by ice, survival required 22 months of perfect leadership decisions: maintaining morale on the ice, the 800-mile open boat journey to South Georgia, crossing unmapped mountains. These decisions were Shackleton's character made manifest. A different leader — more rigid, less attuned to men's morale, less willing to take calculated risks — likely loses some or all of the 27 men. Shackleton's failure as explorer became the greatest leadership story ever told.",
    ripples:[
      {category:"Crew Survival",detail:"Without Shackleton's specific decisions, some or all of the 27 men die. The expedition becomes tragedy, not triumph."},
      {category:"Leadership Model",detail:"The Shackleton model of leadership under crisis — prioritizing morale, adapting constantly — doesn't exist as clearly."},
      {category:"Antarctic History",detail:"The Endurance story is remembered as disaster rather than miraculous survival."},
      {category:"Expedition Planning",detail:"Without Shackleton's example, later expeditions might not emphasize crew cohesion and leadership as strongly."}
    ],
    timeline:[
      {year:1914,happened:"Endurance departs for Antarctica",alternate:"Expedition happens with different leader; same ice conditions"},
      {year:1915,happened:"Ship crushed; Shackleton keeps men alive on ice",alternate:"Different leader; morale collapses; men die"},
      {year:1916,happened:"800-mile boat journey; all men rescued",alternate:"Without Shackleton's navigation and leadership, journey fails"},
      {year:1922,happened:"Shackleton dies; legacy as leader not explorer",alternate:"Without survival story, Shackleton remembered as failed explorer"}
    ],
    impact:{lives:"27 men directly; leadership model",econ:"Exploration legend",cultural:"Leadership case study",reach:"Global",timeline:"Crew probably dies under another leader"}},
  {id:"leakey",name:"Louis Leakey",born:1903,died:1972,cat:"exploration",field:"Paleoanthropology",
    quote:"Nothing I've ever done has given me more joy and reward than seeing what discoveries were made by the three people I trained.",
    contributions:["East African hominid fossils","Mentored Goodall, Fossey, Galdikas","Proved human African origins","Olduvai Gorge excavations"],
    r:0.35,reasoning:"The fossils were in the ground; someone would have found them. But Leakey's decades of work and mentorship — training Goodall, Fossey, Galdikas — created a research tradition. His family continued discoveries.",
    counterfactual:"Without Leakey, human origins are still discovered in Africa — the fossils were waiting. But Leakey's decades at Olduvai Gorge, his insistence on Africa as humanity's cradle, his mentorship of Goodall, Fossey, and Galdikas — these created a research tradition. Without him, the 'Trimates' might never have studied apes. The timing of key discoveries would differ. Human origins might have been understood a decade later.",
    ripples:[
      {category:"African Origins",detail:"Human African origins proved later by different researchers. Different timeline of understanding."},
      {category:"Primate Studies",detail:"Goodall, Fossey, Galdikas all trained by Leakey. Without him, great ape studies develop differently."},
      {category:"Fossil Record",detail:"Key fossils found by different researchers at different times. Different names attached to discoveries."},
      {category:"Research Dynasty",detail:"The Leakey family continued making discoveries. Without Louis, different family or institution dominates."}
    ],
    timeline:[
      {year:1959,happened:"Mary Leakey finds Zinjanthropus",alternate:"Hominid fossils found later by different researchers"},
      {year:1960,happened:"Leakey sends Jane Goodall to Gombe",alternate:"Chimpanzee research begins differently; different researcher"},
      {year:1967,happened:"Dian Fossey begins gorilla research",alternate:"Gorilla research develops from different origins"},
      {year:2024,happened:"Leakey family continues research",alternate:"Different institution dominates paleoanthropology"}
    ],
    impact:{lives:"Human origins understanding",econ:"Paleoanthropology field",cultural:"Out of Africa thesis",reach:"Global",timeline:"Human evolution understood later"}},
  {id:"sacagawea",name:"Sacagawea",born:1788,died:1812,cat:"exploration",field:"Exploration",
    quote:"[No authenticated quotes survive]",
    contributions:["Lewis and Clark guide","Shoshone translator","Symbol of Native contribution","Mother during expedition"],
    r:0.45,reasoning:"The Lewis and Clark expedition had other guides. Sacagawea's specific contributions — Shoshone language, local knowledge, diplomatic presence — were valuable but the expedition might have succeeded differently.",
    counterfactual:"Without Sacagawea, Lewis and Clark still succeed — they had other guides, they were determined, the route was passable. But her specific contributions mattered: Shoshone translation when they needed horses, local plant knowledge for survival, her presence signaling peaceful intentions. The expedition might have had more violent encounters with Native peoples, might have taken longer. Her symbolic importance — a young mother with an infant crossing the continent — wouldn't exist.",
    ripples:[
      {category:"Expedition Success",detail:"Lewis and Clark still succeed, but with more difficulty. Possible violent encounters without Sacagawea's diplomatic presence."},
      {category:"Shoshone Horses",detail:"Without Sacagawea's translation, acquiring horses from Shoshone is harder or impossible."},
      {category:"American Symbol",detail:"Sacagawea became a symbol of Native American contribution. Without her, different figure or no figure fills this role."},
      {category:"Women's Symbolism",detail:"A young mother crossing the continent became powerful symbolism. This story doesn't exist."}
    ],
    timeline:[
      {year:1805,happened:"Sacagawea guides expedition over Rockies",alternate:"Expedition proceeds more slowly; possible hostile encounters"},
      {year:1805,happened:"Translates with Shoshone; horses acquired",alternate:"Expedition struggles without horses; different route possible"},
      {year:1806,happened:"Expedition returns; Sacagawea's contribution noted",alternate:"Different guides credited; different narrative"},
      {year:2000,happened:"Sacagawea on dollar coin",alternate:"Different figure represents westward expansion"}
    ],
    impact:{lives:"Expedition success",econ:"Western US expansion",cultural:"Native American symbol",reach:"United States",timeline:"Expedition harder but possible"}},
  {id:"heyerdahl",name:"Thor Heyerdahl",born:1914,died:2002,cat:"exploration",field:"Experimental Archaeology",
    quote:"Progress is man's ability to complicate simplicity.",
    contributions:["Kon-Tiki Pacific crossing","Ra Atlantic crossings","Diffusionist theory testing","Popular archaeology"],
    r:0.40,reasoning:"Heyerdahl's raft expeditions showed ancient peoples could have made ocean crossings. His diffusionist theories were largely wrong, but his experimental method inspired others. The specific expeditions were personal achievements.",
    counterfactual:"Without Heyerdahl, experimental archaeology develops more slowly. His Kon-Tiki voyage — crossing the Pacific on a balsa raft to prove Polynesian settlement could have come from South America — captured global imagination. He was wrong about the direction of migration, but right that the voyage was possible. Without him, the methodology of testing ancient capabilities through recreation might not become mainstream. Archaeology remains more theoretical.",
    ripples:[
      {category:"Experimental Method",detail:"The idea of testing ancient capabilities by recreating them develops differently without Kon-Tiki's example."},
      {category:"Public Archaeology",detail:"Heyerdahl made archaeology popular adventure. Without him, the field is more academic, less publicly engaging."},
      {category:"Migration Theories",detail:"Diffusionist theories tested differently. Perhaps more speculation, less empirical testing."},
      {category:"Adventure Science",detail:"The model of scientist-as-adventurer is weaker without Heyerdahl."}
    ],
    timeline:[
      {year:1947,happened:"Kon-Tiki crosses Pacific",alternate:"Ancient Pacific migration remains theoretical speculation"},
      {year:1970,happened:"Ra II crosses Atlantic",alternate:"Atlantic migration theories untested by recreation"},
      {year:1990,happened:"DNA proves Heyerdahl wrong about Polynesian origins",alternate:"Migration debate resolved by same DNA evidence"},
      {year:2024,happened:"Experimental archaeology established field",alternate:"Field might be smaller without Heyerdahl's inspiration"}
    ],
    impact:{lives:"Archaeology popularization",econ:"Adventure tourism",cultural:"Experimental archaeology",reach:"Global",timeline:"Diffusionism tested differently"}},

  // SOCIAL MOVEMENTS
  {id:"mlk",name:"Martin Luther King Jr.",born:1929,died:1968,cat:"social",field:"Civil Rights",
    quote:"Injustice anywhere is a threat to justice everywhere.",
    contributions:["I Have a Dream speech","Nonviolent resistance leadership","Civil Rights Act catalyst","Nobel Peace Prize 1964"],
    r:0.35,reasoning:"The civil rights movement had many leaders. Movement would have continued without King. But his specific voice — rhetorical genius, theological grounding — shaped how the movement was received.",
    counterfactual:"Without King, the civil rights movement still happens — the structural conditions, the NAACP, SNCC, CORE, countless local leaders all existed. But King's specific gifts — rhetorical genius, theological framing, appeal to white conscience — shaped how the movement succeeded. Without his 'I Have a Dream' speech, the March on Washington is remembered differently. Without his nonviolent philosophy, the movement might have turned violent earlier, provoking harsher backlash.",
    ripples:[
      {category:"Movement Strategy",detail:"Without King's nonviolent philosophy as organizing principle, different tactics might dominate. Malcolm X's approach might become mainstream."},
      {category:"White Opinion",detail:"King's rhetorical appeal to American ideals moved white opinion. Without this, civil rights might take longer or face more violent opposition."},
      {category:"American Memory",detail:"No 'I Have a Dream' speech. The civil rights movement is remembered differently. Different quotes define the era."},
      {category:"International Image",detail:"King's Nobel Prize gave the movement international legitimacy. Without this, Cold War dynamics around civil rights differ."}
    ],
    timeline:[
      {year:1955,happened:"King leads Montgomery Bus Boycott",alternate:"Boycott still happens; different leader emerges"},
      {year:1963,happened:"I Have a Dream speech",alternate:"March on Washington has different character; different defining moment"},
      {year:1964,happened:"Civil Rights Act passed; King wins Nobel",alternate:"Civil Rights Act still passes; different timeline, different leader credited"},
      {year:1968,happened:"King assassinated; riots follow",alternate:"Without King, movement already more fragmented; different trajectory"}
    ],
    impact:{lives:"40M+ African Americans",econ:"Economic integration",cultural:"American moral conscience",reach:"United States, global inspiration",timeline:"Civil rights slower, possibly violent"}},
  {id:"tubman",name:"Harriet Tubman",born:1822,died:1913,cat:"social",field:"Abolition",
    quote:"I freed a thousand slaves. I could have freed a thousand more if only they knew they were slaves.",
    contributions:["Underground Railroad conductor","70+ people personally rescued","Union Army scout","Resistance symbol"],
    r:0.40,reasoning:"The Underground Railroad had many conductors. Tubman's unique contribution was personal courage and symbolic power — an escaped slave returning repeatedly to the South.",
    counterfactual:"Without Tubman, the Underground Railroad still operates — hundreds of conductors helped thousands escape. But Tubman's specific contribution was symbolic and inspirational: an escaped slave who returned to the South 13 times, risking death to free others. 'Moses' became a legend that proved Black agency and courage. Without her, the abolitionist movement has different symbols, different proof of what was possible.",
    ripples:[
      {category:"Abolitionist Symbolism",detail:"Without Tubman as 'Moses,' the Underground Railroad has different legends. Abolitionist propaganda uses different examples."},
      {category:"Civil War Service",detail:"Tubman served as Union spy and scout. Without her intelligence work, specific raids and operations don't happen."},
      {category:"Historical Memory",detail:"Without Tubman, women's role in abolition is remembered differently. Black women's resistance has different icon."},
      {category:"70+ Lives",detail:"The specific 70+ people she freed don't escape. Their descendants don't exist in the same way."}
    ],
    timeline:[
      {year:1849,happened:"Tubman escapes slavery",alternate:"Escape happens; she doesn't return"},
      {year:1851,happened:"Tubman's first rescue mission",alternate:"Underground Railroad continues without her; different conductors become famous"},
      {year:1863,happened:"Combahee River Raid frees 700+",alternate:"Without Tubman's intelligence, raid doesn't happen or is less successful"},
      {year:1913,happened:"Tubman dies as legend",alternate:"Different symbols define abolition and Black resistance"}
    ],
    impact:{lives:"70+ directly; symbolism for millions",econ:"Abolition movement",cultural:"Black resistance icon",reach:"United States",timeline:"Underground Railroad less legendary"}},
  {id:"douglass",name:"Frederick Douglass",born:1818,died:1895,cat:"social",field:"Abolition & Civil Rights",
    quote:"If there is no struggle, there is no progress.",
    contributions:["Autobiography transformed opinion","Advised President Lincoln","Universal suffrage advocate","Escaped slavery to leadership"],
    r:0.30,reasoning:"Douglass's autobiography was the most powerful anti-slavery document of its era. His rhetorical skill in debates was unmatched. Only Douglass could embody the argument so completely.",
    counterfactual:"Without Douglass, the abolitionist movement still exists — Garrison, Tubman, countless others were active. But Douglass's unique contribution was embodiment: an escaped slave whose brilliance disproved every racist argument about Black capacity. His Narrative was the most powerful anti-slavery document written. His advice to Lincoln shaped the war's meaning. Without him, abolitionism has weaker intellectual force.",
    ripples:[
      {category:"Abolitionist Argument",detail:"Without Douglass's Narrative and speeches, the intellectual case against slavery is weaker. Racist arguments less effectively countered."},
      {category:"Lincoln's Decisions",detail:"Douglass pushed Lincoln toward emancipation and Black enlistment. Without this influence, these decisions might come later or look different."},
      {category:"Post-War Rights",detail:"Douglass advocated for voting rights and equal citizenship. Without his voice, Reconstruction might proceed differently."},
      {category:"Self-Made Man",detail:"Douglass embodied the 'self-made man' — escaping slavery to become advisor to presidents. Different myth without him."}
    ],
    timeline:[
      {year:1845,happened:"Narrative of Frederick Douglass published",alternate:"Anti-slavery literature has different peak example"},
      {year:1863,happened:"Douglass meets Lincoln; pushes for Black troops",alternate:"Black enlistment might be delayed; war proceeds differently"},
      {year:1870,happened:"15th Amendment; Douglass celebrates and critiques",alternate:"Different voices define Reconstruction"},
      {year:1895,happened:"Douglass dies; legacy established",alternate:"Abolition remembered differently; different founding father"}
    ],
    impact:{lives:"Abolition movement catalyst",econ:"Post-slavery possibilities",cultural:"Self-made man narrative",reach:"United States",timeline:"Abolition movement weaker voice"}},
  {id:"parks",name:"Rosa Parks",born:1913,died:2005,cat:"social",field:"Civil Rights",
    quote:"I would like to be remembered as a person who wanted to be free.",
    contributions:["Bus boycott catalyst","Resistance symbol","NAACP activist","'Mother of civil rights'"],
    r:0.65,reasoning:"Civil rights leaders planned a bus boycott and sought the right test case. Claudette Colvin refused months earlier but was deemed unsuitable. Parks was chosen. The movement was ready.",
    counterfactual:"Without Parks, the Montgomery Bus Boycott still happens — civil rights leaders were looking for a test case, and Claudette Colvin had refused to give up her seat months earlier. Parks was chosen because of her character and NAACP connections. Someone else becomes the symbol. The boycott still succeeds because the community was organized and ready. Parks became the symbol; the movement created the moment.",
    ripples:[
      {category:"Civil Rights Symbol",detail:"Claudette Colvin or another person becomes the face of the Montgomery boycott. Different person, same result, different memory."},
      {category:"Boycott Success",detail:"The boycott succeeds regardless — the organization was ready, the community was mobilized."},
      {category:"Historical Narrative",detail:"The story of an 'ordinary tired woman' might be different. The actual strategy behind the movement is told differently."},
      {category:"Parks's Life",detail:"Parks suffers unemployment and hardship because of her role. A different symbol bears this cost instead."}
    ],
    timeline:[
      {year:1943,happened:"Parks joins NAACP; begins activism",alternate:"NAACP builds same capacity with different members"},
      {year:1955,happened:"Parks refuses to give up seat; boycott begins",alternate:"Colvin or another person is test case; boycott begins similarly"},
      {year:1956,happened:"Supreme Court rules bus segregation unconstitutional",alternate:"Same legal victory; different catalyst remembered"},
      {year:2005,happened:"Parks dies; lies in state at Capitol",alternate:"Different person honored; same movement celebrated"}
    ],
    impact:{lives:"Sparked mass movement",econ:"Desegregation economics",cultural:"Individual courage narrative",reach:"United States",timeline:"Different catalyst emerges soon"}},
  {id:"toussaint",name:"Toussaint Louverture",born:1743,died:1803,cat:"social",field:"Revolution",
    quote:"I was born a slave, but nature gave me the soul of a free man.",
    contributions:["Haitian Revolution leader","Only successful slave revolt","Defeated Napoleon's forces","Global inspiration"],
    r:0.20,reasoning:"Slave revolts happened constantly but failed. Only in Haiti did one succeed. Toussaint's genius was military, political, and diplomatic. Without him, the revolution likely fails like all others.",
    counterfactual:"Without Toussaint, the Haitian Revolution almost certainly fails — like every other slave revolt in history. Toussaint's unique combination of military genius (defeating French, Spanish, and British forces), political skill (navigating between empires), and diplomatic acumen (keeping Haiti's economy functioning) made success possible. No other figure could have unified the enslaved, free people of color, and European powers into a path to independence. Haiti remains enslaved; the entire history of the Americas changes.",
    ripples:[
      {category:"Haitian Independence",detail:"Without Toussaint, the revolution fails. 500,000 people remain enslaved. The first Black republic doesn't exist."},
      {category:"Louisiana Purchase",detail:"Napoleon sells Louisiana partly because Haiti proved colonial overreach. Without Haitian independence, Napoleon keeps Louisiana longer."},
      {category:"Latin American Independence",detail:"Bolívar was sheltered by Haiti. Without Haitian independence, South American revolutions develop differently."},
      {category:"Global Inspiration",detail:"Haiti proved Black self-governance possible. Without this example, abolition movements worldwide are weaker."}
    ],
    timeline:[
      {year:1791,happened:"Haitian Revolution begins",alternate:"Revolution begins but fails like all other slave revolts"},
      {year:1794,happened:"Toussaint defeats Spanish and British",alternate:"Europeans crush rebellion; slavery continues"},
      {year:1801,happened:"Toussaint controls entire island",alternate:"No unified Haiti; colonial powers divide island"},
      {year:1804,happened:"Haiti declares independence (after Toussaint's death)",alternate:"No Haitian independence; slavery continues; Americas different"}
    ],
    impact:{lives:"500,000 Haitians freed",econ:"First free Black republic",cultural:"Proof of Black self-governance",reach:"Caribbean, Americas, Africa",timeline:"Haitian revolution fails without him"}},
  {id:"chavez",name:"César Chávez",born:1927,died:1993,cat:"social",field:"Labor Rights",
    quote:"Once social change begins, it cannot be reversed.",
    contributions:["United Farm Workers founder","Grape boycott","Nonviolent labor activism","Latino civil rights"],
    r:0.40,reasoning:"Agricultural workers had tried organizing and failed. Chávez's combination made UFW successful where others weren't. Latino labor activism would have existed but less effectively.",
    counterfactual:"Without Chávez, farm worker organizing continues — others tried before him. But Chávez's specific combination made UFW succeed where others failed: his nonviolent philosophy (learned from Gandhi through the civil rights movement), his consumer boycott strategy, his charismatic leadership. The grape boycott that changed the industry was his innovation. Without him, farm workers remain more exploited for longer; the Latino civil rights movement lacks its most visible figure.",
    ripples:[
      {category:"Farm Workers",detail:"UFW doesn't exist or is less effective. Farm workers remain more exploited; conditions improve more slowly."},
      {category:"Boycott Strategy",detail:"The consumer boycott as labor strategy is less proven. Different tactics dominate labor activism."},
      {category:"Latino Civil Rights",detail:"Chávez became a symbol for Latino activism. Without him, different figures or no central figure."},
      {category:"Nonviolent Labor Action",detail:"The fusion of civil rights nonviolence with labor organizing is weaker."}
    ],
    timeline:[
      {year:1962,happened:"UFW founded",alternate:"Farm worker organizing continues to fail"},
      {year:1965,happened:"Grape boycott begins",alternate:"No successful national boycott strategy"},
      {year:1975,happened:"California Agricultural Labor Relations Act",alternate:"Farm workers lack legislative protections"},
      {year:1993,happened:"Chávez dies; national mourning",alternate:"Different figure represents Latino labor movement"}
    ],
    impact:{lives:"Farm workers' conditions",econ:"Agricultural labor standards",cultural:"Latino civil rights",reach:"United States",timeline:"Farm worker movement weaker"}},
  
  // MORE SOCIAL MOVEMENTS
  {id:"emmeline",name:"Emmeline Pankhurst",born:1858,died:1928,cat:"social",field:"Suffrage",
    quote:"I would rather be a rebel than a slave.",
    contributions:["British suffragette leader","Militant tactics","WSPU founder","Women's vote achieved"],
    r:0.35,reasoning:"Suffrage movements existed before Pankhurst. Her specific contribution was militancy — direct action that forced attention. Peaceful suffragists were making progress; she accelerated through controversy.",
    counterfactual:"Without Pankhurst, British women's suffrage still happens — the suffragists were making progress through peaceful means. But Pankhurst's specific contribution was militancy: window-smashing, arson, hunger strikes. Whether this accelerated or delayed the vote is debated by historians. But she forced the issue into public consciousness in ways peaceful protest hadn't. Without her, the suffrage movement is remembered differently — less dramatic, possibly slower, possibly faster without the backlash.",
    ripples:[
      {category:"Militant Tactics",detail:"The model of militancy in social movements — forcing attention through disruption — develops differently."},
      {category:"Suffrage Timeline",detail:"British women might get the vote at the same time (WWI was the catalyst) or different timeline. Historians disagree."},
      {category:"Movement Memory",detail:"The suffrage movement is remembered as peaceful constitutional campaign. Different heroes, different tactics celebrated."},
      {category:"Global Influence",detail:"Pankhurst's tactics influenced movements worldwide. Without her example, different tactical models spread."}
    ],
    timeline:[
      {year:1903,happened:"WSPU founded; militant tactics begin",alternate:"Suffrage movement remains constitutional; peaceful campaigns"},
      {year:1913,happened:"Emily Davison dies at Epsom Derby",alternate:"No dramatic martyrdom; different public attention"},
      {year:1918,happened:"Some women get vote (age 30+)",alternate:"Vote possibly comes at same time due to WWI; possibly later"},
      {year:2024,happened:"Pankhurst remembered as suffragette icon",alternate:"Different figures remembered; Millicent Fawcett more prominent perhaps"}
    ],
    impact:{lives:"British women's vote",econ:"Women's economic participation",cultural:"Militant activism model",reach:"Britain, global influence",timeline:"British women's suffrage slower"}},
  {id:"steinem",name:"Gloria Steinem",born:1934,died:null,cat:"social",field:"Feminism",
    quote:"A woman without a man is like a fish without a bicycle.",
    contributions:["Ms. Magazine founder","Second-wave feminism voice","Political organizing","Feminist icon"],
    r:0.45,reasoning:"Second-wave feminism had many voices — Friedan, hooks, others. Steinem's specific contribution was making feminism mainstream through media savvy. The movement would have continued; she gave it a particular face.",
    counterfactual:"Without Steinem, second-wave feminism still happens — Friedan, hooks, and many others were pushing for change. But Steinem's specific contribution was media presence: glamorous, articulate, able to reach mainstream audiences. Ms. Magazine brought feminist ideas to kitchen tables. Without her, feminism might have been more academic, more radical-seeming, less accessible. The movement happens; the mainstreaming happens differently.",
    ripples:[
      {category:"Ms. Magazine",detail:"The mainstream feminist magazine doesn't exist. Feminist ideas reach general audiences through different channels."},
      {category:"Movement Image",detail:"Feminism might be seen as more radical, less accessible without Steinem's glamorous mainstream presence."},
      {category:"Political Organizing",detail:"Steinem connected feminism to Democratic politics. Without her, different political alignments."},
      {category:"Feminist Icon",detail:"Different figure becomes the 'face' of feminism. Perhaps Friedan, perhaps no single figure."}
    ],
    timeline:[
      {year:1963,happened:"Steinem goes undercover as Playboy Bunny",alternate:"Different journalist exposes Playboy; different career path"},
      {year:1971,happened:"Ms. Magazine founded",alternate:"No mainstream feminist magazine; ideas spread differently"},
      {year:1972,happened:"Steinem campaigns for McGovern; feminist politics",alternate:"Feminism and Democratic politics connect differently"},
      {year:2024,happened:"Steinem remains feminist icon",alternate:"Different figure represents second-wave feminism"}
    ],
    impact:{lives:"Women's movement",econ:"Women's media",cultural:"Feminist celebrity",reach:"United States",timeline:"Feminism less media-friendly"}},
  {id:"malala",name:"Malala Yousafzai",born:1997,died:null,cat:"social",field:"Education Rights",
    quote:"One child, one teacher, one book, one pen can change the world.",
    contributions:["Taliban survivor","Nobel Peace Prize youngest recipient","Girls' education advocacy","Malala Fund"],
    r:0.30,reasoning:"Her specific story — shot by Taliban for advocating girls' education, survived, amplified message globally — is unique. The cause existed; she became its symbol through personal courage and circumstance.",
    counterfactual:"Without Malala, girls' education advocacy continues — the cause existed before her. But her specific story — a teenager shot by the Taliban for advocating education, surviving, becoming a global voice — is unique and unrepeatable. No other figure has this combination of personal courage, compelling narrative, and global platform. Without her, the cause has less visible symbol; international attention is harder to generate; the specific framing of girls' education as existential threat to extremism doesn't crystallize the same way.",
    ripples:[
      {category:"Global Symbol",detail:"Girls' education lacks its most visible symbol. Different stories, different advocacy, less global attention."},
      {category:"Nobel Recognition",detail:"The cause might not receive Nobel recognition the same way. Different person or no such recognition."},
      {category:"Malala Fund",detail:"The specific institution doesn't exist. Girls' education funding flows through different organizations."},
      {category:"Youth Activism",detail:"Malala became model for youth activists globally. Without her, different models emerge."}
    ],
    timeline:[
      {year:2012,happened:"Malala shot by Taliban; survives",alternate:"Different tragedy or no such dramatic story; cause less visible"},
      {year:2014,happened:"Youngest Nobel Prize recipient",alternate:"Nobel goes elsewhere; girls' education recognized differently"},
      {year:2018,happened:"Malala attends Oxford",alternate:"Different narrative arc; different symbol"},
      {year:2024,happened:"Malala continues advocacy globally",alternate:"Different advocates lead the cause; less unified symbol"}
    ],
    impact:{lives:"Girls' education awareness",econ:"Education funding",cultural:"Youth activism model",reach:"Global",timeline:"Girls' education advocacy less visible"}},
  {id:"parks",name:"Rosa Parks",born:1913,died:2005,cat:"social",field:"Civil Rights",
    quote:"I had been pushed around all my life and felt at this moment that I couldn't take it anymore.",
    contributions:["Montgomery Bus Boycott catalyst","Civil rights symbol","NAACP activist","Congressional Gold Medal"],
    r:0.45,reasoning:"The Montgomery boycott was strategically planned. Parks was chosen because of her character and respectability. Another person's refusal might have sparked similar action. Her symbolism became uniquely powerful.",
    counterfactual:"Without Parks, the Montgomery Bus Boycott still happens — civil rights leaders were looking for a test case, and Claudette Colvin had refused to give up her seat months earlier. Parks was chosen because of her character and NAACP connections. Someone else becomes the symbol. The boycott still succeeds because the community was organized and ready. Parks became the symbol; the movement created the moment.",
    ripples:[
      {category:"Civil Rights Symbol",detail:"Claudette Colvin or another person becomes the face of the Montgomery boycott. Different person, same result, different memory."},
      {category:"Boycott Success",detail:"The boycott succeeds regardless — the organization was ready, the community was mobilized."},
      {category:"Historical Narrative",detail:"The story of an 'ordinary tired woman' might be different. The actual strategy behind the movement is told differently."},
      {category:"Parks's Life",detail:"Parks suffers unemployment and hardship because of her role. A different symbol bears this cost instead."}
    ],
    timeline:[
      {year:1943,happened:"Parks joins NAACP; begins activism",alternate:"NAACP builds same capacity with different members"},
      {year:1955,happened:"Parks refuses to give up seat; boycott begins",alternate:"Colvin or another person is test case; boycott begins similarly"},
      {year:1956,happened:"Supreme Court rules bus segregation unconstitutional",alternate:"Same legal victory; different catalyst remembered"},
      {year:2005,happened:"Parks dies; lies in state at Capitol",alternate:"Different person honored; same movement celebrated"}
    ],
    impact:{lives:"Bus desegregation",econ:"Boycott economics",cultural:"Civil rights symbol",reach:"United States",timeline:"Montgomery boycott via someone else"}},
  {id:"addams",name:"Jane Addams",born:1860,died:1935,cat:"social",field:"Social Work",
    quote:"The good we secure for ourselves is precarious and uncertain until it is secured for all of us.",
    contributions:["Hull House settlement","Social work profession founder","Nobel Peace Prize 1931","Progressive Era leader"],
    r:0.35,reasoning:"Settlement houses were emerging in multiple cities. Hull House was the model. Addams's specific vision — immigrants as neighbors, not charity cases — was influential. She defined social work as profession.",
    counterfactual:"Without Addams, settlement houses still emerge — the idea came from England and others were starting them in American cities. But Hull House became the model, and Addams's specific vision — that settlement workers should be neighbors, not missionaries, that immigrants had culture and dignity — shaped the entire profession of social work. Without her, the profession might be more paternalistic, more focused on 'fixing' the poor rather than empowering them.",
    ripples:[
      {category:"Social Work Profession",detail:"The profession develops with different philosophical foundations. Possibly more paternalistic, less community-based."},
      {category:"Hull House",detail:"The specific model of Hull House — a center for arts, education, and community — doesn't exist."},
      {category:"Progressive Era",detail:"The Progressive movement has different intellectual leaders. Women's public role develops differently."},
      {category:"Peace Movement",detail:"Addams was a leader in women's peace activism. Without her, peace movement has different leadership."}
    ],
    timeline:[
      {year:1889,happened:"Hull House founded",alternate:"Settlement houses develop without the Hull House model"},
      {year:1910,happened:"Social work emerges as profession",alternate:"Social work profession possibly more paternalistic"},
      {year:1931,happened:"Addams wins Nobel Peace Prize",alternate:"Different Progressive leader recognized"},
      {year:2024,happened:"Social work built on Addams's foundations",alternate:"Different professional philosophy; different heroes"}
    ],
    impact:{lives:"Urban poor",econ:"Social services",cultural:"Social work profession",reach:"United States",timeline:"Social work develops differently"}},
  {id:"freire",name:"Paulo Freire",born:1921,died:1997,cat:"social",field:"Education",
    quote:"Education either functions as an instrument to conform or as the practice of freedom.",
    contributions:["Pedagogy of the Oppressed","Critical pedagogy founder","Literacy campaigns","Liberation education"],
    r:0.30,reasoning:"His concept of education as liberation — that the oppressed must become agents of their own education — transformed how we think about learning. No one else was thinking about education this way.",
    counterfactual:"Without Freire, critical pedagogy doesn't exist — at least not in this form. His concept that education is never neutral, that traditional teaching is 'banking' knowledge into passive students, that the oppressed must become agents of their own liberation through dialogue — these ideas were uniquely his. Without Pedagogy of the Oppressed, adult education remains technical (teaching skills, not consciousness). Education is understood as politically neutral longer.",
    ripples:[
      {category:"Critical Pedagogy",detail:"The field doesn't exist. Education seen as technical rather than political. Different debates in education."},
      {category:"Literacy Campaigns",detail:"Adult literacy campaigns are technical, not consciousness-raising. Different methodology."},
      {category:"Liberation Theology",detail:"Freire influenced liberation theology's educational components. Without him, different methodology."},
      {category:"Academia",detail:"Education departments don't have critical pedagogy courses. Different intellectual traditions dominate."}
    ],
    timeline:[
      {year:1968,happened:"Pedagogy of the Oppressed published",alternate:"Education theory remains more technical, less political"},
      {year:1970,happened:"Book spreads globally; influences movements",alternate:"Different or no unified framework for liberation education"},
      {year:1989,happened:"Freire becomes São Paulo education secretary",alternate:"No major implementation of critical pedagogy"},
      {year:2024,happened:"Freire still read in education programs",alternate:"Different education theorists dominate; possibly more conservative field"}
    ],
    impact:{lives:"Education philosophy",econ:"Adult literacy",cultural:"Critical pedagogy",reach:"Global South, academia",timeline:"Education philosophy less radical"}},
  {id:"xmalcolm",name:"Malcolm X",born:1925,died:1965,cat:"social",field:"Civil Rights",
    quote:"By any means necessary.",
    contributions:["Nation of Islam spokesman","Black nationalism","Pan-Africanism","Autobiography"],
    r:0.30,reasoning:"Malcolm's voice — militant where King was nonviolent, internationalist where others were domestic — expanded the civil rights conversation. His evolution from separatism to human rights was unique. His assassination cut short continued evolution.",
    counterfactual:"Without Malcolm X, the civil rights movement is less ideologically diverse. King's nonviolent philosophy has no major counterweight. Black nationalism exists but lacks its most articulate spokesman. The 'by any means necessary' philosophy doesn't enter the mainstream. Malcolm's evolution — from Nation of Islam separatism to pan-African human rights — doesn't happen, removing a powerful model of intellectual growth. His assassination at 39 cut short what might have been.",
    ripples:[
      {category:"Movement Diversity",detail:"Without Malcolm, civil rights is more uniformly nonviolent. The tension that pushed both sides to sharpen arguments doesn't exist."},
      {category:"Black Nationalism",detail:"Black nationalism exists but is less articulate. The intellectual framework Malcolm provided is missing."},
      {category:"International Connection",detail:"Malcolm connected American civil rights to African independence movements. Without him, the movement is more domestic."},
      {category:"Autobiography",detail:"One of the most influential American autobiographies doesn't exist. Different understanding of Black experience."}
    ],
    timeline:[
      {year:1952,happened:"Malcolm joins Nation of Islam",alternate:"Nation of Islam has different spokesman; less national profile"},
      {year:1964,happened:"Malcolm breaks with NOI; goes to Mecca",alternate:"No public evolution from separatism to human rights"},
      {year:1965,happened:"Malcolm assassinated at 39",alternate:"No Malcolm to assassinate; different martyr narrative"},
      {year:2020,happened:"Malcolm's influence continues",alternate:"Civil rights remembered as more uniformly nonviolent"}
    ],
    impact:{lives:"Black consciousness",econ:"Black self-determination",cultural:"Alternative to nonviolence",reach:"United States, global",timeline:"Civil rights movement less ideologically diverse"}},
  {id:"sanger",name:"Margaret Sanger",born:1879,died:1966,cat:"social",field:"Reproductive Rights",
    quote:"No woman can call herself free who does not own and control her own body.",
    contributions:["Planned Parenthood founder","Birth control advocacy","Contraception access","Reproductive rights pioneer"],
    r:0.35,reasoning:"Birth control research was advancing. Sanger's specific contribution was advocacy and institution-building. Her eugenics associations complicate her legacy. But she created the infrastructure for reproductive rights.",
    counterfactual:"Without Sanger, birth control technology still develops — the science was advancing. But the infrastructure for access might not exist. Sanger's specific contribution was advocacy, institution-building (Planned Parenthood), and legal battles that made contraception available. Her eugenics associations complicate her legacy, but her organizational work was unique. Without her, contraception remains illegal longer; women have fewer options; the reproductive rights movement develops differently.",
    ripples:[
      {category:"Contraception Access",detail:"Without Planned Parenthood and Sanger's legal battles, contraception remains restricted longer. Women have fewer options."},
      {category:"Reproductive Rights Framework",detail:"The argument that women must control their own bodies develops differently without Sanger's framing."},
      {category:"Eugenics Entanglement",detail:"Sanger's eugenics associations complicate reproductive rights history. Without her, different associations, different complications."},
      {category:"Healthcare Infrastructure",detail:"Planned Parenthood provides healthcare beyond contraception. Without it, women's healthcare has different infrastructure."}
    ],
    timeline:[
      {year:1916,happened:"Sanger opens first birth control clinic",alternate:"Birth control access develops more slowly; different pioneers"},
      {year:1921,happened:"American Birth Control League founded",alternate:"No central organization; movement more fragmented"},
      {year:1960,happened:"Birth control pill approved",alternate:"Pill still developed; access infrastructure weaker"},
      {year:2020,happened:"Planned Parenthood serves millions",alternate:"Different reproductive health infrastructure; potentially weaker"}
    ],
    impact:{lives:"Women's reproductive control",econ:"Family planning services",cultural:"Reproductive choice",reach:"United States, global",timeline:"Contraception access slower"}},
];

// ─────────────────────────────────────────────────────────────────────────────
// INSTITUTIONS DATABASE - 50 Institutions
// ─────────────────────────────────────────────────────────────────────────────
const INSTITUTIONS = [
  {id:"un",name:"United Nations",born:1945,died:null,cat:"institutions",field:"International Governance",
    quote:"We the peoples of the United Nations determined to save succeeding generations from the scourge of war.",
    contributions:["Peacekeeping missions worldwide","Universal Declaration of Human Rights","Sustainable Development Goals","Forum for diplomacy"],
    r:0.55,reasoning:"League of Nations had failed, but international cooperation was needed. Post-WWII powers would have created some forum. A different organization would have emerged.",
    counterfactual:"Without the UN, some international body still emerges — the victors of WWII needed coordination, and the League of Nations had shown both the need and the pitfalls. But the specific UN might not exist: the Security Council's veto system, the General Assembly's structure, the specialized agencies. A different organization might have been more dominated by great powers, or more democratic, or regional rather than global. The Universal Declaration of Human Rights might never be drafted.",
    ripples:[
      {category:"Great Power Coordination",detail:"Some forum for US-USSR-UK-China coordination exists, but might be more explicitly a concert of great powers."},
      {category:"Human Rights",detail:"The Universal Declaration of Human Rights might not exist. International human rights law develops differently or later."},
      {category:"Peacekeeping",detail:"Without UN peacekeeping, regional powers handle conflicts. More proxy wars, different Cold War dynamics."},
      {category:"Specialized Agencies",detail:"WHO, UNESCO, UNICEF might not exist in current form. Global coordination on health, culture, children's issues fragmentary."}
    ],
    timeline:[
      {year:1945,happened:"UN Charter signed in San Francisco",alternate:"Different organization or no global body; regional structures instead"},
      {year:1948,happened:"Universal Declaration of Human Rights",alternate:"No universal human rights document; rights remain national concern"},
      {year:1960,happened:"UN membership expands with decolonization",alternate:"Decolonization handled by former colonial powers; different outcomes"},
      {year:2015,happened:"Sustainable Development Goals adopted",alternate:"No global development framework; bilateral aid dominates"}
    ],
    impact:{lives:"Peacekeeping: millions protected",econ:"International development: $50B+ annually",cultural:"Global cooperation model",reach:"193 member states",timeline:"Alternative international body emerges"}},
  {id:"redcross",name:"Red Cross / Red Crescent",born:1863,died:null,cat:"institutions",field:"Humanitarian Aid",
    quote:"Inter arma caritas — In war, charity.",
    contributions:["Geneva Conventions foundation","Disaster relief globally","Blood bank system","War prisoner protection"],
    r:0.40,reasoning:"Henry Dunant founded it after witnessing Battle of Solferino. Institutionalizing humanitarian impulses was specific achievement. Without Dunant, humanitarian law might have developed very differently.",
    counterfactual:"Without Henry Dunant witnessing the Battle of Solferino and being moved to action, the institutionalization of humanitarian aid might have been delayed by decades. The Geneva Conventions that govern warfare — protecting wounded soldiers, prisoners, civilians — might not exist. War would be even more brutal. The model of neutral humanitarian organizations operating in conflicts might never develop. Every subsequent humanitarian organization built on the Red Cross model.",
    ripples:[
      {category:"Geneva Conventions",detail:"Without the Red Cross driving them, laws of war might be weaker or nonexistent. Treatment of prisoners, wounded, civilians worse."},
      {category:"Neutral Humanitarianism",detail:"The model of neutral organizations operating in conflicts doesn't exist. Aid is always aligned with political powers."},
      {category:"Blood Banks",detail:"The Red Cross developed modern blood banking. Without it, blood donation develops differently, potentially saving fewer lives."},
      {category:"Disaster Response",detail:"The model of organized disaster relief — immediate response, coordination, volunteers — develops later or differently."}
    ],
    timeline:[
      {year:1859,happened:"Dunant witnesses Solferino; moved to act",alternate:"Battle happens; no one organizes response; humanitarian impulse doesn't institutionalize"},
      {year:1864,happened:"First Geneva Convention signed",alternate:"No laws of war; wounded soldiers left to die; prisoners mistreated"},
      {year:1914,happened:"Red Cross crucial in WWI",alternate:"WWI even more brutal without humanitarian coordination"},
      {year:2020,happened:"Red Cross responds to COVID, disasters globally",alternate:"Humanitarian response more fragmented, less effective"}
    ],
    impact:{lives:"Billions aided since 1863",econ:"$3B+ annual operations",cultural:"Neutral humanitarian symbol",reach:"192 national societies",timeline:"Humanitarian law develops much slower"}},
  {id:"gatesfoundation",name:"Gates Foundation",born:2000,died:null,cat:"institutions",field:"Global Health",
    quote:"All lives have equal value.",
    contributions:["Malaria and polio eradication efforts","Vaccine funding globally","Agricultural development","Education initiatives"],
    r:0.40,reasoning:"Billionaire philanthropy existed before Gates, but no one deployed so much money so strategically on global health. Other billionaires had different priorities.",
    counterfactual:"Without the Gates Foundation, global health funding has a massive hole. No other billionaire has focused so strategically on eradicating specific diseases. Polio eradication efforts are weaker. Malaria research is underfunded. The model of treating global health as a solvable engineering problem — with specific metrics, aggressive timelines, and massive resources — might not exist. Other billionaires had different priorities (arts, education, environment).",
    ripples:[
      {category:"Polio Eradication",detail:"Without Gates Foundation funding and focus, polio eradication stalls. The disease might persist in more countries."},
      {category:"Vaccine Development",detail:"GAVI and other vaccine initiatives receive less funding. Childhood immunization in developing world is lower."},
      {category:"Billionaire Philanthropy Model",detail:"The model of strategic, metrics-driven philanthropy focused on global problems is weaker."},
      {category:"Global Health Research",detail:"Malaria, tuberculosis, and neglected tropical diseases receive less research funding."}
    ],
    timeline:[
      {year:2000,happened:"Gates Foundation founded",alternate:"Microsoft wealth goes to different causes; global health funding gap"},
      {year:2010,happened:"Gates Foundation leads polio push",alternate:"Polio eradication stalls without this funding and focus"},
      {year:2020,happened:"Foundation pivotal in COVID vaccine equity",alternate:"Vaccine distribution to poor countries even more unequal"},
      {year:2025,happened:"$70B+ committed to global health",alternate:"This funding doesn't exist; countless additional deaths"}
    ],
    impact:{lives:"122M children's lives saved (with partners)",econ:"$77B endowment deployed",cultural:"Billionaire philanthropy model",reach:"Global health systems",timeline:"Global health funding gap"}},
  {id:"worldbank",name:"World Bank",born:1944,died:null,cat:"institutions",field:"Development Finance",
    quote:"Our dream is a world free of poverty.",
    contributions:["Infrastructure financing globally","Poverty reduction programs","Development economics research","Climate finance"],
    r:0.60,reasoning:"Post-WWII reconstruction required institutional financing. Some development bank would have existed — specific form wasn't predetermined, but the need was clear.",
    counterfactual:"Without the World Bank, development finance still exists — regional development banks, bilateral aid, private investment. But the specific model of a global development institution setting standards, collecting data, and financing large projects might not emerge. Countries negotiate bilaterally with former colonial powers or superpowers. The 'Washington Consensus' never forms. Development economics as a field might develop very differently.",
    ripples:[
      {category:"Development Finance",detail:"Large infrastructure projects in developing countries are financed bilaterally or not at all. Development is slower, more uneven."},
      {category:"Development Economics",detail:"Without World Bank research, development economics as a field develops differently. Different paradigms might dominate."},
      {category:"Washington Consensus",detail:"The specific policy framework of liberalization, privatization, fiscal discipline might not become orthodoxy."},
      {category:"Data Collection",detail:"Global development data is less comprehensive. We know less about poverty, health, education globally."}
    ],
    timeline:[
      {year:1944,happened:"World Bank founded at Bretton Woods",alternate:"Regional banks only; bilateral aid dominates"},
      {year:1960,happened:"IDA created for poorest countries",alternate:"Poorest countries rely entirely on bilateral aid"},
      {year:1990,happened:"Washington Consensus shapes policy",alternate:"Different development orthodoxy or none"},
      {year:2020,happened:"$100B+ annual commitments",alternate:"Development finance more fragmented, less total"}
    ],
    impact:{lives:"Billions affected by projects",econ:"$100B+ annual commitments",cultural:"Development paradigm setter",reach:"189 member countries",timeline:"Regional banks fill gap differently"}},
  {id:"who",name:"World Health Organization",born:1948,died:null,cat:"institutions",field:"Global Health",
    quote:"Health is a state of complete physical, mental and social well-being.",
    contributions:["Smallpox eradication achieved","Disease surveillance globally","International health standards","Pandemic coordination"],
    r:0.50,reasoning:"International health coordination existed before WHO. But WHO's specific achievement — smallpox eradication — required institutional capacity that might not have existed otherwise.",
    counterfactual:"Without WHO, international health coordination still exists — it existed before WHO. But smallpox eradication — the only human disease ever eradicated — might not have happened. The campaign required global coordination, standardized vaccines, ring vaccination strategy. Without WHO, smallpox might have killed another 300 million+ people before being eradicated (if ever). Polio eradication would be even harder. COVID coordination would be more chaotic.",
    ripples:[
      {category:"Smallpox Eradication",detail:"Without WHO coordination, smallpox eradication doesn't happen or happens much later. 300M+ additional deaths."},
      {category:"Disease Surveillance",detail:"Global disease surveillance is weaker. Outbreaks spread further before detection."},
      {category:"Health Standards",detail:"International health standards are fragmented. Drug quality, medical practice vary more by country."},
      {category:"Pandemic Response",detail:"COVID-19 response even more chaotic without WHO coordination (imperfect as it was)."}
    ],
    timeline:[
      {year:1948,happened:"WHO founded as UN specialized agency",alternate:"Health remains bilateral; no global coordination body"},
      {year:1967,happened:"Smallpox eradication campaign begins",alternate:"No coordinated campaign; smallpox continues killing"},
      {year:1980,happened:"Smallpox declared eradicated",alternate:"Smallpox still endemic; 300M+ additional deaths over decades"},
      {year:2020,happened:"WHO coordinates COVID response",alternate:"Even more fragmented pandemic response; more deaths"}
    ],
    impact:{lives:"Smallpox eradication: 300M+ would have died",econ:"Global health standards",cultural:"Health as human right",reach:"194 member states",timeline:"Disease eradication slower"}},
  {id:"nato",name:"NATO",born:1949,died:null,cat:"institutions",field:"Military Alliance",
    quote:"An attack against one is an attack against all.",
    contributions:["Collective defense framework","Cold War deterrence","Post-Cold War expansion","Article 5 mutual defense"],
    r:0.50,reasoning:"Cold War created blocs regardless. Western Europe needed American security guarantees. But NATO's specific form wasn't inevitable. Different alliance might have meant different European security.",
    counterfactual:"Without NATO, Western Europe still seeks American security guarantees — the Soviet threat was real. But the specific alliance might look very different. Britain might have its own arrangement with the US. France might stay neutral earlier. Germany might remain divided differently or be neutralized. The integrated military command that NATO developed might not exist. European defense might be more fragmented, more national, less interoperable.",
    ripples:[
      {category:"European Security",detail:"Western European countries make bilateral deals with US or develop independent deterrents. More fragmented defense."},
      {category:"German Rearmament",detail:"West German integration into Western defense happens differently. Germany might remain demilitarized longer."},
      {category:"Cold War Dynamics",detail:"Without unified Western alliance, Cold War confrontation might be more dangerous or more fragmented."},
      {category:"Post-Cold War",detail:"No NATO expansion eastward. Eastern European security handled differently after 1991."}
    ],
    timeline:[
      {year:1949,happened:"NATO founded; Article 5 established",alternate:"Bilateral US-European agreements; fragmented defense"},
      {year:1955,happened:"West Germany joins NATO",alternate:"German rearmament handled differently; more controversy"},
      {year:1991,happened:"Cold War ends; NATO persists",alternate:"Without NATO, European security architecture very different"},
      {year:2022,happened:"NATO responds to Ukraine invasion",alternate:"European response to Russia more fragmented"}
    ],
    impact:{lives:"Cold War stability for 600M+ Europeans",econ:"Defense spending coordination",cultural:"Western alliance symbol",reach:"32 member nations",timeline:"European security more fragmented"}},
  {id:"eu",name:"European Union",born:1993,died:null,cat:"institutions",field:"Political & Economic Union",
    quote:"United in diversity.",
    contributions:["Single market creation","Free movement of people","Euro currency","Post-war peace in Europe"],
    r:0.40,reasoning:"European integration began with coal and steel, driven by Monnet and Schuman's vision. Different history might have stopped at free trade without political union.",
    counterfactual:"Without Jean Monnet and Robert Schuman's vision, European integration might have stopped at free trade. The specific path — Coal and Steel Community to EEC to EU — wasn't inevitable. Britain might have shaped a different, looser arrangement. The euro might never exist. Free movement of people might not happen. Most importantly, the profound post-war reconciliation between France and Germany might have been shallower, leaving Europe more prone to future conflicts.",
    ripples:[
      {category:"Franco-German Reconciliation",detail:"Without deep integration, France and Germany might remain more suspicious. European peace less secure."},
      {category:"Economic Integration",detail:"Free trade zone probably exists, but single market with harmonized regulations might not."},
      {category:"Euro Currency",detail:"No common currency. European monetary policy remains national. 2008 crisis plays out very differently."},
      {category:"Free Movement",detail:"Europeans can't live and work freely across borders. Labor markets remain national."}
    ],
    timeline:[
      {year:1951,happened:"European Coal and Steel Community founded",alternate:"Franco-German cooperation limited to specific agreements"},
      {year:1957,happened:"Treaty of Rome creates EEC",alternate:"Free trade area only; no political integration"},
      {year:1993,happened:"Maastricht creates EU, plans for euro",alternate:"No political union; no common currency"},
      {year:2024,happened:"EU with 27 members, single market",alternate:"Looser European arrangements; more national sovereignty, less coordination"}
    ],
    impact:{lives:"Peace for 450M Europeans",econ:"$18T GDP bloc",cultural:"Post-war reconciliation model",reach:"27 member states",timeline:"European integration slower"}},
  {id:"imf",name:"International Monetary Fund",born:1944,died:null,cat:"institutions",field:"Financial Stability",
    quote:"Working together to foster global monetary cooperation.",
    contributions:["Currency stability support","Balance of payments assistance","Economic surveillance","Crisis lending"],
    r:0.55,reasoning:"Bretton Woods designed to prevent competitive devaluations. Some monetary coordination was needed. IMF's specific form was contested from start.",
    counterfactual:"Without the IMF, some international monetary coordination still emerges — the chaos of the 1930s competitive devaluations demanded response. But the IMF's specific model — conditionality, structural adjustment, surveillance — was contested from the start. Keynes wanted something different. Without the IMF, perhaps a more Keynesian system emerges, or bilateral agreements dominate, or financial crises are handled differently.",
    ripples:[
      {category:"Crisis Response",detail:"Without IMF, financial crises handled through bilateral agreements or regional arrangements. Different outcomes for each crisis."},
      {category:"Conditionality",detail:"The 'structural adjustment' model might not exist. Different approach to development economics."},
      {category:"Washington Consensus",detail:"The specific policy framework might not cohere. Different economic orthodoxy."},
      {category:"Global Governance",detail:"International economic cooperation takes different form. Perhaps more regional, less global."}
    ],
    timeline:[
      {year:1944,happened:"IMF created at Bretton Woods",alternate:"Different monetary system; perhaps more Keynesian"},
      {year:1982,happened:"Latin American debt crisis; IMF intervenes",alternate:"Crisis handled differently; different recovery path"},
      {year:1997,happened:"Asian financial crisis; IMF conditionality",alternate:"Asian nations respond differently; different economic models"},
      {year:2024,happened:"IMF still central to global finance",alternate:"Different international financial architecture"}
    ],
    impact:{lives:"Economic stability for billions",econ:"$1T lending capacity",cultural:"Controversial conditionality",reach:"190 member countries",timeline:"Financial crises more severe"}},
  {id:"wwf",name:"World Wildlife Fund",born:1961,died:null,cat:"institutions",field:"Conservation",
    quote:"For a living planet.",
    contributions:["Species conservation programs","Protected area expansion","Climate advocacy","Sustainable development"],
    r:0.45,reasoning:"Conservation organizations existed, but WWF's strategy was distinctive. Environmental concern was growing regardless. WWF channeled it in specific directions.",
    counterfactual:"Without WWF, conservation organizations still exist — the Sierra Club, Audubon Society, and others were working. But WWF's specific innovation was combining celebrity appeal (Prince Philip was founding president), corporate partnerships, and global reach. The panda logo became conservation's symbol. Without WWF, conservation might be more fragmented, more national, less corporate-partnered.",
    ripples:[
      {category:"Conservation Branding",detail:"Without the panda logo, conservation has different symbols. Different public appeal."},
      {category:"Corporate Partnerships",detail:"WWF pioneered working with corporations. Without this model, conservation is more adversarial."},
      {category:"Global Coordination",detail:"Conservation efforts more national, less coordinated across borders."},
      {category:"Species Focus",detail:"Different species become conservation icons. Different priorities."}
    ],
    timeline:[
      {year:1961,happened:"WWF founded with panda logo",alternate:"Conservation organizations exist but more fragmented"},
      {year:1980,happened:"WWF expands globally",alternate:"Conservation remains more national in focus"},
      {year:2000,happened:"WWF partners with corporations",alternate:"Environmental movement more adversarial to business"},
      {year:2024,happened:"WWF largest conservation organization",alternate:"Different organizations dominate; different conservation model"}
    ],
    impact:{lives:"Ecosystems for billions",econ:"$400M+ annual conservation",cultural:"Panda as global symbol",reach:"100+ countries",timeline:"Conservation movement weaker"}},
  {id:"amnesty",name:"Amnesty International",born:1961,died:null,cat:"institutions",field:"Human Rights",
    quote:"It is better to light a candle than curse the darkness.",
    contributions:["Prisoner of conscience campaigns","Death penalty opposition","Human rights documentation","Nobel Peace Prize 1977"],
    r:0.40,reasoning:"Human rights advocacy existed, but Amnesty's innovation was letter-writing campaigns. This model was replicable and powerful. Without Amnesty, human rights advocacy might have remained more elite.",
    counterfactual:"Without Amnesty, human rights advocacy still exists — the UN had declared universal rights. But Amnesty's specific innovation was letter-writing campaigns: ordinary people pressuring governments by writing letters for prisoners of conscience. This model gave individuals a way to act. Without it, human rights advocacy might have remained more elite, more governmental, less grassroots.",
    ripples:[
      {category:"Letter-Writing Model",detail:"The specific tactic of mass letter-writing doesn't become standard. Activism looks different."},
      {category:"Prisoner Advocacy",detail:"Individual prisoners get less global attention. Different advocacy model."},
      {category:"Grassroots Human Rights",detail:"Human rights remains more governmental, more elite, less participatory."},
      {category:"Urgency Actions",detail:"The model of rapid response to human rights crises develops differently."}
    ],
    timeline:[
      {year:1961,happened:"Amnesty founded; letter-writing begins",alternate:"Human rights advocacy remains more elite, governmental"},
      {year:1977,happened:"Amnesty wins Nobel Peace Prize",alternate:"Different organization or no organization recognized this way"},
      {year:1990,happened:"Amnesty expands beyond prisoners",alternate:"Human rights movement organized differently"},
      {year:2024,happened:"Amnesty still leading human rights organization",alternate:"Different organizations dominate; different advocacy model"}
    ],
    impact:{lives:"Thousands of prisoners freed",econ:"Human rights as policy factor",cultural:"Letter-writing activism model",reach:"150+ countries",timeline:"Human rights movement less grassroots"}},
  {id:"opec",name:"OPEC",born:1960,died:null,cat:"institutions",field:"Energy",
    quote:"Coordination and unification of petroleum policies.",
    contributions:["Oil price coordination","1973 oil crisis","Producer country solidarity","Energy geopolitics"],
    r:0.50,reasoning:"Oil-producing countries were being exploited. Collective action was logical. Without OPEC specifically, similar organization would emerge.",
    counterfactual:"Without OPEC, oil-producing countries still seek better terms — the exploitation by Western companies was obvious. But OPEC's specific coordination made the 1973 oil embargo possible and effective. Without it, producer countries negotiate individually, with less leverage. The oil shocks might be smaller or different. The entire energy politics of the late 20th century changes.",
    ripples:[
      {category:"1973 Oil Crisis",detail:"Without coordinated embargo, oil prices rise more slowly. Different economic shock."},
      {category:"Producer Leverage",detail:"Individual countries have less bargaining power. Different terms with oil companies."},
      {category:"Energy Independence",detail:"Without the shocks, perhaps less urgency in alternative energy development."},
      {category:"Middle East Politics",detail:"Oil wealth distributed differently. Different regional power dynamics."}
    ],
    timeline:[
      {year:1960,happened:"OPEC founded",alternate:"Oil producers negotiate individually; less leverage"},
      {year:1973,happened:"Oil embargo triples prices",alternate:"Without coordination, smaller price increases; different shock"},
      {year:1980,happened:"OPEC's power peaks",alternate:"Producer countries never achieve this coordinated power"},
      {year:2024,happened:"OPEC+ still coordinates production",alternate:"Oil markets more competitive; different price dynamics"}
    ],
    impact:{lives:"Energy prices for billions",econ:"Trillions in oil wealth transferred",cultural:"Resource nationalism",reach:"13 member countries",timeline:"Oil politics develops differently"}},
  {id:"wto",name:"World Trade Organization",born:1995,died:null,cat:"institutions",field:"Trade",
    quote:"The WTO provides a forum for negotiating agreements aimed at reducing obstacles to international trade.",
    contributions:["Trade dispute resolution","Tariff reduction framework","GATT successor","Global trade rules"],
    r:0.55,reasoning:"GATT already existed. Trade liberalization was the trend. WTO formalized what was happening. Without WTO, bilateral agreements would have multiplied.",
    counterfactual:"Without WTO, trade liberalization still proceeds — GATT existed and the trend was clear. But WTO's dispute resolution mechanism was new: binding arbitration that could override national laws. Without it, trade disputes are settled bilaterally or through power politics. The rule-based trading system is weaker. Protectionism might be easier.",
    ripples:[
      {category:"Dispute Resolution",detail:"Trade disputes settled through bilateral negotiations or power. Stronger countries dominate more."},
      {category:"Trade Rules",detail:"Global trade rules are less binding. More bilateral deals, more exceptions."},
      {category:"Globalization",detail:"Trade still increases but with more friction, more protectionism, more bilateral."},
      {category:"Developing Countries",detail:"Without WTO framework, developing countries might have different paths to trade."}
    ],
    timeline:[
      {year:1995,happened:"WTO created from GATT",alternate:"GATT continues without enforcement mechanism"},
      {year:2001,happened:"China joins WTO",alternate:"China's trade integration proceeds differently"},
      {year:2008,happened:"Doha Round stalls",alternate:"Trade negotiations always bilateral anyway"},
      {year:2024,happened:"WTO under pressure but surviving",alternate:"Trade system more fragmented, more bilateral"}
    ],
    impact:{lives:"Global trade for billions",econ:"$25T+ annual trade facilitated",cultural:"Globalization framework",reach:"164 member countries",timeline:"Trade rules more fragmented"}},
  {id:"oxfam",name:"Oxfam International",born:1942,died:null,cat:"institutions",field:"Development & Poverty",
    quote:"The power of people against poverty.",
    contributions:["Famine relief since WWII","Inequality reports","Fair trade advocacy","Emergency response"],
    r:0.45,reasoning:"Humanitarian organizations existed. Oxfam's specific combination of emergency response, development, and advocacy was influential but replicable.",
    counterfactual:"Without Oxfam, humanitarian aid still develops — CARE, Save the Children, and others were active. But Oxfam's specific combination of emergency relief, long-term development, and advocacy against inequality was influential. Their annual inequality reports shaped public discourse. Without Oxfam, the development sector looks slightly different, fair trade develops through different channels, and inequality advocacy is less prominent.",
    ripples:[
      {category:"Inequality Discourse",detail:"Oxfam's reports on wealth concentration get global attention. Without them, inequality discourse has different shape."},
      {category:"Fair Trade",detail:"Oxfam was major fair trade promoter. Without them, fair trade movement develops differently."},
      {category:"Emergency Response",detail:"Same emergencies addressed by other organizations. Capacity similar but not identical."},
      {category:"Development Model",detail:"Oxfam's combination of relief, development, advocacy is influential model. Different model might dominate."}
    ],
    timeline:[
      {year:1942,happened:"Oxfam founded for famine relief",alternate:"Famine relief through other organizations"},
      {year:1960,happened:"Oxfam shifts to development",alternate:"Development sector evolves without Oxfam model"},
      {year:2000,happened:"Oxfam inequality reports begin",alternate:"Inequality awareness develops through different channels"},
      {year:2024,happened:"Oxfam major global voice on poverty",alternate:"Different organization leads poverty discourse"}
    ],
    impact:{lives:"Millions aided annually",econ:"$1B+ annual budget",cultural:"Inequality awareness",reach:"90+ countries",timeline:"Development sector slightly different"}},
  {id:"msf",name:"Médecins Sans Frontières",born:1971,died:null,cat:"institutions",field:"Medical Humanitarian",
    quote:"Medical care where it's needed most.",
    contributions:["Medical emergency response","Conflict zone healthcare","Disease outbreak response","Nobel Peace Prize 1999"],
    r:0.35,reasoning:"MSF's innovation was going where governments wouldn't — crossing borders without permission for medical emergencies. This model was new and has been widely copied.",
    counterfactual:"Without MSF, medical humanitarianism still exists — the Red Cross and other organizations provided medical care. But MSF's specific innovation was going where governments and the UN wouldn't: crossing borders without permission, speaking out about atrocities witnessed, providing emergency surgery in active conflict zones. This model of 'humanitarian action without borders' was new. Without it, medical care in conflict zones is more limited, more diplomatic, less willing to bear witness.",
    ripples:[
      {category:"Conflict Zone Medicine",detail:"Without MSF's model, fewer doctors in war zones. Medical care more limited during conflicts."},
      {category:"Bearing Witness",detail:"MSF's practice of speaking publicly about atrocities witnessed is unusual. Without it, humanitarian silence continues."},
      {category:"Emergency Response",detail:"Rapid deployment for epidemics and disasters develops differently. Other organizations might be slower, more bureaucratic."},
      {category:"Humanitarian Model",detail:"The 'without borders' model spawns Engineers Without Borders, Reporters Without Borders. Without MSF, this framing doesn't exist."}
    ],
    timeline:[
      {year:1971,happened:"MSF founded by French doctors",alternate:"Medical humanitarianism continues through traditional channels"},
      {year:1980,happened:"MSF expands beyond France",alternate:"Medical response to crises more limited, more governmental"},
      {year:1999,happened:"MSF wins Nobel Peace Prize",alternate:"Different recognition of humanitarian medicine"},
      {year:2020,happened:"MSF in 70+ countries; COVID response",alternate:"Medical humanitarianism less mobile, less willing to act independently"}
    ],
    impact:{lives:"Millions treated annually",econ:"$2B+ annual operations",cultural:"Humanitarian medicine model",reach:"70+ countries",timeline:"Medical humanitarianism less mobile"}},
  {id:"greenpeace",name:"Greenpeace",born:1971,died:null,cat:"institutions",field:"Environmental Activism",
    quote:"There are no passengers on Spaceship Earth. We are all crew.",
    contributions:["Direct action environmentalism","Whale hunting opposition","Nuclear testing opposition","Climate campaigns"],
    r:0.40,reasoning:"Environmental activism existed. Greenpeace's direct action approach — confronting whalers, nuclear ships — was distinctive but would have emerged from the movement.",
    counterfactual:"Without Greenpeace, environmental activism still exists and grows — Earth Day happened in 1970, the movement was building. But Greenpeace's specific innovation was direct action: putting bodies between harpoons and whales, sailing into nuclear test zones, climbing smokestacks. This confrontational approach generated media coverage that polite lobbying couldn't. Without it, environmentalism might be more institutionalized, less dramatic, possibly less effective at capturing public attention.",
    ripples:[
      {category:"Media Attention",detail:"Without dramatic confrontations, environmental issues get less media coverage. Movement is more institutional, less visible."},
      {category:"Whaling",detail:"Commercial whaling ban still comes, but without iconic images of Greenpeace boats between harpoons and whales."},
      {category:"Nuclear Testing",detail:"Opposition continues but without dramatic confrontations. Public awareness develops differently."},
      {category:"Activist Tactics",detail:"Direct action environmentalism is less developed. Other movements don't have this model to copy."}
    ],
    timeline:[
      {year:1971,happened:"Greenpeace sails to oppose nuclear test",alternate:"Nuclear test opposition continues through traditional channels"},
      {year:1975,happened:"Greenpeace confronts Soviet whalers",alternate:"Anti-whaling movement less dramatic; different imagery"},
      {year:1985,happened:"Rainbow Warrior bombed by France",alternate:"No martyrdom narrative; different movement history"},
      {year:2020,happened:"Greenpeace leads climate protests",alternate:"Climate activism exists but with different tactics and visibility"}
    ],
    impact:{lives:"Environmental policy changes",econ:"Industry behavior changes",cultural:"Activist confrontation model",reach:"55+ countries",timeline:"Environmental movement less dramatic"}},
  {id:"unicef",name:"UNICEF",born:1946,died:null,cat:"institutions",field:"Children's Aid",
    quote:"For every child.",
    contributions:["Post-WWII child relief","Vaccination campaigns","Child rights advocacy","Emergency child protection"],
    r:0.50,reasoning:"UN was creating specialized agencies. Children's aid was essential. Some agency would have formed. UNICEF's specific programs were influential but others could have done similar work.",
    counterfactual:"Without UNICEF, children's aid still exists — Save the Children predates it, and the UN would have created some child-focused agency. But UNICEF's specific scale — billions of children vaccinated, millions fed during emergencies — is its contribution. The organization's advocacy helped establish children's rights as global norm. Without UNICEF, children's aid is more fragmented, vaccination campaigns less coordinated, and the Convention on the Rights of the Child might look different.",
    ripples:[
      {category:"Vaccination",detail:"UNICEF coordinates global vaccination campaigns. Without it, vaccination reaches fewer children, more slowly."},
      {category:"Children's Rights",detail:"UNICEF advocated for Convention on Rights of the Child. Without it, children's rights norms develop differently."},
      {category:"Emergency Response",detail:"Same emergencies occur; response might be slower, less child-focused."},
      {category:"Scale",detail:"UNICEF's $7B budget and 190-country reach is hard to replicate. Smaller organizations do less."}
    ],
    timeline:[
      {year:1946,happened:"UNICEF founded for post-WWII children",alternate:"Child relief through other, smaller channels"},
      {year:1965,happened:"UNICEF wins Nobel Peace Prize",alternate:"Different recognition of children's aid"},
      {year:1989,happened:"Convention on Rights of the Child",alternate:"Children's rights treaty might look different"},
      {year:2024,happened:"UNICEF vaccinates billions",alternate:"Vaccination campaigns less coordinated; more children die"}
    ],
    impact:{lives:"Billions of children aided",econ:"$7B+ annual budget",cultural:"Children's rights global norm",reach:"190+ countries",timeline:"Child aid organized differently"}},
  {id:"unhcr",name:"UN Refugee Agency",born:1950,died:null,cat:"institutions",field:"Refugee Protection",
    quote:"Whoever saves one life, saves the world entire.",
    contributions:["Refugee protection mandate","Camp management","Resettlement coordination","Nobel Peace Prize twice"],
    r:0.45,reasoning:"Post-WWII refugee crisis demanded response. Some agency was needed. UNHCR's specific mandate has shaped refugee law, but alternatives existed.",
    counterfactual:"Without UNHCR, refugee protection still happens — the post-WWII crisis demanded it. But UNHCR shaped the 1951 Refugee Convention that defines who is a refugee and what rights they have. Without this specific agency, refugee law might look different: perhaps more regional, perhaps more restrictive. The principle of non-refoulement — not returning refugees to danger — might be weaker. Tens of millions of refugees over 70 years would face different, possibly worse, circumstances.",
    ripples:[
      {category:"Refugee Law",detail:"The 1951 Convention might look different. Definition of refugee, rights, could be narrower."},
      {category:"Non-Refoulement",detail:"The principle that refugees can't be returned to danger might be weaker."},
      {category:"Camp Management",detail:"Refugee camps still exist but might be managed differently, possibly worse."},
      {category:"Resettlement",detail:"Coordination of refugee resettlement is less systematic."}
    ],
    timeline:[
      {year:1950,happened:"UNHCR established",alternate:"Refugee protection through regional or ad hoc arrangements"},
      {year:1951,happened:"Refugee Convention defines protections",alternate:"Different or weaker refugee law emerges"},
      {year:1981,happened:"UNHCR wins second Nobel",alternate:"Different recognition of refugee protection"},
      {year:2024,happened:"100M+ displaced persons",alternate:"Same crises; possibly weaker protection framework"}
    ],
    impact:{lives:"100M+ refugees aided",econ:"$10B+ annual operations",cultural:"Refugee protection norms",reach:"Global",timeline:"Refugee protection weaker"}},
  {id:"wfp",name:"World Food Programme",born:1961,died:null,cat:"institutions",field:"Food Aid",
    quote:"Saving lives, changing lives.",
    contributions:["Largest humanitarian organization","School feeding programs","Emergency food response","Nobel Peace Prize 2020"],
    r:0.50,reasoning:"Food aid existed before WFP. The program systematized and scaled it. Without WFP, food aid would be more fragmented but still happen.",
    counterfactual:"Without WFP, food aid still happens — bilateral food aid and smaller organizations existed. But WFP's scale is unique: the largest humanitarian organization, feeding 100+ million people annually. Without it, food aid is more fragmented, less efficient, slower to respond to emergencies. School feeding programs — which keep millions of children in school — might be smaller. More people die in famines; more children drop out of school.",
    ripples:[
      {category:"Scale",detail:"WFP feeds 100M+ annually. Fragmented alternatives can't match this scale."},
      {category:"Efficiency",detail:"Centralized logistics make food aid more efficient. Without WFP, more waste, slower response."},
      {category:"School Feeding",detail:"WFP school meals keep children in school. Without this, more dropouts, especially girls."},
      {category:"Emergency Response",detail:"Same famines occur; response is slower, less coordinated."}
    ],
    timeline:[
      {year:1961,happened:"WFP established as UN agency",alternate:"Food aid remains bilateral, fragmented"},
      {year:1990,happened:"WFP becomes largest humanitarian org",alternate:"No single organization achieves this scale"},
      {year:2020,happened:"WFP wins Nobel Peace Prize",alternate:"Different recognition of food aid"},
      {year:2024,happened:"WFP feeds 100M+ in emergencies",alternate:"Fewer people fed; more die in famines"}
    ],
    impact:{lives:"100M+ fed annually",econ:"$10B+ annual operations",cultural:"Food as human right",reach:"80+ countries",timeline:"Food aid less coordinated"}},
  {id:"icc",name:"International Criminal Court",born:2002,died:null,cat:"institutions",field:"International Justice",
    quote:"The International Criminal Court is a court of last resort.",
    contributions:["War crimes prosecution","Genocide trials","Crimes against humanity","International justice norm"],
    r:0.40,reasoning:"Ad hoc tribunals (Nuremberg, Yugoslavia, Rwanda) preceded ICC. Permanent court was logical evolution. Without ICC, ad hoc tribunals would continue.",
    counterfactual:"Without the ICC, international justice still exists — Nuremberg set the precedent, and ad hoc tribunals for Yugoslavia and Rwanda showed the model worked. But the ICC provides permanence: war criminals know there's always a court waiting. Without it, international justice is more episodic, more political, more dependent on the specific crisis generating enough outrage. Some atrocities go unprosecuted that wouldn't under ICC.",
    ripples:[
      {category:"Permanence",detail:"Without ICC, each atrocity requires political will to create new tribunal. Some never get prosecuted."},
      {category:"Deterrence",detail:"ICC's existence may deter some atrocities. Without it, potential war criminals face less certain accountability."},
      {category:"International Law",detail:"ICC has shaped international criminal law. Without it, the law develops more ad hoc."},
      {category:"Geopolitics",detail:"US, China, Russia don't join anyway. Main difference is for countries that did join."}
    ],
    timeline:[
      {year:2002,happened:"ICC established in The Hague",alternate:"Ad hoc tribunals continue as needed"},
      {year:2012,happened:"First ICC conviction (Lubanga)",alternate:"Similar prosecutions through ad hoc tribunals, if any"},
      {year:2023,happened:"ICC issues Putin arrest warrant",alternate:"No permanent court to issue such warrants"},
      {year:2024,happened:"ICC investigates multiple situations",alternate:"Some atrocities go uninvestigated without permanent body"}
    ],
    impact:{lives:"Justice for victims globally",econ:"International law costs",cultural:"Accountability norm",reach:"123 member states",timeline:"International justice more ad hoc"}},
  {id:"iaea",name:"Int'l Atomic Energy Agency",born:1957,died:null,cat:"institutions",field:"Nuclear Regulation",
    quote:"Atoms for Peace.",
    contributions:["Nuclear safeguards","Non-proliferation verification","Nuclear safety standards","Peaceful use promotion"],
    r:0.45,reasoning:"Nuclear weapons spread required some oversight body. IAEA's specific mandate emerged from Cold War politics. Some organization was inevitable.",
    counterfactual:"Without IAEA, nuclear oversight still exists — the superpowers had strong incentives to prevent proliferation. But IAEA provides the inspection mechanism that makes the Non-Proliferation Treaty work. Without it, verification is bilateral, more politicized, less consistent. More countries might have developed nuclear weapons. Nuclear safety standards are less uniform; more accidents might occur.",
    ripples:[
      {category:"Non-Proliferation",detail:"Without IAEA inspections, NPT is harder to verify. Possibly more nuclear states."},
      {category:"Nuclear Safety",detail:"Without international standards, nuclear safety varies more. Possibly more accidents."},
      {category:"Iran/North Korea",detail:"Different mechanisms for addressing proliferation concerns. Possibly different outcomes."},
      {category:"Peaceful Nuclear",detail:"Nuclear energy spreads anyway but with less coordinated safety standards."}
    ],
    timeline:[
      {year:1957,happened:"IAEA established under UN",alternate:"Bilateral nuclear oversight arrangements"},
      {year:1968,happened:"NPT uses IAEA for verification",alternate:"Different verification mechanism, possibly weaker"},
      {year:1986,happened:"IAEA responds to Chernobyl",alternate:"Different international response to nuclear accidents"},
      {year:2024,happened:"IAEA monitors Iran, inspects globally",alternate:"More politicized, less consistent nuclear oversight"}
    ],
    impact:{lives:"Nuclear safety for billions",econ:"Nuclear industry regulation",cultural:"Non-proliferation norm",reach:"178 member states",timeline:"Nuclear oversight weaker"}},
  {id:"interpol",name:"Interpol",born:1923,died:null,cat:"institutions",field:"Law Enforcement",
    quote:"Connecting police for a safer world.",
    contributions:["International police cooperation","Criminal database sharing","Fugitive tracking","Cybercrime coordination"],
    r:0.55,reasoning:"Police needed to cooperate across borders. Some coordination mechanism was inevitable. Interpol's specific form has evolved but wasn't unique solution.",
    counterfactual:"Without Interpol, international police cooperation still develops — criminals cross borders, and police follow. But cooperation is more bilateral, more ad hoc, more dependent on individual relationships. Fugitives find it easier to flee across borders. Cybercrime coordination is slower to develop. The specific databases and red notice system don't exist; alternatives are less comprehensive.",
    ripples:[
      {category:"Fugitive Tracking",detail:"Without central database and red notices, tracking international fugitives is harder."},
      {category:"Information Sharing",detail:"Police cooperation is more bilateral. Some crimes go unsolved that wouldn't otherwise."},
      {category:"Cybercrime",detail:"International cybercrime coordination develops differently, possibly slower."},
      {category:"Efficiency",detail:"Police cooperation happens but is less systematic, more relationship-dependent."}
    ],
    timeline:[
      {year:1923,happened:"Interpol founded in Vienna",alternate:"Bilateral police cooperation continues"},
      {year:1956,happened:"Modern Interpol constitution",alternate:"Different international police framework emerges"},
      {year:1990,happened:"Interpol databases go digital",alternate:"Less comprehensive criminal databases"},
      {year:2024,happened:"195 member countries",alternate:"Police cooperation more fragmented"}
    ],
    impact:{lives:"Crime prevention globally",econ:"Law enforcement efficiency",cultural:"International policing norm",reach:"195 member countries",timeline:"Police cooperation more bilateral"}},
  {id:"fifa",name:"FIFA",born:1904,died:null,cat:"institutions",field:"Sports",
    quote:"For the Game. For the World.",
    contributions:["World Cup organization","Football rules standardization","Global sport governance","Economic impact"],
    r:0.60,reasoning:"Football was globalizing. Some governing body was needed. FIFA's specific structure emerged from European origins. A different organization would have formed.",
    counterfactual:"Without FIFA, football still becomes the world's sport — it was spreading before FIFA existed. But some governing body forms to standardize rules and organize international competition. The World Cup might have different format, different history, different host selection process. Football's global spread happens regardless; the specific governance structure differs.",
    ripples:[
      {category:"World Cup",detail:"Some world championship exists but might look different. Different history, different hosts."},
      {category:"Rules",detail:"Football rules standardize anyway but possibly with more regional variation longer."},
      {category:"Governance",detail:"Different governing body, possibly less corrupt, possibly more. Different power dynamics."},
      {category:"Economics",detail:"Football generates similar revenue; different organization controls it."}
    ],
    timeline:[
      {year:1904,happened:"FIFA founded in Paris",alternate:"Different football federation emerges"},
      {year:1930,happened:"First World Cup",alternate:"International tournament organized differently"},
      {year:1974,happened:"FIFA expands globally under Havelange",alternate:"Football globalizes under different governance"},
      {year:2024,happened:"FIFA governs world's most popular sport",alternate:"Different body governs football; similar global reach"}
    ],
    impact:{lives:"Billions of fans",econ:"$5B+ annual revenue",cultural:"Football as global culture",reach:"211 member associations",timeline:"Football governance different"}},
  {id:"olympics",name:"Int'l Olympic Committee",born:1894,died:null,cat:"institutions",field:"Sports",
    quote:"Faster, Higher, Stronger – Together.",
    contributions:["Modern Olympics revival","International athletic competition","Olympic movement values","Cultural exchange"],
    r:0.50,reasoning:"Athletic competition existed. Coubertin revived Olympics specifically. Without him, some international games would have emerged, but the specific form and brand might differ.",
    counterfactual:"Without the IOC and Coubertin's revival, international athletic competition still emerges — nations want to compete, athletes want to test themselves. But the specific brand of 'Olympics' with its ancient Greek mystique might not exist. Different international games might have different values, different sports, different traditions. The Olympic movement's specific ideology of peace through sport might not crystallize the same way.",
    ripples:[
      {category:"Brand",detail:"'Olympics' brand doesn't exist. Different name, different mythology for international games."},
      {category:"Values",detail:"Olympic ideology of peace, amateurism, fair play might not crystallize the same way."},
      {category:"Sports Selection",detail:"Different sports might be featured. Track and field might not dominate."},
      {category:"Host Cities",detail:"International games exist but selection process, benefits, costs might differ."}
    ],
    timeline:[
      {year:1896,happened:"First modern Olympics in Athens",alternate:"International games emerge differently, possibly later"},
      {year:1936,happened:"Olympics used for propaganda (Berlin)",alternate:"International sports still used for nationalism"},
      {year:1984,happened:"Olympics become commercial",alternate:"International games become commercial under different model"},
      {year:2024,happened:"Olympics remain premier international event",alternate:"Similar international games; different branding and traditions"}
    ],
    impact:{lives:"Athletes and viewers: billions",econ:"$7B+ per Games",cultural:"Olympic values globally",reach:"206 national committees",timeline:"International sports develop differently"}},
  {id:"brac",name:"BRAC",born:1972,died:null,cat:"institutions",field:"Development",
    quote:"Creating opportunities for people to realize their potential.",
    contributions:["Largest NGO by employees","Microfinance pioneer","Health and education programs","Social enterprise model"],
    r:0.35,reasoning:"BRAC's scale in Bangladesh and model of integrated development was unique. Fazle Hasan Abed's vision was specific. Others did development; none at BRAC's scale or integration.",
    counterfactual:"Without BRAC, development work in Bangladesh still happens — many organizations were active. But BRAC's specific scale (largest NGO in the world by employees) and integrated model (microfinance + health + education + enterprises) was Fazle Hasan Abed's vision. Without it, Bangladeshi development is more fragmented, less scaled. The 'graduation' model of moving people out of poverty step-by-step doesn't exist in the same form. Bangladesh's remarkable poverty reduction might be slower.",
    ripples:[
      {category:"Bangladesh",detail:"Bangladesh's poverty reduction is slower without BRAC's scale. Development more fragmented."},
      {category:"Integration",detail:"BRAC's model of integrated services — microfinance + health + education — isn't pioneered the same way."},
      {category:"Scale",detail:"The idea that an NGO can achieve massive scale is less proven."},
      {category:"Social Enterprise",detail:"BRAC's social enterprises (Aarong, BRAC Dairy) don't exist. Different development funding model."}
    ],
    timeline:[
      {year:1972,happened:"BRAC founded after Bangladesh independence",alternate:"Development through many smaller organizations"},
      {year:1990,happened:"BRAC scales microfinance",alternate:"Microfinance in Bangladesh develops differently"},
      {year:2010,happened:"BRAC expands to 11 countries",alternate:"Model not exported; stays local"},
      {year:2024,happened:"BRAC reaches 100M+ people annually",alternate:"Development more fragmented; possibly less effective"}
    ],
    impact:{lives:"100M+ reached annually",econ:"$1B+ budget",cultural:"NGO scaling model",reach:"11 countries",timeline:"Development less integrated"}},
  {id:"savechildren",name:"Save the Children",born:1919,died:null,cat:"institutions",field:"Children's Aid",
    quote:"Every child deserves a future.",
    contributions:["Child rights advocacy since WWI","Emergency child protection","Education programs","Health interventions"],
    r:0.50,reasoning:"Eglantyne Jebb founded it and wrote rights declaration. Children's aid organizations were emerging. Save the Children's longevity is notable but field was developing.",
    counterfactual:"Without Save the Children, children's aid still develops — the impulse to help children was strong, especially after WWI's devastation. But Eglantyne Jebb specifically drafted what became the UN Declaration of the Rights of the Child. Without her and the organization, children's rights as a concept might develop differently. Other organizations fill the space, but the specific advocacy and framework differ.",
    ripples:[
      {category:"Children's Rights",detail:"Jebb's Declaration of the Rights of the Child influenced UN documents. Without it, different framing."},
      {category:"Emergency Response",detail:"Other organizations respond to children's emergencies. Capacity similar but not identical."},
      {category:"Longevity",detail:"105 years of institutional knowledge doesn't accumulate. Newer organizations fill space."},
      {category:"Advocacy",detail:"Children's advocacy exists but with different institutional history and credibility."}
    ],
    timeline:[
      {year:1919,happened:"Save the Children founded in UK",alternate:"Children's aid through other channels"},
      {year:1924,happened:"Declaration of Rights of the Child",alternate:"Children's rights framed differently"},
      {year:1989,happened:"UN Convention on Rights of the Child",alternate:"Convention might look different without Save's influence"},
      {year:2024,happened:"Save the Children in 120+ countries",alternate:"Similar reach through different organizations"}
    ],
    impact:{lives:"Millions of children annually",econ:"$2B+ annual budget",cultural:"Child rights foundation",reach:"120+ countries",timeline:"Children's aid organized similarly"}},
  {id:"worldvision",name:"World Vision",born:1950,died:null,cat:"institutions",field:"Humanitarian Aid",
    quote:"For every child, life in all its fullness.",
    contributions:["Child sponsorship model","Emergency relief","Community development","Christian humanitarian work"],
    r:0.50,reasoning:"Christian humanitarian organizations existed. World Vision's child sponsorship model was influential but not unique. Similar organizations emerged.",
    counterfactual:"Without World Vision, Christian humanitarian aid still exists — Compassion International, Catholic Relief Services, and others were active. But World Vision's child sponsorship model — connecting individual donors to individual children — was particularly effective at fundraising and engagement. Without it, this model develops differently. Christian humanitarian aid remains significant but with different organizational leadership.",
    ripples:[
      {category:"Sponsorship Model",detail:"Child sponsorship exists but might be less dominant. Different fundraising models."},
      {category:"Christian Aid",detail:"Same impulse, different organizations. Compassion or others might grow larger."},
      {category:"Emergency Response",detail:"Similar capacity through different organizations."},
      {category:"Scale",detail:"World Vision's $3B budget doesn't exist. Resources flow through other channels."}
    ],
    timeline:[
      {year:1950,happened:"World Vision founded for Korean War orphans",alternate:"Christian aid through other channels"},
      {year:1978,happened:"Child sponsorship model scales",alternate:"Different fundraising models dominate"},
      {year:2000,happened:"World Vision becomes largest relief org",alternate:"Different organization at this scale"},
      {year:2024,happened:"World Vision in 100+ countries",alternate:"Similar reach through different organizations"}
    ],
    impact:{lives:"100M+ annually",econ:"$3B+ annual budget",cultural:"Sponsorship model",reach:"100+ countries",timeline:"Christian aid organized similarly"}},
  {id:"aclu",name:"ACLU",born:1920,died:null,cat:"institutions",field:"Civil Liberties",
    quote:"Because freedom can't protect itself.",
    contributions:["Constitutional rights defense","Free speech advocacy","Civil rights litigation","Privacy protection"],
    r:0.40,reasoning:"Civil liberties needed defense in the US. Some organization would have emerged. ACLU's specific cases and approach have shaped American law significantly.",
    counterfactual:"Without ACLU, civil liberties defense still happens — lawyers care about rights, and the Constitution exists. But ACLU's specific strategic litigation shaped American law: Scopes trial, Japanese internment challenges, school desegregation support, Miranda rights. Without this specific organization's century of cases, American constitutional law looks different. Some rights might be narrower; some cases might not have been brought.",
    ripples:[
      {category:"Constitutional Law",detail:"Hundreds of ACLU cases shaped constitutional interpretation. Different cases, different law."},
      {category:"Free Speech",detail:"ACLU's consistent free speech defense — even for unpopular speech — might not exist as strongly."},
      {category:"Strategic Litigation",detail:"The model of using courts to advance rights is less developed without ACLU's example."},
      {category:"Organizational",detail:"Other civil liberties groups might grow larger or different approaches might dominate."}
    ],
    timeline:[
      {year:1920,happened:"ACLU founded",alternate:"Civil liberties defense more ad hoc"},
      {year:1925,happened:"Scopes Trial",alternate:"Evolution debate handled differently"},
      {year:1966,happened:"Miranda v. Arizona (ACLU amicus)",alternate:"Miranda rights might look different"},
      {year:2024,happened:"ACLU shapes rights debates",alternate:"Different organization or approach to civil liberties"}
    ],
    impact:{lives:"US civil liberties",econ:"Legal precedents",cultural:"Rights culture",reach:"United States",timeline:"Civil liberties defense weaker"}},
  {id:"naacp",name:"NAACP",born:1909,died:null,cat:"institutions",field:"Civil Rights",
    quote:"Oldest and boldest civil rights organization.",
    contributions:["Brown v. Board of Education","Anti-lynching campaigns","Voting rights advocacy","Legal strategy for equality"],
    r:0.35,reasoning:"African American organizing was happening. The NAACP's specific legal strategy — test cases building toward Brown — was distinctive and successful. Different organizations might have taken different paths.",
    counterfactual:"Without NAACP, Black civil rights organizing still happens — the injustice demanded response. But the NAACP's specific legal strategy was crucial: decades of carefully selected test cases building precedent toward Brown v. Board of Education. Thurgood Marshall and the Legal Defense Fund's approach was methodical and ultimately successful. Without it, desegregation might come later, through different means, or with different scope. The legal path to civil rights looks different.",
    ripples:[
      {category:"Legal Strategy",detail:"The decades-long legal strategy toward Brown doesn't exist. Different path to desegregation."},
      {category:"Brown v. Board",detail:"School desegregation might come later or through different legal reasoning."},
      {category:"Anti-Lynching",detail:"NAACP documented and publicized lynching. Without this, anti-lynching movement weaker."},
      {category:"Organizational",detail:"Different organization leads civil rights. Possibly more radical, possibly less effective legally."}
    ],
    timeline:[
      {year:1909,happened:"NAACP founded",alternate:"Black organizing through different channels"},
      {year:1930,happened:"NAACP legal strategy begins",alternate:"Different approach to civil rights — possibly more direct action earlier"},
      {year:1954,happened:"Brown v. Board of Education",alternate:"Desegregation through different path, different timing"},
      {year:2024,happened:"NAACP continues advocacy",alternate:"Different organization leads racial justice work"}
    ],
    impact:{lives:"African American rights",econ:"Economic integration",cultural:"Civil rights movement foundation",reach:"United States",timeline:"Civil rights develops differently"}},
  {id:"unesco",name:"UNESCO",born:1945,died:null,cat:"institutions",field:"Culture & Education",
    quote:"Building peace in the minds of men and women.",
    contributions:["World Heritage Sites","Education for all","Cultural preservation","Science cooperation"],
    r:0.55,reasoning:"UN was creating specialized agencies. Cultural and educational cooperation needed a forum. UNESCO's specific programs matter, but some agency would exist.",
    counterfactual:"Without UNESCO, cultural cooperation still happens — the UN would create some agency for education and culture. But UNESCO's specific programs — World Heritage Sites, Education for All, cultural preservation — have shaped global norms. Without it, there's no World Heritage list; cultural preservation is more national, less coordinated. International education standards develop differently.",
    ripples:[
      {category:"World Heritage",detail:"No World Heritage Sites list. Cultural preservation is more national, less globally coordinated."},
      {category:"Education",detail:"Education for All initiative doesn't exist in this form. Different framework for global education."},
      {category:"Cultural Preservation",detail:"Same impulse to preserve culture but less international coordination."},
      {category:"Science",detail:"International science cooperation happens but with different framework."}
    ],
    timeline:[
      {year:1945,happened:"UNESCO established",alternate:"Different UN agency for culture/education"},
      {year:1972,happened:"World Heritage Convention",alternate:"No World Heritage list; cultural preservation more national"},
      {year:1990,happened:"Education for All launched",alternate:"Different framework for global education"},
      {year:2024,happened:"UNESCO shapes cultural norms globally",alternate:"Cultural cooperation less coordinated"}
    ],
    impact:{lives:"Cultural preservation globally",econ:"Heritage tourism",cultural:"World heritage concept",reach:"193 member states",timeline:"Cultural preservation less coordinated"}},
  {id:"habitat",name:"UN-Habitat",born:1978,died:null,cat:"institutions",field:"Urban Development",
    quote:"For a better urban future.",
    contributions:["Urban development policy","Housing rights advocacy","Sustainable cities","Slum upgrading"],
    r:0.60,reasoning:"Urbanization was happening regardless. UN-Habitat has influenced policy but urban development would proceed. Its specific programs are less irreplaceable.",
    counterfactual:"Without UN-Habitat, urbanization still happens — it's driven by economics, not institutions. Cities grow regardless. But UN-Habitat has shaped how we think about urban development: housing rights, sustainable cities, slum upgrading methodologies. Without it, urban policy is more national, less coordinated. The right to adequate housing is less established as global norm. Some best practices don't spread as quickly.",
    ripples:[
      {category:"Urbanization",detail:"Cities grow regardless. UN-Habitat doesn't cause or prevent urbanization."},
      {category:"Housing Rights",detail:"Right to adequate housing is less established as global norm."},
      {category:"Best Practices",detail:"Urban development best practices spread more slowly without coordination."},
      {category:"Slum Upgrading",detail:"Approaches to informal settlements vary more without shared methodology."}
    ],
    timeline:[
      {year:1978,happened:"UN-Habitat established",alternate:"Urban policy remains more national"},
      {year:1996,happened:"Habitat II Conference",alternate:"Urban issues addressed without dedicated agency"},
      {year:2016,happened:"New Urban Agenda adopted",alternate:"No global urban framework"},
      {year:2024,happened:"UN-Habitat guides urban policy",alternate:"Urban development proceeds without global coordination"}
    ],
    impact:{lives:"Urban dwellers: billions",econ:"Urban development funding",cultural:"Right to housing",reach:"Global",timeline:"Urban policy less coordinated"}},
  {id:"icrc",name:"Int'l Committee of the Red Cross",born:1863,died:null,cat:"institutions",field:"Humanitarian Law",
    quote:"Even wars have limits.",
    contributions:["Geneva Conventions guardian","Prisoner visits","War victim protection","Humanitarian law development"],
    r:0.35,reasoning:"ICRC is the Geneva Conventions' guardian and has unique status in international law. Without ICRC specifically, humanitarian law might be very different.",
    counterfactual:"Without ICRC, international humanitarian law looks very different. Henry Dunant's vision after Solferino created both the Red Cross movement and the Geneva Conventions. Without this specific organization, the laws of war might be weaker, prisoner protections less defined, civilian protection less established. ICRC's unique neutral status — visiting prisoners, working in conflicts — might not exist. Wars would be even more brutal.",
    ripples:[
      {category:"Geneva Conventions",detail:"Without ICRC, Geneva Conventions might not exist or be weaker. Laws of war less developed."},
      {category:"Prisoner Visits",detail:"ICRC's neutral access to prisoners doesn't exist. POW treatment less monitored."},
      {category:"Neutral Humanitarian",detail:"The concept of neutral humanitarian space is weaker without ICRC's model."},
      {category:"War Victims",detail:"Protection of war victims is less developed. More suffering in conflicts."}
    ],
    timeline:[
      {year:1863,happened:"ICRC founded after Solferino",alternate:"No Red Cross movement; humanitarian law develops differently"},
      {year:1864,happened:"First Geneva Convention",alternate:"Laws of war develop more slowly or differently"},
      {year:1949,happened:"Fourth Geneva Convention (civilians)",alternate:"Civilian protection in war less established"},
      {year:2024,happened:"ICRC works in conflicts globally",alternate:"Neutral humanitarian access less established"}
    ],
    impact:{lives:"War victims protected",econ:"Humanitarian law compliance",cultural:"Laws of war norm",reach:"Global conflicts",timeline:"Humanitarian law weaker"}},
  {id:"rotary",name:"Rotary International",born:1905,died:null,cat:"institutions",field:"Service Organization",
    quote:"Service above self.",
    contributions:["Polio eradication funding","Community service","Youth exchange","Professional networking with purpose"],
    r:0.55,reasoning:"Service clubs were emerging. Rotary's specific model was influential but Lions, Kiwanis developed similarly. The service club concept would have spread.",
    counterfactual:"Without Rotary, service clubs still emerge — Lions, Kiwanis, and others developed the model independently. But Rotary's specific contribution is massive: $2B+ for polio eradication, making it near-complete. Without Rotary's commitment, polio eradication might not have happened or would be decades behind. The specific service club model spreads regardless; the polio achievement doesn't.",
    ripples:[
      {category:"Polio",detail:"Polio eradication is decades behind or doesn't happen. Rotary's $2B+ contribution is unique."},
      {category:"Service Clubs",detail:"Lions, Kiwanis fill the space. Service club concept spreads regardless."},
      {category:"Youth Exchange",detail:"Rotary Youth Exchange doesn't exist. Similar programs through other channels."},
      {category:"Local Service",detail:"Community service happens through other organizations. Similar impact."}
    ],
    timeline:[
      {year:1905,happened:"Rotary founded in Chicago",alternate:"Service clubs emerge through Lions, Kiwanis"},
      {year:1985,happened:"Rotary commits to polio eradication",alternate:"Polio eradication lacks major private funder"},
      {year:2020,happened:"Wild polio nearly eradicated",alternate:"Polio still endemic in many countries"},
      {year:2024,happened:"1.4M Rotary members globally",alternate:"Similar service club membership through different organizations"}
    ],
    impact:{lives:"Polio nearly eradicated",econ:"Billions in service projects",cultural:"Service ethic",reach:"1.4M members globally",timeline:"Service clubs develop similarly"}},
  {id:"nature",name:"The Nature Conservancy",born:1951,died:null,cat:"institutions",field:"Conservation",
    quote:"Protecting nature. Preserving life.",
    contributions:["Land preservation","Conservation easements","Science-based conservation","Corporate partnerships"],
    r:0.50,reasoning:"Land trusts existed. TNC's scale and corporate partnership model was distinctive but land conservation would have happened through other vehicles.",
    counterfactual:"Without TNC, land conservation still happens — land trusts existed before, and the impulse to preserve nature was growing. But TNC's scale ($1B+ annual budget, largest environmental NGO) and its pragmatic approach — working with corporations, buying land directly — was distinctive. Without it, conservation is more confrontational, less land is directly preserved, and the conservation easement model is less developed.",
    ripples:[
      {category:"Scale",detail:"No single conservation organization achieves TNC's scale. Less land directly preserved."},
      {category:"Pragmatism",detail:"Conservation is more confrontational without TNC's corporate partnership model."},
      {category:"Easements",detail:"Conservation easements develop more slowly without TNC's pioneering."},
      {category:"Science",detail:"Science-based conservation has different institutional home."}
    ],
    timeline:[
      {year:1951,happened:"TNC founded",alternate:"Land conservation through smaller trusts"},
      {year:1980,happened:"TNC scales up land preservation",alternate:"Less land directly preserved"},
      {year:2000,happened:"TNC works with corporations",alternate:"Conservation-corporate partnerships less developed"},
      {year:2024,happened:"TNC largest environmental NGO",alternate:"Conservation more fragmented; less land preserved"}
    ],
    impact:{lives:"Ecosystems preserved",econ:"$1B+ annual budget",cultural:"Conservation pragmatism",reach:"70+ countries",timeline:"Conservation less corporate-partnered"}},
  {id:"hrw",name:"Human Rights Watch",born:1978,died:null,cat:"institutions",field:"Human Rights",
    quote:"Defending human rights worldwide.",
    contributions:["Human rights investigations","Naming and shaming","Policy advocacy","Arms trade monitoring"],
    r:0.45,reasoning:"Human rights documentation was needed. HRW's investigative model built on and competed with Amnesty. The field was developing; HRW shaped its direction.",
    counterfactual:"Without HRW, human rights documentation still happens — Amnesty International existed, and the field was growing. But HRW's specific approach — detailed investigative reports, naming and shaming, policy advocacy in Washington — was influential. It competed with and pushed Amnesty. Without HRW, the field is less professionalized, reports are less detailed, and US policy advocacy is weaker. Amnesty might dominate more.",
    ripples:[
      {category:"Investigation",detail:"HRW's detailed reports set standards. Without them, documentation is less rigorous."},
      {category:"Policy",detail:"HRW's Washington advocacy is influential. Without it, human rights has less US policy impact."},
      {category:"Competition",detail:"HRW pushed Amnesty to improve. Without competition, Amnesty might be less effective."},
      {category:"Accountability",detail:"Some abuses documented by HRW go undocumented or less thoroughly documented."}
    ],
    timeline:[
      {year:1978,happened:"Helsinki Watch founded (became HRW)",alternate:"Human rights documentation through Amnesty primarily"},
      {year:1988,happened:"Expanded to Human Rights Watch",alternate:"Regional focus continues; less global coverage"},
      {year:2000,happened:"HRW shapes international debates",alternate:"Amnesty dominates; different approach prevails"},
      {year:2024,happened:"HRW investigates globally",alternate:"Human rights documentation less professionalized"}
    ],
    impact:{lives:"Human rights protection",econ:"Policy influence",cultural:"Accountability norm",reach:"90+ countries",timeline:"Human rights documentation different"}},
  {id:"redcrescentsocieties",name:"Int'l Fed. of Red Cross/Crescent",born:1919,died:null,cat:"institutions",field:"Disaster Response",
    quote:"Together for humanity.",
    contributions:["Disaster response coordination","National society support","Blood services","Community resilience"],
    r:0.55,reasoning:"National Red Cross societies needed coordination. The Federation serves this function. Some coordinating body would exist; this specific structure developed from history.",
    counterfactual:"Without the International Federation, Red Cross societies still exist nationally — they predated the Federation. But coordination of disaster response, standards for national societies, and international collaboration would be weaker. Each Red Cross society operates more independently, less efficiently. Blood services are less standardized. Disaster response is more ad hoc.",
    ripples:[
      {category:"Coordination",detail:"National societies coordinate less. Disaster response is more ad hoc, less efficient."},
      {category:"Standards",detail:"Blood services and other programs are less standardized across countries."},
      {category:"Surge Capacity",detail:"International surge capacity for disasters is weaker without coordinating body."},
      {category:"National Societies",detail:"Red Cross societies still exist nationally; international coordination is weaker."}
    ],
    timeline:[
      {year:1919,happened:"Federation established",alternate:"National societies coordinate less formally"},
      {year:1960,happened:"Federation coordinates global disaster response",alternate:"Disaster response more fragmented"},
      {year:2020,happened:"Federation coordinates COVID response",alternate:"Pandemic response by national societies less coordinated"},
      {year:2024,happened:"192 national societies coordinated",alternate:"National societies more independent; coordination ad hoc"}
    ],
    impact:{lives:"Disaster victims globally",econ:"$2B+ annual operations",cultural:"Voluntary humanitarian action",reach:"192 national societies",timeline:"Red Cross coordination different"}},
  {id:"cern",name:"CERN",born:1954,died:null,cat:"institutions",field:"Scientific Research",
    quote:"Science for peace.",
    contributions:["Large Hadron Collider","Higgs boson discovery","World Wide Web birthplace","International physics cooperation"],
    r:0.40,reasoning:"European physics needed big science cooperation. CERN's specific achievements — Higgs, WWW — were products of this institution. Without CERN, particle physics advances differently.",
    counterfactual:"Without CERN, particle physics still advances — Fermilab in the US, other labs existed. But CERN's scale and international cooperation produced specific results: the Large Hadron Collider, the Higgs boson discovery, and crucially, the World Wide Web (invented at CERN by Tim Berners-Lee). Without CERN, the web might be invented elsewhere, differently. Particle physics advances more slowly without the largest accelerators. European physics cooperation looks different.",
    ripples:[
      {category:"World Wide Web",detail:"Berners-Lee invented the web at CERN. Without CERN, the web is invented elsewhere, differently, possibly later."},
      {category:"Higgs Boson",detail:"Discovered at LHC. Without CERN, discovery comes later through different accelerator."},
      {category:"European Physics",detail:"European cooperation in physics develops differently. US might dominate more."},
      {category:"Big Science",detail:"CERN is model for international big science. Without it, different model for cooperation."}
    ],
    timeline:[
      {year:1954,happened:"CERN founded",alternate:"European physics less coordinated; US dominates more"},
      {year:1989,happened:"Tim Berners-Lee invents WWW at CERN",alternate:"Something like the web invented elsewhere, differently"},
      {year:2012,happened:"Higgs boson discovered at LHC",alternate:"Higgs discovery delayed; different accelerator, different timing"},
      {year:2024,happened:"CERN largest particle physics center",alternate:"Particle physics more fragmented; smaller accelerators"}
    ],
    impact:{lives:"Scientific knowledge",econ:"Technology spinoffs",cultural:"Big science model",reach:"23 member states",timeline:"Particle physics advances slower"}},
  {id:"ieee",name:"IEEE",born:1884,died:null,cat:"institutions",field:"Technology Standards",
    quote:"Advancing technology for humanity.",
    contributions:["Technical standards (WiFi, Ethernet)","Engineering education","Professional community","Innovation ecosystem"],
    r:0.55,reasoning:"Engineering societies were forming globally. Standards bodies were needed. IEEE's specific standards are influential but alternatives would have emerged.",
    counterfactual:"Without IEEE, technical standards still develop — they had to, for technology to work together. But IEEE's specific standards — WiFi (802.11), Ethernet (802.3), and hundreds of others — have specific forms. Without IEEE, different standards bodies create different standards. Technology might be less interoperable, or just different. The engineering profession still professionalizes but through different organizations.",
    ripples:[
      {category:"WiFi",detail:"Some wireless standard exists but might look different. Different name, different technical specs."},
      {category:"Ethernet",detail:"Local networking develops but with different standard, different history."},
      {category:"Interoperability",detail:"Standards exist but might be less unified. More fragmentation possible."},
      {category:"Engineering Profession",detail:"Professional engineering societies exist but IEEE's specific role is filled differently."}
    ],
    timeline:[
      {year:1884,happened:"IEEE predecessors founded",alternate:"Engineering societies form differently"},
      {year:1980,happened:"Ethernet standard (802.3)",alternate:"Local networking standard developed elsewhere"},
      {year:1997,happened:"WiFi standard (802.11)",alternate:"Wireless networking standard from different body"},
      {year:2024,happened:"IEEE standards underpin global technology",alternate:"Different standards bodies; similar function but different specs"}
    ],
    impact:{lives:"Technology users globally",econ:"Standards enable $trillions",cultural:"Engineering profession",reach:"160+ countries",timeline:"Standards develop differently"}},
  {id:"wikimedia",name:"Wikimedia Foundation",born:2003,died:null,cat:"institutions",field:"Knowledge",
    quote:"Imagine a world in which every single human being can freely share in the sum of all knowledge.",
    contributions:["Wikipedia","Free knowledge movement","Crowdsourced encyclopedia","Open content model"],
    r:0.35,reasoning:"Jimmy Wales and Larry Sanger's specific vision created Wikipedia. The open content movement was broader, but Wikipedia's model and success were distinctive achievements.",
    counterfactual:"Without Wikipedia, encyclopedic knowledge is less accessible. Britannica went digital but behind paywalls. The specific model of crowdsourced, freely editable, anyone-can-contribute encyclopedia was Wales and Sanger's invention. Without it, online encyclopedias are either commercial (paywalled) or smaller projects. The democratization of knowledge happens more slowly. Students, researchers, curious people have less free access to information.",
    ripples:[
      {category:"Knowledge Access",detail:"Without Wikipedia's free model, encyclopedic knowledge is mostly paywalled or less comprehensive."},
      {category:"Crowdsourcing",detail:"Wikipedia proved crowdsourcing could work at scale. Without it, crowdsourcing is less validated."},
      {category:"Research",detail:"Students and researchers lose free starting point. Research begins differently."},
      {category:"Information Landscape",detail:"The internet is more commercial for knowledge. Free knowledge movement is weaker."}
    ],
    timeline:[
      {year:2001,happened:"Wikipedia launched",alternate:"Commercial encyclopedias dominate online"},
      {year:2003,happened:"Wikimedia Foundation established",alternate:"No institutional support for free knowledge"},
      {year:2010,happened:"Wikipedia becomes 5th most visited site",alternate:"Commercial sites dominate knowledge access"},
      {year:2024,happened:"6B+ monthly users access free knowledge",alternate:"Knowledge access more commercial, less equal"}
    ],
    impact:{lives:"6B+ monthly users",econ:"Knowledge access democratized",cultural:"Information commons",reach:"Global",timeline:"Encyclopedic knowledge less accessible"}},
  {id:"rockefeller",name:"Rockefeller Foundation",born:1913,died:null,cat:"institutions",field:"Philanthropy",
    quote:"For the well-being of humanity throughout the world.",
    contributions:["Public health modernization","Green Revolution funding","University funding","Medical education"],
    r:0.40,reasoning:"Modern philanthropy was developing. Rockefeller Foundation's specific programs — hookworm eradication, Green Revolution — were influential. Others might have funded differently.",
    counterfactual:"Without Rockefeller Foundation, philanthropy still develops — Carnegie and others were active. But Rockefeller's specific programs had massive impact: hookworm eradication in the American South, funding the Green Revolution that fed billions, establishing modern public health. Without these specific programs, hookworm persists longer, the Green Revolution is delayed, and public health develops differently. The foundation essentially invented modern scientific philanthropy.",
    ripples:[
      {category:"Green Revolution",detail:"Rockefeller funded Norman Borlaug's work. Without it, Green Revolution delayed; millions more die in famines."},
      {category:"Public Health",detail:"Rockefeller established modern public health model. Without it, public health develops differently."},
      {category:"Medical Education",detail:"Flexner Report and medical school funding. Without it, US medical education reforms differently."},
      {category:"Scientific Philanthropy",detail:"Rockefeller pioneered strategic, scientific philanthropy. Without it, philanthropy is more charitable, less strategic."}
    ],
    timeline:[
      {year:1913,happened:"Rockefeller Foundation established",alternate:"Large-scale philanthropy through other channels"},
      {year:1943,happened:"Rockefeller funds agricultural research (Green Revolution)",alternate:"Agricultural research less funded; famines continue"},
      {year:1960,happened:"Green Revolution spreads globally",alternate:"Asian famines persist; hundreds of millions at risk"},
      {year:2024,happened:"Rockefeller Foundation continues global health work",alternate:"Different philanthropic landscape; less strategic focus"}
    ],
    impact:{lives:"Billions via Green Revolution",econ:"$5B+ grants over history",cultural:"Scientific philanthropy model",reach:"Global",timeline:"Philanthropy develops differently"}},
  {id:"fordfd",name:"Ford Foundation",born:1936,died:null,cat:"institutions",field:"Social Change",
    quote:"Working with visionaries on the frontlines of social change worldwide.",
    contributions:["Civil rights funding","International development","Arts and culture","Social justice advocacy"],
    r:0.50,reasoning:"Large foundations were emerging. Ford's specific focus on social justice and international development was influential but the philanthropic sector was growing broadly.",
    counterfactual:"Without Ford Foundation, progressive philanthropy still exists — other foundations and donors supported similar causes. But Ford's specific programs mattered: funding the NAACP Legal Defense Fund, supporting PBS and public broadcasting, international development work. Without Ford, civil rights legal work has less funding, public broadcasting looks different, and international development has different funders. The progressive philanthropic sector is smaller.",
    ripples:[
      {category:"Civil Rights",detail:"Ford funded civil rights legal work. Without it, less legal capacity for desegregation cases."},
      {category:"Public Broadcasting",detail:"Ford was crucial early funder of PBS. Without it, public broadcasting develops differently."},
      {category:"International Development",detail:"Ford funded development globally. Different funders, different priorities."},
      {category:"Arts",detail:"Ford's arts funding shaped American cultural institutions. Different funding, different arts landscape."}
    ],
    timeline:[
      {year:1936,happened:"Ford Foundation established",alternate:"Progressive causes funded through other channels"},
      {year:1950,happened:"Ford becomes largest foundation",alternate:"Philanthropic landscape more fragmented"},
      {year:1967,happened:"Ford funds PBS heavily",alternate:"Public broadcasting has different funding model"},
      {year:2024,happened:"Ford Foundation leads progressive philanthropy",alternate:"Progressive philanthropy exists but with different leadership"}
    ],
    impact:{lives:"Social change globally",econ:"$16B endowment",cultural:"Progressive philanthropy",reach:"Global",timeline:"Progressive philanthropy still emerges"}},
  {id:"nih",name:"National Institutes of Health",born:1887,died:null,cat:"institutions",field:"Medical Research",
    quote:"Turning discovery into health.",
    contributions:["Medical research funding","Drug development support","Disease research coordination","Scientific workforce training"],
    r:0.45,reasoning:"Government medical research was needed. Other countries developed their own systems. NIH's scale ($45B+) and model were influential; biomedical research would have proceeded but differently.",
    counterfactual:"Without NIH, medical research still happens — universities, pharmaceutical companies, and other governments fund research. But NIH's scale ($45B+ annually) is unique. It funds basic research that industry won't, trains the scientific workforce, and coordinates disease-specific research. Without it, US medical research is slower, more fragmented, more dependent on industry. Many discoveries come later or not at all. The US isn't the global leader in biomedical research.",
    ripples:[
      {category:"Basic Research",detail:"NIH funds basic research industry won't. Without it, basic science is underfunded."},
      {category:"Training",detail:"NIH trains most US biomedical researchers. Without it, smaller scientific workforce."},
      {category:"Coordination",detail:"NIH coordinates cancer, heart disease, etc. research. Without it, research more fragmented."},
      {category:"Global Leadership",detail:"US might not be biomedical research leader. Europe or others might lead instead."}
    ],
    timeline:[
      {year:1930,happened:"NIH established in current form",alternate:"Medical research through universities and industry"},
      {year:1971,happened:"War on Cancer",alternate:"Cancer research less coordinated"},
      {year:2000,happened:"Human Genome Project completed",alternate:"Genome project takes longer or led by others"},
      {year:2024,happened:"NIH funds $45B+ annually",alternate:"US medical research smaller, slower, more fragmented"}
    ],
    impact:{lives:"Medical advances for billions",econ:"Biomedical industry",cultural:"Science funding model",reach:"United States, global influence",timeline:"US medical research slower"}},
  {id:"undp",name:"UN Development Programme",born:1966,died:null,cat:"institutions",field:"Development",
    quote:"Empowered lives. Resilient nations.",
    contributions:["Human Development Index","Development coordination","Technical assistance","Millennium/Sustainable Development Goals"],
    r:0.55,reasoning:"UN development work needed coordination. Some program would have existed. UNDP's specific contribution was the Human Development Index — reframing development beyond GDP.",
    counterfactual:"Without UNDP, development coordination still happens — the UN would create some program. But UNDP's specific contribution was the Human Development Index, which reframed development beyond GDP to include health, education, and living standards. Without this, development success is measured primarily by economic growth. The framing of what 'development' means is different, possibly narrower. Technical assistance continues but with different coordination.",
    ripples:[
      {category:"Human Development Index",detail:"Without HDI, development measured by GDP. Health and education get less attention."},
      {category:"Development Framing",detail:"'Development' might remain more economic, less human-centered."},
      {category:"Coordination",detail:"UN development coordination happens but through different structure."},
      {category:"SDGs",detail:"Sustainable Development Goals might look different without UNDP's framing influence."}
    ],
    timeline:[
      {year:1966,happened:"UNDP established",alternate:"UN development coordination through different body"},
      {year:1990,happened:"Human Development Index created",alternate:"Development measured primarily by GDP"},
      {year:2000,happened:"Millennium Development Goals",alternate:"Development goals framed differently"},
      {year:2024,happened:"UNDP in 170 countries",alternate:"Development coordination exists but with different framing"}
    ],
    impact:{lives:"Development in 170+ countries",econ:"$5B+ annual spending",cultural:"Human development concept",reach:"170 countries",timeline:"Development framed differently"}},
  {id:"irc",name:"International Rescue Committee",born:1933,died:null,cat:"institutions",field:"Refugee Aid",
    quote:"From harm to home.",
    contributions:["Refugee resettlement","Emergency response","Post-conflict recovery","Integration services"],
    r:0.50,reasoning:"Refugee organizations were forming. IRC's founding to help refugees fleeing Hitler was specific to moment. Similar organizations would have emerged for subsequent crises.",
    counterfactual:"Without IRC, refugee aid still happens — the crises that created refugees demanded response. But IRC's specific founding moment — Albert Einstein on the board, helping refugees flee Hitler — gave it credibility and model. Without IRC, refugee resettlement in the US might be less organized, integration services weaker. Other organizations fill the space but with different histories and possibly different approaches.",
    ripples:[
      {category:"US Resettlement",detail:"IRC is major US resettlement agency. Without it, resettlement capacity is lower or organized differently."},
      {category:"Integration",detail:"IRC's integration services model might not exist. Refugees have less support adjusting."},
      {category:"Emergency Response",detail:"Same crises occur; different organizations respond."},
      {category:"Institutional Knowledge",detail:"90 years of refugee expertise doesn't accumulate. Newer organizations have less experience."}
    ],
    timeline:[
      {year:1933,happened:"IRC founded to help refugees from Hitler",alternate:"Refugee aid through other channels"},
      {year:1960,happened:"IRC expands to global crises",alternate:"Refugee response through different organizations"},
      {year:2000,happened:"IRC major resettlement agency",alternate:"US resettlement organized differently"},
      {year:2024,happened:"IRC in 40+ countries",alternate:"Similar reach through different organizations"}
    ],
    impact:{lives:"Millions of refugees aided",econ:"$1B+ annual budget",cultural:"Refugee integration model",reach:"40+ countries",timeline:"Refugee aid organized similarly"}},
  {id:"mercycorps",name:"Mercy Corps",born:1979,died:null,cat:"institutions",field:"Humanitarian Aid",
    quote:"Mercy Corps is a global team of humanitarians.",
    contributions:["Crisis response","Market-based development","Youth programs","Climate resilience"],
    r:0.55,reasoning:"Humanitarian organizations proliferated. Mercy Corps' market-based approach was distinctive but the sector was growing. Similar organizations would have filled its niche.",
    counterfactual:"Without Mercy Corps, humanitarian aid continues — the sector was growing rapidly. But Mercy Corps pioneered market-based approaches to aid, trying to build sustainable local economies rather than just delivering supplies. Without this specific model, market-based aid develops more slowly. Similar organizations fill the space; the specific approach to development might be different, possibly more traditional aid-based.",
    ripples:[
      {category:"Market-Based Aid",detail:"Mercy Corps pioneered market approaches. Without it, this model develops more slowly."},
      {category:"Youth Programs",detail:"Mercy Corps youth programs don't exist. Similar programs through other organizations."},
      {category:"Climate Resilience",detail:"Climate adaptation work continues through other channels."},
      {category:"Sector",detail:"Humanitarian sector grows regardless; Mercy Corps' specific niche filled by others."}
    ],
    timeline:[
      {year:1979,happened:"Mercy Corps founded",alternate:"Humanitarian sector grows through other organizations"},
      {year:2000,happened:"Mercy Corps expands market-based approaches",alternate:"Market-based aid develops differently"},
      {year:2020,happened:"Mercy Corps reaches 50M+ people",alternate:"Similar reach through different organizations"},
      {year:2024,happened:"Mercy Corps leads climate resilience work",alternate:"Climate adaptation through other channels"}
    ],
    impact:{lives:"50M+ annually",econ:"$600M+ annual budget",cultural:"Market-based aid model",reach:"40+ countries",timeline:"Market-based aid develops anyway"}},
  {id:"wef",name:"World Economic Forum",born:1971,died:null,cat:"institutions",field:"Global Governance",
    quote:"Committed to improving the state of the world.",
    contributions:["Davos meetings","Global competitiveness rankings","Stakeholder capitalism advocacy","Public-private partnerships"],
    r:0.50,reasoning:"Elite global gatherings were happening. Klaus Schwab's specific vision shaped WEF, but similar forums would have emerged. The function of elite networking would be filled.",
    counterfactual:"Without WEF, global elite gatherings still happen — the demand exists. But Davos specifically, with its mix of business, government, and celebrity, was Klaus Schwab's creation. Without it, elite networking happens through different venues: Bilderberg expands, other conferences emerge. 'Davos Man' as concept doesn't exist. Global economic coordination happens but through different channels and possibly with different ideological framing.",
    ripples:[
      {category:"Davos",detail:"The 'Davos' brand doesn't exist. Elite gatherings happen but with different character."},
      {category:"Stakeholder Capitalism",detail:"WEF promoted stakeholder capitalism. Without it, shareholder primacy might face less organized alternative."},
      {category:"Rankings",detail:"Global competitiveness rankings don't exist in this form. Different metrics might dominate."},
      {category:"Elite Network",detail:"Same elites network but through different forums. Different culture develops."}
    ],
    timeline:[
      {year:1971,happened:"WEF founded as European Management Forum",alternate:"Elite gatherings through other venues"},
      {year:1987,happened:"Renamed World Economic Forum",alternate:"No single dominant elite forum"},
      {year:2000,happened:"Davos becomes global elite shorthand",alternate:"Different shorthand for elite gatherings"},
      {year:2024,happened:"WEF shapes global economic discourse",alternate:"Similar functions through different channels"}
    ],
    impact:{lives:"Policy influence globally",econ:"Business-government interface",cultural:"Davos culture",reach:"Global elites",timeline:"Elite forums develop similarly"}},
  {id:"aspen",name:"Aspen Institute",born:1949,died:null,cat:"institutions",field:"Policy & Leadership",
    quote:"Leadership principles, ideas in action.",
    contributions:["Executive seminars","Policy programs","Leadership development","Great ideas exploration"],
    r:0.60,reasoning:"Policy institutes were forming. Aspen's specific humanities-based leadership model was distinctive but think tanks and leadership programs proliferated regardless.",
    counterfactual:"Without Aspen Institute, leadership development and policy discussion continue — the demand exists. But Aspen's specific model — Great Books seminars for executives, humanities-based leadership — was distinctive. Without it, executive education is more MBA-focused, less humanities-grounded. Policy discussions happen through other institutes. The 'Aspen Ideas Festival' format doesn't exist; ideas conferences take different forms.",
    ripples:[
      {category:"Leadership Model",detail:"Humanities-based executive development is less prominent. More MBA-style training."},
      {category:"Ideas Festivals",detail:"Aspen Ideas Festival doesn't exist. Similar events through different channels."},
      {category:"Policy Discussion",detail:"Policy institutes exist; Aspen's specific flavor doesn't."},
      {category:"Executive Education",detail:"Executive programs are more business-focused, less liberal arts."}
    ],
    timeline:[
      {year:1949,happened:"Aspen Institute founded",alternate:"Leadership development through other channels"},
      {year:1970,happened:"Aspen seminars become elite tradition",alternate:"Executive education more business school focused"},
      {year:2005,happened:"Aspen Ideas Festival launches",alternate:"Ideas conferences through different venues"},
      {year:2024,happened:"Aspen shapes leadership culture",alternate:"Leadership development exists but with different flavor"}
    ],
    impact:{lives:"Leaders shaped",econ:"Policy influence",cultural:"Ideas-based leadership",reach:"United States, global",timeline:"Leadership development continues"}},
  {id:"cfr",name:"Council on Foreign Relations",born:1921,died:null,cat:"institutions",field:"Foreign Policy",
    quote:"An independent, nonpartisan membership organization, think tank, and publisher.",
    contributions:["Foreign Affairs journal","Policy expertise","Elite network","US foreign policy influence"],
    r:0.50,reasoning:"Foreign policy elites needed a forum. CFR served this function in the US. Other countries developed their own institutes. The function would be served somehow.",
    counterfactual:"Without CFR, US foreign policy establishment still forms — the need exists. But CFR specifically shaped how US foreign policy elites think and network. Foreign Affairs journal doesn't exist; a different publication becomes the forum. The specific network of CFR members — rotating through government and private sector — doesn't form. US foreign policy might be more fragmented, less cohesive establishment view.",
    ripples:[
      {category:"Foreign Affairs",detail:"The journal doesn't exist. Different publication shapes foreign policy discourse."},
      {category:"Network",detail:"CFR membership network doesn't exist. Foreign policy elite networks differently."},
      {category:"Expertise",detail:"Foreign policy expertise develops but through different institutional home."},
      {category:"Establishment",detail:"US foreign policy establishment might be less cohesive without CFR as focal point."}
    ],
    timeline:[
      {year:1921,happened:"CFR founded",alternate:"Foreign policy expertise through different channels"},
      {year:1945,happened:"CFR shapes postwar order thinking",alternate:"Postwar planning through different institutions"},
      {year:1970,happened:"CFR seen as establishment center",alternate:"Foreign policy establishment less centralized"},
      {year:2024,happened:"CFR continues shaping policy debate",alternate:"Foreign policy debate through different forums"}
    ],
    impact:{lives:"US foreign policy shaped",econ:"Policy research",cultural:"Foreign policy establishment",reach:"United States",timeline:"Foreign policy think tanks emerge"}},
  {id:"brookings",name:"Brookings Institution",born:1916,died:null,cat:"institutions",field:"Policy Research",
    quote:"Quality. Independence. Impact.",
    contributions:["Centrist policy research","Government expertise pool","Economic policy analysis","Evidence-based policy"],
    r:0.55,reasoning:"Think tanks were forming in the US. Brookings was influential in shaping policy research norms, but the sector was developing. Similar institutions would have emerged.",
    counterfactual:"Without Brookings, policy research continues — think tanks were emerging. But Brookings shaped the model: nonpartisan, expert-driven, evidence-based. It became the gold standard against which other think tanks measured themselves. Without it, policy research might be more partisan earlier, less respected. The 'revolving door' between Brookings and government might work differently.",
    ripples:[
      {category:"Model",detail:"Brookings set the model for nonpartisan research. Without it, think tanks might be more partisan."},
      {category:"Revolving Door",detail:"Brookings scholars move into government. Without it, different expertise pipeline."},
      {category:"Credibility",detail:"Brookings' reputation for nonpartisanship doesn't exist. Policy research less trusted."},
      {category:"Economic Policy",detail:"Brookings shapes economic policy debate. Different institution might dominate."}
    ],
    timeline:[
      {year:1916,happened:"Brookings founded",alternate:"Policy research through other channels"},
      {year:1950,happened:"Brookings becomes policy research model",alternate:"Think tanks develop without this standard"},
      {year:1980,happened:"Brookings scholars fill government roles",alternate:"Different expertise pipeline for government"},
      {year:2024,happened:"Brookings shapes centrist policy debate",alternate:"Policy debate might be more partisan without this anchor"}
    ],
    impact:{lives:"US policy shaped",econ:"Policy analysis model",cultural:"Nonpartisan expertise ideal",reach:"United States, global influence",timeline:"Policy research continues"}},
  {id:"rand",name:"RAND Corporation",born:1948,died:null,cat:"institutions",field:"Research & Analysis",
    quote:"Research and analysis to inform public policy decisions.",
    contributions:["Systems analysis development","Game theory applications","Nuclear strategy analysis","Think tank model pioneer"],
    r:0.45,reasoning:"Cold War demanded policy analysis. RAND pioneered systems analysis that spread globally. Military-academic complex was forming anyway, but RAND's specific contributions shaped how governments think.",
    counterfactual:"Without RAND, Cold War strategic analysis still happens — the stakes demanded it. But RAND specifically pioneered systems analysis, game theory in policy, and the think tank model that others copied. Without RAND, nuclear strategy is analyzed differently — possibly less systematically. The way governments approach complex problems might be different. Systems analysis as methodology spreads more slowly or through different channels.",
    ripples:[
      {category:"Systems Analysis",detail:"RAND pioneered systems analysis. Without it, this methodology develops differently."},
      {category:"Nuclear Strategy",detail:"RAND shaped how nuclear war was analyzed. Different institution, different frameworks."},
      {category:"Think Tank Model",detail:"RAND was model for policy think tanks. Without it, the sector develops differently."},
      {category:"Government Analysis",detail:"How governments approach complex problems might be less systematic."}
    ],
    timeline:[
      {year:1948,happened:"RAND spun off from Air Force",alternate:"Defense analysis through different channels"},
      {year:1960,happened:"RAND shapes nuclear strategy",alternate:"Nuclear strategy analyzed with different frameworks"},
      {year:1970,happened:"RAND alumni spread methodology",alternate:"Systems analysis spreads more slowly"},
      {year:2024,happened:"RAND continues defense and policy analysis",alternate:"Policy analysis exists but with different methodology traditions"}
    ],
    impact:{lives:"Cold War policy shaped",econ:"Defense analysis industry",cultural:"Rational analysis culture",reach:"US, allied nations",timeline:"Strategic analysis develops differently"}},
  {id:"carnegieendow",name:"Carnegie Endowment for International Peace",born:1910,died:null,cat:"institutions",field:"International Affairs",
    quote:"Global network of policy experts for conflict resolution.",
    contributions:["International peace research","Policy dialogue across nations","Nuclear nonproliferation work","Democracy promotion"],
    r:0.55,reasoning:"Peace research institutions were forming. Carnegie was early and influential but the field developed through multiple organizations.",
    counterfactual:"Without Carnegie Endowment, peace research continues — the field was developing. But Carnegie was early, established in 1910, before WWI. Its specific programs — nuclear nonproliferation work, democracy promotion, international dialogue — shaped how international affairs is studied and practiced. Without it, peace research develops through other institutions but with different focus and possibly less prestige.",
    ripples:[
      {category:"Peace Research",detail:"Carnegie was early mover in peace research. Without it, field develops through other institutions."},
      {category:"Nonproliferation",detail:"Carnegie's nuclear work is influential. Without it, nonproliferation analysis has different home."},
      {category:"Democracy Promotion",detail:"Carnegie shaped democracy promotion thinking. Without it, different frameworks dominate."},
      {category:"International Dialogue",detail:"Carnegie's global network doesn't exist. Cross-border dialogue happens differently."}
    ],
    timeline:[
      {year:1910,happened:"Carnegie Endowment founded",alternate:"Peace research through other channels"},
      {year:1945,happened:"Carnegie shapes postwar institution thinking",alternate:"Postwar order designed with different inputs"},
      {year:1990,happened:"Carnegie expands nonproliferation work",alternate:"Nonproliferation research through different institutions"},
      {year:2024,happened:"Carnegie continues international affairs analysis",alternate:"International affairs analysis exists; different institutional landscape"}
    ],
    impact:{lives:"International relations shaped",econ:"Policy research",cultural:"Peace research field",reach:"Global",timeline:"Peace research continues via others"}},
  {id:"rockfound",name:"Rockefeller Foundation",born:1913,died:null,cat:"institutions",field:"Philanthropy",
    quote:"Promoting the well-being of humanity throughout the world.",
    contributions:["Green Revolution funding","Public health globally","Social science development","University funding"],
    r:0.40,reasoning:"The Green Revolution specifically — funding agricultural research that averted famines — was Rockefeller's major impact. Norman Borlaug's work depended on their support. Billions didn't starve because of this specific program.",
    counterfactual:"Without Rockefeller Foundation (duplicate entry — see main entry above), the Green Revolution might be delayed significantly. Rockefeller funded Norman Borlaug's work that fed billions. Without it, famines of the 1960s-70s might have killed hundreds of millions more.",
    ripples:[{category:"Duplicate Entry",detail:"See main Rockefeller Foundation entry for full analysis."}],
    timeline:[{year:1913,happened:"Rockefeller Foundation established",alternate:"See main entry"}],
    impact:{lives:"Green Revolution: 1B+ lives",econ:"Agricultural transformation",cultural:"Strategic philanthropy model",reach:"Global agriculture",timeline:"Green Revolution delayed; more famines"}},
  {id:"fordfound",name:"Ford Foundation",born:1936,died:null,cat:"institutions",field:"Philanthropy",
    quote:"Working with visionaries on the frontlines of social change.",
    contributions:["Civil rights funding","Public broadcasting support","International development","Arts funding"],
    r:0.50,reasoning:"Large philanthropy was growing. Ford's specific programs mattered — PBS, civil rights legal work — but wealthy families were establishing foundations. Alternative funders would have emerged.",
    counterfactual:"Without Ford Foundation (duplicate entry), see main Ford Foundation entry above for full counterfactual analysis. Progressive philanthropy develops through other wealthy donors.",
    ripples:[
      {category:"Duplicate Entry",detail:"See main Ford Foundation entry for full analysis."}
    ],
    timeline:[
      {year:1936,happened:"Ford Foundation established",alternate:"See main entry"}
    ],
    impact:{lives:"Social movements supported",econ:"$16B endowment deployed",cultural:"Progressive philanthropy",reach:"Global",timeline:"Progressive causes find other funding"}},
  {id:"trilateral",name:"Trilateral Commission",born:1973,died:null,cat:"institutions",field:"International Relations",
    quote:"Foster closer cooperation among core democratic industrialized areas.",
    contributions:["US-Europe-Japan elite coordination","Policy recommendations","Elite consensus building","Globalization framework"],
    r:0.60,reasoning:"Elite coordination was happening through multiple channels. Trilateral formalized one version, but similar networks existed. Its influence is often overstated.",
    counterfactual:"Without the Trilateral Commission, elite coordination still happens — CFR, Bilderberg, WEF all existed or emerged around the same time. The specific US-Europe-Japan focus was David Rockefeller's vision, but the trilateral economic relationship was developing regardless. Conspiracy theories find a different target. Elite coordination is slightly less formalized but continues through other channels.",
    ripples:[
      {category:"Elite Coordination",detail:"Same elites coordinate through other forums. Bilderberg, CFR, WEF fill the space."},
      {category:"Conspiracy Theories",detail:"Trilateral became conspiracy theory focus. Without it, different elite group becomes target."},
      {category:"Policy",detail:"Similar policy recommendations emerge through different channels."},
      {category:"Formalization",detail:"US-Europe-Japan cooperation is slightly less formalized but still happens."}
    ],
    timeline:[
      {year:1973,happened:"Trilateral Commission founded",alternate:"Elite coordination through other channels"},
      {year:1980,happened:"Critics claim Trilateral influence",alternate:"Different elite group criticized"},
      {year:2000,happened:"Trilateral continues meetings",alternate:"Similar coordination through CFR, WEF"},
      {year:2024,happened:"Trilateral lower profile",alternate:"Elite coordination exists; different organizations"}
    ],
    impact:{lives:"Elite policy coordination",econ:"International cooperation",cultural:"Conspiracy theory target",reach:"Democratic industrial nations",timeline:"Elite coordination happens anyway"}},
  {id:"heritage",name:"Heritage Foundation",born:1973,died:null,cat:"institutions",field:"Conservative Policy",
    quote:"Building an America where freedom, opportunity, prosperity, and civil society flourish.",
    contributions:["Reagan revolution intellectual foundation","Mandate for Leadership","Conservative policy analysis","Quick-turnaround research"],
    r:0.50,reasoning:"Conservative think tanks were forming. Heritage's specific innovation was quick policy briefs for legislators. The conservative intellectual movement would have found institutional form regardless.",
    counterfactual:"Without Heritage, conservative policy infrastructure still develops — AEI existed, Cato was founded around the same time. But Heritage's specific innovation was quick-turnaround policy briefs for legislators and 'Mandate for Leadership' playbooks for incoming administrations. Without it, conservative policy is less operationalized, transitions less prepared. The Reagan revolution might be slightly different without Heritage's policy toolkit.",
    ripples:[
      {category:"Quick Policy",detail:"Heritage pioneered rapid policy briefs. Without it, conservative policy is less operationalized."},
      {category:"Mandate for Leadership",detail:"Transition playbooks don't exist in this form. New administrations less prepared."},
      {category:"Conservative Infrastructure",detail:"AEI, Cato fill some space. Conservative movement has different institutional form."},
      {category:"Reagan Revolution",detail:"Conservative ideas similar; implementation toolkit different."}
    ],
    timeline:[
      {year:1973,happened:"Heritage founded",alternate:"Conservative think tanks through AEI, Cato primarily"},
      {year:1980,happened:"Mandate for Leadership for Reagan",alternate:"Reagan transition less programmatic"},
      {year:2000,happened:"Heritage shapes conservative policy",alternate:"Conservative policy through different channels"},
      {year:2024,happened:"Heritage continues policy work",alternate:"Conservative infrastructure exists; different form"}
    ],
    impact:{lives:"US conservative policy",econ:"Policy research model",cultural:"Conservative intellectual infrastructure",reach:"United States",timeline:"Conservative policy development continues"}},
  {id:"aclu",name:"American Civil Liberties Union",born:1920,died:null,cat:"institutions",field:"Civil Liberties",
    quote:"Defend the rights of all people — not just those with whom you agree.",
    contributions:["First Amendment defense","Criminal justice reform","Privacy rights","Free speech absolutism"],
    r:0.40,reasoning:"Legal defense of civil liberties required institutional capacity. ACLU pioneered impact litigation strategies that shaped American law. Other organizations might have filled the role, but ACLU defined how it was done.",
    counterfactual:"Without ACLU (duplicate entry — see main ACLU entry above), civil liberties still need defenders. The legal strategy model ACLU pioneered — test cases, impact litigation, defending unpopular speech — shaped American constitutional law. Without this specific organization's cases, the First Amendment might be interpreted differently.",
    ripples:[
      {category:"Duplicate Entry",detail:"See main ACLU entry for full analysis."}
    ],
    timeline:[
      {year:1920,happened:"ACLU founded",alternate:"See main entry"}
    ],
    impact:{lives:"American rights protected",econ:"Legal strategy model",cultural:"Free speech advocacy",reach:"United States",timeline:"Civil liberties defense less systematic"}},
  {id:"naacp",name:"NAACP",born:1909,died:null,cat:"institutions",field:"Civil Rights",
    quote:"To ensure the political, educational, social, and economic equality of rights of all persons.",
    contributions:["Brown v. Board of Education","Antilynching campaigns","Voter registration","Legal civil rights strategy"],
    r:0.35,reasoning:"Black civil rights required organized institutional power. NAACP's legal strategy — culminating in Brown — changed American law. The movement would have taken different form without it.",
    counterfactual:"Without NAACP (duplicate entry — see main NAACP entry above), the civil rights movement takes different form. The legal strategy toward Brown v. Board was specific to NAACP's approach. Without it, desegregation comes through different means, possibly later.",
    ripples:[
      {category:"Duplicate Entry",detail:"See main NAACP entry for full analysis."}
    ],
    timeline:[
      {year:1909,happened:"NAACP founded",alternate:"See main entry"}
    ],
    impact:{lives:"40M+ African Americans",econ:"Integration economics",cultural:"Legal civil rights model",reach:"United States",timeline:"Civil rights progress slower, different strategy"}},
  {id:"irc_org",name:"International Rescue Committee",born:1933,died:null,cat:"institutions",field:"Refugee Aid",
    quote:"At the request of Albert Einstein, we help people fleeing war and persecution.",
    contributions:["Refugee resettlement","Emergency response","Development programs","31.5 million people reached annually"],
    r:0.50,reasoning:"Refugee crises create organizations to respond. IRC emerged from specific moment (Nazi persecution) but similar organizations would have formed to address refugee needs.",
    counterfactual:"Without IRC (duplicate entry — see main IRC entry above), refugee aid continues through other channels. The specific founding with Einstein's involvement gave it credibility; other organizations fill the space.",
    ripples:[
      {category:"Duplicate Entry",detail:"See main IRC entry for full analysis."}
    ],
    timeline:[
      {year:1933,happened:"IRC founded",alternate:"See main entry"}
    ],
    impact:{lives:"Millions of refugees aided",econ:"Resettlement services",cultural:"Refugee support model",reach:"40+ countries",timeline:"Refugee services develop differently"}},
  {id:"savechildren",name:"Save the Children",born:1919,died:null,cat:"institutions",field:"Children's Welfare",
    quote:"Every child deserves a future.",
    contributions:["Child welfare global standard","Emergency response","Child rights advocacy","120+ countries operations"],
    r:0.45,reasoning:"Children's welfare organizations were forming after WWI. Save the Children was first specifically child-focused international NGO. Others would have emerged, but it set the template.",
    counterfactual:"Without Save the Children (duplicate entry — see main entry above), children's aid develops through other channels. Eglantyne Jebb's Declaration of the Rights of the Child influenced UN documents.",
    ripples:[{category:"Duplicate Entry",detail:"See main Save the Children entry for full analysis."}],
    timeline:[{year:1919,happened:"Save the Children founded",alternate:"See main entry"}],
    impact:{lives:"Millions of children annually",econ:"Child welfare sector",cultural:"Children's rights framework",reach:"Global",timeline:"Child welfare develops similarly"}},
  {id:"greenpeace",name:"Greenpeace",born:1971,died:null,cat:"institutions",field:"Environmental Activism",
    quote:"We believe in the power of people to change the world.",
    contributions:["Direct action environmentalism","Anti-nuclear campaigns","Whale conservation","Media-savvy activism"],
    r:0.40,reasoning:"Environmental activism was growing. Greenpeace's specific innovation was media-friendly direct action. The environmental movement would have found similar tactics; Greenpeace refined them.",
    counterfactual:"Without Greenpeace (duplicate entry — see main entry above), environmental activism exists but with different tactics and visibility. The direct action model might develop more slowly.",
    ripples:[{category:"Duplicate Entry",detail:"See main Greenpeace entry for full analysis."}],
    timeline:[{year:1971,happened:"Greenpeace founded",alternate:"See main entry"}],
    impact:{lives:"Environmental awareness globally",econ:"Corporate environmental policies",cultural:"Environmental activism model",reach:"Global",timeline:"Environmental activism less media-focused"}},
  {id:"hrw",name:"Human Rights Watch",born:1978,died:null,cat:"institutions",field:"Human Rights",
    quote:"Defending the rights of people worldwide.",
    contributions:["Human rights documentation","War crimes investigation","Media impact strategy","Policy advocacy"],
    r:0.45,reasoning:"Human rights documentation was needed. HRW pioneered research-based naming and shaming. Similar organizations would have emerged; HRW defined the methodology.",
    counterfactual:"Without HRW (duplicate entry — see main entry above), human rights documentation continues through Amnesty and others. HRW's specific investigative approach and Washington advocacy shaped the field.",
    ripples:[{category:"Duplicate Entry",detail:"See main HRW entry for full analysis."}],
    timeline:[{year:1978,happened:"HRW founded",alternate:"See main entry"}],
    impact:{lives:"Human rights accountability",econ:"Rights advocacy sector",cultural:"Documentation standard",reach:"Global",timeline:"Rights documentation continues differently"}},
  {id:"oxfam",name:"Oxfam International",born:1942,died:null,cat:"institutions",field:"Poverty Relief",
    quote:"Fighting inequality to end poverty and injustice.",
    contributions:["Famine relief","Development programs","Inequality research","Advocacy campaigns"],
    r:0.50,reasoning:"Poverty relief organizations were forming. Oxfam's confederation model and advocacy focus were influential but not unique. Multiple organizations do similar work.",
    counterfactual:"Without Oxfam (duplicate entry — see main entry above), poverty relief continues through other channels. Oxfam's inequality reports and fair trade advocacy had specific influence.",
    ripples:[{category:"Duplicate Entry",detail:"See main Oxfam entry for full analysis."}],
    timeline:[{year:1942,happened:"Oxfam founded",alternate:"See main entry"}],
    impact:{lives:"15M+ reached in emergencies annually",econ:"Development sector",cultural:"Poverty advocacy",reach:"90+ countries",timeline:"Poverty relief continues similarly"}},
  {id:"brac",name:"BRAC",born:1972,died:null,cat:"institutions",field:"Development",
    quote:"Creating opportunity to realize potential.",
    contributions:["Largest NGO in developing world","Microfinance programs","Education initiatives","Scalable development model"],
    r:0.35,reasoning:"Fazle Hasan Abed's vision of scalable development was unique. BRAC's model — treating poverty alleviation as science — was distinctive. Others did development work; BRAC showed how to do it at scale.",
    counterfactual:"Without BRAC (duplicate entry — see main entry above), Bangladeshi development is more fragmented. BRAC's scale and integrated model was unique to Fazle Hasan Abed's vision.",
    ripples:[{category:"Duplicate Entry",detail:"See main BRAC entry for full analysis."}],
    timeline:[{year:1972,happened:"BRAC founded",alternate:"See main entry"}],
    impact:{lives:"100M+ people reached",econ:"Development at scale",cultural:"Southern-led development",reach:"Bangladesh, 10+ countries",timeline:"Development less scaled, less systematic"}},
  {id:"doctorswithout",name:"Doctors Without Borders (MSF)",born:1971,died:null,cat:"institutions",field:"Medical Humanitarian",
    quote:"Medical care where it's needed most.",
    contributions:["Medical neutrality in conflicts","Emergency medical response","Pharmaceutical access advocacy","Nobel Peace Prize 1999"],
    r:0.40,reasoning:"Medical relief in conflict zones was needed. MSF's innovation was willingness to speak out about what they witnessed, breaking humanitarian silence. This 'témoignage' approach was distinctive.",
    counterfactual:"Without MSF (duplicate entry — see main entry above), medical humanitarianism exists but is less willing to bear witness. The 'without borders' model and willingness to speak publicly about atrocities was MSF's innovation.",
    ripples:[{category:"Duplicate Entry",detail:"See main MSF entry for full analysis."}],
    timeline:[{year:1971,happened:"MSF founded",alternate:"See main entry"}],
    impact:{lives:"Millions treated annually",econ:"Humanitarian medicine model",cultural:"Medical neutrality",reach:"70+ countries",timeline:"Medical humanitarianism less politically vocal"}},
  {id:"acumen_org",name:"Acumen",born:2001,died:null,cat:"institutions",field:"Impact Investing",
    quote:"Changing the way the world tackles poverty.",
    contributions:["Impact investing pioneer","Patient capital model","Social enterprise support","Moral imagination concept"],
    r:0.45,reasoning:"Impact investing was emerging from multiple sources. Acumen's specific model — patient capital, moral imagination — was influential but the sector was developing. Omidyar, Skoll also pioneered.",
    counterfactual:"Without Acumen (duplicate entry — see main entry above), impact investing still emerges through Omidyar, Skoll, and others. Acumen's 'patient capital' framing was influential but not unique.",
    ripples:[{category:"Duplicate Entry",detail:"See main Acumen entry for full analysis."}],
    timeline:[{year:2001,happened:"Acumen founded",alternate:"See main entry"}],
    impact:{lives:"Millions served by investees",econ:"Impact investing sector",cultural:"Business as development tool",reach:"Africa, South Asia, Latin America",timeline:"Impact investing develops similarly"}},
  {id:"khanacademy",name:"Khan Academy",born:2008,died:null,cat:"institutions",field:"Education",
    quote:"A free, world-class education for anyone, anywhere.",
    contributions:["Free online education","Mastery learning model","Personalized learning","150M+ registered users"],
    r:0.50,reasoning:"Online education was coming — Coursera, edX followed. Sal Khan's specific approach (video tutoring, free access) was influential but digital education would have developed. He accelerated and democratized it.",
    counterfactual:"Without Khan Academy (duplicate entry — see main entry above), online education still comes. Khan's free K-12 focus democratized access; without it, online education is more university-focused.",
    ripples:[{category:"Duplicate Entry",detail:"See main Khan Academy entry for full analysis."}],
    timeline:[{year:2008,happened:"Khan Academy founded",alternate:"See main entry"}],
    impact:{lives:"Millions educated free",econ:"EdTech model",cultural:"Learning democratization",reach:"Global",timeline:"Online education develops slightly slower"}},
  {id:"wikimedia",name:"Wikimedia Foundation",born:2003,died:null,cat:"institutions",field:"Knowledge",
    quote:"Imagine a world in which every single person can freely share in the sum of all knowledge.",
    contributions:["Wikipedia stewardship","Free knowledge advocacy","Open source encyclopedia model","6.7M+ English articles"],
    r:0.40,reasoning:"Collaborative online encyclopedias were being attempted. Wikipedia succeeded where others failed. The specific governance model, community norms, and timing made it work. Others might have eventually succeeded differently.",
    counterfactual:"Without Wikimedia/Wikipedia (duplicate entry — see main entry above), free encyclopedic knowledge is less accessible. The crowdsourced model that succeeded was specific to Wikipedia's approach.",
    ripples:[{category:"Duplicate Entry",detail:"See main Wikimedia entry for full analysis."}],
    timeline:[{year:2003,happened:"Wikimedia Foundation established",alternate:"See main entry"}],
    impact:{lives:"Billions access free knowledge",econ:"Disrupted encyclopedia industry",cultural:"Collaborative knowledge",reach:"300+ language editions",timeline:"Free encyclopedia emerges eventually, differently"}},
  {id:"eff",name:"Electronic Frontier Foundation",born:1990,died:null,cat:"institutions",field:"Digital Rights",
    quote:"Defending your rights in the digital world.",
    contributions:["Digital privacy advocacy","Internet free speech","Encryption rights","Surveillance opposition"],
    r:0.45,reasoning:"Digital rights needed defenders as internet grew. EFF was early and influential but similar organizations would have formed. The issues demanded institutional response.",
    counterfactual:"Without EFF (duplicate entry — see main entry above), digital rights advocacy still emerges. EFF's early wins in encryption rights and internet freedom shaped the landscape; different outcomes without their specific cases.",
    ripples:[{category:"Duplicate Entry",detail:"See main EFF entry for full analysis."}],
    timeline:[{year:1990,happened:"EFF founded",alternate:"See main entry"}],
    impact:{lives:"Digital rights globally",econ:"Tech policy shaped",cultural:"Privacy advocacy",reach:"Global",timeline:"Digital rights defended differently"}},
];

// ─────────────────────────────────────────────────────────────────────────────
// INVENTIONS DATABASE - 50 Inventions
// ─────────────────────────────────────────────────────────────────────────────
const INVENTIONS = [
  {id:"printingpress",name:"Printing Press",born:1440,died:null,cat:"inventions",field:"Communication Technology",
    quote:"The printing press is the greatest weapon in the armoury of the modern commander. — T.E. Lawrence",
    contributions:["Mass book production","Literacy spread","Scientific Revolution catalyst","Protestant Reformation enabled"],
    r:0.50,reasoning:"Gutenberg developed movable type, but Koreans had it earlier. Chinese invented printing centuries before. European conditions — commercial economy, alphabet, paper availability — made it transformative. Someone in Europe would have developed it soon.",
    counterfactual:"Without Gutenberg, movable type still reaches Europe — it already existed in Korea, and European conditions (alphabetic writing, commercial economy, paper availability) were ripe. But the delay of 20-50 years matters enormously. The Protestant Reformation might happen without printed pamphlets spreading Luther's ideas. The Scientific Revolution might be delayed. The specific trajectory of modernity — mass literacy, democratized knowledge — unfolds differently.",
    ripples:[
      {category:"Protestant Reformation",detail:"Without printed pamphlets, Luther's ideas spread more slowly. The Reformation might be contained or take different form."},
      {category:"Scientific Revolution",detail:"The sharing of scientific ideas depends on printing. Delay slows accumulation of knowledge."},
      {category:"Literacy",detail:"Mass literacy arrives later. The book as mass medium might be overtaken by something else."},
      {category:"Libraries and Universities",detail:"The expansion of knowledge institutions depends on printed books. Higher education develops differently."}
    ],
    timeline:[
      {year:1440,happened:"Gutenberg develops movable type",alternate:"European printing delayed 20-50 years; arrives from different inventor"},
      {year:1517,happened:"Luther's 95 Theses spread via printing",alternate:"Reformation ideas spread more slowly; might be contained"},
      {year:1600,happened:"Scientific Revolution accelerates via printed books",alternate:"Science develops more slowly; different trajectory"},
      {year:1800,happened:"Mass literacy begins in industrialized nations",alternate:"Literacy comes later; different path to universal education"}
    ],
    impact:{lives:"Universal literacy eventually",econ:"Publishing: $100B+ industry",cultural:"Information democratization",reach:"Global civilization",timeline:"European printing delayed 20-50 years"}},
  
  {id:"wheel_inv",name:"The Wheel",born:-3500,died:null,cat:"inventions",field:"Mechanical",
    quote:"The wheel is the mother of all machines.",
    contributions:["Transportation revolution","Pottery wheels","Gears and machinery","Fundamental mechanical concept"],
    r:0.90,reasoning:"Multiple civilizations developed wheels independently — Mesopotamia, Indus Valley, likely others. The concept is intuitive from rolling logs. The specific timing could differ; the invention was inevitable given pottery and transport needs.",
    counterfactual:"Without the wheel in Mesopotamia, it's invented elsewhere — perhaps Indus Valley, perhaps China, perhaps independently multiple times. The concept is observable from rolling logs. But the delay matters: pottery develops differently, chariots arrive later, the gears that drive all machinery come slower. Pre-Columbian Americas developed sophisticated civilizations without wheels for transport, showing alternative paths exist.",
    ripples:[
      {category:"Transportation",detail:"Wheeled transport might arrive centuries later in some regions. Different pack animal traditions develop."},
      {category:"Pottery",detail:"The potter's wheel revolutionized ceramics. Without it, pottery develops more slowly."},
      {category:"Machinery",detail:"All gears derive from wheels. The entire mechanical tradition is delayed."},
      {category:"Warfare",detail:"Chariots don't dominate early warfare. Different military technologies shape ancient history."}
    ],
    timeline:[
      {year:-3500,happened:"Wheels appear in Mesopotamia",alternate:"Wheels invented elsewhere within centuries; different cultural context"},
      {year:-2000,happened:"Chariots dominate warfare",alternate:"Chariot warfare delayed; different military evolution"},
      {year:-500,happened:"Gears and water wheels developed",alternate:"Mechanical technology arrives later; different industrial path"},
      {year:1800,happened:"Wheels everywhere in industrial revolution",alternate:"Wheels universal by now regardless of origin"}
    ],
    impact:{lives:"All transportation",econ:"All mechanical industry",cultural:"Fundamental technology",reach:"Global",timeline:"Wheels invented elsewhere within centuries"}},
  
  {id:"fire_inv",name:"Controlled Fire",born:-400000,died:null,cat:"inventions",field:"Fundamental Technology",
    quote:"Man is the only creature that dares to light a fire and live with it. The reason? Because he alone has learned to put it out.",
    contributions:["Cooking enabled larger brains","Warmth in cold climates","Protection from predators","Tool making enabled"],
    r:0.95,reasoning:"Fire was discovered, not invented — natural fires exist. Multiple hominin species controlled fire independently. The knowledge spread and was rediscovered repeatedly. Completely inevitable given human observation.",
    counterfactual:"Fire control was inevitable — natural fires happen constantly, and observing that fire is useful for warmth, protection, and cooking requires no genius. Multiple hominin species mastered fire independently. The only question is timing. Even a delay of millennia would eventually be overcome. Human evolution and the expansion out of Africa might be delayed, but fire mastery is as inevitable as tool use.",
    ripples:[
      {category:"Human Evolution",detail:"Cooking food may have enabled larger brain development. Delay in fire might slow human cognitive evolution."},
      {category:"Geographic Expansion",detail:"Without fire for warmth, humans can't survive cold climates. Expansion out of Africa delayed."},
      {category:"Tool Making",detail:"Fire-hardened spears and later metal smelting depend on fire control. Tool complexity delayed."},
      {category:"Social Development",detail:"Cooking and gathering around fire may have shaped social bonds. Different social evolution."}
    ],
    timeline:[
      {year:-400000,happened:"Homo erectus controls fire",alternate:"Fire control discovered independently elsewhere; timing might vary by millennia"},
      {year:-100000,happened:"Fire universal among Homo sapiens",alternate:"Fire mastery inevitable; humans everywhere eventually use it"},
      {year:-10000,happened:"Fire enables cooking, metallurgy, pottery",alternate:"These technologies still develop; fire is prerequisite"},
      {year:2025,happened:"Fire remains fundamental technology",alternate:"No change — fire control was inevitable"}
    ],
    impact:{lives:"Human evolution enabled",econ:"All thermal technology",cultural:"Civilization foundation",reach:"All humanity",timeline:"Fire control universal regardless"}},
  
  {id:"electricity",name:"Practical Electricity",born:1879,died:null,cat:"inventions",field:"Energy Technology",
    quote:"We will make electricity so cheap that only the rich will burn candles. — Thomas Edison",
    contributions:["Electric lighting","Power grids","Motors and appliances","Modern civilization foundation"],
    r:0.80,reasoning:"Multiple inventors developed electric lighting — Swan in England, Yablochkov's arc lamps. Edison systematized it. AC power came from Tesla and Westinghouse. The components were being developed by dozens of researchers. Edison accelerated by years, not decades.",
    counterfactual:"Without Edison, practical electricity still comes — Swan was developing light bulbs in England simultaneously, arc lamps already existed, and the science was understood. Edison's genius was systematization: the power grid, the business model, the light bulb as part of a system. Someone else builds this system, but perhaps with different standards, different economics. AC power (Tesla, Westinghouse) might dominate earlier.",
    ripples:[
      {category:"Lighting",detail:"Electric lighting arrives anyway via Swan or others. The specific form of the light bulb might differ."},
      {category:"Power Distribution",detail:"Edison's DC system might not dominate initially. AC might win earlier, changing early infrastructure."},
      {category:"Timing",detail:"Practical electricity is delayed 5-10 years at most. The components were all being developed."},
      {category:"Corporate Structure",detail:"General Electric doesn't exist in the same form. Different corporate structure for electricity."}
    ],
    timeline:[
      {year:1879,happened:"Edison's practical light bulb",alternate:"Swan or others develop practical lighting within 5 years"},
      {year:1882,happened:"Edison opens Pearl Street Station",alternate:"Power grids developed differently; perhaps AC-first"},
      {year:1893,happened:"AC power wins at World's Fair",alternate:"AC might win earlier without Edison's DC advocacy"},
      {year:1920,happened:"Electrification transforms society",alternate:"Electrification happens regardless; timing might vary by 5-10 years"}
    ],
    impact:{lives:"8B+ electrified",econ:"$5T+ electrical industry",cultural:"Modern life enabled",reach:"Global",timeline:"Practical electricity within 5-10 years via others"}},
  
  {id:"penicillin",name:"Penicillin",born:1928,died:null,cat:"inventions",field:"Medicine",
    quote:"One sometimes finds what one is not looking for. — Alexander Fleming",
    contributions:["First widely-used antibiotic","200M+ lives saved","Antibiotic era begun","Surgical safety enabled"],
    r:0.75,reasoning:"Fleming noticed mold killing bacteria but didn't develop it. Florey and Chain made it usable. Multiple labs were investigating antibacterial agents. Sulfa drugs were already working. Antibiotics were coming; penicillin was one discovery among several.",
    counterfactual:"Without Fleming's accidental discovery, antibiotics still arrive — sulfa drugs were already working by 1935, and multiple labs were investigating antibacterial agents. Penicillin might be discovered later (the mold is common), or different antibiotics might dominate first. The antibiotic era still begins, but perhaps with streptomycin or another compound leading. The specific trajectory differs; the revolution happens regardless.",
    ripples:[
      {category:"Antibiotic Development",detail:"Sulfa drugs were already working. Different antibiotic might become the first-line treatment."},
      {category:"WWII Medicine",detail:"Penicillin saved many WWII soldiers. Without it, sulfa drugs or delayed antibiotics change casualty rates."},
      {category:"Surgical Safety",detail:"Antibiotics enabled modern surgery. The timing of this enablement might shift by 5-15 years."},
      {category:"Resistance Patterns",detail:"Different first antibiotics might mean different resistance evolution."}
    ],
    timeline:[
      {year:1928,happened:"Fleming notices penicillin effect",alternate:"Mold's antibiotic effect noticed by someone else within years"},
      {year:1942,happened:"Penicillin mass produced for WWII",alternate:"Sulfa drugs or delayed antibiotics serve WWII; different casualty rates"},
      {year:1950,happened:"Antibiotics transform medicine",alternate:"Antibiotic revolution happens regardless; timing varies by 5-15 years"},
      {year:2020,happened:"Antibiotic resistance crisis",alternate:"Resistance emerges regardless; different patterns based on which antibiotics dominated"}
    ],
    impact:{lives:"200M+ saved",econ:"Antibiotic industry: $50B+",cultural:"Medical breakthrough archetype",reach:"Global healthcare",timeline:"Antibiotics discovered within 5-15 years"}},
  
  {id:"vaccine",name:"Vaccination",born:1796,died:null,cat:"inventions",field:"Medicine",
    quote:"The deviation of man from the state in which he was originally placed by nature seems to have proved to him a prolific source of diseases. — Edward Jenner",
    contributions:["Smallpox eradication","Disease prevention paradigm","Polio near-eradication","COVID vaccines"],
    r:0.60,reasoning:"Variolation (using smallpox itself) was practiced for centuries. Folk knowledge about cowpox existed. Jenner systematized and legitimized it. Multiple people were experimenting. The specific path might differ but immunization concept was emerging.",
    counterfactual:"Without Jenner, vaccination still emerges — variolation was already practiced, folk knowledge about cowpox protecting milkmaids existed, and others were experimenting. But Jenner's systematization and promotion were valuable. The concept might take 20 more years to become accepted science. Smallpox eradication is delayed. The paradigm of preventive medicine develops from different roots.",
    ripples:[
      {category:"Smallpox",detail:"Eradication delayed by decades. Millions more die before vaccination becomes standard."},
      {category:"Medical Paradigm",detail:"The concept of prevention through immunization might develop more slowly without Jenner's example."},
      {category:"Germ Theory",detail:"Vaccination worked before germ theory explained why. The connection might be made differently."},
      {category:"Vaccine Development",detail:"Later vaccines (polio, measles, COVID) build on earlier work. The tradition develops from different foundation."}
    ],
    timeline:[
      {year:1796,happened:"Jenner vaccinates James Phipps",alternate:"Vaccination concept emerges within 20 years from other experimenters"},
      {year:1850,happened:"Vaccination becomes standard medical practice",alternate:"Vaccination standard delayed; perhaps to 1880s or later"},
      {year:1980,happened:"Smallpox eradicated",alternate:"Eradication delayed by decades; perhaps to 2000s"},
      {year:2021,happened:"COVID vaccines deployed rapidly",alternate:"Vaccine paradigm exists regardless; specific trajectory differs"}
    ],
    impact:{lives:"Billions saved",econ:"Vaccine industry: $50B+",cultural:"Preventive medicine",reach:"Global",timeline:"Vaccination concept emerges within 20 years"}},
  
  {id:"internet",name:"The Internet",born:1969,died:null,cat:"inventions",field:"Communication Technology",
    quote:"The Internet is becoming the town square for the global village of tomorrow. — Bill Gates",
    contributions:["Global communication network","World Wide Web enabled","E-commerce platform","Information access transformed"],
    r:0.60,reasoning:"Packet switching developed independently (Davies in UK, Baran in US). ARPANET was military-funded but university-driven. French Minitel showed alternative paths. Some global network was coming; the specific form (protocols, governance) was contingent.",
    counterfactual:"Without ARPANET, global computer networks still emerge — the British NPL network, French Minitel, and various corporate networks showed alternative paths. Packet switching was invented independently by Davies and Baran. But the specific protocols (TCP/IP), the open architecture, the academic culture that shaped the early internet — these might be different. A more commercial, less open network might have emerged. The web might look very different.",
    ripples:[
      {category:"Network Architecture",detail:"Different protocols might have dominated. A more centralized, less open architecture might have emerged."},
      {category:"Governance",detail:"The internet's multi-stakeholder governance model might not exist. More national or corporate control."},
      {category:"Commercial Development",detail:"E-commerce and social media still emerge but on different technical and legal foundations."},
      {category:"Information Access",detail:"The democratization of information might be less complete with a more controlled network."}
    ],
    timeline:[
      {year:1969,happened:"ARPANET begins",alternate:"Different networks develop; perhaps British NPL or corporate alternatives"},
      {year:1983,happened:"TCP/IP becomes standard",alternate:"Different protocols dominate; network might be less interoperable"},
      {year:1991,happened:"World Wide Web created",alternate:"Something like the web emerges but with different protocols and governance"},
      {year:2020,happened:"4B+ internet users",alternate:"Global network exists but might be more fragmented or controlled"}
    ],
    impact:{lives:"4B+ users",econ:"$10T+ digital economy",cultural:"Information age",reach:"Global",timeline:"Global networks emerge differently, possibly less open"}},
  
  {id:"telephone",name:"Telephone",born:1876,died:null,cat:"inventions",field:"Communication Technology",
    quote:"Mr. Watson, come here, I want to see you. — Alexander Graham Bell",
    contributions:["Voice communication at distance","Telecommunications industry","Social connection enabled","Emergency services possible"],
    r:0.85,reasoning:"Gray filed a patent the same day as Bell. Meucci had earlier devices. Reis transmitted speech in 1861. Multiple inventors were converging. Bell won the patent race; the invention was coming regardless.",
    counterfactual:"Without Bell, the telephone still arrives — Elisha Gray filed a patent the same day, Meucci had earlier devices, and Reis transmitted speech in 1861. The invention was inevitable given the underlying science of electromagnetism. Bell won a patent race; someone else wins instead. The telecommunications industry develops from a different corporate foundation. AT&T doesn't exist in the same form.",
    ripples:[
      {category:"Patent History",detail:"Gray or Meucci gets credit. Different corporate structure emerges for telecommunications."},
      {category:"AT&T",detail:"The Bell System doesn't exist. Different monopoly or competitive structure."},
      {category:"Timing",detail:"Telephone arrives within months regardless. The invention was imminent."},
      {category:"Corporate Structure",detail:"Different founding patents mean different corporate evolution of telecom industry."}
    ],
    timeline:[
      {year:1876,happened:"Bell patents telephone",alternate:"Gray or another inventor patents within months"},
      {year:1885,happened:"AT&T founded",alternate:"Different corporation dominates; different industry structure"},
      {year:1920,happened:"Telephone universal in developed world",alternate:"Universal telephony regardless of who invented it"},
      {year:2000,happened:"Telephone evolved to mobile/internet",alternate:"Evolution happens regardless; corporate players differ"}
    ],
    impact:{lives:"Global communication",econ:"Telecom: $1.5T industry",cultural:"Social connectivity",reach:"Global",timeline:"Telephone invented within months by others"}},
  
  {id:"automobile",name:"Automobile",born:1886,died:null,cat:"inventions",field:"Transportation",
    quote:"Nothing has spread socialistic feeling more than the automobile. — Will Rogers",
    contributions:["Personal transportation","Suburban development","Oil economy creation","Global mobility"],
    r:0.75,reasoning:"Internal combustion engines were developed by multiple inventors. Benz, Daimler, and others were all building motorized vehicles in the 1880s. The specific form might vary, but personal motorized transport was coming.",
    counterfactual:"Without Benz, the automobile still arrives — Daimler, Maybach, and others were all building motorized vehicles in the 1880s. Internal combustion engines were being refined by many inventors. The car might take slightly different form (perhaps Otto's designs dominate), but personal motorized transport was coming. The oil economy, suburban development, and car culture all still emerge.",
    ripples:[
      {category:"Timing",detail:"The automobile is delayed at most 5-10 years. Multiple inventors were converging."},
      {category:"Design",detail:"Different early designs might dominate. Electric or steam cars had longer window."},
      {category:"Corporate Structure",detail:"Mercedes-Benz doesn't exist. Different car companies dominate early market."},
      {category:"Oil Economy",detail:"The oil economy still develops; internal combustion was going to win."}
    ],
    timeline:[
      {year:1886,happened:"Benz patents motorwagen",alternate:"Daimler or others patent within 5 years"},
      {year:1908,happened:"Ford Model T transforms market",alternate:"Mass production of cars happens regardless of early inventor"},
      {year:1950,happened:"Car culture dominates developed world",alternate:"Car culture emerges regardless; specific companies differ"},
      {year:2025,happened:"Electric vehicles challenging ICE",alternate:"Same trajectory regardless of who invented first car"}
    ],
    impact:{lives:"Modern life restructured",econ:"Auto industry: $3T+",cultural:"Freedom and mobility culture",reach:"Global",timeline:"Automobiles emerge within 5-10 years"}},
  
  {id:"airplane",name:"Airplane",born:1903,died:null,cat:"inventions",field:"Transportation",
    quote:"For once you have tasted flight you will walk the earth with your eyes turned skyward. — Leonardo da Vinci",
    contributions:["Air travel","Air warfare","Global connectivity","Space exploration foundation"],
    r:0.65,reasoning:"Multiple inventors were attempting powered flight. Santos-Dumont flew in 1906, disputed Wright's priority. Langley's attempt crashed nine days before Wrights succeeded. The engineering was becoming possible; the Wrights got there first through superior method.",
    counterfactual:"Without the Wright Brothers, powered flight still arrives — Santos-Dumont flew publicly in 1906, Langley's attempt failed days before the Wrights succeeded, and multiple European inventors were close. The Wrights' key contribution was systematic engineering methodology. Someone else figures it out within 5 years. The airplane still transforms warfare (WWI is still an air war) and travel.",
    ripples:[
      {category:"Timing",detail:"Powered flight arrives within 5 years via Santos-Dumont, Langley's team, or European inventors."},
      {category:"WWI Aviation",detail:"Aircraft still transform warfare. WWI is still an air war regardless of who invented flight."},
      {category:"American Aviation",detail:"Without the Wrights, American aviation industry might develop differently. Different pioneers."},
      {category:"Engineering Method",detail:"The Wrights' systematic wind tunnel testing was valuable. Different methodology might mean slower progress."}
    ],
    timeline:[
      {year:1903,happened:"Wright Brothers achieve powered flight",alternate:"Santos-Dumont or others achieve flight by 1908"},
      {year:1914,happened:"WWI uses aircraft for combat",alternate:"WWI still features air combat; timing might vary slightly"},
      {year:1927,happened:"Lindbergh crosses Atlantic",alternate:"Transatlantic flight happens regardless; different pioneer"},
      {year:1960,happened:"Commercial aviation transforms travel",alternate:"Aviation revolution regardless of who invented first airplane"}
    ],
    impact:{lives:"Global travel for billions",econ:"Aviation: $800B+ industry",cultural:"World made smaller",reach:"Global",timeline:"Powered flight within 5 years via others"}},
  
  {id:"computer",name:"Electronic Computer",born:1945,died:null,cat:"inventions",field:"Computing",
    quote:"A computer would deserve to be called intelligent if it could deceive a human into believing that it was human. — Alan Turing",
    contributions:["Digital revolution","Automation enabled","Internet possible","AI foundation"],
    r:0.55,reasoning:"Multiple teams built early computers simultaneously — ENIAC, Colossus, Z3, ABC. The theoretical foundations (Turing, von Neumann) were shared. No single inventor; the technology emerged from collective wartime and postwar effort.",
    counterfactual:"Without any single team, electronic computers still emerge — ENIAC, Colossus, Z3, ABC were all developed semi-independently during WWII. The theoretical foundations (Turing, von Neumann) were shared across the field. No single inventor was essential; the technology emerged from collective wartime necessity. The digital revolution still happens, perhaps with different initial architectures.",
    ripples:[
      {category:"Architecture",detail:"Different early computers might lead to different dominant architectures. Von Neumann architecture might not be universal."},
      {category:"Timing",detail:"Electronic computers emerge within the same decade regardless. WWII drove development everywhere."},
      {category:"Corporate Development",detail:"IBM's dominance might not happen the same way. Different pioneers, different industry structure."},
      {category:"Cold War Computing",detail:"Both superpowers developed computers. The race continues regardless of who was first."}
    ],
    timeline:[
      {year:1945,happened:"ENIAC operational",alternate:"Colossus, Z3, or other computers lead development"},
      {year:1951,happened:"Commercial computers emerge",alternate:"Commercial computing regardless; different machines lead"},
      {year:1970,happened:"Integrated circuits transform computing",alternate:"Transistorization happens regardless of early computer designs"},
      {year:2020,happened:"Computing ubiquitous",alternate:"Digital revolution happens regardless; path might differ"}
    ],
    impact:{lives:"Modern life transformed",econ:"Computing: $5T+ industry",cultural:"Information processing revolution",reach:"Global",timeline:"Computers emerge within same decade"}},
  
  {id:"transistor",name:"Transistor",born:1947,died:null,cat:"inventions",field:"Electronics",
    quote:"The transistor was probably the most important invention of the 20th century. — Nobel Committee",
    contributions:["Miniaturized electronics","Computers practical","Mobile devices possible","Digital revolution enabled"],
    r:0.65,reasoning:"Solid-state physics was advancing globally. Bell Labs had resources, but European labs were pursuing similar research. The quantum mechanics that explains semiconductors was shared knowledge. Someone would have developed transistors within years.",
    counterfactual:"Without the Bell Labs team, transistors still emerge — solid-state physics was advancing globally, and the quantum mechanics explaining semiconductors was shared knowledge. European labs, particularly in Germany and Britain, were pursuing similar research. The transistor might have come from Siemens or a British team within 5-10 years. The miniaturization revolution still happens.",
    ripples:[
      {category:"Timing",detail:"Transistors invented within 5-10 years by European or other American labs."},
      {category:"Corporate Structure",detail:"Without Bell Labs' patents, the semiconductor industry develops differently. Different companies dominate."},
      {category:"Silicon Valley",detail:"The specific geography of tech innovation might be different. Perhaps Germany or Britain leads."},
      {category:"Moore's Law",detail:"Miniaturization still happens; the specific trajectory of improvement might vary."}
    ],
    timeline:[
      {year:1947,happened:"Bell Labs demonstrates transistor",alternate:"European or other labs develop transistor by mid-1950s"},
      {year:1958,happened:"Integrated circuit invented",alternate:"Integration happens regardless once transistors exist"},
      {year:1971,happened:"Microprocessor created",alternate:"Microprocessor revolution regardless of who invented transistor"},
      {year:2020,happened:"Transistors in everything",alternate:"Electronic miniaturization regardless; might lag by 5-10 years"}
    ],
    impact:{lives:"Modern electronics for billions",econ:"Semiconductor: $500B+ industry",cultural:"Digital revolution enabler",reach:"Global",timeline:"Transistors developed within 5-10 years"}},
  
  {id:"steamengine",name:"Steam Engine",born:1712,died:null,cat:"inventions",field:"Energy Technology",
    quote:"I sell here, Sir, what all the world desires to have — power. — Matthew Boulton",
    contributions:["Industrial Revolution powered","Factories enabled","Railroad transportation","Modern manufacturing"],
    r:0.50,reasoning:"Newcomen built first practical engine. Watt improved efficiency dramatically. The technology developed incrementally over decades with multiple contributors. Industrial Revolution's timing depended on this specific development path.",
    counterfactual:"Without Newcomen and Watt, the steam engine still arrives — the principles were understood, and mine flooding was a pressing problem driving innovation. But the specific timing matters enormously. A 20-40 year delay in efficient steam power delays the entire Industrial Revolution. Factories remain water-powered longer. Railroads arrive later. Britain's industrial dominance might be less complete, giving other nations more time to catch up.",
    ripples:[
      {category:"Industrial Revolution Timing",detail:"A delay of 20-40 years shifts the entire Industrial Revolution. Britain's head start is shorter."},
      {category:"Railroads",detail:"Without efficient steam engines, railroads arrive later. Transportation revolution delayed."},
      {category:"Factory Location",detail:"Without steam power, factories must stay near water sources. Industrial geography different."},
      {category:"British Dominance",detail:"Britain's industrial lead might be shorter. Other nations have more time to catch up."}
    ],
    timeline:[
      {year:1712,happened:"Newcomen's atmospheric engine",alternate:"Mine pumping problem solved differently; steam engine delayed"},
      {year:1769,happened:"Watt's separate condenser patent",alternate:"Efficiency improvements come from others; timeline shifts"},
      {year:1830,happened:"Railway age begins",alternate:"Railroads delayed 20-40 years without efficient steam"},
      {year:1900,happened:"Steam power peaks before electricity",alternate:"Steam era shorter if delayed; electricity arrives at similar time"}
    ],
    impact:{lives:"Industrial society created",econ:"Industrial economy",cultural:"Modern manufacturing",reach:"Global industrialization",timeline:"Steam power delayed 20-40 years"}},
  
  {id:"gunpowder",name:"Gunpowder",born:850,died:null,cat:"inventions",field:"Military Technology",
    quote:"Gunpowder made all men the same height.",
    contributions:["Warfare transformed","Castles obsolete","Colonial conquests enabled","Mining applications"],
    r:0.45,reasoning:"Chinese alchemists discovered it accidentally. The formula spread via Silk Road. Eventually, someone would have mixed sulfur, charcoal, and saltpeter. But the specific timing of its invention shaped a millennium of warfare.",
    counterfactual:"Without Chinese alchemists discovering gunpowder, someone eventually mixes sulfur, charcoal, and saltpeter — the ingredients were known, and experimentation with fire was universal. But the timing matters enormously. Delay of centuries changes medieval warfare entirely. Castles remain dominant longer. European colonization of the Americas might be less overwhelming. The entire history of military technology shifts.",
    ripples:[
      {category:"Medieval Warfare",detail:"Without gunpowder, castles remain dominant. Knights and fortifications define warfare longer."},
      {category:"Colonization",detail:"European conquest of Americas might be less overwhelming without gunpowder advantage."},
      {category:"Social Structure",detail:"'Gunpowder made all men the same height' — without it, aristocratic warriors remain dominant longer."},
      {category:"Mining and Engineering",detail:"Explosive mining and construction techniques arrive later. Infrastructure development slower."}
    ],
    timeline:[
      {year:850,happened:"Chinese discover gunpowder",alternate:"Discovery delayed centuries; warfare evolution very different"},
      {year:1250,happened:"Gunpowder reaches Europe via Mongols",alternate:"Different transmission or later; European history very different"},
      {year:1453,happened:"Constantinople falls to Ottoman cannon",alternate:"Without advanced artillery, siege warfare continues longer"},
      {year:1500,happened:"Gunpowder weapons dominate warfare",alternate:"Delay shifts entire military revolution timeline"}
    ],
    impact:{lives:"Warfare deaths: hundreds of millions",econ:"Military industry",cultural:"Power equalization",reach:"Global",timeline:"Gunpowder discovered eventually, timing uncertain"}},
  
  {id:"compass",name:"Magnetic Compass",born:1040,died:null,cat:"inventions",field:"Navigation",
    quote:"He that would learn to pray, let him go to sea.",
    contributions:["Ocean navigation enabled","Age of Exploration","Global trade routes","Modern navigation foundation"],
    r:0.60,reasoning:"Chinese developed it first for feng shui, then navigation. Knowledge spread west. Europeans improved it for sea navigation. The magnetic properties of lodestone were known; application to navigation was logical progression.",
    counterfactual:"Without the Chinese compass, ocean navigation remains limited by coastal sailing and star navigation. The Age of Exploration is delayed. Columbus can't cross the Atlantic in 1492 (or whenever) without reliable direction-finding. Global trade routes develop differently. The magnetic properties of lodestone were known in multiple cultures, so someone eventually creates a compass, but the 50-100 year delay matters.",
    ripples:[
      {category:"Age of Exploration",detail:"Without reliable compass, ocean voyages remain dangerous and rare. European expansion delayed."},
      {category:"Global Trade",detail:"Trade routes develop more slowly. The connected world economy emerges later."},
      {category:"Colonization",detail:"European colonization of Americas and Africa delayed. Indigenous populations have more time."},
      {category:"Navigation Technology",detail:"Alternative navigation methods might develop further. Star navigation more refined."}
    ],
    timeline:[
      {year:1040,happened:"Chinese use compass for navigation",alternate:"Magnetic navigation delayed 50-100 years"},
      {year:1200,happened:"Compass reaches Europe via trade",alternate:"European navigation limited to coastal and star-based"},
      {year:1492,happened:"Columbus crosses Atlantic",alternate:"Transatlantic voyage delayed without reliable compass"},
      {year:1600,happened:"Global sea trade established",alternate:"Global trade delayed; world economy connects later"}
    ],
    impact:{lives:"Global exploration",econ:"World trade enabled",cultural:"Connected civilizations",reach:"Global",timeline:"Navigation compass delayed 50-100 years"}},
  
  {id:"paper",name:"Paper",born:105,died:null,cat:"inventions",field:"Communication Technology",
    quote:"Paper is to write on, to print on, to wrap things in.",
    contributions:["Writing democratized","Books possible","Bureaucracy enabled","Printing prerequisite"],
    r:0.55,reasoning:"Cai Lun credited with invention in China, though earlier forms existed. Writing surfaces were needed; papyrus, parchment served earlier. Paper's specific advantages (cheap, durable) would have been sought. Similar technology might have emerged elsewhere.",
    counterfactual:"Without Chinese paper-making, writing surfaces remain expensive (parchment) or regional (papyrus). Literacy stays limited to elites. The printing press has no cheap medium when it arrives. Books remain luxury items. The specific formula for paper might be discovered elsewhere, but the delay of 100-200 years in the West matters enormously for the spread of literacy and the Renaissance.",
    ripples:[
      {category:"Literacy",detail:"Without cheap paper, writing stays elite. Mass literacy is delayed centuries."},
      {category:"Printing",detail:"The printing press needs paper to be revolutionary. Without it, printing is limited by parchment costs."},
      {category:"Bureaucracy",detail:"Complex bureaucracies depend on cheap record-keeping. Governance develops differently."},
      {category:"Science",detail:"Scientific communication depends on affordable publishing. Knowledge accumulation slower."}
    ],
    timeline:[
      {year:105,happened:"Cai Lun credited with paper invention",alternate:"Paper formula discovered elsewhere, perhaps centuries later"},
      {year:751,happened:"Paper reaches Islamic world at Talas",alternate:"Paper technology spreads more slowly; different route"},
      {year:1100,happened:"Paper mills in Europe",alternate:"Europe relies on parchment longer; books expensive"},
      {year:1440,happened:"Printing press needs paper",alternate:"Gutenberg's revolution limited by parchment costs"}
    ],
    impact:{lives:"Literacy enabled",econ:"Publishing, printing",cultural:"Information storage",reach:"Global",timeline:"Paper technology delayed 100-200 years in West"}},
  
  {id:"ironworking",name:"Iron Smelting",born:-1200,died:null,cat:"inventions",field:"Metallurgy",
    quote:"Iron sharpens iron.",
    contributions:["Superior tools and weapons","Agricultural advancement","Construction enabled","Bronze Age ended"],
    r:0.70,reasoning:"Hittites pioneered it, but iron working developed independently in multiple regions. The techniques spread and were rediscovered. Given meteoric iron's known properties, smelting would have been pursued eventually.",
    counterfactual:"Without Hittite iron smelting, the technology still emerges — it developed independently in sub-Saharan Africa and possibly elsewhere. Meteoric iron showed the metal's properties; smelting was the challenge. But the timing matters. The Bronze Age might last centuries longer in some regions. Agriculture advances more slowly without iron plows. Construction and warfare develop along different timelines.",
    ripples:[
      {category:"Bronze Age",detail:"Without iron, bronze remains dominant longer. Societies that controlled tin routes stay powerful."},
      {category:"Agriculture",detail:"Iron plows revolutionized farming. Without them, agricultural productivity advances more slowly."},
      {category:"Warfare",detail:"Iron weapons eventually outcompeted bronze. Delay shifts military balance for centuries."},
      {category:"Construction",detail:"Iron tools enabled more precise construction. Monumental building develops differently."}
    ],
    timeline:[
      {year:-1200,happened:"Hittites pioneer iron smelting",alternate:"Iron smelting emerges elsewhere within centuries"},
      {year:-800,happened:"Iron Age spreads across Mediterranean",alternate:"Bronze Age might continue centuries longer"},
      {year:-500,happened:"Iron tools transform agriculture",alternate:"Agricultural revolution delayed; population growth slower"},
      {year:500,happened:"Iron universal for tools and weapons",alternate:"Iron age arrives regardless; timeline shifts by centuries"}
    ],
    impact:{lives:"Civilization advancement",econ:"All metal industry",cultural:"Iron Age civilization",reach:"Global",timeline:"Iron working spreads regardless, with slight delays"}},
  
  {id:"writing",name:"Writing",born:-3400,died:null,cat:"inventions",field:"Communication",
    quote:"Writing is the painting of the voice.",
    contributions:["History recordable","Laws codifiable","Complex societies enabled","Knowledge accumulation"],
    r:0.50,reasoning:"Writing developed independently in Mesopotamia, Egypt, China, and Mesoamerica. The need to record transactions, laws, and religious texts drove multiple inventions. Completely inevitable once societies reached sufficient complexity.",
    counterfactual:"Without Sumerian cuneiform, writing still emerges — it developed independently in Egypt, China, and Mesoamerica. The need to record transactions, laws, and religious texts drove multiple inventions. Writing was inevitable once societies reached sufficient complexity. But if somehow prevented everywhere, human civilization remains fundamentally oral. No history, no accumulated law, no science as we know it. Inconceivable.",
    ripples:[
      {category:"History",detail:"Without writing, history is only oral tradition. The past becomes myth within generations."},
      {category:"Law",detail:"Complex legal codes require writing. Governance remains simpler, more personal, less systematic."},
      {category:"Science",detail:"Knowledge accumulation requires records. Without writing, each generation starts fresh."},
      {category:"Administration",detail:"Large empires depend on written records. Governance at scale becomes impossible."}
    ],
    timeline:[
      {year:-3400,happened:"Cuneiform emerges in Sumer",alternate:"Writing emerges elsewhere or emerges in Sumer from different need"},
      {year:-3000,happened:"Egyptian hieroglyphics develop",alternate:"Egyptian writing develops regardless; independent invention"},
      {year:-1200,happened:"Alphabets simplify writing",alternate:"Simplified writing systems emerge regardless; democratization"},
      {year:0,happened:"Writing systems across civilized world",alternate:"Writing universal for complex societies; inevitable"}
    ],
    impact:{lives:"Civilization enabled",econ:"All commerce",cultural:"History, literature, law",reach:"Global",timeline:"Writing emerges in multiple places regardless"}},
  
  {id:"clockwork",name:"Mechanical Clock",born:1280,died:null,cat:"inventions",field:"Timekeeping",
    quote:"Time is money.",
    contributions:["Precise timekeeping","Work discipline enabled","Navigation improved","Scientific measurement possible"],
    r:0.55,reasoning:"Medieval monasteries drove demand for timekeeping (prayer hours). Water clocks and sundials existed. Mechanical escapement emerged in Europe from incremental improvements. Clock-making was advancing in multiple places.",
    counterfactual:"Without medieval mechanical clocks, precise timekeeping still develops — the need was pressing (monastic prayer hours, astronomical observation, navigation). Water clocks and sundials provided precedent. But mechanical clocks from Europe specifically enabled work discipline, factory time, and navigation. Delay of 50-100 years shifts the emergence of industrial capitalism.",
    ripples:[
      {category:"Work Discipline",detail:"Factory time and work discipline depend on clocks. Industrial capitalism's emergence shifts."},
      {category:"Navigation",detail:"Precise timekeeping enabled longitude calculation. Maritime navigation advances more slowly."},
      {category:"Science",detail:"Scientific measurement depends on precise time. Experiments become possible with clocks."},
      {category:"Cultural Concept",detail:"'Time is money' — the modern sense of time as scarce commodity arrives later."}
    ],
    timeline:[
      {year:1280,happened:"Mechanical clocks in European churches",alternate:"Mechanical timekeeping delayed 50-100 years"},
      {year:1500,happened:"Portable clocks and watches emerge",alternate:"Personal timekeeping delayed; social time remains approximate"},
      {year:1700,happened:"Precision clocks enable navigation",alternate:"Longitude problem solved later; exploration slower"},
      {year:1900,happened:"Clock time structures industrial life",alternate:"Work discipline emerges later; industrialization's character different"}
    ],
    impact:{lives:"Modern work discipline",econ:"Punctuality economy",cultural:"Time as precise concept",reach:"Global",timeline:"Mechanical clocks delayed 50-100 years"}},
  
  {id:"telescope",name:"Telescope",born:1608,died:null,cat:"inventions",field:"Scientific Instruments",
    quote:"I have observed the Milky Way to be nothing else but a mass of innumerable stars. — Galileo",
    contributions:["Astronomy transformed","Heliocentrism proven","Scientific Revolution","Modern optics foundation"],
    r:0.70,reasoning:"Lippershey credited with patent, but others were developing similar devices simultaneously. Lens-grinding was advancing; the combination was logical. Galileo improved it dramatically but didn't invent it.",
    counterfactual:"Without Lippershey's telescope, similar devices emerge within years — several inventors were working on lens combinations simultaneously, and lens-grinding was advancing rapidly. Galileo's contribution was pointing it at the sky and publishing what he saw. The Copernican revolution might be delayed slightly, but the evidence for heliocentrism would come from other observations.",
    ripples:[
      {category:"Timing",detail:"Telescope invented within years by others. The technology was converging."},
      {category:"Galileo's Observations",detail:"Someone else might observe Jupiter's moons and lunar mountains. Different publication, same impact."},
      {category:"Copernican Revolution",detail:"Evidence for heliocentrism might come slightly later but was accumulating regardless."},
      {category:"Optical Industry",detail:"Lens-grinding and optics industry develops similarly; different pioneers."}
    ],
    timeline:[
      {year:1608,happened:"Lippershey patents telescope",alternate:"Similar devices patented by others within years"},
      {year:1610,happened:"Galileo publishes observations",alternate:"Different astronomer makes similar observations"},
      {year:1668,happened:"Newton invents reflecting telescope",alternate:"Reflecting telescope invented regardless; different timeline"},
      {year:1900,happened:"Giant telescopes transform astronomy",alternate:"Astronomical instruments advance regardless"}
    ],
    impact:{lives:"Cosmic understanding",econ:"Optics industry",cultural:"Human place in universe",reach:"Global science",timeline:"Telescope invented within years by others"}},
  
  {id:"microscope",name:"Microscope",born:1590,died:null,cat:"inventions",field:"Scientific Instruments",
    quote:"I have observed the most amazing things.",
    contributions:["Microbiology founded","Cell theory enabled","Germ theory possible","Medical diagnostics"],
    r:0.65,reasoning:"Multiple lens-makers developed compound microscopes around same time. Leeuwenhoek made single-lens versions that were better. The optical principles were understood; application was being pursued by many.",
    counterfactual:"Without early compound microscopes, similar devices emerge from other lens-makers — the optical principles were understood, and multiple inventors were experimenting. Leeuwenhoek's single-lens microscopes were actually better and came later. The invisible world is revealed within a decade regardless. Cell theory and germ theory might be slightly delayed but were coming.",
    ripples:[
      {category:"Timing",detail:"Microscopy develops similarly regardless. Multiple inventors converging."},
      {category:"Leeuwenhoek's Discoveries",detail:"Someone else might discover bacteria and protozoa. Different observer, same revelation."},
      {category:"Cell Theory",detail:"Cell theory might be delayed slightly but emerges once microscopes improve."},
      {category:"Germ Theory",detail:"Germ theory of disease depends on microscopy. Delay of decade changes medical history timeline."}
    ],
    timeline:[
      {year:1590,happened:"Compound microscope invented",alternate:"Similar devices from other lens-makers within decade"},
      {year:1676,happened:"Leeuwenhoek discovers microorganisms",alternate:"Different observer discovers 'animalcules' slightly later"},
      {year:1838,happened:"Cell theory proposed",alternate:"Cell theory emerges regardless once microscopy advances"},
      {year:1880,happened:"Germ theory revolutionizes medicine",alternate:"Germ theory comes regardless; timing might shift by years"}
    ],
    impact:{lives:"Medical understanding",econ:"Biological sciences",cultural:"Invisible world revealed",reach:"Global science",timeline:"Microscopy develops similarly"}},
  
  {id:"radio",name:"Radio",born:1895,died:null,cat:"inventions",field:"Communication Technology",
    quote:"Radio is a medium of entertainment which permits millions of people to listen to the same joke at the same time. — T.S. Eliot",
    contributions:["Wireless communication","Broadcasting invented","Emergency communication","Mass media enabled"],
    r:0.70,reasoning:"Marconi, Tesla, Lodge, Popov, Bose all contributed to radio development. Maxwell's theory predicted it; Hertz demonstrated waves. Multiple inventors were converging on practical wireless. Someone would have succeeded within years.",
    counterfactual:"Without Marconi, practical radio still arrives — Tesla, Lodge, Popov, Bose were all working on wireless transmission. Maxwell's theory predicted electromagnetic waves; Hertz demonstrated them. The convergence was happening across multiple countries. Someone achieves practical radio within 5 years. Broadcasting emerges regardless; different corporate structure.",
    ripples:[
      {category:"Timing",detail:"Radio invented within 5 years by other researchers. Multiple inventors converging."},
      {category:"Corporate Structure",detail:"Without Marconi's company, different corporations dominate early radio."},
      {category:"Broadcasting",detail:"Mass broadcasting emerges regardless. Radio entertainment develops similarly."},
      {category:"Ship Communication",detail:"Titanic might have different rescue story, but maritime radio comes regardless."}
    ],
    timeline:[
      {year:1895,happened:"Marconi demonstrates wireless",alternate:"Tesla, Lodge, or Popov demonstrate wireless within years"},
      {year:1912,happened:"Titanic disaster highlights radio value",alternate:"Maritime radio established regardless; different incident highlights it"},
      {year:1920,happened:"Commercial broadcasting begins",alternate:"Broadcasting emerges regardless; different corporate pioneers"},
      {year:1950,happened:"Radio universal",alternate:"Radio ubiquitous regardless of who invented it"}
    ],
    impact:{lives:"Mass communication",econ:"Broadcasting: $100B+",cultural:"Shared experience",reach:"Global",timeline:"Radio invented within 5 years by others"}},
  
  {id:"television",name:"Television",born:1927,died:null,cat:"inventions",field:"Communication Technology",
    quote:"Television is the first truly democratic culture. — Paddy Chayefsky",
    contributions:["Visual broadcasting","Home entertainment","News delivery","Political campaigns transformed"],
    r:0.65,reasoning:"Multiple inventors developed television systems — Farnsworth, Zworykin, Baird. The concept was pursued by corporations and individuals globally. Electronic television would have emerged from any of several paths.",
    counterfactual:"Television was simultaneously invented. Farnsworth, Zworykin, and Baird all developed systems in the 1920s-30s. RCA and other corporations were investing heavily. The technology would have emerged from any of these paths within a few years. The specific dominant system might differ, but television was coming. What matters more: which corporations controlled it, when it went commercial, how it was regulated. The technology was overdetermined.",
    ripples:[
      {category:"Timing",detail:"Television arrives within 5-10 years regardless. Different inventor gets credit; patents go elsewhere."},
      {category:"Standards",detail:"Different technical standards might emerge. NTSC vs. PAL-type battles might look different."},
      {category:"Corporate Control",detail:"RCA might not dominate. Different companies control early television."},
      {category:"Cultural Impact",detail:"Television transforms culture regardless of inventor. Same profound impact."}
    ],
    timeline:[
      {year:1927,happened:"Farnsworth demonstrates electronic television",alternate:"Zworykin or Baird demonstrate first; different inventor credited"},
      {year:1939,happened:"Commercial television begins",alternate:"Commercialization happens within similar timeframe"},
      {year:1960,happened:"TV transforms politics (Kennedy-Nixon debate)",alternate:"Same transformation under different technical path"},
      {year:2024,happened:"Streaming displaces traditional TV",alternate:"Same evolution regardless of original inventor"}
    ],
    impact:{lives:"Information access for billions",econ:"TV industry: $200B+",cultural:"Shared visual culture",reach:"Global",timeline:"Television invented within 5-10 years via others"}},
  
  {id:"photography",name:"Photography",born:1826,died:null,cat:"inventions",field:"Visual Technology",
    quote:"The camera is an instrument that teaches people how to see without a camera. — Dorothea Lange",
    contributions:["Visual documentation","Art form creation","Journalism transformed","Memory preservation"],
    r:0.55,reasoning:"Niépce, Daguerre, Talbot all developed photography methods around same time. The chemistry was advancing; camera obscura was ancient. Multiple approaches were being tried. Someone would have succeeded within a decade.",
    counterfactual:"Photography was simultaneously invented by multiple people. Niépce, Daguerre, and Talbot all developed photographic processes in the 1820s-30s. The underlying chemistry — light-sensitive silver compounds — was known. The camera obscura was ancient. Multiple experimenters were trying to fix images. Someone would have succeeded within a decade. The daguerreotype vs. calotype competition shows how multiple approaches were viable.",
    ripples:[
      {category:"Timing",detail:"Photography arrives within 10 years regardless. Different inventor, different name for the process."},
      {category:"Technical Path",detail:"Different process might dominate early — positive vs. negative might develop differently."},
      {category:"Art Form",detail:"Photography as art develops regardless. Same transformation of visual culture."},
      {category:"Documentation",detail:"The power to document visually emerges regardless. Same impact on evidence and memory."}
    ],
    timeline:[
      {year:1826,happened:"First permanent photograph (Niépce)",alternate:"Similar achievement within a decade by others"},
      {year:1839,happened:"Photography announced; daguerreotype popular",alternate:"Different inventor credited; different process name"},
      {year:1888,happened:"Kodak makes photography accessible",alternate:"Same democratization happens; different company perhaps"},
      {year:2000,happened:"Digital photography replaces film",alternate:"Same digital transition regardless of origins"}
    ],
    impact:{lives:"Visual memory for billions",econ:"Photography industry",cultural:"Documentary evidence",reach:"Global",timeline:"Photography invented within 10 years via others"}},
  
  {id:"refrigeration",name:"Mechanical Refrigeration",born:1834,died:null,cat:"inventions",field:"Domestic Technology",
    quote:"The ability to preserve food changed human civilization.",
    contributions:["Food preservation","Medical supply storage","Air conditioning enabled","Global food supply"],
    r:0.60,reasoning:"Multiple inventors worked on mechanical cooling. Perkins, Gorrie, Carré developed different systems. The thermodynamic principles were understood. Commercial development would have proceeded via multiple paths.",
    counterfactual:"Refrigeration was invented by multiple people through different approaches. Perkins, Gorrie, Carré, and others all developed cooling systems. The thermodynamics were understood; the engineering was the challenge. Someone would have created practical refrigeration within 10-20 years. The specific refrigerant and system design might differ, but the cold chain — transforming food distribution, diet, medicine — was coming.",
    ripples:[
      {category:"Timing",detail:"Refrigeration arrives within 10-20 years regardless. Different inventor, different system design."},
      {category:"Technology",detail:"Different refrigerant might dominate. CFC vs. ammonia vs. other coolants — path might differ."},
      {category:"Food System",detail:"The transformation of diet and food distribution happens regardless. Same profound impact."},
      {category:"Medicine",detail:"Vaccine cold chain, blood storage, etc. — same medical benefits under any path."}
    ],
    timeline:[
      {year:1834,happened:"Perkins builds first practical refrigerator",alternate:"Others achieve same within 10-20 years"},
      {year:1913,happened:"Home refrigerators introduced",alternate:"Domestic refrigeration on similar timeline"},
      {year:1950,happened:"Refrigeration transforms global food",alternate:"Same food revolution; different technical path"},
      {year:2020,happened:"Refrigerant debates (climate)",alternate:"Different refrigerant, same or different climate issues"}
    ],
    impact:{lives:"Food security for billions",econ:"Cold chain: $300B+",cultural:"Diet transformation",reach:"Global",timeline:"Refrigeration developed within 10-20 years via others"}},
  
  {id:"anesthesia",name:"Anesthesia",born:1846,died:null,cat:"inventions",field:"Medicine",
    quote:"We have conquered pain. — John Collins Warren",
    contributions:["Surgery possible without pain","Longer operations enabled","Dental procedures transformed","Millions of surgeries annually"],
    r:0.65,reasoning:"Morton, Wells, Long, and others all demonstrated anesthesia around same time. The properties of ether and nitrous oxide were known. Medical application was being pursued by multiple practitioners. Priority disputes show convergence.",
    counterfactual:"Anesthesia was simultaneously discovered by multiple practitioners. Morton, Wells, Long, and others all demonstrated surgical anesthesia in the 1840s. The properties of ether and nitrous oxide were already known; the question was applying them to surgery. The bitter priority dispute proves the point: this was an idea whose time had come. Without any specific individual, painless surgery arrives within 5 years.",
    ripples:[
      {category:"Timing",detail:"Anesthesia arrives within 5 years regardless. Different doctor gets credit for first demonstration."},
      {category:"Technique",detail:"Different agent might dominate initially — nitrous oxide vs. ether vs. chloroform."},
      {category:"Surgery",detail:"Same transformation of what surgery can accomplish. Same explosion of operations."},
      {category:"Dentistry",detail:"Same revolution in dental work. Different inventor remembered."}
    ],
    timeline:[
      {year:1846,happened:"First public demonstration of surgical anesthesia",alternate:"Similar demonstration within 2-5 years by another"},
      {year:1847,happened:"Anesthesia spreads globally",alternate:"Same rapid adoption; different inventor celebrated"},
      {year:1900,happened:"Anesthesia enables complex surgery",alternate:"Same surgical revolution; different origin story"},
      {year:2024,happened:"Millions of surgeries daily use anesthesia",alternate:"Same modern medicine regardless of who invented it"}
    ],
    impact:{lives:"Billions of surgeries enabled",econ:"Modern surgery",cultural:"Pain conquerable",reach:"Global medicine",timeline:"Anesthesia demonstrated within 5 years via others"}},
  
  {id:"antiseptic",name:"Antiseptic Technique",born:1867,died:null,cat:"inventions",field:"Medicine",
    quote:"There are people who do not object to eating a mutton chop, but who would be shocked at swallowing its germs. — Joseph Lister",
    contributions:["Surgical survival improved","Hospital infections reduced","Germ theory applied","Modern surgery enabled"],
    r:0.55,reasoning:"Lister applied Pasteur's germ theory to surgery. Semmelweis had proven hand-washing worked earlier. Multiple doctors were recognizing infection sources. The connection between germs and surgery was being made; Lister systematized it.",
    counterfactual:"Antiseptic surgery was coming — Semmelweis had already proven that hand-washing prevented childbed fever. Pasteur's germ theory was being published. The connection between germs and surgical infection was logical and being made by multiple doctors. Lister systematized and evangelized it, but someone would have made the same application within 10-20 years. The resistance Lister faced might have been similar or different for another advocate.",
    ripples:[
      {category:"Timing",detail:"Antiseptic surgery arrives within 10-20 years regardless. Different surgeon gets credit."},
      {category:"Adoption Speed",detail:"Different advocate might face more or less resistance. Adoption timeline could vary."},
      {category:"Surgery",detail:"Same transformation of surgical outcomes. Same reduction in post-operative deaths."},
      {category:"Hospital Design",detail:"Same eventual redesign of hospitals for hygiene. Different timing perhaps."}
    ],
    timeline:[
      {year:1867,happened:"Lister publishes on antiseptic technique",alternate:"Others make same connection within 10-20 years"},
      {year:1880,happened:"Antiseptic surgery accepted after resistance",alternate:"Acceptance at similar or different pace"},
      {year:1890,happened:"Aseptic technique replaces antiseptic",alternate:"Same progression to aseptic surgery"},
      {year:2024,happened:"Surgical hygiene taken for granted",alternate:"Same modern surgery; different origin story"}
    ],
    impact:{lives:"Millions saved from infection",econ:"Safe surgery possible",cultural:"Evidence-based medicine",reach:"Global surgery",timeline:"Antiseptic surgery adopted within 10-20 years regardless"}},
  
  {id:"xray",name:"X-Ray",born:1895,died:null,cat:"inventions",field:"Medical Technology",
    quote:"I have discovered something interesting, but I do not know whether or not my observations are correct. — Wilhelm Röntgen",
    contributions:["Medical imaging revolution","Diagnostic capability","Security scanning","Structural analysis"],
    r:0.70,reasoning:"Röntgen discovered X-rays, but cathode ray tubes were being studied by many. Several others might have noticed the phenomenon soon — Lenard, Crookes came close. The discovery was imminent in the physics of the time.",
    counterfactual:"X-rays were about to be discovered by someone. Lenard, Crookes, and others were studying cathode rays and came very close — Crookes noticed fogged photographic plates but didn't investigate. The phenomenon was sitting there waiting to be noticed. Röntgen happened to investigate systematically. Within 5 years, someone would have made the same discovery. The revolution in medical imaging was imminent.",
    ripples:[
      {category:"Timing",detail:"X-rays discovered within 5 years regardless. Different physicist gets credit."},
      {category:"Medical Revolution",detail:"Same transformation of medicine. Seeing inside the body arrives soon regardless."},
      {category:"Physics",detail:"Same understanding of electromagnetic spectrum follows. Same science."},
      {category:"Applications",detail:"Same applications in medicine, industry, security. Different name perhaps."}
    ],
    timeline:[
      {year:1895,happened:"Röntgen discovers X-rays",alternate:"Lenard, Crookes, or another discovers within 5 years"},
      {year:1896,happened:"X-rays used in medicine immediately",alternate:"Same immediate medical application"},
      {year:1900,happened:"Radiology emerges as medical specialty",alternate:"Same specialty; different discovery story"},
      {year:2024,happened:"X-rays routine in medicine",alternate:"Same technology; different name perhaps"}
    ],
    impact:{lives:"Medical diagnosis for billions",econ:"Medical imaging: $50B+",cultural:"Seeing inside the body",reach:"Global medicine",timeline:"X-rays discovered within 5 years by others"}},
  
  {id:"nuclearpower",name:"Nuclear Power",born:1942,died:null,cat:"inventions",field:"Energy Technology",
    quote:"The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one. — Einstein",
    contributions:["Carbon-free electricity","Nuclear weapons","Medical isotopes","Space exploration power"],
    r:0.50,reasoning:"Manhattan Project assembled global talent, but nuclear physics was advancing in Germany, Britain, USSR. Fission was discovered in Germany. Nuclear power/weapons were coming; the specific timing and which nation first was contingent.",
    counterfactual:"Nuclear fission was discovered in Germany in 1938. The physics was known internationally. The Manhattan Project assembled extraordinary talent and resources, but similar projects were underway in Germany, Britain, and the USSR. Nuclear weapons/power were coming — the question was timing and which nation first. Without the Manhattan Project, Germany or USSR might have built bombs first, with potentially catastrophic consequences for WWII's outcome.",
    ripples:[
      {category:"Timing",detail:"Nuclear weapons delayed 2-5 years if US project slows. Germany or USSR might achieve first."},
      {category:"WWII Outcome",detail:"If Germany gets bomb first, war outcome potentially reversed. If USSR first, Cold War starts differently."},
      {category:"Nuclear Age",detail:"Same eventual nuclear age — the physics was known. Different political circumstances."},
      {category:"Energy",detail:"Same eventual nuclear power plants. Different timing and political context."}
    ],
    timeline:[
      {year:1942,happened:"First controlled nuclear reaction (Chicago)",alternate:"Similar achievement elsewhere within 2-5 years"},
      {year:1945,happened:"Atomic bombs end WWII",alternate:"War ends differently without US bomb; possibly longer, possibly German/Soviet bomb"},
      {year:1954,happened:"First nuclear power plant",alternate:"Nuclear power on similar timeline"},
      {year:2024,happened:"Nuclear provides 10% of global electricity",alternate:"Same or different nuclear development depending on WWII outcome"}
    ],
    impact:{lives:"Energy for hundreds of millions; weapons: 200K+",econ:"Nuclear industry: $50B+",cultural:"Atomic age",reach:"Global",timeline:"Nuclear weapons/power delayed 2-5 years"}},
  
  {id:"contraceptive",name:"Birth Control Pill",born:1960,died:null,cat:"inventions",field:"Medicine",
    quote:"No woman can call herself free who does not own and control her body.",
    contributions:["Women's reproductive control","Sexual revolution enabled","Family planning possible","Population management"],
    r:0.50,reasoning:"Pincus and Rock developed it with funding from Sanger and McCormick. Hormonal contraception was being researched elsewhere. The specific timing reflected funding and regulatory choices. Other methods were advancing; hormonal control was coming.",
    counterfactual:"Hormonal contraception was being researched globally. Pincus and Rock had crucial funding from McCormick, but others were working on similar approaches. The specific timing — 1960 — reflected funding choices and FDA decisions. Without this team, hormonal contraception might be delayed by 5-10 years. Those years matter enormously for women's autonomy, but the technology was coming regardless.",
    ripples:[
      {category:"Timing",detail:"Hormonal contraception arrives within 10 years regardless. Different researchers, different brand."},
      {category:"Sexual Revolution",detail:"Same sexual revolution, perhaps slightly delayed. Birth control enables it regardless of specific pill."},
      {category:"Women's Workforce",detail:"Same transformation of women's economic participation, perhaps slightly delayed."},
      {category:"Population",detail:"Same demographic transitions, perhaps on slightly different timeline."}
    ],
    timeline:[
      {year:1960,happened:"FDA approves first birth control pill",alternate:"Similar approval within 10 years via different team"},
      {year:1965,happened:"Pill legal for married women in all states",alternate:"Legal battles happen similarly"},
      {year:1970,happened:"Sexual revolution in full swing",alternate:"Same cultural revolution, perhaps slightly delayed"},
      {year:2024,happened:"Hormonal contraception global",alternate:"Same global availability; different origin story"}
    ],
    impact:{lives:"Women's autonomy globally",econ:"Female workforce participation",cultural:"Sexual revolution",reach:"Global",timeline:"Hormonal contraception within 10 years regardless"}},
  
  {id:"semiconductor",name:"Integrated Circuit",born:1958,died:null,cat:"inventions",field:"Computing",
    quote:"What we didn't realize then was that the integrated circuit would reduce the cost of electronic functions by a factor of a million. — Jack Kilby",
    contributions:["Microelectronics enabled","Computers miniaturized","Smartphones possible","Moore's Law begins"],
    r:0.70,reasoning:"Kilby and Noyce invented integrated circuits independently within months. The need was obvious; planar technology was advancing. Multiple paths would have led there. Someone would have integrated circuits onto chips very soon.",
    counterfactual:"The integrated circuit was independently invented by Kilby and Noyce within months of each other. This simultaneous invention proves the technology was ready — the need was obvious, the components were there. Without either inventor, the other gets credit. Without both, someone else invents it within 2-3 years. The entire computing revolution proceeds on nearly identical timeline. This is one of the most replaceable major inventions.",
    ripples:[
      {category:"Timing",detail:"Integrated circuits arrive within 2-3 years regardless. Different inventor gets credit."},
      {category:"Computing",detail:"Same computing revolution. Same miniaturization. Same smartphones and laptops."},
      {category:"Moore's Law",detail:"Same exponential improvement in computing. The law might be named differently."},
      {category:"Patent Wars",detail:"Different patent holder. Different corporate beneficiaries perhaps."}
    ],
    timeline:[
      {year:1958,happened:"Kilby and Noyce independently invent IC",alternate:"Others invent within 2-3 years; the need was obvious"},
      {year:1971,happened:"Intel 4004 microprocessor",alternate:"Same microprocessor revolution"},
      {year:2007,happened:"iPhone demonstrates IC power",alternate:"Same smartphone revolution"},
      {year:2024,happened:"ICs in everything",alternate:"Same ubiquitous computing"}
    ],
    impact:{lives:"Modern electronics for all",econ:"Semiconductor: $600B+",cultural:"Computing revolution",reach:"Global",timeline:"ICs invented within 2-3 years by others"}},
  
  {id:"laser",name:"Laser",born:1960,died:null,cat:"inventions",field:"Physics Technology",
    quote:"The laser is a solution seeking a problem.",
    contributions:["Precision cutting","Medical surgery","Communications","Data storage"],
    r:0.65,reasoning:"Maiman built first laser, but Townes, Basov, Prokhorov developed theory (Nobel Prize). Multiple labs were racing to build one. The physics was understood; engineering was catch-up. Lasers would have emerged from multiple paths.",
    counterfactual:"The laser was a race — multiple labs were trying to build one once the theory was published. Maiman at Hughes Research got there first, but Bell Labs, Columbia, and Soviet labs were close behind. The theory (Townes, Basov, Prokhorov) had already won a Nobel. Without Maiman specifically, someone builds a working laser within months to a couple years. The technology was coming.",
    ripples:[
      {category:"Timing",detail:"Lasers arrive within 2-3 years regardless. Different lab, different inventor gets credit."},
      {category:"Applications",detail:"Same applications — communications, surgery, manufacturing, storage."},
      {category:"CD/DVD",detail:"Same optical storage revolution. Different inventor remembered."},
      {category:"Medicine",detail:"Same laser surgery transformation. Different origin story."}
    ],
    timeline:[
      {year:1960,happened:"Maiman builds first working laser",alternate:"Other labs succeed within 1-2 years"},
      {year:1982,happened:"CD players use lasers",alternate:"Same optical storage; different inventor credited"},
      {year:1990,happened:"Laser surgery common",alternate:"Same medical applications"},
      {year:2024,happened:"Lasers ubiquitous",alternate:"Same technology; different history"}
    ],
    impact:{lives:"Medical applications for billions",econ:"Laser industry: $20B+",cultural:"Precision technology",reach:"Global",timeline:"Lasers invented within 2-3 years via others"}},
  
  {id:"gps_inv",name:"GPS",born:1973,died:null,cat:"inventions",field:"Navigation Technology",
    quote:"GPS has saved more lives than any other technology. — Bradford Parkinson",
    contributions:["Global positioning","Navigation transformed","Logistics revolution","Location-based services"],
    r:0.55,reasoning:"GPS required government investment (US military). Soviet GLONASS developed independently. The concept — triangulation from satellites — was understood. Some nation would have built a positioning system; the specific timing and openness to civilians was policy choice.",
    counterfactual:"Satellite positioning was independently developed by the US (GPS) and USSR (GLONASS). The concept was obvious once satellites existed. Without the US program, GLONASS might dominate. Without both, satellite navigation is delayed but comes eventually. The crucial decision — making GPS available to civilians in 1983 after KAL 007 — was a policy choice. A different nation's system might be less open.",
    ripples:[
      {category:"Which System",detail:"GLONASS might dominate without GPS. Different accuracy, different availability."},
      {category:"Civilian Access",detail:"The decision to open GPS to civilians was policy. A different system might stay military-only longer."},
      {category:"Applications",detail:"Same location-based economy eventually, but perhaps delayed or with different characteristics."},
      {category:"International",detail:"GPS created US infrastructure dominance. Different system = different geopolitics of location."}
    ],
    timeline:[
      {year:1973,happened:"GPS development begins",alternate:"GLONASS or European system might lead instead"},
      {year:1983,happened:"GPS opened to civilians after KAL 007",alternate:"Military-only might persist longer under different system"},
      {year:2000,happened:"GPS accuracy unlocked",alternate:"Same or different accuracy trajectory"},
      {year:2024,happened:"GPS in everything",alternate:"Some positioning system in everything; might not be American"}
    ],
    impact:{lives:"Navigation safety for billions",econ:"Location economy: $300B+",cultural:"Never lost again",reach:"Global",timeline:"Satellite navigation developed by others"}},
  
  {id:"mri",name:"MRI",born:1971,died:null,cat:"inventions",field:"Medical Technology",
    quote:"MRI has allowed us to see inside the living human body without surgery.",
    contributions:["Non-invasive imaging","Brain research enabled","Cancer detection","Soft tissue visualization"],
    r:0.55,reasoning:"Damadian, Lauterbur, Mansfield all contributed. Nuclear magnetic resonance was known physics. Application to medical imaging was pursued by multiple groups. The technology would have emerged from the active research community.",
    counterfactual:"MRI had multiple inventors — Damadian, Lauterbur, and Mansfield all contributed key elements, leading to Nobel controversy. Nuclear magnetic resonance was known physics; applying it to medical imaging was being pursued by multiple groups. Without any single inventor, the others continue. The technology emerges within 5-10 years from this active research community. Same revolution in medical imaging.",
    ripples:[
      {category:"Timing",detail:"MRI arrives within 5-10 years regardless. Different inventor gets Nobel (still controversial)."},
      {category:"Brain Research",detail:"Same transformation of neuroscience. Same ability to see living brain."},
      {category:"Diagnosis",detail:"Same revolution in soft tissue imaging. Same cancer detection."},
      {category:"Medicine",detail:"Same transformation of medicine. Different inventor remembered."}
    ],
    timeline:[
      {year:1971,happened:"First MRI image",alternate:"Others achieve within 5-10 years; active research area"},
      {year:1977,happened:"First human MRI scan",alternate:"Same progression; different inventor"},
      {year:2003,happened:"MRI Nobel Prize (controversial)",alternate:"Different or same controversial Nobel"},
      {year:2024,happened:"MRI routine in medicine",alternate:"Same medical imaging; different origin story"}
    ],
    impact:{lives:"Millions of diagnoses annually",econ:"MRI industry: $7B+",cultural:"Seeing the brain",reach:"Global medicine",timeline:"MRI developed within 5-10 years via others"}},
  
  {id:"greenrevolution",name:"Green Revolution (High-Yield Crops)",born:1960,died:null,cat:"inventions",field:"Agriculture",
    quote:"The destiny of world civilization depends upon providing a decent standard of living for all mankind. — Norman Borlaug",
    contributions:["Crop yields doubled/tripled","Famine prevention","1 billion lives saved (estimated)","Modern agriculture"],
    r:0.40,reasoning:"Borlaug's dwarf wheat was specifically bred to resist disease and respond to fertilizer. Rockefeller Foundation funding was crucial. Without this specific program, Asian famines of 1970s might have killed hundreds of millions. Similar research was happening, but Borlaug's work was most impactful.",
    counterfactual:"The Green Revolution was less inevitable than it seems. Borlaug's specific breeding work — dwarf wheat varieties that didn't fall over when heavily fertilized — was his contribution. Without him and the Rockefeller Foundation funding, the Asian famines predicted for the 1970s might have happened. Hundreds of millions might have died. Similar agricultural research was happening, but not at the same scale or speed. This is one case where a single person's work might have saved a billion lives.",
    ripples:[
      {category:"Famine Prevention",detail:"Without Borlaug, predicted 1970s famines in India and Pakistan might happen. Hundreds of millions die."},
      {category:"Timing",detail:"High-yield varieties come eventually, but perhaps decades later. Those decades cost lives."},
      {category:"Environmental Impact",detail:"Same eventual green revolution; same environmental concerns about fertilizer and water use."},
      {category:"Agricultural Science",detail:"Different path to high-yield agriculture. Possibly slower, possibly with different techniques."}
    ],
    timeline:[
      {year:1961,happened:"Borlaug's wheat introduced to India",alternate:"India faces food crisis; famines possible"},
      {year:1970,happened:"Borlaug wins Nobel Peace Prize",alternate:"Famines might be occurring instead of being prevented"},
      {year:1980,happened:"1 billion lives saved (estimate)",alternate:"Many of those billion dead from famine"},
      {year:2024,happened:"High-yield agriculture global",alternate:"High-yield arrives eventually; different path, different death toll"}
    ],
    impact:{lives:"1B+ saved from starvation",econ:"Global food supply",cultural:"Agricultural science triumph",reach:"Asia, global",timeline:"Famines kill hundreds of millions more"}},
  
  {id:"dna_tech",name:"DNA Sequencing",born:1977,died:null,cat:"inventions",field:"Biotechnology",
    quote:"DNA is like a computer program but far, far more advanced than any software ever created. — Bill Gates",
    contributions:["Genetic analysis enabled","Disease genes identified","Forensic identification","Personalized medicine foundation"],
    r:0.55,reasoning:"Sanger developed sequencing method; others developed alternatives. DNA structure was known; the need for sequencing was recognized. Multiple approaches were being developed. The specific method might differ but sequencing capability was coming.",
    counterfactual:"DNA sequencing had multiple competing approaches. Sanger sequencing won out, but Maxam-Gilbert sequencing was developed simultaneously. The need to read DNA was obvious once the structure was known. Without Sanger, we'd have sequencing within 5-10 years via different method. The specific technique would differ, but the capability to read genetic code was coming regardless.",
    ripples:[
      {category:"Timing",detail:"Sequencing arrives within 5-10 years regardless. Different method might dominate."},
      {category:"Technique",detail:"Maxam-Gilbert or another method might become standard. Different lab procedures."},
      {category:"Human Genome Project",detail:"Same eventual project to sequence human genome. Different timing, different methods."},
      {category:"Personalized Medicine",detail:"Same eventual transformation of medicine. Different origin story."}
    ],
    timeline:[
      {year:1977,happened:"Sanger sequencing developed",alternate:"Maxam-Gilbert or other method dominates"},
      {year:1990,happened:"Human Genome Project begins",alternate:"Similar project; perhaps slightly later or different methods"},
      {year:2003,happened:"Human genome sequenced",alternate:"Same achievement; perhaps slightly different timeline"},
      {year:2024,happened:"Sequencing routine in medicine",alternate:"Same capability; different technical history"}
    ],
    impact:{lives:"Medical understanding for all",econ:"Genomics: $25B+",cultural:"Genetic self-knowledge",reach:"Global medicine",timeline:"DNA sequencing within 5-10 years via others"}},
  
  {id:"crispr",name:"CRISPR Gene Editing",born:2012,died:null,cat:"inventions",field:"Biotechnology",
    quote:"The power to control our own genetic future is awesome and terrifying.",
    contributions:["Precise gene editing","Disease treatment potential","Agricultural modification","Ethical debates sparked"],
    r:0.50,reasoning:"Doudna and Charpentier discovered CRISPR's gene-editing potential, but the system existed in bacteria. Multiple labs were studying it. The specific application to editing was their insight, but CRISPR biology was being studied widely.",
    counterfactual:"CRISPR as a bacterial immune system was being studied by multiple labs. Doudna and Charpentier made the crucial insight: this system could be reprogrammed to edit any gene. Without them, someone else makes this connection within 5 years — the system was too interesting, too active a research area. The gene editing revolution happens on similar timeline. The specific Nobel laureates might differ.",
    ripples:[
      {category:"Timing",detail:"Gene editing via CRISPR arrives within 5 years regardless. Different researchers get Nobel."},
      {category:"Applications",detail:"Same applications — disease treatment, agriculture, ethical debates."},
      {category:"Ethics Debates",detail:"Same debates about designer babies, gene drives, etc. Different timing perhaps."},
      {category:"Patent Wars",detail:"Different patent holders. Different corporate landscape."}
    ],
    timeline:[
      {year:2012,happened:"CRISPR gene editing demonstrated",alternate:"Similar discovery within 5 years by others"},
      {year:2020,happened:"Nobel Prize for CRISPR",alternate:"Nobel for gene editing; different laureates perhaps"},
      {year:2023,happened:"First CRISPR therapies approved",alternate:"Similar therapies; perhaps slightly different timeline"},
      {year:2030,happened:"CRISPR transforms medicine (projected)",alternate:"Same transformation; different origin story"}
    ],
    impact:{lives:"Future medical treatments",econ:"Gene therapy industry",cultural:"Playing God debates",reach:"Global biotechnology",timeline:"Gene editing via CRISPR within 5 years"}},
  
  {id:"solar_pv",name:"Solar Photovoltaics",born:1954,died:null,cat:"inventions",field:"Energy Technology",
    quote:"I'd put my money on the sun and solar energy. What a source of power! — Thomas Edison",
    contributions:["Renewable electricity","Decentralized power","Climate solution component","Space power systems"],
    r:0.60,reasoning:"Bell Labs developed first practical solar cell. Photovoltaic effect was known since 1839. Multiple labs worked on semiconductors. The specific efficiency breakthroughs came from Bell's silicon work, but solar research was active globally.",
    counterfactual:"The photovoltaic effect was known since 1839. Semiconductor research was active at multiple labs in the 1950s. Bell Labs made the first practical solar cell, but others were close. Without Bell, practical solar cells emerge within 10 years from RCA, GE, or European labs. The space race would drive development regardless. Solar's cost decline might follow different curve but same direction.",
    ripples:[
      {category:"Timing",detail:"Practical solar cells arrive within 10 years regardless. Different lab gets credit."},
      {category:"Space Applications",detail:"Same use in satellites. Space race drives development regardless."},
      {category:"Cost Curve",detail:"Solar's dramatic cost decline might follow different path but same direction."},
      {category:"Climate Solution",detail:"Same eventual climate applications. Same renewable energy potential."}
    ],
    timeline:[
      {year:1954,happened:"Bell Labs demonstrates practical solar cell",alternate:"Other labs achieve within 10 years"},
      {year:1958,happened:"Solar powers Vanguard satellite",alternate:"Same space applications; space race drives it"},
      {year:2010,happened:"Solar costs begin dramatic decline",alternate:"Similar cost decline; perhaps different timing"},
      {year:2024,happened:"Solar cheapest electricity in many places",alternate:"Same energy transition; different origin story"}
    ],
    impact:{lives:"Clean energy transition",econ:"Solar: $300B+ industry",cultural:"Sustainable energy hope",reach:"Global",timeline:"Practical solar cells within 10 years via others"}},
  
  {id:"lithiumbattery",name:"Lithium-Ion Battery",born:1991,died:null,cat:"inventions",field:"Energy Storage",
    quote:"Batteries will be as important as semiconductors.",
    contributions:["Portable electronics enabled","Electric vehicles possible","Grid storage","Renewable energy storage"],
    r:0.55,reasoning:"Goodenough, Whittingham, and Yoshino developed lithium-ion batteries over decades. Multiple paths were pursued. Sony commercialized. The chemistry was being explored by many; specific breakthroughs came from this team but battery research was broad.",
    counterfactual:"Lithium-ion batteries were developed by multiple researchers over decades — Whittingham, Goodenough, Yoshino all contributed key elements. Without any one of them, the others continue. The chemistry was being explored broadly; the need (portable electronics, EVs) was obvious. Lithium-ion batteries emerge within 5-10 years via different path. Same smartphone and EV revolution, slightly delayed perhaps.",
    ripples:[
      {category:"Timing",detail:"Lithium-ion batteries arrive within 5-10 years regardless. Different researchers get Nobel."},
      {category:"Portable Electronics",detail:"Same laptop and smartphone revolution. Perhaps slightly delayed."},
      {category:"Electric Vehicles",detail:"Same EV revolution. Different battery chemistry perhaps, or same via different path."},
      {category:"Grid Storage",detail:"Same renewable energy storage potential. Different or same technology."}
    ],
    timeline:[
      {year:1991,happened:"Sony commercializes lithium-ion battery",alternate:"Commercialization within 5-10 years via different company"},
      {year:2007,happened:"iPhone battery enables smartphone era",alternate:"Same smartphone revolution"},
      {year:2019,happened:"Nobel Prize for lithium-ion batteries",alternate:"Nobel for battery technology; perhaps different laureates"},
      {year:2024,happened:"EVs mainstream thanks to batteries",alternate:"Same EV transition; perhaps slightly different timeline"}
    ],
    impact:{lives:"Mobile technology for billions",econ:"Battery: $50B+",cultural:"Portable power",reach:"Global",timeline:"Lithium batteries within 5-10 years via others"}},
  
  {id:"wwweb",name:"World Wide Web",born:1989,died:null,cat:"inventions",field:"Communication Technology",
    quote:"The Web as I envisaged it, we have not seen it yet. — Tim Berners-Lee",
    contributions:["Internet made usable","E-commerce enabled","Social media possible","Information access transformed"],
    r:0.45,reasoning:"Internet existed; hypertext existed (Xanadu, HyperCard). Berners-Lee combined them with URLs, HTTP, HTML in a way that worked. Others were building hypertext systems. His specific simple design enabled adoption. A different web might have been less open.",
    counterfactual:"Without the World Wide Web, the internet still exists — it was there before Berners-Lee. But his specific combination of URLs, HTTP, and HTML created something simple enough to go viral. Without it, the internet might remain academic and technical longer, or a different hypertext system (Gopher, Xanadu) might win. That alternative web might be more centralized, less open, differently structured. The web we got was shaped by Berners-Lee's decision to make it free and open.",
    ripples:[
      {category:"Openness",detail:"Berners-Lee made the web free and open. An alternative might have been proprietary."},
      {category:"Simplicity",detail:"HTML's simplicity enabled adoption. A more complex system might spread slower."},
      {category:"Timing",detail:"Something web-like emerges within 5-10 years, but shaped differently."},
      {category:"Structure",detail:"URLs, links, the page model — all could have been different. Different web, different internet culture."}
    ],
    timeline:[
      {year:1989,happened:"Berners-Lee proposes WWW at CERN",alternate:"Internet applications develop through other systems"},
      {year:1993,happened:"Web goes public; Mosaic browser",alternate:"Gopher or proprietary system might dominate"},
      {year:2000,happened:"Dot-com boom",alternate:"Internet commercializes differently"},
      {year:2024,happened:"4B+ web users; web-based economy",alternate:"Internet economy exists; different structure and openness"}
    ],
    impact:{lives:"4B+ users",econ:"$10T+ web economy",cultural:"Information access",reach:"Global",timeline:"Web emerges differently, possibly less openly"}},
  
  {id:"smartphone",name:"Smartphone",born:2007,died:null,cat:"inventions",field:"Personal Technology",
    quote:"There's an app for that.",
    contributions:["Personal computing mobile","App economy created","Social media access","Global connectivity"],
    r:0.60,reasoning:"PDAs and phones were converging. Blackberry had email phones. Touch screens existed. Apple's specific combination — multi-touch, App Store, design — was innovative integration. But smartphone evolution was happening; iPhone accelerated and shaped it.",
    counterfactual:"Without the iPhone, smartphones still come — Blackberry, Palm, Windows Mobile were all moving this direction. But Apple's specific design choices shaped what smartphones became: multi-touch interface, App Store model, the specific form factor. Without iPhone, smartphones might be more Blackberry-like (keyboards, business focus) or take longer to reach mass consumers. Android might dominate from the start with different design language.",
    ripples:[
      {category:"Design",detail:"iPhone's design became the template. Without it, smartphones might have keyboards, different interfaces."},
      {category:"App Store",detail:"Apple's App Store model shaped mobile software. Different model might emerge."},
      {category:"Timing",detail:"Smartphones reach mass market 3-5 years later, or with different characteristics."},
      {category:"Android",detail:"Android develops anyway but might look different without iPhone to copy/compete with."}
    ],
    timeline:[
      {year:2007,happened:"iPhone launched",alternate:"Smartphones evolve from Blackberry/Palm/Windows Mobile"},
      {year:2008,happened:"App Store launches",alternate:"Mobile software distribution develops differently"},
      {year:2010,happened:"Smartphone mass adoption",alternate:"Adoption slightly slower; different design language"},
      {year:2024,happened:"5B+ smartphone users",alternate:"Similar reach; different interface paradigm possibly"}
    ],
    impact:{lives:"5B+ smartphone users",econ:"$500B+ industry",cultural:"Constant connectivity",reach:"Global",timeline:"Smartphones evolve within 3-5 years similarly"}},
  
  {id:"3dprinting",name:"3D Printing",born:1984,died:null,cat:"inventions",field:"Manufacturing",
    quote:"3D printing has the potential to revolutionize the way we make almost everything.",
    contributions:["Rapid prototyping","Custom manufacturing","Medical implants","Distributed production"],
    r:0.55,reasoning:"Hull invented stereolithography; others developed different approaches (FDM, SLS). The concept of additive manufacturing was being explored in multiple ways. The technology would have emerged; specific methods might differ.",
    counterfactual:"Without Chuck Hull's stereolithography, 3D printing still emerges — multiple inventors were working on additive manufacturing. FDM, SLS, and other methods were being developed. The specific timing and which method dominated might differ. Without Hull, 3D printing might come 5-10 years later, or a different technology (FDM, perhaps) might become the standard first.",
    ripples:[
      {category:"Technology Mix",detail:"Different 3D printing method might dominate. FDM might become standard earlier."},
      {category:"Timing",detail:"3D printing emerges within 5-10 years through other inventors."},
      {category:"Industry",detail:"Rapid prototyping develops anyway; specific technology differs."},
      {category:"Applications",detail:"Same applications eventually; timing and specific capabilities vary."}
    ],
    timeline:[
      {year:1984,happened:"Hull invents stereolithography",alternate:"Other 3D printing methods developed first"},
      {year:1990,happened:"Rapid prototyping industry grows",alternate:"Industry develops 5-10 years later"},
      {year:2010,happened:"Consumer 3D printing emerges",alternate:"Consumer adoption with different technology"},
      {year:2024,happened:"3D printing in medicine, manufacturing",alternate:"Same applications; different specific technology"}
    ],
    impact:{lives:"Manufacturing revolution",econ:"3D printing: $15B+",cultural:"Personal manufacturing",reach:"Global manufacturing",timeline:"3D printing within 5-10 years via others"}},
  
  {id:"antibiotics_sulfa",name:"Sulfonamide Antibiotics",born:1935,died:null,cat:"inventions",field:"Medicine",
    quote:"This is the greatest thing since the discovery of fire. — Winston Churchill (on sulfa drugs)",
    contributions:["First effective antibiotics","Millions saved before penicillin","Bacterial infection treatment","Modern pharmacology model"],
    r:0.60,reasoning:"Domagk discovered Prontosil's antibacterial effect. Dye chemistry was being explored for medical uses. The specific discovery was his, but antimicrobial research was active. Similar discoveries might have emerged from other dye research.",
    counterfactual:"Without sulfonamides, bacterial infection still kills millions until penicillin arrives in the 1940s. But sulfa drugs saved millions in the critical 1935-1945 window before penicillin was widely available. Dye chemistry research was active; someone might have found another antimicrobial. But if not, the gap between 'no antibiotics' and 'penicillin' is longer and deadlier. More people die of infections in the late 1930s.",
    ripples:[
      {category:"1935-1945 Gap",detail:"Without sulfa, millions more die before penicillin. Critical window of no treatment."},
      {category:"WWII",detail:"Sulfa drugs saved many soldiers. Without them, more battlefield deaths."},
      {category:"Model",detail:"Sulfa showed systematic drug screening could work. Research model might develop differently."},
      {category:"Penicillin",detail:"Penicillin development might be slower or faster without sulfa's example."}
    ],
    timeline:[
      {year:1935,happened:"Domagk discovers Prontosil",alternate:"Bacterial infections remain untreatable"},
      {year:1937,happened:"Sulfa drugs save millions",alternate:"Millions die of treatable infections"},
      {year:1942,happened:"Penicillin production begins",alternate:"Penicillin still comes; sulfa gap is deadlier"},
      {year:2024,happened:"Sulfa drugs still used for some conditions",alternate:"Antibiotic history different; same endpoint"}
    ],
    impact:{lives:"Millions saved before penicillin",econ:"Pharmaceutical industry model",cultural:"Chemical medicine triumph",reach:"Global",timeline:"Antimicrobials discovered within 10 years"}},
  
  {id:"organ_transplant",name:"Organ Transplantation",born:1954,died:null,cat:"inventions",field:"Medicine",
    quote:"The body accepts the foreign organ. The mind sometimes takes longer.",
    contributions:["Life extension possible","Kidney, heart, liver transplants","Immunosuppression developed","Donor networks established"],
    r:0.50,reasoning:"Murray performed first kidney transplant. Multiple surgeons attempted transplants. Immunology was advancing. The specific breakthroughs in tissue matching and immunosuppression involved many researchers. Transplantation would have developed via multiple paths.",
    counterfactual:"Without Murray's first successful kidney transplant, organ transplantation still develops — multiple surgeons were trying. But the specific path might differ: different organs first, different immunosuppression approaches. Without the kidney transplant success in 1954, transplant medicine might be delayed 5-10 years. The immunology challenges were being solved by multiple researchers. Transplantation was coming; timing and specific development path would vary.",
    ripples:[
      {category:"Timing",detail:"Transplant medicine delayed 5-10 years without early kidney success."},
      {category:"Immunology",detail:"Immunosuppression research continues regardless. Specific drugs might differ."},
      {category:"Heart Transplant",detail:"Barnard's 1967 heart transplant might come later or through different surgeon."},
      {category:"Ethics",detail:"Transplant ethics debates happen regardless; specific timing varies."}
    ],
    timeline:[
      {year:1954,happened:"First successful kidney transplant",alternate:"Transplant attempts continue; success comes later"},
      {year:1967,happened:"First heart transplant",alternate:"Heart transplant delayed without kidney success model"},
      {year:1980,happened:"Cyclosporine improves survival",alternate:"Immunosuppression advances regardless"},
      {year:2024,happened:"Millions of transplants performed",alternate:"Transplant medicine exists; development delayed 5-10 years"}
    ],
    impact:{lives:"Millions of transplants performed",econ:"Transplant medicine",cultural:"Life extension ethics",reach:"Global medicine",timeline:"Transplantation within 10 years via others"}},
  
  {id:"ivf",name:"In Vitro Fertilization",born:1978,died:null,cat:"inventions",field:"Medicine",
    quote:"Every child born through IVF is special. — Robert Edwards",
    contributions:["Infertility treatment","8 million IVF births","Genetic screening possible","Family formation options"],
    r:0.50,reasoning:"Edwards and Steptoe developed IVF over decades. Reproductive biology was advancing globally. The specific technique was their achievement, but the science was being pursued. IVF or similar assisted reproduction was coming.",
    counterfactual:"Without Edwards and Steptoe, assisted reproduction still develops — reproductive biology was advancing. But their specific technique, refined over decades, produced Louise Brown in 1978. Without them, IVF might come 5-10 years later through other researchers. The 8 million people born through IVF by 2024 might be fewer, or born later. Infertility treatment advances regardless; this specific technique's timing changes.",
    ripples:[
      {category:"Louise Brown",detail:"First 'test tube baby' doesn't happen in 1978. Later birth, different media attention."},
      {category:"8 Million Lives",detail:"Fewer IVF births by 2024 if technique developed later."},
      {category:"Ethics",detail:"Reproductive technology debates happen regardless; specific triggers vary."},
      {category:"Genetic Screening",detail:"PGD and related technologies develop with IVF; timing varies."}
    ],
    timeline:[
      {year:1978,happened:"First IVF baby (Louise Brown)",alternate:"IVF developed 5-10 years later"},
      {year:1990,happened:"IVF becomes mainstream",alternate:"Mainstream adoption delayed"},
      {year:2000,happened:"ICSI and advanced techniques",alternate:"Same techniques; different timeline"},
      {year:2024,happened:"8M+ IVF births",alternate:"Fewer births by 2024; same long-term trajectory"}
    ],
    impact:{lives:"8M+ births",econ:"Fertility industry: $25B+",cultural:"Reproductive technology ethics",reach:"Global",timeline:"IVF or alternative within 10 years"}},
  
  {id:"pacemaker",name:"Cardiac Pacemaker",born:1958,died:null,cat:"inventions",field:"Medical Devices",
    quote:"The pacemaker saved my life. It saves lives every day.",
    contributions:["Cardiac arrhythmia treatment","Millions of implantations","Medical device industry","Life extension"],
    r:0.60,reasoning:"Greatbatch invented implantable pacemaker; others developed external versions. Cardiac electrophysiology was advancing. The need was clear; technology was becoming available. Multiple paths would have led to pacemakers.",
    counterfactual:"Without Greatbatch's implantable pacemaker, cardiac pacing still develops — external pacemakers existed. But implantable devices that let patients live normal lives might come 5-10 years later. In that window, more people with arrhythmias die who would have lived. The medical device industry develops regardless; this specific life-saving technology is delayed.",
    ripples:[
      {category:"Delay",detail:"Implantable pacemaker delayed 5-10 years. More arrhythmia deaths in that window."},
      {category:"External Devices",detail:"External pacemakers continue; less convenient but available."},
      {category:"Device Industry",detail:"Medical device industry develops anyway; pacemaker is major driver."},
      {category:"Quality of Life",detail:"Patients with external devices have worse quality of life longer."}
    ],
    timeline:[
      {year:1958,happened:"First implantable pacemaker",alternate:"External pacemakers continue; implantable delayed"},
      {year:1970,happened:"Pacemaker technology improves",alternate:"Improvement timeline shifted"},
      {year:2000,happened:"Advanced pacemakers common",alternate:"Same technology; reached later"},
      {year:2024,happened:"Millions kept alive by pacemakers",alternate:"Same long-term outcome; more deaths in early period"}
    ],
    impact:{lives:"Millions kept alive",econ:"Medical devices: $10B+",cultural:"Technology inside the body",reach:"Global medicine",timeline:"Pacemakers within 10 years via others"}},
  
  {id:"blockchain",name:"Blockchain",born:2008,died:null,cat:"inventions",field:"Computing",
    quote:"The blockchain does one thing: It replaces third-party trust with mathematical proof.",
    contributions:["Decentralized transactions","Cryptocurrency enabled","Smart contracts","Trustless systems"],
    r:0.45,reasoning:"Satoshi Nakamoto combined existing cryptographic concepts (hash chains, proof of work) in novel way. The components existed; the specific combination creating Bitcoin was innovative. Decentralized currency concepts were being explored; this specific implementation succeeded.",
    counterfactual:"Without Satoshi's blockchain/Bitcoin, decentralized currency concepts were being explored — cypherpunks had discussed digital cash for decades. But Satoshi's specific combination of hash chains, proof of work, and economic incentives actually worked where others failed. Without it, cryptocurrency might come later, differently, or possibly not at all in recognizable form. The 'crypto' phenomenon as we know it — including Ethereum, DeFi, NFTs — doesn't happen the same way.",
    ripples:[
      {category:"Timing",detail:"Decentralized currency explored but might not succeed the same way. Possibly delayed 10+ years."},
      {category:"Design",detail:"Different design choices might produce different cryptocurrency ecosystem."},
      {category:"Ecosystem",detail:"No Ethereum, no DeFi, no NFTs — or very different versions."},
      {category:"Finance",detail:"Traditional finance faces less pressure from crypto alternative."}
    ],
    timeline:[
      {year:2008,happened:"Bitcoin whitepaper published",alternate:"Decentralized currency experiments continue"},
      {year:2013,happened:"Bitcoin gains mainstream attention",alternate:"No crypto boom; digital currency remains obscure"},
      {year:2017,happened:"Ethereum, ICO boom",alternate:"No ecosystem built on blockchain"},
      {year:2024,happened:"Crypto $1T+ market",alternate:"Traditional finance unchanged; no crypto alternative"}
    ],
    impact:{lives:"Financial alternatives",econ:"Crypto: $1T+ market",cultural:"Decentralization ideology",reach:"Global finance",timeline:"Decentralized currency emerges differently"}},
  
  {id:"ai_neural",name:"Deep Learning / Neural Networks",born:2012,died:null,cat:"inventions",field:"Computing",
    quote:"We're making machines that can do things we thought only humans could do.",
    contributions:["Image recognition breakthrough","Language models","Autonomous systems","AI renaissance"],
    r:0.50,reasoning:"Deep learning breakthrough came from Hinton, LeCun, Bengio, but neural networks were known since 1950s. Computing power enabled their success. Multiple researchers contributed; the specific timing reflected hardware advances. AI progress was coming; this path accelerated it.",
    counterfactual:"Without the 2012 deep learning breakthrough (AlexNet), AI still advances — computing power was growing, data was accumulating. But the specific neural network renaissance might be delayed or take different form. Other AI approaches (symbolic, evolutionary) might get more investment. The current AI boom centered on large language models might happen 5-10 years later or look different. AI progress was coming; this specific path shaped how it happened.",
    ripples:[
      {category:"Timing",detail:"AI boom delayed 5-10 years. GPT, ChatGPT come later."},
      {category:"Approach",detail:"Different AI methods might dominate. Symbolic AI might get more investment."},
      {category:"Applications",detail:"Self-driving cars, image recognition — same goals pursued differently."},
      {category:"Industry",detail:"Tech giants' AI investments happen anyway but with different technologies."}
    ],
    timeline:[
      {year:2012,happened:"AlexNet wins ImageNet; deep learning renaissance",alternate:"AI research continues with different methods"},
      {year:2017,happened:"Transformers invented",alternate:"Language models develop differently or later"},
      {year:2022,happened:"ChatGPT launches",alternate:"No ChatGPT moment; AI progress slower or different"},
      {year:2024,happened:"AI industry: $200B+",alternate:"AI industry smaller or different character"}
    ],
    impact:{lives:"AI affecting billions",econ:"AI industry: $200B+",cultural:"Machine intelligence",reach:"Global",timeline:"AI progress via other methods, possibly slower"}},
  
  {id:"airconditioning",name:"Air Conditioning",born:1902,died:null,cat:"inventions",field:"Climate Control",
    quote:"Air conditioning has changed the distribution of population in the United States.",
    contributions:["Indoor climate control","Enabled Sun Belt migration","Industrial precision","Modern office buildings"],
    r:0.55,reasoning:"Carrier developed modern AC, but cooling technology was being pursued by multiple inventors. Refrigeration principles were understood. Carrier's specific innovation was humidity control for printing. Air conditioning was emerging; his implementation succeeded.",
    counterfactual:"Without Willis Carrier, air conditioning still develops — refrigeration technology existed, multiple inventors were pursuing cooling. But his specific innovation was humidity control for a printing plant, which led to broader AC applications. Without him, modern air conditioning might be delayed 10-20 years. The Sun Belt migration that reshaped American demographics would happen later. Summer would remain brutal in hot climates longer.",
    ripples:[
      {category:"Sun Belt",detail:"Migration to hot climates delayed. Phoenix, Houston grow later. American politics different."},
      {category:"Industry",detail:"Manufacturing precision requiring climate control develops later."},
      {category:"Office Buildings",detail:"Modern office towers without openable windows develop later."},
      {category:"Summer",detail:"Summer heat remains limiting factor in hot climates longer."}
    ],
    timeline:[
      {year:1902,happened:"Carrier invents modern AC",alternate:"Cooling technology develops more slowly"},
      {year:1950,happened:"AC spreads to homes, offices",alternate:"Home AC delayed; Sun Belt growth slower"},
      {year:1970,happened:"Sun Belt migration accelerates",alternate:"Migration to hot climates slower"},
      {year:2024,happened:"AC essential infrastructure",alternate:"Same endpoint; reached 10-20 years later"}
    ],
    impact:{lives:"Sun Belt population: 100M+",econ:"AC industry: $150B+",cultural:"Indoor living normalized",reach:"Hot climates globally",timeline:"AC developed within 10-20 years via others"}},
  
  {id:"concrete",name:"Reinforced Concrete",born:1853,died:null,cat:"inventions",field:"Construction",
    quote:"Concrete is the foundation of modern civilization.",
    contributions:["Skyscrapers possible","Modern infrastructure","Dam construction","Mass urban construction"],
    r:0.60,reasoning:"Romans had concrete. Multiple inventors developed reinforced concrete independently — Monier, Hennebique, Ransome. The combination of steel and concrete was being explored in multiple places. The technology was convergent.",
    counterfactual:"Without any single inventor, reinforced concrete still emerges — Monier, Hennebique, Ransome, and others were all developing it independently. The Romans had concrete; iron reinforcement was being added by multiple experimenters. This is one of the most convergent inventions: the technology was coming regardless of who got credit. The specific patents and timing might vary, but modern construction would still use reinforced concrete.",
    ripples:[
      {category:"Convergence",detail:"Most convergent invention. Multiple independent inventors. Comes regardless."},
      {category:"Timing",detail:"Specific patents and credit different. Technology arrives within 10-20 years regardless."},
      {category:"Modern Cities",detail:"Skyscrapers, infrastructure, dams — all possible with or without specific inventor."},
      {category:"Credit",detail:"Different name gets credit. Technology identical."}
    ],
    timeline:[
      {year:1853,happened:"Monier patents reinforced concrete flowerpots",alternate:"Different inventor gets first patent"},
      {year:1880,happened:"Reinforced concrete in construction",alternate:"Same development; different timeline by a few years"},
      {year:1920,happened:"Reinforced concrete dominates construction",alternate:"Same outcome; slightly different timing"},
      {year:2024,happened:"Concrete foundation of modern infrastructure",alternate:"Identical outcome; different patent history"}
    ],
    impact:{lives:"Modern cities for billions",econ:"Construction: $10T+ global",cultural:"Urban density possible",reach:"Global construction",timeline:"Reinforced concrete within 10-20 years"}}
];


// ─────────────────────────────────────────────────────────────────────────────
// DEDUPLICATED DATA COMBINATION
// ─────────────────────────────────────────────────────────────────────────────
const ALL_SUBJECTS = (() => {
  const combined = [...FIGURES, ...INSTITUTIONS, ...INVENTIONS];
  const seen = new Set();
  return combined.filter(s => {
    if (seen.has(s.id)) return false;
    seen.add(s.id);
    return true;
  });
})();

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ─────────────────────────────────────────────────────────────────────────────
const getScoreLabel = (score) => {
  if (score < 0.20) return { label: "Singular", color: "#b91c1c", desc: "This required exactly this person — without them, the outcome might never arrive" };
  if (score < 0.50) return { label: "Low Inevitability", color: "#c2410c", desc: "Hard to see who else pulls this off — history takes a very different path" };
  if (score < 0.80) return { label: "Moderate Inevitability", color: "#a16207", desc: "Others were converging on similar ideas — the timeline shifts, but the outcome arrives" };
  return { label: "High Inevitability", color: "#15803d", desc: "Multiple paths were converging — this was happening regardless of any one person" };
};

const getDifficulty = (r) => Math.abs(r - 0.5);

// Steeper scoring curve — rewards precision, punishes lazy guessing
// diff=0 → 100, diff=0.05 → 81, diff=0.10 → 64, diff=0.15 → 49, diff=0.25 → 25, diff=0.50 → 0
const calculatePoints = (diff) => {
  if (diff >= 0.5) return 0;
  return Math.round(100 * Math.pow(1 - diff * 2, 2));
};

const getAccuracyFeedback = (diff, pts) => {
  if (diff < 0.03) return { emoji: "🎯", msg: "Near-perfect. That's serious historical knowledge.", tier: "perfect" };
  if (diff < 0.08) return { emoji: "🔥", msg: "Very close. You've got strong intuition for this.", tier: "great" };
  if (diff < 0.15) return { emoji: "✨", msg: "Solid read — you picked up on the right signals.", tier: "good" };
  if (diff < 0.25) return { emoji: "🤔", msg: "Off by a bit. The verdict below might shift your thinking.", tier: "okay" };
  if (diff < 0.40) return { emoji: "📚", msg: "Missed by a fair margin — but that's what makes this one interesting.", tier: "miss" };
  return { emoji: "😮", msg: "Way off! This figure's story is full of surprises.", tier: "far" };
};

const getDifficultyLabel = (r) => {
  const d = getDifficulty(r);
  if (d < 0.10) return { label: "Hard", color: "#dc2626" };
  if (d < 0.25) return { label: "Medium", color: "#ca8a04" };
  return { label: "Easy", color: "#16a34a" };
};

// RANK SYSTEM — based on avg points per round + minimum games
const getRank = (avgPts, gamesPlayed) => {
  if (gamesPlayed < 5) return { title: "Newcomer", icon: "🌱", color: "#94a3b8", next: "Play 5 rounds to earn a rank" };
  if (avgPts >= 82 && gamesPlayed >= 40) return { title: "Oracle of Clio", icon: "🏛️", color: "#7c2d12", next: null };
  if (avgPts >= 72 && gamesPlayed >= 30) return { title: "Senior Fellow", icon: "🎓", color: "#6d28d9", next: `${82 - avgPts > 0 ? `+${82 - avgPts} avg pts` : ""}${gamesPlayed < 40 ? ` · ${40 - gamesPlayed} more rounds` : ""} → Oracle of Clio` };
  if (avgPts >= 60 && gamesPlayed >= 20) return { title: "Counterfactual Scholar", icon: "📜", color: "#0d9488", next: `${72 - avgPts > 0 ? `+${72 - avgPts} avg pts` : ""}${gamesPlayed < 30 ? ` · ${30 - gamesPlayed} more rounds` : ""} → Senior Fellow` };
  if (avgPts >= 45 && gamesPlayed >= 10) return { title: "Historical Analyst", icon: "🔍", color: "#ca8a04", next: `${60 - avgPts > 0 ? `+${60 - avgPts} avg pts` : ""}${gamesPlayed < 20 ? ` · ${20 - gamesPlayed} more rounds` : ""} → Scholar` };
  if (gamesPlayed >= 5) return { title: "History Student", icon: "📖", color: "#64748b", next: `${45 - avgPts > 0 ? `+${45 - avgPts} avg pts` : ""}${gamesPlayed < 10 ? ` · ${10 - gamesPlayed} more rounds` : ""} → Analyst` };
  return { title: "Newcomer", icon: "🌱", color: "#94a3b8", next: "Play 5 rounds to earn a rank" };
};

// CONTEXTUAL INTERLUDE — category/era-aware loading phases
const getInterludePhases = (subject) => {
  const name = subject.name;
  const cat = subject.cat;
  const era = subject.born < 0 ? "ancient" : subject.born < 500 ? "classical" : subject.born < 1500 ? "medieval" : subject.born < 1800 ? "early modern" : subject.born < 1900 ? "19th century" : "modern";

  const catPhrases = {
    science: [
      `Scanning ${era} laboratories and academies for parallel research...`,
      `Checking who else was close to ${name}'s breakthroughs...`,
      "Tracing the chain of citations and influences...",
    ],
    politics: [
      `Surveying the ${era} political landscape for alternative leaders...`,
      `Asking: would the same movement have found a different champion?`,
      "Weighing structural forces against individual will...",
    ],
    military: [
      `Reviewing ${era} military capabilities and strategic alternatives...`,
      `Would a different commander have made the same decisions?`,
      "Mapping how battles reshape borders and populations...",
    ],
    arts: [
      `Searching for ${era} artists working in similar directions...`,
      `Can genius be replicated, or only approximated?`,
      "Tracing the influence across generations of creators...",
    ],
    philosophy: [
      `Examining the ${era} intellectual climate for converging ideas...`,
      `Were these ideas waiting to be thought, or truly original?`,
      "Measuring the distance between influence and originality...",
    ],
    medicine: [
      `Reviewing ${era} medical knowledge and parallel discoveries...`,
      `How many lives hinge on the timing of one breakthrough?`,
      "Tracing the path from laboratory to bedside...",
    ],
    computing: [
      "Checking concurrent developments in other labs and garages...",
      "Was this innovation inevitable given the hardware?",
      "Mapping how one tool rewires an entire industry...",
    ],
    finance: [
      `Examining ${era} economic conditions and parallel innovations...`,
      "Would the same market forces have produced the same outcome?",
      "Tracing the flow of capital and influence...",
    ],
    exploration: [
      `Reviewing who else was heading in the same direction...`,
      "Separating the explorer from the conditions that made exploration possible...",
      "Mapping what was found versus what was already known...",
    ],
    social: [
      `Surveying the ${era} social landscape for parallel movements...`,
      "Was this change being demanded by forces larger than any one person?",
      "Tracing the ripples through communities and institutions...",
    ],
    institutions: [
      "Examining the gap this institution filled...",
      "Would other organizations have converged on the same model?",
      "Measuring institutional impact against counterfactual alternatives...",
    ],
    inventions: [
      "Checking patent offices and competing labs for parallel development...",
      "Was the underlying science ready for anyone to find this?",
      "Tracing how one invention rewires daily life...",
    ],
  };

  const catSpecific = catPhrases[cat] || catPhrases.science;
  return [
    { icon: "🔍", text: catSpecific[0] },
    { icon: "🌀", text: catSpecific[1] },
    { icon: "⚖️", text: catSpecific[2] },
    { icon: "🌊", text: "Tracing the ripple effects of absence..." },
    { icon: "📐", text: "Rendering the verdict..." },
  ];
};

// DIRECTIONAL INSIGHT — explains why the player was off
const getDirectionInsight = (prediction, actual, subject) => {
  const diff = prediction - actual; // positive = player said MORE inevitable than reality
  const absDiff = Math.abs(diff);
  if (absDiff < 0.10) return null; // close enough, no need
  if (diff > 0) {
    // Player overestimated inevitability (thought it was more replaceable)
    return `You rated this more inevitable than the analysis suggests. ${
      actual < 0.30
        ? `Figures this singular are rare — ${subject.name}'s specific contribution had no close parallel.`
        : actual < 0.50
        ? "While the field was active, this particular contribution was harder to replicate than it looks."
        : "Even with contemporaries working nearby, the specific form of this contribution mattered more than you'd expect."
    }`;
  } else {
    // Player underestimated inevitability (thought it was more singular)
    return `You rated this as more singular than the analysis suggests. ${
      actual > 0.70
        ? "Multiple independent paths were converging — the timing was ripe regardless of who got there first."
        : actual > 0.50
        ? "There were more contemporaries working on similar problems than most people realize."
        : "The individual contribution was real, but the underlying conditions were pushing toward this outcome."
    }`;
  }
};

const formatYear = (y) => {
  if (y === null || y === undefined) return "";
  if (y < 0) return `${Math.abs(y).toLocaleString()} BCE`;
  return String(y);
};

const formatLifespan = (born, died) => {
  if (!born && born !== 0) return "";
  let s = formatYear(born);
  if (died) s += ` – ${formatYear(died)}`;
  return s;
};

// Deterministic hash for consistent custom figure scores
const hashString = (str) => {
  let hash = 0;
  const normalized = str.toLowerCase().trim().replace(/\s+/g, ' ');
  for (let i = 0; i < normalized.length; i++) {
    const char = normalized.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

const getConsistentScore = (name) => {
  const hash = hashString(name);
  return 0.10 + (hash % 800) / 1000;
};

// Local storage
const STORAGE_KEY = "counterfactual_progress";
const CUSTOM_CACHE_KEY = "counterfactual_custom_cache";
const saveProgress = (data) => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch(e) {}
};
const loadProgress = () => {
  try {
    const d = localStorage.getItem(STORAGE_KEY);
    return d ? JSON.parse(d) : null;
  } catch(e) { return null; }
};
const saveCustomCache = (data) => {
  try { localStorage.setItem(CUSTOM_CACHE_KEY, JSON.stringify(data)); } catch(e) {}
};
const loadCustomCache = () => {
  try {
    const d = localStorage.getItem(CUSTOM_CACHE_KEY);
    return d ? JSON.parse(d) : {};
  } catch(e) { return {}; }
};

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────
const fontStack = "'Instrument Serif', 'Georgia', serif";
const sansStack = "'DM Sans', 'Helvetica Neue', sans-serif";

const globalCSS = `
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.92); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
  @keyframes toastIn {
    from { opacity: 0; transform: translateY(16px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes toastOut {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to { opacity: 0; transform: translateY(-8px) scale(0.95); }
  }
  details summary::-webkit-details-marker { display: none; }
  details summary::marker { display: none; content: ""; }
  details[open] .chevron-icon { transform: rotate(180deg); }
  .filter-scroll { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
  @media (max-width: 600px) {
    .filter-scroll {
      flex-wrap: nowrap !important;
      justify-content: flex-start !important;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      padding-bottom: 4px;
    }
    .filter-scroll::-webkit-scrollbar { display: none; }
    .filter-scroll button { flex-shrink: 0; }
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 24px; height: 24px;
    border-radius: 50%;
    background: #1a1a1a;
    cursor: pointer;
    border: 3px solid #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.25);
    margin-top: -2px;
  }
  input[type=range]::-moz-range-thumb {
    width: 20px; height: 20px;
    border-radius: 50%;
    background: #1a1a1a;
    cursor: pointer;
    border: 3px solid #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.25);
  }
  input[type=range]:focus { outline: none; }
  input[type=range]:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px rgba(26,26,26,0.15), 0 2px 6px rgba(0,0,0,0.25);
  }
`;

const S = {
  page: {
    minHeight: "100vh",
    background: "#f7f6f3",
    color: "#1a1a1a",
    fontFamily: sansStack,
    lineHeight: 1.6,
  },
  inner: {
    maxWidth: 860,
    margin: "0 auto",
    padding: "24px 20px 80px",
  },
  card: {
    background: "#ffffff",
    borderRadius: 16,
    border: "1px solid #e5e2db",
    padding: 28,
    marginBottom: 20,
    boxShadow: "0 1px 4px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.02)",
    transition: "box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
  },
  tag: (color, bg) => ({
    fontSize: 11,
    fontWeight: 700,
    padding: "3px 10px",
    borderRadius: 6,
    background: bg || `${color}12`,
    color: color,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    display: "inline-block",
  }),
  btn: {
    padding: "13px 28px",
    borderRadius: 10,
    border: "none",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    fontFamily: sansStack,
    transition: "all 0.15s ease",
    letterSpacing: "-0.01em",
  },
  btnPrimary: {
    background: "#1a1a1a",
    color: "#ffffff",
  },
  btnSecondary: {
    background: "#f2f1ed",
    color: "#3a3a3a",
    border: "1px solid #e0ded8",
  },
  muted: {
    color: "#7a7770",
    fontSize: 14,
  },
  h1: {
    fontFamily: fontStack,
    fontSize: 38,
    fontWeight: 400,
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    color: "#1a1a1a",
    margin: 0,
  },
  h2: {
    fontFamily: fontStack,
    fontSize: 28,
    fontWeight: 400,
    letterSpacing: "-0.01em",
    lineHeight: 1.2,
    color: "#1a1a1a",
    margin: 0,
  },
  h3: {
    fontFamily: sansStack,
    fontSize: 16,
    fontWeight: 600,
    color: "#1a1a1a",
    margin: 0,
  },
  sectionHeader: {
    fontFamily: sansStack,
    fontWeight: 700,
    fontSize: 15,
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  divider: {
    height: 1,
    background: "#e8e6e1",
    border: "none",
    margin: "20px 0",
  },
  input: {
    padding: "12px 16px",
    borderRadius: 10,
    border: "1px solid #ddd9d0",
    background: "#fafaf8",
    color: "#1a1a1a",
    fontSize: 15,
    fontFamily: sansStack,
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box",
  },
  collapsibleSummary: {
    cursor: "pointer",
    padding: "14px 18px",
    background: "#faf9f6",
    borderRadius: 12,
    border: "1px solid #e5e2db",
    fontWeight: 700,
    color: "#1a1a1a",
    fontSize: 15,
    fontFamily: sansStack,
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    userSelect: "none",
  },
  collapsibleBody: {
    padding: "16px 18px",
    background: "#faf9f6",
    borderRadius: "0 0 12px 12px",
    marginTop: 1,
    borderLeft: "1px solid #e5e2db",
    borderRight: "1px solid #e5e2db",
    borderBottom: "1px solid #e5e2db",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN APP COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("home");
  const [subject, setSubject] = useState(null);
  const [prediction, setPrediction] = useState(0.5);
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
  const [interludeStep, setInterludeStep] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [lastPts, setLastPts] = useState(0);
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

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
    const saved = loadProgress();
    if (saved) {
      setScore(saved.score || 0);
      setPlayed(saved.played || []);
      setStreak(saved.streak || 0);
      setBestStreak(saved.bestStreak || 0);
      setHasSeenIntro(saved.hasSeenIntro || false);
    }
    setCustomCache(loadCustomCache());
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
  }, []);

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Save progress
  useEffect(() => {
    if (played.length > 0) saveProgress({ score, played, streak, bestStreak, hasSeenIntro });
  }, [score, played, streak, bestStreak, hasSeenIntro]);

  // Trigger result animation
  useEffect(() => {
    if (screen === "result") {
      setAnimateResult(false);
      requestAnimationFrame(() => setAnimateResult(true));
    }
  }, [screen]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const startRandom = () => {
    const unplayed = ALL_SUBJECTS.filter(s => !played.includes(s.id));
    if (unplayed.length === 0) {
      showToast("🔄 All subjects played! Resetting for another round...");
      setPlayed([]);
      setScore(0);
      setStreak(0);
      // bestStreak persists — it's a lifetime achievement
      return;
    }
    // Bucket by difficulty, then weighted random across buckets
    // This ensures players see a mix — not all easy figures first
    const hard = unplayed.filter(s => getDifficulty(s.r) >= 0.30);   // extreme scores
    const medium = unplayed.filter(s => { const d = getDifficulty(s.r); return d >= 0.15 && d < 0.30; });
    const easy = unplayed.filter(s => getDifficulty(s.r) < 0.15);
    // Weighted pick: 40% hard, 35% medium, 25% easy (biases toward more interesting figures)
    const roll = Math.random();
    let pool;
    if (roll < 0.40 && hard.length > 0) pool = hard;
    else if (roll < 0.75 && medium.length > 0) pool = medium;
    else if (easy.length > 0) pool = easy;
    else pool = unplayed; // fallback if a bucket is empty
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setSubject(pick);
    setPrediction(0.5);
    setRevealed(false);
    setScreen("predict");
    scrollTop();
  };

  const selectSubject = (s) => {
    setSubject(s);
    setPrediction(0.5);
    setRevealed(false);
    setScreen("predict");
    scrollTop();
  };

  const submitPrediction = () => {
    setRevealed(true);
    const r = subject.r ?? subject._r;
    const diff = Math.abs(prediction - r);
    const pts = calculatePoints(diff);
    const isReplay = played.includes(subject.id);

    // Only award points and track on first play
    if (!isReplay) {
      setScore(prev => prev + pts);
      setPlayed(prev => [...prev, subject.id]);
      // Streak: within 15% counts as "good"
      if (diff < 0.15) {
        setStreak(prev => {
          const next = prev + 1;
          setBestStreak(best => Math.max(best, next));
          return next;
        });
      } else {
        setStreak(0);
      }
    }
    setLastPts(isReplay ? 0 : pts);
    setInterludeStep(0);
    setScreen("interlude");
    scrollTop();
  };

  // Interlude timer — cycle through steps, then reveal
  useEffect(() => {
    if (screen !== "interlude") return;
    const totalSteps = 5;
    const stepDuration = 1000; // 1s per step
    const timer = setInterval(() => {
      setInterludeStep(prev => {
        if (prev >= totalSteps) {
          clearInterval(timer);
          setScreen("result");
          scrollTop();
          return prev;
        }
        return prev + 1;
      });
    }, stepDuration);
    return () => clearInterval(timer);
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

    // Check cache
    if (customCache[cacheKey]) {
      setCustomResult(customCache[cacheKey]);
      setScreen("custom_confirm");
      scrollTop();
      return;
    }

    setCustomLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          messages: [{
            role: "user",
            content: `Analyze the historical inevitability of "${customName}". The question: if this person/thing never existed, would history have found another way to the same outcome? Return ONLY valid JSON — no markdown, no backticks, no preamble — using this exact structure:
{
  "name": "Full proper name",
  "born": year as number (negative for BCE, null if unknown),
  "died": year as number or null if alive/unknown,
  "field": "Primary field, 2-4 words",
  "cat": "one of: science, politics, military, arts, philosophy, medicine, computing, finance, exploration, social, institutions, inventions",
  "quote": "A famous quote by or about them",
  "contributions": ["contribution 1", "contribution 2", "contribution 3", "contribution 4"],
  "r": inevitability score 0.0 to 1.0 (0=singular, history needed exactly them; 1=highly inevitable, multiple paths converging — consider contemporaries, timing, convergent discovery),
  "reasoning": "2-3 sentences explaining the score. Name specific contemporaries or alternatives.",
  "counterfactual": "3-4 sentences: what does the world look like without them? Be concrete and specific.",
  "ripples": [
    {"category": "Area 1", "detail": "Specific ripple effect, 1-2 sentences"},
    {"category": "Area 2", "detail": "Specific ripple effect, 1-2 sentences"},
    {"category": "Area 3", "detail": "Specific ripple effect, 1-2 sentences"},
    {"category": "Area 4", "detail": "Specific ripple effect, 1-2 sentences"}
  ],
  "impact": {
    "lives": "How many lives affected and how",
    "econ": "Economic impact with dollar figure if applicable",
    "cultural": "Cultural or intellectual legacy",
    "reach": "Geographic or demographic reach",
    "timeline": "How long until someone else does it"
  },
  "timeline": [
    {"year": number, "happened": "What actually happened", "alternate": "What would have happened without them"},
    {"year": number, "happened": "...", "alternate": "..."},
    {"year": number, "happened": "...", "alternate": "..."},
    {"year": number, "happened": "...", "alternate": "..."}
  ]
}

Be historically precise. The inevitability score should reflect genuine counterfactual analysis — was this contribution bound to happen, or did it require this specific person?`
          }],
        })
      });

      const data = await response.json();
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
      const hashScore = getConsistentScore(customName);
      const fallback = {
        name: customName.trim(),
        born: null, died: null,
        field: "Historical Figure", cat: "science",
        quote: "",
        contributions: ["Primary achievement", "Secondary impact", "Legacy influence", "Broader effects"],
        r: hashScore, _r: hashScore,
        reasoning: `Analysis of ${customName}'s historical inevitability based on available alternatives, timing, and the uniqueness of their contributions.`,
        counterfactual: `Without ${customName}, the developments they contributed to would likely have proceeded on a different timeline, with other figures potentially filling similar roles.`,
        ripples: [
          { category: "Timing", detail: "The specific timing of their contributions would shift, potentially by years or decades." },
          { category: "Alternatives", detail: "Other figures in the field may have achieved similar results through different paths." },
          { category: "Legacy", detail: "Cultural and institutional impact would take a different shape." }
        ],
        impact: { lives: "Affected many", econ: "Significant economic influence", cultural: "Left a lasting mark", reach: "Widespread", timeline: "Others would have contributed similarly" },
        timeline: [],
        id: "custom_" + cacheKey.replace(/\s/g, '_'),
        _isCustom: true,
      };

      const newCache = { ...customCache, [cacheKey]: fallback };
      setCustomCache(newCache);
      saveCustomCache(newCache);
      setCustomResult(fallback);
      setScreen("custom_confirm");
    }

    setCustomLoading(false);
    scrollTop();
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
    setSubject(null);
    setRevealed(false);
    setCustomResult(null);
    setCustomName("");
    setChallengeData(null);
    scrollTop();
  };

  const shareResult = async () => {
    const r = subject.r ?? subject._r;
    const diff = Math.abs(prediction - r);
    const pts = calculatePoints(diff);
    const avgPts = played.length > 0 ? Math.round(score / played.length) : 0;
    const rank = getRank(avgPts, played.length);
    const emoji = diff < 0.15 ? "✅" : "❌";
    const userPct = Math.round(prediction * 100);
    const actualPct = Math.round(r * 100);
    const text = `🎯 Counterfactual: ${subject.name}\n\nI guessed ${userPct}% inevitable (actual: ${actualPct}%) ${emoji}\n${pts} points${rank.title !== "Newcomer" ? ` · ${rank.icon} ${rank.title}` : ""}\n\nCan you do better?`;
    if (navigator.share) {
      try { await navigator.share({ text, url: "https://counterfactual.app" }); } catch(e) {}
    } else {
      navigator.clipboard?.writeText(text + "\nhttps://counterfactual.app");
      showToast("📋 Copied to clipboard");
    }
  };

  const createChallenge = () => {
    if (subject._isCustom) {
      showToast("Challenge mode is only for built-in figures");
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

  const BackButton = () => (
    <button onClick={goHome} style={{ ...S.btn, ...S.btnSecondary, padding: "8px 16px", fontSize: 14, marginBottom: 20 }}>
      ← Back
    </button>
  );

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

  const ContributionTags = ({ items }) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
      {items.map((c, i) => (
        <span key={i} style={{
          fontSize: 13, padding: "5px 12px", background: "#f5f4f0",
          borderRadius: 6, color: "#4a4840", border: "1px solid #e8e6e1",
        }}>{c}</span>
      ))}
    </div>
  );

  const SectionBox = ({ bg, border, titleColor, textColor, icon, title, children }) => (
    <div style={{
      marginBottom: 20, background: bg, borderRadius: 14,
      padding: "20px 22px", border: `1px solid ${border}`,
      animation: animateResult ? "fadeUp 0.4s ease both" : "none",
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
  // HOME SCREEN
  // ─────────────────────────────────────────────────────────────────────────
  if (screen === "home") {
    const filteredSubjects = (() => {
      let list = filterCat === "all" ? ALL_SUBJECTS : ALL_SUBJECTS.filter(s => s.cat === filterCat);
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        list = list.filter(s => s.name.toLowerCase().includes(q) || s.field.toLowerCase().includes(q));
      }
      return list;
    })();

    const avgScore = played.length > 0 ? Math.round(score / played.length) : 0;
    const rank = getRank(avgScore, played.length);

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={S.inner}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 36, paddingTop: 16 }}>
            <h1 style={{ ...S.h1, fontSize: 48, marginBottom: 8 }}>
              <span style={{ fontStyle: "italic" }}>Counterfactual</span>
            </h1>
            <p style={{ ...S.muted, fontSize: 16, maxWidth: 460, margin: "0 auto 28px", lineHeight: 1.55 }}>
              Could someone else have done what they did?<br/>
              Or did history need exactly them?
            </p>

            {/* First-time onboarding */}
            {!hasSeenIntro && played.length === 0 && (
              <div style={{
                maxWidth: 480, margin: "0 auto 28px", padding: "22px 24px",
                background: "#fffbeb", borderRadius: 14, border: "1px solid #fde68a",
                textAlign: "left", fontSize: 14, lineHeight: 1.7, color: "#78350f",
              }}>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "#92400e" }}>How It Works</div>
                <div style={{ marginBottom: 12 }}>
                  Pick a historical figure, invention, or institution. You'll see who they are and what they did. Then make your call: was their contribution <strong>singular</strong> (only they could have done it) or <strong>inevitable</strong> (history would have found another way)?
                </div>
                <div style={{ marginBottom: 12 }}>
                  The closer your prediction to the analysis, the more points you earn. Precision matters — being off by 10% scores 64 points, but off by 25% scores just 25.
                </div>
                <div style={{ fontSize: 13, color: "#a16207" }}>
                  Build streaks by landing within 15%. Climb the ranks from History Student to Oracle of Clio.
                </div>
                <button
                  onClick={() => setHasSeenIntro(true)}
                  style={{ ...S.btn, marginTop: 14, fontSize: 13, padding: "8px 20px", background: "#92400e", color: "#fff", border: "none" }}
                >
                  Got it — let's play
                </button>
              </div>
            )}

            {/* Rank Badge */}
            {played.length >= 5 && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "10px 20px", borderRadius: 12, marginBottom: 20,
                background: `${rank.color}08`, border: `1px solid ${rank.color}22`,
              }}>
                <span style={{ fontSize: 24 }}>{rank.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: rank.color, letterSpacing: "-0.01em" }}>{rank.title}</div>
                  {rank.next && <div style={{ fontSize: 11, color: "#9a9890" }}>{rank.next}</div>}
                </div>
              </div>
            )}

            {/* Stats */}
            <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
              {[
                { val: score, label: "Score", color: "#1a1a1a" },
                { val: played.length, label: "Played", color: "#6d28d9" },
                { val: played.length > 0 ? `${avgScore}` : "—", label: "Avg Pts", color: "#0d9488" },
                { val: streak > 0 ? `${streak}🔥` : "0", label: "Streak", color: streak >= 3 ? "#d97706" : "#94a3b8" },
                { val: bestStreak > 0 ? bestStreak : "—", label: "Best", color: bestStreak >= 5 ? "#7c3aed" : "#94a3b8" },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: "center", minWidth: 48 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: s.color, fontFamily: fontStack, letterSpacing: "-0.02em" }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: "#9a9890", fontWeight: 500, marginTop: 2, letterSpacing: "0.02em" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Milestone messages */}
            {played.length > 0 && played.length % 10 === 0 && played.length <= 50 && (
              <div style={{
                marginBottom: 20, padding: "10px 16px", textAlign: "center",
                background: "#fefce8", borderRadius: 10, border: "1px solid #fde68a",
                fontSize: 14, color: "#92400e",
              }}>
                🏆 {played.length} figures analyzed! {played.length >= 50 ? "You're a counterfactual master." : played.length >= 30 ? "Deep into history now." : played.length >= 20 ? "Building real intuition." : "Keep going — patterns start to emerge."}
              </div>
            )}

            <button onClick={startRandom} style={{ ...S.btn, ...S.btnPrimary, padding: "15px 44px", fontSize: 16 }}>
              🎲 Play Random
            </button>
          </div>

          {/* Custom Input */}
          <div style={{ ...S.card, marginBottom: 28 }}>
            <h3 style={{ ...S.h3, marginBottom: 6 }}>🔍 Analyze Any Figure</h3>
            <p style={{ ...S.muted, marginBottom: 14 }}>
              Enter anyone not in the database — they'll be analyzed and scored.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <input
                type="text" value={customName}
                onChange={e => setCustomName(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleCustomSubmit()}
                placeholder="e.g., Genghis Khan, the compass, NATO..."
                style={{ ...S.input, flex: 1 }}
              />
              <button
                onClick={handleCustomSubmit}
                disabled={!customName.trim() || customLoading}
                style={{
                  ...S.btn, ...S.btnPrimary, whiteSpace: "nowrap",
                  opacity: (!customName.trim() || customLoading) ? 0.4 : 1,
                  cursor: (!customName.trim() || customLoading) ? "not-allowed" : "pointer",
                }}
              >
                {customLoading ? "Analyzing..." : "Analyze →"}
              </button>
            </div>
            {customLoading && (
              <div style={{ marginTop: 16, textAlign: "center", color: "#7a7770", fontSize: 14 }}>
                <div style={{ display: "inline-block", width: 16, height: 16, border: "2px solid #ddd9d0", borderTopColor: "#1a1a1a", borderRadius: "50%", animation: "spin 0.7s linear infinite", marginRight: 8, verticalAlign: "middle" }} />
                Researching {customName}...
              </div>
            )}
          </div>

          {/* Filters */}
          <div style={{ marginBottom: 20 }}>
            <input
              type="text" value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by name or field..."
              style={{ ...S.input, marginBottom: 12 }}
            />
            <div className="filter-scroll" style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {[{ key: "all", label: `All (${ALL_SUBJECTS.length})`, color: "#1a1a1a" },
                ...Object.entries(CATS).map(([key, cat]) => ({
                  key, label: `${cat.label} (${ALL_SUBJECTS.filter(s => s.cat === key).length})`, color: cat.color,
                })).filter(c => {
                  const cnt = ALL_SUBJECTS.filter(s => s.cat === c.key).length;
                  return cnt > 0;
                })
              ].map(c => (
                <button
                  key={c.key}
                  onClick={() => setFilterCat(c.key)}
                  style={{
                    ...S.btn, padding: "6px 14px", fontSize: 12, borderRadius: 8, fontWeight: 600,
                    background: filterCat === c.key ? c.color : "#f2f1ed",
                    color: filterCat === c.key ? "#fff" : "#5a5850",
                    border: filterCat === c.key ? "none" : "1px solid #e0ded8",
                  }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div style={{ ...S.muted, marginBottom: 12, fontSize: 13 }}>
            {filteredSubjects.length} {filteredSubjects.length === 1 ? "result" : "results"}
            {filterCat !== "all" && ` in ${CATS[filterCat]?.label}`}
            {searchQuery.trim() && ` matching "${searchQuery}"`}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
            {filteredSubjects.map(s => {
              const cat = CATS[s.cat] || { label: s.cat, color: "#64748b", bg: "rgba(100,116,139,0.06)" };
              const wasPlayed = played.includes(s.id);
              const diff = getDifficultyLabel(s.r);
              return (
                <div
                  key={s.id}
                  onClick={() => selectSubject(s)}
                  style={{
                    ...S.card, marginBottom: 0, padding: 20, cursor: "pointer",
                    opacity: wasPlayed ? 0.55 : 1, position: "relative",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#c0bdb5"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.07)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e2db"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = S.card.boxShadow; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, color: diff.color,
                        background: `${diff.color}12`, padding: "2px 7px", borderRadius: 6,
                        letterSpacing: "0.02em",
                      }}>{diff.label}</span>
                    </div>
                    {wasPlayed && <span style={{ fontSize: 11, color: "#a09e96" }}>✓ Played</span>}
                  </div>
                  <h3 style={{ ...S.h3, fontSize: 17, marginBottom: 3 }}>{s.name}</h3>
                  <p style={{ ...S.muted, fontSize: 13, marginBottom: 2 }}>{s.field}</p>
                  <p style={{ fontSize: 12, color: "#b0ada5" }}>{formatLifespan(s.born, s.died)}</p>
                </div>
              );
            })}
          </div>

          {filteredSubjects.length === 0 && (
            <div style={{ textAlign: "center", padding: 48, color: "#9a9890" }}>
              No figures found. Try a different search or category.
            </div>
          )}
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
                fontStyle: "italic", color: "#6a6860", padding: "14px 18px",
                background: "#faf9f6", borderRadius: 10, borderLeft: "3px solid #ddd9d0",
                marginBottom: 20, fontSize: 14, lineHeight: 1.6, fontFamily: fontStack,
              }}>
                "{customResult.quote}"
              </div>
            )}

            {customResult.contributions && (
              <div style={{ marginBottom: 24 }}>
                <h4 style={{ fontSize: 12, color: "#9a9890", fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>Known for</h4>
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
    const predLabel = getScoreLabel(prediction);

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 600 }}>
          <BackButton />
          <div style={{ ...S.card, animation: "fadeUp 0.35s ease both" }}>
            <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
            <h2 style={{ ...S.h2, fontSize: 32, marginTop: 14, marginBottom: 6 }}>{subject.name}</h2>
            <p style={{ ...S.muted, marginBottom: 22 }}>
              {subject.field} · {formatLifespan(subject.born, subject.died)}
            </p>

            {/* Quote — gives flavor without tipping off the answer */}
            {subject.quote && (
              <div style={{
                fontStyle: "italic", color: "#6a6860", padding: "14px 18px",
                background: "#faf9f6", borderRadius: 10, borderLeft: "3px solid #ddd9d0",
                marginBottom: 22, fontSize: 14, lineHeight: 1.6, fontFamily: fontStack,
              }}>
                "{subject.quote}"
              </div>
            )}

            <div style={{ marginBottom: 24 }}>
              <h4 style={{ fontSize: 12, color: "#9a9890", fontWeight: 700, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Known For
              </h4>
              <ContributionTags items={subject.contributions} />
            </div>

            {challengeData && (
              <div style={{ background: "#faf5ff", padding: "12px 16px", borderRadius: 10, marginBottom: 24, border: "1px solid #e9d5ff", fontSize: 14 }}>
                🎯 A friend said <strong>{challengeData.score}%</strong> inevitable. What's your call?
              </div>
            )}

            <hr style={S.divider} />

            {/* Slider */}
            <div style={{ marginBottom: 28 }}>
              <h4 style={{ fontSize: 15, color: "#1a1a1a", marginBottom: 18, fontWeight: 600 }}>
                Would history have found another way without {subject.name}?
              </h4>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: "#b91c1c", fontWeight: 600 }}>Singular — Only Them</span>
                <span style={{ fontSize: 12, color: "#15803d", fontWeight: 600 }}>Inevitable — Bound to Happen</span>
              </div>
              <input
                type="range" min="0" max="100" step="5"
                value={Math.round(prediction * 100)}
                onChange={e => setPrediction(parseInt(e.target.value) / 100)}
                style={{
                  width: "100%", height: 8, borderRadius: 4,
                  appearance: "none", WebkitAppearance: "none",
                  background: "linear-gradient(90deg, #b91c1c, #c2410c 35%, #a16207 60%, #15803d)",
                  cursor: "pointer", outline: "none",
                }}
              />
              <div style={{ textAlign: "center", marginTop: 22 }}>
                <div style={{
                  fontSize: 56, fontWeight: 400, color: predLabel.color,
                  fontFamily: fontStack, letterSpacing: "-0.03em", lineHeight: 1,
                }}>
                  {Math.round(prediction * 100)}%
                </div>
                <div style={{ fontSize: 16, color: predLabel.color, fontWeight: 600, marginTop: 6 }}>
                  {predLabel.label}
                </div>
                <div style={{ ...S.muted, marginTop: 6, fontSize: 13 }}>
                  {predLabel.desc}
                </div>
              </div>
            </div>

            <button
              onClick={submitPrediction}
              style={{ ...S.btn, ...S.btnPrimary, width: "100%", padding: "16px", fontSize: 17 }}
            >
              Lock in Prediction
            </button>
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
    const phases = getInterludePhases(subject);
    const currentPhase = phases[Math.min(interludeStep, phases.length - 1)];
    const progress = Math.min(((interludeStep + 1) / (phases.length + 1)) * 100, 100);

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 540, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
          <div style={{
            textAlign: "center", width: "100%",
            animation: "fadeUp 0.4s ease both",
          }}>
            {/* Figure identity */}
            <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
            <h2 style={{ ...S.h2, fontSize: 34, marginTop: 14, marginBottom: 6 }}>{subject.name}</h2>
            <p style={{ ...S.muted, marginBottom: 40 }}>{subject.field} · {formatLifespan(subject.born, subject.died)}</p>

            {/* Central animation */}
            <div style={{
              width: 96, height: 96, borderRadius: "50%",
              background: "linear-gradient(135deg, #f7f6f3, #e8e6e1)",
              border: "2px solid #ddd9d0",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 32px",
              animation: "pulse 1.4s ease-in-out infinite",
              fontSize: 40,
            }}>
              {currentPhase.icon}
            </div>

            {/* Phase text */}
            <p key={interludeStep} style={{
              fontSize: 16, color: "#4a4840", fontWeight: 500,
              minHeight: 28, marginBottom: 32,
              animation: "fadeUp 0.3s ease both",
            }}>
              {currentPhase.text}
            </p>

            {/* Progress bar */}
            <div style={{
              width: "100%", maxWidth: 320, height: 4,
              background: "#e8e6e1", borderRadius: 2,
              margin: "0 auto 16px", overflow: "hidden",
            }}>
              <div style={{
                height: "100%", borderRadius: 2,
                background: "linear-gradient(90deg, #b91c1c, #c2410c, #a16207, #15803d)",
                width: `${progress}%`,
                transition: "width 0.8s ease",
              }} />
            </div>

            {/* User prediction reminder */}
            <p style={{ fontSize: 13, color: "#9a9890" }}>
              Your prediction: <strong style={{ color: "#1a1a1a" }}>{Math.round(prediction * 100)}% inevitable</strong>
            </p>
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
    const r = subject.r ?? subject._r;
    const diff = Math.abs(prediction - r);
    const pts = lastPts;
    const correct = diff < 0.15;
    const actualLabel = getScoreLabel(r);
    const feedback = getAccuracyFeedback(diff, pts);
    const difficulty = getDifficultyLabel(r);
    const isReplay = pts === 0 && diff >= 0.03; // distinguish replay from perfect score

    return (
      <div style={S.page}>
        <style>{globalCSS}</style>
        <ToastOverlay />
        <div style={{ ...S.inner, maxWidth: 680 }}>
          <div style={{ ...S.card, padding: 32, animation: animateResult ? "scaleIn 0.3s ease both" : "none" }}>

            {/* Feedback Banner */}
            <div style={{
              textAlign: "center", marginBottom: 28,
              animation: animateResult ? "fadeUp 0.4s ease 0.1s both" : "none",
            }}>
              <div style={{ fontSize: 52, marginBottom: 8 }}>{feedback.emoji}</div>
              <p style={{ fontSize: 17, color: "#3a3a3a", fontWeight: 500, margin: "0 0 6px", maxWidth: 400, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
                {feedback.msg}
              </p>
              <span style={S.tag(cat.color, cat.bg)}>{cat.label}</span>
              <span style={{ ...S.tag(difficulty.color), marginLeft: 6 }}>{difficulty.label}</span>
              <h2 style={{ ...S.h2, fontSize: 32, marginTop: 12 }}>{subject.name}</h2>
            </div>

            {/* Score Comparison */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12,
              marginBottom: 28, textAlign: "center", padding: "22px 0",
              borderTop: "1px solid #e8e6e1", borderBottom: "1px solid #e8e6e1",
              animation: animateResult ? "fadeUp 0.4s ease 0.2s both" : "none",
            }}>
              <div>
                <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>You Said</div>
                <div style={{ fontSize: 34, fontWeight: 400, color: "#1a1a1a", fontFamily: fontStack }}>{Math.round(prediction * 100)}%</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Actual</div>
                <div style={{ fontSize: 34, fontWeight: 400, color: actualLabel.color, fontFamily: fontStack }}>{Math.round(r * 100)}%</div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#9a9890", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Points</div>
                <div style={{ fontSize: 34, fontWeight: 400, color: pts > 0 ? "#6d28d9" : "#b0ada6", fontFamily: fontStack }}>
                  {pts > 0 ? `+${pts}` : isReplay ? "—" : "+0"}
                </div>
                {isReplay && <div style={{ fontSize: 11, color: "#b0ada6", marginTop: 4 }}>Already played</div>}
              </div>
            </div>

            {/* Streak indicator */}
            {streak >= 2 && !isReplay && (
              <div style={{
                textAlign: "center", marginBottom: 20, padding: "10px 16px",
                background: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
                borderRadius: 10, border: "1px solid #e9d5ff",
                animation: animateResult ? "fadeUp 0.3s ease 0.15s both" : "none",
              }}>
                <span style={{ fontSize: 15 }}>🔥 {streak}-round streak</span>
                <span style={{ fontSize: 12, color: "#7c3aed", marginLeft: 8 }}>
                  {streak >= 10 ? "Historian!" : streak >= 5 ? "On fire!" : "Keep it going!"}
                </span>
              </div>
            )}

            {/* The Verdict — with reasoning and directional insight */}
            <div style={{
              background: `${actualLabel.color}0a`, borderRadius: 14, padding: "18px 22px",
              marginBottom: 22, borderLeft: `4px solid ${actualLabel.color}`,
              animation: animateResult ? "fadeUp 0.4s ease 0.25s both" : "none",
            }}>
              <h3 style={{ ...S.sectionHeader, color: actualLabel.color, marginBottom: 4 }}>
                <span>⚖️</span> The Verdict: {actualLabel.label}
              </h3>
              <p style={{ color: actualLabel.color, fontSize: 12, margin: "0 0 10px", opacity: 0.8, fontWeight: 500 }}>{actualLabel.desc}</p>
              <p style={{ color: "#4a4840", lineHeight: 1.7, fontSize: 14, margin: 0 }}>{subject.reasoning}</p>
              {(() => {
                const insight = getDirectionInsight(prediction, r, subject);
                return insight ? (
                  <p style={{
                    color: prediction > r ? "#991b1b" : "#166534",
                    fontSize: 13, lineHeight: 1.65, marginTop: 12, marginBottom: 0,
                    padding: "10px 14px", borderRadius: 8,
                    background: prediction > r ? "#fef2f2" : "#f0fdf4",
                  }}>
                    <span style={{ fontWeight: 700 }}>{prediction > r ? "↑ You overestimated" : "↓ You underestimated"} inevitability.</span>{" "}
                    {insight}
                  </p>
                ) : null;
              })()}
            </div>

            {/* Quote */}
            {subject.quote && (
              <div style={{
                fontStyle: "italic", color: "#6a6860", textAlign: "center",
                padding: "14px 22px", background: "#faf9f6", borderRadius: 10,
                marginBottom: 22, fontSize: 15, fontFamily: fontStack,
                borderLeft: "3px solid #ddd9d0", lineHeight: 1.65,
                animation: animateResult ? "fadeUp 0.4s ease 0.3s both" : "none",
              }}>
                "{subject.quote}"
              </div>
            )}

            {/* The Counterfactual — with contributions underneath */}
            {subject.counterfactual && (
              <div style={{
                background: "#fffbeb", borderRadius: 14, padding: "18px 22px",
                marginBottom: 22, border: "1px solid #fde68a",
                animation: animateResult ? "fadeUp 0.4s ease 0.35s both" : "none",
              }}>
                <h3 style={{ ...S.sectionHeader, color: "#92400e", marginBottom: 8 }}>
                  <span>🔮</span> The Counterfactual
                </h3>
                <p style={{ color: "#78350f", lineHeight: 1.7, fontSize: 14, margin: 0 }}>{subject.counterfactual}</p>
                {subject.contributions && subject.contributions.length > 0 && (
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #fde68a" }}>
                    <h4 style={{ fontSize: 11, color: "#a16207", fontWeight: 700, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Key Contributions
                    </h4>
                    <ContributionTags items={subject.contributions} />
                  </div>
                )}
              </div>
            )}

            {/* Impact - now always shown with graceful fallback */}
            {subject.impact && (
              <SectionBox bg="#faf5ff" border="#e9d5ff" titleColor="#6d28d9" textColor="#4a4840" icon="🌍" title="What the World Would Lose">
                <div style={{ display: "grid", gap: 10 }}>
                  {[
                    ["Lives", subject.impact.lives],
                    ["Economy", subject.impact.econ],
                    ["Culture", subject.impact.cultural],
                    ["Reach", subject.impact.reach],
                  ].filter(([, val]) => val).map(([label, val]) => (
                    <div key={label} style={{ display: "flex", gap: 12, fontSize: 14 }}>
                      <span style={{ color: "#8b5cf6", fontWeight: 700, minWidth: 72, fontSize: 13 }}>{label}</span>
                      <span style={{ color: "#4a4840" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </SectionBox>
            )}

            {/* Ripple Effects - collapsible with chevron */}
            {subject.ripples && subject.ripples.length > 0 && (
              <details style={{ marginBottom: 18 }} open>
                <summary style={S.collapsibleSummary}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>🔗</span> Ripple Effects
                  </span>
                  <Chevron />
                </summary>
                <div style={S.collapsibleBody}>
                  <div style={{ display: "grid", gap: 10 }}>
                    {subject.ripples.map((ripple, i) => (
                      <div key={i} style={{
                        padding: 14, background: "#fff", borderRadius: 10,
                        border: "1px solid #e8e6e1",
                      }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#1e40af", marginBottom: 6 }}>{ripple.category}</div>
                        <div style={{ color: "#4a4840", lineHeight: 1.65, fontSize: 13 }}>{ripple.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            )}

            {/* Timeline - collapsible with chevron, fixed alignment */}
            {subject.timeline && subject.timeline.length > 0 && (
              <details style={{ marginBottom: 24 }} open>
                <summary style={S.collapsibleSummary}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>🔀</span> What Happened vs. Alternate Timeline
                  </span>
                  <Chevron />
                </summary>
                <div style={S.collapsibleBody}>
                  <div style={{ display: "grid", gap: 14 }}>
                    {subject.timeline.map((event, i) => (
                      <div key={i}>
                        <div style={{
                          fontWeight: 700, fontSize: 15, color: "#1a1a1a",
                          fontFamily: fontStack, marginBottom: 8,
                        }}>
                          {formatYear(event.year)}
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                          <div style={{ padding: 12, background: "#dcfce7", borderRadius: 10, border: "1px solid #bbf7d0" }}>
                            <div style={{ fontSize: 10, fontWeight: 800, color: "#166534", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                              ✓ What happened
                            </div>
                            <div style={{ fontSize: 13, color: "#166534", lineHeight: 1.55 }}>{event.happened}</div>
                          </div>
                          <div style={{ padding: 12, background: "#fef3c7", borderRadius: 10, border: "1px solid #fde68a" }}>
                            <div style={{ fontSize: 10, fontWeight: 800, color: "#92400e", marginBottom: 5, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                              ⚡ Alternate
                            </div>
                            <div style={{ fontSize: 13, color: "#92400e", lineHeight: 1.55 }}>{event.alternate}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            )}

            {/* Fallback for entries with impact.timeline but no timeline array */}
            {(!subject.timeline || subject.timeline.length === 0) && subject.impact?.timeline && (
              <details style={{ marginBottom: 24 }}>
                <summary style={S.collapsibleSummary}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span>🔀</span> What Happened vs. Alternate Timeline
                  </span>
                  <Chevron />
                </summary>
                <div style={S.collapsibleBody}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    <div style={{ padding: 16, background: "#dcfce7", borderRadius: 10, border: "1px solid #bbf7d0" }}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: "#166534", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>✓ What happened</div>
                      <div style={{ fontSize: 14, color: "#166534", lineHeight: 1.6 }}>
                        {subject.contributions[0]}
                        {subject.contributions[1] && <><br /><br />{subject.contributions[1]}</>}
                      </div>
                    </div>
                    <div style={{ padding: 16, background: "#fef3c7", borderRadius: 10, border: "1px solid #fde68a" }}>
                      <div style={{ fontSize: 10, fontWeight: 800, color: "#92400e", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.06em" }}>⚡ Alternate timeline</div>
                      <div style={{ fontSize: 14, color: "#92400e", lineHeight: 1.6 }}>
                        {subject.impact.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            )}

            {/* Rank progression */}
            {(() => {
              const avgPts = played.length > 0 ? Math.round(score / played.length) : 0;
              const currentRank = getRank(avgPts, played.length);
              return played.length >= 3 ? (
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "12px 16px", borderRadius: 10, marginBottom: 22,
                  background: `${currentRank.color}06`, border: `1px solid ${currentRank.color}18`,
                }}>
                  <span style={{ fontSize: 22 }}>{currentRank.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: currentRank.color }}>{currentRank.title}</div>
                    {currentRank.next && <div style={{ fontSize: 11, color: "#9a9890", marginTop: 2 }}>{currentRank.next}</div>}
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", fontFamily: fontStack }}>{score}</div>
                    <div style={{ fontSize: 10, color: "#9a9890" }}>total pts</div>
                  </div>
                </div>
              ) : null;
            })()}

            {/* Actions */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={goHome} style={{ ...S.btn, ...S.btnSecondary, flex: 1, minWidth: 120 }}>
                🏠 Home
              </button>
              <button onClick={startRandom} style={{ ...S.btn, ...S.btnPrimary, flex: 1, minWidth: 120 }}>
                Next Figure →
              </button>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
              <button onClick={shareResult} style={{ ...S.btn, ...S.btnSecondary, flex: 1, padding: "10px 16px", fontSize: 13 }}>
                📤 Share
              </button>
              {!subject._isCustom && (
                <button onClick={createChallenge} style={{ ...S.btn, ...S.btnSecondary, flex: 1, padding: "10px 16px", fontSize: 13 }}>
                  🎯 Challenge Friends
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}