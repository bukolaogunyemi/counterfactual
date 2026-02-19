// Historical events database
export const EVENTS = [

  {id:"french_revolution",name:"French Revolution",born:1789,died:null,cat:"events",cat2:"politics",field:"Political Revolution",
    quote:"Liberty, equality, fraternity.",
    contributions:["End of absolute monarchy","Declaration of Rights of Man","Rise of nationalism","Modern republican ideals"],
    r:0.45,reasoning:"Social and economic pressures made some form of upheaval near-certain. The Estates-General crisis, bread prices, and Enlightenment ideas were all converging. But the specific form — the Terror, the Republic, Napoleon's rise — was contingent on dozens of individual decisions and accidents.",
    counterfactual:"Without 1789 specifically, France likely sees reform or revolution within a decade anyway — the fiscal crisis was terminal. But a delayed or differently-triggered revolt might have produced a constitutional monarchy rather than a republic. The Terror might never happen. Napoleon might remain an obscure artillery officer. The entire template for modern revolution changes.",
    impact:{lives:"Tens of millions across Europe",econ:"Destroyed feudal economic system across Western Europe",cultural:"Template for every subsequent revolution",reach:"Global — inspired revolutions from Haiti to Russia",timeline:"Some form of French political crisis within 5-10 years regardless"},
    timeline:[
      {year:1789,happened:"Storming of the Bastille triggers revolution",alternate:"Reform attempts continue, slower political transformation"},
      {year:1793,happened:"Reign of Terror, execution of Louis XVI",alternate:"Constitutional monarchy possible under different revolutionary path"},
      {year:1799,happened:"Napoleon seizes power in coup",alternate:"Different strongman or continued republic without the revolutionary chaos"},
      {year:1815,happened:"Congress of Vienna redraws Europe",alternate:"Europe's borders redrawn differently without Napoleonic Wars"}
    ],
    cascade:[
      {event:"No storming of the Bastille",consequence:"The symbolic moment that made revolution feel unstoppable doesn't happen. Reform efforts continue but lack popular energy.",delay:"Immediate",severity:"high",icon:"🏰"},
      {event:"No Reign of Terror",consequence:"The concept of revolutionary purges as necessary never enters the political imagination. Future revolutions may be less violent.",delay:"~4 years",severity:"high",icon:"⚖️"},
      {event:"No Napoleonic Wars",consequence:"Without the revolutionary army and Napoleon, Europe's borders stay roughly the same for decades longer. No spread of civil code across continent.",delay:"~10 years",severity:"high",icon:"⚔️"},
      {event:"Different template for revolution",consequence:"The Russian Revolution, Chinese Revolution, and dozens of others looked to 1789 as a model. Without it, revolutionary movements develop different playbooks.",delay:"~100 years",severity:"high",icon:"🌍"}
    ],
    modernDay:{
      tech:"Minimal direct tech impact, though the revolutionary government did promote metric system adoption.",
      culture:"The idea that people can overthrow their government and start over — that's a French Revolution inheritance. Without it, political change might feel slower, more incremental everywhere.",
      politics:"Constitutional republics might develop later or differently. The specific left-right political spectrum (literally named for French Revolutionary seating) wouldn't exist.",
      daily:"The metric system might not be universal. National flags and anthems as symbols of popular sovereignty might look very different."}},

  {id:"fall_of_rome",name:"Fall of Rome",born:476,died:null,cat:"events",cat2:"military",field:"Civilizational Collapse",
    quote:"The city which had taken the whole world was itself taken.",
    contributions:["End of classical antiquity","Birth of medieval Europe","Fragmentation of Mediterranean unity","Preservation crisis for knowledge"],
    r:0.25,reasoning:"Rome had been declining for centuries. Economic strain, military overextension, plague, administrative decay, and migration pressures made collapse near-inevitable. The specific date of 476 is somewhat arbitrary — the Western Empire had been a shell for decades. The Eastern Empire continued for another millennium.",
    counterfactual:"Without the specific 476 collapse, Rome still fragments — the forces are too large to stop. But a slower, more managed decline might preserve more institutional continuity. The 'Dark Ages' knowledge gap might be shallower. Latin administrative traditions might persist longer in the West. The specific Germanic kingdoms that emerged might have different borders and cultures.",
    impact:{lives:"Hundreds of millions over centuries",econ:"Trade networks collapsed, GDP per capita wouldn't recover for 1000 years in some regions",cultural:"Loss of classical knowledge, rise of Christianity as organizing force",reach:"All of Europe, North Africa, Middle East",timeline:"Decline was already centuries old by 476"},
    timeline:[
      {year:376,happened:"Goths cross the Danube, beginning of mass migrations",alternate:"Without specific military defeats, migrations might be absorbed more gradually"},
      {year:410,happened:"Visigoths sack Rome under Alaric",alternate:"Rome remains symbolically inviolate, morale holds longer"},
      {year:476,happened:"Last Western emperor deposed by Odoacer",alternate:"Puppet emperors continue for decades, slower institutional decay"},
      {year:527,happened:"Justinian attempts reconquest from Constantinople",alternate:"Without clear break, reconquest framing doesn't exist"}
    ],
    cascade:[
      {event:"No symbolic fall in 476",consequence:"The narrative of 'Rome fell' doesn't crystallize. Instead a gradual fading makes it harder to periodize history.",delay:"Immediate",severity:"medium",icon:"🏛️"},
      {event:"More institutional continuity",consequence:"Roman law, road maintenance, and trade networks degrade slower. The economic collapse is less severe.",delay:"~50 years",severity:"high",icon:"📜"},
      {event:"Shallower knowledge gap",consequence:"More texts survive. The monasteries still preserve knowledge but there's more to preserve and more readers.",delay:"~200 years",severity:"high",icon:"📚"},
      {event:"Different medieval Europe",consequence:"Feudalism might still emerge but in a less fragmented form. The church might have less relative power if secular institutions persist.",delay:"~500 years",severity:"high",icon:"🏰"}
    ],
    modernDay:{
      tech:"If more classical knowledge survived, the Scientific Revolution might have come earlier — though this is speculative.",
      culture:"The 'fall of civilization' narrative that haunts Western culture might not exist in the same form. Less anxiety about decline.",
      politics:"European nation-states might have different borders if Roman provinces persisted longer as administrative units.",
      daily:"Hard to trace specific daily impacts, but the thousand-year gap in development means everything from infrastructure to literacy was set back."}},

  {id:"black_death",name:"Black Death",born:1347,died:null,cat:"events",cat2:"medicine",field:"Pandemic",
    quote:"So many died that all believed it was the end of the world.",
    contributions:["Killed 30-60% of Europe's population","Ended feudal labor systems","Accelerated social mobility","Transformed European economy"],
    r:0.6,reasoning:"Plague was endemic in Central Asia and had reached Europe before. But the specific 1347 pandemic — arriving via Genoese trading ships from Caffa — hit at a particular moment of European vulnerability. Overpopulation, poor nutrition, and the Little Ice Age amplified the death toll. A plague would have come eventually, but this specific catastrophe at this specific scale was not guaranteed.",
    counterfactual:"Without the Black Death's specific timing and severity, feudalism persists longer in Europe. The labor shortage that gave peasants bargaining power doesn't materialize as quickly. The Renaissance might be delayed — the wealth redistribution and social disruption that enabled it wouldn't happen on the same timeline. Europe's economic and demographic trajectory shifts by a century or more.",
    impact:{lives:"75-200 million dead worldwide",econ:"Wages doubled for survivors, land prices collapsed, feudal economics permanently disrupted",cultural:"Transformed art, religion, and philosophy — death became central to European culture",reach:"Europe, Middle East, North Africa, Central Asia",timeline:"Some plague event likely within 50 years, but scale was contingent"},
    timeline:[
      {year:1347,happened:"Plague reaches Sicily via Genoese ships",alternate:"Trade routes still carry disease but possibly slower spread"},
      {year:1349,happened:"Peak mortality across Western Europe",alternate:"Without this specific strain at this scale, population loss is 10-20% rather than 30-60%"},
      {year:1381,happened:"Peasants' Revolt in England — labor scarcity empowers workers",alternate:"Without massive depopulation, feudal labor relations persist"},
      {year:1450,happened:"European population begins recovery, economy transformed",alternate:"Slower economic transformation, feudalism remains dominant"}
    ],
    cascade:[
      {event:"No massive labor shortage",consequence:"Peasants remain bound to land. Wages stay low. The feudal system that was already cracking holds together for another century.",delay:"Immediate",severity:"high",icon:"⚰️"},
      {event:"No crisis of faith",consequence:"The church's inability to explain or stop the plague shook authority. Without that crisis, the Reformation's ground is less fertile.",delay:"~150 years",severity:"high",icon:"⛪"},
      {event:"Slower economic transformation",consequence:"The wealth redistribution that funded the Renaissance doesn't happen as fast. Merchant classes rise more gradually.",delay:"~100 years",severity:"high",icon:"💰"},
      {event:"Different colonial timeline",consequence:"A more populated, more feudal Europe might colonize the Americas later or differently. More people at home means less pressure to emigrate.",delay:"~200 years",severity:"medium",icon:"🚢"}
    ],
    modernDay:{
      tech:"The labor shortage drove innovation in labor-saving technology. Without it, mechanization comes later.",
      culture:"The 'memento mori' tradition in Western art — skulls, dances of death — doesn't develop the same way. European culture has a different relationship with mortality.",
      politics:"Without the collapse of feudalism accelerated by the plague, democratic movements might emerge on a different timeline.",
      daily:"Europe's population geography would look different. Cities that grew because survivors concentrated there might be smaller."}},

  {id:"moon_landing",name:"Moon Landing",born:1969,died:null,cat:"events",cat2:"exploration",field:"Space Exploration",
    quote:"That's one small step for man, one giant leap for mankind.",
    contributions:["First humans on another world","Proved space travel possible","Cold War propaganda victory","Inspired generations of scientists"],
    r:0.55,reasoning:"The Space Race made a moon landing very likely by the 1970s — the US and USSR were both racing toward it. But Apollo 11 landing in July 1969 specifically was contingent on Kennedy's assassination galvanizing NASA funding, on specific technical decisions, and on the Soviets' N1 rocket failing. The landing was likely; the exact timing and American victory were not.",
    counterfactual:"Without Apollo 11, someone reaches the Moon by the mid-1970s — the technology was converging. If the Soviets got there first, the geopolitical symbolism flips entirely. American prestige takes a different path. The 'if we can put a man on the Moon' idiom doesn't exist. NASA's post-Apollo decline might not happen because the mission hadn't yet been 'accomplished.'",
    impact:{lives:"Inspired millions directly; satellite technology affects billions",econ:"$25.4 billion Apollo program ($200B+ adjusted); spawned aerospace industry",cultural:"Became defining symbol of human achievement",reach:"Global — watched by 600 million people live",timeline:"Moon landing by mid-1970s regardless of Apollo 11"},
    timeline:[
      {year:1961,happened:"Kennedy commits US to Moon before decade's end",alternate:"Without JFK's assassination boosting NASA funding, timeline slips"},
      {year:1969,happened:"Apollo 11 lands on the Moon",alternate:"US or Soviet landing happens 3-6 years later"},
      {year:1972,happened:"Apollo 17 — last Moon mission, public interest fading",alternate:"If landing happens later, the program might sustain longer"},
      {year:1975,happened:"Apollo-Soyuz marks end of Space Race",alternate:"Competition continues longer if race isn't decisively won"}
    ],
    cascade:[
      {event:"No July 1969 landing",consequence:"The Space Race continues at full intensity. Both superpowers keep pouring money into lunar programs. Public anticipation builds.",delay:"Immediate",severity:"medium",icon:"🚀"},
      {event:"Soviet landing possible",consequence:"If the N1 rocket is fixed, Soviets might reach the Moon first. The propaganda victory goes to Moscow. Cold War dynamics shift.",delay:"~3 years",severity:"high",icon:"🇷🇺"},
      {event:"Extended space investment",consequence:"Without 'mission accomplished' in 1969, space budgets stay higher through the 1970s. Mars missions might be seriously attempted earlier.",delay:"~5 years",severity:"medium",icon:"💰"},
      {event:"Different space culture",consequence:"The specific iconography of Apollo — the flag, the footprint, Earthrise — doesn't define space exploration. Different images, different narrative.",delay:"Cultural",severity:"medium",icon:"🌍"}
    ],
    modernDay:{
      tech:"Satellite and computing technology still advance, but specific Apollo-derived innovations might come through different paths.",
      culture:"'If we can put a man on the Moon' as an idiom for ambition doesn't exist. Space exploration's cultural meaning is different.",
      politics:"The 'we won the Space Race' narrative doesn't anchor American Cold War identity the same way.",
      daily:"GPS, weather satellites, and telecommunications satellites still exist — those weren't Apollo-dependent. But the cultural relationship with space is different."}},

  {id:"911",name:"September 11 Attacks",born:2001,died:null,cat:"events",cat2:"military",field:"Terrorism",
    quote:"Today, our nation saw evil, the very worst of human nature.",
    contributions:["Launched War on Terror","Created Department of Homeland Security","Transformed air travel security","Reshaped US foreign policy for decades"],
    r:0.75,reasoning:"Al-Qaeda was planning attacks on the US, but the specific form — hijacked planes as missiles targeting the World Trade Center and Pentagon — was genuinely novel and hard to predict. Intelligence agencies had fragments but couldn't assemble the picture. A major attack was likely given al-Qaeda's trajectory, but this specific devastating form was not inevitable.",
    counterfactual:"Without 9/11 specifically, al-Qaeda still attempts a major attack — the Cole bombing and 1998 embassy attacks showed the trajectory. But a smaller or failed attack changes everything. No invasion of Afghanistan in 2001. Likely no Iraq War. The entire surveillance state develops differently. The TSA doesn't exist. The 21st century's defining conflict might be something other than the War on Terror.",
    impact:{lives:"2,977 killed directly; hundreds of thousands in subsequent wars",econ:"$3.3 trillion in war costs; billions in security infrastructure",cultural:"Defined a generation's relationship with security, Islam, and American identity",reach:"Global — reshaped geopolitics worldwide",timeline:"Some al-Qaeda attack likely, but this scale was not inevitable"},
    timeline:[
      {year:2001,happened:"9/11 attacks kill 2,977; US invades Afghanistan",alternate:"Smaller attack or foiled plot leads to increased vigilance but not war"},
      {year:2003,happened:"US invades Iraq citing WMDs and terror links",alternate:"Without 9/11's political cover, Iraq invasion far less likely"},
      {year:2011,happened:"Bin Laden killed; Arab Spring reshapes Middle East",alternate:"Al-Qaeda remains a threat but without defining the era"},
      {year:2021,happened:"US withdraws from Afghanistan after 20 years",alternate:"No 20-year occupation to withdraw from"}
    ],
    cascade:[
      {event:"No World Trade Center attack",consequence:"The symbolic destruction of America's financial center doesn't happen. The psychological shock that enabled sweeping policy changes is absent.",delay:"Immediate",severity:"high",icon:"🏢"},
      {event:"No War on Terror framework",consequence:"US foreign policy doesn't reorganize around counterterrorism. Military budget increases are smaller. Surveillance programs don't get the same political support.",delay:"~1 year",severity:"high",icon:"⚔️"},
      {event:"No Iraq War",consequence:"Without the political environment created by 9/11, the case for invading Iraq doesn't hold. Hundreds of thousands of lives are different.",delay:"~2 years",severity:"high",icon:"🇮🇶"},
      {event:"Different airport security",consequence:"The TSA doesn't exist. Airport security remains pre-2001 levels. The entire experience of air travel is different.",delay:"~1 year",severity:"medium",icon:"✈️"}
    ],
    modernDay:{
      tech:"Mass surveillance programs like PRISM might not exist at the same scale. Phone and internet monitoring looks very different.",
      culture:"Islamophobia in the West develops differently. The 'clash of civilizations' narrative doesn't dominate the 2000s.",
      politics:"The Patriot Act doesn't pass. Executive power doesn't expand the same way. The political landscape of the 2000s-2010s is unrecognizable.",
      daily:"No removing shoes at airports. No liquid restrictions. No TSA. The daily experience of travel and the background hum of security anxiety are both different."}},

  {id:"printing_press_event",name:"Gutenberg's Press",born:1440,died:null,cat:"events",cat2:"inventions",field:"Information Revolution",
    quote:"God suffers in the multitude of souls whom His word can not reach.",
    contributions:["Mass production of books","Enabled Protestant Reformation","Democratized knowledge","Created publishing industry"],
    r:0.35,reasoning:"Movable type already existed in China and Korea. European experiments with printing were underway in multiple workshops. Gutenberg's specific innovation — the alloy, the press design, the oil-based ink — was clever engineering, but the underlying demand was enormous and someone would have cracked it within decades. The Reformation and Scientific Revolution might have been delayed, but not prevented.",
    counterfactual:"Without Gutenberg specifically, European printing emerges by 1470-1480 from Dutch or Italian workshops. The 20-30 year delay means Luther's theses spread slower — perhaps slow enough for the Church to contain the damage. The Reformation still happens but possibly as a more gradual reform rather than a rupture. Scientific knowledge still accelerates, just on a slightly later schedule.",
    impact:{lives:"Billions — literacy and information access transformed civilization",econ:"Created entirely new industries: publishing, journalism, advertising",cultural:"Ended the manuscript era, enabled mass education",reach:"Global eventually, starting in Europe",timeline:"European printing within 20-30 years of Gutenberg regardless"},
    timeline:[
      {year:1440,happened:"Gutenberg develops movable type press",alternate:"Dutch and Italian printers continue experimenting, achieve results by 1470s"},
      {year:1455,happened:"Gutenberg Bible printed — first mass-produced book",alternate:"First European printed books appear 20-30 years later"},
      {year:1517,happened:"Luther's 95 Theses spread rapidly via print",alternate:"Religious dissent spreads slower, Church has more time to respond"},
      {year:1600,happened:"200 million volumes printed in Europe",alternate:"Print revolution is 20-30 years behind, but catching up"}
    ],
    cascade:[
      {event:"No Gutenberg press in 1440",consequence:"Books remain hand-copied for another generation. Literacy stays confined to clergy and wealthy elites slightly longer.",delay:"~20 years",severity:"medium",icon:"📖"},
      {event:"Slower spread of Reformation ideas",consequence:"Luther's theses still get written, but without rapid printing, the Church has time to co-opt or suppress the movement. The Reformation might be a reform, not a schism.",delay:"~80 years",severity:"high",icon:"⛪"},
      {event:"Delayed scientific communication",consequence:"Scientists still correspond by letter, but can't publish widely. Peer review and replication develop slower.",delay:"~100 years",severity:"medium",icon:"🔬"},
      {event:"Later rise of literacy",consequence:"Mass literacy arrives a generation later. The Enlightenment's timeline shifts. Democratic movements that depended on pamphlets and newspapers are delayed.",delay:"~200 years",severity:"medium",icon:"📰"}
    ],
    modernDay:{
      tech:"The internet's ancestor — mass information distribution — arrives on roughly the same timeline since the underlying demand was there.",
      culture:"The specific cultural products of early print (King James Bible, Shakespeare folios) might look different or come from different authors.",
      politics:"Democratic movements that relied on printed pamphlets might emerge on a slightly different schedule, but the forces driving them were independent of print.",
      daily:"You'd notice nothing different in 2026. The delay was at most a generation, and the world has long since caught up."}},

  {id:"cuban_missile_crisis",name:"Cuban Missile Crisis",born:1962,died:null,cat:"events",cat2:"military",field:"Nuclear Standoff",
    quote:"We're eyeball to eyeball, and I think the other fellow just blinked.",
    contributions:["Closest the world came to nuclear war","Led to Nuclear Test Ban Treaty","Established crisis hotline between superpowers","Shaped nuclear deterrence doctrine"],
    r:0.8,reasoning:"This was one of history's genuine coin-flips. Multiple moments during the 13 days could have gone differently — Vasili Arkhipov refusing to authorize a nuclear torpedo, Kennedy overruling hawkish generals, back-channel negotiations succeeding. The specific resolution was not inevitable at all. Nuclear war was disturbingly close.",
    counterfactual:"If the crisis escalated — if Arkhipov had authorized the torpedo, if the U-2 shootdown had triggered retaliation, if Kennedy had listened to Curtis LeMay — nuclear exchange was possible. Even a limited nuclear war in 1962 kills millions immediately and reshapes geopolitics permanently. The world we live in exists partly because a handful of individuals made the right calls under impossible pressure.",
    impact:{lives:"Potentially hundreds of millions at stake",econ:"Led to arms control frameworks worth trillions in avoided destruction",cultural:"Nuclear anxiety defined Cold War culture",reach:"Global — every nation's future hung in the balance",timeline:"This specific crisis was highly contingent on Soviet missile placement decision"},
    timeline:[
      {year:1962,happened:"US discovers Soviet missiles in Cuba; 13-day standoff",alternate:"Missiles discovered later or Soviet decision not made — crisis takes different form"},
      {year:1963,happened:"Partial Nuclear Test Ban Treaty signed",alternate:"Without the scare, arms control has less urgency"},
      {year:1963,happened:"Moscow-Washington hotline established",alternate:"No crisis communication infrastructure between superpowers"},
      {year:1968,happened:"Nuclear Non-Proliferation Treaty signed",alternate:"Slower progress on nuclear arms control without the 1962 wake-up call"}
    ],
    cascade:[
      {event:"Crisis escalates to exchange",consequence:"Even a limited nuclear exchange between US and Soviet forces in the Caribbean kills hundreds of thousands immediately.",delay:"Immediate",severity:"high",icon:"☢️"},
      {event:"Nuclear winter possibility",consequence:"Full-scale exchange triggers global cooling, crop failures, and famine affecting billions worldwide.",delay:"~1 year",severity:"high",icon:"❄️"},
      {event:"Global political restructuring",consequence:"Surviving nations reorganize around preventing recurrence. The post-war order is completely rewritten.",delay:"~5 years",severity:"high",icon:"🌍"},
      {event:"Technology setback",consequence:"Major research centers destroyed. Computing, space, and medical research lose decades of progress.",delay:"~20 years",severity:"high",icon:"💻"}
    ],
    modernDay:{
      tech:"If the crisis had gone badly, entire research ecosystems would have been destroyed. Silicon Valley, for instance, was within range.",
      culture:"Nuclear anxiety would have been validated rather than gradually fading. The cultural relationship with technology and government would be completely different.",
      politics:"Arms control frameworks that emerged from the crisis shaped every subsequent negotiation. Without them, nuclear proliferation might be far worse.",
      daily:"The fact that you're reading this is partly because Vasili Arkhipov said no. That's not hyperbole."}},

  {id:"american_revolution",name:"American Revolution",born:1776,died:null,cat:"events",cat2:"politics",field:"Independence Movement",
    quote:"We hold these truths to be self-evident, that all men are created equal.",
    contributions:["First modern democratic republic","Bill of Rights model","Inspired global independence movements","Established separation of powers"],
    r:0.5,reasoning:"Colonial tensions with Britain were real and growing. Taxation disputes, Enlightenment philosophy, and local self-governance traditions made some kind of break likely within a generation. But the specific form — total independence rather than home rule, a republic rather than constitutional reform, success rather than suppression — was not guaranteed. Many contemporaries expected reconciliation.",
    counterfactual:"Without the Revolution succeeding in 1776, the colonies likely achieve dominion status like Canada by the early 1800s. The constitutional model that influenced France, Latin America, and beyond doesn't exist in the same form. Slavery might end earlier under British pressure (Britain abolished it in 1833). The specific American experiment in republican government — with its strengths and pathologies — doesn't become the global template.",
    impact:{lives:"Hundreds of millions shaped by American political model",econ:"Created largest economy in world history",cultural:"American exceptionalism, democratic idealism",reach:"Global — US model copied and adapted worldwide",timeline:"Colonial autonomy or independence within 30-50 years regardless"},
    timeline:[
      {year:1776,happened:"Declaration of Independence; Revolutionary War begins",alternate:"Continued negotiations, possible dominion status by 1800s"},
      {year:1783,happened:"Treaty of Paris — British recognize independence",alternate:"Without military victory, home rule arrangement instead"},
      {year:1789,happened:"Constitution ratified, Washington becomes president",alternate:"Different governance model — possibly parliamentary"},
      {year:1791,happened:"Bill of Rights adopted",alternate:"Rights framework develops differently under British constitutional tradition"}
    ],
    cascade:[
      {event:"No American republic in 1776",consequence:"The first large-scale modern democracy doesn't exist as proof of concept. France's revolution lacks the American precedent.",delay:"Immediate",severity:"high",icon:"🗽"},
      {event:"Slavery under British rule",consequence:"Britain abolishes slavery in 1833. American colonies under British rule likely follow. The Civil War doesn't happen.",delay:"~57 years",severity:"high",icon:"⛓️"},
      {event:"No constitutional model",consequence:"The specific American model — separation of powers, federalism, bill of rights — doesn't become the template. Other nations build governance differently.",delay:"~50 years",severity:"high",icon:"📜"},
      {event:"Different Western Hemisphere",consequence:"Latin American independence movements don't have the American model. Monroe Doctrine doesn't exist. European powers retain more influence in the Americas.",delay:"~50 years",severity:"medium",icon:"🌎"}
    ],
    modernDay:{
      tech:"Technology development might not differ much — innovation drivers were largely independent of governance form.",
      culture:"No American cultural hegemony in the same form. Hollywood, jazz, rock and roll — all products of a specific American experience — might not exist.",
      politics:"The world's dominant political model would look more parliamentary. The specific American pathologies (two-party system, electoral college) wouldn't be global reference points.",
      daily:"English still dominates, but American English as the global standard might not. Cultural products you consume daily would come from different sources."}},

  {id:"ww1",name:"World War I",born:1914,died:null,cat:"events",cat2:"military",field:"Global Conflict",
    quote:"The lamps are going out all over Europe; we shall not see them lit again in our lifetime.",
    contributions:["Ended four empires","Created modern Middle East","Enabled rise of communism and fascism","Introduced industrial warfare"],
    r:0.55,reasoning:"European tensions were high but not uniquely so — crises in 1905, 1908, and 1911 all resolved without war. The specific trigger (Archduke's assassination) and the cascade of alliance obligations that followed were contingent. Many historians argue a general European war was likely eventually, but the specific timing, participants, and devastating form were not predetermined.",
    counterfactual:"Without WWI in 1914, Europe's great powers continue their unstable equilibrium. A war might come in the 1920s over colonial disputes or Balkan tensions, but it might also be smaller or resolved faster. Without the specific devastation of 1914-1918, there's no Russian Revolution in 1917, no Nazi Germany, no Holocaust. The entire 20th century is unrecognizable.",
    impact:{lives:"20 million dead; 21 million wounded",econ:"Destroyed European economic dominance; $334 billion in costs",cultural:"Lost Generation; modernism in art and literature",reach:"Global — 30+ nations involved",timeline:"European great power war possible within 20 years, but not certain"},
    timeline:[
      {year:1914,happened:"Assassination of Archduke Franz Ferdinand triggers alliance cascade",alternate:"Another Balkan crisis resolved diplomatically, as previous ones were"},
      {year:1917,happened:"Russian Revolution topples Tsar; US enters war",alternate:"No war means no revolution — the Romanovs survive longer"},
      {year:1918,happened:"Central Powers defeated; four empires collapse",alternate:"Ottoman, Austro-Hungarian, German, Russian empires reform rather than shatter"},
      {year:1919,happened:"Treaty of Versailles imposes harsh terms on Germany",alternate:"No punitive peace, no conditions for Nazi rise"}
    ],
    cascade:[
      {event:"No assassination cascade in 1914",consequence:"The alliance system remains tense but intact. Diplomatic conferences continue managing crises as they had for decades.",delay:"Immediate",severity:"high",icon:"🔫"},
      {event:"No Russian Revolution",consequence:"Without the war's devastation and military failures, the Tsar's regime persists. Communism as a state ideology doesn't get its test case.",delay:"~3 years",severity:"high",icon:"🇷🇺"},
      {event:"No punitive Versailles Treaty",consequence:"Without the humiliation and economic devastation of Versailles, the conditions that produced Hitler don't exist. The Nazi party never gains traction.",delay:"~5 years",severity:"high",icon:"📜"},
      {event:"No World War II",consequence:"Without WWI's aftermath, WWII in its specific form doesn't happen. The Holocaust doesn't happen. The entire mid-20th century is different.",delay:"~25 years",severity:"high",icon:"🌍"}
    ],
    modernDay:{
      tech:"Nuclear weapons might still be developed — the physics was independent — but without WWII's urgency, the Manhattan Project doesn't happen when it did.",
      culture:"The Lost Generation's art and literature — Hemingway, Remarque, Sassoon — doesn't exist. Modernism might develop differently without the war's trauma.",
      politics:"The Middle East's borders, drawn by Sykes-Picot, don't exist. Israel might not exist. The entire geopolitics of oil and religion in the region is different.",
      daily:"The map of Europe looks completely different. Countries like Yugoslavia, Czechoslovakia, and the modern Middle East states were all WWI products."}},

  {id:"chernobyl",name:"Chernobyl Disaster",born:1986,died:null,cat:"events",cat2:"science",field:"Nuclear Disaster",
    quote:"Every lie we tell incurs a debt to the truth. Sooner or later, that debt is paid.",
    contributions:["Exposed Soviet system's fatal flaws","Turned global opinion against nuclear power","Accelerated glasnost and Soviet collapse","Created permanent exclusion zone"],
    r:0.65,reasoning:"The RBMK reactor design had known flaws that Soviet bureaucracy refused to address. Some accident was likely eventually. But the specific Chernobyl disaster — the safety test gone wrong, the operators overriding alarms, the graphite fire — was contingent on a chain of human errors on a specific night. A different accident at a different reactor might have been containable.",
    counterfactual:"Without Chernobyl specifically, nuclear power's trajectory changes dramatically. The global backlash against nuclear energy doesn't happen at the same scale. Countries like Germany and Italy might never abandon nuclear programs. The Soviet Union still faces systemic problems, but without this specific embarrassment, glasnost proceeds differently. The timeline of Soviet collapse might shift.",
    impact:{lives:"31 direct deaths; estimated 4,000-93,000 excess cancer deaths",econ:"$235 billion in damages; nuclear industry losses globally",cultural:"Became symbol of Soviet dysfunction and nuclear danger",reach:"Radiation spread across Europe; policy impact global",timeline:"Some Soviet nuclear incident likely, but this scale was contingent"},
    timeline:[
      {year:1986,happened:"Reactor 4 explodes during safety test; fire burns for 10 days",alternate:"Safety test succeeds or fails without catastrophic explosion"},
      {year:1986,happened:"Gorbachev forced into glasnost about disaster",alternate:"Without this specific crisis, transparency reforms are slower"},
      {year:1987,happened:"Anti-nuclear movements surge globally",alternate:"Nuclear power continues expanding; dozens more reactors built"},
      {year:2011,happened:"Fukushima — Germany abandons nuclear entirely",alternate:"Without Chernobyl precedent, Fukushima response might be different"}
    ],
    cascade:[
      {event:"No Chernobyl explosion",consequence:"The RBMK design flaw is eventually fixed through internal channels. Soviet nuclear program continues without global embarrassment.",delay:"Immediate",severity:"high",icon:"☢️"},
      {event:"Nuclear power keeps expanding",consequence:"Without the defining anti-nuclear disaster, dozens more reactors get built in the late 1980s-90s. Nuclear might be 30-40% of global electricity today.",delay:"~5 years",severity:"high",icon:"⚡"},
      {event:"Slower glasnost",consequence:"Gorbachev's hand isn't forced on transparency. Reforms proceed more cautiously. The Soviet Union might survive a few years longer.",delay:"~3 years",severity:"medium",icon:"🇷🇺"},
      {event:"Different climate trajectory",consequence:"With more nuclear power and less coal/gas, global carbon emissions might be 10-15% lower. Climate change is still happening but slower.",delay:"~30 years",severity:"high",icon:"🌍"}
    ],
    modernDay:{
      tech:"Nuclear reactor technology might be a generation more advanced if investment hadn't collapsed after 1986.",
      culture:"The word 'Chernobyl' wouldn't be a global shorthand for catastrophic failure. Public attitudes toward nuclear technology would be much more positive.",
      politics:"Energy policy worldwide would look different. Countries that abandoned nuclear might still be running reactors. The climate debate would have a different shape.",
      daily:"Your electricity might come from nuclear rather than gas or coal. Energy prices might be lower. The air might be slightly cleaner."}},

  {id:"covid19",name:"COVID-19 Pandemic",born:2020,died:null,cat:"events",cat2:"medicine",field:"Global Pandemic",
    quote:"We are in this together, and we will get through this together.",
    contributions:["Accelerated remote work revolution","Drove mRNA vaccine breakthrough","Exposed supply chain fragility","Reshaped public health infrastructure"],
    r:0.4,reasoning:"Epidemiologists had been warning about a pandemic for decades. SARS, MERS, and H1N1 were rehearsals. A novel respiratory virus jumping from animals to humans was a matter of when, not if. But the specific SARS-CoV-2 virus, its particular transmissibility, and the policy responses were contingent. A different pandemic virus might have been more or less deadly, more or less transmissible.",
    counterfactual:"Without COVID-19 specifically, some pandemic still hits within a decade — the conditions (wet markets, factory farming, deforestation, global travel) guaranteed it. But a different virus might be less transmissible, or more deadly, or emerge in a different country. Remote work still trends upward but without the overnight forced adoption. mRNA vaccines develop on a slower research timeline. The specific political polarization around COVID doesn't happen.",
    impact:{lives:"7+ million official deaths; likely 15-25 million excess deaths",econ:"$16+ trillion in global economic losses",cultural:"Transformed work, education, and social interaction",reach:"Every country on Earth",timeline:"Some pandemic within 10-15 years was near-certain"},
    timeline:[
      {year:2020,happened:"COVID-19 spreads globally; lockdowns begin",alternate:"Different virus, different timeline, different severity"},
      {year:2020,happened:"Remote work becomes mainstream overnight",alternate:"Remote work grows gradually over a decade instead"},
      {year:2021,happened:"mRNA vaccines developed in record time",alternate:"mRNA technology proves itself on a slower research schedule"},
      {year:2022,happened:"Pandemic disrupts supply chains, triggers inflation",alternate:"Supply chains face different stresses on different timeline"}
    ],
    cascade:[
      {event:"No COVID-19 in 2020",consequence:"The world continues without forced adoption of remote work. Office culture persists as default. Zoom stays a niche product.",delay:"Immediate",severity:"medium",icon:"🏠"},
      {event:"No emergency mRNA push",consequence:"mRNA vaccine technology still advances but on a 5-10 year research timeline. It's proven for cancer before infectious disease.",delay:"~5 years",severity:"medium",icon:"💉"},
      {event:"No supply chain crisis",consequence:"Global supply chains remain 'just in time' without stress-testing. The reshoring movement doesn't get political momentum.",delay:"~2 years",severity:"medium",icon:"📦"},
      {event:"Different political landscape",consequence:"Without pandemic politics, the 2020s partisan landscape is different. Anti-vaccine movements are smaller. Trust in institutions doesn't crater the same way.",delay:"~1 year",severity:"high",icon:"🗳️"}
    ],
    modernDay:{
      tech:"Remote work tools are less advanced. Zoom, Teams, and Slack exist but aren't the infrastructure of daily work. mRNA vaccines are still in clinical trials for infectious disease.",
      culture:"The shared trauma of lockdowns doesn't exist. No 'unprecedented times' language. Social isolation and mental health crises take different forms.",
      politics:"Pandemic-era polarization doesn't exist. Trust in public health is higher. The specific political movements fueled by lockdown frustration don't materialize.",
      daily:"You probably go to an office five days a week. Masks are not a cultural symbol. Your relationship with personal space and crowds is different."}},

  {id:"hiroshima",name:"Atomic Bombings of Japan",born:1945,died:null,cat:"events",cat2:"military",field:"Nuclear Warfare",
    quote:"Now I am become Death, the destroyer of worlds.",
    contributions:["Only use of nuclear weapons in war","Ended World War II in the Pacific","Began nuclear arms race","Established nuclear taboo"],
    r:0.45,reasoning:"The Manhattan Project was converging on a working bomb by mid-1945, and Truman was going to use it — the political and military pressures were overwhelming. But the specific targets, the decision not to demonstrate first, and the two-bomb sequence were debated. A demonstration on an uninhabited island was seriously considered. The Soviet entry into the Pacific war was also about to force Japan's hand.",
    counterfactual:"Without the bombings, Japan likely surrenders within weeks anyway — the Soviet invasion of Manchuria on August 8 was devastating. But without Hiroshima's specific horror, the nuclear taboo develops differently. The world learns about nuclear weapons through a test or demonstration rather than 200,000 civilian deaths. The visceral fear that prevented nuclear use during the Cold War might be weaker.",
    impact:{lives:"200,000+ killed; millions affected by radiation; prevented millions of casualties in planned invasion",econ:"Ended WWII, enabling post-war economic boom",cultural:"Created nuclear age; transformed relationship with technology",reach:"Global — reshaped all geopolitics",timeline:"Nuclear weapons used or demonstrated within months regardless"},
    timeline:[
      {year:1945,happened:"Hiroshima and Nagasaki bombed; Japan surrenders",alternate:"Demonstration or Soviet invasion forces surrender within weeks"},
      {year:1949,happened:"Soviet Union tests first atomic bomb",alternate:"Arms race still begins but without the moral weight of civilian use"},
      {year:1962,happened:"Cuban Missile Crisis — nuclear taboo holds",alternate:"Without Hiroshima's horror, leaders might be more willing to use nuclear weapons"},
      {year:1968,happened:"Non-Proliferation Treaty signed",alternate:"Nuclear restraint has less emotional foundation without civilian bombing precedent"}
    ],
    cascade:[
      {event:"No civilian nuclear bombing",consequence:"Nuclear weapons exist but haven't been used on people. Their destructive power is known theoretically but not viscerally.",delay:"Immediate",severity:"high",icon:"☢️"},
      {event:"Weaker nuclear taboo",consequence:"Without 200,000 civilian deaths seared into collective memory, the psychological barrier to using nuclear weapons is lower.",delay:"~10 years",severity:"high",icon:"🕊️"},
      {event:"Japan surrenders anyway",consequence:"Soviet invasion of Manchuria and continued conventional bombing force surrender. The narrative is about Soviet power, not American technology.",delay:"~2 weeks",severity:"medium",icon:"🇯🇵"},
      {event:"Different Cold War dynamics",consequence:"Nuclear weapons are seen as very powerful bombs, not civilization-ending weapons. Deterrence doctrine develops differently. Crises might be more dangerous.",delay:"~15 years",severity:"high",icon:"🌍"}
    ],
    modernDay:{
      tech:"Nuclear technology still advances on the same physics. Power plants, weapons, medicine — all develop similarly.",
      culture:"The specific horror of Hiroshima — the shadows burned into walls, the hibakusha survivors — doesn't exist as cultural memory. Anti-nuclear movements have less emotional foundation.",
      politics:"Nuclear deterrence might be less stable without the taboo. More countries might have used nuclear weapons in regional conflicts.",
      daily:"The world might actually be more dangerous. The horror of Hiroshima arguably saved millions of lives by making nuclear war unthinkable."}},

  {id:"internet_launch",name:"Birth of the Internet",born:1983,died:null,cat:"events",cat2:"computing",field:"Communications Revolution",
    quote:"The Internet is the first thing that humanity has built that humanity doesn't understand.",
    contributions:["Connected billions of people","Created digital economy","Transformed communication","Enabled information age"],
    r:0.2,reasoning:"Packet-switching networks were being developed independently at multiple institutions. ARPANET was one of several approaches. The underlying demand — fast, decentralized digital communication — was enormous and the technology was converging from multiple directions. The internet as we know it has specific design choices (TCP/IP, open protocols) that weren't inevitable, but some form of global computer network was coming regardless.",
    counterfactual:"Without ARPANET and the specific 1983 TCP/IP switchover, a global network still emerges by the early 1990s — possibly from European or commercial initiatives. The open, decentralized architecture might not survive; a more centralized, telecom-controlled network was the alternative path. The web might look more like cable TV — channels you subscribe to rather than sites anyone can create.",
    impact:{lives:"5+ billion users worldwide",econ:"Digital economy worth $15+ trillion",cultural:"Transformed every aspect of human communication and culture",reach:"Global — most transformative technology since printing",timeline:"Global computer network within 10 years regardless of ARPANET"},
    timeline:[
      {year:1969,happened:"ARPANET connects first four nodes",alternate:"University and military networks develop independently"},
      {year:1983,happened:"TCP/IP becomes standard; 'internet' born",alternate:"Competing protocols fragment into incompatible networks"},
      {year:1991,happened:"World Wide Web launched by Tim Berners-Lee",alternate:"Information services develop but possibly behind paywalls"},
      {year:1995,happened:"Commercial internet explodes; Netscape IPO",alternate:"Commercial networks emerge but might be more like AOL — walled gardens"}
    ],
    cascade:[
      {event:"No open ARPANET model",consequence:"Computer networks develop through telecom companies instead of universities. The default is centralized, controlled, and metered.",delay:"~10 years",severity:"high",icon:"🌐"},
      {event:"No open web",consequence:"Without the culture of open protocols, the 'anyone can publish' web might not exist. Information access is more like cable — you pay for channels.",delay:"~20 years",severity:"high",icon:"📱"},
      {event:"Different innovation model",consequence:"Without open platforms, startups like Google, Facebook, and Amazon can't emerge the same way. Innovation is controlled by telecom incumbents.",delay:"~25 years",severity:"high",icon:"💡"},
      {event:"Different information landscape",consequence:"Misinformation spreads slower but so does useful information. The democratization of knowledge is more limited.",delay:"~30 years",severity:"medium",icon:"📰"}
    ],
    modernDay:{
      tech:"Some form of global network exists, but it might look more like interactive television than the open web. App stores and walled gardens might be the only option, not just the trend.",
      culture:"Social media as we know it might not exist. The creator economy, influencer culture, and viral content all depend on open publishing platforms.",
      politics:"Online political organizing looks different. Authoritarian governments might find it easier to control information on a centralized network.",
      daily:"You still have a connected device, but it might feel more like choosing cable channels than browsing an open web. The specific freedom of the internet isn't guaranteed."}},

  {id:"fall_berlin_wall",name:"Fall of the Berlin Wall",born:1989,died:null,cat:"events",cat2:"politics",field:"Cold War Turning Point",
    quote:"Mr. Gorbachev, tear down this wall!",
    contributions:["Ended the Cold War symbolically","Reunified Germany","Triggered collapse of Eastern Bloc","Reshaped European borders"],
    r:0.5,reasoning:"The Soviet system was crumbling — economically, politically, and ideologically. Some form of Eastern Bloc liberalization was coming. But the specific night of November 9, 1989 was an accident — a confused press conference by Günter Schabowski led to crowds at the wall before authorities could organize a response. The peaceful nature of the collapse was not guaranteed. China's Tiananmen Square, just months earlier, showed the alternative.",
    counterfactual:"Without the accidental November 9 opening, the wall still falls within months — the pressures were too great. But a planned, controlled opening looks different. East Germany might negotiate better terms. German reunification might happen more gradually, possibly as a confederation first. The domino effect across Eastern Europe might be slower, giving hardliners more time to organize resistance. Some countries might see Tiananmen-style crackdowns.",
    impact:{lives:"Hundreds of millions freed from authoritarian rule",econ:"German reunification cost $2+ trillion; opened Eastern European markets",cultural:"Defined 'end of history' optimism of the 1990s",reach:"All of Europe; global geopolitical implications",timeline:"Eastern Bloc liberalization within 1-2 years regardless"},
    timeline:[
      {year:1989,happened:"Wall falls November 9 after confused press conference",alternate:"Controlled border opening in early 1990 — less dramatic, more orderly"},
      {year:1990,happened:"Rapid German reunification",alternate:"Slower confederation process, possibly taking 5-10 years"},
      {year:1991,happened:"Soviet Union dissolves",alternate:"USSR reforms into looser confederation, dissolution takes longer"},
      {year:1999,happened:"NATO expands eastward",alternate:"Slower expansion gives Russia more time to adjust — or resist"}
    ],
    cascade:[
      {event:"No spontaneous wall opening",consequence:"The dramatic images that inspired the rest of Eastern Europe don't happen. The domino effect is slower.",delay:"Immediate",severity:"medium",icon:"🧱"},
      {event:"Slower German reunification",consequence:"A gradual process gives both sides time to negotiate. East Germany retains more identity. The economic shock is spread over a decade.",delay:"~1 year",severity:"medium",icon:"🇩🇪"},
      {event:"Hardliner resistance possible",consequence:"Without the momentum of the wall's fall, conservative communists in Romania, Czechoslovakia, or East Germany might attempt Tiananmen-style crackdowns.",delay:"~1 year",severity:"high",icon:"✊"},
      {event:"Different 1990s optimism",consequence:"Without the dramatic, peaceful collapse, the 'end of history' euphoria is more muted. The West is less triumphalist.",delay:"~2 years",severity:"medium",icon:"🌍"}
    ],
    modernDay:{
      tech:"Minimal direct tech impact — the same innovations emerge regardless.",
      culture:"The Berlin Wall as symbol of freedom's triumph doesn't have the same dramatic imagery. The 1990s optimism has a different flavor.",
      politics:"NATO expansion might be slower and less provocative to Russia. Putin's narrative of Western encirclement might have less fuel.",
      daily:"Berlin looks different — the scars of division might be more visible if reunification was gradual rather than sudden."}},

  {id:"haitian_revolution",name:"Haitian Revolution",born:1791,died:null,cat:"events",cat2:"social",field:"Slave Revolt",
    quote:"I was born a slave, but nature gave me the soul of a free man.",
    contributions:["First successful large-scale slave revolt","Created first Black republic","Influenced abolition movements worldwide","Proved enslaved people could defeat European armies"],
    r:0.7,reasoning:"Slave revolts happened regularly across the Caribbean, but almost all were suppressed. Haiti's success required a unique convergence: the French Revolution creating political chaos, Toussaint Louverture's military genius, yellow fever devastating French reinforcements, and Napoleon's decision to cut losses. Another revolt of this scale and success was far from guaranteed.",
    counterfactual:"Without the Haitian Revolution's success, Caribbean slavery persists longer and more confidently. The proof that enslaved people could defeat European armies — that abolition could be seized, not just granted — doesn't exist. British abolition in 1833 might be delayed. The Louisiana Purchase might not happen (Napoleon sold Louisiana partly because he lost Haiti). The entire trajectory of Black freedom movements shifts.",
    impact:{lives:"500,000 enslaved people freed; inspired millions",econ:"Destroyed most profitable colony in the world; triggered Louisiana Purchase",cultural:"Proved Black self-governance possible against every racist assumption",reach:"Caribbean, Americas, Africa — wherever slavery existed",timeline:"No other slave revolt of this scale succeeded for decades"},
    timeline:[
      {year:1791,happened:"Massive slave uprising begins in Saint-Domingue",alternate:"Another suppressed revolt; Caribbean plantation system continues"},
      {year:1801,happened:"Toussaint Louverture controls the island",alternate:"French maintain control; slavery continues"},
      {year:1803,happened:"Napoleon sells Louisiana to US after Haiti loss",alternate:"France retains Louisiana; US expansion changes"},
      {year:1804,happened:"Haiti declares independence — first Black republic",alternate:"No proof of concept for Black self-governance for decades"}
    ],
    cascade:[
      {event:"No successful slave revolt",consequence:"Caribbean plantation slavery continues at full strength. The economic argument for abolition weakens — slavery is still profitable.",delay:"Immediate",severity:"high",icon:"⛓️"},
      {event:"No Louisiana Purchase",consequence:"Napoleon keeps Louisiana as part of a Caribbean empire. The United States doesn't double in size. Western expansion takes a completely different path.",delay:"~2 years",severity:"high",icon:"🗺️"},
      {event:"Delayed abolition movements",consequence:"Without Haiti proving it possible, abolitionists lose their most powerful argument. British abolition in 1833 might be delayed by a decade or more.",delay:"~30 years",severity:"high",icon:"✊"},
      {event:"Different racial politics",consequence:"The fear that Haiti instilled in slaveholders shaped American racial politics for generations. Without it, the arguments change — but so does the proof of Black capability.",delay:"~50 years",severity:"high",icon:"🌍"}
    ],
    modernDay:{
      tech:"Minimal direct tech impact.",
      culture:"The concept that enslaved people could win their freedom through revolution — that's Haiti's gift to the world. Without it, the narrative of Black liberation develops very differently.",
      politics:"The United States might not stretch to the Pacific if the Louisiana Purchase doesn't happen. American geography and politics are unrecognizable.",
      daily:"If you live in the western United States, your state might not exist — or might be part of a different country entirely."}},

  {id:"arab_spring",name:"Arab Spring",born:2011,died:null,cat:"events",cat2:"social",field:"Mass Protest Movement",
    quote:"The people want to bring down the regime.",
    contributions:["Toppled multiple authoritarian governments","Demonstrated power of social media in organizing","Triggered Syrian civil war","Reshaped Middle East politics"],
    r:0.55,reasoning:"Youth unemployment, corruption, and authoritarianism made unrest likely across the Arab world. But the specific trigger — Mohamed Bouazizi's self-immolation in Tunisia — and the rapid spread via social media were contingent. Previous protests had been contained. The specific cascade from Tunisia to Egypt to Libya to Syria was not predetermined.",
    counterfactual:"Without Bouazizi's specific act and its viral spread, the underlying pressures still exist but might express themselves differently — isolated protests rather than a regional wave. Mubarak might survive a few more years. The Syrian civil war might not happen. Libya's Gaddafi stays in power longer. The refugee crisis that reshaped European politics might be smaller or take a different form.",
    impact:{lives:"Millions displaced; hundreds of thousands killed in subsequent conflicts",econ:"Trillions in economic disruption across the region",cultural:"Proved social media could organize revolution",reach:"Entire Middle East and North Africa; refugee impact on Europe",timeline:"Regional unrest likely within 5 years, but cascade form was contingent"},
    timeline:[
      {year:2011,happened:"Bouazizi self-immolation triggers Tunisian revolution",alternate:"Another isolated protest is contained by security forces"},
      {year:2011,happened:"Mubarak falls in Egypt after 18 days of protest",alternate:"Egyptian regime adapts with minor reforms"},
      {year:2011,happened:"Syrian uprising begins, eventually becomes civil war",alternate:"Assad faces protests but contains them without full civil war"},
      {year:2015,happened:"European refugee crisis peaks",alternate:"Migration pressures exist but without Syrian war's scale"}
    ],
    cascade:[
      {event:"No viral cascade from Tunisia",consequence:"Individual country protests happen but don't feed off each other. Each regime handles dissent separately, usually through repression.",delay:"Immediate",severity:"high",icon:"📱"},
      {event:"No Syrian civil war",consequence:"Without the regional momentum, Assad's security forces contain protests. Hundreds of thousands of lives are different. ISIS doesn't get its territory.",delay:"~6 months",severity:"high",icon:"🇸🇾"},
      {event:"Smaller refugee crisis",consequence:"Without Syria's collapse, the 2015 European refugee crisis is far smaller. Right-wing populism in Europe has less fuel.",delay:"~4 years",severity:"high",icon:"🚢"},
      {event:"Different European politics",consequence:"Brexit, the rise of far-right parties across Europe — much of this was fueled by the refugee crisis. Without it, the 2010s political landscape is calmer.",delay:"~5 years",severity:"high",icon:"🇪🇺"}
    ],
    modernDay:{
      tech:"Social media's role in political organizing is still recognized, but without the Arab Spring as proof of concept, the conversation about tech and democracy is different.",
      culture:"The optimism about social media as a democratizing force — and the subsequent disillusionment — takes a different arc.",
      politics:"European populism still exists but without the refugee crisis as accelerant. Brexit might not happen. EU politics are more stable.",
      daily:"If you live in Europe, immigration politics are less intense. If you live in Syria, your country isn't destroyed."}},

  {id:"industrial_revolution",name:"Industrial Revolution",born:1760,died:null,cat:"events",cat2:"inventions",field:"Economic Transformation",
    quote:"The wealth of nations depends upon the division of labor.",
    contributions:["Mechanized production","Urbanization of society","Created working class","Began fossil fuel dependence"],
    r:0.25,reasoning:"The conditions for industrialization — coal deposits, capital accumulation, scientific knowledge, labor availability, patent systems — were converging across Northwestern Europe. If not Britain in the 1760s, then the Low Countries or France within a generation. The specific British form (textiles first, then iron, then railways) was contingent, but the broader transformation was coming.",
    counterfactual:"Without the British Industrial Revolution starting in the 1760s, industrialization begins in the 1790s-1800s, possibly in Belgium or France. The 30-year delay changes which nations lead the industrial world. Britain might not become the global hegemon. The specific horrors of early industrialization (child labor in British mills, urban squalor) take different forms. But by 1850, the world is industrializing regardless.",
    impact:{lives:"Every human alive today — transformed how all 8 billion live",econ:"Increased global GDP per capita by 10x+ over 200 years",cultural:"Created modern concepts of work, class, and progress",reach:"Global — eventually reached every society",timeline:"Industrialization within 30 years regardless of Britain's timing"},
    timeline:[
      {year:1760,happened:"Textile mills mechanize in Northern England",alternate:"Mechanization begins in Low Countries or France by 1790s"},
      {year:1830,happened:"Railways transform transportation",alternate:"Rail development delayed by 10-20 years"},
      {year:1850,happened:"Britain is 'workshop of the world'",alternate:"Different nation leads — possibly Belgium or a unified Germany"},
      {year:1900,happened:"Industrialization has spread globally",alternate:"Same endpoint reached, ~20-30 years later"}
    ],
    cascade:[
      {event:"No British lead in 1760s",consequence:"The specific British model — private enterprise, minimal regulation, rapid urbanization — isn't the template. Alternative paths might be more state-directed.",delay:"~30 years",severity:"medium",icon:"🏭"},
      {event:"Different colonial dynamics",consequence:"Without industrial military advantage, British colonial expansion is slower. India's colonization might take a different form.",delay:"~50 years",severity:"high",icon:"🌍"},
      {event:"Different labor movements",consequence:"The specific British working class experience — Luddites, Chartists, trade unions — doesn't set the pattern. Marx might write about Belgian or French conditions instead.",delay:"~80 years",severity:"medium",icon:"✊"},
      {event:"Delayed but inevitable transformation",consequence:"By 1900, the world is still industrialized. The endpoint is similar but the path — which nations lead, which suffer — is different.",delay:"~100 years",severity:"low",icon:"⚙️"}
    ],
    modernDay:{
      tech:"Same technologies exist — the physics and engineering don't change. But the specific companies and nations that led development might be different.",
      culture:"The British cultural fingerprint on industrialization (English as business language, common law in commerce) might be replaced by French or Dutch influence.",
      politics:"Different colonial histories mean different post-colonial politics. India under French rather than British rule has a completely different modern trajectory.",
      daily:"Your daily life is essentially the same — industrialization was coming regardless. But the brands, languages, and cultural references might be different."}},

  {id:"assassination_jfk",name:"JFK Assassination",born:1963,died:null,cat:"events",cat2:"politics",field:"Political Assassination",
    quote:"A man may die, nations may rise and fall, but an idea lives on.",
    contributions:["Transformed American political culture","Fueled conspiracy culture","Elevated Kennedy to mythic status","Shaped 1960s trajectory"],
    r:0.85,reasoning:"This was a genuinely contingent event. Oswald's specific grievances, his position at the Book Depository, the motorcade route through Dealey Plaza — none of this was structurally determined. Kennedy surviving changes the 1960s dramatically. Vietnam escalation might look different. The Great Society programs might not happen as they did. The cultural trauma that shaped a generation doesn't occur.",
    counterfactual:"If Kennedy lives, Vietnam policy is the big question — he was skeptical of escalation but also couldn't appear weak. The most likely scenario: a more limited engagement than Johnson pursued. The Great Society programs happen on a different scale. Bobby Kennedy doesn't run in 1968 on a grief-fueled platform. The 1960s counterculture still emerges but the specific American trauma is different. Conspiracy culture as we know it develops differently.",
    impact:{lives:"Kennedy's death shaped American policy affecting millions",econ:"Policy continuity under LBJ vs potential Kennedy second term",cultural:"Created modern conspiracy culture; Kennedy mythologized",reach:"Global — US policy affects everyone",timeline:"Highly contingent — this specific event was not structurally determined"},
    timeline:[
      {year:1963,happened:"Kennedy assassinated in Dallas",alternate:"Kennedy completes first term, runs for re-election in 1964"},
      {year:1964,happened:"LBJ wins landslide, launches Great Society",alternate:"Kennedy wins re-election more narrowly, pursues own agenda"},
      {year:1965,happened:"LBJ escalates Vietnam with 184,000 troops",alternate:"Kennedy likely pursues more limited Vietnam engagement"},
      {year:1968,happened:"RFK assassinated during presidential campaign",alternate:"RFK doesn't run on same platform; 1968 election is different"}
    ],
    cascade:[
      {event:"Kennedy survives Dallas",consequence:"No national trauma. No martyrdom. Kennedy is judged on his actual record rather than mythologized. His approval ratings were middling.",delay:"Immediate",severity:"high",icon:"🇺🇸"},
      {event:"Different Vietnam trajectory",consequence:"Kennedy was more skeptical of military escalation than Johnson. A more limited engagement means fewer of the 58,000 American deaths in Vietnam.",delay:"~2 years",severity:"high",icon:"🪖"},
      {event:"No conspiracy culture explosion",consequence:"The Warren Commission, the grassy knoll, the magic bullet — none of this enters American consciousness. Institutional trust doesn't erode the same way.",delay:"~5 years",severity:"medium",icon:"🔍"},
      {event:"Different 1968",consequence:"Without JFK's assassination, RFK's 1968 campaign doesn't have the same emotional charge. The entire 1968 election — and possibly Nixon's rise — is different.",delay:"~5 years",severity:"high",icon:"🗳️"}
    ],
    modernDay:{
      tech:"Minimal direct tech impact — space program continues regardless.",
      culture:"American conspiracy culture might be far less prominent. The JFK assassination was the original conspiracy theory that taught Americans to distrust official narratives.",
      politics:"Without the Vietnam escalation and its aftermath, the specific form of American political polarization might look different. Nixon might never become president.",
      daily:"The vague distrust of institutions that pervades American life — the sense that the official story is never the real story — has roots in Dallas, 1963."}},

  {id:"magna_carta",name:"Signing of the Magna Carta",born:1215,died:null,cat:"events",cat2:"politics",field:"Constitutional Law",
    quote:"No free man shall be seized, imprisoned, or stripped of his rights except by the lawful judgment of his peers.",
    contributions:["Established principle that rulers are subject to law","Foundation for habeas corpus","Influenced every subsequent bill of rights","Created concept of due process"],
    r:0.45,reasoning:"English barons had grievances that would have produced some form of concession from the crown — the political dynamics demanded it. But the specific document, its specific clauses, and its survival as a symbol were contingent. Most of Magna Carta's clauses addressed immediate feudal disputes, not grand principles. Its later transformation into a symbol of universal rights was a creative reinterpretation by later generations.",
    counterfactual:"Without Magna Carta specifically, English barons still extract concessions from King John — the political pressure was real. But without this specific document becoming the mythic foundation of English liberty, the common law tradition develops around different precedents. The American founders cited Magna Carta constantly; without it, they'd build their arguments on different foundations. The same principles emerge but through different texts and traditions.",
    impact:{lives:"Billions influenced by legal systems derived from its principles",econ:"Rule of law and property rights essential for economic development",cultural:"Foundation myth of English-speaking world's legal tradition",reach:"Global — through British Empire and American influence",timeline:"Some charter of baronial rights within 10 years regardless"},
    timeline:[
      {year:1215,happened:"Barons force King John to sign Magna Carta at Runnymede",alternate:"Different charter with different specific provisions"},
      {year:1297,happened:"Edward I confirms Magna Carta as statute law",alternate:"Baronial rights established through different legal precedents"},
      {year:1628,happened:"Petition of Right cites Magna Carta against Charles I",alternate:"Parliamentary arguments built on different constitutional foundation"},
      {year:1791,happened:"US Bill of Rights draws on Magna Carta tradition",alternate:"American rights framework built on different philosophical base"}
    ],
    cascade:[
      {event:"No Magna Carta document",consequence:"English baronial rights are established through oral tradition and custom rather than a single iconic text. Less portable as a symbol.",delay:"~10 years",severity:"medium",icon:"📜"},
      {event:"Different common law foundation",consequence:"Without Magna Carta as touchstone, English common law develops around different precedents. Same principles, different mythology.",delay:"~200 years",severity:"medium",icon:"⚖️"},
      {event:"Different American founding rhetoric",consequence:"Jefferson, Madison, and Adams built arguments on Magna Carta. Without it, they cite Locke, Montesquieu, and classical sources more heavily.",delay:"~550 years",severity:"medium",icon:"🗽"},
      {event:"Same destination, different path",consequence:"Rule of law, due process, and limits on executive power still develop. The specific document matters less than the underlying political forces.",delay:"~800 years",severity:"low",icon:"🌍"}
    ],
    modernDay:{
      tech:"No direct tech impact.",
      culture:"The specific phrase 'Magna Carta' as shorthand for fundamental rights doesn't exist. Legal education uses different foundational texts.",
      politics:"Constitutional democracies still exist — the political forces driving them were independent of one document. But the specific rhetoric and symbolism are different.",
      daily:"Your legal rights are essentially the same. The principles Magna Carta symbolizes would have found expression through other documents."}},
];


