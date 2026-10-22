import type { SlideData } from "@workspace/carousel-engine";

export const MASTERING_CYCLES_PT2: SlideData[] = [
  // ════════════ SLIDE 1: HERO ════════════
  {
    type: "hero",
    background: "dark",
    tag: "BOOK SERIES",
    tagRight: "PART 2 OF 3",
    heading: "The Psychology",
    headingAccent: "of Markets.",
    body: "Continuing Howard Marks' framework (Chapters 7–12). The math of the economy makes sense, so why do stock markets crash violently? The answer is human emotion. We dive into the Psychological Pendulum, the deadly Credit Cycle, and why the worst loans are always made during the best of times.",
    levelBadge: "BOOKS",
    topicNum: "03",
    bullets: [
      "📚 Chapters 7 to 12",
      "🧠 The Emotional Pendulum",
      "⚖️ Attitudes Toward Risk",
      "💳 The Credit Window",
      "🏢 The Real Estate Trap",
      "🔥 Distressed Debt Cycles",
    ],
  },

  // ════════════ SLIDE 2: THE PENDULUM ════════════
  {
    type: "steps",
    background: "light",
    tag: "CHAPTER 07",
    heading: "The Emotional",
    headingAccent: "Pendulum.",
    body: "If economies and profits swing moderately, what causes stock markets to swing so violently? Human psychology. Investor emotion swings like a pendulum, rarely resting at the happy medium. It is always swinging toward one of two extremes.",
    steps: [
      { number: "01", title: "Greed vs. Fear", description: "When times are good, investors feel greed and FOMO (Fear Of Missing Out). When times are bad, they feel sheer terror." },
      { number: "02", title: "Credulity vs. Skepticism", description: "At the peak, investors believe 'this time is different' and ignore all red flags. At the bottom, they see only doom and ignore all bargains." },
      { number: "03", title: "The Inevitable Snap", description: "A pendulum cannot swing in one direction forever. The extreme swing to euphoria MUST eventually result in an equal swing to panic." },
    ],
    insightBox: "⚖️ Markets spend very little time at 'fair value' because human psychology spends very little time being completely rational.",
  },

  // ════════════ SLIDE 3: PENDULUM DIAGRAM ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 07",
    heading: "The Swing of",
    headingAccent: "The Herd.",
    body: "In investing, the herd's psychology is predictably wrong at the extremes.",
    diagram: [
      "             [ Euphoria / Greed ]",
      "            /",
      "           /",
      "          /                             ",
      "         O  <-- (The Herd at the top)    ",
      "          \\                             ",
      "           \\                            ",
      "            \\                           ",
      "   [ Rational Center ]                  ",
      "              |                          ",
      "              |   ",
      "               \\   ",
      "                O  <-- (The Herd at the bottom)",
      "                 \\ ",
      "           [ Depression / Panic ]       "
    ],
    insightBox: "💡 You must learn to observe the swing. Are people around you acting with cautious skepticism, or reckless optimism?",
  },

  // ════════════ SLIDE 4: THE RISK CYCLE ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 08",
    heading: "The Illusion of",
    headingAccent: "Safety.",
    body: "Howard Marks' defining insight: Risk is NOT what the market feels it is. When everyone is terrified and selling, the market is actually the SAFEST, because prices have crashed to bargain levels. Conversely...",
    features: [
      { icon: "⚠️", label: "High Prices = High Risk", description: "When the economy is booming and everyone feels safe, asset prices are bid up to perfection. There is zero margin for error." },
      { icon: "🛡️", label: "Low Prices = Low Risk", description: "When the world feels like it's ending, assets are priced for bankruptcy. Any piece of 'less bad' news causes prices to soar." },
    ],
    insightBox: "🧠 The market is most dangerous precisely when it looks the most beautiful.",
  },

  // ════════════ SLIDE 5: RISK TOLERANCE ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 08",
    heading: "Risk Aversion vs",
    headingAccent: "Tolerance.",
    body: "Risk aversion is the primary component of a healthy market. It's the voice that asks, 'What could go wrong?' When risk aversion disappears, a massive bubble forms.",
    diagram: [
      "PHASE 1: Risk Aversion (Healthy)",
      "\"I will only buy this stock if it",
      " is cheap enough to protect me",
      " if things go wrong.\"",
      " ",
      "PHASE 2: Risk Tolerance (Dangerous)",
      "\"I will pay any price for this",
      " stock because it only goes up.\"",
      " ",
      "PHASE 3: Risk Blindness (The Peak)",
      "\"Risk doesn't exist anymore.",
      " The paradigm has shifted.\""
    ],
    insightBox: "💡 The worst investments are made when investors completely forget the concept of risk.",
  },

  // ════════════ SLIDE 6: THE CREDIT CYCLE ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 09 (CORE)",
    heading: "The Engine of",
    headingAccent: "Boom & Bust.",
    body: "While psychology swings the pendulum, the Credit Cycle is the fuel. Marks calls it the most volatile and influential of all cycles. It dictates whether businesses can grow, survive, or go bankrupt.",
    features: [
      { icon: "🟢", label: "The Window Opens", description: "Economy improves → Banks compete to lend → Interest rates drop → Lending standards fall. Anyone can get a loan." },
      { icon: "💸", label: "The Money Flood", description: "Companies gorge on cheap debt. They build factories, hire workers, and buy back stock. Asset prices explode." },
      { icon: "🛑", label: "The Window Slams Shut", description: "A shock happens. Banks instantly panic. They stop lending to EVERYONE. Debt cannot be refinanced." },
      { icon: "💥", label: "The Avalanche", description: "Good companies and bad companies alike fail simply because they cannot access cash." },
    ],
  },

  // ════════════ SLIDE 7: THE WORST LOANS ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 09",
    heading: "The Worst Loans Are",
    headingAccent: "Made at the Best Times.",
    body: "Why do banks lose so much money historically? Because when times are great, lending providers drop their standards to 'win' business from clients.",
    diagram: [
      "[ The Cycle of Bad Lending ]",
      " ",
      "1. \"We need to lend more to hit targets.\"",
      "        ↓",
      "2. \"But everyone good already has a loan!\"",
      "        ↓",
      "3. \"Let's lend to lower-quality borrowers.\"",
      "        ↓",
      "4. \"Let's remove the protective covenants.\"",
      "        ↓",
      "5. The economy slows down slightly...",
      "        ↓",
      "6. MASSIVE DEFAULTS."
    ],
    insightBox: "💼 Easy money causes the destruction of capital. Tight money causes the creation of value.",
  },

  // ════════════ SLIDE 8: DISTRESSED DEBT ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 10",
    heading: "The Cycle in",
    headingAccent: "Distressed Debt.",
    body: "When the credit window slams shut, a massive opportunity opens for a niche group of investors: Distressed Debt Buyers (which is exactly what Howard Marks does at Oaktree Capital).",
    steps: [
      { number: "01", title: "The Default Wave", description: "Companies who relied on cheap debt to survive suddenly find they cannot refinance. They default on their bonds." },
      { number: "02", title: "The Forced Selling", description: "Mutual funds and pension funds are legally required to sell defaulting bonds. They dump them on the market regardless of price." },
      { number: "03", title: "The Vulture Opportunity", description: "Smart money buys the debt of fundamentally good companies for pennies on the dollar, gaining control of the company during bankruptcy." },
    ],
    insightBox: "🦅 By being the only buyer when everyone else is forced to sell, distressed debt investors lock in massive, virtually risk-free returns.",
  },

  // ════════════ SLIDE 9: THE REAL ESTATE CYCLE ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 11",
    heading: "The Slow-Motion",
    headingAccent: "Real Estate Trap.",
    body: "The Real Estate cycle is unique because of one massive vulnerability: LEAD TIMES. It takes years to build a skyscraper, meaning supply and demand are almost *never* aligned.",
    features: [
      { icon: "🏗️", label: "The Boom Starts", description: "Economy improves. Office space gets tight. Rents skyrocket. Developers rush to build new towers." },
      { icon: "⏳", label: "The Long Wait", description: "It takes 3-5 years to secure financing, get permits, and build the tower. Everyone is building at once." },
      { icon: "🏢", label: "The Glut Arrives", description: "By the time the towers actually open 4 years later, the economy has cooled. Suddenly there is massive oversupply and no renters." },
    ],
    insightBox: "🏗️ You cannot stop a skyscraper halfway. The capital is already spent. This leads to spectacular crashes in commercial real estate.",
  },

  // ════════════ SLIDE 10: PUTTING IT ALL TOGETHER ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 12",
    heading: "The Unified",
    headingAccent: "Market Cycle.",
    body: "The overall Stock Market Cycle is simply the violent collision of ALL the underlying cycles happening simultaneously.",
    bullets: [
      "📈 The Economic Cycle dictates the baseline.",
      "💵 The Credit Cycle determines who survives and who expands.",
      "🏢 The Real Estate Cycle dictates construction and capital.",
      "🏦 The Profits Cycle acts as the leverage whip.",
      "🧠 The Psychological Pendulum decides whether investors will pay 50x earnings or 5x earnings for the EXACT SAME ASSET.",
    ],
    insightBox: "🧩 Understanding the Market Cycle means figuring out where each of these sub-cycles currently sits.",
  },

  // ════════════ SLIDE 11: SUMMARY ════════════
  {
    type: "cta",
    background: "dark",
    tag: "PART 2 SUMMARY",
    heading: "Emotion & Credit",
    headingAccent: "Rule the System.",
    body: "We decoded how the Psychological Pendulum destroys rationality, why risk is highest when the world feels safest, and how the Credit Cycle fuels every boom and bust. In Part 3, we reveal exactly how you can position your portfolio to exploit these cycles.",
    ctaText: "Follow @macroedge_in for Part 3",
    nextTopic: "Mastering the Market Cycle: Part 3",
    features: [
      { icon: "💸", label: "Credit Window", description: "Easy money creates bad investments." },
      { icon: "🦅", label: "Distressed Debt", description: "The greatest fortunes are made buying from forced sellers." },
      { icon: "⏳", label: "Lead Times", description: "Real estate crashes happen because supply arrives 4 years too late." },
    ],
  },
];
