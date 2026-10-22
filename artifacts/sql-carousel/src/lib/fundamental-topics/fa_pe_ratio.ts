import type { SlideData } from "../carousel-types";

export const FA_PE_RATIO: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "FUNDAMENTAL ANALYSIS — PART 01",
    tagRight: "BEGINNER → INTERMEDIATE",
    heading: "The P/E Ratio.",
    headingAccent: "Everything You Think You Know Is Wrong.",
    body: "It is the single most-quoted number in investing. It is also the single most-misread. After this — you will never read a P/E ratio the same way again.",
    levelBadge: "STOCKS",
    topicNum: "FA-01",
    keywords: [
      "P/E", "EARNINGS", "VALUATION", "EPS", "FORWARD", "TRAILING",
      "MULTIPLE", "SECTOR", "GROWTH", "CHEAP", "EXPENSIVE", "RATIO",
    ],
    bullets: [
      "📐 Trailing vs Forward",
      "🏭 Sector Relativity",
      "⚠️ The Value Traps",
      "📈 Multiple Expansion",
      "🎯 The Institutional Play",
    ],
  },

  // ═══════════════════ SLIDE 2: THE FOUNDATION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE FOUNDATION",
    heading: "What Is It?",
    headingAccent: "(And The 2 Types)",
    body: "P/E (Price-to-Earnings) is simply the price tag on a company's profit stream. A P/E of 20 means you are paying $20 today for every $1 the company earns annually.",
    features: [
      { icon: "📐", label: "The Formula", description: "Stock Price ÷ Earnings Per Share (EPS)." },
      { icon: "📅", label: "Trailing P/E", description: "Uses actual, reported earnings from the last 12 months. It is real and audited, but looks backward." },
      { icon: "🔭", label: "Forward P/E", description: "Uses analyst-estimated future earnings. Useful for valuation, but dangerous if the company misses estimates." },
    ],
    insightBox: "💡 The Trap: If Forward P/E is low, the stock looks cheap. But if they miss earnings next quarter, that 'cheap' stock instantly becomes expensive.",
  },

  // ═══════════════════ SLIDE 3: HOW TO READ IT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE SECTOR RULE",
    heading: "High vs Low.",
    headingAccent: "Context is Everything.",
    body: "Most people think low P/E = cheap and high P/E = expensive. This is dangerously wrong. You MUST compare within the sector — never across it.",
    features: [
      { icon: "💻", label: "Tech & Software (20–35x+)", description: "High margins, asset-light. A 30x P/E is normal. Investors pay a premium today for massive expected growth tomorrow." },
      { icon: "🏦", label: "Banks & Finance (10–15x)", description: "Capital-intensive and heavily regulated. A bank trading at a 30x P/E would be a massive red flag." },
      { icon: "🟢", label: "The Low P/E Danger", description: "A stock under 10x P/E is rarely a 'hidden gem'. It usually means it's a mature business, a declining sector, or carries a hidden risk." },
    ],
  },

  // ═══════════════════ SLIDE 4: VALUE TRAPS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE TRAPS",
    heading: "When The",
    headingAccent: "P/E Lies.",
    body: "The P/E ratio breaks down in three specific scenarios. Missing these is how retail investors get trapped holding the bag.",
    features: [
      { icon: "🔄", label: "Cyclical Peaks", description: "A low P/E in a commodity boom (like Oil or Steel) is a warning, not a buy signal. When prices normalize, earnings crater and the stock crashes." },
      { icon: "🧾", label: "One-Time Gains", description: "If a company sells a massive asset, Net Income spikes. The P/E drops and looks 'cheap', but that profit isn't repeatable next year." },
      { icon: "📊", label: "Accounting Manipulation", description: "Companies can legally inflate Earnings (the 'E') using depreciation or inventory tricks. P/E hides this. Free Cash Flow does not." },
    ],
  },

  // ═══════════════════ SLIDE 5: MULTIPLE EXPANSION ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE HIDDEN DRIVER",
    heading: "Expansion &",
    headingAccent: "Compression.",
    body: "A stock can rise 30% even if earnings don't grow at all. Or fall 30% even if profits are fine. This is multiple expansion and compression.",
    features: [
      { icon: "📈", label: "P/E Expansion (Going Up)", description: "Investors become willing to pay more per dollar of earnings. Driven by: Falling interest rates, liquidity surges, or AI/Tech hype." },
      { icon: "📉", label: "P/E Compression (Going Down)", description: "Investors demand a lower multiple. Driven by: Rising interest rates, Fed tightening, or recession fears." },
      { icon: "🔍", label: "The Real Bull Market", description: "If a stock's earnings are growing AND its P/E is expanding, you get exponential returns. If only P/E is expanding (flat earnings), the rally is fragile." },
    ],
  },

  // ═══════════════════ SLIDE 6: EARNINGS YIELD ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE INSTITUTIONAL PLAY",
    heading: "Flip It.",
    headingAccent: "Use Earnings Yield.",
    body: "Professionals rarely say 'P/E of 25x.' They flip the formula (1 ÷ P/E) to get the Earnings Yield. This allows you to compare stocks directly to Bonds.",
    features: [
      { icon: "🔄", label: "The Flip", description: "A P/E of 25x = 4% Earnings Yield (1 ÷ 25). A P/E of 10x = 10% Earnings Yield. This is the return you earn on each dollar invested." },
      { icon: "🏦", label: "The Fed Model", description: "Compare this yield to the 10-Year Treasury risk-free rate (currently ~4.5%). If a stock yields 4% and a risk-free bond yields 4.5%, the stock is dangerously expensive." },
      { icon: "✅", label: "The Equity Risk Premium", description: "Warren Buffett uses this. You only buy the stock if its Earnings Yield is significantly higher than the Bond Yield to compensate you for the risk." },
    ],
  },

  // ═══════════════════ SLIDE 7: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE COMPLETE PICTURE",
    heading: "The P/E",
    headingAccent: "Cheat Sheet.",
    body: "Save this post. You now know more about the P/E ratio than 90% of retail investors.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📐", label: "The Formula", description: "Price ÷ EPS. What you pay per dollar of profit." },
      { icon: "📅", label: "The Versions", description: "Trailing = verified past. Forward = predicted future." },
      { icon: "🏭", label: "The Rule", description: "Compare within the same sector, never across them." },
      { icon: "🏦", label: "The Pro Move", description: "Flip it to Earnings Yield (1 ÷ P/E) and compare it to the Treasury Yield." },
    ],
  },
];
