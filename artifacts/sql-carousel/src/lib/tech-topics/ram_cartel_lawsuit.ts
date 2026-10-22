import type { SlideData } from "../carousel-types";

export const RAM_CARTEL_LAWSUIT: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "ANTITRUST LAWSUIT",
    tagRight: "JUNE 2026",
    heading: "The AI",
    headingAccent: "Cartel?",
    body: "Everyone thought the massive surge in tech prices was a natural consequence of the AI Boom eating up the global supply of memory chips. A massive new antitrust lawsuit alleges something much darker: Market Manipulation.",
    levelBadge: "TEARDOWN",
    topicNum: "RAM",
    keywords: ["ANTITRUST", "SAMSUNG", "MICRON", "SK HYNIX", "MONOPOLY", "DRAM"],
    bullets: [
      "⚖️ Class-Action Lawsuit Filed in CA",
      "📉 The 'Artificial' Supply Squeeze",
      "🧠 Using AI as a 'Cover Story'",
      "💸 Prices Inflated by 700%",
      "🚨 A History of Criminal Price-Fixing",
    ],
  },

  // ═══════════════════ SLIDE 2: THE MONOPOLY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MARKET DYNAMICS",
    heading: "The 'Big",
    headingAccent: "Three'.",
    body: "To understand how a scheme like this is possible, you have to look at the extreme consolidation of the memory chip market.",
    features: [
      { icon: "🇰🇷", label: "Samsung", description: "The undisputed heavyweight, controlling roughly 40-45% of the global DRAM market." },
      { icon: "🇰🇷", label: "SK Hynix", description: "The primary supplier of HBM (High-Bandwidth Memory) for Nvidia, controlling another ~30%." },
      { icon: "🇺🇸", label: "Micron", description: "The American giant that holds the remaining ~20% of the market share." },
    ],
    insightBox: "💡 The Reality: These three companies control over 90% of the global memory market. They operate as an effective oligopoly, meaning they dictate global pricing.",
  },

  // ═══════════════════ SLIDE 3: THE CRIME ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE ALLEGATIONS",
    heading: "Weaponizing",
    headingAccent: "The Boom.",
    body: "The lawsuit alleges that these companies used the massive demand for AI as a convenient 'cover story' to squeeze the broader consumer market.",
    features: [
      { icon: "🏭", label: "Artificial Scarcity", description: "Plaintiffs claim the Big Three intentionally coordinated to restrict the production of standard consumer memory chips." },
      { icon: "📈", label: "The 700% Spike", description: "By choking off supply, they allegedly forced commodity DRAM prices to inflate by 700% over the last four years." },
      { icon: "🍎", label: "Collateral Damage", description: "This artificial squeeze is exactly what forced consumer giants like Apple to aggressively hike prices on Macs and iPads recently." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE HISTORY ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "REPEAT OFFENDERS",
    heading: "A Habit of",
    headingAccent: "Price Fixing.",
    body: "The most damning aspect of the lawsuit? The defendants have literally been caught doing this before.",
    table: {
      headers: ["Company", "Past Infraction", "The Penalty"],
      rows: [
        { cells: ["Samsung", "DRAM Price-Fixing (1999-2002)", "Pled guilty to DOJ criminal charges; paid $300M fine."], highlight: true },
        { cells: ["SK Hynix", "DRAM Price-Fixing (1999-2002)", "Pled guilty to DOJ criminal charges; paid $185M fine."], highlight: true },
        { cells: ["Micron", "DRAM Price-Fixing (1999-2002)", "Cooperated with investigators to receive amnesty."], highlight: false },
      ],
      caption: "The lawsuit argues that the 'Big Three' simply reverted to their old cartel behavior, updated for the AI era.",
    },
  },

  // ═══════════════════ SLIDE 5: THE MACRO FALLOUT ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "MARKET IMPACT",
    heading: "The Threat to",
    headingAccent: "Big Tech.",
    body: "If the allegations are proven true, the fallout extends far beyond just the memory manufacturers.",
    steps: [
      { number: "01", title: "Margin Compression", description: "Companies relying on these chips (Apple, Dell, HP) are seeing their margins illegally compressed, hurting shareholders." },
      { number: "02", title: "The DOJ Awakens", description: "While this is currently a civil class-action suit, a formal DOJ or FTC antitrust probe would trigger massive volatility in semiconductor stocks." },
      { number: "03", title: "The 'AI Premium'", description: "It forces investors to ask: How much of the current 'AI Supercycle' pricing is driven by real demand, and how much is artificial manipulation?" },
    ],
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "The RAM Cartel",
    headingAccent: "Cheat Sheet.",
    body: "Is the AI supply squeeze real, or manufactured? Here is the summary.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🏛️", label: "The Lawsuit", description: "Samsung, Micron, and SK Hynix sued in CA for alleged antitrust violations." },
      { icon: "🛑", label: "The Scheme", description: "Accused of restricting supply to inflate memory prices by 700%." },
      { icon: "🎭", label: "The Cover", description: "Allegedly used the 'AI Data Center' narrative to mask their supply manipulation." },
      { icon: "🔁", label: "Repeat Offenders", description: "Two of the three pled guilty to criminal price-fixing in the early 2000s." },
    ],
  },
];
