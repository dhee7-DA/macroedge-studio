import type { SlideData } from "@workspace/carousel-engine";

export const SPIRIT_AVIATION_CRISIS: SlideData[] = [

  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INSTITUTIONAL TEARDOWN",
    tagRight: "MAY 2026",
    heading: "Spirit Airlines",
    headingAccent: "Bankruptcy.",
    body: "Spirit Airlines didn't just die from bad business models. It was the first major corporate casualty of the 2026 Middle East energy shock.",
    levelBadge: "MACRO",
    topicNum: "OIL",
    keywords: ["SPIRIT AIRLINES", "STRAIT OF HORMUZ", "CRACK SPREAD", "JET FUEL", "BANKRUPTCY", "CONTAGION", "ENERGY SHOCK", "ULCC", "MARGIN CALL"],
    bullets: ["The $360M Jet Fuel Margin Call", "Strait of Hormuz Bottleneck", "Legacy Carriers vs. Budget Airlines", "Who Breaks Next?"],
  },

  // ═══════════════════ SLIDE 2: THE EVENT ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE EVENT",
    heading: "The End of",
    headingAccent: "Spirit.",
    body: "On May 2, 2026, Spirit Airlines ceased all global operations after a $500M federal bailout collapsed. But the headline story is a distraction.",
    features: [
      { icon: "📉", label: "The Headline", description: "Media points to post-pandemic shifts and failed ULCC (ultra-low-cost carrier) economics." },
      { icon: "🛢️", label: "The Reality", description: "The immediate, fatal catalyst was a geopolitical energy shock that doubled their primary input cost." },
      { icon: "🛑", label: "The Halt", description: "All flights canceled immediately. Chapter 11 restructuring transitioned directly into corporate liquidation." },
      { icon: "💸", label: "The Lifeline", description: "A $500M federal bailout was rejected by key creditors, sealing the airline's fate overnight." },
    ],
  },

  // ═══════════════════ SLIDE 3: THE ROOT CAUSE ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE CATALYST",
    heading: "The Strait of",
    headingAccent: "Hormuz.",
    body: "The root cause of an American airline's bankruptcy is happening 7,000 miles away in a 21-mile-wide chokepoint.",
    features: [
      { icon: "🚢", label: "The Chokepoint", description: "20% of the world's global oil consumption passes through the Strait of Hormuz between Oman and Iran." },
      { icon: "⚔️", label: "The Conflict", description: "Escalating tensions between Iran, Israel, and the U.S. have severely constrained commercial shipping traffic." },
      { icon: "📈", label: "War Premiums", description: "Insurance risk premiums for tankers skyrocketed, compounding the physical restriction of supply." },
      { icon: "🏭", label: "The Refining Choke", description: "Global refining capacity for jet fuel was already tight. The shock caused the 'crack spread' to blow out entirely." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE MATH ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "THE MARGIN CALL",
    heading: "The $360 Million",
    headingAccent: "Margin Call.",
    body: "Jet fuel prices doubled from ~$2.24 to $4.51 per gallon. For an airline, this is a lethal mathematical equation.",
    steps: [
      {
        number: "01",
        title: "The ULCC Model",
        description: "Spirit’s business relies on volume and cheap inputs. Margins are razor-thin, spread over maximum seat capacity.",
      },
      {
        number: "02",
        title: "The $360M Hit",
        description: "The fuel spike added an estimated $360 million in unanticipated costs to Spirit's 2026 projections.",
      },
      {
        number: "03",
        title: "Zero Pricing Power",
        description: "Unlike luxury brands, Spirit cannot pass a 30% cost increase to a highly price-sensitive customer base without destroying demand.",
      },
    ],
    insightBox: "💡 The margin call: Jet fuel spiked from $2.24 to $4.51/gal, instantly adding $360M in unanticipated 2026 costs to Spirit's budget.",
  },

  // ═══════════════════ SLIDE 5: THE DIVIDE ═══════════════════
  {
    type: "table",
    background: "dark",
    tag: "SECTOR ANALYSIS",
    heading: "Why Did",
    headingAccent: "Delta Survive?",
    body: "The fuel shock hit everyone. But Legacy carriers survived because of 'The Premium Moat.'",
    table: {
      headers: ["Metric", "Legacy (Delta, United)", "ULCC (Spirit)"],
      rows: [
        { cells: ["Primary Revenue", "Premium Cabins & Business", "Bare-Fare Economy"], highlight: true },
        { cells: ["Ancillary Revenue", "Credit Card Deals (Amex/Chase)", "Baggage & Seat Selection"], highlight: false },
        { cells: ["Pricing Power", "High (Business accounts)", "Low (Highly price-sensitive)"], highlight: true },
        { cells: ["Fuel Hedging", "Robust futures hedging", "Minimal; exposed to spot prices"], highlight: false },
      ],
      caption: "The Premium Moat insulates against macro commodity shocks.",
    },
    insightBox: "📌 Legacy carriers have pricing power and highly profitable credit card partnerships that act as a buffer during macro commodity shocks.",
  },

  // ═══════════════════ SLIDE 6: THE CONTAGION ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CONTAGION WATCH",
    heading: "Who Breaks",
    headingAccent: "Next?",
    body: "The Hormuz Contagion will not stay confined to one budget airline. Watch for stress fractures in other asset-heavy, fuel-dependent sectors.",
    features: [
      { icon: "📦", label: "Shipping & Logistics", description: "Maersk, FedEx, UPS. They have fuel-surcharge mechanisms, but absolute demand may drop." },
      { icon: "🏭", label: "Heavy Industrials", description: "Manufacturing that requires massive baseload energy inputs (steel, cement) faces margin compression." },
      { icon: "✈️", label: "Other ULCCs", description: "Frontier Airlines and European budget carriers (Ryanair, EasyJet) face intense scrutiny by credit markets." },
      { icon: "🛒", label: "Marginal Consumers", description: "Lower-income consumers are now squeezed by general inflation and specific capacity crunches." },
    ],
  },

  // ═══════════════════ SLIDE 7: HEDGING THE CRISIS ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE STRATEGY",
    heading: "How Institutions",
    headingAccent: "Trade The Shock.",
    body: "In a geopolitical energy shock, institutions position themselves to benefit from the disruption.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "🛢️", label: "Domestic Energy", description: "North American energy production and refining (Phillips 66, Valero) benefit from high crack spreads." },
      { icon: "🛡️", label: "Defense Primes", description: "The root cause is conflict. Defense stocks (RTX, LMT) remain the ultimate geopolitical hedge." },
      { icon: "📉", label: "Shorting Discretionary", description: "Shorting consumer stocks heavily reliant on low-income spending." },
      { icon: "📈", label: "Premium Moats", description: "Consolidating capital into businesses with extreme pricing power (ASML, TransDigm)." },
    ],
  },

];
