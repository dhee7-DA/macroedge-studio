import type { SlideData } from "@workspace/carousel-engine";

export const FA_PB_RATIO: SlideData[] = [

  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "FUNDAMENTAL ANALYSIS — PART 03",
    tagRight: "BEGINNER → INTERMEDIATE",
    heading: "The P/B Ratio.",
    headingAccent: "What Are You Paying for the Assets?",
    body: "The Price-to-Book ratio is the oldest valuation tool in finance. Benjamin Graham built value investing on it. Banks are priced entirely by it. And most retail investors completely misread it.",
    levelBadge: "STOCKS",
    topicNum: "FA-03",
    keywords: [
      "P/B", "BOOK VALUE", "ASSETS", "LIABILITIES", "ROE", "BANKS",
      "GOODWILL", "TANGIBLE", "LIQUIDATION", "NET WORTH", "VALUE", "EQUITY",
    ],
    bullets: [
      "📐 The Formula",
      "🏦 Why Banks Use It",
      "📊 P/B vs ROE",
      "⚠️ When It Lies",
      "🎯 Tangible Book Value",
    ],
  },

  // ═══════════════════ SLIDE 2: WHAT IS P/B ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE FOUNDATION",
    heading: "What Is The",
    headingAccent: "P/B Ratio?",
    body: "P/B compares what the market pays for a company vs what the company actually owns. It is the 'are you paying for real assets or just hope?' test.",
    features: [
      { icon: "📐", label: "The Formula", description: "P/B = Stock Price ÷ Book Value Per Share. Or: Market Cap ÷ Total Book Value (Shareholders' Equity)." },
      { icon: "📚", label: "What is Book Value?", description: "Book Value = Total Assets minus Total Liabilities. It is the accounting net worth — what shareholders would receive if the company liquidated today." },
      { icon: "🧮", label: "Real Example", description: "JPMorgan: Market Cap $550B. Book Value (Shareholders' Equity) $330B. P/B = 550 ÷ 330 = 1.67x. You pay $1.67 for every $1 of net assets." },
      { icon: "💡", label: "The Intuition", description: "P/B of 1.0 = you pay exactly what the assets are worth. Above 1 = you pay a premium for future earnings. Below 1 = you pay less than asset value." },
    ],
  },

  // ═══════════════════ SLIDE 3: HOW TO READ P/B ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE READING",
    heading: "High P/B vs",
    headingAccent: "Low P/B.",
    body: "Like the P/E, P/B only makes sense with context. The same number signals completely different things in different industries.",
    features: [
      { icon: "🔴", label: "P/B > 5x — Market Prices in High Returns", description: "Means the market expects very high ROE in the future. Typical for software, consumer brands, pharma. Apple trades at 40x+ P/B." },
      { icon: "🟡", label: "P/B 1–3x — Fair to Moderately Valued", description: "Standard range for most established businesses. Banks typically trade 1–2x. Industrials 1.5–3x." },
      { icon: "🟢", label: "P/B < 1x — Below Book Value", description: "Either a genuine bargain OR the market believes assets are overvalued on the balance sheet. Common in distressed banks, declining industries." },
      { icon: "⚫", label: "Negative P/B — Technically Insolvent", description: "Liabilities exceed assets. Book value is negative. This happens in highly leveraged companies or those with massive accumulated losses (e.g. early Amazon)." },
    ],
  },

  // ═══════════════════ SLIDE 4: P/B BY SECTOR ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE SECTOR RULE",
    heading: "Same P/B.",
    headingAccent: "Different Meaning.",
    body: "P/B is the primary valuation metric for banks and financials — but nearly useless for tech. The sector determines whether P/B means anything.",
    features: [
      { icon: "🏦", label: "Banking: 1–2x is the Standard", description: "Banks hold mostly financial assets (loans, securities) that are fair-valued. P/B is the core metric. JPMorgan at 1.7x = healthy premium to book." },
      { icon: "💻", label: "Tech / Software: P/B is Meaningless", description: "Microsoft's real assets are its software, engineers, and brand — not on the balance sheet. Microsoft trades at 12x P/B. This is not expensive. P/E is the right metric here." },
      { icon: "🏭", label: "Industrials / Manufacturing: 1.5–4x", description: "Asset-heavy businesses with real machinery and inventory. P/B reflects real asset value. Caterpillar at 5x reflects pricing power and brand premium." },
      { icon: "💎", label: "Consumer Brands: P/B Reflects Intangibles", description: "Coca-Cola trades at 10x+ P/B because its brand is worth hundreds of billions — but is not on the balance sheet. P/B overstates 'cheapness' here." },
    ],
  },

  // ═══════════════════ SLIDE 5: P/B vs ROE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE KEY RELATIONSHIP",
    heading: "P/B and ROE.",
    headingAccent: "The Formula That Explains Everything.",
    body: "High P/B is only justified by high ROE. This is the most important relationship in equity valuation — and almost no retail investor knows it.",
    features: [
      { icon: "🔗", label: "The Relationship", description: "P/B = ROE × P/E. A company with 30% ROE and 20x P/E should trade at 6x P/B. This is the DuPont-derived formula professionals use." },
      { icon: "✅", label: "High P/B + High ROE = Justified", description: "Microsoft: P/B ~12x. ROE ~35%. The premium is earned. High returns on equity justify paying above book value." },
      { icon: "🚩", label: "High P/B + Low ROE = Danger", description: "If a company trades at 4x P/B but earns 8% ROE, the market is pricing in a return improvement that may never come." },
      { icon: "💎", label: "Low P/B + High ROE = The Value Investor's Dream", description: "Trading below or near book while earning high returns on equity. This is the Benjamin Graham and Warren Buffett hunting ground." },
    ],
  },

  // ═══════════════════ SLIDE 6: P/B < 1 — BARGAIN OR TRAP? ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE CRITICAL QUESTION",
    heading: "P/B Below 1.",
    headingAccent: "Bargain or Value Trap?",
    body: "Trading below book value sounds like a bargain. Sometimes it is. Often it is not. Here is how to tell the difference in three steps.",
    steps: [
      {
        number: "01",
        title: "🔍 Are the Assets Real?",
        description: "Check if book value is padded with goodwill or overvalued inventory. If assets are written down, real book value is lower than stated. Strip it out.",
      },
      {
        number: "02",
        title: "📉 Is ROE Positive and Growing?",
        description: "A P/B below 1 with negative ROE = the company destroys value. The market is right to discount it. A P/B below 1 with positive ROE = potentially undervalued.",
      },
      {
        number: "03",
        title: "🏦 Is This a Bank in Stress?",
        description: "Banks trade below book during credit crises because loan books may be impaired. Below 0.7x P/B on a bank = the market pricing in losses not yet declared.",
      },
    ],
    insightBox: "📌 P/B < 1 is a starting point for investigation — not a buy signal. Always combine with ROE and asset quality checks.",
    footnote: "Sources: Benjamin Graham — The Intelligent Investor & Aswath Damodaran Valuation Textbook.",
  },

  // ═══════════════════ SLIDE 7: WHEN P/B LIES ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE TRAPS",
    heading: "When The",
    headingAccent: "P/B Lies.",
    body: "Book value is an accounting construct. It can be inflated, deflated, and distorted in ways that make P/B misleading.",
    features: [
      { icon: "👻", label: "Goodwill Inflates Book Value", description: "When companies acquire others, they record 'goodwill' on the balance sheet. This inflates book value artificially — it is not a real tangible asset." },
      { icon: "🔄", label: "Buybacks Destroy Book Value", description: "Every dollar spent on share buybacks reduces book value. Companies like Apple have negative tangible book value — entirely from buybacks, not insolvency." },
      { icon: "🏭", label: "Depreciated Assets Are Understated", description: "A 30-year-old factory on the books at near-zero may be worth $500M in today's market. P/B would look high even though the asset is undervalued." },
      { icon: "🚫", label: "Intangibles Not Captured", description: "Brands (Coca-Cola), patents (Pfizer), software (Microsoft), talent (Google) — none of these appear on the balance sheet. P/B ignores the most valuable assets in modern business." },
    ],
  },

  // ═══════════════════ SLIDE 8: TANGIBLE BOOK VALUE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE CLEANER METRIC",
    heading: "Tangible",
    headingAccent: "Book Value.",
    body: "To cut through the accounting noise, use Tangible Book Value — book value stripped of goodwill and all intangible assets. This is what investors actually own.",
    features: [
      { icon: "📐", label: "The Formula", description: "Tangible Book Value = Total Equity − Goodwill − Intangible Assets. Divide by shares for Tangible BV per share." },
      { icon: "🏦", label: "Why Banks Use It", description: "Bank regulators and analysts use Tangible Book Value to assess real capital adequacy. It removes acquisition premiums paid in past deals." },
      { icon: "📊", label: "Price-to-Tangible Book (P/TBV)", description: "More conservative than P/B. Wells Fargo at 1.4x P/B might be 1.9x P/TBV after stripping goodwill. This is the number that matters in stress tests." },
      { icon: "⚠️", label: "The Buyback Distortion", description: "Apple's tangible book value is negative — not because it is insolvent, but because it has returned $700B+ in cash to shareholders. P/TBV is meaningless for buyback-heavy tech." },
    ],
  },

  // ═══════════════════ SLIDE 9: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE COMPLETE PICTURE",
    heading: "The P/B",
    headingAccent: "Cheat Sheet.",
    body: "P/B in one place — formula, sector context, the ROE relationship, traps, and tangible book value. Save this.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📐", label: "The Formula", description: "Market Cap ÷ Shareholders' Equity. Or Price ÷ Book Value Per Share." },
      { icon: "🏦", label: "Best For", description: "Banks and financials. Use P/E for tech. P/B alone is not enough for asset-light businesses." },
      { icon: "🔗", label: "The Key Relationship", description: "P/B = ROE × P/E. High P/B is only justified by high ROE. Always check both together." },
      { icon: "🎯", label: "The Pro Version", description: "Strip goodwill and intangibles for Tangible Book Value. That is the real floor of asset value." },
    ],
  },
];
