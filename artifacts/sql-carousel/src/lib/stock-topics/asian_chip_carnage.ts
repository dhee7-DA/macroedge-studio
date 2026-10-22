import type { SlideData } from "../carousel-types";

export const ASIAN_CHIP_CARNAGE: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "STOCK TEARDOWN",
    tagRight: "JULY 2026",
    heading: "The Semiconductor",
    headingAccent: "Carnage.",
    body: "A brutal reality check just hit the Asian hardware sector. %%SK Hynix%% and %%Samsung%% saw massive intraday drops exceeding ==10-14%==. The AI momentum trade is officially cracking under the weight of its own valuation.",
    levelBadge: "TEARDOWN",
    topicNum: "MACRO",
    keywords: ["SEMICONDUCTORS", "AI ROI", "TSMC", "CHINA DUV", "SK HYNIX"],
    bullets: [
      "📉 Massive Intraday Flush",
      "💸 The AI ROI Crisis",
      "🇨🇳 China's DUV Leap",
      "📊 The TSMC Earnings Paradox",
      "🌊 The Supply Chain Contagion",
    ],
  },

  // ═══════════════════ SLIDE 2: THE ROI CRISIS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "FUNDAMENTALS",
    heading: "Where is the",
    headingAccent: "ROI?",
    body: "For the last 18 months, investors bought every chipmaker blind. Now, they are demanding fundamental verification.",
    features: [
      { icon: "💰", label: "Massive CapEx", description: "Hyperscalers are pouring hundreds of billions into ##infrastructure## and ##data centers##." },
      { icon: "⏳", label: "The Monetization Lag", description: "Wall Street is realizing that building the infrastructure doesn't guarantee immediate software revenue. The math is getting dangerous." },
      { icon: "🛑", label: "Valuation Limits", description: "You cannot sustain a ==60x== P/E ratio on hardware companies in a cyclical industry without infinite demand." },
    ],
    insightBox: "💡 The Reality: It’s no longer about AI *potential*; institutional capital is demanding actual, verifiable cash flow.",
  },

  // ═══════════════════ SLIDE 3: THE GEOPOLITICAL THREAT ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "GEOPOLITICS",
    heading: "The DUV",
    headingAccent: "Threat.",
    body: "It's not just a valuation problem. The western hardware monopoly is facing a severe geopolitical threat.",
    steps: [
      { number: "01", title: "The Blockade", description: "The ++US++ and its allies restricted ++China++ from acquiring advanced EUV lithography machines." },
      { number: "02", title: "The Domestic Pivot", description: "New reports indicate ++China++ is making rapid, independent progress on building its own Deep Ultraviolet (DUV) lithography capabilities." },
      { number: "03", title: "The Market Fear", description: "If ++China++ achieves domestic self-sufficiency in legacy and mid-tier nodes, they will flood the market with cheap silicon, crashing global margins." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE EARNINGS PARADOX ═══════════════════
  {
    type: "pitfalls",
    background: "light",
    tag: "VALUATION PARADOX",
    heading: "The Earnings",
    headingAccent: "Trap.",
    body: "In a euphoric market, even perfection isn't enough to satisfy the algorithms.",
    pitfalls: [
      {
        title: "The TSMC Sell-off",
        description: "%%TSMC%% printed absolute blowout profits and raised guidance, yet the stock still sank aggressively. Why? Because the market had priced in absolute perfection for the next 5 years.",
        fix: "Never buy a cyclical hardware stock priced at perfection. Any hint of a cycle peak triggers a 'sell the news' liquidation."
      },
      {
        title: "The SK Hynix Drop",
        description: "%%SK Hynix%% dominates High Bandwidth Memory (HBM), but a ==14%== drop shows that institutional money is rotating out of the pick-and-shovel trade before the music stops.",
        fix: "Watch for inventory buildups at the hyperscaler level. If they stop ordering, the hardware cycle ends instantly."
      }
    ],
  },

  // ═══════════════════ SLIDE 5: THE CONTAGION ═══════════════════
  {
    type: "dosdonts",
    background: "dark",
    tag: "THE RIPPLE EFFECT",
    heading: "Supply Chain",
    headingAccent: "Contagion.",
    body: "The sell-off isn't isolated to the foundries. It dragged down the entire regional supply chain.",
    dos: [
      { text: "Watch The Index Weighting", detail: "When giants like %%Samsung%% bleed, they pull down the entire KOSPI index. The Taiex (Taiwan) and Nikkei (Japan) are suffering severe collateral damage." },
      { text: "Monitor Equipment Makers", detail: "Japanese equipment makers like %%Tokyo Electron%% are getting hammered as investors price in a slowdown in future foundry expansion." }
    ],
    donts: [
      { text: "Don't Catch Falling Knives", detail: "Institutional unwinding takes time. Don't step in front of a multi-billion dollar rotation out of tech." },
      { text: "Don't Ignore The Fed", detail: "The upcoming FOMC rate decision is keeping capital sidelined. Risk-off sentiment is dominant." }
    ],
  },

  // ═══════════════════ SLIDE 6: CTA ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE PLAYBOOK",
    heading: "Correction or",
    headingAccent: "Collapse?",
    body: "This is a violent valuation reset, not a fundamental collapse in AI demand. Here is the re-entry playbook.",
    ctaText: "Save this Checklist",
    features: [
      { icon: "📉", label: "Wait for Base Building", description: "Let the moving averages flatten out. Do not buy until the technicals show institutional accumulation." },
      { icon: "🏛️", label: "FOMC Clarity", description: "Capital won't re-enter high-beta tech until the Fed gives absolute clarity on the rate trajectory." },
      { icon: "📊", label: "Hyperscaler Earnings", description: "Watch Alphabet, Microsoft, and Amazon. If their cloud revenue slows, the hardware trade is dead." },
      { icon: "🔔", label: "Stay Alert", description: "We will issue a buy alert when the rotation out of semiconductors exhausts itself." },
    ],
  },
];
