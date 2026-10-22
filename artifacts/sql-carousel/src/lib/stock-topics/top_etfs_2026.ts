import type { SlideData } from "../carousel-types";

export const TOP_ETFS_2026: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MARKET INTELLIGENCE",
    tagRight: "YTD 2026",
    heading: "The Best Performing",
    headingAccent: "ETFs of 2026.",
    body: "The broad market is struggling under the weight of high interest rates, but specific commodity and shipping ETFs are posting triple-digit returns in 2026. Here is the leaderboard.",
    levelBadge: "INTERMEDIATE",
    topicNum: "ETF-LEADERS",
    bullets: ["Tanker Shipping Surges", "The Oil Dominance", "The Defensive Rotation", "Income Strategies Win"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE SHIPPING BOOM",
    heading: "Breakwave Tanker",
    headingAccent: "Shipping (BWET).",
    body: "As the Strait of Hormuz conflict forces global shipping to reroute around Africa, vessel capacity has tightened massively, sending freight rates to the moon.",
    features: [
      { icon: "🚢", label: "The BWET Breakout", description: "This ETF tracks tanker shipping futures and has been a standout performer in 2026." },
      { icon: "🗺️", label: "Longer Routes", description: "Rerouting around the Cape of Good Hope adds weeks to delivery times, restricting global vessel supply." },
      { icon: "⛽", label: "Fuel Premiums", description: "Shippers are charging massive premiums to transport oil and LNG in a high-risk environment." },
    ],
    insightBox: "💡 Analysis: When geopolitical choke points close, the companies that own the boats print money.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE ENERGY DOMINANCE",
    heading: "The Oil",
    headingAccent: "Futures Trade.",
    body: "With Brent crude holding above $110, ETFs tracking energy futures and oil services have absolutely dominated the performance charts.",
    features: [
      { icon: "🛢️", label: "Direct Exposure (USO)", description: "Funds tracking front-month oil futures have posted near triple-digit returns YTD." },
      { icon: "⚙️", label: "Oil Services (OIH)", description: "Companies that provide drilling and extraction services are booming as nations scramble for domestic energy." },
      { icon: "🛡️", label: "The Ultimate Hedge", description: "Energy is currently the only reliable hedge against the inflation caused by the energy crisis itself." },
    ],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE INCOME ROTATION",
    heading: "The Hunt",
    headingAccent: "For Yield.",
    body: "With high-growth tech stocks bleeding under the pressure of 4.6% Treasury yields, capital is rotating into active income strategies.",
    features: [
      { icon: "💸", label: "Covered Calls (JEPI)", description: "Actively managed ETFs selling options to generate high yield are absorbing capital fleeing tech." },
      { icon: "🏢", label: "Small-Cap Value", description: "Investors are hiding in profitable, cash-flow positive small caps rather than unprofitable SaaS companies." },
      { icon: "💵", label: "Ultra-Short Bond ETFs", description: "Parking cash in 3-month Treasury ETFs is yielding 5%+, making it the safest trade of 2026." },
    ],
  },
  {
    type: "histogram",
    background: "dark",
    tag: "THE LEADERBOARD",
    heading: "Top ETFs",
    headingAccent: "YTD 2026.",
    body: "The standout funds benefiting from the macro shock vs the broader market.",
    histogram: {
      maxValue: 160,
      caption: "MacroEdge Alpha: Do not chase the shipping trade here. Rotate into Defense and Oil Services.",
      bars: [
        { label: "Tanker Shipping", tickerLogo: "BWET", icon: "🚢", value: 145, valueLabel: "+145%", highlight: true },
        { label: "Crude Oil Futures", tickerLogo: "USO", icon: "🛢️", value: 92, valueLabel: "+92%", highlight: true },
        { label: "Oil Services", tickerLogo: "OIH", icon: "⚙️", value: 45, valueLabel: "+45%" },
        { label: "Aerospace & Defense", tickerLogo: "ITA", icon: "🛡️", value: 28, valueLabel: "+28%" },
        { label: "Mega-Cap Tech", tickerLogo: "QQQ", icon: "📉", value: 4, valueLabel: "+4%" },
      ]
    }
  },
  {
    type: "concept",
    background: "light",
    tag: "THE LOSERS",
    heading: "The Index",
    headingAccent: "Struggle.",
    body: "If you simply bought the S&P 500 or the Nasdaq in 2026, you are likely underperforming. The 'Passive Index' trade is broken.",
    features: [
      { icon: "📉", label: "Tech Drag", description: "Mega-cap tech stocks, which carried the S&P 500 for years, are now dragging it down." },
      { icon: "⚖️", label: "Equal-Weight Wins", description: "Equal-weight S&P 500 ETFs (RSP) are outperforming market-cap weighted ETFs (SPY) due to tech weakness." },
      { icon: "⚠️", label: "Consumer Discretionary", description: "ETFs tracking consumer spending (XLY) are getting crushed by inflation and rising debt costs." },
    ],
  },
  {
    type: "steps",
    background: "dark",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "How to Rebalance",
    headingAccent: "Right Now.",
    body: "If your portfolio is entirely tied up in SPY and QQQ, you are exposed to significant duration risk. Here is how to adjust.",
    steps: [
      {
        number: "01",
        title: "Add Hard Assets",
        description: "Allocate 10-15% of your portfolio to broad commodity ETFs or physical Gold to hedge against sticky inflation."
      },
      {
        number: "02",
        title: "Shorten Duration",
        description: "Move cash into ultra-short Treasury ETFs (SGOV/BIL) to lock in high yields while waiting for tech valuations to reset."
      },
      {
        number: "03",
        title: "Target Defense",
        description: "With budgets expanding globally, Aerospace & Defense ETFs (ITA) offer long-term structural growth independent of consumer demand."
      }
    ],
  },
  {
    type: "cta",
    background: "light",
    tag: "MACROEDGE STRATEGY",
    heading: "The Active",
    headingAccent: "Advantage.",
    body: "The era of blindly buying the index is over. 2026 requires active sector rotation.",
    ctaText: "Follow @macroedge_in",
  },
];
