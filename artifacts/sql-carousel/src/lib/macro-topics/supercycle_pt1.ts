import type { SlideData } from "@workspace/carousel-engine";

export const SUPERCYCLE_PT1: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "MACRO THESIS: 2026-2030",
    tagRight: "PART 1: THE NEW BASELOAD",
    heading: "The Energy",
    headingAccent: "Super-Cycle.",
    body: "We are entering the 'Age of Electricity.' A structural collision between AI power demand, grid fragility, and the nuclear revival is rebuilding global wealth. Here is the institutional brief.",
    levelBadge: "MACRO",
    topicNum: "SC.1",
    bullets: ["The AI Power Tax (2.5x)", "Grid Bottlenecks & CAPEX", "The 2026-2030 Roadmap"],
  },

  // ═══════════════════ SLIDE 2: THE CURRENCY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "STRUCTURAL SHIFT",
    heading: "Power is the",
    headingAccent: "New Currency.",
    body: "In the 2000s, growth was driven by 'Data.' In the 2020s, that data exists only as a function of 'Power.' Electricity demand is now a proxy for technological survival.",
    features: [
      { icon: "⚡", label: "Electrification Surge", description: "Industrial heating, EVs, and heating are switching to the grid at record pace." },
      { icon: "🌍", label: "Security First", description: "Energy Security has officially overtaken 'Climate Policy' as the primary policy driver." },
      { icon: "🏦", label: "CAPEX Pivot", description: "Trillions in capital are rotating from 'Software' to 'Energy Infrastructure.'" },
    ],
    insightBox: "💡 MacroEdge Take: The nation that secures the cheapest, most reliable baseload power wins the AI arms race.",
  },

  // ═══════════════════ SLIDE 3: THE AI TAX ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE AI POWER TAX",
    heading: "The 2.5x",
    headingAccent: "Demand Surge.",
    body: "Artificial Intelligence is not 'Green.' It is the single largest energy tax in human history, requiring 24/7 high-density power that traditional renewables cannot support.",
    features: [
      { icon: "🖥️", label: "Data Center Explosion", description: "Projected to consume 10% of global electricity by 2030 (up from 2%)." },
      { icon: "🌡️", label: "Cooling Load", description: "Advanced liquid cooling for H100s/B200s adds another 30% power overhead." },
      { icon: "📉", label: "Efficiency Trap", description: "LLM efficiency gains are being outpaced by the sheer volume of new deployments." },
    ],
    insightBox: "🎯 Strategic View: AI 'Sovereignty' is a direct function of a nation's ability to build 500+ MWe clusters.",
  },

  // ═══════════════════ SLIDE 4: THE GRID MOAT ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "INFRASTRUCTURE LAG",
    heading: "The Grid",
    headingAccent: "Bottleneck.",
    body: "Generating power is easy; moving it is the bottleneck. The global grid is aging, over-capacity, and technically isolated.",
    steps: [
      {
        number: "01",
        title: "The Connection Backlog",
        description: "New projects (Nuclear/Wind) face 5-8 year wait times just to plug into the regional grid.",
      },
      {
        number: "02",
        title: "Transformer Moat",
        description: "Lead times for high-voltage transformers have surged from 12 weeks to 104+ weeks.",
      },
      {
        number: "03",
        title: "The CAPEX Surge",
        description: "Utilities must spend $20 Trillion globally through 2040 just to modernize existing wires.",
      },
    ],
    insightBox: "🔋 The Moat: Companies that own 'Grid Interconnects' are currently the most valuable gatekeepers in macro.",
  },

  // ═══════════════════ SLIDE 5: NUCLEAR REVIVAL ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE CARBON-FREE BASELOAD",
    heading: "The Nuclear",
    headingAccent: "Sovereignty.",
    body: "Nuclear is the only technology that offers both zero-emissions AND the unwavering 24/7 baseload AI demands. The 'Taboo' era is officially over.",
    features: [
      { icon: "🏛️", label: "Policy U-Turns", description: "India (SHANTI Act), China, and the US are all fast-tracking reactor licenses." },
      { icon: "⚛️", label: "Baseload Floor", description: "Nuclear provides the 'Stability Floor' that allows renewables to exist on the grid without blackouts." },
      { icon: "🏗️", label: "SMR Integration", description: "SMR-55 and BSMR-200 are the new industrial standards for 'On-Site' power." },
    ],
    insightBox: "💡 Note: Tech Hyperscalers (Microsoft, Meta) are now actively funding nuclear life-extensions to secure their B200 fleets.",
  },

  // ═══════════════════ SLIDE 6: EAST VS WEST ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "GEOPOLITICAL PACE",
    heading: "The Power",
    headingAccent: "Gap.",
    body: "While the West struggles with NIMBY-ism and regulatory lag, the East is building the Super-Cycle infrastructure at 1/3 the cost.",
    features: [
      { icon: "🇨🇳", label: "China Dominance", description: "Building 27+ reactors simultaneously; controlling 80% of the solar supply chain." },
      { icon: "🇮🇳", label: "India's Pivot", description: "Operationalizing the 100 GW target by 2047; deregulating the private atomic sector." },
      { icon: "🇺🇸", label: "US Grid Risk", description: "High innovation in SMR tech but crippled by 50-year-old grid regulations." },
    ],
    insightBox: "⚠️ Risk Alert: The 'Energy Advantage' is shifting to nations that can build fast and regulate efficiently.",
  },

  // ═══════════════════ SLIDE 7: INTERMITTENCY ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE RENEWABLE LIMIT",
    heading: "The Intermittency",
    headingAccent: "Trap.",
    body: "Solar and Wind are essential for 'Cheap Energy,' but they are dangerous for 'Reliable Baseload.' Without massive storage, they create grid instability.",
    features: [
      { icon: "☀️", label: "Solar Duck Curve", description: "Excess power at noon; zero power at peak AI processing hours (Night)." },
      { icon: "🌀", label: "The Wind Lull", description: "Natural weather cycles create 'Dunkelflaute' (Dark Doldrums) with zero output." },
      { icon: "🔋", label: "Storage Bottleneck", description: "Battery storage only covers hours, not weeks of seasonal shortfall." },
    ],
    insightBox: "🎯 Strategic Take: Renewables are 'Supplementary,' Nuclear/Gas are 'Foundational.' The market is returning to the foundation.",
  },

  // ═══════════════════ SLIDE 8: THE MIX ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "MACRO PROJECTIONS",
    heading: "The Global",
    headingAccent: "Power Mix.",
    body: "Projected institutional electricity generation mix shift between 2026 and 2030. The 'Green-Firm' pivot is real.",
    table: {
      headers: ["Source", "2026 Share", "2030 Proj.", "Trend"],
      rows: [
        { cells: ["Nuclear", "9.2%", "14.5%", "▲ BULLISH"], highlight: true },
        { cells: ["Solar/Wind", "14.8%", "26.4%", "▲ STEADY"], highlight: true },
        { cells: ["Natural Gas", "22.5%", "19.8%", "▼ MODERATE"] },
        { cells: ["Coal", "33.2%", "24.1%", "▼ BEARISH"] },
      ],
      caption: "Source: IEA (2026 Update), MacroEdge Intelligence Archive.",
    },
  },

  // ═══════════════════ SLIDE 9: HYPERSCALERS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "BIG TECH ENERGY",
    heading: "Hyperscale",
    headingAccent: "Operators.",
    body: "Microsoft, Amazon, and Google are no longer 'Customers.' They are becoming 'Energy Companies' to de-risk their own supply chains.",
    features: [
      { icon: "🏢", label: "Direct PPAs", description: "Locking in 100% of new nuclear/solar capacity for 20+ years." },
      { icon: "⚛️", label: "Nuclear funding", description: "Direct financing for Three Mile Island and Indian Point life-extensions." },
      { icon: "🔋", label: "On-Site Microgrids", description: "Building dedicated SMRs and Gas plants inside data center campuses." },
    ],
    insightBox: "💡 The Shift: Hyperscalers are now the primary financiers of the new Energy Super-Cycle.",
  },

  // ═══════════════════ SLIDE 10: BOTTOM LINE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "PART 1 VERDICT",
    heading: "The 2030",
    headingAccent: "Verdict.",
    body: "The Super-Cycle is driven by 'Firm Power.' The winners of the next decade are the operators who can scale grid connections and nuclear baseload.",
    features: [
      { icon: "🏛️", label: "Policy Shift", description: "Energy Security > Climate Policy." },
      { icon: "⚡", label: "Demand Shift", description: "AI is the new 'Electricity Tax'." },
      { icon: "🏗️", label: "Execution Shift", description: "The Grid is the new Chokepoint." },
    ],
  },

  // ═══════════════════ SLIDE 11: RISKS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "CRITICAL RISKS",
    heading: "Structural",
    headingAccent: "Fault Lines.",
    body: "It isn't a straight line up. Structural risks could stall the 2030 transitions and create energy poverty.",
    features: [
      { icon: "💰", label: "Interest Rates", description: "Energy is CAPEX-intensive. Higher-for-longer kills new nuclear/grid math." },
      { icon: "🛡️", label: "Trade Wars", description: "Geopolitical friction over solar/battery supply chains (China Moat)." },
      { icon: "🗺️", label: "Permitting Lag", description: "Regulatory red tape remains the #1 killer of the Super-Cycle vision." },
    ],
  },

  // ═══════════════════ SLIDE 12: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "NEXT IN THE SERIES",
    heading: "The Resource",
    headingAccent: "War.",
    body: "You can't build a new grid without copper, lithium, and rare earths. Part 2 analyzes the 'Metals Moat' and the 2030 Winners & Losers.",
    ctaText: "Follow @macroedge_in",
    nextTopic: "Energy Super-Cycle Part 2: The Resource War",
  },
];
