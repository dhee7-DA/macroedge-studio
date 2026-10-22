import type { SlideData } from "../carousel-types";

export const MICROSOFT_FRONTIER: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "THE AI MONOPOLY",
    tagRight: "JULY 2026",
    heading: "The $2.5B",
    headingAccent: "Frontier.",
    body: "Microsoft isn't just partnering with AI startups anymore. They are building an empire. Today, they officially launched 'Microsoft Frontier Company', a brand new enterprise AI titan backed by a massive $2.5 Billion investment.",
    levelBadge: "TEARDOWN",
    topicNum: "MSFT",
    keywords: ["MICROSOFT", "FRONTIER", "AI", "ENTERPRISE", "B2B", "INVESTMENT"],
    bullets: [
      "💰 $2.5 Billion Initial Investment",
      "🏢 Pure B2B / Enterprise Focus",
      "🛑 A Threat to Open Source AI?",
      "📈 Cloud Dominance Strategy",
      "⚔️ The War with Google & AWS",
    ],
  },

  // ═══════════════════ SLIDE 2: THE STRATEGY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE BUSINESS MODEL",
    heading: "Owning The",
    headingAccent: "Enterprise.",
    body: "The AI hype cycle is over. The 'commercialization' phase has begun. Microsoft Frontier is entirely focused on turning AI into recurring corporate revenue.",
    features: [
      { icon: "☁️", label: "Azure Integration", description: "Frontier will tightly integrate cutting-edge AI models directly into Azure, making it seamless for Fortune 500 companies to deploy." },
      { icon: "🔒", label: "Data Sovereignty", description: "Enterprises won't use AI if it leaks their data. Frontier guarantees military-grade data silos, solving the biggest B2B hurdle." },
      { icon: "💼", label: "The SaaS Pivot", description: "They aren't selling compute; they are selling automated workflows, effectively becoming a mega-SaaS company." },
    ],
    insightBox: "💡 The Reality: Microsoft realizes that whoever controls the enterprise workflow, controls the future of the internet.",
  },

  // ═══════════════════ SLIDE 3: THE CAPITAL ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE WAR CHEST",
    heading: "A $2.5 Billion",
    headingAccent: "Flex.",
    body: "While AI startups are struggling to raise Series B rounds in 2026, Microsoft is casually dropping $2.5B just to spin up a new division.",
    steps: [
      { number: "01", title: "Starving the Competition", description: "By deploying massive capital, Microsoft makes it nearly impossible for smaller, independent AI labs to compete for top engineering talent." },
      { number: "02", title: "Compute Monopolization", description: "A significant portion of this $2.5B will go directly into hoarding GPUs and compute infrastructure, worsening the global supply squeeze." },
      { number: "03", title: "The OpenAI Relationship", description: "This move signals Microsoft is building its own native, robust AI stack—potentially reducing its absolute reliance on OpenAI over the next decade." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE BIG TECH WAR ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "THE CLOUD WARS",
    heading: "The Big Three",
    headingAccent: "Collusion?",
    body: "How does 'Microsoft Frontier' stack up against the rest of the Cloud oligopoly?",
    table: {
      headers: ["Company", "Core Strategy", "The Moat"],
      rows: [
        { cells: ["Microsoft", "Enterprise Workflow", "Office 365 integration makes them the default choice for global corporations."], highlight: true },
        { cells: ["Google", "Data & Search", "Unmatched proprietary consumer data and integrated hardware (TPUs)."], highlight: false },
        { cells: ["Amazon (AWS)", "Agnostic Hosting", "Offering a marketplace of multiple different open-source and proprietary models."], highlight: false },
      ],
      caption: "Microsoft is abandoning the 'agnostic' approach to forcefully push its own proprietary AI ecosystem.",
    },
  },

  // ═══════════════════ SLIDE 5: THE RISKS ═══════════════════
  {
    type: "pitfalls",
    background: "dark",
    tag: "ANTITRUST THREATS",
    heading: "The Regulatory",
    headingAccent: "Crosshairs.",
    body: "A $2.5 Billion flex doesn't happen without the government noticing.",
    pitfalls: [
      {
        title: "The FTC Probe",
        description: "Global regulators are already investigating Big Tech's 'stealth acquisitions' of AI labs. Spinning up 'Frontier' internally might trigger aggressive antitrust action.",
        fix: "Microsoft is structuring this as an internal business unit, not an acquisition, to bypass M&A scrutiny."
      },
      {
        title: "The 'Open Source' Backlash",
        description: "The AI community is heavily pushing for decentralized, open-source models (like Meta's Llama). Microsoft's 'walled garden' approach could alienate developers.",
        fix: "Microsoft will likely launch a massive developer fund alongside Frontier to incentivize adoption."
      }
    ],
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE COMPLETE PICTURE",
    heading: "Microsoft Frontier",
    headingAccent: "Cheat Sheet.",
    body: "Is this the ultimate enterprise AI monopoly? Here is the summary.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🚀", label: "The Launch", description: "'Microsoft Frontier Company' is born, backed by a $2.5 Billion investment." },
      { icon: "🏢", label: "The Target", description: "Hyper-focused on Fortune 500 B2B sales and secure enterprise workflows." },
      { icon: "⚔️", label: "The Threat", description: "Makes it virtually impossible for underfunded AI startups to compete in the enterprise space." },
      { icon: "⚖️", label: "The Risk", description: "High probability of triggering FTC and EU antitrust investigations." },
    ],
  },
];
