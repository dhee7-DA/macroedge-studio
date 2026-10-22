import type { SlideData } from "@workspace/carousel-engine";

export const IMF_PIVOT: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "GLOBAL MACRO ALERT",
    tagRight: "SIGNAL: THE 3.1% PIVOT",
    heading: "The IMF",
    headingAccent: "Pivot.",
    body: "The International Monetary Fund has 'abruptly darkened' its outlook. From the closure of the Strait of Hormuz to persistent energy shocks, the global growth engine is stalling. Here is the teardown of the 3.1% threshold.",
    levelBadge: "MACRO",
    topicNum: "IMF",
    bullets: ["3.1% Global GDP Downgrade", "19% Energy Price Surge", "The Recession Variable"],
  },

  // ═══════════════════ SLIDE 2: THE REVISION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "ECONOMIC FORECASTING",
    heading: "Growth Is",
    headingAccent: "Stalling.",
    body: "The IMF has officially slashed its global growth forecast, signaling that the 'Soft Landing' baseline is under severe threat from geopolitical chokepoints.",
    features: [
      { icon: "📉", label: "3.1% Growth Target", description: "A significant downward revision from the previous 3.3% institutional projection." },
      { icon: "🌍", label: "Darkened Horizons", description: "Explicit attribution to regional conflicts disrupting global energy transit." },
      { icon: "🌫️", label: "Reference Forecast", description: "The 3.1% baseline assumes disruptions fade early—anything longer triggers a recession." },
    ],
    insightBox: "💡 Analysis: The market is currently pricing a 'Perfect Outcome.' The IMF is now warning of 'Structural Friction.'",
  },

  // ═══════════════════ SLIDE 3: THE HORMUZ VARIABLE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHOKEPOINT MACRO",
    heading: "The Hormuz",
    headingAccent: "Variable.",
    body: "For the first time in the current cycle, energy transit risk has become the primary input for global GDP models. The 'Baseload' of global growth is now a military variable.",
    features: [
      { icon: "🛢️", label: "19% Energy Surge", description: "The IMF projects energy commodity costs to spike significantly in the current window." },
      { icon: "🛳️", label: "Transit Disruption", description: "The closure of key maritime arteries is creating a structural supply-side shock." },
      { icon: "📈", label: "Headline Inflation", description: "Inflation targets are being revised upward to a 4.4% global average." },
    ],
    insightBox: "🎯 Strategic View: You cannot have 'Disinflation' while energy chokepoints remain closed. The pivot is real.",
  },

  // ═══════════════════ SLIDE 4: DOWNSIDE SCENARIOS ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "RISK MODELING",
    heading: "The Path to",
    headingAccent: "Recession.",
    body: "The IMF has outlined a cascading series of downside risks that could pull global growth as low as 2.0%.",
    steps: [
      {
        number: "01",
        title: "Extended Conflict",
        description: "If energy disruptions persist, global growth is constrained to a 2.5% ceiling.",
      },
      {
        number: "02",
        title: "Infrastructure Damage",
        description: "Permanent damage to energy hubs drives growth down to the critical 2.0% floor.",
      },
      {
        number: "03",
        title: "Global Recession",
        description: "A drop to 2.0% is classified as a 'Close Call' for a synchronized global contraction.",
      },
    ],
    insightBox: "🔋 The Risk: The world is currently one 'supply shock' away from the 2.0% recession trigger.",
  },

  // ═══════════════════ SLIDE 5: REGIONAL DIVERGENCE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "GLOBAL FRAGMENTATION",
    heading: "The Great",
    headingAccent: "Divergence.",
    body: "Not all economies are falling at the same rate. The Energy Super-Cycle is rewarding energy-independent nations while punishing industrial importers.",
    features: [
      { icon: "🇺🇸", label: "The U.S. Fortress", description: "Remaining resilient at 2.3% growth due to domestic energy and fiscal activism." },
      { icon: "🇪🇺", label: "European Stagnation", description: "Heavily revised downward as the industrial 'Hollowing Out' begins." },
      { icon: "🌏", label: "Emerging Markets", description: "Facing the sharpest deceleration due to energy-input and debt-service shocks." },
    ],
    insightBox: "💡 The Reality: This isn't a 'Global Slowdown.' It is a 'Resource Realignment.'",
  },

  // ═══════════════════ SLIDE 6: THE SCORECARD ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "INSTITUTIONAL DATA",
    heading: "GDP Growth",
    headingAccent: "Scorecard.",
    body: "Fact-checked regional growth projections under the IMF's 'Abruptly Darkened' baseline. Normalized for the current institutional cycle.",
    table: {
      headers: ["Region", "Previous", "Current", "Trend"],
      rows: [
        { cells: ["Global Average", "3.3%", "3.1%", "▼ DOWNGRADE"], highlight: true },
        { cells: ["United States", "2.4%", "2.3%", "▼ STEADY"], highlight: true },
        { cells: ["Emerging Mkts.", "4.2%", "3.9%", "▼ BEARISH"] },
        { cells: ["Low-Income", "4.8%", "4.3%", "▼ BEARISH"] },
        { cells: ["Euro Area", "1.1%", "0.8%", "▼ CRITICAL"] },
      ],
      caption: "Source: IMF World Economic Outlook, MacroEdge Database.",
    },
  },

  // ═══════════════════ SLIDE 7: INDUSTRIAL SHOCK ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "INDUSTRIAL ALPHA",
    heading: "The Capital",
    headingAccent: "Trap.",
    body: "High interest rates combined with high energy costs are creating a 'Double Choke' on industrial capital expenditures (CAPEX).",
    features: [
      { icon: "🏗️", label: "Industrial Drag", description: "Manufacturing activity is stalling as input energy costs eat into margins." },
      { icon: "💰", label: "Sticky Rates", description: "Central banks are being forced to keep rates 'Higher for Longer' to fight energy-inflation." },
      { icon: "🛡️", label: "Defense Crowding", description: "Governments are pivoting capital from 'Economic growth' to 'National Defense'." },
    ],
    insightBox: "🎯 Strategic Take: The 'Growth at any cost' era is over. Efficiency is the new Alpha.",
  },

  // ═══════════════════ SLIDE 8: FISCAL ACTIVISM ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE DEBT DYNAMIC",
    heading: "The Debt",
    headingAccent: "Conflict.",
    body: "Governments are caught in a 'Fiscal Trap'—they must spend to support energy and defense, but that spending is fueling the Interest Cliff.",
    features: [
      { icon: "💸", label: "Deficit Funding", description: "Closing the growth gap via debt is becoming exponentially more expensive." },
      { icon: "🏦", label: "Monetary Tension", description: "The conflict between 'Fiscal Stimulus' and 'Monetary Tightening' is at its peak." },
      { icon: "🏺", label: "Austerity Return?", description: "High-debt nations have zero fiscal 'Buffer' left to react to a recession." },
    ],
    insightBox: "💡 Note: When Governments compete with the Private Sector for energy, the economy loses.",
  },

  // ═══════════════════ SLIDE 9: THE ENERGY TAX ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "INFLATIONARY HEADWINDS",
    heading: "The Great",
    headingAccent: "Energy Tax.",
    body: "The IMF’s 19% projected surge in energy costs acts as a universal tax on global consumption, draining household wealth and industrial margins simultaneously.",
    features: [
      { icon: "📉", label: "Real Income Erosion", description: "Disposable income is being diverted to baseload energy costs." },
      { icon: "⛽", label: "Input Cost Choke", description: "Logistics and shipping surcharges are returning to pandemic-peak levels." },
      { icon: "🏛️", label: "Monetary Impasse", description: "Energy-inflation cannot be fixed by high rates; it requires supply-side security." },
    ],
    insightBox: "💡 Analysis: The Central Bank is fighting with a blunt instrument (Rates) against a physical problem (Chokepoints).",
  },

  // ═══════════════════ SLIDE 10: MARITIME CHOKE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MARITIME BOTTLENECKS",
    heading: "The Trade",
    headingAccent: "Choke.",
    body: "Beyond debt, the IMF is tracking historic maritime friction. The Red Sea and Hormuz chokepoints are no longer just 'disruptions'—they are structural growth caps.",
    features: [
      { icon: "📉", label: "Transit Surcharge", description: "Shipping costs up 200% on key routes as logistics giants re-route vessels." },
      { icon: "🚢", label: "Path Diversion", description: "Cape of Good Hope routing adding 10-14 days to global supply chains." },
      { icon: "🏗️", label: "Inventory Drag", description: "Just-in-time models collapsing in favor of localized, expensive stockpiling." },
    ],
    insightBox: "💡 Analysis: Maritime friction is the physical engine behind the IMF'S 3.1% downgrade.",
  },

  // ═══════════════════ SLIDE 11: SOFT LANDING DEATH ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "TERMINAL ANALYSIS",
    heading: "The Soft",
    headingAccent: "Landing Death.",
    body: "The IMF Pivot signals the end of the 'Perfect Disinflation' narrative. We are transitioning from a 'Soft Landing' to 'Structural Stagnation.'",
    features: [
      { icon: "🛑", label: "Momentum Halted", description: "The 3.1% downgrade reflects a permanent loss of global industrial speed." },
      { icon: "🌪️", label: "Volatility Floor", description: "Macro-volatility has established a new, higher baseline for the next 24 months." },
      { icon: "🏰", label: "Economic Moats", description: "Only nations with domestic energy and food security will survive the shift." },
    ],
    insightBox: "⚠️ Verdict: The 'Golden Path' has closed. Risk Management is now the primary objective.",
  },

  // ═══════════════════ SLIDE 12: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE SERIES CONTINUES",
    heading: "MacroEdge",
    headingAccent: "Intelligence.",
    body: "The global map is being redrawn by energy and debt. Stay ahead of the pivot with our deep-dive institutional briefings.",
    ctaText: "Follow @macroedge_in",
    nextTopic: "Next: The U.S. Sanction Trap",
  },
];
