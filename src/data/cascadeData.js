// Cascade chains, modern-day impact, timelines
export const CASCADE_DATA = {
  newton: {
    cascade:[
      {event:"No Principia in 1687",consequence:"Gravity remains a collection of observations â€” Kepler's ellipses, Galileo's falling bodies â€” with no unifying math. Hooke's inverse-square speculation stays untested.",delay:"Immediate",severity:"high",icon:"ðŸ“•"},
      {event:"No mathematical physics template",consequence:"The Scientific Revolution loses its crown jewel. Other sciences can't point to physics as proof that nature obeys mathematical laws. Empiricism advances; theory lags behind.",delay:"~20 years",severity:"high",icon:"âš—ï¸"},
      {event:"Engineering stays empirical",consequence:"Steam engine development in the 1700s happens by trial and error without thermodynamic theory. James Watt still improves the engine, but optimization takes longer without F=ma.",delay:"~80 years",severity:"medium",icon:"ðŸ­"},
      {event:"Lagrange and Euler eventually rebuild mechanics",consequence:"By 1750-1780, continental mathematicians piece together what Newton did alone. The synthesis is distributed across a dozen minds. France leads physics instead of England.",delay:"~60 years",severity:"medium",icon:"ðŸ‡«ðŸ‡·"},
      {event:"Space age delayed",consequence:"Orbital mechanics without Newton means rocket science develops later. Sputnik might launch in the 1970s instead of 1957. Moon landing pushed to the 1990s.",delay:"~270 years",severity:"high",icon:"ðŸš€"}
    ],
    modernDay:{
      tech:"Satellites work â€” the physics was eventually reconstructed. But the space age started about 15 years late, meaning GPS and satellite communications arrived in the late 1980s instead of early 1970s.",
      culture:"No apple-and-gravity story. No Newton-as-genius archetype. The Enlightenment's faith in reason develops more slowly without its poster child.",
      politics:"The French lead physics for a century, not the British. This subtly shifts the cultural prestige of the French Academy and weakens the Royal Society's early dominance.",
      daily:"Your life is essentially the same, just time-shifted. The physics was inevitable. Newton was the shortcut."
    }
  },
  turing: {
    cascade:[
      {event:"No universal Turing machine concept (1936)",consequence:"Church's lambda calculus exists but lacks the physical machine metaphor. Computability theory develops as pure math, disconnected from engineering.",delay:"Immediate",severity:"high",icon:"ðŸ“œ"},
      {event:"Enigma codebreaking proceeds differently",consequence:"Polish mathematicians' earlier work continues. The Bombe is designed by someone else â€” possibly Gordon Welchman alone â€” but takes 6-12 months longer. The Battle of the Atlantic extends. Allied shipping losses increase.",delay:"~4 years",severity:"high",icon:"âš“"},
      {event:"No ACE or theoretical computer design",consequence:"Von Neumann's EDVAC report (1945) still establishes stored-program architecture, but without Turing's theoretical foundation, the WHY of computation is murkier.",delay:"~9 years",severity:"medium",icon:"ðŸ–¥ï¸"},
      {event:"No Turing Test (1950)",consequence:"AI research still begins, but without a concrete benchmark for machine intelligence. The field is more fragmented in its early decades, lacking a unifying challenge.",delay:"~14 years",severity:"medium",icon:"ðŸ¤–"},
      {event:"No Turing-as-martyr narrative",consequence:"The story of a war hero persecuted for being gay doesn't become a cultural touchstone. LGBTQ+ rights in STEM lose a powerful historical example. The 2013 royal pardon never happens.",delay:"~60 years",severity:"low",icon:"ðŸ³ï¸â€ðŸŒˆ"}
    ],
    modernDay:{
      tech:"Computers exist â€” they were inevitable. But the theoretical foundations arrived piecemeal rather than from one mind. CS curricula look different: more engineering-first, less theory-first.",
      culture:"No Turing Test means AI hype cycles have different vocabulary. 'Can machines think?' is framed differently. The Imitation Game (2014) was never made.",
      politics:"WWII possibly lasts 6-12 months longer in the Atlantic theater. More Allied shipping lost. D-Day timing might shift.",
      daily:"You're reading this on a computer that works exactly the same. The hardware was coming regardless. But the philosophy of AI â€” what it means for a machine to 'think' â€” is articulated by someone else, later, differently."
    }
  },
  tesla: {
    cascade:[
      {event:"No AC induction motor patents (1888)",consequence:"Westinghouse licenses Galileo Ferraris's AC motor instead â€” cruder, less efficient, but functional. AC still wins the War of Currents, just more slowly.",delay:"Immediate",severity:"medium",icon:"âš¡"},
      {event:"Edison's DC holds on longer",consequence:"DC power dominates urban cores through the 1900s. Rural electrification is delayed by a decade because DC doesn't travel well. The 1920s countryside stays darker.",delay:"~10 years",severity:"high",icon:"ðŸ’¡"},
      {event:"No Tesla coil, no wireless experiments",consequence:"Marconi develops radio on his own schedule â€” he was already working independently. But Tesla's specific demonstrations of wireless power transmission never inspire the field.",delay:"~15 years",severity:"low",icon:"ðŸ“»"},
      {event:"Polyphase power systems arrive via others",consequence:"Steinmetz at GE and Ferraris independently advance AC technology. By 1910, the grid looks similar. The delay is real but not catastrophic.",delay:"~20 years",severity:"medium",icon:"ðŸ”Œ"},
      {event:"No Tesla mythos",consequence:"No Elon Musk naming his car company 'Tesla.' No Edison-vs-Tesla internet culture war. The 'underappreciated genius' archetype attaches to someone else â€” maybe Steinmetz.",delay:"Cultural",severity:"low",icon:"ðŸš—"}
    ],
    modernDay:{
      tech:"The power grid works identically â€” AC was inevitable given the physics. But rural electrification arrived about a decade late, which means the economic development of the American interior was slightly delayed.",
      culture:"No Tesla brand. No Tesla-vs-Edison meme wars. Nikola Tesla is as obscure as Charles Steinmetz â€” a name only electrical engineers know.",
      politics:"Delayed rural electrification means the New Deal's REA program was even more urgent. Farm productivity lagged in the 1920s.",
      daily:"Zero difference. Your outlets, your appliances, your grid â€” all the same. Tesla accelerated the inevitable by about a decade."
    }
  },
  shakespeare: {
    cascade:[
      {event:"No Shakespeare plays (1590s-1613)",consequence:"Marlowe (if he lived), Jonson, Webster, and Middleton still produce the Elizabethan theatrical golden age. English theater thrives â€” just with a different star.",delay:"Immediate",severity:"medium",icon:"ðŸŽ­"},
      {event:"No Hamlet, Lear, Othello, Macbeth",consequence:"English literature's center of gravity shifts. Marlowe's Tamburlaine and Jonson's Volpone are the canonical 'greatest plays.' The specific psychological depth Shakespeare brought is missing.",delay:"~20 years",severity:"high",icon:"ðŸ“–"},
      {event:"English language loses thousands of coined words",consequence:"Shakespeare invented 1,700+ words: 'assassination,' 'lonely,' 'eyeball,' 'bedroom.' Without him, English is measurably smaller. Some words are coined by others; many never exist.",delay:"~100 years",severity:"medium",icon:"ðŸ’¬"},
      {event:"No global Shakespeare industry",consequence:"The Royal Shakespeare Company doesn't exist. High school English curricula worldwide are built around different texts. Film adaptations of Marlowe plays fill the void partially.",delay:"~400 years",severity:"medium",icon:"ðŸŒ"},
      {event:"The novel rises faster",consequence:"Without Shakespeare dominating English literary prestige, the novel â€” Defoe, Richardson, Fielding â€” becomes the unchallenged literary form earlier. Theater is less central to English culture.",delay:"~150 years",severity:"low",icon:"ðŸ“š"}
    ],
    modernDay:{
      tech:"No difference whatsoever.",
      culture:"This is where the loss is staggering. No 'To be or not to be.' No 'star-crossed lovers.' No 'brave new world.' Hundreds of everyday phrases vanish. English literature has a different canon â€” probably built around Milton and Jonson.",
      politics:"The British cultural export machine is slightly weaker. Shakespeare is a massive soft-power asset that wouldn't exist. The Globe Theatre is a pub.",
      daily:"You use dozens of Shakespeare-coined phrases weekly without knowing it. 'Break the ice,' 'wild goose chase,' 'heart of gold' â€” gone. Your vocabulary is measurably poorer."
    }
  },
  genghis: {
    cascade:[
      {event:"No unified Mongol Empire (1206)",consequence:"The steppe tribes remain fragmented. Jurchen Jin dynasty and Khwarezmian Empire persist. The Silk Road stays under distributed control with higher tolls and more bandits.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"No Mongol invasion of Central Asia (1219-1221)",consequence:"The Islamic Golden Age continues uninterrupted. Baghdad isn't destroyed in 1258. The House of Wisdom survives. Islamic science maintains its lead over Europe for another century or more.",delay:"~13 years",severity:"high",icon:"ðŸ•Œ"},
      {event:"No Pax Mongolica connecting East and West",consequence:"The plague still travels the Silk Road eventually, but later and more slowly. The Black Death might hit Europe in the 1370s instead of the 1340s â€” or follow a different route entirely.",delay:"~130 years",severity:"high",icon:"ðŸ¦ "},
      {event:"China stays fragmented longer",consequence:"Without Mongol unification (Yuan dynasty), Song dynasty in the south and Jin in the north persist. China's eventual reunification happens under different circumstances, with different cultural consequences.",delay:"~60 years",severity:"medium",icon:"ðŸ‡¨ðŸ‡³"},
      {event:"No genetic legacy",consequence:"Approximately 16 million men alive today carry Genghis Khan's Y-chromosome. That lineage simply doesn't exist. The most reproductively successful human in history is someone else â€” probably unknown.",delay:"~800 years",severity:"low",icon:"ðŸ§¬"}
    ],
    modernDay:{
      tech:"Potentially more advanced. If the Islamic Golden Age continued unbroken, the scientific revolution might have originated in the Islamic world rather than Europe. Algebra, optics, and medicine were already ahead.",
      culture:"No Mongol Empire means no Yuan dynasty, no Il-Khanate, no Golden Horde. The political map of Eurasia is unrecognizably different. Russia's development follows a completely different path.",
      politics:"The Middle East likely remains the center of scientific and cultural gravity through the 1400s. Europe's rise is delayed or takes a different form. The Renaissance might not happen â€” or it happens in Baghdad.",
      daily:"Impossible to predict. This is one of those figures where removing them changes everything so profoundly that the modern world is unrecognizable."
    }
  },
  mlk: {
    cascade:[
      {event:"No Montgomery Bus Boycott leadership (1955)",consequence:"The boycott still happens â€” Rosa Parks and E.D. Nixon organized it. But without King's oratory and theology of nonviolence, it's led by someone less charismatic. The movement is slower to nationalize.",delay:"Immediate",severity:"medium",icon:"ðŸšŒ"},
      {event:"No 'I Have a Dream' speech (1963)",consequence:"The March on Washington still happens â€” Randolph and Rustin organized it. But without that speech, the movement lacks its most powerful rhetorical moment. Media coverage is less galvanizing.",delay:"~8 years",severity:"high",icon:"ðŸŽ¤"},
      {event:"Civil Rights Act still passes (1964)",consequence:"LBJ was committed to civil rights legislation after JFK's assassination. The bill passes, but possibly with more compromises. The moral authority of King's nonviolent movement strengthened the legislation.",delay:"~9 years",severity:"medium",icon:"ðŸ“œ"},
      {event:"Black Power movement rises earlier and stronger",consequence:"Without King's moderating, nonviolent center, Malcolm X and later Stokely Carmichael dominate the narrative sooner. The movement is more confrontational. White moderate support is weaker.",delay:"~10 years",severity:"medium",icon:"âœŠ"},
      {event:"No MLK holiday, no 'I Have a Dream' in curricula",consequence:"No federal holiday. A different civil rights leader becomes the iconic figure â€” possibly Medgar Evers or John Lewis. The simplified 'MLK = civil rights' narrative that dominates American education doesn't exist.",delay:"~50 years",severity:"low",icon:"ðŸ“…"}
    ],
    modernDay:{
      tech:"No difference.",
      culture:"Civil rights happened â€” the forces were too strong. But the specific narrative Americans tell about it is different. No 'I Have a Dream.' No MLK Day. The movement's public face is more militant, more complex.",
      politics:"The Civil Rights Act and Voting Rights Act still pass â€” the political forces were aligned. But the coalition-building is harder without King's ability to hold together Black churches, white liberals, and labor unions.",
      daily:"If you're American, you don't get the third Monday of January off work. The civil rights memorial in DC honors someone else. But the legal rights are the same."
    }
  },
  napoleon: {
    cascade:[
      {event:"No Napoleon at Toulon (1793)",consequence:"The French Revolution continues its chaotic course. The Directory stumbles along without a military genius to bail it out. France remains a republic â€” unstable, but not an empire.",delay:"Immediate",severity:"medium",icon:"ðŸ°"},
      {event:"No Napoleonic Code (1804)",consequence:"French law remains a patchwork of regional customs and revolutionary decrees. The legal standardization that spread across Europe via conquest never happens in this form.",delay:"~11 years",severity:"high",icon:"âš–ï¸"},
      {event:"No continental wars of 1805-1815",consequence:"Without Napoleon's conquests, the old European order survives longer. The Holy Roman Empire isn't dissolved. Germany stays fragmented. Italian unification is delayed.",delay:"~12 years",severity:"high",icon:"ðŸ—¡ï¸"},
      {event:"No nationalism backlash",consequence:"The nationalist movements that arose in response to Napoleonic occupation â€” in Germany, Spain, Russia â€” never get their catalyst. European nationalism develops more slowly and differently.",delay:"~30 years",severity:"high",icon:"ðŸ´"},
      {event:"No Louisiana Purchase (1803)",consequence:"France keeps Louisiana. The United States doesn't double in size overnight. Westward expansion takes a completely different form â€” possibly slower, possibly involving conflict with France.",delay:"~10 years",severity:"high",icon:"ðŸ—ºï¸"}
    ],
    modernDay:{
      tech:"Indirect effects only. European industrialization follows a different path without the Napoleonic disruption, but arrives regardless.",
      culture:"The legal systems of half of Europe are different. The Napoleonic Code influenced civil law in France, Belgium, Netherlands, Italy, Spain, and their colonies. Without it, legal modernization follows a patchwork pattern.",
      politics:"Germany might still be fragmented into small states. Italy the same. The map of Europe is unrecognizably different. The United States is physically smaller â€” or fought France for the western territories.",
      daily:"If you're in a civil law country (most of continental Europe, Latin America), your legal system descends from Napoleon's code. Without him, the law you live under is structured differently."
    }
  },
  gandhi: {
    cascade:[
      {event:"No Gandhi leading Indian independence movement",consequence:"Indian independence was inevitable â€” the British couldn't hold the subcontinent indefinitely. But without Gandhi's nonviolent framework, the movement follows Subhas Chandra Bose's more militant approach or Nehru's socialist one.",delay:"Immediate",severity:"medium",icon:"ðŸ‡®ðŸ‡³"},
      {event:"Independence possibly more violent",consequence:"Without the moral authority of nonviolent resistance, the British face armed rebellion more directly. Independence might come sooner (armed pressure) or later (British suppress harder). Partition is possibly bloodier.",delay:"~30 years",severity:"high",icon:"ðŸ”¥"},
      {event:"No model for nonviolent resistance worldwide",consequence:"MLK explicitly drew from Gandhi. Without the Indian example, the American civil rights movement might have followed a more confrontational path from the beginning.",delay:"~45 years",severity:"medium",icon:"âœŠ"},
      {event:"Mandela's strategy shifts",consequence:"The ANC's internal debate between violent and nonviolent resistance loses a powerful historical precedent. Mandela might still choose negotiation, but the philosophical framework is thinner.",delay:"~70 years",severity:"low",icon:"ðŸ‡¿ðŸ‡¦"},
      {event:"No Gandhi in global moral vocabulary",consequence:"The concept of nonviolent resistance exists (Thoreau wrote about it), but it lacks its most powerful proof of concept. 'Satyagraha' never enters global vocabulary.",delay:"Cultural",severity:"medium",icon:"â˜®ï¸"}
    ],
    modernDay:{
      tech:"No difference.",
      culture:"India is still independent â€” that was inevitable. But the story India tells about itself is different. Without Gandhi as founding myth, Indian national identity is built more around Nehru's modernist vision or Bose's militant nationalism.",
      politics:"Global nonviolent movements lose their most famous template. Gene Sharp still writes about nonviolent resistance, but it's theory without the Gandhi proof case. Color revolutions of the 2000s might follow different playbooks.",
      daily:"If you're Indian, no Gandhi on the currency. No Gandhi Jayanti holiday. The father of the nation is Nehru, or perhaps a more complex pantheon."
    }
  },
  penicillin: {
    cascade:[
      {event:"Fleming doesn't notice the mold (1928)",consequence:"Penicillium's antibacterial properties go unnoticed in this specific instance. But the general phenomenon was close to being discovered â€” other scientists had observed similar mold effects.",delay:"Immediate",severity:"medium",icon:"ðŸ§«"},
      {event:"Antibiotics delayed 5-15 years",consequence:"Sulfonamides (discovered 1935) remain the only antibacterial drugs through WWII. Battlefield infections kill more soldiers. Surgical mortality stays higher.",delay:"~5-15 years",severity:"high",icon:"ðŸ’Š"},
      {event:"WWII casualty rates increase",consequence:"Without penicillin mass-produced by 1944, wound infections remain the biggest killer of soldiers. D-Day survivors face much higher post-surgical mortality. Estimated additional deaths: tens of thousands.",delay:"~16 years",severity:"high",icon:"ðŸ¥"},
      {event:"Post-war medical revolution delayed",consequence:"The antibiotic revolution that enabled modern surgery, organ transplants, and cancer chemotherapy arrives later. Diseases we consider routine to treat remain deadly longer.",delay:"~20 years",severity:"high",icon:"ðŸ”¬"},
      {event:"Antibiotic resistance develops later too",consequence:"Silver lining: with antibiotics arriving 10-15 years late, the overuse that drives antibiotic resistance also starts later. We might have 10 more years before MRSA becomes a crisis.",delay:"~70 years",severity:"low",icon:"ðŸ¦ "}
    ],
    modernDay:{
      tech:"Antibiotics exist â€” the discovery was close to inevitable. But the delay means modern medicine as we know it (transplants, complex surgery, chemotherapy) arrived about a decade late.",
      culture:"No Alexander Fleming fame. Someone else gets the Nobel. The 'accidental discovery' narrative attaches to a different scientist.",
      politics:"WWII is marginally bloodier. More soldiers die from infections. The human cost increases by tens of thousands.",
      daily:"You still take antibiotics when you're sick. But your grandparents' generation had it harder â€” more friends lost to infections that would have been treatable 10 years sooner."
    }
  },
  internet: {
    cascade:[
      {event:"No ARPANET (1969)",consequence:"Packet switching was independently developed by Davies in the UK and Baran at RAND. Computer networking happens regardless, but under different auspices â€” possibly commercial from the start rather than military/academic.",delay:"Immediate",severity:"medium",icon:"ðŸ”—"},
      {event:"Commercial networks dominate the 1980s",consequence:"Without the academic/open culture of ARPANET, early networking is proprietary. CompuServe, Prodigy, and AOL-like walled gardens are the norm. Interoperability is a battle, not a given.",delay:"~15 years",severity:"high",icon:"ðŸ’¼"},
      {event:"No open protocols (TCP/IP, HTTP)",consequence:"Without the academic culture that produced TCP/IP and the web, networking standards are commercial and fragmented. Think multiple incompatible internets, like the early telephone companies.",delay:"~20 years",severity:"high",icon:"ðŸŒ"},
      {event:"World Wide Web possibly never invented",consequence:"Berners-Lee created the web at CERN because he was embedded in academic internet culture. Without that culture, hyperlinked information sharing might emerge differently â€” or much later.",delay:"~22 years",severity:"high",icon:"ðŸ•¸ï¸"},
      {event:"The open internet ethos doesn't exist",consequence:"No Wikipedia. No open-source movement as we know it. No 'information wants to be free.' The internet exists but it's more like cable TV â€” channels you subscribe to, controlled by corporations.",delay:"~30 years",severity:"high",icon:"ðŸ“º"}
    ],
    modernDay:{
      tech:"Networking exists, but it looks more like 1990s AOL than today's open web. Multiple incompatible commercial networks. Interoperability achieved grudgingly through market pressure, not design philosophy.",
      culture:"No social media as we know it. No user-generated content revolution. No YouTube, no Reddit, no independent blogs. Online life is curated by corporations, not users.",
      politics:"No Arab Spring, no #MeToo, no decentralized organizing. Political movements use different tools. Authoritarian governments have an easier time controlling information because the networks are already centralized.",
      daily:"You have internet access, but it's packaged like cable TV. You pay for different 'channels' â€” a shopping network, a news network, an entertainment network. The open web where anyone can publish anything doesn't exist."
    }
  },
  printingpress: {
    cascade:[
      {event:"No movable type press in Europe (1440s)",consequence:"Chinese and Korean movable type existed but didn't spread. European scribal culture continues. Books remain expensive, hand-copied objects for the wealthy and clergy.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Protestant Reformation stalls",consequence:"Luther's 95 Theses can't spread rapidly without printing. Reform ideas circulate slowly via hand copies and word of mouth. The Catholic Church has decades more to respond and suppress dissent.",delay:"~75 years",severity:"high",icon:"â›ª"},
      {event:"Scientific Revolution delayed",consequence:"Without cheap printed books, scientific knowledge spreads slowly. Copernicus reaches a few hundred readers, not thousands. Newton's Principia is hand-copied for a small elite. Peer review is impossible.",delay:"~200 years",severity:"high",icon:"ðŸ”¬"},
      {event:"Literacy stays low",consequence:"Without affordable printed material, mass literacy never develops at the same pace. Education remains for the elite. The Enlightenment's democratic ideals lack a mass audience.",delay:"~300 years",severity:"high",icon:"ðŸ“š"},
      {event:"Nation-states form differently",consequence:"Benedict Anderson's 'imagined communities' â€” nations unified by shared print languages â€” don't emerge in the same way. National identities develop around oral traditions and regional dialects instead.",delay:"~400 years",severity:"high",icon:"ðŸ´"}
    ],
    modernDay:{
      tech:"Eventually someone invents mechanical printing â€” the concept existed in Asia. But the delay (possibly 50-100 years in Europe) cascades through everything. The modern world is unrecognizable.",
      culture:"This is arguably the most impactful removal on the list. Without printing, the Reformation, Scientific Revolution, Enlightenment, and rise of mass democracy all happen differently and later. The modern world as a concept doesn't exist on schedule.",
      politics:"Democracy requires literacy. Literacy requires cheap books. Cheap books require printing. Pull Gutenberg and democracy itself is delayed by generations.",
      daily:"Impossible to say. This is one of those removals â€” like Genghis Khan â€” where the modern world diverges so completely that no meaningful comparison exists."
    }
  },
  davinci: {
    cascade:[
      {event:"No Leonardo's anatomical drawings (1490s-1510s)",consequence:"Medical illustration develops more slowly. Vesalius (1543) still revolutionizes anatomy, but without Leonardo's artistic-scientific synthesis as precedent.",delay:"~30 years",severity:"medium",icon:"ðŸ«€"},
      {event:"No Mona Lisa, no Last Supper",consequence:"Renaissance art still flourishes â€” Raphael, Michelangelo, Titian fill the void. But the specific techniques Leonardo pioneered (sfumato, atmospheric perspective) arrive later or differently.",delay:"Immediate",severity:"medium",icon:"ðŸŽ¨"},
      {event:"No flying machine sketches",consequence:"The cultural myth of the artist-inventor-genius doesn't crystallize in the same way. Leonardo IS the Renaissance ideal. Without him, the 'universal genius' concept is less vivid.",delay:"Cultural",severity:"low",icon:"âœˆï¸"},
      {event:"Art and science stay more separate",consequence:"Leonardo's unique fusion of artistic observation and scientific inquiry doesn't happen. The specific insight that drawing IS a form of scientific investigation is less obvious.",delay:"~50 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"No icon of 'Renaissance Man'",consequence:"The phrase 'Renaissance Man' might never be coined or would refer to someone else. The ideal of polymathic genius â€” knowing everything, doing everything â€” has a less vivid exemplar.",delay:"Cultural",severity:"low",icon:"ðŸ§ "}
    ],
    modernDay:{
      tech:"No difference. Leonardo's inventions were ahead of their time but none were built in his lifetime. The technology developed independently.",
      culture:"The Louvre's most famous painting is something else â€” probably Raphael's. The 'Da Vinci Code' is never written. The Renaissance Man ideal is vaguer, less personal.",
      politics:"No difference.",
      daily:"You've never stood in line for two hours to glimpse a small painting behind bulletproof glass in Paris. That's about it."
    }
  },
  berners: {
    cascade:[
      {event:"No World Wide Web proposal (1989)",consequence:"The internet exists (TCP/IP is already established) but there's no unified hypertext system connecting documents. Gopher protocol and other competitors fill the gap partially.",delay:"Immediate",severity:"medium",icon:"ðŸ•¸ï¸"},
      {event:"Hypertext develops commercially",consequence:"Ted Nelson's Xanadu project or similar commercial hypertext systems eventually launch. But they're proprietary, not free. Accessing hyperlinked documents requires subscriptions.",delay:"~3 years",severity:"high",icon:"ðŸ’°"},
      {event:"No free, open web standards",consequence:"Berners-Lee's decision to give the web away for free was pivotal. Without that decision, the web is fragmented across competing commercial protocols. Think AOL vs CompuServe vs Prodigy, but for web pages.",delay:"~5 years",severity:"high",icon:"ðŸ”“"},
      {event:"Dot-com boom looks very different",consequence:"Without a free, open web, the 1990s tech boom is smaller and more concentrated among large players. No garage startups building websites. Amazon, Google, and Facebook don't exist in recognizable form.",delay:"~10 years",severity:"high",icon:"ðŸ“ˆ"},
      {event:"User-generated content delayed or prevented",consequence:"Without free web publishing, blogging, wikis, and social media either don't happen or happen behind corporate gates. The democratization of publishing doesn't occur in the same way.",delay:"~15 years",severity:"high",icon:"âœï¸"}
    ],
    modernDay:{
      tech:"The internet exists but the web doesn't â€” at least not as a free, open platform. Online life is more like interactive cable TV than the web you know.",
      culture:"No blogs, no YouTube, no Wikipedia in their current form. Self-publishing is hard. The creator economy doesn't exist. Professional media keeps its gatekeeping power longer.",
      politics:"No social media-driven movements. Online organizing is harder in a commercial, walled-garden internet. Traditional media maintains more control over public discourse.",
      daily:"You access the internet through branded apps and portals rather than a browser visiting any URL. 'Surfing the web' isn't a concept. You pay for information access the way you pay for cable channels."
    }
  },
  jobs: {
    cascade:[
      {event:"No Apple II (1977) or Macintosh (1984)",consequence:"Wozniak still builds computers but without Jobs's product vision, Apple stays a hobbyist company. The personal computer revolution still happens â€” through IBM, Commodore, and others â€” but it's uglier.",delay:"Immediate",severity:"medium",icon:"ðŸ–¥ï¸"},
      {event:"No desktop publishing or GUI popularization",consequence:"Xerox PARC's GUI concepts still exist but take longer to reach consumers. Microsoft Windows still copies the GUI, but without the Mac as competitive pressure, it evolves more slowly.",delay:"~7 years",severity:"medium",icon:"ðŸ–±ï¸"},
      {event:"No iPod/iTunes revolution (2001)",consequence:"MP3 players exist (Diamond Rio, Creative Zen), but the music industry's digital transition is messier and slower. No iTunes Store means piracy wins longer. The music industry's business model collapses harder.",delay:"~24 years",severity:"medium",icon:"ðŸŽµ"},
      {event:"No iPhone (2007)",consequence:"Smartphones still arrive â€” BlackBerry and Nokia were already heading there â€” but the specific paradigm of the touchscreen app ecosystem is delayed 3-5 years. The entire app economy starts later.",delay:"~30 years",severity:"high",icon:"ðŸ“±"},
      {event:"No Apple aesthetic influence",consequence:"Consumer technology is less beautiful. The obsessive focus on design, materials, and user experience that Jobs demanded from Apple â€” and that forced competitors to match â€” doesn't have its most powerful champion.",delay:"Cultural",severity:"medium",icon:"âœ¨"}
    ],
    modernDay:{
      tech:"You have a smartphone. It's just less elegant and arrived 3-5 years later. The app economy is smaller. Consumer tech design is more utilitarian, less 'designed.'",
      culture:"No Apple stores. No product launch events as cultural moments. No 'one more thing.' Tech is less fashionable, more nerdy.",
      politics:"No difference of consequence.",
      daily:"Your phone is probably a Nokia or Samsung running a different interface. It does the same things, just less smoothly. You notice the difference in how things feel, not what they do."
    }
  },
  darwin: {
    cascade:[
      {event:"No Origin of Species in 1859",consequence:"Wallace publishes his theory independently â€” he was converging on the same idea. But Wallace's version lacks Darwin's 20 years of meticulous evidence. The theory arrives thinner, more speculative, easier to dismiss.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Evolution accepted more slowly",consequence:"Without Darwin's barnacles, finches, and pigeon breeding â€” the mountain of evidence â€” the scientific establishment takes longer to come around. Religious opposition is more effective against Wallace alone.",delay:"~10 years",severity:"medium",icon:"â›ª"},
      {event:"No 'Darwinism' as cultural force",consequence:"The phrase 'survival of the fittest' still enters discourse (Spencer coined it), but without Darwin's name attached, evolution doesn't become the organizing idea of Victorian thought as quickly.",delay:"~20 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Genetics merges with evolution later",consequence:"The Modern Synthesis of the 1930s-40s â€” combining Mendel's genetics with natural selection â€” happens, but the starting point is weaker. Population genetics develops from Wallace's framework, which emphasizes geography over variation.",delay:"~70 years",severity:"medium",icon:"ðŸ§¬"},
      {event:"Same biology, different mythology",consequence:"By 2026, evolutionary biology is identical. The science was inevitable. But 'Darwin' isn't shorthand for the idea. No Darwin Awards. No 'Darwinian' as an adjective. The culture around evolution is different even if the science isn't.",delay:"~160 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. The biology in your medicine, your food, your understanding of disease â€” all the same. Evolution was coming regardless.",
      tech:"Identical. Genomics, biotech, agricultural science â€” all built on evolutionary principles that Wallace or others would have established.",
      culture:"No 'Darwinism' as a cultural lightning rod. The creation-vs-evolution debate still exists but orbits different names. The GalÃ¡pagos aren't famous.",
      politics:"The social Darwinism movement of the late 1800s still happens under a different name. The misuse of evolutionary ideas for political ends was about power, not about Darwin specifically."
    }
  },
  curie: {
    cascade:[
      {event:"No isolation of radium and polonium",consequence:"Becquerel discovered radioactivity in 1896, but the Curies' painstaking chemical isolation of radioactive elements is what made it usable. Without Marie's work, radioactivity remains a laboratory curiosity longer.",delay:"Immediate",severity:"high",icon:"âš—ï¸"},
      {event:"Radiation therapy delayed",consequence:"Curie's direct work putting radium in doctors' hands during WWI â€” the mobile X-ray units, the 'petites Curies' â€” doesn't happen. Radiation's medical potential is explored later, by others, more slowly.",delay:"~15 years",severity:"high",icon:"ðŸ¥"},
      {event:"No female Nobel laureate until later",consequence:"Curie's two Nobel Prizes (1903, 1911) cracked the door for women in science. Without her towering example, the cultural argument that women can't do elite science persists longer.",delay:"~20 years",severity:"medium",icon:"ðŸ‘©â€ðŸ”¬"},
      {event:"Nuclear physics timeline shifts",consequence:"Rutherford, Bohr, and others still advance atomic theory, but the experimental techniques Curie pioneered for handling radioactive materials come later. The Manhattan Project might be delayed by 2-3 years.",delay:"~30 years",severity:"medium",icon:"âš›ï¸"},
      {event:"Same destination, harder road",consequence:"By mid-century, nuclear physics catches up completely. The science was too important to too many governments. But the human cost: fewer women entered physics in the early 1900s without Curie's example.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Your medical X-rays and cancer radiation therapy exist but arrived a few years later. The technology was inevitable; Curie accelerated it.",
      tech:"Nuclear technology is identical by now. The physics doesn't depend on any one person â€” too many governments needed it.",
      culture:"The archetype of the woman scientist is weaker. Curie's story â€” immigrant, twice-Nobel, died from her own research â€” is one of science's most powerful narratives. Without it, the cultural imagination of who does science is narrower.",
      politics:"France's early lead in nuclear research is weaker. The Curie Institute doesn't exist. French science loses prestige in the early 20th century."
    }
  },
  galileo: {
    cascade:[
      {event:"No telescopic observations of Jupiter's moons (1610)",consequence:"Others had telescopes â€” Harriot observed the moon â€” but Galileo published and argued. Without his specific observations and public advocacy, the Copernican model lacks its most dramatic evidence.",delay:"Immediate",severity:"high",icon:"ðŸ”­"},
      {event:"Heliocentrism wins more slowly",consequence:"Kepler's math and Tycho's data still point to a sun-centered system. But without Galileo's popular writings and confrontation with the Church, the cultural shift takes another generation.",delay:"~30 years",severity:"high",icon:"â˜€ï¸"},
      {event:"No founding text of experimental physics",consequence:"Galileo's Dialogues and Two New Sciences established how to do physics â€” experiments, math, thought experiments. Without him, the experimental method develops more gradually across multiple figures.",delay:"~40 years",severity:"medium",icon:"ðŸ“"},
      {event:"Newton's Principia delayed",consequence:"Newton built on Galileo's kinematics directly. Without Galileo's laws of motion, Newton has to derive more from scratch. The Principia might come 10-15 years later, or look quite different.",delay:"~80 years",severity:"medium",icon:"ðŸŽ"},
      {event:"Science still wins",consequence:"The scientific revolution happens regardless â€” the economic and military incentives were too strong. But the specific 'Galileo vs. the Church' narrative, which shaped how we think about science vs. authority, doesn't exist.",delay:"~150 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference whatsoever. The physics was coming. Your GPS, your engineering, your technology â€” all identical.",
      tech:"Identical. Possibly delayed by a decade in the 17th century, but fully caught up by the 18th.",
      culture:"No 'Galileo affair.' The defining story of science versus religious authority is different â€” maybe it's Giordano Bruno, maybe it's Kepler's mother's witch trial. The martyrdom narrative changes.",
      politics:"The Church's relationship with science follows a different path. Vatican astronomy might have started earlier without the Galileo embarrassment to live down."
    }
  },
  faraday: {
    cascade:[
      {event:"No electromagnetic induction discovery (1831)",consequence:"Faraday's experimental demonstration that a changing magnetic field creates electric current is the foundation of electrical power. Others (Henry, Lenz) were close, but Faraday got there first and understood it deepest.",delay:"Immediate",severity:"high",icon:"âš¡"},
      {event:"Electric generators delayed 5-10 years",consequence:"Joseph Henry discovered induction independently. Generators and electric motors still happen, but Faraday's conceptual framework â€” field lines, the 'field' concept itself â€” arrives later or never in the same form.",delay:"~5 years",severity:"high",icon:"ðŸ”Œ"},
      {event:"Maxwell's equations look different",consequence:"Maxwell explicitly mathematized Faraday's field concept. Without Faraday's physical intuition about fields, Maxwell might have developed electromagnetism in a more abstract, less visual way â€” or someone else does it.",delay:"~35 years",severity:"high",icon:"ðŸ“"},
      {event:"Electrical industry still emerges",consequence:"Edison, Westinghouse, Siemens â€” the industrialists who electrified the world â€” still do it. The underlying physics gets discovered. But the 'field' concept in physics might look different.",delay:"~50 years",severity:"medium",icon:"ðŸ­"},
      {event:"Modern physics has a different vocabulary",consequence:"Faraday gave physics the language of fields. Without him, we might talk about electromagnetic phenomena differently. The concept exists but the intuitive picture â€” field lines, flux â€” might be more mathematical, less visual.",delay:"~100 years",severity:"low",icon:"ðŸ§²"}
    ],
    modernDay:{
      daily:"Your lights work. Your motors run. Electrical power is identical â€” the discovery was 5-10 years from multiple people.",
      tech:"Same technology, possibly with slightly different underlying conceptual language. The 'field' might be described differently in textbooks.",
      culture:"No Faraday as the self-taught genius archetype. The Royal Institution Christmas Lectures might not exist in their current form â€” he started them.",
      politics:"No meaningful difference. Electrification was driven by economic forces, not by any one scientist."
    }
  },
  hawking: {
    cascade:[
      {event:"No Hawking radiation theory (1974)",consequence:"The prediction that black holes emit radiation â€” unifying quantum mechanics, general relativity, and thermodynamics â€” doesn't arrive in 1974. Bekenstein's black hole entropy work exists, but the radiation result needs someone else to derive.",delay:"Immediate",severity:"high",icon:"ðŸ•³ï¸"},
      {event:"Black hole thermodynamics delayed",consequence:"Other theorists (Unruh, Wald, Penrose) were working in adjacent territory. The result likely comes 5-15 years later, possibly from a different angle.",delay:"~5-15 years",severity:"medium",icon:"ðŸŒ¡ï¸"},
      {event:"No A Brief History of Time",consequence:"The 1988 bestseller that made cosmology accessible to millions doesn't exist. Pop-science publishing is weaker. Public interest in black holes and the Big Bang develops more slowly.",delay:"~14 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Disability representation in science absent",consequence:"Hawking's visibility as a scientist working with ALS for decades changed how people think about disability and intellectual capacity. That specific, powerful image doesn't exist.",delay:"~30 years",severity:"medium",icon:"â™¿"},
      {event:"Physics catches up, culture doesn't",consequence:"By 2026, theoretical physics is in the same place. The information paradox debate still rages. But public engagement with cosmology is measurably lower without Hawking's cultural presence.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Hawking radiation has no practical applications â€” it's a theoretical result about black holes.",
      tech:"Identical. Hawking's contributions were to pure theory, not technology.",
      culture:"Cosmology is less popular. Fewer people know what a black hole is. The image of the genius physicist in a wheelchair â€” one of science's most recognizable images â€” doesn't exist. Science communication is weaker.",
      politics:"No meaningful difference. Though Hawking's advocacy for disability rights and his public warnings about AI and climate change are absent."
    }
  },
  feynman: {
    cascade:[
      {event:"No QED renormalization (1948)",consequence:"Schwinger and Tomonaga independently developed quantum electrodynamics. The theory arrives regardless, but Feynman's version â€” diagrams, path integrals â€” is the one physicists actually use. Without it, QED is harder to calculate with.",delay:"Immediate",severity:"medium",icon:"âš›ï¸"},
      {event:"No Feynman diagrams",consequence:"This is the big one. Feynman diagrams are the visual language of particle physics. Without them, calculations that take a page take a book. Experimental predictions come slower. Particle physics is harder to do.",delay:"~5 years",severity:"high",icon:"ðŸ“Š"},
      {event:"Particle physics less productive",consequence:"The Standard Model still gets built, but more slowly. Every calculation is harder without Feynman's computational tools. Fewer predictions, slower experimental verification.",delay:"~20 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Physics education loses its best teacher",consequence:"The Feynman Lectures on Physics (1963) shaped how physics is taught worldwide. Without them, undergraduate physics education is more formal, less intuitive. Fewer people fall in love with physics.",delay:"~15 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Same physics, less joy",consequence:"The Standard Model is complete, the same particles discovered. But physics culture is more serious, more European, less playful. Feynman's influence on how physicists think â€” visual, irreverent, toy-model-first â€” is missing.",delay:"~50 years",severity:"low",icon:"ðŸŽ­"}
    ],
    modernDay:{
      daily:"No difference. Feynman's contributions were to theoretical tools, not consumer technology.",
      tech:"Slightly slower development of particle physics applications â€” but by 2026, everything has caught up. Medical imaging, materials science, semiconductor physics all the same.",
      culture:"Physics is perceived as more austere, less fun. No 'Surely You're Joking' archetype. The Challenger investigation plays out differently â€” Feynman's famous O-ring demonstration doesn't happen. NASA accountability might have been weaker.",
      politics:"The Challenger disaster investigation is less dramatic. Feynman's public demolition of NASA bureaucracy was a landmark in science-vs-institution accountability."
    }
  },
  maxwell: {
    cascade:[
      {event:"No unified electromagnetic theory (1865)",consequence:"Maxwell's equations unified electricity, magnetism, and light into one framework. Without this synthesis, these remain three separate phenomena studied by three separate communities.",delay:"Immediate",severity:"high",icon:"âš¡"},
      {event:"Radio not predicted from theory",consequence:"Maxwell predicted electromagnetic waves. Without that prediction, Hertz doesn't go looking for them in 1887. Radio waves might be discovered accidentally, but later â€” possibly 1900s.",delay:"~20 years",severity:"high",icon:"ðŸ“»"},
      {event:"No electromagnetic wave technology on schedule",consequence:"Radio, radar, television, wireless communication â€” all depend on understanding EM waves. A 10-15 year delay in discovery ripples through the entire 20th century communications revolution.",delay:"~30 years",severity:"high",icon:"ðŸ“¡"},
      {event:"Einstein's relativity delayed",consequence:"Einstein started from Maxwell's equations â€” the constant speed of light comes from them. Without Maxwell, special relativity needs a different starting point. It still happens, but perhaps 10 years later.",delay:"~40 years",severity:"medium",icon:"ðŸ’¡"},
      {event:"20th century technology delayed but arrives",consequence:"By mid-20th century, someone has unified electromagnetism. The math was there (Faraday's experiments, AmpÃ¨re's law). But the 10-15 year delay in radio cascades through radar, TV, and telecommunications.",delay:"~80 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"You have radio, TV, WiFi, cell phones â€” but the entire telecommunications timeline shifted 10-15 years later. Your grandparents grew up with slightly different technology than they actually did.",
      tech:"All the same technology exists. Maxwell's equations were sitting in the experimental data â€” someone was going to unify them. But the delay in radio means WWII radar technology was weaker, which could have changed the war.",
      culture:"No Maxwell as the bridge between Faraday and Einstein. The narrative of physics is different â€” the 'classical' era is organized differently in textbooks.",
      politics:"If radar arrived later, the Battle of Britain plays out differently. That's a genuinely high-stakes counterfactual â€” Britain's survival in 1940 depended heavily on radar."
    }
  },
  bohr: {
    cascade:[
      {event:"No Bohr model of the atom (1913)",consequence:"The quantized electron orbits model is wrong in detail but right in spirit â€” and it made quantum mechanics thinkable. Without it, the jump from Rutherford's nucleus to full quantum mechanics is harder.",delay:"Immediate",severity:"high",icon:"âš›ï¸"},
      {event:"Quantum mechanics develops differently",consequence:"Heisenberg and SchrÃ¶dinger still develop quantum mechanics in the 1920s, but without Bohr's institute in Copenhagen as the intellectual hub. The 'Copenhagen interpretation' doesn't exist. Physics is more fragmented geographically.",delay:"~12 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"No Copenhagen Institute as physics hub",consequence:"Bohr's institute trained a generation â€” Heisenberg, Pauli, Dirac, Gamow. Without it, these minds are scattered across European universities. Collaboration is slower. Quantum mechanics takes longer to mature.",delay:"~15 years",severity:"medium",icon:"ðŸŽ“"},
      {event:"Nuclear fission politics change",consequence:"Bohr personally warned the Allies about nuclear weapons and participated in the Manhattan Project debate. Without his influence, the political handling of atomic energy might differ â€” though the physics still happens.",delay:"~30 years",severity:"medium",icon:"â˜¢ï¸"},
      {event:"Same physics, different institutional history",consequence:"Quantum mechanics and nuclear physics arrive regardless. But the Copenhagen school's dominance, its interpretation of quantum mechanics, its style of doing physics â€” all missing. The field looks more German, less Danish.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Your electronics, your medical imaging, your lasers â€” all depend on quantum mechanics, which was coming regardless.",
      tech:"Identical. Quantum mechanics was driven by too many experimental results for any one person to delay it significantly.",
      culture:"The 'Copenhagen interpretation' â€” the standard way we talk about quantum weirdness â€” has a different name or doesn't exist as a unified viewpoint. Quantum philosophy might be more fragmented.",
      politics:"Denmark is less prominent in the history of physics. The Bohr-Einstein debates, which shaped how we talk about quantum reality, don't happen in the same form."
    }
  },
  planck: {
    cascade:[
      {event:"No quantum hypothesis (1900)",consequence:"Planck's desperate mathematical fix â€” energy comes in packets â€” solved the black-body radiation problem and accidentally launched quantum mechanics. Without it, the ultraviolet catastrophe remains an embarrassment.",delay:"Immediate",severity:"high",icon:"ðŸ’¡"},
      {event:"Quantum idea arrives from a different door",consequence:"Einstein's 1905 photoelectric effect paper also quantized light. Without Planck's constant already existing, Einstein might still propose light quanta â€” but from experimental data rather than theory. The idea arrives 5 years later.",delay:"~5 years",severity:"high",icon:"ðŸ“"},
      {event:"Atomic physics delayed",consequence:"Bohr's 1913 model used Planck's constant directly. Without it, the quantized atom takes longer to formulate. The path from Rutherford's experiments to quantum atomic models is harder.",delay:"~15 years",severity:"medium",icon:"âš›ï¸"},
      {event:"Quantum mechanics still emerges by 1930s",consequence:"The experimental evidence was overwhelming â€” spectral lines, photoelectric effect, black-body radiation. Someone quantizes energy. The mathematics forces it. But the field is 5-10 years behind.",delay:"~30 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Transistor delayed, computing delayed",consequence:"A 5-10 year delay in quantum mechanics means semiconductor physics arrives later. The transistor (1947) might come in the mid-1950s. The computer revolution starts later.",delay:"~50 years",severity:"medium",icon:"ðŸ’»"}
    ],
    modernDay:{
      daily:"Your smartphone might be a technology of the 2010s instead of the 2000s. The entire digital revolution shifted by 5-10 years. Small delay, big compounding effect.",
      tech:"Same technology, time-shifted. Every quantum-dependent technology â€” lasers, transistors, LEDs, MRI â€” arrives slightly later. By 2026 you've caught up, but the 20th century looked different.",
      culture:"No 'Planck' as the reluctant revolutionary. The narrative of quantum mechanics â€” the conservative physicist who accidentally upended classical physics â€” is different.",
      politics:"If computing arrived 5-10 years later, the Cold War's technology race had different timing. Sputnik and the space race might have shifted."
    }
  },
  rutherford: {
    cascade:[
      {event:"No nuclear model of the atom (1911)",consequence:"Rutherford's gold foil experiment proved the atom has a dense nucleus. Without it, atomic physics lacks its key structural insight. Thomson's 'plum pudding' model persists longer.",delay:"Immediate",severity:"high",icon:"âš›ï¸"},
      {event:"Bohr's quantum atom delayed",consequence:"Bohr built his 1913 model on Rutherford's nucleus. Without the nuclear model, quantum atomic theory needs a different starting point â€” probably comes from spectroscopy rather than scattering experiments.",delay:"~5 years",severity:"high",icon:"ðŸ”¬"},
      {event:"Nuclear physics develops more slowly",consequence:"Rutherford also achieved the first artificial nuclear transmutation (1917) and predicted the neutron. His lab trained Chadwick, Cockcroft, Walton. Without his school, nuclear physics is more scattered.",delay:"~15 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Fission still discovered",consequence:"Nuclear fission (1938) was discovered by Hahn and Meitner working from accumulated nuclear physics knowledge. It still happens, but the experimental foundation was thinner without Rutherford's group.",delay:"~25 years",severity:"medium",icon:"â˜¢ï¸"},
      {event:"Same nuclear age, different origin story",consequence:"The atomic bomb still gets built â€” the physics and the political motivation were both too strong. But British nuclear physics is weaker without Rutherford's Cavendish Lab legacy.",delay:"~35 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Nuclear power, medical isotopes, atomic theory â€” all the same. Multiple experimentalists were probing atomic structure.",
      tech:"Identical. The nuclear model of the atom was inevitable â€” the experimental tools existed.",
      culture:"New Zealand loses its most famous scientist. The Cavendish Laboratory's golden era is dimmer â€” Rutherford built it into the world's leading physics lab.",
      politics:"Britain's early nuclear weapons program might have been weaker without the Cavendish pipeline of nuclear expertise. The US might have had an even larger lead."
    }
  },
  edison: {
    cascade:[
      {event:"No practical incandescent light bulb (1879)",consequence:"Swan in England was months behind Edison. The light bulb still happens in 1880. But Edison's real contribution wasn't the bulb â€” it was the system: generators, wiring, meters, power stations.",delay:"~1 year",severity:"medium",icon:"ðŸ’¡"},
      {event:"No Pearl Street Station model",consequence:"Edison built the first commercial power grid in Manhattan (1882). Without his systems thinking â€” the whole package, not just the bulb â€” electrification happens piecemeal, city by city, without a template.",delay:"~3 years",severity:"high",icon:"ðŸ­"},
      {event:"Electrification still sweeps the world",consequence:"Westinghouse and Tesla's AC system was better anyway. Edison actually slowed progress by fighting AC. Without him, AC might have won faster. The 'War of Currents' doesn't happen.",delay:"~10 years",severity:"medium",icon:"âš¡"},
      {event:"No Menlo Park invention factory",consequence:"Edison's biggest innovation was the industrial research laboratory itself â€” systematic invention as a business. Without this model, Bell Labs, Xerox PARC, and corporate R&D develop from different roots.",delay:"~20 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Different innovation culture",consequence:"The 'lone inventor' mythology is weaker without Edison as its poster child. The patent system might develop differently. Corporate R&D still emerges â€” the economic incentives are too strong â€” but later.",delay:"~40 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Your lights work. Your power grid exists. Honestly, AC might have won sooner without Edison's stubborn resistance. Electrification might be marginally ahead of schedule.",
      tech:"The phonograph arrives later or from someone else. Motion pictures develop differently â€” Edison's kinetoscope was one of several competing approaches. GE doesn't exist in its current form.",
      culture:"No Edison-as-genius mythology. No '1% inspiration, 99% perspiration' quote. The American inventor archetype is weaker or attached to a different name â€” maybe Bell, maybe Westinghouse.",
      politics:"No meaningful difference. Electrification was an economic inevitability driven by industrialization."
    }
  },
  copernicus: {
    cascade:[
      {event:"No De Revolutionibus (1543)",consequence:"Copernicus's heliocentric model wasn't based on better data â€” Ptolemy's system predicted planetary positions just as well. What Copernicus provided was a simpler, more elegant framework. Without it, heliocentrism waits for better telescopes.",delay:"Immediate",severity:"high",icon:"â˜€ï¸"},
      {event:"Kepler works from Ptolemy",consequence:"Kepler used Copernicus's sun-centered model as his starting point for discovering elliptical orbits. Without it, Kepler might still discover his laws â€” Tycho's data demanded it â€” but the path is harder.",delay:"~60 years",severity:"medium",icon:"ðŸª"},
      {event:"Galileo's telescope confirms... what?",consequence:"When Galileo turns his telescope to Jupiter in 1610, he sees moons orbiting Jupiter â€” evidence against geocentrism. But without Copernicus's model already in circulation, interpreting these observations takes longer.",delay:"~70 years",severity:"medium",icon:"ðŸ”­"},
      {event:"Scientific Revolution slightly delayed",consequence:"The psychological break â€” the Earth isn't the center â€” is the key contribution. Someone makes this break eventually. Aristarchus proposed it in ancient Greece. But the timing shifts, and the 1600s look different.",delay:"~80 years",severity:"medium",icon:"ðŸ“"},
      {event:"Same physics by Newton's era",consequence:"By the time Newton writes the Principia, the heliocentric model is established through accumulated evidence regardless. The delay is 20-40 years at most. Astronomy's timeline shifts; physics catches up.",delay:"~150 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Heliocentrism was going to be confirmed by telescopes regardless of who proposed the theory first.",
      tech:"Identical. Astronomy and physics arrive at the same place.",
      culture:"The 'Copernican Revolution' has a different name. The metaphor of 'displacing humans from the center' â€” used in philosophy, psychology, biology â€” attaches to a different moment.",
      politics:"Poland loses its most famous scientist. The narrative of the Scientific Revolution is rewritten â€” it might start with Galileo's telescope rather than Copernicus's theory."
    }
  },
  mendeleev: {
    cascade:[
      {event:"No periodic table (1869)",consequence:"Lothar Meyer published a similar table the same year. Newlands had a partial version earlier. The periodicity of elements was emerging from the data â€” multiple chemists were seeing it.",delay:"~1 year",severity:"medium",icon:"ðŸ§ª"},
      {event:"No bold predictions of undiscovered elements",consequence:"Mendeleev's genius was leaving gaps and predicting the properties of elements not yet found. Meyer didn't do this as boldly. Without those predictions (gallium, scandium, germanium), the table is less convincing.",delay:"~5 years",severity:"medium",icon:"ðŸ”®"},
      {event:"Chemistry still organizes around periodicity",consequence:"The experimental evidence was overwhelming. By the 1880s, someone's version of the periodic table becomes standard. Mendeleev accelerated adoption by 5-10 years at most.",delay:"~10 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Atomic theory develops the same way",consequence:"Moseley's X-ray work (1913) established atomic number as the organizing principle, correcting and improving Mendeleev's weight-based ordering. This happens regardless.",delay:"~45 years",severity:"low",icon:"âš›ï¸"},
      {event:"Same chemistry, different hero",consequence:"Meyer or Newlands gets the credit. Chemistry textbooks look the same. The periodic table is identical. Only the name attached to it changes.",delay:"~100 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Completely identical. The periodic table was an inevitable discovery from the data.",
      tech:"No difference whatsoever. Chemistry and materials science develop on the same timeline.",
      culture:"Russia loses a national scientific hero. Chemistry classrooms have 'Meyer's Periodic Table' or 'Newlands' Table' on the wall instead.",
      politics:"No meaningful difference. The periodic table was a discovery, not an invention â€” it was sitting in the data waiting for anyone to notice the pattern."
    }
  },
  lavoisier: {
    cascade:[
      {event:"No oxygen theory of combustion (1770s)",consequence:"Lavoisier disproved phlogiston and established that combustion is combination with oxygen. Scheele and Priestley had isolated oxygen, but neither understood what it meant. Without Lavoisier, chemistry stays confused longer.",delay:"Immediate",severity:"high",icon:"ðŸ”¥"},
      {event:"Chemical nomenclature delayed",consequence:"Lavoisier created the system of naming chemicals that we still use â€” oxygen, hydrogen, the logic of compound names. Without it, chemistry lacks a shared language for another generation.",delay:"~10 years",severity:"high",icon:"ðŸ“"},
      {event:"Quantitative chemistry slower to emerge",consequence:"Lavoisier's insistence on precise measurement â€” weighing everything, conservation of mass â€” made chemistry a quantitative science. Without this methodological revolution, chemistry remains more qualitative.",delay:"~20 years",severity:"medium",icon:"âš–ï¸"},
      {event:"Dalton's atomic theory has weaker foundation",consequence:"Dalton built his atomic theory (1803) on the quantitative chemistry Lavoisier established. Without that foundation, atomic theory develops from a different, possibly weaker starting point.",delay:"~30 years",severity:"medium",icon:"âš›ï¸"},
      {event:"Industrial chemistry still arrives",consequence:"The chemical industry of the 19th century was driven by economic demand â€” dyes, explosives, fertilizer. The science catches up because the money demands it. Delay of 10-20 years.",delay:"~50 years",severity:"medium",icon:"ðŸ­"}
    ],
    modernDay:{
      daily:"Same world, arrived slightly later. Modern chemistry was inevitable â€” the experiments were reproducible and the economic incentives enormous.",
      tech:"Chemical industry, pharmaceuticals, materials â€” all the same. Perhaps 10-15 years delayed in the 18th-19th century, fully caught up by the 20th.",
      culture:"France loses the 'father of modern chemistry.' The French Revolution still executes him (or rather, doesn't, since he's not there) â€” but the story of the revolution killing its greatest scientist is lost.",
      politics:"The French Revolution's relationship with science is different. Lavoisier's execution ('The Republic has no need of scientists') is one of history's most famous acts of anti-intellectualism."
    }
  },
  kepler: {
    cascade:[
      {event:"No laws of planetary motion (1609-1619)",consequence:"Kepler's three laws â€” elliptical orbits, equal areas, period-distance relationship â€” emerged from Tycho Brahe's data. Without Kepler, someone else inherits Tycho's data, but the mathematical genius to extract these laws is rare.",delay:"Immediate",severity:"high",icon:"ðŸª"},
      {event:"Circular orbit assumption persists",consequence:"Astronomers keep trying to make Copernicus's circular orbits work with epicycles. The data keeps refusing. Eventually someone notices the ellipses, but it might take decades.",delay:"~20 years",severity:"high",icon:"â­•"},
      {event:"Newton's gravity has weaker empirical support",consequence:"Newton derived his law of gravity from Kepler's third law. Without it, Newton might still discover gravity, but proving it matches planetary observations is much harder.",delay:"~70 years",severity:"medium",icon:"ðŸŽ"},
      {event:"Astronomy progresses more slowly",consequence:"Kepler also did foundational work in optics and wrote about the supernova of 1604. His broad contributions to astronomy are scattered across other, less brilliant minds.",delay:"~50 years",severity:"medium",icon:"ðŸ”­"},
      {event:"Same physics eventually",consequence:"Elliptical orbits are in the data. Someone finds them. Newton or a Newton-equivalent derives gravity. The delay is probably 20-30 years. Significant, but not permanent.",delay:"~100 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Satellite orbits, GPS, space missions â€” all work the same. The laws of gravity are the same regardless of who discovered them.",
      tech:"Identical. Orbital mechanics is too fundamental and too verifiable for the delay to persist.",
      culture:"Germany loses one of its scientific heroes. The Kepler space telescope has a different name. The narrative of the Scientific Revolution loses its most colorful mathematical mystic.",
      politics:"No meaningful difference. Kepler's contributions were purely scientific."
    }
  },
  pasteur: {
    cascade:[
      {event:"No germ theory of disease (1860s)",consequence:"Koch, Lister, and others were converging on the same idea. Pasteur's specific genius was the experimental proof â€” his swan-neck flask experiment killed spontaneous generation. Without it, germ theory is accepted 10-15 years later.",delay:"~10 years",severity:"high",icon:"ðŸ¦ "},
      {event:"No pasteurization",consequence:"The process of heating liquids to kill bacteria â€” saving millions from food-borne illness â€” is delayed. Someone else discovers it, but 'pasteurization' has a different name and arrives later.",delay:"~10 years",severity:"high",icon:"ðŸ¥›"},
      {event:"Vaccination program delayed",consequence:"Pasteur developed vaccines for anthrax and rabies. Jenner had already established vaccination; Pasteur extended the principle. Without him, vaccine development is slower by a decade.",delay:"~15 years",severity:"medium",icon:"ðŸ’‰"},
      {event:"Antiseptic surgery still happens",consequence:"Lister already championed antiseptic technique. Koch's postulates still establish which microbes cause which diseases. The germ theory revolution happens â€” just more slowly, from more sources.",delay:"~15 years",severity:"medium",icon:"ðŸ¥"},
      {event:"Same medical world, delayed arrival",consequence:"By 1920, everything Pasteur contributed is established anyway. Microbiology is too important and too experimentally verifiable. The delay costs lives â€” maybe millions â€” but the science is identical by mid-century.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Identical. Your milk is heat-treated, your water is clean, your infections are treated with antibiotics. Germ theory was inevitable.",
      tech:"Same medical technology. Microbiology, immunology, public health â€” all the same, just arrived from a slightly different path.",
      culture:"France and French science lose an icon. The 'Pasteur Institute' doesn't exist. The rivalry between Pasteur and Koch â€” France vs. Germany in science â€” plays out differently.",
      politics:"Public health reform might have been slower in the late 1800s. The 10-15 year delay in germ theory acceptance means more cholera and typhoid epidemics in European cities."
    }
  },
  ibnhaytham: {
    cascade:[
      {event:"No Book of Optics (~1011)",consequence:"Ibn al-Haytham's seven-volume work established that vision works by light entering the eye (not emanating from it) and pioneered experimental methodology. Without it, European optics develops from different sources, later.",delay:"Immediate",severity:"high",icon:"ðŸ‘ï¸"},
      {event:"Camera obscura understood later",consequence:"His explanation of the camera obscura was foundational. Without it, the optical principles behind image projection are formalized later â€” delaying both art (perspective) and science (lenses).",delay:"~200 years",severity:"medium",icon:"ðŸ“·"},
      {event:"Medieval European science has weaker foundation",consequence:"Roger Bacon, Kepler, and Descartes all built on translated versions of his work. Without this transmission, European optics starts from a lower base.",delay:"~300 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Scientific method has different origin story",consequence:"His insistence on hypothesis, experiment, and mathematical proof is one of the earliest systematic articulations of scientific method. Without it, the methodology develops from other Islamic and European sources.",delay:"~400 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Same optics eventually",consequence:"Lenses, telescopes, microscopes â€” the economic and military demand for better optics drives the science regardless. But the Islamic Golden Age's contribution to Western science is thinner without his work.",delay:"~500 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Modern optics doesn't depend on any medieval text. The physics was rediscovered many times over.",
      tech:"Identical. Lenses, cameras, fiber optics â€” all driven by 17th-19th century developments that would have happened regardless.",
      culture:"The history of science loses one of its most important non-European figures. The narrative that scientific method was a purely European invention is harder to challenge.",
      politics:"The Islamic world's intellectual legacy is perceived as weaker. Cultural arguments about the Islamic Golden Age's contributions to Western civilization lose a key example."
    }
  },
  ramanujan: {
    cascade:[
      {event:"No notebooks full of theorems (1910s)",consequence:"Ramanujan independently discovered thousands of results in number theory, infinite series, and continued fractions. Many were new; some anticipated results that took decades for others to prove.",delay:"Immediate",severity:"medium",icon:"ðŸ““"},
      {event:"Several mathematical results delayed decades",consequence:"His work on partition functions, mock theta functions, and modular forms anticipated entire fields. Without him, some results arrive 20-50 years later when others rediscover them.",delay:"~20-50 years",severity:"medium",icon:"ðŸ“"},
      {event:"Hardy-Ramanujan collaboration doesn't happen",consequence:"Their partnership produced foundational work in number theory. Hardy called Ramanujan the most remarkable mathematician he'd ever met. Without this collaboration, Hardy's own work takes different directions.",delay:"~5 years",severity:"medium",icon:"ðŸ¤"},
      {event:"Mock theta functions discovered much later",consequence:"Ramanujan's deathbed letter to Hardy about mock theta functions wasn't fully understood until the 2000s. Without it, this entire area of mathematics develops from different origins â€” if at all.",delay:"~80 years",severity:"medium",icon:"ðŸ”®"},
      {event:"Mathematics loses singular beauty",consequence:"Many of Ramanujan's results have been independently proven. But his specific style â€” intuitive leaps that took formal mathematics decades to catch up with â€” represents a genuinely unique mathematical mind.",delay:"Permanent",severity:"medium",icon:"âœ¨"}
    ],
    modernDay:{
      daily:"No direct difference. Ramanujan's mathematics has no consumer applications â€” it's pure number theory.",
      tech:"Some modern applications of his work â€” in string theory, black hole physics, computer science â€” might have developed from different mathematical tools. The results are the same; the path differs.",
      culture:"India loses its most celebrated mathematical genius. The 'self-taught genius from a small town' narrative in mathematics is weaker. The story of his letter to Hardy is one of math's great origin stories.",
      politics:"The argument that mathematical talent exists everywhere, regardless of education or privilege, loses its most powerful example."
    }
  },
  crick: {
    cascade:[
      {event:"No DNA double helix model (1953)",consequence:"Watson, Wilkins, and Franklin were all working on the structure. Pauling was close. Without Crick's specific insight about base pairing, the structure is solved within 1-2 years by someone else.",delay:"~1-2 years",severity:"medium",icon:"ðŸ§¬"},
      {event:"Central dogma of biology still established",consequence:"Crick's 'central dogma' â€” DNA â†’ RNA â†’ protein â€” was a conceptual breakthrough. Without him, this emerges from accumulated experimental evidence by the late 1950s regardless.",delay:"~3-5 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Genetic code still cracked",consequence:"The race to decode which DNA triplets code for which amino acids was a collective effort. Nirenberg, Khorana, and others crack it whether Crick is involved or not.",delay:"~5 years",severity:"low",icon:"ðŸ“"},
      {event:"Molecular biology develops the same way",consequence:"The tools, the techniques, the institutional support â€” all existed independently of Crick. The field was moving fast with or without any single contributor.",delay:"~10 years",severity:"low",icon:"ðŸ›ï¸"},
      {event:"Identical genetics by 1970",consequence:"By the time recombinant DNA technology arrives in the 1970s, all of Crick's contributions have been independently established. The Human Genome Project happens on the same timeline.",delay:"~20 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Completely identical. Your genetic medicine, your DNA tests, your understanding of heredity â€” all the same.",
      tech:"Identical. Genomics, CRISPR, personalized medicine â€” all on the same trajectory. The double helix was weeks away from multiple groups.",
      culture:"The Watson-and-Crick story â€” possibly the most famous scientific collaboration â€” has a different form. The credit question around Rosalind Franklin plays out differently.",
      politics:"No meaningful difference. Molecular biology was driven by institutional and economic forces far larger than any individual."
    }
  },
  rosalind: {
    cascade:[
      {event:"No Photo 51 (1952)",consequence:"Franklin's X-ray diffraction image of DNA was the key experimental evidence for the helical structure. Without it, Watson and Crick lack their most crucial data point. The double helix model is delayed.",delay:"~1-2 years",severity:"medium",icon:"ðŸ“¸"},
      {event:"DNA structure solved slightly later",consequence:"Wilkins, Pauling, and others were working on DNA crystallography. The data would have come from someone â€” Franklin's technique was the best, but not the only approach. Delay of 1-3 years.",delay:"~1-3 years",severity:"medium",icon:"ðŸ§¬"},
      {event:"X-ray crystallography of biomolecules still advances",consequence:"Franklin's broader contributions to understanding coal, virus structure, and RNA were significant but not singular. Other crystallographers were working in parallel.",delay:"~5 years",severity:"low",icon:"ðŸ”¬"},
      {event:"Credit question doesn't exist",consequence:"The controversy over whether Franklin received proper credit for DNA â€” and the broader question of women's contributions being overlooked in science â€” loses its most powerful specific example.",delay:"Cultural",severity:"medium",icon:"âš–ï¸"},
      {event:"Same biology, different justice narrative",consequence:"DNA science is identical. But the conversation about gender in science, about whose contributions get credited, about stolen data and Nobel exclusions â€” all that discourse is different.",delay:"Permanent",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Completely identical. DNA science doesn't depend on Franklin â€” the structure was about to be solved by multiple groups.",
      tech:"No difference. Genomics, biotech, medicine â€” all the same.",
      culture:"The most famous case of a woman scientist being denied credit doesn't exist. The conversation about gender bias in science loses its sharpest example. The 2023 Nobel controversy about her photo can't happen.",
      politics:"The push for recognizing women's contributions in STEM â€” which Franklin's story has powerfully fueled â€” has a different, possibly weaker set of examples to draw from."
    }
  },
  heisenberg: {
    cascade:[
      {event:"No uncertainty principle (1927)",consequence:"Heisenberg's insight that you can't simultaneously know a particle's position and momentum with perfect precision wasn't just a measurement problem â€” it's fundamental to reality. Without it, quantum mechanics is interpreted differently.",delay:"Immediate",severity:"high",icon:"ðŸ“"},
      {event:"Matrix mechanics still exists but is overshadowed",consequence:"Heisenberg developed matrix mechanics before SchrÃ¶dinger's wave equation. Without him, SchrÃ¶dinger's version dominates from the start. The mathematical equivalence is proven later by someone else.",delay:"~2 years",severity:"medium",icon:"ðŸ”¢"},
      {event:"German nuclear program weaker",consequence:"Heisenberg led Germany's wartime nuclear research â€” and may have deliberately slowed it. Without him, Germany's bomb program is led by someone else. Whether this makes it faster or slower is one of WWII's great what-ifs.",delay:"~15 years",severity:"high",icon:"â˜¢ï¸"},
      {event:"Quantum interpretation debates different",consequence:"The Bohr-Heisenberg partnership shaped the Copenhagen interpretation. Without Heisenberg's contributions, quantum philosophy develops from SchrÃ¶dinger and Born's perspectives instead.",delay:"~20 years",severity:"medium",icon:"ðŸ¤”"},
      {event:"Same quantum mechanics by 1940",consequence:"The physics arrives regardless. SchrÃ¶dinger, Born, Dirac â€” the mathematical tools existed. But the conceptual framework, especially how we talk about measurement and uncertainty, is different.",delay:"~15 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Your electronics work the same. Quantum mechanics doesn't depend on Heisenberg.",
      tech:"Identical. Semiconductor physics, lasers, MRI â€” all based on quantum mechanics that multiple people were developing.",
      culture:"The phrase 'uncertainty principle' doesn't exist as a cultural metaphor. We lose one of the most misunderstood but widely referenced ideas in popular science.",
      politics:"The biggest question: what happens to Germany's nuclear program in WWII? If a more ambitious physicist leads it, the war's endgame might change."
    }
  },
  dirac: {
    cascade:[
      {event:"No Dirac equation (1928)",consequence:"Dirac's equation, which unified quantum mechanics with special relativity, predicted antimatter before it was observed. Without it, the positron's discovery in 1932 is a surprise with no theoretical framework.",delay:"Immediate",severity:"high",icon:"âš›ï¸"},
      {event:"Antimatter discovered but not predicted",consequence:"Anderson still discovers the positron in cosmic rays. But without Dirac's prediction, it takes longer to understand what it is. Quantum field theory develops more slowly from the experimental side.",delay:"~4 years",severity:"medium",icon:"ðŸ’¥"},
      {event:"Quantum field theory delayed",consequence:"Dirac's equation was the first successful quantum field theory. Without it, QED and the Standard Model take longer to develop. Schwinger and Feynman have less to build on.",delay:"~10 years",severity:"high",icon:"ðŸ“Š"},
      {event:"Same particle physics eventually",consequence:"The experimental discoveries â€” positron, muon, pion â€” still happen. Theory catches up, driven by data. But the elegant mathematical framework Dirac provided is reconstructed piece by piece rather than arriving whole.",delay:"~20 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Physics loses rare mathematical beauty",consequence:"Dirac's contributions were uniquely elegant. His style â€” demanding mathematical beauty as a guide to truth â€” influenced how theoretical physics is done. Without him, the field is slightly more empirical, less aesthetic.",delay:"Permanent",severity:"low",icon:"âœ¨"}
    ],
    modernDay:{
      daily:"No difference. Antimatter has no consumer applications. Your daily life is unchanged.",
      tech:"PET scans (which use positrons) still exist â€” the positron was discovered experimentally regardless. Medical imaging timeline might shift by a few years.",
      culture:"Physics loses one of its most enigmatic figures. Dirac's famous terseness, his insistence on beauty in equations â€” these shaped physics culture. Without him, theoretical physics is slightly less aesthetic.",
      politics:"No meaningful difference. Dirac's contributions were purely theoretical."
    }
  },
  fermi: {
    cascade:[
      {event:"No Chicago Pile-1 (1942)",consequence:"Fermi built the world's first nuclear reactor. Without him, the Manhattan Project lacks its most versatile physicist â€” the man who could do theory, experiment, and engineering. The bomb project is slower.",delay:"Immediate",severity:"high",icon:"â˜¢ï¸"},
      {event:"Manhattan Project delayed 1-2 years",consequence:"Fermi's contributions spanned neutron physics, reactor design, and bomb testing. Oppenheimer loses his best all-around physicist. Others fill the gaps, but less efficiently.",delay:"~1-2 years",severity:"high",icon:"ðŸ’£"},
      {event:"Nuclear power delayed",consequence:"Fermi's reactor was the proof of concept for nuclear energy. Without it, nuclear power develops from the weapons program â€” but the civilian application comes later, possibly by 5-10 years.",delay:"~10 years",severity:"medium",icon:"âš¡"},
      {event:"Particle physics loses its most productive experimentalist",consequence:"Fermi's postwar work at Chicago trained a generation of particle physicists and produced key results. His students won numerous Nobel Prizes. That intellectual pipeline is weaker.",delay:"~15 years",severity:"medium",icon:"ðŸŽ“"},
      {event:"Same nuclear world, different path",consequence:"Nuclear weapons and nuclear power still happen â€” the physics was understood by many. But the American nuclear program is 1-2 years slower, which might matter for the end of WWII.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Nuclear power plants exist but arrived slightly later. If the Manhattan Project was delayed, the end of WWII might have played out differently â€” more conventional bombing, possibly a land invasion of Japan.",
      tech:"Same nuclear technology. Fermi was brilliantly versatile but not singular â€” the physics was known to many.",
      culture:"Italy loses its greatest modern physicist. The 'Fermi paradox' has a different name. 'Fermi estimation' as a concept might not exist.",
      politics:"The big question: if the atomic bomb arrives 1-2 years later, does WWII end differently? Does the Soviet Union get the bomb sooner relative to the US?"
    }
  },
  schrodinger: {
    cascade:[
      {event:"No wave mechanics (1926)",consequence:"SchrÃ¶dinger's wave equation gave quantum mechanics its most usable mathematical form. Heisenberg's matrix mechanics existed, but wave mechanics was more intuitive and more widely adopted.",delay:"Immediate",severity:"high",icon:"ðŸŒŠ"},
      {event:"Quantum chemistry develops more slowly",consequence:"SchrÃ¶dinger's equation is what chemists actually use. Without the wave function, molecular orbital theory and computational chemistry develop from Heisenberg's more abstract framework â€” harder to work with.",delay:"~5 years",severity:"medium",icon:"âš—ï¸"},
      {event:"No SchrÃ¶dinger's cat thought experiment",consequence:"The 1935 thought experiment that made quantum weirdness vivid for non-physicists doesn't exist. The measurement problem is discussed in more abstract terms.",delay:"~9 years",severity:"low",icon:"ðŸ±"},
      {event:"Quantum mechanics still complete by 1930",consequence:"Born, Heisenberg, Dirac â€” the mathematical framework gets built regardless. SchrÃ¶dinger's specific contribution was showing that wave mechanics and matrix mechanics are equivalent.",delay:"~5 years",severity:"medium",icon:"ðŸ“"},
      {event:"Same physics, different pedagogy",consequence:"Physics textbooks teach quantum mechanics from Heisenberg's matrices rather than SchrÃ¶dinger's waves. The subject is harder to learn. Fewer chemists and materials scientists can use it intuitively.",delay:"~30 years",severity:"low",icon:"ðŸ“š"}
    ],
    modernDay:{
      daily:"No difference in technology. But the generation of scientists trained in the 1930s-50s found quantum mechanics slightly harder to use, which might have slowed materials science marginally.",
      tech:"Identical. Semiconductors, lasers, all the same â€” the physics was established by multiple people.",
      culture:"No SchrÃ¶dinger's cat. The most famous thought experiment in physics doesn't exist. Pop culture references to quantum mechanics use different metaphors.",
      politics:"No meaningful difference. Austria loses a famous scientist but this doesn't affect geopolitics."
    }
  },
  pauling: {
    cascade:[
      {event:"No chemical bond theory (1930s)",consequence:"Pauling's 'The Nature of the Chemical Bond' revolutionized how chemists think about molecular structure. Without it, quantum chemistry develops more slowly, from European theorists rather than Pauling's intuitive approach.",delay:"~5 years",severity:"high",icon:"ðŸ”—"},
      {event:"Protein structure solved differently",consequence:"Pauling discovered the alpha helix in proteins (1951). Without him, this comes from X-ray crystallographers â€” Perutz and Kendrew â€” but perhaps a few years later.",delay:"~3 years",severity:"medium",icon:"ðŸ§¬"},
      {event:"No anti-nuclear testing movement leader",consequence:"Pauling's Nobel Peace Prize (1962) for anti-nuclear activism was enormously influential. Without his scientific credibility backing the peace movement, the Test Ban Treaty might be delayed.",delay:"~15 years",severity:"medium",icon:"â˜®ï¸"},
      {event:"Vitamin C mania doesn't happen",consequence:"Pauling's controversial advocacy for megadose vitamin C was wrong but hugely influential. Without it, the supplement industry develops differently. Orthomolecular medicine doesn't exist.",delay:"~30 years",severity:"low",icon:"ðŸŠ"},
      {event:"Same chemistry, different public science",consequence:"Chemical bond theory arrives regardless. But the model of scientist-as-public-intellectual-and-activist is weaker without Pauling's dual Nobel example.",delay:"~40 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in chemistry or medicine. You might take fewer vitamin supplements â€” the megadose fad was largely Pauling's doing.",
      tech:"Chemical bond theory is identical â€” the quantum mechanics demanded it. Drug design, materials science, all the same.",
      culture:"The supplement industry is smaller. The idea that a Nobel laureate endorsed megadose vitamins gave the practice enormous credibility. Without Pauling, it's fringe.",
      politics:"The nuclear test ban movement is weaker without Pauling's scientific authority. The 1963 Partial Test Ban Treaty might come later."
    }
  },
  hubble: {
    cascade:[
      {event:"No proof that galaxies exist beyond the Milky Way (1924)",consequence:"Hubble proved that 'nebulae' were actually distant galaxies â€” the universe was vastly larger than anyone thought. Without him, this discovery comes from other astronomers using the same telescopes, probably within 5 years.",delay:"~5 years",severity:"high",icon:"ðŸŒŒ"},
      {event:"Expanding universe discovered later",consequence:"Hubble's 1929 observation that galaxies are receding â€” the universe is expanding â€” was based on Slipher's earlier data. LemaÃ®tre had already proposed expansion theoretically. Without Hubble, the discovery is attributed to LemaÃ®tre.",delay:"~2 years",severity:"medium",icon:"ðŸ”­"},
      {event:"Big Bang theory still develops",consequence:"LemaÃ®tre, Gamow, and others build the Big Bang theory regardless. The observational evidence was accumulating from multiple astronomers. Hubble accelerated, not created, the paradigm shift.",delay:"~5 years",severity:"medium",icon:"ðŸ’¥"},
      {event:"Space telescope named differently",consequence:"The Hubble Space Telescope, launched 1990, gets a different name. This is trivial for science but meaningful for public engagement â€” 'Hubble' became synonymous with deep space imagery.",delay:"Cultural",severity:"low",icon:"ðŸ›°ï¸"},
      {event:"Same cosmology by 1940",consequence:"Observational cosmology was advancing rapidly. Hubble's contributions were real but not singular. The field catches up within a decade.",delay:"~15 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Cosmology and space science are identical.",
      tech:"Same telescopes, same observations, same understanding of the universe.",
      culture:"The space telescope has a different name. The iconic Hubble Deep Field images exist but are called something else. 'Hubble' isn't a household word.",
      politics:"No meaningful difference. Astronomy has little political impact."
    }
  },
  goodall: {
    cascade:[
      {event:"No Gombe chimpanzee research (1960)",consequence:"Goodall's decades-long field study of wild chimpanzees â€” showing tool use, social bonds, personalities â€” wasn't the only primate research, but it was the most visible and the most transformative for public understanding.",delay:"Immediate",severity:"medium",icon:"ðŸ’"},
      {event:"Primate tool use discovered later",consequence:"Japanese primatologists were also observing tool use. The discovery happens, but without Goodall's specific observations and narrative gifts, it takes longer to penetrate public consciousness.",delay:"~5 years",severity:"medium",icon:"ðŸ”§"},
      {event:"Animal cognition research weaker",consequence:"Goodall's naming of chimps, her insistence on their personalities, challenged the behaviorist orthodoxy. Without her, the shift from 'animals as machines' to 'animals as minds' is slower.",delay:"~15 years",severity:"medium",icon:"ðŸ§ "},
      {event:"Conservation movement loses key voice",consequence:"Goodall became one of the world's most effective advocates for wildlife conservation and habitat preservation. Without her celebrity and credibility, great ape conservation has less public support.",delay:"~30 years",severity:"medium",icon:"ðŸŒ¿"},
      {event:"Same science, less empathy",consequence:"Primatology produces the same findings. But the cultural shift â€” seeing animals as individuals worthy of moral consideration â€” is slower without Goodall's popularization.",delay:"~40 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct difference. But public attitudes toward animal welfare and conservation are measurably different â€” Goodall's influence on how we think about animals was enormous.",
      tech:"No difference. Primatology isn't a technology-producing field.",
      culture:"The image of the young woman sitting with chimpanzees â€” one of science's most iconic photographs â€” doesn't exist. The 'lone researcher in the wild' archetype is weaker.",
      politics:"Great ape conservation laws might be weaker. Goodall's advocacy directly influenced habitat protection policies in Tanzania and across Africa."
    }
  },
  carson: {
    cascade:[
      {event:"No Silent Spring (1962)",consequence:"Carson's book documenting the ecological damage of DDT and other pesticides launched the modern environmental movement. Without it, the dangers of pesticides are documented more slowly, by scientists with less public reach.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"DDT use continues longer",consequence:"Without the public outcry Carson generated, DDT restrictions come later. Bird populations â€” especially raptors like the bald eagle â€” continue declining through the 1970s.",delay:"~10 years",severity:"high",icon:"ðŸ¦…"},
      {event:"EPA not founded in 1970",consequence:"Carson's work was the single most important catalyst for the creation of the Environmental Protection Agency. Without her, environmental regulation in the US develops later, possibly in the late 1970s.",delay:"~5-10 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Environmental movement delayed",consequence:"Earth Day 1970, the Clean Air Act, the Clean Water Act â€” the cascade of 1970s environmental legislation was downstream of the public awareness Carson created. All of this shifts later.",delay:"~10 years",severity:"high",icon:"ðŸŒ"},
      {event:"Same regulations eventually",consequence:"Environmental damage was becoming visible. Other scientists and journalists would have sounded the alarm. But Carson's book was so powerful that 10 years of delay is a real cost â€” more pollution, more species loss.",delay:"~15 years",severity:"medium",icon:"âš–ï¸"}
    ],
    modernDay:{
      daily:"Your air and water are slightly dirtier â€” or rather, they got clean later. The environmental protections you take for granted arrived 5-10 years after they actually did.",
      tech:"Same pollution control technology. The engineering solutions exist regardless of when regulation demanded them.",
      culture:"The modern environmental movement has a different origin story. 'Environmentalism' as a mainstream political identity emerges later. The concept of 'ecological thinking' enters public discourse more slowly.",
      politics:"The EPA exists but was founded later. Environmental regulation in the US is 5-10 years behind where it actually is. The bald eagle's recovery happened later."
    }
  },
  hoyle: {
    cascade:[
      {event:"No stellar nucleosynthesis theory (1950s)",consequence:"Hoyle showed how elements heavier than hydrogen are forged inside stars. Without his work, the B2FH paper (1957) on element formation in stars is weaker or delayed.",delay:"~5 years",severity:"high",icon:"â­"},
      {event:"'Big Bang' never gets its name",consequence:"Hoyle coined the term 'Big Bang' mockingly â€” he preferred steady-state theory. Without him, the dominant cosmological theory has a different name. 'Big Bang' was actually coined by a skeptic.",delay:"Cultural",severity:"low",icon:"ðŸ’¥"},
      {event:"Carbon resonance prediction delayed",consequence:"Hoyle predicted a specific nuclear resonance in carbon-12 (the 'Hoyle state') that was essential for carbon to form in stars. Without this prediction, nuclear astrophysics takes longer to explain why carbon exists.",delay:"~5 years",severity:"medium",icon:"âš›ï¸"},
      {event:"Same astrophysics by 1970",consequence:"Stellar nucleosynthesis was being worked on by multiple groups. Burbidge, Burbidge, Fowler, and others would have filled the gaps. Hoyle accelerated the field but didn't create it alone.",delay:"~15 years",severity:"medium",icon:"ðŸ”­"},
      {event:"Steady-state theory dies sooner",consequence:"Without Hoyle as its most brilliant defender, the steady-state model of the universe loses support faster when cosmic microwave background radiation is discovered in 1964.",delay:"~10 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference whatsoever. Astrophysics has no consumer applications.",
      tech:"Identical. Understanding how stars make elements doesn't affect technology.",
      culture:"The term 'Big Bang' doesn't exist â€” it has some other name. This is surprisingly significant; 'Big Bang' is one of the most recognized scientific terms in any language.",
      politics:"No meaningful difference."
    }
  },
  lyell: {
    cascade:[
      {event:"No Principles of Geology (1830-33)",consequence:"Lyell's uniformitarianism â€” the idea that geological processes happening now are the same ones that shaped the ancient Earth â€” replaced catastrophism. Others (Hutton) had similar ideas, but Lyell made the definitive case.",delay:"~10 years",severity:"high",icon:"ðŸª¨"},
      {event:"Darwin's thinking develops differently",consequence:"Darwin read Lyell's Principles on the Beagle voyage. The idea of slow, gradual change over immense time directly inspired natural selection. Without Lyell, Darwin's theory might look different or come later.",delay:"~20 years",severity:"medium",icon:"ðŸ§¬"},
      {event:"Deep time accepted more slowly",consequence:"The concept that Earth is millions (later billions) of years old was essential for biology and physics. Without Lyell's persuasive case, religious timelines persist longer in scientific circles.",delay:"~15 years",severity:"medium",icon:"â³"},
      {event:"Geology still professionalizes",consequence:"The Geological Society of London and institutional geology were growing regardless. Lyell accelerated the paradigm shift but didn't create the field.",delay:"~10 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Same Earth science by 1860",consequence:"Radiometric dating (1900s) settles the age of Earth regardless of Lyell. Deep time wins because the evidence is overwhelming. Lyell's contribution was making the case 20-30 years earlier.",delay:"~30 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Geology and Earth science are identical.",
      tech:"Same. Mining, oil exploration, earthquake science â€” all the same.",
      culture:"The concept of 'deep time' enters public consciousness later. The Victorian crisis of faith â€” caused partly by geological evidence contradicting Biblical timelines â€” plays out on a different schedule.",
      politics:"No meaningful difference. Lyell's contributions were scientific, not political."
    }
  },
  wegener: {
    cascade:[
      {event:"No continental drift hypothesis (1912)",consequence:"Wegener proposed that continents move â€” and was ridiculed for decades. Without him, the idea doesn't have a champion until seafloor spreading evidence arrives in the 1960s.",delay:"~50 years",severity:"medium",icon:"ðŸ—ºï¸"},
      {event:"Plate tectonics discovered the same way",consequence:"The discovery of mid-ocean ridges, magnetic striping, and seafloor spreading in the 1950s-60s proved plate tectonics regardless of Wegener. The evidence was in the ocean floor.",delay:"~50 years",severity:"low",icon:"ðŸŒŠ"},
      {event:"Same geology by 1970",consequence:"Plate tectonics is accepted by the late 1960s with or without Wegener's earlier hypothesis. His contribution was being right too early â€” the mechanism (seafloor spreading) wasn't known yet.",delay:"~55 years",severity:"low",icon:"ðŸ”¬"},
      {event:"Science history loses cautionary tale",consequence:"Wegener's story â€” the outsider who was right while the establishment was wrong â€” is one of science's best examples of paradigm resistance. Without it, the narrative of scientific conservatism is weaker.",delay:"Cultural",severity:"medium",icon:"ðŸ“–"},
      {event:"Same Earth science",consequence:"Continental drift was going to be proven by ocean floor mapping. Wegener's role was prophetic but not causally necessary for the discovery.",delay:"~60 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Completely identical. Plate tectonics was proven by ocean floor evidence, not by Wegener's hypothesis.",
      tech:"Same earthquake prediction, same geological engineering, same everything.",
      culture:"Science loses one of its best stories about the lone visionary versus the establishment. Thomas Kuhn might have used a different example in 'The Structure of Scientific Revolutions.'",
      politics:"No meaningful difference."
    }
  },
  leavitt: {
    cascade:[
      {event:"No period-luminosity relation for Cepheid variables (1908)",consequence:"Leavitt discovered that brighter Cepheid stars pulse more slowly â€” giving astronomers a 'standard candle' to measure cosmic distances. Without it, distance measurement in astronomy is stuck.",delay:"Immediate",severity:"high",icon:"â­"},
      {event:"Hubble can't prove galaxies exist",consequence:"Hubble used Leavitt's Cepheid relation to prove that Andromeda is a separate galaxy (1924). Without her work, the 'Great Debate' about the size of the universe remains unresolved for longer.",delay:"~16 years",severity:"high",icon:"ðŸŒŒ"},
      {event:"Expanding universe discovered later",consequence:"Without reliable distance measurements, Hubble's Law (velocity proportional to distance) can't be established. The discovery that the universe is expanding comes later, from different methods.",delay:"~20 years",severity:"high",icon:"ðŸ”­"},
      {event:"Cosmology delayed a decade",consequence:"The entire field of observational cosmology depended on measuring distances. Without Cepheid variables as distance markers, astronomers need alternative methods that take longer to develop.",delay:"~15 years",severity:"medium",icon:"ðŸ“"},
      {event:"Same cosmology eventually",consequence:"Other standard candles (Type Ia supernovae) would eventually be discovered. Cosmology catches up, but the 1920s revolution in understanding the universe's size happens in the 1930s or 1940s instead.",delay:"~25 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Cosmology doesn't affect daily life.",
      tech:"Same telescopes, same space technology. The delay in cosmology doesn't affect engineering.",
      culture:"One of the most important women in the history of science is absent. Leavitt's story â€” deaf, underpaid, denied credit, and yet her discovery reshaped our understanding of the universe â€” is lost.",
      politics:"No meaningful difference, though the narrative of women's overlooked contributions to science loses another powerful example."
    }
  },
  lincoln: {
    cascade:[
      {event:"No Lincoln presidency (1861-65)",consequence:"The 1860 election had four candidates. Without Lincoln, Seward likely wins the Republican nomination and the presidency. Seward was anti-slavery but less skilled at holding the Union together.",delay:"Immediate",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Civil War unfolds differently",consequence:"The war still happens â€” secession was about slavery, not about Lincoln personally. But without Lincoln's specific leadership â€” the Emancipation Proclamation's timing, the choice of Grant, the political maneuvering â€” the war might last longer or end differently.",delay:"~1 year",severity:"high",icon:"âš”ï¸"},
      {event:"Emancipation comes differently",consequence:"Slavery was doomed by the war regardless. But without the Emancipation Proclamation as a war measure in 1863, the legal path to abolition takes a different form. The 13th Amendment might come later or look different.",delay:"~3 years",severity:"high",icon:"â›“ï¸"},
      {event:"Reconstruction under different terms",consequence:"Without Lincoln's 'with malice toward none' vision, Reconstruction is shaped entirely by Radical Republicans or by Democrats. It might be harsher or weaker â€” either way, different.",delay:"~5 years",severity:"high",icon:"ðŸ—ï¸"},
      {event:"America's self-image transformed",consequence:"Lincoln gave the Civil War its moral meaning â€” 'a new birth of freedom.' Without his rhetoric, the war might be remembered as a constitutional dispute rather than a crusade for human equality. That narrative shapes everything after.",delay:"~20 years",severity:"high",icon:"ðŸ‡ºðŸ‡¸"}
    ],
    modernDay:{
      daily:"Slavery is abolished either way â€” the war guaranteed that. But the story Americans tell about their own country is different. The national mythology around equality and union has a different center.",
      tech:"No difference.",
      culture:"No Gettysburg Address. No 'government of the people, by the people, for the people.' The most quoted American president's words don't exist. The national vocabulary of freedom and equality is different.",
      politics:"Reconstruction plays out differently, which means the Jim Crow era might start earlier or later, which means the Civil Rights movement of the 1960s might look different. The butterfly effects are real and enormous."
    }
  },
  mandela: {
    cascade:[
      {event:"No Mandela as symbol during 27-year imprisonment",consequence:"The anti-apartheid movement had many leaders â€” Sisulu, Tambo, Biko. But Mandela's imprisonment made him a global symbol in a way no free leader could match. Without him, the movement is more fragmented internationally.",delay:"~20 years",severity:"high",icon:"âœŠ"},
      {event:"Apartheid still falls",consequence:"Economic sanctions, international pressure, and internal resistance were all mounting. Apartheid was unsustainable. But without Mandela, the transition is bloodier â€” he uniquely had the moral authority to restrain both sides.",delay:"~5 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"No peaceful transition",consequence:"Mandela's decision to embrace reconciliation rather than retribution was not inevitable. Other leaders â€” Winnie Mandela, Chris Hani, the ANC's militant wing â€” might have pursued a more confrontational path. Civil war was a real possibility.",delay:"Immediate",severity:"high",icon:"â˜®ï¸"},
      {event:"Truth and Reconciliation Commission doesn't happen",consequence:"Mandela's specific vision â€” accountability without mass vengeance â€” created the TRC model. Without it, South Africa either has Nuremberg-style trials (alienating whites) or blanket amnesty (enraging blacks).",delay:"~5 years",severity:"high",icon:"âš–ï¸"},
      {event:"South Africa as cautionary tale",consequence:"Without Mandela's peaceful transition, South Africa might have become Zimbabwe â€” a liberation movement that won power and then abused it. Mandela's restraint was the difference between hope and tragedy.",delay:"~10 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you live in South Africa, profoundly different. The country might have experienced civil war in the 1990s. The economic and social consequences would still be felt.",
      tech:"No direct tech impact.",
      culture:"The global model of peaceful transition from oppression â€” which has inspired movements from Myanmar to Palestine â€” is weaker without Mandela's example.",
      politics:"South Africa's democracy is either nonexistent or much more fragile. The African National Congress without Mandela's moderating influence might have become authoritarian. The ripple effects across southern Africa are enormous."
    }
  },
  churchill: {
    cascade:[
      {event:"No Churchill as PM in May 1940",consequence:"Halifax was the alternative â€” and he favored negotiation with Hitler. Without Churchill's specific personality â€” the stubbornness, the rhetoric, the refusal to consider terms â€” Britain might have sought a negotiated peace.",delay:"Immediate",severity:"high",icon:"ðŸ‡¬ðŸ‡§"},
      {event:"Britain negotiates or fights on weakly",consequence:"If Halifax becomes PM, a negotiated peace with Germany is possible. Hitler controls continental Europe. If Britain fights on under a less inspiring leader, morale is lower, the Blitz is harder to endure.",delay:"~3 months",severity:"high",icon:"âš”ï¸"},
      {event:"America's entry into the war changes",consequence:"Churchill's personal relationship with Roosevelt â€” the Atlantic Charter, Lend-Lease, the 'Europe first' strategy â€” shaped how America fought. Without Churchill, the Anglo-American alliance looks different.",delay:"~1 year",severity:"high",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"WWII's outcome is uncertain",consequence:"Germany might win in Europe, or the war might drag on longer, or the Soviet Union bears even more of the burden. The postwar map of Europe could look radically different.",delay:"~5 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"Cold War looks different",consequence:"Churchill coined 'Iron Curtain' and shaped Western thinking about Soviet expansionism. Without his influence, the postwar order â€” NATO, the Marshall Plan, containment â€” might develop differently.",delay:"~10 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If Britain had negotiated with Hitler in 1940, the entire postwar world order is different. Europe might have lived under Nazi domination for years. The counterfactuals are so large they're almost incalculable.",
      tech:"If WWII ends differently, the Manhattan Project, the space race, and the computing revolution all follow different timelines.",
      culture:"No 'we shall fight on the beaches' speech. No 'finest hour.' The English language loses its most quoted wartime rhetoric. British national identity is fundamentally different.",
      politics:"If Britain falls or negotiates in 1940, the European Union doesn't exist in its current form, NATO might not exist, and the postwar liberal international order might never emerge."
    }
  },
  washington: {
    cascade:[
      {event:"No Washington as Continental Army commander",consequence:"The Continental Congress had other candidates â€” Charles Lee, Horatio Gates. Washington wasn't the best tactician, but his ability to hold the army together through repeated defeats was unique. Without him, the army might fracture.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"Revolution possibly fails or takes longer",consequence:"Washington's specific decisions â€” crossing the Delaware, the Fabian strategy of avoiding decisive battles, holding the army together at Valley Forge â€” were critical. Another general might have sought a decisive battle and lost.",delay:"~2 years",severity:"high",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"No precedent of voluntary power transfer",consequence:"Washington's resignation of military command (1783) and his refusal to seek a third term were foundational. He proved that American leaders give up power. Without this precedent, the republic is fragile.",delay:"~10 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Constitutional Convention has different leader",consequence:"Washington's presence as president of the 1787 Convention gave the Constitution legitimacy. Without him, the document might fail ratification â€” Americans trusted Washington more than any institution.",delay:"~4 years",severity:"high",icon:"ðŸ“œ"},
      {event:"American democracy less stable",consequence:"Washington set the norms â€” peaceful transfer, civilian control, no kings. Without his personal example, these norms are just words on paper. The early republic might have become an authoritarian state.",delay:"~20 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If America doesn't become a stable democracy, the entire modern world order is different. American constitutional democracy influenced every subsequent democratic constitution.",
      tech:"If the American Revolution fails or produces a different government, the industrial revolution in America follows a different path. American innovation culture might not develop the same way.",
      culture:"No Washington Monument, no Washington D.C. (or it has a different name), no dollar bill portrait. The founding mythology of America is completely different.",
      politics:"The precedent of peaceful power transfer â€” which Washington personally established â€” is one of democracy's most important norms. Without it, American history might look more like Latin American caudillo politics."
    }
  },
  caesar: {
    cascade:[
      {event:"No Caesar crossing the Rubicon (49 BC)",consequence:"The Roman Republic was already dying â€” Sulla, Marius, and Pompey had all undermined its norms. Without Caesar, another ambitious general makes the same move, probably within a decade.",delay:"~5-10 years",severity:"medium",icon:"âš”ï¸"},
      {event:"Roman civil wars still happen",consequence:"The underlying causes â€” wealth inequality, army loyalty to generals not the state, senatorial dysfunction â€” don't go away. Pompey or Crassus or someone else triggers civil war.",delay:"~5 years",severity:"medium",icon:"ðŸ—¡ï¸"},
      {event:"No Gallic Wars conquest",consequence:"Caesar's conquest of Gaul (58-50 BC) brought France, Belgium, and parts of Germany under Roman control. Without it, Roman expansion into northwestern Europe is slower and possibly less thorough.",delay:"~10-20 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"No assassination, no Octavian",consequence:"If Caesar doesn't rise, his adopted heir Octavian (Augustus) has no path to power. The specific personality who created the Roman Empire â€” its administrative genius â€” doesn't emerge.",delay:"~20 years",severity:"high",icon:"ðŸ‘‘"},
      {event:"Roman Empire still forms, but differently",consequence:"The Republic was going to fall. But without Caesar â†’ Augustus, the Empire might emerge under a different dynasty, with different borders, different administrative structures, different cultural priorities.",delay:"~30 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If Rome's northwestern European expansion was less thorough, French and German cultures develop from less Roman roots. The languages sound different. The legal systems look different.",
      tech:"No meaningful difference. Roman technology wasn't dependent on Caesar.",
      culture:"No 'Caesar' as a word for ruler (Kaiser, Tsar). The calendar might not have 'July.' Shakespeare's Julius Caesar doesn't exist. The phrase 'crossing the Rubicon' isn't a metaphor.",
      politics:"The specific shape of the Roman Empire â€” which determined European borders, languages, and legal systems for two millennia â€” is different. French law, German boundaries, British identity â€” all shaped by Roman conquest."
    }
  },
  augustus: {
    cascade:[
      {event:"No Augustus to end the civil wars",consequence:"After Caesar's assassination, Rome tore itself apart â€” Brutus, Cassius, Antony, Lepidus, Sextus Pompey. Augustus (Octavian) defeated them all. Without his political genius, the civil wars might continue for decades.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"Roman Republic collapses into chaos",consequence:"Someone would have won eventually â€” the pattern of strongman rule was established. But Augustus's specific talent was making dictatorship look like republicanism. Without that fiction, Rome might have become openly monarchical sooner.",delay:"~10 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"No Pax Romana",consequence:"Augustus established two centuries of relative peace across the Mediterranean. Without his administrative reforms â€” provinces, taxation, the professional army â€” the empire is less stable, more like a warlord state.",delay:"~20 years",severity:"high",icon:"â˜®ï¸"},
      {event:"No Roman cultural golden age",consequence:"Virgil, Horace, Ovid, Livy â€” the Augustan literary flowering that defined Western literature â€” was deliberately patronized by Augustus. Without him, Roman literature takes a different form.",delay:"~20 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Christianity spreads differently",consequence:"The Roman road system, Pax Romana, and Roman administrative unity were the infrastructure Christianity used to spread. A less stable empire means a different early Church history.",delay:"~100 years",severity:"high",icon:"âœï¸"}
    ],
    modernDay:{
      daily:"The Roman legal and administrative system Augustus built is the foundation of European law. Without it, Western legal traditions might look more like tribal or feudal codes.",
      tech:"Roman infrastructure â€” roads, aqueducts, harbors â€” was the physical platform for European civilization. Without Augustus's investment in it, medieval Europe starts from a lower base.",
      culture:"No Aeneid (Virgil wrote under Augustus's patronage). Western literature's founding epic in Latin is different or doesn't exist. The idea of Rome as a model of civilization is weaker.",
      politics:"The template of empire â€” bureaucratic state, professional army, legal system, infrastructure â€” that influenced every subsequent European state was Augustus's creation. Without it, European political development follows a different path."
    }
  },
  qinshi: {
    cascade:[
      {event:"No unification of China (221 BC)",consequence:"Qin Shi Huang conquered six rival states and created a single Chinese empire. Without him, China might remain divided like Europe â€” multiple competing states with different writing systems, laws, and cultures.",delay:"Immediate",severity:"high",icon:"ðŸ—¡ï¸"},
      {event:"No standardized Chinese writing",consequence:"He forced all regions to use one script, one set of weights and measures, one axle width. Without this standardization, Chinese identity fragments. 'China' as a concept might not exist.",delay:"~10 years",severity:"high",icon:"ðŸ“œ"},
      {event:"No Great Wall (in its early form)",consequence:"Qin Shi Huang connected existing walls into a unified northern defense. Without it, northern nomad invasions are harder to resist. The steppe peoples penetrate deeper into Chinese territory.",delay:"~20 years",severity:"medium",icon:"ðŸ§±"},
      {event:"Eventual unification by someone else",consequence:"China's geography â€” the river basins, the agricultural plains â€” creates pressure toward unification. Someone probably unites China eventually. But it might take centuries, and the result might look different.",delay:"~50-200 years",severity:"medium",icon:"ðŸ—ºï¸"},
      {event:"World history fundamentally altered",consequence:"A fragmented China means no Silk Road in its historical form, different interactions with Central Asia, no unified Chinese culture influencing Korea, Japan, and Vietnam. East Asian civilization is unrecognizable.",delay:"~500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If China was never unified, East Asia looks like Europe â€” multiple nations with different languages where one civilization currently exists. Your 'Made in China' products come from a dozen different countries.",
      tech:"A fragmented China might have produced more innovation through competition (like Europe) or less through lack of scale. Impossible to predict.",
      culture:"No unified Chinese culture. No single Chinese language. The literary, philosophical, and artistic tradition that spans 2,000 years doesn't exist as one tradition.",
      politics:"No China as a superpower. The geopolitical balance of the 21st century is unrecognizable. Instead of one nation of 1.4 billion, you have perhaps 5-10 separate East Asian states."
    }
  },
  cleopatra: {
    cascade:[
      {event:"No Cleopatra's alliance with Caesar and Antony",consequence:"Without Cleopatra, Egypt still falls to Rome â€” the Ptolemaic dynasty was weakening. But the specific manner of Rome's absorption of Egypt, and the Roman civil wars it entangled with, play out differently.",delay:"~10 years",severity:"medium",icon:"ðŸ‘‘"},
      {event:"Antony-Octavian conflict still happens",consequence:"The rivalry between Antony and Octavian was about Roman power, not about Cleopatra. But without her wealth and navy backing Antony, Octavian's victory comes easier and earlier. The Battle of Actium might not happen.",delay:"~5 years",severity:"medium",icon:"âš”ï¸"},
      {event:"Egypt absorbed into Rome differently",consequence:"Without Cleopatra's dramatic resistance â€” and suicide â€” Egypt becomes a Roman province more quietly. Augustus doesn't get the propaganda victory of 'saving Rome from the Eastern queen.'",delay:"~10 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Ptolemaic dynasty ends regardless",consequence:"The dynasty was dying. Egypt's grain wealth was too important for Rome to ignore. Another Ptolemy or a Roman-installed puppet governs until annexation.",delay:"~20 years",severity:"low",icon:"ðŸŒ¾"},
      {event:"Same Roman Empire, less dramatic narrative",consequence:"Rome absorbs Egypt either way. The Mediterranean is unified under Roman rule regardless. But the story â€” the love affair, the asp, the downfall of the last independent Egyptian ruler â€” is lost.",delay:"~30 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No meaningful difference. Egypt under Rome was inevitable.",
      tech:"No difference. Egyptian technology was already declining under the late Ptolemies.",
      culture:"Western civilization loses one of its most enduring stories. Shakespeare's Antony and Cleopatra doesn't exist. The archetype of the powerful queen using alliance and seduction to preserve her nation is weaker. Elizabeth Taylor's most famous role doesn't exist.",
      politics:"Egypt's transition to Roman rule is less dramatic but functionally identical. The only real question is whether Augustus's propaganda â€” casting himself as savior of Rome from an Eastern threat â€” finds a different foil."
    }
  },
  akbar: {
    cascade:[
      {event:"No Akbar's religious tolerance policy (1560s-1600s)",consequence:"Akbar's Din-i-Ilahi and policy of sulh-i-kul (universal peace) created a multi-religious imperial framework. Without it, Mughal India is more orthodox, more like Aurangzeb's later reign from the start.",delay:"Immediate",severity:"high",icon:"â˜®ï¸"},
      {event:"Hindu-Muslim coexistence weaker",consequence:"Akbar abolished the jizya tax on non-Muslims and married Hindu princesses. Without these policies, Hindu resistance to Mughal rule is stronger and earlier. The empire is less stable.",delay:"~20 years",severity:"high",icon:"ðŸ•Œ"},
      {event:"Mughal Empire smaller or shorter-lived",consequence:"Akbar's administrative genius â€” the mansabdari system, revenue reforms, provincial governance â€” built an empire that lasted 150 years after him. A less capable ruler produces a weaker state.",delay:"~50 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Indian cultural synthesis different",consequence:"The Mughal period produced a fusion of Persian, Hindu, and Central Asian cultures â€” in art, architecture, cuisine, music. Without Akbar's deliberate encouragement, this synthesis is thinner.",delay:"~100 years",severity:"medium",icon:"ðŸŽ¨"},
      {event:"British colonization follows different path",consequence:"A weaker or more fragmented Mughal Empire means the British East India Company encounters a different political landscape. Colonization might be easier or harder depending on what replaces the Mughals.",delay:"~200 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Indian cuisine, architecture, and art bear the stamp of Mughal cultural fusion that Akbar encouraged. Without him, North Indian culture looks more divided along religious lines.",
      tech:"No direct difference.",
      culture:"The Taj Mahal might not exist â€” it was built by Akbar's grandson Shah Jahan in the cultural tradition Akbar fostered. Mughal miniature painting, Urdu literature, and Indo-Persian culture are all thinner.",
      politics:"Hindu-Muslim relations in India might be even more fraught without the historical precedent of Akbar's pluralism. Indian secularism loses its most powerful pre-modern example."
    }
  },
  bismarck: {
    cascade:[
      {event:"No German unification under Prussia (1871)",consequence:"Bismarck's three wars (Denmark, Austria, France) unified Germany under Prussian leadership. Without his specific diplomatic genius â€” the calculated provocations, the alliance management â€” German unification comes later or in a different form.",delay:"~10-20 years",severity:"high",icon:"ðŸ‡©ðŸ‡ª"},
      {event:"Europe's balance of power holds longer",consequence:"Without a unified Germany dominating Central Europe, France remains the continent's strongest power. The alliance systems that led to WWI don't form in the same way.",delay:"~20 years",severity:"high",icon:"âš–ï¸"},
      {event:"No Bismarckian welfare state",consequence:"Bismarck introduced the world's first national health insurance, accident insurance, and old-age pensions â€” to undercut the socialists. Without him, the welfare state develops from different roots, possibly later.",delay:"~20 years",severity:"medium",icon:"ðŸ¥"},
      {event:"WWI either doesn't happen or looks different",consequence:"No unified Germany means no specific threat that drives Britain, France, and Russia into alliance. The Great War might not happen, or might be a smaller conflict with different participants.",delay:"~40 years",severity:"high",icon:"ðŸ’£"},
      {event:"20th century unrecognizable",consequence:"No unified Germany â†’ no WWI (in its form) â†’ no Treaty of Versailles â†’ no Hitler â†’ no WWII â†’ no Cold War. The butterfly effects are so large that the modern world is essentially unpredictable.",delay:"~80 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Genuinely impossible to predict. A Europe without German unification in 1871 produces a 20th century so different from ours that nothing about 2026 is recognizable.",
      tech:"If WWI doesn't happen in 1914, the technological acceleration driven by wartime need follows a different timeline. Aviation, computing, nuclear physics â€” all develop differently.",
      culture:"No unified German culture in its current form. Bavarian, Prussian, Saxon identities remain more distinct. German literature, philosophy, and music develop in a more fragmented cultural context.",
      politics:"The European Union, NATO, the United Nations â€” all products of WWII's aftermath â€” either don't exist or take completely different forms."
    }
  },
  fdr: {
    cascade:[
      {event:"No New Deal (1933-38)",consequence:"Without Roosevelt, the 1932 election likely goes to another Democrat â€” possibly Garner or Smith. But none had FDR's specific combination of optimism, political skill, and willingness to experiment with government intervention.",delay:"Immediate",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Great Depression handled differently",consequence:"A less bold president might have pursued austerity or limited intervention. Social Security, the SEC, the FDIC, the WPA â€” these specific institutions either don't exist or arrive later in different forms.",delay:"~5 years",severity:"high",icon:"ðŸ“‰"},
      {event:"WWII entry and conduct different",consequence:"FDR was slowly preparing America for war before Pearl Harbor â€” Lend-Lease, the destroyers-for-bases deal, the Atlantic Charter. A different president might have been more isolationist, entering the war later or less prepared.",delay:"~8 years",severity:"high",icon:"âš”ï¸"},
      {event:"Postwar order shaped differently",consequence:"The United Nations, Bretton Woods, the IMF, the World Bank â€” FDR personally championed these institutions. Without him, the postwar international order takes a different shape.",delay:"~12 years",severity:"high",icon:"ðŸŒ"},
      {event:"American government permanently different",consequence:"FDR expanded the federal government's role in American life more than any president. Without the New Deal, the relationship between Americans and their government is fundamentally different.",delay:"~20 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Without Social Security, your parents' and grandparents' retirements look different. Without the FDIC, your bank deposits aren't insured the same way. The safety net under American life is thinner.",
      tech:"No direct difference, though wartime R&D â€” which FDR championed through the OSRD â€” might have been less organized, potentially delaying radar, penicillin production, and the Manhattan Project.",
      culture:"No FDR as the model of presidential leadership in crisis. No fireside chats. The expectation that the president speaks directly to the people in their homes might develop later.",
      politics:"Without the New Deal coalition, American politics realigns differently. The Democratic Party's identity as the party of government intervention, labor, and social welfare has different origins or doesn't exist."
    }
  },
  elizabeth1: {
    cascade:[
      {event:"No Elizabethan Settlement (1559)",consequence:"Elizabeth's religious compromise â€” Protestant but with Catholic ceremony â€” stabilized England after decades of religious whiplash. Without her, England likely becomes more rigidly Protestant under another ruler, or Catholic under Mary Queen of Scots.",delay:"Immediate",severity:"high",icon:"â›ª"},
      {event:"No defeat of the Spanish Armada (1588)",consequence:"Elizabeth's naval buildup and the specific circumstances of 1588 saved Protestant England. Without her, Spain might have invaded successfully â€” or England might have been too weak to resist, fundamentally changing European power dynamics.",delay:"~29 years",severity:"high",icon:"âš“"},
      {event:"No Elizabethan cultural golden age",consequence:"Shakespeare, Marlowe, Spenser, the globe-trotting adventurers â€” this cultural explosion happened under Elizabeth's relatively stable, relatively tolerant reign. A different monarch might not have created these conditions.",delay:"~30 years",severity:"medium",icon:"ðŸŽ­"},
      {event:"English colonization delayed",consequence:"Elizabeth chartered the expeditions that led to English claims in North America. Without her encouragement, England enters the colonial race later â€” possibly after Spain and France have divided the continent.",delay:"~40 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"English-speaking world smaller",consequence:"If England is weaker in the 1600s â€” less stable religiously, less powerful navally â€” the British Empire might never form. English might not become a global language. The modern anglophone world is smaller.",delay:"~200 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If English colonization of North America was delayed or reduced, the United States might not exist in its current form. The English-speaking world could be much smaller.",
      tech:"No direct difference, though a weaker England means the Industrial Revolution might start somewhere else â€” the Netherlands, perhaps.",
      culture:"No Elizabethan literature as we know it. Shakespeare still writes, but under different conditions â€” and might not have the same audience or freedom.",
      politics:"A weaker England means a stronger Spain in the Americas, a different colonial map, and potentially no United States. The geopolitical consequences are incalculable."
    }
  },
  charlemagne: {
    cascade:[
      {event:"No Carolingian Empire (800 AD)",consequence:"Charlemagne united most of Western Europe under one ruler for the first time since Rome. Without him, Europe remains fragmented into dozens of Frankish, Germanic, and Lombard kingdoms.",delay:"Immediate",severity:"high",icon:"ðŸ‘‘"},
      {event:"No Carolingian Renaissance",consequence:"Charlemagne's program to preserve classical learning â€” copying manuscripts, establishing schools, standardizing Latin â€” saved much of Roman knowledge. Without it, more ancient texts are lost.",delay:"~20 years",severity:"high",icon:"ðŸ“š"},
      {event:"No template for European monarchy",consequence:"The Holy Roman Empire, which shaped European politics for 1,000 years, was Charlemagne's direct legacy. Without his model of Christian emperor, European political development follows a different path.",delay:"~50 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"France and Germany don't emerge",consequence:"The Treaty of Verdun (843), which divided Charlemagne's empire among his grandsons, created the rough outlines of France and Germany. Without that division, the political map of Europe is different.",delay:"~43 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"Western civilization develops differently",consequence:"Charlemagne is the hinge between ancient Rome and medieval Europe. Without him, the transition is messier, more is lost, and European civilization emerges from a darker, more fragmented period.",delay:"~200 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The borders of France and Germany trace back to the division of Charlemagne's empire. Without him, the political geography of Europe is unrecognizable.",
      tech:"If more classical knowledge was lost without the Carolingian Renaissance, European science might have developed more slowly.",
      culture:"Western educational institutions trace their roots to Charlemagne's schools. The university system, the preservation of Latin texts, the idea of Europe as a cultural unity â€” all weaker without him.",
      politics:"The European Union's founding narrative â€” European unity â€” explicitly invokes Charlemagne. The Charlemagne Prize is awarded for contributions to European unification. Without the original model, the entire concept of 'Europe' as a political unit is different."
    }
  },
  bolivar: {
    cascade:[
      {event:"No BolÃ­var leading independence movements (1810s-20s)",consequence:"South American independence was coming â€” the Napoleonic Wars weakened Spain, and creole elites wanted power. But without BolÃ­var's specific military genius and political vision, the liberation wars take different forms.",delay:"~5-10 years",severity:"high",icon:"âš”ï¸"},
      {event:"Independence movements more fragmented",consequence:"BolÃ­var unified independence efforts across Venezuela, Colombia, Ecuador, Peru, and Bolivia. Without his unifying vision, each region fights separately. Some might fail or be reconquered.",delay:"~10 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"No Gran Colombia experiment",consequence:"BolÃ­var's attempt to create a unified South American state failed, but it established the ideal of Latin American unity that persists today. Without it, pan-Latin American identity is weaker.",delay:"~15 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Different national boundaries",consequence:"Bolivia, Venezuela, Colombia, Ecuador, Peru â€” the specific boundaries and national identities of these countries were shaped by BolÃ­var's campaigns. Without him, the map of South America looks different.",delay:"~20 years",severity:"high",icon:"ðŸŒŽ"},
      {event:"Latin America still independent but different",consequence:"Spain couldn't hold the colonies â€” the economics were against it. But without BolÃ­var, the transition is messier, takes longer, and produces different countries with different borders.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you live in South America, your country might have different borders, a different name, and a different founding mythology.",
      tech:"No direct difference.",
      culture:"Five countries lose their founding father. The ideal of Latin American unity â€” which still shapes regional politics â€” has a different origin story or is weaker.",
      politics:"South American nations are still independent but might have different borders and different relationships with each other. The pan-American ideal that BolÃ­var championed is absent."
    }
  },
  ataturk: {
    cascade:[
      {event:"No Turkish War of Independence (1919-23)",consequence:"After WWI, the Allies planned to partition Ottoman territory. AtatÃ¼rk organized military resistance from Ankara. Without him, Turkey might have been carved up â€” Greek control of Izmir, French/Italian zones, an Armenian state in the east.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"No secular Turkish republic",consequence:"AtatÃ¼rk's reforms were radical: abolished the caliphate, adopted Latin script, gave women the vote, separated religion from government. Without him, Turkey likely becomes another post-Ottoman monarchy or Islamic state.",delay:"~5 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Caliphate continues or is abolished differently",consequence:"The Ottoman caliphate, abolished by AtatÃ¼rk in 1924, claimed leadership over Sunni Islam. Without its abolition, pan-Islamic politics in the 20th century look different.",delay:"~5 years",severity:"high",icon:"ðŸ•Œ"},
      {event:"Middle East politics altered",consequence:"A non-secular Turkey changes the entire regional dynamic. Turkey as a model of Muslim-majority secular democracy â€” which influenced debates across the Muslim world â€” doesn't exist.",delay:"~30 years",severity:"high",icon:"ðŸŒ"},
      {event:"NATO's eastern flank different",consequence:"Secular Turkey joined NATO in 1952, anchoring the alliance's southeastern border. Without AtatÃ¼rk's Western-oriented state, Turkey might align with the Soviet Union or remain non-aligned.",delay:"~30 years",severity:"high",icon:"ðŸ—ºï¸"}
    ],
    modernDay:{
      daily:"If you live in Turkey, your alphabet, your legal system, your relationship between religion and government â€” everything is different. Turkey without AtatÃ¼rk is unrecognizable.",
      tech:"No direct difference.",
      culture:"Turkish culture is more Ottoman, more Islamic, less European. The Latin alphabet isn't used. Women's rights develop on a different, likely slower trajectory.",
      politics:"No secular Turkish republic means no NATO eastern anchor, a different Cold War, and a radically different Middle East. The model of secular Muslim-majority democracy doesn't exist for other countries to emulate or debate."
    }
  },
  mao: {
    cascade:[
      {event:"No Communist victory in Chinese civil war (1949)",consequence:"Without Mao's specific leadership â€” the Long March, guerrilla strategy, peasant mobilization â€” the CCP might have lost. Chiang Kai-shek's Nationalists, though corrupt, had more resources.",delay:"~5 years",severity:"high",icon:"âš”ï¸"},
      {event:"China under Nationalist rule",consequence:"A Nationalist China would likely be authoritarian but capitalist, aligned with the US, more like Taiwan or South Korea. Industrialization follows a different path â€” probably faster economically, less brutal.",delay:"~10 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"No Great Leap Forward, no Cultural Revolution",consequence:"These catastrophes â€” 30-45 million dead in the famine, millions more in political persecution â€” don't happen. Tens of millions of lives are saved.",delay:"~10-17 years",severity:"high",icon:"âš ï¸"},
      {event:"Cold War looks different",consequence:"No Communist China means no Korean War (or a very different one), no Sino-Soviet split, no Nixon-goes-to-China moment. The entire Cold War in Asia plays out differently.",delay:"~20 years",severity:"high",icon:"ðŸŒ"},
      {event:"Modern China doesn't exist",consequence:"The China that joined the WTO, became the world's factory, and now challenges US hegemony â€” that specific China is Mao's creation, reformed by Deng. A Nationalist China might be wealthy but politically different.",delay:"~50 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"A Nationalist China might have industrialized faster (no Great Leap Forward setback) and with less suffering. Your consumer goods might still be made there, but the political system is different â€” possibly democratic, possibly authoritarian-capitalist like 1970s Taiwan.",
      tech:"China's tech sector might be further ahead â€” or behind. Without the Cultural Revolution destroying a generation of intellectuals, Chinese science might have developed faster.",
      culture:"No Cultural Revolution means traditional Chinese culture is better preserved. Temples, art, literature that were destroyed survive. Chinese society is more culturally continuous with its past.",
      politics:"No Communist China means the entire geopolitical order of the 21st century is different. US-China rivalry doesn't exist in its current form. North Korea might not exist. Vietnam's history is completely different."
    }
  },
  lenin: {
    cascade:[
      {event:"No Bolshevik Revolution (October 1917)",consequence:"Without Lenin's specific insistence on immediate revolution â€” against the wishes of most Bolsheviks â€” the provisional government might have survived. Russia becomes a messy democracy or a military dictatorship, not a communist state.",delay:"Immediate",severity:"high",icon:"ðŸš©"},
      {event:"No Soviet Union",consequence:"Without Lenin's Bolsheviks taking power, there's no USSR, no Comintern, no global communist movement in its historical form. Communism remains a theory, not a state system.",delay:"~5 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"No Stalinist totalitarianism",consequence:"Without the Soviet model, there's no Stalin, no gulags, no forced collectivization. Millions of lives are saved. But there's also no industrialization of Russia at the speed Stalin achieved.",delay:"~10 years",severity:"high",icon:"âš ï¸"},
      {event:"WWII looks completely different",consequence:"No Soviet Union means no Nazi-Soviet Pact, no Eastern Front in its historical form. Hitler might attack westward only, or might never come to power (he rose partly on anti-communist fear).",delay:"~22 years",severity:"high",icon:"âš”ï¸"},
      {event:"No Cold War",consequence:"The entire US-Soviet rivalry that shaped the 20th century doesn't exist. No nuclear arms race, no space race, no proxy wars in Korea, Vietnam, Afghanistan. The world after 1945 is unrecognizable.",delay:"~30 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Without the Cold War, your daily life is profoundly different in ways that are impossible to predict. No nuclear anxiety, no space race (so later space technology), different political alignments globally.",
      tech:"No space race means satellite technology, GPS, and telecommunications develop on a different timeline. No Cold War computing race might mean slower development of computers â€” or faster, if resources go elsewhere.",
      culture:"No communist aesthetics, no Soviet cinema, no socialist realism. The 20th century's great ideological divide doesn't exist. Art, literature, and film develop without the capitalist-vs-communist framing.",
      politics:"The entire political vocabulary of the 20th century â€” left vs. right, capitalist vs. communist, free world vs. iron curtain â€” is different. Democracy doesn't define itself against communism. Socialism might develop as a democratic movement rather than a revolutionary one."
    }
  },
  thatcher: {
    cascade:[
      {event:"No Thatcher as PM (1979-90)",consequence:"Without Thatcher, the Conservatives likely choose a more moderate leader â€” Whitelaw or Prior. British politics continues in the post-war consensus: managed decline, union power, state ownership.",delay:"Immediate",severity:"high",icon:"ðŸ‡¬ðŸ‡§"},
      {event:"No neoliberal revolution in Britain",consequence:"Privatization, deregulation, breaking the unions â€” none of this happens in the early 1980s. British industry stays nationalized. The City of London doesn't become the financial center it is today.",delay:"~5 years",severity:"high",icon:"ðŸ­"},
      {event:"Reaganism weaker without Thatcherism",consequence:"Thatcher and Reagan reinforced each other ideologically. Without Thatcher's example, Reagan's domestic program has less international validation. The neoliberal consensus is weaker globally.",delay:"~3 years",severity:"medium",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"Falklands War doesn't happen (or plays out differently)",consequence:"The Argentines might not have invaded if they thought the British PM would respond â€” or a different PM might have negotiated rather than fought. The war's outcome shaped British politics for a decade.",delay:"~3 years",severity:"medium",icon:"âš“"},
      {event:"Global economics takes a different path",consequence:"Without the Thatcher-Reagan model, privatization and deregulation spread more slowly. The 1990s consensus on free markets is weaker. The 2008 financial crisis might not happen â€” or might happen differently.",delay:"~20 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"British public services might still be nationalized â€” British Rail, British Telecom, British Gas. London is less of a financial center. The north of England might be less economically devastated.",
      tech:"London's tech and finance sectors are smaller. The Big Bang deregulation of 1986 doesn't happen, so the City doesn't become a global financial hub.",
      culture:"The 'there is no alternative' neoliberal consensus is weaker or nonexistent. The political center of gravity in the English-speaking world is further left.",
      politics:"The entire Thatcher-Reagan revolution â€” which reshaped global economics for 40 years â€” is absent or delayed. Income inequality in the US and UK might be lower. Unions might be stronger. The 2008 crash might not happen in its specific form."
    }
  },
  nehru: {
    cascade:[
      {event:"No Nehru as India's first PM (1947-64)",consequence:"Without Nehru, Sardar Patel or another Congress leader leads independent India. Patel was more conservative, more Hindu-nationalist, less socialist. India's founding character is different.",delay:"Immediate",severity:"high",icon:"ðŸ‡®ðŸ‡³"},
      {event:"Indian secularism weaker",consequence:"Nehru personally embedded secularism into India's constitution and institutions. Without his influence, India's founding might tilt more toward Hindu identity â€” closer to what the BJP advocates today, from the very beginning.",delay:"~5 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Non-Aligned Movement weaker",consequence:"Nehru was the principal architect of non-alignment â€” the idea that newly independent nations needn't choose between the US and USSR. Without him, India might align with one superpower.",delay:"~8 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Indian economic model different",consequence:"Nehru chose socialist-influenced central planning. Without him, India might have adopted a more market-oriented approach earlier â€” potentially industrializing faster, like South Korea or Taiwan.",delay:"~15 years",severity:"medium",icon:"ðŸ“ˆ"},
      {event:"India-China relationship different",consequence:"Nehru's 'Hindi-Chini bhai-bhai' policy and the shock of the 1962 border war shaped decades of India-China relations. A different leader might have been more cautious or more aggressive.",delay:"~15 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"India might be wealthier â€” or poorer. If early market reforms happened in the 1950s instead of the 1990s, India's economy could be decades ahead. Or early liberalization might have failed without industrial foundations.",
      tech:"India's tech industry might have emerged earlier if the economy had been liberalized sooner. Or the IIT system, which Nehru championed, might not exist.",
      culture:"Indian secularism â€” the idea that India belongs equally to Hindus, Muslims, Sikhs, Christians â€” might be weaker from the founding. The cultural politics of modern India would be very different.",
      politics:"Hindu nationalism might have been the default from independence. The secular, pluralist India that Nehru built â€” and that current politics is contesting â€” might never have existed."
    }
  },
  hochiminh: {
    cascade:[
      {event:"No Ho Chi Minh leading Vietnamese independence",consequence:"Vietnamese nationalism was strong â€” the desire to expel the French was widespread. But Ho uniquely combined communist ideology with nationalist appeal. Without him, the independence movement is more fragmented.",delay:"~5 years",severity:"high",icon:"ðŸ‡»ðŸ‡³"},
      {event:"French Indochina falls differently",consequence:"France still loses Vietnam â€” the military situation was unsustainable. But without Ho's specific strategy and political skill, the transition might be messier or produce a different kind of state.",delay:"~10 years",severity:"medium",icon:"âš”ï¸"},
      {event:"Vietnam War might not happen",consequence:"If Vietnam's independence movement isn't communist, the US might not intervene. The domino theory applied because Ho was communist. A nationalist but non-communist Vietnam doesn't trigger American fears.",delay:"~20 years",severity:"high",icon:"ðŸ’£"},
      {event:"Southeast Asian Cold War different",consequence:"Vietnam was the fulcrum of Cold War Asia. Without a communist Vietnam, the Khmer Rouge might never come to power, Laos follows a different path, and Southeast Asian politics is less traumatic.",delay:"~25 years",severity:"high",icon:"ðŸŒ"},
      {event:"American politics changed",consequence:"No Vietnam War means no anti-war movement, no Pentagon Papers, no Watergate (arguably), no loss of trust in government. American political culture is fundamentally different.",delay:"~30 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you're American, no Vietnam War means a different cultural and political landscape. The anti-war movement, the counterculture, the loss of trust in institutions â€” all follow a different path.",
      tech:"No direct difference.",
      culture:"No Vietnam War means no Apocalypse Now, no Platoon, no Born on the Fourth of July. The entire genre of Vietnam War literature and film doesn't exist. American culture's relationship with war and patriotism is different.",
      politics:"American foreign policy without Vietnam's lesson might be more interventionist. The 'Vietnam syndrome' â€” reluctance to use military force â€” doesn't exist. The American political divide between hawks and doves looks different."
    }
  },
  nasser: {
    cascade:[
      {event:"No Nasser's nationalization of Suez Canal (1956)",consequence:"The Suez Crisis â€” where Britain and France tried to retake the canal and were humiliated â€” was the definitive end of European colonialism. Without Nasser's provocation, this reckoning comes later or in a different form.",delay:"Immediate",severity:"high",icon:"ðŸ—ï¸"},
      {event:"Pan-Arabism weaker without its champion",consequence:"Nasser was the voice of Arab nationalism. Without him, the movement lacks its most charismatic leader. The United Arab Republic (Egypt-Syria union) doesn't happen.",delay:"~5 years",severity:"high",icon:"ðŸŒ"},
      {event:"Arab-Israeli conflict takes different shape",consequence:"Nasser's rhetoric and military posture directly led to the 1967 Six-Day War. Without him, the conflict still exists â€” the underlying issues remain â€” but the specific wars might happen differently.",delay:"~10 years",severity:"high",icon:"âš”ï¸"},
      {event:"Egypt's political development different",consequence:"Nasser's socialism, land reform, and authoritarianism shaped Egypt for decades. Without him, Egypt might have remained a monarchy or become a different kind of republic.",delay:"~20 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Middle East still turbulent but differently",consequence:"The specific shape of Middle Eastern politics â€” pan-Arabism, secular nationalism, the 1967 trauma â€” is Nasser's legacy. Without him, the region's politics pivot around different figures and ideologies.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you live in the Middle East, the political landscape is different. Egypt's role as the cultural and political center of the Arab world was amplified by Nasser.",
      tech:"No direct difference.",
      culture:"Arab nationalism's golden age â€” the music, cinema, and literature of the 1950s-60s â€” might have a different character without Nasser's Egypt as its center.",
      politics:"The Suez Crisis â€” which ended European colonial ambitions â€” happens differently. Decolonization still proceeds, but the specific timeline and dynamics change. The 1967 war's devastating impact on Arab psychology might be avoided or take a different form."
    }
  },
  marcos: {
    cascade:[
      {event:"No Marcos dictatorship (1965-86)",consequence:"The Philippines without Marcos might have continued as a flawed democracy. The declaration of martial law in 1972 wasn't inevitable â€” it was Marcos's specific choice to hold power.",delay:"Immediate",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Philippine economy not plundered",consequence:"Marcos and his cronies looted the Philippine economy â€” estimates range from $5-10 billion. Without this kleptocracy, the Philippines might have kept pace with its Asian tiger neighbors.",delay:"~10 years",severity:"high",icon:"ðŸ’°"},
      {event:"No EDSA People Power Revolution (1986)",consequence:"The peaceful revolution that overthrew Marcos â€” the first 'people power' revolution â€” doesn't happen because it doesn't need to. But the model it provided for peaceful democratic transitions worldwide is lost.",delay:"~21 years",severity:"medium",icon:"âœŠ"},
      {event:"Philippine democracy develops differently",consequence:"Without the trauma of dictatorship, Philippine democratic institutions might be stronger. Or they might have fallen to a different strongman â€” the structural conditions for authoritarianism existed.",delay:"~30 years",severity:"medium",icon:"ðŸ—³ï¸"},
      {event:"Southeast Asian democracy has different model",consequence:"EDSA inspired democratic movements across Asia â€” South Korea, Taiwan, Indonesia. Without this precedent, the 'people power' model of peaceful transition doesn't exist.",delay:"~35 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The Philippines might be significantly wealthier â€” on par with Thailand or Malaysia. Marcos's economic mismanagement set the country back decades.",
      tech:"Filipino tech and manufacturing sectors might be more developed without the economic devastation of the Marcos years.",
      culture:"No Imelda's shoes. No EDSA as a symbol of people power. The Philippines' national narrative is completely different â€” less traumatic, possibly more prosperous.",
      politics:"Without the Marcos dictatorship, the Duterte phenomenon and the Marcos family's return to power in 2022 don't happen. Philippine democracy might be healthier."
    }
  },
  mugabe: {
    cascade:[
      {event:"No Mugabe leading Zimbabwe's independence (1980)",consequence:"Joshua Nkomo or another leader takes power. Zimbabwe's liberation war still succeeds â€” the Rhodesian government couldn't hold out â€” but the postwar political structure is different.",delay:"Immediate",severity:"medium",icon:"ðŸ‡¿ðŸ‡¼"},
      {event:"No Gukurahundi massacres (1983-87)",consequence:"Mugabe's campaign against the Ndebele in Matabeleland killed an estimated 20,000 people. A different leader might not have pursued ethnic violence, though ethnic tensions existed regardless.",delay:"~3 years",severity:"high",icon:"âš ï¸"},
      {event:"Land reform might happen differently",consequence:"The 2000 land seizures â€” which destroyed Zimbabwe's agriculture â€” were Mugabe's specific policy to maintain power. A different leader might have pursued gradual, legal land reform.",delay:"~20 years",severity:"high",icon:"ðŸŒ¾"},
      {event:"Zimbabwe's economy doesn't collapse",consequence:"Hyperinflation, economic freefall, mass emigration â€” all consequences of Mugabe's policies. Without him, Zimbabwe might have developed like Botswana â€” stable, growing, democratic.",delay:"~25 years",severity:"high",icon:"ðŸ“‰"},
      {event:"Africa's liberation narrative different",consequence:"Mugabe's trajectory â€” liberation hero turned dictator â€” became a cautionary tale across Africa. Without him, the narrative of post-independence governance might include one more success story.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Zimbabwe might be prosperous â€” it has natural resources, educated people, and productive farmland. Under better governance, it could be one of Africa's success stories.",
      tech:"No direct difference, though a stable Zimbabwe would likely have a functioning tech sector.",
      culture:"The 'liberation hero turned tyrant' narrative that Mugabe embodied â€” and that haunts post-colonial Africa â€” has a different, possibly weaker example.",
      politics:"Zimbabwe might be a stable democracy. The cascade of economic refugees to South Africa, the UK, and elsewhere wouldn't have happened. Southern African regional politics would be more stable."
    }
  },
  pinochet: {
    cascade:[
      {event:"No 1973 Chilean coup",consequence:"Without Pinochet, the military coup against Allende might still happen â€” the military establishment and the CIA were pushing for it. But the 17-year dictatorship takes a different form under a different general.",delay:"Immediate",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"No 'Chicago Boys' economic experiment",consequence:"Pinochet's Chile was the first country to implement Milton Friedman's free-market ideology at scale â€” privatization, deregulation, pension reform. Without this specific experiment, neoliberalism lacks its most famous test case.",delay:"~5 years",severity:"high",icon:"ðŸ“ˆ"},
      {event:"Fewer disappearances and human rights abuses",consequence:"While any military dictatorship would have been repressive, Pinochet's specific brutality â€” 3,000+ killed, 30,000+ tortured â€” was not inevitable. A different dictator might have been less systematic.",delay:"~5 years",severity:"high",icon:"âš ï¸"},
      {event:"Neoliberal model develops differently",consequence:"Chile under Pinochet was held up as proof that free markets work (ignoring the authoritarianism). Without this example, Thatcher and Reagan have less evidence for their economic programs.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Latin American politics different",consequence:"Pinochet's dictatorship â€” and the US role in supporting it â€” shaped Latin American attitudes toward the US and toward free-market economics for decades.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Chile's economic model â€” the most market-oriented in Latin America â€” was built under Pinochet. Without him, Chile's economy looks different, possibly more state-directed.",
      tech:"No direct difference.",
      culture:"The trauma of the Pinochet years shaped Chilean art, literature, and film for generations. Without it, Chilean culture is less politically charged.",
      politics:"Chile's current debates about its constitution and economic model are direct legacies of Pinochet. Without him, Chilean politics looks completely different. The broader Latin American left's distrust of US-backed economic reform is weaker."
    }
  },
  wbrandt: {
    cascade:[
      {event:"No Ostpolitik (1969-74)",consequence:"Brandt's policy of engagement with Eastern Europe â€” normalizing relations with East Germany, Poland, the USSR â€” was a radical departure. Without it, the Cold War in Europe remains frozen in confrontation.",delay:"Immediate",severity:"high",icon:"ðŸ¤"},
      {event:"No Warschauer Kniefall (1970)",consequence:"Brandt's spontaneous kneeling at the Warsaw Ghetto memorial was one of the most powerful acts of political symbolism in the 20th century. It transformed Germany's relationship with its Nazi past.",delay:"~1 year",severity:"medium",icon:"ðŸ§Ž"},
      {event:"German reunification harder",consequence:"Ostpolitik laid the diplomatic groundwork for reunification. Without decades of engagement, the 1989 opening might have been more chaotic or might not have led to reunification.",delay:"~20 years",severity:"high",icon:"ðŸ‡©ðŸ‡ª"},
      {event:"European dÃ©tente delayed",consequence:"The Helsinki Accords (1975) built on Brandt's Ostpolitik. Without his initiative, the human rights framework that undermined communist legitimacy in Eastern Europe comes later.",delay:"~5 years",severity:"medium",icon:"ðŸ“œ"},
      {event:"Cold War ends differently",consequence:"The peaceful end of the Cold War in Europe â€” the fall of the Berlin Wall, the velvet revolutions â€” was enabled by decades of engagement that Brandt started. Without Ostpolitik, the transition might be more violent.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"German reunification might have happened later or more violently. If you live in Germany, the post-reunification experience is different.",
      tech:"No direct difference.",
      culture:"Germany's process of VergangenheitsbewÃ¤ltigung (coming to terms with the past) might be different without Brandt's dramatic symbolic acts.",
      politics:"The Cold War might have ended more abruptly and violently. The Helsinki Accords' human rights provisions â€” which gave dissidents in Eastern Europe a legal framework â€” might not exist."
    }
  },
  jfk: {
    cascade:[
      {event:"No Kennedy presidency (1961-63)",consequence:"Nixon likely wins the 1960 election â€” it was razor-thin. Nixon was more hawkish on foreign policy but less inspiring domestically. The early 1960s look more like the late 1950s.",delay:"Immediate",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Cuban Missile Crisis handled differently",consequence:"Nixon or another president faces the same crisis, but JFK's specific combination of firmness and restraint might be unique. A more hawkish response could have led to nuclear war. A more passive one might have left missiles in Cuba.",delay:"~2 years",severity:"high",icon:"â˜¢ï¸"},
      {event:"Civil rights movement has different presidential ally",consequence:"JFK was a cautious ally of civil rights â€” pushed more by events than conviction. Nixon might have been surprisingly supportive (he was, later). The Civil Rights Act still passes, but the politics are different.",delay:"~3 years",severity:"medium",icon:"âœŠ"},
      {event:"Space program has different motivation",consequence:"JFK's 1961 moon speech galvanized the space program. Without it, the US still competes with the Soviets in space, but the moon landing might be delayed or have a different political framing.",delay:"~8 years",severity:"medium",icon:"ðŸš€"},
      {event:"American political mythology different",consequence:"No Camelot, no assassination, no eternal youth frozen in time. The 1960s cultural revolution still happens â€” it was driven by demographics and the Vietnam War â€” but the political symbolism is completely different.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If the Cuban Missile Crisis was handled differently, you might not exist. That's not hyperbole â€” nuclear war in 1962 would have killed hundreds of millions.",
      tech:"The moon landing might have happened later or not at all (as a manned mission). Space technology develops on a different timeline.",
      culture:"No Camelot mythology. No Kennedy assassination conspiracy theories. The 1960s are still revolutionary culturally, but the political iconography is completely different.",
      politics:"The Kennedy dynasty doesn't exist â€” no RFK, no Ted Kennedy. Democratic Party politics and American liberalism have a different character."
    }
  },
  reagan: {
    cascade:[
      {event:"No Reagan presidency (1981-89)",consequence:"Without Reagan, the 1980 election might go to George H.W. Bush (more moderate Republican) or even Carter if a different challenger splits the GOP. The conservative revolution is weaker or delayed.",delay:"Immediate",severity:"high",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"No 'Reaganomics'",consequence:"Tax cuts, deregulation, supply-side economics â€” the specific program that reshaped American economic policy. Without Reagan's personal popularity selling these ideas, the New Deal consensus persists longer.",delay:"~2 years",severity:"high",icon:"ðŸ“ˆ"},
      {event:"Cold War endgame different",consequence:"Reagan's massive military buildup and aggressive rhetoric â€” 'evil empire,' SDI â€” pressured the Soviet Union. Without this pressure, the Cold War might last longer or end through different dynamics.",delay:"~5 years",severity:"high",icon:"â˜¢ï¸"},
      {event:"Conservative movement weaker",consequence:"Reagan built the modern Republican coalition â€” evangelicals, business, defense hawks. Without his personal charisma fusing these groups, the American right looks different.",delay:"~10 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"American political landscape transformed",consequence:"The Reagan realignment â€” shifting the Overton window rightward on taxes, regulation, and government â€” shaped every subsequent administration. Without it, American politics is further left.",delay:"~20 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"American taxes, government services, and economic inequality all reflect Reagan's revolution. Without it, the US might look more like Western Europe â€” higher taxes, stronger safety net, less inequality.",
      tech:"No direct difference, though deregulation of telecommunications (which Reagan accelerated) shaped the development of cable, internet, and tech industries.",
      culture:"The conservative cultural revolution â€” the rise of talk radio, the 'government is the problem' ethos â€” is weaker. American culture is less polarized around government's role.",
      politics:"The modern Republican Party as constructed by Reagan doesn't exist. American conservatism takes a different, probably more moderate form. The Gingrich revolution, the Tea Party, Trump â€” the entire trajectory of the American right is different."
    }
  },
  gorbachev: {
    cascade:[
      {event:"No glasnost and perestroika (1985-91)",consequence:"Without Gorbachev, the Soviet Union gets another hardliner â€” Grishin or Romanov. The system continues unreformed, stagnating. The Cold War doesn't end in 1991.",delay:"Immediate",severity:"high",icon:"ðŸ‡·ðŸ‡º"},
      {event:"Soviet Union persists longer",consequence:"The USSR was economically failing, but authoritarian systems can persist for decades through repression. Without Gorbachev's liberalization, the Soviet Union might have lasted another 10-20 years, like North Korea.",delay:"~10-20 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"No peaceful revolutions of 1989",consequence:"Gorbachev explicitly refused to use force to keep Eastern Europe communist. Without this decision, the Tiananmen model â€” crush the protests â€” might have been applied in Berlin, Prague, and Warsaw.",delay:"~4 years",severity:"high",icon:"âœŠ"},
      {event:"Berlin Wall stands longer",consequence:"Without Gorbachev's acquiescence, East German troops shoot protesters and the Wall stands. German reunification is delayed by years or decades. Europe remains divided.",delay:"~4 years",severity:"high",icon:"ðŸ§±"},
      {event:"Cold War ends eventually but violently",consequence:"The Soviet system couldn't survive forever â€” the economics were too bad. But without Gorbachev's peaceful dissolution, it might end through civil war, military coup, or nuclear crisis.",delay:"~10-20 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"You might still be living in a world divided between communist and capitalist blocs. The Cold War might have ended in the 2000s instead of 1991 â€” or it might have ended in nuclear war.",
      tech:"Soviet isolation from the global economy would have slowed technology transfer. The internet's global expansion would have been partial, with a Soviet intranet separate from the Western internet.",
      culture:"The 1990s optimism â€” 'end of history,' global capitalism triumphant â€” doesn't happen. Culture remains divided along Cold War lines. Russian literature, cinema, and art develop in continued isolation.",
      politics:"NATO expansion doesn't happen. The EU doesn't expand eastward. Eastern European nations remain Soviet satellites. The entire post-Cold War international order â€” UN peacekeeping, globalization, democratic expansion â€” takes a different shape."
    }
  },
  alexander: {
    cascade:[
      {event:"No conquest of the Persian Empire (334-323 BC)",consequence:"Alexander's father Philip II built the army, but only Alexander had the audacity to use it against Persia. Without him, Macedon remains a strong Greek state but doesn't conquer half of Asia.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"No Hellenistic world",consequence:"Greek culture doesn't spread to Egypt, Persia, Central Asia, and India. The fusion of Greek and Eastern civilizations â€” which shaped philosophy, science, art, and religion for centuries â€” doesn't happen.",delay:"~10 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Persia remains the dominant Eastern power",consequence:"The Achaemenid Empire or its successors continue ruling from Egypt to India. The Mediterranean and the East remain more culturally separate.",delay:"~20 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"No Alexandria",consequence:"The city Alexander founded in Egypt became the ancient world's intellectual capital â€” the Library, the Lighthouse, the center of science and philosophy. Without it, ancient scholarship develops elsewhere.",delay:"~30 years",severity:"high",icon:"ðŸ“š"},
      {event:"Christianity and Islam develop differently",consequence:"Hellenistic culture provided the philosophical language (Greek philosophy) that Christianity used to articulate its theology. Without Hellenization, both religions develop in a more purely Semitic intellectual framework.",delay:"~300 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Western philosophy, science, and religion all passed through the Hellenistic filter Alexander created. Without it, the intellectual foundations of Western civilization look different.",
      tech:"Greek science â€” Euclid, Archimedes, Ptolemy â€” flourished in the Hellenistic world Alexander built. Without that incubator, scientific development follows a different, possibly slower path.",
      culture:"No Alexander the Great mythology. The archetype of the young conqueror â€” which influenced Caesar, Napoleon, and countless others â€” doesn't exist. Western culture's fascination with military genius has a different model.",
      politics:"The Middle East, Central Asia, and the Mediterranean never experience Hellenistic unification. The cultural bridges between East and West that Alexander built don't exist. Two thousand years of East-West interaction follow a different pattern."
    }
  },
  hannibal: {
    cascade:[
      {event:"No invasion of Italy (218-203 BC)",consequence:"Without Hannibal's crossing of the Alps and 15 years devastating Italy, Rome never faces an existential threat. The Second Punic War is just a colonial skirmish in Spain and Sicily.",delay:"Immediate",severity:"high",icon:"ðŸ˜"},
      {event:"Rome still defeats Carthage",consequence:"Rome's advantages â€” manpower, political resilience, naval power â€” meant Carthage was going to lose eventually. But without the trauma of Hannibal, Rome doesn't develop the same paranoia about external threats.",delay:"~10 years",severity:"medium",icon:"âš”ï¸"},
      {event:"No 'Carthago delenda est' mentality",consequence:"Rome's eventual destruction of Carthage in 146 BC was driven partly by the memory of Hannibal. Without that terror, Carthage might survive as a Roman client state rather than being annihilated.",delay:"~70 years",severity:"medium",icon:"ðŸ”¥"},
      {event:"Roman military system develops differently",consequence:"Fighting Hannibal forced Rome to professionalize its army, develop flexible tactics, and learn from defeat. Without this crucible, Roman military evolution takes a different path.",delay:"~20 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Same Roman dominance",consequence:"Rome was going to dominate the Mediterranean regardless. But the specific character of that dominance â€” the ruthlessness, the strategic paranoia, the military flexibility â€” was forged in the Hannibalic Wars.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No meaningful difference. Rome dominates the Mediterranean either way.",
      tech:"No difference. Hannibal's contribution was military, not technological.",
      culture:"Military history loses its most studied campaign. The Alps crossing is one of the most famous military feats in history. Without it, the study of strategy and tactics has different foundational texts.",
      politics:"Carthage might have survived as a city and culture. North African history could include a continuous Punic cultural tradition. The complete erasure of Carthaginian civilization â€” one of history's great cultural losses â€” might not happen."
    }
  },
  suntzu: {
    cascade:[
      {event:"No Art of War (~500 BC)",consequence:"The most influential military text in history might not be by one author â€” scholars debate whether Sun Tzu even existed. The ideas were likely accumulating across Chinese military thinking.",delay:"~50 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Chinese strategic thought develops anyway",consequence:"Chinese military philosophy was rich â€” other texts like the Six Secret Teachings and the Methods of the Sima existed. The strategic principles would have been articulated by others.",delay:"~100 years",severity:"low",icon:"âš”ï¸"},
      {event:"No Western adoption of the text",consequence:"The Art of War's influence on Western military thinking â€” Napoleon supposedly read it, modern business leaders quote it â€” depends on this specific text existing as a canonical work.",delay:"~2000 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Business strategy loses its favorite metaphor",consequence:"The modern application of Sun Tzu to business, sports, and competition is a cultural phenomenon. Without the text, strategic thinking is still taught, but from different sources.",delay:"Cultural",severity:"medium",icon:"ðŸ’¼"},
      {event:"Same military principles discovered",consequence:"'Know your enemy,' 'win without fighting,' 'all warfare is deception' â€” these insights emerge from military experience regardless. Sun Tzu codified them; without him, they're scattered across many texts.",delay:"~200 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Military strategy doesn't depend on any one text.",
      tech:"No difference whatsoever.",
      culture:"Business schools and self-help shelves lose their favorite ancient text. The 'Art of War' as a cultural reference â€” applied to everything from dating to corporate strategy â€” doesn't exist.",
      politics:"Chinese military tradition still emphasizes deception, patience, and indirect strategy. These principles come from experience, not from one book."
    }
  },
  saladin: {
    cascade:[
      {event:"No recapture of Jerusalem (1187)",consequence:"Saladin united the fractious Muslim states of Egypt and Syria and retook Jerusalem from the Crusaders. Without him, the Crusader states survive longer â€” possibly decades â€” until another Muslim leader unifies the region.",delay:"~10-20 years",severity:"high",icon:"âš”ï¸"},
      {event:"Crusader states last longer",consequence:"The Kingdom of Jerusalem and its satellite states persist without Saladin's military campaign. European presence in the Levant continues, with more cultural exchange and more conflict.",delay:"~20 years",severity:"medium",icon:"ðŸ°"},
      {event:"No Third Crusade as we know it",consequence:"Richard the Lionheart's crusade was a response to Saladin's conquest. Without it, Richard stays in England, and the famous rivalry between the two never happens.",delay:"~3 years",severity:"medium",icon:"ðŸ¦"},
      {event:"Muslim unity collapses anyway",consequence:"Saladin's Ayyubid state fractured after his death. Without him, Muslim political unity in the region is even weaker, and the Crusader states exploit the divisions.",delay:"~10 years",severity:"medium",icon:"ðŸ—ºï¸"},
      {event:"Same eventual Muslim reconquest",consequence:"The Crusader states couldn't survive indefinitely â€” they were European outposts in a Muslim-majority region. Eventually, whether through Saladin or the Mamluks or the Ottomans, Jerusalem returns to Muslim control.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No meaningful difference. The Crusader states were going to fall eventually.",
      tech:"No difference.",
      culture:"Saladin as the model of chivalrous Muslim leadership â€” admired even by his Crusader enemies â€” is absent. The cross-cultural respect between Saladin and Richard is one of the Middle Ages' best stories.",
      politics:"The narrative of Muslim-Christian relations in the Middle East loses a key chapter. Saladin's reputation for mercy and tolerance is an important historical counterpoint to narratives of civilizational conflict."
    }
  },
  shaka: {
    cascade:[
      {event:"No Zulu military revolution (1810s-20s)",consequence:"Shaka transformed the Zulu from a minor clan into southern Africa's dominant military power through radical reforms â€” the iklwa short spear, the buffalo horns formation, total war tactics.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"No Mfecane",consequence:"Shaka's wars triggered the Mfecane â€” a massive upheaval across southern and eastern Africa as displaced peoples fled and fought. Millions were killed or displaced. Without Shaka, this catastrophe doesn't happen.",delay:"~5 years",severity:"high",icon:"ðŸŒ"},
      {event:"Southern African demographics different",consequence:"The Mfecane reshaped the demographic map â€” the Ndebele fled to Zimbabwe, the Sotho consolidated in Lesotho, the Ngoni reached as far as Tanzania. Without it, southern Africa's ethnic geography is completely different.",delay:"~10 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"British colonization encounters different landscape",consequence:"When the British and Boers expanded into the interior, they found land depopulated by the Mfecane. Without it, they encounter denser, more organized African states â€” colonization might be harder.",delay:"~30 years",severity:"medium",icon:"ðŸ‡¬ðŸ‡§"},
      {event:"Same colonization, different Africa",consequence:"European colonization happens regardless â€” the technology gap was too large. But the specific political map of southern Africa, the ethnic tensions, the national boundaries â€” all are different.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you live in southern Africa, national borders, ethnic distributions, and political tensions trace back to Shaka's wars. Without the Mfecane, the demographic map is unrecognizable.",
      tech:"No difference.",
      culture:"Zulu military culture â€” the most famous warrior tradition in sub-Saharan Africa â€” doesn't exist in its historical form. The Zulu remain a minor clan rather than a major ethnic group.",
      politics:"South Africa's ethnic politics are completely different. The Zulu-Xhosa tensions that shape modern South African politics might not exist. Lesotho, Swaziland, and Zimbabwe's ethnic compositions are different."
    }
  },
  tokugawa: {
    cascade:[
      {event:"No Tokugawa shogunate (1603-1868)",consequence:"Tokugawa Ieyasu won the decisive Battle of Sekigahara in 1600. Without his victory, Japan remains in civil war, or another daimyo unifies the country under different principles.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"No 250 years of peace",consequence:"The Tokugawa peace â€” the longest period of stability in Japanese history â€” enabled urbanization, commerce, literacy, and cultural refinement. Without it, Japan is more militaristic, less culturally developed.",delay:"~50 years",severity:"high",icon:"â˜®ï¸"},
      {event:"No sakoku isolation policy",consequence:"Tokugawa closed Japan to foreign trade and Christianity. Without this isolation, Japan is more connected to the world but possibly more colonized â€” European powers were aggressive in Asia.",delay:"~30 years",severity:"high",icon:"ðŸš¢"},
      {event:"Meiji Restoration doesn't happen (or looks different)",consequence:"The specific conditions that enabled Japan's rapid modernization after 1868 â€” high literacy, commercial economy, centralized government â€” were products of Tokugawa rule.",delay:"~265 years",severity:"high",icon:"ðŸ­"},
      {event:"Japan's modern history unrecognizable",consequence:"Without the Tokugawa foundation, Japan might not have industrialized so rapidly, might not have become an imperial power, might not have fought WWII. The entire trajectory of East Asian history changes.",delay:"~300 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Modern Japan â€” its culture of craftsmanship, its social hierarchies, its aesthetic sensibilities â€” was forged during the Tokugawa period. Without it, Japanese culture is fundamentally different.",
      tech:"Japan's technological prowess in the 20th century built on Tokugawa-era foundations: discipline, education, craft tradition. Without these, Japan might not have become a tech powerhouse.",
      culture:"Kabuki, ukiyo-e, haiku, the tea ceremony, bushido â€” all flourished under the Tokugawa peace. Japanese culture as the world knows it doesn't exist without this period.",
      politics:"Without rapid Meiji-era industrialization, Japan might not have become an imperial power. No Russo-Japanese War, no Pacific War, no postwar economic miracle. East Asian history is unrecognizable."
    }
  },
  nelson: {
    cascade:[
      {event:"No victory at Trafalgar (1805)",consequence:"Nelson's decisive destruction of the Franco-Spanish fleet ended any possibility of Napoleon invading Britain. Without it, Britain's naval supremacy is less absolute, and Napoleon might attempt a Channel crossing.",delay:"Immediate",severity:"high",icon:"âš“"},
      {event:"British naval dominance less complete",consequence:"Other admirals were competent, and the Royal Navy was strong. But Nelson's aggressive tactics â€” breaking the line at Trafalgar â€” produced a more complete victory than a cautious commander would have achieved.",delay:"~5 years",severity:"medium",icon:"ðŸš¢"},
      {event:"Napoleonic Wars last longer or end differently",consequence:"Without absolute British naval control, Napoleon can still threaten Britain's trade routes and colonial communications. The Continental System is more effective. Britain is weaker.",delay:"~10 years",severity:"medium",icon:"âš”ï¸"},
      {event:"British Empire still dominates the seas",consequence:"Britain's industrial and naval advantages were structural, not dependent on one admiral. But Nelson's specific victories gave Britain a 100-year head start on unchallenged naval supremacy.",delay:"~20 years",severity:"medium",icon:"ðŸŒŠ"},
      {event:"Same British Empire, less dramatic origin",consequence:"Britannia still rules the waves â€” the industrial base demanded it. But the mythology of British naval power is different. No 'England expects that every man will do his duty.'",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No meaningful difference. British naval dominance was structurally inevitable.",
      tech:"No difference.",
      culture:"British national mythology loses its greatest naval hero. Trafalgar Square has a different name. The Nelson Column doesn't exist. The Royal Navy's self-image is less heroic.",
      politics:"If Napoleon's Continental System was more successful, European economic development in the early 1800s follows a different path. French dominance of Europe might last longer."
    }
  },
  zhukov: {
    cascade:[
      {event:"No Zhukov at Moscow, Stalingrad, and Kursk",consequence:"Zhukov was the Soviet general who stopped the Germans at Moscow (1941), planned the Stalingrad encirclement (1942), and won at Kursk (1943). Without him, these battles still happen but might go differently.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"Soviet Union still survives",consequence:"The USSR had enormous manpower and industrial reserves. Other generals â€” Konev, Rokossovsky, Vasilevsky â€” were capable. But Zhukov's specific brilliance at critical moments mattered.",delay:"~1-2 years",severity:"medium",icon:"ðŸ‡·ðŸ‡º"},
      {event:"WWII in Europe lasts longer",consequence:"Without Zhukov's efficiency, the Eastern Front grinds on longer. The Soviets still win â€” the math was against Germany â€” but it takes more time and more lives.",delay:"~1-2 years",severity:"medium",icon:"ðŸ’£"},
      {event:"Berlin falls later or to different forces",consequence:"Zhukov commanded the assault on Berlin. Without him, another Soviet general takes the city, but possibly later. This might change the postwar division of Europe.",delay:"~3 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Same Cold War, slightly different map",consequence:"If the Soviets take longer to reach Berlin, the Western Allies advance further east. The Iron Curtain might fall along a different line. Poland, Czechoslovakia might have been in the Western sphere.",delay:"~5 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If the postwar borders were drawn differently, Central European nations might be wealthier and more democratic â€” having been in the Western rather than Soviet sphere.",
      tech:"No direct difference.",
      culture:"Russia loses its greatest WWII military hero. The cult of the Great Patriotic War â€” central to Russian national identity â€” has a different set of heroes.",
      politics:"If the Iron Curtain fell further east, the EU and NATO might include more of Eastern Europe from the start. Or if the war lasted longer, the atomic bomb might have been used in Europe."
    }
  },
  cortes: {
    cascade:[
      {event:"No conquest of the Aztec Empire (1519-21)",consequence:"CortÃ©s's invasion was an extraordinary gamble â€” 600 men against an empire of millions. Without his specific combination of audacity, diplomacy with native allies, and ruthlessness, the Aztecs survive.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"Aztec Empire confronts other Europeans later",consequence:"Spanish ships were already exploring the coast. Within 10-20 years, a larger Spanish expedition would arrive. But the Aztecs would have had time to encounter European diseases and develop some resistance or adaptation.",delay:"~10-20 years",severity:"high",icon:"ðŸš¢"},
      {event:"Mesoamerican civilization persists longer",consequence:"With more time, the Aztecs might have adapted to European technology â€” horses, steel, guns. They might have become a client state rather than being conquered outright.",delay:"~20 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Colonization still happens but differently",consequence:"European diseases would still devastate. European military technology was still superior. But the specific, rapid destruction of Aztec civilization â€” and the erasure of their knowledge â€” might have been less total.",delay:"~30 years",severity:"medium",icon:"ðŸŒŽ"},
      {event:"Mexican identity fundamentally different",consequence:"Modern Mexico is built on the ashes of CortÃ©s's conquest. Without it, Mexico's founding narrative, mestizo identity, and cultural blend look completely different.",delay:"~500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If the Aztec Empire survived longer, modern Mexico's culture, demographics, and national identity are fundamentally different. More indigenous languages, more preserved pre-Columbian knowledge.",
      tech:"Mesoamerican astronomical, agricultural, and mathematical knowledge might have been better preserved and integrated with European science.",
      culture:"Mexican identity â€” the synthesis of Spanish and indigenous cultures symbolized by the Virgin of Guadalupe â€” has a different foundation. More Aztec cultural continuity means a different national character.",
      politics:"Indigenous political structures might have persisted in some form. The racial hierarchy of colonial Latin America might look different."
    }
  },
  zhenghe: {
    cascade:[
      {event:"No treasure fleet voyages (1405-33)",consequence:"Zheng He's seven voyages â€” with ships dwarfing European vessels â€” projected Ming Chinese power across Southeast Asia, India, Arabia, and East Africa. Without them, China's maritime reach is minimal.",delay:"Immediate",severity:"medium",icon:"ðŸš¢"},
      {event:"Chinese maritime trade continues through private merchants",consequence:"Even without the state-sponsored voyages, Chinese merchants were trading throughout Southeast Asia. Zheng He's contribution was projecting imperial power, not discovering trade routes.",delay:"~10 years",severity:"low",icon:"ðŸ’°"},
      {event:"No proof of concept for Chinese naval supremacy",consequence:"The voyages demonstrated that China could project naval power globally. Without this precedent, the subsequent decision to turn inward is less dramatic â€” there's less to abandon.",delay:"~30 years",severity:"medium",icon:"âš“"},
      {event:"China still turns inward",consequence:"The Ming decision to scrap the fleet and restrict maritime trade was driven by Confucian ideology and court politics, not by the voyages themselves. China withdraws regardless.",delay:"~30 years",severity:"low",icon:"ðŸ¯"},
      {event:"Same world history",consequence:"The great historical 'what if' is: what if China hadn't turned inward? But Zheng He's voyages didn't cause the turning inward â€” court politics did. His removal doesn't change that decision.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. The voyages were impressive but had no lasting structural impact â€” China turned inward regardless.",
      tech:"No difference. Chinese technology development was driven by domestic needs, not maritime exploration.",
      culture:"China loses a national hero and symbol of its maritime past. The argument that 'China discovered the world before Europe' loses its strongest evidence.",
      politics:"Modern Chinese claims in the South China Sea sometimes invoke Zheng He's voyages as historical precedent. Without them, China has slightly weaker historical arguments for maritime dominance."
    }
  },
  tamerlane: {
    cascade:[
      {event:"No Timurid conquests (1370-1405)",consequence:"Tamerlane carved an empire from Turkey to India through extraordinary military brutality. Without him, the fragmented states of Central Asia, Persia, and northern India continue their local conflicts.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"Ottoman Empire not weakened at Ankara (1402)",consequence:"Tamerlane's defeat of the Ottomans at Ankara delayed Ottoman expansion by decades. Without this setback, the Ottomans might have conquered Constantinople earlier and expanded faster.",delay:"~5 years",severity:"high",icon:"ðŸ•Œ"},
      {event:"No Timurid Renaissance",consequence:"The Timurid court at Samarkand and Herat produced extraordinary art, architecture, astronomy, and literature. Ulugh Beg's observatory, Persian miniature painting â€” all products of Timurid patronage.",delay:"~20 years",severity:"medium",icon:"ðŸŽ¨"},
      {event:"Mughal Empire doesn't exist",consequence:"Babur, who founded the Mughal Empire in India, was a direct descendant of Tamerlane. Without the Timurid dynasty, the political trajectory of India is completely different.",delay:"~130 years",severity:"high",icon:"ðŸ‘‘"},
      {event:"Central Asian history unrecognizable",consequence:"The demographic damage Tamerlane inflicted â€” cities destroyed, populations massacred â€” shaped Central Asia for centuries. Without him, cities like Baghdad, Delhi, and Damascus avoid catastrophic sackings.",delay:"~200 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If the Mughal Empire never forms, Indian culture, cuisine, architecture, and demographics are different. No Taj Mahal. No Mughal cuisine traditions that define modern Indian food.",
      tech:"No direct difference.",
      culture:"Central Asian culture retains more pre-Timurid traditions. The great libraries and scholarly centers that Tamerlane destroyed (particularly in Baghdad) might have preserved knowledge that was lost.",
      politics:"India without the Mughals is politically fragmented differently. The Ottomans, without the Ankara setback, might have dominated the Middle East earlier and more thoroughly."
    }
  },
  eisenhower: {
    cascade:[
      {event:"No Eisenhower commanding D-Day",consequence:"Another general â€” possibly Marshall or Alexander â€” commands the invasion. Eisenhower's specific talent was managing the Allied coalition â€” keeping Montgomery, Patton, de Gaulle, and Churchill aligned. Without him, Allied cooperation is harder.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"D-Day still happens but might be messier",consequence:"The invasion was planned by a large staff. But Eisenhower made the key decision to launch on June 6 despite bad weather. Another commander might have delayed â€” giving Germany more time to prepare.",delay:"~1 month",severity:"medium",icon:"ðŸ–ï¸"},
      {event:"Postwar Europe organized differently",consequence:"Eisenhower's relationships with European leaders shaped occupation policy. Without his diplomatic skill, the transition from war to peace in Western Europe might be more contentious.",delay:"~1 year",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"No Eisenhower presidency (1953-61)",consequence:"Without the war hero's popularity, the 1952 election goes to Taft (isolationist Republican) or Stevenson (Democrat). The Interstate Highway System, NASA's creation, and the military-industrial complex speech don't happen as they did.",delay:"~8 years",severity:"high",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"Cold War managed differently",consequence:"Eisenhower's restraint â€” rejecting military intervention in multiple crises, warning about the military-industrial complex â€” shaped the Cold War. A more aggressive president might have escalated.",delay:"~15 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No Interstate Highway System in its current form â€” the most expensive public works project in history. American cities, suburbs, and car culture all develop differently.",
      tech:"NASA might not exist (Eisenhower created it in 1958). The space program develops under a different institutional framework.",
      culture:"No 'I Like Ike.' No military-industrial complex warning. American attitudes toward defense spending and war might be less cautious.",
      politics:"Without Eisenhower's moderate Republicanism, the GOP might have gone isolationist under Taft. The entire trajectory of American conservatism is different."
    }
  },
  macarthur: {
    cascade:[
      {event:"No MacArthur commanding Pacific Theater",consequence:"Nimitz led the Navy's island-hopping campaign regardless. But MacArthur's return to the Philippines and his specific strategic vision shaped the Pacific War's conduct. Another general might have bypassed the Philippines entirely.",delay:"Immediate",severity:"medium",icon:"âš”ï¸"},
      {event:"Japanese occupation of Japan differs",consequence:"MacArthur's seven-year rule of Japan was essentially a benevolent dictatorship. He preserved the Emperor, imposed a democratic constitution, and rebuilt the economy. A different administrator might have been harsher or less effective.",delay:"~3 years",severity:"high",icon:"ðŸ‡¯ðŸ‡µ"},
      {event:"Japanese constitution different",consequence:"MacArthur personally insisted on Article 9 â€” renouncing war. Without him, Japan's postwar constitution might allow a military, fundamentally changing East Asian security dynamics.",delay:"~2 years",severity:"high",icon:"ðŸ“œ"},
      {event:"Korean War plays out differently",consequence:"MacArthur's Inchon landing was brilliant but his push to the Yalu River brought China into the war. Without his overreach, the Korean War might have ended sooner â€” or never escalated as far.",delay:"~5 years",severity:"high",icon:"ðŸ’£"},
      {event:"Japan's postwar trajectory changes",consequence:"MacArthur's specific vision â€” democratic, pacifist, economically rebuilt Japan â€” was not inevitable. Japan might have remained militarized, or been divided like Germany, or descended into political instability.",delay:"~10 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Modern Japan's pacifist constitution, democratic system, and economic model were largely MacArthur's design. Without him, Japan might look like South Korea â€” democratic but with mandatory military service and a large army.",
      tech:"Japan's tech industry developed partly because military spending was constitutionally limited, directing talent toward consumer technology. With a military, Sony and Toyota might look different.",
      culture:"Japan's postwar pacifist identity â€” central to how Japanese people think about themselves â€” might not exist.",
      politics:"A militarized Japan changes East Asian security dynamics completely. The US-Japan alliance looks different. China-Japan relations are more confrontational. North Korea policy has a different dynamic."
    }
  },
  montgomery: {
    cascade:[
      {event:"No Montgomery at El Alamein (1942)",consequence:"Another British general commands in North Africa â€” possibly Alexander. The battle might still be won (Rommel was overextended), but the morale-boosting certainty of victory that Montgomery provided wouldn't have been the same.",delay:"~1-3 months",severity:"medium",icon:"âš”ï¸"},
      {event:"British morale lower",consequence:"Before El Alamein, Britain had suffered defeat after defeat. Montgomery's meticulous preparation and confident leadership restored the army's faith in itself. Without this, the British Eighth Army fights more cautiously.",delay:"~6 months",severity:"medium",icon:"ðŸ‡¬ðŸ‡§"},
      {event:"D-Day ground command different",consequence:"Montgomery commanded all ground forces for D-Day and the Normandy campaign. Without him, another general leads â€” and the cautious, methodical approach that frustrated but ultimately worked gives way to a different style.",delay:"~2 years",severity:"medium",icon:"ðŸ–ï¸"},
      {event:"Market Garden doesn't happen",consequence:"Operation Market Garden â€” Montgomery's ambitious but failed attempt to end the war in 1944 â€” doesn't happen. The war in Northwest Europe follows a different operational path.",delay:"~2 years",severity:"medium",icon:"ðŸª‚"},
      {event:"Same Allied victory, different timeline",consequence:"Germany still loses â€” the resources arrayed against it were overwhelming. But the specific battles, the specific timelines, and the British army's self-image are all different.",delay:"~3 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No meaningful difference. The war's outcome doesn't change.",
      tech:"No difference.",
      culture:"British military mythology is different. El Alamein â€” which Churchill called 'the end of the beginning' â€” has a different narrative. The Montgomery-Patton rivalry doesn't exist.",
      politics:"The postwar division of Germany might be slightly different depending on how the final months of the war played out."
    }
  },
  giap: {
    cascade:[
      {event:"No GiÃ¡p commanding at Dien Bien Phu (1954)",consequence:"The decisive battle that ended French colonialism in Indochina might not have been won â€” or won so completely. GiÃ¡p's logistical genius, hauling artillery through mountains, was personally directed.",delay:"Immediate",severity:"high",icon:"âš”ï¸"},
      {event:"French stay in Vietnam longer",consequence:"Without the shock of Dien Bien Phu, France might have negotiated more slowly or continued fighting. Vietnamese independence comes, but the timing and terms are different.",delay:"~5 years",severity:"medium",icon:"ðŸ‡«ðŸ‡·"},
      {event:"Vietnam War against America still happens",consequence:"If Vietnam becomes communist (likely regardless of GiÃ¡p), the US still intervenes based on domino theory. But GiÃ¡p's specific strategy â€” patience, guerrilla warfare, accepting enormous casualties for political goals â€” might be different under another commander.",delay:"~10 years",severity:"medium",icon:"ðŸ’£"},
      {event:"Tet Offensive doesn't happen in 1968",consequence:"GiÃ¡p planned the Tet Offensive â€” a military defeat but a political victory that turned American opinion against the war. Without his specific strategic vision, the turning point of the war looks different.",delay:"~14 years",severity:"high",icon:"ðŸ“º"},
      {event:"Same outcome, different path",consequence:"The US was going to lose in Vietnam â€” the political will wasn't there. But the specific manner of the war, its turning points, and its lessons might all be different without GiÃ¡p.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The Vietnam War's outcome is probably the same. But the specific lessons drawn â€” about guerrilla warfare, about media's role in war, about patience versus firepower â€” might be different.",
      tech:"No difference.",
      culture:"The narrative of the small nation defeating the superpower has a different hero. GiÃ¡p is the military mind behind that story.",
      politics:"If the Vietnam War plays out differently in its details, American domestic politics in the 1960s-70s might shift. But the broad outcome â€” American withdrawal â€” is the same."
    }
  },
  suleiman: {
    cascade:[
      {event:"No Suleiman's conquests and legal reforms (1520-66)",consequence:"The Ottoman Empire was already expanding. But Suleiman's specific combination of military ambition and administrative genius produced both territorial expansion (Belgrade, Budapest, Baghdad) and legal codification.",delay:"Immediate",severity:"high",icon:"ðŸ‘‘"},
      {event:"Ottoman expansion slower",consequence:"Without Suleiman's personal leadership, Ottoman armies still advance but less effectively. Hungary might not fall. The siege of Vienna (1529) doesn't happen â€” or happens later.",delay:"~10 years",severity:"high",icon:"âš”ï¸"},
      {event:"No 'Golden Age' of Ottoman culture",consequence:"Suleiman's court produced the architect Sinan, the poet Baki, and extraordinary decorative arts. His patronage made the Ottoman Empire a cultural superpower, not just a military one.",delay:"~20 years",severity:"medium",icon:"ðŸ•Œ"},
      {event:"Ottoman legal system less sophisticated",consequence:"Suleiman earned his Turkish name 'Kanuni' (the Lawgiver) for codifying Ottoman law. Without his legal reforms, the empire's administration is less systematic.",delay:"~20 years",severity:"medium",icon:"âš–ï¸"},
      {event:"Same Ottoman trajectory",consequence:"The empire's decline was structural â€” economic shifts, military stagnation, European industrialization. Suleiman made the empire grander at its peak but couldn't prevent the forces that would weaken it.",delay:"~100 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Istanbul's skyline is different â€” Sinan's mosques, commissioned by Suleiman, define the city. Ottoman architectural heritage across the Middle East is thinner.",
      tech:"No difference.",
      culture:"The architectural masterpieces of Istanbul's skyline â€” SÃ¼leymaniye Mosque, the Selimiye â€” might not exist. Ottoman decorative arts and calligraphy are less refined.",
      politics:"If the Ottomans don't take Hungary, Central European history is different. The Habsburg-Ottoman rivalry, which shaped European politics for centuries, takes a different form."
    }
  },
  moltke: {
    cascade:[
      {event:"No Moltke's military reforms (1850s-80s)",consequence:"Moltke transformed the Prussian army into a modern force â€” using railroads for mobilization, the telegraph for communication, and the general staff for planning. Without him, Prussia's military edge is smaller.",delay:"~5 years",severity:"high",icon:"âš”ï¸"},
      {event:"Prussian victories less decisive",consequence:"The wars against Denmark (1864), Austria (1866), and France (1870-71) were won partly through Moltke's operational planning. Without his efficiency, these wars are harder, longer, and less decisive.",delay:"~10 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"German unification delayed or different",consequence:"Bismarck needed military victories to unite Germany. Without Moltke delivering them so efficiently, unification comes later or in a different form â€” possibly through negotiation rather than war.",delay:"~15 years",severity:"medium",icon:"ðŸ‡©ðŸ‡ª"},
      {event:"Modern military planning develops elsewhere",consequence:"Moltke invented modern operational planning â€” the idea that wars are won by logistics and staff work, not just battlefield courage. Without him, other armies develop this more slowly.",delay:"~20 years",severity:"medium",icon:"ðŸ“‹"},
      {event:"WWI fought differently",consequence:"The German army in 1914 used Moltke's methods (his nephew commanded). Without the elder Moltke's doctrinal legacy, the opening of WWI looks different â€” less focused on rapid mobilization and encirclement.",delay:"~40 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No meaningful difference. Military organizational methods were being modernized across all major armies.",
      tech:"No difference. Railroad mobilization was an obvious military application that all nations adopted.",
      culture:"Military science loses its most systematic early practitioner. The general staff concept might develop from French or Russian models instead.",
      politics:"If German unification is delayed or messier, the entire trajectory of European politics from 1871 to 1945 is different."
    }
  },
  beethoven: {
    cascade:[
      {event:"No symphonic revolution (1800-1824)",consequence:"Beethoven transformed the symphony from an elegant entertainment into a vehicle for expressing the full range of human experience. His Third Symphony (Eroica) alone redefined what music could do. Without him, this expansion happens more gradually.",delay:"Immediate",severity:"high",icon:"ðŸŽµ"},
      {event:"Romantic music develops differently",consequence:"Schubert, Berlioz, Brahms, Wagner â€” every major Romantic composer defined themselves in relation to Beethoven. Without him, Romantic music evolves from different foundations, possibly staying closer to Mozart's classical elegance.",delay:"~20 years",severity:"high",icon:"ðŸŽ¼"},
      {event:"Piano music less ambitious",consequence:"Beethoven's piano sonatas expanded the instrument's expressive range. Without them, Chopin, Liszt, and every subsequent pianist has a different starting point.",delay:"~10 years",severity:"medium",icon:"ðŸŽ¹"},
      {event:"Symphonic form stagnates or evolves differently",consequence:"After Beethoven's Ninth, every composer struggled with 'the symphony problem' â€” how to follow that. Without it, the symphony remains a more modest form. Mahler's gigantic symphonies might never be conceived.",delay:"~50 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Western music still evolves but with different DNA",consequence:"Music was changing regardless â€” industrialization, new instruments, growing middle-class audiences. But the specific character of 19th-century music â€” its grandeur, its emotional intensity, its heroism â€” is Beethoven's legacy.",delay:"~100 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Film scores, video game music, and popular music are all downstream of the Romantic tradition Beethoven launched. Without him, dramatic music sounds different.",
      tech:"No difference.",
      culture:"The image of the tortured genius artist â€” deaf, wild-haired, shaking his fist at fate â€” is one of Western culture's most powerful archetypes. Without Beethoven, the 'artist as hero' narrative is weaker.",
      politics:"No direct difference, though Beethoven's music has been adopted by political movements â€” the Ninth Symphony's 'Ode to Joy' is the EU anthem. Without it, European unity has a different soundtrack."
    }
  },
  mozart: {
    cascade:[
      {event:"No Mozart's output (1762-1791)",consequence:"Mozart's 600+ compositions â€” in every form from opera to symphony to chamber music â€” set the standard for classical music. Without him, Haydn remains the dominant figure of the late 1700s.",delay:"Immediate",severity:"high",icon:"ðŸŽµ"},
      {event:"Opera develops differently",consequence:"The Marriage of Figaro, Don Giovanni, The Magic Flute â€” Mozart's operas fused comedy and tragedy in ways no one had achieved. Without them, opera remains more rigidly divided between serious and comic forms.",delay:"~10 years",severity:"high",icon:"ðŸŽ­"},
      {event:"Classical style peaks differently",consequence:"Mozart was the ultimate expression of the Classical style â€” perfect proportion, emotional depth within formal restraint. Without him, Beethoven's transition from Classical to Romantic has a different starting point.",delay:"~20 years",severity:"medium",icon:"ðŸŽ¼"},
      {event:"Beethoven's development changes",consequence:"Young Beethoven traveled to Vienna to study with Mozart (who reportedly said 'this young man will make a great noise in the world'). Without Mozart's example, Beethoven develops from Haydn alone.",delay:"~10 years",severity:"medium",icon:"ðŸŽ¹"},
      {event:"Same musical evolution, missing a peak",consequence:"Classical music was evolving toward Romanticism regardless. But Mozart represents a pinnacle of human achievement in music â€” a unique combination of craft and inspiration that no one else could have produced.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The 'Mozart effect' (playing Mozart for babies) doesn't exist, though the underlying research on music and cognition still happens.",
      tech:"No difference.",
      culture:"Western classical music loses its most universally beloved composer. The concept of the child prodigy â€” which Mozart embodied â€” is weaker as a cultural archetype. The specific sound of the Classical era is different.",
      politics:"No direct difference, though Mozart's operas â€” especially Figaro's challenge to aristocratic privilege â€” were politically significant in their time."
    }
  },
  picasso: {
    cascade:[
      {event:"No Cubism (1907-14)",consequence:"Braque co-invented Cubism, and the movement toward abstraction was already underway. But Picasso's Les Demoiselles d'Avignon (1907) was the specific provocation that shattered representational art. Without it, the break comes more gradually.",delay:"~5 years",severity:"high",icon:"ðŸŽ¨"},
      {event:"Abstract art develops more slowly",consequence:"Cubism was the gateway to all subsequent abstract art â€” it proved that art didn't need to look like what it depicted. Without Picasso's explosive example, Kandinsky and Mondrian still move toward abstraction, but from different foundations.",delay:"~10 years",severity:"medium",icon:"ðŸ–¼ï¸"},
      {event:"No Guernica",consequence:"The most powerful anti-war painting in history doesn't exist. The bombing of Guernica is still an atrocity, but without Picasso's response, it has less cultural afterlife.",delay:"~30 years",severity:"medium",icon:"ðŸ’£"},
      {event:"Modern art less celebrity-driven",consequence:"Picasso was the first artist-as-celebrity in the modern sense. Without his public persona, the art world might be less personality-focused, more about movements and ideas.",delay:"~30 years",severity:"medium",icon:"â­"},
      {event:"Same trajectory, less dramatic break",consequence:"Modern art was coming â€” photography had already made representational art less necessary. But Picasso made the break dramatic, public, and undeniable. Without him, modernism is a gradual evolution rather than a revolution.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in your daily life. But every museum of modern art looks different â€” Picasso's work is in most of them.",
      tech:"No difference.",
      culture:"Modern art's origin story is less dramatic. No single figure dominates 20th-century art the way Picasso did. The art market might be less centered on individual genius.",
      politics:"No Guernica means the bombing of civilians in the Spanish Civil War has less cultural resonance. Anti-war art has a different visual vocabulary."
    }
  },
  michelangelo: {
    cascade:[
      {event:"No Sistine Chapel ceiling (1508-12)",consequence:"Pope Julius II would have hired another artist â€” perhaps Raphael. The ceiling still gets painted, but the specific vision of human physical perfection expressing divine creation doesn't exist.",delay:"Immediate",severity:"high",icon:"ðŸŽ¨"},
      {event:"No David sculpture",consequence:"The 17-foot marble David (1504) became the symbol of Florence and the ideal of Renaissance art. Without it, Renaissance sculpture peaks differently â€” perhaps with Donatello's more delicate style.",delay:"~4 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Renaissance art less physical",consequence:"Michelangelo's obsession with the human body â€” its muscles, its potential, its struggle â€” defined High Renaissance art. Without him, the era stays closer to Leonardo's cerebral elegance or Raphael's serene grace.",delay:"~20 years",severity:"medium",icon:"ðŸ’ª"},
      {event:"Architecture of St. Peter's different",consequence:"Michelangelo designed the dome of St. Peter's Basilica â€” the defining image of Rome's skyline. Without him, another architect completes the church, and the Vatican looks different.",delay:"~30 years",severity:"medium",icon:"â›ª"},
      {event:"Western art still evolves",consequence:"The Renaissance was a collective movement. Michelangelo accelerated and intensified it, but Leonardo, Raphael, Titian, and others would have carried it forward. The art is less muscular, less monumental.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in your daily life. But if you visit Rome, the Vatican looks different.",
      tech:"No difference.",
      culture:"The Sistine Chapel â€” one of the most visited art sites on Earth â€” has a different ceiling. The image of God reaching out to Adam is absent from the cultural imagination. Renaissance art is less physically powerful, less tormented.",
      politics:"No direct difference. Florence's civic identity is slightly different without David as its symbol."
    }
  },
  bach: {
    cascade:[
      {event:"No Well-Tempered Clavier, no Mass in B Minor, no Brandenburg Concertos",consequence:"Bach's output â€” over 1,000 compositions â€” wasn't just prolific; it systematically explored every possibility of Baroque music. Without him, the late Baroque is thinner, less comprehensive.",delay:"Immediate",severity:"high",icon:"ðŸŽµ"},
      {event:"Counterpoint less fully developed",consequence:"Bach brought polyphonic music to its absolute peak. Without his fugues and canons, the art of counterpoint remains less explored. Every subsequent composer who studied counterpoint learned from Bach.",delay:"~20 years",severity:"high",icon:"ðŸŽ¼"},
      {event:"Mozart and Beethoven develop differently",consequence:"Both Mozart and Beethoven studied Bach's work intensely â€” Bach's fugues influenced their most complex compositions. Without this foundation, their music sounds different.",delay:"~50 years",severity:"medium",icon:"ðŸŽ¹"},
      {event:"Mendelssohn's Bach revival doesn't happen",consequence:"Bach was largely forgotten until Mendelssohn revived him in 1829. Without Bach's music to rediscover, the Romantic era's relationship with the past is different.",delay:"~100 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Western music loses its deepest foundation",consequence:"Bach's influence is so foundational that musicians describe him as the bedrock. Harmony, voice leading, musical structure â€” his work is the textbook. Without it, Western music theory develops from different examples.",delay:"~200 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct difference. But every musician â€” from classical to jazz to rock â€” is downstream of Bach's harmonic language.",
      tech:"No difference.",
      culture:"Music education is fundamentally different. Bach's chorales are how harmony is taught worldwide. Without them, music theory pedagogy uses different models and produces different musical instincts.",
      politics:"No direct difference. Though the use of Bach in churches â€” his cantatas and passions â€” shaped Protestant worship music for centuries."
    }
  },
  tolstoy: {
    cascade:[
      {event:"No War and Peace (1869), no Anna Karenina (1877)",consequence:"Two of the most influential novels ever written don't exist. The realistic novel still flourishes â€” Flaubert, Dickens, George Eliot â€” but it lacks its most ambitious works.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"The novel as art form reaches lower peak",consequence:"Tolstoy proved that the novel could contain everything â€” war, peace, love, death, history, philosophy. Without his example, the novel's ambitions are more modest.",delay:"~10 years",severity:"high",icon:"ðŸ“š"},
      {event:"Russian literature develops differently",consequence:"Tolstoy and Dostoevsky together defined Russian literature. Without Tolstoy, Dostoevsky's psychological intensity dominates â€” Russian literature is darker, more anxious, less epic.",delay:"~20 years",severity:"medium",icon:"ðŸ‡·ðŸ‡º"},
      {event:"Tolstoy's political influence absent",consequence:"Late Tolstoy's Christian anarchism influenced Gandhi directly. Without Tolstoy's example of a great artist becoming a radical moralist, the link between literature and political resistance is weaker.",delay:"~30 years",severity:"medium",icon:"âœŠ"},
      {event:"Same literary evolution, missing its summit",consequence:"The novel continues developing â€” Proust, Joyce, Woolf all write regardless. But the specific standard of what the novel can achieve â€” set by War and Peace â€” is absent.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"The novel as a form is slightly less ambitious. Film and TV epic storytelling â€” which often cites Tolstoy as a model â€” might be different. The 'great Russian novel' tradition is dominated by Dostoevsky alone.",
      politics:"Gandhi's philosophy of nonviolent resistance develops from different intellectual sources. Tolstoy's Christian anarchism â€” which influenced pacifist movements worldwide â€” is absent."
    }
  },
  dostoevsky: {
    cascade:[
      {event:"No Crime and Punishment (1866), no Brothers Karamazov (1880)",consequence:"The two greatest psychological novels ever written don't exist. The exploration of guilt, free will, faith, and the dark side of human consciousness loses its most powerful literary expressions.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Psychological novel develops more slowly",consequence:"Dostoevsky pioneered the stream of consciousness, the unreliable narrator, the exploration of irrational motivation. Without him, these techniques emerge later â€” possibly with Nietzsche, James, or Freud.",delay:"~20 years",severity:"high",icon:"ðŸ§ "},
      {event:"Existentialism has different literary roots",consequence:"Sartre, Camus, and Kafka all traced their intellectual ancestry to Dostoevsky. Without his exploration of meaninglessness and freedom, existentialist literature develops from different foundations.",delay:"~50 years",severity:"medium",icon:"ðŸ¤”"},
      {event:"Freud's psychology loses a key influence",consequence:"Freud cited Dostoevsky as having anticipated psychoanalytic insights about guilt, the unconscious, and self-destructive behavior. Without this literary precedent, Freud's ideas might have been received differently.",delay:"~30 years",severity:"medium",icon:"ðŸ’­"},
      {event:"Same literary evolution, darker path missing",consequence:"Literature still explores the human psyche â€” but the specific, feverish intensity of Dostoevsky's vision is absent. The novel is more Tolstoyan â€” broader, calmer, more external. Less disturbing.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"The psychological thriller â€” in film, TV, and literature â€” has different ancestors. The archetype of the tortured intellectual battling inner demons is less vivid. Existentialist philosophy has different literary foundations.",
      politics:"Dostoevsky's critique of radical politics â€” especially in Demons â€” was prophetically accurate about revolutionary movements. Without it, the intellectual critique of utopian violence is weaker."
    }
  },
  murasaki: {
    cascade:[
      {event:"No Tale of Genji (~1010)",consequence:"Often called the world's first novel, The Tale of Genji established narrative prose fiction as a serious art form â€” centuries before the European novel. Without it, Japanese literature develops from poetry and chronicle.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Japanese prose tradition weakened",consequence:"Genji influenced every subsequent Japanese novelist. Without it, the specific Japanese literary sensibility â€” mono no aware (the pathos of things), psychological nuance, seasonal awareness â€” develops more slowly from other sources.",delay:"~100 years",severity:"high",icon:"ðŸŽŒ"},
      {event:"Women's literary tradition in Japan weaker",consequence:"Murasaki wrote in Japanese (men used Chinese for serious writing). Her success validated women's literary culture and the Japanese language as a medium for art.",delay:"~50 years",severity:"medium",icon:"ðŸ‘©â€ðŸŽ¨"},
      {event:"World literature loses its earliest psychological novel",consequence:"Genji's exploration of inner life, ambivalence, and emotional complexity predated European psychological fiction by 800 years. Without it, the history of the novel looks more Eurocentric.",delay:"~800 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Same Japanese culture, different literary root",consequence:"Japanese culture was already sophisticated. Other texts would have emerged as foundational. But Genji is to Japanese literature what Homer is to Western â€” the origin point. Without it, the tradition has a different source.",delay:"~200 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"Japanese literature's origin story is different. The argument that the novel was invented in Japan before Europe doesn't exist. World literary history looks more Europe-centered.",
      politics:"No direct difference, though the narrative of Japan's cultural sophistication â€” often traced to the Heian period and Murasaki â€” has a different foundation."
    }
  },
  fela: {
    cascade:[
      {event:"No Afrobeat (1970s)",consequence:"Fela Kuti invented Afrobeat â€” fusing Yoruba music, jazz, funk, and political protest into extended compositions. Without him, Nigerian popular music develops from highlife and jÃ¹jÃº without this specific fusion.",delay:"Immediate",severity:"high",icon:"ðŸŽµ"},
      {event:"African protest music weaker",consequence:"Fela's explicit political lyrics â€” attacking corruption, military rule, and neocolonialism â€” made music a weapon against Nigerian dictatorship. Without him, musical resistance is less organized and less visible internationally.",delay:"~10 years",severity:"medium",icon:"âœŠ"},
      {event:"No Shrine as political-cultural space",consequence:"Fela's nightclub, the Shrine, was both a musical venue and a political commune. Without it, Lagos's counterculture develops differently.",delay:"~15 years",severity:"medium",icon:"ðŸ "},
      {event:"African music's global influence develops differently",consequence:"Afrobeat influenced hip-hop, electronic music, and world music globally. Without Fela, the specific bridge between West African rhythm and Western popular music is weaker.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Same musical globalization, different flavor",consequence:"African music was going to influence world music regardless â€” the rhythms are too powerful. But the specific Afrobeat channel â€” from Fela through his sons to Burna Boy â€” doesn't exist.",delay:"~40 years",severity:"medium",icon:"ðŸŽ¶"}
    ],
    modernDay:{
      daily:"If you listen to Afrobeats (the modern genre), its DNA is different without Fela's Afrobeat as a foundation. The Lagos music scene sounds different.",
      tech:"No difference.",
      culture:"Nigerian music's global breakout in the 2020s has different roots. The specific political edge that distinguishes Afrobeat from mere dance music is absent.",
      politics:"Nigerian political discourse loses its most famous musical critic. The tradition of using popular music to challenge African governments is weaker."
    }
  },
  tagore: {
    cascade:[
      {event:"No Gitanjali, no Nobel Prize (1913)",consequence:"Tagore was the first non-European Nobel laureate in literature. Without his international recognition, the argument that great literature exists outside the Western canon takes longer to win.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Bengali cultural renaissance less global",consequence:"Tagore wrote India's national anthem, Bangladesh's national anthem, and shaped Bengali literature, music, painting, and education. Without him, the Bengali renaissance is less internationally recognized.",delay:"~20 years",severity:"high",icon:"ðŸŽµ"},
      {event:"Indian cultural nationalism weaker",consequence:"Tagore's vision â€” deeply Indian yet universalist, spiritual yet modernizing â€” provided a model for how Indian culture could engage with the world. Without it, Indian intellectuals have fewer bridges to the West.",delay:"~20 years",severity:"medium",icon:"ðŸ‡®ðŸ‡³"},
      {event:"Shantiniketan doesn't exist",consequence:"Tagore's experimental university, Visva-Bharati at Shantiniketan, influenced progressive education worldwide. Without it, Indian alternative education develops from different models.",delay:"~15 years",severity:"medium",icon:"ðŸŽ“"},
      {event:"Same Indian independence, different cultural foundation",consequence:"India's independence movement still succeeds. But the cultural confidence that Tagore provided â€” showing that Indian art could stand alongside Western art â€” is absent.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"India's national anthem ('Jana Gana Mana') is different. Bangladesh's anthem is different. Two nations' daily rituals are changed.",
      tech:"No difference.",
      culture:"South Asian literature's place in world literature is diminished without Tagore's Nobel Prize as a landmark. The specific Bengali literary tradition is different.",
      politics:"India and Bangladesh lose their respective national anthems. The cultural dimension of Indian nationalism â€” poetry, song, philosophy as resistance â€” has different foundations."
    }
  },
  rumi: {
    cascade:[
      {event:"No Masnavi, no collected poetry (13th century)",consequence:"Rumi's poetry â€” over 65,000 verses â€” is the most widely read poetry in the world in translation. Without it, Persian Sufi poetry still thrives through Hafez, Saadi, and Attar, but loses its most beloved voice.",delay:"Immediate",severity:"high",icon:"ðŸ“œ"},
      {event:"Sufi mysticism less accessible",consequence:"Rumi made Sufi spiritual concepts â€” divine love, ego dissolution, union with God â€” accessible through simple, powerful imagery. Without him, Sufism is more esoteric, less populist.",delay:"~50 years",severity:"medium",icon:"ðŸ•Œ"},
      {event:"Mevlevi Order doesn't form",consequence:"The Whirling Dervishes â€” one of the most recognizable spiritual practices in the world â€” were founded on Rumi's teachings. Without him, Sufi practice takes different forms.",delay:"~50 years",severity:"medium",icon:"ðŸ’«"},
      {event:"Persian literary tradition still magnificent",consequence:"Hafez, Saadi, and others ensure Persian poetry remains one of the world's great traditions. But the specific voice â€” ecstatic, simple, universal â€” that Rumi provides is absent.",delay:"~100 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Same spiritual seeking, different voice",consequence:"The human desire for transcendence doesn't depend on any one poet. But Rumi's specific bridge between Islamic mysticism and universal spirituality â€” which resonates globally â€” is missing.",delay:"~700 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Rumi is the bestselling poet in the United States. Wedding readings, Instagram captions, self-help books â€” his words are everywhere. Without him, the spiritual poetry market looks completely different.",
      tech:"No difference.",
      culture:"The West's engagement with Islamic spirituality is different. Rumi is the friendly face of Islam for millions of non-Muslims. Without him, Western perceptions of Islamic culture are narrower.",
      politics:"The argument that Islam has a deeply mystical, love-centered tradition â€” which Rumi embodies â€” loses its most powerful advocate. Interfaith dialogue is harder."
    }
  },
  tarkovsky: {
    cascade:[
      {event:"No Solaris, no Stalker, no Mirror",consequence:"Tarkovsky's seven feature films redefined what cinema could do with time, memory, and spiritual longing. Without him, art cinema in the 1970s-80s is more political (Godard) and less metaphysical.",delay:"Immediate",severity:"medium",icon:"ðŸŽ¬"},
      {event:"Art cinema less spiritual",consequence:"Tarkovsky was almost alone in using cinema to explore transcendence, faith, and the inner life without irony. Without him, serious cinema is more secular, more Brechtian.",delay:"~10 years",severity:"medium",icon:"âœ¨"},
      {event:"Slow cinema loses its patron saint",consequence:"Every filmmaker who holds a shot longer than comfortable â€” from BÃ©la Tarr to Terrence Malick â€” cites Tarkovsky. Without him, the aesthetic of cinematic contemplation develops differently.",delay:"~20 years",severity:"medium",icon:"â³"},
      {event:"Same film evolution, less transcendence",consequence:"Cinema was becoming more artistically ambitious regardless. But the specific tradition of cinema as spiritual practice â€” sculpting in time, as Tarkovsky called it â€” is weaker.",delay:"~30 years",severity:"low",icon:"ðŸŒ"},
      {event:"Russian cinema less revered",consequence:"Tarkovsky was Soviet cinema's greatest export after Eisenstein. Without him, Russian cinema's international reputation rests more on montage theory and less on contemplative beauty.",delay:"~40 years",severity:"low",icon:"ðŸ‡·ðŸ‡º"}
    ],
    modernDay:{
      daily:"No difference. Tarkovsky's films were seen by relatively few people â€” his influence was on other filmmakers, not on mass culture.",
      tech:"No difference.",
      culture:"Art cinema loses its most spiritual voice. Filmmakers who want to explore transcendence have a thinner tradition to draw from. The specific aesthetic of long-take, nature-focused, metaphysical cinema is weaker.",
      politics:"No direct difference. Tarkovsky's struggles with Soviet censorship are one of art-vs-state's important stories, but not a politically consequential one."
    }
  },
  kurosawa: {
    cascade:[
      {event:"No Seven Samurai (1954), no Rashomon (1950)",consequence:"Kurosawa's films introduced Japanese cinema â€” and a new visual storytelling language â€” to the world. Without him, Japanese cinema's international breakthrough comes later or through different directors.",delay:"Immediate",severity:"high",icon:"ðŸŽ¬"},
      {event:"Hollywood loses its most important foreign influence",consequence:"The Magnificent Seven, Star Wars, A Fistful of Dollars â€” all direct adaptations or heavy borrowings from Kurosawa. Without him, some of Hollywood's most iconic films don't exist.",delay:"~10 years",severity:"high",icon:"ðŸŽ¥"},
      {event:"Action filmmaking less sophisticated",consequence:"Kurosawa's use of movement, weather, multiple cameras, and editing rhythm set the template for modern action cinema. Without him, action films develop from different models.",delay:"~20 years",severity:"medium",icon:"âš”ï¸"},
      {event:"Japanese cinema still produces masterpieces",consequence:"Ozu, Mizoguchi, and later directors still make great films. Japanese cinema is still respected. But it lacks its most globally accessible filmmaker.",delay:"~20 years",severity:"medium",icon:"ðŸŽŒ"},
      {event:"Same global cinema, different DNA",consequence:"World cinema was becoming interconnected regardless. But the specific Japan-to-Hollywood pipeline that Kurosawa built â€” which influenced Lucas, Spielberg, Coppola â€” is absent.",delay:"~40 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No Star Wars (George Lucas openly credits Kurosawa). The entire modern blockbuster franchise era might look different â€” or might have developed from different sources.",
      tech:"No difference.",
      culture:"If Star Wars doesn't exist in its current form, pop culture is profoundly different. The biggest media franchise in history is either absent or unrecognizable.",
      politics:"No direct difference, though Kurosawa's humanist vision â€” emphasizing individual courage and compassion â€” influenced how filmmakers worldwide tell stories about conflict."
    }
  },
  homer: {
    cascade:[
      {event:"No Iliad and Odyssey (~8th century BC)",consequence:"Whether Homer was one person or many, these two poems were the foundation of Western literature, education, and cultural identity. Without them, Greek civilization still develops, but from different mythological sources.",delay:"Immediate",severity:"high",icon:"ðŸ“œ"},
      {event:"Greek education reorganized",consequence:"Homer was the curriculum â€” Greek boys memorized the Iliad the way later students memorized the Bible. Without it, Greek education centers on different texts, producing a different cultural sensibility.",delay:"~100 years",severity:"high",icon:"ðŸŽ“"},
      {event:"Greek tragedy has different sources",consequence:"Aeschylus, Sophocles, and Euripides all drew on the Trojan War cycle. Without Homer's specific version, Greek tragedy exists but uses different myths and different characters.",delay:"~300 years",severity:"medium",icon:"ðŸŽ­"},
      {event:"Roman literature finds different models",consequence:"Virgil's Aeneid is a direct response to Homer. Without the Iliad and Odyssey as templates, Latin literature develops from different Greek sources.",delay:"~700 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Western literary tradition has different foundation",consequence:"Every Western epic â€” from Virgil to Dante to Milton to Joyce â€” responds to Homer. Without this foundation, the entire tradition of Western narrative develops from different roots.",delay:"~2500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"Western storytelling has different foundational archetypes. No Odysseus (the clever hero), no Achilles (glory vs. long life), no Trojan Horse. These concepts â€” which permeate everything from military strategy to marketing â€” don't exist.",
      politics:"The Western concept of heroism is different. The tension between individual glory and community obligation, which Homer established, is articulated through different stories."
    }
  },
  dante: {
    cascade:[
      {event:"No Divine Comedy (1308-21)",consequence:"The most influential poem in Western literature after Homer doesn't exist. Dante's vision of Hell, Purgatory, and Paradise shaped Christian imagination for 700 years.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Italian language develops differently",consequence:"Dante chose to write in Tuscan Italian rather than Latin, legitimizing vernacular literature. Without his example, Italian literature might have remained in Latin longer, and the Italian language might have unified more slowly.",delay:"~50 years",severity:"high",icon:"ðŸ‡®ðŸ‡¹"},
      {event:"Renaissance has different literary foundations",consequence:"Petrarch and Boccaccio both wrote in Dante's wake. Without the Divine Comedy demonstrating that Italian could achieve literary greatness, the Italian Renaissance literary tradition starts from a lower base.",delay:"~50 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Christian imagery of afterlife different",consequence:"Popular Christian ideas about Hell â€” circles of punishment, specific sins matched to specific torments â€” come largely from Dante, not from the Bible. Without him, the cultural imagination of the afterlife is different.",delay:"~200 years",severity:"medium",icon:"ðŸ”¥"},
      {event:"Same literary evolution, different imagery",consequence:"Western literature still develops epic, allegorical, and spiritual traditions. But the specific visual vocabulary Dante created â€” which influenced Milton, Blake, and every subsequent depiction of Hell â€” is absent.",delay:"~500 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"Our visual image of Hell is different. The nine circles, the inscription 'Abandon all hope,' Virgil as guide â€” all absent from cultural consciousness. Every horror movie, every cartoon devil, every depiction of the afterlife would be different.",
      politics:"No direct difference. Italian national identity â€” which Dante helped shape by writing in Italian â€” has different literary foundations."
    }
  },
  disney: {
    cascade:[
      {event:"No Snow White (1937) â€” first feature animated film",consequence:"Other animators were working toward feature films, but Disney's specific gamble â€” betting his studio on an untested format â€” proved it could work. Without him, animated features arrive 5-10 years later from other studios.",delay:"~5-10 years",severity:"high",icon:"ðŸŽ¬"},
      {event:"Animation as art form develops more slowly",consequence:"Disney's technical innovations â€” multiplane camera, synchronized sound, Technicolor â€” raised animation from novelty to art. Without his studio's R&D, animation technology advances more gradually.",delay:"~10 years",severity:"high",icon:"ðŸŽ¨"},
      {event:"No Disneyland (1955), no theme park industry",consequence:"Disney invented the modern theme park. Without Disneyland, the entire theme park industry develops from amusement parks and carnivals rather than from immersive storytelling environments.",delay:"~20 years",severity:"high",icon:"ðŸŽ¢"},
      {event:"Children's entertainment less sophisticated",consequence:"Disney raised the bar for children's media â€” visual quality, storytelling, emotional depth. Without this standard, children's entertainment is more like Saturday morning cartoons longer.",delay:"~20 years",severity:"medium",icon:"ðŸ‘§"},
      {event:"Entertainment industry structured differently",consequence:"The Disney model â€” franchise IP, theme parks, merchandise, media empire â€” became the template for modern entertainment conglomerates. Without it, the industry develops from different models.",delay:"~50 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No Disney movies, no Disneyland, no Marvel Studios (Disney bought Marvel), no Star Wars franchise (Disney bought Lucasfilm). The entertainment landscape is fundamentally different.",
      tech:"Animation technology develops more slowly. CGI might arrive on a different timeline without Disney/Pixar's specific innovations.",
      culture:"Childhood is different. No Lion King, no Little Mermaid, no Frozen. The shared cultural references that Disney films provide across generations don't exist. The 'Disney princess' archetype is absent.",
      politics:"Orlando's economy is different without Disney World. Media consolidation follows different patterns without Disney's model of vertical integration."
    }
  },
  vangogh: {
    cascade:[
      {event:"No Starry Night, no Sunflowers, no self-portraits",consequence:"Van Gogh produced roughly 2,100 artworks in a decade of frenetic activity. Without them, Post-Impressionism develops through CÃ©zanne, Gauguin, and Seurat â€” but is less emotionally intense.",delay:"Immediate",severity:"medium",icon:"ðŸŽ¨"},
      {event:"Expressionism has different roots",consequence:"Van Gogh's swirling, emotionally charged brushwork directly influenced the Expressionist movement. Without him, Expressionism develops from Munch and others, but with a different visual vocabulary.",delay:"~20 years",severity:"medium",icon:"ðŸ–Œï¸"},
      {event:"'Tortured artist' myth is weaker",consequence:"Van Gogh â€” who sold one painting in his lifetime, cut off his ear, and died by suicide â€” became the archetype of the suffering genius. Without his story, the cultural link between artistic talent and madness is less entrenched.",delay:"Cultural",severity:"medium",icon:"ðŸŒ»"},
      {event:"Modern art market has different dynamics",consequence:"Van Gogh paintings sell for hundreds of millions. His story â€” ignored in life, priceless after death â€” drives the speculative art market. Without it, the idea that today's rejected art might be tomorrow's masterpiece is less powerful.",delay:"~100 years",severity:"medium",icon:"ðŸ’°"},
      {event:"Same art evolution, less mythology",consequence:"Modern art was coming regardless. But the specific narrative around Van Gogh â€” genius, madness, death, vindication â€” is one of the most powerful stories in Western culture.",delay:"~100 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life. But Van Gogh's Starry Night might be the most reproduced painting in the world â€” on posters, phone cases, coffee mugs. That ubiquity is absent.",
      tech:"No difference.",
      culture:"The art world's most famous story of unrecognized genius doesn't exist. The 'tortured artist' archetype is weaker. The immersive Van Gogh exhibitions that tour the world don't exist.",
      politics:"No direct difference."
    }
  },
  monet: {
    cascade:[
      {event:"No Impression, Sunrise (1872)",consequence:"The painting that gave Impressionism its name doesn't exist. The movement still forms â€” Renoir, Degas, Pissarro, Sisley were all painting similarly â€” but it might have a different name and slightly different character.",delay:"Immediate",severity:"medium",icon:"ðŸŽ¨"},
      {event:"Impressionism still happens",consequence:"The movement was driven by collective innovation, not one person. Photography was making realistic painting less necessary. The shift to capturing light and atmosphere was coming regardless.",delay:"~5 years",severity:"low",icon:"ðŸ–Œï¸"},
      {event:"No Giverny, no Water Lilies",consequence:"Monet's late water lily paintings â€” enormous, nearly abstract â€” anticipated Abstract Expressionism by 50 years. Without them, the bridge between Impressionism and abstraction is less direct.",delay:"~30 years",severity:"medium",icon:"ðŸª·"},
      {event:"Modern art's path to abstraction different",consequence:"The water lilies showed that painting could dissolve into pure color and form. Without this example, Rothko and Pollock arrive at abstraction from different sources.",delay:"~50 years",severity:"medium",icon:"ðŸ–¼ï¸"},
      {event:"Same modern art, different path",consequence:"Abstraction was inevitable â€” Kandinsky, Malevich, and Mondrian were heading there from different directions. But Monet's specific bridge â€” Impressionism â†’ late Monet â†’ Abstract Expressionism â€” is missing.",delay:"~70 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"Impressionism has a different name. The water lilies â€” some of the most popular paintings in the world â€” don't exist. Giverny isn't a tourist destination. The 'impressionistic' style in photography and film is described differently.",
      politics:"No direct difference."
    }
  },
  coltrane: {
    cascade:[
      {event:"No A Love Supreme (1964), no sheets of sound",consequence:"Coltrane pushed jazz further than anyone â€” from hard bop through modal jazz to free jazz in a single decade. Without him, jazz's evolution from the 1960s onward follows a less extreme trajectory.",delay:"Immediate",severity:"high",icon:"ðŸŽ·"},
      {event:"Jazz's avant-garde less developed",consequence:"Coltrane was the bridge between mainstream jazz (Miles Davis's quintets) and free jazz (Ornette Coleman's revolution). Without his gradual progression, the avant-garde seems more disconnected from tradition.",delay:"~5 years",severity:"medium",icon:"ðŸŽµ"},
      {event:"Spiritual jazz tradition weaker",consequence:"A Love Supreme established jazz as a spiritual practice. Without it, jazz remains a more secular art form. The connection between improvisation and transcendence is less explicitly articulated.",delay:"~10 years",severity:"medium",icon:"ðŸ™"},
      {event:"Saxophone technique less advanced",consequence:"Coltrane's speed, harmonic complexity, and tonal innovations pushed the physical limits of the saxophone. Without his example, saxophonists develop technique more gradually.",delay:"~10 years",severity:"medium",icon:"ðŸŽµ"},
      {event:"Same jazz evolution, lower peak",consequence:"Jazz was already fragmenting into multiple streams. Without Coltrane, it still evolves into fusion, free jazz, and contemporary forms. But the specific intensity he brought â€” and that inspired everyone after â€” is absent.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"Jazz's story arc is different. The narrative of jazz as a spiritual quest â€” not just entertainment or art but a path to transcendence â€” is weaker. Jazz education is different without Coltrane's techniques as standard curriculum.",
      politics:"No direct difference, though Coltrane's music was deeply connected to the Civil Rights movement's spiritual dimension."
    }
  },
  marley: {
    cascade:[
      {event:"No Bob Marley as reggae's global ambassador",consequence:"Reggae was already Jamaica's dominant music. Jimmy Cliff, Toots Hibbert, and others were making great records. But Marley's specific combination of musical genius, political vision, and personal charisma made reggae global.",delay:"~5-10 years",severity:"high",icon:"ðŸŽµ"},
      {event:"Reggae stays regional longer",consequence:"Without Marley's international breakthrough, reggae remains a Caribbean genre for longer. The world music revolution of the 1980s has a different character.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Rastafari movement less visible",consequence:"Marley was Rastafari's most effective evangelist. Without him, the movement remains more localized. Dreadlocks, Ethiopian colors, and Rasta culture don't become global signifiers of rebellion and spirituality.",delay:"~15 years",severity:"medium",icon:"ðŸ¦"},
      {event:"Third World liberation music different",consequence:"Marley's music was adopted by liberation movements across Africa, the Caribbean, and globally. Without his specific anthems, anti-colonial resistance still has music, but not 'Get Up, Stand Up' or 'Redemption Song.'",delay:"~15 years",severity:"medium",icon:"âœŠ"},
      {event:"Same musical globalization, different icon",consequence:"World music was going to reach global audiences regardless â€” technology demanded it. But the specific icon of the Third World musician as political prophet is weaker without Marley.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Reggae is less ubiquitous. The specific feel of a reggae beat â€” which permeates everything from pop to electronic music â€” might be less widely adopted.",
      tech:"No difference.",
      culture:"Jamaica's global cultural influence is much smaller. Dreadlocks are less common outside Caribbean communities. The Rastafari movement is more obscure. Reggae-influenced genres (dancehall, dub, lovers rock) are smaller.",
      politics:"Anti-colonial and liberation movements in the developing world lose their most universal soundtrack."
    }
  },
  hendrix: {
    cascade:[
      {event:"No reinvention of the electric guitar (1966-70)",consequence:"Hendrix didn't just play the guitar differently â€” he showed it could produce sounds no one had imagined: feedback, distortion, and wah-wah as musical elements, not accidents. Without him, these discoveries come more gradually.",delay:"~3-5 years",severity:"high",icon:"ðŸŽ¸"},
      {event:"Hard rock and heavy metal develop more slowly",consequence:"Hendrix's distorted, aggressive sound was the template for everything from Led Zeppelin to Metallica. Without him, heavy guitar music evolves from the Kinks and the Who, but the specific sonic vocabulary is narrower.",delay:"~5 years",severity:"high",icon:"ðŸ¤˜"},
      {event:"Guitar effects technology develops differently",consequence:"Hendrix drove demand for effects pedals, amplifier modifications, and new guitar designs. Without his influence, the guitar effects industry is smaller and develops more slowly.",delay:"~10 years",severity:"medium",icon:"ðŸ”§"},
      {event:"Psychedelic music less guitar-centered",consequence:"Without Hendrix's guitar-as-psychedelic-instrument approach, psychedelic music might center more on keyboards, tape manipulation, and studio effects â€” more Beatles, less Cream.",delay:"~5 years",severity:"medium",icon:"ðŸŒ€"},
      {event:"Same rock evolution, less pyrotechnic",consequence:"Rock music was going to get louder and more electric regardless. But the specific palette of sounds Hendrix created â€” and that every guitarist since has drawn from â€” is absent or arrives later.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life, unless you're a guitarist â€” in which case your instrument, your effects pedals, and your entire conception of what the guitar can do are different.",
      tech:"Guitar effects technology is less developed. The pedal industry is smaller.",
      culture:"The image of the guitar god â€” wild, transcendent, burning the instrument on stage â€” is weaker or attached to a different figure. Rock music's relationship with the guitar is less central.",
      politics:"No direct political difference, though Hendrix's Star-Spangled Banner at Woodstock was one of the most powerful political musical statements in American history."
    }
  },
  bowie: {
    cascade:[
      {event:"No Ziggy Stardust (1972), no constant reinvention",consequence:"Bowie didn't invent glam rock â€” T. Rex and Roxy Music were already there. But Bowie's specific contribution was showing that an artist could change identity completely with each album. Before him, artists had consistent personas.",delay:"Immediate",severity:"medium",icon:"âš¡"},
      {event:"Gender fluidity in rock less visible",consequence:"Bowie's androgyny â€” Ziggy's makeup, the bisexuality, the costumes â€” opened space for gender nonconformity in popular culture decades before it was mainstream. Without him, that space opens more slowly.",delay:"~10 years",severity:"medium",icon:"ðŸŒˆ"},
      {event:"New Wave and synth-pop have different roots",consequence:"The Berlin trilogy (Low, Heroes, Lodger) â€” Bowie's collaboration with Eno â€” laid groundwork for post-punk and electronic music. Without them, the bridge between rock and electronic develops from different sources.",delay:"~5 years",severity:"medium",icon:"ðŸŽ¹"},
      {event:"Art-pop concept less established",consequence:"The idea that pop music could be self-conscious art â€” intellectual, referential, constantly evolving â€” was established by Bowie. Without him, the line between 'art' and 'pop' remains more rigid.",delay:"~15 years",severity:"medium",icon:"ðŸŽ­"},
      {event:"Same musical evolution, less shapeshifting",consequence:"Pop music was going to become more theatrical and more experimental. But the specific permission Bowie gave â€” to change, to be artificial, to treat identity as performance â€” is absent.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"The concept of artistic reinvention â€” Madonna, Lady Gaga, Kanye â€” has a different precedent. Gender fluidity in pop culture is less established. The 'art-rock' genre barely exists in its current form.",
      politics:"LGBTQ+ visibility in mainstream culture might be marginally slower without Bowie normalizing gender nonconformity in the 1970s."
    }
  },
  joyce: {
    cascade:[
      {event:"No Ulysses (1922)",consequence:"The most influential novel of the 20th century doesn't exist. Stream of consciousness had been attempted before (Dujardin, Richardson), but Ulysses proved it could sustain an entire novel of extraordinary ambition.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Modernist novel less ambitious",consequence:"Woolf, Faulkner, and Beckett all wrote in the wake of Ulysses. Without it demonstrating how far the novel could go, modernist fiction is more conservative â€” still experimental, but less radically so.",delay:"~10 years",severity:"high",icon:"ðŸ“š"},
      {event:"No Finnegans Wake",consequence:"Joyce's final, nearly unreadable novel pushed language itself to its limits. Without it, the outer boundary of what literature can attempt is less extreme. Postmodern fiction is less wild.",delay:"~17 years",severity:"medium",icon:"ðŸŒ€"},
      {event:"Bloomsday doesn't exist",consequence:"The celebration of June 16 â€” the day Ulysses takes place â€” is one of literature's most famous cultural events. Dublin's literary tourism is diminished.",delay:"Cultural",severity:"low",icon:"ðŸ‡®ðŸ‡ª"},
      {event:"Same literary evolution, lower ceiling",consequence:"The novel was becoming more experimental regardless â€” Proust, Kafka, Mann. But Joyce set the ceiling. Without Ulysses showing what was possible, every subsequent experimental novelist thinks smaller.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"The modern novel is less ambitious. MFA programs teach different techniques. The idea that a single novel can contain an entire city, an entire day, an entire civilization â€” that's Joyce's legacy, and it's absent.",
      politics:"Ireland's cultural reputation is different. Joyce is Ireland's most famous literary export. Without him, Yeats and Beckett carry the weight alone."
    }
  },
  woolf: {
    cascade:[
      {event:"No Mrs Dalloway (1925), no To the Lighthouse (1927)",consequence:"The novels that perfected stream of consciousness in English don't exist. Woolf's technique â€” rendering consciousness directly, without the narrator's mediation â€” develops more slowly from other sources.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Feminist literary criticism delayed",consequence:"A Room of One's Own (1929) â€” the foundational text of feminist literary criticism â€” doesn't exist. The argument that women need financial independence and physical space to create art is made later, by others.",delay:"~4 years",severity:"high",icon:"ðŸ‘©â€ðŸŽ¨"},
      {event:"Bloomsbury Group less central to modernism",consequence:"Woolf was the literary center of the Bloomsbury Group. Without her, this circle of artists and intellectuals is less significant. The Hogarth Press â€” which published Eliot's The Waste Land â€” might not exist.",delay:"~10 years",severity:"medium",icon:"ðŸ "},
      {event:"Women's writing tradition thinner",consequence:"Woolf demonstrated that women's internal experience â€” domestic, emotional, psychological â€” was worthy of the highest literary art. Without her example, women writers have fewer models.",delay:"~20 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Same literary modernism, less feminist",consequence:"Joyce, Proust, and Faulkner still reinvent the novel. But the specifically feminist dimension of modernism â€” the argument that women's consciousness is as artistically rich as men's â€” is weaker.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"Feminist literary criticism develops from different foundations. The specific argument that women need 'a room of one's own' â€” now a global shorthand for creative autonomy â€” doesn't exist.",
      politics:"Second-wave feminism's literary arm is weaker without Woolf's intellectual framework. The connection between economic independence and creative freedom is less clearly articulated."
    }
  },
  orwell: {
    cascade:[
      {event:"No 1984 (1949), no Animal Farm (1945)",consequence:"The two most influential political novels of the 20th century don't exist. The vocabulary of political resistance â€” Big Brother, doublethink, thoughtcrime, 'All animals are equal' â€” is absent.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Political language less scrutinized",consequence:"Orwell's essay 'Politics and the English Language' (1946) â€” arguing that bad language enables bad politics â€” established the modern critique of propaganda and euphemism. Without it, political speech is less examined.",delay:"~3 years",severity:"high",icon:"ðŸ“"},
      {event:"Cold War critique less articulate",consequence:"Orwell gave anti-totalitarian liberalism its most powerful literary weapons. Without 1984 and Animal Farm, critiques of Soviet communism are more academic, less visceral, less universally understood.",delay:"~5 years",severity:"high",icon:"â˜¢ï¸"},
      {event:"Surveillance debate has different vocabulary",consequence:"Every conversation about government surveillance invokes Orwell. Without him, debates about privacy, technology, and state power lack their most resonant reference point.",delay:"~50 years",severity:"medium",icon:"ðŸ‘ï¸"},
      {event:"Same political awareness, weaker language",consequence:"People still resist tyranny. Whistleblowers still expose surveillance. But the specific vocabulary â€” 'Orwellian,' 'Big Brother,' 'memory hole' â€” that makes resistance communicable is absent.",delay:"~75 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Every time someone says 'Orwellian' or 'Big Brother' â€” which is daily, somewhere â€” that reference doesn't exist. The critique of surveillance capitalism and government overreach has a different vocabulary.",
      tech:"No difference in technology. But discussions about AI, surveillance, and data privacy lack their most powerful metaphors.",
      culture:"Political fiction is less central to public discourse. The idea that a novelist can provide the essential tools for resisting tyranny â€” and that literature is a political act â€” is weaker.",
      politics:"Debates about government surveillance, propaganda, and political language are less crisp. Snowden's revelations are described differently. The 'surveillance state' concept has a different name."
    }
  },
  spielberg: {
    cascade:[
      {event:"No Jaws (1975), no Raiders of the Lost Ark (1981)",consequence:"The modern blockbuster â€” the summer tentpole, the event movie, the franchise â€” was largely Spielberg's invention (alongside Lucas). Without Jaws, Hollywood's business model evolves differently.",delay:"Immediate",severity:"high",icon:"ðŸŽ¬"},
      {event:"Hollywood less blockbuster-focused",consequence:"Pre-Jaws, Hollywood was in its New Hollywood art film era. Without Spielberg's proof that mass-audience spectacle was enormously profitable, studios might have stayed art-focused longer.",delay:"~5 years",severity:"high",icon:"ðŸŽ¥"},
      {event:"No Schindler's List (1993)",consequence:"The most influential Holocaust film doesn't exist. Holocaust education in America and globally is different without this specific, widely seen film.",delay:"~18 years",severity:"medium",icon:"ðŸ“½ï¸"},
      {event:"Entertainment industry structured differently",consequence:"Spielberg co-founded DreamWorks and his influence shaped how movies are marketed, released, and merchandised. The modern entertainment industry has different DNA.",delay:"~20 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Same entertainment evolution, less crowd-pleasing",consequence:"CGI, franchise filmmaking, and spectacle were coming regardless. But the specific Spielberg formula â€” emotional storytelling + technical virtuosity + mass appeal â€” is absent. Blockbusters are more like Lucas (spectacle-first) or less emotionally sophisticated.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Your movie-going experience is different. The summer blockbuster season might not exist in its current form. The way movies are marketed and released evolved from Spielberg's innovations.",
      tech:"CGI in films still develops â€” it was driven by computer technology, not one filmmaker. But Spielberg's demand for photorealistic effects pushed companies like ILM faster.",
      culture:"Holocaust education is different without Schindler's List. The specific emotional literacy that Spielberg brought to entertainment â€” making audiences cry and cheer in the same film â€” is less developed.",
      politics:"No direct political difference, though Spielberg's Holocaust films significantly shaped American cultural memory of WWII."
    }
  },
  beyonce: {
    cascade:[
      {event:"No BeyoncÃ© as solo artist (2003-present)",consequence:"Destiny's Child still exists, and other artists fill R&B's upper tier â€” Rihanna, Alicia Keys, Adele. But no single artist commands the specific combination of vocal power, visual artistry, and cultural authority that BeyoncÃ© wields.",delay:"Immediate",severity:"medium",icon:"ðŸŽµ"},
      {event:"Visual album concept less developed",consequence:"Lemonade (2016) redefined what an album release could be â€” a film-length visual narrative. Without it, the visual album concept develops more gradually.",delay:"~13 years",severity:"medium",icon:"ðŸŽ¬"},
      {event:"Black women's representation in pop culture different",consequence:"BeyoncÃ©'s unapologetic celebration of Black womanhood â€” especially from Lemonade onward â€” shifted the cultural conversation. Without her, this specific expression of Black feminist pop art doesn't exist.",delay:"~15 years",severity:"medium",icon:"ðŸ‘‘"},
      {event:"Music industry economics still shift",consequence:"Streaming, surprise releases, visual albums â€” BeyoncÃ© didn't create these trends but amplified them. The industry evolves similarly regardless.",delay:"~10 years",severity:"low",icon:"ðŸ’°"},
      {event:"Pop culture still diversifies",consequence:"The trend toward more diverse representation in entertainment was structural â€” driven by demographics and market logic. BeyoncÃ© accelerated it but didn't cause it.",delay:"~20 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Pop culture is slightly different. The Beyhive doesn't exist. Several iconic Super Bowl performances don't happen. But the music industry's evolution is broadly similar.",
      tech:"No difference.",
      culture:"The archetype of the Black woman as pop culture's most powerful figure is weaker or attached to a different artist. The specific Lemonade moment â€” a Black woman telling a story of betrayal, rage, and healing through a feature-length visual album â€” doesn't exist.",
      politics:"BeyoncÃ©'s political influence â€” from 'Formation' to her effect on voter registration â€” is absent. But the political mobilization of Black women in pop culture comes from multiple sources."
    }
  },
  confucius: {
    cascade:[
      {event:"No Confucian philosophy (500s BC)",consequence:"Confucius's teachings on filial piety, social hierarchy, ritual propriety, and moral self-cultivation became the operating system of Chinese civilization. Without him, Chinese political philosophy develops from Legalism, Daoism, or other schools.",delay:"Immediate",severity:"high",icon:"ðŸ“œ"},
      {event:"Chinese imperial system structured differently",consequence:"The Confucian examination system â€” selecting government officials by merit through knowledge of the classics â€” was the world's first meritocracy. Without it, Chinese governance is more aristocratic.",delay:"~300 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"East Asian family structure different",consequence:"Confucian values â€” respect for elders, family obligation, educational achievement â€” shaped family structures across China, Korea, Japan, and Vietnam. Without Confucius, these societies develop different core values.",delay:"~500 years",severity:"high",icon:"ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦"},
      {event:"Chinese education less exam-focused",consequence:"The link between study, examinations, and social advancement â€” which persists in East Asian cultures today â€” is Confucian. Without it, educational culture develops differently.",delay:"~1000 years",severity:"high",icon:"ðŸ“š"},
      {event:"East Asian civilization unrecognizable",consequence:"Confucianism is to East Asia what Christianity is to Europe â€” the foundational value system. Without it, the entire cultural fabric of China, Korea, Japan, and Vietnam is different.",delay:"~2500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you live in East Asia, your relationship with your family, your attitude toward education, your concept of social obligation â€” all shaped by Confucius. Without him, daily life is unrecognizably different.",
      tech:"No direct difference, though the Confucian emphasis on education might have contributed to East Asian technological achievement.",
      culture:"The values that define East Asian societies â€” filial piety, educational meritocracy, social harmony â€” have different philosophical foundations.",
      politics:"China's current government invokes Confucian values. Without Confucianism, Chinese political culture has a different philosophical vocabulary."
    }
  },
  buddha: {
    cascade:[
      {event:"No Four Noble Truths, no Eightfold Path (500s BC)",consequence:"Siddhartha Gautama's teaching that suffering arises from desire, and that liberation comes through discipline and mindfulness, doesn't exist. The specific Buddhist path to enlightenment is absent.",delay:"Immediate",severity:"high",icon:"â˜¸ï¸"},
      {event:"Indian spiritual landscape different",consequence:"Hinduism was already established. Without Buddhism as a reform movement, Hindu practice faces less internal challenge. The caste system might face less philosophical opposition.",delay:"~100 years",severity:"high",icon:"ðŸ•‰ï¸"},
      {event:"No spread to East and Southeast Asia",consequence:"Buddhism shaped the civilizations of China, Japan, Korea, Tibet, Thailand, Myanmar, Sri Lanka, and more. Without it, these cultures develop from local religions and philosophies only.",delay:"~500 years",severity:"high",icon:"ðŸŒ"},
      {event:"Meditation as a practice less widespread",consequence:"While meditation existed in Hindu traditions, Buddhist meditation techniques â€” vipassana, zazen, metta â€” were the primary channel through which contemplative practice spread globally.",delay:"~2000 years",severity:"high",icon:"ðŸ§˜"},
      {event:"Modern mindfulness movement doesn't exist",consequence:"The mindfulness revolution in Western psychology, medicine, and self-help derives from Buddhist meditation practices. Without Buddhism, this movement has different roots â€” if it exists at all.",delay:"~2500 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you've ever done meditation, yoga retreats with a Buddhist flavor, or used a mindfulness app â€” those practices trace to Buddhist traditions. Without Buddhism, the modern wellness industry looks different.",
      tech:"No direct difference.",
      culture:"East and Southeast Asian art, architecture, literature â€” all profoundly shaped by Buddhism. Temple complexes, meditation retreats, the Dalai Lama as a global figure â€” none exist in their current form.",
      politics:"Tibet's political situation doesn't exist in its current form. Buddhist-majority countries in Southeast Asia have different political cultures. The Dalai Lama's influence on Western attitudes toward China is absent."
    }
  },
  socrates: {
    cascade:[
      {event:"No Socratic method, no 'examined life' (5th century BC)",consequence:"Socrates didn't write anything â€” we know him through Plato. Without Socrates, Plato might still philosophize, but from different foundations. The specific method of questioning-as-philosophy is absent.",delay:"Immediate",severity:"high",icon:"ðŸ¤”"},
      {event:"Plato has different philosophical roots",consequence:"Plato's entire body of work responds to Socrates â€” the dialogues, the trial, the death. Without Socrates, Plato (if he philosophizes at all) works from the Pre-Socratics and the Sophists. Philosophy looks different.",delay:"~30 years",severity:"high",icon:"ðŸ“œ"},
      {event:"Western philosophy has different origin",consequence:"The Socrates â†’ Plato â†’ Aristotle pipeline is the foundation of Western thought. Without Socrates, this chain breaks. Philosophy might develop from the Sophists (relativism) or the Pre-Socratics (cosmology) instead.",delay:"~50 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Trial and death narrative absent",consequence:"Socrates's execution by Athens â€” the city killing its greatest thinker â€” is Western civilization's founding moral drama. Without it, the conflict between individual conscience and state authority has a different origin story.",delay:"Cultural",severity:"high",icon:"âš–ï¸"},
      {event:"Same philosophical questions, different tradition",consequence:"Humans ask philosophical questions regardless. But the specific Western tradition â€” questioning, dialectic, the pursuit of definitions â€” might be replaced by a more rhetorical (Sophistic) or mystical tradition.",delay:"~2500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct daily difference. But law school's case method, scientific peer review, and democratic debate all use Socratic questioning â€” a method that might not exist in its current form.",
      tech:"No difference.",
      culture:"The phrase 'the unexamined life is not worth living' doesn't exist. The trial of Socrates â€” foundational to Western ideas about free speech and conscience â€” is absent from cultural memory.",
      politics:"The philosophical foundations of democracy â€” individual moral reasoning, questioning authority, the duty to speak truth â€” have different roots. Western liberalism might have a more Sophistic, less principled character."
    }
  },
  plato: {
    cascade:[
      {event:"No Republic, no Theory of Forms (~380 BC)",consequence:"Plato's works â€” the allegory of the cave, the ideal state, the world of Forms â€” don't exist. Western philosophy loses its most influential body of work. Aristotle studies with someone else, or not at all.",delay:"Immediate",severity:"high",icon:"ðŸ“œ"},
      {event:"Aristotle develops from different foundations",consequence:"Aristotle was Plato's student for 20 years. Without Plato's Academy, Aristotle might never philosophize â€” or he develops an entirely different system from the Pre-Socratics.",delay:"~20 years",severity:"high",icon:"ðŸŽ“"},
      {event:"Christian theology has different philosophical foundation",consequence:"Augustine fused Plato with Christianity. Aquinas fused Aristotle with Christianity. Without Plato, the entire philosophical infrastructure of Christian theology is different.",delay:"~800 years",severity:"high",icon:"âœï¸"},
      {event:"Western metaphysics unrecognizable",consequence:"The mind-body problem, the question of universals, idealism vs. realism â€” all these debates respond to Plato. Without him, philosophy asks different questions or asks them differently.",delay:"~2000 years",severity:"high",icon:"ðŸ¤”"},
      {event:"Same philosophical urge, different tradition",consequence:"Humans philosophize regardless. But Western philosophy's specific character â€” its emphasis on abstract concepts, ideal forms, and logical argument â€” is largely Plato's creation.",delay:"~2500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct daily difference.",
      tech:"No difference.",
      culture:"The concept of 'platonic' â€” ideal, non-physical â€” doesn't exist. The allegory of the cave, one of philosophy's most famous images, is absent. Every philosophy department in the world teaches a different curriculum.",
      politics:"Plato's Republic â€” the first systematic work of political theory â€” doesn't exist. The tradition of imagining ideal societies starts elsewhere. The concept of the 'philosopher king' is absent."
    }
  },
  aristotle: {
    cascade:[
      {event:"No systematic philosophy of everything (~350 BC)",consequence:"Aristotle wrote on logic, physics, biology, ethics, politics, poetics, metaphysics â€” essentially creating the framework for organized knowledge. Without him, these fields develop in isolation rather than as parts of a system.",delay:"Immediate",severity:"high",icon:"ðŸ“š"},
      {event:"Formal logic arrives later",consequence:"Aristotle's syllogistic logic was the foundation of reasoning for 2,000 years. Without it, logical thinking develops from other sources â€” possibly the Stoics â€” but less systematically.",delay:"~100 years",severity:"high",icon:"ðŸ“"},
      {event:"Medieval Islamic and Christian thought different",consequence:"Both Al-Farabi and Thomas Aquinas built their philosophical systems on Aristotle. Without him, both Islamic and Christian philosophy develop from Plato alone â€” more mystical, less empirical.",delay:"~1500 years",severity:"high",icon:"ðŸ•Œ"},
      {event:"Scientific classification develops differently",consequence:"Aristotle's biological classifications and his emphasis on observation and categorization laid groundwork for all natural science. Without him, empirical science develops from different intellectual traditions.",delay:"~2000 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Western intellectual tradition less systematic",consequence:"Aristotle gave the West its habit of organizing knowledge into categories and disciplines. Without him, the university system, the scientific method, and systematic inquiry develop from different models.",delay:"~2300 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct daily difference. But the organizational logic of Western education â€” separate disciplines, systematic study, empirical observation â€” is Aristotelian.",
      tech:"Scientific method might have developed differently without Aristotle's emphasis on observation and categorization.",
      culture:"University education is organized differently. The division of knowledge into physics, biology, ethics, politics, and poetics â€” which is essentially Aristotle's classification â€” has a different structure.",
      politics:"Democratic theory has different philosophical foundations. Aristotle's analysis of constitutions and his argument for mixed government influenced every subsequent political theorist."
    }
  },
  kant: {
    cascade:[
      {event:"No Critique of Pure Reason (1781)",consequence:"Kant's 'Copernican revolution' in philosophy â€” arguing that the mind structures experience rather than passively receiving it â€” doesn't happen. Empiricism and rationalism remain unreconciled.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"German Idealism doesn't exist",consequence:"Fichte, Schelling, and Hegel all built on Kant's system. Without his foundation, German philosophy in the 1800s develops from different sources. No Hegelian dialectic as we know it.",delay:"~20 years",severity:"high",icon:"ðŸ‡©ðŸ‡ª"},
      {event:"Moral philosophy has different foundation",consequence:"Kant's categorical imperative â€” act only according to rules you could will to be universal â€” became the dominant model of moral reasoning. Without it, utilitarian ethics (Bentham, Mill) might dominate unchallenged.",delay:"~20 years",severity:"high",icon:"âš–ï¸"},
      {event:"No Kantian framework for human rights",consequence:"The idea of human dignity as an absolute â€” that people must never be treated as mere means â€” is Kantian. Without it, human rights philosophy rests more on natural law or utilitarian arguments.",delay:"~100 years",severity:"medium",icon:"âœŠ"},
      {event:"Same philosophical questions, different answers",consequence:"Questions about knowledge, morality, and beauty persist. But the specific Kantian framework that shaped modernity â€” autonomy, dignity, universal principles â€” is absent.",delay:"~200 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The concept of human dignity â€” which underpins modern law, human rights declarations, and medical ethics â€” has a different philosophical foundation.",
      tech:"No difference.",
      culture:"Every philosophy department teaches a different curriculum. The Enlightenment's philosophical peak is different. The concept of 'autonomy' â€” central to modern liberalism â€” has different intellectual roots.",
      politics:"Human rights philosophy is more utilitarian and less dignity-based. The Universal Declaration of Human Rights might look different. Medical ethics â€” informed consent, patient autonomy â€” develops from different principles."
    }
  },
  nietzsche: {
    cascade:[
      {event:"No 'God is dead,' no will to power, no Ãœbermensch (1880s-90s)",consequence:"Nietzsche's radical critique of morality, religion, and truth doesn't exist. The most provocative philosopher of the modern era is absent.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Existentialism has different roots",consequence:"Heidegger, Sartre, and Camus all responded to Nietzsche. Without him, existentialism develops more from Kierkegaard's religious anxiety and less from Nietzsche's radical freedom.",delay:"~30 years",severity:"high",icon:"ðŸ¤”"},
      {event:"Postmodernism weaker",consequence:"Foucault, Derrida, and Deleuze all traced their intellectual ancestry to Nietzsche. Without his critique of truth and morality, postmodern philosophy develops from different sources â€” or is less radical.",delay:"~70 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Nazi appropriation doesn't happen",consequence:"The Nazis misused Nietzsche's philosophy â€” especially through his sister's distorted editions. Without Nietzsche, Nazi ideology finds different intellectual props (which it would, easily).",delay:"~40 years",severity:"low",icon:"âš ï¸"},
      {event:"Modern Western culture less nihilistic",consequence:"Nietzsche diagnosed the death of God and the crisis of meaning. Without his diagnosis, the condition still exists â€” secularization was happening â€” but the cultural vocabulary for discussing it is different.",delay:"~100 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct difference. But when you hear someone say 'God is dead' or 'what doesn't kill you makes you stronger' â€” both Nietzsche â€” those phrases are absent from cultural vocabulary.",
      tech:"No difference.",
      culture:"Existential angst still exists, but the specific language for it is different. Philosophy is less confrontational. The idea of 'creating your own values' in the absence of God has different articulation.",
      politics:"The intellectual foundations of both fascism (through distortion) and liberation (through existentialism) are different. Postmodern critiques of power and truth have different philosophical ancestors."
    }
  },
  marx: {
    cascade:[
      {event:"No Communist Manifesto (1848), no Das Kapital (1867-94)",consequence:"The most influential political philosophy of the modern era doesn't exist. Class analysis, dialectical materialism, the critique of capitalism â€” all absent in their Marxist form.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Workers' movements less ideologically unified",consequence:"Labor organizing was already happening â€” trade unions, cooperatives, Chartism. But without Marx's theoretical framework, workers' movements are more pragmatic and less revolutionary.",delay:"~20 years",severity:"high",icon:"âœŠ"},
      {event:"No Russian Revolution in 1917 (in its form)",consequence:"Russia's crisis was real â€” the war, the Tsar's incompetence. But without Marxist ideology, the revolution might produce a liberal democracy, a military dictatorship, or a different kind of socialism.",delay:"~70 years",severity:"high",icon:"ðŸš©"},
      {event:"No Cold War as ideological conflict",consequence:"Without Marxism, the US-Soviet rivalry might exist (great powers compete), but it's not an ideological struggle between capitalism and communism. It's more like traditional great-power competition.",delay:"~100 years",severity:"high",icon:"â˜¢ï¸"},
      {event:"20th century unrecognizable",consequence:"Marxism shaped not just communist states but also social democracy, welfare states, liberation movements, and academic thought worldwide. Remove it and the entire century is different.",delay:"~150 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Without Marx, there's no communism as an ideology. The Cold War, the Soviet Union, Maoist China â€” all either don't exist or take completely different forms. The 20th century is unrecognizable.",
      tech:"Without the Cold War's technology race, computing, space technology, and the internet develop on different timelines.",
      culture:"The entire vocabulary of class analysis â€” bourgeoisie, proletariat, alienation, exploitation â€” is absent. Academic humanities lose their most influential theoretical framework.",
      politics:"Social democracy, welfare states, and labor rights still develop (workers organized before Marx), but they have different intellectual foundations. The left-right political spectrum is organized differently."
    }
  },
  luther: {
    cascade:[
      {event:"No 95 Theses (1517)",consequence:"Luther's protest against indulgences ignited the Reformation. Without him, the Catholic Church still faces internal pressure â€” corruption was real â€” but reform happens within the Church rather than splitting it.",delay:"Immediate",severity:"high",icon:"â›ª"},
      {event:"No Protestant Reformation (in its form)",consequence:"Other reformers â€” Zwingli, Calvin â€” might still break with Rome. But without Luther's specific theological arguments (sola fide, sola scriptura) and his German translation of the Bible, the movement is different.",delay:"~5-20 years",severity:"high",icon:"ðŸ“–"},
      {event:"No Counter-Reformation",consequence:"Without the Protestant threat, the Catholic Church doesn't reform itself through the Council of Trent. Catholic practice remains more medieval, more corrupt, less disciplined.",delay:"~30 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"No Wars of Religion",consequence:"The Thirty Years' War (1618-48), which killed a third of Germany's population, was a direct consequence of the Reformation. Without it, Central European history is less traumatic.",delay:"~100 years",severity:"high",icon:"âš”ï¸"},
      {event:"Christianity never splits (or splits differently)",consequence:"A unified Western Christianity â€” or one that splits along different lines â€” produces a fundamentally different Europe. Capitalism, democracy, science, and individual rights might develop differently.",delay:"~500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Without the Reformation, there are no Protestant churches â€” no Baptists, Methodists, Lutherans, Presbyterians. American religion is completely different. The work ethic Max Weber attributed to Protestantism might not exist.",
      tech:"Weber's 'Protestant ethic' argument links Protestantism to capitalism and modern science. Without Protestantism, the Industrial Revolution might originate differently.",
      culture:"No Protestant hymn tradition (Luther wrote hymns). No King James Bible (produced by a Protestant English church). The relationship between individual conscience and religious authority is different.",
      politics:"Without the Wars of Religion, the concept of religious tolerance â€” born from exhaustion after decades of killing â€” develops from different sources. The separation of church and state has different origins."
    }
  },
  aquinas: {
    cascade:[
      {event:"No Summa Theologica (1265-74)",consequence:"Aquinas's synthesis of Aristotelian philosophy with Christian theology became the intellectual foundation of Catholicism. Without it, Catholic theology rests more on Augustinian Platonism â€” more mystical, less rational.",delay:"Immediate",severity:"high",icon:"ðŸ“š"},
      {event:"Natural law tradition weaker",consequence:"Aquinas's argument that moral truths are discoverable through reason (not just revelation) became the basis for natural law theory. Without it, Christian ethics is more purely scriptural.",delay:"~100 years",severity:"high",icon:"âš–ï¸"},
      {event:"University education less philosophical",consequence:"Aquinas's methods â€” systematic reasoning, objection-and-response format â€” shaped how universities teach. Without his model, medieval education might remain more literary and less analytical.",delay:"~100 years",severity:"medium",icon:"ðŸŽ“"},
      {event:"Separation of faith and reason delayed",consequence:"Aquinas argued that faith and reason are complementary but distinct. Without this framework, the eventual separation of science from theology might be more contentious.",delay:"~300 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Catholic intellectual tradition thinner",consequence:"Modern Catholic social teaching â€” on human dignity, just war, economic justice â€” is Thomistic. Without Aquinas, Catholic political philosophy develops from different foundations.",delay:"~700 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Catholic education worldwide is Thomistic. Without Aquinas, every Catholic school and seminary teaches a different curriculum.",
      tech:"The argument that faith and reason are compatible â€” which gave Catholics permission to do science â€” develops from different sources.",
      culture:"Western philosophy's relationship with Christianity is different. The rational, systematic quality of Catholic thought â€” which distinguishes it from more emotional Protestantism â€” is absent.",
      politics:"Natural law theory â€” which underlies Catholic positions on bioethics, just war, and human rights â€” has different foundations. Catholic social teaching looks different."
    }
  },
  laozi: {
    cascade:[
      {event:"No Tao Te Ching (~6th century BC)",consequence:"The foundational text of Daoism â€” 5,000 characters on the nature of the Dao, wu wei (non-action), and the harmony of opposites â€” doesn't exist. Whether Laozi was one person is debated, but the text is historically real.",delay:"Immediate",severity:"high",icon:"â˜¯ï¸"},
      {event:"Chinese philosophy more exclusively Confucian",consequence:"Without Daoism as counterbalance, Confucianism dominates Chinese thought even more. The tension between social duty (Confucius) and natural spontaneity (Laozi) that enriched Chinese culture is absent.",delay:"~200 years",severity:"high",icon:"ðŸ“œ"},
      {event:"Chinese art and poetry less nature-focused",consequence:"Daoist aesthetics â€” emptiness, simplicity, harmony with nature â€” profoundly shaped Chinese painting, poetry, and garden design. Without them, Chinese art is more Confucian: focused on human relationships and social order.",delay:"~500 years",severity:"medium",icon:"ðŸŽ¨"},
      {event:"Chan/Zen Buddhism develops differently",consequence:"Zen Buddhism fused Buddhist meditation with Daoist philosophy. Without Daoism, Zen â€” and all its cultural products (tea ceremony, rock gardens, martial arts philosophy) â€” either doesn't exist or is purely Buddhist.",delay:"~1000 years",severity:"medium",icon:"ðŸ§˜"},
      {event:"East Asian culture less balanced",consequence:"The Confucian-Daoist balance gave East Asian civilization its characteristic tension between social obligation and individual freedom, between civilization and nature. Without Daoism, the balance tilts toward conformity.",delay:"~2500 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you practice martial arts, tai chi, or feng shui, those traditions have Daoist roots. Without Daoism, these practices either don't exist or have purely practical rather than philosophical foundations.",
      tech:"No direct difference.",
      culture:"Zen Buddhism, Chinese landscape painting, Japanese garden design, martial arts philosophy â€” all have Daoist DNA. Without Daoism, East Asian aesthetics are more formal, less nature-centered.",
      politics:"The Daoist concept of wu wei â€” governing by not governing â€” influenced Chinese political thought for millennia. Without it, Chinese political philosophy is more interventionist."
    }
  },
  augustine: {
    cascade:[
      {event:"No Confessions (397), no City of God (426)",consequence:"Augustine shaped Christian theology more than anyone after Paul. His ideas on original sin, predestination, just war, and the relationship between church and state became Catholic doctrine.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Christian theology more diverse",consequence:"Without Augustine's dominant synthesis, early Christianity develops multiple competing theological frameworks. The specific doctrines of original sin and predestination might not become central.",delay:"~200 years",severity:"high",icon:"â›ª"},
      {event:"Reformation looks different",consequence:"Luther was an Augustinian monk â€” his theology of grace and predestination came from Augustine. Without Augustine, the Reformation (if it happens) has different intellectual content.",delay:"~1100 years",severity:"medium",icon:"ðŸ“œ"},
      {event:"Western philosophy less introspective",consequence:"The Confessions invented autobiography and introspective self-examination as a literary and philosophical practice. Without it, Western culture is less focused on individual psychology.",delay:"~500 years",severity:"medium",icon:"ðŸ’­"},
      {event:"Same Christianity, different emphasis",consequence:"Christianity still spreads and dominates. But its specific theological character â€” especially the emphasis on human sinfulness and divine grace â€” is different. A more Eastern Orthodox or Pelagian Christianity is possible.",delay:"~1500 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Western culture's emphasis on individual guilt, confession, and introspection is largely Augustinian. Without him, the Western psyche has a different relationship with sin, sex, and self-examination.",
      tech:"No difference.",
      culture:"Autobiography as a genre has different origins. The specific Western habit of self-examination â€” from Montaigne to Freud â€” has different roots.",
      politics:"Just war theory â€” still invoked to justify or condemn military action â€” is largely Augustine's creation. Without it, the ethics of warfare develops from different philosophical foundations."
    }
  },
  wittgenstein: {
    cascade:[
      {event:"No Tractatus (1921), no Philosophical Investigations (1953)",consequence:"The two most influential philosophy books of the 20th century don't exist. The linguistic turn in philosophy â€” the idea that philosophical problems are really problems about language â€” doesn't happen in its specific form.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Analytic philosophy develops differently",consequence:"Wittgenstein shaped the dominant tradition in Anglo-American philosophy. Without him, Russell and Moore still establish analytic philosophy, but it takes a different character â€” more logicist, less concerned with ordinary language.",delay:"~10 years",severity:"high",icon:"ðŸ“"},
      {event:"Philosophy of mind less advanced",consequence:"Wittgenstein's arguments about private language, rule-following, and the impossibility of a purely private mental life influenced cognitive science and AI research. Without them, philosophy of mind develops from different foundations.",delay:"~30 years",severity:"medium",icon:"ðŸ§ "},
      {event:"Same philosophical questions",consequence:"The questions Wittgenstein addressed â€” meaning, mind, language, rules â€” were being raised by others. Frege, Russell, the Vienna Circle all worked on related problems. But Wittgenstein's specific solutions are absent.",delay:"~30 years",severity:"medium",icon:"ðŸ¤”"},
      {event:"Philosophy less self-conscious about language",consequence:"After Wittgenstein, philosophers couldn't ignore the role of language in creating (and dissolving) problems. Without him, philosophy might remain more traditionally metaphysical.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"AI research on language understanding might have different philosophical foundations. The question 'can machines understand language?' is framed differently.",
      culture:"Philosophy departments teach a different curriculum. The concept that 'the limits of my language mean the limits of my world' doesn't exist as a cultural reference.",
      politics:"No direct difference."
    }
  },
  simone: {
    cascade:[
      {event:"No Second Sex (1949)",consequence:"The foundational text of modern feminism doesn't exist. Beauvoir's argument â€” 'One is not born, but rather becomes, a woman' â€” that gender is socially constructed rather than biologically determined, is absent.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Second-wave feminism has different intellectual roots",consequence:"Betty Friedan's Feminine Mystique (1963) built on Beauvoir's framework. Without The Second Sex, second-wave feminism develops from different sources â€” more practical, less philosophical.",delay:"~14 years",severity:"high",icon:"âœŠ"},
      {event:"Gender theory develops more slowly",consequence:"The concept of gender as distinct from sex â€” now foundational in social science, law, and culture â€” traces to Beauvoir. Without her, this distinction takes longer to articulate.",delay:"~30 years",severity:"high",icon:"ðŸ“š"},
      {event:"Existentialist feminism absent",consequence:"Beauvoir uniquely fused existentialist philosophy with feminist analysis. Without this combination, feminism is more sociological and less philosophical.",delay:"~20 years",severity:"medium",icon:"ðŸ¤”"},
      {event:"Same feminist progress, different theory",consequence:"Women's rights movements were advancing regardless â€” voting, education, workplace equality. But the theoretical framework explaining why gender inequality persists develops from different intellectual sources.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The concept that gender is a social construction â€” now mainstream in education, law, and culture â€” has different intellectual origins.",
      tech:"No difference.",
      culture:"Feminist philosophy is less existentialist, more sociological. The specific argument that women's oppression is about how society constructs femininity â€” not biology â€” is less clearly articulated.",
      politics:"Gender equality laws and policies still develop, but the theoretical justification is different. The philosophical argument for gender as social construction has a different genealogy."
    }
  },
  sartre: {
    cascade:[
      {event:"No Being and Nothingness (1943), no existentialism as movement",consequence:"Sartre gave existentialism its popular form â€” 'existence precedes essence,' radical freedom, bad faith. Without him, the ideas exist in Heidegger and Kierkegaard but don't become a cultural movement.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Postwar intellectualism less political",consequence:"Sartre was the model of the 'engaged intellectual' â€” using philosophy as a basis for political action. Without his example, philosophy stays more academic, less activist.",delay:"~5 years",severity:"medium",icon:"âœŠ"},
      {event:"French intellectual culture less dominant",consequence:"Sartre made Paris the center of global intellectual life in the 1940s-60s. Without him, French philosophy is less culturally central. Camus, Merleau-Ponty, and Beauvoir still write, but lack Sartre's celebrity.",delay:"~10 years",severity:"medium",icon:"ðŸ‡«ðŸ‡·"},
      {event:"Anti-colonial thought develops differently",consequence:"Sartre's preface to Fanon's Wretched of the Earth was enormously influential. His support for Third World liberation movements gave them philosophical legitimacy in European discourse.",delay:"~15 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Same existential questions, less fashionable",consequence:"The questions â€” freedom, meaning, authenticity â€” persist. But without Sartre making them culturally glamorous, they remain in philosophy departments rather than cafÃ© culture.",delay:"~30 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"The concept of 'existentialism' as a cultural movement doesn't exist. The cafÃ© intellectual â€” smoking, debating freedom and nothingness â€” is a different archetype or doesn't exist. French intellectual life is less globally central.",
      politics:"Anti-colonial movements have different intellectual allies in Europe. The tradition of the politically engaged intellectual is weaker."
    }
  },
  arendt: {
    cascade:[
      {event:"No Origins of Totalitarianism (1951), no 'banality of evil' (1963)",consequence:"Arendt's analysis of how totalitarianism arises from loneliness, statelessness, and ideology â€” and her concept of the 'banality of evil' from the Eichmann trial â€” doesn't exist.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Understanding of totalitarianism less sophisticated",consequence:"Without Arendt's framework, we understand Nazism and Stalinism through different lenses â€” perhaps more psychologically (individual evil) and less structurally (how systems produce complicity).",delay:"~10 years",severity:"high",icon:"âš ï¸"},
      {event:"Eichmann trial interpreted differently",consequence:"Arendt's reporting on the Eichmann trial â€” 'Eichmann in Jerusalem' â€” transformed how people think about moral responsibility and bureaucratic evil. Without it, the trial is less philosophically significant.",delay:"~12 years",severity:"medium",icon:"âš–ï¸"},
      {event:"Political theory less focused on democratic participation",consequence:"Arendt's emphasis on active citizenship, public space, and political action as the highest human activity influenced democratic theory. Without her, political theory is more procedural.",delay:"~20 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Same political dangers, less vocabulary",consequence:"Authoritarianism still threatens. But the specific conceptual tools Arendt provided â€” the banality of evil, the origins of totalitarianism, the human condition â€” are absent from public discourse.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Every time someone invokes the 'banality of evil' â€” which happens frequently in discussions of corporate malfeasance, government abuse, or bureaucratic harm â€” that concept is absent.",
      tech:"No difference.",
      culture:"The phrase 'banality of evil' is one of the most referenced concepts in modern political thought. Without it, discussions of how ordinary people commit atrocities use different frameworks.",
      politics:"Understanding of how democracies slide into authoritarianism is less theoretically developed. Arendt's warnings about loneliness, statelessness, and ideological thinking as precursors to totalitarianism are absent."
    }
  },
  foucault: {
    cascade:[
      {event:"No Discipline and Punish (1975), no History of Sexuality (1976-84)",consequence:"Foucault's analysis of how power operates through institutions â€” prisons, hospitals, schools, sexuality â€” doesn't exist. The specific insight that power is not just repressive but productive is absent.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Academic humanities less focused on power",consequence:"Foucault's influence on literary criticism, history, sociology, and political science was enormous. Without him, these fields are less focused on power relations and more on traditional analysis.",delay:"~10 years",severity:"high",icon:"ðŸŽ“"},
      {event:"Queer theory develops differently",consequence:"Foucault's History of Sexuality â€” arguing that 'homosexuality' as an identity category was created by 19th-century medicine â€” is foundational to queer theory. Without it, LGBTQ+ intellectual history has different foundations.",delay:"~15 years",severity:"medium",icon:"ðŸŒˆ"},
      {event:"Surveillance studies weaker",consequence:"Foucault's concept of the panopticon â€” internalized surveillance as a form of social control â€” is central to debates about technology and privacy. Without it, these debates use different frameworks.",delay:"~20 years",severity:"medium",icon:"ðŸ‘ï¸"},
      {event:"Same social critiques, different language",consequence:"People still critique institutions and power structures. But the specific vocabulary â€” discourse, biopower, panopticon, episteme â€” that Foucault provided is absent from academic and public discourse.",delay:"~40 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Every debate about surveillance, institutional power, or how categories like 'criminal' or 'mentally ill' are constructed uses Foucauldian concepts, often without knowing it.",
      tech:"Discussions about Big Tech's power, algorithmic surveillance, and data governance lack the panopticon framework.",
      culture:"Academic humanities are less focused on power dynamics. The specific analytical tools that dominate university humanities departments worldwide are absent.",
      politics:"Critiques of prisons, mental health institutions, and policing lack Foucault's specific analytical framework. The prison abolition movement has different intellectual roots."
    }
  },
  rawls: {
    cascade:[
      {event:"No A Theory of Justice (1971)",consequence:"The most influential work of political philosophy since WWII doesn't exist. Rawls's 'veil of ignorance' thought experiment â€” which justifies redistribution â€” is absent from political debate.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Liberal political philosophy weaker",consequence:"Rawls revived political philosophy as a serious discipline after decades of positivist skepticism. Without him, the field remains more fragmented and less ambitious.",delay:"~10 years",severity:"high",icon:"âš–ï¸"},
      {event:"Debates about justice less structured",consequence:"Rawls's framework â€” the difference principle, primary goods, the original position â€” gave liberals a systematic way to argue for redistribution. Without it, egalitarian arguments are more ad hoc.",delay:"~15 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Nozick's libertarianism has no foil",consequence:"Nozick's Anarchy, State, and Utopia was written as a response to Rawls. Without Rawls, libertarian political philosophy develops in a vacuum, without its best opponent.",delay:"~3 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Same political debates, less rigorous",consequence:"Arguments about inequality, fairness, and redistribution still happen. But they lack Rawls's systematic philosophical framework.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct difference in daily life.",
      tech:"No difference.",
      culture:"Philosophy departments teach a different curriculum. The 'veil of ignorance' â€” now a standard thought experiment in ethics classes worldwide â€” doesn't exist.",
      politics:"The philosophical justification for the welfare state is less rigorous. Progressive political philosophy lacks its most systematic framework. Healthcare, education, and tax policy debates use different philosophical arguments."
    }
  },
  turing_phil: {
    cascade:[
      {event:"No Turing test (1950), no 'Computing Machinery and Intelligence'",consequence:"The philosophical question 'Can machines think?' was formalized by Turing. Without his specific framing â€” the imitation game â€” debates about AI have a different structure.",delay:"Immediate",severity:"high",icon:"ðŸ¤–"},
      {event:"AI research has different philosophical foundations",consequence:"Turing's 1936 paper on computability defined what a computer can and cannot do. Without it, computer science's theoretical foundations are different â€” probably built by Church, Post, or GÃ¶del alone.",delay:"~14 years",severity:"high",icon:"ðŸ’»"},
      {event:"Codebreaking at Bletchley Park different",consequence:"Turing's specific work on breaking Enigma was critical. Other codebreakers were brilliant, but Turing's bombe machine was his design. Breaking Enigma might take longer.",delay:"~3 years",severity:"high",icon:"ðŸ”"},
      {event:"WWII in the Atlantic affected",consequence:"If Enigma takes longer to break, the Battle of the Atlantic goes worse for the Allies. More shipping lost, slower buildup for D-Day, possible delays in the war.",delay:"~5 years",severity:"high",icon:"âš“"},
      {event:"Same computing revolution, different hero",consequence:"Computers were coming â€” von Neumann, Zuse, and others were building them. But the philosophical framework for thinking about computation and intelligence is different.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Your computer works the same. But every conversation about AI â€” 'can ChatGPT think?' â€” uses frameworks Turing established. Without him, we talk about machine intelligence differently.",
      tech:"Computing develops from von Neumann's architecture regardless. But the Turing test as a benchmark for AI doesn't exist.",
      culture:"The story of Turing's persecution for homosexuality â€” and his posthumous pardon â€” is absent. One of the most powerful narratives about LGBTQ+ injustice in science is lost.",
      politics:"If breaking Enigma took longer, the Battle of the Atlantic's outcome changes. Allied supply lines are more strained. D-Day might be delayed."
    }
  },
  hippocrates: {
    cascade:[
      {event:"No Hippocratic Corpus (~400 BC)",consequence:"The collection of texts attributed to Hippocrates established medicine as a rational discipline separate from religion and magic. Without it, Greek medicine develops more slowly from the temple tradition.",delay:"Immediate",severity:"high",icon:"âš•ï¸"},
      {event:"Medical ethics has different foundation",consequence:"The Hippocratic Oath â€” 'first, do no harm' â€” has been the ethical foundation of medicine for 2,400 years. Without it, medical ethics develops from different philosophical sources.",delay:"~100 years",severity:"high",icon:"âš–ï¸"},
      {event:"Clinical observation as method delayed",consequence:"Hippocratic medicine emphasized observing symptoms, recording cases, and making prognoses based on experience rather than divine revelation. Without this model, evidence-based medicine starts later.",delay:"~200 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Galen builds on different foundations",consequence:"Galen (2nd century AD), who dominated medicine for 1,500 years, built on Hippocratic principles. Without Hippocrates, Galen's system â€” and medieval medicine â€” looks different.",delay:"~500 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Same medical science eventually",consequence:"Scientific medicine was going to develop â€” the experimental method and anatomy would force it. But the specific tradition of rational, observational, ethical medicine that Hippocrates established starts from a different point.",delay:"~2000 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Doctors still take an oath â€” but it might be different. The principle 'first, do no harm' might not be medicine's founding ethical statement.",
      tech:"No difference. Modern medicine is based on science, not on ancient texts.",
      culture:"Medical culture's self-image is different. The idea of the physician as a rational, ethical healer bound by sacred duty has different roots.",
      politics:"Medical ethics â€” informed consent, patient rights, professional standards â€” has different philosophical foundations."
    }
  },
  fleming: {
    cascade:[
      {event:"No discovery of penicillin (1928)",consequence:"Fleming's accidental discovery â€” noticing that mold killed bacteria in a petri dish â€” was serendipity. But penicillin's antibacterial properties would have been noticed by someone else within 5-10 years.",delay:"~5-10 years",severity:"high",icon:"ðŸ§«"},
      {event:"WWII without antibiotics (or with delayed ones)",consequence:"Penicillin was mass-produced for D-Day. A 5-10 year delay means WWII soldiers die of infections that were historically treatable. Thousands more battlefield deaths.",delay:"~15 years",severity:"high",icon:"ðŸ’Š"},
      {event:"Antibiotic revolution still happens",consequence:"Florey and Chain â€” who actually developed penicillin into a usable drug â€” were systematically searching for antibacterials. Sulfonamides already existed. The antibiotic era was coming.",delay:"~5-10 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Same medical revolution, time-shifted",consequence:"By the 1940s at latest, someone discovers penicillin or another antibiotic. The revolution in treating bacterial infection is delayed by years, not prevented.",delay:"~10 years",severity:"medium",icon:"ðŸ¥"},
      {event:"Millions more die in the gap",consequence:"A 5-10 year delay in antibiotics during a period that includes WWII means significant additional casualties â€” from battlefield infections, from pneumonia, from surgical complications.",delay:"~15 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Identical. You have the same antibiotics. The discovery was 5-10 years from multiple researchers.",
      tech:"Same medical technology. Antibiotics were inevitable.",
      culture:"Scotland loses a national hero. The penicillin story â€” accidental discovery, mold on a petri dish â€” is one of science's most famous anecdotes. Without it, the narrative of serendipity in science has a different flagship example.",
      politics:"If WWII casualties are higher due to delayed antibiotics, the human cost of the war is greater. But the outcome is the same."
    }
  },
  jenner: {
    cascade:[
      {event:"No smallpox vaccination (1796)",consequence:"Jenner formalized what folk medicine already knew â€” that cowpox exposure protected against smallpox. Without him, the practice still spreads from folk knowledge, but more slowly and with less scientific credibility.",delay:"~10-20 years",severity:"high",icon:"ðŸ’‰"},
      {event:"Vaccination principle still discovered",consequence:"Pasteur, Koch, and others would have established the principle of vaccination through microbiology. Jenner's contribution was demonstrating it empirically before the theory existed.",delay:"~80 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Smallpox kills millions more",consequence:"A 10-20 year delay in organized vaccination means millions more die of smallpox in the early 1800s. The disease was the deadliest in human history.",delay:"~20 years",severity:"high",icon:"âš ï¸"},
      {event:"Smallpox still eradicated",consequence:"The WHO eradication campaign (completed 1980) depended on the vaccine existing, not on Jenner specifically. Once vaccination was established, eradication was a matter of logistics and political will.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Anti-vaccine movements have different origins",consequence:"Opposition to vaccination started with Jenner. Without his specific historical moment, the anti-vax movement develops from different roots â€” but the resistance to injecting disease material is human, not historical.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Smallpox is still eradicated. Your childhood vaccines exist. Everything is the same â€” just arrived 10-20 years later historically.",
      tech:"Identical. Vaccine technology was developed by many researchers.",
      culture:"The origin story of vaccination has a different hero. The term 'vaccine' (from vacca, cow) might not exist.",
      politics:"The anti-vaccination movement has different historical roots but still exists."
    }
  },
  nightingale: {
    cascade:[
      {event:"No Nightingale reforming military hospitals (1854-56)",consequence:"Nightingale's work in the Crimean War â€” demonstrating that sanitation reduced mortality more than medicine â€” was revolutionary. Without her, military hospitals reform more slowly from accumulated experience.",delay:"~10 years",severity:"high",icon:"ðŸ¥"},
      {event:"Professional nursing delayed",consequence:"Nightingale established nursing as a trained, respected profession. Without her, nursing develops more slowly from the religious and domestic care traditions.",delay:"~15 years",severity:"high",icon:"ðŸ‘©â€âš•ï¸"},
      {event:"Statistical methods in healthcare delayed",consequence:"Nightingale was a pioneer in using statistics â€” her polar area diagrams â€” to demonstrate public health problems. Without her, evidence-based health policy develops from other sources.",delay:"~15 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Hospital design less sanitary",consequence:"Nightingale's Notes on Hospitals (1859) reformed hospital architecture â€” ventilation, spacing, hygiene. Without her influence, hospital design improves more gradually.",delay:"~20 years",severity:"medium",icon:"ðŸ—ï¸"},
      {event:"Same medical progress, different path",consequence:"Germ theory (Pasteur, Koch) would have forced sanitation reforms regardless. But Nightingale implemented reforms before the theory existed, saving many lives in the gap.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Modern nursing exists regardless â€” the need was too great. But the profession's self-image, training standards, and cultural prestige were shaped by Nightingale.",
      tech:"No difference. Medical statistics and public health data analysis were developing from multiple sources.",
      culture:"Nursing loses its founding mythology. The 'lady with the lamp' image â€” which elevated nursing from menial work to noble calling â€” is absent.",
      politics:"Public health reform in 19th-century Britain is slower. Sanitation standards improve from germ theory rather than from Nightingale's statistical advocacy."
    }
  },
  salk: {
    cascade:[
      {event:"No Salk polio vaccine (1955)",consequence:"Sabin's oral vaccine was in development simultaneously. Without Salk, the oral vaccine arrives first â€” possibly by 1958-60. The 3-5 year gap means more polio cases.",delay:"~3-5 years",severity:"high",icon:"ðŸ’‰"},
      {event:"Polio epidemic continues longer",consequence:"The late 1940s-early 1950s were the peak of polio epidemics in the US. A few more years without a vaccine means thousands more children paralyzed.",delay:"~3-5 years",severity:"high",icon:"â™¿"},
      {event:"Sabin's oral vaccine becomes the standard sooner",consequence:"Without Salk's injected vaccine, Sabin's oral version debuts first. It might become the global standard earlier, which in some ways is better (easier to administer in developing countries).",delay:"~5 years",severity:"low",icon:"ðŸ’Š"},
      {event:"Same polio eradication trajectory",consequence:"Polio eradication efforts in the 21st century use oral vaccine primarily. Salk's contribution was ending the epidemic 3-5 years earlier â€” saving tens of thousands from paralysis.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Vaccine trust built differently",consequence:"Salk's refusal to patent the vaccine â€” 'Could you patent the sun?' â€” became a powerful statement about public health over profit. Without it, the debate about vaccine patents has a different moral touchstone.",delay:"Cultural",severity:"medium",icon:"âš–ï¸"}
    ],
    modernDay:{
      daily:"Polio is nearly eradicated either way. The medical outcome is the same.",
      tech:"Same vaccine technology.",
      culture:"The moral argument against patenting vaccines loses its most powerful example. Salk's decision not to patent became a touchstone in debates about pharmaceutical profits vs. public health.",
      politics:"Debates about vaccine patents â€” especially during COVID-19 â€” lack the Salk precedent."
    }
  },
  lister: {
    cascade:[
      {event:"No antiseptic surgery (1867)",consequence:"Lister applied Pasteur's germ theory to surgery â€” spraying carbolic acid to prevent infection. Without him, antiseptic technique develops 5-10 years later as germ theory spreads to other surgeons.",delay:"~5-10 years",severity:"high",icon:"ðŸ¥"},
      {event:"Surgical mortality remains high longer",consequence:"Before Lister, about half of surgical patients died from infection. A 5-10 year delay in antiseptic technique means tens of thousands of additional surgical deaths.",delay:"~5-10 years",severity:"high",icon:"âš ï¸"},
      {event:"Aseptic surgery still develops",consequence:"The move from antiseptic (killing germs) to aseptic (preventing germs from entering) was driven by the logic of germ theory. Other surgeons would have implemented it.",delay:"~10 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Same modern surgery",consequence:"By 1900, sterile technique is standard regardless. Lister accelerated adoption by 5-10 years. The cost is measured in lives lost during the gap.",delay:"~30 years",severity:"low",icon:"ðŸŒ"},
      {event:"Listerine doesn't exist (under that name)",consequence:"The mouthwash was named after Joseph Lister. Without him, it has a different brand name. Trivial but amusing.",delay:"Cultural",severity:"low",icon:"ðŸ§´"}
    ],
    modernDay:{
      daily:"Modern surgery is identical. Sterile technique was inevitable once germ theory was proven.",
      tech:"Same surgical technology.",
      culture:"The story of how surgery went from butchery to science has a different hero.",
      politics:"No meaningful difference."
    }
  },
  ibnsina: {
    cascade:[
      {event:"No Canon of Medicine (~1025)",consequence:"Ibn Sina's medical encyclopedia was the standard medical textbook in Europe and the Islamic world for 600 years. Without it, European medieval medicine relies more on Galen directly, without Ibn Sina's systematic organization.",delay:"Immediate",severity:"high",icon:"ðŸ“š"},
      {event:"Medical education less systematic",consequence:"The Canon organized medical knowledge into a logical system â€” general principles, simple drugs, diseases by organ, systemic diseases, compound drugs. Without this structure, medical education is more fragmented.",delay:"~200 years",severity:"medium",icon:"ðŸŽ“"},
      {event:"Pharmacology develops more slowly",consequence:"Ibn Sina's systematic classification of drugs, dosages, and drug interactions was centuries ahead. Without it, pharmacological knowledge accumulates more haphazardly.",delay:"~200 years",severity:"medium",icon:"ðŸ’Š"},
      {event:"Islamic Golden Age science still flourishes",consequence:"Al-Razi, Al-Zahrawi, and other Islamic physicians still make contributions. Ibn Sina was the greatest, but the tradition doesn't depend on him alone.",delay:"~100 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Same medical revolution in 1500s-1600s",consequence:"Vesalius, Harvey, and the scientific revolution in medicine would have overthrown medieval medical theories regardless. Ibn Sina accelerated knowledge but couldn't prevent the need for fundamental revision.",delay:"~500 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Modern medicine is based on science, not medieval texts.",
      tech:"Identical.",
      culture:"The Islamic world's contribution to medical knowledge is perceived as less central. The argument that Europe's scientific revolution built on Islamic scholarship loses its strongest medical example.",
      politics:"No meaningful difference."
    }
  },
  tuyouyou: {
    cascade:[
      {event:"No artemisinin discovery (1972)",consequence:"Tu Youyou's extraction of artemisinin from sweet wormwood â€” discovered by reading ancient Chinese medical texts â€” gave the world its most effective antimalarial. Without her, the search continues with different approaches.",delay:"~10-15 years",severity:"high",icon:"ðŸŒ¿"},
      {event:"Malaria treatment stalls",consequence:"Chloroquine resistance was spreading. Without artemisinin, malaria treatment relies on less effective drugs for an additional decade. Millions more die, primarily in sub-Saharan Africa.",delay:"~10-15 years",severity:"high",icon:"ðŸ¦Ÿ"},
      {event:"Artemisinin eventually found or alternative developed",consequence:"Traditional Chinese medicine texts point to sweet wormwood. Other researchers might have found it. Or synthetic alternatives might have been developed. But the gap costs lives.",delay:"~15 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Chinese traditional medicine vindication delayed",consequence:"Tu's discovery proved that ancient remedies could yield modern drugs â€” validating ethnopharmacology. Without this success, the field has less credibility.",delay:"~20 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Same antimalarial science eventually",consequence:"The global effort against malaria would have continued. WHO funding, bed net distribution, vaccine development â€” all proceed regardless. But artemisinin's absence means worse treatment options for decades.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you live in a malaria-endemic region, this matters enormously. Artemisinin-based therapies are the standard treatment. Without them, malaria mortality is higher for decades.",
      tech:"Alternative antimalarials might have been developed, but artemisinin's effectiveness is hard to match.",
      culture:"China's Nobel Prize in Medicine (2015) doesn't happen. The validation of traditional Chinese medicine through modern science has a different poster child.",
      politics:"Global health policy around malaria is different. The specific optimism about malaria eradication â€” driven partly by effective treatment â€” is weaker."
    }
  },
  osler: {
    cascade:[
      {event:"No bedside teaching revolution (1890s-1910s)",consequence:"Osler transformed medical education by moving it from lectures to the patient's bedside. 'He who studies medicine without books sails an uncharted sea, but he who studies medicine without patients does not go to sea at all.'",delay:"Immediate",severity:"high",icon:"ðŸ¥"},
      {event:"Medical residency system develops differently",consequence:"Osler established the residency system at Johns Hopkins â€” apprentice-style training where young doctors learn by doing under supervision. Without him, this model develops more slowly from European precedents.",delay:"~10 years",severity:"medium",icon:"ðŸ‘¨â€âš•ï¸"},
      {event:"Johns Hopkins less influential",consequence:"Osler was one of the 'Big Four' founders of Johns Hopkins Medical School. Without him, Hopkins is still important but less revolutionary â€” and the American medical education revolution it sparked is weaker.",delay:"~15 years",severity:"medium",icon:"ðŸŽ“"},
      {event:"Same modern medical education eventually",consequence:"The Flexner Report (1910) reformed American medical education based partly on the Hopkins model. Even without Osler, the pressure to professionalize medicine was enormous.",delay:"~20 years",severity:"low",icon:"ðŸ“‹"},
      {event:"Medicine still professionalizes",consequence:"The economic and scientific incentives for better medical training were overwhelming. Osler accelerated the process and gave it a specific character â€” humanistic, bedside-focused â€” but didn't create the underlying demand.",delay:"~30 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Medical training looks the same â€” the residency model and bedside teaching were adopted globally regardless of their specific origin.",
      tech:"No difference.",
      culture:"The ideal of the physician as humanistic healer â€” not just technician â€” is slightly weaker without Osler's personal example and his famous aphorisms.",
      politics:"No meaningful difference."
    }
  },
  barnard: {
    cascade:[
      {event:"No first human heart transplant (1967)",consequence:"Christiaan Barnard performed the first human heart transplant in Cape Town. Shumway in the US was ready to do it within months. Without Barnard, the first transplant happens in 1968 instead of 1967.",delay:"~6-12 months",severity:"medium",icon:"â¤ï¸"},
      {event:"Transplant surgery develops on same timeline",consequence:"The immunosuppression drugs, surgical techniques, and medical infrastructure were all in place. Barnard's contribution was being first â€” the science didn't depend on him.",delay:"~1 year",severity:"low",icon:"ðŸ”¬"},
      {event:"South Africa doesn't get the credit",consequence:"The first heart transplant put South Africa on the medical map. Without Barnard, the US (Shumway at Stanford) gets this honor.",delay:"Cultural",severity:"low",icon:"ðŸ‡¿ðŸ‡¦"},
      {event:"Same transplant medicine by 1970",consequence:"Heart transplantation was an inevitable next step in surgery. Multiple teams were preparing. The delay is measured in months, not years.",delay:"~2 years",severity:"low",icon:"ðŸ¥"},
      {event:"Organ transplant ethics develop the same way",consequence:"The ethical debates about brain death, organ allocation, and transplant tourism were driven by the technology existing, not by who performed the first procedure.",delay:"~5 years",severity:"low",icon:"âš–ï¸"}
    ],
    modernDay:{
      daily:"No difference. Heart transplant technology is identical.",
      tech:"Identical. Shumway would have performed the first transplant within a year.",
      culture:"South Africa's medical reputation is different. Cape Town's Groote Schuur Hospital is less famous.",
      politics:"No meaningful difference."
    }
  },
  blackwell: {
    cascade:[
      {event:"No first woman with a US medical degree (1849)",consequence:"Blackwell's acceptance to Geneva Medical College was an accident â€” the all-male student body voted to admit her as a joke. Without this specific incident, women's entry into medicine comes later through different doors.",delay:"~10-20 years",severity:"medium",icon:"ðŸ‘©â€âš•ï¸"},
      {event:"Women in medicine delayed",consequence:"The barriers were institutional and cultural. Without Blackwell breaking through, other women â€” Zakrzewska, Jacobi â€” still push, but the precedent-setting first takes longer.",delay:"~10-20 years",severity:"medium",icon:"ðŸ¥"},
      {event:"New York Infirmary for Women doesn't exist",consequence:"Blackwell founded a hospital staffed entirely by women (1857). Without it, women physicians have fewer places to train and practice.",delay:"~8 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Same eventual integration",consequence:"Women were entering medicine across Europe â€” the pressure was too great. Blackwell accelerated American acceptance by a decade or two.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Medical education still opens to women",consequence:"By the early 1900s, women are in medical schools regardless. Blackwell was the icebreaker, not the cause. The cause was women's determination and the profession's need for talent.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Women make up half of medical students today. This was inevitable. Blackwell accelerated it in the US by perhaps 10-20 years.",
      tech:"No difference.",
      culture:"The 'first woman doctor' story has a different protagonist. Blackwell's specific narrative â€” admitted as a joke, graduated top of her class â€” is one of medicine's most inspiring origin stories.",
      politics:"Women's entry into professions follows a slightly delayed timeline in the US."
    }
  },
  apgar: {
    cascade:[
      {event:"No Apgar score (1952)",consequence:"Virginia Apgar's five-point scoring system for assessing newborn health at birth revolutionized neonatal care. Without it, newborn assessment remains ad hoc and inconsistent for longer.",delay:"~10 years",severity:"high",icon:"ðŸ‘¶"},
      {event:"Neonatal mortality higher",consequence:"Before the Apgar score, many birth complications went unrecognized until too late. The score forced systematic evaluation, catching problems that would have been missed.",delay:"~10 years",severity:"high",icon:"âš ï¸"},
      {event:"Anesthesiology in obstetrics develops differently",consequence:"Apgar was an anesthesiologist who focused on how anesthesia affected newborns. Without her work, the connection between maternal anesthesia and infant outcomes is studied less carefully.",delay:"~15 years",severity:"medium",icon:"ðŸ’Š"},
      {event:"Neonatal intensive care still develops",consequence:"The NICU was emerging from multiple sources â€” technology, pediatric specialization, hospital economics. Apgar's score wasn't the only driver.",delay:"~10 years",severity:"medium",icon:"ðŸ¥"},
      {event:"Same neonatal medicine by 1970",consequence:"Systematic newborn assessment was inevitable as medicine became more evidence-based. But the specific years of delay cost infant lives.",delay:"~20 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The Apgar score is still used in every delivery room worldwide. Without it, a different assessment tool fills the role â€” but Apgar's simplicity and effectiveness set the standard.",
      tech:"Same neonatal technology.",
      culture:"The backronym A-P-G-A-R (Appearance, Pulse, Grimace, Activity, Respiration) doesn't exist. Neonatal care's founding story has a different hero.",
      politics:"No meaningful difference."
    }
  },
  folkman: {
    cascade:[
      {event:"No angiogenesis hypothesis (1971)",consequence:"Folkman proposed that tumors grow by recruiting blood vessels â€” and that blocking this process could treat cancer. He was ridiculed for decades before being vindicated.",delay:"Immediate",severity:"high",icon:"ðŸ”¬"},
      {event:"Anti-angiogenesis drugs delayed",consequence:"Avastin and other drugs that starve tumors of blood supply were developed based on Folkman's work. Without him, this approach is discovered later â€” possibly through different research paths.",delay:"~20 years",severity:"high",icon:"ðŸ’Š"},
      {event:"Cancer treatment still advances",consequence:"Chemotherapy, radiation, surgery, and later immunotherapy all develop independently. Folkman's contribution was adding one more weapon â€” anti-angiogenesis â€” to the arsenal.",delay:"~20 years",severity:"medium",icon:"ðŸ¥"},
      {event:"Same cancer biology eventually understood",consequence:"The role of blood vessel growth in cancer was going to be discovered â€” it's a biological fact. But Folkman saw it 20 years before the evidence was strong enough to convince the field.",delay:"~20 years",severity:"medium",icon:"ðŸ§¬"},
      {event:"Cancer survival rates slightly lower in transition period",consequence:"Anti-angiogenesis drugs help in some cancers. Without them, those specific patients have fewer options during the gap years.",delay:"~25 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you or someone you know has been treated with Avastin or similar drugs, Folkman's work mattered directly. For others, no difference.",
      tech:"Same eventual cancer treatment approaches.",
      culture:"The story of the scientist ridiculed for decades who was eventually vindicated has a different protagonist. Folkman's persistence is one of medicine's best stories about scientific courage.",
      politics:"No meaningful difference."
    }
  },
  sabin: {
    cascade:[
      {event:"No oral polio vaccine (1961)",consequence:"Sabin's oral vaccine was easier to administer than Salk's injected version â€” a drop on a sugar cube vs. a needle. Without it, global polio vaccination relies on Salk's version, which requires trained medical personnel for injection.",delay:"Immediate",severity:"medium",icon:"ðŸ’Š"},
      {event:"Polio eradication in developing world harder",consequence:"The oral vaccine's simplicity was key to vaccination in poor countries without many doctors. Without it, polio vaccination in Africa and South Asia is slower and harder to scale.",delay:"~10 years",severity:"high",icon:"ðŸŒ"},
      {event:"Salk vaccine still works",consequence:"Salk's injected vaccine is effective. Rich countries still control polio. But the logistics of needle-based vaccination in remote areas are significantly harder.",delay:"~10 years",severity:"medium",icon:"ðŸ’‰"},
      {event:"Polio eradication campaign delayed",consequence:"The WHO campaign to eradicate polio depended on the oral vaccine's ease of use. Without it, eradication takes longer â€” possibly much longer in the hardest-to-reach areas.",delay:"~15 years",severity:"medium",icon:"ðŸ¥"},
      {event:"Same medical science, different logistics",consequence:"Polio is still controlled in developed nations. But global eradication â€” the last few percent â€” is significantly harder without an oral vaccine.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Polio is nearly eradicated. The oral vaccine made this possible in developing countries. Without it, more children in remote areas might still be at risk.",
      tech:"Salk's vaccine still works for individual protection. The gap is in mass vaccination logistics.",
      culture:"The Salk-Sabin rivalry â€” injected vs. oral â€” doesn't exist. The polio eradication story has a simpler narrative.",
      politics:"Global health campaigns for polio eradication are more difficult and expensive without the oral vaccine."
    }
  },
  neumann: {
    cascade:[
      {event:"No von Neumann architecture (1945)",consequence:"The stored-program computer â€” where instructions and data share the same memory â€” was von Neumann's key contribution. Without it, early computers remain harder to program, with separate instruction and data systems.",delay:"~3-5 years",severity:"high",icon:"ðŸ’»"},
      {event:"Computer science develops more slowly",consequence:"Von Neumann contributed to virtually every field he touched: game theory, quantum mechanics, nuclear weapons, cellular automata, computing. Without him, each field loses its most versatile mind.",delay:"~5 years",severity:"high",icon:"ðŸ§ "},
      {event:"Game theory delayed",consequence:"Von Neumann co-authored the foundational text of game theory (1944). Without it, strategic thinking in economics, military planning, and evolutionary biology develops from different roots.",delay:"~10 years",severity:"high",icon:"ðŸŽ²"},
      {event:"Manhattan Project less efficient",consequence:"Von Neumann designed the implosion lenses for the plutonium bomb. Without his mathematical contributions, the bomb design takes longer or is less efficient.",delay:"~1 year",severity:"medium",icon:"â˜¢ï¸"},
      {event:"Same computing revolution, slightly later",consequence:"Computers were being built by multiple teams â€” Turing, Zuse, Eckert, Mauchly. The stored-program concept would have emerged. But von Neumann's unique ability to synthesize across fields is unmatched.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Your computer probably still uses the von Neumann architecture â€” sequential processing, shared memory. Without him, a different architecture might have become standard, with unknown implications for how computers evolved.",
      tech:"Computing develops slightly differently. Game theory arrives later, affecting economics, AI, and strategic planning.",
      culture:"The archetype of the polymath genius â€” someone who contributes to five fields simultaneously â€” is weaker without von Neumann.",
      politics:"The Manhattan Project might be delayed slightly. Game theory's influence on Cold War strategy develops later."
    }
  },
  lovelace: {
    cascade:[
      {event:"No first computer program (1843)",consequence:"Ada Lovelace wrote the first algorithm intended for machine computation â€” for Babbage's Analytical Engine. Without her specific insight that machines could manipulate symbols (not just numbers), the conceptual leap comes later.",delay:"~20-50 years",severity:"medium",icon:"ðŸ’»"},
      {event:"Babbage's Engine still never built",consequence:"The Analytical Engine wasn't completed regardless. Lovelace's contribution was conceptual â€” seeing what the machine could do, not building it.",delay:"N/A",severity:"low",icon:"âš™ï¸"},
      {event:"Programming concept still emerges",consequence:"When electronic computers arrive in the 1940s, programming is discovered independently. Turing, von Neumann, and others would have formalized computation without knowing Lovelace's work.",delay:"~100 years",severity:"low",icon:"ðŸ“"},
      {event:"Women in computing narrative different",consequence:"Lovelace is the foundational figure for women in tech. Without her, the narrative of women's contribution to computing starts with the ENIAC programmers (1940s) or Grace Hopper.",delay:"Cultural",severity:"medium",icon:"ðŸ‘©â€ðŸ’»"},
      {event:"Same computing revolution",consequence:"Modern computing doesn't depend on Lovelace's 1843 work â€” it was rediscovered independently. Her contribution is historical and symbolic rather than causally necessary.",delay:"~100 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Modern computing was invented independently of Lovelace's work.",
      tech:"Identical. The Ada programming language would have a different name.",
      culture:"The narrative of women in technology loses its earliest, most powerful origin story. The argument that a woman wrote the first computer program â€” a century before electronic computers â€” is absent.",
      politics:"Advocacy for women in STEM loses a key historical example."
    }
  },
  euclid: {
    cascade:[
      {event:"No Elements (~300 BC)",consequence:"Euclid's textbook organized all known geometry into a logical system built from axioms. Without it, Greek geometry still exists (Pythagoras, Eudoxus) but lacks systematic organization.",delay:"Immediate",severity:"high",icon:"ðŸ“"},
      {event:"Axiomatic method less established",consequence:"Euclid's approach â€” start with self-evident axioms, derive everything else through logic â€” became the model for all deductive reasoning. Without it, the axiomatic method develops more slowly.",delay:"~200 years",severity:"high",icon:"ðŸ“–"},
      {event:"Mathematical education different for 2,000 years",consequence:"The Elements was the most widely used textbook in history after the Bible. Without it, mathematical education uses different texts and possibly different methods.",delay:"~2000 years",severity:"high",icon:"ðŸŽ“"},
      {event:"Non-Euclidean geometry still discovered",consequence:"Gauss, Lobachevsky, and Riemann would have questioned geometric axioms regardless. But without Euclid's specific axioms to challenge, the breakthrough takes a different form.",delay:"~2100 years",severity:"medium",icon:"ðŸŒ€"},
      {event:"Same mathematics, different packaging",consequence:"Geometric truths are objective â€” they'd be discovered regardless. Euclid's contribution was organization, not discovery. Without him, the same truths are known but less systematically.",delay:"~500 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Geometry works the same regardless of who organized it.",
      tech:"Same technology. Engineering and physics use the same mathematical truths.",
      culture:"The concept of 'Euclidean geometry' has a different name. The axiomatic method â€” which influenced philosophy, law, and science â€” has a different origin story.",
      politics:"No difference."
    }
  },
  gauss: {
    cascade:[
      {event:"No Gauss's contributions across mathematics (1795-1855)",consequence:"Gauss contributed to number theory, statistics, algebra, astronomy, physics, and geodesy. He's called the 'Prince of Mathematicians' because he advanced virtually every branch of math that existed.",delay:"Immediate",severity:"high",icon:"ðŸ“"},
      {event:"Number theory develops more slowly",consequence:"Gauss's Disquisitiones Arithmeticae (1801) organized and advanced number theory. Without it, the field progresses from Euler and Legendre, but less rapidly.",delay:"~10-20 years",severity:"high",icon:"ðŸ”¢"},
      {event:"Statistics less developed",consequence:"The Gaussian (normal) distribution, the method of least squares, and other statistical tools bear Gauss's name. Others (Legendre, Laplace) were working on similar problems, but Gauss's contributions accelerated the field.",delay:"~10 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Non-Euclidean geometry published earlier",consequence:"Gauss discovered non-Euclidean geometry but didn't publish it. Without his private work, Lobachevsky and Bolyai still publish â€” and might get more credit sooner.",delay:"~5 years",severity:"low",icon:"ðŸŒ€"},
      {event:"Same mathematics eventually",consequence:"Mathematical truths are discovered, not invented. Without Gauss, every one of his results is eventually found by others. But the delay across so many fields simultaneously is significant.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The normal distribution â€” the bell curve â€” governs everything from test scores to stock prices. Without Gauss, it has a different name but the same shape.",
      tech:"Same technology. GPS satellites use mathematical principles Gauss helped develop for orbital mechanics, but others would have found them.",
      culture:"Mathematics loses its most impressive prodigy story. Gauss reportedly summed 1 to 100 instantly as a child. That anecdote vanishes.",
      politics:"No difference."
    }
  },
  euler: {
    cascade:[
      {event:"No Euler's output (~800 papers, 1730s-1780s)",consequence:"Euler was the most prolific mathematician in history. He advanced calculus, graph theory, number theory, mechanics, optics, and astronomy. Without him, these fields develop from the Bernoullis, d'Alembert, Lagrange, and others.",delay:"~10-20 years",severity:"high",icon:"ðŸ“"},
      {event:"Mathematical notation less standardized",consequence:"Euler introduced or popularized the notations for e, i, Ï€, Î£, f(x), and more. Without him, mathematical language develops from different conventions â€” potentially messier.",delay:"~20 years",severity:"medium",icon:"âœï¸"},
      {event:"Graph theory delayed",consequence:"Euler's Seven Bridges of KÃ¶nigsberg (1736) founded graph theory. Without it, the field emerges later from different problems.",delay:"~50 years",severity:"medium",icon:"ðŸŒ‰"},
      {event:"Engineering mathematics less advanced",consequence:"Euler's contributions to mechanics, fluid dynamics, and structural analysis were directly applied in engineering. Without them, the mathematical tools for engineering develop more slowly.",delay:"~20 years",severity:"medium",icon:"ðŸ—ï¸"},
      {event:"Same mathematics, scattered across more people",consequence:"Every result Euler found would be found eventually. His unique contribution was doing the work of a dozen mathematicians. Without him, the same results are distributed across many researchers.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life. Mathematical truths are objective.",
      tech:"Engineering development might be slightly slower in the 18th-19th centuries without Euler's applied mathematics.",
      culture:"The number e might have a different symbol. Mathematical notation might look different on the page.",
      politics:"No difference."
    }
  },
  noether: {
    cascade:[
      {event:"No Noether's theorem (1918)",consequence:"Emmy Noether proved that every symmetry in physics corresponds to a conservation law â€” symmetry in time gives conservation of energy, symmetry in space gives conservation of momentum. This insight unified physics.",delay:"~10-20 years",severity:"high",icon:"ðŸ“"},
      {event:"Abstract algebra develops more slowly",consequence:"Noether essentially created modern abstract algebra. Without her work on ring theory and ideals, the field develops from Hilbert and others, but less elegantly.",delay:"~15 years",severity:"high",icon:"ðŸ”¢"},
      {event:"Physics-mathematics connection weaker",consequence:"Noether's theorem is the deepest connection between mathematics and physics. Without it, physicists still discover conservation laws empirically, but the theoretical understanding of why they exist is delayed.",delay:"~20 years",severity:"high",icon:"âš›ï¸"},
      {event:"Particle physics framework different",consequence:"Modern particle physics is built on symmetry principles that trace to Noether. Without her theorem, the Standard Model's development follows a different, possibly longer path.",delay:"~40 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Same physics, less elegant understanding",consequence:"Conservation laws are empirical facts â€” they'd be known regardless. Noether's contribution was explaining why they're true. The explanation eventually comes, but the delay matters.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"Particle physics â€” and technologies derived from it â€” might be delayed if the Standard Model takes longer to develop.",
      culture:"The story of a woman denied academic positions because of her gender â€” despite Einstein calling her the most important woman in mathematical history â€” is absent from the canon.",
      politics:"Advocacy for women in mathematics loses one of its most powerful historical examples."
    }
  },
  shannon: {
    cascade:[
      {event:"No information theory (1948)",consequence:"Shannon's 'A Mathematical Theory of Communication' invented information theory â€” defining bits, proving channel capacity limits, and establishing the mathematical foundation for all digital communication.",delay:"Immediate",severity:"high",icon:"ðŸ“¡"},
      {event:"Digital communication develops more slowly",consequence:"Without Shannon's theorems telling engineers what was possible, digital communication develops by trial and error rather than from theoretical foundations. Modems, cell phones, WiFi â€” all delayed.",delay:"~10-15 years",severity:"high",icon:"ðŸ“±"},
      {event:"Data compression delayed",consequence:"Shannon proved that data could be compressed to a theoretical limit. Without this, compression algorithms (ZIP, MP3, JPEG, streaming video) develop later and less efficiently.",delay:"~15 years",severity:"high",icon:"ðŸ’¾"},
      {event:"Cryptography less rigorous",consequence:"Shannon also laid foundations for modern cryptography. Without his work on information-theoretic security, encryption develops from different mathematical foundations.",delay:"~10 years",severity:"medium",icon:"ðŸ”"},
      {event:"Same digital revolution, later and less efficient",consequence:"Digital technology was coming â€” transistors, integrated circuits, computers. But without Shannon's theoretical framework, engineers don't know the limits of what's possible. Development is slower and wastes more bandwidth.",delay:"~15 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Your phone, WiFi, streaming video, file compression â€” all built on Shannon's information theory. Without it, these technologies arrive later and work less efficiently.",
      tech:"The internet still exists but develops 10-15 years later. Data compression is less effective. Cell phone technology is delayed.",
      culture:"No difference in culture per se, but the digital revolution that transformed culture arrives later.",
      politics:"A delayed digital revolution means the internet-driven political changes of the 2000s-2010s happen later."
    }
  },
  hopper: {
    cascade:[
      {event:"No COBOL, no compiler concept (1950s-60s)",consequence:"Grace Hopper developed the first compiler (translating human-readable code to machine code) and co-created COBOL. Without her, compilers are invented by others within a few years, and COBOL has a different name.",delay:"~3-5 years",severity:"medium",icon:"ðŸ’»"},
      {event:"Programming languages still develop",consequence:"Fortran (Backus) was contemporaneous. The concept of higher-level programming languages was emerging from multiple directions. Hopper accelerated it but didn't uniquely cause it.",delay:"~3-5 years",severity:"medium",icon:"ðŸ“"},
      {event:"Business computing slightly delayed",consequence:"COBOL became the dominant language for business computing. Without it, Fortran or another language fills this role, possibly less suited to business applications.",delay:"~5 years",severity:"medium",icon:"ðŸ¢"},
      {event:"Same computing revolution",consequence:"Compilers, high-level languages, and business computing were all inevitable given the hardware trajectory. Hopper's contributions accelerated development by a few years.",delay:"~5 years",severity:"low",icon:"ðŸŒ"},
      {event:"'Debugging' term might be different",consequence:"Hopper popularized 'debugging' after finding an actual moth in a computer. The term might have a different origin.",delay:"Cultural",severity:"low",icon:"ðŸ›"}
    ],
    modernDay:{
      daily:"Banking systems still run on COBOL (or its equivalent). Your daily transactions are processed the same way.",
      tech:"Same computing technology, arrived 3-5 years later in some areas.",
      culture:"Women in computing lose a key pioneer figure. The story of the Navy admiral who invented modern programming is absent.",
      politics:"No meaningful difference."
    }
  },
  torvalds: {
    cascade:[
      {event:"No Linux kernel (1991)",consequence:"Torvalds created Linux as a hobby project. Without him, the open-source operating system space is dominated by BSD variants (FreeBSD, OpenBSD). The free OS exists, just under a different banner.",delay:"~3-5 years",severity:"high",icon:"ðŸ§"},
      {event:"Open source movement has different flagship",consequence:"Linux became the symbol of open-source development. Without it, BSD or GNU Hurd fills this role, but with a different community culture and development model.",delay:"~5 years",severity:"medium",icon:"ðŸ’»"},
      {event:"Android built on different kernel",consequence:"Android runs on Linux. Without it, Google builds Android on BSD or develops a custom kernel. Mobile computing still happens but with different technical foundations.",delay:"~15 years",severity:"medium",icon:"ðŸ“±"},
      {event:"Cloud computing still dominates",consequence:"Most cloud servers run Linux. Without it, they run BSD or a commercial Unix variant. The functionality is similar but the economics might differ.",delay:"~20 years",severity:"medium",icon:"â˜ï¸"},
      {event:"Same open-source revolution",consequence:"The desire for free, open-source software was strong â€” Stallman's GNU project predated Linux. Without Torvalds, the movement still succeeds, just with a different kernel.",delay:"~5 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Your Android phone runs on Linux. Most websites you visit are served by Linux. Without Torvalds, they'd run on BSD â€” functionally similar but with a different development ecosystem.",
      tech:"Cloud computing, Android, and server infrastructure work the same way, built on a different but equivalent open-source kernel.",
      culture:"The open-source community has a different culture hero. Git (also created by Torvalds) might not exist â€” version control develops differently.",
      politics:"No meaningful difference."
    }
  },
  page_brin: {
    cascade:[
      {event:"No Google (1998)",consequence:"Page and Brin's PageRank algorithm â€” ranking web pages by incoming links â€” was the breakthrough. Without them, other search engines (AltaVista, Yahoo) evolve, but the quality gap takes years to close.",delay:"~3-5 years",severity:"high",icon:"ðŸ”"},
      {event:"Web search less effective for years",consequence:"Pre-Google search was bad â€” keyword stuffing, irrelevant results. Without PageRank, better search arrives eventually (someone would have had the insight), but the web is harder to navigate for 3-5 years.",delay:"~3-5 years",severity:"high",icon:"ðŸŒ"},
      {event:"No Google advertising model (as early)",consequence:"Google's AdWords â€” selling ads against search intent â€” created the business model that funds the modern internet. Without it, online advertising develops from banner ads, which are less effective and profitable.",delay:"~5 years",severity:"high",icon:"ðŸ’°"},
      {event:"No YouTube, Gmail, Android (under Google)",consequence:"Google acquired and developed these platforms. Without Google's capital, YouTube might remain independent (or fail), Gmail doesn't exist, and Android is developed by someone else.",delay:"~8 years",severity:"high",icon:"ðŸ“±"},
      {event:"Same internet, different gatekeepers",consequence:"The internet was growing explosively. Without Google, another company â€” maybe Yahoo, maybe Microsoft â€” becomes the dominant gateway. The concentration of power happens regardless.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"You probably use Google dozens of times a day â€” search, Gmail, YouTube, Android, Maps. Without Page and Brin, equivalent services exist but under different brands and possibly with worse search quality.",
      tech:"The internet develops similarly. Search improves regardless. But the specific ad-funded model that makes most internet services free might develop later.",
      culture:"'Google it' doesn't enter the language. The company that defines the internet age has a different name.",
      politics:"A different company holds Google's current power. The antitrust debates, privacy concerns, and political influence are similar but attached to a different entity."
    }
  },
  cerf_kahn: {
    cascade:[
      {event:"No TCP/IP protocol (1974)",consequence:"Cerf and Kahn designed the protocol that allows different computer networks to communicate â€” the foundation of the internet. Without them, a different networking protocol wins. ARPANET still exists but interconnection takes longer.",delay:"~5-10 years",severity:"high",icon:"ðŸŒ"},
      {event:"Internet architecture different",consequence:"TCP/IP's specific design choices â€” packet switching, end-to-end principle, decentralized architecture â€” shaped everything. A different protocol might be more centralized or less resilient.",delay:"~10 years",severity:"high",icon:"ðŸ“¡"},
      {event:"Other networking protocols fill the gap",consequence:"OSI, DECnet, and other protocols were competing. Without TCP/IP, one of these becomes standard. The internet still emerges, but possibly with a different architecture.",delay:"~5-10 years",severity:"medium",icon:"ðŸ’»"},
      {event:"Same global network eventually",consequence:"The demand for interconnected computers was overwhelming. A global network was inevitable. The specific design â€” open, decentralized, resilient â€” might differ.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Internet possibly more controlled",consequence:"TCP/IP's open, decentralized design made censorship difficult. An alternative protocol â€” especially if designed by a government or corporation â€” might be more controllable.",delay:"~15 years",severity:"medium",icon:"ðŸ”’"}
    ],
    modernDay:{
      daily:"You still have an internet. But its architecture might be different â€” possibly more centralized, possibly less resilient, possibly easier for governments to control.",
      tech:"A global computer network exists regardless. The specific protocol details matter for performance and architecture but not for the network's existence.",
      culture:"The internet's culture of openness â€” which derives partly from TCP/IP's decentralized design â€” might be different.",
      politics:"If the internet is more centralized, government censorship and control are easier. The internet freedom debates of the 2010s-20s might look very different."
    }
  },
  altman: {
    cascade:[
      {event:"No Sam Altman leading OpenAI (2019-present)",consequence:"OpenAI was founded by others (Musk, Brockman, Sutskever). Without Altman's leadership, the organization takes a different strategic direction â€” possibly staying nonprofit, possibly moving slower.",delay:"~2-3 years",severity:"high",icon:"ðŸ¤–"},
      {event:"GPT development continues",consequence:"The transformer architecture (Google) and scaling laws were discovered independently. Large language models were coming regardless. But OpenAI's specific push â€” GPT-3, ChatGPT â€” might be delayed or done by Google/DeepMind first.",delay:"~1-3 years",severity:"high",icon:"ðŸ§ "},
      {event:"ChatGPT moment happens differently",consequence:"The November 2022 ChatGPT launch was a cultural inflection point. Without it, the public discovers AI chatbots from Google's Bard or another product â€” possibly later, possibly with less impact.",delay:"~1-2 years",severity:"medium",icon:"ðŸ’¬"},
      {event:"AI race still accelerates",consequence:"Google, Meta, Anthropic, and others were all pursuing large language models. The AI race was happening. Altman's contribution was making it public, accessible, and culturally central earlier.",delay:"~2 years",severity:"medium",icon:"ðŸƒ"},
      {event:"Same AI revolution, different timeline and leader",consequence:"Artificial general intelligence research continues regardless. The specific company that leads, and the specific public narrative, are different.",delay:"~3 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"You still have AI assistants. The technology was coming from multiple companies. But the specific ChatGPT moment â€” and the cultural shift it caused â€” happens later or through a different product.",
      tech:"Same underlying AI technology. Transformers, scaling laws, and compute trends were independent of any one leader.",
      culture:"The public conversation about AI â€” its promises and dangers â€” is delayed by 1-3 years or framed differently.",
      politics:"AI regulation debates happen on a slightly different timeline. The specific political dynamics around OpenAI don't exist."
    }
  },
  adamsmith: {
    cascade:[
      {event:"No Wealth of Nations (1776)",consequence:"Smith's systematic argument for free markets, division of labor, and the 'invisible hand' doesn't exist. The ideas were emerging â€” Hume, the Physiocrats â€” but lack Smith's comprehensive synthesis.",delay:"~20 years",severity:"high",icon:"ðŸ“–"},
      {event:"Free market economics develops more slowly",consequence:"Without Smith's intellectual ammunition, the case for free trade and deregulation is weaker in the late 1700s. Mercantilist policies persist longer.",delay:"~20 years",severity:"high",icon:"ðŸ’°"},
      {event:"Industrial Revolution still happens",consequence:"The Industrial Revolution was driven by technology, coal, and capital â€” not by economic theory. But Smith's arguments helped remove regulatory obstacles and justify laissez-faire policies that accelerated industrialization.",delay:"~10 years",severity:"medium",icon:"ðŸ­"},
      {event:"Economics as a discipline delayed",consequence:"Smith is the founder of economics as a systematic field. Without him, economics develops from Ricardo, Malthus, and others â€” but the founding text is different.",delay:"~20 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Same capitalism, different intellectual justification",consequence:"Market economies were developing from material forces â€” trade, technology, colonialism. Smith provided the theory. Without him, capitalism has a different intellectual framework.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Market economies exist regardless of whether one Scottish philosopher wrote about them.",
      tech:"No difference.",
      culture:"Economics departments teach from a different founding text. The 'invisible hand' metaphor â€” one of the most cited concepts in economics â€” doesn't exist.",
      politics:"Free-market advocacy has different intellectual foundations. The libertarian tradition cites different authorities. But market economies still dominate."
    }
  },
  keynes: {
    cascade:[
      {event:"No General Theory (1936)",consequence:"Keynes's argument that governments should spend during recessions â€” deficit spending to stimulate demand â€” doesn't exist in its specific form. The idea that demand, not supply, drives the economy is less clearly articulated.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Great Depression response different",consequence:"FDR's New Deal was already underway, but Keynesian theory provided intellectual justification and a framework. Without Keynes, fiscal stimulus is less systematic and less theoretically grounded.",delay:"~5 years",severity:"high",icon:"ðŸ’°"},
      {event:"Postwar economic management different",consequence:"The Keynesian consensus (1945-1970s) â€” governments managing demand through fiscal and monetary policy â€” doesn't exist in its specific form. Postwar economics might be more laissez-faire or more socialist.",delay:"~10 years",severity:"high",icon:"ðŸ›ï¸"},
      {event:"Bretton Woods system different",consequence:"Keynes was central to designing the postwar international monetary system. Without him, Bretton Woods either doesn't happen or takes a different form â€” possibly more American-dominated.",delay:"~8 years",severity:"high",icon:"ðŸŒ"},
      {event:"Same economic debates, different framework",consequence:"The tension between government intervention and free markets is eternal. Without Keynes, this debate has different vocabulary and different analytical tools.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Government stimulus during recessions â€” which affects your job, your taxes, your savings â€” is justified by Keynesian economics. Without Keynes, the 2008 and 2020 stimulus packages might not have happened as quickly.",
      tech:"No difference.",
      culture:"Economics education is completely different. The Keynesian-monetarist debate that defines macroeconomics doesn't exist in its current form.",
      politics:"Government responses to recessions are less aggressive. The 2008 financial crisis and COVID-19 responses might involve less spending. The economic consequences could be severe."
    }
  },
  jpmorgan: {
    cascade:[
      {event:"No J.P. Morgan organizing American finance (1870s-1913)",consequence:"Morgan personally organized the consolidation of American industry â€” railroads, steel (US Steel), electricity (GE). Without him, this consolidation happens more slowly and chaotically.",delay:"~10 years",severity:"high",icon:"ðŸ¦"},
      {event:"1907 Panic worse without Morgan's intervention",consequence:"Morgan personally organized a private bailout that stopped the Panic of 1907. Without him, the panic might have become a full depression, 20 years before the actual Great Depression.",delay:"Immediate",severity:"high",icon:"ðŸ’°"},
      {event:"Federal Reserve created differently",consequence:"The Fed was created partly in response to the 1907 Panic and the realization that one man shouldn't have that much power. Without Morgan (and the 1907 crisis), the Fed might be created later or with a different mandate.",delay:"~6 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"American industrial consolidation still happens",consequence:"The economic logic of consolidation â€” economies of scale, reduced competition â€” was irresistible. Without Morgan, other bankers (Rockefeller, Carnegie acting independently) drive consolidation.",delay:"~10 years",severity:"medium",icon:"ðŸ­"},
      {event:"Same American capitalism, less organized",consequence:"The specific structure of American finance â€” the investment bank model, the interconnection of banking and industry â€” has different origins. American capitalism is more chaotic without Morgan's organizing hand.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"JPMorgan Chase is still one of the world's largest banks. Without Morgan, a different bank fills this role. The financial system looks similar.",
      tech:"No difference.",
      culture:"Wall Street's founding mythology is different. The image of the powerful banker who can single-handedly stop a financial panic is absent.",
      politics:"The Federal Reserve might have a different origin story and possibly different structure. Anti-trust politics in the early 1900s has different targets."
    }
  },
  mansamusa: {
    cascade:[
      {event:"No Mansa Musa's hajj (1324)",consequence:"Musa's pilgrimage to Mecca â€” distributing so much gold that he crashed the Egyptian economy for a decade â€” was the event that put Mali on the European map. Without it, West Africa is less visible to the wider world.",delay:"Immediate",severity:"medium",icon:"ðŸ‘‘"},
      {event:"Mali Empire still exists",consequence:"The Mali Empire was powerful before Musa and continued after him. His pilgrimage was spectacular but wasn't what made the empire work. The gold trade, the scholarship at Timbuktu â€” these continue.",delay:"~10 years",severity:"low",icon:"ðŸ›ï¸"},
      {event:"European knowledge of West African wealth delayed",consequence:"The Catalan Atlas (1375) depicted Musa holding gold. Without his hajj, European maps of Africa show less detail about West African kingdoms.",delay:"~50 years",severity:"medium",icon:"ðŸ—ºï¸"},
      {event:"Same trans-Saharan trade",consequence:"The gold and salt trade across the Sahara predated Musa and continued after him. The economic reality of West African wealth was structural, not dependent on one ruler's pilgrimage.",delay:"~20 years",severity:"low",icon:"ðŸ’°"},
      {event:"Same European exploration of Africa",consequence:"Portuguese exploration of West Africa was driven by economic incentive and navigational technology. The legends of African gold helped, but weren't the primary driver.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"The claim that the richest person in history was a Black African ruler â€” which Mansa Musa stories assert â€” is absent from popular culture. The narrative of African civilization before colonialism loses its most vivid example.",
      politics:"Arguments against Afrocentric revisionism or for it both lose a key reference point. The story of pre-colonial African wealth has a different flagship figure."
    }
  },
  yunus: {
    cascade:[
      {event:"No Grameen Bank (1983)",consequence:"Muhammad Yunus pioneered microfinance â€” lending tiny amounts to the poorest people, especially women, without collateral. Without him, microfinance develops from other NGO experiments, but more slowly.",delay:"~10 years",severity:"medium",icon:"ðŸ¦"},
      {event:"Microfinance movement delayed",consequence:"The concept of lending to the poor existed before Yunus (credit cooperatives, rotating savings groups). But Grameen's specific model â€” group lending, targeting women, scaling systematically â€” was Yunus's innovation.",delay:"~10 years",severity:"medium",icon:"ðŸ’°"},
      {event:"Same poverty reduction from other causes",consequence:"Poverty in Bangladesh and globally has declined primarily due to economic growth, trade, and technology â€” not microfinance. Yunus's contribution was important but not the main driver.",delay:"~10 years",severity:"low",icon:"ðŸ“ˆ"},
      {event:"Microfinance criticism still arrives",consequence:"The backlash against microfinance â€” debt traps, over-lending, insufficient impact â€” would apply to any similar model. The critique is about the approach, not the person.",delay:"~20 years",severity:"low",icon:"âš ï¸"},
      {event:"Same development economics",consequence:"The field of development economics was evolving toward evidence-based approaches (Banerjee, Duflo) regardless. Microfinance was one tool, not the defining one.",delay:"~20 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If you're in a developing country and have access to microloans, Yunus's model matters. For most people, no difference.",
      tech:"Mobile banking in developing countries evolved from multiple sources, not just microfinance.",
      culture:"The narrative of 'banking for the poor' has a different origin story. The Nobel Peace Prize for economics (2006) goes to someone else.",
      politics:"Development policy is slightly less focused on microfinance as a silver bullet. The hype-and-backlash cycle around microfinance has a different timeline."
    }
  },
  buffett: {
    cascade:[
      {event:"No Warren Buffett as investment oracle (1960s-present)",consequence:"Berkshire Hathaway exists but under different management. Value investing â€” buying undervalued companies â€” was Graham and Dodd's idea (1934). Buffett popularized it but didn't invent it.",delay:"N/A",severity:"medium",icon:"ðŸ“ˆ"},
      {event:"Value investing still practiced",consequence:"Graham's Security Analysis and The Intelligent Investor would still be the foundational texts. Other practitioners â€” Munger, Templeton, Lynch â€” still demonstrate value investing's effectiveness.",delay:"~5 years",severity:"low",icon:"ðŸ’°"},
      {event:"Investment philosophy less populist",consequence:"Buffett made investing accessible through folksy wisdom and annual letters. Without him, value investing remains more academic, less culturally prominent.",delay:"~20 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Same stock market dynamics",consequence:"Markets are driven by aggregate behavior of millions of participants, not one investor. Buffett's individual investments moved stocks, but the market itself is unchanged.",delay:"N/A",severity:"low",icon:"ðŸ“Š"},
      {event:"Philanthropy pledge has different champion",consequence:"The Giving Pledge â€” billionaires committing to give away most of their wealth â€” was co-founded by Buffett and Gates. Without Buffett, the movement is smaller or different.",delay:"~40 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in your daily life. The stock market functions identically.",
      tech:"No difference.",
      culture:"The 'Oracle of Omaha' archetype â€” the folksy billionaire who lives modestly and gives wise advice â€” doesn't exist. Investment culture is less populist.",
      politics:"The Giving Pledge is weaker. Debates about billionaire philanthropy versus taxation have different protagonists."
    }
  },
  bezos: {
    cascade:[
      {event:"No Amazon (1994)",consequence:"Online retail was coming â€” eBay, other e-commerce startups were proliferating. Without Bezos, the dominant online retailer might be a different company, or physical retail might have adapted faster.",delay:"~3-5 years",severity:"high",icon:"ðŸ“¦"},
      {event:"E-commerce still dominates",consequence:"The internet was making online shopping inevitable. Without Amazon, Walmart.com, eBay, or another startup fills the gap. The consumer experience might be different but online retail still wins.",delay:"~5 years",severity:"medium",icon:"ðŸ›’"},
      {event:"No AWS (or later)",consequence:"Amazon Web Services â€” the cloud computing platform â€” was Bezos's most consequential innovation. Without it, cloud computing develops from Google, Microsoft, or IBM, but possibly 3-5 years later.",delay:"~3-5 years",severity:"high",icon:"â˜ï¸"},
      {event:"Cloud computing still arrives",consequence:"The economics of shared computing infrastructure were too compelling to miss. AWS arrived first, but Google Cloud and Azure were close behind. Without AWS, one of them leads.",delay:"~5 years",severity:"medium",icon:"ðŸ’»"},
      {event:"Same digital economy, different king",consequence:"The shift from physical to digital retail, and from on-premises to cloud computing, were structural trends. Bezos rode them brilliantly, but they were coming regardless.",delay:"~5 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"You still shop online. Packages still arrive quickly. But the dominant retailer has a different name, and the delivery network might be less efficient.",
      tech:"Cloud computing exists but might be 3-5 years behind current state. Many startups that relied on AWS might have developed differently.",
      culture:"The 'everything store' concept and Prime membership model might not exist. The specific labor practices and debates around Amazon are attached to a different company.",
      politics:"Antitrust debates about retail dominance target a different company. Space tourism (Blue Origin) has a different billionaire backer."
    }
  },
  zuckerberg: {
    cascade:[
      {event:"No Facebook (2004)",consequence:"Social networking was exploding â€” MySpace, Friendster, Hi5. Without Zuckerberg, a different platform dominates. The specific Facebook model (real names, college networks, News Feed) might not exist.",delay:"~2-3 years",severity:"high",icon:"ðŸ“±"},
      {event:"Social media still dominates",consequence:"The human desire for connection and sharing, combined with internet technology, made social media inevitable. Without Facebook, MySpace evolves further, or a different startup fills the gap.",delay:"~3 years",severity:"medium",icon:"ðŸŒ"},
      {event:"No Instagram or WhatsApp (under Facebook)",consequence:"These platforms were independent â€” Facebook acquired them. Without Facebook's money, they might remain independent, fail, or be acquired by Google or another tech giant.",delay:"~8 years",severity:"medium",icon:"ðŸ“¸"},
      {event:"2016 election dynamics different",consequence:"Facebook's role in political advertising, misinformation, and the Cambridge Analytica scandal was platform-specific. A different social network might have had different policies.",delay:"~12 years",severity:"medium",icon:"ðŸ—³ï¸"},
      {event:"Same social media problems, different platform",consequence:"Filter bubbles, misinformation, addiction, privacy erosion â€” these are structural features of ad-funded social media, not specific to Facebook. Any dominant platform faces the same issues.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"You still use social media. The specific platforms might be different â€” MySpace might have evolved, or a different startup might dominate. The experience is similar.",
      tech:"Social media technology is the same. The ad-funded model develops regardless.",
      culture:"No 'Facebook' in the cultural vocabulary. 'The Social Network' movie doesn't exist. But social media culture â€” selfies, sharing, online identity â€” develops similarly.",
      politics:"The specific Cambridge Analytica scandal doesn't happen. But social media's impact on politics â€” polarization, misinformation, microtargeting â€” comes from whatever platform dominates."
    }
  },
  musk: {
    cascade:[
      {event:"No Tesla as market force (2008-present)",consequence:"Electric vehicles were coming â€” battery technology and climate pressure demanded it. Without Tesla, established automakers (GM, Nissan, BMW) lead the EV transition, but 5-10 years later.",delay:"~5-10 years",severity:"high",icon:"ðŸš—"},
      {event:"SpaceX reusable rockets delayed",consequence:"Musk's insistence on reusable rockets â€” landing boosters on drone ships â€” reduced launch costs by ~90%. Without SpaceX, this innovation comes eventually, but later. ULA and Arianespace dominate longer.",delay:"~5-10 years",severity:"high",icon:"ðŸš€"},
      {event:"Commercial space industry slower to develop",consequence:"SpaceX demonstrated that private companies could compete with government agencies. Without this proof of concept, the commercial space industry develops more slowly from Blue Origin and ULA.",delay:"~10 years",severity:"medium",icon:"ðŸ›°ï¸"},
      {event:"EV adoption still inevitable",consequence:"Climate regulations, battery cost curves, and consumer demand were driving EV adoption. Tesla accelerated the timeline. Without it, EVs still win â€” just later.",delay:"~10 years",severity:"medium",icon:"âš¡"},
      {event:"Same technological trajectory, different pace",consequence:"Electric vehicles and reusable rockets were both technically feasible and economically logical. Musk's contribution was pushing both harder and faster than incumbents would have.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"You might still be driving a gas car if Tesla hadn't forced the EV transition. Established automakers have admitted Tesla pushed them to electrify faster.",
      tech:"Space launch costs are higher. Satellite internet (Starlink) doesn't exist yet. EV infrastructure is less developed.",
      culture:"The 'tech billionaire as real-life Iron Man' archetype is attached to a different figure or doesn't exist. The cultural narrative around entrepreneurship is different.",
      politics:"Climate policy debates are slightly different without Tesla proving EVs are commercially viable. Space policy is more government-dominated."
    }
  },
  ricardo: {
    cascade:[
      {event:"No comparative advantage theory (1817)",consequence:"Ricardo's insight that countries benefit from trade even when one country is more efficient at everything was counterintuitive and revolutionary. Without it, free trade arguments are weaker.",delay:"~20 years",severity:"high",icon:"ðŸ“–"},
      {event:"Free trade ideology less dominant",consequence:"Without the theory of comparative advantage, protectionism has stronger intellectual backing. The 19th-century move toward free trade is slower.",delay:"~20 years",severity:"medium",icon:"ðŸ’°"},
      {event:"Trade theory still develops",consequence:"The benefits of trade were being demonstrated empirically. Other economists â€” Mill, Say â€” would have built trade theory. But Ricardo's specific, elegant proof is absent.",delay:"~20 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Same globalization from technology",consequence:"Steamships, telegraphs, and railroads drove trade expansion regardless of economic theory. Ricardo's contribution was justifying what was already happening.",delay:"~30 years",severity:"low",icon:"ðŸš¢"},
      {event:"Same modern trade",consequence:"Global trade exists regardless. The WTO, trade agreements, and supply chains are driven by economic incentives, not by one economist's theory.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Global trade exists for practical reasons, not because of Ricardo's theory.",
      tech:"No difference.",
      culture:"Economics education is different â€” comparative advantage is the first thing taught in trade theory.",
      politics:"Free trade arguments are slightly weaker intellectually. Protectionist policies might have more academic support."
    }
  },
  schumpeter: {
    cascade:[
      {event:"No 'creative destruction' concept (1942)",consequence:"Schumpeter's insight that capitalism progresses by destroying old industries and creating new ones â€” creative destruction â€” doesn't exist as a named concept. The process still happens, but we describe it differently.",delay:"Immediate",severity:"medium",icon:"ðŸ“–"},
      {event:"Entrepreneurship theory weaker",consequence:"Schumpeter put the entrepreneur at the center of economic change. Without him, economic theory focuses more on firms and markets (mainstream economics) or on class struggle (Marxism).",delay:"~20 years",severity:"medium",icon:"ðŸ’¡"},
      {event:"Innovation economics develops differently",consequence:"The study of how innovation drives economic growth â€” which Schumpeter founded â€” develops later from growth theory (Solow, Romer) without Schumpeter's specific framework.",delay:"~30 years",severity:"medium",icon:"ðŸ“ˆ"},
      {event:"Same economic dynamics",consequence:"Industries still rise and fall. Entrepreneurs still disrupt incumbents. The economic reality doesn't change â€” just the language we use to describe it.",delay:"N/A",severity:"low",icon:"ðŸ”„"},
      {event:"Silicon Valley ideology has different roots",consequence:"The tech industry's embrace of 'disruption' â€” consciously or not â€” comes from Schumpeter. Without him, tech still disrupts, but the intellectual framework justifying it is different.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Companies still rise and fall, industries still get disrupted.",
      tech:"Same technology. Innovation doesn't depend on economic theory.",
      culture:"The word 'disruption' might not carry its current cultural weight. Silicon Valley's self-mythology â€” 'we're creatively destroying the old economy' â€” has different intellectual roots.",
      politics:"Economic policy debates about innovation, monopoly, and industrial change use different vocabulary."
    }
  },
  hayek: {
    cascade:[
      {event:"No Road to Serfdom (1944)",consequence:"Hayek's argument that central planning inevitably leads to tyranny doesn't exist. The intellectual case against socialism is weaker â€” relying more on Mises's economic arguments and less on political ones.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Postwar consensus more socialist",consequence:"Without Hayek's warning, Western democracies might have embraced more central planning after WWII. The Attlee government in Britain and New Deal in America might have gone further.",delay:"~5 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Thatcher and Reagan revolution weaker",consequence:"Both Thatcher and Reagan cited Hayek as a primary intellectual influence. Without his ideas, the neoliberal revolution of the 1980s has different philosophical foundations â€” possibly monetarism alone.",delay:"~35 years",severity:"medium",icon:"ðŸ“‰"},
      {event:"Same free-market economics",consequence:"Milton Friedman, the Chicago School, and practical failures of central planning would have discredited socialism anyway. Hayek's unique contribution was the political argument â€” planning leads to tyranny.",delay:"~20 years",severity:"medium",icon:"ðŸ’°"},
      {event:"Same market economies dominate",consequence:"The collapse of the Soviet Union proved Hayek right empirically. Markets won not because of his arguments but because they worked better.",delay:"~45 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No meaningful difference. Market economies dominate regardless.",
      tech:"No difference.",
      culture:"The libertarian intellectual tradition has different roots. The specific argument that planning leads to tyranny â€” as distinct from 'planning is inefficient' â€” is less prominent.",
      politics:"The 1980s neoliberal revolution might have been less ideologically confident. Privatization and deregulation still happen but with different intellectual justification."
    }
  },
  columbus: {
    cascade:[
      {event:"No Columbus voyage (1492)",consequence:"Europeans were pushing into the Atlantic â€” Portuguese exploration was advancing rapidly. Without Columbus, Europeans reach the Americas within 10-20 years through continued Portuguese expansion or English/French ventures.",delay:"~10-20 years",severity:"high",icon:"â›µ"},
      {event:"Spanish colonization delayed",consequence:"Spain doesn't get a head start in the Americas. Portugal, England, or France might colonize the Caribbean and Central America first. The specific colonial map is different.",delay:"~20 years",severity:"high",icon:"ðŸ‡ªðŸ‡¸"},
      {event:"Indigenous peoples get more time",consequence:"Even 10-20 more years gives Native American civilizations more time â€” though European diseases would still be devastating whenever contact came.",delay:"~10-20 years",severity:"high",icon:"ðŸŒŽ"},
      {event:"Same colonization, same devastation",consequence:"European technology, disease, and imperial ambition were going to reach the Americas. Columbus accelerated the timeline but didn't cause the underlying dynamic.",delay:"~20 years",severity:"medium",icon:"âš”ï¸"},
      {event:"Same modern Americas",consequence:"The Americas are still colonized by Europeans. The specific colonial powers and borders might differ â€” more Portuguese, less Spanish â€” but the broad outcome is similar.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"The Americas are still colonized. You still live in a post-colonial society. But specific borders, languages, and cultural mixes might differ.",
      tech:"No difference.",
      culture:"Columbus Day doesn't exist. The discovery narrative has a different protagonist. Latin America might be more Portuguese-influenced and less Spanish.",
      politics:"If a different European power colonizes first, the political map of the Americas is different. Brazil might be larger. Spanish-speaking countries might have different boundaries."
    }
  },
  armstrong: {
    cascade:[
      {event:"No first Moon landing (July 1969)",consequence:"Apollo 11 was a team effort. Without Armstrong specifically, Aldrin or another astronaut makes the first step. The landing happens on the same timeline.",delay:"~0 months",severity:"low",icon:"ðŸŒ™"},
      {event:"Same space race outcome",consequence:"The Moon landing was a national project involving 400,000 people. No single astronaut was the deciding factor. The mission succeeds with a different crew.",delay:"~0 months",severity:"low",icon:"ðŸš€"},
      {event:"Different 'first words on the Moon'",consequence:"'One small step for man, one giant leap for mankind' doesn't exist. A different astronaut says something different. The cultural moment is the same; the quote is different.",delay:"Immediate",severity:"low",icon:"ðŸ’¬"},
      {event:"Same Cold War dynamics",consequence:"The geopolitical impact of the Moon landing â€” proving American technological superiority â€” is identical regardless of which astronaut steps out first.",delay:"~0",severity:"low",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"Same space history",consequence:"Armstrong's modesty and reluctance to capitalize on fame made him a specific kind of hero. A different astronaut might have been more public, changing the narrative slightly.",delay:"Cultural",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference whatsoever. The Moon landing still happens on the same day.",
      tech:"Identical.",
      culture:"A different name is the most famous astronaut. The 'first man on the Moon' story has a different protagonist but the same plot.",
      politics:"No difference."
    }
  },
  humboldt: {
    cascade:[
      {event:"No Humboldt's scientific expeditions (1799-1804)",consequence:"Humboldt's five-year expedition to South America produced the first holistic description of nature as interconnected systems â€” climate, plants, geology, and human culture as a single web.",delay:"Immediate",severity:"high",icon:"ðŸŒ¿"},
      {event:"Ecology as a concept delayed",consequence:"Humboldt essentially invented the idea that nature is an interconnected system. Without him, ecology develops later from Darwin, Haeckel, and others â€” but the systems perspective takes longer.",delay:"~30 years",severity:"high",icon:"ðŸŒ"},
      {event:"Darwin's voyage less informed",consequence:"Darwin read Humboldt before the Beagle voyage and called him 'the greatest scientific traveller who ever lived.' Without Humboldt's example and observations, Darwin's own expedition is different.",delay:"~30 years",severity:"medium",icon:"ðŸš¢"},
      {event:"Environmental movement has different roots",consequence:"Humboldt was the first scientist to warn about human-caused climate change (1800!). Without his observations of deforestation and its effects, environmental science develops from different foundations.",delay:"~150 years",severity:"medium",icon:"ðŸŒ¡ï¸"},
      {event:"Same environmental science eventually",consequence:"The observations Humboldt made would have been made by others. But his specific synthesis â€” seeing nature as an interconnected whole â€” was ahead of its time.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No direct difference, but the ecological worldview â€” that everything in nature is connected â€” comes to us partly through Humboldt.",
      tech:"No difference.",
      culture:"The Humboldt Current, Humboldt County, Humboldt University â€” all named differently. The idea of the scientist as adventurer-explorer is less vivid.",
      politics:"The intellectual foundations of environmentalism have different roots. The specific argument that human activity causes climate change was made by Humboldt in 1800."
    }
  },
  gagarin: {
    cascade:[
      {event:"No Gagarin as first human in space (1961)",consequence:"The Soviet space program would have sent another cosmonaut â€” possibly Titov, who was the backup. The mission happens on the same timeline.",delay:"~0 months",severity:"low",icon:"ðŸš€"},
      {event:"Same space race dynamics",consequence:"The fact that a Soviet cosmonaut reached space first â€” not which Soviet cosmonaut â€” drove the American response. Kennedy's Moon pledge happens regardless.",delay:"~0",severity:"low",icon:"ðŸŒ™"},
      {event:"Different cultural icon",consequence:"Gagarin became a global celebrity and Cold War symbol. A different cosmonaut fills this role. The cultural moment is identical; the face is different.",delay:"Immediate",severity:"low",icon:"â­"},
      {event:"Same Cold War competition",consequence:"The space race was driven by geopolitics and technology, not by individual astronauts or cosmonauts.",delay:"~0",severity:"low",icon:"â˜¢ï¸"},
      {event:"Same space history",consequence:"Human spaceflight follows the same trajectory. The replacement cosmonaut might have lived longer (Gagarin died in a 1968 plane crash), giving the Soviet program a different public face.",delay:"Cultural",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. The space race unfolds identically.",
      tech:"Identical.",
      culture:"A different Russian name is attached to 'first human in space.' Yuri's Night has a different name.",
      politics:"No difference."
    }
  },
  magellan: {
    cascade:[
      {event:"No Magellan circumnavigation (1519-22)",consequence:"Magellan's expedition proved the Earth could be circumnavigated and that the Pacific Ocean existed at its actual immense scale. Without him, the Spanish send another expedition within 5-10 years.",delay:"~5-10 years",severity:"medium",icon:"â›µ"},
      {event:"Pacific Ocean still discovered by Europeans",consequence:"Balboa had already sighted the Pacific (1513). Magellan showed how to get there by sea. Without him, the route is found by another Spanish or Portuguese expedition.",delay:"~5-10 years",severity:"medium",icon:"ðŸŒŠ"},
      {event:"Spanish colonization of Philippines delayed",consequence:"Magellan's expedition reached the Philippines. Without it, Spanish presence in Southeast Asia comes later, possibly after Portuguese or Chinese influence is stronger.",delay:"~10-20 years",severity:"medium",icon:"ðŸ‡µðŸ‡­"},
      {event:"Same global trade eventually",consequence:"The Spice Islands, the Pacific trade routes, and global commerce were going to be connected. Magellan accelerated the timeline.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Same globalization",consequence:"European maritime expansion was relentless. Without Magellan, the Pacific is crossed by Europeans within a decade. The global trading system develops on a slightly delayed timeline.",delay:"~10 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Global trade exists regardless.",
      tech:"No difference.",
      culture:"The Philippines might have a different colonial history. The Strait of Magellan has a different name.",
      politics:"If the Philippines was colonized by Portugal instead of Spain, its culture, religion, and political development are different."
    }
  },
  cook: {
    cascade:[
      {event:"No Cook's Pacific voyages (1768-79)",consequence:"Cook mapped the Pacific â€” New Zealand, eastern Australia, Hawaii, the Antarctic coast. Without him, European mapping of the Pacific takes another 10-20 years.",delay:"~10-20 years",severity:"high",icon:"â›µ"},
      {event:"British colonization of Australia delayed",consequence:"Cook claimed eastern Australia for Britain. Without him, the French (La PÃ©rouse) or Dutch might have colonized it instead. Or Britain arrives later through a different route.",delay:"~10-20 years",severity:"high",icon:"ðŸ‡¦ðŸ‡º"},
      {event:"Pacific Islanders get more time",consequence:"Cook's visits to Hawaii and other Pacific islands began the process of European disruption â€” disease, trade, missionaries. A delay gives indigenous societies more time.",delay:"~10-20 years",severity:"medium",icon:"ðŸï¸"},
      {event:"Same European colonization of Pacific",consequence:"European technology and imperial ambition guaranteed the Pacific would be mapped and colonized. Cook accelerated the process but didn't cause it.",delay:"~20 years",severity:"medium",icon:"ðŸŒŠ"},
      {event:"Australia might be French",consequence:"The most consequential counterfactual: if France colonizes Australia first, the continent's language, legal system, and culture are completely different.",delay:"~20 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If Australia was colonized by France, millions of people speak French instead of English. Australian culture is completely different.",
      tech:"No difference.",
      culture:"If Australia is French-speaking, its cultural products â€” cinema, music, sports â€” contribute to the Francophone world instead of the Anglophone world.",
      politics:"A French Australia changes the balance of power in the Pacific. AUKUS doesn't exist. The Five Eyes intelligence alliance is different."
    }
  },
  amundsen: {
    cascade:[
      {event:"No Amundsen reaching South Pole first (1911)",consequence:"Scott was weeks behind. Without Amundsen, Scott's expedition reaches the Pole first â€” and probably survives, since morale would be higher and they wouldn't have been demoralized by finding the Norwegian flag.",delay:"~5 weeks",severity:"low",icon:"ðŸ”ï¸"},
      {event:"Scott lives, different Antarctic narrative",consequence:"Scott died on the return trip. If he reaches the Pole first, he likely has higher morale and better decision-making. He might survive. The entire narrative of Antarctic exploration is different.",delay:"~5 weeks",severity:"medium",icon:"â„ï¸"},
      {event:"Norwegian exploration tradition less distinguished",consequence:"Amundsen gave Norway its greatest exploration achievement. Without it, Norway's national identity is slightly different.",delay:"Cultural",severity:"low",icon:"ðŸ‡³ðŸ‡´"},
      {event:"Same polar science",consequence:"Scientific research in Antarctica was driven by international cooperation and treaty, not by who got there first.",delay:"~0",severity:"low",icon:"ðŸ”¬"},
      {event:"Same modern Antarctica",consequence:"The Antarctic Treaty, research stations, and environmental protections exist regardless of who reached the Pole first.",delay:"~50 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference.",
      tech:"No difference.",
      culture:"The Scott-Amundsen rivalry â€” one of exploration's greatest stories â€” doesn't exist. British heroic failure narrative (Scott) vs. Norwegian efficiency narrative (Amundsen) is absent.",
      politics:"No difference."
    }
  },
  shackleton: {
    cascade:[
      {event:"No Endurance expedition (1914-16)",consequence:"Shackleton's greatest achievement was failing: his ship was crushed by ice, and he saved every member of his crew through extraordinary leadership. Without him, the expedition doesn't happen.",delay:"N/A",severity:"low",icon:"ðŸš¢"},
      {event:"Antarctic exploration continues regardless",consequence:"Other expeditions were exploring Antarctica. Shackleton's specific contribution was a survival story, not a scientific or geographic one.",delay:"~0",severity:"low",icon:"â„ï¸"},
      {event:"Leadership literature loses its best example",consequence:"'Shackleton's Way' became the gold standard for leadership under extreme conditions. Business schools, military academies, and leadership programs all use his story.",delay:"Cultural",severity:"medium",icon:"ðŸ‘¨â€âœˆï¸"},
      {event:"Same Antarctic science",consequence:"Modern Antarctic research doesn't depend on any early explorer. The continent would be studied regardless.",delay:"~0",severity:"low",icon:"ðŸ”¬"},
      {event:"Same modern world",consequence:"Shackleton's impact is entirely cultural â€” the story of endurance and leadership under impossible conditions. The material world is unchanged.",delay:"N/A",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference.",
      tech:"No difference.",
      culture:"Leadership literature and adventure narrative lose their most celebrated example. The Endurance story â€” ship crushed, crew saved, impossible odds â€” is absent from culture.",
      politics:"No difference."
    }
  },
  leakey: {
    cascade:[
      {event:"No Leakey family fossil discoveries (1930s-1970s)",consequence:"Louis and Mary Leakey's discoveries in East Africa â€” Homo habilis, Zinjanthropus, footprints at Laetoli â€” proved human evolution occurred in Africa. Without them, these fossils are found later by other researchers.",delay:"~10-20 years",severity:"high",icon:"ðŸ¦´"},
      {event:"'Out of Africa' theory delayed",consequence:"The evidence that humans evolved in Africa was accumulating from multiple sources. The Leakeys accelerated the proof, but the conclusion was becoming unavoidable.",delay:"~10-20 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Paleoanthropology less prominent",consequence:"The Leakeys made fossil hunting glamorous and publicly visible. Without their charismatic advocacy, paleoanthropology is more obscure â€” less funding, less public interest.",delay:"~20 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Jane Goodall might not go to Gombe",consequence:"Louis Leakey sent Goodall, Fossey, and Galdikas to study great apes. Without his mentorship, these women might not have become primatologists.",delay:"~10 years",severity:"medium",icon:"ðŸ’"},
      {event:"Same understanding of human evolution",consequence:"The fossil record in East Africa is vast. Other researchers â€” Johanson (who found Lucy), the Leakeys' own team members â€” would have found equivalent fossils.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Our understanding of human evolution is the same.",
      tech:"No difference.",
      culture:"The 'cradle of humanity' narrative has different discoverers. The image of the paleontologist brushing dust from ancient bones has different heroes.",
      politics:"Kenya's identity as the birthplace of humanity has different scientific ambassadors."
    }
  },
  sacagawea: {
    cascade:[
      {event:"No Sacagawea guiding Lewis and Clark (1805-06)",consequence:"The Corps of Discovery had other guides and interpreters. Without Sacagawea, the expedition is harder â€” especially in Shoshone territory â€” but still succeeds. Lewis and Clark were competent leaders.",delay:"~1-2 years",severity:"medium",icon:"ðŸ—ºï¸"},
      {event:"Lewis and Clark expedition still reaches Pacific",consequence:"The expedition's success depended on geography and determination, not on any single guide. Sacagawea helped, especially in negotiations with the Shoshone, but wasn't the sole factor.",delay:"~6 months",severity:"low",icon:"ðŸ”ï¸"},
      {event:"American westward expansion unchanged",consequence:"The Louisiana Purchase and westward expansion were driven by national ambition, demographics, and economics â€” not by one expedition's specific route.",delay:"~0",severity:"low",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"Same western settlement",consequence:"Americans were moving west regardless. Lewis and Clark's expedition provided intelligence, but the movement was inevitable.",delay:"~5 years",severity:"low",icon:"ðŸŒ"},
      {event:"Native American women's representation different",consequence:"Sacagawea is one of the most famous Native American women in history. Without her, the story of indigenous women's contributions to American history has different representatives.",delay:"Cultural",severity:"medium",icon:"ðŸ‘©"}
    ],
    modernDay:{
      daily:"No difference. Western expansion happens on the same timeline.",
      tech:"No difference.",
      culture:"The US dollar coin features a different figure. Native American women's representation in American history has a different iconic figure.",
      politics:"No meaningful difference."
    }
  },
  heyerdahl: {
    cascade:[
      {event:"No Kon-Tiki expedition (1947)",consequence:"Heyerdahl sailed a balsa wood raft from Peru to Polynesia to prove ancient peoples could have made the journey. The expedition didn't prove his theory (DNA evidence later showed Polynesians came from Asia), but it captivated the world.",delay:"N/A",severity:"low",icon:"â›µ"},
      {event:"His migration theory was wrong",consequence:"Modern genetics conclusively showed Polynesians came from Southeast Asia, not South America. Heyerdahl's core thesis was incorrect. His contribution was cultural inspiration, not scientific proof.",delay:"N/A",severity:"low",icon:"ðŸ§¬"},
      {event:"Experimental archaeology still develops",consequence:"The idea of recreating ancient techniques to test historical hypotheses was emerging from multiple sources. Heyerdahl was the most famous practitioner but not the only one.",delay:"~10 years",severity:"low",icon:"ðŸ”¬"},
      {event:"Same understanding of Pacific migration",consequence:"DNA evidence settles the question regardless. Heyerdahl's expeditions were adventures, not definitive science.",delay:"~30 years",severity:"low",icon:"ðŸŒŠ"},
      {event:"Same world",consequence:"Heyerdahl's impact was on popular culture â€” inspiring adventure and curiosity â€” not on scientific understanding or political history.",delay:"N/A",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference.",
      tech:"No difference.",
      culture:"The Kon-Tiki Museum in Oslo doesn't exist. One of the 20th century's great adventure stories is absent. Experimental archaeology is slightly less famous.",
      politics:"No difference."
    }
  },
  tubman: {
    cascade:[
      {event:"No Tubman on the Underground Railroad (1850s)",consequence:"Tubman personally guided roughly 70 enslaved people to freedom across 13 missions. Without her, some of these individuals are guided by other conductors; others remain enslaved longer.",delay:"Immediate",severity:"medium",icon:"ðŸŒŸ"},
      {event:"Underground Railroad still operates",consequence:"The network involved thousands of people. Tubman was the most famous conductor but not the only one. The system continues without her.",delay:"~0",severity:"low",icon:"ðŸ "},
      {event:"Abolitionist movement still succeeds",consequence:"Abolition was driven by moral conviction, economic change, and political pressure from millions. Tubman's role was inspiring but not causally decisive for the movement's success.",delay:"~0",severity:"low",icon:"âœŠ"},
      {event:"Same Civil War, same emancipation",consequence:"The Civil War and Emancipation Proclamation were driven by structural forces â€” economics, politics, territorial expansion. Individual abolitionists influenced opinion but didn't cause the war.",delay:"~0",severity:"low",icon:"âš”ï¸"},
      {event:"Black American heroism narrative different",consequence:"Tubman is the most celebrated Black woman in American history. Without her, the narrative of Black resistance to slavery has different icons â€” still powerful, but missing its most famous figure.",delay:"Cultural",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in material terms. But the $20 bill redesign (if completed) features a different figure.",
      tech:"No difference.",
      culture:"American history's most celebrated story of Black female heroism is absent. The narrative of resistance to slavery has different primary icons.",
      politics:"The symbolism of placing a Black woman on US currency is attached to a different figure."
    }
  },
  douglass: {
    cascade:[
      {event:"No Frederick Douglass's writings and speeches (1840s-90s)",consequence:"Douglass's autobiography proved that enslaved people were intellectually equal to their enslavers. His oratory made the abolitionist case to white audiences. Without him, other Black voices â€” Sojourner Truth, William Wells Brown â€” fill the space.",delay:"~5 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Abolitionist movement slightly less effective",consequence:"Douglass was the movement's most powerful Black spokesperson to white audiences. Without him, the moral argument against slavery is slightly less personal and less compelling.",delay:"~5 years",severity:"medium",icon:"âœŠ"},
      {event:"Same Civil War and emancipation",consequence:"The war was caused by structural forces. Douglass influenced Lincoln's thinking but didn't cause emancipation.",delay:"~0",severity:"low",icon:"âš”ï¸"},
      {event:"Reconstruction advocacy weaker",consequence:"Douglass pushed for Black voting rights and education after the war. Without him, these causes still have advocates, but lose their most eloquent voice.",delay:"~5 years",severity:"medium",icon:"ðŸ—³ï¸"},
      {event:"Same long struggle for civil rights",consequence:"The struggle for Black equality in America was driven by millions of people over centuries. Douglass was its most articulate 19th-century voice, but the movement doesn't depend on one person.",delay:"~10 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No material difference.",
      tech:"No difference.",
      culture:"African American intellectual history has a different founding figure. The specific tradition of the escaped-slave-turned-orator narrative is weaker.",
      politics:"The 19th-century argument for Black equality has a different primary spokesperson. But the argument still wins."
    }
  },
  parks: {
    cascade:[
      {event:"No Rosa Parks bus refusal (1955)",consequence:"The Montgomery bus boycott was already being planned. Civil rights leaders were looking for the right case. Without Parks, Claudette Colvin or another plaintiff triggers the boycott â€” possibly within months.",delay:"~3-6 months",severity:"medium",icon:"ðŸšŒ"},
      {event:"Montgomery Bus Boycott still happens",consequence:"The boycott was an organized movement, not a spontaneous reaction. The NAACP was ready. Without Parks, the same campaign launches with a different catalyst.",delay:"~6 months",severity:"low",icon:"âœŠ"},
      {event:"Civil Rights Movement same trajectory",consequence:"Brown v. Board (1954) had already started the legal revolution. The movement was building momentum from multiple directions. Parks was a symbol, not a cause.",delay:"~1 year",severity:"low",icon:"âš–ï¸"},
      {event:"Same Civil Rights Act, same Voting Rights Act",consequence:"These laws were driven by mass mobilization, political pressure, and moral force from millions. No single incident â€” not even Parks's â€” was the decisive cause.",delay:"~0-1 year",severity:"low",icon:"ðŸ›ï¸"},
      {event:"Different symbol, same movement",consequence:"The civil rights movement needed heroes and symbols. Without Parks, another figure fills this role. The movement's power was collective, not individual.",delay:"Cultural",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No material difference. Civil rights legislation passes on the same timeline.",
      tech:"No difference.",
      culture:"The 'tired woman on a bus' narrative â€” one of America's most powerful moral stories â€” has a different protagonist. But the story is told.",
      politics:"Same civil rights laws. Same trajectory. The specific icon is different."
    }
  },
  toussaint: {
    cascade:[
      {event:"No Toussaint leading Haitian Revolution (1791-1803)",consequence:"The Haitian Revolution was driven by 500,000 enslaved people â€” the largest slave revolt in history. Without Toussaint's military and political genius, the revolution is more chaotic and might fail initially.",delay:"~5-10 years",severity:"high",icon:"âš”ï¸"},
      {event:"Haitian independence delayed or different",consequence:"Dessalines and other leaders might still achieve independence, but Toussaint's diplomatic skill â€” playing France, Spain, and Britain against each other â€” was unique. Without him, Haiti's path to freedom is bloodier and longer.",delay:"~5-10 years",severity:"high",icon:"ðŸ‡­ðŸ‡¹"},
      {event:"Napoleon keeps his American empire ambitions",consequence:"Haiti's revolution made Napoleon abandon his Western Hemisphere plans, leading to the Louisiana Purchase. If Haiti stays French longer, Napoleon might not sell Louisiana.",delay:"~5 years",severity:"high",icon:"ðŸ—ºï¸"},
      {event:"Louisiana Purchase delayed or doesn't happen",consequence:"Without the Haitian Revolution's defeat of French forces, Napoleon keeps Louisiana. The US either buys it later (at higher price) or never acquires it, changing American geography.",delay:"~5 years",severity:"high",icon:"ðŸ‡ºðŸ‡¸"},
      {event:"Slavery's abolition timeline different",consequence:"Haiti was the first free Black republic. Its existence terrified slaveholders and inspired abolitionists. A delay in Haitian independence weakens the abolitionist argument and emboldens slaveholders.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"If the Louisiana Purchase doesn't happen (or is delayed), the entire western half of the United States has a different political history.",
      tech:"No difference.",
      culture:"The story of enslaved people defeating Napoleon's army â€” one of history's most extraordinary events â€” has a different narrative or is delayed.",
      politics:"American territorial expansion is different without the Louisiana Purchase. French influence in North America persists longer. Haiti's role as a beacon of Black freedom is delayed."
    }
  },
  chavez: {
    cascade:[
      {event:"No United Farm Workers movement (1960s-70s)",consequence:"ChÃ¡vez organized migrant farmworkers â€” among the most exploited workers in America â€” into a powerful union. Without him, farmworker organization comes later and from different leadership.",delay:"~10 years",severity:"medium",icon:"âœŠ"},
      {event:"Grape boycott doesn't happen (or later)",consequence:"The nationwide grape boycott was one of America's most successful consumer actions. Without it, the tactic of consumer boycotts for labor rights is less established.",delay:"~10 years",severity:"medium",icon:"ðŸ‡"},
      {event:"Latino political organizing delayed",consequence:"ChÃ¡vez demonstrated that Latino workers could organize politically. Without his example, Latino political power develops more slowly â€” but the demographic pressure was irresistible.",delay:"~10 years",severity:"medium",icon:"ðŸ—³ï¸"},
      {event:"Same farmworker conditions eventually improve",consequence:"Labor conditions improve from regulation, market pressure, and continued organizing. ChÃ¡vez accelerated the process but didn't singlehandedly cause it.",delay:"~15 years",severity:"low",icon:"ðŸŒ¾"},
      {event:"Same Latino political power",consequence:"Latino political influence in the US was inevitable â€” the demographic growth guaranteed it. ChÃ¡vez was an early catalyst, not the underlying cause.",delay:"~15 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Farmworker conditions are slightly better sooner because of ChÃ¡vez's work. But the long-term trajectory is similar.",
      tech:"No difference.",
      culture:"The 'SÃ­, se puede' ('Yes, we can') slogan â€” later adopted by Obama â€” doesn't exist in its original form. Latino labor organizing has different founding heroes.",
      politics:"Latino political organizing is delayed by roughly a decade. CÃ©sar ChÃ¡vez Day doesn't exist."
    }
  },
  emmeline: {
    cascade:[
      {event:"No Pankhurst's suffragette militancy (1903-14)",consequence:"Emmeline Pankhurst's WSPU introduced militant tactics â€” window smashing, arson, hunger strikes â€” to the women's suffrage movement. Without her, British suffragism remains more polite and patient.",delay:"~5-10 years",severity:"medium",icon:"âœŠ"},
      {event:"Women's suffrage in Britain delayed",consequence:"The peaceful suffragists (Fawcett's NUWSS) were making slow progress. Without Pankhurst's militancy creating urgency, British women's suffrage might come 5-10 years later.",delay:"~5-10 years",severity:"medium",icon:"ðŸ—³ï¸"},
      {event:"WWI still accelerates change",consequence:"Women's contributions during WWI (1914-18) â€” working in factories, driving ambulances â€” proved their capability. This, more than any suffragette action, drove the 1918 vote.",delay:"~3 years",severity:"low",icon:"âš”ï¸"},
      {event:"Same global women's suffrage movement",consequence:"Women were winning the vote worldwide â€” New Zealand (1893), Australia (1902), Finland (1906). The global trend was unstoppable. Pankhurst was important for Britain specifically.",delay:"~10 years",severity:"low",icon:"ðŸŒ"},
      {event:"Same feminist progress",consequence:"Women's rights were advancing from economic, social, and political forces. Pankhurst was a catalyst in one country at one time.",delay:"~10 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. British women vote. The timing was delayed by perhaps 5-10 years.",
      tech:"No difference.",
      culture:"The suffragette as a militant, chain-herself-to-the-railings figure is less prominent. The narrative of women's rights is more about patient advocacy than dramatic action.",
      politics:"British women's suffrage arrives roughly a decade later. The specific legacy of militant feminism is weaker."
    }
  },
  steinem: {
    cascade:[
      {event:"No Gloria Steinem as feminist leader (1960s-80s)",consequence:"Second-wave feminism had many leaders â€” Friedan, Abzug, hooks, Greer. Without Steinem's specific combination of beauty, media savvy, and accessible writing, the movement has a different public face.",delay:"~3 years",severity:"medium",icon:"âœŠ"},
      {event:"Ms. Magazine doesn't exist",consequence:"Steinem co-founded Ms. Magazine (1972), the first mainstream feminist publication. Without it, feminist ideas reach popular audiences through different channels â€” possibly more slowly.",delay:"~5 years",severity:"medium",icon:"ðŸ“°"},
      {event:"Feminist ideas still spread",consequence:"The social forces driving feminism â€” women entering the workforce, contraception, educational access â€” were structural. Steinem was a messenger, not the message.",delay:"~5 years",severity:"low",icon:"ðŸŒ"},
      {event:"Same legislative achievements",consequence:"Title IX, Roe v. Wade, workplace protections â€” these were driven by mass organizing and legal strategy, not by any single spokesperson.",delay:"~0-3 years",severity:"low",icon:"âš–ï¸"},
      {event:"Same feminist movement, different icon",consequence:"Betty Friedan or another figure becomes the public face of feminism. The movement's trajectory is essentially unchanged.",delay:"~5 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Women's rights legislation and cultural change follow the same trajectory.",
      tech:"No difference.",
      culture:"The specific image of glamorous, accessible feminism that Steinem represented is absent. Feminism might be perceived as more academic or more radical without her mainstream bridge.",
      politics:"Same feminist legislation. Different spokesperson."
    }
  },
  malala: {
    cascade:[
      {event:"No Malala's shooting and advocacy (2012-present)",consequence:"Malala was shot by the Taliban for advocating girls' education. Without this specific incident, the cause of girls' education in conflict zones has less international visibility.",delay:"~5 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Girls' education advocacy continues",consequence:"UNICEF, UNESCO, and numerous NGOs were already working on girls' education. Malala amplified the cause enormously but didn't create the movement.",delay:"~3 years",severity:"low",icon:"ðŸŽ“"},
      {event:"Same Pakistani politics",consequence:"The Taliban's war against education was ongoing. Pakistani military operations against militants were driven by security concerns, not by one girl's shooting.",delay:"~0",severity:"low",icon:"ðŸ‡µðŸ‡°"},
      {event:"Nobel Peace Prize goes to different recipient (2014)",consequence:"Malala shared the Nobel with Kailash Satyarthi. Without her, the prize goes to other children's rights advocates â€” or to a completely different cause.",delay:"~2 years",severity:"low",icon:"ðŸ†"},
      {event:"Same global progress on girls' education",consequence:"Enrollment rates for girls worldwide were improving from economic development, NGO work, and government policies. Malala accelerated awareness but didn't drive the underlying trends.",delay:"~5 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference. Girls' education metrics are driven by development economics, not individual advocates.",
      tech:"No difference.",
      culture:"The youngest Nobel laureate is a different person. The specific narrative of a girl shot for going to school â€” one of the 2010s' most powerful stories â€” is absent.",
      politics:"Girls' education in conflict zones receives slightly less international attention. The Malala Fund doesn't exist."
    }
  },
  addams: {
    cascade:[
      {event:"No Hull House (1889)",consequence:"Jane Addams's settlement house in Chicago became the model for social work in America. Without it, the settlement movement develops from English models (Toynbee Hall) through other American practitioners.",delay:"~5-10 years",severity:"medium",icon:"ðŸ "},
      {event:"Social work profession develops differently",consequence:"Addams essentially invented American social work. Without her, the profession develops from charity organization societies and government programs â€” possibly more bureaucratic, less community-based.",delay:"~10 years",severity:"medium",icon:"ðŸ‘©â€âš•ï¸"},
      {event:"Progressive Era reforms still happen",consequence:"Child labor laws, worker protections, public health measures â€” these were driven by mass politics, muckraking journalism, and economic pressure. Addams was one voice among many.",delay:"~5 years",severity:"low",icon:"ðŸ›ï¸"},
      {event:"Same welfare state",consequence:"The New Deal and Great Society programs were driven by economic crises and political pressure, not by one reformer's example from decades earlier.",delay:"~20 years",severity:"low",icon:"ðŸ“‹"},
      {event:"Women's Nobel Peace Prize history different",consequence:"Addams was the first American woman to win the Nobel Peace Prize (1931). Without her, this milestone is delayed.",delay:"~10 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Social work exists in essentially the same form.",
      tech:"No difference.",
      culture:"The American social work tradition has a different founding figure. The specific model of the settlement house â€” middle-class reformers living among the poor â€” is less central to social work's origin story.",
      politics:"Progressive Era reforms have different leading advocates."
    }
  },
  freire: {
    cascade:[
      {event:"No Pedagogy of the Oppressed (1968)",consequence:"Freire's argument that education should liberate rather than domesticate â€” that students should be active participants, not passive recipients â€” doesn't exist in its specific form.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Critical pedagogy delayed",consequence:"The idea that education is political â€” that traditional education reinforces existing power structures â€” develops from other sources (Illich, Dewey), but less radically.",delay:"~10 years",severity:"medium",icon:"ðŸŽ“"},
      {event:"Literacy campaigns in developing world different",consequence:"Freire's literacy methods â€” using learners' own experiences as curriculum â€” were adopted across Latin America, Africa, and Asia. Without them, literacy programs are more traditional and less empowering.",delay:"~10 years",severity:"medium",icon:"ðŸ“š"},
      {event:"Same educational debates",consequence:"Progressive education (Dewey) already existed. The specific Freirean contribution was connecting education to political liberation â€” which other thinkers (hooks, Giroux) develop eventually.",delay:"~15 years",severity:"medium",icon:"ðŸ¤”"},
      {event:"Same educational outcomes",consequence:"Literacy rates improve globally from economic development and government programs. Freire's methods helped but weren't the primary driver.",delay:"~15 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No difference in daily life.",
      tech:"No difference.",
      culture:"Education schools worldwide teach a different curriculum. The specific concept of 'banking education' (teacher deposits knowledge into passive students) doesn't exist as a critique.",
      politics:"Liberation theology and progressive education movements have slightly different intellectual foundations."
    }
  },
  xmalcolm: {
    cascade:[
      {event:"No Malcolm X's advocacy (1952-65)",consequence:"Malcolm X articulated Black anger, self-defense, and separatism as alternatives to King's nonviolence. Without him, the militant wing of the civil rights movement has a different voice â€” possibly the Black Panthers directly.",delay:"~3-5 years",severity:"medium",icon:"âœŠ"},
      {event:"Civil Rights Movement less ideologically diverse",consequence:"The tension between King's nonviolence and Malcolm's militancy pushed the movement forward. Without Malcolm, the movement is more unified but possibly less dynamic.",delay:"~3 years",severity:"medium",icon:"âš–ï¸"},
      {event:"Black nationalism develops from different sources",consequence:"Marcus Garvey's legacy, the Nation of Islam, and Pan-Africanism all predated Malcolm. Without him, Black nationalism still exists but is articulated by different leaders.",delay:"~5 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Same Civil Rights Act and Voting Rights Act",consequence:"These laws were driven by mass organizing, media attention to Southern brutality, and political calculation. Malcolm X influenced the conversation but didn't drive the legislation.",delay:"~0",severity:"low",icon:"ðŸ›ï¸"},
      {event:"Black identity politics has different foundation",consequence:"Malcolm's evolution â€” from separatism to a more universal humanism after his hajj â€” is one of the most powerful personal narratives in American history. Without it, Black political thought is different.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"No material difference. Civil rights legislation passes regardless.",
      tech:"No difference.",
      culture:"'By any means necessary' doesn't enter the lexicon. The specific duality of King and Malcolm â€” two approaches to the same struggle â€” is absent from how Americans understand race.",
      politics:"Black political thought is less ideologically diverse in the 1960s. The specific tradition of Black self-defense and separatism has different intellectual origins."
    }
  },
  sanger: {
    cascade:[
      {event:"No Margaret Sanger's birth control advocacy (1910s-60s)",consequence:"Sanger opened America's first birth control clinic (1916) and founded Planned Parenthood. Without her, the birth control movement develops more slowly from European models and other American advocates.",delay:"~10-15 years",severity:"high",icon:"âš•ï¸"},
      {event:"Contraception access delayed",consequence:"The Comstock laws banned contraceptive information. Without Sanger's persistent legal and public advocacy, these laws remain in force longer. Women have less reproductive control for an extra decade.",delay:"~10-15 years",severity:"high",icon:"ðŸ’Š"},
      {event:"The Pill still invented",consequence:"The birth control pill (1960) was developed because the science was ready and the demand was enormous. Without Sanger's specific funding of research, the Pill arrives 5-10 years later from other funders.",delay:"~5-10 years",severity:"medium",icon:"ðŸ”¬"},
      {event:"Women's workforce participation still rises",consequence:"WWII, economic pressure, and changing social norms drove women into the workforce. Contraception helped but wasn't the sole cause.",delay:"~5 years",severity:"medium",icon:"ðŸ‘©â€ðŸ’¼"},
      {event:"Same reproductive rights trajectory",consequence:"The demand for reproductive control was universal and irresistible. Sanger accelerated access in the US by 10-15 years. Other countries were already ahead (Britain, Netherlands).",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      daily:"Birth control is universally available in developed countries regardless. But access in the US might have been delayed by a decade.",
      tech:"The Pill is invented regardless â€” the science was there. The timing might shift by 5-10 years.",
      culture:"Planned Parenthood either doesn't exist or has a different origin story. The specific controversy around Sanger's legacy (her eugenics connections) is absent.",
      politics:"The reproductive rights debate in America has different historical foundations. But the same underlying conflict between religious conservatism and women's autonomy still plays out."
    }
  }
};


