import type { SlideData } from "../carousel-types";

export const COINBASE_TOKENIZATION: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "CRYPTO & AI",
    tagRight: "JUNE 2026",
    heading: "Coinbase: The",
    headingAccent: "'Everything Exchange.'",
    body: "Coinbase just unleashed a massive system update, fundamentally blurring the lines between traditional Wall Street, DeFi, and Artificial Intelligence. Here is what you need to know about their aggressive new strategy.",
    levelBadge: "TEARDOWN",
    topicNum: "COIN",
    keywords: ["COINBASE", "AI", "TOKENIZATION", "STOCKS", "CRYPTO", "AGENTS"],
    bullets: [
      "📈 The Launch of Tokenized Stocks",
      "🤖 The AI Investment Advisor",
      "🌐 The 'Agentic Economy' Push",
      "🛡️ The Offshore Regulatory Loophole",
      "💼 What it means for $COIN",
    ],
  },

  // ═══════════════════ SLIDE 2: TOKENIZED STOCKS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE ASSET CLASS",
    heading: "Wall Street",
    headingAccent: "On-Chain.",
    body: "Coinbase is now offering tokenized U.S. stocks, bringing traditional equities into the 24/7 crypto ecosystem.",
    features: [
      { icon: "🪙", label: "1:1 Backing", description: "These are NOT synthetic derivatives. Every token represents true equity ownership of the underlying stock, held in custody." },
      { icon: "🔄", label: "24/7 Trading", description: "While the Nasdaq sleeps, tokenized stocks trade continuously on-chain, eliminating weekend and after-hours risk." },
      { icon: "💸", label: "Dividend Rights", description: "Holders still receive actual dividend payouts directly into their crypto wallets via stablecoins." },
    ],
    insightBox: "💡 The Catch: Due to SEC friction, this is an 'offshore-first' product. U.S. retail investors are completely locked out of this feature for now.",
  },

  // ═══════════════════ SLIDE 3: THE AI ADVISOR ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE SOFTWARE",
    heading: "The AI",
    headingAccent: "Investment Advisor.",
    body: "To capture institutional and retail flows, Coinbase isn't just offering assets—they are offering the intelligence to trade them.",
    features: [
      { icon: "🧠", label: "Coinbase Advisor", description: "A fully SEC-registered AI investment tool designed to provide personalized, regulatory-compliant trade execution." },
      { icon: "📊", label: "Portfolio Management", description: "The AI analyzes your risk tolerance and automatically rebalances your portfolio across crypto and traditional assets." },
      { icon: "🛡️", label: "ACATS Integration", description: "U.S. users can now easily port their existing traditional stock portfolios from legacy brokers into Coinbase's ecosystem." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE AGENTIC ECONOMY ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE VISION",
    heading: "Building the",
    headingAccent: "Agentic Economy.",
    body: "Coinbase is betting the future of finance isn't humans trading on screens, but AI agents transacting on-chain.",
    steps: [
      { number: "01", title: "Agentic Wallets", description: "Coinbase is deploying infrastructure that allows AI agents to have their own crypto wallets and transact autonomously." },
      { number: "02", title: "Micro-Transactions", description: "Agents can pay each other fractions of a cent instantly via Layer-2 networks (like Base) for APIs, data, and compute." },
      { number: "03", title: "The Financial Layer", description: "Coinbase wants to be the primary 'bank' and settlement layer for the emerging AI-to-AI economy." },
    ],
  },

  // ═══════════════════ SLIDE 5: PRE-IPO EXPOSURE ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "THE PRODUCT SUITE",
    heading: "The Ultimate",
    headingAccent: "Liquidity Hub.",
    body: "Beyond stocks and AI, Coinbase is aggressively expanding its product suite to become the only exchange you ever need.",
    table: {
      headers: ["New Feature", "What It Does", "Target Audience"],
      rows: [
        { cells: ["Pre-IPO Perpetuals", "Trade futures on private companies (OpenAI, SpaceX) before they go public.", "Degens & Institutions"], highlight: true },
        { cells: ["Equities/Crypto Options", "Combined options trading across traditional and digital assets.", "Options Traders"], highlight: false },
        { cells: ["Tokenized Treasuries", "Earn risk-free USD yield directly on-chain.", "Corporate Treasuries"], highlight: false },
      ],
      caption: "By absorbing traditional finance products, Coinbase is transforming from a 'Crypto Exchange' into a 'Financial Super-App.'",
    },
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "The Coinbase",
    headingAccent: "Cheat Sheet.",
    body: "Brian Armstrong is building the rails for the next decade of finance. Here is the summary.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📈", label: "Tokenized Stocks", description: "1:1 backed U.S. equities trading 24/7 on-chain (Offshore only)." },
      { icon: "🤖", label: "AI Advisor", description: "Registered AI tools to execute trades and rebalance portfolios." },
      { icon: "🌐", label: "Agentic Economy", description: "Providing wallets and settlement layers for autonomous AI agents." },
      { icon: "💼", label: "The $COIN Play", description: "Coinbase is positioning to monopolize the intersection of AI, TradFi, and Crypto." },
    ],
  },
];
