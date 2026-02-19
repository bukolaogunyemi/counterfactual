// Category definitions
export const CATS = {
  science:{label:"Science & Tech",color:"#2563eb",bg:"rgba(37,99,235,0.08)",
    question: name => `Remove ${name} from history. How much does science change?`},
  politics:{label:"Politics",color:"#dc2626",bg:"rgba(220,38,38,0.06)",
    question: name => `Remove ${name} from history. How different does the political map look?`},
  military:{label:"Military",color:"#475569",bg:"rgba(71,85,105,0.08)",
    question: name => `Remove ${name} from the battlefield. Does the war end differently?`},
  arts:{label:"Arts & Culture",color:"#9333ea",bg:"rgba(147,51,234,0.06)",
    question: name => `Remove ${name} from the record. Does the culture look different?`},
  philosophy:{label:"Philosophy & Religion",color:"#0d9488",bg:"rgba(13,148,136,0.06)",
    question: name => `Remove ${name} from history. Do the same ideas still take hold?`},
  medicine:{label:"Medicine",color:"#16a34a",bg:"rgba(22,163,74,0.06)",
    question: name => `Remove ${name} from history. How many more lives are lost?`},
  computing:{label:"Math & Computing",color:"#7c3aed",bg:"rgba(124,58,237,0.06)",
    question: name => `Remove ${name}. Does the digital world still arrive on schedule?`},
  finance:{label:"Finance & Economics",color:"#ca8a04",bg:"rgba(202,138,4,0.06)",
    question: name => `Remove ${name}. Does the economy develop the same way?`},
  exploration:{label:"Exploration",color:"#ea580c",bg:"rgba(234,88,12,0.06)",
    question: name => `Remove ${name}. Does the map still get drawn the same way?`},
  social:{label:"Social Movements",color:"#db2777",bg:"rgba(219,39,119,0.06)",
    question: name => `Remove ${name}. Does society still arrive at the same place?`},
  sports:{label:"Sports",color:"#e11d48",bg:"rgba(225,29,72,0.06)",
    question: name => `Erase ${name} from the record books. Does the sport look different?`},
  events:{label:"Events",color:"#7c3aed",bg:"rgba(124,58,237,0.06)",
    question: name => `Rewind and delete this moment. How much actually changes?`},
  institutions:{label:"Institutions",color:"#0891b2",bg:"rgba(8,145,178,0.06)",
    question: name => `Remove ${name}. Does the world organize itself the same way?`},
  inventions:{label:"Inventions",color:"#059669",bg:"rgba(5,150,105,0.06)",
    question: name => `Take this off the table. Does 2026 still look the same?`},
};

export const CAT_ICONS = {
  science: "🔬", politics: "🏛️", military: "⚔️", arts: "🎨",
  philosophy: "📜", medicine: "⚕️", computing: "💻", finance: "💰",
  exploration: "🧭", social: "✊", sports: "🏆", events: "📅",
  institutions: "🏢", inventions: "⚙️",
};


// Helper: check if figure matches a category (primary or secondary)
export const figInCat = (fig, catKey) => fig.cat === catKey || fig.cat2 === catKey;
