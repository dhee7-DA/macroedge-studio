import type { SlideData } from "@workspace/carousel-engine";

export const CLAUDE_PT1: SlideData[] = [
  // 1: HERO
  {
    type: "hero",
    background: "dark",
    tag: "AI FRONTIER SERIES",
    tagRight: "PART I: THE PHILOSOPHY",
    heading: "Why Claude",
    headingAccent: "is Different.",
    body: "Anthropic’s Claude 4.7 has officially claimed the crown as the world's most capable AI. But it isn't just faster—it is fundamentally different. Here is the teardown.",
    levelBadge: "EXPERT",
    topicNum: "C1",
    bullets: ["Constitutional AI Moat", "The Amodei Breakaway", "Project Glasswing"],
  },

  // 2: THE GENESIS
  {
    type: "concept",
    background: "light",
    tag: "THE ANTHROPIC ORIGIN",
    heading: "The OpenAI",
    headingAccent: "Split.",
    body: "Anthropic was founded in 2021 by 11 former OpenAI leaders (including the Amodei siblings) who left due to concerns over AI safety and commercialization.",
    features: [
      { icon: "🏛️", label: "Safety First", description: "A non-profit-led corporate structure designed to prioritize safety over rapid scaling." },
      { icon: "⚖️", label: "Public Benefit", description: "Registered as a PBC (Public Benefit Corporation) to balance profit with societal impact." },
      { icon: "🏦", label: "The Capital", description: "Successfully raised $10B+ from Amazon and Google while maintaining independence." },
    ],
    insightBox: "💡 Analysis: Anthropic exists to be the 'Responsible Alternative' to the silicon valley 'Move Fast' culture.",
  },

  // 3: CONSTITUTIONAL AI
  {
    type: "concept",
    background: "dark",
    tag: "CORE DIFFERENTIATION",
    heading: "Constitutional",
    headingAccent: "AI.",
    body: "Unlike other models that learn 'politeness' from human feedback (RLHF), Claude learns from a set of written principles—the 'Constitution.'",
    features: [
      { icon: "📜", label: "The Constitution", description: "A set of rules (e.g., UN Declaration of Human Rights) used to train the model." },
      { icon: "🛡️", label: "Self-Correction", description: "The model reviews its own responses against these principles without human intervention." },
      { icon: "⚖️", label: "Value Alignment", description: "Ensures the AI remains helpful, harmless, and honest at a structural level." },
    ],
    insightBox: "🎯 Strategic Take: Constitutional AI is Anthropic’s 'Secret Sauce'—it creates a more reliable and less biased model.",
  },

  // 4: THE 4.7 LEAP
  {
    type: "concept",
    background: "light",
    tag: "PERFORMANCE BENCHMARKS",
    heading: "The 4.7",
    headingAccent: "Crown.",
    body: "Released in April 2026, Claude 4.7 has surpassed GPT-5 in complex reasoning and software engineering tasks.",
    features: [
      { icon: "💻", label: "SWE-bench", description: "87.6% score on verified software engineering tasks—the first model to cross 85%." },
      { icon: "🧠", label: "Human Eval", description: "Consistently ranked as 'More Human-Like' and 'Less Robotic' in double-blind testing." },
      { icon: "🖼️", label: "Vision Leap", description: "3.3x higher resolution for analyzing complex financial charts and medical images." },
    ],
    insightBox: "💡 Metric: Claude 4.7 solves in 2 minutes what a senior engineer takes 2 hours to debug.",
  },

  // 5: PROJECT GLASSWING
  {
    type: "concept",
    background: "dark",
    tag: "CYBER-SECURITY MOAT",
    heading: "Project",
    headingAccent: "Glasswing.",
    body: "Anthropic’s internal project to make Claude the world's most 'Defensive' AI for national security.",
    features: [
      { icon: "🛡️", label: "Cyber-Defense", description: "Automatically detects and blocks attempts to use the AI for high-risk malware creation." },
      { icon: "🏛️", label: "National Intel", description: "The preferred model for US and UK government intelligence due to its safety guardrails." },
      { icon: "🔍", label: "Transparency", description: "The most transparent model regarding how it reaches its 'Safety Verdicts.'" },
    ],
    insightBox: "🎯 Forecast: Safety is no longer a 'Feature'—it is the primary product Anthropic is selling to the world.",
  },

  // 6: THE ECOSYSTEM
  {
    type: "concept",
    background: "light",
    tag: "PRODUCT ARCHITECTURE",
    heading: "The Claude",
    headingAccent: "Family.",
    body: "Anthropic’s tiered model strategy for 2026, targeting different compute and cost requirements.",
    features: [
      { icon: "👑", label: "Opus 4.7", description: "The flagship for complex reasoning, research, and deep-tech coding." },
      { icon: "⚡", label: "Sonnet 4.7", description: "The 'Sweet Spot' of speed and intelligence for enterprise scaling." },
      { icon: "🚀", label: "Haiku 4.7", description: "Sub-second responses for real-time customer service and basic task automation." },
    ],
    insightBox: "💡 Tip: Sonnet 4.7 is currently the most widely deployed enterprise model in the S&P 500.",
  },

  // 7: ARTIFACTS 2.0
  {
    type: "concept",
    background: "dark",
    tag: "UI INNOVATION",
    heading: "Claude",
    headingAccent: "Artifacts.",
    body: "The UI that changed the industry. Claude 4.7 introduces 'Artifacts 2.0' for real-time code execution.",
    features: [
      { icon: "🖥️", label: "Live Sandbox", description: "Edit and run code, websites, and data visualizations directly in the side-window." },
      { icon: "📂", label: "Multi-Session", description: "Shared memory across different project folders for seamless collaboration." },
      { icon: "🤝", label: "Human-in-the-Loop", description: "Designed to be a 'Pair Programmer' rather than just a 'Chatbot.'" },
    ],
    insightBox: "🎯 Strategic Signal: Claude is moving from a 'Chat Interface' to a 'Workstation Interface.'",
  },

  // 8: THE ENTERPRISE WALL
  {
    type: "concept",
    background: "light",
    tag: "B2B DOMINANCE",
    heading: "Institutional",
    headingAccent: "Trust.",
    body: "Why the Fortune 500 is choosing Anthropic over OpenAI and Google.",
    features: [
      { icon: "🔐", label: "Data Sovereignty", description: "Guaranteed that enterprise data is never used to train future Claude models." },
      { icon: "🏦", label: "Banking Adoption", description: "7 of the top 10 global banks have mandated Claude for their research teams." },
      { icon: "⚖️", label: "Legal Indemnity", description: "Industry-leading legal protection against copyright and output liability." },
    ],
    insightBox: "💡 Analysis: Anthropic is winning the 'Boring but Critical' enterprise market.",
  },

  // 9: CLAUDE VS THE WORLD
  {
    type: "steps",
    background: "dark",
    tag: "COMPARATIVE ANALYSIS",
    heading: "The Competitive",
    headingAccent: "Matrix.",
    body: "How Claude 4.7 stacks up against the 2026 frontier model landscape.",
    steps: [
      {
        number: "01",
        title: "Reasoning (vs GPT-5)",
        description: "Claude 4.7 shows 12% higher accuracy in complex 'System 2' logical puzzles.",
      },
      {
        number: "02",
        title: "Coding (vs Gemini 2.5)",
        description: "Artifacts 2.0 provides a superior developer experience for full-stack prototyping.",
      },
      {
        number: "03",
        title: "Safety (vs Llama 4)",
        description: "Constitutional AI provides a more reliable 'Refusal Mechanism' for prohibited content.",
      },
    ],
  },

  // 10: THE RISKS
  {
    type: "concept",
    background: "light",
    tag: "CRITICAL ANALYSIS",
    heading: "The Refusal",
    headingAccent: "Trap.",
    body: "The 'Safety Moat' is also Claude’s biggest weakness. Exploring the 'Over-Refusal' problem.",
    features: [
      { icon: "🛑", label: "Moralizing", description: "Critics argue that Claude's constitution can lead to 'Preachy' or 'Moralizing' responses." },
      { icon: "📉", label: "Latency", description: "Safety checks add a sub-second delay compared to 'Unfiltered' open-source models." },
      { icon: "⚖️", label: "Regulation", description: "Risk of becoming a 'Stodgy' institutional tool while others innovate faster." },
    ],
    insightBox: "💡 Note: The line between 'Safety' and 'Censorship' remains the primary debate in the Anthropic community.",
  },

  // 11: SUMMARY CHECKLIST
  {
    type: "concept",
    background: "dark",
    tag: "2026 CHECKLIST",
    heading: "The Claude",
    headingAccent: "Advantage.",
    body: "Key takeaways for the institutional investor and technologist.",
    features: [
      { icon: "🛡️", label: "Safety Moat", description: "Constitutional AI creates a structural advantage in regulated industries." },
      { icon: "🚀", label: "Model King", description: "Claude 4.7 is the current performance leader in reasoning and code." },
      { icon: "🤝", label: "B2B Focus", description: "Deeply integrated into the Amazon (AWS) and Google Cloud ecosystems." },
    ],
    insightBox: "🎯 Verdict: Anthropic is building the 'Industrial-Grade' AI of the future.",
  },

  // 12: CTA
  {
    type: "cta",
    background: "dark",
    tag: "AI FRONTIER",
    heading: "Why Claude",
    headingAccent: "is Different.",
    body: "The world of AI is splitting between 'Scale' and 'Alignment.' Anthropic has chosen Alignment. Follow the crown.",
    ctaText: "Follow @macroedge_in",
  },
];
