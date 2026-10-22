import type { SlideData } from "@workspace/carousel-engine";

export const HORMUZ_CRISIS: SlideData[] = [
  // ═══════════════════ SLIDE 1: HOOK / HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INTELLIGENCE BRIEFING",
    tagRight: "GEOPOLITICS × ECONOMICS",
    heading: "Strait of",
    headingAccent: "Hormuz.",
    body: "A 21-mile strip of water controls 20% of the world's oil. Here is exactly what happens to your portfolio, the stock market, and your grocery bill if it closes overnight.",
    levelBadge: "MACRO",
    topicNum: "01",
    bullets: [
      "🛢️ Oil Shock",
      "📉 Market Crash",
      "🏛️ Central Bank Trap",
      "🛒 Grocery Inflation",
      "⛽ Gas Prices",
    ],
  },

  // ═══════════════════ SLIDE 2: GEOGRAPHY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE GEOGRAPHY",
    heading: "An Economic",
    headingAccent: "Artery.",
    body: "The Strait of Hormuz sits between Iran and Oman — just 21 miles wide. One-fifth of ALL oil consumed globally passes through here daily.",
    features: [
      { icon: "🛢️", label: "21 Million Barrels Per Day", description: "More than the entire output of the US, Canada, and Mexico combined." },
      { icon: "🚢", label: "1/3 of All Seaborne Oil", description: "Every third tanker on the planet is heading to or from the Gulf." },
      { icon: "🌏", label: "Feeds Asia, Europe & Beyond", description: "India, China, Japan, South Korea, and EU all depend on it." },
      { icon: "⚠️", label: "Zero Backup Routes", description: "No pipeline can reroute even 10% of this volume." },
    ],
    insightBox: "💡 If Hormuz closes, the world has no Plan B for replacing 21 million barrels per day.",
    footnote: "Sources: EIA Regional Energy Transit Assessment & Lloyd’s List (2025-26).",
  },

  // ═══════════════════ SLIDE 3: THE SCENARIO ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE SCENARIO",
    heading: "What If It",
    headingAccent: "Closes?",
    body: "If tensions escalate into a military blockade, the world economy enters uncharted territory — 20% of global oil vanishes overnight.",
    features: [
      { icon: "🚫", label: "21M Barrels Instantly Trapped", description: "Tankers cannot exit the Gulf. Hundreds of vessels stranded." },
      { icon: "📉", label: "20% of Supply — Gone", description: "An instantaneous cliff-edge drop in the world's most critical commodity." },
      { icon: "💰", label: "Futures Markets Enter Panic", description: "Every commodity desk reprices overnight. Algorithms amplify chaos." },
      { icon: "🏛️", label: "Reserves Start Draining", description: "The US Strategic Reserve holds ~400M barrels. At 21M/day, that's 19 days." },
    ],
    insightBox: "⚠️ Unlike chip shortages, oil shocks hit EVERY industry at once — transport, manufacturing, agriculture, heating.",
    footnote: "Scenario Data: UNCTAD Maritime Risk Index & Strategic Petroleum Reserve Analysis.",
  },

  // ═══════════════════ SLIDE 4: OIL PRICE SPIKE ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "IMMEDIATE IMPACT",
    heading: "Oil Spikes",
    headingAccent: "Instantly.",
    body: "When 20% of global oil vanishes overnight, the math is brutal. Analysts project crude could hit $150–$200+ per barrel within DAYS. Oil hit $147 in 2008 on demand alone. A supply cutoff would dwarf that.",
    features: [
      { icon: "🔺", label: "Brent Crude", description: "From ~$85 → $150–$200+ per barrel within days of closure" },
      { icon: "🔺", label: "Natural Gas", description: "LNG tankers rerouted, Asian spot prices double overnight" },
      { icon: "🔺", label: "Jet Fuel", description: "Airlines face immediate margin destruction across all routes" },
      { icon: "🟢", label: "US Shale Producers", description: "Domestic drillers become strategic assets, stocks surge 20–40%" },
    ],
    insightBox: "📊 Every $10 increase in oil adds ~0.3% to global inflation and shaves 0.1% off GDP growth.",
    footnote: "Financial Projections: Brent Crude Spot/Futures Multiplier (Apr 2026).",
  },

  // ═══════════════════ SLIDE 5: FREIGHT MULTIPLIER ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "LOGISTICS SHOCK",
    heading: "The Freight",
    headingAccent: "Multiplier.",
    body: "The entire global logistics network runs on bunker fuel. When fuel costs double, shipping companies pass costs to every product on every shelf worldwide.",
    steps: [
      {
        number: "01",
        title: "🔺 Ocean Freight Rates",
        description: "Container costs multiply 2–3×. A 40ft container Shanghai → LA jumps from $2,000 to $6,000+.",
      },
      {
        number: "02",
        title: "🔺 Air Cargo Costs",
        description: "Jet fuel makes air freight prohibitively expensive. Electronics, pharma face 3× cost or delays.",
      },
      {
        number: "03",
        title: "🔺 Last-Mile Delivery",
        description: "Diesel trucking passes surcharges to retailers. Amazon, FedEx add fuel surcharges in 48 hours.",
      },
    ],
    insightBox: "🚢 The 2021 Suez blockage (ONE ship, 6 days) cost $9.6B/day. Hormuz would be 100× worse.",
    footnote: "Logistics Audit: Baltic Dry Index (BDI) & Port of Jebel Ali Freight Projections.",
  },

  // ═══════════════════ SLIDE 6: TRICKLE-DOWN INFLATION ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE DOMINO EFFECT",
    heading: "Trickle-Down",
    headingAccent: "Inflation.",
    body: "When shipping costs explode, the impact is passed down every link in the supply chain — until it hits your wallet at the checkout counter.",
    steps: [
      {
        number: "01",
        title: "🏭 Raw Materials 🔺",
        description: "Mining, metals, chemicals, and fertilizers all cost more to transport. Steel and copper spike 25–50%.",
      },
      {
        number: "02",
        title: "⚙️ Manufacturing 🔺",
        description: "Factories pay more for inputs AND the energy to run production lines. Margins collapse, layoffs begin.",
      },
      {
        number: "03",
        title: "🛒 Retail & Grocery 🔺",
        description: "Bread, milk, eggs, cooking oil — everything climbs 15–30%. Imported goods hit hardest.",
      },
    ],
    insightBox: "🌍 A regional conflict instantly exports inflation to every grocery store and utility bill on the planet.",
    footnote: "Economic Impact: WTO Export-Inflation Correlation Study.",
  },

  // ═══════════════════ SLIDE 7: STOCK WINNERS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "STOCK MARKET",
    heading: "The",
    headingAccent: "Winners.",
    body: "In a catastrophic energy shock, capital floods into sectors that profit from chaos. Smart money repositions within hours.",
    features: [
      { icon: "🟢", label: "Oil Majors", description: "Exxon, Chevron, Shell — windfall profits as crude doubles. Exxon rose 18% in the Gulf War." },
      { icon: "🟢", label: "Defense Contractors", description: "Lockheed Martin, Raytheon, Northrop — military escalation = guaranteed revenue." },
      { icon: "🟢", label: "Gold & Commodities", description: "Safe-haven assets spike as investors flee equities. Gold could breach $3,000/oz." },
      { icon: "🟢", label: "Clean Energy", description: "Solar, wind, nuclear gain long-term interest as the world scrambles for alternatives." },
    ],
    footnote: "Institutional Positioning: Hedge Fund 13F Concentration in Oil & Defense.",
  },

  // ═══════════════════ SLIDE 8: STOCK LOSERS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "STOCK MARKET",
    heading: "The",
    headingAccent: "Losers.",
    body: "Sectors dependent on cheap energy or discretionary spending take devastating damage. These stocks freefall within 48 hours.",
    features: [
      { icon: "🔻", label: "Airlines", description: "Jet fuel is 30–40% of costs. United, Delta, IndiGo face immediate margin destruction." },
      { icon: "🔻", label: "Cruise Lines", description: "Carnival, Royal Caribbean — bunker fuel + consumer pullback = double hit." },
      { icon: "🔻", label: "Retail & E-Commerce", description: "Amazon, Walmart squeezed by shipping surcharges and reduced spending power." },
      { icon: "🔻", label: "Automakers", description: "Tata Motors, Maruti, Toyota — consumers stop buying when gas costs ₹180/litre." },
    ],
    footnote: "Margin Analysis: Jet Fuel Hedging Strategy Reports (Q1 2026).",
  },

  // ═══════════════════ SLIDE 9: YOUR DAILY LIFE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "YOUR DAILY LIFE",
    heading: "What You'll",
    headingAccent: "Actually Feel.",
    body: "This isn't just a Wall Street problem. Here's how a Hormuz closure hits YOUR wallet within 2–4 weeks.",
    features: [
      { icon: "⛽", label: "🔺 Petrol/Gas  +40–80%", description: "Pump prices surge immediately. Commuting costs spike. Ride fares jump." },
      { icon: "🛒", label: "🔺 Groceries  +15–30%", description: "Food transport costs spike. Cooking oil, wheat, dairy climb fast." },
      { icon: "🏠", label: "🔺 Electricity  +20–50%", description: "Power plants pass oil/gas costs to consumers. AC bills skyrocket." },
      { icon: "💳", label: "🔺 EMIs & Loans", description: "Interest rates stay high as RBI/Fed fights inflation. Home loans get expensive." },
    ],
    footnote: "Consumer Impact: Global CPI Multi-Factor Analysis.",
  },

  // ═══════════════════ SLIDE 10: CENTRAL BANK TRAP ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MACRO ECONOMICS",
    heading: "The Central",
    headingAccent: "Bank Trap.",
    body: "How do you fight inflation when you can't print more oil? Central banks have ONE tool — interest rates. But raising rates kills growth too. It's a lose-lose.",
    features: [
      { icon: "🔺", label: "Rate Cuts Impossible", description: "Despite slowing growth, inflation forces the Fed/RBI to HOLD or RAISE rates." },
      { icon: "🔺", label: "Stagflation Risk", description: "HIGH inflation + LOW growth + HIGH unemployment simultaneously." },
      { icon: "🔻", label: "Currency Devaluation", description: "Oil-importing nations (India, Japan, EU) see currencies weaken vs dollar." },
      { icon: "🔺", label: "Global Recession", description: "IMF estimates recession probability jumps to 60%+ in sustained closure." },
    ],
    insightBox: "🎯 All of this traces back to 21 miles of water between Iran and Oman. Geography is destiny.",
    footnote: "Central Bank Radar: Fed & RBI Monetary Policy Transcripts (Mar 2026).",
  },

  // ═══════════════════ SLIDE 11: HISTORICAL PRECEDENT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "HISTORY",
    heading: "Has This",
    headingAccent: "Happened Before?",
    body: "The Strait has been threatened multiple times. Each time, even the THREAT of disruption caused violent market reactions.",
    features: [
      { icon: "⚔️", label: "1980–88 Tanker Wars", description: "Iran-Iraq war. 546 ships attacked in the Gulf. Oil prices doubled." },
      { icon: "🪖", label: "1990 Gulf War", description: "Iraq invades Kuwait. Oil doubled from $17 → $36/barrel in weeks." },
      { icon: "💣", label: "2019 Tanker Attacks", description: "Iranian mines hit tankers near Hormuz. Oil spiked 15% in one day." },
      { icon: "🚀", label: "2024 Houthi Red Sea Attacks", description: "Rerouting around Africa added $1M/voyage. Freight rates tripled." },
    ],
    insightBox: "📜 Every near-miss caused major spikes. A FULL closure would be an order of magnitude worse.",
    footnote: "Historical Record: OPEC+ Crisis Archives (1973-2019).",
  },

  // ═══════════════════ SLIDE 12: CONCLUSION / CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE BOTTOM LINE",
    heading: "21 Miles.",
    headingAccent: "Infinite Impact.",
    body: "From crude oil futures to your grocery bill — the Strait of Hormuz is the most consequential chokepoint in the global economy. One miscalculation, and the world feels it.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🌍", label: "Geopolitics", description: "One strait, global consequences for 8 billion people" },
      { icon: "📈", label: "Markets", description: "Winners, losers, and volatility across every asset class" },
      { icon: "💰", label: "Your Wallet", description: "Gas, groceries, electricity, EMIs — everything moves" },
      { icon: "🏛️", label: "Policy", description: "Central banks trapped between inflation and recession" },
    ],
  },
];
