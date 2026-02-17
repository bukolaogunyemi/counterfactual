// Institutions database
export const INSTITUTIONS = [
  {id:"un",name:"United Nations",born:1945,died:null,cat:"institutions",field:"International Governance",
    quote:"We the peoples of the United Nations determined to save succeeding generations from the scourge of war.",
    contributions:["Peacekeeping missions worldwide","Universal Declaration of Human Rights","Sustainable Development Goals","Forum for diplomacy"],
    r:0.55,reasoning:"League of Nations had failed, but international cooperation was needed. Post-WWII powers would have created some forum. A different organization would have emerged.",
    counterfactual:"Without the UN, some international body still emerges â€” the victors of WWII needed coordination, and the League of Nations had shown both the need and the pitfalls. But the specific UN might not exist: the Security Council's veto system, the General Assembly's structure, the specialized agencies. A different organization might have been more dominated by great powers, or more democratic, or regional rather than global. The Universal Declaration of Human Rights might never be drafted.",
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
    impact:{lives:"Peacekeeping: millions protected",econ:"International development: $50B+ annually",cultural:"Global cooperation model",reach:"193 member states",timeline:"Alternative international body emerges"},

    cascade:[
      {event:"No unified post-war forum",consequence:"The Big Four coordinate bilaterally. Disputes between US and USSR lack a neutral stage. Proxy conflicts escalate faster without Security Council debate.",delay:"Immediate",severity:"high",icon:"ðŸ›ï¸"},
      {event:"No Universal Declaration of Human Rights",consequence:"International human rights law develops country by country. No global standard. Authoritarian governments face less rhetorical pressure.",delay:"~3 years",severity:"high",icon:"ðŸ“œ"},
      {event:"Decolonization lacks global stage",consequence:"New nations have no General Assembly to join, no international recognition pathway. Former colonial powers negotiate bilaterally with more leverage.",delay:"~15 years",severity:"medium",icon:"ðŸŒ"},
      {event:"Peacekeeping never institutionalizes",consequence:"Regional powers handle conflicts alone. More proxy wars, messier endings. The Korean War plays out without UN mandate.",delay:"~5 years",severity:"high",icon:"âš”ï¸"}
    ],
    modernDay:{
      tech:"UN specialized agencies set global standards â€” internet domain names (ITU), aviation codes (ICAO), weather data (WMO). Without them, competing national standards create friction.",
      culture:"The very concept of 'the international community' as a collective actor doesn't exist in the same way. Global responses to crises are more openly transactional.",
      politics:"Without the Security Council veto system, great-power competition has no institutional pressure valve. The Cold War might have turned hot at several flashpoints where UN mediation helped."
    }},
  {id:"redcross",name:"Red Cross / Red Crescent",born:1863,died:null,cat:"institutions",field:"Humanitarian Aid",
    quote:"Inter arma caritas â€” In war, charity.",
    contributions:["Geneva Conventions foundation","Disaster relief globally","Blood bank system","War prisoner protection"],
    r:0.40,reasoning:"Henry Dunant founded it after witnessing Battle of Solferino. Institutionalizing humanitarian impulses was specific achievement. Without Dunant, humanitarian law might have developed very differently.",
    counterfactual:"Without Henry Dunant witnessing the Battle of Solferino and being moved to action, the institutionalization of humanitarian aid might have been delayed by decades. The Geneva Conventions that govern warfare â€” protecting wounded soldiers, prisoners, civilians â€” might not exist. War would be even more brutal. The model of neutral humanitarian organizations operating in conflicts might never develop. Every subsequent humanitarian organization built on the Red Cross model.",
    ripples:[
      {category:"Geneva Conventions",detail:"Without the Red Cross driving them, laws of war might be weaker or nonexistent. Treatment of prisoners, wounded, civilians worse."},
      {category:"Neutral Humanitarianism",detail:"The model of neutral organizations operating in conflicts doesn't exist. Aid is always aligned with political powers."},
      {category:"Blood Banks",detail:"The Red Cross developed modern blood banking. Without it, blood donation develops differently, potentially saving fewer lives."},
      {category:"Disaster Response",detail:"The model of organized disaster relief â€” immediate response, coordination, volunteers â€” develops later or differently."}
    ],
    timeline:[
      {year:1859,happened:"Dunant witnesses Solferino; moved to act",alternate:"Battle happens; no one organizes response; humanitarian impulse doesn't institutionalize"},
      {year:1864,happened:"First Geneva Convention signed",alternate:"No laws of war; wounded soldiers left to die; prisoners mistreated"},
      {year:1914,happened:"Red Cross crucial in WWI",alternate:"WWI even more brutal without humanitarian coordination"},
      {year:2020,happened:"Red Cross responds to COVID, disasters globally",alternate:"Humanitarian response more fragmented, less effective"}
    ],
    impact:{lives:"Billions aided since 1863",econ:"$3B+ annual operations",cultural:"Neutral humanitarian symbol",reach:"192 national societies",timeline:"Humanitarian law develops much slower"},

    cascade:[
      {event:"No Geneva Conventions",consequence:"Wars continue without codified protections for wounded, prisoners, or civilians. Treatment of POWs varies by captor's whim.",delay:"~1 year",severity:"high",icon:"âš–ï¸"},
      {event:"World War I without humanitarian law",consequence:"Gas attacks, trench warfare proceed without even symbolic limits. Prisoner exchanges are ad hoc. Wounded are left to die more often.",delay:"~51 years",severity:"high",icon:"ðŸ’€"},
      {event:"No neutral humanitarian space",consequence:"All wartime aid is aligned with one side. Relief workers are legitimate military targets. Hospitals in war zones get no protection.",delay:"~50 years",severity:"high",icon:"ðŸ¥"},
      {event:"Blood banking develops differently",consequence:"The Red Cross built modern blood donation infrastructure. Without it, blood supply systems are fragmented. Surgery during WWII has worse outcomes.",delay:"~80 years",severity:"medium",icon:"ðŸ©¸"}
    ],
    modernDay:{
      tech:"The Red Cross symbol on your first aid kit, the blood donation system at your local hospital â€” these are Red Cross inheritances. Emergency response coordination protocols trace back to their model.",
      culture:"The idea that neutrality in war is even possible â€” that you can help both sides' wounded â€” was a radical concept. Without it, humanitarianism is always political.",
      politics:"The Geneva Conventions that govern every modern conflict are Red Cross creations. Without them, international humanitarian law barely exists."
    }},
  {id:"gatesfoundation",name:"Gates Foundation",born:2000,died:null,cat:"institutions",field:"Global Health",
    quote:"All lives have equal value.",
    contributions:["Malaria and polio eradication efforts","Vaccine funding globally","Agricultural development","Education initiatives"],
    r:0.40,reasoning:"Billionaire philanthropy existed before Gates, but no one deployed so much money so strategically on global health. Other billionaires had different priorities.",
    counterfactual:"Without the Gates Foundation, global health funding has a massive hole. No other billionaire has focused so strategically on eradicating specific diseases. Polio eradication efforts are weaker. Malaria research is underfunded. The model of treating global health as a solvable engineering problem â€” with specific metrics, aggressive timelines, and massive resources â€” might not exist. Other billionaires had different priorities (arts, education, environment).",
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
    impact:{lives:"122M children's lives saved (with partners)",econ:"$77B endowment deployed",cultural:"Billionaire philanthropy model",reach:"Global health systems",timeline:"Global health funding gap"},

    cascade:[
      {event:"Polio eradication stalls",consequence:"Without Gates funding, the WHO's polio campaign loses its largest private donor. The disease persists in more countries. Hundreds of thousands more children are paralyzed.",delay:"Immediate",severity:"high",icon:"ðŸ’‰"},
      {event:"Malaria research underfunded",consequence:"Drug-resistant malaria spreads faster without aggressive research funding. Bed net distribution is smaller. Half a million more deaths annually in sub-Saharan Africa.",delay:"~5 years",severity:"high",icon:"ðŸ¦Ÿ"},
      {event:"No 'effective philanthropy' model",consequence:"The idea of billionaires treating global health like engineering problems doesn't crystallize. Philanthropy stays focused on arts, universities, local causes.",delay:"~10 years",severity:"medium",icon:"ðŸ’°"},
      {event:"GAVI vaccine alliance weaker",consequence:"Without Gates as anchor funder, the global vaccine alliance for developing countries is smaller. Millions of children miss routine immunizations.",delay:"~5 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"The mRNA vaccine platform that fought COVID was partly funded by Gates Foundation grants years before the pandemic. Without that early investment, vaccine development during COVID takes longer.",
      culture:"The 'Giving Pledge' â€” billionaires promising to give away most of their wealth â€” was Gates and Buffett's creation. Without it, the social expectation around extreme wealth looks different.",
      politics:"Global health policy is less centralized. The WHO has less private funding and more dependence on reluctant national governments."
    }},
  {id:"worldbank",name:"World Bank",born:1944,died:null,cat:"institutions",field:"Development Finance",
    quote:"Our dream is a world free of poverty.",
    contributions:["Infrastructure financing globally","Poverty reduction programs","Development economics research","Climate finance"],
    r:0.60,reasoning:"Post-WWII reconstruction required institutional financing. Some development bank would have existed â€” specific form wasn't predetermined, but the need was clear.",
    counterfactual:"Without the World Bank, development finance still exists â€” regional development banks, bilateral aid, private investment. But the specific model of a global development institution setting standards, collecting data, and financing large projects might not emerge. Countries negotiate bilaterally with former colonial powers or superpowers. The 'Washington Consensus' never forms. Development economics as a field might develop very differently.",
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
    impact:{lives:"Billions affected by projects",econ:"$100B+ annual commitments",cultural:"Development paradigm setter",reach:"189 member countries",timeline:"Regional banks fill gap differently"},

    cascade:[
      {event:"No Marshall Plan lending institution",consequence:"European reconstruction after WWII is funded purely bilaterally by the US. Less coordination, more political strings, slower recovery.",delay:"Immediate",severity:"medium",icon:"ðŸ—ï¸"},
      {event:"No development lending model",consequence:"Poor countries borrow from commercial banks at market rates or don't borrow at all. Infrastructure in Africa and Asia develops much slower.",delay:"~10 years",severity:"high",icon:"ðŸ¦"},
      {event:"Structural adjustment never happens",consequence:"For better or worse, the World Bank's conditions on loans shaped economic policy across the developing world. Without them, more varied economic experiments.",delay:"~30 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"No global poverty measurement",consequence:"The World Bank defined the poverty line and tracks global poverty. Without their data, we literally don't know how many people are poor.",delay:"~40 years",severity:"medium",icon:"ðŸ“‰"}
    ],
    modernDay:{
      tech:"World Bank data â€” GDP figures, poverty rates, development indicators â€” is the backbone of global economic statistics. Economists and journalists rely on it daily.",
      culture:"The concept of 'developing' vs 'developed' countries, the $2.15/day poverty line â€” these are World Bank frameworks. We think about global poverty in their terms.",
      politics:"Without conditional lending, countries like South Korea and India might have taken different economic paths. The Washington Consensus that shaped globalization was partly a World Bank product."
    }},
  {id:"who",name:"World Health Organization",born:1948,died:null,cat:"institutions",field:"Global Health",
    quote:"Health is a state of complete physical, mental and social well-being.",
    contributions:["Smallpox eradication achieved","Disease surveillance globally","International health standards","Pandemic coordination"],
    r:0.50,reasoning:"International health coordination existed before WHO. But WHO's specific achievement â€” smallpox eradication â€” required institutional capacity that might not have existed otherwise.",
    counterfactual:"Without WHO, international health coordination still exists â€” it existed before WHO. But smallpox eradication â€” the only human disease ever eradicated â€” might not have happened. The campaign required global coordination, standardized vaccines, ring vaccination strategy. Without WHO, smallpox might have killed another 300 million+ people before being eradicated (if ever). Polio eradication would be even harder. COVID coordination would be more chaotic.",
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
    impact:{lives:"Smallpox eradication: 300M+ would have died",econ:"Global health standards",cultural:"Health as human right",reach:"194 member states",timeline:"Disease eradication slower"},

    cascade:[
      {event:"No global disease surveillance",consequence:"Outbreaks spread further before anyone notices patterns. The 1957 Asian Flu kills more because no coordinated tracking exists.",delay:"~9 years",severity:"high",icon:"ðŸ¦ "},
      {event:"Smallpox eradication never happens",consequence:"WHO coordinated the campaign that eliminated smallpox in 1980. Without them, the disease persists for decades longer. Millions more die.",delay:"~33 years",severity:"high",icon:"ðŸ’‰"},
      {event:"No International Health Regulations",consequence:"Countries set their own quarantine rules. Travel restrictions during epidemics are chaotic and inconsistent. Trade suffers.",delay:"~20 years",severity:"medium",icon:"âœˆï¸"},
      {event:"COVID response more fragmented",consequence:"No single body to declare pandemics, coordinate vaccine distribution, or set treatment guidelines. Each country improvises.",delay:"~72 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"WHO standards determine which drugs are approved globally, how diseases are classified (ICD codes your doctor uses), and vaccination schedules. All of this is less standardized without them.",
      culture:"The idea that health is a global public good â€” not just each country's problem â€” is a WHO inheritance. Without it, international health cooperation is more transactional.",
      politics:"COVID showed both WHO's importance and its limitations. Without WHO, pandemic responses are purely national. Poorer countries get even less support."
    }},
  {id:"nato",name:"NATO",born:1949,died:null,cat:"institutions",field:"Military Alliance",
    quote:"An attack against one is an attack against all.",
    contributions:["Collective defense framework","Cold War deterrence","Post-Cold War expansion","Article 5 mutual defense"],
    r:0.50,reasoning:"Cold War created blocs regardless. Western Europe needed American security guarantees. But NATO's specific form wasn't inevitable. Different alliance might have meant different European security.",
    counterfactual:"Without NATO, Western Europe still seeks American security guarantees â€” the Soviet threat was real. But the specific alliance might look very different. Britain might have its own arrangement with the US. France might stay neutral earlier. Germany might remain divided differently or be neutralized. The integrated military command that NATO developed might not exist. European defense might be more fragmented, more national, less interoperable.",
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
    impact:{lives:"Cold War stability for 600M+ Europeans",econ:"Defense spending coordination",cultural:"Western alliance symbol",reach:"32 member nations",timeline:"European security more fragmented"},

    cascade:[
      {event:"No collective defense in Europe",consequence:"Western European countries build separate militaries. France and Britain might develop nuclear weapons faster. West Germany's rearmament is more frightening to neighbors.",delay:"Immediate",severity:"high",icon:"ðŸ›¡ï¸"},
      {event:"Berlin crises handled differently",consequence:"Without NATO's unified response, the Soviet Union tests Western resolve through bilateral pressure. Individual European nations might cave.",delay:"~4 years",severity:"high",icon:"ðŸ§±"},
      {event:"Korean War response weaker",consequence:"Without NATO alliance structure, the US coalition in Korea is smaller. European allies contribute less. The war might end differently.",delay:"~5 years",severity:"medium",icon:"âš”ï¸"},
      {event:"Cold War is bilateral, not bloc-based",consequence:"The rigid East-West structure dissolves into shifting alliances. More unstable, potentially more dangerous. Nuclear proliferation accelerates.",delay:"~10 years",severity:"high",icon:"â˜¢ï¸"}
    ],
    modernDay:{
      tech:"NATO standardization means allied armies can share ammunition, fuel, and communications. Without it, every European military has incompatible equipment.",
      culture:"The idea that an attack on one is an attack on all â€” Article 5 â€” is NATO's philosophical core. It fundamentally changed how Europe thinks about security.",
      politics:"Without NATO, European defense spending would be higher and less coordinated. The US military presence in Europe either doesn't exist or is purely bilateral. Russia faces a fragmented West."
    }},
  {id:"eu",name:"European Union",born:1993,died:null,cat:"institutions",field:"Political & Economic Union",
    quote:"United in diversity.",
    contributions:["Single market creation","Free movement of people","Euro currency","Post-war peace in Europe"],
    r:0.40,reasoning:"European integration began with coal and steel, driven by Monnet and Schuman's vision. Different history might have stopped at free trade without political union.",
    counterfactual:"Without Jean Monnet and Robert Schuman's vision, European integration might have stopped at free trade. The specific path â€” Coal and Steel Community to EEC to EU â€” wasn't inevitable. Britain might have shaped a different, looser arrangement. The euro might never exist. Free movement of people might not happen. Most importantly, the profound post-war reconciliation between France and Germany might have been shallower, leaving Europe more prone to future conflicts.",
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
    impact:{lives:"Peace for 450M Europeans",econ:"$18T GDP bloc",cultural:"Post-war reconciliation model",reach:"27 member states",timeline:"European integration slower"},

    cascade:[
      {event:"No Coal and Steel Community",consequence:"France and Germany rebuild competing heavy industries after WWII. Economic rivalry persists. The peace dividend of intertwined economies doesn't materialize.",delay:"~6 years",severity:"high",icon:"âš™ï¸"},
      {event:"No common market",consequence:"European trade barriers remain. Each country protects its industries. Economic growth in the 1960s-70s is slower. Brain drain to America is worse.",delay:"~12 years",severity:"high",icon:"ðŸ“¦"},
      {event:"No freedom of movement",consequence:"Europeans need visas to work in neighboring countries. Labor markets are rigid. The Erasmus student exchange never happens.",delay:"~40 years",severity:"medium",icon:"âœˆï¸"},
      {event:"No euro",consequence:"Currency exchange costs persist. Monetary crises hit individual countries harder. European financial markets are less integrated.",delay:"~54 years",severity:"medium",icon:"ðŸ’¶"}
    ],
    modernDay:{
      tech:"EU regulations shape global tech â€” GDPR forced every company worldwide to rethink privacy. USB-C standardization, right-to-repair laws. The 'Brussels Effect' doesn't exist without the EU.",
      culture:"Young Europeans travel, study, and work across borders freely. That ease of movement â€” and the identity it created â€” vanishes. 'European' as an identity is weaker.",
      politics:"Without EU integration, Europe in 2024 looks more like pre-WWI: competing nation-states with shifting alliances. Franco-German rivalry might still dominate continental politics."
    }},
  {id:"imf",name:"International Monetary Fund",born:1944,died:null,cat:"institutions",field:"Financial Stability",
    quote:"Working together to foster global monetary cooperation.",
    contributions:["Currency stability support","Balance of payments assistance","Economic surveillance","Crisis lending"],
    r:0.55,reasoning:"Bretton Woods designed to prevent competitive devaluations. Some monetary coordination was needed. IMF's specific form was contested from start.",
    counterfactual:"Without the IMF, some international monetary coordination still emerges â€” the chaos of the 1930s competitive devaluations demanded response. But the IMF's specific model â€” conditionality, structural adjustment, surveillance â€” was contested from the start. Keynes wanted something different. Without the IMF, perhaps a more Keynesian system emerges, or bilateral agreements dominate, or financial crises are handled differently.",
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
    impact:{lives:"Economic stability for billions",econ:"$1T lending capacity",cultural:"Controversial conditionality",reach:"190 member countries",timeline:"Financial crises more severe"},

    cascade:[
      {event:"No Bretton Woods system",consequence:"Post-WWII monetary order is chaotic. Exchange rates fluctuate wildly. International trade recovers slower.",delay:"Immediate",severity:"high",icon:"ðŸ’±"},
      {event:"Currency crises go unmanaged",consequence:"When countries' currencies collapse, there's no lender of last resort. The 1997 Asian financial crisis destroys economies with no backstop.",delay:"~50 years",severity:"high",icon:"ðŸ“‰"},
      {event:"No structural adjustment programs",consequence:"Developing countries face crises without conditional emergency lending. Some collapse; others find their own paths without IMF orthodoxy.",delay:"~30 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Global financial coordination weaker",consequence:"The 2008 crisis has no coordinated international response. Each country handles its banking system alone.",delay:"~63 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"The IMF's Special Drawing Rights (SDR) system provides emergency liquidity to struggling nations. Its economic data and forecasts are used by every finance ministry on Earth.",
      culture:"The IMF is simultaneously credited with preventing financial collapses and blamed for imposing austerity. Love it or hate it, global finance runs through their frameworks.",
      politics:"Without IMF conditionality, economic policy in the developing world varies more widely. Some countries do better; many do worse. The 'Washington Consensus' never forms."
    }},
  {id:"wwf",name:"World Wildlife Fund",born:1961,died:null,cat:"institutions",field:"Conservation",
    quote:"For a living planet.",
    contributions:["Species conservation programs","Protected area expansion","Climate advocacy","Sustainable development"],
    r:0.45,reasoning:"Conservation organizations existed, but WWF's strategy was distinctive. Environmental concern was growing regardless. WWF channeled it in specific directions.",
    counterfactual:"Without WWF, conservation organizations still exist â€” the Sierra Club, Audubon Society, and others were working. But WWF's specific innovation was combining celebrity appeal (Prince Philip was founding president), corporate partnerships, and global reach. The panda logo became conservation's symbol. Without WWF, conservation might be more fragmented, more national, less corporate-partnered.",
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
    impact:{lives:"Ecosystems for billions",econ:"$400M+ annual conservation",cultural:"Panda as global symbol",reach:"100+ countries",timeline:"Conservation movement weaker"},

    cascade:[
      {event:"No global conservation brand",consequence:"Environmental protection stays national. No international coordination on endangered species. The panda logo that made conservation mainstream never exists.",delay:"Immediate",severity:"medium",icon:"ðŸ¼"},
      {event:"Slower protected area expansion",consequence:"WWF funded and helped establish national parks across Africa and Asia. Without them, more habitat is lost to development in the 1970s-80s.",delay:"~10 years",severity:"medium",icon:"ðŸŒ³"},
      {event:"No debt-for-nature swaps",consequence:"WWF pioneered exchanging developing-country debt for conservation commitments. Without this model, rainforest destruction accelerates.",delay:"~25 years",severity:"medium",icon:"ðŸŒ¿"},
      {event:"Weaker CITES enforcement",consequence:"The global endangered species trade treaty has less monitoring. Ivory, rhino horn, and exotic pet trades are bigger.",delay:"~15 years",severity:"medium",icon:"ðŸ¦"}
    ],
    modernDay:{
      tech:"WWF's Living Planet Index tracks global biodiversity. Without it, we have less data on species decline. Conservation science is less internationally coordinated.",
      culture:"The panda logo made conservation a mainstream cause. Without WWF, environmentalism is more about pollution and less about wildlife and habitat.",
      politics:"International conservation agreements are weaker. National parks in developing countries receive less funding. Ecotourism develops differently."
    }},
  {id:"amnesty",name:"Amnesty International",born:1961,died:null,cat:"institutions",field:"Human Rights",
    quote:"It is better to light a candle than curse the darkness.",
    contributions:["Prisoner of conscience campaigns","Death penalty opposition","Human rights documentation","Nobel Peace Prize 1977"],
    r:0.40,reasoning:"Human rights advocacy existed, but Amnesty's innovation was letter-writing campaigns. This model was replicable and powerful. Without Amnesty, human rights advocacy might have remained more elite.",
    counterfactual:"Without Amnesty, human rights advocacy still exists â€” the UN had declared universal rights. But Amnesty's specific innovation was letter-writing campaigns: ordinary people pressuring governments by writing letters for prisoners of conscience. This model gave individuals a way to act. Without it, human rights advocacy might have remained more elite, more governmental, less grassroots.",
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
    impact:{lives:"Thousands of prisoners freed",econ:"Human rights as policy factor",cultural:"Letter-writing activism model",reach:"150+ countries",timeline:"Human rights movement less grassroots"},

    cascade:[
      {event:"No prisoners of conscience concept",consequence:"Amnesty invented the category. Without it, political prisoners are just 'criminals' in their home countries. International pressure is harder to organize.",delay:"Immediate",severity:"high",icon:"â›“ï¸"},
      {event:"Letter-writing campaigns never start",consequence:"Amnesty's model â€” ordinary people writing letters demanding prisoners' release â€” was new. Without it, human rights activism is more elite and less participatory.",delay:"~5 years",severity:"medium",icon:"âœ‰ï¸"},
      {event:"No global torture documentation",consequence:"Amnesty's reports made state torture internationally visible. Without systematic documentation, abuses stay hidden longer.",delay:"~10 years",severity:"high",icon:"ðŸ“‹"},
      {event:"Nobel Peace Prize 1977 goes elsewhere",consequence:"Amnesty's Nobel validated the human rights movement. Without it, human rights organizations have less legitimacy.",delay:"~16 years",severity:"medium",icon:"ðŸ…"}
    ],
    modernDay:{
      tech:"Amnesty pioneered using satellite imagery and digital evidence to document human rights abuses. Their methodology is now standard in international investigations.",
      culture:"The concept that ordinary citizens can pressure foreign governments about human rights â€” that's Amnesty's inheritance. Before them, human rights was diplomats' business.",
      politics:"Without Amnesty's documentation, the International Criminal Court has fewer cases. Dictators face less international scrutiny. The human rights 'shaming' model barely exists."
    }},
  {id:"opec",name:"OPEC",born:1960,died:null,cat:"institutions",field:"Energy",
    quote:"Coordination and unification of petroleum policies.",
    contributions:["Oil price coordination","1973 oil crisis","Producer country solidarity","Energy geopolitics"],
    r:0.50,reasoning:"Oil-producing countries were being exploited. Collective action was logical. Without OPEC specifically, similar organization would emerge.",
    counterfactual:"Without OPEC, oil-producing countries still seek better terms â€” the exploitation by Western companies was obvious. But OPEC's specific coordination made the 1973 oil embargo possible and effective. Without it, producer countries negotiate individually, with less leverage. The oil shocks might be smaller or different. The entire energy politics of the late 20th century changes.",
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
    impact:{lives:"Energy prices for billions",econ:"Trillions in oil wealth transferred",cultural:"Resource nationalism",reach:"13 member countries",timeline:"Oil politics develops differently"},

    cascade:[
      {event:"No coordinated oil pricing",consequence:"Each oil-producing nation sells independently. Prices are lower and more volatile. Western oil companies retain more power over pricing.",delay:"Immediate",severity:"high",icon:"ðŸ›¢ï¸"},
      {event:"1973 oil crisis doesn't happen",consequence:"Without OPEC coordination, Arab states can't weaponize oil during the Yom Kippur War. No gas lines, no energy crisis. The 1970s economy looks very different.",delay:"~13 years",severity:"high",icon:"â›½"},
      {event:"No push for energy alternatives",consequence:"The oil shocks drove investment in nuclear, solar, and fuel efficiency. Without that urgency, renewable energy research is decades behind.",delay:"~15 years",severity:"high",icon:"â˜€ï¸"},
      {event:"Petrodollar system doesn't form",consequence:"OPEC's dollar-denominated oil propped up US currency. Without it, the dollar's reserve status weakens after Nixon leaves the gold standard.",delay:"~14 years",severity:"medium",icon:"ðŸ’µ"}
    ],
    modernDay:{
      tech:"OPEC's oil shocks drove fuel efficiency research and renewable energy development. Without that pressure, electric cars and solar panels might be decades behind.",
      culture:"The 1973 crisis created lasting American anxiety about energy dependence. Without it, SUVs might dominate even more â€” and climate change awareness comes later.",
      politics:"Without OPEC, oil-rich Gulf states are poorer and less geopolitically influential. The Middle East's strategic importance is lower. US foreign policy looks different."
    }},
  {id:"wto",name:"World Trade Organization",born:1995,died:null,cat:"institutions",field:"Trade",
    quote:"The WTO provides a forum for negotiating agreements aimed at reducing obstacles to international trade.",
    contributions:["Trade dispute resolution","Tariff reduction framework","GATT successor","Global trade rules"],
    r:0.55,reasoning:"GATT already existed. Trade liberalization was the trend. WTO formalized what was happening. Without WTO, bilateral agreements would have multiplied.",
    counterfactual:"Without WTO, trade liberalization still proceeds â€” GATT existed and the trend was clear. But WTO's dispute resolution mechanism was new: binding arbitration that could override national laws. Without it, trade disputes are settled bilaterally or through power politics. The rule-based trading system is weaker. Protectionism might be easier.",
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
    impact:{lives:"Global trade for billions",econ:"$25T+ annual trade facilitated",cultural:"Globalization framework",reach:"164 member countries",timeline:"Trade rules more fragmented"},

    cascade:[
      {event:"No multilateral trade rules",consequence:"GATT continues informally, but disputes have no binding resolution. Trade wars are more common. Tariffs stay higher.",delay:"Immediate",severity:"medium",icon:"ðŸ“¦"},
      {event:"China's WTO accession doesn't happen",consequence:"Without WTO, China's integration into global trade is slower and bilateral. The manufacturing shift that transformed the global economy happens at different pace.",delay:"~6 years",severity:"high",icon:"ðŸ‡¨ðŸ‡³"},
      {event:"No dispute settlement mechanism",consequence:"Countries resolve trade conflicts through raw economic power. Small nations have even less recourse against large ones.",delay:"Immediate",severity:"medium",icon:"âš–ï¸"},
      {event:"Globalization is less rules-based",consequence:"Trade still grows, but without common rules. More bilateral deals, more power imbalances, more unpredictability.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"WTO rules govern how technology is traded globally â€” intellectual property, digital services, telecommunications. Without them, tech companies face wildly different rules in each country.",
      culture:"The backlash against globalization â€” from Seattle 1999 to today's populism â€” specifically targets WTO. Without it, anti-globalization anger has different targets.",
      politics:"Without WTO, China's rise looks different. More bilateral trade deals mean more explicit geopolitical competition over market access."
    }},
  {id:"oxfam",name:"Oxfam International",born:1942,died:null,cat:"institutions",field:"Development & Poverty",
    quote:"The power of people against poverty.",
    contributions:["Famine relief since WWII","Inequality reports","Fair trade advocacy","Emergency response"],
    r:0.45,reasoning:"Humanitarian organizations existed. Oxfam's specific combination of emergency response, development, and advocacy was influential but replicable.",
    counterfactual:"Without Oxfam, humanitarian aid still develops â€” CARE, Save the Children, and others were active. But Oxfam's specific combination of emergency relief, long-term development, and advocacy against inequality was influential. Their annual inequality reports shaped public discourse. Without Oxfam, the development sector looks slightly different, fair trade develops through different channels, and inequality advocacy is less prominent.",
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
    impact:{lives:"Millions aided annually",econ:"$1B+ annual budget",cultural:"Inequality awareness",reach:"90+ countries",timeline:"Development sector slightly different"},

    cascade:[
      {event:"No famine relief during WWII",consequence:"Oxfam formed to feed starving Greeks under Nazi occupation. Without it, thousands more die during the blockade.",delay:"Immediate",severity:"high",icon:"ðŸž"},
      {event:"No fair trade movement",consequence:"Oxfam pioneered fair trade shops and advocacy. Without them, the concept of consumers paying more for ethical production develops later.",delay:"~20 years",severity:"medium",icon:"â˜•"},
      {event:"Inequality reports don't exist",consequence:"Oxfam's annual Davos inequality reports shaped global debate. Without them, extreme wealth concentration gets less public attention.",delay:"~50 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Development advocacy weaker",consequence:"Oxfam's campaigns on debt relief, trade justice, and tax havens lose their loudest voice. Policy change is slower.",delay:"~30 years",severity:"medium",icon:"ðŸ“¢"}
    ],
    modernDay:{
      tech:"Oxfam's research methodology for measuring inequality is used by economists worldwide. Their data on wealth concentration shapes policy debates.",
      culture:"The Oxfam shop â€” secondhand goods funding development â€” was a cultural invention. The charity shop model spread from their example.",
      politics:"Without Oxfam's advocacy, the debt relief movement for developing countries is weaker. More countries remain trapped in unpayable debt."
    }},
  {id:"msf",name:"MÃ©decins Sans FrontiÃ¨res",born:1971,died:null,cat:"institutions",field:"Medical Humanitarian",
    quote:"Medical care where it's needed most.",
    contributions:["Medical emergency response","Conflict zone healthcare","Disease outbreak response","Nobel Peace Prize 1999"],
    r:0.35,reasoning:"MSF's innovation was going where governments wouldn't â€” crossing borders without permission for medical emergencies. This model was new and has been widely copied.",
    counterfactual:"Without MSF, medical humanitarianism still exists â€” the Red Cross and other organizations provided medical care. But MSF's specific innovation was going where governments and the UN wouldn't: crossing borders without permission, speaking out about atrocities witnessed, providing emergency surgery in active conflict zones. This model of 'humanitarian action without borders' was new. Without it, medical care in conflict zones is more limited, more diplomatic, less willing to bear witness.",
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
    impact:{lives:"Millions treated annually",econ:"$2B+ annual operations",cultural:"Humanitarian medicine model",reach:"70+ countries",timeline:"Medical humanitarianism less mobile"},

    cascade:[
      {event:"No 'without borders' concept",consequence:"Medical humanitarianism stays bound by national sovereignty. Doctors wait for government permission to enter crisis zones. People die waiting.",delay:"Immediate",severity:"high",icon:"ðŸ¥"},
      {event:"No tÃ©moignage tradition",consequence:"MSF broke humanitarian silence â€” they reported what they witnessed. Without this model, atrocities in conflict zones stay hidden longer.",delay:"~5 years",severity:"high",icon:"ðŸ“¢"},
      {event:"HIV/AIDS treatment access delayed",consequence:"MSF's campaign for affordable antiretrovirals in developing countries forced pharmaceutical companies to lower prices. Without it, millions more die.",delay:"~30 years",severity:"high",icon:"ðŸ’Š"},
      {event:"Ebola response slower",consequence:"MSF was first to respond to every major Ebola outbreak. Without their rapid deployment model, the 2014 West Africa outbreak kills far more.",delay:"~43 years",severity:"high",icon:"ðŸ¦ "}
    ],
    modernDay:{
      tech:"MSF's field hospital designs and emergency medical kits are now standard in humanitarian response. Their treatment protocols for neglected tropical diseases save thousands.",
      culture:"The idea of doctors defying governments to treat the wounded â€” that romantic ideal of medical heroism â€” is MSF's cultural contribution.",
      politics:"Without MSF's public testimony, several genocides and humanitarian crises receive less international attention. Their reports are cited in war crimes tribunals."
    }},
  {id:"greenpeace",name:"Greenpeace",born:1971,died:null,cat:"institutions",field:"Environmental Activism",
    quote:"There are no passengers on Spaceship Earth. We are all crew.",
    contributions:["Direct action environmentalism","Whale hunting opposition","Nuclear testing opposition","Climate campaigns"],
    r:0.40,reasoning:"Environmental activism existed. Greenpeace's direct action approach â€” confronting whalers, nuclear ships â€” was distinctive but would have emerged from the movement.",
    counterfactual:"Without Greenpeace, environmental activism still exists and grows â€” Earth Day happened in 1970, the movement was building. But Greenpeace's specific innovation was direct action: putting bodies between harpoons and whales, sailing into nuclear test zones, climbing smokestacks. This confrontational approach generated media coverage that polite lobbying couldn't. Without it, environmentalism might be more institutionalized, less dramatic, possibly less effective at capturing public attention.",
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
    impact:{lives:"Environmental policy changes",econ:"Industry behavior changes",cultural:"Activist confrontation model",reach:"55+ countries",timeline:"Environmental movement less dramatic"},

    cascade:[
      {event:"No direct action environmentalism",consequence:"Environmental protest stays polite â€” petitions, lobbying, lawsuits. The dramatic confrontations that made headlines don't happen.",delay:"Immediate",severity:"medium",icon:"ðŸš¢"},
      {event:"Nuclear testing continues longer",consequence:"Greenpeace's campaigns against nuclear testing in the Pacific drew global attention. Without them, France and others test for years longer.",delay:"~5 years",severity:"medium",icon:"â˜¢ï¸"},
      {event:"Whaling ban delayed",consequence:"Greenpeace's whale campaigns shifted public opinion. Without them, the 1986 moratorium comes later or never. Several whale species go extinct.",delay:"~15 years",severity:"high",icon:"ðŸ‹"},
      {event:"Environmental awareness slower",consequence:"Greenpeace made environmentalism visceral and media-friendly. Without them, it remains more academic and less urgent in public consciousness.",delay:"~10 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"Greenpeace's 'Detox' campaign forced major fashion brands to eliminate toxic chemicals. Their electronics sustainability ranking pushed tech companies toward recyclable materials.",
      culture:"The image of a small boat confronting a whaling ship â€” David vs Goliath environmentalism â€” is Greenpeace's creation. It shaped how all protest movements think about media.",
      politics:"Without Greenpeace, anti-nuclear movements are weaker. More nuclear power plants get built in the 1980s. The environmental policy landscape shifts."
    }},
  {id:"unicef",name:"UNICEF",born:1946,died:null,cat:"institutions",field:"Children's Aid",
    quote:"For every child.",
    contributions:["Post-WWII child relief","Vaccination campaigns","Child rights advocacy","Emergency child protection"],
    r:0.50,reasoning:"UN was creating specialized agencies. Children's aid was essential. Some agency would have formed. UNICEF's specific programs were influential but others could have done similar work.",
    counterfactual:"Without UNICEF, children's aid still exists â€” Save the Children predates it, and the UN would have created some child-focused agency. But UNICEF's specific scale â€” billions of children vaccinated, millions fed during emergencies â€” is its contribution. The organization's advocacy helped establish children's rights as global norm. Without UNICEF, children's aid is more fragmented, vaccination campaigns less coordinated, and the Convention on the Rights of the Child might look different.",
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
    impact:{lives:"Billions of children aided",econ:"$7B+ annual budget",cultural:"Children's rights global norm",reach:"190+ countries",timeline:"Child aid organized differently"},

    cascade:[
      {event:"No post-war children's emergency fund",consequence:"European children after WWII receive less targeted aid. Child mortality in devastated countries stays higher for longer.",delay:"Immediate",severity:"high",icon:"ðŸ‘¶"},
      {event:"Oral rehydration therapy spreads slower",consequence:"UNICEF's mass distribution of ORT saved millions of children from diarrheal diseases. Without their logistics, the treatment reaches poor countries decades later.",delay:"~30 years",severity:"high",icon:"ðŸ’§"},
      {event:"Vaccination campaigns smaller",consequence:"UNICEF is the world's largest buyer of vaccines for developing countries. Without them, millions more children die of preventable diseases.",delay:"~15 years",severity:"high",icon:"ðŸ’‰"},
      {event:"No Convention on the Rights of the Child",consequence:"The world's most ratified human rights treaty doesn't exist. Children's rights remain a national, not international, concern.",delay:"~44 years",severity:"medium",icon:"ðŸ“œ"}
    ],
    modernDay:{
      tech:"UNICEF's supply chain delivers vaccines to the most remote places on Earth. Their cold chain logistics are models for delivering any temperature-sensitive product.",
      culture:"The UNICEF card, the trick-or-treat campaign â€” they made children's welfare a cause ordinary people participate in, not just governments.",
      politics:"Without UNICEF's data on child mortality, malnutrition, and education, policymakers have less pressure to address children's needs in developing countries."
    }},
  {id:"unhcr",name:"UN Refugee Agency",born:1950,died:null,cat:"institutions",field:"Refugee Protection",
    quote:"Whoever saves one life, saves the world entire.",
    contributions:["Refugee protection mandate","Camp management","Resettlement coordination","Nobel Peace Prize twice"],
    r:0.45,reasoning:"Post-WWII refugee crisis demanded response. Some agency was needed. UNHCR's specific mandate has shaped refugee law, but alternatives existed.",
    counterfactual:"Without UNHCR, refugee protection still happens â€” the post-WWII crisis demanded it. But UNHCR shaped the 1951 Refugee Convention that defines who is a refugee and what rights they have. Without this specific agency, refugee law might look different: perhaps more regional, perhaps more restrictive. The principle of non-refoulement â€” not returning refugees to danger â€” might be weaker. Tens of millions of refugees over 70 years would face different, possibly worse, circumstances.",
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
    impact:{lives:"100M+ refugees aided",econ:"$10B+ annual operations",cultural:"Refugee protection norms",reach:"Global",timeline:"Refugee protection weaker"},

    cascade:[
      {event:"No refugee status determination",consequence:"Without UNHCR, who counts as a refugee is decided by each country independently. Many more people are turned away at borders.",delay:"Immediate",severity:"high",icon:"ðŸ•ï¸"},
      {event:"1951 Refugee Convention weaker",consequence:"UNHCR championed and monitors the convention. Without them, legal protections for refugees are thinner and less enforced.",delay:"~3 years",severity:"high",icon:"ðŸ“œ"},
      {event:"Cold War refugee crises mishandled",consequence:"Hungarian refugees in 1956, Vietnamese boat people â€” without UNHCR coordination, resettlement is chaotic. More people stranded in limbo.",delay:"~8 years",severity:"high",icon:"ðŸš¤"},
      {event:"Syrian refugee crisis even worse",consequence:"Without UNHCR camp management and aid coordination, the 5.6 million Syrian refugees have even less support. More die in transit.",delay:"~63 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"UNHCR pioneered biometric registration for refugees â€” iris scans and digital IDs that prevent fraud and speed up aid distribution.",
      culture:"The idea that refugees have rights â€” not just charity â€” is a UNHCR contribution. Before them, displaced people were a problem to be managed, not rights-holders.",
      politics:"Without UNHCR, the 100+ million displaced people worldwide have no institutional advocate. Refugee policy is even more dominated by host countries' political whims."
    }},
  {id:"wfp",name:"World Food Programme",born:1961,died:null,cat:"institutions",field:"Food Aid",
    quote:"Saving lives, changing lives.",
    contributions:["Largest humanitarian organization","School feeding programs","Emergency food response","Nobel Peace Prize 2020"],
    r:0.50,reasoning:"Food aid existed before WFP. The program systematized and scaled it. Without WFP, food aid would be more fragmented but still happen.",
    counterfactual:"Without WFP, food aid still happens â€” bilateral food aid and smaller organizations existed. But WFP's scale is unique: the largest humanitarian organization, feeding 100+ million people annually. Without it, food aid is more fragmented, less efficient, slower to respond to emergencies. School feeding programs â€” which keep millions of children in school â€” might be smaller. More people die in famines; more children drop out of school.",
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
    impact:{lives:"100M+ fed annually",econ:"$10B+ annual operations",cultural:"Food as human right",reach:"80+ countries",timeline:"Food aid less coordinated"},

    cascade:[
      {event:"No global food logistics network",consequence:"Famine response is ad hoc. Each crisis requires building supply chains from scratch. Response times are weeks longer.",delay:"Immediate",severity:"high",icon:"ðŸš›"},
      {event:"Ethiopian famine 1984 response slower",consequence:"Without WFP's pre-positioned supplies and logistics, the famine that killed 400,000 kills many more. The Live Aid moment still happens; the response capacity doesn't.",delay:"~21 years",severity:"high",icon:"ðŸŒ¾"},
      {event:"School feeding programs don't scale",consequence:"WFP feeds 20 million children through school meals. Without them, millions of children don't attend school because there's no food incentive.",delay:"~30 years",severity:"medium",icon:"ðŸ«"},
      {event:"COVID food crisis uncoordinated",consequence:"Without WFP's surge capacity, the pandemic food crisis in developing countries is far worse. Acute hunger doubles with less organized response.",delay:"~57 years",severity:"high",icon:"ðŸ¦ "}
    ],
    modernDay:{
      tech:"WFP's logistics network is the world's most efficient humanitarian supply chain. When any disaster strikes anywhere, their warehouses and transport systems activate within hours.",
      culture:"WFP's Nobel Peace Prize in 2020 highlighted that hunger is a political problem, not a scarcity problem. That framing shapes how we think about food insecurity.",
      politics:"Without WFP, famine is weaponized more openly. In Yemen, South Sudan, and elsewhere, warring parties face less international pressure to allow food access."
    }},
  {id:"icc",name:"International Criminal Court",born:2002,died:null,cat:"institutions",field:"International Justice",
    quote:"The International Criminal Court is a court of last resort.",
    contributions:["War crimes prosecution","Genocide trials","Crimes against humanity","International justice norm"],
    r:0.40,reasoning:"Ad hoc tribunals (Nuremberg, Yugoslavia, Rwanda) preceded ICC. Permanent court was logical evolution. Without ICC, ad hoc tribunals would continue.",
    counterfactual:"Without the ICC, international justice still exists â€” Nuremberg set the precedent, and ad hoc tribunals for Yugoslavia and Rwanda showed the model worked. But the ICC provides permanence: war criminals know there's always a court waiting. Without it, international justice is more episodic, more political, more dependent on the specific crisis generating enough outrage. Some atrocities go unprosecuted that wouldn't under ICC.",
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
    impact:{lives:"Justice for victims globally",econ:"International law costs",cultural:"Accountability norm",reach:"123 member states",timeline:"International justice more ad hoc"},

    cascade:[
      {event:"No permanent war crimes court",consequence:"Each atrocity requires a new ad hoc tribunal â€” expensive, slow, inconsistent. Many war criminals face no justice at all.",delay:"Immediate",severity:"medium",icon:"âš–ï¸"},
      {event:"No deterrence signal",consequence:"Without the ICC's existence, leaders calculate that mass atrocities carry no personal legal risk. The deterrent effect â€” however imperfect â€” vanishes.",delay:"~5 years",severity:"medium",icon:"ðŸ›¡ï¸"},
      {event:"Darfur, Libya referrals don't happen",consequence:"The UN Security Council can't refer situations to a court that doesn't exist. Documentation of atrocities continues but prosecution doesn't.",delay:"~7 years",severity:"medium",icon:"ðŸ“‹"},
      {event:"International criminal law stalls",consequence:"The body of law developed through ICC cases â€” on child soldiers, sexual violence in conflict, cultural destruction â€” doesn't develop.",delay:"~20 years",severity:"medium",icon:"ðŸ“š"}
    ],
    modernDay:{
      tech:"The ICC pioneered digital evidence collection for war crimes â€” satellite imagery, social media forensics, phone data. These techniques now influence domestic courts worldwide.",
      culture:"The idea that heads of state can be personally prosecuted â€” that sovereignty doesn't equal impunity â€” is the ICC's contribution, even when enforcement falls short.",
      politics:"Without the ICC, Vladimir Putin travels freely. Omar al-Bashir faces no arrest warrants. The political cost of atrocities is lower for leaders worldwide."
    }},
  {id:"iaea",name:"Int'l Atomic Energy Agency",born:1957,died:null,cat:"institutions",field:"Nuclear Regulation",
    quote:"Atoms for Peace.",
    contributions:["Nuclear safeguards","Non-proliferation verification","Nuclear safety standards","Peaceful use promotion"],
    r:0.45,reasoning:"Nuclear weapons spread required some oversight body. IAEA's specific mandate emerged from Cold War politics. Some organization was inevitable.",
    counterfactual:"Without IAEA, nuclear oversight still exists â€” the superpowers had strong incentives to prevent proliferation. But IAEA provides the inspection mechanism that makes the Non-Proliferation Treaty work. Without it, verification is bilateral, more politicized, less consistent. More countries might have developed nuclear weapons. Nuclear safety standards are less uniform; more accidents might occur.",
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
    impact:{lives:"Nuclear safety for billions",econ:"Nuclear industry regulation",cultural:"Non-proliferation norm",reach:"178 member states",timeline:"Nuclear oversight weaker"},

    cascade:[
      {event:"No nuclear inspections regime",consequence:"Countries develop nuclear programs without international oversight. Proliferation is faster and harder to detect.",delay:"Immediate",severity:"high",icon:"â˜¢ï¸"},
      {event:"Nuclear Non-Proliferation Treaty weaker",consequence:"Without IAEA verification, the NPT has no teeth. More countries quietly develop weapons. By 2024, perhaps 20+ nuclear states.",delay:"~22 years",severity:"high",icon:"ðŸŒ"},
      {event:"Chernobyl response uncoordinated",consequence:"Without IAEA safety standards, nuclear plant designs vary more widely. Chernobyl-type accidents might happen more often.",delay:"~29 years",severity:"high",icon:"âš ï¸"},
      {event:"Iran nuclear crisis unmonitorable",consequence:"Without IAEA inspectors, there's no way to verify Iran's nuclear program. Diplomatic solutions are harder because no one trusts the data.",delay:"~55 years",severity:"high",icon:"ðŸ”¬"}
    ],
    modernDay:{
      tech:"IAEA sets safety standards for every nuclear power plant on Earth. Their radiation protection guidelines protect hospital workers, airline crews, and nuclear plant operators daily.",
      culture:"The IAEA is the reason nuclear power is considered regulated rather than terrifying. Without their safety framework, public opposition to nuclear energy would be even stronger.",
      politics:"Without IAEA inspections, nuclear arms control is nearly impossible. Every disarmament treaty lacks verification. The world has more nuclear weapons and less information about them."
    }},
  {id:"interpol",name:"Interpol",born:1923,died:null,cat:"institutions",field:"Law Enforcement",
    quote:"Connecting police for a safer world.",
    contributions:["International police cooperation","Criminal database sharing","Fugitive tracking","Cybercrime coordination"],
    r:0.55,reasoning:"Police needed to cooperate across borders. Some coordination mechanism was inevitable. Interpol's specific form has evolved but wasn't unique solution.",
    counterfactual:"Without Interpol, international police cooperation still develops â€” criminals cross borders, and police follow. But cooperation is more bilateral, more ad hoc, more dependent on individual relationships. Fugitives find it easier to flee across borders. Cybercrime coordination is slower to develop. The specific databases and red notice system don't exist; alternatives are less comprehensive.",
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
    impact:{lives:"Crime prevention globally",econ:"Law enforcement efficiency",cultural:"International policing norm",reach:"195 member countries",timeline:"Police cooperation more bilateral"},

    cascade:[
      {event:"No international police cooperation",consequence:"Criminals who flee across borders are much harder to catch. Each country's police works in isolation.",delay:"Immediate",severity:"medium",icon:"ðŸ”"},
      {event:"No Red Notice system",consequence:"Without Interpol's alert system, fugitives disappear more easily. Countries share suspect information bilaterally, slowly.",delay:"~10 years",severity:"medium",icon:"ðŸš¨"},
      {event:"Drug trafficking harder to combat",consequence:"Without Interpol coordination, transnational drug networks face less coordinated opposition. Cartels exploit jurisdictional gaps more easily.",delay:"~30 years",severity:"medium",icon:"ðŸ’Š"},
      {event:"Cybercrime response fragmented",consequence:"Without Interpol's cybercrime center, international hacking and fraud investigations are slower. Each country builds separate capabilities.",delay:"~50 years",severity:"medium",icon:"ðŸ’»"}
    ],
    modernDay:{
      tech:"Interpol's databases â€” fingerprints, stolen passports, stolen vehicles â€” are checked millions of times daily at border crossings worldwide.",
      culture:"The idea that police cooperate across borders â€” 'Interpol' as a concept in every spy movie â€” shapes how people think about international law enforcement.",
      politics:"Without Interpol, terrorism investigations are more fragmented. The post-9/11 intelligence sharing that prevents attacks is weaker."
    }},
  {id:"fifa",name:"FIFA",born:1904,died:null,cat:"institutions",cat2:"sports",field:"Sports",
    quote:"For the Game. For the World.",
    contributions:["World Cup organization","Football rules standardization","Global sport governance","Economic impact"],
    r:0.60,reasoning:"Football was globalizing. Some governing body was needed. FIFA's specific structure emerged from European origins. A different organization would have formed.",
    counterfactual:"Without FIFA, football still becomes the world's sport â€” it was spreading before FIFA existed. But some governing body forms to standardize rules and organize international competition. The World Cup might have different format, different history, different host selection process. Football's global spread happens regardless; the specific governance structure differs.",
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
    impact:{lives:"Billions of fans",econ:"$5B+ annual revenue",cultural:"Football as global culture",reach:"211 member associations",timeline:"Football governance different"},

    cascade:[
      {event:"No unified football rules",consequence:"Different regions play with different rules. International matches require lengthy negotiations about which version to use.",delay:"Immediate",severity:"low",icon:"âš½"},
      {event:"No World Cup",consequence:"The most-watched sporting event on Earth doesn't exist. Football remains a collection of national leagues without a global pinnacle.",delay:"~24 years",severity:"medium",icon:"ðŸ†"},
      {event:"Football doesn't unify globally",consequence:"Without FIFA's standardization and World Cup, football is less universal. Cricket, rugby, or baseball might be more globally popular.",delay:"~50 years",severity:"medium",icon:"ðŸŒ"},
      {event:"No football development funding",consequence:"FIFA's development programs brought football to every country. Without them, the sport is less global. African and Asian football develops slower.",delay:"~40 years",severity:"low",icon:"ðŸŸï¸"}
    ],
    modernDay:{
      tech:"FIFA's technology adoption â€” VAR, goal-line technology, semi-automated offside â€” sets standards that trickle down to other sports.",
      culture:"The World Cup is the most unifying global cultural event. Without it, there's no equivalent moment when the entire planet watches the same thing.",
      politics:"FIFA's corruption scandals revealed how sports governance concentrates power and money. Without FIFA, football is more regional but possibly less corrupt."
    }},
  {id:"olympics",name:"Int'l Olympic Committee",born:1894,died:null,cat:"institutions",cat2:"sports",field:"Sports",
    quote:"Faster, Higher, Stronger â€“ Together.",
    contributions:["Modern Olympics revival","International athletic competition","Olympic movement values","Cultural exchange"],
    r:0.50,reasoning:"Athletic competition existed. Coubertin revived Olympics specifically. Without him, some international games would have emerged, but the specific form and brand might differ.",
    counterfactual:"Without the IOC and Coubertin's revival, international athletic competition still emerges â€” nations want to compete, athletes want to test themselves. But the specific brand of 'Olympics' with its ancient Greek mystique might not exist. Different international games might have different values, different sports, different traditions. The Olympic movement's specific ideology of peace through sport might not crystallize the same way.",
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
    counterfactual:"Without BRAC, development work in Bangladesh still happens â€” many organizations were active. But BRAC's specific scale (largest NGO in the world by employees) and integrated model (microfinance + health + education + enterprises) was Fazle Hasan Abed's vision. Without it, Bangladeshi development is more fragmented, less scaled. The 'graduation' model of moving people out of poverty step-by-step doesn't exist in the same form. Bangladesh's remarkable poverty reduction might be slower.",
    ripples:[
      {category:"Bangladesh",detail:"Bangladesh's poverty reduction is slower without BRAC's scale. Development more fragmented."},
      {category:"Integration",detail:"BRAC's model of integrated services â€” microfinance + health + education â€” isn't pioneered the same way."},
      {category:"Scale",detail:"The idea that an NGO can achieve massive scale is less proven."},
      {category:"Social Enterprise",detail:"BRAC's social enterprises (Aarong, BRAC Dairy) don't exist. Different development funding model."}
    ],
    timeline:[
      {year:1972,happened:"BRAC founded after Bangladesh independence",alternate:"Development through many smaller organizations"},
      {year:1990,happened:"BRAC scales microfinance",alternate:"Microfinance in Bangladesh develops differently"},
      {year:2010,happened:"BRAC expands to 11 countries",alternate:"Model not exported; stays local"},
      {year:2024,happened:"BRAC reaches 100M+ people annually",alternate:"Development more fragmented; possibly less effective"}
    ],
    impact:{lives:"100M+ reached annually",econ:"$1B+ budget",cultural:"NGO scaling model",reach:"11 countries",timeline:"Development less integrated"},

    cascade:[
      {event:"Bangladesh development more fragmented",consequence:"Without BRAC's integrated model â€” microfinance, education, health in one organization â€” Bangladeshi villages get piecemeal aid from dozens of smaller NGOs.",delay:"Immediate",severity:"high",icon:"ðŸ˜ï¸"},
      {event:"Microfinance develops differently",consequence:"BRAC's approach â€” larger loans for enterprises, not just microcredit â€” influenced the whole sector. Without it, microfinance stays smaller and more focused on tiny loans.",delay:"~10 years",severity:"medium",icon:"ðŸ’°"},
      {event:"Girls' education program missing",consequence:"BRAC's schools educated millions of girls in Bangladesh. Without them, female literacy is lower and child marriage rates are higher.",delay:"~15 years",severity:"high",icon:"ðŸ“š"},
      {event:"No southern-led development model",consequence:"BRAC proved that developing countries could build world-class NGOs. Without this example, development stays more dominated by Western organizations.",delay:"~30 years",severity:"medium",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"BRAC's model of scaling simple interventions â€” oral rehydration, basic education, small loans â€” influenced how development organizations worldwide think about efficiency.",
      culture:"BRAC proved that the Global South could lead its own development, not just receive it. That shift in power dynamics changed the aid industry.",
      politics:"Bangladesh's dramatic poverty reduction â€” one of the great development success stories â€” is substantially BRAC's achievement. Without it, Bangladesh looks more like its neighbors."
    }},
  {id:"savechildren",name:"Save the Children",born:1919,died:null,cat:"institutions",field:"Children's Aid",
    quote:"Every child deserves a future.",
    contributions:["Child rights advocacy since WWI","Emergency child protection","Education programs","Health interventions"],
    r:0.50,reasoning:"Eglantyne Jebb founded it and wrote rights declaration. Children's aid organizations were emerging. Save the Children's longevity is notable but field was developing.",
    counterfactual:"Without Save the Children, children's aid still develops â€” the impulse to help children was strong, especially after WWI's devastation. But Eglantyne Jebb specifically drafted what became the UN Declaration of the Rights of the Child. Without her and the organization, children's rights as a concept might develop differently. Other organizations fill the space, but the specific advocacy and framework differ.",
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
    impact:{lives:"Millions of children annually",econ:"$2B+ annual budget",cultural:"Child rights foundation",reach:"120+ countries",timeline:"Children's aid organized similarly"},

    cascade:[
      {event:"No children's rights declaration",consequence:"Eglantyne Jebb's Declaration of the Rights of the Child â€” which influenced the UN Convention â€” never gets written. Children's rights as a concept develops later.",delay:"~5 years",severity:"medium",icon:"ðŸ“œ"},
      {event:"Post-WWI child famine response weaker",consequence:"Save the Children formed to feed starving children in Germany and Austria. Without them, thousands more children die in the postwar chaos.",delay:"Immediate",severity:"high",icon:"ðŸž"},
      {event:"Child protection standards missing",consequence:"Save the Children developed safeguarding standards used by humanitarian organizations worldwide. Without them, children in crisis zones are more vulnerable.",delay:"~30 years",severity:"medium",icon:"ðŸ›¡ï¸"},
      {event:"Fewer child-focused emergency responses",consequence:"When disasters strike, children's specific needs â€” nutrition, education continuity, family reunification â€” get less systematic attention.",delay:"~40 years",severity:"medium",icon:"ðŸ†˜"}
    ],
    modernDay:{
      tech:"Save the Children's research on childhood development in crisis zones shaped how humanitarian agencies design interventions for children.",
      culture:"The idea that children have specific rights â€” not just smaller adults' rights â€” traces partly to their founding. Child labor laws and education rights built on their advocacy.",
      politics:"Without Save the Children's advocacy, the UN Convention on the Rights of the Child either doesn't exist or lacks enforcement mechanisms."
    }},
  {id:"worldvision",name:"World Vision",born:1950,died:null,cat:"institutions",field:"Humanitarian Aid",
    quote:"For every child, life in all its fullness.",
    contributions:["Child sponsorship model","Emergency relief","Community development","Christian humanitarian work"],
    r:0.50,reasoning:"Christian humanitarian organizations existed. World Vision's child sponsorship model was influential but not unique. Similar organizations emerged.",
    counterfactual:"Without World Vision, Christian humanitarian aid still exists â€” Compassion International, Catholic Relief Services, and others were active. But World Vision's child sponsorship model â€” connecting individual donors to individual children â€” was particularly effective at fundraising and engagement. Without it, this model develops differently. Christian humanitarian aid remains significant but with different organizational leadership.",
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
    impact:{lives:"100M+ annually",econ:"$3B+ annual budget",cultural:"Sponsorship model",reach:"100+ countries",timeline:"Christian aid organized similarly"},

    cascade:[
      {event:"No child sponsorship model",consequence:"World Vision popularized individual child sponsorship. Without it, development funding relies more on government grants and less on individual donors.",delay:"~5 years",severity:"medium",icon:"ðŸ‘¶"},
      {event:"Christian development sector smaller",consequence:"World Vision is the largest faith-based development organization. Without it, religious communities contribute less to international development.",delay:"~10 years",severity:"medium",icon:"â›ª"},
      {event:"Emergency response capacity reduced",consequence:"World Vision's pre-positioned supplies and local staff respond to disasters fast. Without them, response in many countries is slower.",delay:"~20 years",severity:"medium",icon:"ðŸ†˜"},
      {event:"Less community development in conflict zones",consequence:"World Vision operates in many fragile states. Without their long-term presence, communities in conflict areas get less consistent support.",delay:"~30 years",severity:"medium",icon:"ðŸ˜ï¸"}
    ],
    modernDay:{
      tech:"World Vision's child sponsorship platform pioneered direct donor-beneficiary connections that influenced crowdfunding and microgiving platforms.",
      culture:"The sponsored child letter â€” connecting a donor in the West to a child in the developing world â€” humanized foreign aid for millions of donors.",
      politics:"Without World Vision's advocacy on child welfare and poverty, evangelical Christian engagement with global development is smaller."
    }},
  {id:"aclu",name:"ACLU",born:1920,died:null,cat:"institutions",field:"Civil Liberties",
    quote:"Because freedom can't protect itself.",
    contributions:["Constitutional rights defense","Free speech advocacy","Civil rights litigation","Privacy protection"],
    r:0.40,reasoning:"Civil liberties needed defense in the US. Some organization would have emerged. ACLU's specific cases and approach have shaped American law significantly.",
    counterfactual:"Without ACLU, civil liberties defense still happens â€” lawyers care about rights, and the Constitution exists. But ACLU's specific strategic litigation shaped American law: Scopes trial, Japanese internment challenges, school desegregation support, Miranda rights. Without this specific organization's century of cases, American constitutional law looks different. Some rights might be narrower; some cases might not have been brought.",
    ripples:[
      {category:"Constitutional Law",detail:"Hundreds of ACLU cases shaped constitutional interpretation. Different cases, different law."},
      {category:"Free Speech",detail:"ACLU's consistent free speech defense â€” even for unpopular speech â€” might not exist as strongly."},
      {category:"Strategic Litigation",detail:"The model of using courts to advance rights is less developed without ACLU's example."},
      {category:"Organizational",detail:"Other civil liberties groups might grow larger or different approaches might dominate."}
    ],
    timeline:[
      {year:1920,happened:"ACLU founded",alternate:"Civil liberties defense more ad hoc"},
      {year:1925,happened:"Scopes Trial",alternate:"Evolution debate handled differently"},
      {year:1966,happened:"Miranda v. Arizona (ACLU amicus)",alternate:"Miranda rights might look different"},
      {year:2024,happened:"ACLU shapes rights debates",alternate:"Different organization or approach to civil liberties"}
    ],
    impact:{lives:"US civil liberties",econ:"Legal precedents",cultural:"Rights culture",reach:"United States",timeline:"Civil liberties defense weaker"},

    cascade:[
      {event:"No impact litigation model",consequence:"The strategy of using test cases to change constitutional law doesn't develop the same way. Civil liberties advance through legislation instead â€” slower and more political.",delay:"Immediate",severity:"high",icon:"âš–ï¸"},
      {event:"Scopes trial has no defenders",consequence:"The ACLU recruited Clarence Darrow to defend teaching evolution. Without them, anti-evolution laws go unchallenged longer.",delay:"~5 years",severity:"medium",icon:"ðŸ“–"},
      {event:"Japanese internment less contested",consequence:"The ACLU challenged internment during WWII. Without them, this violation of civil liberties has even less legal opposition.",delay:"~22 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Free speech doctrine narrower",consequence:"Many landmark First Amendment cases were ACLU cases. Without them, free speech protections in the US are weaker, especially for unpopular speech.",delay:"~30 years",severity:"high",icon:"ðŸ“¢"}
    ],
    modernDay:{
      tech:"The ACLU's fight against warrantless surveillance shaped how tech companies handle government data requests. Without their cases, digital privacy protections are weaker.",
      culture:"The ACLU's willingness to defend the speech rights of people they disagree with â€” Nazis, the KKK â€” defined a particular American approach to free expression.",
      politics:"Without ACLU litigation, the American Bill of Rights is interpreted more narrowly. Government power to restrict speech, religion, and assembly is greater."
    }},
  {id:"naacp",name:"NAACP",born:1909,died:null,cat:"institutions",field:"Civil Rights",
    quote:"Oldest and boldest civil rights organization.",
    contributions:["Brown v. Board of Education","Anti-lynching campaigns","Voting rights advocacy","Legal strategy for equality"],
    r:0.35,reasoning:"African American organizing was happening. The NAACP's specific legal strategy â€” test cases building toward Brown â€” was distinctive and successful. Different organizations might have taken different paths.",
    counterfactual:"Without NAACP, Black civil rights organizing still happens â€” the injustice demanded response. But the NAACP's specific legal strategy was crucial: decades of carefully selected test cases building precedent toward Brown v. Board of Education. Thurgood Marshall and the Legal Defense Fund's approach was methodical and ultimately successful. Without it, desegregation might come later, through different means, or with different scope. The legal path to civil rights looks different.",
    ripples:[
      {category:"Legal Strategy",detail:"The decades-long legal strategy toward Brown doesn't exist. Different path to desegregation."},
      {category:"Brown v. Board",detail:"School desegregation might come later or through different legal reasoning."},
      {category:"Anti-Lynching",detail:"NAACP documented and publicized lynching. Without this, anti-lynching movement weaker."},
      {category:"Organizational",detail:"Different organization leads civil rights. Possibly more radical, possibly less effective legally."}
    ],
    timeline:[
      {year:1909,happened:"NAACP founded",alternate:"Black organizing through different channels"},
      {year:1930,happened:"NAACP legal strategy begins",alternate:"Different approach to civil rights â€” possibly more direct action earlier"},
      {year:1954,happened:"Brown v. Board of Education",alternate:"Desegregation through different path, different timing"},
      {year:2024,happened:"NAACP continues advocacy",alternate:"Different organization leads racial justice work"}
    ],
    impact:{lives:"African American rights",econ:"Economic integration",cultural:"Civil rights movement foundation",reach:"United States",timeline:"Civil rights develops differently"},

    cascade:[
      {event:"No legal strategy toward desegregation",consequence:"Without NAACP's decades-long litigation strategy, Brown v. Board happens later or not at all. School segregation persists into the 1970s or beyond.",delay:"Immediate",severity:"high",icon:"âš–ï¸"},
      {event:"Antilynching campaign weaker",consequence:"NAACP documented lynchings and campaigned for federal antilynching laws. Without them, the horror of racial violence stays more hidden.",delay:"~5 years",severity:"high",icon:"ðŸ“°"},
      {event:"Civil rights movement lacks institutional base",consequence:"The NAACP provided infrastructure for the broader civil rights movement. Without it, organizing is more ad hoc and local.",delay:"~40 years",severity:"high",icon:"âœŠ"},
      {event:"Voting rights advance slower",consequence:"NAACP voter registration drives and legal challenges expanded Black voting. Without them, the Voting Rights Act might be delayed or weaker.",delay:"~56 years",severity:"high",icon:"ðŸ—³ï¸"}
    ],
    modernDay:{
      tech:"The NAACP's litigation strategy â€” using courts to change society â€” became the model for every civil rights movement. Disability rights, LGBT rights, and environmental groups all copied it.",
      culture:"Without Brown v. Board, American public schools might still be legally segregated. The entire trajectory of race in America shifts.",
      politics:"Without NAACP's groundwork, the Civil Rights Act of 1964 and Voting Rights Act of 1965 are delayed or look very different."
    }},
  {id:"unesco",name:"UNESCO",born:1945,died:null,cat:"institutions",field:"Culture & Education",
    quote:"Building peace in the minds of men and women.",
    contributions:["World Heritage Sites","Education for all","Cultural preservation","Science cooperation"],
    r:0.55,reasoning:"UN was creating specialized agencies. Cultural and educational cooperation needed a forum. UNESCO's specific programs matter, but some agency would exist.",
    counterfactual:"Without UNESCO, cultural cooperation still happens â€” the UN would create some agency for education and culture. But UNESCO's specific programs â€” World Heritage Sites, Education for All, cultural preservation â€” have shaped global norms. Without it, there's no World Heritage list; cultural preservation is more national, less coordinated. International education standards develop differently.",
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
    impact:{lives:"Cultural preservation globally",econ:"Heritage tourism",cultural:"World heritage concept",reach:"193 member states",timeline:"Cultural preservation less coordinated"},

    cascade:[
      {event:"No World Heritage Sites",consequence:"The Pyramids, Machu Picchu, Venice â€” none have UNESCO protection status. National governments protect sites unilaterally, with less funding and less international oversight.",delay:"~27 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"No universal education standards",consequence:"UNESCO's Education for All framework doesn't exist. Developing countries have less international support for building school systems.",delay:"~15 years",severity:"medium",icon:"ðŸ«"},
      {event:"Cultural heritage destroyed in wars",consequence:"Without UNESCO's cultural protection conventions, more heritage sites are destroyed during conflicts. The Hague Convention doesn't exist.",delay:"~9 years",severity:"medium",icon:"ðŸ’£"},
      {event:"Science cooperation weaker",consequence:"UNESCO's International Hydrological Programme, Man and the Biosphere â€” these scientific cooperation frameworks don't exist. Environmental science is less international.",delay:"~20 years",severity:"low",icon:"ðŸ”¬"}
    ],
    modernDay:{
      tech:"UNESCO's digital preservation efforts protect humanity's digital heritage. Their science cooperation programs support research in developing countries.",
      culture:"World Heritage status drives tourism worth billions. Without UNESCO's list, many historic sites get less funding and protection. Some are destroyed.",
      politics:"Without UNESCO's education programs, literacy rates in developing countries are lower. The organization's cultural diplomacy â€” the idea that shared heritage prevents conflict â€” doesn't exist."
    }},
  {id:"habitat",name:"UN-Habitat",born:1978,died:null,cat:"institutions",field:"Urban Development",
    quote:"For a better urban future.",
    contributions:["Urban development policy","Housing rights advocacy","Sustainable cities","Slum upgrading"],
    r:0.60,reasoning:"Urbanization was happening regardless. UN-Habitat has influenced policy but urban development would proceed. Its specific programs carried modest weight.",
    counterfactual:"Without UN-Habitat, urbanization still happens â€” it's driven by economics, not institutions. Cities grow regardless. But UN-Habitat has shaped how we think about urban development: housing rights, sustainable cities, slum upgrading methodologies. Without it, urban policy is more national, less coordinated. The right to adequate housing is less established as global norm. Some best practices don't spread as quickly.",
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
    counterfactual:"Without ICRC, international humanitarian law looks very different. Henry Dunant's vision after Solferino created both the Red Cross movement and the Geneva Conventions. Without this specific organization, the laws of war might be weaker, prisoner protections less defined, civilian protection less established. ICRC's unique neutral status â€” visiting prisoners, working in conflicts â€” might not exist. Wars would be even more brutal.",
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
    impact:{lives:"War victims protected",econ:"Humanitarian law compliance",cultural:"Laws of war norm",reach:"Global conflicts",timeline:"Humanitarian law weaker"},

    cascade:[
      {event:"Geneva Conventions lack a guardian",consequence:"Without ICRC monitoring, compliance with laws of war drops. Prisoner abuse, civilian targeting, and use of prohibited weapons increase.",delay:"Immediate",severity:"high",icon:"âš–ï¸"},
      {event:"No prisoner visits in conflicts",consequence:"ICRC visits prisoners of war to ensure humane treatment. Without them, POW abuse is worse in every conflict since WWI.",delay:"~5 years",severity:"high",icon:"â›“ï¸"},
      {event:"No neutral intermediary in wars",consequence:"ICRC serves as neutral go-between for warring parties. Prisoner exchanges, humanitarian corridors, ceasefire negotiations â€” all harder without them.",delay:"~10 years",severity:"high",icon:"ðŸ•Šï¸"},
      {event:"Family tracing doesn't exist",consequence:"After every war and disaster, ICRC reconnects separated families. Without them, millions never find their relatives.",delay:"~20 years",severity:"medium",icon:"ðŸ‘¨â€ðŸ‘©â€ðŸ‘§â€ðŸ‘¦"}
    ],
    modernDay:{
      tech:"ICRC's family tracing database and forensic identification methods set standards used after every disaster and conflict worldwide.",
      culture:"The idea of neutral humanitarian access â€” that some spaces in war should be protected â€” is ICRC's intellectual creation. It changed how civilization thinks about conflict.",
      politics:"Without ICRC, the laws of war are less enforced. Guantanamo, Abu Ghraib â€” ICRC was the only organization with access. Without their reports, abuse stays hidden longer."
    }},
  {id:"rotary",name:"Rotary International",born:1905,died:null,cat:"institutions",field:"Service Organization",
    quote:"Service above self.",
    contributions:["Polio eradication funding","Community service","Youth exchange","Professional networking with purpose"],
    r:0.55,reasoning:"Service clubs were emerging. Rotary's specific model was influential but Lions, Kiwanis developed similarly. The service club concept would have spread.",
    counterfactual:"Without Rotary, service clubs still emerge â€” Lions, Kiwanis, and others developed the model independently. But Rotary's specific contribution is massive: $2B+ for polio eradication, making it near-complete. Without Rotary's commitment, polio eradication might not have happened or would be decades behind. The specific service club model spreads regardless; the polio achievement doesn't.",
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
    impact:{lives:"Polio nearly eradicated",econ:"Billions in service projects",cultural:"Service ethic",reach:"1.4M members globally",timeline:"Service clubs develop similarly"},

    cascade:[
      {event:"No Rotary polio campaign",consequence:"Rotary's PolioPlus initiative raised $2.1B and vaccinated 2.5 billion children. Without them, polio eradication is decades behind.",delay:"~80 years",severity:"high",icon:"ðŸ’‰"},
      {event:"Service club model doesn't spread",consequence:"Rotary invented the service club concept in 1905. Without it, Lions, Kiwanis, and similar organizations develop differently or not at all.",delay:"Immediate",severity:"medium",icon:"ðŸ¤"},
      {event:"Fewer community projects worldwide",consequence:"Rotary's 46,000 clubs do local projects â€” wells, schools, medical clinics â€” in every country. Without them, millions of small projects don't happen.",delay:"~20 years",severity:"medium",icon:"ðŸ—ï¸"},
      {event:"Exchange programs smaller",consequence:"Rotary's youth exchange program sends thousands of students abroad annually. Without it, international understanding develops differently at the grassroots.",delay:"~30 years",severity:"low",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"Rotary's local club structure proved that distributed organizations can tackle global problems. Their model influenced how other service organizations operate.",
      culture:"Rotary's Four-Way Test of ethical business conduct influenced corporate ethics culture. The service club as a middle-class civic institution was their invention.",
      politics:"Without Rotary's $2.1 billion contribution, the polio eradication campaign is significantly underfunded. The disease persists in more countries."
    }},
  {id:"nature",name:"The Nature Conservancy",born:1951,died:null,cat:"institutions",field:"Conservation",
    quote:"Protecting nature. Preserving life.",
    contributions:["Land preservation","Conservation easements","Science-based conservation","Corporate partnerships"],
    r:0.50,reasoning:"Land trusts existed. TNC's scale and corporate partnership model was distinctive but land conservation would have happened through other vehicles.",
    counterfactual:"Without TNC, land conservation still happens â€” land trusts existed before, and the impulse to preserve nature was growing. But TNC's scale ($1B+ annual budget, largest environmental NGO) and its pragmatic approach â€” working with corporations, buying land directly â€” was distinctive. Without it, conservation is more confrontational, less land is directly preserved, and the conservation easement model is less developed.",
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
    counterfactual:"Without HRW, human rights documentation still happens â€” Amnesty International existed, and the field was growing. But HRW's specific approach â€” detailed investigative reports, naming and shaming, policy advocacy in Washington â€” was influential. It competed with and pushed Amnesty. Without HRW, the field is less professionalized, reports are less detailed, and US policy advocacy is weaker. Amnesty might dominate more.",
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
    impact:{lives:"Human rights protection",econ:"Policy influence",cultural:"Accountability norm",reach:"90+ countries",timeline:"Human rights documentation different"},

    cascade:[
      {event:"No 'naming and shaming' methodology",consequence:"HRW perfected research-based human rights documentation. Without their rigorous reports, abuses are harder to prove and easier to deny.",delay:"Immediate",severity:"high",icon:"ðŸ“‹"},
      {event:"Less media coverage of abuses",consequence:"HRW's reports are designed for journalists. Without them, human rights stories get less international press coverage.",delay:"~5 years",severity:"medium",icon:"ðŸ“°"},
      {event:"Arms trade less scrutinized",consequence:"HRW's campaigns on landmines and cluster munitions led to international treaties banning them. Without their advocacy, these weapons are still widely used.",delay:"~15 years",severity:"high",icon:"ðŸ’£"},
      {event:"War crimes documentation weaker",consequence:"HRW's field research in conflict zones builds the evidence base for prosecution. Without them, the ICC has fewer cases.",delay:"~20 years",severity:"medium",icon:"âš–ï¸"}
    ],
    modernDay:{
      tech:"HRW pioneered the use of satellite imagery and open-source intelligence to document human rights abuses remotely. Their digital methodology is now standard.",
      culture:"HRW made human rights reporting a profession â€” with standards, methodology, and career paths. Without them, the field is more amateur.",
      politics:"Without HRW's landmine campaign, the Ottawa Treaty banning landmines doesn't happen. More children lose limbs in post-conflict countries."
    }},
  {id:"redcrescentsocieties",name:"Int'l Fed. of Red Cross/Crescent",born:1919,died:null,cat:"institutions",field:"Disaster Response",
    quote:"Together for humanity.",
    contributions:["Disaster response coordination","National society support","Blood services","Community resilience"],
    r:0.55,reasoning:"National Red Cross societies needed coordination. The Federation serves this function. Some coordinating body would exist; this specific structure developed from history.",
    counterfactual:"Without the International Federation, Red Cross societies still exist nationally â€” they predated the Federation. But coordination of disaster response, standards for national societies, and international collaboration would be weaker. Each Red Cross society operates more independently, less efficiently. Blood services are less standardized. Disaster response is more ad hoc.",
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
    r:0.40,reasoning:"European physics needed big science cooperation. CERN's specific achievements â€” Higgs, WWW â€” were products of this institution. Without CERN, particle physics advances differently.",
    counterfactual:"Without CERN, particle physics still advances â€” Fermilab in the US, other labs existed. But CERN's scale and international cooperation produced specific results: the Large Hadron Collider, the Higgs boson discovery, and crucially, the World Wide Web (invented at CERN by Tim Berners-Lee). Without CERN, the web might be invented elsewhere, differently. Particle physics advances more slowly without the largest accelerators. European physics cooperation looks different.",
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
    impact:{lives:"Scientific knowledge",econ:"Technology spinoffs",cultural:"Big science model",reach:"23 member states",timeline:"Particle physics advances slower"},

    cascade:[
      {event:"No World Wide Web",consequence:"Tim Berners-Lee invented the web at CERN. Without the specific environment of international physics collaboration, the web doesn't emerge in 1989. The internet exists but stays text-based longer.",delay:"~35 years",severity:"high",icon:"ðŸŒ"},
      {event:"Particle physics fragmented",consequence:"Without CERN, Europe builds national accelerators. Each is smaller and less capable. The Higgs boson is found later or not at all.",delay:"~10 years",severity:"high",icon:"âš›ï¸"},
      {event:"No European scientific unity",consequence:"CERN was one of the first pan-European projects. Without it, European scientific cooperation develops slower. Brain drain to America is worse.",delay:"~5 years",severity:"medium",icon:"ðŸ‡ªðŸ‡º"},
      {event:"Antimatter research delayed",consequence:"CERN's antimatter experiments pushed physics forward. Medical applications â€” PET scans â€” develop differently.",delay:"~30 years",severity:"medium",icon:"ðŸ”¬"}
    ],
    modernDay:{
      tech:"The World Wide Web. That alone makes CERN one of the most consequential institutions in history. Also: grid computing, particle accelerator technology used in cancer treatment.",
      culture:"CERN proved that big science â€” requiring billions and international cooperation â€” could work. It became the model for mega-projects from the ISS to the Human Genome Project.",
      politics:"Without CERN, European integration has one less success story. The model of international scientific cooperation that avoided the brain drain to America doesn't exist."
    }},
  {id:"ieee",name:"IEEE",born:1884,died:null,cat:"institutions",field:"Technology Standards",
    quote:"Advancing technology for humanity.",
    contributions:["Technical standards (WiFi, Ethernet)","Engineering education","Professional community","Innovation ecosystem"],
    r:0.55,reasoning:"Engineering societies were forming globally. Standards bodies were needed. IEEE's specific standards are influential but alternatives would have emerged.",
    counterfactual:"Without IEEE, technical standards still develop â€” they had to, for technology to work together. But IEEE's specific standards â€” WiFi (802.11), Ethernet (802.3), and hundreds of others â€” have specific forms. Without IEEE, different standards bodies create different standards. Technology might be less interoperable, or just different. The engineering profession still professionalizes but through different organizations.",
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
    impact:{lives:"Technology users globally",econ:"Standards enable $trillions",cultural:"Engineering profession",reach:"160+ countries",timeline:"Standards develop differently"},

    cascade:[
      {event:"No electrical engineering standards",consequence:"Without IEEE standards, every company's electrical systems are incompatible. Plugs, voltages, and frequencies vary within countries, not just between them.",delay:"Immediate",severity:"medium",icon:"âš¡"},
      {event:"Wi-Fi standards don't unify",consequence:"IEEE 802.11 is the Wi-Fi standard. Without it, competing wireless protocols fragment the market. Your laptop might not connect to your router.",delay:"~93 years",severity:"high",icon:"ðŸ“¶"},
      {event:"Ethernet doesn't standardize",consequence:"IEEE 802.3 made Ethernet universal. Without this standard, office networks use competing incompatible protocols. The internet backbone develops differently.",delay:"~80 years",severity:"high",icon:"ðŸ”Œ"},
      {event:"Engineering profession less cohesive",consequence:"IEEE's conferences and journals are where electrical and computer engineers share knowledge. Without them, innovation is siloed and slower.",delay:"~20 years",severity:"medium",icon:"ðŸ“š"}
    ],
    modernDay:{
      tech:"Wi-Fi, Bluetooth, Ethernet, USB â€” IEEE standards underlie virtually every electronic connection in your life. Without them, nothing talks to anything else.",
      culture:"IEEE's professional standards and ethics codes shaped what it means to be an engineer. The profession is less standardized without them.",
      politics:"Without IEEE standards, technology markets are more fragmented by region. Global tech interoperability â€” your phone working in another country â€” is less reliable."
    }},
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
    impact:{lives:"6B+ monthly users",econ:"Knowledge access democratized",cultural:"Information commons",reach:"Global",timeline:"Encyclopedic knowledge less accessible"},

    cascade:[
      {event:"No free encyclopedia",consequence:"Wikipedia's model â€” anyone can edit, everything is free â€” doesn't emerge. Online encyclopedias remain paid products like Encarta or Britannica Online.",delay:"Immediate",severity:"high",icon:"ðŸ“–"},
      {event:"Knowledge stays behind paywalls",consequence:"The principle that the sum of human knowledge should be free doesn't crystallize. Open access movements are weaker without Wikipedia's example.",delay:"~5 years",severity:"high",icon:"ðŸ”’"},
      {event:"No collaborative knowledge model",consequence:"Wikipedia proved millions could collaborate to create something accurate. Without that proof, the open-source movement has one less success story.",delay:"~5 years",severity:"medium",icon:"ðŸ¤"},
      {event:"AI training lacks free data",consequence:"Wikipedia is a major training source for AI language models. Without it, AI development has a larger data gap and more reliance on copyrighted sources.",delay:"~15 years",severity:"medium",icon:"ðŸ¤–"}
    ],
    modernDay:{
      tech:"Every voice assistant, every search engine knowledge panel, every AI chatbot draws on Wikipedia's data. It's the invisible backbone of how the internet knows things.",
      culture:"Wikipedia changed the relationship between expertise and access. The idea that a teenager and a professor can both contribute to knowledge was radical.",
      politics:"Without Wikipedia's free model, information inequality is worse. People who can't afford encyclopedia subscriptions know less. The digital divide is wider."
    }},
  {id:"rockefeller",name:"Rockefeller Foundation",born:1913,died:null,cat:"institutions",field:"Philanthropy",
    quote:"For the well-being of humanity throughout the world.",
    contributions:["Public health modernization","Green Revolution funding","University funding","Medical education"],
    r:0.40,reasoning:"Modern philanthropy was developing. Rockefeller Foundation's specific programs â€” hookworm eradication, Green Revolution â€” were influential. Others might have funded differently.",
    counterfactual:"Without Rockefeller Foundation, philanthropy still develops â€” Carnegie and others were active. But Rockefeller's specific programs had massive impact: hookworm eradication in the American South, funding the Green Revolution that fed billions, establishing modern public health. Without these specific programs, hookworm persists longer, the Green Revolution is delayed, and public health develops differently. The foundation essentially invented modern scientific philanthropy.",
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
    impact:{lives:"Billions via Green Revolution",econ:"$5B+ grants over history",cultural:"Scientific philanthropy model",reach:"Global",timeline:"Philanthropy develops differently"},

    cascade:[
      {event:"Green Revolution doesn't start",consequence:"Rockefeller funded Norman Borlaug's research that created high-yield wheat and rice. Without it, the famines predicted for the 1970s actually happen. Hundreds of millions die.",delay:"~30 years",severity:"high",icon:"ðŸŒ¾"},
      {event:"Public health infrastructure weaker",consequence:"Rockefeller founded schools of public health worldwide. Without them, the profession develops slower. Disease prevention is less systematic.",delay:"~10 years",severity:"high",icon:"ðŸ¥"},
      {event:"Social science research underfunded",consequence:"Rockefeller funded the social sciences when nobody else would. Economics, sociology, and political science develop as academic disciplines more slowly.",delay:"~15 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"University of Chicago stays small",consequence:"Rockefeller's donations built the University of Chicago into a world-class institution. Without that investment, the Chicago school of economics doesn't form.",delay:"~10 years",severity:"medium",icon:"ðŸŽ“"}
    ],
    modernDay:{
      tech:"The Green Revolution that feeds billions traces to Rockefeller Foundation funding. Without it, agricultural science is behind and more people are hungry.",
      culture:"Rockefeller invented modern philanthropy â€” the idea that wealth should be strategically deployed for social good. Every foundation since follows their model.",
      politics:"Without the Green Revolution, political instability from famine is far worse in South and Southeast Asia during the Cold War. The geopolitical map changes."
    }},
  {id:"fordfd",name:"Ford Foundation",born:1936,died:null,cat:"institutions",field:"Social Change",
    quote:"Working with visionaries on the frontlines of social change worldwide.",
    contributions:["Civil rights funding","International development","Arts and culture","Social justice advocacy"],
    r:0.50,reasoning:"Large foundations were emerging. Ford's specific focus on social justice and international development was influential but the philanthropic sector was growing broadly.",
    counterfactual:"Without Ford Foundation, progressive philanthropy still exists â€” other foundations and donors supported similar causes. But Ford's specific programs mattered: funding the NAACP Legal Defense Fund, supporting PBS and public broadcasting, international development work. Without Ford, civil rights legal work has less funding, public broadcasting looks different, and international development has different funders. The progressive philanthropic sector is smaller.",
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
    counterfactual:"Without NIH, medical research still happens â€” universities, pharmaceutical companies, and other governments fund research. But NIH's scale ($45B+ annually) is unique. It funds basic research that industry won't, trains the scientific workforce, and coordinates disease-specific research. Without it, US medical research is slower, more fragmented, more dependent on industry. Many discoveries come later or not at all. The US isn't the global leader in biomedical research.",
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
    impact:{lives:"Medical advances for billions",econ:"Biomedical industry",cultural:"Science funding model",reach:"United States, global influence",timeline:"US medical research slower"},

    cascade:[
      {event:"Medical research loses biggest funder",consequence:"NIH's $47 billion annual budget dwarfs all other medical research funding. Without it, drug development is slower, more dependent on pharmaceutical companies.",delay:"Immediate",severity:"high",icon:"ðŸ”¬"},
      {event:"Human Genome Project doesn't happen",consequence:"NIH led the $2.7 billion project to sequence human DNA. Without it, genomic medicine is decades behind. Personalized treatment doesn't exist yet.",delay:"~40 years",severity:"high",icon:"ðŸ§¬"},
      {event:"Cancer research underfunded",consequence:"NIH's National Cancer Institute funds most cancer research. Without it, treatments that now save millions arrive later. Five-year survival rates are lower.",delay:"~30 years",severity:"high",icon:"ðŸŽ—ï¸"},
      {event:"No COVID vaccine in 11 months",consequence:"NIH funded the foundational mRNA research and helped coordinate Operation Warp Speed. Without it, COVID vaccines take 2-3 years longer.",delay:"~75 years",severity:"high",icon:"ðŸ’‰"}
    ],
    modernDay:{
      tech:"Most drugs you take were developed using NIH-funded research. The Human Genome Project, mRNA vaccines, antiretroviral HIV drugs â€” all NIH-supported.",
      culture:"The idea that government should fund basic medical research â€” even when commercial applications aren't obvious â€” is an NIH legacy. Without it, research follows profit.",
      politics:"Without NIH, the US isn't the center of global biomedical research. Pharmaceutical companies have less basic science to build on. Drug development is slower worldwide."
    }},
  {id:"undp",name:"UN Development Programme",born:1966,died:null,cat:"institutions",field:"Development",
    quote:"Empowered lives. Resilient nations.",
    contributions:["Human Development Index","Development coordination","Technical assistance","Millennium/Sustainable Development Goals"],
    r:0.55,reasoning:"UN development work needed coordination. Some program would have existed. UNDP's specific contribution was the Human Development Index â€” reframing development beyond GDP.",
    counterfactual:"Without UNDP, development coordination still happens â€” the UN would create some program. But UNDP's specific contribution was the Human Development Index, which reframed development beyond GDP to include health, education, and living standards. Without this, development success is measured primarily by economic growth. The framing of what 'development' means is different, possibly narrower. Technical assistance continues but with different coordination.",
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
    impact:{lives:"Development in 170+ countries",econ:"$5B+ annual spending",cultural:"Human development concept",reach:"170 countries",timeline:"Development framed differently"},

    cascade:[
      {event:"No Human Development Index",consequence:"UNDP created the HDI â€” measuring countries by health, education, and income, not just GDP. Without it, development success is measured purely by economic growth.",delay:"~45 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Millennium Development Goals weaker",consequence:"UNDP was central to creating and tracking the MDGs. Without them, global development targets are less coordinated.",delay:"~55 years",severity:"medium",icon:"ðŸŽ¯"},
      {event:"Less development capacity in poor countries",consequence:"UNDP builds government capacity in developing nations â€” training civil servants, strengthening institutions. Without it, governance in fragile states is weaker.",delay:"~10 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Crisis recovery slower",consequence:"UNDP coordinates post-disaster and post-conflict recovery. Without them, countries rebuild more slowly and with less international support.",delay:"~20 years",severity:"medium",icon:"ðŸ”„"}
    ],
    modernDay:{
      tech:"The Human Development Index changed how economists and policymakers measure progress. Without it, GDP is the only metric that matters. Countries optimize for growth, not wellbeing.",
      culture:"UNDP's Human Development Reports shifted the conversation from 'economic growth' to 'human development.' That reframing influenced a generation of policymakers.",
      politics:"Without UNDP's capacity building, many developing countries have weaker governance institutions. Democratic transitions are harder without technical support."
    }},
  {id:"irc",name:"International Rescue Committee",born:1933,died:null,cat:"institutions",field:"Refugee Aid",
    quote:"From harm to home.",
    contributions:["Refugee resettlement","Emergency response","Post-conflict recovery","Integration services"],
    r:0.50,reasoning:"Refugee organizations were forming. IRC's founding to help refugees fleeing Hitler was specific to moment. Similar organizations would have emerged for subsequent crises.",
    counterfactual:"Without IRC, refugee aid still happens â€” the crises that created refugees demanded response. But IRC's specific founding moment â€” Albert Einstein on the board, helping refugees flee Hitler â€” gave it credibility and model. Without IRC, refugee resettlement in the US might be less organized, integration services weaker. Other organizations fill the space but with different histories and possibly different approaches.",
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
    impact:{lives:"Millions of refugees aided",econ:"$1B+ annual budget",cultural:"Refugee integration model",reach:"40+ countries",timeline:"Refugee aid organized similarly"},

    cascade:[
      {event:"No refugee resettlement expertise",consequence:"IRC helped hundreds of thousands of refugees build new lives in the US. Without them, resettlement programs are smaller and less effective.",delay:"~10 years",severity:"medium",icon:"ðŸ "},
      {event:"WWII refugee response weaker",consequence:"Founded at Einstein's suggestion to rescue people fleeing Nazis, IRC saved thousands of lives. Without them, more intellectuals and refugees perished.",delay:"Immediate",severity:"high",icon:"ðŸš¢"},
      {event:"Post-conflict recovery programs missing",consequence:"IRC works in countries after wars end â€” rebuilding education, health, governance. Without them, post-conflict societies are more fragile.",delay:"~30 years",severity:"medium",icon:"ðŸ—ï¸"},
      {event:"Less humanitarian innovation",consequence:"IRC pioneered using evidence in humanitarian aid â€” testing what works rather than assuming. Without this, aid effectiveness is lower.",delay:"~40 years",severity:"medium",icon:"ðŸ“Š"}
    ],
    modernDay:{
      tech:"IRC's evidence-based approach to humanitarian aid influenced how all relief organizations measure and improve their programs.",
      culture:"Albert Einstein helped found the IRC â€” connecting intellectual conscience to humanitarian action. That link between academia and aid persists in the organization's culture.",
      politics:"Without IRC's resettlement programs, hundreds of thousands of refugees in the US never arrive. American immigrant communities â€” and their contributions â€” look different."
    }},
  {id:"mercycorps",name:"Mercy Corps",born:1979,died:null,cat:"institutions",field:"Humanitarian Aid",
    quote:"Mercy Corps is a global team of humanitarians.",
    contributions:["Crisis response","Market-based development","Youth programs","Climate resilience"],
    r:0.55,reasoning:"Humanitarian organizations proliferated. Mercy Corps' market-based approach was distinctive but the sector was growing. Similar organizations would have filled its niche.",
    counterfactual:"Without Mercy Corps, humanitarian aid continues â€” the sector was growing rapidly. But Mercy Corps pioneered market-based approaches to aid, trying to build sustainable local economies rather than just delivering supplies. Without this specific model, market-based aid develops more slowly. Similar organizations fill the space; the specific approach to development might be different, possibly more traditional aid-based.",
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
    impact:{lives:"50M+ annually",econ:"$600M+ annual budget",cultural:"Market-based aid model",reach:"40+ countries",timeline:"Market-based aid develops anyway"},

    cascade:[
      {event:"Less market-based aid",consequence:"Mercy Corps pioneered using market systems in humanitarian aid. Without them, more aid is direct handouts rather than economic empowerment.",delay:"~10 years",severity:"medium",icon:"ðŸ’°"},
      {event:"Youth programs in conflict zones missing",consequence:"Mercy Corps runs programs for young people in fragile states. Without them, more youth are recruited by armed groups.",delay:"~20 years",severity:"medium",icon:"ðŸ‘¥"},
      {event:"Climate adaptation gaps",consequence:"Mercy Corps works on climate adaptation with vulnerable communities. Without them, more farmers lose livelihoods as conditions change.",delay:"~30 years",severity:"medium",icon:"ðŸŒ¡ï¸"},
      {event:"Less rapid disaster response",consequence:"Mercy Corps is among the first responders to earthquakes, floods, and conflicts. Without them, some communities wait longer for help.",delay:"~15 years",severity:"medium",icon:"ðŸ†˜"}
    ],
    modernDay:{
      tech:"Mercy Corps' market-based approaches â€” using mobile money, local entrepreneurs, and economic incentives in aid â€” influenced how the humanitarian sector thinks about sustainability.",
      culture:"Mercy Corps helped shift humanitarian thinking from 'give people things' to 'help people build economies.' That market-based philosophy changed the aid industry.",
      politics:"Without Mercy Corps' programs in fragile states, youth radicalization in some regions is worse. Their conflict-prevention work is less visible but significant."
    }},
  {id:"wef",name:"World Economic Forum",born:1971,died:null,cat:"institutions",field:"Global Governance",
    quote:"Committed to improving the state of the world.",
    contributions:["Davos meetings","Global competitiveness rankings","Stakeholder capitalism advocacy","Public-private partnerships"],
    r:0.50,reasoning:"Elite global gatherings were happening. Klaus Schwab's specific vision shaped WEF, but similar forums would have emerged. The function of elite networking would be filled.",
    counterfactual:"Without WEF, global elite gatherings still happen â€” the demand exists. But Davos specifically, with its mix of business, government, and celebrity, was Klaus Schwab's creation. Without it, elite networking happens through different venues: Bilderberg expands, other conferences emerge. 'Davos Man' as concept doesn't exist. Global economic coordination happens but through different channels and possibly with different ideological framing.",
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
    impact:{lives:"Policy influence globally",econ:"Business-government interface",cultural:"Davos culture",reach:"Global elites",timeline:"Elite forums develop similarly"},

    cascade:[
      {event:"No Davos gathering",consequence:"The annual meeting of world leaders, CEOs, and thinkers doesn't exist. Elite coordination happens through other channels â€” less structured, more bilateral.",delay:"Immediate",severity:"low",icon:"ðŸ”ï¸"},
      {event:"No Global Competitiveness Report",consequence:"WEF's annual rankings shape how countries think about economic policy. Without them, fewer benchmarks drive reform.",delay:"~10 years",severity:"low",icon:"ðŸ“Š"},
      {event:"Stakeholder capitalism develops differently",consequence:"Klaus Schwab coined 'stakeholder capitalism.' Without WEF promoting it, the idea that companies serve more than shareholders takes different form.",delay:"~20 years",severity:"low",icon:"ðŸ¤"},
      {event:"Fourth Industrial Revolution unnamed",consequence:"WEF framed the current technological shift. Without their terminology and framework, we think about AI and automation differently.",delay:"~45 years",severity:"low",icon:"ðŸ¤–"}
    ],
    modernDay:{
      tech:"WEF's 'Fourth Industrial Revolution' framework â€” AI, IoT, biotech converging â€” shapes how governments and companies think about technology policy.",
      culture:"Davos became shorthand for global elite consensus. Without it, the backlash against globalization lacks its most visible symbol.",
      politics:"Without WEF, global elites still coordinate â€” but the specific Davos consensus that shaped 1990s-2000s globalization looks different."
    }},
  {id:"aspen",name:"Aspen Institute",born:1949,died:null,cat:"institutions",field:"Policy & Leadership",
    quote:"Leadership principles, ideas in action.",
    contributions:["Executive seminars","Policy programs","Leadership development","Great ideas exploration"],
    r:0.60,reasoning:"Policy institutes were forming. Aspen's specific humanities-based leadership model was distinctive but think tanks and leadership programs proliferated regardless.",
    counterfactual:"Without Aspen Institute, leadership development and policy discussion continue â€” the demand exists. But Aspen's specific model â€” Great Books seminars for executives, humanities-based leadership â€” was distinctive. Without it, executive education is more MBA-focused, less humanities-grounded. Policy discussions happen through other institutes. The 'Aspen Ideas Festival' format doesn't exist; ideas conferences take different forms.",
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
    impact:{lives:"Leaders shaped",econ:"Policy influence",cultural:"Ideas-based leadership",reach:"United States, global",timeline:"Leadership development continues"},

    cascade:[
      {event:"No leadership seminar model",consequence:"Aspen's Great Books-based leadership program influenced a generation of American leaders. Without it, executive education is more business-focused, less humanistic.",delay:"~10 years",severity:"low",icon:"ðŸ“š"},
      {event:"No Aspen Ideas Festival",consequence:"The festival that brings together thinkers across disciplines doesn't exist. Cross-pollination between fields is slightly less structured.",delay:"~40 years",severity:"low",icon:"ðŸ’¡"},
      {event:"Policy fellowship gap",consequence:"Aspen's policy programs bring together leaders from different sectors. Without them, policy conversations are more siloed.",delay:"~20 years",severity:"low",icon:"ðŸ›ï¸"},
      {event:"Values-based leadership weaker",consequence:"Aspen's approach â€” rooting leadership in philosophical reflection â€” influenced how many organizations train leaders. Without it, leadership training is more technique-focused.",delay:"~15 years",severity:"low",icon:"ðŸŽ“"}
    ],
    modernDay:{
      tech:"Aspen's convening model â€” bringing diverse experts together for structured dialogue â€” influenced how think tanks, conferences, and idea festivals operate.",
      culture:"The idea that leaders should read philosophy and engage with big ideas â€” not just strategy and management â€” is partly Aspen's contribution to American culture.",
      politics:"Without Aspen's cross-partisan convenings, some bipartisan relationships that enable compromise in Washington don't form."
    }},
  {id:"cfr",name:"Council on Foreign Relations",born:1921,died:null,cat:"institutions",field:"Foreign Policy",
    quote:"An independent, nonpartisan membership organization, think tank, and publisher.",
    contributions:["Foreign Affairs journal","Policy expertise","Elite network","US foreign policy influence"],
    r:0.50,reasoning:"Foreign policy elites needed a forum. CFR served this function in the US. Other countries developed their own institutes. The function would be served somehow.",
    counterfactual:"Without CFR, US foreign policy establishment still forms â€” the need exists. But CFR specifically shaped how US foreign policy elites think and network. Foreign Affairs journal doesn't exist; a different publication becomes the forum. The specific network of CFR members â€” rotating through government and private sector â€” doesn't form. US foreign policy might be more fragmented, less cohesive establishment view.",
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
    impact:{lives:"US foreign policy shaped",econ:"Policy research",cultural:"Foreign policy establishment",reach:"United States",timeline:"Foreign policy think tanks emerge"},

    cascade:[
      {event:"No Foreign Affairs journal",consequence:"The most influential foreign policy journal doesn't exist. American foreign policy debate has a different intellectual center.",delay:"~1 year",severity:"medium",icon:"ðŸ“°"},
      {event:"Post-WWII consensus less structured",consequence:"CFR members shaped the Marshall Plan, NATO, and the UN. Without CFR as a meeting ground, these institutions might look different.",delay:"~24 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Foreign policy expertise more scattered",consequence:"CFR trains and connects foreign policy professionals. Without it, the American foreign policy establishment is less cohesive.",delay:"~20 years",severity:"medium",icon:"ðŸŒ"},
      {event:"War on Terror framework different",consequence:"CFR task forces shaped post-9/11 policy debates. Without their analysis, American responses might differ.",delay:"~80 years",severity:"low",icon:"ðŸ›¡ï¸"}
    ],
    modernDay:{
      tech:"CFR's daily analysis and background briefings inform how journalists, diplomats, and policymakers understand international events.",
      culture:"The 'foreign policy establishment' that critics love to attack was partly built at CFR. Without it, American foreign policy debate is less institutionalized.",
      politics:"Without CFR's convenings, the bipartisan foreign policy consensus that held from WWII through the Cold War might not have formed as strongly."
    }},
  {id:"brookings",name:"Brookings Institution",born:1916,died:null,cat:"institutions",field:"Policy Research",
    quote:"Quality. Independence. Impact.",
    contributions:["Centrist policy research","Government expertise pool","Economic policy analysis","Evidence-based policy"],
    r:0.55,reasoning:"Think tanks were forming in the US. Brookings was influential in shaping policy research norms, but the sector was developing. Similar institutions would have emerged.",
    counterfactual:"Without Brookings, policy research continues â€” think tanks were emerging. But Brookings shaped the model: nonpartisan, expert-driven, evidence-based. It became the gold standard against which other think tanks measured themselves. Without it, policy research might be more partisan earlier, less respected. The 'revolving door' between Brookings and government might work differently.",
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
    impact:{lives:"US policy shaped",econ:"Policy analysis model",cultural:"Nonpartisan expertise ideal",reach:"United States, global influence",timeline:"Policy research continues"},

    cascade:[
      {event:"No centrist policy research anchor",consequence:"Brookings has been the 'establishment' think tank since 1916. Without it, policy research is more ideologically polarized from the start.",delay:"Immediate",severity:"medium",icon:"ðŸ“Š"},
      {event:"Marshall Plan design different",consequence:"Brookings economists helped design post-WWII economic policy. Without their analysis, reconstruction programs differ.",delay:"~31 years",severity:"medium",icon:"ðŸ—ï¸"},
      {event:"Budget analysis less independent",consequence:"Brookings' economic analysis provided nonpartisan grounding for budget debates. Without it, fiscal policy is more politically driven.",delay:"~30 years",severity:"medium",icon:"ðŸ’°"},
      {event:"Less urban policy research",consequence:"Brookings' Metro program shapes how America thinks about cities. Without their data, urban policy gets less attention.",delay:"~50 years",severity:"low",icon:"ðŸ™ï¸"}
    ],
    modernDay:{
      tech:"Brookings' research on technology policy â€” AI governance, platform regulation, cybersecurity â€” is cited in every congressional hearing on tech.",
      culture:"Brookings established the model of the nonpartisan policy expert â€” the analyst whose credibility comes from methodology, not ideology.",
      politics:"Without Brookings, the center of American policy debate shifts. There's less institutional ballast against partisan extremes in policy research."
    }},
  {id:"rand",name:"RAND Corporation",born:1948,died:null,cat:"institutions",field:"Research & Analysis",
    quote:"Research and analysis to inform public policy decisions.",
    contributions:["Systems analysis development","Game theory applications","Nuclear strategy analysis","Think tank model pioneer"],
    r:0.45,reasoning:"Cold War demanded policy analysis. RAND pioneered systems analysis that spread globally. Military-academic complex was forming anyway, but RAND's specific contributions shaped how governments think.",
    counterfactual:"Without RAND, Cold War strategic analysis still happens â€” the stakes demanded it. But RAND specifically pioneered systems analysis, game theory in policy, and the think tank model that others copied. Without RAND, nuclear strategy is analyzed differently â€” possibly less systematically. The way governments approach complex problems might be different. Systems analysis as methodology spreads more slowly or through different channels.",
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
    impact:{lives:"Cold War policy shaped",econ:"Defense analysis industry",cultural:"Rational analysis culture",reach:"US, allied nations",timeline:"Strategic analysis develops differently"},

    cascade:[
      {event:"No game theory applications to policy",consequence:"RAND pioneered applying mathematical analysis to military and policy decisions. Without them, the Cold War is navigated with less strategic rigor.",delay:"Immediate",severity:"high",icon:"ðŸŽ¯"},
      {event:"No systems analysis in government",consequence:"RAND invented systems analysis â€” using data to evaluate policy options. Without it, government decisions rely more on intuition and politics.",delay:"~5 years",severity:"medium",icon:"ðŸ“Š"},
      {event:"Nuclear strategy less theorized",consequence:"RAND analysts developed deterrence theory, mutually assured destruction, and nuclear strategy. Without them, nuclear policy is more improvised.",delay:"~10 years",severity:"high",icon:"â˜¢ï¸"},
      {event:"Internet develops differently",consequence:"RAND's Paul Baran designed packet switching â€” the basis of the internet. ARPANET might not use this architecture, changing the internet's design.",delay:"~19 years",severity:"high",icon:"ðŸŒ"}
    ],
    modernDay:{
      tech:"Packet switching â€” the fundamental architecture of the internet â€” was designed at RAND. Their influence on how computer networks work is permanent.",
      culture:"RAND created the archetype of the technocratic policy analyst â€” using data and models to make decisions. The think tank as a concept owes much to their model.",
      politics:"Without RAND's nuclear deterrence theory, the Cold War is navigated differently. More dangerous, potentially. The intellectual framework for avoiding nuclear war partly came from RAND."
    }},
  {id:"carnegieendow",name:"Carnegie Endowment for International Peace",born:1910,died:null,cat:"institutions",field:"International Affairs",
    quote:"Global network of policy experts for conflict resolution.",
    contributions:["International peace research","Policy dialogue across nations","Nuclear nonproliferation work","Democracy promotion"],
    r:0.55,reasoning:"Peace research institutions were forming. Carnegie was early and influential but the field developed through multiple organizations.",
    counterfactual:"Without Carnegie Endowment, peace research continues â€” the field was developing. But Carnegie was early, established in 1910, before WWI. Its specific programs â€” nuclear nonproliferation work, democracy promotion, international dialogue â€” shaped how international affairs is studied and practiced. Without it, peace research develops through other institutions but with different focus and possibly less prestige.",
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
    impact:{lives:"International relations shaped",econ:"Policy research",cultural:"Peace research field",reach:"Global",timeline:"Peace research continues via others"},

    cascade:[
      {event:"No international peace research",consequence:"Carnegie was the first institution dedicated to studying how to prevent war. Without it, peace studies as a field develops later.",delay:"Immediate",severity:"medium",icon:"ðŸ•Šï¸"},
      {event:"Arms control research thinner",consequence:"Carnegie's nonproliferation program shaped how the world thinks about nuclear weapons. Without their analysis, arms control treaties have less intellectual grounding.",delay:"~30 years",severity:"medium",icon:"â˜¢ï¸"},
      {event:"Less track-two diplomacy",consequence:"Carnegie facilitates unofficial diplomatic channels. Without them, some conflicts lack back-channel communication.",delay:"~30 years",severity:"low",icon:"ðŸ¤"},
      {event:"Democracy promotion research missing",consequence:"Carnegie's work on democratic transitions influenced how the US supports democracy abroad. Without it, democracy promotion is more ad hoc.",delay:"~50 years",severity:"low",icon:"ðŸ—³ï¸"}
    ],
    modernDay:{
      tech:"Carnegie's research on nuclear nonproliferation shapes how governments approach Iran, North Korea, and other proliferation challenges.",
      culture:"Andrew Carnegie's belief that peace could be studied and engineered â€” like a business problem â€” created the model for policy research institutions.",
      politics:"Without Carnegie's nonproliferation research, arms control treaties have less intellectual foundation. Nuclear weapons policy is made with less expert analysis."
    }},
  {id:"trilateral",name:"Trilateral Commission",born:1973,died:null,cat:"institutions",field:"International Relations",
    quote:"Foster closer cooperation among core democratic industrialized areas.",
    contributions:["US-Europe-Japan elite coordination","Policy recommendations","Elite consensus building","Globalization framework"],
    r:0.60,reasoning:"Elite coordination was happening through multiple channels. Trilateral formalized one version, but similar networks existed. Its influence is often overstated.",
    counterfactual:"Without the Trilateral Commission, elite coordination still happens â€” CFR, Bilderberg, WEF all existed or emerged around the same time. The specific US-Europe-Japan focus was David Rockefeller's vision, but the trilateral economic relationship was developing regardless. Conspiracy theories find a different target. Elite coordination is slightly less formalized but continues through other channels.",
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
    impact:{lives:"Elite policy coordination",econ:"International cooperation",cultural:"Conspiracy theory target",reach:"Democratic industrial nations",timeline:"Elite coordination happens anyway"},

    cascade:[
      {event:"Less US-Europe-Japan coordination",consequence:"The trilateral economic relationship develops through bilateral channels. Less coordination means more trade friction between democracies.",delay:"Immediate",severity:"low",icon:"ðŸŒ"},
      {event:"No 'Crisis of Democracy' report",consequence:"The Trilateral Commission's 1975 report on democratic governance shaped political thinking. Without it, the debate about democratic overload takes different form.",delay:"~2 years",severity:"low",icon:"ðŸ“‹"},
      {event:"Conspiracy theories target others",consequence:"Without the Trilateral Commission, conspiracy theorists focus on Bilderberg, CFR, or other elite groups. The target changes; the phenomenon doesn't.",delay:"~10 years",severity:"low",icon:"ðŸ‘ï¸"},
      {event:"G7 coordination slightly different",consequence:"Many G7 members were Trilateral participants. Without this prior relationship-building, G7 summits might be less collegial.",delay:"~2 years",severity:"low",icon:"ðŸ¤"}
    ],
    modernDay:{
      tech:"The Trilateral Commission's influence is less about technology and more about the policy frameworks that governed technology trade between democracies.",
      culture:"The Trilateral Commission became a symbol of elite coordination â€” for better or worse. Without it, a different institution fills that role in conspiracy theories.",
      politics:"Without the Trilateral Commission, US-Europe-Japan coordination is slightly less personal. The same policies likely emerge through other channels."
    }},
  {id:"heritage",name:"Heritage Foundation",born:1973,died:null,cat:"institutions",field:"Conservative Policy",
    quote:"Building an America where freedom, opportunity, prosperity, and civil society flourish.",
    contributions:["Reagan revolution intellectual foundation","Mandate for Leadership","Conservative policy analysis","Quick-turnaround research"],
    r:0.50,reasoning:"Conservative think tanks were forming. Heritage's specific innovation was quick policy briefs for legislators. The conservative intellectual movement would have found institutional form regardless.",
    counterfactual:"Without Heritage, conservative policy infrastructure still develops â€” AEI existed, Cato was founded around the same time. But Heritage's specific innovation was quick-turnaround policy briefs for legislators and 'Mandate for Leadership' playbooks for incoming administrations. Without it, conservative policy is less operationalized, transitions less prepared. The Reagan revolution might be slightly different without Heritage's policy toolkit.",
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
    impact:{lives:"US conservative policy",econ:"Policy research model",cultural:"Conservative intellectual infrastructure",reach:"United States",timeline:"Conservative policy development continues"},

    cascade:[
      {event:"No Mandate for Leadership",consequence:"Heritage's policy playbook for incoming Republican administrations doesn't exist. Reagan's team improvises more; conservative policy is less systematically implemented.",delay:"~7 years",severity:"medium",icon:"ðŸ“‹"},
      {event:"Conservative quick-response gap",consequence:"Heritage invented rapid policy briefs for legislators. Without them, conservative lawmakers rely more on personal staff and lobbyists for policy ideas.",delay:"~5 years",severity:"medium",icon:"âš¡"},
      {event:"Reagan revolution less programmatic",consequence:"Heritage provided the intellectual infrastructure for Reaganism. Without it, conservative governance is more instinctive and less organized.",delay:"~7 years",severity:"medium",icon:"ðŸ›ï¸"},
      {event:"Different think tank ecosystem",consequence:"Heritage's success spawned imitators. Without it, the activist think tank model develops differently. Policy is shaped more by academia and lobbying.",delay:"~15 years",severity:"medium",icon:"ðŸ“Š"}
    ],
    modernDay:{
      tech:"Heritage's model of quick-turnaround policy analysis â€” responding to news within hours with policy briefs â€” is now standard across the political spectrum.",
      culture:"Heritage proved that think tanks could be activist organizations, not just academic ones. That shift changed how policy is made in Washington.",
      politics:"Without Heritage's transition playbooks, Republican administrations are less prepared on day one. The 'Project 2025' model has a different lineage."
    }},
];


