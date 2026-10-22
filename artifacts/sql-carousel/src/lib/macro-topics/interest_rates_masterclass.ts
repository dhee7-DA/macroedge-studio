import type { SlideData } from "../carousel-types";

export const INTEREST_RATES_MASTERCLASS: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MACRO MASTERCLASS",
    tagRight: "EDUCATIONAL",
    heading: "The Gravity",
    headingAccent: "of Money.",
    body: "Interest rates are the invisible force that controls everything from your mortgage to the valuation of trillion-dollar tech companies. Here is how they work.",
    levelBadge: "FOUNDATIONS",
    topicNum: "MACRO-RATES",
    bullets: ["The Cost of Capital", "The Economic Brake Pedal", "Why Tech Hates Yields", "The Winners & Losers"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE BASICS",
    heading: "What is an",
    headingAccent: "Interest Rate?",
    body: "Simply put, an interest rate is the 'Cost of Capital'. It is the price you pay to rent someone else's money for a specific period of time.",
    features: [
      { icon: "🏦", label: "The Central Bank", description: "The Federal Reserve sets the base rate. This is the rate at which banks lend to each other." },
      { icon: "💳", label: "The Ripple Effect", description: "When the base rate goes up, the cost of credit cards, mortgages, and corporate loans all go up." },
      { icon: "⏳", label: "Time Value", description: "A higher interest rate means a dollar today is worth significantly more than a dollar tomorrow." },
    ],
    insightBox: "💡 Concept: When capital is cheap (0% rates), people take massive risks. When capital is expensive (5% rates), people demand safety.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE ECONOMY",
    heading: "The Economic",
    headingAccent: "Brake Pedal.",
    body: "Central Banks raise interest rates for one primary reason: to fight inflation by slowing down the economy.",
    features: [
      { icon: "🛑", label: "Killing Demand", description: "Higher rates make borrowing expensive. People buy fewer houses and cars, which cools down prices." },
      { icon: "💼", label: "Corporate Contraction", description: "Companies cancel expansion plans and halt hiring because the debt to fund them is too costly." },
      { icon: "🦅", label: "The Hawkish Trap", description: "If a Central Bank raises rates too high or too fast, they risk slamming the brakes so hard it causes a recession." },
    ],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE STOCK MARKET",
    heading: "Why High Rates",
    headingAccent: "Crush Tech.",
    body: "High-growth tech companies are valued based on their 'future earnings'. When interest rates rise, those future earnings become less valuable today.",
    features: [
      { icon: "🧮", label: "Discounted Cash Flow", description: "Analysts discount future profits back to today. A higher interest rate means a heavier discount applied." },
      { icon: "📉", label: "Multiple Compression", description: "A company trading at 50x earnings when rates are 0% might only be worth 20x earnings when rates are 5%." },
      { icon: "💸", label: "Cash Burn Risk", description: "Unprofitable startups that rely on constant borrowing get destroyed when the cost of debt triples." },
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE ALTERNATIVE",
    heading: "The Risk-Free",
    headingAccent: "Competitor.",
    body: "Stocks are inherently risky. When interest rates rise, the stock market gains a massive, unbeatable competitor: The US Treasury.",
    features: [
      { icon: "🇺🇸", label: "The Treasury Yield", description: "If you can earn a guaranteed 5% return from the US Government, why risk your money in a volatile stock market?" },
      { icon: "🔄", label: "Capital Rotation", description: "As yields rise, institutional money flows out of risky stocks and into safe, high-yielding bonds." },
      { icon: "🛑", label: "The Equity Premium", description: "Stocks must offer a massive potential return (the equity risk premium) to justify not simply holding cash." },
    ],
  },
  {
    type: "table",
    background: "light",
    tag: "THE SCOREBOARD",
    heading: "The Rate",
    headingAccent: "Matrix.",
    body: "How different sectors perform during a cycle of rising interest rates.",
    table: {
      headers: ["Sector", "Impact", "Why it Happens", "Verdict"],
      rows: [
        { cells: ["Banks / Financials", "Positive", "Net Interest Margins expand", "BUY"], highlight: true },
        { cells: ["High-PE Tech", "Negative", "Future cash flows discounted heavily", "SELL"] },
        { cells: ["Real Estate (REITs)", "Negative", "Mortgage rates kill demand", "AVOID"] },
        { cells: ["Cash / Short Bonds", "Positive", "High risk-free yield", "HOLD"], highlight: true },
      ],
      caption: "MacroEdge Alpha: Don't fight the Fed. When rates are rising, shorten your duration and hold cash.",
    },
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE CORPORATE DEBT",
    heading: "The Refinancing",
    headingAccent: "Timebomb.",
    body: "The biggest hidden risk in the stock market isn't just valuation—it's corporate debt walls.",
    features: [
      { icon: "🧱", label: "The Debt Wall", description: "Many companies borrowed heavily at 2% in 2021. Those bonds expire soon, and they must refinance at 6%." },
      { icon: "🔪", label: "Margin Destruction", description: "When interest expenses triple overnight, a company's profit margin vanishes completely." },
      { icon: "🧟", label: "Zombie Companies", description: "Firms that only survive because of cheap debt will face mass bankruptcies during sustained high rates." },
    ],
  },
  {
    type: "steps",
    background: "light",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "Trading the",
    headingAccent: "Rate Cycle.",
    body: "Interest rate cycles are the tide that moves all boats. Here is how to position yourself.",
    steps: [
      {
        number: "01",
        title: "Track the 10-Year Yield",
        description: "The 10-Year Treasury Yield is the compass. If it is rising rapidly, avoid high-growth tech stocks."
      },
      {
        number: "02",
        title: "Look for Free Cash Flow",
        description: "In a high-rate environment, buy companies that generate massive cash today, not promises for 2030."
      },
      {
        number: "03",
        title: "Watch the Fed Pivot",
        description: "The moment the Central Bank signals they will cut rates, buy the dip on tech and real estate."
      }
    ],
  },
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE STRATEGY",
    heading: "Understand",
    headingAccent: "The Gravity.",
    body: "You cannot understand the stock market without understanding the bond market. Interest rates are the foundation of all finance.",
    ctaText: "Follow @macroedge_in",
  },
];
