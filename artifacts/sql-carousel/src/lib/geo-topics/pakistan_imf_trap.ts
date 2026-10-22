import type { SlideData } from "@workspace/carousel-engine";

export const PAKISTAN_IMF_TRAP: SlideData[] = [
  // ═══════════════════ SLIDE 1: HOOK / HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INTELLIGENCE BRIEFING",
    tagRight: "SOVEREIGN DEBT × GEOPOLITICS",
    heading: "The IMF",
    headingAccent: "Trap.",
    body: "Pakistan has taken 24 IMF bailouts since 1958. Every one bought 2–3 years of stability — then the cycle repeated. This is the debt loop that 230 million people cannot escape.",
    levelBadge: "MACRO",
    topicNum: "01",
    bullets: [
      "🔄 24 Bailouts",
      "💸 $10.5B IMF Debt",
      "⚡ Energy Black Hole",
      "🌍 India Angle",
      "📉 Default Risk",
    ],
  },

  // ═══════════════════ SLIDE 2: THE DOOM LOOP ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE CYCLE",
    heading: "The 7-Step",
    headingAccent: "Doom Loop.",
    body: "Every bailout follows the same script. It has repeated 24 times in 66 years. It is not a rescue — it is a subscription.",
    steps: [
      {
        number: "01",
        title: "💥 Forex Crisis",
        description: "Import bills exceed reserves. Currency collapses. Country cannot pay debt.",
      },
      {
        number: "02",
        title: "🏛️ IMF Call → Conditions",
        description: "Emergency loan secured. Austerity package attached: cut subsidies, raise energy prices, hike taxes.",
      },
      {
        number: "03",
        title: "🔄 Pain → Reversal → Repeat",
        description: "Inflation spikes. Political backlash forces reform reversal. Structural decay resumes. Crisis returns in 2–3 years.",
      },
    ],
    insightBox: "📜 Pakistan has accepted 75 IMF conditions in 2 years. The cycle has never been structurally broken in 66 years.",
    footnote: "Sources: IMF Program Archive (1958–2026) & Express Tribune Conditions Tracker (March 2026).",
  },

  // ═══════════════════ SLIDE 3: THE NUMBERS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE DATA",
    heading: "The Brutal",
    headingAccent: "Math.",
    body: "As of April 2026, Pakistan is simultaneously running two IMF programs and owes the Fund $10.5 billion. A $1.21B tranche is pending board approval on May 8, 2026.",
    features: [
      { icon: "🏦", label: "IMF Debt Outstanding: $10.5B", description: "Top 10 IMF borrower globally. Two active programs: EFF (37 months) + RSF (28 months)." },
      { icon: "💵", label: "Next Tranche: $1.21 Billion", description: "IMF Executive Board vote scheduled May 8, 2026. Third EFF review + second RSF review." },
      { icon: "🏦", label: "Forex Reserves: $15.1B (SBP)", description: "State Bank of Pakistan holds. Equivalent to roughly 2 months of import cover — critically thin." },
      { icon: "📋", label: "Conditions Accepted: 75 Total", description: "Over 2 years. 11 new conditions added in March 2026 alone, including mandatory mini-budgets." },
    ],
    insightBox: "⚠️ $15.1B in reserves sounds large. But Pakistan's monthly import bill is ~$5–6B. The buffer is razor-thin.",
    footnote: "Sources: IMF.org Program Data & State Bank of Pakistan Reserves Report (Apr 17, 2026).",
  },

  // ═══════════════════ SLIDE 4: THE ENERGY BLACK HOLE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE CORE WOUND",
    heading: "The Energy",
    headingAccent: "Black Hole.",
    body: "Pakistan's power sector is hemorrhaging money. The 'circular debt' — unpaid bills between producers, distributors, and the government — has become an uncontrollable structural wound.",
    features: [
      { icon: "⚡", label: "Circular Debt: $15B+", description: "Power producers, distributors, and govt owe each other billions. The chain of non-payment is self-reinforcing." },
      { icon: "💡", label: "Electricity Tariffs: Rising", description: "IMF condition: annual electricity revisions from Jan 2027. Gas price hikes every 6 months from July 2026." },
      { icon: "🏭", label: "Industrial Competitiveness: Destroyed", description: "Pakistan's electricity cost is among the highest in Asia. Factories shut down or relocate to Bangladesh/India." },
      { icon: "🔄", label: "Subsidies → Cut → Protests → Restored", description: "Every government cuts subsidies to satisfy the IMF, then restores them to survive elections." },
    ],
    insightBox: "🎯 The energy sector alone explains why every IMF program fails. You cannot stabilise an economy when the power grid is a $15B liability.",
    footnote: "Sources: Pakistan Energy Sector Circular Debt Report (2026) & IMF EFF Structural Benchmarks.",
  },

  // ═══════════════════ SLIDE 5: THE TAX FAILURE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE TAX TRAP",
    heading: "230 Million.",
    headingAccent: "3M Pay Tax.",
    body: "Every single IMF program demands that Pakistan broaden its tax base. Every single program fails on this condition. The math is simple — and the consequences are devastating.",
    features: [
      { icon: "👥", label: "Population: 230 Million", description: "The 5th most populous nation on Earth. One of the youngest demographics in Asia." },
      { icon: "📝", label: "Active Tax Filers: ~3 Million", description: "Only 1.3% of the population participates in the formal tax system. Agriculture and real estate are largely untaxed." },
      { icon: "🏘️", label: "Real Estate: Untouchable", description: "Wealthy landowners and property moguls — the political elite — successfully block every property tax reform." },
      { icon: "💰", label: "Tax-to-GDP: ~10%", description: "Among the lowest in the world. IMF target is 13–14%. Gap funded by borrowing. Every year." },
    ],
    insightBox: "📊 Pakistan cannot fund its own government without external borrowing. That is the fundamental structural failure that 24 IMF programs have not fixed.",
    footnote: "Sources: FBR (Federal Board of Revenue) Annual Report 2025 & IMF Article IV Consultation (2026).",
  },

  // ═══════════════════ SLIDE 6: THE CPEC TRAP ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE CHINA FACTOR",
    heading: "The CPEC",
    headingAccent: "Bill Arrives.",
    body: "China's $50B investment in the China-Pakistan Economic Corridor (CPEC) was sold as a development miracle. The repayments are now accelerating — and Pakistan is paying them with IMF money.",
    features: [
      { icon: "🇨🇳", label: "CPEC Loans: ~$50 Billion", description: "Infrastructure projects: ports, roads, power plants. Financed at commercial interest rates by Chinese state banks." },
      { icon: "💸", label: "Repayment Phase: Active", description: "Principal + interest repayments are now a significant line item in Pakistan's external debt schedule." },
      { icon: "⚡", label: "Power Plants Without Buyers", description: "Chinese-built power plants added capacity Pakistan can't use or pay for — directly fuelling circular debt." },
      { icon: "🤝", label: "Rollover Negotiations: Ongoing", description: "Pakistan is negotiating CPEC debt rescheduling with Beijing — but at the cost of deeper strategic dependence." },
    ],
    insightBox: "⚠️ Pakistan is effectively using IMF loans to repay Chinese loans. Washington and Beijing are both pulling the strings — in opposite directions.",
    footnote: "Sources: CPEC Authority Annual Report & Pakistan External Debt Statistical Bulletin (Q1 2026).",
  },

  // ═══════════════════ SLIDE 7: THE REMITTANCE LIFELINE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE REAL STABILISER",
    heading: "The Gulf",
    headingAccent: "Lifeline.",
    body: "Pakistan's economy does not run on exports, manufacturing, or taxes. It runs on remittances from 9 million Pakistani workers in the Gulf. This is simultaneously its greatest strength — and its most dangerous vulnerability.",
    features: [
      { icon: "💰", label: "Annual Remittances: $30B+", description: "The single largest source of foreign exchange. Larger than all goods exports combined." },
      { icon: "🇸🇦", label: "Saudi + UAE = 60% of total", description: "Saudi Arabia and UAE are the two biggest sources. Gulf economic health directly = Pakistan's stability." },
      { icon: "📉", label: "Gulf Slowdown Risk", description: "Lower oil prices (UAE OPEC exit scenario) → Gulf fiscal tightening → job losses for Pakistani workers → remittance cliff." },
      { icon: "🏦", label: "SBP Reserve Dependency", description: "When remittances fall even 10%, SBP reserves drop by $3B+. That triggers immediate IMF emergency calls." },
    ],
    insightBox: "🔗 The UAE-OPEC exit and Pakistan's debt trap are directly connected. Cheaper oil → Gulf austerity → Pakistani worker deportations → Pakistan forex crisis.",
    footnote: "Sources: SBP Remittance Data (FY 2025-26) & World Bank Migration & Remittances Report.",
  },

  // ═══════════════════ SLIDE 8: THE INDIA ANGLE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE INDIA ANGLE",
    heading: "Pakistan's Crisis.",
    headingAccent: "India's Risk.",
    body: "A Pakistani economic collapse is not just a neighbour's problem. It has direct — and often underappreciated — consequences for Indian markets, security, and regional trade.",
    features: [
      { icon: "🛡️", label: "Border & Security Cost", description: "Economic distress historically correlates with domestic instability. India's defence posture and border spending intensify." },
      { icon: "📉", label: "EM Contagion Risk", description: "Pakistan sovereign stress triggers South Asia risk-off. FII outflows from Indian equities in the short term." },
      { icon: "👕", label: "Textile Sector Shift", description: "A weaker Pakistani rupee makes Pak textiles cheaper globally — direct competition for Indian garment exporters." },
      { icon: "🚫", label: "Trade Normalisation Blocked", description: "India-Pakistan trade could be $30B/yr. Economic desperation on one side prevents the political will for normalisation." },
    ],
    insightBox: "🎯 India and Pakistan's economies are deeply linked through geography, migration, and EM sentiment — even without direct trade.",
    footnote: "Sources: FICCI India-Pakistan Trade Study & IMF Regional Economic Outlook (April 2026).",
  },

  // ═══════════════════ SLIDE 9: HISTORICAL PRECEDENT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "HISTORY",
    heading: "What Default",
    headingAccent: "Actually Looks Like.",
    body: "Pakistan has not defaulted — yet. But three recent EM cases show exactly how the endgame plays out. Each followed the same structural pattern Pakistan is in today.",
    features: [
      { icon: "🇱🇰", label: "Sri Lanka — 2022", description: "Forex reserves hit zero. Fuel queues for 12 hours. President fled. IMF bailout eventually secured. Recovery: still ongoing." },
      { icon: "🇦🇷", label: "Argentina — Chronic", description: "9 sovereign defaults. Currently on its own IMF mega-program. Milei's shock therapy: brutal but showing early results." },
      { icon: "🇪🇬", label: "Egypt — 2022-2024", description: "Currency devalued 50%+. Three IMF programs in 4 years. Tourism and Suez revenues saved it from Sri Lanka's fate." },
      { icon: "🇵🇰", label: "Pakistan — 2026?", description: "Reserves thin. Conditions mounting. Gulf support uncertain. The tipping point is not guaranteed — but it is visible." },
    ],
    insightBox: "📜 The IMF has never allowed a nuclear-armed state to fully collapse. Pakistan's strategic value is its most durable safety net.",
    footnote: "Sources: IMF World Economic Outlook & Sovereign Debt Restructuring Case Studies (CFR, 2025).",
  },

  // ═══════════════════ SLIDE 10: THE GULF DEPENDENCY ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE BILATERAL BACKSTOP",
    heading: "Saudi, UAE,",
    headingAccent: "& the Rope.",
    body: "Beyond the IMF, Pakistan's survival depends on bilateral loans and rollovers from Gulf states. These are not grants — they are strategic tools with geopolitical strings attached.",
    steps: [
      {
        number: "01",
        title: "🇸🇦 Saudi Arabia — The Anchor",
        description: "The largest bilateral creditor. Deposits cash at SBP to boost reserves. In exchange: diplomatic alignment and religious influence in Pakistan's clerical establishment.",
      },
      {
        number: "02",
        title: "🇦🇪 UAE — The Rollover Partner",
        description: "UAE routinely rolls over maturing loans rather than calling them. SBP reserve targets for June 2026 ($18B) depend on UAE cooperation after bond repayments.",
      },
      {
        number: "03",
        title: "🇨🇳 China — The Silent Creditor",
        description: "CPEC debt restructuring is ongoing. China prefers bilateral negotiation over Paris Club. Concessions extracted quietly — port access, strategic infrastructure contracts.",
      },
    ],
    insightBox: "⚡ Pakistan is not just an IMF borrower. It is a geopolitical battleground between Saudi, Chinese, American, and Emirati financial influence.",
    footnote: "Sources: Arab News Bilateral Support Coverage & Pakistan Finance Ministry External Debt Report (Q1 2026).",
  },

  // ═══════════════════ SLIDE 11: THE ENDGAME SCENARIOS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE SCENARIOS",
    heading: "Three Possible",
    headingAccent: "Endgames.",
    body: "Pakistan's trajectory is not fixed. Three distinct scenarios are now in play — each with radically different outcomes for markets, the region, and 230 million people.",
    features: [
      { icon: "🟢", label: "Reform Breakout (15%)", description: "A government with a strong mandate executes tax reform, energy restructuring, and industrial policy. Markets re-rate Pakistan dramatically." },
      { icon: "🟡", label: "Managed Stagnation (60%)", description: "The most likely. IMF programs continue. Conditions accepted, partially implemented, partially reversed. Slow decay. No crisis, no growth." },
      { icon: "🔴", label: "Debt Restructuring (25%)", description: "Gulf support dries up. Reserves fall below critical levels. IMF negotiates haircuts. Currency devaluation 40–60%. Painful but necessary reset." },
    ],
    insightBox: "🎯 The IMF will not let Pakistan fully collapse — a nuclear state in default is a geopolitical catastrophe. Managed stagnation is the most likely outcome.",
    footnote: "Sources: CFR Pakistan Risk Assessment & Moody's Sovereign Credit Outlook (Q1 2026).",
  },

  // ═══════════════════ SLIDE 12: CONCLUSION / CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE BOTTOM LINE",
    heading: "The Trap",
    headingAccent: "Is By Design.",
    body: "Pakistan's IMF dependency is not accidental — it is the predictable result of structural failures in taxation, energy, and governance that no bailout can fix. Understanding this cycle is essential for every macro investor in South Asia.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🔄", label: "The Cycle", description: "24 programs. 66 years. The loop has never been structurally broken" },
      { icon: "💸", label: "The Debt", description: "$10.5B to IMF. $50B to China. $15B+ in power sector circular debt" },
      { icon: "🌍", label: "The Risk", description: "Gulf slowdown + CPEC repayments = the next crisis trigger" },
      { icon: "🇮🇳", label: "The India Angle", description: "EM contagion, border costs, and textile competition all move with Pakistan's stability" },
    ],
  },
];
