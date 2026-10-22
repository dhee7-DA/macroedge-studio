import type { SlideData } from "@workspace/carousel-engine";

export const NVDA_TEARDOWN: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INSTITUTIONAL TEARDOWN",
    tagRight: "$NVDA",
    heading: "Nvidia:",
    headingAccent: "The AI Monopoly.",
    body: "The world's most critical semiconductor firm holds a 90% share of the AI data center market. Here is the institutional breakdown.",
    levelBadge: "STOCKS",
    topicNum: "NV",
  },

  // ═══════════════════ SLIDE 2: THE BUSINESS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE BUSINESS MODEL",
    heading: "The GPU",
    headingAccent: "Gold Rush.",
    body: "Nvidia doesn't just sell chips; they sell the infrastructure of the future. Their H100 and Blackwall architectures are the 'Gold' of the AI era.",
    features: [
      { icon: "🌍", label: "90% Market Share", description: "Near-total dominance of the AI accelerator market for large language models." },
      { icon: "💰", label: "Software Moat (CUDA)", description: "3+ million developers are locked into Nvidia's proprietary software ecosystem." },
      { icon: "🚀", label: "Data Center Growth", description: "Data center revenue now accounts for nearly 85% of total company top-line growth." },
      { icon: "🏰", label: "Supply Chain Power", description: "Unrivaled priority access to TSMC's most advanced 3nm and 4nm nodes." },
    ],
    insightBox: "💡 Nvidia's true moat isn't just the hardware; it's the decade-old CUDA software ecosystem that developers cannot easily leave.",
  },

  // ═══════════════════ SLIDE 3: INTELLIGENCE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MARKET INTELLIGENCE",
    heading: "The Big Five",
    headingAccent: "Metrics.",
    body: "Latest verified metrics for NVIDIA Corp. ($NVDA) as of April 14, 2026.",
    features: [
      { icon: "💵", label: "Current Price", description: "$189.31 (Trading near 52-week highs)" },
      { icon: "🏦", label: "Market Cap", description: "$4.58 Trillion (World #1)" },
      { icon: "📊", label: "Trailing P/E", description: "38.48 (Sector lead valuation)" },
      { icon: "📈", label: "Forward P/E (FY27)", description: "31.25 (Priced for Blackwell scaling)" },
      { icon: "📅", label: "52-Week Range", description: "$84.22 - $211.19" },
    ],
    insightBox: "🎯 Data as of April 14, 2026. Verified via Yahoo Finance & Institutional Sources.",
    footnote: "Sources: SEC Filings (FY25), Yahoo Finance, MarketWatch Consensus Data.",
  },

  // ═══════════════════ SLIDE 4: FUNDAMENTALS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "FUNDAMENTAL SCORECARD",
    heading: "The Cash",
    headingAccent: "Machine.",
    body: "Nvidia represents the most efficient capital-to-profit conversion in the S&P 500, characterized by unrivaled pricing power.",
    features: [
      { icon: "💵", label: "Free Cash Flow (TTM)", description: "$65.2 Billion (Deep institution support)" },
      { icon: "🛡️", label: "Net Cash", description: "$12.4 Billion (Negative net leverage)" },
      { icon: "📊", label: "PEG Ratio", description: "1.15 (Efficient valuation vs growth)" },
      { icon: "⚙️", label: "ROIC", description: "84.1% (Best-in-class capital efficiency)" },
    ],
    insightBox: "💡 Fundamental Call: High ROIC suggests Nvidia still has significant reinvestment opportunities at high returns.",
    footnote: "FCF includes impact of the $60B expanded share buyback program.",
  },

  // ═══════════════════ SLIDE 5: THE MONOPOLY ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "COMPETITIVE POSITION",
    heading: "The AI",
    headingAccent: "Flywheel.",
    body: "Nvidia creates a self-reinforcing loop that competitors like AMD and Intel struggle to break.",
    steps: [
      {
        number: "01",
        title: "Compute Dominance",
        description: "H100/H200 chips are the industry standard for LLM training (GPT-5, Gemini, Llama).",
      },
      {
        number: "02",
        title: "Liquid Cooling Advantage",
        description: "Leading the shift to GB200 systems, which solve massive power/heat issues for Big Tech.",
      },
      {
        number: "03",
        title: "Network Effects",
        description: "InfiniBand and Spectrum-X networking ensure Nvidia chips talk to each other faster than anyone else's.",
      },
    ],
  },

  // ═══════════════════ SLIDE 5: RISKS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "CRITICAL RISKS",
    heading: "What Could",
    headingAccent: "Break?",
    body: "No monopoly is permanent. Nvidia faces three structural headwinds over the next 24 months.",
    features: [
      { icon: "⚠️", label: "China Scaling Risky", description: "Continued US export bans on high-end H20/H800 chips limit a massive revenue stream." },
      { icon: "⚠️", label: "In-House ASICs", description: "Google (TPU), Amazon (Trainium), and Meta (MTIA) are building their own competing silicon." },
      { icon: "⚠️", label: "Cyclical Peak", description: "The 'AI Buildout' phase may cool as Big Tech shifts from training to inference efficiency." },
    ],
    insightBox: "📊 Valuation Risk: At 38x P/E, any slight revenue miss could trigger a 15-20% institutional correction.",
    footnote: "Forward P/E estimates based on Bloomberg consensus earnings for FY27.",
  },

  // ═══════════════════ SLIDE 6: CONCLUSION ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE BOTTOM LINE",
    heading: "The King of",
    headingAccent: "Computing.",
    body: "Nvidia is the most successful picks-and-shovels play in history. While the valuation is rich, the dominance is undeniable.",
    ctaText: "Follow @macroedge_in for more",
    features: [
      { icon: "🏢", label: "Institutional Grade", description: "Core holding for nearly every major pension and retail fund." },
      { icon: "🧠", label: "Intelligence Moat", description: "Software, not hardware, is the real barrier to entry." },
      { icon: "💰", label: "Cash Machine", description: "Unrivaled free cash flow generation in the semiconductor space." },
    ],
  },
];
