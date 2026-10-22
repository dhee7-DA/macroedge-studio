import type { SlideData } from "../carousel-types";

export const RBI_POLICY_JUNE: SlideData[] = [
  {
    type: "hero",
    background: "dark",
    tag: "MONETARY POLICY",
    tagRight: "JUNE 2026",
    heading: "The RBI",
    headingAccent: "Hold.",
    body: "The Reserve Bank of India just held rates at 5.25%. But the real story isn't the rate hold—it's the massive inflation warning that triggered a massive rotation in the Indian equities market.",
    levelBadge: "INTERMEDIATE",
    topicNum: "INDIA-MACRO",
    bullets: ["The 5.1% Warning", "Bank Nifty Surge", "The Oil Shock Impact", "IT Sector Headwinds", "Bond Market Taxes"],
  },
  {
    type: "concept",
    background: "light",
    tag: "THE DATA",
    heading: "The Inflation",
    headingAccent: "Warning.",
    body: "While keeping the repo rate at 5.25%, the RBI shocked the market by aggressively raising its FY27 retail inflation projection from 4.6% to 5.1%.",
    features: [
      { icon: "📈", label: "Hawkish Hold", description: "This was not a dovish pause. The RBI signaled that they are highly uncomfortable with sticky inflation and rate cuts are off the table for the foreseeable future." },
      { icon: "🛢️", label: "The Oil Factor", description: "The primary driver of the inflation upgrade is the escalating US-Iran conflict, which threatens to push Brent Crude back above $90/barrel." },
      { icon: "🍞", label: "Food Prices", description: "Domestic food inflation remains highly volatile, forcing the central bank to maintain a restrictive monetary environment." },
    ],
    insightBox: "💡 Analysis: The market was pricing in a potential dovish pivot. Instead, the RBI delivered a reality check. 'Higher for longer' is now the base case for India.",
  },
  {
    type: "table",
    background: "dark",
    tag: "SECTOR ROTATION",
    heading: "Banks vs",
    headingAccent: "Tech.",
    body: "The hawkish RBI policy triggered an immediate and violent sector rotation. Banks surged while IT got crushed.",
    table: {
      headers: ["Sector/Asset", "Impact", "The 'Why'"],
      rows: [
        { cells: ["Bank Nifty", "Bullish 🟢", "Higher rates = sustained Net Interest Margins (NIM)."], highlight: true },
        { cells: ["Nifty IT", "Bearish 🔴", "Global tech selloff + hot US jobs data crushing rate cut hopes."] },
        { cells: ["Real Estate", "Bearish 🔴", "High mortgage rates will persist, cooling housing demand."] },
        { cells: ["Govt Bonds", "Bullish 🟢", "FII tax removal is driving immediate foreign capital inflows."], highlight: true }
      ],
      caption: "MacroEdge Alpha: Do not fight the central bank. Liquidity is aggressively flowing into financials."
    }
  },
  {
    type: "concept",
    background: "light",
    tag: "THE WINNERS",
    heading: "The Banking",
    headingAccent: "Surge.",
    body: "Why did the Bank Nifty rally on news of higher inflation and delayed rate cuts? It comes down to Net Interest Margins (NIM).",
    features: [
      { icon: "🏦", label: "Margin Expansion", description: "When rates stay high, large banks (SBI, HDFC, ICICI) can continue charging premium rates on loans while their cost of deposits stabilizes." },
      { icon: "🛡️", label: "Asset Quality", description: "Despite high rates, corporate balance sheets in India remain robust, meaning Non-Performing Assets (NPAs) are not currently a systemic risk." },
      { icon: "💸", label: "Liquidity Absorption", description: "The RBI's neutral stance ensures enough liquidity in the system for banks to continue credit expansion without aggressive rate hikes." },
    ],
  },
  {
    type: "dosdonts",
    background: "dark",
    tag: "PORTFOLIO STRATEGY",
    heading: "Navigating the",
    headingAccent: "Rate Cycle.",
    body: "How to position your capital during the RBI's 'Higher for Longer' regime.",
    dos: [
      { text: "Overweight top-tier private and PSU banks (HDFC, SBI)." },
      { text: "Look for opportunities in domestic manufacturing driven by government capex." },
      { text: "Keep dry powder (cash) ready for oil-induced market dips." }
    ],
    donts: [
      { text: "Do not buy rate-sensitive sectors like real estate or highly leveraged mid-caps." },
      { text: "Do not expect the RBI to cut rates before the US Federal Reserve does." }
    ]
  },
  {
    type: "concept",
    background: "light",
    tag: "THE LOSERS",
    heading: "The IT Sector",
    headingAccent: "Squeeze.",
    body: "The Nifty IT index was the biggest drag on the broader market. It is fighting a two-front war.",
    features: [
      { icon: "🇺🇸", label: "The NFP Shock", description: "The hot US jobs report (172k added) killed hopes of a US Fed rate cut. High US rates mean less enterprise IT spending by Fortune 500s." },
      { icon: "🔄", label: "The AI Transition", description: "Indian IT services are heavily exposed to legacy software maintenance, which is rapidly being disrupted by AI automation." },
      { icon: "📉", label: "Valuation Compression", description: "In a high-rate environment, growth stocks with future cash flows (like tech) suffer mathematically worse valuation multiples." },
    ],
  },
  {
    type: "concept",
    background: "dark",
    tag: "CURRENCY MARKETS",
    heading: "The Rupee",
    headingAccent: "Defense.",
    body: "Despite the global geopolitical chaos, the Indian Rupee (INR) actually strengthened against the US Dollar.",
    features: [
      { icon: "🛡️", label: "Fortress Reserves", description: "The RBI has amassed historic FX reserves, allowing them to aggressively intervene and defend the Rupee from sudden depreciations." },
      { icon: "💼", label: "FII Tax Relief", description: "The government quietly removed certain capital gains taxes for Foreign Institutional Investors (FIIs) in government bonds." },
      { icon: "🌊", label: "The Inflow Wave", description: "This tax relief, combined with India's inclusion in global bond indices, is forcing billions of foreign dollars to buy the Rupee." },
    ],
  },
  {
    type: "steps",
    background: "light",
    tag: "MACROEDGE PLAYBOOK",
    heading: "The June",
    headingAccent: "Playbook.",
    body: "Three actionable steps to trade the Indian market post-RBI policy.",
    steps: [
      {
        number: "01",
        title: "Pivot to Financials",
        description: "The 'Higher for Longer' rate environment is a massive tailwind for banking margins. Overweight the Bank Nifty."
      },
      {
        number: "02",
        title: "Hedge the Oil Risk",
        description: "The US-Iran conflict is the biggest threat to India's inflation target. If Brent breaks $90, expect a violent selloff in FMCG and Paint stocks."
      },
      {
        number: "03",
        title: "Avoid US-Dependent Tech",
        description: "Until the US Federal Reserve signals a clear rate cut path, avoid Indian IT companies that rely on US enterprise software budgets."
      }
    ],
  },
  {
    type: "cta",
    background: "dark",
    tag: "MACROEDGE STRATEGY",
    heading: "Don't fight the",
    headingAccent: "Central Bank.",
    body: "The RBI just showed its hand. Position your portfolio accordingly.",
    ctaText: "Follow @macroedge_in",
  },
];
