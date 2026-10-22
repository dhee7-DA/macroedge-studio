import type { SlideData } from "../carousel-types";

export const SNOW_AI_LAYER: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "EARNINGS TEARDOWN",
    tagRight: "MAY 2026",
    heading: "The AI Data",
    headingAccent: "Layer.",
    body: "While legacy software companies collapse under macro pressure, Snowflake ($SNOW) just exploded 38% after crushing earnings. This proves one thing: Enterprise AI is useless without enterprise data.",
    levelBadge: "INTERMEDIATE",
    topicNum: "STOCK-SNOW",
    bullets: ["The Data Problem", "The RAG Architecture", "The Snowflake Catalyst", "Consumption Pricing", "The Software Divergence"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE PROBLEM",
    heading: "AI Needs Clean",
    headingAccent: "Data.",
    body: "Everyone is buying Nvidia chips, but LLMs are completely useless to a Fortune 500 company if they cannot safely access proprietary internal data.",
    features: [
      { icon: "🗑️", label: "The Data Swamp", description: "Most enterprise data is siloed, messy, and unstructured. Feeding this into an LLM produces hallucinations and massive security risks." },
      { icon: "❄️", label: "The Data Cloud", description: "Snowflake acts as the 'Data Cloud,' centralizing, cleaning, and governing corporate data so AI models can safely train on it." },
      { icon: "🔒", label: "Security Moat", description: "Companies refuse to send their proprietary data out to OpenAI. They are bringing the AI models *into* Snowflake where their data already lives." },
    ],
    insightBox: "💡 Analysis: Data is the new oil, but Snowflake is the refinery. You cannot run an AI engine on crude oil.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "ARCHITECTURE",
    heading: "The Power of",
    headingAccent: "RAG.",
    body: "Retrieval-Augmented Generation (RAG) is the key to enterprise AI, and Snowflake is the foundational database for it.",
    features: [
      { icon: "🧠", label: "Contextual Memory", description: "Instead of relying on base training data, RAG allows an LLM to query Snowflake in real-time to find exact corporate facts." },
      { icon: "🚫", label: "Killing Hallucinations", description: "By grounding the AI in governed Snowflake data, enterprises completely eliminate the risk of the model making up numbers." },
      { icon: "⚡", label: "Vector Search", description: "Snowflake's native vector database capabilities allow semantic searches across billions of rows in milliseconds." },
    ],
  },
  {
    type: "table",
    background: "dark",
    tag: "THE DIVERGENCE",
    heading: "Software is",
    headingAccent: "Splitting.",
    body: "The SaaS sector is experiencing a violent bifurcation. Companies are slashing legacy IT budgets to aggressively fund their AI data layers.",
    table: {
      headers: ["Company", "Ticker", "Post-Earnings Move"],
      rows: [
        { cells: ["Snowflake", "SNOW", "+38% (Beat)"], highlight: true },
        { cells: ["Palantir", "PLTR", "+14% (Beat)"], highlight: true },
        { cells: ["Datadog", "DDOG", "+8% (Beat)"] },
        { cells: ["Salesforce", "CRM", "-5% (Miss)"] },
        { cells: ["Workday", "WDAY", "-12% (Miss)"] }
      ],
      caption: "MacroEdge Alpha: Do not buy 'SaaS' blindly. The market is exclusively rewarding Data Infrastructure."
    }
  },
  {
    type: "concept",
    background: "light",
    tag: "THE CATALYST",
    heading: "The Consumption",
    headingAccent: "Model.",
    body: "Why did $SNOW surge 38%? Because their revenue model is perfectly aligned with the AI compute explosion.",
    features: [
      { icon: "💳", label: "Pay Per Query", description: "Unlike traditional SaaS (flat subscription fee), Snowflake charges based on compute and storage consumption." },
      { icon: "📈", label: "AI Acceleration", description: "As companies run massive AI workloads against their data, Snowflake's consumption revenue scales exponentially without them needing to 'upsell' the client." },
      { icon: "🧲", label: "Data Gravity", description: "Once a massive enterprise moves petabytes of data into Snowflake, it is incredibly expensive and difficult to leave. The churn rate is near zero." },
    ],
  },
  {
    type: "dosdonts",
    background: "dark",
    tag: "ENTERPRISE STRATEGY",
    heading: "The Data",
    headingAccent: "Architecture.",
    body: "How institutions are restructuring their tech stacks to survive the AI transition.",
    dos: [
      { text: "Consolidate data lakes into a unified governed cloud." },
      { text: "Implement strict Role-Based Access Control (RBAC) before attaching LLMs." },
      { text: "Utilize consumption-based pricing to scale with compute demand." }
    ],
    donts: [
      { text: "Do not send proprietary customer data to external public APIs." },
      { text: "Do not attempt to build internal LLMs on messy, unstructured data lakes." }
    ]
  },
  {
    type: "concept",
    background: "light",
    tag: "FINANCIALS",
    heading: "The Margin",
    headingAccent: "Expansion.",
    body: "Snowflake isn't just growing top-line revenue; their unit economics are rapidly improving as they scale.",
    features: [
      { icon: "📊", label: "Gross Margins", description: "Product gross margins are approaching 78%, driven by massive cloud provider discounts and optimized compute engines." },
      { icon: "💸", label: "Free Cash Flow", description: "Snowflake is generating massive adjusted free cash flow, allowing them to fund aggressive R&D without diluting shareholders." },
      { icon: "🤝", label: "Cloud Provider Leverage", description: "Due to their massive scale, Snowflake commands immense pricing power when negotiating compute costs with AWS and Azure." },
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE THREAT",
    heading: "The Databricks",
    headingAccent: "War.",
    body: "Snowflake's 38% pop is massive, but they are fighting a brutal war for the enterprise data layer.",
    features: [
      { icon: "⚔️", label: "The Arch Rival", description: "Databricks (currently private) is Snowflake's primary competitor, aggressively pushing their 'Lakehouse' architecture." },
      { icon: "💰", label: "Margin Pressure", description: "To win massive enterprise contracts, both companies are forced to heavily discount their storage costs, putting pressure on long-term gross margins." },
      { icon: "☁️", label: "The Cloud Giants", description: "Snowflake runs on AWS, Azure, and Google Cloud, but also competes with their native tools (Redshift, Synapse, BigQuery)." },
    ],
  },
  {
    type: "steps",
    background: "light",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "Trading the",
    headingAccent: "Data Layer.",
    body: "How to position your capital as the AI revolution shifts from hardware to data infrastructure.",
    steps: [
      {
        number: "01",
        title: "Stop Buying Legacy SaaS",
        description: "Companies are consolidating their IT budgets. Avoid workflow software companies that lack a clear, monetizable AI data strategy."
      },
      {
        number: "02",
        title: "Wait for the Databricks IPO",
        description: "Databricks is expected to IPO soon. When it does, it will suck liquidity out of Snowflake. Do not buy SNOW at a 38% premium right now."
      },
      {
        number: "03",
        title: "Follow the Consumption",
        description: "Focus purely on companies with 'consumption-based' pricing models. They are the only ones capable of capturing the exponential upside of AI compute."
      }
    ],
  },
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE STRATEGY",
    heading: "Data is the",
    headingAccent: "New Oil.",
    body: "Nvidia builds the engines. Snowflake provides the refined fuel. Own the infrastructure.",
    ctaText: "Follow @macroedge_in",
  },
];
