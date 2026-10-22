import type { SlideData } from "../carousel-types";

export const DOW_50K_ILLUSION: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MACRO ANALYSIS",
    tagRight: "MAY 2026",
    heading: "The Dow 50K",
    headingAccent: "Illusion.",
    body: "The Dow Jones just crossed the historic 50,000 milestone. Financial media is celebrating, but under the hood, the economic engine is stalling. Here is why the smart money is hedging.",
    levelBadge: "INTERMEDIATE",
    topicNum: "MACRO-DOW50K",
    bullets: ["The LEI Warning", "Sticky Inflation", "Treasury Yield Cap", "The Stealth Contraction"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE DIVERGENCE",
    heading: "The Milestone",
    headingAccent: "Trap.",
    body: "Major round-number milestones (like Dow 50K or S&P 7,500) act as psychological magnets for retail investors, often masking severe structural weaknesses in the underlying economy.",
    features: [
      { icon: "🧲", label: "Retail Euphoria", description: "When indexes hit historic milestones, retail capital floods in due to FOMO (Fear Of Missing Out), creating a short-term liquidity exit for institutions." },
      { icon: "📉", label: "The LEI Warning", description: "The Conference Board Leading Economic Index (LEI) is flashing red. While the market hits all-time highs, the 6- and 12-month LEI growth rates remain negative." },
      { icon: "🎭", label: "Index Concentration", description: "The index is being dragged across the finish line by a handful of mega-cap tech and industrial giants, while the median stock is flat or down." },
    ],
    insightBox: "💡 Analysis: The stock market is not the economy. The market prices in future liquidity; the economy prices in current reality.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE INFLATION REALITY",
    heading: "The Cost of",
    headingAccent: "Living Crisis.",
    body: "The market is rallying on the assumption that inflation is dead. The Bureau of Labor Statistics data tells a completely different story.",
    features: [
      { icon: "⛽", label: "Energy Spike", description: "Gasoline prices are up over 20% year-over-year. The $102 Brent Crude floor is acting as a permanent tax on the consumer." },
      { icon: "✈️", label: "Services Inflation", description: "Airline fares and core services are up 20% YoY. The 'last mile' of inflation is proving incredibly sticky." },
      { icon: "🛒", label: "Retail Divergence", description: "High-end retail (Ralph Lauren) is surging, while mass-market retail (Walmart) is warning about logistics costs. The consumer base is fracturing." },
    ],
  },
  {
    type: "table",
    background: "dark",
    tag: "MARKET BREADTH",
    heading: "The Top-Heavy",
    headingAccent: "Market.",
    body: "Who is actually driving the Dow to 50,000? A massive concentration of capital in just a few sectors.",
    table: {
      headers: ["Sector", "Ticker", "YTD Performance"],
      rows: [
        { cells: ["Mega-Cap Tech", "TECH", "+35%"], highlight: true },
        { cells: ["Aerospace/Defense", "AERO", "+22%"], highlight: true },
        { cells: ["Financials", "FIN", "+12%"] },
        { cells: ["Consumer Staples", "STPL", "+2%"] },
        { cells: ["Real Estate (REITs)", "REIT", "-4%"] }
      ],
      caption: "MacroEdge Alpha: When breadth is this narrow, the index is highly vulnerable to a single-sector shock."
    }
  },
  {
    type: "concept",
    background: "light",
    tag: "THE BOND MARKET",
    heading: "The Treasury",
    headingAccent: "Ceiling.",
    body: "The bond market is the smartest room in the house. Right now, it is quietly building a ceiling over the stock market.",
    features: [
      { icon: "📊", label: "The 4.56% Cap", description: "The 10-Year Treasury yield is hovering around 4.56%. Every time it spikes higher, equities sell off aggressively." },
      { icon: "🦅", label: "Higher for Longer", description: "Because inflation is sticky (gas/services up 20%), the Federal Reserve cannot cut rates. The 'rate cut dream' is dead." },
      { icon: "⛓️", label: "The Valuation Gravity", description: "A 4.5% risk-free rate acts as gravity on corporate valuations. Companies must generate massive free cash flow to justify their stock prices." },
    ],
  },
  {
    type: "steps",
    background: "dark",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "Trading the",
    headingAccent: "50K Top.",
    body: "How institutions are positioning their capital at the top of the market cycle.",
    steps: [
      {
        number: "01",
        title: "Trim the Mega-Caps",
        description: "As seen with Nvidia falling 1.8% despite an $80B buyback, the market is exhausted. Trim positions that are 'priced for perfection'."
      },
      {
        number: "02",
        title: "Rotate to Value",
        description: "Move capital into sectors with low P/E multiples and strong Free Cash Flow yields that can survive a 4.5% interest rate environment."
      },
      {
        number: "03",
        title: "Hold Defensive Cash",
        description: "Do not FOMO into the Dow 50K headline. Earning 5% in short-term Treasuries is a massive strategic advantage while waiting for volatility."
      }
    ],
  },
  {
    type: "cta",
    background: "light",
    tag: "MACROEDGE STRATEGY",
    heading: "Look Under",
    headingAccent: "The Hood.",
    body: "Milestones are for headlines. Yields, breadth, and liquidity are for portfolios. Stay sharp.",
    ctaText: "Follow @macroedge_in",
  },
];
