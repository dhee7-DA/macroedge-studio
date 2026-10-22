import type { SlideData } from "@workspace/carousel-engine";

export const MASTERING_CYCLES_PT3: SlideData[] = [
  // ════════════ SLIDE 1: HERO ════════════
  {
    type: "hero",
    background: "dark",
    tag: "BOOK SERIES",
    tagRight: "PART 3 OF 3",
    heading: "Positioning &",
    headingAccent: "Action.",
    body: "The final chapters of Howard Marks' Masterclass (Chapters 13–18). We know that cycles exist. We know the pendulum swings from greed to fear. But how do you actually make money from this knowledge? It comes down to one critical skill: calibrating your portfolio's aggressiveness to the temperature of the market.",
    levelBadge: "BOOKS",
    topicNum: "04",
    bullets: [
      "📚 Chapters 13 to 18",
      "🌡️ Measuring the Market",
      "🛡️ Aggressive vs Defensive",
      "⏳ The Trap of Timing",
      "🏆 The Cycle in Success",
      "🧩 The Ultimate Conclusion",
    ],
  },

  // ════════════ SLIDE 2: THE COPING STRATEGY ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 13",
    heading: "Taking the",
    headingAccent: "Temperature.",
    body: "You cannot accurately predict what will happen next month or next year. But you absolutely can, and must, figure out where you are *right now*. Marks calls this taking the temperature of the market.",
    features: [
      { icon: "🌡️", label: "Hot Markets", description: "Investors are eager. Asset prices are flawless. Credit is easy. Everything is priced for perfection. (Time to play defense)." },
      { icon: "❄️", label: "Cold Markets", description: "Investors are terrified. No one can get a loan. Assets are priced for bankruptcy. (Time to play offense)." },
    ],
    insightBox: "💡 You don't need a crystal ball to see if a market is dangerously hot. You just need to look around.",
  },

  // ════════════ SLIDE 3: THE TEMPERATURE CHECKLIST MEASUREMENT ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 13",
    heading: "The Rationality",
    headingAccent: "Checklist.",
    body: "Marks uses a mental checklist to determine where we are in the cycle. Read these pairs. Which side describes the market today?",
    diagram: [
      "   [ LOW RISK / BOTTOM ]         [ HIGH RISK / PEAK ]",
      " ",
      "      Pessimism     < ─── >     Optimism",
      "      Fear          < ─── >     Greed",
      "      Skepticism    < ─── >     Credulity",
      "      Risk Aversion < ─── >     Risk Tolerance",
      "      Capital Starved < ── >    Capital Flooded",
      "      Tight Credit  < ─── >     Easy Credit",
      "      Nobody Buying < ─── >     Everyone Buying"
    ],
    insightBox: "🎯 If the market is entirely on the right side of this checklist, you must immediately reduce risk.",
  },

  // ════════════ SLIDE 4: THE TWIN RISKS ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 14",
    heading: "The Twin",
    headingAccent: "Risks.",
    body: "Every investor must constantly balance two opposing fears. The key to cycle positioning is deciding which of these two risks you should be more afraid of at any given moment.",
    features: [
      { icon: "💸", label: "Risk 1: Losing Money", description: "The fear of capital destruction. When the cycle is near a dangerous peak, this should be your overwhelming concern." },
      { icon: "📉", label: "Risk 2: Missing Out", description: "The fear of missing a massive rally. When the cycle is at rock bottom and assets are cheap, you must suppress Risk 1 and fully embrace Risk 2." },
    ],
  },

  // ════════════ SLIDE 5: CALIBRATING THE DIAL ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 14 (CORE)",
    heading: "The Aggressiveness",
    headingAccent: "Dial.",
    body: "Positioning is not binary. You don't go 100% to cash or 100% into stocks. You adjust a dial between Offense (capitalizing on opportunities) and Defense (protecting your capital).",
    diagram: [
      "      DEFENSE                       OFFENSE",
      " [ Protect Capital ] -------- [ Maximize Returns ]",
      " ",
      " WHEN WE ARE AT THE CYCLE PEAK:",
      "    Dial = 80% Defense  |  20% Offense",
      "    (Hold cash, buy high-quality bonds, sell junk)",
      " ",
      " WHEN WE ARE AT THE CYCLE TROUGH:",
      "    Dial = 10% Defense  |  90% Offense",
      "    (Buy distressed assets, use leverage, buy equities)"
    ],
    insightBox: "⚙️ Investing is entirely about calibrating this dial to match the current phase of the cycle.",
  },

  // ════════════ SLIDE 6: THE TIMING TRAP ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 15",
    heading: "The Limits of",
    headingAccent: "Coping.",
    body: "Even if you perfectly understand the cycle and know exactly where you are, it will still be painful. Why? Because you cannot time the exact top or the exact bottom.",
    steps: [
      { number: "01", title: "Early Looks Like Wrong", description: "If you sell because a market is dangerously overpriced, it might stay overpriced for two more years. You will look stupid as it keeps rising." },
      { number: "02", title: "Falling Knives", description: "If you buy because a market has crashed to bargain levels, it can easily crash another 20% tomorrow." },
      { number: "03", title: "The Contrarian Burden", description: "You guarantee long-term survival, but you surrender short-term social validation. It requires immense emotional discipline." },
    ],
    insightBox: "⚠️ Markets can remain irrational longer than you can remain solvent. Never use leverage to short a bubble.",
  },

  // ════════════ SLIDE 7: THE CYCLE IN SUCCESS ════════════
  {
    type: "concept",
    background: "dark",
    tag: "CHAPTER 16",
    heading: "Success Breeds",
    headingAccent: "Failure.",
    body: "There is even a cycle in the success of investors themselves. If a fund manager perfectly rides a cycle upward, the very seeds of their future destruction are planted in their success.",
    features: [
      { icon: "🏆", label: "The Track Record", description: "A manager achieves 40% returns by taking on huge, lucky risks in a bull market. The media calls them a genius." },
      { icon: "💰", label: "The Capital Influx", description: "Billions of dollars flood into their fund. But now they have too much money to deploy effectively into the same niche." },
      { icon: "📉", label: "The Reversion", description: "They are forced to abandon their discipline just as the cycle turns down. They lose everything." },
    ],
    insightBox: "👑 A brilliant track record usually means someone took the most risk right before a bull market. It does *not* mean they can survive a bear market.",
  },

  // ════════════ SLIDE 8: THE FUTURE ════════════
  {
    type: "concept",
    background: "light",
    tag: "CHAPTER 17",
    heading: "Will Cycles",
    headingAccent: "Ever End?",
    body: "In every decade, at the very peak of a boom, brilliant people argue that technology, central banks, or software have eliminated the cycle forever.",
    bullets: [
      "❌ 1929: 'Stocks have reached a permanently high plateau.'",
      "❌ 1999: 'The internet has eliminated the business cycle.'",
      "❌ 2006: 'Financial engineering has removed mortgage risk.'",
      "❌ 2021: 'Central banks will never let the market drop.'",
    ],
    insightBox: "🕰️ As long as humans are involved in investing, emotion will drive prices to extremes. The cycle is permanent.",
  },

  // ════════════ SLIDE 9: THE ESSENCE OF THIS BOOK ════════════
  {
    type: "cta",
    background: "dark",
    tag: "CHAPTER 18 / WRAP UP",
    heading: "The Essence of",
    headingAccent: "Cycles.",
    body: "You now understand Howard Marks' multi-billion dollar philosophy. Let's distill the entire 3-part framework into its core essence.",
    ctaText: "Save this carousel series",
    nextTopic: "Back to Home",
    features: [
      { icon: "🌊", label: "Pendulums Move", description: "Everything swings. From trend line, to euphoria, to depression, and back." },
      { icon: "🧠", label: "Psychology Drives Extremes", description: "Markets crash because humans are emotional, not because the economy broke." },
      { icon: "⚙️", label: "Calibrate Your Dial", description: "When the herd feels safe, you play defense. When the herd panics, you attack." },
    ],
  },
];
