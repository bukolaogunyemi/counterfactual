// Inventions database
export const INVENTIONS = [
  {id:"printingpress",name:"Printing Press",born:1440,died:null,cat:"inventions",field:"Communication Technology",
    quote:"The printing press is the greatest weapon in the armoury of the modern commander. - T.E. Lawrence",
    contributions:["Mass book production","Literacy spread","Scientific Revolution catalyst","Protestant Reformation enabled"],
    r:0.50,reasoning:"Gutenberg developed movable type, but Koreans had it earlier. Chinese invented printing centuries before. European conditions - commercial economy, alphabet, paper availability - made it transformative. Someone in Europe would have developed it soon.",
    counterfactual:"Without Gutenberg, movable type still reaches Europe - it already existed in Korea, and European conditions (alphabetic writing, commercial economy, paper availability) were ripe. But the delay of 20-50 years matters enormously. The Protestant Reformation might happen without printed pamphlets spreading Luther's ideas. The Scientific Revolution might be delayed. The specific trajectory of modernity - mass literacy, democratized knowledge - unfolds differently.",
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
    r:0.90,reasoning:"Multiple civilizations developed wheels independently - Mesopotamia, Indus Valley, likely others. The concept is intuitive from rolling logs. The specific timing could differ; the invention was inevitable given pottery and transport needs.",
    counterfactual:"Without the wheel in Mesopotamia, it's invented elsewhere - perhaps Indus Valley, perhaps China, perhaps independently multiple times. The concept is observable from rolling logs. But the delay matters: pottery develops differently, chariots arrive later, the gears that drive all machinery come slower. Pre-Columbian Americas developed sophisticated civilizations without wheels for transport, showing alternative paths exist.",
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
    r:0.95,reasoning:"Fire was discovered, not invented - natural fires exist. Multiple hominin species controlled fire independently. The knowledge spread and was rediscovered repeatedly. Completely inevitable given human observation.",
    counterfactual:"Fire control was inevitable - natural fires happen constantly, and observing that fire is useful for warmth, protection, and cooking requires no genius. Multiple hominin species mastered fire independently. The only question is timing. Even a delay of millennia would eventually be overcome. Human evolution and the expansion out of Africa might be delayed, but fire mastery is as inevitable as tool use.",
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
      {year:2025,happened:"Fire remains fundamental technology",alternate:"No change - fire control was inevitable"}
    ],
    impact:{lives:"Human evolution enabled",econ:"All thermal technology",cultural:"Civilization foundation",reach:"All humanity",timeline:"Fire control universal regardless"}},
  
  {id:"electricity",name:"Practical Electricity",born:1879,died:null,cat:"inventions",field:"Energy Technology",
    quote:"We will make electricity so cheap that only the rich will burn candles. - Thomas Edison",
    contributions:["Electric lighting","Power grids","Motors and appliances","Modern civilization foundation"],
    r:0.80,reasoning:"Multiple inventors developed electric lighting - Swan in England, Yablochkov's arc lamps. Edison systematized it. AC power came from Tesla and Westinghouse. The components were being developed by dozens of researchers. Edison accelerated by years, not decades.",
    counterfactual:"Without Edison, practical electricity still comes - Swan was developing light bulbs in England simultaneously, arc lamps already existed, and the science was understood. Edison's genius was systematization: the power grid, the business model, the light bulb as part of a system. Someone else builds this system, but perhaps with different standards, different economics. AC power (Tesla, Westinghouse) might dominate earlier.",
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
    quote:"One sometimes finds what one is not looking for. - Alexander Fleming",
    contributions:["First widely-used antibiotic","200M+ lives saved","Antibiotic era begun","Surgical safety enabled"],
    r:0.75,reasoning:"Fleming noticed mold killing bacteria but didn't develop it. Florey and Chain made it usable. Multiple labs were investigating antibacterial agents. Sulfa drugs were already working. Antibiotics were coming; penicillin was one discovery among several.",
    counterfactual:"Without Fleming's accidental discovery, antibiotics still arrive - sulfa drugs were already working by 1935, and multiple labs were investigating antibacterial agents. Penicillin might be discovered later (the mold is common), or different antibiotics might dominate first. The antibiotic era still begins, but perhaps with streptomycin or another compound leading. The specific trajectory differs; the revolution happens regardless.",
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
    quote:"The deviation of man from the state in which he was originally placed by nature seems to have proved to him a prolific source of diseases. - Edward Jenner",
    contributions:["Smallpox eradication","Disease prevention paradigm","Polio near-eradication","COVID vaccines"],
    r:0.60,reasoning:"Variolation (using smallpox itself) was practiced for centuries. Folk knowledge about cowpox existed. Jenner systematized and legitimized it. Multiple people were experimenting. The specific path might differ but immunization concept was emerging.",
    counterfactual:"Without Jenner, vaccination still emerges - variolation was already practiced, folk knowledge about cowpox protecting milkmaids existed, and others were experimenting. But Jenner's systematization and promotion were valuable. The concept might take 20 more years to become accepted science. Smallpox eradication is delayed. The paradigm of preventive medicine develops from different roots.",
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
    quote:"The Internet is becoming the town square for the global village of tomorrow. - Bill Gates",
    contributions:["Global communication network","World Wide Web enabled","E-commerce platform","Information access transformed"],
    r:0.60,reasoning:"Packet switching developed independently (Davies in UK, Baran in US). ARPANET was military-funded but university-driven. French Minitel showed alternative paths. Some global network was coming; the specific form (protocols, governance) was contingent.",
    counterfactual:"Without ARPANET, global computer networks still emerge - the British NPL network, French Minitel, and various corporate networks showed alternative paths. Packet switching was invented independently by Davies and Baran. But the specific protocols (TCP/IP), the open architecture, the academic culture that shaped the early internet - these might be different. A more commercial, less open network might have emerged. The web might look very different.",
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
    quote:"Mr. Watson, come here, I want to see you. - Alexander Graham Bell",
    contributions:["Voice communication at distance","Telecommunications industry","Social connection enabled","Emergency services possible"],
    r:0.85,reasoning:"Gray filed a patent the same day as Bell. Meucci had earlier devices. Reis transmitted speech in 1861. Multiple inventors were converging. Bell won the patent race; the invention was coming regardless.",
    counterfactual:"Without Bell, the telephone still arrives - Elisha Gray filed a patent the same day, Meucci had earlier devices, and Reis transmitted speech in 1861. The invention was inevitable given the underlying science of electromagnetism. Bell won a patent race; someone else wins instead. The telecommunications industry develops from a different corporate foundation. AT&T doesn't exist in the same form.",
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
    quote:"Nothing has spread socialistic feeling more than the automobile. - Will Rogers",
    contributions:["Personal transportation","Suburban development","Oil economy creation","Global mobility"],
    r:0.75,reasoning:"Internal combustion engines were developed by multiple inventors. Benz, Daimler, and others were all building motorized vehicles in the 1880s. The specific form might vary, but personal motorized transport was coming.",
    counterfactual:"Without Benz, the automobile still arrives - Daimler, Maybach, and others were all building motorized vehicles in the 1880s. Internal combustion engines were being refined by many inventors. The car might take slightly different form (perhaps Otto's designs dominate), but personal motorized transport was coming. The oil economy, suburban development, and car culture all still emerge.",
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
    quote:"For once you have tasted flight you will walk the earth with your eyes turned skyward. - Leonardo da Vinci",
    contributions:["Air travel","Air warfare","Global connectivity","Space exploration foundation"],
    r:0.65,reasoning:"Multiple inventors were attempting powered flight. Santos-Dumont flew in 1906, disputed Wright's priority. Langley's attempt crashed nine days before Wrights succeeded. The engineering was becoming possible; the Wrights got there first through superior method.",
    counterfactual:"Without the Wright Brothers, powered flight still arrives - Santos-Dumont flew publicly in 1906, Langley's attempt failed days before the Wrights succeeded, and multiple European inventors were close. The Wrights' key contribution was systematic engineering methodology. Someone else figures it out within 5 years. The airplane still transforms warfare (WWI is still an air war) and travel.",
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
    quote:"A computer would deserve to be called intelligent if it could deceive a human into believing that it was human. - Alan Turing",
    contributions:["Digital revolution","Automation enabled","Internet possible","AI foundation"],
    r:0.55,reasoning:"Multiple teams built early computers simultaneously - ENIAC, Colossus, Z3, ABC. The theoretical foundations (Turing, von Neumann) were shared. No single inventor; the technology emerged from collective wartime and postwar effort.",
    counterfactual:"Without any single team, electronic computers still emerge - ENIAC, Colossus, Z3, ABC were all developed semi-independently during WWII. The theoretical foundations (Turing, von Neumann) were shared across the field. No single inventor was essential; the technology emerged from collective wartime necessity. The digital revolution still happens, perhaps with different initial architectures.",
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
    quote:"The transistor was probably the most important invention of the 20th century. - Nobel Committee",
    contributions:["Miniaturized electronics","Computers practical","Mobile devices possible","Digital revolution enabled"],
    r:0.65,reasoning:"Solid-state physics was advancing globally. Bell Labs had resources, but European labs were pursuing similar research. The quantum mechanics that explains semiconductors was shared knowledge. Someone would have developed transistors within years.",
    counterfactual:"Without the Bell Labs team, transistors still emerge - solid-state physics was advancing globally, and the quantum mechanics explaining semiconductors was shared knowledge. European labs, particularly in Germany and Britain, were pursuing similar research. The transistor might have come from Siemens or a British team within 5-10 years. The miniaturization revolution still happens.",
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
    quote:"I sell here, Sir, what all the world desires to have - power. - Matthew Boulton",
    contributions:["Industrial Revolution powered","Factories enabled","Railroad transportation","Modern manufacturing"],
    r:0.50,reasoning:"Newcomen built first practical engine. Watt improved efficiency dramatically. The technology developed incrementally over decades with multiple contributors. Industrial Revolution's timing depended on this specific development path.",
    counterfactual:"Without Newcomen and Watt, the steam engine still arrives - the principles were understood, and mine flooding was a pressing problem driving innovation. But the specific timing matters enormously. A 20-40 year delay in efficient steam power delays the entire Industrial Revolution. Factories remain water-powered longer. Railroads arrive later. Britain's industrial dominance might be less complete, giving other nations more time to catch up.",
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
    counterfactual:"Without Chinese alchemists discovering gunpowder, someone eventually mixes sulfur, charcoal, and saltpeter - the ingredients were known, and experimentation with fire was universal. But the timing matters enormously. Delay of centuries changes medieval warfare entirely. Castles remain dominant longer. European colonization of the Americas might be less overwhelming. The entire history of military technology shifts.",
    ripples:[
      {category:"Medieval Warfare",detail:"Without gunpowder, castles remain dominant. Knights and fortifications define warfare longer."},
      {category:"Colonization",detail:"European conquest of Americas might be less overwhelming without gunpowder advantage."},
      {category:"Social Structure",detail:"'Gunpowder made all men the same height' - without it, aristocratic warriors remain dominant longer."},
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
    counterfactual:"Without Hittite iron smelting, the technology still emerges - it developed independently in sub-Saharan Africa and possibly elsewhere. Meteoric iron showed the metal's properties; smelting was the challenge. But the timing matters. The Bronze Age might last centuries longer in some regions. Agriculture advances more slowly without iron plows. Construction and warfare develop along different timelines.",
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
    counterfactual:"Without Sumerian cuneiform, writing still emerges - it developed independently in Egypt, China, and Mesoamerica. The need to record transactions, laws, and religious texts drove multiple inventions. Writing was inevitable once societies reached sufficient complexity. But if somehow prevented everywhere, human civilization remains fundamentally oral. No history, no accumulated law, no science as we know it. Inconceivable.",
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
    counterfactual:"Without medieval mechanical clocks, precise timekeeping still develops - the need was pressing (monastic prayer hours, astronomical observation, navigation). Water clocks and sundials provided precedent. But mechanical clocks from Europe specifically enabled work discipline, factory time, and navigation. Delay of 50-100 years shifts the emergence of industrial capitalism.",
    ripples:[
      {category:"Work Discipline",detail:"Factory time and work discipline depend on clocks. Industrial capitalism's emergence shifts."},
      {category:"Navigation",detail:"Precise timekeeping enabled longitude calculation. Maritime navigation advances more slowly."},
      {category:"Science",detail:"Scientific measurement depends on precise time. Experiments become possible with clocks."},
      {category:"Cultural Concept",detail:"'Time is money' - the modern sense of time as scarce commodity arrives later."}
    ],
    timeline:[
      {year:1280,happened:"Mechanical clocks in European churches",alternate:"Mechanical timekeeping delayed 50-100 years"},
      {year:1500,happened:"Portable clocks and watches emerge",alternate:"Personal timekeeping delayed; social time remains approximate"},
      {year:1700,happened:"Precision clocks enable navigation",alternate:"Longitude problem solved later; exploration slower"},
      {year:1900,happened:"Clock time structures industrial life",alternate:"Work discipline emerges later; industrialization's character different"}
    ],
    impact:{lives:"Modern work discipline",econ:"Punctuality economy",cultural:"Time as precise concept",reach:"Global",timeline:"Mechanical clocks delayed 50-100 years"}},
  
  {id:"telescope",name:"Telescope",born:1608,died:null,cat:"inventions",field:"Scientific Instruments",
    quote:"I have observed the Milky Way to be nothing else but a mass of innumerable stars. - Galileo",
    contributions:["Astronomy transformed","Heliocentrism proven","Scientific Revolution","Modern optics foundation"],
    r:0.70,reasoning:"Lippershey credited with patent, but others were developing similar devices simultaneously. Lens-grinding was advancing; the combination was logical. Galileo improved it dramatically but didn't invent it.",
    counterfactual:"Without Lippershey's telescope, similar devices emerge within years - several inventors were working on lens combinations simultaneously, and lens-grinding was advancing rapidly. Galileo's contribution was pointing it at the sky and publishing what he saw. The Copernican revolution might be delayed slightly, but the evidence for heliocentrism would come from other observations.",
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
    counterfactual:"Without early compound microscopes, similar devices emerge from other lens-makers - the optical principles were understood, and multiple inventors were experimenting. Leeuwenhoek's single-lens microscopes were actually better and came later. The invisible world is revealed within a decade regardless. Cell theory and germ theory might be slightly delayed but were coming.",
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
    quote:"Radio is a medium of entertainment which permits millions of people to listen to the same joke at the same time. - T.S. Eliot",
    contributions:["Wireless communication","Broadcasting invented","Emergency communication","Mass media enabled"],
    r:0.70,reasoning:"Marconi, Tesla, Lodge, Popov, Bose all contributed to radio development. Maxwell's theory predicted it; Hertz demonstrated waves. Multiple inventors were converging on practical wireless. Someone would have succeeded within years.",
    counterfactual:"Without Marconi, practical radio still arrives - Tesla, Lodge, Popov, Bose were all working on wireless transmission. Maxwell's theory predicted electromagnetic waves; Hertz demonstrated them. The convergence was happening across multiple countries. Someone achieves practical radio within 5 years. Broadcasting emerges regardless; different corporate structure.",
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
    quote:"Television is the first truly democratic culture. - Paddy Chayefsky",
    contributions:["Visual broadcasting","Home entertainment","News delivery","Political campaigns transformed"],
    r:0.65,reasoning:"Multiple inventors developed television systems - Farnsworth, Zworykin, Baird. The concept was pursued by corporations and individuals globally. Electronic television would have emerged from any of several paths.",
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
    quote:"The camera is an instrument that teaches people how to see without a camera. - Dorothea Lange",
    contributions:["Visual documentation","Art form creation","Journalism transformed","Memory preservation"],
    r:0.55,reasoning:"Niépce, Daguerre, Talbot all developed photography methods around same time. The chemistry was advancing; camera obscura was ancient. Multiple approaches were being tried. Someone would have succeeded within a decade.",
    counterfactual:"Photography was simultaneously invented by multiple people. Niépce, Daguerre, and Talbot all developed photographic processes in the 1820s-30s. The underlying chemistry - light-sensitive silver compounds - was known. The camera obscura was ancient. Multiple experimenters were trying to fix images. Someone would have succeeded within a decade. The daguerreotype vs. calotype competition shows how multiple approaches were viable.",
    ripples:[
      {category:"Timing",detail:"Photography arrives within 10 years regardless. Different inventor, different name for the process."},
      {category:"Technical Path",detail:"Different process might dominate early - positive vs. negative might develop differently."},
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
    counterfactual:"Refrigeration was invented by multiple people through different approaches. Perkins, Gorrie, Carré, and others all developed cooling systems. The thermodynamics were understood; the engineering was the challenge. Someone would have created practical refrigeration within 10-20 years. The specific refrigerant and system design might differ, but the cold chain - transforming food distribution, diet, medicine - was coming.",
    ripples:[
      {category:"Timing",detail:"Refrigeration arrives within 10-20 years regardless. Different inventor, different system design."},
      {category:"Technology",detail:"Different refrigerant might dominate. CFC vs. ammonia vs. other coolants - path might differ."},
      {category:"Food System",detail:"The transformation of diet and food distribution happens regardless. Same profound impact."},
      {category:"Medicine",detail:"Vaccine cold chain, blood storage, etc. - same medical benefits under any path."}
    ],
    timeline:[
      {year:1834,happened:"Perkins builds first practical refrigerator",alternate:"Others achieve same within 10-20 years"},
      {year:1913,happened:"Home refrigerators introduced",alternate:"Domestic refrigeration on similar timeline"},
      {year:1950,happened:"Refrigeration transforms global food",alternate:"Same food revolution; different technical path"},
      {year:2020,happened:"Refrigerant debates (climate)",alternate:"Different refrigerant, same or different climate issues"}
    ],
    impact:{lives:"Food security for billions",econ:"Cold chain: $300B+",cultural:"Diet transformation",reach:"Global",timeline:"Refrigeration developed within 10-20 years via others"}},
  
  {id:"anesthesia",name:"Anesthesia",born:1846,died:null,cat:"inventions",field:"Medicine",
    quote:"We have conquered pain. - John Collins Warren",
    contributions:["Surgery possible without pain","Longer operations enabled","Dental procedures transformed","Millions of surgeries annually"],
    r:0.65,reasoning:"Morton, Wells, Long, and others all demonstrated anesthesia around same time. The properties of ether and nitrous oxide were known. Medical application was being pursued by multiple practitioners. Priority disputes show convergence.",
    counterfactual:"Anesthesia was simultaneously discovered by multiple practitioners. Morton, Wells, Long, and others all demonstrated surgical anesthesia in the 1840s. The properties of ether and nitrous oxide were already known; the question was applying them to surgery. The bitter priority dispute proves the point: this was an idea whose time had come. Without any specific individual, painless surgery arrives within 5 years.",
    ripples:[
      {category:"Timing",detail:"Anesthesia arrives within 5 years regardless. Different doctor gets credit for first demonstration."},
      {category:"Technique",detail:"Different agent might dominate initially - nitrous oxide vs. ether vs. chloroform."},
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
    quote:"There are people who do not object to eating a mutton chop, but who would be shocked at swallowing its germs. - Joseph Lister",
    contributions:["Surgical survival improved","Hospital infections reduced","Germ theory applied","Modern surgery enabled"],
    r:0.55,reasoning:"Lister applied Pasteur's germ theory to surgery. Semmelweis had proven hand-washing worked earlier. Multiple doctors were recognizing infection sources. The connection between germs and surgery was being made; Lister systematized it.",
    counterfactual:"Antiseptic surgery was coming - Semmelweis had already proven that hand-washing prevented childbed fever. Pasteur's germ theory was being published. The connection between germs and surgical infection was logical and being made by multiple doctors. Lister systematized and evangelized it, but someone would have made the same application within 10-20 years. The resistance Lister faced might have been similar or different for another advocate.",
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
    quote:"I have discovered something interesting, but I do not know whether or not my observations are correct. - Wilhelm Röntgen",
    contributions:["Medical imaging revolution","Diagnostic capability","Security scanning","Structural analysis"],
    r:0.70,reasoning:"Röntgen discovered X-rays, but cathode ray tubes were being studied by many. Several others might have noticed the phenomenon soon - Lenard, Crookes came close. The discovery was imminent in the physics of the time.",
    counterfactual:"X-rays were about to be discovered by someone. Lenard, Crookes, and others were studying cathode rays and came very close - Crookes noticed fogged photographic plates but didn't investigate. The phenomenon was sitting there waiting to be noticed. Röntgen happened to investigate systematically. Within 5 years, someone would have made the same discovery. The revolution in medical imaging was imminent.",
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
    quote:"The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one. - Einstein",
    contributions:["Carbon-free electricity","Nuclear weapons","Medical isotopes","Space exploration power"],
    r:0.50,reasoning:"Manhattan Project assembled global talent, but nuclear physics was advancing in Germany, Britain, USSR. Fission was discovered in Germany. Nuclear power/weapons were coming; the specific timing and which nation first was contingent.",
    counterfactual:"Nuclear fission was discovered in Germany in 1938. The physics was known internationally. The Manhattan Project assembled extraordinary talent and resources, but similar projects were underway in Germany, Britain, and the USSR. Nuclear weapons/power were coming - the question was timing and which nation first. Without the Manhattan Project, Germany or USSR might have built bombs first, with potentially catastrophic consequences for WWII's outcome.",
    ripples:[
      {category:"Timing",detail:"Nuclear weapons delayed 2-5 years if US project slows. Germany or USSR might achieve first."},
      {category:"WWII Outcome",detail:"If Germany gets bomb first, war outcome potentially reversed. If USSR first, Cold War starts differently."},
      {category:"Nuclear Age",detail:"Same eventual nuclear age - the physics was known. Different political circumstances."},
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
    counterfactual:"Hormonal contraception was being researched globally. Pincus and Rock had crucial funding from McCormick, but others were working on similar approaches. The specific timing - 1960 - reflected funding choices and FDA decisions. Without this team, hormonal contraception might be delayed by 5-10 years. Those years matter enormously for women's autonomy, but the technology was coming regardless.",
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
    quote:"What we didn't realize then was that the integrated circuit would reduce the cost of electronic functions by a factor of a million. - Jack Kilby",
    contributions:["Microelectronics enabled","Computers miniaturized","Smartphones possible","Moore's Law begins"],
    r:0.70,reasoning:"Kilby and Noyce invented integrated circuits independently within months. The need was obvious; planar technology was advancing. Multiple paths would have led there. Someone would have integrated circuits onto chips very soon.",
    counterfactual:"The integrated circuit was independently invented by Kilby and Noyce within months of each other. This simultaneous invention proves the technology was ready - the need was obvious, the components were there. Without either inventor, the other gets credit. Without both, someone else invents it within 2-3 years. The entire computing revolution proceeds on nearly identical timeline. This is one of the lowest-weight major inventions.",
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
    counterfactual:"The laser was a race - multiple labs were trying to build one once the theory was published. Maiman at Hughes Research got there first, but Bell Labs, Columbia, and Soviet labs were close behind. The theory (Townes, Basov, Prokhorov) had already won a Nobel. Without Maiman specifically, someone builds a working laser within months to a couple years. The technology was coming.",
    ripples:[
      {category:"Timing",detail:"Lasers arrive within 2-3 years regardless. Different lab, different inventor gets credit."},
      {category:"Applications",detail:"Same applications - communications, surgery, manufacturing, storage."},
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
    quote:"GPS has saved more lives than any other technology. - Bradford Parkinson",
    contributions:["Global positioning","Navigation transformed","Logistics revolution","Location-based services"],
    r:0.55,reasoning:"GPS required government investment (US military). Soviet GLONASS developed independently. The concept - triangulation from satellites - was understood. Some nation would have built a positioning system; the specific timing and openness to civilians was policy choice.",
    counterfactual:"Satellite positioning was independently developed by the US (GPS) and USSR (GLONASS). The concept was obvious once satellites existed. Without the US program, GLONASS might dominate. Without both, satellite navigation is delayed but comes eventually. The crucial decision - making GPS available to civilians in 1983 after KAL 007 - was a policy choice. A different nation's system might be less open.",
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
    counterfactual:"MRI had multiple inventors - Damadian, Lauterbur, and Mansfield all contributed key elements, leading to Nobel controversy. Nuclear magnetic resonance was known physics; applying it to medical imaging was being pursued by multiple groups. Without any single inventor, the others continue. The technology emerges within 5-10 years from this active research community. Same revolution in medical imaging.",
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
    quote:"The destiny of world civilization depends upon providing a decent standard of living for all mankind. - Norman Borlaug",
    contributions:["Crop yields doubled/tripled","Famine prevention","1 billion lives saved (estimated)","Modern agriculture"],
    r:0.40,reasoning:"Borlaug's dwarf wheat was specifically bred to resist disease and respond to fertilizer. Rockefeller Foundation funding was crucial. Without this specific program, Asian famines of 1970s might have killed hundreds of millions. Similar research was happening, but Borlaug's work was most impactful.",
    counterfactual:"The Green Revolution was less inevitable than it seems. Borlaug's specific breeding work - dwarf wheat varieties that didn't fall over when heavily fertilized - was his contribution. Without him and the Rockefeller Foundation funding, the Asian famines predicted for the 1970s might have happened. Hundreds of millions might have died. Similar agricultural research was happening, but not at the same scale or speed. This is one case where a single person's work might have saved a billion lives.",
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
    quote:"DNA is like a computer program but far, far more advanced than any software ever created. - Bill Gates",
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
    counterfactual:"CRISPR as a bacterial immune system was being studied by multiple labs. Doudna and Charpentier made the crucial insight: this system could be reprogrammed to edit any gene. Without them, someone else makes this connection within 5 years - the system was too interesting, too active a research area. The gene editing revolution happens on similar timeline. The specific Nobel laureates might differ.",
    ripples:[
      {category:"Timing",detail:"Gene editing via CRISPR arrives within 5 years regardless. Different researchers get Nobel."},
      {category:"Applications",detail:"Same applications - disease treatment, agriculture, ethical debates."},
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
    quote:"I'd put my money on the sun and solar energy. What a source of power! - Thomas Edison",
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
    counterfactual:"Lithium-ion batteries were developed by multiple researchers over decades - Whittingham, Goodenough, Yoshino all contributed key elements. Without any one of them, the others continue. The chemistry was being explored broadly; the need (portable electronics, EVs) was obvious. Lithium-ion batteries emerge within 5-10 years via different path. Same smartphone and EV revolution, slightly delayed perhaps.",
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
    quote:"The Web as I envisaged it, we have not seen it yet. - Tim Berners-Lee",
    contributions:["Internet made usable","E-commerce enabled","Social media possible","Information access transformed"],
    r:0.45,reasoning:"Internet existed; hypertext existed (Xanadu, HyperCard). Berners-Lee combined them with URLs, HTTP, HTML in a way that worked. Others were building hypertext systems. His specific simple design enabled adoption. A different web might have been less open.",
    counterfactual:"Without the World Wide Web, the internet still exists - it was there before Berners-Lee. But his specific combination of URLs, HTTP, and HTML created something simple enough to go viral. Without it, the internet might remain academic and technical longer, or a different hypertext system (Gopher, Xanadu) might win. That alternative web might be more centralized, less open, differently structured. The web we got was shaped by Berners-Lee's decision to make it free and open.",
    ripples:[
      {category:"Openness",detail:"Berners-Lee made the web free and open. An alternative might have been proprietary."},
      {category:"Simplicity",detail:"HTML's simplicity enabled adoption. A more complex system might spread slower."},
      {category:"Timing",detail:"Something web-like emerges within 5-10 years, but shaped differently."},
      {category:"Structure",detail:"URLs, links, the page model - all could have been different. Different web, different internet culture."}
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
    r:0.60,reasoning:"PDAs and phones were converging. Blackberry had email phones. Touch screens existed. Apple's specific combination - multi-touch, App Store, design - was innovative integration. But smartphone evolution was happening; iPhone accelerated and shaped it.",
    counterfactual:"Without the iPhone, smartphones still come - Blackberry, Palm, Windows Mobile were all moving this direction. But Apple's specific design choices shaped what smartphones became: multi-touch interface, App Store model, the specific form factor. Without iPhone, smartphones might be more Blackberry-like (keyboards, business focus) or take longer to reach mass consumers. Android might dominate from the start with different design language.",
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
    counterfactual:"Without Chuck Hull's stereolithography, 3D printing still emerges - multiple inventors were working on additive manufacturing. FDM, SLS, and other methods were being developed. The specific timing and which method dominated might differ. Without Hull, 3D printing might come 5-10 years later, or a different technology (FDM, perhaps) might become the standard first.",
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
    quote:"This is the greatest thing since the discovery of fire. - Winston Churchill (on sulfa drugs)",
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
    counterfactual:"Without Murray's first successful kidney transplant, organ transplantation still develops - multiple surgeons were trying. But the specific path might differ: different organs first, different immunosuppression approaches. Without the kidney transplant success in 1954, transplant medicine might be delayed 5-10 years. The immunology challenges were being solved by multiple researchers. Transplantation was coming; timing and specific development path would vary.",
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
    quote:"Every child born through IVF is special. - Robert Edwards",
    contributions:["Infertility treatment","8 million IVF births","Genetic screening possible","Family formation options"],
    r:0.50,reasoning:"Edwards and Steptoe developed IVF over decades. Reproductive biology was advancing globally. The specific technique was their achievement, but the science was being pursued. IVF or similar assisted reproduction was coming.",
    counterfactual:"Without Edwards and Steptoe, assisted reproduction still develops - reproductive biology was advancing. But their specific technique, refined over decades, produced Louise Brown in 1978. Without them, IVF might come 5-10 years later through other researchers. The 8 million people born through IVF by 2024 might be fewer, or born later. Infertility treatment advances regardless; this specific technique's timing changes.",
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
    counterfactual:"Without Greatbatch's implantable pacemaker, cardiac pacing still develops - external pacemakers existed. But implantable devices that let patients live normal lives might come 5-10 years later. In that window, more people with arrhythmias die who would have lived. The medical device industry develops regardless; this specific life-saving technology is delayed.",
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
    counterfactual:"Without Satoshi's blockchain/Bitcoin, decentralized currency concepts were being explored - cypherpunks had discussed digital cash for decades. But Satoshi's specific combination of hash chains, proof of work, and economic incentives actually worked where others failed. Without it, cryptocurrency might come later, differently, or possibly not at all in recognizable form. The 'crypto' phenomenon as we know it - including Ethereum, DeFi, NFTs - doesn't happen the same way.",
    ripples:[
      {category:"Timing",detail:"Decentralized currency explored but might not succeed the same way. Possibly delayed 10+ years."},
      {category:"Design",detail:"Different design choices might produce different cryptocurrency ecosystem."},
      {category:"Ecosystem",detail:"No Ethereum, no DeFi, no NFTs - or very different versions."},
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
    counterfactual:"Without the 2012 deep learning breakthrough (AlexNet), AI still advances - computing power was growing, data was accumulating. But the specific neural network renaissance might be delayed or take different form. Other AI approaches (symbolic, evolutionary) might get more investment. The current AI boom centered on large language models might happen 5-10 years later or look different. AI progress was coming; this specific path shaped how it happened.",
    ripples:[
      {category:"Timing",detail:"AI boom delayed 5-10 years. GPT, ChatGPT come later."},
      {category:"Approach",detail:"Different AI methods might dominate. Symbolic AI might get more investment."},
      {category:"Applications",detail:"Self-driving cars, image recognition - same goals pursued differently."},
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
    counterfactual:"Without Willis Carrier, air conditioning still develops - refrigeration technology existed, multiple inventors were pursuing cooling. But his specific innovation was humidity control for a printing plant, which led to broader AC applications. Without him, modern air conditioning might be delayed 10-20 years. The Sun Belt migration that reshaped American demographics would happen later. Summer would remain brutal in hot climates longer.",
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
    r:0.60,reasoning:"Romans had concrete. Multiple inventors developed reinforced concrete independently - Monier, Hennebique, Ransome. The combination of steel and concrete was being explored in multiple places. The technology was convergent.",
    counterfactual:"Without any single inventor, reinforced concrete still emerges - Monier, Hennebique, Ransome, and others were all developing it independently. The Romans had concrete; iron reinforcement was being added by multiple experimenters. This is one of the most convergent inventions: the technology was coming regardless of who got credit. The specific patents and timing might vary, but modern construction would still use reinforced concrete.",
    ripples:[
      {category:"Convergence",detail:"Most convergent invention. Multiple independent inventors. Comes regardless."},
      {category:"Timing",detail:"Specific patents and credit different. Technology arrives within 10-20 years regardless."},
      {category:"Modern Cities",detail:"Skyscrapers, infrastructure, dams - all possible with or without specific inventor."},
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


