import type { SlideData } from "../carousel-types";

export const FOOD_COSTS_SPIKE: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MACRO ALARM",
    tagRight: "SIGNAL: MAY 9, 2026",
    heading: "The Food",
    headingAccent: "Inflation Spike.",
    body: "Inside the FAO's record numbers. As vegetable oil surges 5.9% and meat hits all-time highs, the 'Silent Tax' is crushing the consumer. Here is the market impact.",
    levelBadge: "ADVANCED",
    topicNum: "MACRO-FOOD",
    bullets: ["FAO Veg Oil Surges 5.9%", "Meat Hits Record Highs", "The Margin Squeeze on Fast Food", "Consumer Sentiment at 48.2"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE DATA",
    heading: "The FAO",
    headingAccent: "Alarm.",
    body: "The UN Food and Agriculture Organization (FAO) just reported a massive spike in global food costs. This isn't a supply issue; it's a transport and energy issue.",
    features: [
      { icon: "🛢️", label: "Veg Oil +5.9%", description: "Vegetable oil prices hit their highest level since July 2022, driven by transport costs." },
      { icon: "🥩", label: "Record Meat", description: "Protein costs are at all-time highs as livestock feed and processing energy surge." },
      { icon: "📉", label: "Sentiment 48.2", description: "This data explains why US Consumer Sentiment just hit a record low this morning." },
    ],
    insightBox: "💡 Analysis: Food is non-discretionary. When food prices rise, consumers stop spending on everything else.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE CATALYST",
    heading: "The $100 Oil",
    headingAccent: "Connection.",
    body: "You can't separate food from energy. The clashes in the Strait of Hormuz and $100 oil are the primary drivers of this sudden spike.",
    features: [
      { icon: "🚚", label: "Transport Costs", description: "Moving food across oceans and continents is now 20-30% more expensive than last year." },
      { icon: "🚜", label: "Fertilizer Lock", description: "Fertilizer production is highly energy-intensive. $100 oil means higher crop input costs." },
      { icon: "🛑", label: "Grid Friction", description: "Cold storage and processing plants are facing surging electricity bills." },
    ],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE LOSERS",
    heading: "The Margin",
    headingAccent: "Squeeze.",
    body: "Packaged food companies and casual dining chains are in the crosshairs. They cannot pass these costs to an already broke consumer.",
    features: [
      { icon: "🍔", label: "Fast Food Pullback", description: "Value menus are disappearing. Expect negative traffic growth in Q2 earnings." },
      { icon: "📦", label: "Packaged Goods", description: "Firms like Nestle and Tyson are facing a choice: absorb costs or lose market share." },
      { icon: "📉", label: "Discretionary Death", description: "As food takes up more of the wallet, apparel and entertainment spend will collapse." },
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE WINNERS",
    heading: "The Discount",
    headingAccent: "Grocer Bid.",
    body: "Where is the money rotating? Into the firms that help consumers survive the squeeze and the inputs that grow the food.",
    features: [
      { icon: "🛒", label: "Walmart / Aldi", description: "Discount grocers gain market share as middle-class families trade down from restaurants." },
      { icon: "🌾", label: "AgTech & Fertilizer", description: "High crop prices mean farmers are willing to spend more on high-yield seeds and fertilizers." },
      { icon: "🔒", label: "Private Labels", description: "Store-brand manufacturers are outperforming premium brands by 2x." },
    ],
  },
  {
    type: "concept",
    background: "light",
    tag: "CENTRAL BANK IMPACT",
    heading: "The 'Warsh'",
    headingAccent: "Rate Floor.",
    body: "This food spike destroys the hope for rate cuts. If Kevin Warsh takes over the Fed on May 15, this data forces his hand to stay hawkish.",
    features: [
      { icon: "🦅", label: "No Rate Cuts", description: "The Fed cannot cut rates while non-discretionary inflation is running hot." },
      { icon: "📊", label: "Yields at 4.32%", description: "Bond markets are already pricing in a 'Higher for Longer' scenario." },
      { icon: "⚠️", label: "Stagflation Risk", description: "Slowing growth + High food costs = The classic 1970s Stagflation trap." },
    ],
  },
  {
    type: "table",
    background: "dark",
    tag: "THE SCOREBOARD",
    heading: "The Inflation",
    headingAccent: "Matrix.",
    body: "How to position your portfolio for the return of food and energy inflation.",
    table: {
      headers: ["Sector", "Impact", "Moat Type", "Verdict"],
      rows: [
        { cells: ["Discount Grocers", "Positive", "Volume Scale", "BUY"], highlight: true },
        { cells: ["Fertilizer", "Positive", "Pricing Power", "BUY"], highlight: true },
        { cells: ["Casual Dining", "Negative", "Discretionary", "AVOID"] },
        { cells: ["Premium Food", "Negative", "Margin Squeeze", "SELL"] },
        { cells: ["Big Tech", "Neutral", "B2B Recurring", "HOLD"] },
      ],
      caption: "MacroEdge Alpha: Rotate out of discretionary consumer and into agriculture.",
    },
  },
  {
    type: "steps",
    background: "light",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "How to Protect",
    headingAccent: "Your Capital.",
    body: "Treat this as a structural shift, not a temporary spike. Here is the playbook.",
    steps: [
      {
        number: "01",
        title: "Track Veg Oil",
        description: "Vegetable oil is the canary in the coal mine for processed food margins. Watch this index daily."
      },
      {
        number: "02",
        title: "Short Casual Dining",
        description: "Families will cut restaurant visits first. Look for chains with high debt and low pricing power."
      },
      {
        number: "03",
        title: "Buy the Input",
        description: "If food is expensive, the companies selling the seeds, fertilizer, and tractor automation win."
      }
    ],
  },
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE STRATEGY",
    heading: "Own the",
    headingAccent: "Input.",
    body: "In an inflation spiral, don't buy the brand—buy the commodity. Position your portfolio before the next CPI print.",
    ctaText: "Follow @macroedge_in",
  },
];
