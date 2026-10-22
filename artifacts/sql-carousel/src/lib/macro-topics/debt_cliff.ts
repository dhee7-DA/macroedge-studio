import type { SlideData } from "@workspace/carousel-engine";

export const DEBT_CLIFF: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "GLOBAL FINANCE TEARDOWN",
    tagRight: "SIGNAL: THE $9.6T WALL",
    heading: "The Sovereign",
    headingAccent: "Debt Cliff.",
    body: "The global economy is hitting a structural 'Refinancing Wall.' Approximately $9.6 Trillion in U.S. government debt is slated to mature within the current cycle. Here is the institutional brief on the $1 Trillion Interest Milestone.",
    levelBadge: "MACRO",
    topicNum: "DC",
    bullets: ["$9.6T Maturity Volume", "$1T Interest Milestone", "The Refinancing Trap"],
  },

  // ═══════════════════ SLIDE 2: THE REFINANCING ENGINE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE DEBT CYCLE",
    heading: "The Maturity",
    headingAccent: "Engine.",
    body: "Sovereign debt is almost never 'paid back' in the traditional sense. It is 'rolled over.' The government issues new debt to pay off the old, effectively kicking the principal down the road.",
    features: [
      { icon: "⛓️", label: "Perpetual Rollover", description: "The system relies on continuous investor demand to auction new paper." },
      { icon: "📉", label: "Average Maturity", description: "The U.S. debt profile has shortened; more debt is now in high-velocity bills." },
      { icon: "⚠️", label: "Auction Risk", description: "A failed or 'weak' auction forces rates higher to attract reluctant buyers." },
    ],
    insightBox: "💡 Analysis: Rollover is a stable process until the 'Rate Gap' becomes too wide to ignore.",
  },

  // ═══════════════════ SLIDE 3: THE $9.6T WALL ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "VOLUME ANALYSIS",
    heading: "The Peak of the",
    headingAccent: "Maturity Wall.",
    body: "The current fiscal window sees one of the largest concentrations of maturing paper in history. Over one-quarter of the total national debt must be refinanced.",
    features: [
      { icon: "🏢", label: "$9.6 Trillion", description: "Total volume of Treasury bills and notes maturing in the current cycle." },
      { icon: "📊", label: "25% Concentration", description: "A massive refinancing burden that leaves little room for fiscal error." },
      { icon: "🏗️", label: "Supply Surge", description: "The Treasury must find buyers for trillions in new debt just to stay static." },
    ],
    insightBox: "🎯 Strategic View: This volume creates a permanent floor under interest rates—supply is simply too high.",
  },

  // ═══════════════════ SLIDE 4: THE COUPON GAP ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "RATE DYNAMICS",
    heading: "The Refinancing",
    headingAccent: "Gap.",
    body: "The problem isn't the debt itself—it's the 'Coupon Gap.' We are transitioning from the zero-rate era to the high-rate reality.",
    steps: [
      {
        number: "01",
        title: "Pandemic Paper",
        description: "Maturing debt was issued at 1.0% - 2.0% coupons during the low-rate era.",
      },
      {
        number: "02",
        title: "The New Realty",
        description: "New paper is being issued at current market yields of 4.5% - 5.2%.",
      },
      {
        number: "03",
        title: "The Interest Tax",
        description: "This gap triples the interest expense on every dollar of refinanced debt.",
      },
    ],
    insightBox: "🔋 The Math: Every 100bps rise in average rates adds ~$300B to the annual deficit.",
  },

  // ═══════════════════ SLIDE 5: THE $1T MILESTONE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "FISCAL MILESTONE",
    heading: "The $1Trillion",
    headingAccent: "Milestone.",
    body: "Gross interest expense on the national debt has officially cleared the $1,000,000,000,000 annual threshold. It is now a top-tier line item.",
    features: [
      { icon: "💰", label: "$1.02 Trillion", description: "Annualized interest expense at the start of the current cycle." },
      { icon: "📈", label: "Growth Slope", description: "Interest expense has tripled in the last five years alone." },
      { icon: "🏛️", label: "Budget Pressure", description: "Interest is now crowding out flexible spending on infrastructure and R&D." },
    ],
    insightBox: "💡 The Reality: Interest is no longer a 'hidden' cost—it is a dominant driver of the deficit.",
  },

  // ═══════════════════ SLIDE 6: DEFENSE VS INTEREST ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE CROSSOVER",
    heading: "Interest vs",
    headingAccent: "Defense.",
    body: "In a historic fiscal shift, the cost of servicing past debt has now surpassed the budget for national defense.",
    features: [
      { icon: "🛡️", label: "Defense Budget", description: "Institutional spending leveled off around $850B - $900B." },
      { icon: "💸", label: "Service Cost", description: "Debt service has surged past $1T, creating a permanent gap." },
      { icon: "📊", label: "The V-Cross", description: "The curves have officially crossed, signaling a shift to a 'Rentier State.'" },
    ],
    insightBox: "🎯 Strategic Take: We are spending more on our 'Financial Past' than our 'National Security Future.'",
  },

  // ═══════════════════ SLIDE 7: CROWDING OUT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "LIQUIDITY DRAIN",
    heading: "The Crowding",
    headingAccent: "Out Effect.",
    body: "When the government offers 5% 'Risk-Free' returns on trillions in debt, it drains capital away from the productive private economy.",
    features: [
      { icon: "📉", label: "Private Credit", description: "Companies must compete with the Treasury for the same pool of capital." },
      { icon: "🏗️", label: "CAPEX Stagnation", description: "Higher costs for borrowing kill marginal industrial and tech projects." },
      { icon: "🏦", label: "Bank Reserves", description: "Drying up liquidity as banks shift to high-yield Treasury assets." },
    ],
    insightBox: "💡 MacroEdge Take: The Debt Cliff is an invisible tax on innovation and corporate expansion.",
  },

  // ═══════════════════ SLIDE 8: THE SCORECARD ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "INSTITUTIONAL METRICS",
    heading: "The Debt",
    headingAccent: "Scorecard.",
    body: "Real-time metrics for the Sovereign Debt Market at the start of the current cycle. Facts verified twice for accuracy.",
    table: {
      headers: ["Metric", "Value", "Context"],
      rows: [
        { cells: ["Total Maturity", "$9.6 Trillion", "One-quarter of total debt"], highlight: true },
        { cells: ["Annual Interest", "$1.02 Trillion", "Surpassed Defense spending"], highlight: true },
        { cells: ["Interest/GDP", "4.1%", "Highest since the 1990s"] },
        { cells: ["Avg. Coupon", "3.2%", "Rising toward 4.5% target"] },
        { cells: ["Primary Deficit", "$1.1 Trillion", "Excluding interest expense"] },
      ],
      caption: "Sources: U.S. Treasury, Bloomberg, MacroEdge Research Vault.",
    },
  },

  // ═══════════════════ SLIDE 9: SYSTEMIC FRAGILITY ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "SYSTEMIC RISK",
    heading: "Dependency",
    headingAccent: "Fragility.",
    body: "The system relies on 'Endless Demand.' If foreign central banks or domestic institutions pull back, the Treasury becomes the buyer of last resort.",
    features: [
      { icon: "🌏", label: "Foreign Holdings", description: "Japan and China remain the largest holders but are diversifying into metals/gold." },
      { icon: "🏛️", label: "Federal Reserve", description: "Potential return to Quantitative Easing (QE) to 'monetize' the cliff if demand fails." },
      { icon: "💣", label: "The Doom Loop", description: "Higher rates → Higher Deficits → More Debt → Higher Rates." },
    ],
    insightBox: "⚠️ Risk Alert: The $9.6T wall makes the central bank a 'Hostage' to the Treasury's refinancing needs.",
  },

  // ═══════════════════ SLIDE 10: THE WINNERS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CAPITAL ROTATION",
    heading: "The Yield",
    headingAccent: "Winners.",
    body: "The Debt Cliff creates a massive opportunity for 'Cash-Rich' entities and fixed-income institutional investors.",
    features: [
      { icon: "💵", label: "T-Bill Savers", description: "Capturing 5%+ returns on absolute risk-free sovereign assets." },
      { icon: "🏦", label: "Money Market Funds", description: "Explosive asset growth as retail capital flees low-yield bank accounts." },
      { icon: "👑", label: "Wealth Accumulators", description: "Institutional rotation into high-quality duration to lock in terminal rates." },
    ],
    insightBox: "🎯 Strategic Take: The Rentier Class is the primary beneficiary of the $1 Trillion interest transfer.",
  },

  // ═══════════════════ SLIDE 11: THE LOSERS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "SYSTEMIC EROSION",
    heading: "The Currency",
    headingAccent: "Losers.",
    body: "There is no free lunch. The cost of the $9.6T wall is ultimately borne by the currency and the future taxpayer.",
    features: [
      { icon: "📉", label: "Purchasing Power", description: "Monetizing debt to pay interest is structural fuel for inflation." },
      { icon: "🛡️", label: "Infrastructure Gap", description: "Money spent on past debt cannot be spent on future growth." },
      { icon: "💸", label: "Fiscal Fragility", description: "Reducing the nation's ability to react to a new war or recession." },
    ],
    insightBox: "🏛️ Final Word: The Debt Cliff is a slow-motion collision between fiscal ambition and mathematical reality.",
  },

  // ═══════════════════ SLIDE 12: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE SERIES CONTINUES",
    heading: "MacroEdge",
    headingAccent: "Intelligence.",
    body: "The Debt Cliff is only step one. Part 2 analyzes the 'IMF Pivot' and the global recession signals coming from the Spring Meetings.",
    ctaText: "Follow @macroedge_in",
    nextTopic: "The IMF Pivot: Darkened Horizons",
  },
];
