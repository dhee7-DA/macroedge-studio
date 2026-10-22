import { SlideData } from "@workspace/carousel-engine";

export const PHOTONICS_PT2: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "STOCKS & MARKETS REPORT",
    tagRight: "PART II",
    heading: "The Silicon",
    headingAccent: "Leaderboard.",
    body: "The Silicon Photonics (SiPh) landgrab has begun. Here is the institutional breakdown of the giants, the pure-plays, and the disruptors.",
    levelBadge: "STOCKS",
    topicNum: "LD",
  },

  // ═══════════════════ SLIDE 2: THE GIANTS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "INSTITUTIONAL GIANTS",
    heading: "The Big",
    headingAccent: "Three.",
    body: "The leaders in Silicon Photonics (SiPh) are established semiconductor powerhouses with the manufacturing scale to dominate the transition.",
    features: [
      { icon: "🔵", label: "Intel (INTC)", description: "The pioneer. Holds the only CMOS-compatible (Silicon-ready) integrated photonics manufacturing platform." },
      { icon: "🟢", label: "Broadcom (AVGO)", description: "The leader in Co-Packaged Optics (CPO). Their Bailly platform is the industry's high-bandwidth gold standard." },
      { icon: "🔵", label: "Cisco (CSCO)", description: "Acquired Luxtera for its photonic expertise; heavily integrated in the hyperscale networking stack." },
    ],
    insightBox: "💡 Market Call: Broadcom's massive networking share makes them the safest bet for the 'Optical-to-GPU' connection.",
  },

  // ═══════════════════ SLIDE 3: DATA CENTER FABRIC ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "GEAR & INFRASTRUCTURE",
    heading: "The Network",
    headingAccent: "Moat.",
    body: "The biggest beneficiaries are the firms that control how Graphics Processing Units (GPUs) talk to each other across the Photonic Fabric.",
    steps: [
      {
        number: "01",
        title: "NVIDIA (NVDA)",
        description: "Integrating Mellanox networking with optical transceivers to build a trillion-dollar Photonic Fabric for Blackwell clusters.",
      },
      {
        number: "02",
        title: "Marvell (MRVL)",
        description: "The primary provider of Digital Signal Processors (DSP) for optical engines. If light moves, Marvell is likely in the socket.",
      },
      {
        number: "03",
        title: "Coherent (COHR)",
        description: "A specialized components leader providing the critical lasers and chips that power 800G and 1.6T transceivers.",
      },
    ],
  },

  // ═══════════════════ SLIDE 4: MANUFACTURING ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE FOUNDRY PLAY",
    heading: "The Factory",
    headingAccent: "Advantage.",
    body: "Silicon Photonics (SiPh) requires advanced cleanrooms. These firms control the manufacturing throughput for the entire sector.",
    features: [
      { icon: "⚙️", label: "GlobalFoundries (GFS)", description: "Their 'GF Fotonix' platform is the industry's most advanced foundry service for photonic designs." },
      { icon: "🏗️", label: "STMicroelectronics (STM)", description: "Key manufacturing partner for optical sensors and integrated photonic circuits in Europe." },
      { icon: "🔋", label: "Applied Materials (AMAT)", description: "Provides the machinery for Epitaxial Growth (The process of layering silicon) and optical etching." },
    ],
    insightBox: "🎯 Strategic Intel: GlobalFoundries is the primary beneficiary of the 'Pure-Play' startup boom as they outsource manufacturing.",
  },

  // ═══════════════════ SLIDE 5: REVENUE EXPOSURE ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "FINANCIAL METRICS",
    heading: "Revenue",
    headingAccent: "Exposure.",
    body: "Percentage of total annual revenue linked to Optical (Photonic) Networking and Interconnect infrastructure.",
    table: {
      headers: ["Company", "Segment", "FY26 Est. Exposure"],
      rows: [
        { cells: ["Broadcom", "Networking", "~42% Segment Share"], highlight: true },
        { cells: ["Marvell", "Custom ASIC", "~35% Rev Exposure"], highlight: true },
        { cells: ["Cisco", "Data Center", "~28% Rev Exposure"] },
        { cells: ["Coherent", "Optronics", "~88% Rev Exposure"] },
        { cells: ["Intel", "Foundry", "~5% Segment Share"] },
      ],
      caption: "Source: Bloomberg Intelligence (Estimated as of April 2026).",
    },
  },

  // ═══════════════════ SLIDE 6: THE DISRUPTORS ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "STARTUP WATCHLIST",
    heading: "The Next",
    headingAccent: "Generation.",
    body: "Several private and recently public 'Pure-Play' firms represent the high-alpha potential of the Silicon Photonics (SiPh) market.",
    steps: [
      {
        number: "01",
        title: "Ayar Labs",
        description: "Focusing on TeraPHY optical chiplets that replace traditional electrical connections between memory and the processor.",
      },
      {
        number: "02",
        title: "Celestial AI",
        description: "Pioneering Optical Compute Fabric (OCF) which solves the 'Memory Wall' crisis in large-scale AI training.",
      },
      {
        number: "03",
        title: "OpenLight",
        description: "A spinoff from Juniper Networks and Tower Semiconductor specializing in integrated lasers on silicon chips.",
      },
    ],
  },

  // ═══════════════════ SLIDE 7: MARKET METRICS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MARKET VALUATION",
    heading: "The Trillion",
    headingAccent: "Opportunity.",
    body: "By 2030, Silicon Photonics (SiPh) will be integrated into nearly every high-performance compute node on Earth.",
    features: [
      { icon: "📈", label: "CAGR Growth", description: "Compound Annual Growth Rate of 27% projected from 2026 to 2030." },
      { icon: "💵", label: "Total Addressable Market", description: "Total Market valuation set to hit $8.5 Billion for SiPh chips and $1 Trillion for the photonic ecosystem." },
      { icon: "🏦", label: "Revenue Exposure", description: "Networking revenue is projected to exceed Compute revenue for several Tier-1 companies by 2030." },
    ],
    insightBox: "📊 Institutional Stat: Hyperscale clouds (AWS, Azure, Meta) now spend 40%+ of their AI budget on the 'Optical Fabric' rather than raw silicon.",
  },

  // ═══════════════════ SLIDE 8: TIER LIST ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "INVESTOR SCORECARD",
    heading: "Institutional",
    headingAccent: "Tiers.",
    body: "How to position a portfolio for the 'Optical Inflection.' Categorizing firms by their direct dependency on Photonics growth.",
    features: [
      { icon: "🥇", label: "Tier 1: High Alpha", description: "Broadcom (AVGO), Marvell (MRVL), Ayar Labs (Private)." },
      { icon: "🥈", label: "Tier 2: Infrastructure", description: "Cisco (CSCO), Lumentum (LITE), NVIDIA (NVDA)." },
      { icon: "🥉", label: "Tier 3: Manufacturing", description: "GlobalFoundries (GFS), ASML (High-NA EUV), AMAT." },
    ],
  },

  // ═══════════════════ SLIDE 9: INVESTMENT CYCLE ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE ADOPTION CURVE",
    heading: "The Three",
    headingAccent: "Waves.",
    body: "The Silicon Photonics (SiPh) investment thesis will play out over three distinct institutional phases.",
    steps: [
      {
        number: "01",
        title: "The Hype Phase",
        description: "Research and Development (R&D) announcements and initial small-scale trials (2024-2025).",
      },
      {
        number: "02",
        title: "The Scaling Phase",
        description: "Massive adoption of 800G/1.6T transceivers in AI and Hyperscale data centers (2026-2027).",
      },
      {
        number: "03",
        title: "The Integration Phase",
        description: "Co-Packaged Optics (CPO) and Optical Computing become the standard for all consumer silicon (2028-2030).",
      },
    ],
  },

  // ═══════════════════ SLIDE 10: RISK CHECKLIST ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "INVESTOR CAUTION",
    heading: "The Red",
    headingAccent: "Flags.",
    body: "No revolutionary technology comes without risk. Investors must monitor these three institutional friction points.",
    features: [
      { icon: "🚩", label: "Interoperability", description: "The industry lacks a unified standard for Co-Packaged Optics (CPO), leading to potential 'Walled Gardens.'" },
      { icon: "🚩", label: "Supply Chain", description: "Heavy reliance on exotic materials like Indium Phosphide (InP) which are geopolitically sensitive." },
      { icon: "🚩", label: "Capex Fatigue", description: "Hyperscale providers may slow down spending if AI (Artificial Intelligence) revenue doesn't materialize in 2027." },
    ],
  },

  // ═══════════════════ SLIDE 11: GEOPOLITICS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "GLOBAL LANDSCAPE",
    heading: "The Dual-Use",
    headingAccent: "Weapon.",
    body: "Silicon Photonics (SiPh) is no longer a commercial technology. It is a strategic asset for national Artificial Intelligence (AI) sovereignty.",
    features: [
      { icon: "🛡️", label: "Export Controls", description: "High-tier optical modulators are now classified as 'Dual-Use' (Military and Civilian) by the U.S. Commerce Department." },
      { icon: "🏭", label: "Reshoring", description: "Efforts to bring photonic manufacturing back to North America and Europe to avoid reliance on TSMC (Taiwan Semiconductor)." },
      { icon: "🇨🇳", label: "The Asia Gap", description: "China's lead in 'Photonic Integrated Circuits' (PICs) is a primary concern for Western defense planners." },
    ],
  },

  // ═══════════════════ SLIDE 12: SUMMARY ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "FINAL CONCLUSION",
    heading: "The Light-Speed",
    headingAccent: "Landgrab.",
    body: "The pivot to Silicon Photonics (SiPh) is the most significant architectural shift in computing history. The winners will own the backbone of Intelligence.",
    ctaText: "Follow @macroedge_in for deep tech",
    features: [
      { icon: "🏢", label: "Core Positions", description: "Broadcom (AVGO) and Marvell (MRVL) remain the preferred institutional plays." },
      { icon: "🔭", label: "The Alpha Play", description: "Watch for Ayar Labs IPO (Initial Public Offering) in late 2026 or early 2027." },
      { icon: "🧠", label: "Master Thesis", description: "Photonics is how we bridge the 'Interconnect Wall' and enable AGI (Artificial General Intelligence)." },
    ],
  },
];
