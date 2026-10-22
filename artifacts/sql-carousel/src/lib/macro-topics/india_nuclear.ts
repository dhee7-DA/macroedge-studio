import type { SlideData } from "@workspace/carousel-engine";

export const INDIA_NUCLEAR: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "ENERGY SOVEREIGNTY",
    tagRight: "SIGNAL: APRIL 16, 2026",
    heading: "India's Nuclear",
    headingAccent: "Renaissance.",
    body: "The SHANTI Act (2025) has officially ended the state monopoly on nuclear power. Private giants and global capital are now pouring into India's 'Atomic Moat.' Here is the institutional brief.",
    levelBadge: "MACRO",
    topicNum: "IN",
    bullets: ["The SHANTI Act Breakdown", "The Bharat SMR-200 Pilot", "Top 5 Corporate Beneficiaries"],
  },

  // ═══════════════════ SLIDE 2: THE REFORM ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "LEGISLATIVE TEARDOWN",
    heading: "The Death of",
    headingAccent: "the Monopoly.",
    body: "The SHANTI Act (2025) replaces the 1962 Atomic Energy Act, shifting how India powers its fastest-growing economy.",
    features: [
      { icon: "🏛️", label: "End of NPCIL Monopoly", description: "Private companies can now Build, Own, and Operate nuclear plants." },
      { icon: "⚖️", label: "Liability Reform", description: "Replaced CLND Act (2010) with graded liability caps for insurers." },
      { icon: "🌍", label: "49% FDI Allowance", description: "Enabling foreign joint ventures for high-end reactor tech." },
      { icon: "🛡️", label: "Independent AERB", description: "Safety regulation is now detached from government promotion." },
    ],
    insightBox: "💡 Analysis: Regulation is no longer the bottleneck. Capital and execution are the new priorities.",
  },

  // ═══════════════════ SLIDE 3: PRIVATE GIANTS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "INDUSTRIAL ALPHA",
    heading: "The Private",
    headingAccent: "Pivot.",
    body: "India's conglomerates are forming dedicated 'Nuclear Verticals' as nuclear moves from 'State Secret' to 'Infrastructure Play.'",
    features: [
      { icon: "🏭", label: "Reliance & Adani", description: "Evaluating large-scale CAPEX for dedicated industrial nuclear hubs." },
      { icon: "⚡", label: "Tata Power", description: "Focusing on SMR integration for city-grid baseload stability." },
      { icon: "🏗️", label: "Larsen & Toubro", description: "Dominant player in forge-shop manufacturing for reactor vessels." },
    ],
    insightBox: "🎯 Strategic Take: The 'Chaebol' model of nuclear growth (like South Korea) has officially arrived in India.",
  },

  // ═══════════════════ SLIDE 4: LIABILITY FIX ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "LEGAL INFRASTRUCTURE",
    heading: "The Liability",
    headingAccent: "Magic Bullet.",
    body: "The 2010 impasse is over. The new Act standardizes India with global IAEA liability norms, unlocking billions in dormant Western capital.",
    features: [
      { icon: "⚖️", label: "Graded Caps", description: "Financial liability is now capped based on reactor capacity (300M SDRs)." },
      { icon: "🛡️", label: "Supplier Safety", description: "Restores 'Right of Recourse' to contract-only, removing open-ended legal risk." },
      { icon: "🏛️", label: "Nuclear Fund", description: "A state-backed fund now covers excess claims, ensuring project bankability." },
    ],
    insightBox: "💡 Note: This was the single biggest blocker for Westinghouse and GE-Hitachi for the last 15 years. It is now gone.",
  },

  // ═══════════════════ SLIDE 5: SMR REVOLUTION ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "MODULAR PHYSICS",
    heading: "The SMR",
    headingAccent: "Roadmap.",
    body: "Traditional nuclear takes 10+ years to build. Small Modular Reactors (SMRs) reduce that to 4 years through factory assembly.",
    steps: [
      {
        number: "01",
        title: "Factory Printing",
        description: "Standardized reactor modules are 'printed' in factories and shipped to the site.",
      },
      {
        number: "02",
        title: "Incremental Scaling",
        description: "Start with 55 MWe, scale to 500 MWe by adding units as demand grows.",
      },
      {
        number: "03",
        title: "Captive Power",
        description: "Industrial hubs (Data Centers, Steel) build dedicated nuclear footprints on-site.",
      },
    ],
    insightBox: "🔋 Modularity = De-risked Finance. SMRs are the 'Data Centers' of energy.",
  },

  // ═══════════════════ SLIDE 6: THE HYDROGEN EDGE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "ENERGY SYNERGY",
    heading: "The Hydrogen",
    headingAccent: "Pivot.",
    body: "Nuclear isn't just for the grid. The new SHANTI Act incentivizes the coupling of SMRs with high-temperature electrolysis.",
    features: [
      { icon: "💧", label: "SMR-55 Design", description: "Specifically designed high-temp output for zero-carbon hydrogen smelting." },
      { icon: "🧪", label: "Industrial Decap", description: "Decoupling fertilizer and steel production from LNG/Coal baseloads." },
      { icon: "🏗️", label: "Cost-Leader", description: "Nuclear-derived hydrogen projected to reach $1.5/kg by 2029." },
    ],
    insightBox: "🎯 Fact: Green Hydrogen is only 'Green' if the baseload is carbon-free. SMRs are the solution.",
  },

  // ═══════════════════ SLIDE 7: INDIGENOUS TECH ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE INDIA MOAT",
    heading: "Bharat",
    headingAccent: "BSMR-200.",
    body: "India isn't just importing tech; it has operationalized the world's most competitive indigenous Small Modular Reactor.",
    features: [
      { icon: "🇮🇳", label: "220 MWe Design", description: "High-temperature gas-cooled SMR optimized for Indian climatic conditions." },
      { icon: "💎", label: "₹20,000 Cr Mission", description: "Direct government R&D funding for the 2026-2028 pilot window." },
      { icon: "⛽", label: "Scale Advantage", description: "Mass-manufacturing 10 units simultaneously to drive down CAPEX per MWe." },
    ],
    insightBox: "💡 The Moat: By building its own tech, India avoids the 'Sanction Vulnerability' of Western dependencies.",
  },

  // ═══════════════════ SLIDE 8: THE FDI CAP ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CAPITAL FLOWS",
    heading: "The 49%",
    headingAccent: "FDI Trap.",
    body: "The Act allows up to 49% foreign equity. It’s a delicate balance between 'Tech Transfer' and 'Energy Sovereignty.'",
    features: [
      { icon: "💸", label: "Global Entry", description: "Rosatom, EDF, and Westinghouse are currently negotiating 49/51 JVs." },
      { icon: "⛓️", label: "Supply Lock-In", description: "Foreign partners provide the tech; Indian partners provide the land and operation." },
      { icon: "🏦", label: "Rupee Settlement", description: "Provision for energy-bonds in INR to de-risk against USD volatility." },
    ],
    insightBox: "🏛️ Note: The government retains 100% control over spent fuel and 'Strategic' nuclear materials.",
  },

  // ═══════════════════ SLIDE 9: BENEFICIARY MATRIX ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "INSTITUTIONAL DATA",
    heading: "The Beneficiary",
    headingAccent: "Matrix.",
    body: "Institutional watchlist for April 2026. These companies are rerating as the 'SHANTI' orders begin to flow.",
    table: {
      headers: ["Company", "Role", "Apr '26 Status"],
      rows: [
        { cells: ["L&T", "Reactor Vessels / EPC", "Institutional Top Pick"], highlight: true },
        { cells: ["BHEL", "Turbines / Steam Gen", "Primary Equipment Lead"], highlight: true },
        { cells: ["NTPC", "Operator / JV Lead", "Pivot to Nuclear underway"] },
        { cells: ["Tata Power", "SMR Site Evaluator", "Bullish Sector Outlook"] },
        { cells: ["KSB Ltd", "Specialized Pumps", "Exclusive BSMR contracts"] },
      ],
      caption: "Sources: NSE, Bloomberg Intelligence, MacroEdge Archive (April 2026).",
    },
  },

  // ═══════════════════ SLIDE 10: DECOUPLING LOGIC ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "GEOPOLITICAL ECONOMICS",
    heading: "Bypassing",
    headingAccent: "Hormuz.",
    body: "As the Strait of Hormuz remains a transit risk, India is using nuclear to 'War-Proof' its industrial baseload.",
    features: [
      { icon: "📉", label: "LNG Dependency", description: "Nuclear reduces the Rupee's vulnerability to spot-LNG volatility." },
      { icon: "🏛️", label: "Trade Balance", description: "Saving billions in fossil fuel imports annually by 2040." },
      { icon: "🛢️", label: "Energy Shield", description: "Transitioning heavy industry off diesel/gas to atomic electricity." },
    ],
    insightBox: "🎯 Strategic Take: Nuclear is the ultimate 'Safe Haven' currency for a manufacturing nation.",
  },

  // ═══════════════════ SLIDE 11: THE TRAP ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CRITICAL RISKS",
    heading: "The Delivery",
    headingAccent: "Trap.",
    body: "It isn't all upside. The private sector faces structural hurdles that could derail the 2047 100 GW target.",
    features: [
      { icon: "🗺️", label: "Land Acquisition", description: "Local protests remain the #1 risk to nuclear site development." },
      { icon: "☢️", label: "Waste Management", description: "Private operators lack a unified framework for long-term spent fuel storage." },
      { icon: "⛓️", label: "Supply Chain", description: "Global forage-shop capacity is currently 'Maxed Out' due to defense surges." },
    ],
    insightBox: "⚠️ Risk Alert: A single regulatory delay on the first private pilot could freeze sector capital for years.",
  },

  // ═══════════════════ SLIDE 12: THE VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE BOTTOM LINE",
    heading: "Atomic",
    headingAccent: "Destiny.",
    body: "India’s Nuclear Renaissance is the industrial equivalent of the 1991 Liberalization. It is the end of an era, and the beginning of a superpower baseload.",
    ctaText: "Follow @macroedge_in",
    nextTopic: "Next: The Energy Super-Cycle (2026-2030)",
  },
];
