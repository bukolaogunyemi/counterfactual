// Category definitions
export const CATS = {
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
  sports:{label:"Sports",color:"#e11d48",bg:"rgba(225,29,72,0.06)"},
  events:{label:"Events",color:"#7c3aed",bg:"rgba(124,58,237,0.06)"},
  institutions:{label:"Institutions",color:"#0891b2",bg:"rgba(8,145,178,0.06)"},
  inventions:{label:"Inventions",color:"#059669",bg:"rgba(5,150,105,0.06)"},
};

export const CAT_ICONS = {
  science: "🔬", politics: "🏛️", military: "⚔️", arts: "🎨",
  philosophy: "📜", medicine: "⚕️", computing: "💻", finance: "💰",
  exploration: "🧭", social: "✊", sports: "🏆", events: "📅",
  institutions: "🏢", inventions: "⚙️",
};


// Helper: check if figure matches a category (primary or secondary)
export const figInCat = (fig, catKey) => fig.cat === catKey || fig.cat2 === catKey;
