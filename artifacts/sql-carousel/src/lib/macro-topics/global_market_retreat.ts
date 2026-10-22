import type { SlideData } from "../carousel-types";

export const GLOBAL_MARKET_RETREAT: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MARKET SHOCK",
    tagRight: "SIGNAL: MAY 15, 2026",
    heading: "The Tech",
    headingAccent: "Hangover.",
    body: "After hitting all-time highs on Thursday, the US stock market is experiencing a violent Friday pullback. The S&P 500 is down 1%, and the Nasdaq is bleeding.",
    levelBadge: "INTERMEDIATE",
    topicNum: "MACRO-PULLBACK",
    bullets: ["Nasdaq Drops 1.4%", "10-Year Yield > 4.5%", "AI Profit-Taking", "The Fed Bind"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE DROP",
    heading: "The Friday",
    headingAccent: "Reversal.",
    body: "Euphoria rarely lasts into the weekend when geopolitical risk is this high. Investors are aggressively taking risk off the table.",
    features: [
      { icon: "📉", label: "Nasdaq Leads Lower", description: "The tech-heavy index fell 1.4%, dragging down the broader market." },
      { icon: "💰", label: "Profit-Taking", description: "After massive runs in AI and semiconductor stocks, funds are locking in gains." },
      { icon: "🛑", label: "S&P 500 Retreat", description: "The broader index gave up the 7,500 level it fought so hard to claim yesterday." },
    ],
    insightBox: "💡 Analysis: This is not a panic sell-off (yet). It is an orderly, albeit aggressive, de-risking event ahead of an uncertain weekend.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE YIELD SHOCK",
    heading: "The Bond Market",
    headingAccent: "Wakes Up.",
    body: "You cannot have high-flying tech stocks when the bond market is screaming about inflation.",
    features: [
      { icon: "📈", label: "10-Year Yield Surge", description: "The 10-year Treasury yield ripped above 4.5%, instantly repricing risk assets." },
      { icon: "🛢️", label: "$106 Oil Impact", description: "Energy costs are feeding directly into inflation expectations, driving yields higher." },
      { icon: "🦅", label: "The Warsh Era Begins", description: "New Fed Chair Kevin Warsh is inheriting a nightmare: 3.8% inflation and political pressure to cut." },
    ],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE ROTATION",
    heading: "Where is the",
    headingAccent: "Money Going?",
    body: "Capital isn't evaporating; it's rotating. The 'Risk-On' trade is being temporarily swapped for 'Hard Assets'.",
    features: [
      { icon: "🛢️", label: "Energy Holds Strong", description: "With the Strait of Hormuz blocked, oil majors remain the ultimate defensive play." },
      { icon: "🛡️", label: "Defense & Aerospace", description: "Escalation in the Middle East and Ukraine keeps the military-industrial complex bid." },
      { icon: "💵", label: "Cash is a Position", description: "With short-term yields attractive, many funds are simply moving to cash to wait out the volatility." },
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE GEOPOLITICS",
    heading: "The Summit",
    headingAccent: "Nothingburger.",
    body: "Markets were pricing in a major de-escalation from the Trump-Xi summit in Beijing. They didn't get it.",
    features: [
      { icon: "🇨🇳", label: "No Breakthrough", description: "The summit ended with vague promises of stability, but no hard agreements on tariffs or Taiwan." },
      { icon: "🚢", label: "Hormuz Chaos", description: "A tanker was hijacked off the UAE today, proving that diplomatic talks aren't securing shipping lanes." },
      { icon: "⚔️", label: "Ukraine Strikes", description: "Russia intensified assaults on Kyiv, reminding the market that the war economy is still active." },
    ],
  },
  {
    type: "table",
    background: "light",
    tag: "THE SCOREBOARD",
    heading: "The Retreat",
    headingAccent: "Matrix.",
    body: "How different sectors are responding to the Friday pullback and yield shock.",
    table: {
      headers: ["Sector", "Friday Impact", "Yield Sensitivity", "Verdict"],
      rows: [
        { cells: ["Semiconductors", "Down > 2%", "High", "TRIM"], highlight: true },
        { cells: ["Energy Majors", "Flat / Up", "Low", "HOLD"], highlight: true },
        { cells: ["Consumer Disc.", "Down > 1%", "High", "SELL"] },
        { cells: ["Defense Prime", "Up", "Low", "BUY"] },
        { cells: ["Mega-Cap Tech", "Down ~1.5%", "High", "HOLD"] },
      ],
      caption: "MacroEdge Alpha: Do not buy the dip on high-PE tech until the 10-year yield stabilizes.",
    },
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE TECHNICALS",
    heading: "Support Levels",
    headingAccent: "to Watch.",
    body: "If the selling accelerates next week, here are the critical technical levels where buyers might step in.",
    features: [
      { icon: "📉", label: "S&P 500: 7,350", description: "The first major support line. A break below this signals a deeper correction." },
      { icon: "📊", label: "Nasdaq: 25,800", description: "Tech needs to hold this line, or the momentum algorithms will flip to short." },
      { icon: "📈", label: "10Y Yield: 4.65%", description: "If yields break above 4.65%, expect a massive equity liquidation." },
    ],
  },
  {
    type: "steps",
    background: "light",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "How to Trade",
    headingAccent: "The Pullback.",
    body: "Volatility is back. Here is the institutional playbook for managing a sudden market retreat.",
    steps: [
      {
        number: "01",
        title: "Take Profits in Winners",
        description: "If you rode the AI wave on Thursday, lock in 20-30% of those gains today."
      },
      {
        number: "02",
        title: "Hedge with Energy",
        description: "As long as Hormuz is threatened, energy stocks act as a natural portfolio hedge."
      },
      {
        number: "03",
        title: "Wait for the Fed",
        description: "Do not deploy fresh capital until we hear from newly confirmed Fed Chair Kevin Warsh."
      }
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE BIG PICTURE",
    heading: "Stagflation",
    headingAccent: "Reality Check.",
    body: "The market is slowly waking up to the reality that high oil prices and sticky inflation cannot coexist with infinite tech multiples.",
    features: [
      { icon: "🦅", label: "The Hawkish Trap", description: "The Fed cannot cut rates while oil is above $100. The market's rate-cut dreams are dying." },
      { icon: "💵", label: "Dollar Strength", description: "The US Dollar remains the safest house in a bad neighborhood, putting pressure on emerging markets." },
      { icon: "🛑", label: "Margin Compression", description: "Expect Q3 earnings to show serious margin compression as input costs soar." },
    ],
  },
  {
    type: "cta",
    background: "light",
    tag: "MACROEDGE STRATEGY",
    heading: "Survive the",
    headingAccent: "Weekend.",
    body: "Friday sell-offs are dangerous because news can break over the weekend when markets are closed. Stay light, stay hedged.",
    ctaText: "Follow @macroedge_in",
  },
];
