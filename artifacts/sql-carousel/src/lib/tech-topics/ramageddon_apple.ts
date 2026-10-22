import type { SlideData } from "../carousel-types";

export const RAMAGEDDON_APPLE: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "THE AI SQUEEZE",
    tagRight: "JUNE 2026",
    heading: "Apple Meets",
    headingAccent: "'RAMageddon'.",
    body: "Apple just suffered a massive 6% single-day stock plunge after announcing aggressive price hikes across its Mac and iPad lineups. The reason? The Artificial Intelligence boom is actively cannibalizing their supply chain.",
    levelBadge: "TEARDOWN",
    topicNum: "AAPL",
    keywords: ["APPLE", "RAMAGEDDON", "DRAM", "AI", "MACBOOK", "INFLATION"],
    bullets: [
      "📉 The $150 Billion Market Cap Wipeout",
      "💻 Price Hikes on Macs & iPads",
      "🧠 The AI Data Center Blackhole",
      "💸 DRAM Prices up 98%",
      "📱 Will the iPhone be next?",
    ],
  },

  // ═══════════════════ SLIDE 2: THE HIKE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE CONSUMER HIT",
    heading: "The 'Invisible'",
    headingAccent: "AI Tax.",
    body: "Apple tried to shield consumers from rising costs for as long as possible, but the math finally broke.",
    features: [
      { icon: "💻", label: "The Mac Premium", description: "Prices for MacBook Airs and Pros just spiked globally. Even the new budget 'MacBook Neo' saw its entry price bumped from $599 to $699." },
      { icon: "📈", label: "The India Shock", description: "In premium markets like India, import duties combined with the component crunch have pushed some high-end MacBook Pro models up by ₹70,000." },
      { icon: "📱", label: "The iPhone Warning", description: "While the iPhone is safe for now, Wall Street analysts are warning that severe iPhone price hikes later this year are highly probable." },
    ],
    insightBox: "💡 The Reality: Apple isn't raising prices to pad their margins. They are raising them because they are being squeezed out of the supply chain.",
  },

  // ═══════════════════ SLIDE 3: THE ROOT CAUSE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "SUPPLY CHAIN",
    heading: "Enter",
    headingAccent: "RAMageddon.",
    body: "The massive, frantic build-out of AI infrastructure requires an astonishing amount of high-performance memory (DRAM) and storage (NAND).",
    features: [
      { icon: "🏭", label: "The Supplier Pivot", description: "Chipmakers like Samsung, SK Hynix, and Micron are diverting almost all their production capacity to fulfill massive AI enterprise contracts." },
      { icon: "📉", label: "Consumer Tech Starved", description: "Because the vast majority of global memory supply is being routed to data centers, consumer electronics are facing severe shortages." },
      { icon: "💸", label: "The 98% Spike", description: "As a result of this extreme supply/demand imbalance, wholesale DRAM prices surged 98% in Q1, with another 60% jump projected for Q2." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE MARKET REACTION ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "THE FALLOUT",
    heading: "A Tale of",
    headingAccent: "Two Sectors.",
    body: "The AI supercycle is creating massive winners in the infrastructure layer, while actively punishing legacy consumer hardware.",
    table: {
      headers: ["Sector / Company", "Market Reaction", "The Logic"],
      rows: [
        { cells: ["Apple & Consumer Tech", "Massive Sell-Off (-6%)", "Fear of demand destruction due to price hikes & squeezed margins."], highlight: true },
        { cells: ["Micron & SK Hynix", "Rallying to All-Time Highs", "Record-breaking revenues as they sell every chip they can make."], highlight: false },
        { cells: ["Data Center Infrastructure", "Continued Institutional Inflows", "The 'Picks & Shovels' trade remains Wall Street's favorite narrative."], highlight: false },
      ],
      caption: "The physical demands of building AI are now actively cannibalizing the supply chains of traditional tech giants.",
    },
  },

  // ═══════════════════ SLIDE 5: THE MACRO LESSON ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "PORTFOLIO STRATEGY",
    heading: "The Hardware",
    headingAccent: "Squeeze.",
    body: "When you analyze an AI company, you have to look past the software and understand the physical constraints.",
    steps: [
      { number: "01", title: "Follow the Bottlenecks", description: "First the bottleneck was Nvidia GPUs. Then it was electricity. Now, it is high-bandwidth memory. That is where the pricing power is." },
      { number: "02", title: "Monitor Margins", description: "For companies like Apple, Dell, and HP, watch their next earnings closely. Are they successfully passing these costs to consumers, or eating the loss?" },
      { number: "03", title: "The Hardware Cycle", description: "Expect hardware upgrade cycles (like buying a new laptop) to slow down globally as prices rise across the board." },
    ],
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "RAMageddon",
    headingAccent: "Cheat Sheet.",
    body: "The AI boom is causing a physical component crisis. Here is the summary.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🍎", label: "Apple Hikes", description: "Macs and iPads get significantly more expensive globally as component costs surge." },
      { icon: "🧠", label: "The AI Drain", description: "Data centers are buying up all the global DRAM supply, starving consumer electronics." },
      { icon: "💸", label: "The Math", description: "DRAM prices spiked 98% in Q1. Apple simply couldn't shield consumers anymore." },
      { icon: "💼", label: "The Play", description: "Memory chip manufacturers hold all the pricing power right now." },
    ],
  },
];
