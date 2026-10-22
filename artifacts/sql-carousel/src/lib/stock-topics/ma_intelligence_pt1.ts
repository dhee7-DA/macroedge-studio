import type { SlideData } from "@workspace/carousel-engine";

export const MA_INTELLIGENCE_PT1: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "M&A INTELLIGENCE SERIES",
    tagRight: "PART I",
    heading: "The Shadow",
    headingAccent: "Acquirers.",
    body: "Inside the massive structural reconfiguration of Big Tech. From Amazon's $11.6B satellite play to Microsoft's fusion arbitrage—this is the new M&A Super-Cycle.",
    levelBadge: "STOCKS",
    topicNum: "MA1",
    bullets: ["Amazon's $11.6B Globalstar Deal", "Microsoft's Fusion PPA Strategy", "NVIDIA's Robotics Ecosystem"],
  },

  // ═══════════════════ SLIDE 2: THE $11.6B ORBIT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "AMAZON × GLOBALSTAR",
    heading: "The $11.6B",
    headingAccent: "Orbit.",
    body: "On April 14, 2026, Amazon moved to secure the heavens by acquiring satellite operator Globalstar to fuel its LEO constellation.",
    features: [
      { icon: "📡", label: "Amazon Leo", description: "Integrating Globalstar’s spectrum and ground stations into the former Project Kuiper." },
      { icon: "📱", label: "Direct-to-Device", description: "Enabling global mobile connectivity in 'dead zones' by 2028 through Globalstar's licensed bands." },
      { icon: "🍎", label: "The Apple Paradox", description: "Amazon will now provide the infrastructure for Apple’s Emergency SOS features." },
    ],
    insightBox: "💡 Analysis: Amazon isn't just buying satellites; they are buying the 'Spectrum Rights' to prevent SpaceX from total dominance.",
  },

  // ═══════════════════ SLIDE 3: SPECTRUM WARS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "STRATEGIC ASSETS",
    heading: "The L-Band",
    headingAccent: "Moat.",
    body: "The true value of the Globalstar deal lies in their 'L-Band' spectrum—the golden frequency for satellite-to-phone communication.",
    features: [
      { icon: "🛰️", label: "Licensed Spectrum", description: "Globalstar holds global rights to the S-band and L-band—assets that cannot be 'created' or 'mined.'" },
      { icon: "🏛️", label: "Regulatory Wall", description: "New entrants face a 10-year battle for spectrum; Amazon just bypassed the entire waitlist." },
      { icon: "🌐", label: "Global Gateway", description: "24+ ground stations providing low-latency backhaul for the 2026-2030 AI edge." },
    ],
    insightBox: "🎯 Strategic Intel: Spectrum is the 'Digital Real Estate' of the 21st century. Amazon just bought the downtown core.",
  },

  // ═══════════════════ SLIDE 4: THE SHADOW BUY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MICROSOFT × HELION",
    heading: "The Shadow",
    headingAccent: "Acquisition.",
    body: "Microsoft is pioneering a new form of M&A: The 'Equity-Offtake' model. Instead of buying Helion Energy, they are subsidizing its success.",
    features: [
      { icon: "⚛️", label: "Fusion PPA", description: "A Power Purchase Agreement (PPA) for 50 MW of nuclear fusion—the world's first of its kind." },
      { icon: "🏗️", label: "Orion Plant", description: "Helion’s first commercial fusion facility in Chelan County, WA, is now in full construction." },
      { icon: "⚡", label: "2028 Target", description: "The goal is to power Microsoft's AI data centers with carbon-free fusion by 2028." },
    ],
    insightBox: "💡 Logic: By signing a massive offtake deal, Microsoft secures the power supply without the regulatory headache of owning a nuclear firm.",
  },

  // ═══════════════════ SLIDE 5: FUSION ARBITRAGE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "ENERGY ASSETS",
    heading: "Fusion",
    headingAccent: "Arbitrage.",
    body: "Microsoft is effectively using its balance sheet to 'De-Risk' Helion’s engineering. This is 'Venture Capital at Industrial Scale.'",
    features: [
      { icon: "📉", label: "Cost Mitigation", description: "Locking in power prices for the next 20 years to hedge against volatile electricity spikes." },
      { icon: "🥇", label: "First Mover", description: "Securing priority access to the world's most dense energy source before Google or AWS can react." },
      { icon: "🌱", label: "Net Zero AI", description: "The only way to reach 'Net Zero' while training 295B+ parameter models is via Fusion." },
    ],
  },

  // ═══════════════════ SLIDE 6: THE ROBOTICS BRAIN ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "NVIDIA × PHYSICAL AI",
    heading: "The Robotics",
    headingAccent: "Nervous System.",
    body: "NVIDIA’s M&A strategy has shifted from 'Buying Hardware' to 'Owning the Simulation.'",
    features: [
      { icon: "🧠", label: "Project GR00T", description: "A general-purpose foundation model for humanoids that learns from simulation (Isaac Lab)." },
      { icon: "🎮", label: "Omniverse Moat", description: "Acquiring data management firms (like Illumex) to fuel the 'Digital Twin' of every factory." },
      { icon: "🤝", label: "BMW / Figure AI", description: "NVIDIA provides the brain (Isaac) while Figure AI provides the body. Partners, not targets." },
    ],
    insightBox: "🎯 Market Call: NVIDIA is building the 'Windows for Robots.' They don't want to build the robot; they want to tax every movement it makes.",
  },

  // ═══════════════════ SLIDE 7: ACQUIRER LEADERBOARD ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "M&A SCOREBOARD",
    heading: "The 2026",
    headingAccent: "Leaderboard.",
    body: "Big Tech’s strategic focus areas and estimated 2026 M&A budget allocation.",
    table: {
      headers: ["Acquirer", "Core Target Area", "Deal Strategy"],
      rows: [
        { cells: ["Amazon", "Satellite & Logistics", "$11.6B Pure Acquisition"], highlight: true },
        { cells: ["Microsoft", "Energy & Fusion", "Offtake + Minority Stakes"], highlight: true },
        { cells: ["NVIDIA", "Data & Physical AI", "Ecosystem & AI Tooling"], highlight: true },
        { cells: ["Apple", "Sensors & Silicon", "Secretive/Bolt-on Deals"] },
        { cells: ["Google", "Nuclear & Cloud", "PPA-Led Infrastructure"] },
      ],
      caption: "Source: Tracxn, Bloomberg Intelligence, April 2026 Estimates.",
    },
  },

  // ═══════════════════ SLIDE 8: THE MINORITY STAKE PIVOT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "REGULATORY HEDGING",
    heading: "The Stake",
    headingAccent: "Pivot.",
    body: "Due to intense antitrust scrutiny (FTC/EU), Big Tech is shifting from 100% buyouts to 'Influential Minority' stakes.",
    features: [
      { icon: "🛡️", label: "Antitrust Hedge", description: "Owning 19.9% of a firm provides influence and 'First Look' rights without triggering a merger review." },
      { icon: "🏗️", label: "Foundry Stakes", description: "Tech giants are increasingly taking equity in the foundries (Intel/TSMC) to secure wafer supply." },
      { icon: "📉", label: "De-Risking", description: "If the technology fails (e.g., Fusion), the downside is capped to the investment, not the whole firm." },
    ],
  },

  // ═══════════════════ SLIDE 9: INFRASTRUCTURE LANDGRAB ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "VERTICAL INTEGRATION",
    heading: "Owning the",
    headingAccent: "Atoms.",
    body: "The 2026 M&A cycle is about 'Atoms,' not just 'Bits.' Big Tech is buying the physical infrastructure needed to keep AI alive.",
    features: [
      { icon: "⚡", label: "Power Grid", description: "Acquisitions of sub-stations and grid-management software to handle AI-sized loads." },
      { icon: "🚢", label: "Subsea Cables", description: "Google and Meta are now the world's largest owners of oceanic data fiber." },
      { icon: "🛰️", label: "Satellite Gateways", description: "Owning the link between the 'Ground' and the 'Cloud' is the ultimate data moat." },
    ],
  },

  // ═══════════════════ SLIDE 10: ACQUISITION WATCHLIST ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "INVESTOR WATCHLIST",
    heading: "The 2026",
    headingAccent: "Targets.",
    body: "The 3 firms analysts believe are 'Primary Targets' for Big Tech in the second half of 2026.",
    steps: [
      {
        number: "01",
        title: "Hermeus",
        description: "Hypersonic aviation. Target for defense giants or Amazon (Logistics) as they hit Mach 5 milestones.",
      },
      {
        number: "02",
        title: "Varda Space",
        description: "Space-based pharma manufacturing. A logical bolt-on for a combined Tech/Life-Sciences giant.",
      },
      {
        number: "03",
        title: "Ayar Labs",
        description: "Silicon Photonics. The must-buy target for NVIDIA or Intel to own the 'Optical Fabric.'"
      },
    ],
  },

  // ═══════════════════ SLIDE 11: GEOPOLITICAL VETTING ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "GLOBAL LANDSCAPE",
    heading: "The CFIUS",
    headingAccent: "Filter.",
    body: "Every 2026 deal must now pass a 'National Security' test. Cross-border M&A is effectively dead for 'Dual-Use' technologies.",
    features: [
      { icon: "🇺🇸", label: "Friendly-Shoring", description: "Deals are only being approved between 'Five-Eyes' or NATO-aligned partners." },
      { icon: "🛡️", label: "Security Review", description: "AI data centers and satellite constellations are now classified as 'Critical Infrastructure.'" },
      { icon: "⚠️", label: "The Asia Gap", description: "Acquisitions of Chinese or Middle-Eastern firms are strictly prohibited by the US Commerce Dept." },
    ],
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "FINAL CONCLUSION",
    heading: "The New",
    headingAccent: "Super-Cycle.",
    body: "M&A is no longer about 'Consolidation.' It is about 'Survival.' The firms that own the power and the spectrum will win the decade.",
    ctaText: "Follow @macroedge_in",
  },
];
