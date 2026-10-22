import type { SlideData } from "@workspace/carousel-engine";

export const FOUNDRY_WARS: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "GEOPOLITICAL TECHNOLOGY",
    tagRight: "SIGNAL: APRIL 24, 2026",
    heading: "The Foundry",
    headingAccent: "Wars.",
    body: "Inside the battle for sub-2nm dominance. From TSMC's 72% moat to Intel’s 18A ramp and GlobalFoundries' photonic niche—who owns the silicon future?",
    levelBadge: "MACRO",
    topicNum: "FW",
    bullets: ["TSMC: 72% Market Share", "Intel: 18A High-Volume Ramp", "Samsung: 3nm GAA Yield Pivot"],
  },

  // ═══════════════════ SLIDE 2: THE GLOBAL MAP ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "GEOPOLITICAL TRIAGE",
    heading: "Silicon",
    headingAccent: "Sovereignty.",
    body: "Semiconductor manufacturing is no longer just a business. It is the bedrock of national security and AI (Artificial Intelligence) dominance in 2026.",
    features: [
      { icon: "🇹🇼", label: "Taiwan (TSMC)", description: "The global hub for 90%+ of advanced AI chips. The ultimate geopolitical 'Shield.'" },
      { icon: "🇺🇸", label: "USA (Intel/GFS)", description: "Massive reshoring effort via the CHIPS Act to secure domestic leading-edge capacity." },
      { icon: "🇰🇷", label: "Korea (Samsung)", description: "Leading the convergence of High-Bandwidth Memory (HBM) and logic manufacturing." },
    ],
    insightBox: "💡 Analysis: As the Strait of Hormuz remains blocked, the 'Sovereignty' of the silicon supply chain is the top priority for Big Tech.",
  },

  // ═══════════════════ SLIDE 3: TSMC ($TSM) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE UNCHALLENGED KING",
    heading: "TSMC: The",
    headingAccent: "72% Moat.",
    body: "TSMC remains the primary gateway for the AI revolution. If you want a 2nm or 3nm chip in 2026, you likely go through Hsinchu.",
    features: [
      { icon: "📈", label: "Market Share", description: "Dominates ~72% of the pure-play foundry market, specifically in AI and HPC (High-Performance Computing)." },
      { icon: "⚛️", label: "2nm (N2) Status", description: "High-volume production fully booked for 2026. Advanced packaging (CoWoS) is the primary bottleneck." },
      { icon: "🛡️", label: "Client Moat", description: "Sole provider for Apple’s A19/M5 and NVIDIA’s Blackwell architecture." },
    ],
    insightBox: "🎯 Strategic Intel: TSMC's real power is now in 'Packaging,' not just 'Printing.' CoWoS capacity is the true AI limit.",
  },

  // ═══════════════════ SLIDE 4: SAMSUNG FOUNDRY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE GAA PIONEER",
    heading: "Samsung: The",
    headingAccent: "GAA Gamble.",
    body: "Samsung was the first to bet on Gate-All-Around (GAA) architecture. After years of yield struggles, the pivot is finally paying off.",
    features: [
      { icon: "⚖️", label: "3nm GAA Yields", description: "Commercial yields have finally stabilized, allowing Samsung to compete for 2027 design wins." },
      { icon: "🧠", label: "Memory-Logic", description: "The only player capable of building the GPU and the HBM (High-Bandwidth Memory) on one site." },
      { icon: "📉", label: "Market Share: 7%", description: "Currently holding the #2 spot, but facing aggressive pressure from Intel’s Foundry 2.0." },
    ],
    insightBox: "💡 Note: Samsung's 'Single-Source' capability (Logic + HBM) is their only path to challenging TSMC's dominance.",
  },

  // ═══════════════════ SLIDE 5: INTEL FOUNDRY ($INTC) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE CHALLENGER",
    heading: "Intel: The",
    headingAccent: "18A Ramp.",
    body: "Intel is the only western firm capable of challenging the Asian duopoly at the leading edge. 18A is the foundation of the 'National Foundry.'",
    features: [
      { icon: "⚙️", label: "18A Volume", description: "High-volume manufacturing officially live with 10,000 wafer starts per week in Q1 2026." },
      { icon: "🛠️", label: "Tesla Partnership", description: "Secured Tesla for the 14A node, validating their advanced contract manufacturing model." },
      { icon: "🇺🇸", label: "CHIPS Act Boost", description: "The primary beneficiary of $20B+ in U.S. federal aid to reshore sub-2nm capacity." },
    ],
    insightBox: "🎯 Market Call: Intel is the 'Hedge' play. If Taiwan-China tensions escalate, Intel becomes the world's most valuable company.",
  },

  // ═══════════════════ SLIDE 6: GLOBALFOUNDRIES ($GFS) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "SPECIALIZED DEEP TECH",
    heading: "GFS: The",
    headingAccent: "Photonic Niche.",
    body: "GlobalFoundries isn't racing for 2nm. Instead, they are dominating the 'Specialized' nodes required for the 2026 AI fabric.",
    features: [
      { icon: "💡", label: "Silicon Photonics", description: "The leader in light-based chip manufacturing. Forecasted $75M revenue in 2026 for SiPh alone." },
      { icon: "🚗", label: "Auto & RF", description: "Dominates the Radio Frequency (RF) and Automotive Grade chips that power the EV/Robotaxis." },
      { icon: "💰", label: "$1B Target", description: "Aiming for an annual Silicon Photonics run-rate of $1B+ by the end of the decade." },
    ],
    insightBox: "🕵️ Analyst Note: $GFS is the 'Quiet Winner' of the AI era. They build the 'Connectors' that make the GPUs work.",
  },

  // ═══════════════════ SLIDE 7: SIDE-BY-SIDE ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "FOUNDRY SCOREBOARD",
    heading: "The Foundry",
    headingAccent: "Scorecard.",
    body: "Comparing the Big 4 as of April 24, 2026. Metrics focus on Advanced Nodes and Market Influence.",
    table: {
      headers: ["Metric", "TSMC", "Samsung", "Intel", "GlobalFoundries"],
      rows: [
        { cells: ["Market Share", "72%", "7%", "5%", "4%"], highlight: true },
        { cells: ["Leading Node", "2nm (N2)", "3nm (GAA)", "18A", "12nm (Specialty)"] },
        { cells: ["AI Specialty", "CoWoS", "HBM Integ.", "Foundry 2.0", "Photonics"], highlight: true },
        { cells: ["Sovereignty", "Taiwan", "Korea", "USA", "USA"], highlight: true },
      ],
      caption: "Source: Counterpoint, Gartner, MacroEdge Intelligence 2026.",
    },
  },

  // ═══════════════════ SLIDE 8: THE HBM CONVERGENCE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "INFRASTRUCTURE MERGER",
    heading: "Memory meets",
    headingAccent: "Logic.",
    body: "The 2026 'Foundry War' is being won by firms that can integrate High-Bandwidth Memory (HBM) directly onto the compute die.",
    features: [
      { icon: "⚡", label: "HBM4 Standard", description: "Moving from 12-layer to 16-layer stacks, requiring advanced 'Base Die' foundry services." },
      { icon: "📦", label: "3D Packaging", description: "TSMC’s SoIC and Intel’s Foveros are the primary battlegrounds for 'Chiplet' architectures." },
      { icon: "🔋", label: "Thermal Wall", description: "Heat management in stacked chips is driving the move to Silicon Photonics (SiPh) interconnects." },
    ],
    insightBox: "💡 The Trend: The line between 'Foundry' and 'Memory House' is blurring. TSMC + SK Hynix is the alliance to watch.",
  },

  // ═══════════════════ SLIDE 9: THE CAPITAL WALL ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "FINANCIAL MOAT",
    heading: "The $645B",
    headingAccent: "Tech Spend.",
    body: "Building a sub-2nm fab now costs $30B+. The 'Foundry Wars' are a war of attrition where only the state-backed can survive.",
    features: [
      { icon: "🏗️", label: "Fab Capex", description: "Hyperscalers (Meta, MSFT) are now subsidizing fab construction to secure their own AI roadmap." },
      { icon: "⚖️", label: "State Aid", description: "China’s SMIC is receiving $10B+ annually in 'Hidden Subsidies' to maintain its domestic wall." },
      { icon: "📉", label: "Consolidation", description: "Smaller foundries are being pushed into 'Niche' or 'Legacy' segments as the costs spiral." },
    ],
  },

  // ═══════════════════ SLIDE 10: SMIC & THE CHINA WALL ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "DOMESTIC FORTRESS",
    heading: "SMIC: The",
    headingAccent: "China Wall.",
    body: "Despite Western sanctions, SMIC has maintained a 5% global share by dominating the 'Silicon Fortress' inside China.",
    features: [
      { icon: "🛡️", label: "Domestic Lock", description: "Forced adoption of SMIC-manufactured chips for all Chinese gov and defense contracts." },
      { icon: "⚙️", label: "7nm/5nm Push", description: "Using multi-patterning (DUV) to reach advanced nodes without Western EUV machines." },
      { icon: "⚠️", label: "Capacity Hedge", description: "Building massive 28nm/40nm legacy capacity to flood the global 'Everyday Chip' market." },
    ],
  },

  // ═══════════════════ SLIDE 11: ROADMAP TO 2030 ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "FUTURE NODES",
    heading: "The Race to",
    headingAccent: "1.4 Nanometers.",
    body: "The roadmap for the next four years is already set. These are the milestones that will define the 2028 economy.",
    steps: [
      {
        number: "01",
        title: "2026: 2nm Ramp",
        description: "TSMC N2 and Intel 18A enter high-volume production for the first 'Agentic' hardware wave.",
      },
      {
        number: "02",
        title: "2027: High-NA EUV",
        description: "Widespread adoption of ASML's High-NA machines to enable sub-2nm patterning at scale.",
      },
      {
        number: "03",
        title: "2028-2030: 1.4nm (A14)",
        description: "The transition to Angstrom-era manufacturing and the integration of carbon-nanotube (CNT) transistors.",
      },
    ],
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL VERDICT",
    heading: "Silicon is the",
    headingAccent: "New Oil.",
    body: "The winners of the Foundry Wars won't just build chips; they will control the flow of intelligence. TSMC is the king today, but Intel is the sovereign hedge.",
    ctaText: "Follow @macroedge_in",
  },
];
