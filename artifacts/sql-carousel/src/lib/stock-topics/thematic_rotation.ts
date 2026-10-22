import type { SlideData } from "../carousel-types";

export const THEMATIC_ROTATION: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "PORTFOLIO STRATEGY",
    tagRight: "MAY 2026",
    heading: "The Thematic",
    headingAccent: "Rotation.",
    body: "The era of blindly buying the S&P 500 is over. With index breadth at historic lows, smart money is abandoning passive investing and aggressively rotating into highly concentrated thematic ETFs.",
    levelBadge: "ADVANCED",
    topicNum: "STOCK-THEMATIC",
    bullets: ["The Passive Trap", "The AI Infrastructure Supercycle", "Global Defense Booms", "Thematic ETF Leaders"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE INDEX PROBLEM",
    heading: "The Death of",
    headingAccent: "Passive.",
    body: "For the last decade, simply buying a total market index fund was the smartest play in finance. In a high-interest rate, stagflationary environment, it is the most dangerous.",
    features: [
      { icon: "📉", label: "The Breadth Crisis", description: "The S&P 500 is being artificially held up by less than 10 companies. The remaining 490 companies are struggling against 4.5% risk-free rates." },
      { icon: "🧱", label: "Zombie Companies", description: "Passive indexes force you to buy 'zombie companies' that rely on cheap debt to survive. In 2026, cheap debt is dead." },
      { icon: "🎯", label: "The Shift to Active", description: "To generate alpha today, institutions are surgically targeting specific macro trends rather than buying the entire market." },
    ],
    insightBox: "💡 Analysis: When the economic tide goes out, passive investors realize how much dead weight they are holding.",
  },
  {
    type: "histogram",
    background: "dark",
    tag: "SECTOR LEADERS",
    heading: "The Thematic",
    headingAccent: "Outperformers.",
    body: "While the broad market stalls, these ultra-focused thematic sectors are generating massive, uncorrelated returns.",
    histogram: {
      maxValue: 40,
      caption: "MacroEdge Alpha: Do not confuse a 'Tech ETF' with an 'AI Infrastructure ETF'. Specificity is how you win in 2026.",
      bars: [
        { label: "AI Infrastructure", tickerLogo: "GRID", icon: "⚡", value: 38, valueLabel: "+38%", highlight: true },
        { label: "Global Defense", tickerLogo: "ITA", icon: "🛡️", value: 26, valueLabel: "+26%", highlight: true },
        { label: "Cybersecurity", tickerLogo: "HACK", icon: "🔒", value: 18, valueLabel: "+18%" },
        { label: "Uranium & Nuclear", tickerLogo: "URNM", icon: "☢️", value: 14, valueLabel: "+14%" },
        { label: "S&P 500 Index", tickerLogo: "SPY", icon: "📊", value: 4, valueLabel: "+4%" },
      ]
    }
  },
  {
    type: "concept",
    background: "light",
    tag: "THE TREND: INFRASTRUCTURE",
    heading: "The AI Hardware",
    headingAccent: "Supercycle.",
    body: "The AI trade has moved beyond software and LLMs. The real money is now chasing the physical infrastructure required to keep AI alive.",
    features: [
      { icon: "🏭", label: "Data Centers", description: "The physical footprint of AI data centers is expanding globally, driving massive real estate and cooling technology contracts." },
      { icon: "🔌", label: "The Power Grid", description: "AI data centers consume astronomical amounts of electricity. The modernization of the power grid is a multi-trillion dollar theme." },
      { icon: "⛏️", label: "Copper & Commodities", description: "You cannot build data centers without copper. Commodity producers are the silent winners of the AI revolution." },
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE TREND: GEOPOLITICS",
    heading: "The Permanent",
    headingAccent: "Defense Cycle.",
    body: "The era of the 'peace dividend' is over. Global defense spending has fundamentally shifted from a cyclical expense to a permanent, escalating necessity.",
    features: [
      { icon: "🌍", label: "NATO Rearmament", description: "European nations are massively expanding their defense budgets, creating a decades-long backlog for prime defense contractors." },
      { icon: "🛸", label: "Space Domain", description: "The militarization of space and the demand for satellite defense networks is creating an entirely new sub-sector of defense tech." },
      { icon: "🛡️", label: "Margin Expansion", description: "Unlike consumer goods, defense contractors have inelastic demand and government-backed contracts, making them immune to recessions." },
    ],
  },
  {
    type: "steps",
    background: "light",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "Building a",
    headingAccent: "Thematic Core.",
    body: "How to restructure a traditional 60/40 portfolio into a surgical thematic engine.",
    steps: [
      {
        number: "01",
        title: "Identify the Macro Drivers",
        description: "Select 3-4 unstoppable macro trends (e.g., Grid Modernization, Cyber Warfare, Demographics)."
      },
      {
        number: "02",
        title: "Screen for Pure-Plays",
        description: "Avoid generic sector ETFs. Find 'pure-play' thematic ETFs where at least 80% of the holdings directly generate revenue from the theme."
      },
      {
        number: "03",
        title: "Size for Volatility",
        description: "Thematic ETFs are highly volatile. Keep individual thematic positions to 5-10% of your total equity portfolio to survive drawdowns."
      }
    ],
  },
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE STRATEGY",
    heading: "Stop Buying",
    headingAccent: "The Index.",
    body: "The S&P 500 will not save you in a stagflationary environment. Trade the themes, not the market.",
    ctaText: "Follow @macroedge_in",
  },
];
