import type { SlideData } from "@workspace/carousel-engine";

export const INTEL_SURGE: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INSTITUTIONAL TEARDOWN",
    tagRight: "SIGNAL: APRIL 24, 2026",
    heading: "The Intel",
    headingAccent: "Resurgence.",
    body: "Inside the +25% surge. From the Tesla 'Terafab' partnership to the fastest 18A node ramp in history—the Old Guard is officially back.",
    levelBadge: "STOCKS",
    topicNum: "INTC",
    bullets: ["+25% Stock Surge", "The Tesla 14A Deal", "AI Revenue: 60% of Total"],
  },

  // ═══════════════════ SLIDE 2: THE REVENUE BEAT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "Q1 2026 PERFORMANCE",
    heading: "The $1B",
    headingAccent: "Blowout.",
    body: "Intel didn’t just beat expectations; they demolished them. For the 6th consecutive quarter, the turnaround is accelerating.",
    features: [
      { icon: "💵", label: "Q1 Revenue", description: "$13.6 Billion (vs. $12.5B Est). A massive $1.1B top-line beat." },
      { icon: "📈", label: "EPS Surprise", description: "$0.29 per share (vs. $0.02 Est). Nearly 15x higher than consensus." },
      { icon: "📊", label: "Q2 Guidance", description: "$13.8B - $14.8B. Signalling a sustained growth trajectory into 2H 2026." },
    ],
    insightBox: "💡 Analysis: This is the definitive end of the 'Intel is Dying' narrative. Execution is finally matching the ambition.",
  },

  // ═══════════════════ SLIDE 3: THE TESLA PARTNERSHIP ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "FOUNDRY MILESTONE",
    heading: "The Tesla",
    headingAccent: "Terafab.",
    body: "The biggest signal in the report: Intel has secured Tesla as a flagship customer for its advanced 14A process node.",
    features: [
      { icon: "🏎️", label: "Austin Terafab", description: "Joint project to manufacture custom Tesla AI silicon in Austin, Texas." },
      { icon: "🛠️", label: "14A Adoption", description: "First major external validation of Intel’s most advanced sub-2nm manufacturing node." },
      { icon: "📦", label: "Supply Security", description: "Reduces Tesla's reliance on TSMC and secures a domestic AI hardware moat." },
    ],
    insightBox: "🎯 Strategic Intel: Winning Tesla is the 'Foundry Moment' Pat Gelsinger has been promising for three years.",
  },

  // ═══════════════════ SLIDE 4: THE 18A INFLECTION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MANUFACTURING TURNAROUND",
    heading: "The 18A",
    headingAccent: "Inflection.",
    body: "Intel’s 18A node (the foundation of their comeback) is now tracking ahead of internal yield targets.",
    features: [
      { icon: "🚀", label: "Fastest Ramp", description: "Fastest volume ramp in 5 years for Intel 3-based Xeon 6 and 18A Core Series." },
      { icon: "⚙️", label: "Yield Performance", description: "High-NA EUV integration is delivering better-than-expected defect density." },
      { icon: "🏢", label: "Compute Edge", description: "18A provides the power/performance parity needed to compete with NVIDIA's Grace-Hopper." },
    ],
    insightBox: "🕵️ Analyst Note: 18A is no longer a 'Roadmap Item.' It is a physical, revenue-generating engine as of April 2026.",
  },

  // ═══════════════════ SLIDE 5: DATA CENTER AI ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "SEGMENT GROWTH",
    heading: "Data Center",
    headingAccent: "Dominance.",
    body: "While competitors focused purely on GPUs, Intel quietly reclaimed the high-end server market.",
    features: [
      { icon: "☁️", label: "Revenue: $5.1B", description: "Data Center and AI segment grew +22% YoY, driven by Xeon 6 demand." },
      { icon: "🧠", label: "Agentic AI", description: "Massive adoption of CPUs for 'Agentic Inference' where latency matters more than raw FLOPs." },
      { icon: "⚡", label: "Gaudi 3", description: "Enterprise sales of Gaudi 3 accelerators are now 60% of the AI hardware mix." },
    ],
    insightBox: "📊 Structural Shift: AI-related businesses now represent 60% of Intel's total revenue, growing 40% YoY.",
  },

  // ═══════════════════ SLIDE 6: IDM 2.0 REALITY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "INTEL FOUNDRY",
    heading: "The Foundry",
    headingAccent: "Reality.",
    body: "Intel Foundry revenue reached $5.4B (up 16% YoY). The 'Factory for the World' is scaling.",
    features: [
      { icon: "🏗️", label: "Segment Scale", description: "Operating loss improved by $72M as internal and external volume fills the fabs." },
      { icon: "🇺🇸", label: "CHIPS Act Moat", description: "Federal subsidies are now fully flowing into the Ohio and Arizona 'Mega-Sites.'" },
      { icon: "🔗", label: "External Backlog", description: "The Tesla deal is expected to trigger a 'Follower Effect' among US-based chip designers." },
    ],
  },

  // ═══════════════════ SLIDE 7: CLIENT COMPUTING ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PC MARKET STABILITY",
    heading: "The AI PC",
    headingAccent: "Refresh.",
    body: "The Client Computing Group (CCG) reported $7.7B in revenue, stabilizing the core business.",
    features: [
      { icon: "💻", label: "Core Series 3", description: "First-mover advantage in NPU-integrated laptop chips for local AI tasks." },
      { icon: "🛒", label: "Inventory Health", description: "Retail and enterprise channels have finally cleared the post-pandemic glut." },
      { icon: "🎯", label: "Market Share", description: "Intel maintains 78% share in the notebook market despite ARM-based threats." },
    ],
  },

  // ═══════════════════ SLIDE 8: THE PROFITABILITY PIVOT ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "FINANCIAL SCOREBOARD",
    heading: "Profitability",
    headingAccent: "Pivot.",
    body: "Side-by-side comparison of Intel's Q1 2026 performance vs. Street Expectations.",
    table: {
      headers: ["Metric", "Consensus Est.", "Actual Reported"],
      rows: [
        { cells: ["Total Revenue", "$12.5 Billion", "$13.6 Billion"], highlight: true },
        { cells: ["EPS (Non-GAAP)", "$0.02", "$0.29"], highlight: true },
        { cells: ["Gross Margin", "43.2%", "46.1%"] },
        { cells: ["DCAI Growth", "12% YoY", "22% YoY"], highlight: true },
      ],
      caption: "Source: Intel Investor Relations, April 23, 2026.",
    },
  },

  // ═══════════════════ SLIDE 9: THE CONTRAST ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MARKET PSYCHOLOGY",
    heading: "Intel vs.",
    headingAccent: "Tesla.",
    body: "Why Intel surged +25% while Tesla fell on similar spending announcements. It's about 'Execution Proof.'",
    features: [
      { icon: "📉", label: "Tesla: The Gamble", description: "Increased spending without immediate margin expansion triggered a sell-off." },
      { icon: "🚀", label: "Intel: The Payoff", description: "Spending (CapEx) was met with immediate revenue beats and margin expansion." },
      { icon: "⚖️", label: "Investor Verdict", description: "The market is no longer funding 'Long-Term Promises.' It is rewarding 'Present-Day ROI.'" },
    ],
  },

  // ═══════════════════ SLIDE 10: INSTITUTIONAL UPGRADES ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "ANALYST SENTIMENT",
    heading: "The Upgrade",
    headingAccent: "Cycle.",
    body: "Analysts at Tier-1 banks are flipping from 'Sell/Neutral' to 'Overweight' following the Q1 results.",
    steps: [
      {
        number: "01",
        title: "Target Price Hikes",
        description: "Median price targets have jumped from $42 to $58 in 24 hours.",
      },
      {
        number: "02",
        title: "Foundry Re-Rating",
        description: "Analysts are now valuing Intel Foundry as a standalone asset, comparable to TSMC.",
      },
      {
        number: "03",
        title: "Short Squeeze",
        description: "Massive short-covering is fueling the +25% volatility as bears are caught off-guard.",
      },
    ],
  },

  // ═══════════════════ SLIDE 11: GEOPOLITICAL MOAT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE NATIONAL CHAMPION",
    heading: "The Foundry",
    headingAccent: "Moat.",
    body: "As the Strait of Hormuz remains blocked, Intel's domestic manufacturing footprint is their ultimate competitive advantage.",
    features: [
      { icon: "🛡️", label: "Supply Sovereignty", description: "Intel is the only firm capable of sub-2nm manufacturing on U.S. soil." },
      { icon: "🇺🇸", label: "Policy Tailwinds", description: "The 'Foundry First' policy ensures a steady stream of government contracts through 2030." },
      { icon: "⚠️", label: "Risk Mitigation", description: "Hormuz/Taiwan tensions make Intel the mandatory 'Hedge' for Big Tech supply chains." },
    ],
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE VERDICT",
    heading: "The Comeback",
    headingAccent: "is Real.",
    body: "Intel is no longer a turnaround play. It is a dominant force in the Agentic AI hardware era. The 25% surge is just the beginning.",
    ctaText: "Follow @macroedge_in",
  },
];
