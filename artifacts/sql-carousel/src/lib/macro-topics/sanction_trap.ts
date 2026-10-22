import type { SlideData } from "@workspace/carousel-engine";

export const SANCTION_TRAP: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "GEOPOLITICAL TEARDOWN",
    tagRight: "SIGNAL: THE $USD TRAP",
    heading: "The U.S.",
    headingAccent: "Sanction Trap.",
    body: "The global reserve currency has transitioned from a neutral utility to a policy weapon. As the U.S. leverages the dollar's dominance, a structural 'Sanction Trap' is forcing nations to seek exit ramps. Here is the institutional brief on the weaponized dollar.",
    levelBadge: "MACRO",
    topicNum: "ST",
    bullets: ["$USD Weaponization", "The SWIFT Alternative", "CBDC & mBridge Pivot"],
  },

  // ═══════════════════ SLIDE 2: THE NEUTRALITY MYTH ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "RESERVE DYNAMICS",
    heading: "The Death of",
    headingAccent: "Neutrality.",
    body: "For decades, the $USD was considered a 'Neutral' asset—safe for all to hold regardless of political stance. The freezing of $300B in Russian reserves fundamentally broke this assumption.",
    features: [
      { icon: "📜", label: "The Precedent", description: "The legal 'weaponization' of central bank reserves was a 'nuclear' event in finance." },
      { icon: "🛡️", label: "National Interest", description: "Currency access is now contingent on alignment with U.S. foreign policy." },
      { icon: "📉", label: "Confidence Erosion", description: "Non-aligned nations now view $USD reserves as a 'political liability' rather than an asset." },
    ],
    insightBox: "💡 Analysis: You cannot have a 'Global Reserve' that is also a 'Regional Weapon.' The two roles are incompatible.",
  },

  // ═══════════════════ SLIDE 3: WEAPONIZED SWIFT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PAYMENT INFRASTRUCTURE",
    heading: "Weaponizing",
    headingAccent: "SWIFT.",
    body: "SWIFT is the nervous system of global trade. By disconnecting nations from this system, the U.S. can effectively 'starve' an economy of liquidity overnight.",
    features: [
      { icon: "⛓️", label: "Financial Exile", description: "Being cut from SWIFT makes cross-border settlement nearly impossible for banks." },
      { icon: "📊", label: "Direct Impact", description: "Trade volumes typically collapse by 15-25% in the first 12 months following expulsion." },
      { icon: "🏗️", label: "Forced Innovation", description: "This existential threat is driving the development of parallel, non-Western systems." },
    ],
    insightBox: "🎯 Strategic View: SWIFT is no longer just a messenger; it is a gatekeeper for the global middle class.",
  },

  // ═══════════════════ SLIDE 4: THE SANCTION CASCADE ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "SYSTEMIC FRAGILITY",
    heading: "The Sanction",
    headingAccent: "Cascade.",
    body: "Sanctions create a ripple effect that extends far beyond the target nation, impacting global supply chains and currency stability.",
    steps: [
      {
        number: "01",
        title: "Primary Freeze",
        description: "Direct asset freezing and trade bans on specific government entities and leaders.",
      },
      {
        number: "02",
        title: "Secondary Risk",
        description: "Threatening sanctions on third-party nations (e.g., India, Turkey) that continue trading with the target.",
      },
      {
        number: "03",
        title: "Structural Exit",
        description: "Frustrated nations move trade to local currencies (CNY, INR, Ruble), permanently reducing $USD velocity.",
      },
    ],
    insightBox: "🔋 The Result: Every new sanction is a marketing campaign for $USD alternatives.",
  },

  // ═══════════════════ SLIDE 5: THE mBRIDGE PIVOT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "FUTURE TECH",
    heading: "The mBridge",
    headingAccent: "Revolution.",
    body: "The BIS (Bank for International Settlements) is piloting mBridge—a CBDC-based system that allows instant, non-dollar settlement outside the U.S. banking dragnet.",
    features: [
      { icon: "🌩️", label: "Instant Clearing", description: "Settlement in seconds rather than days, bypassing correspondent banks." },
      { icon: "👁️", label: "Privacy Layer", description: "Transactions are invisible to the U.S. Treasury, ending extraterritorial reach." },
      { icon: "🌏", label: "BRICS Adoption", description: "China, UAE, and Thailand are early movers; BRICS+ expansion is the primary target." },
    ],
    insightBox: "💡 MacroEdge Take: mBridge is the true 'Exit Ramp' from the $USD-led financial order.",
  },

  // ═══════════════════ SLIDE 6: SWIFT VS CIPS ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "SYSTEM COMPARISON",
    heading: "The Payment",
    headingAccent: "War.",
    body: "As the world fragments, two competing financial stacks are emerging. One is based on trust in the $USD; the other on physical trade and gold.",
    table: {
      headers: ["Feature", "SWIFT ($USD)", "CIPS/mBridge (CNY/CBDC)"],
      rows: [
        { cells: ["Primary Backing", "U.S. Treasury / Law", "Commodities / CBDC"], highlight: true },
        { cells: ["Settlement Speed", "T+2 / T+3 Days", "Instant / Atomic"], highlight: true },
        { cells: ["Sanction Risk", "HIGH (Extraterritorial)", "LOW (Sovereign Rails)"] },
        { cells: ["Governance", "Western G7 Path", "Multi-polar / BIS Path"] },
        { cells: ["Market Share", "85%+", "Rising (~3-5% and growing)"] },
      ],
      caption: "Sources: SWIFT, People's Bank of China, BIS Innovation Hub.",
    },
  },

  // ═══════════════════ SLIDE 7: THE COMODITY ANCHOR ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "REAL-WORLD ALPHA",
    heading: "The Commodity",
    headingAccent: "Anchor.",
    body: "Nations are increasingly pricing oil, gas, and gold in local currencies to bypass 'Dollar Friction' and ensure energy security.",
    features: [
      { icon: "🛢️", label: "Petro-Yuan", description: "Saudi Arabia and UAE exploring non-dollar sales for crude oil into Asia." },
      { icon: "🌾", label: "Food Rails", description: "Grains and fertilizers moving in Rupee and Dirham to avoid clearing delays." },
      { icon: "💎", label: "Physical Settlement", description: "The return to physical commodity delivery to 'proof' against digital freezes." },
    ],
    insightBox: "🎯 Strategic Take: If the 'Baseload' of trade leaves the dollar, the 'Value' of the dollar must decline.",
  },

  // ═══════════════════ SLIDE 8: GOLD: THE ULTIMATE NEUTRAL ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CENTRAL BANK ALPHA",
    heading: "Gold: The",
    headingAccent: "Great Exit.",
    body: "Central banks are buying gold at levels not seen since the 1960s. Why? because gold has no 'Command Line'—it cannot be cancelled.",
    features: [
      { icon: "👑", label: "1,100+ Tonnes", description: "Recent annual buying volume led by China, Poland, and Singapore." },
      { icon: "🛡️", label: "Counterparty Zero", description: "Unlike a bond, gold is no one else's liability; it is outside the system." },
      { icon: "🔋", label: "Sanction Shield", description: "Physical gold in a vault cannot be 'swiped' by a foreign treasury." },
    ],
    insightBox: "💡 The Reality: Gold is the only reserve asset that doesn't come with a 'Terms of Service' agreement.",
  },

  // ═══════════════════ SLIDE 9: THE LIQUIDITY DILEMMA ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MACRO FRAGILITY",
    heading: "The Liquidity",
    headingAccent: "Dilemma.",
    body: "The world is caught in a trap: The $USD is the most liquid, but the most dangerous. The alternatives are safer, but less liquid.",
    features: [
      { icon: "🌊", label: "Liquidity Moat", description: "It takes decades to build the depth of the U.S. Treasury market." },
      { icon: "🚧", label: "Capital Controls", description: "The Yuan remains restricted, making it hard for large players to 'exit' quickly." },
      { icon: "⏳", label: "The Transition", description: "We are in the 'Messy Middle'—a decade of high volatility and dual-pricing." },
    ],
    insightBox: "💡 Analysis: The transition isn't an 'Event'; it is an 'Erosion' that takes 20 years to complete.",
  },

  // ═══════════════════ SLIDE 10: BRICS+ EXPANSION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "GLOBAL REALIGNMENT",
    heading: "The BRICS+",
    headingAccent: "Gravity.",
    body: "The expansion of BRICS to include major energy producers (UAE, Iran, Egypt, Ethiopia) creates a self-sustaining 'Non-Dollar Circular Economy.'",
    features: [
      { icon: "🗺️", label: "40% of GDP", description: "The bloc now represents a larger share of global GDP (PPP) than the G7." },
      { icon: "⚡", label: "Energy Hegemony", description: "Controlling both the supply (Middle East) and the demand (Asia)." },
      { icon: "🏛️", label: "New Dev Bank", description: "Building a multi-lateral lender that doesn't use the IMF 'conditionality' model." },
    ],
    insightBox: "⚠️ Risk Alert: The $USD is losing its 'Network Effect' as the BRICS ecosystem reaches critical mass.",
  },

  // ═══════════════════ SLIDE 11: INSTITUTIONAL VERDICT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "TERMINAL ANALYSIS",
    heading: "Structural",
    headingAccent: "Fragmentation.",
    body: "The 'Sanction Trap' has triggered the Fragmentation Era. The world is splitting into two distinct financial and industrial islands.",
    features: [
      { icon: "🛑", label: "Efficiency Loss", description: "Multi-polar trade is slower and more expensive, leading to structural inflation." },
      { icon: "🏗️", label: "Duplicated Systems", description: "The world is building two of everything: two internets, two clouds, two payment rails." },
      { icon: "🏰", label: "National Fortresses", description: "Nations are prioritizing 'Security' over 'Profit' for the first time since 1945." },
    ],
    insightBox: "⚖️ Verdict: The Weaponized Dollar bought short-term compliance at the cost of long-term dominance.",
  },

  // ═══════════════════ SLIDE 12: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE SERIES CONTINUES",
    heading: "MacroEdge",
    headingAccent: "Intelligence.",
    body: "The map of global finance is changing in real-time. Stay ahead of the structural shift with our institutional-grade teardowns.",
    ctaText: "Follow @macroedge_in",
    nextTopic: "Next: The Energy Super-Cycle (Pt 3)",
  },
];
