import type { SlideData } from "@workspace/carousel-engine";

export const DISRUPTORS_MEGA_REPORT: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "FRONTIER INTELLIGENCE",
    tagRight: "MEGA-REPORT: 2026-2030",
    heading: "The Age of",
    headingAccent: "Convergence.",
    body: "Inside the 5 pillars of 'Physical Intelligence' hitting a commercial inflection point. The next cycle of alpha is moving from SaaS to specialized hardware.",
    levelBadge: "INSTITUTIONAL",
    topicNum: "DM1",
    bullets: ["Fusion & SMR Deployment", "Humanoid Industrial Pilots", "Space-to-Earth Manufacturing"],
  },

  // ═══════════════════ SLIDE 2: THE THESIS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MACRO THESIS",
    heading: "Physical",
    headingAccent: "Intelligence.",
    body: "2026 marks the end of the 'Pure Software' era. The most significant gains are now occurring at the intersection of AI, Energy, and deep-tech hardware.",
    features: [
      { icon: "⚡", label: "Energy Moat", description: "Solving the baseload problem for AI datacenters via Fusion and SMRs." },
      { icon: "🤖", label: "Physical Agency", description: "Humanoids moving from lab experiments to active industrial factory floors." },
      { icon: "🔬", label: "Industrial Bio", description: "Utilizing AI to 'Program' cells for materials and protein production." },
    ],
    insightBox: "💡 The Shift: We are moving from 'Information SaaS' to 'Industrial AI Infrastructure.'",
  },

  // ═══════════════════ SLIDE 3: ENERGY PILLAR (FUSION) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "ENERGY RENAISSANCE",
    heading: "The Fusion",
    headingAccent: "Inflection.",
    body: "Commercial fusion is no longer '30 years away.' It is 24 months from the first grid-scale delivery.",
    features: [
      { icon: "🔥", label: "Helion Energy", description: "On track for 50MW delivery to Microsoft by 2028. Moving from plasma to power." },
      { icon: "🏗️", label: "CFS (Commonwealth)", description: "Scaling high-temperature superconducting magnets for the SPARC reactor." },
      { icon: "📈", label: "Market Impact", description: "Energy shifts from a commodity business to a high-margin manufacturing play." },
    ],
    insightBox: "🎯 Strategic Winner: Microsoft (MSFT) as the first-mover customer for zero-carbon baseload.",
  },

  // ═══════════════════ SLIDE 4: ENERGY PILLAR (DAC) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CARBON ECONOMICS",
    heading: "Megaton",
    headingAccent: "DAC.",
    body: "Direct Air Capture (DAC) has hit the 'Gigafactory' moment. Scaling carbon removal to industrial utility levels.",
    features: [
      { icon: "🏗️", label: "Stratos Plant", description: "The world's largest DAC site (Occidental) starts Phase 1 in Q2 2026." },
      { icon: "📉", label: "Cost Curve", description: "Validating the $100-per-ton pathway required for global net-zero targets." },
      { icon: "✈️", label: "e-SAF Fuel", description: "Utilizing captured CO2 to create sustainable aviation fuel for airline giants." },
    ],
    insightBox: "💡 Analysis: Occidental ($OXY) is rerating as a 'Carbon Management' giant rather than just an oil driller.",
  },

  // ═══════════════════ SLIDE 5: ROBOTICS PILLAR (HUMANOIDS) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PHYSICAL AUTONOMY",
    heading: "The Pilot",
    headingAccent: "Year.",
    body: "2026 is the 'Humanoid Inflection.' Units are no longer 'dancing'—they are performing material handling on factory floors.",
    features: [
      { icon: "🏎️", label: "Tesla Optimus", description: "1,000+ Gen 3 units deployed internally. Serial production ramping for late 2026." },
      { icon: "🏛️", label: "Apptronik (Apollo)", description: "Proving 99% reliability in GXO Logistics and Mercedes-Benz factory pilots." },
      { icon: "📉", label: "Labor Deficit", description: "The primary solution to the global manufacturing labor shortage." },
    ],
    insightBox: "🎯 Metric: Humanoid TCO (Total Cost of Ownership) is projected to fall below $3/hour by 2028.",
  },

  // ═══════════════════ SLIDE 6: SYNTHETIC BIOLOGY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CELLULAR FACTORIES",
    heading: "Autonomous",
    headingAccent: "Lab-as-a-Service.",
    body: "Moving from 'Biotech R&D' to 'Industrial Lab Infrastructure.' AI is now designing the next generation of materials.",
    features: [
      { icon: "🧬", label: "Ginkgo Bioworks", description: "Pivoted in 2026 to selling robotic biological hardware and digital assets." },
      { icon: "🍔", label: "Hybrid Proteins", description: "Cultivated cells mixed with plant protein to reach price parity with meat by 2027." },
      { icon: "🧵", label: "Bio-Materials", description: "Commercial-scale production of bio-steel and specialized silk for fashion/defense." },
    ],
    insightBox: "💡 The Moat: Ginkgo is becoming the 'AWS of Biology'—providing the foundation for other bio-startups.",
  },

  // ═══════════════════ SLIDE 7: HYPERSONICS PILLAR ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "HIGH-MACH FRONTIER",
    heading: "Hypersonic",
    headingAccent: "Logistics.",
    body: "The sound barrier is no longer the limit. The focus has shifted to Mach 3+ transcontinental transit.",
    features: [
      { icon: "✈️", label: "Hermeus", description: "Quarterhorse Mk 2.1 broke the sound barrier in March 2026. Mk 4 (Mach 3) testing starts 2027." },
      { icon: "🛡️", label: "Defense Logic", description: "Rapid response and interception capabilities are driving record DOD (Department of Defense) funding." },
      { icon: "🌐", label: "Elite Transit", description: "The first step toward London-to-NY in under 90 minutes for priority cargo." },
    ],
    insightBox: "🎯 Strategic Play: Defense contractors and premium logistics firms are the primary winners.",
  },

  // ═══════════════════ SLIDE 8: MINERAL SOVEREIGNTY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "DEEP SEA MINING",
    heading: "The Mineral",
    headingAccent: "Pivot.",
    body: "As terrestrial mines hit geological limits, the ocean floor is becoming the new 'Strategic Reserve' for the green transition.",
    features: [
      { icon: "⚓", label: "TMC (The Metals Co)", description: "Secured NOAA compliance in March 2026. Commercial production targeted for Q4 2027." },
      { icon: "🔋", label: "Battery Grade", description: "Providing 100% of the Nickel/Cobalt required for 500M EVs without land scarring." },
      { icon: "🏛️", label: "Energy Security", description: "Reducing dependency on foreign-controlled terrestrial mines." },
    ],
    insightBox: "💡 Impact: A massive supply-side deflationary catalyst for the EV and battery sector.",
  },

  // ═══════════════════ SLIDE 9: GENERATION 2 (WETWARE) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "BIO-HYBRID COMPUTING",
    heading: "Wetware",
    headingAccent: "Intelligence.",
    body: "The first wave of 'Generation 2' deep-tech. Integrating living biological neurons directly onto silicon chips.",
    features: [
      { icon: "🧠", label: "Cortical Labs", description: "Launched CL1 in 2025—the first code-deployable biological computer." },
      { icon: "⚡", label: "Efficiency Moat", description: "Biological neurons are 1,000,000x more energy-efficient than silicon processors." },
      { icon: "🖥️", label: "Bio-Data Centers", description: "2026 marks the first construction of neural-compute clusters in Singapore." },
    ],
    insightBox: "🎯 Reality Check: Biological neurons are the only way to scale intelligence without melting the energy grid.",
  },

  // ═══════════════════ SLIDE 10: GENERATION 2 (SPACE) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "ORBITAL INFRASTRUCTURE",
    heading: "Orbital",
    headingAccent: "Factories.",
    body: "Microgravity is the new 'Clean Room.' Manufacturing products that are physically impossible to build on Earth.",
    features: [
      { icon: "🚀", label: "Varda Space", description: "Moving to routine 'Space-to-Earth' logistics in the 2026-2027 window." },
      { icon: "💊", label: "Pharma Synthesis", description: "Perfect crystallization of drugs (like Keytruda) in zero-G environments." },
      { icon: "🧵", label: "Fiber Optics", description: "Manufacturing ZBLAN fiber with zero structural defects for ultra-low loss signals." },
    ],
    insightBox: "💡 The Moat: Space manufacturing creates products with 10x higher performance than terrestrial equivalents.",
  },

  // ═══════════════════ SLIDE 11: GENERATION 2 (METAMATERIALS) ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PROGRAMMABLE MATTER",
    heading: "Software-Defined",
    headingAccent: "Antennas.",
    body: "Manipulating light and radio waves in real-time using sub-wavelength metamaterial structures.",
    features: [
      { icon: "📡", label: "Kymeta", description: "Their KuKa 8 Series (2027) allows for satellite tracking with zero moving parts." },
      { icon: "🛰️", label: "Starlink Pivot", description: "Using metamaterials to increase spectral efficiency by 3x on mobile terminals." },
      { icon: "🛡️", label: "Stealth Tech", description: "Applying programmable coatings to military assets to 'bend' radar signatures." },
    ],
    insightBox: "⚠️ Risk: Sector is capital intensive. Bankruptcy of MMAT serves as a major cautionary tale for the field.",
  },

  // ═══════════════════ SLIDE 12: RISK CHECKLIST ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "FRONTIER RISKS",
    heading: "The Red",
    headingAccent: "Flags.",
    body: "Investing in the frontier requires a ruthless assessment of 'Path to Profitability' and 'Regulatory Friction.'",
    features: [
      { icon: "🛑", label: "Capex Fatigue", description: "If Fusion ROI doesn't show 10% efficiency by 2028, VC funding may freeze." },
      { icon: "⚖️", label: "Bio-Ethics", description: "Wetware (neural tissue) computing faces major regulatory scrutiny in 2027." },
      { icon: "🚀", label: "Space Nuclear", description: "Termination of DRACO project in 2025 delays rapid Mars/Deep-Space transit." },
    ],
    insightBox: "💡 Note: Execution risk is the primary reason these firms trade at a discount to 'Big Tech' equivalents.",
  },

  // ═══════════════════ SLIDE 13: PORTFOLIO CHECKLIST ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "2030 CHECKLIST",
    heading: "The Disruptor",
    headingAccent: "Watchlist.",
    body: "MacroEdge institutional watchlist for the 2026-2030 cycle. Reallocating from SaaS to Physical Intelligence.",
    features: [
      { icon: "⚡", label: "Energy", description: "Exposure to SMR Supply Chain (Nucor, Oklo) and Fusion magnets." },
      { icon: "🤖", label: "Robotics", description: "Ownership of the 'Brains' (NVIDIA/Tesla) and 'Bodies' (Apptronik)." },
      { icon: "🔬", label: "Bio/Logistics", description: "Ginkgo (Automation), Hermeus (Speed), and Varda (Orbital Factories)." },
    ],
    insightBox: "🎯 Tip: Maintain 15% cash liquidity for the 'Commercial Milestone' buy-points in late 2026.",
  },

  // ═══════════════════ SLIDE 14: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE VERDICT",
    heading: "Trade the",
    headingAccent: "Atoms.",
    body: "The world of 'Bits' is commoditized. The world of 'Atoms' is where the new moats are being built. Position accordingly.",
    ctaText: "Follow @macroedge_in",
  },
];
