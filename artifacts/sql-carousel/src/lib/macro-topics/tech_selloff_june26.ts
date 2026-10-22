import type { SlideData } from "../carousel-types";

export const TECH_SELLOFF_JUNE26: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "MARKET CRASH",
    tagRight: "JUNE 23, 2026",
    heading: "The Great",
    headingAccent: "Tech Wreck.",
    body: "Global markets just suffered a massive, synchronized selloff. The Nasdaq plunged over 800 points premarket, and the Indian Sensex dumped nearly 900 points. Here is why the 'Risk-On' euphoria just abruptly ended.",
    levelBadge: "MACRO",
    topicNum: "SELL",
    keywords: ["CRASH", "NASDAQ", "FED", "INFLATION", "SENSEX", "AI", "NIFTY"],
    bullets: [
      "📉 The 800-Point Nasdaq Plunge",
      "🏦 The Fed's 'Higher for Longer' Trap",
      "🤖 The AI Capex Reality Check",
      "🇮🇳 The Sensex & Nifty Breakdown",
      "🛡️ How to position for the volatility",
    ],
  },

  // ═══════════════════ SLIDE 2: THE FED REALITY CHECK ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MONETARY POLICY",
    heading: "The Inflation",
    headingAccent: "Ghost Returns.",
    body: "The primary catalyst for today's market dump isn't a single company—it's the U.S. Federal Reserve.",
    features: [
      { icon: "🦅", label: "Hawkish Pivot", description: "Under new Chair Kevin Warsh, the Fed is taking a hardline stance. Sticky economic data proves inflation is NOT dead yet." },
      { icon: "⏳", label: "Higher for Longer", description: "Markets were pricing in multiple rate cuts by late 2026. The new reality? Rates might stay elevated well into 2027." },
      { icon: "💵", label: "The Dollar Squeeze", description: "As rate expectations shift, the U.S. Dollar Index (DXY) spikes, suffocating emerging markets and global tech valuations." },
    ],
    insightBox: "💡 The Rule: When the 'risk-free' rate stays high, the valuations of high-growth tech companies get mathematically crushed.",
  },

  // ═══════════════════ SLIDE 3: THE AI CAPEX PANIC ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE TECH SECTOR",
    heading: "The AI Bubble",
    headingAccent: "Starts to Leak.",
    body: "For two years, Big Tech has spent Trillions on AI infrastructure. Wall Street is finally asking: 'Where is the ROI?'",
    features: [
      { icon: "📉", label: "Hyperscaler Exhaustion", description: "Semiconductor stocks (like Micron) experienced massive volatility today on whispers that Meta and Microsoft might slow their AI chip purchases." },
      { icon: "🧠", label: "The Brain Drain", description: "Alphabet (Google) shares took a hit after two high-profile AI researchers defected, highlighting the intense, expensive war for talent." },
      { icon: "💸", label: "The Margin Squeeze", description: "Building AI models is wildly expensive, but monetizing them is proving difficult. Investors are losing patience with the 'spend now, profit later' narrative." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE INDIAN CONTAGION ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "DOMESTIC MARKETS",
    heading: "The Dalal Street",
    headingAccent: "Bloodbath.",
    body: "India wasn't spared from the global contagion. The combination of global tech weakness and domestic IPO liquidity drains forced a violent correction.",
    table: {
      headers: ["Index / Sector", "The Action", "The Reason"],
      rows: [
        { cells: ["BSE Sensex", "Down ~900 Points", "Heavy FII selling & profit booking at all-time highs."], highlight: true },
        { cells: ["Nifty 50", "Broke 23,850 Support", "Broad-based weakness; long liquidations."], highlight: false },
        { cells: ["IT Sector", "Leading the Drop", "Accenture's recent guidance cut and global tech fears."], highlight: true },
      ],
      caption: "With the upcoming ₹30,000 Crore NSE IPO sucking liquidity from the system, institutions are taking cash off the table.",
    },
  },

  // ═══════════════════ SLIDE 5: THE MACRO ROTATION ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "PORTFOLIO STRATEGY",
    heading: "Surviving the",
    headingAccent: "Summer Volatility.",
    body: "When the Nasdaq sneezes, the world catches a cold. Here is how smart money is rotating right now.",
    steps: [
      { number: "01", title: "Trim Speculative Tech", description: "If the Fed holds rates high, companies with 'future promises' but no current cash flow will bleed the fastest." },
      { number: "02", title: "Pivot to Value", description: "Institutions are rotating into defensive sectors, high-dividend yielders, and companies with bulletproof balance sheets." },
      { number: "03", title: "Hold Cash for IPOs", description: "In India, massive capital is sitting on the sidelines waiting to deploy into the upcoming Jio Platforms and NSE public offerings." },
    ],
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "The Crash",
    headingAccent: "Cheat Sheet.",
    body: "Don't panic sell, but respect the macro shift. The era of blind 'Buy The Dip' is pausing.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🏦", label: "The Fed", description: "Higher for longer. Inflation is too sticky to cut rates." },
      { icon: "🤖", label: "AI Capex", description: "Wall Street is demanding actual ROI on Trillions in AI spending." },
      { icon: "🇮🇳", label: "Indian Equities", description: "Sensex drops 900 pts as FIIs sell Tech and hoard cash for Mega-IPOs." },
      { icon: "💼", label: "The Play", description: "Rotate out of high-multiple growth and into defensive, cash-flowing value." },
    ],
  },
];
