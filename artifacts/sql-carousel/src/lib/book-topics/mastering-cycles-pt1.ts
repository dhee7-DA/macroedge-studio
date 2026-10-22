import type { SlideData } from "@workspace/carousel-engine";

export const MASTERING_CYCLES_PT1: SlideData[] = [
  // ════════════ SLIDE 1: HERO ════════════
  {
    type: "hero",
    background: "dark",
    tag: "BOOK SERIES",
    tagRight: "PART 1 OF 3",
    heading: "Mastering the",
    headingAccent: "Market Cycle.",
    body: "An in-depth summary of Howard Marks' legendary framework (Chapters 1–6). We decode the Illusion of Prediction, reconstruct the Secular Trend Line, and reveal why economies and corporate profits are imprisoned in endless, repeating waves. You can't predict the future, but you can prepare for it.",
    levelBadge: "BOOKS",
    topicNum: "02",
    bullets: [
      "📚 Chapters 1 to 6",
      "📈 The Secular Trend",
      "📊 The Illusion of Prediction",
      "🏦 The Economic Cycle",
      "🏛️ Central Bank Interference",
      "💵 The Cycle in Profits",
    ],
  },

  // ════════════ SLIDE 2: THE HOOK ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 01",
    heading: "The Illusion of",
    headingAccent: "Forecasts.",
    body: "Most investors obsess over forecasting what will happen tomorrow. Will the market go up? Will inflation drop? Howard Marks argues that macro-forecasting is essentially guessing. The world is too complex, with too many underlying variables to consistently and accurately predict.",
    features: [
      { icon: "❌", label: "Predicting is Impossible", description: "You cannot accurately predict what events will happen next in the world or how the market will respond." },
      { icon: "✅", label: "Positioning is Possible", description: "You CAN figure out where the market is currently situated in its cycle, and position your portfolio to survive." },
    ],
    insightBox: "💡 Rule #1: We never know where we're going, but we ought to know exactly where we are.",
  },

  // ════════════ SLIDE 3: THE NATURE OF CYCLES ════════════
  {
    type: "steps",
    background: "dark",
    tag: "CHAPTER 02",
    heading: "The Causality",
    headingAccent: "Chain.",
    body: "Cycles aren't just a series of random up-and-down events. They are inextricably linked causal chains. Event A doesn't just happen *before* Event B — Event A *causes* Event B. It is an endless feedback loop.",
    steps: [
      { number: "01", title: "Success Breeds Excess", description: "Prosperity and good times make people complacent. They take on more debt, accept lower margins of safety, and increase risk." },
      { number: "02", title: "Excess Breeds Ruin", description: "The system becomes stretched too tight. A trigger event causes the fragile, over-leveraged system to violently correct." },
      { number: "03", title: "Ruin Breeds Value", description: "Fear peaks. Assets are dumped below their intrinsic value. Smart money buys, laying the foundation for the next recovery." },
    ],
    insightBox: "🔄 Cycles are self-correcting. The greatest threat to a bull market is a bull market.",
  },

  // ════════════ SLIDE 4: THE TREND LINE DIAGRAM ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 03",
    heading: "The Secular",
    headingAccent: "Trend Line.",
    body: "Marks' philosophy is anchored in one core mental model: The Secular Trend Line. The baseline of human progress (GDP, corporate profits, population growth, technological advancement) moves in a straight line upward over decades. It's stable, slow, and relatively boring.",
    diagram: [
      "        SECULAR LONG-TERM TREND",
      "              (Progress)",
      "                         *",
      "                       *",
      "                     *",
      "                   *",
      "                 *",
      "               *",
      "             *",
      "           *",
      "         *"
    ],
    insightBox: "📈 The underlying trend of the global economy is an upward slope of roughly 2–3% per year. But that's not the path markets actually take.",
  },

  // ════════════ SLIDE 5: THE CYCLE AROUND THE TREND ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 03",
    heading: "Deviations From",
    headingAccent: "The Trend.",
    body: "Human emotion prevents us from traveling smoothly along the trend line. We swing wildly *above* it in fits of euphoria, and plunge *below* it in moments of terror. The 'cycle' is simply the oscillation around the trend.",
    diagram: [
      "            [Euphoria / Peak]      ",
      "             .-'´`-.    [Secular Trend]",
      "           .'   ↑   `.       *",
      "          /   Excess  \\    *",
      "         ;'             `*'",
      "       *'                 .",
      "     *                     \\   ↓  [Depression / Trough]",
      "   *                        `. '",
      " *                            `--' "
    ],
    insightBox: "⚖️ The wider the swing above the trend line, the more violent the eventual swing below it.",
  },

  // ════════════ SLIDE 6: THE ECONOMIC CYCLE ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 04",
    heading: "The Breathing",
    headingAccent: "Economy.",
    body: "The Economic Cycle represents GDP growth. It is the underlying engine of all other cycles. Long-term GDP is simply 'Number of workers' × 'Output per worker'. Changes in demographics and productivity take decades, yet yearly GDP fluctuates wildly.",
    features: [
      { icon: "📈", label: "The Up-Cycle (Recovery)", description: "Consumers feel wealthy, spending increases, inventories drop, factories hire more, wages begin to rise." },
      { icon: "🛑", label: "The Peak (Overheating)", description: "Demand outstrips the limits of supply. Inflation rises. Labor shortages trigger cost spikes." },
      { icon: "📉", label: "The Down-Cycle (Contraction)", description: "Inflation eats spending power. Layoffs begin. Demand collapses as businesses slash orders." },
      { icon: "🟢", label: "The Trough (Reset)", description: "Excess inventory is finally cleared. Debts are washed out. The system resets for new growth." },
    ],
  },

  // ════════════ SLIDE 7: THE GOVERNMENT TRAP ════════════
  {
    type: "steps",
    background: "dark",
    tag: "CHAPTER 05",
    heading: "Central Bank",
    headingAccent: "Intervention.",
    body: "Left alone, economic cycles swing to brutal extremes. Governments and central banks (like the Federal Reserve) step in to manage the cycle. Their goal is to 'flatten the curve' and prevent devastating lows, but this creates dangerous side effects.",
    steps: [
      { number: "01", title: "Fighting the Highs", description: "When the economy runs too hot (inflation), the Fed raises interest rates. Borrowing becomes expensive, cooling the market down." },
      { number: "02", title: "Fighting the Lows", description: "When the economy stalls (recession), the Fed cuts interest rates to zero to stimulate borrowing and consumption." },
      { number: "03", title: "Moral Hazard", description: "By constantly bailing out the market during the 'Lows', the Fed incentivizes investors to take insane risks, believing the government will always save them." },
    ],
    insightBox: "🏛️ You cannot eliminate the economic cycle; you can only delay it. Delaying a natural cycle almost always makes the eventual correction much worse.",
  },

  // ════════════ SLIDE 8: THE PROFITS CYCLE ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 06",
    heading: "The Volatility of",
    headingAccent: "Profits.",
    body: "If GDP only drops by 2% in a recession, why do stock market profits collapse by 40%? Because corporate profits are heavily leveraged. Marks calls this the 'Leverage Whip'. A small bump in the economic trend creates a massive swing in the profits cycle.",
    features: [
      { icon: "🏭", label: "Operational Leverage", description: "Companies have fixed costs (rent, factory maintenance, core salaries). If sales drop 10%, those fixed costs stay static, meaning sheer profit can evaporate by 50% instantly." },
      { icon: "💵", label: "Financial Leverage", description: "Companies use debt to grow and fund operations. Interest payments are non-negotiable. In a downturn, paying debt devours whatever cash flow is left." },
      { icon: "📊", label: "The Resulting Cycle", description: "Because of these levers, the Profit Cycle swings MUCH wider, much faster, and much more violently than the underlying GDP Economic Cycle." },
    ],
  },

  // ════════════ SLIDE 9: PROFITS VS GDP DIAGRAM ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 06",
    heading: "The Output",
    headingAccent: "Gap.",
    body: "When the economy dips just slightly, operational leverage acts as an amplifier. Corporate earnings dive significantly faster than GDP, wiping out margins.",
    diagram: [
      "    ↑",
      " P  |          .-[ Profits Peak ]-.",
      " E  |         /                    \\",
      " R  |        /   .[ GDP Peak ].     \\",
      " C  |       /   /              \\     \\",
      " E  |------/---/----------------\\-----\\-- [ Baseline ]",
      " N  |     /   /                  \\     \\",
      " T  |    /   '-[ GDP Trough ]-'   \\     \\",
      "    |   /                          \\     \\",
      "    +--'--[ Profits Trough ]--------'-----'-->",
      "                    TIME"
    ],
    insightBox: "💡 The stock market is a market of corporate profits, not a market of GDP. This is why markets crash even when the economy only 'slows down'.",
  },

  // ════════════ SLIDE 10: SUMMARY OF PART 1 ════════════
  {
    type: "cta",
    background: "light",
    tag: "PART 1 SUMMARY",
    heading: "The Clock is",
    headingAccent: "Always Ticking.",
    body: "We mapped the Secular Trend, explored why you cannot accurately forecast the future, and decoded why corporate profits swing violently around underlying economic reality. In Part 2, we introduce the most dangerous variable in the entire system: Human Psychology.",
    ctaText: "Follow @macroedge_in for Part 2",
    nextTopic: "Mastering the Market Cycle: Part 2",
    features: [
      { icon: "📊", label: "Positioning Over Prediction", description: "Don't guess where we're going. Figure out where we are." },
      { icon: "🏛️", label: "Intervention Costs", description: "Central Banks only delay the wash-out phase." },
      { icon: "📈", label: "Leverage Magnifies", description: "Profits are mathematically more volatile than the economy." },
    ],
  },
];
