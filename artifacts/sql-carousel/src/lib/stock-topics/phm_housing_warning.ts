import type { SlideData } from "../carousel-types";

export const PHM_HOUSING_WARNING: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "SECTOR WARNING",
    tagRight: "MAY 2026",
    heading: "The Housing",
    headingAccent: "Market Crack.",
    body: "PulteGroup ($PHM) just crashed 16.8% in a single day. The 30-year Treasury yield has hit levels not seen since 2007, and it is destroying the homebuilder sector. Here is the math.",
    levelBadge: "INTERMEDIATE",
    topicNum: "MACRO-HOUSING",
    bullets: ["The Yield Shock", "The Mortgage Math", "PulteGroup's Collapse", "The Lock-In Effect"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE CATALYST",
    heading: "The Yield",
    headingAccent: "Shock.",
    body: "Mortgage rates are directly tied to the US Treasury Yield. When yields spike to fight inflation, the cost of financing a home explodes.",
    features: [
      { icon: "🦅", label: "The Fed's Dilemma", description: "With inflation proving sticky due to the energy crisis, the Fed cannot cut rates. The bond market is pricing in a 'higher for longer' reality." },
      { icon: "📈", label: "2007 Levels", description: "The 30-year Treasury yield is touching levels not seen since immediately prior to the Global Financial Crisis." },
      { icon: "🛑", label: "Demand Destruction", description: "This isn't an accident. The Federal Reserve explicitly wants to destroy housing demand to cool inflation." },
    ],
    insightBox: "💡 Analysis: You cannot have a booming housing sector when the 'Gravity of Money' is this heavy.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE CONSUMER",
    heading: "The Brutal",
    headingAccent: "Mortgage Math.",
    body: "The average homebuyer does not buy a house price; they buy a monthly payment. High rates have mathematically locked out an entire generation.",
    features: [
      { icon: "💵", label: "Payment Shock", description: "A $500,000 mortgage at 3% is $2,100/month. At 8%, it is $3,660/month. That is a 74% increase in the cost of shelter." },
      { icon: "📉", label: "Affordability Crisis", description: "Housing affordability is currently at its lowest point in American history, surpassing even the 1980s." },
      { icon: "🚫", label: "First-Time Buyers", description: "Without existing home equity to roll over, first-time buyers are completely priced out of the new construction market." },
    ],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE CORPORATE IMPACT",
    heading: "Why PulteGroup",
    headingAccent: "Dropped 16%.",
    body: "PulteGroup ($PHM) is one of America's largest homebuilders. Their stock was priced for perfection, assuming rates would drop in 2026.",
    features: [
      { icon: "🧱", label: "Forward Guidance", description: "PHM warned that cancellation rates are rising and forward orders are dropping as buyers walk away from deposits." },
      { icon: "🔪", label: "Margin Compression", description: "To sell inventory, builders must buy down mortgage rates for buyers. This aggressively eats into their profit margins." },
      { icon: "🎈", label: "Valuation Pop", description: "Homebuilders ran up massively in 2025 on the 'rate cut dream'. That dream is now officially dead." },
    ],
  },
  {
    type: "histogram",
    background: "dark",
    tag: "THE CARNAGE",
    heading: "Homebuilders",
    headingAccent: "Under Fire.",
    body: "The broad sector is violently repricing the reality of 'higher for longer' mortgage rates.",
    histogram: {
      maxValue: 20,
      caption: "MacroEdge Alpha: Do not attempt to catch the falling knife in the homebuilder sector until the 10-Year yield breaks downward.",
      bars: [
        { label: "PulteGroup", tickerLogo: "PHM", icon: "📉", value: 16.8, valueLabel: "-16.8%", highlight: true },
        { label: "Lennar Corp", tickerLogo: "LEN", icon: "📉", value: 11.2, valueLabel: "-11.2%", highlight: true },
        { label: "D.R. Horton", tickerLogo: "DHI", icon: "📉", value: 9.5, valueLabel: "-9.5%", highlight: true },
        { label: "Toll Brothers", tickerLogo: "TOL", icon: "📉", value: 8.4, valueLabel: "-8.4%", highlight: true },
        { label: "S&P 500 Index", tickerLogo: "SPY", icon: "📊", value: 1.2, valueLabel: "-1.2%" },
      ]
    }
  },
  {
    type: "concept",
    background: "light",
    tag: "THE INVENTORY TRAP",
    heading: "The Lock-In",
    headingAccent: "Effect.",
    body: "Why aren't home prices crashing like the homebuilder stocks? Because of the 'Golden Handcuffs'.",
    features: [
      { icon: "🔒", label: "The 3% Handcuff", description: "Millions of homeowners refinanced at 2.5% to 3.5% in 2021. They mathematically cannot afford to sell and buy a new house at 8%." },
      { icon: "🏜️", label: "Inventory Desert", description: "Because nobody is selling, existing home inventory remains at historic lows, artificially keeping prices high." },
      { icon: "🏗️", label: "Builder Reliance", description: "The market is entirely reliant on new construction for supply, making the builders' margin compression a systemic issue." },
    ],
  },
  {
    type: "steps",
    background: "dark",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "Trading the",
    headingAccent: "Housing Crack.",
    body: "How to position your portfolio during a high-yield housing freeze.",
    steps: [
      {
        number: "01",
        title: "Avoid the Builders (For Now)",
        description: "Do not buy the dip on $PHM, $LEN, or $DHI until the Federal Reserve officially pivots and the 10-year yield breaks."
      },
      {
        number: "02",
        title: "Watch the Lumber Trade",
        description: "Lumber futures are a leading indicator for housing starts. If lumber continues to crash, homebuilders have further to fall."
      },
      {
        number: "03",
        title: "Rotate to Rentals",
        description: "If people cannot afford to buy, they must rent. Look at multi-family REITs or apartment operators with strong balance sheets."
      }
    ],
  },
  {
    type: "cta",
    background: "light",
    tag: "MACROEDGE STRATEGY",
    heading: "Don't Fight",
    headingAccent: "The Math.",
    body: "Shelter is the most interest-rate sensitive sector on earth. When the bond market screams warning, you must listen.",
    ctaText: "Follow @macroedge_in",
  },
];
