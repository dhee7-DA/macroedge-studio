import type { SlideData } from "@workspace/carousel-engine";

export const VALUATION_MATRIX: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "FUNDAMENTAL ANALYSIS SERIES",
    tagRight: "SIGNAL: APRIL 27, 2026",
    heading: "The Valuation",
    headingAccent: "Matrix.",
    body: "Inside the 2026 Tech Reset. As Big Tech transitions from 'Ambition' to 'Monetization,' we teardown the PE and PEG ratios of the firms building the AI future.",
    levelBadge: "FUNDAMENTALS",
    topicNum: "FM1",
    bullets: ["Tech Sector Forward P/E at 23.0x", "The 'Cheap' NVIDIA Thesis (24.4x)", "The $650B CaPex vs. Multiples"],
  },

  // ═══════════════════ SLIDE 2: THE 2026 RESET ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MARKET DYNAMICS",
    heading: "The Valuation",
    headingAccent: "Reset.",
    body: "After the premium-led rally of 2025, the tech sector has experienced a meaningful multiple contraction in early 2026.",
    features: [
      { icon: "📉", label: "Multiple Compression", description: "The S&P 500 Tech sector forward P/E has dropped from 31x to ~23x as of April 2026." },
      { icon: "💰", label: "Yield Sensitivity", description: "Rising 10Y Treasury yields (4.32%) are forcing a re-rating of 'Long-Duration' tech growth." },
      { icon: "🏛️", label: "Earnings Quality", description: "Investors are prioritizing firms with actual GAAP profitability over 'Projected' AI gains." },
    ],
    insightBox: "💡 Analysis: The 'Hype Premium' has been flushed out. We are now in the 'Execution Phase' of the cycle.",
  },

  // ═══════════════════ SLIDE 3: NVIDIA ($NVDA) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "EQUITY TEARDOWN",
    heading: "NVIDIA: The",
    headingAccent: "EPS Rocket.",
    body: "Despite its dominance, NVIDIA is trading at its most 'reasonable' valuation in years relative to its earnings growth.",
    features: [
      { icon: "📈", label: "Forward P/E: 24.4x", description: "Trading at a discount to many legacy SaaS firms despite 100%+ revenue growth." },
      { icon: "🚀", label: "PEG Ratio: 0.85", description: "A PEG under 1.0 indicates that the market may be underestimating the duration of the GPU cycle." },
      { icon: "🧱", label: "The Blackwell Moat", description: "Consensus estimates for FY27 are being revised UP as GB300 demand accelerates." },
    ],
    insightBox: "🎯 Strategic Take: NVDA is a 'Growth at a Reasonable Price' (GARP) play in a 24x forward P/E wrapper.",
  },

  // ═══════════════════ SLIDE 4: MICROSOFT ($MSFT) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "EQUITY TEARDOWN",
    heading: "Microsoft: The",
    headingAccent: "Quality Hedge.",
    body: "Microsoft is the 'Anchor' of the AI portfolio, trading at its lowest valuation point in several years as of April 2026.",
    features: [
      { icon: "☁️", label: "Forward P/E: 24.0x", description: "The 24x multiple is acting as a major institutional support level for the stock." },
      { icon: "🤖", label: "Copilot Yields", description: "Early data shows a 15-20% productivity lift for enterprise clients, justifying the $30/mo seat price." },
      { icon: "🛡️", label: "Cash Flow Moat", description: "Free Cash Flow (FCF) margins remain above 30%, even with massive data center build-outs." },
    ],
  },

  // ═══════════════════ SLIDE 5: ALPHABET ($GOOGL) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "EQUITY TEARDOWN",
    heading: "Alphabet: The",
    headingAccent: "Value Trap?",
    body: "Google is the 'Cheapest' of the hyperscalers, but the market is pricing in structural risks to its core Search business.",
    features: [
      { icon: "🔍", label: "Forward P/E: 21.0x", description: "Reflecting a 'Disruption Discount' due to the rise of LLM-based answer engines." },
      { icon: "📈", label: "Cloud Alpha", description: "Google Cloud is the dark horse, with margins expanding faster than Azure or AWS in 1Q 2026." },
      { icon: "🧬", label: "DeepMind Moat", description: "The market is giving 'Zero Value' to Alphabet's leading position in Bio-AI and Drug Discovery." },
    ],
    insightBox: "💡 Analysis: If Gemini 2.0 proves Search resilience on Wednesday, the 21x multiple will re-rate to 25x quickly.",
  },

  // ═══════════════════ SLIDE 6: META ($META) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "EQUITY TEARDOWN",
    heading: "Meta: The",
    headingAccent: "Ad Bargain.",
    body: "Zuckerberg’s 'Year of Efficiency' has turned Meta into a high-octane earnings machine with a surprisingly low multiple.",
    features: [
      { icon: "📱", label: "Forward P/E: 22.0x", description: "Trading below the tech sector average despite having the world's largest AI social graph." },
      { icon: "🤝", label: "Llama 4.0 Moat", description: "Open-source dominance is commoditizing competitor models while Meta owns the data." },
      { icon: "💰", label: "Share Buybacks", description: "The $50B+ buyback program is providing a permanent floor for EPS growth." },
    ],
  },

  // ═══════════════════ SLIDE 7: SIDE-BY-SIDE ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "THE VALUATION MATRIX",
    heading: "The 2026",
    headingAccent: "Scoreboard.",
    body: "Consensus valuation metrics for the Big 5 as of April 27, 2026. Data sourced from institutional terminals.",
    table: {
      headers: ["Ticker", "Forward P/E", "PEG Ratio", "Rev. Growth"],
      rows: [
        { cells: ["NVDA", "24.4x", "0.85", "88%"], highlight: true },
        { cells: ["MSFT", "24.0x", "1.65", "14%"], highlight: true },
        { cells: ["META", "22.0x", "1.12", "18%"], highlight: true },
        { cells: ["GOOGL", "21.0x", "1.25", "12%"] },
        { cells: ["AMZN", "32.0x", "1.40", "11%"] },
      ],
      caption: "Source: Bloomberg Intelligence, MacroEdge Estimates April 2026.",
    },
  },

  // ═══════════════════ SLIDE 8: PEG RATIO EXPLAINER ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "INVESTOR EDUCATION",
    heading: "Understanding",
    headingAccent: "the PEG.",
    body: "Why a high P/E isn't always 'Expensive.' The Price/Earnings-to-Growth (PEG) ratio is the ultimate sanity check.",
    steps: [
      {
        number: "01",
        title: "The Formula",
        description: "PEG = (P/E Ratio) / (Annual EPS Growth Rate). It normalizes for growth velocity.",
      },
      {
        number: "02",
        title: "The Benchmark",
        description: "A PEG of 1.0 is considered 'Fairly Valued.' Below 1.0 is often 'Undervalued.'",
      },
      {
        number: "03",
        title: "The 2026 Signal",
        description: "NVIDIA at 0.85 is the only mega-cap trading below its growth rate—a rare market signal.",
      },
    ],
  },

  // ═══════════════════ SLIDE 9: CAPEX vs VALUATION ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "FINANCIAL STRATEGY",
    heading: "CaPex: The",
    headingAccent: "Multiple Killer?",
    body: "The market is currently 'Punishing' firms with high capital expenditure, fearing it will dilute FCF margins.",
    features: [
      { icon: "🏗️", label: "$650B Spend", description: "The collective CaPex of the Big 4 Hyperscalers is the largest in human history." },
      { icon: "📉", label: "Margin Drag", description: "Every dollar spent on chips is a dollar not returned to shareholders via buybacks." },
      { icon: "⚡", label: "ROI Horizon", description: "The market is demanding proof of ROI within 12-18 months, not 5 years." },
    ],
    insightBox: "⚠️ Risk: If Wednesday's earnings show Capex rising without Revenue matching, multiples will compress further.",
  },

  // ═══════════════════ SLIDE 10: THE ETF BASKET ($MAGS) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "ETF ANALYSIS",
    heading: "The Mag-7",
    headingAccent: "Proxy.",
    body: "For investors seeking broad fundamental exposure, the $MAGS ETF remains the primary institutional vehicle.",
    features: [
      { icon: "📊", label: "Concentration", description: "Pure exposure to the 7 firms driving 80% of S&P 500 earnings growth." },
      { icon: "📉", label: "Expense Ratio", description: "0.29%—a low-cost way to play the high-conviction AI theme." },
      { icon: "🏛️", label: "Liquidity Floor", description: "Daily volume exceeding $500M ensures tight spreads during Wednesday's volatility." },
    ],
  },

  // ═══════════════════ SLIDE 11: SECTOR BENCHMARKS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MACRO CONTEXT",
    heading: "Tech vs",
    headingAccent: "The S&P 500.",
    body: "Is tech still a 'Bubble'? The data suggests we are closer to 'Normalization' than 'Euphoria.'",
    features: [
      { icon: "🏛️", label: "Tech Forward PE", description: "Currently ~23x. Far below the 1999 peak of 60x+." },
      { icon: "📊", label: "S&P 500 PE", description: "Currently ~20.5x. The tech premium is at its thinnest level in 24 months." },
      { icon: "⚡", label: "Growth Gap", description: "Tech earnings are growing 4x faster than the rest of the index." },
    ],
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL CONCLUSION",
    heading: "The Dip is",
    headingAccent: "Fundamental.",
    body: "The 2026 reset has removed the froth. For the first time in the AI cycle, valuations are finally aligned with the earnings reality. Wednesday is the moment of truth.",
    ctaText: "Follow @macroedge_in",
  },
];
