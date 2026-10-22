import type { SlideData } from "@workspace/carousel-engine";

export const FII_EXODUS: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INSTITUTIONAL ANALYSIS",
    tagRight: "MAY 2026",
    heading: "The FII",
    headingAccent: "Exodus.",
    body: "Foreign Institutional Investors are dumping Indian equities at a historic pace. But the market isn't crashing. Here is the exact math behind the great capital flight and the rise of the domestic cushion.",
    levelBadge: "MACRO",
    topicNum: "FII",
    keywords: ["FII SELLING", "CHINA ARBITRAGE", "DII SIPs", "SEBI UBO", "HOT MONEY", "VALUATIONS"],
    bullets: ["The China Trade Arbitrage", "SEBI's Hidden Regulations", "The ₹20k Crore DII Cushion", "The Structural Decoupling"],
  },

  // ═══════════════════ SLIDE 2: THE CONTEXT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "HISTORICAL CONTEXT",
    heading: "The Great",
    headingAccent: "Decoupling.",
    body: "To understand how the Indian market has structurally transformed, you have to look at what happened the last time FIIs sold heavily.",
    features: [
      { icon: "📉", label: "2008 Crash", description: "FIIs sold roughly ₹52,000 Crores. Because India relied entirely on foreign 'hot money,' the Nifty crashed by 50%." },
      { icon: "📈", label: "2026 Resilience", description: "FIIs have sold significantly more capital in recent cycles than in 2008, yet the Nifty continues to hold near all-time highs." },
      { icon: "🛡️", label: "The Shift", description: "The structural dependency on foreign hedge funds has been permanently broken by the Indian middle class." },
      { icon: "🔄", label: "Wealth Transfer", description: "Institutional ownership of India's best companies is transferring from Wall Street to Dalal Street." },
    ],
    insightBox: "💡 Institutional View: India is no longer a 'Hostage' to foreign capital flows. Domestic liquidity is the new master.",
  },

  // ═══════════════════ SLIDE 3: THE VALUATION GAP ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "VALUATIONS",
    heading: "The China",
    headingAccent: "Arbitrage.",
    body: "Global funds aren't leaving because they hate India; they are leaving because India is 'Expensive' and China is 'Dirt Cheap'.",
    table: {
      headers: ["Metric", "India (Nifty 50)", "China (Hang Seng)"],
      rows: [
        { cells: ["P/E Ratio (FY25)", "~22x", "~9x"], highlight: true },
        { cells: ["Earnings Yield", "4.5%", "11.1%"], highlight: false },
        { cells: ["GDP Growth", "7%", "4.5%"], highlight: true },
        { cells: ["Dividend Yield", "1.2%", "4.5%"], highlight: false },
      ],
      caption: "Fund managers are forced to 'Rebalance' when the valuation gap becomes this wide.",
    },
  },

  // ═══════════════════ SLIDE 4: THE REASONS ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE MECHANICS",
    heading: "3 Drivers of",
    headingAccent: "The Flight.",
    body: "Beyond valuations, there are three structural reasons why foreign money is exiting the system.",
    steps: [
      {
        number: "01",
        title: "The SEBI UBO Norms",
        description: "New disclosure rules for 'Ultimate Beneficial Owners' are flushing out opaque funds that were round-tripping money.",
      },
      {
        number: "02",
        title: "US Treasury Gravity",
        description: "With US 10-Year yields at ~4.5%, the 'Risk-Premium' for emerging markets has collapsed. Money is returning to the Dollar.",
      },
      {
        number: "03",
        title: "Portfolio Balancing",
        description: "As India's weight in global indices (MSCI) rises, funds are 'Overweight.' They must sell to stay within their mandates.",
      },
    ],
  },

  // ═══════════════════ SLIDE 5: THE SECTOR IMPACT ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "SECTOR ANALYSIS",
    heading: "Who Gets",
    headingAccent: "Crushed?",
    body: "FIIs own the largest chunks of India's most successful companies. When they sell, the heavyweights bleed.",
    table: {
      headers: ["Sector", "FII Ownership", "Impact Level"],
      rows: [
        { cells: ["Banking (BFSI)", "35% - 45%", "Extreme (Price Caps)"], highlight: true },
        { cells: ["IT Services", "25% - 30%", "High (Sell-on-Rise)"], highlight: false },
        { cells: ["Consumer", "20%", "Medium (Stable)"], highlight: true },
        { cells: ["Energy / PSUs", "10% - 15%", "Low (DII Driven)"], highlight: false },
      ],
      caption: "This is why HDFC Bank remains stagnant despite record profits.",
    },
  },

  // ═══════════════════ SLIDE 6: THE CUSHION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "DOMESTIC LIQUIDITY",
    heading: "The DII",
    headingAccent: "Cushion.",
    body: "The only reason the market isn't collapsing under the weight of FII selling is the automated Retail SIP revolution.",
    features: [
      { icon: "💰", label: "₹21,000+ Cr Monthly", description: "Relentless monthly SIP inflows from retail investors provide a permanent bid." },
      { icon: "🛡️", label: "EPFO & Pension", description: "Government pension funds are now mandatory buyers of equity, creating structural support." },
      { icon: "🏢", label: "DII Ownership Rise", description: "DIIs now own ~16% of the market, up from <10% in the last decade." },
      { icon: "🤖", label: "The Floor Price", description: "DIIs have effectively decoupled the Indian stock market from the US Federal Reserve." },
    ],
    insightBox: "💡 The Quote: 'FIIs are the waves, but DIIs are the ocean.'",
  },

  // ═══════════════════ SLIDE 7: ADVANCED LOGIC ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "ADVANCED LOGIC",
    heading: "The Liquidity",
    headingAccent: "Trap.",
    body: "Is domestic buying always a good thing? Institutions are watching the 'Exit Liquidity' closely.",
    steps: [
      {
        number: "01",
        title: "Price Discovery",
        description: "FIIs are 'Value' investors. Without them, there is no one to keep the DIIs from overpaying for mediocre stocks.",
      },
      {
        number: "02",
        title: "The Redemption Risk",
        description: "If retail investors panic and stop SIPs, DIIs become sellers. This would be a systemic liquidity shock.",
      },
      {
        number: "03",
        title: "Quality Dilution",
        description: "Retail money tends to flow into 'Small Caps' and 'Penny Stocks' during a bull run, creating dangerous bubbles.",
      },
    ],
  },

  // ═══════════════════ SLIDE 8: INVESTOR WORKFLOW ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "WORKFLOW",
    heading: "The Exodus",
    headingAccent: "Checklist.",
    body: "How to navigate a market where the foreigners are leaving but the domestic engine is roaring.",
    features: [
      { icon: "🔍", label: "Monitor Net Flows", description: "Check NSE/BSE daily data. If FII selling < DII buying, the trend is your friend." },
      { icon: "📊", label: "Valuation Guard", description: "Avoid stocks trading at >2SD above their 5-year average P/E, regardless of DII buying." },
      { icon: "🏦", label: "Focus on Earnings", description: "FIIs will eventually return for 'Quality' at a fair price. Accumulate on dips." },
      { icon: "🛡️", label: "Sector Pivot", description: "Move toward sectors with high DII ownership and low FII exposure for stability." },
    ],
  },

  // ═══════════════════ SLIDE 9: THE VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE FINAL VERDICT",
    heading: "A Transfer of",
    headingAccent: "Power.",
    body: "FII selling is not a crisis. It is a historic transfer of equity ownership from foreign hedge funds to the Indian middle class.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "👑", label: "The New Kings", description: "Domestic money now dictates the floor price of the Indian equity market." },
      { icon: "🧠", label: "Valuation Discipline", description: "The FIIs handed over the keys. It is up to us not to crash the car by overpaying." },
      { icon: "🇨🇳", label: "The Reversal", description: "If Chinese stimulus fails, expect a violent snap-back of FII capital into India." },
      { icon: "📊", label: "Action", description: "Accumulate large-caps that FIIs have 'oversold' but have strong structural earnings." },
    ],
  },
];
