import type { SlideData } from "@workspace/carousel-engine";

export const BOGLE_INVESTING_PT1: SlideData[] = [
  // ════════════ SLIDE 1: HERO ════════════
  {
    type: "hero",
    background: "dark",
    tag: "BOOK SERIES",
    tagRight: "PART 1 OF 3",
    heading: "Common Sense",
    headingAccent: "Investing.",
    body: "Decoding the foundational wisdom of John C. Bogle (Chapters 1–6). We strip away the marketing noise of Wall Street to reveal the 'Relentless Rules of Humble Arithmetic.' Learn why the stock market is a high-return game for those who own it, but a loser's game for those who try to beat it.",
    levelBadge: "BOOKS",
    topicNum: "03",
    bullets: [
      "📚 Chapters 1 to 6",
      "👨‍👩‍👧‍👦 The Gotrocks Parable",
      "📐 The Math of the Helpers",
      "🏗️ Investment vs Speculative",
      "📉 The Loser's Game",
      "💸 The Cost of Activity",
    ],
  },

  // ════════════ SLIDE 2: THE HOOK ════════════
  {
    type: "concept",
    background: "light",
    tag: "INTRODUCTION",
    heading: "The Sycophantic",
    headingAccent: "Game.",
    body: "The financial industry is built on a grand illusion: that you can beat the market by hiring expensive 'experts.' Bogle argues that investing is a zero-sum game *before* costs, and a negative-sum game *after* costs. The only way to win is to stop playing the game of selection.",
    features: [
      { icon: "📉", label: "The Illusion", description: "Wall Street sells the dream of outperformance. Statistically, 90% of managers fail to beat the index over 10 years." },
      { icon: "✅", label: "The Reality", description: "The most successful strategy is the simplest: buy the entire market and hold it forever at nearly zero cost." },
    ],
    insightBox: "💡 The miracle of compounding is frequently destroyed by the tyranny of compounding costs.",
  },

  // ════════════ SLIDE 3: GOTROCKS PARABLE PT 1 ════════════
  {
    type: "steps",
    background: "dark",
    tag: "CHAPTER 1: THE PARABLE",
    heading: "The Family That",
    headingAccent: "Owned America.",
    body: "Imagine the 'Gotrocks' family. They own 100% of every corporation in the U.S. Each year, they collect every penny of dividends and every bit of earnings growth. Their wealth grows exactly in line with the progress of American business.",
    steps: [
      { number: "01", title: "Ownership", description: "The family represents all investors. In this state, they capture the total return of the market with zero friction." },
      { number: "02", title: "Compounding", description: "Because they spend nothing on 'advice', their wealth compounds at the maximum possible rate for decades." },
      { number: "03", title: "Simplicity", description: "There is no trading, no timing, and no taxes from turnover. Just pure, unadulterated growth." },
    ],
    insightBox: "💎 This is the 'State of Nature' for an investor: capturing the market's full return.",
  },

  // ════════════ SLIDE 4: GOTROCKS PARABLE PT 2 ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 1: THE HELPERS",
    heading: "The Arrival of",
    headingAccent: "The Helpers.",
    body: "A few fast-talking 'Helpers' arrive and convince some Gotrocks cousins that they can pick better stocks than their neighbors. For a 'small fee', of course. The cousins start trading with each other, paying the Helpers for commissions and management.",
    features: [
      { icon: "🤝", label: "The Brokers", description: "They charge a fee for every trade. The more the family trades, the more the Helpers make." },
      { icon: "🏦", label: "The Managers", description: "They charge 1-2% of assets to 'beat' the index. But they are trading amongst the same family!" },
    ],
    insightBox: "⚠️ Event A: The family still owns 100% of America. Event B: The family now has significantly less money because the Helpers took their cut.",
  },

  // ════════════ SLIDE 5: THE GOTROCKS MATH ════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE ARITHMETIC",
    heading: "The Cost of",
    headingAccent: "The Helpers.",
    body: "In Bogle’s parable, as the number of Helpers (brokers, managers, advisors) grows, the share of the pie left for the family shrinks. The market return stays the same, but the investor return collapses.",
    diagram: [
      "    [ THE GROSS MARKET RETURN ]",
      "   ___________________________",
      "  |                           |",
      "  |    INVESTOR'S SHARE       |",
      "  |    (The Gotrocks)         |",
      "  |___________________________|",
      "  |                           |",
      "  |     HELPERS' SHARE        |",
      "  |     (Fees & Costs)        |",
      "  |___________________________|",
      " ",
      " RULE: Gross Return - Costs = Net Return"
    ],
    insightBox: "📉 In the long run, the 'Helpers' become the only sure winners in the game of active management.",
  },

  // ════════════ SLIDE 6: INVESTMENT RETURN ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 2",
    heading: "The Enterprise.",
    headingAccent: "Investment Return.",
    body: "Bogle uses John Maynard Keynes' framework. The first part of market returns is 'Investment Return'. This is the real-world value created by companies through their fundamental business operations.",
    features: [
      { icon: "💵", label: "Dividend Yield", description: "The cash payments companies send to shareholders, representing a consistent share of realized corporate profits." },
      { icon: "📈", label: "Earnings Growth", description: "The rate at which businesses expand their underlying profitability over the long term." },
    ],
    insightBox: "🏗️ Total Investment Return = Dividend Yield + Earnings Growth. This represents the 'Enterprise' and 'Intrinsic Value' of the market.",
  },

  // ════════════ SLIDE 7: SPECULATIVE RETURN ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 2",
    heading: "The Emotion.",
    headingAccent: "Speculative Return.",
    body: "The second part of returns is 'Speculative Return'. This has nothing to do with business reality. It is the change in how much investors are willing to pay for each dollar of earnings (the P/E ratio).",
    features: [
      { icon: "🧠", label: "P/E Expansion", description: "When investors are greedy, they pay more for the same earnings, driving prices UP above reality." },
      { icon: "📉", label: "P/E Contraction", description: "When investors are fearful, they pay less for the same earnings, driving prices DOWN below reality." },
    ],
    insightBox: "🎢 Speculative return is pure noise. It swings wildly in the short term but averages toward ZERO over decades.",
  },

  // ════════════ SLIDE 8: THE CONVERGENCE DIAGRAM ════════════
  {
    type: "concept",
    background: "light",
    tag: "THE DATA",
    heading: "The Long-Term",
    headingAccent: "Convergence.",
    body: "Over the last century, total market returns have almost perfectly converged with the underlying investment returns. The short-term 'noise' of speculation eventually fades away.",
    diagram: [
      " THE HARMONY OF ARITHMETIC",
      " ",
      " [ INVESTMENT RETURN ]",
      " (Real Business Growth)",
      "         +",
      " [ SPECULATIVE RETURN ]",
      " (Emotional Market Noise)",
      "         =",
      " [ TOTAL MARKET RETURN ]"
    ],
    insightBox: "🎯 Conclusion: In the long run, the stock market is a mirror of corporate business. The internal mathematics of business always triumph over the external emotions of the market.",
  },

  // ════════════ SLIDE 9: THE LOSER'S GAME ════════════
  {
    type: "steps",
    background: "dark",
    tag: "CHAPTER 4",
    heading: "The Brutality",
    headingAccent: "of Costs.",
    body: "If the market returns 7% and you pay 2% in fees, you haven't just lost 'a little.' You've lost nearly 30% of your annual return. Over 50 years, this results in a catastrophic wealth gap.",
    steps: [
      { number: "01", title: "Management Fees", description: "The 1-2% headline fee charged by mutual funds or advisors." },
      { number: "02", title: "Transaction Costs", description: "The hidden costs of trading—spreads and commissions inside the fund." },
      { number: "03", title: "The Compound Effect", description: "Money paid in fees is money that *never* compounds for you. It's gone forever." },
    ],
    insightBox: "💸 The 'Humble Arithmetic' shows that you could end up with 70% LESS wealth at retirement due to fees alone.",
  },

  // ════════════ SLIDE 10: THE GRAND ILLUSION ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 5",
    heading: "The Grand",
    headingAccent: "Illusion.",
    body: "Investors obsess over 'Gross Returns' (what the fund made). But Bogle reminds us that 'Net Returns' (what YOU actually keep) is the only metric that matters for your life and your family.",
    features: [
      { icon: "🌫️", label: "Marketing Smoke", description: "Funds advertise their best-performing years, ignoring the average or the failures." },
      { icon: "🧼", label: "Survival Bias", description: "The funds that do poorly are quietly shut down, making the industry averages look better than they are." },
    ],
    insightBox: "💡 The industry lives on the 'Selection' dream. You live on the 'Arithmetic' reality.",
  },

  // ════════════ SLIDE 11: TAXES AS COSTS ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 6",
    heading: "The Taxman's",
    headingAccent: "Bite.",
    body: "Active management leads to high 'Turnover' (selling stocks frequently). Every time a fund sells at a profit, a tax event is triggered. In Bogle's world, taxes are simply another cost that erodes compounding.",
    features: [
      { icon: "✂️", label: "Turnover Drag", description: "Active funds often have 100% turnover, meaning they replace their whole portfolio every year, maximizing taxes." },
      { icon: "🛡️", label: "Index Efficiency", description: "Index funds rarely trade, allowing your gains to compound tax-efficiently for decades." },
    ],
    insightBox: "🏛️ Real wealth is built on what you KEEP, not what you make before the IRS/HMRC takes their share.",
  },

  // ════════════ SLIDE 12: PART 1 SUMMARY ════════════
  {
    type: "cta",
    background: "light",
    tag: "PART 1 SUMMARY",
    heading: "Simplicity",
    headingAccent: "Wins.",
    body: "We decoded the Gotrocks family, the difference between Enterprise and Emotion, and the brutal math of costs and taxes. Success isn't about complexity; it's about the relentless rules of arithmetic.",
    ctaText: "Follow @macroedge_in for more",
    nextTopic: "Stay Tuned — Part 2 Coming Soon",
    features: [
      { icon: "📐", label: "Humble Arithmetic", description: "Fees and taxes are the enemies of wealth." },
      { icon: "🏗️", label: "Business First", description: "Stocks are ownership in business, not casino chips." },
      { icon: "👨‍👩‍👧‍👦", label: "Fire the Helpers", description: "The more the industry takes, the less you keep." },
    ],
  },
];
