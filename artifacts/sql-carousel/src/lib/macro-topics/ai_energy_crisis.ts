import type { SlideData } from "../carousel-types";

export const AI_ENERGY_CRISIS: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "THE AI BOTTLENECK",
    tagRight: "JUNE 2026",
    heading: "Powering the",
    headingAccent: "AI Boom.",
    body: "The biggest bottleneck for Artificial Intelligence isn't chips, software, or talent anymore. It is electricity. Hyperscalers are running out of power, and it's triggering a massive shift in the energy sector.",
    levelBadge: "MACRO",
    topicNum: "GRID",
    keywords: ["ENERGY", "AI", "DATACENTERS", "POWER", "FUELCELL", "CLEANTECH"],
    bullets: [
      "⚡ The 380 Megawatt Deal",
      "🔋 Why the grid can't handle AI",
      "🏢 The Data Center crisis",
      "⚛️ The Nuclear & Clean Energy pivot",
      "💼 Where the smart money is going",
    ],
  },

  // ═══════════════════ SLIDE 2: THE PROBLEM ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE GRID CRISIS",
    heading: "The Silicon",
    headingAccent: "Energy Drain.",
    body: "Training and running foundational AI models requires an absolutely staggering amount of electricity.",
    features: [
      { icon: "🔌", label: "The GPU Math", description: "A single Nvidia server rack can consume up to 120kW of power. Legacy data centers were built to handle only 10-15kW per rack." },
      { icon: "🌐", label: "Grid Exhaustion", description: "The legacy power grids in places like Northern Virginia (the data center capital of the world) are literally at maximum capacity." },
      { icon: "🛑", label: "The Growth Cap", description: "Microsoft, Amazon, and Google can't build new data centers without guaranteeing they can actually power them." },
    ],
    insightBox: "💡 The Reality: You can have unlimited money to buy Nvidia chips, but if you can't plug them in, they are useless.",
  },

  // ═══════════════════ SLIDE 3: THE LATEST SOLUTION ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE BIG DEAL",
    heading: "Off-Grid",
    headingAccent: "Clean Baseload.",
    body: "To bypass the broken public power grid, hyperscalers are now aggressively funding their own private power solutions.",
    features: [
      { icon: "🏭", label: "The 380MW Deal", description: "Today, FuelCell Energy and Fit Energy signed a strategic agreement to provide up to 380 Megawatts of clean, on-site power for AI data centers." },
      { icon: "🔋", label: "Baseload Power", description: "AI needs 24/7 uninterrupted power (baseload). Solar and wind are too intermittent without massive battery storage." },
      { icon: "⚡", label: "On-Site Generation", description: "By generating power exactly where the data center is located, tech companies bypass multi-year waiting lists for public grid connections." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE BIG PICTURE ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE MACRO SHIFT",
    heading: "Tech Becomes",
    headingAccent: "Big Energy.",
    body: "The AI supercycle is forcing tech companies to become massive players in the energy markets.",
    steps: [
      { number: "01", title: "Nuclear Renaissance", description: "Tech giants are buying data centers directly attached to nuclear power plants (like Amazon's recent Talen Energy deal) for carbon-free baseload." },
      { number: "02", title: "Natural Gas Bridge", description: "Because clean tech takes years to scale, hyperscalers are quietly relying on natural gas as the only immediate bridge to power the current AI boom." },
      { number: "03", title: "Climate Goal Friction", description: "The extreme power demands of AI are forcing companies like Google and Microsoft to walk back some of their aggressive 'Net Zero' climate pledges." },
    ],
  },

  // ═══════════════════ SLIDE 5: THE INVESTMENT PLAY ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "THE NEXT ALPHA",
    heading: "The 'Picks &",
    headingAccent: "Shovels' Trade.",
    body: "If Nvidia was the first wave of the AI trade, the physical infrastructure to support those chips is the second wave.",
    table: {
      headers: ["Sector", "Why It Matters", "The Play"],
      rows: [
        { cells: ["Cooling Tech", "120kW racks generate extreme heat; liquid cooling is now mandatory.", "Liquid Cooling Manufacturers"], highlight: true },
        { cells: ["Clean Baseload", "Fuel Cells, Geothermal, and Small Modular Nuclear Reactors (SMRs).", "Clean Energy Utilities"], highlight: false },
        { cells: ["Copper / Grid", "Massive amounts of copper are needed to wire the new AI data centers.", "Commodities & Grid Tech"], highlight: true },
      ],
      caption: "The smart money is moving from the software layer down to the physical infrastructure and commodities layer.",
    },
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "The AI Power",
    headingAccent: "Cheat Sheet.",
    body: "The AI race is now an energy race. Here is the summary.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🛑", label: "The Bottleneck", description: "Legacy power grids cannot support the massive power draw of AI GPUs." },
      { icon: "🏭", label: "On-Site Power", description: "Deals like FuelCell Energy's 380MW agreement allow data centers to bypass the public grid." },
      { icon: "⚛️", label: "Nuclear & Gas", description: "Tech giants are desperately seeking 24/7 'baseload' power to keep AI models running." },
      { icon: "📈", label: "The Trade", description: "Look past the chips to the companies building the cooling, wiring, and power generation." },
    ],
  },
];
