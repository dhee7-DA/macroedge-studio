import type { SlideData } from "../carousel-types";

export const WASTE_MANAGEMENT_PT2: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "THE STOCKS & ETFs",
    tagRight: "PART 2/2",
    heading: "The Garbage",
    headingAccent: "Monopolies.",
    body: "In Part 1, we established why institutional money is quietly hoarding ##waste management## assets. Now, let's break down the exact tickers dominating this space—from the ==$80B== ++US++ mega-caps to the massive alpha opportunities in ++India's++ ##small-cap## ecosystem.",
    levelBadge: "TEARDOWN",
    topicNum: "MACRO",
    keywords: ["STOCKS", "ETFS", "WM", "PESI", "ANTONY", "ECORECO", "INVESTING"],
    bullets: [
      "🇺🇸 The US Mega-Caps",
      "☢️ Radioactive Pure-Plays",
      "🇮🇳 India's Swachh Bharat Plays",
      "📱 The E-Waste Kings",
      "📊 The Broad ETF Play",
    ],
  },

  // ═══════════════════ SLIDE 2: THE US GIANTS ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "THE US MEGA-CAPS",
    heading: "The Utility",
    headingAccent: "Overlords.",
    body: "The ++US++ market is heavily consolidated. These three companies basically operate as a cartel, completely dominating ++North American++ ##landfills## and ##commercial collection##.",
    table: {
      headers: ["Ticker", "Company", "The Moat"],
      rows: [
        { cells: ["%%$WM%%", "%%Waste Management%%", "The absolute behemoth (==$80B+==). Dominates the landfill network, giving them massive pricing power."], highlight: true },
        { cells: ["%%$RSG%%", "%%Republic Services%%", "The #2 player. Ruthlessly efficient at M&A, constantly buying out smaller regional players."], highlight: false },
        { cells: ["%%$WCN%%", "%%Waste Connections%%", "Focuses almost exclusively on rural and secondary markets where they are the *only* provider."], highlight: false },
      ],
      caption: "These behave like low-volatility, defensive utility stocks that slowly compound wealth over decades.",
    },
  },

  // ═══════════════════ SLIDE 3: RADIOACTIVE NICHE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "HAZARDOUS WASTE",
    heading: "The Nuclear",
    headingAccent: "Wildcard.",
    body: "With the global push back into ##Nuclear Energy## and massive defense spending, traditional trash companies won't cut it. You need specialized containment.",
    features: [
      { icon: "☢️", label: "Perma-Fix ($PESI)", description: "A highly specialized ++US++ micro-cap that deals exclusively with ##nuclear and hazardous waste treatment##." },
      { icon: "🛡️", label: "The Government Moat", description: "%%PESI%% holds deeply entrenched, highly classified contracts with the %%US Department of Energy and Defense%%." },
      { icon: "📈", label: "The Alpha Play", description: "Unlike the slow-moving mega-caps (%%$WM%%), specialized hazmat processors carry higher risk but massive asymmetric upside as nuclear energy expands." },
    ],
    insightBox: "💡 Note: Radioactive waste management in ++India++ is not publicly traded; it is strictly controlled by the %%Department of Atomic Energy (DAE)%%.",
  },

  // ═══════════════════ SLIDE 4: THE INDIAN MARKET ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "EMERGING MARKETS",
    heading: "India's Small-Cap",
    headingAccent: "Goldmine.",
    body: "The ++US++ market is mature and consolidated. The ++Indian++ market is fragmented and undergoing a massive structural shift due to '%%Swachh Bharat 2.0%%'.",
    steps: [
      { number: "01", title: "Antony Waste Handling Cell (AWHCL)", description: "One of the few pure-play ##MSW (Municipal Solid Waste)## companies in ++India++. They secure long-term civic contracts for collection and ##waste-to-energy## projects." },
      { number: "02", title: "Eco Recycling Ltd (Ecoreco)", description: "The pioneer of ##E-Waste management## in ++India++. As the government enforces strict EPR (Extended Producer Responsibility) norms on tech hardware, %%Ecoreco%% absorbs the volume." },
      { number: "03", title: "VA Tech Wabag", description: "While technically a '##Water Treatment##' company, they are the absolute kings of municipal ##wastewater and sewage processing##, securing massive Hybrid Annuity Model (HAM) contracts." },
    ],
  },

  // ═══════════════════ SLIDE 5: THE ETF PLAY ═══════════════════
  {
    type: "dosdonts",
    background: "dark",
    tag: "THE PASSIVE ROUTE",
    heading: "The Broad",
    headingAccent: "ETF Strategy.",
    body: "If picking individual waste and environmental service stocks feels too concentrated, the institutional ETF route is the safest play.",
    dos: [
      { text: "VanEck Environmental Services ETF ($EVX)", detail: "The standard play. It holds all the major ++US++ waste collection, transfer, and disposal companies in one basket." },
      { text: "Focus on Diversification", detail: "%%$EVX%% gives you exposure to both solid waste (like %%$WM%%) and specialized hazardous clean-up firms." }
    ],
    donts: [
      { text: "Don't confuse with 'Clean Energy' ETFs", detail: "ETFs like %%$ICLN%% focus on solar/wind tech. You want '##Environmental Services##' which focuses on the gritty reality of trash and recycling." },
      { text: "Don't expect hyper-growth", detail: "This is a defensive value play designed to protect capital and compound slowly, not 10x overnight." }
    ],
  },

  // ═══════════════════ SLIDE 6: CHEAT SHEET ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE WATCHLIST",
    heading: "The Waste",
    headingAccent: "Cheat Sheet.",
    body: "The complete watchlist for the Circular Economy.",
    ctaText: "Save this Watchlist",
    features: [
      { icon: "🇺🇸", label: "US Defensive Mega-Caps", description: "%%$WM%% (Waste Management), %%$RSG%% (Republic Services)" },
      { icon: "☢️", label: "US Specialized Hazmat", description: "%%$PESI%% (Perma-Fix Environmental Services)" },
      { icon: "🇮🇳", label: "Indian Small-Caps", description: "%%Antony Waste%% (Municipal) & %%Ecoreco%% (E-Waste)" },
      { icon: "🧺", label: "The Broad ETF", description: "%%$EVX%% (VanEck Environmental Services)" },
    ],
  },
];
