import type { SlideData } from "../carousel-types";

export const QUANTUM_IPO: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "THE NEXT FRONTIER",
    tagRight: "JULY 2026",
    heading: "Quantum",
    headingAccent: "Goes Public.",
    body: "Is Quantum Computing the next AI? Tomorrow morning, IQM Quantum Computers officially debuts on the Nasdaq, marking one of the first pure-play quantum hardware stocks available to retail investors.",
    levelBadge: "TEARDOWN",
    topicNum: "IQM",
    keywords: ["QUANTUM", "IPO", "SPAC", "TECH", "NASDAQ", "INNOVATION"],
    bullets: [
      "🔔 Trading Begins July 2, 2026",
      "🤝 The SPAC Merger Execution",
      "⚛️ What is a Qubit?",
      "🛡️ The Cybersecurity Threat",
      "💰 The 'Picks & Shovels' Play",
    ],
  },

  // ═══════════════════ SLIDE 2: THE DEAL ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "WALL STREET MECHANICS",
    heading: "The SPAC",
    headingAccent: "Backdoor.",
    body: "IQM didn't take the traditional IPO route. They utilized a 'Blank Check' company to rapidly hit the public markets.",
    features: [
      { icon: "🏦", label: "The Merger", description: "IQM officially completed a business combination with Real Asset Acquisition Corp, a Special Purpose Acquisition Company (SPAC)." },
      { icon: "💸", label: "The Capital Injection", description: "The deal bypasses traditional roadshows and instantly injects massive capital required to build capital-intensive quantum processors." },
      { icon: "📈", label: "The Nasdaq Debut", description: "Beginning tomorrow, institutional and retail investors can trade the combined entity directly on the Nasdaq." },
    ],
    insightBox: "💡 The Reality: SPACs have a notoriously volatile history post-merger. Early investors face significant risk of initial price swings as lock-up periods expire.",
  },

  // ═══════════════════ SLIDE 3: THE TECH ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE SCIENCE",
    heading: "Bits vs.",
    headingAccent: "Qubits.",
    body: "Quantum computing isn't just a faster version of a normal computer. It is a fundamental shift in physics.",
    features: [
      { icon: "💻", label: "Classical (Bits)", description: "Traditional computers process information as 1s and 0s. They solve complex problems sequentially, one step at a time." },
      { icon: "⚛️", label: "Quantum (Qubits)", description: "Qubits exist in a state of 'superposition' (being 1 and 0 simultaneously). They can calculate millions of possibilities at the exact same time." },
      { icon: "🚀", label: "The Leap", description: "A mature quantum computer could solve problems in hours that would take a classical supercomputer thousands of years to crack." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE MARKET REACTION ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "THE USE CASES",
    heading: "Why Wall Street",
    headingAccent: "Cares.",
    body: "Investors aren't buying IQM for what it can do today. They are buying the monopoly on what it will disrupt tomorrow.",
    table: {
      headers: ["Sector", "Quantum Application", "The Disruption"],
      rows: [
        { cells: ["Pharmaceuticals", "Molecular Simulation", "Can simulate protein folding instantly, turning drug discovery from a 10-year process to a 10-day process."], highlight: true },
        { cells: ["Cybersecurity", "RSA Encryption Breaking", "Quantum algorithms can easily break current global encryption standards, forcing a massive cybersecurity upgrade cycle."], highlight: true },
        { cells: ["Finance", "High-Frequency Trading", "Optimizing complex portfolios and arbitrage opportunities across global markets simultaneously."], highlight: false },
      ],
      caption: "Quantum computing is considered a 'Digital Nuclear Weapon' due to its potential to break global encryption.",
    },
  },

  // ═══════════════════ SLIDE 5: THE MACRO LESSON ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "PORTFOLIO STRATEGY",
    heading: "The Next",
    headingAccent: "Supercycle?",
    body: "Before you buy into the Quantum hype, you must understand the timeline.",
    steps: [
      { number: "01", title: "The Hardware Gap", description: "We are currently in the 'Noisy Intermediate-Scale Quantum' (NISQ) era. The hardware is highly unstable and requires extreme sub-zero cooling." },
      { number: "02", title: "The AI Parallel", description: "Like AI in 2012, Quantum is still in its infancy. Investors are buying the infrastructure layer before the software layer even exists." },
      { number: "03", title: "Patience Required", description: "This is a 10-year play. Companies like IQM will burn immense amounts of cash before reaching commercial profitability." },
    ],
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "Quantum IPO",
    headingAccent: "Cheat Sheet.",
    body: "The AI supercycle paved the way. Now, Wall Street is hunting for the Quantum monopoly.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📈", label: "The Debut", description: "IQM Quantum Computers hits the Nasdaq via a SPAC merger tomorrow." },
      { icon: "⚛️", label: "The Tech", description: "Qubits allow simultaneous calculation, dwarfing classical supercomputers." },
      { icon: "🛡️", label: "The Threat", description: "Quantum's ability to break RSA encryption makes it a national security priority." },
      { icon: "⏳", label: "The Timeline", description: "Commercial viability is years away; this is a highly speculative infrastructure play." },
    ],
  },
];
