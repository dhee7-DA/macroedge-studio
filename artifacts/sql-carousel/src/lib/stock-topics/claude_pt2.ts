import type { SlideData } from "@workspace/carousel-engine";

export const CLAUDE_PT2: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "AI ECONOMICS SERIES",
    tagRight: "PART 2: THE VALUATION",
    heading: "Claude’s $60B",
    headingAccent: "Stock Plan.",
    body: "Inside the economics of Anthropic. From an $8B Amazon stake to the most anticipated $60B IPO in technology history.",
    levelBadge: "FINANCIAL",
    topicNum: "CL2",
    bullets: ["The $30B Revenue Run Rate", "Amazon & Google Stakes", "October 2026 IPO Roadmap"],
  },

  // ═══════════════════ SLIDE 2: REVENUE GROWTH ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "FINANCIAL PERFORMANCE",
    heading: "The Revenue",
    headingAccent: "Explosion.",
    body: "Anthropic's growth is no longer speculative. It is the fastest-scaling SaaS (Software as a Service) entity in world history.",
    features: [
      { icon: "📈", label: "Current Run Rate", description: "$30B (Annualized) as of April 2026. Up from $9B in late 2025." },
      { icon: "💰", label: "Enterprise Tier", description: ">1,000 customers spending $1M+/year on Claude Enterprise plans." },
      { icon: "🏢", label: "Margin Profile", description: "Targeting 75% gross margins as inference costs decouple from training capex." },
    ],
    insightBox: "💡 Analysis: Anthropic is adding ~$1.5B in new ARR (Annual Recurring Revenue) every single month.",
  },

  // ═══════════════════ SLIDE 3: UNIT ECONOMICS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE AI COST CURVE",
    heading: "Efficiency",
    headingAccent: "Arbitrage.",
    body: "The core of Anthropic’s profitability is the decoupling of 'Intelligence' from 'Compute.'",
    features: [
      { icon: "📉", label: "Inference Costs", description: "Haiku 4.7 has reduced inference costs by 80% compared to the 3.5 cycle." },
      { icon: "🧠", label: "Token Density", description: "New 'Compressed Attention' mechanisms allow for 1M+ token contexts at 1/10th the cost." },
      { icon: "⚡", label: "AWS Trainium", description: "Utilizing Amazon’s custom silicon to bypass the 'NVIDIA Tax' in training." },
    ],
    insightBox: "📊 Fact: Anthropic’s unit economics for large-scale agents are now 40% better than OpenAI’s unified stack.",
  },

  // ═══════════════════ SLIDE 4: AMAZON ALLIANCE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "STRATEGIC STAKEHOLDERS",
    heading: "The Amazon",
    headingAccent: "Powerplay.",
    body: "Amazon is not just an investor; it is the exclusive infrastructure backbone for Anthropic’s global scale.",
    features: [
      { icon: "💸", label: "Total Investment", description: "$8B committed across multiple rounds. Primary driver of Amazon's 2026 'Other Income'." },
      { icon: "☁️", label: "AWS Bedrock", description: "Claude is the exclusive 'Frontier Model' for Amazon's multi-billion dollar AI cloud." },
      { icon: "🏛️", label: "Equity Gain", description: "Amazon reported a $12B paper gain on its Anthropic stake in 1Q26." },
    ],
    insightBox: "🎯 Strategic Take: Anthropic is the 'AWS of Intelligence.' One cannot scale without the other.",
  },

  // ═══════════════════ SLIDE 5: GOOGLE GUARD ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "STRATEGIC HEDGING",
    heading: "The Google",
    headingAccent: "Hedge.",
    body: "Google’s stake in Anthropic serves as a critical strategic fallback in case of internal Gemini development delays.",
    features: [
      { icon: "🛡️", label: "Equity Stake", description: "~14% ownership as of April 2026. A multi-billion dollar safety net." },
      { icon: "🌍", label: "Vertex AI", description: "Claude is a first-class citizen on Google Cloud, driving massive GCP compute revenue." },
      { icon: "⚖️", label: "Balanced Duopoly", description: "Google uses Anthropic to prevent OpenAI/Microsoft from achieving total market capture." },
    ],
    insightBox: "💡 Note: Google’s stake ensures they win regardless of which frontier model dominates the enterprise market.",
  },

  // ═══════════════════ SLIDE 6: THE CAPEX PROBLEM ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE TRAINING WALL",
    heading: "The $10B",
    headingAccent: "Cluster.",
    body: "Frontier AI is the most capital-intensive industry in history. The cost of training the next-gen 'Claude 5' is staggering.",
    features: [
      { icon: "🏗️", label: "Compute Capex", description: "Estimated $10B+ for the next flagship training cluster (1M+ GPUs)." },
      { icon: "⚡", label: "Power Demand", description: "Projected 500MW site requirements for the 2027 development cycle." },
      { icon: "💵", label: "Burn Rate", description: "Consuming ~$1.2B per quarter in R&D and specialized talent acquisition." },
    ],
    insightBox: "⚠️ Risk: The 'Winner-Take-All' race requires constant, multi-billion dollar infusions to stay on the frontier curve.",
  },

  // ═══════════════════ SLIDE 7: VALUATION TRAJECTORY ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "MARKET RERATING",
    heading: "From Startup",
    headingAccent: "to Titan.",
    body: "Anthropic's valuation trajectory has outperformed every tech company in the last 20 years.",
    features: [],
    steps: [
      {
        number: "01",
        title: "The $18B Foundation",
        description: "Late 2023 valuation based on early safety research and the Claude 2.1 release."
      },
      {
        number: "02",
        title: "The $380B Pivot",
        description: "February 2026 Series G. Driven by the 4.7 release and the $30B revenue run rate."
      },
      {
        number: "03",
        title: "The $800B Target",
        description: "Current secondary market interest as the company prepares for its public debut."
      }
    ],
    insightBox: "📈 Context: This valuation is backed by a 15x Revenue Multiple—aggressive, but inline with Nvidia’s 2024 peak.",
  },

  // ═══════════════════ SLIDE 8: THE IPO ROADMAP ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "OCTOBER 2026",
    heading: "The $60 Billion",
    headingAccent: "Raise.",
    body: "Anthropic is reportedly in early-stage talks with Goldman Sachs and JPMorgan for a historic October 2026 IPO.",
    features: [
      { icon: "🏦", label: "IPO Target", description: "Aiming to raise $60B+ to fund the 'Claude 5' and 'Claude 6' training cycles." },
      { icon: "📊", label: "Strategic Float", description: "Plans to float 15% of the company, maintaining majority control with the founders." },
      { icon: "🏛️", label: "Public Readiness", description: "Currently strengthening the board and legal teams for SEC (Securities and Exchange Commission) compliance." },
    ],
    insightBox: "🎯 Forecast: This will be the 'AI Decoupling' event, where Anthropic becomes a standalone trillion-dollar contender.",
  },

  // ═══════════════════ SLIDE 10: INSTITUTIONAL SENTIMENT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE SMART MONEY",
    heading: "The Bull",
    headingAccent: "Case.",
    body: "Why the smart money is betting on safety. In an age of autonomous agents, 'Trust' is the only sustainable moat.",
    features: [
      { icon: "🏛️", label: "Regulatory Capture", description: "Anthropic is helping governments write AI laws, ensuring they are the standard." },
      { icon: "📉", label: "Churn Resistance", description: "Once a bank builds its legal stack on Claude, the 'Switching Costs' are near-infinite." },
      { icon: "🧠", label: "Talent Density", description: "Anthropic maintains the highest 'Researcher per Dollar' efficiency in the world." },
    ],
    insightBox: "🎯 Verdict: Anthropic isn't just selling AI; it's selling 'Institutional Stability' in an unstable tech cycle.",
  },

  // ═══════════════════ SLIDE 11: THE WHY NOW? ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MARKET WINDOW",
    heading: "The Perfect",
    headingAccent: "Window.",
    body: "The October 2026 IPO date is strategically timed to catch the peak of the 'Agentic Productivity' wave.",
    features: [
      { icon: "📊", label: "Macro Tailwinds", description: "Expected interest rate cuts in late 2026 favor high-growth tech valuations." },
      { icon: "🚀", label: "Product Cycle", description: "Timed to coincide with the first 'Billion-User' agentic app launches." },
      { icon: "⚖️", label: "Legal Clarity", description: "Anticipated resolution of major AI copyright cases providing a clear runway." },
    ],
    insightBox: "💡 Strategy: The goal is to exit the 'Private Funding' phase before Capex reaches the $100B per model milestone.",
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL VERDICT",
    heading: "The New",
    headingAccent: "Sovereign.",
    body: "Anthropic is building the first 'Utility Scale' intelligence. The 2026 IPO will be the moment AI moves from 'Experiment' to 'Empire.'",
    ctaText: "Follow @macroedge_in",
  },
];
