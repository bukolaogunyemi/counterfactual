// Historical figures database
export const FIGURES = [
  // SCIENCE & TECHNOLOGY
  {id:"einstein",name:"Albert Einstein",born:1879,died:1955,cat:"science",field:"Theoretical Physics",
    quote:"Imagination is more important than knowledge.",
    contributions:["Special & General Relativity","Photoelectric effect explanation","E=mc² mass-energy equivalence","Brownian motion proof of atoms"],
    r:0.25,reasoning:"Special relativity was in the air - Lorentz and Poincaré had the mathematics. But General Relativity was a singular conceptual leap. No one else was approaching gravity as curved spacetime. Hilbert came close in 1915 but followed Einstein's physical insights. Without Einstein, general relativity might have taken 20-50 years to emerge.",
    counterfactual:"Without Einstein, special relativity would have emerged within a few years via Lorentz and Poincaré. But general relativity - the revolutionary insight that gravity is curved spacetime - had no comparable parallel. Physicists would have continued with Newtonian gravity modified by ad-hoc corrections. GPS satellites wouldn't work properly, gravitational wave detection would be unimaginable, and our understanding of black holes and the universe's expansion might still be incomplete.",
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
    impact:{lives:"Nuclear energy/weapons affecting millions",econ:"GPS ($300B industry) requires relativistic corrections",cultural:"Redefined 'genius' in popular imagination",reach:"Global scientific framework",timeline:"General relativity delayed 20-50 years"},
    cascade:[
      {event:"General relativity never published in 1915",consequence:"Eddington's 1919 eclipse expedition finds light bending but interprets it as a Newtonian anomaly, not spacetime curvature",delay:"Immediate",severity:"high",icon:"🔭"},
      {event:"No curved spacetime framework",consequence:"Black holes remain mathematical curiosities in Newtonian gravity. Chandrasekhar's 1930s work on stellar collapse has no theoretical home.",delay:"~15 years",severity:"high",icon:"🌑"},
      {event:"Manhattan Project proceeds without Einstein's letter to FDR",consequence:"Szilard recruits another scientist - possibly Fermi - to write the letter. Nuclear program starts 6-12 months later. The bomb may not be ready for Hiroshima.",delay:"~24 years",severity:"medium",icon:"💣"},
      {event:"No relativistic corrections for satellite systems",consequence:"Early GPS prototypes in the 1970s drift by ~10km per day. Engineers discover the error empirically and apply ad-hoc corrections, but the theoretical understanding comes decades later.",delay:"~60 years",severity:"high",icon:"📡"},
      {event:"Cosmology stalls without general relativity",consequence:"Hubble discovers galactic redshift in 1929 but has no theoretical framework to explain it. The Big Bang theory doesn't emerge until the 1960s or later when someone finally cracks gravity-as-geometry.",delay:"~50 years",severity:"high",icon:"🌌"},
      {event:"No E=mc² cultural shorthand",consequence:"'Genius' doesn't have a face. The public image of science remains more institutional, less individual. No iconic tongue-out photo. Physics never gets its rock star.",delay:"Cultural",severity:"low",icon:"🧠"}
    ],
    modernDay:{
      tech:"GPS works, but it was 15 years late and costs were higher because engineers had to discover relativistic drift empirically rather than predicting it.",
      culture:"No Einstein = no universal shorthand for 'genius.' The closest equivalent is probably Newton, who remains the dominant cultural icon of science into the 21st century.",
      politics:"If the bomb wasn't ready by August 1945, the planned invasion of Japan (Operation Downfall) proceeds. Estimated casualties: 500K-1M Allied, millions of Japanese. The Cold War starts differently.",
      daily:"Your phone's map app works fine - the corrections were eventually found by trial and error. But gravitational wave detectors like LIGO don't exist yet. We haven't 'heard' colliding black holes."
    }},
  {id:"newton",name:"Isaac Newton",born:1643,died:1727,cat:"science",field:"Physics & Mathematics",
    quote:"If I have seen further, it is by standing on the shoulders of giants.",
    contributions:["Laws of motion and universal gravitation","Calculus (developed simultaneously with Leibniz)","Optics and light spectrum analysis","Principia Mathematica"],
    r:0.30,reasoning:"Leibniz independently developed calculus. Hooke had ideas about gravity. But Newton's synthesis - unifying terrestrial and celestial mechanics into one mathematical framework - was decades ahead. The Principia's rigor and scope had no parallel.",
    counterfactual:"Without Newton, calculus would have arrived via Leibniz (and his notation is what we use today anyway). But the grand synthesis of the Principia - explaining planetary motion, tides, comets, and falling apples with one mathematical law - might have taken another generation. The Scientific Revolution would have proceeded more slowly, and the Enlightenment's faith in rational order might have developed differently.",
    ripples:[
      {category:"Mathematical Foundation",detail:"Leibniz's calculus eventually dominates, but without Newton's physical applications, the tool remains more abstract. Applied mathematics develops more slowly."},
      {category:"Physics Progress",detail:"Gravity remains mysterious until someone synthesizes Kepler's laws with terrestrial mechanics. Possibly delayed until Euler or Lagrange, 50-100 years later."},
      {category:"Engineering Revolution",detail:"The Industrial Revolution's mechanical engineering relies on Newtonian mechanics. Without this foundation, steam engines and machines develop more empirically, with slower optimization."},
      {category:"Scientific Method",detail:"The Principia was a model of how science should work - mathematical, predictive, comprehensive. Without this exemplar, the scientific method might have developed differently."}
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
    r:0.80,reasoning:"Alfred Russel Wallace independently conceived natural selection and forced Darwin to publish. Both drew on Malthus. The idea was ripe. Without Darwin, Wallace's 1858 paper would have launched the revolution - we'd call it Wallaceism instead.",
    counterfactual:"Without Darwin, Alfred Russel Wallace would have published natural selection theory in 1858, and we'd call it 'Wallaceism.' The scientific content would be nearly identical, though Wallace's version gave more weight to environmental selection and less to sexual selection. The religious controversy would have been similar, though Wallace's spiritualist beliefs might have made the science-religion debate messier. Evolution was an idea whose time had come.",
    ripples:[
      {category:"Scientific Theory",detail:"Wallace publishes natural selection in 1858. The scientific content is 95% identical, though Wallace emphasizes environmental adaptation over sexual selection."},
      {category:"Religious Debate",detail:"The creation-evolution controversy happens similarly, though Wallace's later spiritualism and belief in human exceptionalism might have created a different cultural dynamic."},
      {category:"Genetics Integration",detail:"The modern synthesis merging genetics with evolution happens similarly in the 1930s-40s, perhaps called 'Neo-Wallaceism' instead."},
      {category:"Cultural Impact",detail:"'Wallaceism' becomes the term, but popular understanding of evolution would be essentially the same. Social Darwinism might be called 'Social Wallaceism.'"}
    ],
    timeline:[
      {year:1858,happened:"Darwin and Wallace jointly present natural selection",alternate:"Wallace presents alone to Linnean Society; Darwin's 20 years of notes remain unpublished"},
      {year:1859,happened:"On the Origin of Species published",alternate:"Wallace publishes 'The Origin of Species by Natural Selection' - similar content, different author"},
      {year:1871,happened:"Darwin publishes The Descent of Man",alternate:"Wallace's version focuses less on sexual selection, more on environmental adaptation"},
      {year:1882,happened:"Darwin dies as most celebrated naturalist",alternate:"Wallace remembered as evolution's discoverer; Darwin a footnote"}
    ],
    impact:{lives:"Modern medicine and genetics foundation",econ:"Biotech industry: $600B+",cultural:"Transformed human self-understanding",reach:"Global biology",timeline:"Evolution theory arrives within 1-2 years via Wallace"}},
  {id:"curie",name:"Marie Curie",born:1867,died:1934,cat:"science",field:"Physics & Chemistry",
    quote:"Nothing in life is to be feared, it is only to be understood.",
    contributions:["Discovered polonium and radium","Pioneered radioactivity research","First woman to win Nobel Prize","Mobile X-ray units in WWI"],
    r:0.55,reasoning:"Becquerel discovered radioactivity in 1896. Multiple labs were investigating. The Curies' systematic isolation of radium was exceptional work, but the elements were there to be found. Her greater lasting impact was social - proving women could lead frontier science.",
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
    r:0.60,reasoning:"Westinghouse and others were developing AC systems. Ferraris independently invented the induction motor. The AC vs DC battle would have been won by AC regardless - the physics favored it. Tesla accelerated adoption by 5-10 years.",
    counterfactual:"Without Tesla, AC power would still have won the 'War of Currents' - the physics of long-distance transmission made it inevitable. Ferraris had independently invented the induction motor in Italy. Westinghouse's engineers were capable. Tesla accelerated AC adoption and added elegance to the systems, but the electrical age was coming regardless. His biggest unique impact might be cultural - the 'mad genius inventor' archetype he embodied.",
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
    r:0.55,reasoning:"Others were building telescopes - Harriot observed the Moon before Galileo published. Kepler was already Copernican. Galileo's unique contribution was confrontational style and popular writing. The observations would have been made; the fight might have been different.",
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
    r:0.45,reasoning:"Henry discovered induction independently in America. Ørsted had shown electricity and magnetism were related. But Faraday's intuitive genius - thinking in fields rather than forces - was unique. His concepts shaped Maxwell's mathematics.",
    counterfactual:"Without Faraday, Joseph Henry in America discovers electromagnetic induction independently (as he actually did, just slightly later). But Faraday's conceptual innovation - thinking in terms of 'lines of force' and fields rather than action at a distance - carried far more weight. Maxwell might have struggled without Faraday's physical intuitions to mathematize. The field concept in physics could have developed decades later.",
    ripples:[
      {category:"Electromagnetic Induction",detail:"Henry gets priority for induction discovery. American physics gets an earlier boost. Practical generators and motors still emerge by 1840s."},
      {category:"Field Theory",detail:"Without Faraday's 'lines of force,' Maxwell has less to mathematize. Field theory emerges later, possibly through different physical intuitions. Relativity is affected."},
      {category:"Electrochemistry",detail:"Laws of electrolysis discovered by others. The terminology would be different - perhaps no 'ion,' 'electrode,' 'anode,' 'cathode.'"},
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
    r:0.50,reasoning:"Penrose was developing singularity theorems independently. But Hawking radiation - combining quantum mechanics with general relativity at black hole horizons - was his unique insight. His science popularization was even more singular.",
    counterfactual:"Without Hawking, singularity theorems would still emerge via Penrose. But Hawking radiation - the insight that black holes emit thermal radiation and eventually evaporate - might have waited decades. More uniquely, science popularization would have lacked its most recognizable face. 'A Brief History of Time' brought cosmology to millions who would never have encountered it otherwise.",
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
    quote:"The first principle is that you must not fool yourself - and you are the easiest person to fool.",
    contributions:["Quantum electrodynamics","Feynman diagrams","Path integral formulation","Manhattan Project work"],
    r:0.45,reasoning:"Schwinger and Tomonaga independently developed QED renormalization. But Feynman diagrams - a visual calculus for particle interactions - were uniquely his. They transformed how physicists think and calculate.",
    counterfactual:"Without Feynman, QED renormalization still happens via Schwinger and Tomonaga - they shared the Nobel Prize for independently solving the same problem. But Feynman diagrams never exist. Physicists use Schwinger's more algebraic methods. Particle physics calculations become more cumbersome. The intuitive, visual way of thinking about quantum interactions is lost. Physics education is more abstract and less accessible.",
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
    r:0.30,reasoning:"Faraday had the physical intuitions. But Maxwell's mathematical synthesis - showing light was electromagnetic waves - was a unique creative leap. No one else was close to unifying electricity, magnetism, and optics.",
    counterfactual:"Without Maxwell, Faraday's field intuitions remain physical pictures without mathematical expression. The unification of electricity, magnetism, and light - recognizing they're all electromagnetic phenomena - doesn't happen until much later. Radio waves aren't predicted theoretically before being discovered accidentally. Einstein's path to special relativity is completely different. The entire edifice of classical field theory is delayed by decades.",
    ripples:[
      {category:"Electromagnetic Unification",detail:"Electricity, magnetism, and light remain separate phenomena until someone else achieves the synthesis - perhaps Helmholtz, Hertz, or Lorentz, but likely 20-40 years later."},
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
    r:0.50,reasoning:"Rutherford's atomic model needed fixing. Bohr's specific solution was one approach. Eventually wave mechanics superseded it. Bohr's institutional role leading Copenhagen discussions may have carried more weight than his physics.",
    counterfactual:"Without Bohr, atomic physics still needs to explain atomic spectra. Sommerfeld or others extend Rutherford's model differently. Wave mechanics (Schrödinger) and matrix mechanics (Heisenberg) still emerge in the 1920s, but without the Copenhagen interpretation dominating. Quantum mechanics might develop with different philosophical foundations - perhaps more realist, less 'shut up and calculate.'",
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
    r:0.45,reasoning:"The black-body radiation problem was recognized by many. Planck's desperation move - quantizing energy - was not immediately embraced, even by him. But someone had to make the leap. The ultraviolet catastrophe forced some solution.",
    counterfactual:"Without Planck, the ultraviolet catastrophe still exists - classical physics can't explain black-body radiation. Someone else makes the desperate move of quantizing energy, perhaps Rayleigh, Jeans, or Wien working forward from their approximations. The quantum revolution happens anyway, but starts differently. Planck's specific constant and formula might be discovered 5-15 years later, and the 'quantum' concept might have a different name and history.",
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
    r:0.50,reasoning:"Radioactivity research was active in multiple labs. The gold foil experiment's interpretation required Rutherford's insight, but the phenomenon would have been observed. His institutional role - training Chadwick, Bohr - may have been as important.",
    counterfactual:"Without Rutherford, alpha particle scattering still produces surprising results, but the interpretation - that atoms have a tiny, dense nucleus - might take longer to emerge. The 'solar system' model of atoms comes from someone else, perhaps later. More importantly, Rutherford's Cavendish Laboratory trained an entire generation of nuclear physicists. Without his mentorship, Chadwick, Cockcroft, Walton, and others develop differently.",
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
    r:0.70,reasoning:"Swan developed light bulbs in England simultaneously. The phonograph had multiple near-inventors. Edison's real innovation was the industrial research lab - systematic invention. But he was fast and prolific, not unique.",
    counterfactual:"Without Edison, Joseph Swan's light bulb (developed simultaneously in England) illuminates the world instead. The phonograph emerges from one of several competing approaches - Charles Cros had similar ideas. Motion pictures develop through Lumière and others. The more interesting counterfactual is the industrial research lab: Edison's Menlo Park created the model of systematic, team-based invention. Without it, innovation might remain more individual and haphazard for longer.",
    ripples:[
      {category:"Electric Lighting",detail:"Swan's incandescent bulb dominates. The 'Edison socket' is the 'Swan socket.' Practical lighting still arrives in the 1880s."},
      {category:"Sound Recording",detail:"Phonograph emerges from Charles Cros or others. The specific technology might differ - perhaps different groove patterns or materials."},
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
    counterfactual:"Without Copernicus, heliocentrism still returns - the Ptolemaic system's problems (epicycles upon epicycles) were becoming untenable. Perhaps a student of Regiomontanus develops the idea, or it emerges from Islamic astronomical traditions. Tycho Brahe still makes his observations, Kepler still needs to explain them. The Copernican Revolution happens, just credited to someone else and perhaps 20-50 years later.",
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
    counterfactual:"Without Lavoisier, oxygen is still discovered by Priestley and Scheele, who both isolated it independently. But the theoretical framework - understanding combustion as combination with oxygen rather than release of phlogiston - takes longer to emerge. Lavoisier's systematic approach, including quantitative methods and new nomenclature, established chemistry as an exact science. Without him, chemistry remains more alchemical for another generation.",
    ripples:[
      {category:"Combustion Theory",detail:"Priestley's 'dephlogisticated air' remains the terminology longer. The oxygen theory of combustion emerges gradually from German or British chemists."},
      {category:"Chemical Nomenclature",detail:"The systematic naming of chemicals - oxygen, hydrogen, etc. - develops differently. Perhaps German terms dominate instead of French."},
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
    r:0.35,reasoning:"Brahe's data existed; someone needed to analyze it. But Kepler's willingness to abandon circular orbits - sacred since the Greeks - was unusual. His persistence through thousands of failed calculations showed unique dedication.",
    counterfactual:"Without Kepler, Tycho Brahe's precise observations of Mars still exist, awaiting explanation. But who would have the obsessive dedication to test hundreds of orbital models, finally abandoning the sacred circle for the ellipse? Kepler's laws might have waited decades for someone equally persistent and iconoclastic. Newton would have had to derive planetary motion from observations directly, or someone else would need to find the elliptical pattern first.",
    ripples:[
      {category:"Orbital Mechanics",detail:"Elliptical orbits discovered later, perhaps by 1650-1680, by someone analyzing Brahe's data. Ptolemaic epicycles might persist longer."},
      {category:"Newtonian Physics",detail:"Newton's Principia relies on Kepler's laws. Without them, Newton must derive planetary motion from scratch or wait for someone else to find the pattern."},
      {category:"Scientific Persistence",detail:"The archetype of the scientist grinding through failed hypotheses until finding truth is less clear without Kepler's example."},
      {category:"Celestial Harmony",detail:"Kepler's mystical search for cosmic harmony - finding mathematical beauty in planetary orbits - influences science differently."}
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
      {category:"Food Safety",detail:"Heat treatment of milk and beverages discovered by others, perhaps slightly later. Named for someone else - 'Kochization' or 'tyndallization.'"},
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
    counterfactual:"Without Ibn al-Haytham, medieval optics develops from Euclid and Ptolemy without correction. The emission theory of vision (that eyes emit rays) might persist longer. More importantly, his methodological innovations - systematic experimentation, skepticism of authorities, mathematical analysis of physical phenomena - might not enter the Western tradition when they did. Roger Bacon, who built on al-Haytham's work, would have had less to work with.",
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
    r:0.15,reasoning:"His results came from nowhere - no formal training, no school, no collaborators until Hardy. Many of his theorems have still never been independently re-derived. He seemed to access mathematics from a place no one else could reach.",
    counterfactual:"Without Ramanujan, large areas of number theory and infinite series simply don't exist for decades - perhaps ever in the same form. His results weren't extensions of existing work; they appeared from his intuition without proof. Mathematicians are still mining his notebooks for theorems a century later. His mock theta functions weren't understood until the 21st century. Without him, we might never have these results, or they might look completely different.",
    ripples:[
      {category:"Number Theory",detail:"The partition function formulas, mock theta functions, and dozens of identities never discovered or discovered much later in different form."},
      {category:"Mathematical Methods",detail:"Ramanujan's intuitive methods - seeing deep patterns without proof - don't enter the mathematical tradition. Pure analysis dominates more completely."},
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
    counterfactual:"Without Crick, the DNA double helix is still solved - probably within months. Franklin was close to determining the structure from her X-ray data alone. Pauling's triple helix was wrong, but he would have corrected it. Watson without Crick might have been less successful, but Wilkins and Franklin at King's College were nearly there. The race to DNA was a race with multiple competitors near the finish line.",
    ripples:[
      {category:"DNA Discovery",detail:"Franklin or Pauling solves the structure by late 1953 or 1954. Watson becomes a footnote. The double helix is associated with different names."},
      {category:"Molecular Biology",detail:"The 'central dogma' (DNA → RNA → protein) articulated by someone else, perhaps in different terms."},
      {category:"Genetic Code",detail:"The code is cracked similarly - Crick contributed but wasn't sole solver. Timeline similar."},
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
    counterfactual:"Without Franklin, DNA's structure takes longer to solve - perhaps 1-2 years. Her Photo 51 was the clearest evidence for the helical structure. Wilkins would have continued X-ray work, but with less skill. Pauling might have corrected his triple helix faster without competition. More interestingly, Franklin's virus research was leading-edge work that continued until her death. Virus structure biology might have developed differently.",
    ripples:[
      {category:"DNA Discovery",detail:"Without Photo 51, Watson and Crick lack key evidence. Pauling might solve the structure first from chemical reasoning, or discovery delayed to 1954-1955."},
      {category:"X-ray Crystallography",detail:"Franklin's meticulous methods in crystallography don't influence the next generation as directly. The field develops with different techniques."},
      {category:"Virus Research",detail:"Franklin's tobacco mosaic virus work doesn't happen. Virus structure biology advances through different researchers."},
      {category:"Women in Science",detail:"The Franklin-DNA story - including the controversy about credit - doesn't exist. Women in science history has different examples and narratives."}
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
    counterfactual:"Without Heisenberg, quantum mechanics still arrives via Schrödinger's wave mechanics in 1926. The two formulations proved mathematically equivalent, and Schrödinger's was more intuitive to most physicists. The uncertainty principle might have been discovered later through different reasoning - it's implied by the mathematical structure. The bigger counterfactual: Heisenberg's failed German nuclear program. Had he been absent, might Germany have found a physicist who could actually build a bomb?",
    ripples:[
      {category:"Quantum Mechanics",detail:"Schrödinger's wave mechanics dominates from the start. Matrix mechanics emerges as equivalent formulation later, perhaps from Dirac or Born."},
      {category:"Uncertainty Principle",detail:"The fundamental limits on measurement discovered later, perhaps by Bohr or others through different reasoning. Same physics, different discoverer."},
      {category:"German Nuclear Program",detail:"Without Heisenberg's leadership, Germany might have assigned someone more competent - or more willing. The failed Nazi bomb program could have succeeded."},
      {category:"Copenhagen Interpretation",detail:"The Bohr-Heisenberg philosophical discussions at Copenhagen don't happen. Quantum mechanics interpretation develops differently."}
    ],
    timeline:[
      {year:1925,happened:"Heisenberg develops matrix mechanics",alternate:"Schrödinger's wave mechanics (1926) becomes first quantum formulation"},
      {year:1927,happened:"Uncertainty principle published",alternate:"Measurement limits discovered later, perhaps through different route"},
      {year:1941,happened:"Heisenberg visits Bohr in Copenhagen",alternate:"No mysterious meeting; German program develops with different leadership"},
      {year:1945,happened:"German nuclear program fails under Heisenberg",alternate:"Different leadership might have succeeded - or failed faster"}
    ],
    impact:{lives:"Quantum technology foundation",econ:"Electronics, computing",cultural:"Limits of knowledge concept",reach:"Global physics",timeline:"Quantum mechanics develops similarly via Schrödinger"}},
  {id:"dirac",name:"Paul Dirac",born:1902,died:1984,cat:"science",field:"Theoretical Physics",
    quote:"A theory with mathematical beauty is more likely to be correct than an ugly one.",
    contributions:["Dirac equation","Predicted antimatter","Quantum field theory foundations","Fermi-Dirac statistics"],
    r:0.35,reasoning:"The Dirac equation - unifying quantum mechanics and special relativity - was a singular achievement. His prediction of antimatter from pure mathematics was remarkable.",
    counterfactual:"Without Dirac, relativistic quantum mechanics takes longer to develop. The Dirac equation's specific form - predicting antimatter's existence from pure mathematical necessity - might never have been found in the same way. Someone else eventually unifies quantum mechanics and special relativity, but the specific insight that the mathematics requires antimatter might have been discovered only after positrons were observed, reversing the order of prediction and discovery.",
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
    counterfactual:"Without Fermi, the first nuclear reactor is still built - the Manhattan Project had thousands of scientists. Szilard, Wigner, and others had the theoretical understanding. But Fermi's unique combination of theoretical insight and experimental skill meant he could personally verify calculations by building reactors. Without him, the margin of safety might have been different; Chicago Pile-1 might have been built by someone less capable of intuiting when to stop.",
    ripples:[
      {category:"Manhattan Project",detail:"First reactor still built, but perhaps with more conservative design and slower timeline. The December 1942 deadline might have slipped months."},
      {category:"Nuclear Theory",detail:"Beta decay theory developed by others; Fermi's Golden Rule named differently. The theoretical framework is similar but credited to different physicists."},
      {category:"Physics Style",detail:"Fermi's 'back of the envelope' estimation style doesn't become famous. Physics pedagogy develops with different examples."},
      {category:"Italian Physics",detail:"Italy loses its greatest 20th-century physicist. The Italian nuclear physics tradition develops differently."}
    ],
    timeline:[
      {year:1934,happened:"Fermi produces transuranic elements (actually fission)",alternate:"Fission recognized earlier by others; nuclear history changes"},
      {year:1938,happened:"Fermi wins Nobel, emigrates to US",alternate:"Without Nobel, Italian physicist emigrates anyway or doesn't - history branches"},
      {year:1942,happened:"Chicago Pile-1 achieves first controlled fission",alternate:"First reactor built by others, perhaps 6-12 months later"},
      {year:1945,happened:"Fermi witnesses Trinity test",alternate:"Manhattan Project succeeds without Fermi; similar outcome"}
    ],
    impact:{lives:"Nuclear age begun",econ:"Nuclear power industry",cultural:"Atomic era",reach:"Global",timeline:"Nuclear reactor delayed 2-5 years"}},
  {id:"schrodinger",name:"Erwin Schrödinger",born:1887,died:1961,cat:"science",field:"Quantum Physics",
    quote:"The task is not so much to see what no one has yet seen; but to think what nobody has yet thought.",
    contributions:["Schrödinger equation","Wave mechanics","What is Life? (influenced DNA research)","Schrödinger's cat thought experiment"],
    r:0.50,reasoning:"Heisenberg's matrix mechanics arrived first. De Broglie proposed matter waves. Schrödinger's wave equation provided an alternative formulation that proved equivalent.",
    counterfactual:"Without Schrödinger, Heisenberg's matrix mechanics dominates quantum theory. The wave formulation eventually emerges from others building on de Broglie's matter waves. Physics might be taught more algebraically, less intuitively. Interestingly, Schrödinger's 'What is Life?' - which inspired Watson, Crick, and other molecular biologists - wouldn't exist. DNA researchers might have been inspired differently, possibly delaying molecular biology.",
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
    counterfactual:"Without Pauling, quantum chemistry develops through others - Slater, Mulliken, Heitler, London all contributed. The specific insights about hybridization and resonance might emerge differently. Most intriguingly, without Pauling's wrong triple-helix DNA model, the race to DNA might have proceeded differently. His failure accelerated Watson and Crick's success. Also lost: the model of the scientist-activist, working for both pure science and world peace.",
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
    counterfactual:"Without Hubble, Vesto Slipher's redshift measurements and Henrietta Leavitt's Cepheid distance method still exist. Lemaître published the expansion relationship in 1927, before Hubble. The universe's expansion would still be discovered - perhaps we'd call it 'Lemaître's Law.' Hubble's contribution was having access to the 100-inch Hooker telescope and combining others' tools. Someone else at Mount Wilson would have made similar discoveries.",
    ripples:[
      {category:"Cosmic Expansion",detail:"Lemaître's 1927 paper gets priority. We study 'Lemaître's Law' instead of 'Hubble's Law.' The Big Bang theory has the same physics, different origin story."},
      {category:"Galaxy Classification",detail:"The Hubble tuning fork classification developed by someone else. Galaxy types still catalogued, but with different naming conventions."},
      {category:"Modern Cosmology",detail:"The expanding universe discovered similarly, but credited to Lemaître and Slipher. American astronomy's role somewhat reduced."},
      {category:"Space Telescope",detail:"No 'Hubble Space Telescope' - perhaps the 'Lemaître Space Telescope' or named for someone else entirely."}
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
    counterfactual:"Without Goodall, Leakey still sends someone to study chimpanzees - perhaps Birutė Galdikas (who studied orangutans) or Dian Fossey (gorillas) might have taken that role. But Goodall's specific approach - living among the chimps, naming them, observing tool use - was deeply personal. Her 60+ years of continuous data is unmatched. Someone else might have studied chimps scientifically, but the specific relationship with the Gombe community, and the bridge she built between scientific observation and public emotion, might never have formed.",
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
    counterfactual:"Without Carson, pesticide concerns still simmer through the 1960s as bird populations decline. Eventually, someone documents DDT's effects - perhaps Barry Commoner or another environmental scientist. But Carson's unique combination of poetic writing, scientific rigor, and personal courage in facing the chemical industry's attacks was hard to replicate. The environmental movement might have emerged later, weaker, or more fragmented.",
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
    r:0.45,reasoning:"His work on how stars create elements was crucial but collaborative. His steady-state cosmology was wrong. His coining of 'Big Bang' was ironic - he opposed it.",
    counterfactual:"Without Hoyle, stellar nucleosynthesis still develops through Burbidge, Burbidge, and Fowler (the other B2FH authors). The basic insight - that stars forge elements heavier than hydrogen - comes from multiple researchers. Most amusingly, without Hoyle we wouldn't have the term 'Big Bang,' which he coined dismissively. Perhaps we'd call it 'Lemaître's primeval atom' or something less catchy. The steady-state cosmology might have had a different champion.",
    ripples:[
      {category:"Stellar Nucleosynthesis",detail:"The B2FH paper is the BFB paper - Burbidge, Fowler, Burbidge. Same physics, different authorship order."},
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
    counterfactual:"Without Lyell, Hutton's uniformitarianism develops through other geologists. But Lyell's Principles of Geology was on the Beagle with Darwin, shaping how Darwin saw South American geology. Without Lyell's influence, Darwin might have thought more catastrophically about change. Evolution by natural selection requires deep time and gradual change - both Lyellian concepts. The theory might have developed differently, perhaps with more saltational elements.",
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
    counterfactual:"Without Wegener, the matching coastlines of Africa and South America remain a curiosity. Geologists continue to puzzle over similar fossils on different continents. The continental drift hypothesis emerges later - perhaps in the 1940s or 1950s - as paleomagnetism provides the mechanism Wegener lacked. The vindication comes in the 1960s regardless, through seafloor spreading evidence. Wegener's tragedy was being right before the evidence could convince others.",
    ripples:[
      {category:"Continental Drift",detail:"The hypothesis emerges later, perhaps around 1950, as paleomagnetism develops. The scientific establishment is spared decades of rejection."},
      {category:"Plate Tectonics",detail:"The revolution of the 1960s happens similarly - the seafloor spreading evidence is decisive regardless of earlier theories."},
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
    quote:"[No known quotes survive - her work spoke for her]",
    contributions:["Period-luminosity relation for Cepheids","Cosmic distance measurement enabled","1,777 variable stars catalogued","Hubble's work built on hers"],
    r:0.40,reasoning:"Her discovery that Cepheid variable star brightness correlates with period enabled measuring cosmic distances. Others were cataloguing stars, but she noticed the pattern. Her work enabled Hubble's discoveries.",
    counterfactual:"Without Leavitt, the period-luminosity relation for Cepheid variables remains undiscovered longer. Harvard's 'computers' - the women cataloguing stars - continue their work, but the crucial pattern isn't recognized. Hubble can't use Cepheids to prove Andromeda is a separate galaxy. The expansion of the universe is discovered differently, perhaps later. The entire cosmic distance ladder is delayed.",
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
    r:0.35,reasoning:"Other Republicans opposed slavery's expansion, but Lincoln's combination - moderate enough to win, principled enough to persist, rhetorically brilliant enough to reframe the war as moral crusade - was rare.",
    counterfactual:"Without Lincoln, the 1860 Republican nominee might have been Seward (more radical) or Chase (less politically skilled). The Union might still have fought to preserve itself, but the war's framing as a moral crusade against slavery - and the timing of emancipation - would have been different. Lincoln's rhetoric permanently linked union and freedom in American identity. Another president might have preserved the Union without transforming its meaning.",
    ripples:[
      {category:"Civil War Outcome",detail:"Seward or another Republican might have won 1860, but their response to secession could have been more aggressive (provoking border states to leave) or more conciliatory (allowing peaceful separation). Either path changes everything."},
      {category:"Emancipation Timing",detail:"The Emancipation Proclamation was a careful military and political calculation. A different president might have emancipated earlier (losing border states) or later (prolonging slavery), with cascading effects on freedpeople's lives."},
      {category:"Reconstruction",detail:"Lincoln's assassination elevated Johnson, who sabotaged Reconstruction. Ironically, Lincoln's death may have been worse for Black Americans than his absence entirely - a different president surviving might have managed Reconstruction better."},
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
    counterfactual:"Without Napoleon, the French Revolution ends differently - perhaps with a military dictator who merely stabilizes France, or with a restored constitutional monarchy, or with collapse. No one else combined Napoleon's military genius, administrative ability, and personal ambition. Europe doesn't experience 20 years of war. The Napoleonic Code doesn't spread across Europe. Nationalism develops more slowly. The entire 19th century looks different - no German unification in reaction to French humiliation, different colonial patterns, different legal traditions.",
    ripples:[
      {category:"European Wars",detail:"The 3-6 million deaths from Napoleonic Wars don't happen, but neither does the spread of revolutionary ideals across Europe through conquest."},
      {category:"Legal Systems",detail:"The Napoleonic Code doesn't spread. Civil law systems develop differently. Property, contract, and family law across Europe and former colonies look entirely different."},
      {category:"Nationalism",detail:"Without Napoleon's conquests triggering nationalist resistance, German and Italian unification might happen later or differently."},
      {category:"Colonial Patterns",detail:"The Louisiana Purchase might not happen - Napoleon wouldn't be selling to fund wars. Haiti's independence follows different path."}
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
    r:0.25,reasoning:"The ANC had other leaders, but Mandela's 27-year imprisonment gave him unique moral authority. His personal choice to pursue reconciliation over revenge wasn't inevitable - it was a decision.",
    counterfactual:"Without Mandela, apartheid still falls - the system was unsustainable. But the transition is likely violent. Other ANC leaders - Tambo, Sisulu, or younger firebrands like Winnie Mandela or Chris Hani - might not have chosen reconciliation. The Truth and Reconciliation Commission doesn't happen. South Africa might have experienced Zimbabwe-style land seizures, civil war, or white flight. Mandela's personal transformation in prison - and his choice to forgive - wasn't replicable.",
    ripples:[
      {category:"Transition Violence",detail:"Without Mandela's reconciliation approach, South Africa's transition involves more violence, possibly civil war or white exodus."},
      {category:"Economic Stability",detail:"Without peaceful transition, international investment flees. South Africa's economy collapses like Zimbabwe's."},
      {category:"Truth and Reconciliation",detail:"The TRC model - amnesty for truth - doesn't exist. Transitional justice worldwide follows different models."},
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
    counterfactual:"Without Churchill, Lord Halifax becomes Prime Minister in May 1940 and likely explores peace terms with Hitler after Dunkirk. Britain might have accepted a negotiated peace - preserving the Empire but leaving Hitler dominant in Europe. Without British resistance, no staging ground for American entry into Europe, no North African campaign, no D-Day. The war might have ended with Nazi control of Europe and a cold war between Germany and the Soviet Union.",
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
    r:0.30,reasoning:"Indian nationalism was growing regardless. But satyagraha - nonviolent resistance as political philosophy - was Gandhi's invention developed in South Africa. A different independence movement might have been violent.",
    counterfactual:"Without Gandhi, Indian independence still comes - the British Empire was weakening post-WWI. But the method is different. Subhas Chandra Bose's armed resistance becomes the dominant strategy. Independence might come through violence, possibly with more partition casualties, possibly with a military government. The philosophy of nonviolent resistance - which inspired MLK, Mandela, and dozens of movements - doesn't exist in the same form.",
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
    counterfactual:"Without Washington, the Revolution might still succeed - the Continental Congress had other generals. But Washington's specific genius was losing battles while keeping an army intact, and knowing when to retreat. More importantly, his voluntary departure after two terms established American democracy's most important norm. Another leader - a Charles Lee or Horatio Gates - might have become president for life. American democracy could have failed in its first generation.",
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
    counterfactual:"Without Caesar, the Roman Republic still collapses - the system was failing under the weight of empire. Pompey might have become the first dictator, or Crassus, or someone else. But Caesar's specific conquest of Gaul (bringing 1-2 million deaths), his calendar reform (still used today), and his choice to cross the Rubicon shaped the specific way Rome fell. His assassination and the triumvirate wars that followed were contingent on his existence.",
    ripples:[
      {category:"Gallic Conquest",detail:"Gaul remains independent longer, possibly Romanized more gradually. 1-2 million Gauls don't die in conquest. Celtic culture survives stronger."},
      {category:"Republican Fall",detail:"The Republic falls to Pompey or another strongman. The specific civil wars are different. Antony and Octavian rise differently or not at all."},
      {category:"Calendar",detail:"No Julian calendar reform. The Roman calendar remains chaotic until someone else fixes it - perhaps Augustus."},
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
    r:0.25,reasoning:"The Republic was dying - someone would have become first emperor. But Augustus's specific genius was making it last. He created institutions that endured for centuries. Antony would have been different.",
    counterfactual:"Without Augustus, someone else becomes first emperor - probably Antony if he defeats Octavian's generals, or one of the other triumvirs. But Augustus's genius was in institutional design: he created an empire that pretended to be a republic, gave the Senate a role, established provincial administration that lasted centuries. Antony, with his Hellenistic court style, would have created something more obviously autocratic and probably less stable.",
    ripples:[
      {category:"Imperial System",detail:"The Roman Empire looks more like Hellenistic kingdoms - openly autocratic, less stable, shorter-lived."},
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
    r:0.25,reasoning:"China was trending toward consolidation, but Qin's brutal efficiency - standardizing everything from axle widths to writing - created a template for all subsequent Chinese history.",
    counterfactual:"Without Qin Shi Huang, China might still have unified - the Warring States period was creating larger and larger kingdoms. But the specific form of unification - Legalist, brutally standardized, administratively centralized - was Qin's choice. A different unifier might have created a looser federation, preserved more regional scripts, or ruled through Confucian propriety rather than law. All subsequent Chinese history - the very concept of 'China' as a unified civilization - might look different.",
    ripples:[
      {category:"Chinese Unity",detail:"Without Qin's template, China might be like Europe - multiple states with shared culture but separate governments."},
      {category:"Written Language",detail:"Different regional scripts might survive. Chinese written unity - which transcends spoken dialects - might not exist."},
      {category:"Great Wall",detail:"The Wall concept might not exist, or might take different form. Northern defense organized differently."},
      {category:"Imperial Model",detail:"Chinese empire governed through different principles - perhaps Confucian from the start, possibly more decentralized."}
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
    counterfactual:"Without Cleopatra, Egypt falls to Rome decades earlier. A weaker Ptolemaic ruler couldn't have seduced Caesar or Antony - and seduction here was political genius, not merely personal charm. The Roman civil wars proceed differently: no Antony-Cleopatra alliance, no Battle of Actium as decisive Mediterranean showdown. Egypt becomes a Roman province earlier, its grain feeding Rome's armies sooner. The romantic legend of Cleopatra - which shaped Western images of Egypt for millennia - doesn't exist.",
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
    counterfactual:"Without Akbar, the Mughal Empire still exists - Babur founded it, Humayun recovered it - but it might not have thrived. Akbar's religious tolerance (sulh-i-kul) was a personal philosophy, not inherited policy. His successors Jahangir and Shah Jahan maintained it, but Aurangzeb abandoned it. Without Akbar's example of Hindu-Muslim synthesis, the Mughal period might have been more conflictual from the start, the empire smaller, its art and architecture less magnificent.",
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
    r:0.25,reasoning:"German unification was in the air, but Bismarck's specific method - three quick wars, Prussian dominance - wasn't inevitable. His diplomatic juggling kept Europe peaceful until he left.",
    counterfactual:"Without Bismarck, German unification still happens - nationalism was too strong. But it might happen differently: through revolution (1848-style), or through Austrian leadership, or more gradually. Bismarck's specific achievement was quick, decisive wars followed by diplomatic restraint. He unified Germany in 1871 and then kept it peaceful for 19 years. Without his restraint, WWI might have started in the 1870s or 1880s.",
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
      {year:1890,happened:"Bismarck dismissed; his alliance system decays",alternate:"Different leader might maintain system better - or worse"}
    ],
    impact:{lives:"Created nation of 40M+",econ:"German industrial power",cultural:"Modern diplomacy model",reach:"Germany, European order",timeline:"Germany unified differently or not at all"}},
  {id:"fdr",name:"Franklin D. Roosevelt",born:1882,died:1945,cat:"politics",field:"US Presidency",
    quote:"The only thing we have to fear is fear itself.",
    contributions:["New Deal programs","Led US through WWII","United Nations vision","Four-term presidency"],
    r:0.40,reasoning:"Another Democrat would have tried stimulus programs, but FDR's specific personality - fireside chats, coalition-building - shaped the New Deal's form. His wartime leadership was less unique; the US would have fought.",
    counterfactual:"Without FDR, the Depression still prompts government response - Hoover was already intervening, just inadequately. A different Democrat (Al Smith? Newton Baker?) tries different programs. The specific New Deal coalition - labor, farmers, African Americans, urban machines - might not form. Social Security might look different or not exist. Wartime leadership carries less weight; the US fights WWII regardless. The UN still emerges, perhaps with different structure.",
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
    r:0.35,reasoning:"Her religious settlement - neither fully Catholic nor Puritan - reflected personal pragmatism. The Armada's defeat had luck, but her preparations mattered. The cultural flourishing happened under her stability.",
    counterfactual:"Without Elizabeth, her half-sister Mary I continues ruling (if she lives longer) or the succession is contested. England might have returned to Catholicism or descended into religious civil war. The Elizabethan Settlement - that uniquely English compromise between Protestant theology and Catholic ceremony - was Elizabeth's personal creation. Without her 45 years of stability, no Shakespeare, no Drake, no Protestant England.",
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
    r:0.30,reasoning:"The Frankish kingdom was powerful, but Charlemagne's combination of military campaigns, educational revival, and alliance with the papacy created something new - a revived Western Roman Empire concept.",
    counterfactual:"Without Charlemagne, the Frankish kingdom still exists but doesn't become an empire. No unification of France, Germany, and Italy under one rule. The Carolingian Renaissance - which preserved classical learning through the Dark Ages - doesn't happen or happens differently. The concept of a revived Western Roman Empire doesn't emerge, so the Holy Roman Empire might never exist. Medieval European political thought develops along completely different lines.",
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
    counterfactual:"Without Bolívar, South American independence still happens - Napoleon's invasion of Spain fatally weakened colonial control. San Martín liberates the south, others emerge in the north. But without Bolívar's unifying vision of Gran Colombia, the continent fragments even faster. The specific borders of modern Venezuela, Colombia, Ecuador, Peru, and Bolivia might look completely different. The republican ideals he spread might have been weaker without his military prestige.",
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
    r:0.20,reasoning:"The Ottoman Empire was collapsing, but Atatürk's specific vision - radical secularization, Western orientation - was personal. Other leaders might have preserved more Islamic elements.",
    counterfactual:"Without Atatürk, the Ottoman Empire still collapses after WWI - the Allies guaranteed that. But the successor state looks completely different. Atatürk's radical secularization - abolishing the caliphate, banning the fez, adopting Latin alphabet, giving women the vote - was personal ideology, not inevitable. Another Turkish leader might have created an Islamic republic, preserved the caliphate, or accepted the Sèvres Treaty's partition. Modern Turkey is Atatürk's creation.",
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
    r:0.30,reasoning:"Chinese communism would have existed without Mao, but its specific character - peasant-based revolution, cult of personality, Cultural Revolution - was Mao's. A different China, likely less catastrophic and less transformative.",
    counterfactual:"Without Mao, Chinese communism still exists - the CCP had other leaders like Zhou Enlai, Liu Shaoqi, Deng Xiaoping. But the specific catastrophes - the Great Leap Forward killing 15-55 million, the Cultural Revolution destroying a generation - were Mao's personal projects. A different leader might have created a China more like Vietnam: communist but not so convulsive. Alternatively, Chiang Kai-shek might have won the civil war, creating a very different China.",
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
    r:0.30,reasoning:"Russia was ripe for revolution in 1917. But the Bolsheviks were a minority - Lenin's decision to seize power in October, when others hesitated, was personal. A different revolution might have emerged.",
    counterfactual:"Without Lenin, Russia still has a revolution in 1917 - the Tsar was doomed. But the February Revolution produced a democratic provisional government. Without Lenin's insistence on seizing power in October, Russia might have become a social democracy, not a communist state. The Mensheviks, Socialist Revolutionaries, or even Kerensky's liberals might have prevailed. No Soviet Union means no Stalin, no Cold War as we knew it, no communist Eastern Europe.",
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
    r:0.45,reasoning:"Britain's post-war consensus was crumbling; reform was coming. But Thatcher's approach - confrontational, ideological - wasn't inevitable. A different leader might have reformed more gradually.",
    counterfactual:"Without Thatcher, Britain still faces economic crisis in the 1970s - the 'British disease' was real. A different Conservative leader (Heath? Whitelaw?) or continued Labour rule tries different remedies. Privatization happens more slowly or not at all. The miners' union isn't crushed in the same way. British politics might have evolved toward continental European social democracy rather than Anglo-American neoliberalism. The 'special relationship' with Reagan-era America looks different.",
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
    r:0.40,reasoning:"Indian independence was coming with or without Nehru. But his specific vision - secular, democratic, non-aligned - shaped India's character. Patel or others might have led differently. The democratic tradition wasn't guaranteed.",
    counterfactual:"Without Nehru, India still becomes independent - that was inevitable by 1947. But Nehru's specific vision - secular democracy, non-alignment, mixed economy - wasn't guaranteed. Sardar Patel might have led a more Hindu-nationalist India. Subhas Chandra Bose (if alive) might have created a more authoritarian state. The Non-Aligned Movement might not exist. India's commitment to democracy through its early decades wasn't inevitable; many new nations became dictatorships.",
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
    r:0.30,reasoning:"Vietnamese nationalism would have found a leader, but Ho's combination - internationalist experience, patient strategy, iconic status - was unique. His moral authority held the movement together through decades of war.",
    counterfactual:"Without Ho Chi Minh, Vietnamese nationalism still exists - the independence movement was powerful. But Ho's unique combination of qualities - his years in Paris and Moscow, his patient strategy, his iconic 'Uncle Ho' image - held the movement together through decades of war against France and America. A different leader might have been more aggressive (provoking American escalation earlier) or less persistent (accepting partition). The Vietnam War might have ended very differently.",
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
    counterfactual:"Without Nasser, Egypt still has a revolution - the Free Officers were a group, not just Nasser. But pan-Arab nationalism loses its most charismatic voice. The Suez Crisis might not have the same galvanizing effect. Egypt might have remained more aligned with the West, or another Arab leader (perhaps in Iraq or Syria) might have become the nationalist icon. The Arab-Israeli conflict develops with different Egyptian leadership.",
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
    counterfactual:"Without Marcos, Philippine authoritarianism might still emerge - the Cold War context encouraged strongmen. But Marcos's specific corruption was extraordinary: estimates of $5-10 billion stolen, Imelda's thousands of shoes, crony capitalism that enriched his allies while impoverishing the nation. A different authoritarian might have been less personally corrupt, managed the economy better. The People Power Revolution that overthrew him was a response to his specific excesses.",
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
    r:0.40,reasoning:"Zimbabwean independence was coming. Mugabe's specific choices - refusing to leave power, violent land reform, economic mismanagement - were personal. A different leader might have managed the post-colonial transition better.",
    counterfactual:"Without Mugabe, Zimbabwean independence still comes - ZANU and ZAPU were fighting for it. But Mugabe's specific choices shaped the disaster: refusing to leave power, violent farm seizures that collapsed agricultural production, printing money into hyperinflation. Joshua Nkomo or another leader might have managed the transition better. Zimbabwe had the 'breadbasket of Africa'; under different leadership, it might have prospered.",
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
    counterfactual:"Without Pinochet, the 1973 coup might still happen - the US wanted Allende gone, and other generals were involved. But Pinochet's specific choices shaped Chile: the 'Chicago Boys' economic experiment, the systematic torture, the caravan of death. Another general might have been less ideological about economics, less brutal about repression. Chile's path - becoming the neoliberal laboratory - was Pinochet's choice.",
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
    r:0.35,reasoning:"German reconciliation with the East was needed. But Brandt's specific gestures - the Warsaw genuflection - and his Ostpolitik created the framework for eventual reunification. His personal history (exile, resistance) gave him unique credibility.",
    counterfactual:"Without Brandt, German reconciliation with the East still happens eventually - the Cold War's end would require it. But Brandt's specific gestures were powerful. The spontaneous genuflection at the Warsaw Ghetto Memorial became an image of German moral reckoning. His Ostpolitik - recognizing the Oder-Neisse line, treating with East Germany - laid groundwork that made reunification smoother. Without him, reunification comes harder, later, with more bitterness.",
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
    r:0.45,reasoning:"The Cuban Missile Crisis required steady leadership; others might have escalated. The Moon commitment was discretionary - any president could have made it. His assassination mythology exceeds his actual legislative achievements.",
    counterfactual:"Without JFK, the Cuban Missile Crisis is the crucial test. Would Nixon (if he'd won 1960) or LBJ have handled it the same way? JFK's specific combination of firmness and restraint - resisting the Joint Chiefs' push for invasion while maintaining the blockade - wasn't guaranteed. The crisis could have gone nuclear. The Moon commitment was inspirational but any president could have made it. JFK's assassination created a mythology that exceeds his legislative record.",
    ripples:[
      {category:"Cuban Missile Crisis",detail:"A different president might have escalated to invasion or backed down earlier. The crisis might have ended differently - possibly catastrophically."},
      {category:"Space Program",detail:"The Moon commitment was discretionary. A different president might not have made it, or made it later, or with different framing."},
      {category:"Civil Rights",detail:"JFK's civil rights support was cautious. A different president might have been more or less aggressive."},
      {category:"Vietnam",detail:"JFK was increasing involvement but might have withdrawn. His death made escalation under LBJ more likely - or maybe not."}
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
    r:0.45,reasoning:"Conservative movement was rising with or without Reagan. His specific style - optimism, communication skills - shaped how conservatism was sold. But the policy direction was supported by broader forces.",
    counterfactual:"Without Reagan, the conservative movement still exists - it was building since Goldwater. But Reagan's specific genius was selling conservative ideas with optimism rather than anger. A different Republican (George H.W. Bush? Howard Baker?) might have won 1980 but governed more moderately. The specific Reagan-Thatcher partnership that defined 1980s neoliberalism might not have formed. The Cold War's end might have looked different without Reagan's rhetoric.",
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
    r:0.25,reasoning:"The Soviet system was failing, but Gorbachev's specific choice - to reform rather than repress - wasn't inevitable. A different leader might have used force (like China) and maintained the Soviet system longer, at great cost.",
    counterfactual:"Without Gorbachev, the Soviet Union still faces crisis - the system was failing economically. But a different General Secretary might have responded like China did in 1989: reform the economy while crushing political dissent. The Soviet Union might have survived another decade or more through repression. Eastern Europe might not have been freed peacefully. The Cold War might have ended violently or dragged on much longer. Gorbachev's personal choice not to use force was the crucial variable.",
    ripples:[
      {category:"Soviet Reform",detail:"A different leader uses force like China. Soviet Union survives through repression but eventually faces worse crisis."},
      {category:"Eastern Europe",detail:"Without Gorbachev refusing to intervene, the 1989 revolutions are crushed. Berlin Wall stands longer."},
      {category:"Cold War End",detail:"The Cold War ends differently - possibly violently, possibly dragging on for years."},
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
    counterfactual:"Without Alexander, Philip II's Macedonian army still exists, but it's used for Greek hegemony, not world conquest. Alexander's burning drive - to India, to the edge of the known world - was purely personal. A sane successor might have consolidated Philip's gains and conquered Persia, but stopped there. The Hellenistic world - that fusion of Greek and Eastern cultures that shaped everything from the Ptolemies to the Buddhist art of Gandhara - might never exist.",
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
    counterfactual:"Without Genghis Khan, the Mongol tribes remain exactly that - raiding tribes on the steppe, never uniting. Temüjin's personal history was unique: the murdered father, enslaved childhood, rise through personal charisma. His vision of transcending tribal loyalty and building a meritocratic empire was unprecedented. The largest contiguous land empire in history simply doesn't exist. The Silk Road isn't revived. The Plague might not spread to Europe. Asian and European history look completely different.",
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
    counterfactual:"Without Hannibal, Carthage still fights Rome in the Second Punic War - the conflict was structural. But no one else crosses the Alps with elephants and devastates Italy for 15 years. Cannae's double envelopment - killing 50,000+ Romans in a day - might never happen. Rome might win the war faster and easier. Or, without facing Hannibal's existential threat, Rome might not develop the resilience and military adaptations that made it unstoppable.",
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
    counterfactual:"Without Sun Tzu, strategic thinking still develops - every ancient civilization produced military theory. The specific formulations of The Art of War - deception, indirect approach, winning without fighting - might emerge through other texts like the Six Secret Teachings or Wu Qi's works. The text's influence is enormous, but the ideas weren't unique to one person. The Warring States period was generating strategic thought across multiple schools.",
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
    counterfactual:"Without Saladin, Jerusalem is still eventually retaken - Muslim leaders had been trying for decades. But Saladin's achievement was strategic: uniting Egypt and Syria under one command, then applying that power to the Crusader states. His chivalric reputation - releasing prisoners, honoring truces, earning respect from his enemies - was a personal choice that shaped how Muslims and Christians interacted. Without him, the reconquest might be bloodier, later, and remembered differently.",
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
    counterfactual:"Without Shaka, there is no Zulu nation. The Zulu were one small clan among many; Shaka transformed them through military innovations that were entirely his own: the iklwa stabbing spear replacing throwing spears, the 'buffalo horns' encirclement tactic, the impi regimental system that created disciplined armies. Without him, the Mfecane - the massive displacement of peoples across southern Africa - doesn't happen. When the British arrive, they face a completely different political landscape.",
    ripples:[
      {category:"Zulu Nation",detail:"Without Shaka, the Zulu remain a small clan. No Zulu kingdom, no Isandlwana, no iconic resistance to colonialism."},
      {category:"Mfecane",detail:"The chaos of the Mfecane - 1-2 million displaced, new nations formed - doesn't happen. Southern African demography very different."},
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
    counterfactual:"Without Tokugawa Ieyasu, Japan still unifies - Nobunaga and Hideyoshi had already done most of the work. But Ieyasu's specific genius was the stable settlement: the sankin-kōtai hostage system that kept daimyo weak, the isolation policy that prevented Christian influence, the arrangements that made rebellion impossible. Another victor at Sekigahara might have been overthrown within a generation. The 250 years of peace that created Edo culture might have been another century of civil war.",
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
    counterfactual:"Without Nelson, Britain probably still wins the naval war - the Royal Navy had more ships, better crews, and other capable admirals. But Nelson's specific innovations - breaking the line at Trafalgar, aggressive pursuit - made British victories more decisive. Without Trafalgar's completeness, Napoleon might have had another naval threat. The invasion of Britain becomes more plausible. The war at sea drags on longer, tying up British resources.",
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
    counterfactual:"Without Zhukov, the Soviet Union probably still wins - the industrial base, the population, the distances, the winter all favored Russia. But Zhukov's specific decisions mattered: the defense of Moscow in 1941, the Stalingrad counteroffensive, Operation Bagration. Without him, the war might last another year. Millions more die. Germany might have time to develop more advanced weapons. The postwar territorial settlement might be different.",
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
    counterfactual:"Without Cortés, the Aztec Empire still falls - disease alone killed 90% of the population, and Spain was sending conquistadors throughout the Americas. The indigenous enemies of the Aztecs (Tlaxcala especially) were eager for alliance against their oppressors. Another conquistador, with similar alliances and similar timing, achieves similar results. The conquest might be delayed 10-20 years, but the outcome is the same: Spanish Mexico.",
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
    r:0.20,reasoning:"No one else in China commanded fleets of 300 ships reaching Africa. When Zheng He died, China turned inward - ships rotted, records destroyed. Without him, Chinese maritime expansion simply doesn't happen.",
    counterfactual:"Without Zheng He, Chinese maritime expansion to Africa simply doesn't happen. The voyages were a personal project of Emperor Yongle using a unique figure - a Muslim eunuch who commanded the trust of the emperor. After Zheng He died, the ships rotted, the records were destroyed, and China turned inward. This wasn't inevitable; it was a choice. But without Zheng He, there was no one to make the voyages happen in the first place. China never demonstrates its potential maritime supremacy.",
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
    r:0.20,reasoning:"Claiming descent from Genghis Khan, Tamerlane built an empire through exceptional brutality and military skill. His conquests were personal achievements - the empire fragmented after his death.",
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
    r:0.50,reasoning:"Other generals could have commanded OVERLORD - Marshall was initially favored. Eisenhower's specific talent was coalition management. As president, his policies were moderate; another Republican might have been similar.",
    counterfactual:"Without Eisenhower, D-Day still happens - Marshall was initially favored for command, and the operation reflected Allied strategic consensus. But Eisenhower's specific talent was managing the fractious Allied coalition: keeping Montgomery and Patton from each other's throats, balancing British and American interests, making the final decision to go despite weather. Someone else might have managed this less well, possibly delaying or complicating the invasion.",
    ripples:[
      {category:"D-Day Command",detail:"Marshall or another general commands OVERLORD. The invasion succeeds but possibly with more Allied friction."},
      {category:"Coalition Management",detail:"Without Ike's diplomatic skill, British-American tensions might be worse. Postwar alliance starts more strained."},
      {category:"1952 Election",detail:"Without Eisenhower, a different Republican nominee. Taft isolationism might prevail."},
      {category:"Interstate Highways",detail:"Highway system happens regardless - the need was obvious - but perhaps under different administration, different design."}
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
    r:0.45,reasoning:"The Pacific war would have been won without MacArthur - Nimitz was equally important. His Japanese occupation was successful but reflected broader US policy. His insubordination in Korea showed personal flaws.",
    counterfactual:"Without MacArthur, the Pacific war is still won - Nimitz's naval campaign was equally important, and the atomic bombs would have ended the war regardless. His Japanese occupation was successful, but reflected broader US policy more than personal genius. The Inchon landing was brilliant, but his subsequent push to the Yalu was disastrous. A more cautious general might have avoided Chinese intervention entirely.",
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
    r:0.55,reasoning:"Britain had other capable generals. El Alamein was partly won by superior resources. Market Garden was his failure. His personality clashes with Americans complicated alliance. Competent but not singular.",
    counterfactual:"Without Montgomery, Britain finds another general for the Eighth Army. El Alamein is won anyway - by November 1942, Rommel was desperately short of fuel and supplies while Montgomery had massive superiority. The British needed a victory and a hero after years of defeats, and they would have found one. Market Garden doesn't happen in its disastrous form. The alliance might actually run smoother without Monty's ego.",
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
    counterfactual:"Without Giáp, Vietnam still fights for independence - the nationalist and communist movements were deep-rooted. But Giáp's specific genius was patience and understanding of revolutionary warfare. Dien Bien Phu might not have been attempted or might have failed; the French war drags on differently. The American war might have seen more conventional tactics that played to American strengths. Vietnamese independence comes eventually, but the path is very different.",
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
    counterfactual:"Without Suleiman, the Ottoman Empire still expands - the military machine was built, the momentum was there. Belgrade and Rhodes fall to Ottoman power regardless of who's sultan. But Suleiman's legal reforms (the Kanuni - 'Lawgiver') shaped Ottoman administration for centuries. His cultural patronage created the Ottoman golden age. A different sultan might have been a conqueror but not a lawgiver.",
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
    r:0.40,reasoning:"Prussian military modernization was happening. But Moltke's specific innovations - the general staff system, railway logistics - created the machine that won three wars quickly. His operational art was distinctive.",
    counterfactual:"Without Moltke, Prussia still modernizes - Bismarck was the political driver, and military reform was underway. But Moltke's specific innovations made the wars of German unification quick and decisive. The general staff system, railway mobilization, mission-type tactics - these were his contributions. Without them, the wars against Denmark, Austria, and France might have been longer, costlier, messier. German unification still happens, but less efficiently.",
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
    r:0.10,reasoning:"Marlowe was talented. Jonson was skilled. But no one else was Shakespeare. The psychological depth, the poetry, the sheer quantity of great work - it's not a gap another Elizabethan dramatist could have filled.",
    counterfactual:"Without Shakespeare, the English language would be noticeably different - missing words like 'lonely,' 'generous,' 'countless,' and phrases like 'break the ice' and 'wild-goose chase.' Elizabethan drama would have produced Marlowe's Faustus and Jonson's comedies, but the psychological depth of Hamlet, the cosmic tragedy of Lear, the complex villainy of Iago - these specific explorations of human nature wouldn't exist. English literature's central reference point would be missing.",
    ripples:[
      {category:"English Language",detail:"1,700+ words and countless phrases never enter English. No 'assassination,' 'lonely,' 'eventful,' 'bedroom.' Language still evolves but loses this specific vocabulary and expressiveness."},
      {category:"Literary Tradition",detail:"Marlowe becomes the greatest Elizabethan dramatist. His darker, more cynical vision dominates. English literature develops without Hamlet's introspection, Falstaff's humor, or Prospero's forgiveness."},
      {category:"Theater Development",detail:"The Globe Theatre's repertoire is different. Without Shakespeare's commercial success, the economic model of English theater might have developed differently. The theatrical tradition is less psychologically complex."},
      {category:"Cultural References",detail:"No 'to be or not to be,' no 'star-crossed lovers,' no 'band of brothers.' These phrases that pervade English-speaking culture simply don't exist. Our shared language of emotion and drama is impoverished."}
    ],
    timeline:[
      {year:1590,happened:"Shakespeare begins writing plays in London",alternate:"Marlowe dominates London theater until his death in 1593; no clear successor emerges"},
      {year:1600,happened:"Hamlet written - the 'first modern man'",alternate:"No Hamlet; psychological drama develops differently or later"},
      {year:1606,happened:"Macbeth, King Lear, Antony and Cleopatra",alternate:"Jonson's classicism dominates; tragedy is less cosmic and psychological"},
      {year:1623,happened:"First Folio published, preserving 36 plays",alternate:"Marlowe's works carefully preserved instead; half of Shakespeare's plays would be lost anyway"}
    ],
    impact:{lives:"Shaped English language for 400M+ speakers",econ:"Theater industry foundations",cultural:"Human psychology exploration",reach:"English-speaking world and beyond",timeline:"English literature fundamentally different"}},
  {id:"davinci",name:"Leonardo da Vinci",born:1452,died:1519,cat:"arts",field:"Art & Polymath",
    quote:"Learning never exhausts the mind.",
    contributions:["Mona Lisa, Last Supper","Anatomical drawings","Flying machine designs","Renaissance polymath ideal"],
    r:0.15,reasoning:"Other Renaissance artists were brilliant. But Leonardo's range across art, science, engineering, and anatomy was unique. His notebooks contain ideas centuries ahead. The 'Renaissance Man' ideal exists because of him.",
    counterfactual:"Without Leonardo, the Renaissance still happens - Michelangelo, Raphael, and Botticelli all flourish. But the specific combination of art and science that Leonardo embodied is missing. The Mona Lisa and Last Supper don't exist. His anatomical drawings, centuries ahead of their time, don't influence medical illustration. His notebooks full of helicopters and tanks aren't there to inspire later inventors. The 'Renaissance Man' ideal - the polymath who masters multiple domains - might not have the same cultural force.",
    ripples:[
      {category:"Art-Science Integration",detail:"The model of artist as scientist is weaker. Art and science remain more separated without Leonardo's example."},
      {category:"Iconic Works",detail:"No Mona Lisa - perhaps the most famous painting in history. No Last Supper. Renaissance art peaks differently."},
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
    counterfactual:"Without Beethoven, classical music still evolves toward Romanticism - the cultural forces were there. But the specific bridge from Mozart to Brahms is missing. The Third Symphony (Eroica) that broke every classical rule doesn't exist to show how. The Ninth Symphony's choral finale - 'Ode to Joy' - isn't there. The image of the artist as heroic individual struggling against fate (including his own deafness) is weaker. Western music's trajectory changes.",
    ripples:[
      {category:"Classical-Romantic Bridge",detail:"Without Beethoven showing how to break classical rules, the transition to Romanticism takes different path."},
      {category:"Symphony Form",detail:"The symphony after Mozart develops differently. Schubert, Brahms, Mahler build on different foundation."},
      {category:"Artist as Hero",detail:"The image of the tortured genius - composing while deaf, shaking fist at fate - is missing. Romantic artist mythology weaker."},
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
    counterfactual:"Without Mozart, Haydn still develops the symphony and string quartet. Beethoven still revolutionizes music. But the specific 600+ Mozart compositions don't exist. The Marriage of Figaro, Don Giovanni, The Magic Flute - operas that combined musical and dramatic genius uniquely - are gone. The piano concerto form loses its greatest examples. Classical period music is recognizable but impoverished.",
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
    r:0.35,reasoning:"Braque was developing Cubism alongside Picasso - they worked so closely some paintings are hard to attribute. Modern art was happening regardless. Picasso's unique contribution was celebrity, productivity, and constant reinvention.",
    counterfactual:"Without Picasso, Cubism still emerges - Georges Braque was developing it simultaneously, and the two worked so closely that some paintings are hard to attribute. Modern art's trajectory continues through Matisse, Kandinsky, Duchamp. But Picasso's specific contributions - the Blue Period, Guernica, seven decades of constant reinvention - don't exist. The model of the artist as celebrity-genius-provocateur is weaker.",
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
    counterfactual:"Without Michelangelo, the Renaissance still happens - Leonardo, Raphael, Bramante all contribute. But the Sistine Chapel ceiling doesn't exist in this form. The David in Florence is by someone else or doesn't exist. St. Peter's Basilica has a different dome. The specific vision of human physical and spiritual perfection that Michelangelo embodied - the terribilità - is missing from Western art.",
    ripples:[
      {category:"Sistine Chapel",detail:"Different artist paints the ceiling. The specific vision of Creation, the prophets, the Last Judgment - all different."},
      {category:"Sculpture",detail:"The David doesn't exist. Renaissance sculpture peaks with someone else - perhaps Donatello's legacy continues differently."},
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
    counterfactual:"Without Bach, Baroque music still exists - Handel, Vivaldi, Telemann all flourish. But the specific contrapuntal mastery Bach achieved is missing. The Well-Tempered Clavier, which taught generations of pianists, doesn't exist. When Mendelssohn revived Bach in 1829, there would be nothing to revive. Western music loses its deepest foundation.",
    ripples:[
      {category:"Counterpoint",detail:"The art of fugue doesn't reach its peak. Musical complexity develops along different lines."},
      {category:"Piano Pedagogy",detail:"The Well-Tempered Clavier doesn't exist. Pianists learn from different repertoire."},
      {category:"Musical Architecture",detail:"The sense of music as logical structure - mathematics made audible - is weaker."},
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
    counterfactual:"Without Tolstoy, Russian literature still produces Dostoevsky, Turgenev, Chekhov - a golden age regardless. But War and Peace and Anna Karenina don't exist. The epic social novel that captures an entire society is missing its greatest example. Tolstoy's late-life moral philosophy, which influenced Gandhi directly, doesn't exist. The tradition of writer-as-prophet is weaker.",
    ripples:[
      {category:"Epic Novel",detail:"War and Peace doesn't exist. The model of the novel that captures an entire society and era is missing its peak example."},
      {category:"Gandhi's Philosophy",detail:"Tolstoy's correspondence with Gandhi directly shaped his nonviolent philosophy. Without Tolstoy, Gandhi's ideas develop differently."},
      {category:"Russian Literature",detail:"Dostoevsky becomes the undisputed peak of Russian fiction. The balance between his darkness and Tolstoy's breadth is gone."},
      {category:"Writer as Prophet",detail:"The model of the novelist who becomes moral teacher - renouncing fiction for philosophy - is weaker."}
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
    r:0.15,reasoning:"No one else wrote like Dostoevsky - the psychological intensity, the religious questioning, the examination of extremity. His influence on existentialism, psychology, and literature was unique.",
    counterfactual:"Without Dostoevsky, Russian literature still flourishes - Tolstoy, Turgenev, Gogol all contribute. But the specific exploration of psychological extremity is missing. Crime and Punishment's tortured conscience, The Brothers Karamazov's religious doubt, Notes from Underground's spite - these specific territories go unexplored. Existentialism loses a crucial precursor. Freud loses a key influence.",
    ripples:[
      {category:"Psychological Novel",detail:"The exploration of extreme mental states - guilt, spite, religious doubt - happens differently or later."},
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
    r:0.10,reasoning:"The Tale of Genji is arguably the first novel in any language - certainly the first with psychological complexity. Without Murasaki, the novel form might have emerged elsewhere, centuries later, in different form.",
    counterfactual:"Without Murasaki Shikibu, the novel as literary form might have emerged elsewhere, centuries later. The Tale of Genji - with its psychological complexity, its exploration of time and memory, its focus on inner life - was unprecedented. Japanese literature develops without its foundational text. The entire tradition of prose fiction that explores consciousness might have emerged differently.",
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
    r:0.10,reasoning:"Afrobeat - the fusion of James Brown funk, highlife, jazz, and Yoruba rhythms - was Fela's invention. His musical style, political confrontation, and communal living were a package no one else offered. Without him, the genre doesn't exist.",
    counterfactual:"Without Fela Kuti, Afrobeat doesn't exist - the genre was his personal invention, fusing James Brown's funk with highlife, jazz, and Yoruba rhythms. Nigerian music develops differently, probably more toward jùjú or highlife. The model of African musician as political revolutionary is weaker. His sons Femi and Seun don't carry forward a tradition that never existed. Global music lacks this specific sound.",
    ripples:[
      {category:"Afrobeat Genre",detail:"The genre doesn't exist. Nigerian music develops along different lines - more highlife, more jùjú."},
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
    counterfactual:"Without Tagore, Bengal still has a literary renaissance, but it lacks its central figure. The Nobel Prize for Literature in 1913 goes to someone else - no non-European breaks that barrier yet. India and Bangladesh have different national anthems. The model of poet-philosopher-educator-nationalist that Tagore embodied doesn't exist. Bengali cultural identity develops differently.",
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
    r:0.15,reasoning:"Sufi poetry existed before and after Rumi, but his specific voice - ecstatic, accessible, universal - made him the most-read poet in America seven centuries later. The Mevlevi order exists because of his teachings.",
    counterfactual:"Without Rumi, Sufi poetry still exists - Hafez, Attar, Saadi all contribute. But the specific voice that made Rumi the best-selling poet in America seven centuries later is missing. The Mevlevi order (whirling dervishes) doesn't exist. The accessible, ecstatic, universal mysticism that crosses cultural boundaries might not have the same ambassador.",
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
    counterfactual:"Without Tarkovsky, art cinema still exists - Bergman, Fellini, Antonioni all contribute. But the specific exploration of time, spirituality, and image that defined Tarkovsky is missing. Stalker, Solaris, Andrei Rublev don't exist. Directors from Lars von Trier to Denis Villeneuve lose a crucial influence. The 'Tarkovskian' approach to cinema - long takes, natural sound, spiritual searching - doesn't exist as a reference point.",
    ripples:[
      {category:"Art Cinema",detail:"The Tarkovskian style doesn't exist. Art cinema develops along different lines - perhaps more Bergmanesque."},
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
    counterfactual:"Without Kurosawa, Japanese cinema still exists - Ozu, Mizoguchi continue. But the specific techniques that influenced Hollywood are missing. Seven Samurai doesn't become The Magnificent Seven. Yojimbo doesn't become A Fistful of Dollars. George Lucas doesn't cite Hidden Fortress as Star Wars' inspiration. The global film language is different.",
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
    counterfactual:"Without Homer - or whoever composed the Iliad and Odyssey - Western literature has a different foundation. These weren't the only Greek epics; the 'Epic Cycle' contained other poems, now lost. But the Iliad's exploration of honor, rage, and mortality, and the Odyssey's journey narrative, became the templates. Every war story echoes the Iliad; every homecoming echoes the Odyssey. Different foundational texts would have meant different literary archetypes.",
    ripples:[
      {category:"Literary Foundation",detail:"Other Greek epics become foundational instead. Different templates for narrative."},
      {category:"Educational Tradition",detail:"Greek and Roman education centered on Homer. Different texts, different cultural transmission."},
      {category:"Mythological Canon",detail:"The specific versions of Greek myths that dominated came through Homer. Different tellings might prevail."},
      {category:"Literary Archetypes",detail:"The journey home, the warrior's rage, the faithful wife - these archetypes come from Homer. Different stories, different archetypes."}
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
    r:0.15,reasoning:"Dante wrote in vernacular Italian when Latin was the literary language - revolutionary. The Divine Comedy's scope and ambition had no predecessor. His vision of Hell, Purgatory, and Heaven became Western default imagery.",
    counterfactual:"Without Dante, the Divine Comedy doesn't exist - and with it, our visual imagination of Hell, Purgatory, and Heaven. The nine circles of Hell, Satan frozen in ice, the climb up Mount Purgatory - this is how the medieval world understood the afterlife, and how we still picture it. The choice to write in Italian (not Latin) legitimized vernacular literature across Europe. Without Dante, Italian might not have become a literary language when it did.",
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
    r:0.35,reasoning:"Animation was developing at multiple studios. But Disney's specific vision - feature-length animated films as art, theme parks as immersive storytelling - was personal. Snow White was a bet no one else would have made.",
    counterfactual:"Without Disney, animation still develops - the Fleischer brothers, Warner Bros., and others were producing cartoons. But Disney's specific ambitions were unique: feature-length animated films as serious art (Snow White was called 'Disney's Folly'), theme parks as immersive storytelling environments. These were bets no one else would have made. Animation might have remained shorts. Theme parks might have stayed amusement parks.",
    ripples:[
      {category:"Feature Animation",detail:"Without Snow White's success, feature-length animation might not happen for decades. The form stays short."},
      {category:"Theme Parks",detail:"Disneyland's specific vision - immersive storytelling, not just rides - might not emerge. Theme parks stay carnivals."},
      {category:"Childhood Entertainment",detail:"The specific Disney formula - fairy tales, princesses, happy endings - doesn't become the default."},
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
    r:0.20,reasoning:"Van Gogh's style was unique - no one else painted with that emotional intensity and brushwork. He sold one painting in his lifetime but became the most influential post-Impressionist. His specific vision carried enormous weight.",
    counterfactual:"Without Van Gogh, Post-Impressionism still exists - Cézanne, Gauguin, Seurat were all working. But Van Gogh's specific contribution - the emotional intensity, the visible brushwork that captured inner states, the color as feeling - was uniquely his. Starry Night, Sunflowers, the Bedroom at Arles don't exist. Expressionism loses a crucial precursor. The 'tortured artist' narrative loses its central example.",
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
    r:0.35,reasoning:"Impressionism had multiple founders - Renoir, Pissarro, Degas. Monet was first among equals. His specific obsession with light and color was influential but the movement was collective. His Water Lilies were uniquely his.",
    counterfactual:"Without Monet, Impressionism still emerges - Renoir, Pissarro, Degas, Sisley were all moving in similar directions. The movement was a collective response to photography, to new paints, to painting outdoors. But 'Impression, Sunrise' named the movement, and Monet's later Water Lilies pushed toward abstraction. The specific trajectory toward abstract art might be different. Impressionism might be called something else.",
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
    counterfactual:"Without Coltrane, jazz still evolves in the 1960s - the forces pushing toward free jazz and fusion were broad. But Coltrane's specific contribution - the spiritual intensity, 'A Love Supreme' as sacred text, the 'sheets of sound' technique - was uniquely his. The bridge between bebop and free jazz looks different. Spiritual jazz might not exist as a category. The saxophone has a different central figure.",
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
    counterfactual:"Without Marley, reggae still exists - it was a Jamaican musical movement with many artists. But Marley's combination of musical genius, spiritual depth, and political consciousness made him the global ambassador. Without him, reggae might remain primarily a Caribbean genre. Rastafari doesn't get its global spokesman. 'One Love' doesn't become a universal anthem. Jamaica's global cultural influence is much smaller.",
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
    counterfactual:"Without Hendrix, electric guitar develops differently. Other great guitarists existed - Clapton, Beck, Page - but Hendrix's specific innovations in feedback, distortion, and effects were uniquely his. The wah-wah pedal doesn't get its definitive user. The Woodstock 'Star-Spangled Banner' doesn't exist. The range of what an electric guitar could do would be smaller.",
    ripples:[
      {category:"Guitar Technique",detail:"Feedback as art, the use of the whammy bar, effects pedals - these innovations don't happen the same way."},
      {category:"Woodstock",detail:"The festival's defining moment - the 'Star-Spangled Banner' - doesn't exist. Different cultural memory."},
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
    counterfactual:"Without Bowie, glam rock still emerges - the cultural moment was ready. But Bowie's specific contribution was proving that constant reinvention could be a career strategy. Ziggy Stardust, the Thin White Duke, Berlin-era electronica, 'Let's Dance' pop - each era was a new persona. Without him, pop music might be more about consistency. Gender fluidity in mainstream music comes later or differently.",
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
    counterfactual:"Without Joyce, modernist literature still exists - Woolf, Proust, Kafka were all experimenting. But the specific radical ambition of Ulysses - a single day in Dublin containing all of human experience, every chapter a different style - was uniquely Joyce's. Finnegans Wake's dream logic goes further than anyone else dared. Without him, the novel's experimental range is narrower. Literature remains more conventional.",
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
    r:0.25,reasoning:"Woolf's specific voice - interior, psychological, feminist - was unique. Others experimented; her combination of formal innovation and feminist thought was hers alone. She and Joyce transformed the novel independently.",
    counterfactual:"Without Woolf, modernist literature still exists - Joyce, Proust, Kafka were experimenting. But Woolf's specific combination of formal innovation and feminist thought was uniquely hers. 'A Room of One's Own' becomes a founding feminist text. Mrs Dalloway and To the Lighthouse explore female consciousness as no one else did. Without her, modernist literature has fewer female voices, and feminist literary criticism has a different foundation.",
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
    r:0.30,reasoning:"Dystopian fiction existed before Orwell. But 1984 specifically shaped how we talk about surveillance, propaganda, and totalitarianism. The vocabulary - Big Brother, doublethink, thoughtcrime - is now universal.",
    counterfactual:"Without Orwell, dystopian fiction still exists - Huxley's Brave New World, Zamyatin's We preceded 1984. But Orwell's specific vocabulary became how we discuss totalitarianism. 'Big Brother,' 'doublethink,' 'thoughtcrime,' 'Orwellian' - these terms wouldn't exist. We'd lack a common language for surveillance and propaganda. Animal Farm's critique of Soviet communism might come from someone else, but the specificity of 'some animals are more equal than others' might be lost.",
    ripples:[
      {category:"Political Vocabulary",detail:"Without 'Orwellian,' 'Big Brother,' 'doublethink,' we discuss surveillance and propaganda differently."},
      {category:"Soviet Critique",detail:"Animal Farm's specific allegory doesn't exist. Criticism of Stalinism takes different form."},
      {category:"Dystopian Fiction",detail:"Huxley's Brave New World might dominate. Different vision of dystopia - pleasure-based rather than fear-based."},
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
    counterfactual:"Without Spielberg, blockbuster cinema still emerges - Lucas was doing similar things, and the economic incentives were clear. But Spielberg's specific range is what carried the most weight: Jaws and ET for spectacle, Schindler's List and Saving Private Ryan for prestige. The idea that you could be both the most commercial and most respected director - that balance was his achievement. Hollywood's grammar for action, wonder, and sentiment would be different.",
    ripples:[
      {category:"Blockbuster Cinema",detail:"Jaws invented summer blockbusters. Without Spielberg, the phenomenon emerges differently - maybe Lucas leads it entirely."},
      {category:"Holocaust Memory",detail:"Schindler's List shaped how a generation understood the Holocaust. Different films, different public memory."},
      {category:"Sentimental Register",detail:"Spielberg's emotional style - wonder, childhood, family - influenced countless directors. Different aesthetic dominates."},
      {category:"Commercial-Art Balance",detail:"The idea that blockbuster directors could also win Oscars - that bridge was Spielberg's. Categories might stay more separate."}
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
    r:0.40,reasoning:"Pop music would have had other stars. But Beyoncé's specific combination - vocal talent, visual artistry, political content, perfectionism - is unique. Lemonade showed what pop albums could be. Her influence on Black female artists is profound.",
    counterfactual:"Without Beyoncé, pop music still has stars - Rihanna, Adele, and others fill airwaves. But Beyoncé's specific combination is unique: the vocal power, the visual perfectionism, the political content, the album as complete artistic statement. Lemonade as a meditation on Black womanhood, infidelity, and Southern heritage - that ambition for pop doesn't exist. The idea that a pop star could be an artist on that level, while maintaining maximum commercial success, wouldn't be proven.",
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
    counterfactual:"Without Confucius, Chinese philosophy still develops - Mozi, the Legalists, Daoists all compete. But the specific synthesis of virtue ethics, filial piety, and meritocratic governance that Confucius articulated doesn't become the dominant framework. The civil service examination system might never exist. East Asian civilization develops with a different operating system - perhaps more Legalist, more Daoist, or something entirely different.",
    ripples:[
      {category:"East Asian Governance",detail:"The civil service examination - selecting leaders by merit not birth - might not develop. Asian societies are structured differently."},
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
    counterfactual:"Without the Buddha, Indian spirituality continues to produce teachers and seekers. But the specific framework - Four Noble Truths, Eightfold Path, monastic sangha - doesn't exist. No Buddhism means no spread to China, Japan, Tibet, Southeast Asia. Hinduism dominates India without this major competitor. Asian civilization develops without meditation techniques, without 'nirvana,' without Buddhist art and philosophy.",
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
    counterfactual:"Without Socrates, there's no Plato as we know him - Plato's dialogues are about Socrates. Without Plato, Aristotle develops differently or not at all. The entire Western philosophical tradition flows from those Athenian conversations. The Socratic method of questioning might never develop. The examined life as ideal might not exist. Philosophy might remain cosmological (like the pre-Socratics) rather than ethical and epistemological.",
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
    counterfactual:"Without Plato, Socrates's teachings might be lost - we know Socrates primarily through Plato. The Academy, which lasted 900 years and trained Aristotle, doesn't exist. The Theory of Forms, the allegory of the cave, the Republic's political philosophy - gone. Western philosophy might develop from the pre-Socratics or from entirely different roots.",
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
    counterfactual:"Without Aristotle, knowledge systematization happens differently - the Stoics, Epicureans, and later Islamic scholars were capable. But his specific frameworks - syllogistic logic, the four causes, virtue ethics - don't dominate for two millennia. Islamic philosophy develops from different Greek sources. Medieval universities have different curricula. The scientific method might emerge from different foundations.",
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
    counterfactual:"Without Kant, someone eventually responds to Hume's skepticism - the problem was pressing. But the specific synthesis of rationalism and empiricism, the categorical imperative, transcendental idealism - these might not emerge. German idealism (Hegel, Fichte, Schelling) loses its foundation. Modern ethics lacks its dominant framework. The distinction between phenomena and noumena might not structure philosophy.",
    ripples:[
      {category:"Response to Hume",detail:"Hume's skepticism challenges philosophy. Without Kant's synthesis, different responses dominate - perhaps more empiricist."},
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
    counterfactual:"Without Nietzsche, critiques of Christian morality still emerge - the secularization was happening. But the specific concepts - the will to power, eternal recurrence, the Übermensch - don't enter philosophical vocabulary. Existentialism lacks a key precursor. Foucault, Derrida, and postmodernism develop from different sources. Even his (mis)appropriation by the Nazis doesn't happen.",
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
    counterfactual:"Without Marx, socialist and labor movements still emerge - industrial capitalism was creating obvious conflicts. Proudhon, Bakunin, or other socialists might dominate instead. But the specific framework - historical materialism, surplus value, class struggle as history's engine - doesn't exist. Communist states might never form, or form from different ideology. The entire 20th century looks different.",
    ripples:[
      {category:"Communist States",detail:"Without Marxism, revolutionary movements find different ideologies. The USSR, China might not exist in recognizable form."},
      {category:"Historical Materialism",detail:"The idea that economic conditions determine history doesn't become dominant. Different frameworks analyze social change."},
      {category:"Labor Movements",detail:"Workers still organize, but under different banners - perhaps anarchist, perhaps reformist social democratic."},
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
    counterfactual:"Without Luther, another reformer triggers the break - Zwingli, Calvin, and others were independently critical of Rome. The printing press made dissent spreadable. Church corruption was real. But the specific trajectory changes: different doctrinal emphasis (perhaps less faith-alone, more Zwinglian), different timing, different geography of Protestant/Catholic divide. The German Bible that shaped German language might not exist.",
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
    counterfactual:"Without Aquinas, the Aristotle-Christianity synthesis still happens - other scholastics were working on it. But Aquinas's specific achievement was making it orthodox: his natural law theory, his proofs of God's existence, his integration of reason and revelation. The Church could have rejected Aristotle as pagan; Aquinas made him safe. Without this synthesis, Catholic thought might be more Augustinian, more mystical, less systematic.",
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
    counterfactual:"Without Laozi - or whoever wrote the Tao Te Ching - Chinese civilization develops differently. Daoism might not exist as a coherent tradition. The concept of wu wei (non-action, effortless action) might not enter Chinese thought. The counterbalance to Confucian activism might be missing. Chinese medicine, art, and spirituality all absorbed Daoist ideas; without the foundational text, this integration doesn't happen.",
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
    r:0.20,reasoning:"Wittgenstein uniquely had two revolutionary phases. Both transformed their fields. His specific personality and insights were singular - no one else was thinking this way.",
    counterfactual:"Without Wittgenstein, analytic philosophy still exists - Russell, Frege, the Vienna Circle were working. But Wittgenstein uniquely had two revolutionary phases: the Tractatus seemed to solve philosophy's problems through logic, then the Investigations undermined his own earlier work and introduced 'language games.' No one else would have made both moves. Philosophy develops along one path rather than both.",
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
    counterfactual:"Without de Beauvoir, second-wave feminism still emerges - the social conditions were ripening. But 'The Second Sex' provided the philosophical framework. 'One is not born, but rather becomes, a woman' - the idea that gender is constructed rather than natural - was revolutionary. Without her, feminism might be more pragmatic, less theoretically grounded. Gender studies has different foundations.",
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
    r:0.35,reasoning:"Existentialism had multiple sources - Heidegger, Kierkegaard. Sartre made it a popular movement. His specific formulation was influential but built on others. His café philosopher image was partly self-creation.",
    counterfactual:"Without Sartre, existentialism remains academic - Heidegger was German and difficult, Kierkegaard was 19th century. Sartre made existentialism a café movement, a lifestyle, a political stance. The image of the engaged intellectual in post-war Paris is his creation. Without him, philosophy remains in universities. The specific formulas - 'existence precedes essence,' 'condemned to be free' - don't enter popular culture.",
    ripples:[
      {category:"Public Philosophy",detail:"Philosophy remains academic without Sartre's popularization. No café philosophy movement."},
      {category:"Political Engagement",detail:"The model of the politically engaged intellectual is weaker. Different post-war culture."},
      {category:"Existentialist Vocabulary",detail:"'Existence precedes essence,' 'bad faith,' 'condemned to be free' - these phrases don't enter culture."},
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
    counterfactual:"Without Arendt, we lack the concept of the 'banality of evil' - the idea that atrocities are committed by ordinary bureaucrats just doing their jobs. Her Eichmann coverage was controversial precisely because it challenged heroic narratives of evil. 'The Origins of Totalitarianism' provided the framework for understanding Nazism and Stalinism together. Without her, we understand 20th century political evil differently.",
    ripples:[
      {category:"Banality of Evil",detail:"This concept doesn't exist. We understand perpetrators of atrocities differently - perhaps more demonically."},
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
    counterfactual:"Without Foucault, critical theory still develops - the Frankfurt School, Derrida, Deleuze all contribute. But Foucault's specific contribution was showing how power operates through knowledge and discourse, not just through force. Prisons, asylums, sexuality - he showed how these institutions produce 'subjects.' Without him, we analyze power differently. The tools for critiquing institutions are different.",
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
    counterfactual:"Without Rawls, political philosophy still revives - the social movements of the 1960s demanded theoretical response. But Rawls's specific framework - the 'veil of ignorance' thought experiment, justice as fairness - dominated Anglo-American political philosophy for decades. Without him, the field might have developed along more communitarian or libertarian lines. Nozick's response wouldn't exist in the same form.",
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
    counterfactual:"Without Turing's 1950 paper, AI debates are framed differently. The question 'Can machines think?' might be asked, but the specific test - can a machine fool a human into thinking it's human? - doesn't become the benchmark. Church's lambda calculus handled computability, but Turing machines are more intuitive. The specific bridge between mathematics and philosophy of mind is different.",
    ripples:[
      {category:"AI Benchmark",detail:"The Turing Test doesn't exist. Different criteria for machine intelligence - perhaps more about behavior, less about deception."},
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
    counterfactual:"Without Hippocrates, Greek medicine still develops - the Hippocratic corpus was written by multiple authors over decades. But the specific ethical framework ('First, do no harm'), the separation of medicine from religion, the focus on natural causes rather than divine intervention - these might emerge differently. The Hippocratic Oath that guided medical ethics for 2,400 years might not exist. Medicine might have developed with different ethical foundations.",
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
    r:0.80,reasoning:"Fleming noticed mold killing bacteria but didn't develop penicillin for use - Florey and Chain did. Multiple researchers were investigating antibacterial agents. Sulfa drugs were already working.",
    counterfactual:"Without Fleming noticing the penicillin mold in 1928, antibiotics still emerge - sulfa drugs were already working, and multiple researchers were investigating antibacterial agents. Florey and Chain, who actually developed penicillin for medical use, might have discovered the mold themselves or developed other antibiotics. Fleming's contribution was observation; the antibiotic revolution was coming. The delay might have been 5-10 years.",
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
    counterfactual:"Without Jenner, vaccination still emerges - the folk knowledge that milkmaids didn't get smallpox was widespread, and variolation (deliberate infection with mild smallpox) was already practiced. Jenner's contribution was systematic testing and publication that made vaccination credible to the medical establishment. Someone else would have made the connection within 10-20 years. But that delay could have cost millions of lives.",
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
    counterfactual:"Without Nightingale, hospital reform still happens - the Crimean War's death rates were scandalous regardless. But her unique combination of statistical analysis (proving deaths came from disease, not wounds), political connections, media celebrity, and institution-building professionalized nursing in a specific way. Without her, nursing might have remained low-status menial work longer. Hospital mortality statistics might not have been collected as systematically.",
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
    r:0.65,reasoning:"Multiple labs were racing toward a polio vaccine. Sabin developed an oral version shortly after. His most distinctive contribution - refusing to patent - was ethical, not scientific.",
    counterfactual:"Without Salk, the polio vaccine still arrives within a few years - multiple labs were racing, and Sabin's oral vaccine came shortly after. Salk's most distinctive contribution wasn't scientific but ethical: when asked who owned the patent, he replied, 'The people. Could you patent the sun?' By forgoing billions in potential royalties, he made the vaccine available worldwide faster. That choice was personal, and a different developer might not have made it.",
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
    r:0.50,reasoning:"Lister applied Pasteur's germ theory to surgery - a logical step others could have made. His contribution was bridging laboratory science and surgical practice.",
    counterfactual:"Without Lister, antiseptic surgery still comes - Semmelweis had already demonstrated that hand-washing saved lives, and Pasteur's germ theory was spreading. But Lister specifically brought carbolic acid and systematic antiseptic technique to surgery. Without him, antiseptic surgery is delayed 5-10 years while others make the connection. In that window, more surgical patients die of infection. The specific technique might differ - alcohol, heat, other antiseptics - but the principle was coming.",
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
    counterfactual:"Without Ibn Sina, medieval medicine lacks its encyclopedic synthesis. The Canon of Medicine was the standard text in both Islamic and European medical schools for over 500 years. His systematic organization of Galenic medicine, his clinical observations, his concept of testing treatments - these shaped how medicine was taught. Without him, medical knowledge remains more fragmented, transmission to Europe happens differently.",
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
    r:0.40,reasoning:"Chinese government assembled hundreds of scientists. Tu's insight - low-temperature extraction - was crucial, but the institutional effort was massive.",
    counterfactual:"Without Tu Youyou, artemisinin is probably still discovered - the Chinese government had assembled hundreds of scientists in Project 523 to find antimalarials. But Tu's specific insight - using low-temperature extraction based on a 1,600-year-old text - was the breakthrough. Without her, the project might have taken years longer, and millions more would have died from drug-resistant malaria in the interim.",
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
    counterfactual:"Without Osler, medical education still reforms - the Flexner Report was coming, and German models were influential. But Osler's specific contribution was bedside teaching: students learning from actual patients, not just lectures. His humanistic approach - treating patients as people, not cases - was personally influential. Without him, medical education might be more scientific but less humane.",
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
    counterfactual:"Without Lister, antiseptic surgery still emerges - Semmelweis had shown hand-washing prevented infection, and Pasteur's germ theory was being published. The connection was logical. But Lister systematically applied carbolic acid to surgery and evangelized the technique against fierce resistance. Without his persistence, surgical infection rates remain high for another decade or two. Millions who could have survived surgery die.",
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
    counterfactual:"Without Barnard, the first heart transplant happens within weeks or months - Norman Shumway at Stanford was equally prepared and had done more animal research. Barnard got there first partly through willingness to take risks. The technique was ready; it was a race. The main difference would be who gets the fame. Shumway becomes the celebrity surgeon instead.",
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
    quote:"It is not easy to be a pioneer - but oh, it is fascinating!",
    contributions:["First US female MD","Medical College for Women","Public health advocacy","Women in medicine pathway"],
    r:0.35,reasoning:"Women were entering medicine in various places. Blackwell's specific achievement opened US medical education. Her influence on subsequent generations was direct. Someone would have broken the barrier; she did it and mentored others.",
    counterfactual:"Without Blackwell, women still enter medicine - the barrier would have fallen eventually. But Blackwell's specific achievement was being first in the US, then founding a medical college for women, then mentoring the next generation. Her influence on figures like Mary Putnam Jacobi and Rebecca Lee Crumpler was direct. Without her, women's medical education in the US is delayed by a decade or two, and the early mentorship network doesn't exist.",
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
    r:0.35,reasoning:"The Apgar Score - a simple, immediate assessment of newborn health - saved countless lives by ensuring quick response. Her specific contribution was recognizing what needed measurement. Others might have developed similar scores eventually.",
    counterfactual:"Without Apgar, newborn assessment still develops - the need was obvious. But Apgar's specific score - five measurements at one and five minutes, each scored 0-2, totaling 0-10 - was elegantly simple. It ensured immediate attention to struggling newborns. Without it, assessment might be more subjective, less consistent, and response slower. The 'Apgar Score' as a universal standard doesn't exist; something else, probably less elegant, takes its place.",
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
    counterfactual:"Without Folkman, angiogenesis therapy is significantly delayed - no one else was thinking about tumors this way in the 1960s. His insight that tumors recruit their own blood supply, and that blocking this could starve them, was dismissed for decades. He persisted against enormous skepticism. Without him, this entire class of cancer treatments - Avastin, etc. - might not exist for another 20-30 years. Cancer patients who benefited from these drugs die instead.",
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
    counterfactual:"Without Sabin, oral polio vaccine still emerges - other researchers were working on live attenuated vaccines. Hilary Koprowski was close. But Sabin's specific strains became the global standard because they had the best safety profile. Without him, the strains might be different, possibly with more side effects. Global polio eradication might be harder because the oral vaccine was key to mass campaigns.",
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
    counterfactual:"Without Salk, a polio vaccine still emerges - the research was massively funded with many teams working. Sabin's oral vaccine might come first instead. The killed-virus approach might be delayed or come from another researcher. The most significant difference is cultural: Salk's refusal to patent ('Could you patent the sun?') became a model for science as public good. Without this moment, the ethics of vaccine patents might develop differently.",
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
    counterfactual:"Without Turing, computability theory still emerges - Alonzo Church developed equivalent results independently. But Turing's specific contributions were uniquely his: the Turing machine as a conceptual tool is more intuitive than Church's lambda calculus. At Bletchley Park, others worked on Enigma, but Turing's Bombe machines accelerated decryption. WWII might have lasted longer, costing millions more lives. The Turing Test, framing AI as imitation, shaped how we think about machine intelligence.",
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
    counterfactual:"Without von Neumann, each of his fields develops differently. Game theory emerges via others (Nash, Morgenstern continued alone). Quantum mechanics formalization comes from Dirac's approach. The Manhattan Project has other brilliant physicists. But the von Neumann architecture - the stored-program concept that shaped all computers - might look different. The synthesis across fields that von Neumann uniquely provided doesn't happen.",
    ripples:[
      {category:"Computer Architecture",detail:"Without the von Neumann architecture, early computers develop differently. Harvard architecture might dominate. Programming paradigms change."},
      {category:"Game Theory",detail:"Game theory develops via Nash and others, but the 1944 book with Morgenstern doesn't exist. Economics adopts game theory later or differently."},
      {category:"Manhattan Project",detail:"The bomb is still built - others could do the calculations - but certain insights might be delayed."},
      {category:"Mathematical Methods",detail:"The synthesis across fields - computers, game theory, automata, quantum mechanics - doesn't happen in one person."}
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
    counterfactual:"Without Lovelace, the vision of what computers could be develops differently. Babbage designed the Analytical Engine, but Lovelace saw it could do more than calculation - she envisioned it composing music, creating patterns. Her Notes explained what the machine could become. Without her, Babbage is remembered as a calculator designer, not a proto-computer inventor. The conceptual vision of general-purpose computing has a different origin story. The practical timeline of computing doesn't change - her insights lay dormant until the 1930s anyway.",
    ripples:[
      {category:"Vision",detail:"Without Lovelace's Notes, the Analytical Engine is remembered as a calculator, not a proto-computer."},
      {category:"History",detail:"Computing history is narrated differently. Different origin story for the field."},
      {category:"Symbol",detail:"Ada Lovelace Day, the Ada programming language - different symbols for women in tech."},
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
    r:0.35,reasoning:"Greek mathematicians had proven most theorems. His contribution was organization - the axiomatic method. Brilliant synthesis, but the knowledge existed.",
    counterfactual:"Without Euclid, the mathematical knowledge still exists - other Greek mathematicians had proven the theorems. But the Elements' specific contribution was organization: the axiomatic method, starting from self-evident truths and building rigorously. This became the model for all mathematics and much philosophy. Without Euclid, geometry is taught differently, proof is conceptualized differently, and the axiomatic method might develop later.",
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
    counterfactual:"Without Gauss, mathematics still advances - others were working in each field. But Gauss was uniquely prolific and broad. The normal distribution might bear another name. The method of least squares might be credited solely to Legendre. Non-Euclidean geometry might be discovered more slowly. Number theory would lack its greatest contributor. Mathematics would be noticeably less advanced by 1855.",
    ripples:[
      {category:"Statistics",detail:"The normal distribution might bear another name. Statistical methods develop slightly differently."},
      {category:"Number Theory",detail:"The Disquisitiones Arithmeticae doesn't exist. Number theory develops without this organizing work."},
      {category:"Astronomy",detail:"Gauss's method for calculating orbits doesn't exist. Asteroid tracking develops differently."},
      {category:"Many Fields",detail:"Contributions to magnetism, optics, differential geometry all delayed. That breadth of impact is unmatched."}
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
    counterfactual:"Without Euler, mathematics develops more slowly - his output was simply too vast for any single successor to match. He invented modern mathematical notation (f(x), e, i, Σ). He founded graph theory with the Königsberg bridges. Euler's identity (e^(iπ) + 1 = 0) doesn't exist. The entire mathematical vocabulary and notation we use would be different. Mathematics would be decades behind.",
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
    r:0.15,reasoning:"Noether's theorem - every symmetry implies a conservation law - is one of the most profound results in physics. No one else was thinking in those terms.",
    counterfactual:"Without Noether, abstract algebra develops differently - she practically founded the field in its modern form. But her most profound contribution is Noether's theorem: that every symmetry in physics implies a conservation law. Energy conservation comes from time symmetry. Momentum conservation from space symmetry. This insight underlies all modern physics. Without her, the connection might not be made for decades.",
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
    counterfactual:"Without Shannon, information theory eventually emerges - the practical needs of communication drive it. But Shannon's 1948 paper created the field essentially complete in one work. No one else was thinking about communication as a mathematical problem in this way. The concept of the 'bit' as fundamental unit, the channel capacity theorem, the separation of source and channel coding - all from one paper. Digital communication might be delayed by a decade or more.",
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
    counterfactual:"Without Berners-Lee, the web still emerges - hypertext existed, the internet existed, the need was clear. But his specific design choices - HTTP as stateless protocol, HTML as simple markup, URLs as universal addressing - shaped everything. Another inventor might have created something more proprietary, more complex, less open. The commercial internet might have looked more like CompuServe or AOL. The open, decentralized web we know might not exist.",
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
    counterfactual:"Without Hopper, compilers still develop - the idea was emerging. But Hopper's specific contributions and advocacy were influential. COBOL might look different or not exist. The idea that programming should be accessible to non-mathematicians might develop more slowly. Her cultural role as 'Amazing Grace' - making computing seem approachable - carried its own weight.",
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
    counterfactual:"Without Jobs, personal computers and smartphones still arrive - the technology was developing regardless. But Apple doesn't become Apple. The specific design philosophy - obsessive integration of hardware and software, 'it just works,' the aesthetic minimalism - doesn't dominate consumer electronics. The iPhone might never exist in its form; touchscreen smartphones emerge via Nokia, Blackberry, or Google with different designs. Pixar might not succeed without Jobs's leadership during the Disney conflict.",
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
    counterfactual:"Without Torvalds, Unix-like open source operating systems still emerge - BSD was available, and the hacker community was building free software. But Linux's specific development model - 'benevolent dictator,' bazaar-style development, Torvalds's stewardship - might not exist. The dominant server OS might be FreeBSD or something else. Git, which transformed how all software is developed, doesn't exist. The open source movement looks different without Linux's success story.",
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
    counterfactual:"Without Page and Brin, search engines still dominate the internet - AltaVista, Yahoo, and others were functional. But PageRank was elegantly effective: using link structure to determine relevance rather than just keyword matching. Google's clean interface, speed, and ad business model were execution brilliance. Without them, Yahoo or Microsoft might dominate search. The internet is organized differently. Perhaps less effectively, perhaps equally well through different methods.",
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
    counterfactual:"Without Lovelace, Babbage's Analytical Engine is still designed - it was his project. But her notes, including the first algorithm intended for machine computation, don't exist. More importantly, her vision that the engine could manipulate symbols beyond mere numbers - potentially composing music, etc. - was uniquely hers. Babbage saw a calculator; Lovelace saw a computer. Without her, the conceptual leap to general-purpose computing might be delayed by decades.",
    ripples:[
      {category:"Computing Vision",detail:"The idea that machines could manipulate symbols beyond numbers - compose music, process language - might emerge later."},
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
    counterfactual:"Without Cerf and Kahn, the internet still develops - packet switching existed, ARPANET was funded, others were working on networking. But TCP/IP's specific design decisions shaped everything: the end-to-end principle, the separation of layers, the way packets are addressed. Different architects might have created something more centralized, more proprietary, less flexible. The open, decentralized internet we know might not exist.",
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
    counterfactual:"Without Altman, GPT technology still develops - the research was happening at OpenAI, Google, Anthropic, and elsewhere. But Altman's specific contribution was commercialization: the decision to release ChatGPT publicly, the partnership with Microsoft, the aggressive deployment strategy. Without him, AI advances might stay in research labs longer. The AI moment of 2023 might be delayed a year or two, or look different - perhaps Google leads instead, perhaps deployment is slower.",
    ripples:[
      {category:"ChatGPT Launch",detail:"ChatGPT's specific launch and timing was Altman's decision. Different timing, different public reaction, different political response."},
      {category:"Microsoft Partnership",detail:"The specific Microsoft deal might not happen. AI deployment proceeds through different corporate structures."},
      {category:"AI Race",detail:"The specific competitive dynamics - Google's panic, Anthropic's founding - might play out differently."},
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
    counterfactual:"Without Smith, economics still emerges as a discipline - the Physiocrats in France were developing economic theory, and the Scottish Enlightenment produced multiple social theorists. But Smith's specific synthesis - the invisible hand, division of labor analysis, the moral philosophy underlying markets - was uniquely his. The Wealth of Nations became the founding text; without it, economics might have developed from different principles, perhaps more mercantilist or physiocratic.",
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
    counterfactual:"Without Keynes, the Great Depression still discredits classical economics - the failure was too obvious. Governments still intervene (they had to). But the theoretical framework justifying intervention might be different. Keynes provided intellectual legitimacy for what politicians were doing anyway. Without him, demand-side economics might be called something else, justified differently, or might face stronger intellectual opposition.",
    ripples:[
      {category:"Depression Response",detail:"Governments still intervene - they had no choice - but without clear theory. Policy is more ad hoc, less systematic."},
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
    counterfactual:"Without Morgan, the Panic of 1907 is much worse. Morgan personally stopped the collapse by locking bankers in his library until they agreed to a rescue. No one else had the combination of wealth, authority, and sheer will to do this. A worse panic might have meant earlier creation of the Federal Reserve - or a deeper depression that changed American capitalism. The fact that one man could save the economy terrified everyone; the Fed was created to ensure it never happened again.",
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
    counterfactual:"Without Mansa Musa, the Mali Empire still exists and is still wealthy - the gold mines don't disappear. But Musa's specific choices - the legendary hajj that distributed so much gold it crashed Mediterranean prices for a decade, the investment in Timbuktu as intellectual center - were his personal vision. A different mansa might have hoarded wealth, or spent it differently. Mali remains obscure to the wider world; Timbuktu doesn't become a center of Islamic learning.",
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
    counterfactual:"Without Yunus, microfinance eventually emerges - the idea of lending small amounts to poor entrepreneurs isn't unique. But Yunus's specific innovation was institutional: proving it could work at scale, creating the Grameen Bank model, and evangelizing the concept globally. Without him, microfinance might remain informal or develop decades later. Millions who started small businesses with Grameen loans don't get that opportunity when they needed it.",
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
    counterfactual:"Without Buffett, value investing still exists - Ben Graham invented it, and others practice it successfully. But Buffett's extraordinary track record over 60+ years proved the strategy works better than academic theory suggested. His folksy wisdom made complex investing accessible. The Giving Pledge, convincing billionaires to donate half their wealth, might not exist. Berkshire Hathaway doesn't become the unique conglomerate it is.",
    ripples:[
      {category:"Value Investing Proof",detail:"Without Buffett's track record, value investing remains more theoretical. Different proof points, different investment culture."},
      {category:"Giving Pledge",detail:"Without Buffett co-founding it with Gates, billionaire philanthropy might not have this specific commitment mechanism."},
      {category:"Investment Culture",detail:"Buffett's annual letters educated a generation. Without them, financial literacy develops differently."},
      {category:"Berkshire Hathaway",detail:"The specific conglomerate - GEICO, See's Candies, etc. - doesn't exist. Different corporate structure."}
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
    r:0.50,reasoning:"E-commerce was coming. Others were building online retail. Bezos's specific execution - ruthless focus, long-term thinking - made Amazon dominant. But some e-commerce giant would have emerged.",
    counterfactual:"Without Bezos, e-commerce still happens - the technology enabled it, and others were building online retail. But Amazon's specific dominance might not occur. Bezos's particular genius was long-term thinking: accepting losses for years to build infrastructure, AWS emerging from internal needs, the relentless focus on customer experience. A different company wins e-commerce, possibly with different model - higher margins, less infrastructure investment. The cloud might develop differently without AWS.",
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
    r:0.55,reasoning:"Social networking was emerging. Friendster, MySpace existed. Zuckerberg's specific choices - college-only launch, real names, acquisition strategy - built dominance. But social networks were coming regardless.",
    counterfactual:"Without Zuckerberg, social networking still emerges - Friendster and MySpace proved the demand existed. But Facebook's specific dominance might not happen. Zuckerberg's key decisions - starting college-only for exclusivity, requiring real names, the aggressive acquisition of Instagram and WhatsApp - built monopoly power. Social networking might be more fragmented: MySpace for music, LinkedIn for professionals, regional networks. The concentration of social media in one company might not occur.",
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
    counterfactual:"Without Musk, electric vehicles and commercial space both develop - the technology was advancing and others were working on both. But Musk accelerated timelines by 5-10 years through sheer will: Tesla proved EVs could be desirable, not just practical; SpaceX proved rockets could land and be reused. Without this acceleration, climate transition is slower, space access more expensive longer. Others eventually succeed, but later.",
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
    counterfactual:"Without Ricardo, classical economics still develops - Smith laid the foundation, and many were contributing. But Ricardo's specific concept of comparative advantage might not be formulated so clearly. The argument that countries benefit from trade even if one is more efficient at everything - this counterintuitive insight might take longer to articulate. Free trade arguments would be weaker; protectionism might be more intellectually respectable.",
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
    counterfactual:"Without Schumpeter, economics still develops - business cycles were studied by many. But his specific framework is missing: creative destruction, the entrepreneur as hero, innovation as the driver of capitalism. Without this, Silicon Valley's ideology is different. The celebration of 'disruption' doesn't have its intellectual foundation. Capitalism is understood more statically, less dynamically.",
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
    counterfactual:"Without Hayek, critiques of central planning still exist - Mises, his teacher, made similar arguments. But Hayek's specific contribution - the knowledge problem, the argument that central planners can never have enough information - is missing in its clearest form. The Road to Serfdom doesn't galvanize opposition to socialism. Thatcher and Reagan have different intellectual heroes or no such figure. Market liberalism might be weaker intellectually.",
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
    counterfactual:"Without Columbus, the Americas are still 'discovered' by Europeans within 10-20 years - the Portuguese were sailing down Africa, the Spanish were probing the Atlantic, and Cabot reached North America in 1497 anyway. But the timing matters: every decade of delay means different indigenous populations, different colonial patterns, different diseases spreading at different times. The Columbian Exchange still happens; the specific demographics and power dynamics might differ.",
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
    counterfactual:"Without Armstrong, Aldrin walks on the moon first - he was right there. Or a different crew rotation puts different astronauts on Apollo 11. The specific phrase 'one small step for man' doesn't exist; different words are remembered. The Moon landing was a program achievement involving 400,000 people; any of dozens of astronauts could have commanded the mission. Armstrong's humility and reluctance to profit made him a particular kind of hero.",
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
    counterfactual:"Without Humboldt, scientific exploration still happens - the era of expeditions was beginning. But Humboldt's unique synthesis - measuring everything, connecting phenomena across disciplines, seeing nature as interconnected whole - was personal genius. He directly influenced Darwin (who took Humboldt's books on the Beagle), Thoreau, Muir, and the entire tradition of ecological thinking. Without him, environmentalism might emerge later or differently.",
    ripples:[
      {category:"Darwin's Development",detail:"Darwin explicitly credited Humboldt as inspiration. Without Personal Narrative, the Beagle voyage is framed differently."},
      {category:"Ecological Thinking",detail:"The idea of nature as interconnected system - ecosystems - might emerge later without Humboldt's synthesis."},
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
    counterfactual:"Without Gagarin, another cosmonaut orbits Earth in April 1961 - Titov, Nelyubov, or another of the trained cosmonauts. The technological achievement was the program's. Gagarin was selected partly for charisma and humble background (perfect Soviet hero). Someone else becomes the symbol of human spaceflight. The 108-minute orbit still happens; different person is remembered.",
    ripples:[
      {category:"Soviet Symbol",detail:"Different cosmonaut becomes the face of Soviet space achievement. Different propaganda, different hero."},
      {category:"Space Race",detail:"The American response is the same - Kennedy's Moon speech was about program, not person."},
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
    counterfactual:"Without Magellan, circumnavigation still happens within decades - Spanish and Portuguese were racing for it. But Magellan's specific achievement was getting through the strait that bears his name: months of searching, mutiny suppressed, determination beyond reason. Another captain might have turned back. The Pacific crossing might have happened differently - possibly around Africa first, possibly later. The specific route and timing were his contribution.",
    ripples:[
      {category:"Timing",detail:"Circumnavigation delayed by years to decades. Different captain, different route, different timing."},
      {category:"Strait of Magellan",detail:"Someone else finds and names it. Different name, different circumstances of discovery."},
      {category:"Pacific Knowledge",detail:"The vastness of the Pacific - Magellan's crew nearly starved crossing it - is learned differently."},
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
    counterfactual:"Without Cook, the Pacific is still mapped - French, Dutch, and Spanish were all exploring. But Cook's specific contribution was methodology: systematic charting, scientific observation, scurvy prevention through diet. His three voyages mapped more Pacific coastline than all predecessors combined. Australia might be 'discovered' by the French (who arrived weeks after Cook). The model of scientific exploration - bringing naturalists, making observations - might develop differently.",
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
    counterfactual:"Without Amundsen, Scott reaches the South Pole first - and survives, probably. Scott's party died partly because they arrived exhausted, 34 days after Amundsen, and found the Norwegian flag already there. The psychological blow of losing the race contributed to their fatal decisions. Without Amundsen, Scott wins, becomes a hero of success rather than heroic failure. The lesson of polar exploration - careful planning beats suffering - is learned differently.",
    ripples:[
      {category:"Scott's Fate",detail:"Without Amundsen, Scott reaches the Pole first and probably lives. Hero of success, not martyrdom."},
      {category:"British Identity",detail:"Scott's death became central to British identity - noble failure. Without Amundsen, different national mythology."},
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
    r:0.30,reasoning:"Shackleton's achievement was leadership, not exploration. When Endurance was crushed, his decisions saved all 27 men over 22 months. Another leader might have lost them. His specific character was the decisive factor in that situation.",
    counterfactual:"Without Shackleton, the Endurance expedition probably ends in disaster. When the ship was crushed by ice, survival required 22 months of perfect leadership decisions: maintaining morale on the ice, the 800-mile open boat journey to South Georgia, crossing unmapped mountains. These decisions were Shackleton's character made manifest. A different leader - more rigid, less attuned to men's morale, less willing to take calculated risks - likely loses some or all of the 27 men. Shackleton's failure as explorer became the greatest leadership story ever told.",
    ripples:[
      {category:"Crew Survival",detail:"Without Shackleton's specific decisions, some or all of the 27 men die. The expedition becomes tragedy, not triumph."},
      {category:"Leadership Model",detail:"The Shackleton model of leadership under crisis - prioritizing morale, adapting constantly - doesn't exist as clearly."},
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
    r:0.35,reasoning:"The fossils were in the ground; someone would have found them. But Leakey's decades of work and mentorship - training Goodall, Fossey, Galdikas - created a research tradition. His family continued discoveries.",
    counterfactual:"Without Leakey, human origins are still discovered in Africa - the fossils were waiting. But Leakey's decades at Olduvai Gorge, his insistence on Africa as humanity's cradle, his mentorship of Goodall, Fossey, and Galdikas - these created a research tradition. Without him, the 'Trimates' might never have studied apes. The timing of key discoveries would differ. Human origins might have been understood a decade later.",
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
    r:0.45,reasoning:"The Lewis and Clark expedition had other guides. Sacagawea's specific contributions - Shoshone language, local knowledge, diplomatic presence - were valuable but the expedition might have succeeded differently.",
    counterfactual:"Without Sacagawea, Lewis and Clark still succeed - they had other guides, they were determined, the route was passable. But her specific contributions mattered: Shoshone translation when they needed horses, local plant knowledge for survival, her presence signaling peaceful intentions. The expedition might have had more violent encounters with Native peoples, might have taken longer. Her symbolic importance - a young mother with an infant crossing the continent - wouldn't exist.",
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
    counterfactual:"Without Heyerdahl, experimental archaeology develops more slowly. His Kon-Tiki voyage - crossing the Pacific on a balsa raft to prove Polynesian settlement could have come from South America - captured global imagination. He was wrong about the direction of migration, but right that the voyage was possible. Without him, the methodology of testing ancient capabilities through recreation might not become mainstream. Archaeology remains more theoretical.",
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
    r:0.35,reasoning:"The civil rights movement had many leaders. Movement would have continued without King. But his specific voice - rhetorical genius, theological grounding - shaped how the movement was received.",
    counterfactual:"Without King, the civil rights movement still happens - the structural conditions, the NAACP, SNCC, CORE, countless local leaders all existed. But King's specific gifts - rhetorical genius, theological framing, appeal to white conscience - shaped how the movement succeeded. Without his 'I Have a Dream' speech, the March on Washington is remembered differently. Without his nonviolent philosophy, the movement might have turned violent earlier, provoking harsher backlash.",
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
    r:0.40,reasoning:"The Underground Railroad had many conductors. Tubman's unique contribution was personal courage and symbolic power - an escaped slave returning repeatedly to the South.",
    counterfactual:"Without Tubman, the Underground Railroad still operates - hundreds of conductors helped thousands escape. But Tubman's specific contribution was symbolic and inspirational: an escaped slave who returned to the South 13 times, risking death to free others. 'Moses' became a legend that proved Black agency and courage. Without her, the abolitionist movement has different symbols, different proof of what was possible.",
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
    counterfactual:"Without Douglass, the abolitionist movement still exists - Garrison, Tubman, countless others were active. But Douglass's unique contribution was embodiment: an escaped slave whose brilliance disproved every racist argument about Black capacity. His Narrative was the most powerful anti-slavery document written. His advice to Lincoln shaped the war's meaning. Without him, abolitionism has weaker intellectual force.",
    ripples:[
      {category:"Abolitionist Argument",detail:"Without Douglass's Narrative and speeches, the intellectual case against slavery is weaker. Racist arguments less effectively countered."},
      {category:"Lincoln's Decisions",detail:"Douglass pushed Lincoln toward emancipation and Black enlistment. Without this influence, these decisions might come later or look different."},
      {category:"Post-War Rights",detail:"Douglass advocated for voting rights and equal citizenship. Without his voice, Reconstruction might proceed differently."},
      {category:"Self-Made Man",detail:"Douglass embodied the 'self-made man' - escaping slavery to become advisor to presidents. Different myth without him."}
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
    counterfactual:"Without Parks, the Montgomery Bus Boycott still happens - civil rights leaders were looking for a test case, and Claudette Colvin had refused to give up her seat months earlier. Parks was chosen because of her character and NAACP connections. Someone else becomes the symbol. The boycott still succeeds because the community was organized and ready. Parks became the symbol; the movement created the moment.",
    ripples:[
      {category:"Civil Rights Symbol",detail:"Claudette Colvin or another person becomes the face of the Montgomery boycott. Different person, same result, different memory."},
      {category:"Boycott Success",detail:"The boycott succeeds regardless - the organization was ready, the community was mobilized."},
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
    counterfactual:"Without Toussaint, the Haitian Revolution almost certainly fails - like every other slave revolt in history. Toussaint's unique combination of military genius (defeating French, Spanish, and British forces), political skill (navigating between empires), and diplomatic acumen (keeping Haiti's economy functioning) made success possible. No other figure could have unified the enslaved, free people of color, and European powers into a path to independence. Haiti remains enslaved; the entire history of the Americas changes.",
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
    counterfactual:"Without Chávez, farm worker organizing continues - others tried before him. But Chávez's specific combination made UFW succeed where others failed: his nonviolent philosophy (learned from Gandhi through the civil rights movement), his consumer boycott strategy, his charismatic leadership. The grape boycott that changed the industry was his innovation. Without him, farm workers remain more exploited for longer; the Latino civil rights movement lacks its most visible figure.",
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
    r:0.35,reasoning:"Suffrage movements existed before Pankhurst. Her specific contribution was militancy - direct action that forced attention. Peaceful suffragists were making progress; she accelerated through controversy.",
    counterfactual:"Without Pankhurst, British women's suffrage still happens - the suffragists were making progress through peaceful means. But Pankhurst's specific contribution was militancy: window-smashing, arson, hunger strikes. Whether this accelerated or delayed the vote is debated by historians. But she forced the issue into public consciousness in ways peaceful protest hadn't. Without her, the suffrage movement is remembered differently - less dramatic, possibly slower, possibly faster without the backlash.",
    ripples:[
      {category:"Militant Tactics",detail:"The model of militancy in social movements - forcing attention through disruption - develops differently."},
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
    r:0.45,reasoning:"Second-wave feminism had many voices - Friedan, hooks, others. Steinem's specific contribution was making feminism mainstream through media savvy. The movement would have continued; she gave it a particular face.",
    counterfactual:"Without Steinem, second-wave feminism still happens - Friedan, hooks, and many others were pushing for change. But Steinem's specific contribution was media presence: glamorous, articulate, able to reach mainstream audiences. Ms. Magazine brought feminist ideas to kitchen tables. Without her, feminism might have been more academic, more radical-seeming, less accessible. The movement happens; the mainstreaming happens differently.",
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
    r:0.30,reasoning:"Her specific story - shot by Taliban for advocating girls' education, survived, amplified message globally - is unique. The cause existed; she became its symbol through personal courage and circumstance.",
    counterfactual:"Without Malala, girls' education advocacy continues - the cause existed before her. But her specific story - a teenager shot by the Taliban for advocating education, surviving, becoming a global voice - is unique and unrepeatable. No other figure has this combination of personal courage, compelling narrative, and global platform. Without her, the cause has less visible symbol; international attention is harder to generate; the specific framing of girls' education as existential threat to extremism doesn't crystallize the same way.",
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
    counterfactual:"Without Parks, the Montgomery Bus Boycott still happens - civil rights leaders were looking for a test case, and Claudette Colvin had refused to give up her seat months earlier. Parks was chosen because of her character and NAACP connections. Someone else becomes the symbol. The boycott still succeeds because the community was organized and ready. Parks became the symbol; the movement created the moment.",
    ripples:[
      {category:"Civil Rights Symbol",detail:"Claudette Colvin or another person becomes the face of the Montgomery boycott. Different person, same result, different memory."},
      {category:"Boycott Success",detail:"The boycott succeeds regardless - the organization was ready, the community was mobilized."},
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
    r:0.35,reasoning:"Settlement houses were emerging in multiple cities. Hull House was the model. Addams's specific vision - immigrants as neighbors, not charity cases - was influential. She defined social work as profession.",
    counterfactual:"Without Addams, settlement houses still emerge - the idea came from England and others were starting them in American cities. But Hull House became the model, and Addams's specific vision - that settlement workers should be neighbors, not missionaries, that immigrants had culture and dignity - shaped the entire profession of social work. Without her, the profession might be more paternalistic, more focused on 'fixing' the poor rather than empowering them.",
    ripples:[
      {category:"Social Work Profession",detail:"The profession develops with different philosophical foundations. Possibly more paternalistic, less community-based."},
      {category:"Hull House",detail:"The specific model of Hull House - a center for arts, education, and community - doesn't exist."},
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
    r:0.30,reasoning:"His concept of education as liberation - that the oppressed must become agents of their own education - transformed how we think about learning. No one else was thinking about education this way.",
    counterfactual:"Without Freire, critical pedagogy doesn't exist - at least not in this form. His concept that education is never neutral, that traditional teaching is 'banking' knowledge into passive students, that the oppressed must become agents of their own liberation through dialogue - these ideas were uniquely his. Without Pedagogy of the Oppressed, adult education remains technical (teaching skills, not consciousness). Education is understood as politically neutral longer.",
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
    r:0.30,reasoning:"Malcolm's voice - militant where King was nonviolent, internationalist where others were domestic - expanded the civil rights conversation. His evolution from separatism to human rights was unique. His assassination cut short continued evolution.",
    counterfactual:"Without Malcolm X, the civil rights movement is less ideologically diverse. King's nonviolent philosophy has no major counterweight. Black nationalism exists but lacks its most articulate spokesman. The 'by any means necessary' philosophy doesn't enter the mainstream. Malcolm's evolution - from Nation of Islam separatism to pan-African human rights - doesn't happen, removing a powerful model of intellectual growth. His assassination at 39 cut short what might have been.",
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
    counterfactual:"Without Sanger, birth control technology still develops - the science was advancing. But the infrastructure for access might not exist. Sanger's specific contribution was advocacy, institution-building (Planned Parenthood), and legal battles that made contraception available. Her eugenics associations complicate her legacy, but her organizational work was unique. Without her, contraception remains illegal longer; women have fewer options; the reproductive rights movement develops differently.",
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

