// Visual styles

export const fontStack = "'Instrument Serif', 'Georgia', serif";
export const sansStack = "'DM Sans', 'Helvetica Neue', sans-serif";

export const globalCSS = `
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; -webkit-tap-highlight-color: transparent; }
  ::selection { background: rgba(26,26,26,0.09); }
  body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
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
  @keyframes dailyShimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes dailyPulse {
    0%, 100% { box-shadow: 0 2px 12px rgba(217,119,6,0.12); }
    50% { box-shadow: 0 4px 20px rgba(217,119,6,0.22); }
  }
  @keyframes celebShake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-6px) rotate(-0.5deg); }
    20% { transform: translateX(5px) rotate(0.4deg); }
    30% { transform: translateX(-4px) rotate(-0.3deg); }
    40% { transform: translateX(3px) rotate(0.2deg); }
    50% { transform: translateX(-2px); }
    60% { transform: translateX(1px); }
  }
  @keyframes scorePop {
    0% { transform: scale(0.6); opacity: 0; }
    50% { transform: scale(1.15); }
    70% { transform: scale(0.95); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes glowRing {
    0% { transform: scale(0.3); opacity: 0.8; }
    100% { transform: scale(2.5); opacity: 0; }
  }
  @keyframes emojiDrop {
    0% { transform: scale(0) rotate(-20deg); opacity: 0; }
    50% { transform: scale(1.3) rotate(5deg); opacity: 1; }
    70% { transform: scale(0.9) rotate(-2deg); }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
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
  .collection-scroll { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
  .collection-scroll::-webkit-scrollbar { display: none; }
  .result-scroll { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
  .result-scroll::-webkit-scrollbar { display: none; }
  @keyframes gaugePulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.06); }
    100% { transform: scale(1); }
  }
  @keyframes lockFlash {
    0% { opacity: 0; transform: scale(0.8); }
    40% { opacity: 1; transform: scale(1.05); }
    100% { opacity: 0; transform: scale(1.3); }
  }
  @keyframes lockShake {
    0%, 100% { transform: translateX(0); }
    15% { transform: translateX(-3px) rotate(-0.5deg); }
    30% { transform: translateX(3px) rotate(0.5deg); }
    45% { transform: translateX(-2px); }
    60% { transform: translateX(2px); }
    75% { transform: translateX(-1px); }
  }
  button { -webkit-tap-highlight-color: transparent; }
  button:active { transform: scale(0.97); }
`;

export const S = {
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
    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.03)",
    transition: "box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease",
  },
  tag: (color, bg) => ({
    fontSize: 11,
    fontWeight: 700,
    padding: "3px 10px",
    borderRadius: 6,
    background: bg || `${color}12`,
    color: color,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    display: "inline-block",
  }),
  btn: {
    padding: "13px 28px",
    borderRadius: 12,
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
    letterSpacing: "-0.015em",
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
    borderRadius: 12,
    border: "1px solid #ddd9d0",
    background: "#faf9f6",
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

