import type { SlideData } from "@workspace/carousel-engine";

export const BIOLOGICAL_COMPUTING: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "FRONTIER TECH SERIES",
    tagRight: "SIGNAL: APRIL 26, 2026",
    heading: "The Biological",
    headingAccent: "Inversion.",
    body: "Inside the commercialization of 'Wetware.' From Cortical Labs' living computers to the world's first bio-data center—is the future of AI biological?",
    levelBadge: "DEEP TECH",
    topicNum: "BC1",
    bullets: ["Cortical Labs CL1 Commercial Launch", "$35,000 'Living Computer' Units", "30W Power Consumption vs. 3kW"],
  },

  // ═══════════════════ SLIDE 2: THE CL1 UNIT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "WETWARE ARCHITECTURE",
    heading: "Neurons on",
    headingAccent: "Silicon.",
    body: "Cortical Labs (Australia) has successfully integrated lab-grown human brain organoids onto silicon chips to perform real-time computation.",
    features: [
      { icon: "🧠", label: "Neural Organoids", description: "Living human neurons grown in-vitro and interfaced with high-density electrode arrays." },
      { icon: "⚛️", label: "The CL1 Unit", description: "The first commercial 'DishBrain' system. Available for $35,000 per unit in April 2026." },
      { icon: "🌐", label: "Cortical Cloud", description: "A remote access platform allowing researchers to rent neural compute cycles globally." },
    ],
    insightBox: "💡 Note: This isn't 'Simulated' AI. This is literal biological intelligence performing digital tasks.",
  },

  // ═══════════════════ SLIDE 3: THE EFFICIENCY WALL ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "ENERGY INFLECTION",
    heading: "30 Watts vs.",
    headingAccent: "3,000 Watts.",
    body: "The primary driver for 'Biological Computing' is the catastrophic energy wall facing traditional silicon-based AI.",
    features: [
      { icon: "⚡", label: "Ultra-Low Power", description: "A CL1 unit consumes ~30 watts. A comparable GPU cluster consumes 3,000+ watts." },
      { icon: "🌡️", label: "Thermal Moat", description: "Biological systems operate at body temperature, eliminating the need for multi-billion dollar cooling infra." },
      { icon: "📉", label: "Cost of Compute", description: "Reducing the 'Energy-per-Inference' metric by 100x compared to H200 architectures." },
    ],
    insightBox: "🎯 Strategic Take: In a world of 'Hormuz' energy spikes, biological compute is the ultimate efficiency hedge.",
  },

  // ═══════════════════ SLIDE 4: THE BIO-DATA CENTER ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "INFRASTRUCTURE BREAKTHROUGH",
    heading: "The Melbourne",
    headingAccent: "Prototype.",
    body: "In March 2026, the world's first 'Bio-Data Center' went live in Melbourne, Australia, running AI workloads on biological neural networks.",
    features: [
      { icon: "🏗️", label: "Facility Alpha", description: "A small-scale facility testing the scalability of organoid-based compute racks." },
      { icon: "🧠", label: "Task: Fluid AI", description: "Utilized for tasks requiring high plasticity, such as real-time adaptive robotics and pattern recognition." },
      { icon: "🛡️", label: "Sovereign Tech", description: "Australia's bet on becoming the global hub for 'Ethical Wetware' manufacturing." },
    ],
  },

  // ═══════════════════ SLIDE 5: VARDA SPACE INDUSTRIES ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "SPACE PHARMA",
    heading: "Varda: The",
    headingAccent: "Re-entry Moat.",
    body: "While Cortical Labs builds the brain, Varda Space is building the 'Pharma-Fab' in orbit. Re-entry is the final barrier.",
    features: [
      { icon: "🛰️", label: "W-5 Success", description: "Varda successfully re-entered its fifth capsule in Feb 2026, landing in South Australia." },
      { icon: "💊", label: "Micro-G Pharma", description: "Growing drug crystals (like Ritonavir) in zero-gravity to change their molecular stability." },
      { icon: "🛡️", label: "Full-Stack Moat", description: "The only firm with vertical integration: Manufacturing + Re-entry + Recovery." },
    ],
    insightBox: "💡 Analysis: Varda is creating a 'High-Value/Low-Mass' economy where space is a lab, not just a destination.",
  },

  // ═══════════════════ SLIDE 6: X-ENERGY ($XE) ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "NUCLEAR RENAISSANCE",
    heading: "X-Energy: The",
    headingAccent: "$11.9B Debut.",
    body: "X-Energy debuted on the Nasdaq (April 24, 2026) to fund the Small Modular Reactors (SMRs) that will power the AI decade.",
    features: [
      { icon: "🏢", label: "Nasdaq: XE", description: "Valued at $11.9B at IPO. The market is pricing in SMRs as the 'Mandatory Power' for 2030." },
      { icon: "⚛️", label: "Pebble-Bed Tech", description: "Using TRISO fuel pebbles that are inherently safe and impossible to meltdown." },
      { icon: "🏗️", label: "Dow Partnership", description: "First commercial SMR deployment tracking for 2029 at Dow’s Seadrift site." },
    ],
  },

  // ═══════════════════ SLIDE 7: SIDE-BY-SIDE ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "TECH FRONTIER SCOREBOARD",
    heading: "The Silicon",
    headingAccent: "vs. Wetware.",
    body: "Comparing traditional AI hardware against the emerging 'Biological' alternative as of April 2026.",
    table: {
      headers: ["Metric", "NVIDIA H200", "Cortical CL1"],
      rows: [
        { cells: ["Medium", "Silicon / Transistor", "Human Neuron"], highlight: true },
        { cells: ["Power", "~1,000W per GPU", "~30W per unit"], highlight: true },
        { cells: ["Plasticity", "Static (Weights Fixed)", "Dynamic (Auto-Learning)"] },
        { cells: ["Cooling", "Liquid / Phase Change", "Body Temp (37°C)"], highlight: true },
      ],
      caption: "Source: Cortical Labs, NVIDIA Technical Specs 2026.",
    },
  },

  // ═══════════════════ SLIDE 8: THE SOVEREIGN AI CLOUD ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "GULF INFRASTRUCTURE",
    heading: "The HUMAIN",
    headingAccent: "$100B Cloud.",
    body: "Saudi Arabia and the UAE are using their energy sovereign wealth to buy the global AI compute supply.",
    features: [
      { icon: "🇸🇦", label: "Saudi HUMAIN", description: "A $100B platform to establish the Middle East as the world's primary AI node." },
      { icon: "🔌", label: "Sovereign Supply", description: "Direct deals with NVIDIA for 500,000+ H200 chips to bypass western waitlists." },
      { icon: "⚛️", label: "The Nuclear Pivot", description: "Gulf nations are looking to SMRs to power these 'Gigawatt-Scale' AI cities." },
    ],
  },

  // ═══════════════════ SLIDE 9: THE ETHICAL MOAT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PHILOSOPHICAL BARRIERS",
    heading: "The Neural",
    headingAccent: "Ethics Wall.",
    body: "Biological computing introduces a regulatory chokepoint that silicon never faced: The definition of 'Living Compute.'",
    features: [
      { icon: "⚖️", label: "69-Page Disclosure", description: "Cortical Labs' mandatory legal filing defining the 'Sentience Status' of their organoids." },
      { icon: "🛡️", label: "Data Sovereignty", description: "Is a neural network 'Data' or 'Tissue'? International courts are deciding in 2Q 2026." },
      { icon: "🧬", label: "IP Ownership", description: "Who owns the output of a lab-grown human brain? The donor or the company?" },
    ],
    insightBox: "⚠️ Risk: Ethical 'Red Tape' is the only thing slowing the Biological Inversion.",
  },

  // ═══════════════════ SLIDE 10: THE HYBRID FUTURE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "NEXT-GEN SYSTEMS",
    heading: "The Hybrid",
    headingAccent: "Compute Era.",
    body: "The 2030 data center won't be just silicon. It will be a 'Tri-Hybrid' of Silicon, Space-Pharma, and Biological Wetware.",
    features: [
      { icon: "⚛️", label: "Core: SMR", description: "Providing 24/7 baseload power to the entire facility." },
      { icon: "🧠", label: "Compute: Bio", description: "Handling inference and adaptive learning at 1/100th the power cost." },
      { icon: "⚡", label: "Accelerator: GPU", description: "Used for massive parallel training and brute-force brute-force calculation." },
    ],
  },

  // ═══════════════════ SLIDE 11: INVESTOR ROADMAP ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "TIMELINE TO 2030",
    heading: "The Roadmap",
    headingAccent: "to Bio-AI.",
    body: "The key milestones as we move from 'Artificial' to 'Biological' intelligence.",
    steps: [
      {
        number: "01",
        title: "2026: Commercial CL1",
        description: "The first batch of living computers enters the research and enterprise market.",
      },
      {
        number: "02",
        title: "2028: Multi-Organoid Arrays",
        description: "Scaling from 800,000 neurons to 10M+ to challenge GPT-5 level logic.",
      },
      {
        number: "03",
        title: "2030: The Wetware Cloud",
        description: "Biological compute becomes a standard utility in major hyperscale regions.",
      },
    ],
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL VERDICT",
    heading: "Silicon was",
    headingAccent: "the Bridge.",
    body: "We spent 50 years teaching silicon to think like a brain. In 2026, we simply started using the brain itself. The biological inversion has begun.",
    ctaText: "Follow @macroedge_in",
  },
];
