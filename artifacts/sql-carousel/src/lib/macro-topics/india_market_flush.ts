import type { SlideData } from "../carousel-types";

export const INDIA_MARKET_FLUSH: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INDIA INTELLIGENCE",
    tagRight: "JULY 2026",
    heading: "The 5-Day",
    headingAccent: "Flush.",
    body: "The ++Indian++ equity markets just extended their losing streak to a 5th consecutive session. The %%BSE Sensex%% plummeted over ==900 points== intraday. This isn't just a technical pullback—it's a massive, macro-driven rotation out of risk assets.",
    levelBadge: "TEARDOWN",
    topicNum: "MACRO",
    keywords: ["INDIA", "SENSEX", "NIFTY", "FII", "OIL", "MACRO"],
    bullets: [
      "📉 5 Consecutive Red Days",
      "🛢️ Brent Crude Spikes",
      "🇺🇸 The Tariff Shock",
      "🏃‍♂️ FII Exodus",
      "🛡️ The IT Safe Haven",
    ],
  },

  // ═══════════════════ SLIDE 2: THE OIL SHOCK ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE MACRO CATALYST",
    heading: "The $100 Oil",
    headingAccent: "Tax.",
    body: "++India++ imports ==85%== of its crude oil requirements. When geopolitical tensions in the ++Middle East++ caused Brent Crude to breach the ==$100== mark earlier this week, the market instantly priced in the devastation.",
    features: [
      { icon: "💸", label: "The Import Bill", description: "Every dollar increase in crude oil adds roughly ==$2.1 billion== to ++India's++ import bill, blowing out the current account deficit." },
      { icon: "📈", label: "Imported Inflation", description: "Higher energy costs act as an immediate tax on domestic consumers, forcing the %%RBI%% to delay any hopes of a rate cut." },
      { icon: "📉", label: "Margin Compression", description: "Corporate ++India's++ profitability gets squeezed tight, particularly in ##manufacturing## and ##logistics##." },
    ],
    insightBox: "💡 The Reality: You cannot have a sustained equity bull run in an oil-dependent emerging market when crude is pushing triple digits.",
  },

  // ═══════════════════ SLIDE 3: THE TARIFF SHOCK ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "GEOPOLITICS",
    heading: "The U.S. Tariff",
    headingAccent: "Shockwave.",
    body: "Adding fuel to the fire, the ++United States++ just initiated a massive round of new trade measures, slapping ==10% to 12.5%== tariffs on imports from 60 countries, including ++India++.",
    steps: [
      { number: "01", title: "The Pretext", description: "The ++US++ cited a 'forced labor probe' as the justification, but the market is reading this as a hardcore protectionist pivot." },
      { number: "02", title: "The FII Exodus", description: "Foreign Institutional Investors (FIIs) hate uncertainty. Fearing a global trade war, foreign capital immediately began dumping emerging market equities." },
      { number: "03", title: "The Rupee Strain", description: "As foreign capital leaves and the oil import bill rises, the ++Indian Rupee++ faces severe depreciation pressure against the Dollar." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE WRECKAGE ═══════════════════
  {
    type: "pitfalls",
    background: "light",
    tag: "SECTOR ROTATION",
    heading: "Where is the",
    headingAccent: "Wreckage?",
    body: "When the global risk-off alarm sounds, not all sectors bleed equally. The most crowded momentum trades were the first to get liquidated.",
    pitfalls: [
      {
        title: "The Auto Sector Massacre",
        description: "##Auto## stocks got hammered. High oil prices hurt consumer driving demand, and the new ++US++ tariffs threaten auto-ancillary export revenue.",
        fix: "Avoid discretionary consumer sectors until energy prices stabilize."
      },
      {
        title: "Metals & Heavy Industry",
        description: "##Metals## were dumped aggressively. As global growth expectations cool amid trade war fears, industrial metal demand collapses.",
        fix: "Wait for a stabilization in ++China's++ GDP data before bottom-fishing in ##Metals##."
      }
    ],
  },

  // ═══════════════════ SLIDE 5: THE SAFE HAVEN ═══════════════════
  {
    type: "dosdonts",
    background: "dark",
    tag: "THE FLIGHT TO SAFETY",
    heading: "The Unexpected",
    headingAccent: "Hedges.",
    body: "In a sea of red, institutional capital didn't just move to cash—it rotated into defensive havens that benefit from the chaos.",
    dos: [
      { text: "The IT Sector Rebound", detail: "Counter-intuitively, ##Information Technology (IT)## stocks held the line. As the ++Rupee++ depreciates against the Dollar, export-driven ##IT services## actually see a margin boost." },
      { text: "Domestic Defensive Plays", detail: "##FMCG## and ##Pharma## (like %%Laurus Labs%%, which doubled its Q1 net profit) caught bids as investors sought earnings visibility independent of global trade wars." }
    ],
    donts: [
      { text: "Don't Panic Sell the Index", detail: "Domestic Institutional Investors (DIIs) are flush with SIP cash. They are buying the dips that FIIs are creating." },
      { text: "Don't Ignore Valuations", detail: "This flush is necessary to clear out the extreme retail froth that had built up in the mid-cap space." }
    ],
  },

  // ═══════════════════ SLIDE 6: CTA ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE PLAYBOOK",
    heading: "The Re-Entry",
    headingAccent: "Checklist.",
    body: "A 5-day flush isn't a crash; it's a structural reset. Here is what the smart money is waiting for before aggressively buying back in.",
    ctaText: "Save this Checklist",
    features: [
      { icon: "🛢️", label: "Brent Crude Breakdown", description: "Wait for oil to firmly reject the ==$100== level and establish a lower high." },
      { icon: "💵", label: "DII Absorption Rate", description: "Monitor the daily FII vs DII data. Once foreign selling exhausts, DII inflows will gap the market up." },
      { icon: "🏛️", label: "RBI Policy Pivot", description: "Watch for any dovish signals from the %%RBI%% regarding domestic liquidity." },
      { icon: "🔔", label: "Follow for Real-Time Updates", description: "We will drop an alert the moment the FII selling data reverses." },
    ],
  },
];
