import type { SlideData } from "../carousel-types";

export const INDIA_REAL_ESTATE: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "MACROEDGE INDIA",
    tagRight: "JULY 2026",
    heading: "The $4.5B",
    headingAccent: "Supercycle.",
    body: "Institutional investment in Indian Real Estate just hit a 6-year high of ==$4.5 Billion== in the first half of 2026. But the most shocking part isn't the total number—it's exactly _who_ is writing the checks.",
    levelBadge: "TEARDOWN",
    topicNum: "MACRO",
    keywords: ["INDIA", "REAL ESTATE", "INFRASTRUCTURE", "MACRO", "INVESTING", "REIT"],
    bullets: [
      "🏢 H1 2026 Hits $4.5B",
      "🇮🇳 The Domestic Capital Shift",
      "🚇 Infrastructure Multipliers",
      "📦 Warehousing Boom",
      "📈 The REIT Pipeline",
    ],
  },

  // ═══════════════════ SLIDE 2: THE DATA ═══════════════════
  {
    type: "histogram",
    background: "light",
    tag: "THE DATA",
    heading: "The Structural",
    headingAccent: "Shift.",
    body: "Historically, Indian real estate was funded by foreign private equity (US/EU). In 2026, that dynamic has permanently flipped. **Domestic capital is now the dominant force** in the market.",
    histogram: {
      maxValue: 100,
      caption: "Percentage of Institutional Real Estate Investment (India) by Source",
      bars: [
        { label: "Foreign PE (2022)", value: 78, valueLabel: "78%", tickerLogo: "🌍" },
        { label: "Domestic Cap (2022)", value: 22, valueLabel: "22%", tickerLogo: "🇮🇳" },
        { label: "Foreign PE (2026)", value: 45, valueLabel: "45%", tickerLogo: "🌍" },
        { label: "Domestic Cap (2026)", value: 55, valueLabel: "55%", highlight: true, tickerLogo: "🇮🇳" },
      ],
    },
    insightBox: "💡 The Reality: Indian wealth is finally staying onshore, driving massive localized liquidity into commercial assets.",
  },

  // ═══════════════════ SLIDE 3: THE CATALYSTS ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE DRIVERS",
    heading: "Why",
    headingAccent: "Now?",
    body: "This isn't a speculative residential bubble. This ==$4.5B== is flowing into hard, commercial infrastructure.",
    steps: [
      { number: "01", title: "The 'China + 1' Mandate", description: "Global manufacturers are aggressively moving supply chains to ++India++, triggering a massive boom in ##Grade-A industrial warehousing## and logistics parks." },
      { number: "02", title: "Infrastructure Multipliers", description: "Massive state projects (like the _Noida Aqua Line_ extension and Dedicated Freight Corridors) are instantly unlocking the value of previously dead land banks." },
      { number: "03", title: "The REIT Revolution", description: "The maturation of ++India's++ REIT framework has allowed domestic retail and institutional investors to finally invest in commercial real estate legally and liquidly." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE SUB-SECTORS ═══════════════════
  {
    type: "dosdonts",
    background: "light",
    tag: "ASSET ALLOCATION",
    heading: "Where the",
    headingAccent: "Money is Flowing.",
    body: "If you want to play this supercycle, you have to look beyond residential apartments.",
    dos: [
      { text: "Data Centers", detail: "With the AI boom, land zoned for high-power ##data centers## in tier-1 cities is commanding absolute premium valuations." },
      { text: "Industrial Warehousing", detail: "##E-commerce## and ##quick-commerce## require massive, automated logistics hubs right outside major metropolitan zones." },
      { text: "Grade-A Commercial Offices", detail: "Despite remote work trends globally, ++India++ remains the absolute epicenter for ##Global Capability Centers (GCCs)##." }
    ],
    donts: [
      { text: "Speculative Residential", detail: "Buying an under-construction flat to _'flip'_ it in 3 years is a retail strategy, not an institutional one." },
      { text: "Unregulated Land Banks", detail: "Institutions strictly avoid agricultural or disputed land without clear regulatory clearance." }
    ],
  },

  // ═══════════════════ SLIDE 5: THE RISKS ═══════════════════
  {
    type: "pitfalls",
    background: "dark",
    tag: "THE RISKS",
    heading: "The Hidden",
    headingAccent: "Liabilities.",
    body: "Even in a massive supercycle, the Indian real estate market is notorious for specific structural risks.",
    pitfalls: [
      {
        title: "Interest Rate Sensitivity",
        description: "If global inflation forces the **RBI** to keep rates higher for longer, the cost of capital for these massive developments skyrockets.",
        fix: "Focus on fully capitalized, debt-free REITs."
      },
      {
        title: "Regulatory / RERA Overreach",
        description: "While RERA cleaned up the sector, sudden localized zoning changes or environmental halts can freeze a billion-dollar project overnight.",
        fix: "Stick to Tier-1 developers with decades of government relations."
      }
    ],
  },

  // ═══════════════════ SLIDE 6: CTA ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE OPPORTUNITY",
    heading: "The Alpha",
    headingAccent: "Play.",
    body: "You don't need $100 Million to buy a commercial tower anymore. You can play this exact trend through the public markets.",
    ctaText: "Save this Breakdown",
    features: [
      { icon: "🏢", label: "Commercial REITs", description: "%%Embassy%%, %%Mindspace%%, and %%Nexus%% offer direct exposure to Grade-A office and retail spaces." },
      { icon: "📦", label: "Logistics Stocks", description: "Companies building the warehousing infrastructure for the '++China++ + 1' transition." },
      { icon: "🏗️", label: "Tier-1 Developers", description: "The mega-cap builders absorbing the massive domestic liquidity." },
      { icon: "🔔", label: "Follow for Part 2", description: "We will be dropping the exact stock/REIT tickers to play this supercycle tomorrow." },
    ],
  },
];
