import type { SlideData } from "../carousel-types";

export const INDIA_MEGA_IPOS: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INDIA INTELLIGENCE",
    tagRight: "JUNE 2026",
    heading: "The Great",
    headingAccent: "Liquidity Drain.",
    body: "Two of the most anticipated IPOs in Indian history—The National Stock Exchange (NSE) and Jio Platforms—just officially filed their papers. Together, they are about to suck tens of thousands of crores out of the secondary market.",
    levelBadge: "MACRO",
    topicNum: "IPO",
    keywords: ["NSE", "JIO", "IPO", "LIQUIDITY", "RELIANCE", "SEBI", "MARKETS"],
    bullets: [
      "📈 The ₹30,000 Crore NSE OFS",
      "📱 Jio's ₹27,500 Crore Debt Play",
      "🩸 The Secondary Market Drain",
      "🛡️ Valuations & Structure",
      "💼 What this means for retail",
    ],
  },

  // ═══════════════════ SLIDE 2: NSE IPO BREAKDOWN ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE EXCHANGE",
    heading: "The NSE",
    headingAccent: "Goes Public.",
    body: "After years of regulatory hurdles and the co-location scam shadow, the National Stock Exchange of India has filed its DRHP with SEBI.",
    features: [
      { icon: "💰", label: "The Size", description: "The IPO is estimated at ₹30,000 crore, making it one of the largest in Indian history." },
      { icon: "📉", label: "The Structure", description: "It is a 100% Offer for Sale (OFS). No new capital is going into the company; existing shareholders are just cashing out ~6%." },
      { icon: "🏛️", label: "The Valuation", description: "Based on grey market premiums, the NSE is being valued at over ₹5 Trillion." },
    ],
    insightBox: "💡 The Reality: You are buying into a monopoly, but you are buying at an absolute premium valuation from early investors cashing out at the top.",
  },

  // ═══════════════════ SLIDE 3: THE JIO BEHEMOTH ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE TECH PLAY",
    heading: "Jio Platforms",
    headingAccent: "Unlocks Value.",
    body: "Reliance Industries just approved the DRHP for Jio Platforms, looking to raise up to $3.8 Billion.",
    features: [
      { icon: "💸", label: "The Capital", description: "A fresh issue of up to 27 crore equity shares. The goal? Pay off ₹27,500 crore of debt sitting in Reliance Jio Infocomm." },
      { icon: "🚀", label: "The Future", description: "Jio isn't just telco anymore. They are pushing heavily into satellite networking to directly rival Elon Musk's Starlink." },
      { icon: "👑", label: "The Succession", description: "The IPO is being aggressively led by the new generation: Akash, Isha, and Anant Ambani." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE LIQUIDITY BLACK HOLE ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "MACRO IMPACT",
    heading: "The Secondary",
    headingAccent: "Market Drain.",
    body: "When massive IPOs hit the market, institutional and retail money must be reallocated to buy them. This drains liquidity from existing stocks.",
    table: {
      headers: ["IPO", "Estimated Size", "Where the money comes from"],
      rows: [
        { cells: ["NSE IPO", "₹30,000 Crore", "Institutions selling Mid/Small Caps"], highlight: true },
        { cells: ["Jio Platforms", "~₹31,000 Crore", "Retail reallocating from Mutual Funds / Cash"], highlight: false },
        { cells: ["Total Drain", "₹61,000+ Crore", "A massive vacuum of capital from the secondary market"], highlight: true },
      ],
      caption: "This is a key reason the Indian market rally snapped this week. Big money is hoarding cash for these allocations.",
    },
  },

  // ═══════════════════ SLIDE 5: THE OFS TRAP ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "INVESTOR PSYCHOLOGY",
    heading: "Understanding the",
    headingAccent: "OFS Mechanics.",
    body: "Why the NSE IPO structure matters to your returns.",
    steps: [
      { number: "01", title: "Fresh Issue vs OFS", description: "Jio is a 'Fresh Issue'—the money goes to pay down corporate debt, making the company stronger. NSE is an 'OFS'—the money goes into the pockets of early investors." },
      { number: "02", title: "The Valuation Peak", description: "Early investors only sell via OFS when they believe the valuation is stretched and it's a good time to exit." },
      { number: "03", title: "The Listing Pop", description: "Due to massive retail demand for 'brand names', both will likely see a listing pop, but long-term returns from an OFS at peak valuation are historically poor." },
    ],
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "The Mega-IPO",
    headingAccent: "Cheat Sheet.",
    body: "The primary market is red hot, but the secondary market will suffer the liquidity drain. Position your portfolio accordingly.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📈", label: "NSE", description: "₹30k Crore OFS. Monopoly asset, but priced for perfection." },
      { icon: "📱", label: "Jio Platforms", description: "$3.8B Fresh Issue. Debt reduction + Satellite Tech push." },
      { icon: "🩸", label: "The Drain", description: "Expect weakness in mid-caps as institutions hoard cash." },
      { icon: "💼", label: "Action", description: "Don't chase the listing pop blindly. Let the dust settle." },
    ],
  },
];
