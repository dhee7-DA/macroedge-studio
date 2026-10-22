import type { SlideData } from "@workspace/carousel-engine";

export const BOGLE_INVESTING_PT2: SlideData[] = [
  // ════════════ SLIDE 1: HERO ════════════
  {
    type: "hero",
    background: "dark",
    tag: "BOOK SERIES",
    tagRight: "PART 2 OF 3",
    heading: "The Illusion",
    headingAccent: "of Selection.",
    body: "Decoding Chapters 7–12 of John Bogle's masterpiece. We explore why hunting for 'winning' funds is a mathematical trap and reveal the gravitational force of 'Reversion to the Mean.' Stop looking for the needle in the haystack—simply buy the haystack.",
    levelBadge: "BOOKS",
    topicNum: "04",
    bullets: [
      "📚 Chapters 7 to 12",
      "⚖️ Reversion to the Mean",
      "📍 The Selection Trap",
      "🌾 Don't Look for the Needle",
      "⭐ The Five-Star Myth",
      "💰 The Majesty of Simplicity",
    ],
  },

  // ════════════ SLIDE 2: REVERSION TO THE MEAN ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 7",
    heading: "The Gravity",
    headingAccent: "of Markets.",
    body: "Reversion to the Mean (RTM) is the most powerful law in finance. Any fund or stock that performs significantly better than the market average is naturally pulled back toward the average over time. High performance is usually a result of luck or a temporary style 'trend' that eventually fades.",
    features: [
      { icon: "⚖️", label: "The Iron Rule", description: "Trees don't grow to the sky. Excess returns almost always vanish as competition and size increase." },
      { icon: "📉", label: "Mean Reversion", description: "If a fund beats the market by 10% this year, it is statistically likely to underperform or just match the market next year." },
    ],
    insightBox: "💡 In investing, 'the first shall be last and the last shall be first' is an institutional reality.",
  },

  // ════════════ SLIDE 3: RTM DIAGRAM ════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE DATA",
    heading: "The Gravitational",
    headingAccent: "Pull.",
    body: "Visualize how the top-performing 'star' funds of yesterday almost always dive back down into the average (or below it) over the next decade.",
    diagram: [
      " PERF % |        [ THE MEAN ]",
      "       |             .",
      " HIGH  |   * (Winning Fund)  ",
      "       |    \\        .",
      "       |     \\       .",
      " AVG   |------\\------*------- [ MARKET ]",
      "       |       \\     .",
      "       |        \\    .",
      " LOW   |         * (The Reversion)",
      "       +------------------------------>",
      "                     TIME"
    ],
    insightBox: "⚠️ Never confuse a bull market with brains. Most 'genius' managers are simply riding a lucky wave.",
  },

  // ════════════ SLIDE 4: THE SELECTION TRAP ════════════
  {
    type: "steps",
    background: "light",
    tag: "CHAPTER 8 & 9",
    heading: "The Star",
    headingAccent: "Rating Trap.",
    body: "Investors flock to funds with '5-star' ratings from Morningstar. But these ratings are a record of PAST performance, not a predictor of FUTURE results. In fact, many 5-star funds become 1-star funds in the years after they reach their peak.",
    steps: [
      { number: "01", title: "Wait for the Peak", description: "A fund achieves massive luck. It hits the 5-star rating. All the retail money floods in." },
      { number: "02", title: "Assets Explode", description: "The fund becomes too large. It can no longer buy small, fast-growing stocks. It becomes a 'closet indexer' with higher fees." },
      { number: "03", title: "The Crash", description: "The luck runs out. The style falls out of favor. The high-fee structure eats the returns. The fund underperforms for a decade." },
    ],
    insightBox: "📊 Buying yesterday's winners is the most common way to guarantee today's losses.",
  },

  // ════════════ SLIDE 5: THE HAYSTACK PARABLE ════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE BOGLE WAY",
    heading: "Buy the",
    headingAccent: "Haystack.",
    body: "Mainstream finance tells you to look for the 'needle' (the one stock or fund that will beat the market). Bogle’s common sense tells you: 'The needle is impossible to find. Simply buy the whole haystack.'",
    features: [
      { icon: "🌾", label: "The Haystack", description: "The entire stock market (e.g., S&P 500 or Total Stock Market Index)." },
      { icon: "📍", label: "The Needle", description: "The single 'winning' manager or stock that outperforms for 20 years. (Almost non-existent)." },
    ],
    insightBox: "🌾 By owning the haystack, you are guaranteed to own the needle, without the cost of the search.",
  },

  // ════════════ SLIDE 6: THE ADVICE PARADOX ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 10",
    heading: "The Advice",
    headingAccent: "Conflict.",
    body: "Why don't advisors tell you to buy index funds? Because an index fund pays them zero commission. The industry is built on a 'Conflict of Interest' where you are sold products that benefit the salesman, not your portfolio.",
    features: [
      { icon: "🗣️", label: "Sales Incentives", description: "Advisors are often incentivized to push high-fee actively managed funds because they get a 'kickback' or trailer fee." },
      { icon: "🛡️", label: "Fiduciary vs Sales", description: "Always ask: 'Are you a fiduciary required by law to put my interests first?'" },
    ],
    insightBox: "💼 It is difficult to get a man to understand something when his salary depends upon his not understanding it.",
  },

  // ════════════ SLIDE 7: COST AS A PREDICTOR ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 11",
    heading: "The Only Sure",
    headingAccent: "Predictor.",
    body: "You cannot predict which manager will be smart. You cannot predict which stock will win. But you CAN predict exactly how much you will pay in fees. Therefore, cost is the single best predictor of your future wealth.",
    diagram: [
      "    COST VS. PERFORMANCE",
      " ",
      " LOW COST FUND (0.1% FEE)",
      " [$$$$$$$$$$$$$$$$$$$$] YOU KEEP",
      " [ ] HELPERS TAKE",
      " ",
      " HIGH COST FUND (2.0% FEE)",
      " [$$$$$$$$$$$$] YOU KEEP",
      " [$$$$$$$$] HELPERS TAKE"
    ],
    insightBox: "💸 The less you pay, the more you keep. This is the only guarantee in the stock market.",
  },

  // ════════════ SLIDE 8: THE MAJESTY OF SIMPLICITY ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 12",
    heading: "The Majesty",
    headingAccent: "of Simplicity.",
    body: "Complex strategies are designed to charge complex fees. Bogle advocates for the 'Majesty of Simplicity.' A single low-cost index fund provides diversification, low turnover, and institutional-level performance with zero effort.",
    features: [
      { icon: "🧩", label: "Diversification", description: "Owning 500 or 3,000 stocks means you have zero company-specific risk." },
      { icon: "🔄", label: "No Turnover", description: "Index funds don't trade unless a company enters or leaves the index. This maximizes tax efficiency." },
      { icon: "🛡️", label: "Peace of Mind", description: "You stop worrying about 'beating' the market and start growing WITH the market." },
    ],
  },

  // ════════════ SLIDE 9: THE SURVIVAL DATA ════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE UGLY TRUTH",
    heading: "The Survival",
    headingAccent: "Statistics.",
    body: "Data over multiple decades shows that the odds of active management beating the market are overwhelmingly low. The vast majority of funds either fail to survive or fail to match the index.",
    features: [
      { icon: "💀", label: "Liquidation", description: "A significant majority of managed funds are quietly shut down due to poor performance, never reaching their long-term goals." },
      { icon: "📉", label: "Underperformance", description: "Of the remaining funds, most fail to match the total return of the broad market index." },
      { icon: "🏆", label: "The Rare Winners", description: "Only a tiny fraction of funds achieve sustained excellence. The probability of picking them in advance is nearly zero." },
    ],
    insightBox: "🎲 Diversified indexing isn't just a strategy; it's the mathematical high ground.",
  },

  // ════════════ SLIDE 10: PART 2 SUMMARY ════════════
  {
    type: "cta",
    background: "light",
    tag: "PART 2 SUMMARY",
    heading: "Stop",
    headingAccent: "Searching.",
    body: "We decoded Reversion to the Mean, exposed the Star Rating trap, and revealed why buying the haystack is the only logical choice.",
    ctaText: "Follow @macroedge_in for more",
    nextTopic: "Stay Tuned — Part 3 Coming Soon",
    features: [
      { icon: "⚖️", label: "RTM is Real", description: "Yesterday's winners are tomorrow's laggards." },
      { icon: "💰", label: "Fees Predict Everything", description: "Low costs = High returns." },
      { icon: "🧩", label: "Keep it Simple", description: "Complex plans benefit the seller, not the buyer." },
    ],
  },
];
