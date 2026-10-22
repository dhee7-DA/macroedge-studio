import type { SlideData } from "@workspace/carousel-engine";

export const BOGLE_INVESTING_PT3: SlideData[] = [
  // ════════════ SLIDE 1: HERO ════════════
  {
    type: "hero",
    background: "dark",
    tag: "BOOK SERIES",
    tagRight: "PART 3 OF 3",
    heading: "The Practical",
    headingAccent: "Path Forward.",
    body: "The final chapters (13–18) of John Bogle's investment manifesto. We decode the role of bonds, navigate the complex world of ETFs, and reveal the final checklist of the 'Relentless Rules of Humble Arithmetic.' This is how you stop gambling and start winning.",
    levelBadge: "BOOKS",
    topicNum: "05",
    bullets: [
      "📚 Chapters 13 to 18",
      "🛡️ The Role of Bonds",
      "📊 The ETF Revolution",
      "👴 Graham’s Blessing",
      "📐 The Humble Arithmetic",
      "✅ The Final Checklist",
    ],
  },

  // ════════════ SLIDE 2: THE ROLE OF BONDS ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 13",
    heading: "Stability vs.",
    headingAccent: "Growth.",
    body: "Stocks are the engine of growth, but Bonds are the anchor of stability. Bogle argues that while long-term returns for bonds are lower, they are essential for protecting your portfolio from the violent swings of the equity market.",
    features: [
      { icon: "🛡️", label: "Capital Preservation", description: "Bonds provide a fixed stream of income and represent a contractual obligation, making them safer than equity ownership." },
      { icon: "⚖️", label: "The Balancing Act", description: "Your bond allocation should increase as you get older to protect the wealth you’ve already built." },
    ],
    insightBox: "💡 In a stock market crash, bonds are the only thing that let you sleep at night.",
  },

  // ════════════ SLIDE 3: BOND YIELDS DIAGRAM ════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE ARITHMETIC",
    heading: "The Math of",
    headingAccent: "Fixed Income.",
    body: "Bond returns are simpler than stocks. They consist of just two components: The interest payments (Yield) and the change in the bond's value.",
    diagram: [
      "    BOND TOTAL RETURN",
      " ",
      " [ CURRRENT YIELD ]",
      " (The interest you collect)",
      "         +",
      " [ CAPITAL CHANGE ]",
      " (Price moves from interest rates)",
      "         =",
      " [ TOTAL RETURN ]"
    ],
    insightBox: "📉 Rule: When interest rates go UP, the price of existing bonds goes DOWN. But the yield for new buyers goes UP.",
  },

  // ════════════ SLIDE 4: THE INDEXING TRAP ════════════
  {
    type: "steps",
    background: "light",
    tag: "CHAPTER 14",
    heading: "Beware the",
    headingAccent: "Complex Index.",
    body: "The industry has hijacked the word 'Index.' They now create complex 'Smart Beta' or 'Themed' index funds. Bogle warns that these are often just active management in disguise, designed to charge higher fees.",
    steps: [
      { number: "01", title: "The Marketing Hook", description: "A fund claims to use an 'Algorithm' or 'Theme' (like AI or Green Energy) to beat the standard market index." },
      { number: "02", title: "The Hidden Premium", description: "Because the fund is marketed as 'special' or 'optimized', it often carries several times the fee of a broad market index." },
      { number: "03", title: "The Reversion", description: "Complexity almost always leads to higher turnover and higher failure rates over the long term." },
    ],
    insightBox: "⚠️ If an index fund has 'Strategy' in its name, it’s probably not a true index fund.",
  },

  // ════════════ SLIDE 5: THE ETF REVOLUTION ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 15",
    heading: "The Good, Bad,",
    headingAccent: "and Ugly of ETFs.",
    body: "Exchange-Traded Funds (ETFs) are a double-edged sword. They provide index access but encourage the very thing Bogle hates: excessive trading and market timing.",
    features: [
      { icon: "✅", label: "The Good", description: "Instantly tradeable, low-cost access to broad markets like the S&P 500." },
      { icon: "❌", label: "The Bad", description: "The ability to trade intraday turns long-term investors into short-term speculators." },
      { icon: "🔥", label: "The Ugly", description: "Leveraged and Inverse ETFs are 'gambling chips', not investment vehicles." },
    ],
    insightBox: "🏗️ An ETF is a great tool, but only if you use it like a traditional mutual fund: buy it and NEVER sell it.",
  },

  // ════════════ SLIDE 6: BENJAMIN GRAHAM ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 16",
    heading: "The Father's",
    headingAccent: "Blessing.",
    body: "Benjamin Graham, the teacher of Warren Buffett, concluded at the end of his life that picking individual stocks was no longer worth the effort for most people.",
    bullets: [
      "🏛️ Graham admitted that markets had become too efficient.",
      "📉 He realized that active managers were mostly just trading with each other.",
      "✅ His final advice: Use a low-cost, diversified index fund for the bulk of your portfolio.",
    ],
    insightBox: "📜 When the smartest value investor in history tells you to index, you listen.",
  },

  // ════════════ SLIDE 7: THE HUMBLE ARITHMETIC RECAP ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 17",
    heading: "The Relentless",
    headingAccent: "Rules Recap.",
    body: "Success in investing is not about being a genius. it is about being an accountant. Bogle's master formula is the only thing that matters in the end.",
    diagram: [
      "   THE BOGLE ARITHMETIC",
      " ",
      " [ GROSS MARKET RETURN ]",
      " (What the business earned)",
      "         -",
      " [ INTERMEDIARY COSTS ]",
      " (Fees, Commisions, Turnover)",
      "         -",
      " [ TAXES ]",
      " (The cost of activity)",
      "         =",
      " [ YOUR NET WEALTH ]"
    ],
    insightBox: "🎯 You have no control over the Gross Return, but you have 100% control over the Costs and Taxes.",
  },

  // ════════════ SLIDE 8: THE FINAL CHECKLIST ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 18",
    heading: "The Master",
    headingAccent: "Rules for Life.",
    body: "Bogle leaves us with a set of rules to live by. If you follow these, you are virtually guaranteed to win the long-term game of wealth creation.",
    features: [
      { icon: "1️⃣", label: "Select Low-Cost Funds", description: "The expense ratio is the single best predictor of your future wealth." },
      { icon: "2️⃣", label: "Diversify to the Max", description: "Don't pick stocks; own the entire haystack." },
      { icon: "3️⃣", label: "Stay the Course", description: "The biggest threat to your portfolio is your own emotional reaction to short-term news." },
    ],
  },

  // ════════════ SLIDE 9: PRACTICAL STEPS ════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE ACTION PLAN",
    heading: "Start Today.",
    headingAccent: "Do Nothing.",
    body: "Counter-intuitively, the best thing you can do for your money is to stop 'doing' things. Here is the MacroEdge simplified Bogle action plan.",
    steps: [
      { number: "01", title: "Open a Brokerage", description: "Choose a low-cost provider like Vanguard, Fidelity, or Schwab." },
      { number: "02", title: "Automate", description: "Set up a monthly automatic purchase of a Total World or S&P 500 Index fund." },
      { number: "03", title: "Delete the App", description: "Stop checking the daily price. Come back in 30 years and claim your wealth." },
    ],
    insightBox: "⏳ Time is your friend; Impulse is your enemy.",
  },

  // ════════════ SLIDE 10: CONCLUSION ════════════
  {
    type: "cta",
    background: "light",
    tag: "THE ULTIMATE WISDOM",
    heading: "Own the",
    headingAccent: "Future.",
    body: "Investing is not a casino. It is the simple, common-sense act of owning the productive output of human ingenuity. By keeping your costs low and your patience high, you guarantee your fair share of the future.",
    ctaText: "Follow @macroedge_in for more",
    nextTopic: "Stay Tuned — More Deep Dives Coming",
    features: [
      { icon: "🏗️", label: "Enterprise Wins", description: "Dividends and growth are real; P/E swings are noise." },
      { icon: "📉", label: "Cost Kills", description: "Compounding fees will destroy your retirement." },
      { icon: "🧩", label: "Stay Simple", description: "The index fund is the ultimate financial tool." },
    ],
  },
];
