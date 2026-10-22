import type { SlideData } from "../carousel-types";

export const BOJ_RATE_HIKE: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "MACRO MEGA-EVENT",
    tagRight: "JUNE 2026",
    heading: "Japan Ends",
    headingAccent: "The Free Money Era.",
    body: "The Bank of Japan just raised rates to 1.0%—the highest level since 1995. The world's last anchor of 'zero-interest liquidity' has finally snapped. Here is what happens to global markets when the Yen stops being cheap.",
    levelBadge: "MACRO",
    topicNum: "BOJ",
    keywords: ["BOJ", "YEN", "CARRY TRADE", "INTEREST RATES", "LIQUIDITY", "JAPAN"],
    bullets: [
      "🇯🇵 The Historic 1.0% Rate Hike",
      "💴 The Yen Carry Trade Explained",
      "💣 The Risk of Global Contagion",
      "📉 Impact on Tech & US Equities",
      "🛡️ How to Position Your Portfolio",
    ],
  },

  // ═══════════════════ SLIDE 2: THE HIKE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE NUMBERS",
    heading: "Breaking a",
    headingAccent: "30-Year Habit.",
    body: "For decades, Japan fought deflation with 0% (or negative) interest rates. Today, driven by global energy shocks, they officially pivoted.",
    features: [
      { icon: "📈", label: "The Hike", description: "The BOJ raised the short-term rate by 25 basis points to 1.0%. It sounds small, but mathematically, the cost of borrowing Yen just exploded." },
      { icon: "🔥", label: "The Trigger", description: "Inflation imported from high energy costs (Middle East conflict) forced their hand. They had to defend the currency." },
      { icon: "🏛️", label: "The Central Bank", description: "Deputy Governor Shinichi Uchida led the meeting, signaling that further hikes depend heavily on global data and inflation stability." },
    ],
    insightBox: "💡 The Reality: Japan is no longer exporting deflation to the world. They are now exporting tighter liquidity.",
  },

  // ═══════════════════ SLIDE 3: THE CARRY TRADE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE MECHANICS",
    heading: "The World's Most",
    headingAccent: "Dangerous Trade.",
    body: "To understand why a 1.0% rate in Japan matters, you must understand the 'Yen Carry Trade'—the hidden engine of global liquidity.",
    features: [
      { icon: "💴", label: "Step 1: Borrow Cheap", description: "Hedge funds borrow Trillions of Japanese Yen because the interest rate was practically 0%." },
      { icon: "💱", label: "Step 2: Convert & Invest", description: "They sell the Yen to buy US Dollars, and invest those dollars into high-yield assets (US Tech Stocks, Treasuries, Crypto)." },
      { icon: "💰", label: "Step 3: Profit the Spread", description: "They make 5-10% on the US assets, pay 0% on the Yen loan, and pocket the difference risk-free. (Until it isn't)." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE UNWIND ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "SYSTEMIC RISK",
    heading: "The Nightmare",
    headingAccent: "Scenario: The Unwind.",
    body: "What happens when the 'Free Money' becomes expensive?",
    steps: [
      { number: "01", title: "Rates Rise", description: "The BOJ hikes rates to 1.0%. The cost to service the massive Yen loans instantly increases for hedge funds." },
      { number: "02", title: "Yen Appreciates", description: "As the rate gap closes, the Yen gets stronger against the Dollar. This destroys the 'Profit Margin' of the carry trade." },
      { number: "03", title: "Forced Liquidation", description: "To pay back the increasingly expensive Yen loans, funds are FORCED to sell their US Tech Stocks and Crypto en masse. Global markets crash." },
    ],
  },

  // ═══════════════════ SLIDE 5: THE IMMEDIATE REACTION ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "MARKET REACTION",
    heading: "A Bullet",
    headingAccent: "Dodged (For Now).",
    body: "The market was terrified of a sudden 'Unwind,' but the immediate reaction was surprisingly resilient. Why?",
    table: {
      headers: ["Asset", "Expected Reaction", "Actual Reaction (June 16)"],
      rows: [
        { cells: ["USD/JPY", "Crash below 150", "Held strong above 160"], highlight: false },
        { cells: ["Nikkei 225", "Massive Selloff", "Initial dip, then recovered"], highlight: true },
        { cells: ["US Equities", "Liquidation cascade", "Remained stable / Risk-on"], highlight: false },
        { cells: ["Global Bonds", "Yields Spike", "Orderly adjustment"], highlight: true },
      ],
      caption: "Because the market 'priced in' the hike, funds had already slowly reduced their leverage. The panic was averted.",
    },
  },

  // ═══════════════════ SLIDE 6: STRUCTURAL SHIFT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE MACRO VIEW",
    heading: "The End of",
    headingAccent: "Cheap Capital.",
    body: "Even without a sudden crash, the structural reality of the global financial system has permanently changed.",
    features: [
      { icon: "🩸", label: "Liquidity Drain", description: "Without the Bank of Japan printing free money to buy global assets, overall market liquidity will slowly dry up." },
      { icon: "🇺🇸", label: "US Treasury Pain", description: "Japan is the largest foreign holder of US Debt. If they can get 1% yield at home, they will stop buying US bonds, forcing US yields higher." },
      { icon: "🏢", label: "Zombie Companies", description: "In Japan, thousands of 'Zombie' corporations only survived because of 0% loans. At 1.0%, a wave of domestic bankruptcies is inevitable." },
    ],
    insightBox: "⚠️ The Era of 'Buying Everything' is over. We are entering an era of capital scarcity. Quality and cash flow will dictate winners.",
  },

  // ═══════════════════ SLIDE 7: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE COMPLETE PICTURE",
    heading: "The BOJ",
    headingAccent: "Cheat Sheet.",
    body: "Save this post. The tectonic plates of global finance just shifted.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📈", label: "The Event", description: "BOJ raises rates to 1.0% (Highest since 1995)." },
      { icon: "💴", label: "The Risk", description: "The unwinding of the multi-trillion dollar Yen Carry Trade." },
      { icon: "😌", label: "The Reaction", description: "Orderly. The market was prepared, preventing immediate panic." },
      { icon: "📊", label: "The Future", description: "Global liquidity tightening. Rotate out of speculative tech and into strong cash-flowing assets." },
    ],
  },
];
