import type { SlideData } from "@workspace/carousel-engine";

export const SUPERCYCLE_PT2: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "MACRO THESIS: 2026-2030",
    tagRight: "PART 2: THE RESOURCE WAR",
    heading: "The Resource",
    headingAccent: "War.",
    body: "You cannot build a new world without the physical materials to move energy. From the Copper Moat to the Oil Paradox, Part 2 analyzes the winners and losers of the Energy Super-Cycle.",
    levelBadge: "MACRO",
    topicNum: "SC.2",
    bullets: ["Copper: The Red Moat", "The Stock Winner Matrix", "The 2030 Portfolio Hedge"],
  },

  // ═══════════════════ SLIDE 2: MINING MOAT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "PHYSICAL FOUNDATIONS",
    heading: "Electrification",
    headingAccent: "is Mining.",
    body: "The 'Age of Electricity' is a misnomer. It is actually the 'Age of Extraction.' Every SMR, wind turbine, and data center is a massive bet on industrial metals.",
    features: [
      { icon: "⛏️", label: "Mineral Intensity", description: "Clean energy systems require 6x more minerals than fossil fuel counterparts." },
      { icon: "🌍", label: "Resource Nationalism", description: "Exporting nations (Chile, Indonesia, DRC) are forming 'OPEC-like' metal cartels." },
      { icon: "⛓️", label: "Supply Chain Risk", description: "China controls over 80% of the processing capacity for transition minerals." },
    ],
    insightBox: "💡 MacroEdge Take: Information is intangible, but Power is physical. The new 'Gold' is Copper.",
  },

  // ═══════════════════ SLIDE 3: COPPER MOAT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE RED MOAT",
    heading: "Copper: The",
    headingAccent: "Red Chokepoint.",
    body: "Copper is non-substitutable for high-efficiency grids. We are entering a structural deficit that will define the next five years of commodity pricing.",
    features: [
      { icon: "📉", label: "Supply Gap", description: "Projected 10-million-ton deficit by 2030; existing mines are reaching end-of-life." },
      { icon: "🏗️", label: "10-Year Lag", description: "A new copper mine takes 10-15 years to permit and build. Supply cannot react to AI demand." },
      { icon: "⚡", label: "The Grid Tax", description: "Modernizing the global grid accounts for 40% of all primary copper demand." },
    ],
    insightBox: "🎯 Strategic View: Copper is the 'Bond Market' of the Energy Super-Cycle—it prices everything else.",
  },

  // ═══════════════════ SLIDE 4: THE OIL PARADOX ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "FOSSIL FUEL DYNAMICS",
    heading: "The Oil",
    headingAccent: "Paradox.",
    body: "Oil is not dead, but it is changing roles. We are seeing a structural surplus in the West, while the East uses it to bridge the gap to Nuclear.",
    features: [
      { icon: "🛢️", label: "Security Premium", description: "Geopolitical spikes (Hormuz/Suez) create short-term volatility toward $110/bbl." },
      { icon: "🔋", label: "EV Displacement", description: "China’s 50% EV adoption rate is permanently destroying traditional fuel demand growth." },
      { icon: "🏦", label: "Cash Flow Kings", description: "Big Oil is pivotting to cash dividends and LNG growth over exploratory drilling." },
    ],
    insightBox: "💡 The Shift: Oil is moving from a 'Growth Story' to a 'Volatility & Yield Story.'",
  },

  // ═══════════════════ SLIDE 5: LNG VALVE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE SECURITY VALVE",
    heading: "LNG: The",
    headingAccent: "Utility Link.",
    body: "Liquified Natural Gas (LNG) is the 'Glue' that holds the Super-Cycle together until Nuclear and Storage reach critical mass by 2030.",
    features: [
      { icon: "🚢", label: "Export Surge", description: "US and Qatar are doubling export capacity to replace Russian pipeline dependency." },
      { icon: "🏛️", label: "Grid Stability", description: "Gas peakers provide the 'Last Resort' power when renewables fail (The Lull)." },
      { icon: "💰", label: "Rupee/Yuan Trade", description: "LNG is becoming the primary front for de-dollarized energy trade." },
    ],
    insightBox: "🎯 Fact: Without LNG, the 2026 AI expansion would trigger immediate global blackouts. It is the mandatory bridge.",
  },

  // ═══════════════════ SLIDE 6: LITHIUM CYCLES ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "STORAGE DYNAMICS",
    heading: "Lithium",
    headingAccent: "Volatility.",
    body: "Lithium is a 'Strategic Asset' but a 'Price Nightmare.' The 2026-2030 window will see violent inventory-driven boom/bust cycles.",
    features: [
      { icon: "💎", label: "Battery Moat", description: "Grid-scale storage is now consuming 30% of global lithium (up from 5%)." },
      { icon: "🌊", label: "Oversupply Risk", description: "New African and Australian hard-rock supply is hitting the market faster than expected." },
      { icon: "🧪", label: "Tech Risk", description: "Sodium-ion and Solid-state batteries are the long-term 'Disruption' threat to Lithium." },
    ],
    insightBox: "⚠️ Risk Alert: Lithium is a 'Chemistry Play,' not a 'Mining Play.' Bet on the refining moats, not the dirt.",
  },

  // ═══════════════════ SLIDE 7: WINNER MATRIX ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "INSTITUTIONAL WINNERS",
    heading: "The Winner",
    headingAccent: "Matrix.",
    body: "Sectors and assets positioned to capture the value-flow of the 2026-2030 Energy Super-Cycle.",
    table: {
      headers: ["Sector", "Alpha Driver", "2030 Outlook"],
      rows: [
        { cells: ["Nuclear EPC", "Data Center PPAs", "Strong Bullish"], highlight: true },
        { cells: ["Grid Equipment", "Aging Transmission", "Strong Bullish"], highlight: true },
        { cells: ["Copper Miners", "Structural Deficit", "Steady Growth"], highlight: true },
        { cells: ["Refined LNG", "Security Arbitrage", "Income/Yield"] },
      ],
      caption: "MacroEdge Rating: Focused on Execution over Ambition.",
    },
  },

  // ═══════════════════ SLIDE 8: LOSER MATRIX ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "INSTITUTIONAL RISKS",
    heading: "The Loser",
    headingAccent: "Matrix.",
    body: "Sectors facing structural decay or CAPEX traps during the Super-Cycle transition.",
    table: {
      headers: ["Sector", "Alpha Drag", "2030 Outlook"],
      rows: [
        { cells: ["Old Industry", "High Power Costs", "Structural Decline"], highlight: true },
        { cells: ["Pure-Wind", "Intermittency Costs", "Bearish/Consolidating"], highlight: true },
        { cells: ["Coal Mining", "Sanctions/ESG Fade", "Structural Fade"] },
        { cells: ["High-Debt IPPs", "Interest Rate Sensitivity", "Stagnant"] },
      ],
      caption: "MacroEdge Rating: Avoiding capital-intensive, low-margin utilities.",
    },
  },

  // ═══════════════════ SLIDE 9: PORTFOLIO HEDGE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE HARD ASSETS HEDGE",
    heading: "The Hard",
    headingAccent: "Assets Pivot.",
    body: "In a world of digital debasement and AI volatility, investors are rotating back to 'Real World' physical moats with high pricing power.",
    features: [
      { icon: "🏛️", label: "Inflation Hedge", description: "Energy is the primary component of global CPI. Owning the source is the only protection." },
      { icon: "💎", label: "Royalty Models", description: "Betting on resource royalties over operational mining capital." },
      { icon: "🏦", label: "Energy Sovereign", description: "Bypassing fiat debt for direct ownership in grid-stable utilities." },
    ],
    insightBox: "💡 Analysis: The Energy Super-Cycle is a multi-year rotation of capital from 'Software' to 'Hardware.'",
  },

  // ═══════════════════ SLIDE 10: 2030 ROADMAP ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "STRATEGIC TIMELINE",
    heading: "The 2030",
    headingAccent: "Roadmap.",
    body: "The timeline of the 'Great Re-Wiring' over the next four years.",
    steps: [
      {
        number: "2026",
        title: "The AI Collision",
        description: "Data center brownouts in Tier-1 cities force immediate grid deregulation.",
      },
      {
        number: "2027",
        title: "The SMR Era",
        description: "First private Small Modular Reactors go live in industrial energy hubs.",
      },
      {
        number: "2029",
        title: "The Resource Peak",
        description: "Copper and Lithium reach record structural prices as EV and Grid demand converge.",
      },
    ],
    insightBox: "🔋 Pro-Tip: Markets front-run reality by 18 months. The time to position is now.",
  },

  // ═══════════════════ SLIDE 11: GEOPOLITICAL FATE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE FINAL WORD",
    heading: "Power is",
    headingAccent: "Destiny.",
    body: "The 2026-2030 window is not just about energy—it is about which nations remain relevant in the AI century. Without Power, there is no AI. Without Metals, there is no Power.",
    features: [
      { icon: "🏢", label: "Winners", description: "Nuclear hubs & Metal exporters." },
      { icon: "📉", label: "Losers", description: "Grid-isolated or fossil-dependent nations." },
    ],
  },

  // ═══════════════════ SLIDE 12: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE END OF SERIES",
    heading: "MacroEdge",
    headingAccent: "Intelligence.",
    body: "The Global Macro story is shifting faster than ever. Stay ahead of the Super-Cycle with our deep-dive institutional briefs.",
    ctaText: "Follow @macroedge_in",
    nextTopic: "Next: The U.S. Sanction Trap (Part 3)",
  },
];
