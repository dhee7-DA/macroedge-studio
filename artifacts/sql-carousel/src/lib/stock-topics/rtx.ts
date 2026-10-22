import type { SlideData } from "@workspace/carousel-engine";

export const RTX_TEARDOWN: SlideData[] = [

  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INSTITUTIONAL TEARDOWN",
    tagRight: "$RTX",
    heading: "RTX Corporation:",
    headingAccent: "The World is Rearming.",
    body: "A $271B backlog. Three world-class businesses. One GTF engine crisis creating a rare discount on one of the most defensible compounders in the industrial world.",
    levelBadge: "STOCKS",
    topicNum: "RTX",
    keywords: ["RTX", "RAYTHEON", "PATRIOT", "PRATT & WHITNEY", "COLLINS AEROSPACE", "DEFENSE", "AEROSPACE", "GTF", "BACKLOG", "MISSILES", "F-35", "NATO"],
    bullets: ["$271B Backlog — 3+ Years Visible Revenue", "The GTF Crisis Discount", "Geopolitical Supercycle Thesis", "SOTP Fair Value: ~$224 vs $176 Market"],
  },

  // ═══════════════════ SLIDE 2: COMPANY OVERVIEW ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "COMPANY OVERVIEW",
    heading: "Not Raytheon.",
    headingAccent: "RTX.",
    body: "Formed from the 2020 merger of United Technologies and Raytheon Company, RTX rebranded in 2023 to signal a single platform — not three legacy businesses stapled together.",
    features: [
      { icon: "🛡️", label: "Raytheon Defense", description: "Missiles, air defense (Patriot, Tomahawk), radar, electronic warfare. The geopolitical demand engine." },
      { icon: "✈️", label: "Pratt & Whitney", description: "GTF engines for A320neo/A220 and F135 engines for the F-35. The commercial and military engine powerhouse." },
      { icon: "🛩️", label: "Collins Aerospace", description: "Avionics, interiors, landing systems. The captive aftermarket flywheel inside every aircraft it equips." },
      { icon: "👥", label: "Scale", description: "$88.6B revenue. ~185,000 employees. Dual exposure to commercial and defense provides a structural hedge." },
    ],
  },

  // ═══════════════════ SLIDE 3: THE BACKLOG ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE CROWN JEWEL",
    heading: "$271 Billion",
    headingAccent: "Backlog.",
    body: "Three years of revenue already contracted. This is not a forecast — it is a structural guarantee. RTX's backlog is the most powerful single number in large-cap industrials.",
    features: [
      { icon: "📋", label: "Total Backlog", description: "$268B at end of 2025 → $271B at Q1 2026. The backlog is growing faster than top-line revenue." },
      { icon: "🛡️", label: "Defense ($107B)", description: "Fully funded government contracts: Patriot, Tomahawk, SPY-6, F135. Locked and funded." },
      { icon: "✈️", label: "Commercial ($161B)", description: "Collins aftermarket + Pratt & Whitney deliveries. Airlines committed to years of forward capacity." },
      { icon: "📊", label: "Coverage Ratio", description: "$271B backlog on $88B revenue = 3.1 years of forward visibility. Almost unmatched certainty." },
    ],
  },

  // ═══════════════════ SLIDE 4: FINANCIAL SCORECARD ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "FINANCIAL SCORECARD",
    heading: "The Numbers.",
    headingAccent: "May 2026.",
    body: "RTX is executing a rare simultaneous expansion in revenue, EPS, and free cash flow — driven by the defense supercycle and commercial aviation recovery.",
    features: [
      { icon: "💵", label: "Stock Price", description: "~$176 per share. Market Cap ~$235B. 52-week range: $130–$180." },
      { icon: "📈", label: "Revenue", description: "$80.7B (2024) → $88.6B (2025) → $92–93B (2026E)." },
      { icon: "💰", label: "FCF Inflection", description: "$4.5B (2024) → $7.9B (2025) → $8.5B (2026E). FCF nearly doubles as GTF drag rolls off." },
      { icon: "📊", label: "EPS Growth", description: "Adj. EPS: $5.73 (2024) → $6.29 (2025) → $6.75 (2026E midpoint)." },
    ],
  },

  // ═══════════════════ SLIDE 5: THE THREE SEGMENTS ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "SEGMENT BREAKDOWN",
    heading: "Three Businesses.",
    headingAccent: "One Price.",
    body: "Each segment has fundamentally different economics, different customers, and deserves a different valuation multiple. The market assigns one blended P/E to all three.",
    table: {
      headers: ["Segment", "2025 Revenue", "YoY Growth", "Character"],
      rows: [
        { cells: ["Collins Aerospace", "$30.2B", "+6.8%", "Captive aftermarket — 15–17% margins"], highlight: true },
        { cells: ["Pratt & Whitney", "$32.9B", "+17.3%", "GTF crisis discount + F135 upside"], highlight: true },
        { cells: ["Raytheon Defense", "$28.0B", "+5.0%", "Geopolitical supercycle — Patriot, Tomahawk"], highlight: true },
        { cells: ["Total RTX", "$88.6B", "+10%", "$271B backlog; FCF $7.9B"], highlight: false },
      ],
      caption: "Source: RTX Full Year 2025 Financial Results.",
    },
  },

  // ═══════════════════ SLIDE 6: THE GEOPOLITICAL THESIS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE MACRO THESIS",
    heading: "The World Is",
    headingAccent: "Rearming.",
    body: "The global defense supercycle is structural — not cyclical. RTX sits at the exact center of all three demand drivers that will sustain procurement for the next decade.",
    features: [
      { icon: "🇪🇺", label: "NATO Rearmament", description: "NATO members moving to 2% GDP spending. Closing the gap = years of new Patriot and NASAMS procurement." },
      { icon: "🌏", label: "Indo-Pacific Deterrence", description: "Allies rapidly expanding missile defense. F-35 orders accelerating. RTX is the backbone of Pacific architecture." },
      { icon: "🔁", label: "Munitions Replenishment", description: "Ukraine consumed decades of stockpiled munitions. Replenishment = a multi-year $100B+ procurement cycle." },
      { icon: "🇺🇦", label: "European Production", description: "New $3.7B Patriot contract for Ukraine, manufactured at the new COMLOG facility in Germany." },
    ],
  },

  // ═══════════════════ SLIDE 7: THE GTF CRISIS ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE DISCOUNT CREATOR",
    heading: "The GTF Engine",
    headingAccent: "Crisis Explained.",
    body: "The Pratt & Whitney GTF crisis is the reason RTX trades at a discount. It is real, quantifiable, and has a visible resolution timeline.",
    steps: [
      {
        number: "01",
        title: "The Defect (2023)",
        description: "A rare powder-metal contamination in turbine disks was discovered. ~1,200 engines recalled. Turnaround times ballooned to 300+ days.",
      },
      {
        number: "02",
        title: "The Cascade (2024–2025)",
        description: "Airlines grounded record numbers of jets. RTX paid billions in airline compensation — a direct FCF drag of ~$3B+.",
      },
      {
        number: "03",
        title: "The Escalation (2026)",
        description: "Airbus launched a formal damages claim in March 2026. MRO capacity is expanding. Full normalization expected 2027–2028.",
      },
    ],
    insightBox: "🎯 The GTF crisis is the discount creator — not a permanent impairment. Margin re-rating drives the next leg of RTX FCF expansion.",
  },

  // ═══════════════════ SLIDE 8: KEY DEFENSE SYSTEMS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE ARSENAL",
    heading: "Raytheon's",
    headingAccent: "Flagship Systems.",
    body: "The Raytheon segment manufactures the weapons that define Western air defense. These are not commodities — they are mission-critical platforms with decade-long cycles.",
    features: [
      { icon: "🚀", label: "Patriot PAC-2/PAC-3", description: "Primary Western air defense. ~$5M per interceptor. Deployed in 17+ nations with a decade-long replenishment cycle." },
      { icon: "💥", label: "Tomahawk Cruise", description: "~$2M per unit. US Navy's primary long-range strike weapon. Conflict has accelerated US inventory replenishment." },
      { icon: "📡", label: "SPY-6 Radar", description: "$3.8B contract for next-gen US Navy radar, replacing legacy systems across the surface fleet." },
      { icon: "🛡️", label: "NASAMS", description: "Short-to-medium range air defense. Demand accelerating as European nations build layered defense networks." },
    ],
  },

  // ═══════════════════ SLIDE 9: THE SOTP VALUATION ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "VALUATION FRAMEWORK",
    heading: "SOTP Value:",
    headingAccent: "~$224 vs $176 Market.",
    body: "Applying sector-appropriate multiples to each RTX segment reveals a 22% conglomerate discount — the classic mispricing of complexity by the public market.",
    features: [
      { icon: "🛩️", label: "Collins Aerospace", description: "~$90B value (16x EBIT). Premium justified by recurring revenue and proprietary part lock-in." },
      { icon: "✈️", label: "Pratt & Whitney", description: "~$75B value (12x EBIT). Discounted for the GTF crisis overhang. Discount disappears as AOG normalizes." },
      { icon: "🛡️", label: "Raytheon Defense", description: "~$65B value (14x EBIT). $107B government-funded backlog and structural pricing power in captive programs." },
      { icon: "📊", label: "SOTP Equity Value", description: "Sum of segments minus ~$35B net debt ÷ ~870M shares = implied ~$224 fair value vs ~$176 current price." },
    ],
  },

  // ═══════════════════ SLIDE 10: BULL VS BEAR ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MARKET SCENARIOS",
    heading: "Bull Case vs.",
    headingAccent: "Bear Case.",
    body: "RTX has clear paths to outperformance and clear risks to manage. Both deserve equal attention.",
    features: [
      { icon: "🚀", label: "Bull: FCF Doubles", description: "GTF costs roll off 2027–2028. P&W margins recover. FCF inflects to $9–10B. At 25x FCF, RTX is worth $250B+." },
      { icon: "🚀", label: "Bull: Defense Cycle", description: "$271B backlog = 3+ years of revenue certainty. F135 EEP contract ($20B+ lifetime) awards to Pratt & Whitney." },
      { icon: "🔴", label: "Bear: GTF Litigation", description: "Airbus damages claim becomes a multi-billion dollar settlement. Margin recovery delayed to 2029+." },
      { icon: "🔴", label: "Bear: Valuation", description: "TTM P/E of ~33x is above historical median. If EPS growth disappoints, the multiple compresses." },
    ],
  },

  // ═══════════════════ SLIDE 11: KEY RISKS & CATALYSTS ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "CATALYSTS & RISKS",
    heading: "What to",
    headingAccent: "Watch.",
    body: "Three catalysts that could close the SOTP gap — and one risk that could widen it.",
    steps: [
      {
        number: "01",
        title: "🔑 GTF Normalization",
        description: "Confirmed decline in grounded aircraft count = P&W margin re-rating. Watch quarterly MRO throughput.",
      },
      {
        number: "02",
        title: "🔑 F135 Engine Award",
        description: "The F135 EEP upgrade contract is a major long-term revenue event and stock re-rating signal.",
      },
      {
        number: "03",
        title: "🔑 Airbus Settlement",
        description: "The Airbus formal damages claim is the primary overhang. A settled number removes uncertainty.",
      },
    ],
    insightBox: "⚠️ Risk to Monitor: Any significant cost overruns on fixed-price defense contracts will compress Raytheon margins.",
  },

  // ═══════════════════ SLIDE 12: FINAL VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE VERDICT",
    heading: "A Geopolitical",
    headingAccent: "Compounder at a Discount.",
    body: "RTX is a world-class business — with a $271B revenue guarantee, a rearming world as its customer, and a temporary GTF crisis creating the discount that makes the entry compelling.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🛡️", label: "$271B Backlog", description: "3+ years of contracted revenue. Unmatched visibility." },
      { icon: "💰", label: "FCF Doubling", description: "$4.5B → $8.5B in 2 years. The GTF headwind rolls off." },
      { icon: "📊", label: "22% SOTP Discount", description: "$176 price vs ~$224 fair value. The complexity gap." },
      { icon: "🌍", label: "Structural Demand", description: "A decade-long procurement supercycle with RTX at the center." },
    ],
  },
];
