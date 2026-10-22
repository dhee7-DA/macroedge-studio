import type { SlideData } from "../carousel-types";

export const SPACEX_IPO: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "MARKET MEGA-EVENT",
    tagRight: "JUNE 2026",
    heading: "The SpaceX",
    headingAccent: "Trillion-Dollar Debut.",
    body: "SpaceX just executed the largest IPO in human history, instantly creating a $2.1 Trillion behemoth. But beneath the hype, is the valuation justified or is this the peak of a liquidity bubble?",
    levelBadge: "STOCKS",
    topicNum: "SPCX",
    keywords: ["SPACEX", "IPO", "STARLINK", "STARSHIP", "MUSK", "AEROSPACE", "VALUATION"],
    bullets: [
      "🚀 The $75B Capital Raise",
      "💰 Breaking Down the $2.1T Value",
      "🛰️ Starlink: The Cash Cow",
      "🤖 Starship & xAI: The Cash Pits",
      "📈 Post-IPO Market Impact",
    ],
  },

  // ═══════════════════ SLIDE 2: THE DEBUT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE NUMBERS",
    heading: "The Biggest",
    headingAccent: "IPO in History.",
    body: "On June 12, 2026, SpaceX (Ticker: SPCX) debuted on the Nasdaq. It didn't just break records—it shattered them.",
    features: [
      { icon: "📈", label: "The Pricing", description: "Priced at $135/share ($1.77T valuation), opened at $150, and closed its first day at $160.95 (+19%)." },
      { icon: "💰", label: "The Raise", description: "SpaceX raised $75 Billion from the public market, doubling Saudi Aramco's previous record." },
      { icon: "🚀", label: "The Flex", description: "One hour before the opening bell, SpaceX literally launched a Falcon 9 with 29 Starlink satellites. The ultimate operational flex." },
    ],
    insightBox: "💡 The Result: Elon Musk cemented his status as the world's first Trillionaire, and SPCX became an instant mega-cap index heavyweight.",
  },

  // ═══════════════════ SLIDE 3: VALUATION BREAKDOWN ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "VALUATION MATRIX",
    heading: "How is it worth",
    headingAccent: "$2.1 Trillion?",
    body: "Wall Street isn't valuing SpaceX as a 'Rocket Company'. They are valuing it as three separate monopolies stacked in a trench coat.",
    features: [
      { icon: "🌐", label: "1. Starlink (The Profit Engine)", description: "Global broadband monopoly. High margins, massive subscriber growth, recurring revenue. Valued at ~$1T alone." },
      { icon: "🏗️", label: "2. Falcon / Launch Services", description: "Total dominance of low-earth orbit cargo. It is the 'FedEx of Space'. Valued as a high-margin utility." },
      { icon: "🛸", label: "3. Starship & xAI (The Growth Premium)", description: "The promise of Mars, orbital data centers, and AI integration. Highly speculative, but given infinite valuation premium by retail." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE STARLINK MOAT ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "THE CASH COW",
    heading: "Starlink is the",
    headingAccent: "Real Business.",
    body: "Rockets are cool, but telecom is where the cash is. Starlink is the true financial engine of SPCX.",
    table: {
      headers: ["Metric", "Traditional Telecom", "Starlink"],
      rows: [
        { cells: ["Infrastructure", "Digging trenches, cell towers", "Satellites in orbit"], highlight: false },
        { cells: ["Global Reach", "Limited by geography", "100% of Earth's surface"], highlight: true },
        { cells: ["Customer Acquisition", "High local competition", "Zero competition in remote areas"], highlight: false },
        { cells: ["EBITDA Margins", "Medium (~35%)", "Software-like (~60%+)"], highlight: true },
      ],
      caption: "Starlink is effectively a global ISP with software margins. That is why the valuation is in the trillions.",
    },
  },

  // ═══════════════════ SLIDE 5: THE RISKS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE BEAR CASE",
    heading: "The $2 Trillion",
    headingAccent: "Money Pits.",
    body: "The valuation assumes perfect execution for the next decade. But there are massive capital black holes hidden in the balance sheet.",
    features: [
      { icon: "🔥", label: "Starship Burn Rate", description: "Starship is the largest engineering project in human history. The R&D and failure costs are astronomical." },
      { icon: "🤖", label: "The AI Subsidy", description: "SpaceX is effectively subsidizing Musk's xAI ambitions (Orbital Data Centers). Compute is a capex nightmare." },
      { icon: "🏛️", label: "Regulatory Target", description: "With a monopoly on US space access and global satellite internet, antitrust lawsuits and regulatory crackdowns are guaranteed." },
    ],
    insightBox: "⚠️ If Starship faces multi-year delays, the 'Growth Premium' of the stock will collapse, taking the $2.1T valuation down with it.",
  },

  // ═══════════════════ SLIDE 6: MARKET CONTAGION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "LIQUIDITY DRAIN",
    heading: "The SPCX",
    headingAccent: "Black Hole.",
    body: "A $75 Billion IPO doesn't happen in a vacuum. It drains liquidity from the rest of the market.",
    features: [
      { icon: "📉", label: "The Selling of the 'Magnificent 7'", description: "To buy SPCX, institutional funds had to sell their existing tech winners (Apple, Microsoft, Nvidia). This caused a brief broad-market dip." },
      { icon: "🩸", label: "Death of Legacy Aerospace", description: "Boeing, Lockheed, and traditional aerospace stocks saw severe capital flight as investors rotated into the new apex predator." },
      { icon: "📊", label: "Index Inclusion", description: "SPCX is so large it will be fast-tracked into the S&P 500. Passive index funds will be FORCED to buy it, creating a structural bid." },
    ],
  },

  // ═══════════════════ SLIDE 7: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE COMPLETE PICTURE",
    heading: "The SPCX",
    headingAccent: "Cheat Sheet.",
    body: "Save this post. SpaceX is no longer just a startup; it is a macroeconomic force.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "💰", label: "The Valuation", description: "$2.1 Trillion Post-IPO." },
      { icon: "🌐", label: "The Bull Case", description: "Starlink's software margins and telecom monopoly." },
      { icon: "🔥", label: "The Bear Case", description: "Starship's infinite R&D burn rate and regulatory risks." },
      { icon: "📊", label: "The Macro Impact", description: "Draining liquidity from legacy tech and aerospace." },
    ],
  },
];
