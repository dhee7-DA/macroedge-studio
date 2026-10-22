import type { SlideData } from "../carousel-types";

export const HELIUM_EXPORT_BAN: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "BREAKING MACRO",
    tagRight: "JULY 2026",
    heading: "The Helium",
    headingAccent: "Chokehold.",
    body: "++China++ has just announced an immediate, temporary export ban on ##Helium##. While retail investors think helium is just for party balloons, institutional money knows the terrifying reality: without Helium, the entire global tech supply chain collapses.",
    levelBadge: "TEARDOWN",
    topicNum: "GEOPOLITICS",
    keywords: ["HELIUM", "SEMICONDUCTORS", "CHINA", "MACRO", "SUPPLY CHAIN", "AI"],
    bullets: [
      "🎈 Not Just Balloons",
      "🛑 China's Surprise Ban",
      "💾 The Chip Bottleneck",
      "🚢 Middle East Disruptions",
      "📈 The Price Squeeze",
    ],
  },

  // ═══════════════════ SLIDE 2: THE REALITY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE COMMODITY",
    heading: "The Unreplaceable",
    headingAccent: "Gas.",
    body: "Helium is an inert gas that does not react with other elements and has the lowest boiling point of any element (-268.9°C). It is physically impossible to substitute it in high-tech manufacturing.",
    features: [
      { icon: "💻", label: "Semiconductors", description: "##Chip fabrication## requires an absolute vacuum and extreme cooling. Helium is the only gas that can flush the chambers without reacting with the silicon." },
      { icon: "🏥", label: "MRI Machines", description: "The superconducting magnets in every ##MRI machine## on earth must be bathed in liquid helium to function." },
      { icon: "🚀", label: "Aerospace", description: "%%SpaceX%% and %%NASA%% use massive amounts of helium to pressurize fuel tanks in rockets." },
    ],
    insightBox: "💡 The Reality: If the helium supply stops, %%TSMC%% stops printing ##AI chips##. It is that simple.",
  },

  // ═══════════════════ SLIDE 3: THE CATALYSTS ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE CRISIS",
    heading: "The Perfect",
    headingAccent: "Storm.",
    body: "The global helium supply was already on the brink of collapse before ++China's++ export ban today. Here is how we got here:",
    steps: [
      { number: "01", title: "The US Strategic Sell-Off", description: "The ++US++ historically controlled the global market via the Federal Helium Reserve in Texas, but it was recently privatized and its reserves are aggressively depleting." },
      { number: "02", title: "Middle East Logistics", description: "++Qatar++ is one of the world's largest suppliers, but escalating conflicts in ++West Asia++ have severely disrupted shipping routes and supply chains." },
      { number: "03", title: "China's Weaponization", description: "Sensing the global vulnerability, ++China++ has banned exports to hoard its own domestic supply for its domestic chip foundries (%%SMIC%%)." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE GEOPOLITICS ═══════════════════
  {
    type: "dosdonts",
    background: "light",
    tag: "THE CHIP WAR",
    heading: "Weaponizing",
    headingAccent: "The Supply Chain.",
    body: "This isn't just an economic move; it is a direct geopolitical retaliation in the ongoing US-China Chip War.",
    dos: [
      { text: "China's Leverage", detail: "By restricting helium, ++China++ is directly attacking the manufacturing capacity of Western chipmakers." },
      { text: "The Russian Pivot", detail: "++Russia's++ massive Amur gas plant was supposed to flood the market with helium, but Western sanctions have locked it out." }
    ],
    donts: [
      { text: "It cannot be synthesized", detail: "Unlike other chemicals, you cannot manufacture helium in a lab. It must be extracted as a byproduct of ##natural gas## mining." },
      { text: "There is no backup", detail: "If a fab runs out of helium, they have to physically shut down the multi-billion dollar ##EUV lithography## machines." }
    ],
  },

  // ═══════════════════ SLIDE 5: THE IMPACT ═══════════════════
  {
    type: "pitfalls",
    background: "dark",
    tag: "MARKET IMPACT",
    heading: "The Shockwave.",
    body: "The downstream effects of a prolonged helium squeeze will hit multiple sectors instantly.",
    pitfalls: [
      {
        title: "Margin Crush for Foundries",
        description: "%%TSMC%%, %%Samsung%%, and %%Intel%% will face immediate margin compression as the spot price of liquid helium skyrockets.",
        fix: "They will be forced to pass the cost down to %%NVIDIA%% and %%AMD%%."
      },
      {
        title: "Healthcare Inflation",
        description: "Hospitals facing helium rationing will have to temporarily shut down ##MRI operations##, drastically reducing diagnostic revenue.",
        fix: "Expect lobbying for government-mandated 'healthcare first' rationing of the gas."
      }
    ],
  },

  // ═══════════════════ SLIDE 6: CTA ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE OPPORTUNITY",
    heading: "The Alpha",
    headingAccent: "Play.",
    body: "When critical supply chains break, alpha is generated by the companies that solve the bottleneck.",
    ctaText: "Save this Breakdown",
    features: [
      { icon: "⛏️", label: "The Explorers", description: "Independent ##helium exploration## companies (especially in ++North America++ and ++Africa++) are about to see massive capital inflows." },
      { icon: "🧪", label: "The Industrial Gases", description: "Companies like %%Linde%% and %%Air Products%% that control the processing and distribution networks." },
      { icon: "♻️", label: "Helium Recycling", description: "Startups developing 'capture and recycle' tech for semiconductor fabs to reduce helium burn rates." },
      { icon: "🔔", label: "Follow for Updates", description: "We will be tracking the exact stock tickers benefiting from this squeeze later this week." },
    ],
  },
];
