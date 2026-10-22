import type { SlideData } from "@workspace/carousel-engine";

export const TSLA_TEARDOWN: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INSTITUTIONAL TEARDOWN",
    tagRight: "$TSLA",
    heading: "Tesla Inc.",
    headingAccent: "The AI5 Inflection.",
    body: "Tesla reaches a $1.4T valuation as AI5 hardware and EU FSD expansion de-risk the Robotaxi roadmap. Here is the latest teardown.",
    levelBadge: "STOCKS",
    topicNum: "TS",
    bullets: ["Neural Net Scaling", "Valuation Equilibrium", "The FSD Moat"],
  },

  // ═══════════════════ SLIDE 2: THE BUSINESS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "STRUCTURAL EVOLUTION",
    heading: "Beyond the",
    headingAccent: "EV Plateau.",
    body: "Tesla is fundamentally re-pricing. It is evolving from a capital-intensive manufacturer into a high-margin AI & Robotics licensor.",
    features: [
      { icon: "🤖", label: "FSD (Full Self-Driving)", description: "Recurring high-margin software revenue ($99/mo)." },
      { icon: "🔋", label: "Energy Storage", description: "Megapack deployments growing at 100%+ YoY." },
      { icon: "🦾", label: "Optimus v3", description: "Factory-floor deployment of humanoid labor automation." },
      { icon: "🌍", label: "NACS Standardization", description: "Tesla as the 'toll booth' for the entire EV charging ecosystem." },
    ],
    insightBox: "💡 Institutional Call: FSD is effectively a hidden 'SaaS' engine inside an Automotive shell.",
  },

  // ═══════════════════ SLIDE 3: INTELLIGENCE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "VALUATION METRICS",
    heading: "Institutional",
    headingAccent: "Scoreboard.",
    body: "Core valuation thresholds for Tesla Inc. ($TSLA) as of April 15, 2026.",
    features: [
      { icon: "💵", label: "Current Price", description: "$380.93 (Post-Catalyst Surge)" },
      { icon: "🏦", label: "Market Cap", description: "$1.42 Trillion (S&P 500 Core)" },
      { icon: "📊", label: "Trailing P/E", description: "327.1 (Speculative AI premium)" },
      { icon: "📉", label: "Forward P/E (FY26)", description: "185.5 (Pricing in EU FSD expansion)" },
      { icon: "📈", label: "52-Week Range", description: "$212.19 - $489.88" },
    ],
    insightBox: "🎯 FLASH ALERT: Intra-day +8.4% surge driven by AI5 Chip Tape-Out & UBS Upgrade.",
    footnote: "Sources: TSLA Investor Relations, Yahoo Finance, Institutional Estimates.",
  },

  // ═══════════════════ SLIDE 4: FUNDAMENTALS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "FUNDAMENTAL SCORECARD",
    heading: "Capital &",
    headingAccent: "Efficiency.",
    body: "Tesla's balance sheet remains a 'Fortress,' but its capital intensity is reaching unprecedented levels as it builds Dojo compute.",
    features: [
      { icon: "🛡️", label: "Net Cash Position", description: "$29.1 Billion (Zero leverage risk)" },
      { icon: "🏗️", label: "CapEx (FY26)", description: "$21.5 Billion (Autonomy infra buildout)" },
      { icon: "📊", label: "PEG Ratio", description: "2.85 (Growth-adjusted premium)" },
      { icon: "⚙️", label: "ROIC", description: "14.8% (Pressured by capital cycle)" },
    ],
    insightBox: "💡 Analyst Consensus: Tesla is prioritizing long-term AI dominance over short-term FCF margins.",
    footnote: "CapEx escalation reflects massive H100/GB200 compute acquisition for Dojo.",
  },

  // ═══════════════════ SLIDE 5: THE BULL CASE ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "GROWTH CATALYSTS",
    heading: "The Autonomy",
    headingAccent: "Flywheel.",
    body: "The bull thesis hinges on Tesla's ability to license its compute and data advantage to legacy manufacturers.",
    steps: [
      {
        number: "01",
        title: "AI5 Hardware Milestone",
        description: "Custom silicon 'Tape-Out' confirmed. De-risks the compute bottleneck for the Aug 2026 Robotaxi pivot.",
      },
      {
        number: "02",
        title: "EU FSD Expansion",
        description: "Dutch regulators push for EU-wide certification, opening high-margin recurring rev across Europe.",
      },
      {
        number: "03",
        title: "Megapack Margins",
        description: "Energy storage reaches 30% gross margins, offsetting automotive pricing pressure.",
      },
    ],
    footnote: "Consensus: Storage could contribute 25% of total earnings by 2028.",
  },

  // ═══════════════════ SLIDE 5: CRITICAL RISKS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "STRUCTURAL RISKS",
    heading: "The Hardware",
    headingAccent: "Erosion.",
    body: "Competing in China is no longer a localized problem; it is a global structural headwind for Tesla's margins.",
    features: [
      { icon: "⚠️", label: "BYD Price Parity", description: "Sub-$20k EVs undercutting high-volume Model 3/Y sales." },
      { icon: "⚠️", label: "Regulatory Hurdles", description: "EU & US regulatory friction slowing Robotaxi network scaling." },
      { icon: "⚠️", label: "Key-Man Risk", description: "CEO focus allocation across multiple high-stakes ventures." },
    ],
    insightBox: "📊 Structural Risk: Operating margins have compressed from 18% to 5.5% in 36 months.",
    footnote: "Forward-looking risk: Global trade tariffs could further disrupt battery supply chains.",
  },

  // ═══════════════════ SLIDE 6: CONCLUSION ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "INVESTMENT VERDICT",
    heading: "The Risk/Reward",
    headingAccent: "Asymmetry.",
    body: "Tesla is the most successful binary bet in market history. It is priced for total dominance; anything less is a re-valuation event.",
    ctaText: "Follow @macroedge_in",
    nextTopic: "Nvidia ($NVDA): Beyond the H100 Cycle",
  },
];
