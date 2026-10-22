import type { SlideData } from "@workspace/carousel-engine";

export const HBM_SCARCITY: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "TECH INFRASTRUCTURE SERIES",
    tagRight: "SIGNAL: APRIL 19, 2026",
    heading: "The AI",
    headingAccent: "Memory Shortage.",
    body: "The AI revolution has hit its first physical limit. High-Bandwidth Memory (HBM) is sold out until 2027. This is the structural bottleneck of 2026.",
    levelBadge: "INSTITUTIONAL",
    topicNum: "HB1",
    bullets: ["Sold Out until 2027", "Transition to HBM4", "The Micron ($MU) Alpha"],
  },

  // ═══════════════════ SLIDE 2: THE MEMORY WALL ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE COMPUTE BOTTLENECK",
    heading: "The Silicon",
    headingAccent: "Chokepoint.",
    body: "In 2026, the bottleneck isn't the GPU; it's the memory that feeds it. Without HBM, the world’s most advanced AI models cannot run.",
    features: [
      { icon: "🧠", label: "Bandwidth Gap", description: "Standard DRAM cannot keep pace with the 1,000%+ growth in AI model parameters." },
      { icon: "🔥", label: "Thermal Density", description: "HBM allows for 3D-stacked memory directly on the GPU, reducing data travel and heat." },
      { icon: "🚧", label: "The Wall", description: "Supply is currently projected to meet only 60% of total global demand by 2027." },
    ],
    insightBox: "💡 Analysis: We are moving from a 'Compute-Bound' era to a 'Memory-Bound' era.",
  },

  // ═══════════════════ SLIDE 3: SUPPLY REALITY ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "CAPACITY TEARDOWN",
    heading: "Sold out",
    headingAccent: "Until 2027.",
    body: "The 'Big Three' (SK Hynix, Samsung, Micron) have officially closed their 2026 order books. The queue now stretches into late 2027.",
    features: [
      { icon: "📅", label: "Backlog", description: "Non-cancellable long-term contracts (LTCs) cover 95% of planned 2026 capacity." },
      { icon: "🏗️", label: "Lead Times", description: "HBM fab construction takes 24-36 months. New supply cannot be 'turned on' instantly." },
      { icon: "🏦", label: "Pre-Payments", description: "NVIDIA and Google are pre-paying billions to 'Lock' entire production lines." },
    ],
    insightBox: "🎯 Strategic Signal: If you don't have a contract today, you are effectively locked out of the 2026 AI cycle.",
  },

  // ═══════════════════ SLIDE 4: THE MICRON ALPHA ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE U.S. CHAMPION",
    heading: "Micron ($MU)",
    headingAccent: "Ascendant.",
    body: "Micron has successfully pivoted from a 'Memory Commodity' player to a high-margin AI infrastructure giant.",
    features: [
      { icon: "⚡", label: "HBM3e Efficiency", description: "Micron's 24GB 8H HBM3e consumes 30% less power than competitors." },
      { icon: "🇺🇸", label: "CHIPS Act Moat", description: "Massive federal subsidies for 'Megafabs' in Idaho and NY ensure sovereign supply." },
      { icon: "📈", label: "Margin Profile", description: "HBM margins are estimated at 60%+, compared to 20% for standard DRAM." },
    ],
    insightBox: "💡 Tip: $MU is no longer a 'Cyclical Play'; it is a 'Structural AI Infrastructure' play.",
  },

  // ═══════════════════ SLIDE 5: THE KOREAN DUOPOLY ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "GEOPOLITICAL MEMORY",
    heading: "The Korean",
    headingAccent: "Giants.",
    body: "SK Hynix and Samsung remain the volume kings, controlling over 85% of the total HBM market share.",
    features: [
      { icon: "🥇", label: "SK Hynix", description: "The incumbent leader. Exclusive partner for NVIDIA's 'Rubin' architecture roadmap." },
      { icon: "🥈", label: "Samsung", description: "Leveraging vertical integration (Foundry + Memory) to offer custom HBM4 solutions." },
      { icon: "🌏", label: "Geo-Risk", description: "85% of global HBM capacity remains within 50 miles of the North Korean border." },
    ],
    insightBox: "⚠️ Risk: The global AI industry is single-threaded through a few square miles in South Korea.",
  },

  // ═══════════════════ SLIDE 6: THE HBM4 TRANSITION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "TECHNICAL ROADMAP",
    heading: "The HBM4",
    headingAccent: "Leap.",
    body: "2026 marks the official sampling of HBM4—the most significant architectural shift in memory history.",
    features: [
      { icon: "🚀", label: "2048-bit Interface", description: "Doubling the interface width to reach bandwidth speeds of 2TB/s per stack." },
      { icon: "🧠", label: "Base Die Logic", description: "Moving from 'Passive' base dies to 'Logic' dies manufactured on 5nm/3nm nodes." },
      { icon: "🤝", label: "TSMC Alliance", description: "Micron and SK Hynix are partnering with TSMC to manufacture these complex logic bases." },
    ],
    insightBox: "🎯 Forecast: HBM4 will be the standard for 'Agentic AI' clusters in the 2027-2028 cycle.",
  },

  // ═══════════════════ SLIDE 7: CANNIBALIZATION ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MARKET DISTORTION",
    heading: "Memory",
    headingAccent: "Cannibalization.",
    body: "The HBM boom is creating a massive 'Drought' in the standard electronics market.",
    features: [
      { icon: "📉", label: "Capacity Shift", description: "Fabs are converting standard DRAM lines to HBM, which uses 3x more wafer area per bit." },
      { icon: "💻", label: "PC/Mobile Price Spike", description: "As HBM eats the supply, prices for laptop and phone memory are rising 20%+ YoY." },
      { icon: "🛑", label: "Supply Discipline", description: "Manufacturers are refusing to over-expand, keeping supply 'Artificially' tight to maintain margins." },
    ],
    insightBox: "💡 Insight: The 'AI Tax' is now being paid by every consumer buying a new laptop or smartphone.",
  },

  // ═══════════════════ SLIDE 8: THE NVIDIA TAX ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "PRICING POWER",
    heading: "The Power",
    headingAccent: "of Leverage.",
    body: "HBM manufacturers have achieved 'NVIDIA-level' pricing power for the first time in 30 years.",
    features: [
      { icon: "💰", label: "Premium Pricing", description: "HBM3e carries a 5x price premium over standard DDR5 memory." },
      { icon: "📊", label: "Seller's Market", description: "Buyers are signing 3-year take-or-pay contracts just to secure a spot in the queue." },
      { icon: "🛡️", label: "Strategic Reserves", description: "Major clouds (AWS/Azure) are stockpiling memory to avoid mid-cycle deployment halts." },
    ],
    insightBox: "🎯 Strategic Take: Memory is no longer a 'Component'; it is a 'Strategic Commodity' like Oil or Lithium.",
  },

  // ═══════════════════ SLIDE 9: SOVEREIGN AI MEMORY ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "NATIONAL SECURITY",
    heading: "The Sovereign",
    headingAccent: "Buffer.",
    body: "Nations are now building 'National Memory Reserves' to ensure their internal AI sovereignty isn't at the mercy of the market.",
    features: [
      { icon: "🇯🇵", label: "Japan's Rapidus", description: "Attempting to leapfrog to HBM4 to secure domestic AI infrastructure." },
      { icon: "🇪🇺", label: "EU Chips Act", description: "Subsidizing memory R&D to decouple from the Asian supply chain." },
      { icon: "🇨🇳", label: "HBM Localization", description: "CXMT (China) is racing to build an 'Independent' HBM stack to bypass sanctions." },
    ],
    insightBox: "💡 Analysis: The battle for AI supremacy will be won by the nation with the most 'Storage per Second' (Bandwidth).",
  },

  // ═══════════════════ SLIDE 10: INVESTOR PROXIES ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "PORTFOLIO ALIGNMENT",
    heading: "Trading the",
    headingAccent: "Shortage.",
    body: "How to play the HBM scarcity without taking direct single-stock risk.",
    features: [
      { icon: "🏦", label: "Micron ($MU)", description: "The high-margin U.S. play with the most aggressive HBM growth curve." },
      { icon: "🛠️", label: "ASML / Applied", description: "Selling the EUV and HBM-specific bonding equipment required to build the stacks." },
      { icon: "📉", label: "WDC / Seagate", description: "The 'Second-Order' beneficiaries as the broader storage market tightens." },
    ],
    insightBox: "🎯 Tip: Watch the 'HBM-to-DRAM' ratio. As it rises, the profit per wafer for memory companies explodes.",
  },

  // ═══════════════════ SLIDE 11: RISKS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "RED FLAGS",
    heading: "The Yield",
    headingAccent: "Trap.",
    body: "HBM is incredibly difficult to manufacture. Even a 5% drop in yield can wipe out quarterly profits.",
    features: [
      { icon: "🛑", label: "Manufacturing Yields", description: "HBM3e yields are notoriously low (~50-60%). One bad die kills the entire 12-layer stack." },
      { icon: "📉", label: "Inventory Glut", description: "The risk of 'Double Ordering'—where clouds over-order to ensure supply, leading to a 2027 crash." },
      { icon: "⚖️", label: "Anti-Trust", description: "Increasing scrutiny of the 'Big Three' pricing coordination." },
    ],
    insightBox: "💡 Note: Execution is everything. Samsung’s 2025 delays prove that even giants can stumble in the HBM race.",
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL VERDICT",
    heading: "The Multiplier",
    headingAccent: "Effect.",
    body: "HBM is the oxygen of the AI age. In a world of infinite compute, the limited memory is the only thing that matters. Position for the shortage.",
    ctaText: "Follow @macroedge_in",
  },
];
