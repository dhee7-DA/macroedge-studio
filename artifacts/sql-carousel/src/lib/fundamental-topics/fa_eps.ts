import type { SlideData } from "@workspace/carousel-engine";

export const FA_EPS: SlideData[] = [

  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "FUNDAMENTAL ANALYSIS — PART 02",
    tagRight: "BEGINNER → INTERMEDIATE",
    heading: "EPS.",
    headingAccent: "The Number Behind Every Valuation.",
    body: "Every P/E ratio, every price target, every analyst model is built on one number — Earnings Per Share. If this number is manipulated, everything built on top of it is wrong.",
    levelBadge: "STOCKS",
    topicNum: "FA-02",
    keywords: [
      "EPS", "EARNINGS", "DILUTED", "GAAP", "NON-GAAP", "BUYBACKS",
      "NET INCOME", "SHARES", "GROWTH", "BEAT", "MISS", "QUALITY",
    ],
    bullets: [
      "📐 The Formula",
      "📊 Basic vs Diluted",
      "⚠️ GAAP vs Non-GAAP",
      "🔄 The Buyback Effect",
      "🎯 EPS Quality",
    ],
  },

  // ═══════════════════ SLIDE 2: WHAT IS EPS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE FOUNDATION",
    heading: "What Is",
    headingAccent: "EPS?",
    body: "EPS stands for Earnings Per Share. It tells you how much profit the company made for each share of stock that exists.",
    features: [
      { icon: "📐", label: "The Formula", description: "EPS = Net Income ÷ Shares Outstanding. If a company earns $10B with 1B shares → EPS = $10." },
      { icon: "🍕", label: "The Intuition", description: "Think of the company's total profit as a pizza. EPS is your slice — based on how many shares (slices) exist." },
      { icon: "🧮", label: "Real Example", description: "Apple FY2024: Net Income ~$94B ÷ ~15.4B shares = EPS ~$6.11. Every Apple share earned $6.11 of profit." },
      { icon: "🔗", label: "Why It Matters", description: "EPS is the denominator of P/E. A rising stock price with flat EPS = rising P/E = market getting more expensive. EPS IS the earnings in Price-to-Earnings." },
    ],
  },

  // ═══════════════════ SLIDE 3: BASIC vs DILUTED ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE TWO VERSIONS",
    heading: "Basic vs",
    headingAccent: "Diluted EPS.",
    body: "There are two EPS figures in every earnings report. One is honest. One flatters the company. You should always use the diluted version.",
    features: [
      { icon: "📊", label: "Basic EPS — Current Shares Only", description: "Uses only shares currently outstanding. Ignores stock options, warrants, and convertible notes that employees and insiders could exercise." },
      { icon: "🔭", label: "Diluted EPS — All Potential Shares", description: "Includes all shares that COULD exist if options and warrants are exercised. Always lower than basic EPS. Always more honest." },
      { icon: "⚠️", label: "Why It Matters for Tech", description: "Microsoft, Meta, and Google issue billions of dollars in stock options to employees. Diluted EPS captures this real cost. Basic EPS hides it." },
      { icon: "📌", label: "The Rule", description: "Always use Diluted EPS when calculating P/E or comparing companies. Basic EPS overstates profit per share whenever options exist." },
    ],
  },

  // ═══════════════════ SLIDE 4: GAAP vs NON-GAAP ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE MANIPULATION GAME",
    heading: "GAAP vs",
    headingAccent: "Non-GAAP EPS.",
    body: "Companies report two sets of earnings: the official GAAP number — and their own 'adjusted' version. The difference can be enormous.",
    features: [
      { icon: "📋", label: "GAAP EPS — The Law Requires It", description: "Generally Accepted Accounting Principles. Every real cost is included: stock compensation, restructuring, amortization. This is the true earnings." },
      { icon: "✂️", label: "Non-GAAP EPS — The Company Spins It", description: "Companies strip out 'one-time' costs to show a cleaner number. But stock-based compensation gets excluded every year — it is not one-time." },
      { icon: "📉", label: "The Gap in Tech", description: "Many tech companies report Non-GAAP EPS 30–50% higher than GAAP. Meta's GAAP EPS in 2023 was $14.87. Non-GAAP was $19.17. A $4+ difference." },
      { icon: "🎯", label: "The Rule", description: "Always start with GAAP EPS. Use Non-GAAP only to understand adjustments. Never let a company define its own profitability unchecked." },
    ],
  },

  // ═══════════════════ SLIDE 5: EPS GROWTH ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE ENGINE OF RETURNS",
    heading: "EPS Growth.",
    headingAccent: "The Only Number That Matters Long-Term.",
    body: "Stock prices follow earnings over time. Not every quarter — but over years, the correlation between EPS growth and stock price growth is near-perfect.",
    features: [
      { icon: "📈", label: "How to Calculate It", description: "EPS Growth = (Current EPS - Prior Year EPS) ÷ Prior Year EPS × 100. If EPS went from $5 to $6.50 → 30% EPS growth." },
      { icon: "🏆", label: "What Rate Is Good?", description: "15%+ YoY EPS growth = strong. 20%+ = exceptional. Below 5% = mature/slow. Negative = shrinking — explain why before buying." },
      { icon: "🔗", label: "The Long-Run Law", description: "Over 10+ years, a stock's price gain almost exactly matches its EPS growth. NVIDIA's EPS grew 10x from 2020–2024. So did its stock." },
      { icon: "⚠️", label: "The Trap: Buyback-Driven Growth", description: "EPS can grow even if total profits are flat — if the company buys back shares. This shrinks the denominator. It is financial engineering, not real growth." },
    ],
  },

  // ═══════════════════ SLIDE 6: THE BUYBACK EFFECT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE HIDDEN DRIVER",
    heading: "Buybacks &",
    headingAccent: "EPS Inflation.",
    body: "A company can grow EPS every single year without growing profits at all. This is the buyback effect — and Wall Street loves it.",
    features: [
      { icon: "🔄", label: "How Buybacks Inflate EPS", description: "Company earns $10B with 1B shares → EPS $10. Buys back 100M shares. Now $10B ÷ 900M shares = EPS $11.11. Profit unchanged. EPS up 11%." },
      { icon: "💰", label: "Apple: The Ultimate Buyback Machine", description: "Apple has bought back over $700B in stock since 2012. EPS grew 3x more than net income over the same period. The buyback IS the EPS story." },
      { icon: "✅", label: "When Buybacks Are Good", description: "If a company buys back at a low valuation with surplus cash and no better use — it is value-accretive. Returning capital to shareholders is legitimate." },
      { icon: "🚩", label: "When Buybacks Are a Red Flag", description: "Buying back at peak valuation, while taking on debt, or as a substitute for real earnings growth = financial engineering. EPS grows but value does not." },
    ],
  },

  // ═══════════════════ SLIDE 7: EPS SURPRISES ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE MARKET MECHANISM",
    heading: "Beat, Miss,",
    headingAccent: "& The Reaction.",
    body: "Stocks don't move on EPS itself. They move on whether EPS beat or missed what analysts expected. Understanding this is how you understand earnings season.",
    features: [
      { icon: "🎯", label: "Consensus Estimate", description: "Analysts publish expected EPS before results. The 'whisper number' is the unofficial expectation. The stock price already prices in the consensus." },
      { icon: "📈", label: "EPS Beat — But Stock Falls", description: "This happens when guidance is weak, or the beat was from one-time items. The market sells on the future, not the past quarter." },
      { icon: "📉", label: "EPS Miss — But Stock Rises", description: "This happens when management raises forward guidance. The market forgives a miss if the future looks brighter. Always read the guidance." },
      { icon: "📊", label: "The Earnings Surprise Score", description: "S&P 500 companies beat estimates ~75% of the time historically. Analysts lowball estimates. A 'beat' alone is not meaningful — the magnitude matters." },
    ],
  },

  // ═══════════════════ SLIDE 8: EPS QUALITY ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE QUALITY TEST",
    heading: "Is This EPS",
    headingAccent: "Real?",
    body: "Before you trust an EPS number, run it through these three tests. High-quality EPS is repeatable, cash-backed, and growing from the core business.",
    steps: [
      {
        number: "01",
        title: "🔄 Is It Recurring?",
        description: "Strip out one-time gains: asset sales, tax benefits, insurance payouts. If EPS relies on these, next year's EPS will be lower.",
      },
      {
        number: "02",
        title: "💵 Is It Cash-Backed?",
        description: "Compare EPS to Operating Cash Flow per share. If cash flow is much lower than EPS, the company may be booking revenue it hasn't collected.",
      },
      {
        number: "03",
        title: "📈 Is It Growing From the Core?",
        description: "Is EPS growth driven by revenue growth and margin expansion? Or only by buybacks and cost cuts? Only the first is sustainable.",
      },
    ],
    insightBox: "📌 High-quality EPS = recurring + cash-backed + driven by core business growth. All three. Not just one.",
    footnote: "Sources: Warren Buffett Shareholder Letters & CFA Institute Financial Reporting Analysis.",
  },

  // ═══════════════════ SLIDE 9: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE COMPLETE PICTURE",
    heading: "The EPS",
    headingAccent: "Cheat Sheet.",
    body: "EPS in one place — formula, versions, GAAP traps, buyback effect, surprises, and quality tests. Save this.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📐", label: "The Formula", description: "Net Income ÷ Diluted Shares Outstanding. Always use diluted." },
      { icon: "✂️", label: "GAAP First", description: "Start with GAAP EPS. Non-GAAP strips out real costs. Never trust adjusted numbers unchecked." },
      { icon: "🔄", label: "Buybacks", description: "EPS can grow without profit growth via share buybacks. Always check if net income is growing too." },
      { icon: "✅", label: "Quality Test", description: "Recurring + cash-backed + core-driven. All three or it doesn't count." },
    ],
  },
];
