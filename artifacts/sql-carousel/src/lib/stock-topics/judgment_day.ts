import type { SlideData } from "@workspace/carousel-engine";

export const JUDGMENT_DAY: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "EARNINGS INTELLIGENCE",
    tagRight: "SIGNAL: APRIL 27, 2026",
    heading: "Judgment",
    headingAccent: "Day.",
    body: "Inside the $650B CaPex Reckoning. Microsoft, Alphabet, Meta, and Amazon report on April 29—the most critical 24 hours in the history of the AI Super-Cycle.",
    levelBadge: "STOCKS",
    topicNum: "JD1",
    bullets: ["$650B Combined 2026 CaPex", "The 'Monetization' Proof Point", "Wednesday's Triple-Threat Results"],
  },

  // ═══════════════════ SLIDE 2: THE $650B QUESTION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "INFRASTRUCTURE SPEND",
    heading: "The Great",
    headingAccent: "Reckoning.",
    body: "The era of 'AI Ambition' is over. In 2026, the market is no longer funding promises—it is demanding high-alpha returns on infrastructure.",
    features: [
      { icon: "💰", label: "$650B Total Spend", description: "The collective 2026 capital expenditure of the Big 4 Hyperscalers to build the AI fabric." },
      { icon: "🏗️", label: "Cluster Density", description: "Investors are tracking 'Utilization Rates' of H100 and H200 clusters across global regions." },
      { icon: "📉", label: "Margin Pressure", description: "When does the spending peak? The 'CaPex-to-Revenue' ratio is now the primary stock driver." },
    ],
    insightBox: "💡 Analysis: Any hint of 'stalled' AI revenue growth against this level of spending will trigger a massive volatility event.",
  },

  // ═══════════════════ SLIDE 3: MICROSOFT ($MSFT) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE AI ARCHITECT",
    heading: "Microsoft: The",
    headingAccent: "Azure Floor.",
    body: "Microsoft is the primary test case for 'Copilot' monetization. If MSFT can't show durable growth, the whole cycle is at risk.",
    features: [
      { icon: "☁️", label: "Azure Growth", description: "The market expects 30%+ growth driven purely by 'AI Consumption' services." },
      { icon: "🤖", label: "Copilot Adoption", description: "Tracking the conversion from 'Free/Trial' users to 'Paid Enterprise' seats." },
      { icon: "⚛️", label: "The Nuclear Moat", description: "Updates on the Helion Fusion PPA and the 2028 energy sovereignty roadmap." },
    ],
    insightBox: "🎯 Strategic Take: Microsoft is the 'Safest' bet because its AI is already integrated into the global enterprise workflow.",
  },

  // ═══════════════════ SLIDE 4: ALPHABET ($GOOGL) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "SEARCH & CLOUD",
    heading: "Alphabet: The",
    headingAccent: "Search Wall.",
    body: "Google must prove that LLM-based search (SGE) isn't cannibalizing its high-margin advertising revenue.",
    features: [
      { icon: "🔍", label: "Search Resilience", description: "Are users still clicking ads in the age of 'Perplexity-style' AI answers?" },
      { icon: "📈", label: "Cloud 50%", description: "Investors want to see Google Cloud growth hitting 40-50% YoY to justify the infrastructure spend." },
      { icon: "⚛️", label: "Gemini 2.0", description: "The technical performance gap vs. GPT-5 will define the 'Mindshare' of developers in 2Q 2026." },
    ],
  },

  // ═══════════════════ SLIDE 5: META ($META) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE AD ENGINE",
    heading: "Meta: The",
    headingAccent: "Ad Giant.",
    body: "Meta is using AI to supercharge its ad-targeting engine. The question is whether the revenue gains can keep up with the GPU costs.",
    features: [
      { icon: "🎯", label: "Llama 4.0", description: "The open-source moat. Is Meta successfully 'Leaking' intelligence to kill competitor margins?" },
      { icon: "💰", label: "Ad-Yield Alpha", description: "Tracking the increase in 'Conversion Rates' thanks to AI-generated creative and targeting." },
      { icon: "🕶️", label: "Reality Labs", description: "The ongoing $10B+ burn rate. Will the market continue to tolerate this while AI Capex is so high?" },
    ],
  },

  // ═══════════════════ SLIDE 6: AMAZON ($AMZN) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE INFRASTRUCTURE KING",
    heading: "Amazon: The",
    headingAccent: "AWS Bet.",
    body: "Amazon is vertically integrating faster than any other player—buying the satellites, the power, and the chips.",
    features: [
      { icon: "📦", label: "AWS Acceleration", description: "The shift of 'Legacy' enterprise databases to the 'Agentic' AI cloud is driving massive demand." },
      { icon: "🛰️", label: "Globalstar Deal", description: "Updates on the $11.6B satellite acquisition to enable 'Cloud-to-Phone' connectivity." },
      { icon: "⚛️", label: "X-Energy SMRs", description: "Amazon's massive contract for 'Small Modular Reactors' to power the 2030 data center grid." },
    ],
  },

  // ═══════════════════ SLIDE 7: SIDE-BY-SIDE ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "THE CAPEX SCOREBOARD",
    heading: "The Big Tech",
    headingAccent: "CaPex Rift.",
    body: "Estimated 2026 Spending vs. AI Revenue Exposure as of April 27, 2026.",
    table: {
      headers: ["Metric", "MSFT", "GOOGL", "AMZN", "META"],
      rows: [
        { cells: ["Est. 2026 CaPex", "$60B+", "$50B+", "$65B+", "$40B+"], highlight: true },
        { cells: ["AI Rev. Target", "SaaS / Cloud", "Search / Ads", "Infra / Cloud", "Ads / Social"], highlight: true },
        { cells: ["Primary Risk", "SaaS Churn", "Ad Disruption", "Margin Drag", "Execution Burn"], highlight: true },
        { cells: ["The 'Alpha' Bet", "OpenAI / Copilot", "Gemini / TPU", "AWS / Globalstar", "Llama / GPU"], highlight: true },
      ],
      caption: "Source: Goldman Sachs, MacroEdge Intelligence 2026.",
    },
  },

  // ═══════════════════ SLIDE 8: THE SOVEREIGN BUYER ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE GULF MULTIPLIER",
    heading: "The HUMAIN",
    headingAccent: "Safety Net.",
    body: "While US Big Tech faces scrutiny, Saudi Arabia's $100B HUMAIN platform is emerging as the 'Buyer of Last Resort' for AI chips.",
    features: [
      { icon: "🇸🇦", label: "Sovereign AI", description: "Saudi Arabia and the UAE are buying the excess GPU capacity that US firms might trim." },
      { icon: "⚡", label: "Energy Arbitrage", description: "Building data centers where the power is cheapest—right next to the oil and solar fields." },
      { icon: "🛡️", label: "Policy Hedge", description: "Providing NVIDIA with a 'Non-US' revenue stream to offset potential domestic regulatory caps." },
    ],
    insightBox: "💡 Note: The Middle East is the new 'Floor' for the semiconductor industry. Demand is no longer localized to Silicon Valley.",
  },

  // ═══════════════════ SLIDE 9: THE 12-HOUR VOLATILITY ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "TRADING THE EVENT",
    heading: "The April 29",
    headingAccent: "Timeline.",
    body: "What to watch during the most volatile 12 hours in the stock market this year.",
    steps: [
      {
        number: "01",
        title: "4:00 PM EST: The Print",
        description: "The initial headlines from MSFT and GOOGL. Watch for Azure and Search growth percentages first.",
      },
      {
        number: "02",
        title: "5:00 PM EST: The Calls",
        description: "The CEO commentary on CaPex for 2027. If they guide 'Higher Spend,' the market will panic or rally based on revenue.",
      },
      {
        number: "03",
        title: "8:00 PM EST: The Aftermath",
        description: "NVIDIA and the semiconductor complex will move in lock-step with the cloud spend guidance.",
      },
    ],
  },

  // ═══════════════════ SLIDE 10: BULL vs BEAR ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MARKET SCENARIOS",
    heading: "Success vs.",
    headingAccent: "Stagnation.",
    body: "The two outcomes for Wednesday’s cluster. The difference between a 1,000-point Nasdaq rally and a correction.",
    features: [
      { icon: "🚀", label: "The Bull Case", description: "Cloud growth accelerates to 35%+ and Copilot conversion hits 10%. CaPex is seen as 'Fuel.'" },
      { icon: "📉", label: "The Bear Case", description: "Growth stalls at 25%, margins compress by 200bps, and AI revenue is called 'Experimental.'" },
    ],
  },

  // ═══════════════════ SLIDE 11: THE FOUNDRY FACTOR ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "SUPPLY CHAIN INTEGRATION",
    heading: "TSMC and",
    headingAccent: "Intel.",
    body: "The cloud spend eventually flows to the Foundries. If the Big 4 guide higher, the Foundry Wars (TSMC vs. Intel) will intensify.",
    features: [
      { icon: "⚙️", label: "Intel 18A", description: "Will Amazon or Google confirm Intel 18A designs on their earnings calls?" },
      { icon: "⚛️", label: "TSMC N2", description: "Confirming the 2026 booking status for the next generation of AI accelerators." },
    ],
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL VERDICT",
    heading: "Monetize or",
    headingAccent: "Correction.",
    body: "April 29 is the 'Show Me the Money' moment for the AI industry. The firms that prove they can turn chips into cash will own the 2026-2030 cycle.",
    ctaText: "Follow @macroedge_in",
  },
];
