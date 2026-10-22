import type { SlideData } from "@workspace/carousel-engine";

export const RUPEE_COLLAPSE: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "BREAKING INTELLIGENCE",
    tagRight: "INDIA × CURRENCY × MACRO",
    heading: "₹95.",
    headingAccent: "Record Low.",
    body: "The Indian rupee hit 95.34 against the dollar today. A new all-time low. Here is what is really happening — and what it means for your money.",
    levelBadge: "MACRO",
    topicNum: "01",
    keywords: [
      "RUPEE", "FOREX", "RBI", "OIL", "FII", "DOLLAR",
      "SENSEX", "INFLATION", "CAD", "EMI", "BRENT", "RESERVES",
    ],
    bullets: [
      "📉 Rupee at 95.34",
      "🛢️ Oil at $125",
      "💸 FII Outflows $20B",
      "🏦 RBI Fighting Back",
      "🇮🇳 India Impact",
    ],
  },

  // ═══════════════════ SLIDE 2: THE NUMBER ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE DATA",
    heading: "How Bad",
    headingAccent: "Is It?",
    body: "April 30, 2026. The rupee broke 95 for the first time in history. Here are the numbers that matter.",
    features: [
      { icon: "📉", label: "₹95.34 / Dollar — Lifetime Low", description: "Record intraday low on April 30. RBI intervened but could not stop the slide." },
      { icon: "📊", label: "Sensex: -583 pts → 76,913", description: "Indian equities fell 0.75% on the same day. Double hit for investors." },
      { icon: "💵", label: "FII Outflows: $20B in 4 Months", description: "Foreign institutions have been selling India relentlessly since January 2026." },
      { icon: "🛢️", label: "Brent Crude: $120–126 / barrel", description: "The highest since 2022. India imports 85–88% of its crude. Every dollar matters." },
    ],
    insightBox: "📊 A weak rupee + high oil = double squeeze. India pays more dollars for oil, which weakens the rupee further.",
  },

  // ═══════════════════ SLIDE 3: WHY IS IT FALLING ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE CAUSE",
    heading: "Why Is The",
    headingAccent: "Rupee Falling?",
    body: "Three forces hit simultaneously. Each alone is manageable. Together, they are a currency crisis.",
    features: [
      { icon: "🛢️", label: "Oil at $125 — Dollar Demand Surge", description: "India buys $180B+ in oil per year. At $125/barrel, that bill explodes — and all of it is paid in dollars." },
      { icon: "📤", label: "FII Exodus — $20B Out", description: "Foreign funds are selling Indian stocks and bonds. Every exit converts rupees to dollars, pressuring the rate." },
      { icon: "🏦", label: "Fed Stays High — Dollar Strengthens", description: "The Fed held at 3.5–3.75% yesterday. Higher US rates make the dollar attractive globally — EMs like India lose." },
    ],
    insightBox: "⚡ All three triggers fired at once: oil shock + FII exit + strong dollar. The rupee had nowhere to go but down.",
    footnote: "Sources: Angel One, Financial Express, RBI Forex Intervention Statement (April 2026).",
  },

  // ═══════════════════ SLIDE 4: THE OIL CONNECTION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE OIL LINK",
    heading: "India's",
    headingAccent: "Oil Problem.",
    body: "India is the world's 3rd largest oil importer. Every $10 rise in oil = $12–15B more in import costs per year. At $125, the math is brutal.",
    features: [
      { icon: "🛢️", label: "Oil Dependency: 85–88% Imported", description: "India produces almost no crude domestically. Every barrel at $125 is paid in dollars." },
      { icon: "💸", label: "Every $10 Oil Rise = $12–15B Cost", description: "That is the direct annual addition to India's import bill — and direct rupee pressure." },
      { icon: "🔄", label: "The Feedback Loop", description: "More dollars needed → rupee falls → oil costs even more in rupees → inflation rises → RBI squeezed." },
      { icon: "🔗", label: "Linked to Hormuz & UAE Exit", description: "Hormuz disruption keeps oil high. UAE's OPEC exit supply is still blocked. No relief coming soon." },
    ],
    insightBox: "🎯 India is caught between two crises it did not create: the Iran conflict and the OPEC fracture.",
  },

  // ═══════════════════ SLIDE 5: FII OUTFLOWS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "FOREIGN MONEY EXODUS",
    heading: "$20 Billion",
    headingAccent: "Left India.",
    body: "FIIs have pulled out over $20 billion from Indian equity and debt markets in just 4 months. This is one of the biggest outflow cycles in a decade.",
    features: [
      { icon: "📤", label: "Equity Outflows: Dominant", description: "FIIs have been net sellers every month in 2026. Tech and financial stocks hit hardest." },
      { icon: "🌍", label: "Where Is The Money Going?", description: "Back to US Treasuries. At 4.5%+ yield, US bonds beat Indian risk-adjusted returns." },
      { icon: "💱", label: "Currency Impact", description: "Every $1 of FII exit = $1 of rupee sold. $20B in exits = massive sustained rupee selling pressure." },
      { icon: "🔙", label: "When Does It Reverse?", description: "When the Fed cuts OR when India's growth premium vs global slowdown becomes compelling again." },
    ],
    insightBox: "📊 FII outflows are not a panic — they are a rational response to higher US yields. The rupee is collateral damage.",
  },

  // ═══════════════════ SLIDE 6: RBI — FIGHTING BACK ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE DEFENCE",
    heading: "What Is RBI",
    headingAccent: "Doing?",
    body: "The Reserve Bank of India is not watching passively. It has deployed three tools to fight the slide — but each has a limit.",
    steps: [
      {
        number: "01",
        title: "💵 Selling Dollars from Reserves",
        description: "RBI sells USD from its $640B forex reserve to meet excess demand and suppress rupee volatility. Effective short-term — not infinite.",
      },
      {
        number: "02",
        title: "🔒 Capping Bank FX Positions",
        description: "Banks' net open FX positions capped at $100M. Limits speculative shorting of the rupee by financial institutions.",
      },
      {
        number: "03",
        title: "🚫 Restricting NDF Contracts",
        description: "RBI restricted banks from facilitating certain offshore non-deliverable forward contracts — cutting off a key speculation channel.",
      },
    ],
    insightBox: "⚠️ RBI can slow the fall. It cannot reverse the structural forces. Oil + FII outflows + strong dollar are bigger than any central bank.",
    footnote: "Sources: RBI Forex Policy Statement (April 2026) & DD News RBI Intervention Report.",
  },

  // ═══════════════════ SLIDE 7: IMPACT ON YOU ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE REAL IMPACT",
    heading: "How It Hits",
    headingAccent: "Your Wallet.",
    body: "A weaker rupee is not just a number on a screen. It flows directly into the economy — and into household budgets.",
    features: [
      { icon: "⛽", label: "Petrol & Diesel Prices", description: "Higher oil in rupee terms = more expensive fuel. Every 5% rupee fall = ~₹4–5/litre pressure at the pump." },
      { icon: "✈️", label: "Travel & Education Abroad", description: "A US trip or foreign university degree costs ~5% more with every ₹5 rupee fall against the dollar." },
      { icon: "📦", label: "Imported Goods: Electronics, EV Parts", description: "Smartphones, laptops, EV batteries — all priced in dollars. Expect 3–5% price increases across consumer electronics." },
      { icon: "💳", label: "EMIs & Inflation", description: "Higher imported inflation → higher CPI → RBI cannot cut rates → home loan EMIs stay elevated." },
    ],
    insightBox: "🏠 The rupee affects your petrol bill, your EMI, your Amazon order, and your child's foreign education — all at once.",
  },

  // ═══════════════════ SLIDE 8: INDIA VS PEERS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "PERSPECTIVE",
    heading: "Is India",
    headingAccent: "Alone?",
    body: "No. But India is more vulnerable than most. Here is how the rupee crisis compares to EM peers in 2026.",
    features: [
      { icon: "🇮🇳", label: "India (INR): -6% YTD vs USD", description: "Record low at 95.34. One of Asia's worst performers in 2026. High oil dependency explains the gap." },
      { icon: "🇧🇷", label: "Brazil (BRL): -4.2% YTD", description: "Also hurt by Fed and risk-off, but Brazil is an oil exporter — it partially benefits from high prices." },
      { icon: "🇮🇩", label: "Indonesia (IDR): -3.1% YTD", description: "Also oil/commodity exposed but a net exporter — cushioned from the worst of the import shock." },
      { icon: "🇨🇳", label: "China (CNY): -1.8% YTD", description: "PBOC actively manages CNY. China's oil import shock is real but it has strategic reserves and supply deals." },
    ],
    insightBox: "📊 India's combination of high oil import dependency + large FII holdings makes it uniquely vulnerable in this cycle.",
  },

  // ═══════════════════ SLIDE 9: WINNERS & LOSERS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PORTFOLIO INTELLIGENCE",
    heading: "Who",
    headingAccent: "Benefits?",
    body: "A weak rupee creates pain — but also asymmetric opportunity for sectors and investors positioned correctly.",
    features: [
      { icon: "🟢", label: "IT & Export Sectors", description: "TCS, Infosys, HCL earn in dollars and report in rupees. A weaker rupee inflates their INR revenues automatically." },
      { icon: "🟢", label: "Pharma Exporters", description: "Sun Pharma, Dr. Reddy's, Cipla — dollar-denominated global revenues → rupee translation gains." },
      { icon: "🔴", label: "Oil Marketing Companies", description: "BPCL, IOCL import crude in dollars and sell domestically in rupees. Margin compression at every rupee fall." },
      { icon: "🔴", label: "FMCG with Imported Inputs", description: "Companies importing palm oil, chemicals, or packaging face direct cost inflation as rupee falls." },
    ],
    insightBox: "🎯 The trade: long IT exporters, short oil-dependent importers. The rupee move creates the divergence.",
  },

  // ═══════════════════ SLIDE 10: THE RBI DILEMMA ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE POLICY TRAP",
    heading: "RBI's",
    headingAccent: "Impossible Choice.",
    body: "The Reserve Bank of India is caught between two crises pulling in opposite directions. Every tool it uses makes the other problem worse.",
    features: [
      { icon: "📈", label: "To Fight Inflation: Hike Rates", description: "Higher rates control imported inflation — but slow GDP growth and hurt borrowers with EMIs." },
      { icon: "📉", label: "To Support Growth: Cut Rates", description: "Rate cuts stimulate consumption — but widen the interest rate gap with US, sending more FII money abroad." },
      { icon: "💵", label: "To Defend Rupee: Sell Reserves", description: "Selling forex reserves stabilises the rate — but depletes the buffer needed for future shocks." },
      { icon: "⚖️", label: "Current Stance: Hold & Intervene", description: "RBI is holding rates and intervening in FX directly. Neither inflation nor growth is the priority — stability is." },
    ],
    insightBox: "📜 This is textbook stagflation policy trap. The Fed caused it. India is living it.",
  },

  // ═══════════════════ SLIDE 11: THE SCENARIOS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "WHAT HAPPENS NEXT",
    heading: "Three",
    headingAccent: "Paths.",
    body: "The rupee's next move depends entirely on two things: oil prices and the Fed. Here are the three scenarios.",
    features: [
      { icon: "🟢", label: "Bull Rupee: ₹88–90 (20%)", description: "Hormuz normalises. Oil drops to $80. Fed signals cuts. FIIs return. RBI stops selling reserves." },
      { icon: "🟡", label: "Base Case: ₹93–97 (55%)", description: "Oil stays elevated. Fed holds. Rupee grinds in a range. RBI manages volatility. No crisis, no relief." },
      { icon: "🔴", label: "Bear Rupee: ₹100+ (25%)", description: "Hormuz fully closes. Oil hits $140+. FII outflows accelerate. RBI reserves get stretched. ₹100 tested." },
    ],
    insightBox: "⚠️ ₹100/dollar is not a prediction — but it is no longer unthinkable. The base case is a painful grind.",
    footnote: "Sources: Goldman Sachs INR Outlook (April 2026) & ICICI Securities Currency Scenario Analysis.",
  },

  // ═══════════════════ SLIDE 12: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE BOTTOM LINE",
    heading: "The Rupee",
    headingAccent: "Is A Symptom.",
    body: "₹95 is not a random number. It is the precise intersection of a $125 oil price, a hawkish Fed, $20B in FII exits, and a disrupted Hormuz. Every Indian investor needs to understand this — because it is not over yet.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📉", label: "The Level", description: "₹95.34 — lifetime record low hit April 30, 2026" },
      { icon: "🛢️", label: "The Cause", description: "Oil at $125 + FII exodus + strong dollar = triple pressure" },
      { icon: "🏦", label: "The Defence", description: "RBI intervening — but structural forces are bigger" },
      { icon: "🎯", label: "The Trade", description: "Long IT exporters, short oil importers, watch ₹100" },
    ],
  },
];
