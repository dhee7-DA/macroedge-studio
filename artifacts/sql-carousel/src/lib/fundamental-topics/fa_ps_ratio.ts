import type { SlideData } from "@workspace/carousel-engine";

export const FA_PS_RATIO: SlideData[] = [

  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "FUNDAMENTAL ANALYSIS — PART 04",
    tagRight: "BEGINNER → INTERMEDIATE",
    heading: "The P/S Ratio.",
    headingAccent: "Valuing Companies That Don't Make Money.",
    body: "When earnings are zero, the P/E ratio breaks. The Price-to-Sales ratio steps in — and it became the defining metric of the SaaS era, the dot-com bubble, and every hypergrowth cycle since.",
    levelBadge: "STOCKS",
    topicNum: "FA-04",
    keywords: [
      "P/S", "REVENUE", "SALES", "SAAS", "GROWTH", "VALUATION",
      "HYPERGROWTH", "MULTIPLE", "MARGINS", "BURN", "RULE OF 40", "ARR",
    ],
    bullets: [
      "📐 The Formula",
      "📊 When to Use It",
      "⚠️ The Dangers",
      "🏭 Sector Context",
      "🎯 P/S + Margins",
    ],
  },

  // ═══════════════════ SLIDE 2: WHAT IS P/S ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE FOUNDATION",
    heading: "What Is The",
    headingAccent: "P/S Ratio?",
    body: "P/S compares the market value of a company to its annual revenue. It tells you how much you are paying for every dollar of sales — regardless of whether those sales are profitable.",
    features: [
      { icon: "📐", label: "The Formula", description: "P/S = Market Cap ÷ Annual Revenue. Or: Stock Price ÷ Revenue Per Share." },
      { icon: "🏷️", label: "What It Means", description: "A P/S of 10x means you pay $10 for every $1 of revenue the company generates annually." },
      { icon: "🧮", label: "Real Example", description: "Salesforce: Market Cap ~$270B. Annual Revenue ~$34B. P/S = 270 ÷ 34 = ~8x. You pay $8 per dollar of sales." },
      { icon: "🔑", label: "Why It Exists", description: "When a company has negative earnings, P/E is undefined. P/S is the only price-based valuation that always has a number — even for loss-making businesses." },
    ],
  },

  // ═══════════════════ SLIDE 3: WHEN TO USE P/S ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE RIGHT CONTEXT",
    heading: "When Does",
    headingAccent: "P/S Make Sense?",
    body: "P/S is not a universal metric. It is a specialist tool for specific situations. Using it outside these contexts produces misleading results.",
    features: [
      { icon: "🚀", label: "Hypergrowth Companies", description: "Companies growing revenue 40%+ YoY often have no earnings yet. Uber, Airbnb, Snap at IPO — P/S was the only usable valuation metric." },
      { icon: "💻", label: "Early-Stage SaaS", description: "SaaS businesses invest heavily upfront (sales, R&D) before reaching profitability. P/S reflects the revenue engine being built before margins appear." },
      { icon: "🔄", label: "Turnarounds", description: "When a company is restructuring and EPS is distorted by one-time charges, P/S shows the underlying revenue base without the accounting noise." },
      { icon: "📊", label: "Sector Comparisons", description: "When comparing two companies with very different margin profiles in the same sector, P/S normalises for the 'investment phase' difference." },
    ],
  },

  // ═══════════════════ SLIDE 4: HOW TO READ P/S ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE READING",
    heading: "High P/S vs",
    headingAccent: "Low P/S.",
    body: "P/S ranges vary enormously by sector. A 2x P/S is expensive for a grocery chain and cheap for a fast-growing SaaS company.",
    features: [
      { icon: "🔴", label: "P/S > 20x — Priced for Perfection", description: "Only justified if revenue growth is 50%+ and the path to profitability is clear. At 20x P/S, one growth slowdown can cut the stock in half instantly." },
      { icon: "🟡", label: "P/S 5–15x — Growth Premium Zone", description: "Typical for established SaaS, high-margin tech. Salesforce, Adobe, ServiceNow trade here. Requires consistent 15–25% revenue growth to hold." },
      { icon: "🟢", label: "P/S 1–4x — Value or Low-Margin", description: "Standard for banks, retailers, telecom, and industrials with thin margins. High-margin businesses at 2x P/S are often undervalued." },
      { icon: "⚫", label: "P/S < 1x — Cheap or Distressed", description: "Revenue exceeds market cap. Either the business is in serious trouble — or the market is ignoring a recovery story. Due diligence required." },
    ],
  },

  // ═══════════════════ SLIDE 5: P/S BY SECTOR ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE SECTOR RULE",
    heading: "P/S Is About",
    headingAccent: "Margin Potential.",
    body: "The key question with P/S: how much of this revenue will eventually become profit? Higher margin potential justifies a higher P/S multiple.",
    features: [
      { icon: "💻", label: "SaaS / Software: 8–25x is Normal", description: "70–80% gross margins mean even 10x revenue today can become 5x earnings tomorrow. High P/S is a bet on margin expansion." },
      { icon: "🏥", label: "Healthcare / Biotech: Wide Range", description: "Pre-revenue biotech: P/S is meaningless. Post-revenue pharma with blockbuster drugs: 5–15x based on patent life and pipeline." },
      { icon: "🛒", label: "Retail / Grocery: 0.3–1x is Normal", description: "Razor-thin margins (1–3% net). Amazon Retail at 1x P/S is not cheap — the business barely profits. Revenue here is not valuable at high multiples." },
      { icon: "🏦", label: "Banking: P/S is the Wrong Tool", description: "Banks treat interest income as revenue. This is structurally different from operating revenue. Use P/B and P/E for banks, never P/S." },
    ],
  },

  // ═══════════════════ SLIDE 6: P/S + GROSS MARGIN ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE PROFESSIONAL LENS",
    heading: "P/S Alone",
    headingAccent: "Is Half the Story.",
    body: "A 10x P/S on a 70% gross margin business is not the same as 10x P/S on a 20% gross margin business. Margins are the multiplier that determines whether the P/S is justified.",
    features: [
      { icon: "📐", label: "The Framework: P/S ÷ Gross Margin", description: "Divide P/S by gross margin to get a normalized multiple. Salesforce at 8x P/S with 75% gross margin = 10.7 adjusted. Adobe at 12x with 85% margin = 14.1." },
      { icon: "📈", label: "High Margin = P/S Is Undervalued", description: "A SaaS company at 8x P/S with 80% gross margins is a high-quality business. Most of that revenue will survive as profit at scale." },
      { icon: "📉", label: "Low Margin = P/S Is Dangerous", description: "A company at 10x P/S with 25% gross margins needs 4x the revenue to generate the same profit. The path to justifying that multiple is very long." },
      { icon: "🎯", label: "The Rule", description: "Always look at gross margin alongside P/S. A premium P/S is justified only when gross margins are high and trending upward." },
    ],
  },

  // ═══════════════════ SLIDE 7: WHEN P/S LIES ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE TRAPS",
    heading: "When The",
    headingAccent: "P/S Lies.",
    body: "P/S is the most abused valuation metric in bull markets. Investors use it to justify almost anything. Here are the four traps.",
    features: [
      { icon: "💸", label: "Revenue Quality: Recurring vs One-Time", description: "A company with 80% recurring subscription revenue is worth far more at 10x P/S than one with 80% project-based, one-time revenue." },
      { icon: "🔥", label: "Ignoring the Burn Rate", description: "A $1B revenue company burning $400M per year has 2.5 years of runway. P/S looks attractive. The equity may be zero after dilution from survival funding." },
      { icon: "📦", label: "Revenue Inflation via Discounts", description: "Companies can stuff channels, offer extreme discounts, or pull forward revenue to hit targets. Revenue grows. Quality doesn't." },
      { icon: "🚫", label: "The 2021 Trap", description: "SaaS stocks hit 40–80x P/S at peak. Investors said 'P/E doesn't apply here.' When rates rose, P/S compressed 70–90%. Revenue was real. The multiple was not." },
    ],
  },

  // ═══════════════════ SLIDE 8: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE COMPLETE PICTURE",
    heading: "The P/S",
    headingAccent: "Cheat Sheet.",
    body: "P/S in one place — formula, when to use it, sector context, the margin framework, and the traps. Save this.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📐", label: "The Formula", description: "Market Cap ÷ Annual Revenue. The price per dollar of sales." },
      { icon: "🚀", label: "Best For", description: "Loss-making hypergrowth, early SaaS, turnarounds. Not for banks or low-margin retail." },
      { icon: "📊", label: "The Margin Rule", description: "Always pair P/S with gross margin. High margin justifies high P/S. Low margin does not." },
      { icon: "⚠️", label: "The Trap", description: "P/S above 20x assumes perfection. One growth miss can compress the multiple 50–70%. Revenue is real. The multiple is sentiment." },
    ],
  },
];
