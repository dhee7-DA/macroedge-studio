import type { SlideData } from "@workspace/carousel-engine";

export const GAMERS_VS_AI: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "THE HARDWARE RIFT",
    tagRight: "SIGNAL: APRIL 19, 2026",
    heading: "Gamers vs.",
    headingAccent: "AI Companies.",
    body: "The AI memory shortage has created a massive rift in the hardware world. NVIDIA is reallocating 40% of its gaming GPU capacity to feed the AI beasts. Here is the teardown.",
    levelBadge: "STRATEGIC",
    topicNum: "GA1",
    bullets: ["40% Production Cut", "The $5,000 RTX 5090", "VRAM Cannibalization"],
  },

  // ═══════════════════ SLIDE 2: THE REALLOCATION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "PRODUCTION PIVOT",
    heading: "The 40%",
    headingAccent: "Cut.",
    body: "In April 2026, NVIDIA officially deprioritized the consumer market to secure high-bandwidth memory for its Blackwell/Rubin AI chips.",
    features: [
      { icon: "✂️", label: "Gaming Cap", description: "Estimated 30-40% reduction in total GeForce production volume for Q2/Q3 2026." },
      { icon: "🏭", label: "Wafer Arbitrage", description: "Shifting premium 4N/3N wafers from RTX 50-series to H100/B200 enterprise orders." },
      { icon: "📉", label: "Inventory Drought", description: "Retailers reporting all-time low inventory for high-end consumer cards." },
    ],
    insightBox: "💡 The Logic: One Blackwell B200 generates 50x the profit of an RTX 5090 using the same silicon area.",
  },

  // ═══════════════════ SLIDE 3: BOM FLIP ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MANUFACTURING ECONOMICS",
    heading: "Memory is",
    headingAccent: "the Product.",
    body: "The Bill-of-Materials (BOM) for graphics cards has flipped. Memory is no longer a component; it is the dominant cost.",
    features: [
      { icon: "💰", label: "80% Cost Basis", description: "In 2026, VRAM and HBM components account for up to 80% of a GPU's total cost." },
      { icon: "📉", label: "Component Scarcity", description: "GDDR7 supply is being diverted to 'Edge AI' devices, leaving gamers in the cold." },
      { icon: "🛡️", label: "Margin Preservation", description: "Manufacturers raising prices to maintain margins as memory costs spike 400% YoY." },
    ],
    insightBox: "🎯 Strategic Take: We are no longer buying 'Graphics Cards'; we are buying 'VRAM Allocations.'",
  },

  // ═══════════════════ SLIDE 4: THE FLAGSHIP PARADOX ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MARKET ANOMALY",
    heading: "The $5,000",
    headingAccent: "Paradox.",
    body: "The RTX 5090 was supposed to be a gamer's dream. Instead, it has become a speculative asset for boutique AI labs.",
    features: [
      { icon: "🏦", label: "Secondary Market", description: "Street prices for the 5090 hitting $5,000 as small LLM (Large Language Model) startups buy consumer stock." },
      { icon: "🛑", label: "Retail Rationing", description: "Major retailers enforcing '1 Card per Household' to prevent scalper/AI-farm bots." },
      { icon: "📈", label: "Resale Value", description: "Used 4090s are currently trading at 150% of their original 2022 MSRP." },
    ],
    insightBox: "💡 Analysis: The 'Enthusiast Gamer' is now competing directly with 'Venture Capital' for the same silicon.",
  },

  // ═══════════════════ SLIDE 5: VRAM SCARCITY ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PERFORMANCE WALL",
    heading: "The 8GB",
    headingAccent: "Dead Zone.",
    body: "Modern games now demand 16GB+ of VRAM, but the market is being flooded with 8GB 'Artificial Limits' to save memory for AI.",
    features: [
      { icon: "🚧", label: "Performance Wall", description: "2026 titles are unplayable at 4K on cards with less than 12GB of memory." },
      { icon: "📉", label: "Artificial Tiering", description: "NVIDIA keeping VRAM low on mid-range cards to prevent them from being used for AI training." },
      { icon: "🛑", label: "The Rift", description: "Gamers feel 'Abandoned' as hardware capability is held back to protect enterprise sales." },
    ],
    insightBox: "🎯 Verdict: The 'VRAM Stunt' is a deliberate strategy to segment the market and force AI users into the $10,000+ A-series cards.",
  },

  // ═══════════════════ SLIDE 6: THE SOFTWARE PATCH ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "TECHNICAL WORKAROUNDS",
    heading: "Neural",
    headingAccent: "Compression.",
    body: "NVIDIA's solution to the hardware shortage isn't more silicon—it's more AI. Introducing 'Software-Defined Textures.'",
    features: [
      { icon: "🧠", label: "Neural Materials", description: "Using AI to 'Guess' textures instead of storing them in memory, saving 4x VRAM space." },
      { icon: "⚡", label: "DLSS 5.0", description: "Generating nearly 90% of the pixels via AI to reduce the load on physical compute cores." },
      { icon: "📉", label: "Hardware Stagnation", description: "2026 marks the first year with zero physical architecture refreshes for gaming." },
    ],
    insightBox: "💡 Strategy: NVIDIA is trading 'Physical GFLOPS' for 'AI Reasoning' to hide the hardware shortage.",
  },

  // ═══════════════════ SLIDE 7: MARGIN SUPERIORITY ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "CORPORATE PRIORITIES",
    heading: "ROI Over",
    headingAccent: "Entertainment.",
    body: "The institutional case for NVIDIA ($NVDA). Why the 'Gamer Backlash' doesn't matter to the bottom line.",
    features: [
      { icon: "📈", label: "Enterprise ROI", description: "A single $40,000 H100 delivers more margin than 50 gaming GPUs." },
      { icon: "💼", label: "B2B Stickiness", description: "Enterprises sign 5-year contracts; gamers buy once every 3 years. The choice is clear." },
      { icon: "🛡️", label: "Market Capture", description: "By starving the 'Edge AI' market of gaming cards, NVIDIA protects its $80B data center revenue." },
    ],
    insightBox: "🎯 Strategic Truth: Gamers were the 'Beta Testers' for the technology that is now being sold to the world.",
  },

  // ═══════════════════ SLIDE 8: THE SECOND-HAND CHAOS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MARKET FRAGMENTATION",
    heading: "Mining",
    headingAccent: "Era 2.0.",
    body: "We are seeing a return to the 2021 Crypto-Mining chaos, but this time it's 'Inference Mining' for LLMs.",
    features: [
      { icon: "🔄", label: "Refurbished Flux", description: "Old data center A100s being 'Gamerized' and sold as high-VRAM alternatives." },
      { icon: "📉", label: "Market Volatility", description: "Used GPU prices fluctuating 20% weekly based on AI model release cycles." },
      { icon: "🛑", label: "Scam Proliferation", description: "Rise in 'Fake VRAM' cards targeting desperate gamers on third-party sites." },
    ],
    insightBox: "💡 Risk: The 'Used Market' is now a minefield of over-volted AI cards with degraded silicon.",
  },

  // ═══════════════════ SLIDE 9: CLOUD GAMING PIVOT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE FUTURE OF GAMING",
    heading: "The End of",
    headingAccent: "the Box.",
    body: "If you can't buy the hardware, you lease it. 2026 is seeing a massive surge in GeForce NOW and cloud adoption.",
    features: [
      { icon: "☁️", label: "Cloud Hegemony", description: "GeForce NOW subscribers up 300% as local hardware becomes unaffordable." },
      { icon: "🌐", label: "Edge Nodes", description: "NVIDIA using the same Blackwell chips to power gaming during 'Off-Peak' AI hours." },
      { icon: "🏢", label: "Rentier Model", description: "The transition from 'Owning the Silicon' to 'Subscribing to the Frame.'" },
    ],
    insightBox: "🎯 Forecast: By 2030, the 'Gaming PC' will be an ultra-luxury niche for the top 1% of the market.",
  },

  // ═══════════════════ SLIDE 10: COMMUNITY SENTIMENT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE BACKLASH",
    heading: "The Reddit",
    headingAccent: "Revolt.",
    body: "The rift is cultural. Gamers feel like the 'Ignored Foundation' of the company that they built.",
    features: [
      { icon: "📉", label: "Brand Loyalty", description: "NVIDIA's 'Net Promoter Score' among Gen-Z gamers at an all-time low." },
      { icon: "🎮", label: "AMD/Intel Opportunity", description: "A massive window for 'Radeon' and 'Arc' to capture the displaced mid-range." },
      { icon: "🛑", label: "Modding Culture", description: "The rise of 'VRAM Modding'—physically soldering more memory onto low-tier cards." },
    ],
    insightBox: "💡 Note: A culture that feels 'Priced Out' of its own hobby is a volatile demographic for any brand.",
  },

  // ═══════════════════ SLIDE 11: MACRO IMPACT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "BROADER ECONOMICS",
    heading: "The Luxury",
    headingAccent: "Threshold.",
    body: "Gaming is moving from a 'Mass Market' hobby to a 'Luxury Asset' class. The economic implications are deep.",
    features: [
      { icon: "📊", label: "Discretionary Spend", description: "The 'Cost of Entry' for 4K gaming has risen from $1,200 to $4,000 in 4 years." },
      { icon: "📈", label: "Entertainment Inflation", description: "Hardware inflation is outspacing wage growth by 4:1 in the tech sector." },
      { icon: "📉", label: "Dev Crisis", description: "Game studios delaying titles because the 'Base Hardware' of the audience is too weak." },
    ],
    insightBox: "🎯 Strategic Reality: The AI boom is literally making the next generation of games unplayable for the masses.",
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL VERDICT",
    heading: "The Great",
    headingAccent: "Sorting.",
    body: "Silicon is the new gold. In the fight between 'Entertainment' and 'Intelligence,' capital has chosen the latter. Position accordingly.",
    ctaText: "Follow @macroedge_in",
  },
];
