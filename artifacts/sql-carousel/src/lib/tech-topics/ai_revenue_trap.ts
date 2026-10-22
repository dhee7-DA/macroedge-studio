import type { SlideData } from "../carousel-types";

export const AI_REVENUE_TRAP: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "TECH TEARDOWN",
    tagRight: "AUG 2026",
    heading: "The AI Revenue",
    headingAccent: "Trap.",
    body: "The honeymoon phase of the AI supercycle is officially over. Wall Street is no longer buying the promise of endless data center expansion. Institutional capital is now aggressively scrutinizing the one thing that actually matters: verifiable revenue sustainability.",
    levelBadge: "TEARDOWN",
    topicNum: "TECH",
    keywords: ["AI", "CAPEX", "HYPERSCALERS", "REVENUE", "SOFTWARE"],
    bullets: [
      "🚨 The Concentration Risk",
      "💸 The Hyperscaler Dependency",
      "🛑 The CapEx Domino Effect",
      "🔄 Rotation into Enterprise Software",
      "📊 The Re-Entry Metrics",
    ],
  },

  // ═══════════════════ SLIDE 2: CONCENTRATION RISK ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE CORE PROBLEM",
    heading: "The Dangerous",
    headingAccent: "Foundation.",
    body: "The entire AI hardware and software ecosystem is currently built on a highly fragile, concentrated foundation.",
    features: [
      { icon: "🎯", label: "Massive Concentration", description: "Many high-flying AI vendors and chipmakers are deriving ==70-80%== of their revenue from just a handful of hyperscalers." },
      { icon: "🏛️", label: "The Big Three", description: "If you remove %%Microsoft%%, %%Amazon%%, and %%Google%% from the order books, the demand for AI infrastructure plummets overnight." },
      { icon: "📉", label: "Valuation Risk", description: "You cannot justify a ==50x== P/E ratio if your entire business model relies on three companies continuing to burn cash indefinitely." },
    ],
    insightBox: "💡 The Reality: This isn't a diversified, decentralized market yet. It's a localized spending spree heavily subsidized by Big Tech.",
  },

  // ═══════════════════ SLIDE 3: THE CAPEX DOMINO ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE THREAT",
    heading: "The CapEx",
    headingAccent: "Domino Effect.",
    body: "What happens when the music stops? The hardware supply chain is completely exposed to sudden CapEx cuts.",
    steps: [
      { number: "01", title: "The Boardroom Pivot", description: "Investors finally force a hyperscaler (e.g., %%Microsoft%%) to prioritize profit margins over market share, forcing a cut to AI infrastructure spending." },
      { number: "02", title: "The 10% Shock", description: "If just one major hyperscaler trims their AI CapEx budget by even ==10%==, it immediately slashes the order books for GPU manufacturers." },
      { number: "03", title: "The Supply Chain Collapse", description: "This triggers a catastrophic domino effect down the supply chain, collapsing the revenue projections of specialized chipmakers, server assemblers, and cooling providers." },
    ],
  },

  // ═══════════════════ SLIDE 4: WHERE IS THE ADOPTION? ═══════════════════
  {
    type: "pitfalls",
    background: "light",
    tag: "FUNDAMENTALS",
    heading: "The Missing",
    headingAccent: "Enterprise Link.",
    body: "The market is demanding to see diversified, B2B enterprise adoption of AI, not just Big Tech experiments.",
    pitfalls: [
      {
        title: "Pilot Purgatory",
        description: "Companies are tired of paying for expensive AI pilots that don't generate verifiable ROI or operational efficiency. Software companies failing to convert these pilots into recurring revenue are getting punished.",
        fix: "Only invest in AI software firms that demonstrate high conversion rates from pilot programs to multi-year contracts."
      },
      {
        title: "The Margin Squeeze",
        description: "Building and running LLMs is incredibly expensive. If a software startup is subsidizing user compute costs, their margins will eventually implode.",
        fix: "Avoid consumer-facing AI wrappers. Focus on B2B SaaS companies that have pricing power to pass on compute costs."
      }
    ],
  },

  // ═══════════════════ SLIDE 5: THE GREAT ROTATION ═══════════════════
  {
    type: "dosdonts",
    background: "dark",
    tag: "PORTFOLIO ALLOCATION",
    heading: "Quality Over",
    headingAccent: "Hype.",
    body: "Institutional capital is aggressively rotating out of unproven AI pure-plays.",
    dos: [
      { text: "Rotate to Enterprise Software", detail: "Smart money is moving into established ##Enterprise Software## giants. They have sticky, recurring revenue models and can integrate AI without relying on hyperscaler subsidies." },
      { text: "Focus on Proprietary Data", detail: "Buy companies that own proprietary, closed-loop datasets. In the age of open-source LLMs, unique data is the only defensible moat." }
    ],
    donts: [
      { text: "Don't Buy Hardware Blindly", detail: "The hardware supercycle is maturing. Do not buy cyclical semiconductor stocks assuming the growth rate is permanent." },
      { text: "Avoid Single-Client Vendors", detail: "If a company's 10-K shows that more than ==20%== of their revenue comes from a single hyperscaler, avoid it." }
    ],
  },

  // ═══════════════════ SLIDE 6: CTA ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE PLAYBOOK",
    heading: "The Re-Entry",
    headingAccent: "Metrics.",
    body: "This is a classic maturity cycle. Before buying the dip in any AI stock, verify these exact metrics.",
    ctaText: "Save this Checklist",
    features: [
      { icon: "📊", label: "Customer Concentration Ratio", description: "Ensure no single customer accounts for more than ==15-20%== of total revenue." },
      { icon: "📈", label: "ARR Growth Quality", description: "Check if Annual Recurring Revenue (ARR) is growing organically, or if it's being artificially inflated by one-off infrastructure deals." },
      { icon: "🏢", label: "Fortune 500 Penetration", description: "Look for verifiable case studies of non-tech Fortune 500 companies actively deploying the product at scale." },
      { icon: "🔔", label: "Stay Alert", description: "Turn on notifications. We will alert you when the rotation into Enterprise Software bottoms out." },
    ],
  },
];
