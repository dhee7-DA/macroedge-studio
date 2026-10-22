import type { SlideData } from "../carousel-types";

export const INDIA_ENERGY_LOCKDOWN: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MACRO SHOCK",
    tagRight: "SIGNAL: MAY 14, 2026",
    heading: "India's Energy",
    headingAccent: "Soft Lockdown.",
    body: "Prime Minister Modi has urged citizens to work from home, reduce oil use, and halt destination weddings to save foreign reserves. Here is the market impact.",
    levelBadge: "ADVANCED",
    topicNum: "MACRO-INDIA",
    bullets: ["WFH Directives Return", "85% Oil Import Trap", "Fertilizer Cut by 50%", "Winners and Losers"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE DIRECTIVE",
    heading: "The 'Patriotic'",
    headingAccent: "Conservation.",
    body: "Modi framed the appeals as a national responsibility to protect India's foreign exchange reserves from the global energy crisis.",
    features: [
      { icon: "🏠", label: "Return to WFH", description: "Companies encouraged to use remote work and virtual meetings to save petrol/diesel." },
      { icon: "🛑", label: "No Luxury Travel", description: "Citizens asked to postpone destination weddings and foreign travel for a year." },
      { icon: "🚜", label: "50% Fertilizer Cut", description: "Farmers told to halve chemical fertilizer use due to the $865/ton price spike." },
    ],
    insightBox: "💡 Analysis: This is not a health lockdown; it is an economic lockdown to prevent a balance-of-payments crisis.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE WHY",
    heading: "The 85%",
    headingAccent: "Import Trap.",
    body: "India's economy is highly leveraged to oil. When Brent crude sits above $100, the country's trade deficit expands at a catastrophic rate.",
    features: [
      { icon: "🛢️", label: "Forex Bleed", description: "Paying for $105 oil is draining India's dollar reserves faster than they can replace them." },
      { icon: "📉", label: "Rupee Pressure", description: "The Reserve Bank of India (RBI) is burning reserves to keep the Rupee from crashing." },
      { icon: "⚠️", label: "Imported Inflation", description: "High fuel costs feed directly into food and transport, crushing the middle class." },
    ],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE WINNERS",
    heading: "The WFH",
    headingAccent: "Beneficiaries.",
    body: "Just like in 2020, certain sectors will see a massive surge in demand as the country stays home to save fuel.",
    features: [
      { icon: "💻", label: "Indian IT Giants", description: "TCS, Infosys, and Wipro benefit as firms upgrade cloud infrastructure for remote work." },
      { icon: "🔌", label: "EV Acceleration", description: "Tata Motors and EV infrastructure plays win as the government forces the pivot from ICE." },
      { icon: "📡", label: "Telecom & SaaS", description: "Data consumption will spike, benefiting Jio, Airtel, and local software firms." },
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE LOSERS",
    heading: "The Mobility",
    headingAccent: "Crash.",
    body: "Sectors that rely on movement, physical presence, and discretionary luxury are in the crosshairs of this directive.",
    features: [
      { icon: "🏨", label: "Hospitality & Aviation", description: "The call to stop destination weddings and foreign travel will crush hotel chains and airlines." },
      { icon: "🏢", label: "Commercial Real Estate", description: "Offices emptying out again means lower occupancy and rent pressures." },
      { icon: "🚗", label: "Traditional Auto", description: "Petrol and diesel car sales will plummet as fuel becomes a luxury or restricted." },
    ],
  },
  {
    type: "table",
    background: "light",
    tag: "THE SCOREBOARD",
    heading: "The India",
    headingAccent: "Pivot Matrix.",
    body: "How to position your portfolio for India's soft energy lockdown.",
    table: {
      headers: ["Sector", "Impact", "Moat Type", "Verdict"],
      rows: [
        { cells: ["IT Services", "Positive", "B2B Recurring", "BUY"], highlight: true },
        { cells: ["EV Manufacturers", "Positive", "Govt Tailwind", "BUY"], highlight: true },
        { cells: ["Hotels / Leisure", "Negative", "Discretionary", "AVOID"] },
        { cells: ["Real Estate", "Negative", "Over-leveraged", "SELL"] },
        { cells: ["Public Transport", "Positive", "Scale Def.", "HOLD"] },
      ],
      caption: "MacroEdge Alpha: Rotate out of discretionary Indian consumer and into pure-play IT and EVs.",
    },
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE FOOD RISK",
    heading: "The Danger of",
    headingAccent: "Halving Fertilizer.",
    body: "Modi's appeal to cut chemical fertilizer use by 50% is a desperate move to save forex, but it carries a massive risk for food security.",
    features: [
      { icon: "📉", label: "Yield Collapse", description: "Modern agriculture relies on fertilizers. Cutting them by half could reduce crop yields by 20-30%." },
      { icon: "🌾", label: "Food Inflation", description: "Lower yields mean higher prices for staples like rice and wheat, crushing the lower class." },
      { icon: "⚠️", label: "Social Unrest", description: "Food insecurity combined with high energy costs is a classic recipe for social instability." },
    ],
    insightBox: "💡 Concept: Saving dollars today by cutting fertilizer might cost much more in food imports tomorrow.",
  },
  {
    type: "concept",
    background: "light",
    tag: "THE GEOPOLITICAL PIVOT",
    heading: "Doubling Down on",
    headingAccent: "Discounted Crude.",
    body: "With the West blocking Hormuz, India is forced to strengthen its energy alliance with Russia and other non-aligned states.",
    features: [
      { icon: "🇷🇺", label: "The Russia Pipeline", description: "India will likely ignore Western pressure and buy even more discounted Russian oil via land/arctic routes." },
      { icon: "💱", label: "Ruble-Rupee Trade", description: "Expect a surge in non-dollar trade settlements to bypass the blocked banking system." },
      { icon: "🛡️", label: "Strategic Reserves", description: "India will prioritize filling its strategic underground reserves over immediate market consumption." },
    ],
  },
  {
    type: "steps",
    background: "dark",
    tag: "PORTFOLIO PLAYBOOK",
    heading: "How to Protect",
    headingAccent: "Your Capital.",
    body: "Treat this as a structural shift. India is adapting to a high-energy-cost world. Here is the playbook.",
    steps: [
      {
        number: "01",
        title: "Buy the WFH Tech",
        description: "Indian IT firms have high cash reserves and benefit from the renewed push for remote architecture."
      },
      {
        number: "02",
        title: "Short Premium Leisure",
        description: "Destination weddings are a multi-billion dollar industry in India. A 1-year pause will crush luxury hotels."
      },
      {
        number: "03",
        title: "Watch Crop Yields",
        description: "Halving fertilizer use is dangerous. Watch for a spike in Indian food inflation in Q3."
      }
    ],
  },
  {
    type: "cta",
    background: "light",
    tag: "MACROEDGE STRATEGY",
    heading: "The New",
    headingAccent: "Normal.",
    body: "This is not a temporary spike. It is the beginning of a structural shift in how developing nations survive high energy costs.",
    ctaText: "Follow @macroedge_in",
  },
];
