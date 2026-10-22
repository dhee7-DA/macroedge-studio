import type { SlideData } from "../carousel-types";

export const JPY_INTERVENTION: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MACROEDGE GLOBAL INTEL",
    tagRight: "SIGNAL: MAY 6, 2026",
    heading: "The $155 Yen",
    headingAccent: "Firewall.",
    body: "The Japanese Ministry of Finance (MOF) has declared war on the USD/JPY carry trade. As the Fed holds a hawkish pause at 3.50%, a global liquidity reset is underway.",
    levelBadge: "ADVANCED",
    topicNum: "JPY1",
    bullets: ["Intervention Wave #2", "USD/JPY Flash Crash", "The Warsh Fed Transition"],
  },
  {
    type: "concept",
    background: "light",
    tag: "CURRENCY VOLATILITY",
    heading: "The Flash",
    headingAccent: "Crash.",
    body: "Early Asian trading saw a violent move in the USD/JPY pair, dropping from 157.80 to 155.50 in minutes. This bears all the hallmarks of institutional intervention.",
    features: [
      { icon: "📉", label: "Intervention suspected", description: "The MOF is suspected of selling U.S. Treasuries to buy Yen at the 155.00 'Line in the Sand'." },
      { icon: "🛡️", label: "Carry Trade Risk", description: "Sudden JPY strength triggers margin calls for global funds borrowing in Yen to buy Dollars." },
      { icon: "🚨", label: "Liquidity Trap", description: "If the MOF fails to hold 155.00, the next target is 160.00, potentially breaking the carry trade." },
    ],
    insightBox: "💡 Analysis: Japan is burning through its FX reserves to fight a 'Hawkish Fed'. This is a fight they cannot win long-term.",
  },
  {
    type: "concept",
    background: "dark",
    tag: "FED WATCH",
    heading: "The Warsh",
    headingAccent: "Regime.",
    body: "The biggest threat to the Yen is the upcoming leadership change at the Federal Reserve. Kevin Warsh is expected to take the helm in mid-June.",
    features: [
      { icon: "🦅", label: "Hawkish Pivot", description: "Warsh is a 'Sound Money' advocate. Markets expect rates to stay above 3.5% for longer." },
      { icon: "🏛️", label: "Internal Dissent", description: "Three regional Fed presidents (Kashkari, Logan) already dissent against rate cuts." },
      { icon: "👔", label: "June 15 Target", description: "This date is the 'Ultimate Pivot' for global currency and debt markets." },
    ],
  },
  {
    type: "table",
    background: "light",
    tag: "SOVEREIGN RISK",
    heading: "The Debt",
    headingAccent: "Cliff.",
    body: "As rates stay high, the cost of 'Refinancing the World' is exploding. Western European sovereigns have the least fiscal headroom.",
    table: {
      headers: ["Country", "Fiscal Headroom", "Refi Risk", "Status"],
      rows: [
        { cells: ["United States", "Moderate", "Moderate", "Energy Buffer"] },
        { cells: ["UK / France", "Critical", "High", "Austerity Pending"], highlight: true },
        { cells: ["Japan", "Zero", "Extreme", "Unlimited Printing"] },
      ],
      caption: "Source: OECD Sovereign Bond Outlook, May 2026.",
    },
  },
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE VERDICT",
    heading: "The Trap is",
    headingAccent: "Set.",
    body: "Global liquidity is being squeezed by the MOF and the Fed dissenters. The 'Carry Trade' is no longer a safe bet. Position accordingly.",
    ctaText: "Join the Intelligence Vault",
  },
];
