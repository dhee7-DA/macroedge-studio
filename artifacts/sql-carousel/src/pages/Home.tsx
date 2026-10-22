import React, { useState, useRef, useEffect, useMemo } from "react";
import { 
  ChevronDown, 
  Download, 
  Sparkles, 
  RefreshCw, 
  Search,
  Zap,
  Settings,
  Palette,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Info,
  Layers,
  Copy,
  Check,
  Smartphone,
  LayoutGrid,
  Share2,
  FileText,
  Sliders,
  Filter,
  X,
  Calendar,
  Edit3,
  Plus,
  FileDown,
  Package,
  SlidersHorizontal,
  AtSign,
  BookOpen,
  Sun,
  Moon
} from "lucide-react";
import { generateCarousel } from "../lib/carousel-engine";
import { THEMES, getRandomTheme } from "../lib/themes";
import { getAvailableTopics, getTopicSlideCount } from "../lib/sql-content";
import { CarouselPreview } from "../components/CarouselPreview";
import { Slide } from "../components/Slide";
import { SlideEditorModal } from "../components/SlideEditorModal";
import { NewDossierModal } from "../components/NewDossierModal";
import { PublishingQueueModal } from "../components/PublishingQueueModal";
import { WsjIntakeModal } from "../components/WsjIntakeModal";
import { SubstackViewer } from "../components/SubstackViewer";
import { 
  WSJ_PRESETS, 
  synthesizeSubstackArticle, 
  type SubstackResearchArticle 
} from "../lib/substack-synthesizer";
import { exportCarouselToZip, exportCarouselToPdf } from "../lib/export-engine";
import type { SlideData } from "@workspace/carousel-engine";

interface TopicGroup {
  id: string;
  label: string;
  keys: string[];
}

const TOPIC_GROUPS: TopicGroup[] = [
  {
    id: "showcase",
    label: "💎 Studio 2.0 Showcase",
    keys: ["institutional-showcase"],
  },
  {
    id: "fundamentals",
    label: "📊 Valuation & Multiples",
    keys: ["35-valuation-matrix"],
  },
  {
    id: "macro",
    label: "🏗️ Macro Mega-Trends",
    keys: ["ai-valuation-selloff", "waste-management-pt1", "waste-management-pt2", "india-real-estate"],
  },
  {
    id: "macro",
    label: "🌍 Geopolitics & Macro",
    keys: [
      "48-dow-50k-illusion",
      "45-interest-rates-masterclass",
      "44-global-market-retreat",
      "43-india-energy-lockdown",
      "42-russia-gold-pivot",
      "41-food-costs-spike",
      "40-hantavirus-outbreak",
      "37-jpy-intervention",
      "01-hormuz-closure-effect",
      "helium-export-ban",
      "86-spirit-aviation-crisis",
      "87-fii-exodus",
      "spacex-ipo",
      "boj-rate-hike",
      "12-ceasefire-paradox",
      "13-china-gdp-moat",
      "14-india-nuclear-renaissance",
      "15-supercycle-pt1",
      "16-supercycle-pt2",
      "17-sovereign-debt-cliff",
      "18-imf-pivot-darkened",
      "19-sanction-trap",
      "36-uae-opec-exit",
      "37-pakistan-imf-trap",
      "38-rupee-collapse",
      "39-sp500-paradox",
    ],
  },
  {
    id: "stocks",
    label: "🏢 Stock Teardowns",
    keys: ["asian-chip-carnage", "51-nvda-vera-rubin", "50-snow-ai-layer", "49-thematic-rotation", "47-phm-housing-warning", "39-spacex-ipo", "38-arm-agi", "36-silicon-hegemony", "10-nvda-teardown", "11-tsla-teardown", "85-rtx-teardown", "30-intel-resurgence"],
  },
  {
    id: "ai",
    label: "🚀 AI Frontier",
    keys: ["ai-revenue-trap", "quantum-ipo", "microsoft-frontier", "ram-cartel-lawsuit", "ramageddon-apple", "ai-energy-crisis", "56-ai-capex-wars", "55-agi-timeline", "54-custom-silicon", "53-edge-ai", "52-robotics-gpt", "40-apple-intelligence", "35-open-source-ai", "31-ai-agents"],
  },
  {
    id: "stocks",
    label: "📊 Institutional Tear-Downs",
    keys: [
      "46-top-etfs-2026",
      "33-arm-agi-teardown",
      "32-spacex-ipo-teardown",
      "26-hbm-scarcity",
      "27-gamers-vs-ai",
      "28-ai-water-crisis",
      "29-kevin-warsh-fed",
      "31-foundry-wars",
    ],
  },
  {
    id: "ai",
    label: "🔬 Deep Technology",
    keys: [
      "20-photonics-pt1",
      "21-photonics-pt2",
      "34-judgment-day",
    ],
  },
  {
    id: "ai",
    label: "🚀 Groundbreaking Tech",
    keys: ["groundbreaking-innovations", "33-biological-computing"],
  },
  {
    id: "stocks",
    label: "🤝 M&A Intelligence",
    keys: ["24-ma-intel-pt1", "32-ma-intel-pt1"],
  },
  {
    id: "fundamentals",
    label: "📈 Fundamental Analysis",
    keys: [
      "40-fa-pe-ratio", "41-fa-eps", "42-fa-pb-ratio", "43-fa-ps-ratio",
      "44-fa-peg-ratio", "45-fa-ev-ebitda", "46-fa-ev-fcf", "47-fa-dividend-yield",
      "48-fa-revenue-growth", "49-fa-gross-margin", "50-fa-operating-margin",
      "51-fa-net-margin", "52-fa-roe-roic", "53-fa-roa", "54-fa-ebitda-margin",
      "55-fa-operating-cashflow", "56-fa-fcf-vs-income", "57-fa-fcf-yield",
      "58-fa-capex", "59-fa-owner-earnings",
      "60-fa-debt-equity", "61-fa-interest-coverage", "62-fa-liquidity-ratios",
      "63-fa-goodwill-intangibles", "64-fa-tangible-book",
      "65-fa-tam-market-share", "66-fa-eps-dilution", "67-fa-buybacks-dividends",
      "68-fa-moat", "69-fa-pricing-power", "70-fa-network-effects", "71-fa-porters-five-forces",
      "72-fa-income-statement", "73-fa-balance-sheet-walkthrough",
      "74-fa-cashflow-statement", "75-fa-red-flags",
      "76-fa-banking-metrics", "77-fa-saas-metrics", "78-fa-energy-metrics", "79-fa-reits",
      "80-fa-dcf-pt1", "81-fa-dcf-wacc", "82-fa-dcf-terminal",
      "83-fa-margin-of-safety", "84-fa-sotp",
    ],
  },
  {
    id: "macro",
    label: "🏦 Macroeconomics: The Core",
    keys: [
      "econ-01", "econ-02", "econ-03", "econ-04", "econ-05", "econ-06", "econ-07", "econ-08",
      "econ-09", "econ-10", "econ-11", "econ-12", "econ-13", "econ-14", "econ-15", "econ-16"
    ],
  },
  {
    id: "macro",
    label: "🌍 Macro: Fiscal & International",
    keys: [
      "econ-17", "econ-18", "econ-19", "econ-20", "econ-21", "econ-22", "econ-23", "econ-24",
      "econ-25", "econ-26", "econ-27", "econ-28", "econ-29", "econ-30", "econ-31", "econ-32"
    ],
  },
  {
    id: "macro",
    label: "🧠 Macro: Advanced Theories",
    keys: [
      "econ-33", "econ-34", "econ-35", "econ-36", "econ-37", "econ-38", "econ-39", "econ-40"
    ],
  },
  {
    id: "macro",
    label: "🏢 Microeconomics",
    keys: ["econ-41", "econ-42", "econ-43", "econ-44", "econ-45"],
  },
  {
    id: "macro",
    label: "🧩 Behavioral Finance",
    keys: ["econ-46", "econ-47", "econ-48", "econ-49", "econ-50"],
  },
  {
    id: "macro",
    label: "📉 Historical Crises",
    keys: ["econ-51", "econ-52", "econ-53", "econ-54", "econ-55"],
  },
  {
    id: "india",
    label: "🇮🇳 India Intelligence",
    keys: ["india-relief-rally", "rbi-forex-firewall", "india-market-flush", "india-mega-ipos", "india-06", "india-01", "india-02", "india-03", "india-04", "india-05"],
  },
  {
    id: "crypto",
    label: "🌐 Web3 & The Agentic Economy",
    keys: ["corporate-bitcoin-standard", "coinbase-tokenization"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Dossiers" },
  { id: "showcase", label: "💎 Showcase" },
  { id: "macro", label: "🏗️ Macro" },
  { id: "stocks", label: "🏢 Stocks" },
  { id: "ai", label: "🚀 AI Frontier" },
  { id: "fundamentals", label: "📊 Fundamentals" },
  { id: "india", label: "🇮🇳 India" },
  { id: "crypto", label: "🌐 Web3" },
];

const TOPIC_LABELS: Record<string, string> = {
  "institutional-showcase": "💎 SHOWCASE: Institutional Components & Studio 2.0",
  "ai-revenue-trap": "TECH: The AI Revenue Trap",
  "india-relief-rally": "INDIA: The 4-Day Relief Rally",
  "rbi-forex-firewall": "INDIA: The RBI's $40B Forex Firewall",
  "asian-chip-carnage": "TEARDOWN: The Asian Chip Carnage",
  "india-market-flush": "INDIA: The 5-Day Market Flush",
  "ai-valuation-selloff": "MACRO: The $725B AI Valuation Sell-Off",
  "helium-export-ban": "GEO: China's Helium Export Ban",
  "india-real-estate": "MACRO: Indian Real Estate Supercycle",
  "waste-management-pt1": "MACRO: Waste Management (Part 1 - The Thesis)",
  "waste-management-pt2": "MACRO: Waste Management (Part 2 - Stocks & ETFs)",
  "microsoft-frontier": "TECH: Microsoft's $2.5B Frontier (AI Monopoly)",
  "quantum-ipo": "TECH: The Quantum Computing IPO (IQM)",
  "ram-cartel-lawsuit": "TECH: The RAM Cartel (Antitrust Lawsuit)",
  "ramageddon-apple": "TECH: RAMageddon (The Apple Price Hikes)",
  "ai-energy-crisis": "MACRO: Powering the AI Boom (Data Center Crisis)",
  "corporate-bitcoin-standard": "CRYPTO: The Corporate Bitcoin Standard",
  "tech-selloff-june26": "MACRO: The Great Tech Wreck (June 2026)",
  "coinbase-tokenization": "CRYPTO: The Coinbase 'Everything Exchange'",
  "india-mega-ipos": "INDIA: The Jio & NSE Mega-IPOs",
  "boj-rate-hike": "MACRO: Japan Ends the Free Money Era (BOJ Hike)",
  "spacex-ipo": "SPACEX: The $2 Trillion IPO",
  "51-nvda-vera-rubin": "TEARDOWN: The Vera Rubin Supercycle ($NVDA)",
  "50-snow-ai-layer": "TEARDOWN: The AI Data Layer ($SNOW)",
  "49-thematic-rotation": "STRATEGY: The Thematic Rotation ETF Portfolio",
  "48-dow-50k-illusion": "MACRO: The Dow 50K Illusion",
  "47-phm-housing-warning": "TEARDOWN: The Housing Warning ($PHM Crash)",
  "46-top-etfs-2026": "ETF LEADERS: Top Performing Funds YTD 2026",
  "45-interest-rates-masterclass": "MASTERCLASS: The Gravity of Money (Interest Rates)",
  "44-global-market-retreat": "MACRO: The Global Market Retreat",
  "43-india-energy-lockdown": "MACRO: India's Energy Soft Lockdown",
  "42-russia-gold-pivot": "MACRO: The Great Russia Gold Dump",
  "41-food-costs-spike": "MACRO: Global Food Costs Spike (FAO Alarm)",
  "40-hantavirus-outbreak": "BLACK SWAN: Hantavirus Outbreak (Andes Strain)",
  "39-spacex-ipo": "INTEL: The $1.5T SpaceX IPO Teardown",
  "38-arm-agi": "INTEL: ARM AGI Teardown (May 7 Smash)",
  "36-silicon-hegemony": "INTEL: Silicon Hegemony (3-Layer Teardown)",
  "37-jpy-intervention": "INTEL: The $155 JPY Firewall",
  "groundbreaking-innovations": "Frontier Tech: Innovations Mega-Report",
  "01-hormuz-closure-effect": "The Strait of Hormuz Crisis",
  "86-spirit-aviation-crisis": "Spirit Airlines Bankruptcy",
  "87-fii-exodus": "The FII Exodus (Why Foreign Capital Left India)",
  "10-nvda-teardown": "Nvidia ($NVDA) Teardown",
  "11-tsla-teardown": "Tesla ($TSLA) Institutional Teardown",
  "85-rtx-teardown": "RTX ($RTX) Institutional Teardown",
  "12-ceasefire-paradox": "The Ceasefire Paradox ($CP)",
  "13-china-gdp-moat": "The China Moat ($GDP)",
  "14-india-nuclear-renaissance": "India Nuclear Renaissance ($SHANTI)",
  "15-supercycle-pt1": "Energy Super-Cycle (Pt 1): Baseload",
  "16-supercycle-pt2": "Energy Super-Cycle (Pt 2): Resources",
  "17-sovereign-debt-cliff": "The Sovereign Debt Cliff ($9.6T Wall)",
  "18-imf-pivot-darkened": "The IMF Pivot: Darkened Horizons",
  "19-sanction-trap": "The U.S. Sanction Trap ($USD Weapon)",
  "20-photonics-pt1": "Silicon Photonics (Part I): The Inflection",
  "21-photonics-pt2": "Silicon Photonics (Part II): The Leaderboard",
  "22-claude-pt1": "Why Claude is Different (Part I)",
  "23-claude-pt2": "Claude’s $60B Stock Plan (Part II)",
  "24-ma-intel-pt1": "Big Tech’s Huge Deals (Part I)",
  "25-ma-intel-pt2": "The Companies Big Tech Wants (Part II)",
  "26-hbm-scarcity": "The AI Memory Shortage ($MU)",
  "27-gamers-vs-ai": "Gamers vs. AI Companies",
  "28-ai-water-crisis": "AI’s Huge Water Problem",
  "29-kevin-warsh-fed": "Kevin Warsh: The Fed Regime Change",
  "30-intel-resurgence": "Intel ($INTC) Resurgence Teardown",
  "31-foundry-wars": "Foundry Wars: TSMC vs. Intel vs. GFS",
  "32-ma-intel-pt1": "M&A Intel (Part I): The Shadow Acquirers",
  "33-biological-computing": "Biological Computing: The Silicon-Wetware Rift",
  "34-judgment-day": "Judgment Day: The Big Tech CaPex Checklist",
  "35-valuation-matrix": "The 2026 AI Valuation Matrix (PE/PEG)",
  "36-uae-opec-exit": "UAE Exits OPEC — The Cartel Fracture",
  "37-pakistan-imf-trap": "Pakistan's IMF Trap — 24 Bailouts & Counting",
  "38-rupee-collapse": "Rupee at ₹95 — India's Currency Crisis",
  "39-sp500-paradox": "The S&P 500 Paradox — Why Markets Defy Reality",
  "40-fa-pe-ratio": "FA Part 01 — The P/E Ratio: The Full Story",
  "41-fa-eps": "FA Part 02 — EPS: The Number Behind Every Valuation",
  "42-fa-pb-ratio": "FA Part 03 — The P/B Ratio: What Are You Paying for Assets?",
  "43-fa-ps-ratio": "FA Part 04 — The P/S Ratio: Valuing Companies That Don't Make Money",
  "44-fa-peg-ratio": "FA Part 05 — The PEG Ratio: P/E Adjusted for Growth",
  "45-fa-ev-ebitda": "FA Part 06 — EV/EBITDA: How Institutions Actually Value Companies",
  "46-fa-ev-fcf": "FA Part 07 — EV/FCF: The Purest Institutional Valuation Metric",
  "47-fa-dividend-yield": "FA Part 08 — Dividend Yield & Payout Ratio",
  "48-fa-revenue-growth": "FA Part 09 — Revenue & Revenue Growth",
  "49-fa-gross-margin": "FA Part 10 — Gross Margin: The First Test of a Business Model",
  "50-fa-operating-margin": "FA Part 11 — Operating Margin: True Business Efficiency",
  "51-fa-net-margin": "FA Part 12 — Net Profit Margin: What Belongs to Shareholders",
  "52-fa-roe-roic": "FA Part 13 — ROE vs ROIC: The Real Profitability Test",
  "53-fa-roa": "FA Part 14 — Return on Assets: How Hard Is Every Dollar Working?",
  "54-fa-ebitda-margin": "FA Part 15 — EBITDA & EBITDA Margin",
  "55-fa-operating-cashflow": "FA Part 16 — Operating Cash Flow",
  "56-fa-fcf-vs-income": "FA Part 17 — Free Cash Flow vs Net Income",
  "57-fa-fcf-yield": "FA Part 18 — FCF Yield: The Investor's Real Return",
  "58-fa-capex": "FA Part 19 — Capital Expenditure: Maintenance vs Growth",
  "59-fa-owner-earnings": "FA Part 20 — Owner Earnings: Buffett's Definition of Real Profit",
  "60-fa-debt-equity": "FA Part 21 — Debt-to-Equity & Net Debt",
  "61-fa-interest-coverage": "FA Part 22 — Interest Coverage Ratio",
  "62-fa-liquidity-ratios": "FA Part 23 — Current Ratio & Quick Ratio",
  "63-fa-goodwill-intangibles": "FA Part 24 — Goodwill & Intangibles",
  "64-fa-tangible-book": "FA Part 25 — Book Value & Tangible Book Value",
  "65-fa-tam-market-share": "FA Part 26 — TAM & Market Share",
  "66-fa-eps-dilution": "FA Part 27 — EPS Dilution: The Stealth Value Destroyer",
  "67-fa-buybacks-dividends": "FA Part 28 — Buybacks vs Dividends",
  "68-fa-moat": "FA Part 29 — Economic Moat: Durability of Competitive Advantage",
  "69-fa-pricing-power": "FA Part 30 — Pricing Power: The Ultimate Moat Test",
  "70-fa-network-effects": "FA Part 31 — Network Effects & Switching Costs",
  "71-fa-porters-five-forces": "FA Part 32 — Porter's Five Forces",
  "72-fa-income-statement": "FA Part 33 — The Income Statement",
  "73-fa-balance-sheet-walkthrough": "FA Part 34 — The Balance Sheet",
  "74-fa-cashflow-statement": "FA Part 35 — The Cash Flow Statement",
  "75-fa-red-flags": "FA Part 36 — Red Flags in Financial Statements",
  "76-fa-banking-metrics": "FA Part 37 — Banking Sector Metrics",
  "77-fa-saas-metrics": "FA Part 38 — Tech & SaaS Sector Metrics",
  "78-fa-energy-metrics": "FA Part 39 — Energy Sector Metrics",
  "79-fa-reits": "FA Part 40 — REITs: Real Estate Investment Trusts",
  "80-fa-dcf-pt1": "FA Part 41 — DCF Part 1: The Foundation",
  "81-fa-dcf-wacc": "FA Part 42 — DCF Part 2: Building the WACC",
  "82-fa-dcf-terminal": "FA Part 43 — DCF Part 3: Terminal Value & Putting It Together",
  "83-fa-margin-of-safety": "FA Part 44 — Margin of Safety & Intrinsic Value",
  "84-fa-sotp": "FA Part 45 — Sum-of-the-Parts Valuation",
  "india-06": "MACRO: The RBI Policy Shock (June 2026)",
  "india-01": "India Intelligence: The Super-Cycle Thesis",
  "india-02": "India Intelligence: The Digital Stack Rail",
  "india-03": "India Intelligence: Defense Indigenization",
  "india-04": "India Intelligence: The Energy Transition",
  "india-05": "India Intelligence: The Banking Renaissance",
  "econ-01": "Econ 01 — GDP: The Ultimate Scorecard",
  "econ-02": "Econ 02 — Real vs. Nominal GDP",
  "econ-03": "Econ 03 — CPI & Core PCE Inflation",
  "econ-04": "Econ 04 — PPI: The Leading Indicator",
  "econ-05": "Econ 05 — Inflation, Deflation & Stagflation",
  "econ-06": "Econ 06 — The Velocity of Money",
  "econ-07": "Econ 07 — Unemployment & Participation Rates",
  "econ-08": "Econ 08 — The Business Cycle Phases",
  "econ-09": "Econ 09 — How Central Banks Actually Work",
  "econ-10": "Econ 10 — The Federal Funds Rate Mechanics",
  "econ-11": "Econ 11 — Quantitative Easing (QE) Explained",
  "econ-12": "Econ 12 — Quantitative Tightening (QT) Explained",
  "econ-13": "Econ 13 — The Yield Curve & Inversions",
  "econ-14": "Econ 14 — Fractional Reserve Banking & Money Creation",
  "econ-15": "Econ 15 — The Repo Market (The Plumbing)",
  "econ-16": "Econ 16 — Reverse Repo (RRP) Facility",
  "econ-17": "Econ 17 — Tax Revenue & The Laffer Curve",
  "econ-18": "Econ 18 — Government Spending Breakdown",
  "econ-19": "Econ 19 — The National Deficit vs. The Debt",
  "econ-20": "Econ 20 — The Debt Ceiling Theater",
  "econ-21": "Econ 21 — Treasuries & The Bond Market",
  "econ-22": "Econ 22 — The Crowding Out Effect",
  "econ-23": "Econ 23 — Modern Monetary Theory (MMT)",
  "econ-24": "Econ 24 — The Wealth Gap & Inequality",
  "econ-25": "Econ 25 — Forex & Exchange Rate Mechanics",
  "econ-26": "Econ 26 — The Balance of Trade Dynamics",
  "econ-27": "Econ 27 — Current vs. Capital Accounts",
  "econ-28": "Econ 28 — Tariffs & Trade War Economics",
  "econ-29": "Econ 29 — Globalization vs. Regionalization",
  "econ-30": "Econ 30 — Emerging Markets (EM) Analysis",
  "econ-31": "Econ 31 — US Dollar Hegemony & Reserve Status",
  "econ-32": "Econ 32 — CBDCs & The Future of Money",
  "econ-33": "Econ 33 — The Petrodollar System Explained",
  "econ-34": "Econ 34 — De-Dollarization: Threat vs. Reality",
  "econ-35": "Econ 35 — Hyperinflation: The Death of Currency",
  "econ-36": "Econ 36 — Liquidity Traps (Pushing on a String)",
  "econ-37": "Econ 37 — The Cantillon Effect (Inequality Machine)",
  "econ-38": "Econ 38 — The Triffin Dilemma",
  "econ-39": "Econ 39 — Financial Contagion & Systemic Risk",
  "econ-40": "Econ 40 — Bretton Woods & The Gold Standard",
  "econ-41": "Econ 41 — Supply, Demand & Equilibrium",
  "econ-42": "Econ 42 — Price Elasticity & Pricing Power",
  "econ-43": "Econ 43 — Marginal Utility & Diminishing Returns",
  "econ-44": "Econ 44 — Opportunity Cost & Sunk Cost Fallacy",
  "econ-45": "Econ 45 — Market Structures: Monopoly to Comp",
  "econ-46": "Econ 46 — EMH vs. Behavioral Finance",
  "econ-47": "Econ 47 — Prospect Theory & Loss Aversion",
  "econ-48": "Econ 48 — The Greater Fool Theory & Bubbles",
  "econ-49": "Econ 49 — Information Asymmetry (Lemons)",
  "econ-50": "Econ 50 — Moral Hazard & Bailouts",
  "econ-51": "Econ 51 — The Great Depression (1929)",
  "econ-52": "Econ 52 — 1970s Stagflation & Oil Shocks",
  "econ-53": "Econ 53 — The Volcker Shock (20% Rates)",
  "econ-54": "Econ 54 — The Dot-Com Bubble (2000)",
  "econ-55": "Econ 55 — The 2008 Financial Crisis (GFC)",
};

const VIRAL_HOOKS: Record<string, { contrarian: string; pain: string; aspirational: string }> = {
  "institutional-showcase": {
    contrarian: "Everyone is looking at AI software multiples. The smart money is buying the power and cooling moat.",
    pain: "Did your tech thesis ignore power saturation? You're playing 2024 games in a 2026 hardware regime.",
    aspirational: "The Institutional Frontier: How Tier-1 asset managers price sovereign compute and silicon infrastructure."
  },
  "india-06": {
    contrarian: "The RBI didn't cut rates. They did something much more dangerous.",
    pain: "Did your IT portfolio get crushed today? You misread the central bank.",
    aspirational: "The Higher For Longer Playbook: How to rotate into banking margins while the tech sector burns."
  },
  "51-nvda-vera-rubin": {
    contrarian: "Nvidia is operating like a monopoly that acts like a starving startup. They are cannibalizing their own products to maintain dominance.",
    pain: "Did you sell NVDA thinking the hardware cycle was over?",
    aspirational: "The Vera Rubin Playbook: How to position your portfolio for the next generation of AI compute."
  },
  "50-snow-ai-layer": {
    contrarian: "Everyone is buying Nvidia chips, but AI is useless without clean enterprise data.",
    pain: "Did you buy a legacy SaaS company while the smart money rotated into data infrastructure?",
    aspirational: "The AI Data Playbook: How to capture the consumption-based revenue explosion."
  },
  "49-thematic-rotation": {
    contrarian: "Buying the S&P 500 is no longer the safest play. It's the most dangerous.",
    pain: "Are you holding 'zombie companies' in your passive index fund?",
    aspirational: "The Active Playbook: How to build a high-alpha thematic ETF portfolio."
  },
  "48-dow-50k-illusion": {
    contrarian: "The Dow hitting 50,000 isn't a victory. It's a massive liquidity trap.",
    pain: "Are you buying the all-time highs while smart money quietly exits into 5% cash?",
    aspirational: "The Milestone Playbook: How to position your portfolio for the inevitable LEI contraction."
  },
  "47-phm-housing-warning": {
    contrarian: "The housing market isn't booming. It's completely frozen.",
    pain: "Did you buy a homebuilder stock on the 'rate cut' dream? You just got trapped.",
    aspirational: "The Real Estate Playbook: How to position your cash while the builders crash."
  },
  "46-top-etfs-2026": {
    contrarian: "The S&P 500 is bleeding, but these ETFs are up triple digits.",
    pain: "Are you holding QQQ while the smart money rotates into hard assets?",
    aspirational: "The 2026 ETF Playbook: The exact funds benefiting from the Hormuz blockade."
  },
  "45-interest-rates-masterclass": {
    contrarian: "You don't understand the stock market until you understand the bond market.",
    pain: "Are your tech stocks crashing? Blame the 10-Year Treasury Yield. Here is why.",
    aspirational: "Mastering the Gravity of Money: How to position your portfolio for the rate cycle."
  },
  "44-global-market-retreat": {
    contrarian: "The AI Euphoria just broke. The Bond Market is in charge now.",
    pain: "Did you buy the dip on Tech today? You might be walking into a yield trap.",
    aspirational: "The Retreat Playbook: How to position your portfolio for the Friday reversal."
  },
  "43-india-energy-lockdown": {
    contrarian: "The next lockdown isn't for a virus. It's for oil.",
    pain: "Modi just told Indians to stop traveling and work from home. Here is why.",
    aspirational: "The Energy Lockdown Playbook: How to profit from India's forced pivot to WFH and EVs."
  },
  "42-russia-gold-pivot": {
    contrarian: "The safe haven is cracked. Russia is dumping gold.",
    pain: "Are you holding gold as a safe haven? You need to see this supply trap.",
    aspirational: "The Desperation Playbook: How to profit from the return of Russian gold to the market."
  },
  "41-food-costs-spike": {
    contrarian: "The Tech Bubble isn't your biggest risk. The Food Bubble is.",
    pain: "Your grocery bill just went up again. Here is why inflation is NOT dead.",
    aspirational: "The Stagflation Playbook: How to profit from the return of $100 oil and record food costs."
  },
  "40-hantavirus-outbreak": {
    contrarian: "It's not just a cruise ship virus. The Andes strain is spreading human-to-human.",
    pain: "Your travel stocks are exposed. Do you have a hedge for the Hantavirus panic?",
    aspirational: "The Black Swan Playbook: How to rotate into Bio-Defense before the market crashes."
  },
  "39-spacex-ipo": {
    contrarian: "Boeing is Dead. SpaceX just became the world's logistics backbone.",
    pain: "You’re looking at the wrong Musk company. The real money is in the Starlink IPO.",
    aspirational: "The $1.5 Trillion Bet: How SpaceX is monetizing the orbital economy."
  },
  "38-arm-agi": {
    contrarian: "Stop buying GPUs. The real AI money is in the Patents.",
    pain: "You missed the $1.49B ARM beat. Here is how to play the $2B backlog.",
    aspirational: "The AGI Blueprint: How ARM just became the most important firm in AI."
  },
  "36-silicon-hegemony": {
    contrarian: "The NVIDIA Monopoly is Over. Here are the 3 firms taking the crown.",
    pain: "You’re buying the wrong AI stocks. The hardware war is moving to the power grid.",
    aspirational: "How to own the entire AI backbone for the price of one NVIDIA share."
  },
  "37-jpy-intervention": {
    contrarian: "Japan just declared war on the Dollar. The carry trade is dead.",
    pain: "Your portfolio is exposed to a $155 Yen firewall. Do you have a hedge?",
    aspirational: "The 2026 Currency Reset: How to profit from the MOF intervention."
  },
  "35-valuation-matrix": {
    contrarian: "The Tech Bubble hasn't burst—it just got smarter. Here is the new math.",
    pain: "Stop using 2024 P/E ratios. They are useless in the AI monetization era.",
    aspirational: "The Institutional Valuation Scorecard: Spotting the next 10x play."
  }
};

const SLIDE_COUNT_OPTIONS = [3, 5, 6, 7, 10, 12, 15, 20];

export default function Home() {
  const topics = useMemo(() => getAvailableTopics(), []);
  const availableSet = useMemo(() => new Set(topics), [topics]);

  // Brand Handle Customizer state
  const [brandHandle, setBrandHandle] = useState("macroedge_in");
  const [isEditingHandle, setIsEditingHandle] = useState(false);

  // Custom user-created dossiers
  const [customDossiers, setCustomDossiers] = useState<Record<string, { label: string; category: string; slides: SlideData[] }>>({});

  // Workstation state
  const [selectedPreset, setSelectedPreset] = useState("institutional-showcase");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [rightTab, setRightTab] = useState<"substack" | "social" | "style">("substack");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Substack Article Dual-Engine State
  const [substackArticle, setSubstackArticle] = useState<SubstackResearchArticle | null>(() => {
    return synthesizeSubstackArticle(WSJ_PRESETS[0]);
  });
  const [isWsjIntakeOpen, setIsWsjIntakeOpen] = useState(false);

  // Modals state
  const [editingSlideIndex, setEditingSlideIndex] = useState<number | null>(null);
  const [isNewDossierOpen, setIsNewDossierOpen] = useState(false);
  const [isPublishingQueueOpen, setIsPublishingQueueOpen] = useState(false);
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);

  // Export progress
  const [exportProgress, setExportProgress] = useState<{ isExporting: boolean; message: string; current: number; total: number }>({
    isExporting: false,
    message: "",
    current: 0,
    total: 0,
  });

  const [slideCount, setSlideCount] = useState(10);
  const [theme, setTheme] = useState(() => THEMES[0] || getRandomTheme());
  const [colorMode, setColorMode] = useState<"auto" | "light" | "dark">("auto");
  const [themeFilter, setThemeFilter] = useState<"all" | "light" | "dark">("all");
  const [glassMode, setGlassMode] = useState(true);
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [hoveredSlide, setHoveredSlide] = useState<number | null>(null);

  const filteredThemes = useMemo(() => {
    if (themeFilter === "light") {
      return THEMES.filter(t => t.isLightDefault);
    }
    if (themeFilter === "dark") {
      return THEMES.filter(t => !t.isLightDefault);
    }
    return THEMES;
  }, [themeFilter]);

  const effectiveTopic = selectedPreset;

  const handleGenerate = (countOverride?: number) => {
    setIsGenerating(true);
    const count = countOverride ?? slideCount;

    setTimeout(() => {
      // Check if custom dossier
      if (customDossiers[effectiveTopic]) {
        setSlides(customDossiers[effectiveTopic].slides);
      } else {
        const result = generateCarousel({ topic: effectiveTopic, slideCount: count, theme });
        setSlides(result.slides);
      }
      setGenerated(true);
      setIsGenerating(false);
    }, 280);
  };

  const FA_THEME = THEMES.find(t => t.name === "FA Series: Midnight Azure") || THEMES[0];

  useEffect(() => {
    if (selectedPreset.includes("-fa-")) {
      setTheme(FA_THEME);
    }
    handleGenerate();
  }, [selectedPreset]);

  // Re-generate when theme changes so components pick up new accents
  useEffect(() => {
    if (generated && !customDossiers[selectedPreset]) {
      handleGenerate();
    }
  }, [theme]);

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2200);
  };

  // Filtered dossiers for left pane (including custom ones)
  const filteredTopics = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const list: { key: string; label: string; group: string; categoryId: string; slideCount: number; isCustom?: boolean }[] = [];

    // Add custom dossiers first
    Object.entries(customDossiers).forEach(([key, val]) => {
      if (selectedCategory !== "all" && val.category !== selectedCategory) return;
      if (!query || val.label.toLowerCase().includes(query) || key.toLowerCase().includes(query)) {
        list.push({
          key,
          label: `⭐ ${val.label}`,
          group: "User Dossier",
          categoryId: val.category,
          slideCount: val.slides.length,
          isCustom: true,
        });
      }
    });

    TOPIC_GROUPS.forEach(group => {
      if (selectedCategory !== "all" && group.id !== selectedCategory) {
        return;
      }

      group.keys.forEach(k => {
        if (!availableSet.has(k)) return;
        const label = TOPIC_LABELS[k] || k;
        if (!query || label.toLowerCase().includes(query) || k.toLowerCase().includes(query)) {
          if (!list.some(item => item.key === k)) {
            list.push({
              key: k,
              label,
              group: group.label,
              categoryId: group.id,
              slideCount: getTopicSlideCount(k),
            });
          }
        }
      });
    });

    return list;
  }, [searchQuery, selectedCategory, availableSet, customDossiers]);

  // Social Copy Generation
  const socialCopy = useMemo(() => {
    // If viewing the synthesized Substack article, use its tailored social copy
    if (substackArticle && selectedPreset === substackArticle.id) {
      return substackArticle.socialCopy;
    }

    const title = customDossiers[selectedPreset]?.label || TOPIC_LABELS[selectedPreset] || selectedPreset;
    const hooks = VIRAL_HOOKS[selectedPreset] || {
      contrarian: `The conventional narrative around ${title} is broken. Here is what institutions are seeing.`,
      pain: `Are you still positioning for last year's macro cycle? You're exposed to ${title}.`,
      aspirational: `The Institutional Playbook: How top allocators are navigating ${title}.`
    };

    // Instagram / LinkedIn Caption
    const igCaption = `${hooks.contrarian}\n\n` +
      `Here is our institutional teardown on ${title}:\n\n` +
      slides.slice(0, 4).map((s, idx) => {
        const h = s.heading ? `${s.heading}${s.headingAccent ? " " + s.headingAccent : ""}` : `Inflection 0${idx + 1}`;
        const sub = s.subheading || s.insightBox || s.body || (s.bullets && s.bullets[0]) || "Strategic metric breakdown";
        return `▫️ Slide 0${idx + 1}: ${h} — ${sub}`;
      }).join("\n") +
      `\n\n📌 Strategic Takeaway:\n${slides[slides.length - 1]?.insightBox || slides[slides.length - 1]?.subheading || "Review portfolio positioning and asymmetric risk-reward profiles."}\n\n` +
      `🔖 Save this dossier for your next investment committee review.\n` +
      `👉 Follow @${brandHandle} for daily institutional research.\n\n` +
      `#MacroEconomics #FinancialMarkets #EquityResearch #Investing #HedgeFund #CapitalMarkets #WealthCreation #MacroEdge`;

    // Twitter Thread
    const slide0H = slides[0]?.heading ? `${slides[0].heading} ${slides[0].headingAccent || ""}` : title;
    const slide1H = slides[1]?.heading ? `${slides[1].heading} ${slides[1].headingAccent || ""}` : "The Core Matrix";
    const lastTakeaway = slides[slides.length - 1]?.insightBox || slides[slides.length - 1]?.subheading || "Position defensively in hard moats.";

    const xThread = [
      `1/6 🧵 ${hooks.contrarian}\n\nInstitutional deep-dive on ${title} with full data matrices:\n\n👇`,
      `2/6 📊 01: THE CORE INFLECTION\n\n${slide0H}\n\n${slides[0]?.subheading || ""}\n\nKey finding: ${slides[0]?.insightBox || "Capital concentration accelerating across high-conviction assets."}`,
      `3/6 ⚡ 02: THE VALUATION DYNAMICS\n\n${slide1H}\n\n${slides[1]?.bullets?.slice(0, 3).map(b => `• ${b}`).join("\n") || slides[1]?.subheading || "Multiples expanding beyond historical fundamentals."}`,
      `4/6 ⚖️ 03: BULL VS BEAR RISKS\n\nBull: Accelerating capex deployment + sovereign demand surge\nBear: Margin compression + liquidity tightening`,
      `5/6 🎯 04: THE CATALYST HORIZON\n\nWatch upcoming central bank disclosures, earnings revisions, and capex cycles over the next 2-3 quarters.`,
      `6/6 🏁 SUMMARY & POSITIONING\n\n${lastTakeaway}\n\nRetweet Tweet 1 if this added clarity, and follow @${brandHandle} for institutional teardowns.`
    ].join("\n\n---\n\n");

    return {
      hooks,
      igCaption,
      xThread,
    };
  }, [selectedPreset, slides, brandHandle, customDossiers]);

  // Handle single slide edit save
  const handleSaveSlideEdit = (updatedSlide: SlideData, index: number) => {
    const updated = [...slides];
    updated[index] = updatedSlide;
    setSlides(updated);

    // If it's a custom dossier, persist in state
    if (customDossiers[selectedPreset]) {
      setCustomDossiers(prev => ({
        ...prev,
        [selectedPreset]: {
          ...prev[selectedPreset],
          slides: updated,
        },
      }));
    }
  };

  // Handle custom dossier creation
  const handleCreateCustomDossier = (newTopic: { key: string; label: string; category: string; slides: SlideData[] }) => {
    setCustomDossiers(prev => ({
      ...prev,
      [newTopic.key]: {
        label: newTopic.label,
        category: newTopic.category,
        slides: newTopic.slides,
      },
    }));
    setSelectedPreset(newTopic.key);
    setSlides(newTopic.slides);
  };

  // Handle WSJ Article Dual-Engine Synthesis
  const handleSynthesizeArticle = (article: SubstackResearchArticle) => {
    setSubstackArticle(article);
    setCustomDossiers(prev => ({
      ...prev,
      [article.id]: {
        label: `📰 ${article.title.length > 40 ? article.title.slice(0, 38) + "..." : article.title}`,
        category: "macro",
        slides: article.slides,
      },
    }));
    setSelectedPreset(article.id);
    setSlides(article.slides);
    setRightTab("substack");
    setIsWsjIntakeOpen(false);
  };

  // Export handlers
  const handleExportZip = async () => {
    setIsExportMenuOpen(false);
    setExportProgress({ isExporting: true, message: "Initiating ZIP bundle...", current: 0, total: slides.length });
    try {
      await exportCarouselToZip({
        handle: brandHandle,
        topicKey: effectiveTopic,
        topicTitle: TOPIC_LABELS[effectiveTopic] || effectiveTopic,
        igCaption: socialCopy.igCaption,
        xThread: socialCopy.xThread,
        onProgress: (current, total, message) => {
          setExportProgress({ isExporting: true, message, current, total });
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setExportProgress({ isExporting: false, message: "", current: 0, total: 0 }), 1000);
    }
  };

  const handleExportPdf = async () => {
    setIsExportMenuOpen(false);
    setExportProgress({ isExporting: true, message: "Rendering LinkedIn PDF document...", current: 0, total: slides.length });
    try {
      await exportCarouselToPdf({
        handle: brandHandle,
        topicKey: effectiveTopic,
        topicTitle: TOPIC_LABELS[effectiveTopic] || effectiveTopic,
        igCaption: socialCopy.igCaption,
        xThread: socialCopy.xThread,
        onProgress: (current, total, message) => {
          setExportProgress({ isExporting: true, message, current, total });
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setTimeout(() => setExportProgress({ isExporting: false, message: "", current: 0, total: 0 }), 1000);
    }
  };

  const downloadSingleSlide = async (index: number) => {
    const element = document.querySelectorAll(".slide-capture-node")[index];
    if (!element) return;
    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(element as HTMLElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${brandHandle}_${effectiveTopic}_slide_${String(index + 1).padStart(2, "0")}.png`;
      link.click();
    } catch (e) {
      console.error(e);
    }
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1.5px",
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 8,
  };

  return (
    <div style={{ height: "100vh", maxHeight: "100vh", background: "#050608", color: "#FFF", display: "flex", flexDirection: "column", overflow: "hidden", fontFamily: "'Space Grotesk', -apple-system, sans-serif" }}>
      {/* Studio 2.0 Global Top Navigation */}
      <header style={{ 
        height: 60, 
        borderBottom: "1px solid rgba(255,255,255,0.07)", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "space-between", 
        padding: "0 24px", 
        background: "#08090C", 
        zIndex: 20 
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ 
            width: 32, 
            height: 32, 
            borderRadius: 8, 
            background: theme.primary, 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            color: "#000", 
            fontWeight: 900,
            fontSize: 15,
            boxShadow: `0 0 16px ${theme.primary}66`
          }}>M</div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h1 style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.5px", margin: 0 }}>MacroEdge Studio</h1>
              <span style={{ 
                fontSize: 9, 
                fontWeight: 800, 
                letterSpacing: 1, 
                color: theme.primary, 
                background: `${theme.primary}18`, 
                padding: "2px 6px", 
                borderRadius: 4, 
                border: `1px solid ${theme.primary}33` 
              }}>2.0 PRO</span>
            </div>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", margin: "1px 0 0" }}>Institutional Intelligence Workstation</p>
          </div>
        </div>

        {/* Center: Brand Handle Customizer & Active Dossier Indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Brand Handle Customizer */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "4px 12px",
          }}>
            <AtSign size={12} color={theme.primary} />
            {isEditingHandle ? (
              <input
                type="text"
                value={brandHandle}
                onChange={(e) => setBrandHandle(e.target.value.replace(/[^a-zA-Z0-9_]/g, ""))}
                onBlur={() => setIsEditingHandle(false)}
                onKeyDown={(e) => e.key === "Enter" && setIsEditingHandle(false)}
                autoFocus
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#FFF",
                  fontSize: 11,
                  fontWeight: 700,
                  outline: "none",
                  width: 110,
                }}
              />
            ) : (
              <span
                onClick={() => setIsEditingHandle(true)}
                title="Click to customize brand handle"
                style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.85)", cursor: "pointer" }}
              >
                {brandHandle}
              </span>
            )}
          </div>

          {/* Active topic indicator */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 10,
            background: "rgba(255,255,255,0.03)", 
            padding: "5px 14px", 
            borderRadius: 20, 
            border: "1px solid rgba(255,255,255,0.06)",
            maxWidth: 380
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: theme.primary, boxShadow: `0 0 8px ${theme.primary}` }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.9)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {customDossiers[effectiveTopic]?.label || TOPIC_LABELS[effectiveTopic] || effectiveTopic}
            </span>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: 8 }}>
              {slides.length} slides
            </span>
          </div>
        </div>

        {/* Top Right Actions: WSJ Intake + Content Calendar + Export Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* WSJ Daily Intake & Substack Button */}
          <button
            onClick={() => setIsWsjIntakeOpen(true)}
            style={{
              background: `linear-gradient(135deg, ${theme.primary}25, ${theme.primary}48)`,
              color: "#FFF",
              border: `1px solid ${theme.primary}77`,
              borderRadius: 8,
              padding: "7px 13px",
              fontSize: 11,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: 7,
              cursor: "pointer",
              boxShadow: `0 0 16px ${theme.primary}25`,
              transition: "all 0.2s ease"
            }}
          >
            <BookOpen size={13} color={theme.primary} />
            <span>WSJ Daily Intake</span>
            <span style={{
              fontSize: 9,
              fontWeight: 800,
              background: theme.primary,
              color: theme.darkText || "#000",
              padding: "1px 5px",
              borderRadius: 4
            }}>
              DUAL
            </span>
          </button>

          {/* Calendar Button */}
          <button
            onClick={() => setIsPublishingQueueOpen(true)}
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#FFF",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "7px 12px",
              fontSize: 11,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >
            <Calendar size={13} color={theme.primary} />
            Publishing Queue
          </button>

          {/* Export Dropdown Trigger */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setIsExportMenuOpen(!isExportMenuOpen)}
              disabled={exportProgress.isExporting || !generated}
              style={{
                background: theme.primary,
                color: "#000",
                border: "none",
                borderRadius: 8,
                padding: "7px 16px",
                fontSize: 11,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                boxShadow: `0 0 20px ${theme.primary}55`,
                opacity: exportProgress.isExporting ? 0.7 : 1,
              }}
            >
              {exportProgress.isExporting ? <RefreshCw className="animate-spin" size={13} /> : <Download size={13} />}
              {exportProgress.isExporting ? "Exporting..." : "Export Package"}
              <ChevronDown size={12} />
            </button>

            {/* Dropdown Menu */}
            {isExportMenuOpen && (
              <div style={{
                position: "absolute",
                right: 0,
                top: "calc(100% + 8px)",
                width: 250,
                background: "#0E1017",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10,
                boxShadow: "0 16px 36px rgba(0,0,0,0.8)",
                padding: 6,
                zIndex: 50,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}>
                <button
                  onClick={handleExportZip}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "9px 12px",
                    borderRadius: 6,
                    color: "#FFF",
                    fontSize: 11,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                >
                  <Package size={14} color={theme.primary} />
                  <div>
                    <div>1-Click .ZIP Bundle</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>2X PNGs + Caption + Thread + Meta</div>
                  </div>
                </button>

                <button
                  onClick={handleExportPdf}
                  style={{
                    background: "none",
                    border: "none",
                    padding: "9px 12px",
                    borderRadius: 6,
                    color: "#FFF",
                    fontSize: 11,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                >
                  <FileDown size={14} color={theme.primary} />
                  <div>
                    <div>LinkedIn Document (.PDF)</div>
                    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>Multi-page 4:5 document carousel</div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Export Progress Bar Banner */}
      {exportProgress.isExporting && (
        <div style={{
          background: `${theme.primary}22`,
          borderBottom: `1px solid ${theme.primary}55`,
          padding: "8px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#FFF",
          fontWeight: 700,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <RefreshCw size={13} className="animate-spin" color={theme.primary} />
            <span>{exportProgress.message}</span>
          </div>
          <span style={{ fontFamily: "monospace", color: theme.primary }}>
            {exportProgress.current} / {exportProgress.total}
          </span>
        </div>
      )}

      {/* 3-PANE WORKSPACE */}
      <main style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        
        {/* ========================================================= */}
        {/* PANE 1: LEFT SIDEBAR - SEARCHABLE DOSSIER LIBRARY */}
        {/* ========================================================= */}
        <aside style={{ 
          width: 330, 
          background: "#08090C", 
          borderRight: "1px solid rgba(255,255,255,0.07)", 
          display: "flex", 
          flexDirection: "column",
          flexShrink: 0
        }}>
          {/* Library Header & Search Bar */}
          <div style={{ padding: "16px 16px 12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={labelStyle}>Intel Dossier Archive</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <button
                  onClick={() => setIsWsjIntakeOpen(true)}
                  title="WSJ Daily Intelligence Intake"
                  style={{
                    background: `${theme.primary}18`,
                    color: theme.primary,
                    border: `1px solid ${theme.primary}44`,
                    borderRadius: 6,
                    padding: "3px 8px",
                    fontSize: 10,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                  }}
                >
                  <BookOpen size={11} /> WSJ
                </button>
                <button
                  onClick={() => setIsNewDossierOpen(true)}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 6,
                    padding: "3px 8px",
                    fontSize: 10,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    cursor: "pointer",
                  }}
                >
                  <Plus size={11} /> New
                </button>
              </div>
            </div>

            {/* Search Input Box */}
            <div style={{ position: "relative" }}>
              <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)" }} />
              <input
                type="text"
                placeholder="Search dossiers, tickers, macro..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  background: "#0E1017",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 8,
                  padding: "9px 32px 9px 34px",
                  fontSize: 12,
                  color: "#FFF",
                  outline: "none",
                  transition: "border 0.2s",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: 0 }}
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div style={{ 
              display: "flex", 
              gap: 6, 
              overflowX: "auto", 
              marginTop: 10, 
              paddingBottom: 4,
              scrollbarWidth: "none"
            }}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    whiteSpace: "nowrap",
                    padding: "5px 10px",
                    borderRadius: 6,
                    fontSize: 10,
                    fontWeight: selectedCategory === cat.id ? 700 : 500,
                    background: selectedCategory === cat.id ? `${theme.primary}20` : "rgba(255,255,255,0.03)",
                    border: `1px solid ${selectedCategory === cat.id ? theme.primary : "rgba(255,255,255,0.06)"}`,
                    color: selectedCategory === cat.id ? theme.primary : "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dossiers List */}
          <div style={{ flex: 1, overflowY: "auto", padding: "10px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
            {filteredTopics.length === 0 ? (
              <div style={{ padding: "40px 16px", textAlign: "center", color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
                No dossiers match your search.
              </div>
            ) : (
              filteredTopics.map(item => {
                const isSelected = selectedPreset === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setSelectedPreset(item.key)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "10px 12px",
                      borderRadius: 8,
                      background: isSelected 
                        ? "linear-gradient(90deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)" 
                        : "transparent",
                      border: isSelected ? `1px solid ${theme.primary}88` : "1px solid transparent",
                      boxShadow: isSelected ? `0 0 16px -4px ${theme.primary}44` : "none",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      transition: "all 0.15s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                      <span style={{ 
                        fontSize: 12, 
                        fontWeight: isSelected ? 800 : 600, 
                        color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.85)", 
                        lineHeight: 1.3 
                      }}>
                        {item.label}
                      </span>
                      {isSelected && (
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: theme.primary, flexShrink: 0, boxShadow: `0 0 6px ${theme.primary}` }} />
                      )}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, color: "rgba(255,255,255,0.4)" }}>
                      <span style={{ color: isSelected ? theme.primary : "inherit" }}>{item.group}</span>
                      <span>•</span>
                      <span>{item.slideCount} slides</span>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* ========================================================= */}
        {/* PANE 2: CENTER STAGE - PREVIEW & GRID MATRIX */}
        {/* ========================================================= */}
        <section style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          background: "#050608", 
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          overflow: "hidden"
        }}>
          {/* Stage Controls Toolbar */}
          <div style={{ 
            height: 52, 
            borderBottom: "1px solid rgba(255,255,255,0.07)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            padding: "0 24px", 
            background: "rgba(8,9,12,0.85)",
            backdropFilter: "blur(12px)",
            zIndex: 10
          }}>
            {/* Stage Left Controls: View Mode & Color Mode */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* View Mode Toggle: Carousel vs Grid */}
              <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#0E1017", padding: 3, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => setViewMode("carousel")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 12px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    background: viewMode === "carousel" ? `${theme.primary}25` : "transparent",
                    color: viewMode === "carousel" ? theme.primary : "rgba(255,255,255,0.5)",
                    border: viewMode === "carousel" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  <Smartphone size={13} />
                  Carousel View
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "5px 12px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    background: viewMode === "grid" ? `${theme.primary}25` : "transparent",
                    color: viewMode === "grid" ? theme.primary : "rgba(255,255,255,0.5)",
                    border: viewMode === "grid" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  <LayoutGrid size={13} />
                  Grid Matrix ({slides.length})
                </button>
              </div>

              {/* Color Mode Switcher */}
              <div style={{ display: "flex", alignItems: "center", gap: 3, background: "#0E1017", padding: 3, borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  onClick={() => setColorMode("light")}
                  title="Force Light Editorial Mode (FT salmon, HBR minimalist, Stripe clean white)"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "5px 10px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    background: colorMode === "light" ? `${theme.primary}25` : "transparent",
                    color: colorMode === "light" ? theme.primary : "rgba(255,255,255,0.5)",
                    border: colorMode === "light" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  <Sun size={12} />
                  Light
                </button>
                <button
                  onClick={() => setColorMode("auto")}
                  title="Auto-detect mode from selected theme"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "5px 10px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    background: colorMode === "auto" ? `${theme.primary}25` : "transparent",
                    color: colorMode === "auto" ? theme.primary : "rgba(255,255,255,0.5)",
                    border: colorMode === "auto" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  Auto
                </button>
                <button
                  onClick={() => setColorMode("dark")}
                  title="Force Dark Obsidian Mode"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    padding: "5px 10px",
                    borderRadius: 6,
                    fontSize: 11,
                    fontWeight: 700,
                    background: colorMode === "dark" ? `${theme.primary}25` : "transparent",
                    color: colorMode === "dark" ? theme.primary : "rgba(255,255,255,0.5)",
                    border: colorMode === "dark" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  <Moon size={12} />
                  Dark
                </button>
              </div>
            </div>

            {/* Quick Action: Edit Slide Button */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                onClick={() => setEditingSlideIndex(0)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  cursor: "pointer",
                }}
              >
                <Edit3 size={11} color={theme.primary} />
                Live Edit Slide
              </button>

              {/* Slide Count Selector Quick Chips */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "1px" }}>DENSITY:</span>
                <div style={{ display: "flex", gap: 4 }}>
                  {SLIDE_COUNT_OPTIONS.map((n) => (
                    <button
                      key={n}
                      onClick={() => {
                        setSlideCount(n);
                        handleGenerate(n);
                      }}
                      style={{
                        padding: "4px 8px",
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 700,
                        background: slideCount === n ? `${theme.primary}22` : "rgba(255,255,255,0.03)",
                        border: "1px solid",
                        borderColor: slideCount === n ? theme.primary : "rgba(255,255,255,0.08)",
                        color: slideCount === n ? theme.primary : "rgba(255,255,255,0.5)",
                        cursor: "pointer",
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stage Viewport Area */}
          <div id="stage-viewport" style={{ flex: 1, overflowY: "auto", padding: "40px 24px 80px" }}>
            {isGenerating ? (
              <div style={{ marginTop: 160, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", border: `3px solid ${theme.primary}22`, borderTopColor: theme.primary, animation: "spin 0.8s linear infinite" }} />
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: 2, fontWeight: 700 }}>SYNTHESIZING INSTITUTIONAL MATRICES...</div>
              </div>
            ) : viewMode === "carousel" ? (
              /* Single Swiper Carousel View */
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
                <div style={{ textAlign: "center" }}>
                  <span style={{ 
                    fontSize: 10, 
                    fontWeight: 800, 
                    color: theme.primary, 
                    letterSpacing: 2, 
                    background: `${theme.primary}15`, 
                    padding: "3px 10px", 
                    borderRadius: 6, 
                    border: `1px solid ${theme.primary}33` 
                  }}>
                    HIGH EXPOSURE LIQUID GLASS
                  </span>
                  <h3 style={{ fontSize: 20, margin: "12px 0 4px", color: "#FFF", fontWeight: 800 }}>
                    {customDossiers[effectiveTopic]?.label || TOPIC_LABELS[effectiveTopic] || effectiveTopic}
                  </h3>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", margin: 0 }}>
                    Swipe horizontally or use dots below to inspect each slide.
                  </p>
                </div>

                <div className="slide-capture-node">
                  <CarouselPreview 
                    slides={slides} 
                    theme={theme} 
                    handle={brandHandle} 
                    topic={effectiveTopic} 
                    isGlassMode={glassMode} 
                    colorModeOverride={colorMode}
                  />
                </div>
              </div>
            ) : (
              /* Grid Matrix View */
              <div style={{ width: "100%", maxWidth: "1500px", margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 30 }}>
                  <div>
                    <h4 style={{ fontSize: 18, fontWeight: 800, margin: 0 }}>Institutional Matrix View</h4>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", margin: "4px 0 0" }}>High-velocity inspection of all {slides.length} slides. Hover any slide to edit or download.</p>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      onClick={handleExportZip}
                      style={{
                        background: `${theme.primary}20`,
                        border: `1px solid ${theme.primary}55`,
                        borderRadius: 8,
                        padding: "8px 16px",
                        fontSize: 11,
                        fontWeight: 800,
                        color: theme.primary,
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: "pointer"
                      }}
                    >
                      <Package size={14} />
                      Download .ZIP Pack
                    </button>
                    <button
                      onClick={handleExportPdf}
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: 8,
                        padding: "8px 16px",
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#FFF",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        cursor: "pointer"
                      }}
                    >
                      <FileDown size={14} />
                      LinkedIn PDF
                    </button>
                  </div>
                </div>

                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", 
                  gap: "48px 32px",
                  justifyItems: "center"
                }}>
                  {slides.map((slide, i) => (
                    <div 
                      key={i} 
                      className="slide-capture-node" 
                      style={{ 
                        position: "relative", 
                        transform: "scale(0.85)", 
                        transformOrigin: "top center",
                        marginBottom: "-75px"
                      }} 
                      onMouseEnter={() => setHoveredSlide(i)} 
                      onMouseLeave={() => setHoveredSlide(null)}
                    >
                      <Slide 
                        slide={slide} 
                        index={i} 
                        total={slides.length} 
                        theme={theme} 
                        handle={brandHandle} 
                        isGlassMode={glassMode} 
                        colorModeOverride={colorMode}
                      />

                      {/* Per-slide Hover Actions: Edit + Download */}
                      <div
                        style={{
                          position: "absolute",
                          top: 16,
                          right: -16,
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          opacity: hoveredSlide === i ? 1 : 0,
                          transform: hoveredSlide === i ? "translateX(0)" : "translateX(-8px)",
                          transition: "all 0.25s ease",
                          zIndex: 5
                        }}
                      >
                        <button 
                          onClick={() => setEditingSlideIndex(i)}
                          title="Edit this slide content"
                          style={{ 
                            width: 44, 
                            height: 44, 
                            borderRadius: 10, 
                            background: "#0E1017", 
                            border: `1px solid ${theme.primary}88`, 
                            color: theme.primary, 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            cursor: "pointer", 
                            boxShadow: "0 8px 24px rgba(0,0,0,0.8)" 
                          }}
                        >
                          <Edit3 size={16} />
                        </button>

                        <button 
                          onClick={() => downloadSingleSlide(i)} 
                          title="Download PNG"
                          style={{ 
                            width: 44, 
                            height: 44, 
                            borderRadius: 10, 
                            background: "#0E1017", 
                            border: "1px solid rgba(255,255,255,0.15)", 
                            color: "#FFF", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            cursor: "pointer", 
                            boxShadow: "0 8px 24px rgba(0,0,0,0.8)" 
                          }}
                        >
                          <Download size={16} />
                        </button>
                      </div>

                      <div style={{ position: "absolute", left: -36, top: "50%", transform: "translateY(-50%) rotate(-90deg)", fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.2)", letterSpacing: 3 }}>
                        SLIDE {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* PANE 3: RIGHT SIDEBAR - STYLE INSPECTOR & SOCIAL COPY HUB */}
        {/* ========================================================= */}
        <aside style={{ 
          width: 350, 
          background: "#08090C", 
          borderLeft: "1px solid rgba(255,255,255,0.07)", 
          display: "flex", 
          flexDirection: "column",
          flexShrink: 0
        }}>
          {/* Tabs: Substack Draft vs Social Copy Hub vs Style Inspector */}
          <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "#0C0D12" }}>
            <button
              onClick={() => setRightTab("substack")}
              style={{
                flex: 1.1,
                padding: "14px 6px",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.3px",
                background: rightTab === "substack" ? "#08090C" : "transparent",
                color: rightTab === "substack" ? theme.primary : "rgba(255,255,255,0.45)",
                border: "none",
                borderBottom: rightTab === "substack" ? `2px solid ${theme.primary}` : "2px solid transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <BookOpen size={13} />
              Substack Draft
            </button>

            <button
              onClick={() => setRightTab("social")}
              style={{
                flex: 1,
                padding: "14px 6px",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.3px",
                background: rightTab === "social" ? "#08090C" : "transparent",
                color: rightTab === "social" ? theme.primary : "rgba(255,255,255,0.45)",
                border: "none",
                borderBottom: rightTab === "social" ? `2px solid ${theme.primary}` : "2px solid transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Share2 size={13} />
              Social Copy
            </button>

            <button
              onClick={() => setRightTab("style")}
              style={{
                flex: 0.9,
                padding: "14px 6px",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.3px",
                background: rightTab === "style" ? "#08090C" : "transparent",
                color: rightTab === "style" ? theme.primary : "rgba(255,255,255,0.45)",
                border: "none",
                borderBottom: rightTab === "style" ? `2px solid ${theme.primary}` : "2px solid transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
              }}
            >
              <Palette size={13} />
              Themes
            </button>
          </div>

          {/* Tab Content */}
          <div style={{ flex: 1, overflowY: "auto", padding: "18px 16px", display: "flex", flexDirection: "column", gap: 20 }}>
            {rightTab === "substack" ? (
              /* ================= SUBSTACK DRAFT & VAULT ================= */
              <SubstackViewer
                article={substackArticle}
                onOpenIntake={() => setIsWsjIntakeOpen(true)}
                theme={theme}
              />
            ) : rightTab === "social" ? (
              /* ================= SOCIAL COPY HUB ================= */
              <>
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <label style={labelStyle}>Instagram & LinkedIn Caption</label>
                    <button
                      onClick={() => copyToClipboard(socialCopy.igCaption, "caption")}
                      style={{
                        background: copiedField === "caption" ? "#10B981" : `${theme.primary}20`,
                        color: copiedField === "caption" ? "#FFF" : theme.primary,
                        border: `1px solid ${copiedField === "caption" ? "#10B981" : theme.primary}44`,
                        borderRadius: 6,
                        padding: "3px 8px",
                        fontSize: 10,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        cursor: "pointer",
                      }}
                    >
                      {copiedField === "caption" ? <Check size={11} /> : <Copy size={11} />}
                      {copiedField === "caption" ? "Copied! ✓" : "Copy Caption"}
                    </button>
                  </div>
                  <div style={{
                    background: "#0E1017",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    padding: "12px",
                    fontSize: 11,
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.85)",
                    maxHeight: 180,
                    overflowY: "auto",
                    whiteSpace: "pre-line",
                    fontFamily: "monospace"
                  }}>
                    {socialCopy.igCaption}
                  </div>
                </div>

                {/* X / Twitter Thread */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <label style={labelStyle}>X (Twitter) Thread</label>
                    <button
                      onClick={() => copyToClipboard(socialCopy.xThread, "thread")}
                      style={{
                        background: copiedField === "thread" ? "#10B981" : `${theme.primary}20`,
                        color: copiedField === "thread" ? "#FFF" : theme.primary,
                        border: `1px solid ${copiedField === "thread" ? "#10B981" : theme.primary}44`,
                        borderRadius: 6,
                        padding: "3px 8px",
                        fontSize: 10,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        cursor: "pointer",
                      }}
                    >
                      {copiedField === "thread" ? <Check size={11} /> : <Copy size={11} />}
                      {copiedField === "thread" ? "Copied! ✓" : "Copy Thread"}
                    </button>
                  </div>
                  <div style={{
                    background: "#0E1017",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    padding: "12px",
                    fontSize: 11,
                    lineHeight: 1.5,
                    color: "rgba(255,255,255,0.85)",
                    maxHeight: 180,
                    overflowY: "auto",
                    whiteSpace: "pre-line",
                    fontFamily: "monospace"
                  }}>
                    {socialCopy.xThread}
                  </div>
                </div>

                {/* Viral Hook Arsenal */}
                <div style={{ padding: "14px", background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px dashed rgba(255,255,255,0.1)" }}>
                  <label style={{ ...labelStyle, color: theme.primary, marginBottom: 12 }}>⚡ Viral Hook Arsenal</label>
                  
                  {/* Hook 1: Contrarian */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>THE CONTRARIAN</span>
                      <button
                        onClick={() => copyToClipboard(socialCopy.hooks.contrarian, "h1")}
                        style={{ background: "none", border: "none", color: copiedField === "h1" ? "#10B981" : theme.primary, fontSize: 10, fontWeight: 700, cursor: "pointer" }}
                      >
                        {copiedField === "h1" ? "Copied! ✓" : "Copy"}
                      </button>
                    </div>
                    <p style={{ margin: 0, fontSize: 11, color: "#FFF", lineHeight: 1.4 }}>
                      "{socialCopy.hooks.contrarian}"
                    </p>
                  </div>

                  {/* Hook 2: Pain Point */}
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>THE PAIN POINT</span>
                      <button
                        onClick={() => copyToClipboard(socialCopy.hooks.pain, "h2")}
                        style={{ background: "none", border: "none", color: copiedField === "h2" ? "#10B981" : theme.primary, fontSize: 10, fontWeight: 700, cursor: "pointer" }}
                      >
                        {copiedField === "h2" ? "Copied! ✓" : "Copy"}
                      </button>
                    </div>
                    <p style={{ margin: 0, fontSize: 11, color: "#FFF", lineHeight: 1.4 }}>
                      "{socialCopy.hooks.pain}"
                    </p>
                  </div>

                  {/* Hook 3: Aspirational */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>THE ASPIRATIONAL</span>
                      <button
                        onClick={() => copyToClipboard(socialCopy.hooks.aspirational, "h3")}
                        style={{ background: "none", border: "none", color: copiedField === "h3" ? "#10B981" : theme.primary, fontSize: 10, fontWeight: 700, cursor: "pointer" }}
                      >
                        {copiedField === "h3" ? "Copied! ✓" : "Copy"}
                      </button>
                    </div>
                    <p style={{ margin: 0, fontSize: 11, color: "#FFF", lineHeight: 1.4 }}>
                      "{socialCopy.hooks.aspirational}"
                    </p>
                  </div>
                </div>
              </>
            ) : (
              /* ================= STYLE & THEMES ================= */
              <>
                {/* Liquid Glass Material Toggle */}
                <div>
                  <label style={labelStyle}>Visual Material System</label>
                  <button
                    onClick={() => setGlassMode(!glassMode)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: 10,
                      background: glassMode
                        ? "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)"
                        : "rgba(255,255,255,0.03)",
                      border: `1px solid ${glassMode ? theme.primary : "rgba(255,255,255,0.08)"}`,
                      boxShadow: glassMode ? `0 0 16px -4px ${theme.primary}55, inset 0 1px 0 rgba(255,255,255,0.2)` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Sparkles size={16} color={glassMode ? theme.primary : "rgba(255,255,255,0.4)"} />
                      <span style={{ fontSize: 12, fontWeight: 700, color: glassMode ? "#FFF" : "rgba(255,255,255,0.5)" }}>
                        {glassMode ? "💎 Liquid Glass: ACTIVE" : "Classic Matte: ACTIVE"}
                      </span>
                    </div>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: 1,
                      color: glassMode ? theme.primary : "rgba(255,255,255,0.3)",
                      background: glassMode ? `${theme.primary}20` : "rgba(255,255,255,0.05)",
                      padding: "3px 8px",
                      borderRadius: 6,
                    }}>
                      {glassMode ? "ON" : "OFF"}
                    </span>
                  </button>
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", margin: "8px 0 0", lineHeight: 1.4 }}>
                    Multi-layer glassmorphism with high-exposure overhead rim lighting.
                  </p>
                </div>

                {/* Theme Selection List */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <label style={labelStyle}>Color Themes ({THEMES.length})</label>
                    <span style={{ fontSize: 10, color: theme.primary, fontWeight: 700 }}>{theme.name}</span>
                  </div>

                  {/* Theme Category Filter Pills */}
                  <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.03)", padding: 3, borderRadius: 8, marginBottom: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <button
                      onClick={() => setThemeFilter("all")}
                      style={{
                        flex: 1,
                        padding: "5px 6px",
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 700,
                        background: themeFilter === "all" ? `${theme.primary}25` : "transparent",
                        color: themeFilter === "all" ? theme.primary : "rgba(255,255,255,0.5)",
                        border: themeFilter === "all" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                        cursor: "pointer",
                      }}
                    >
                      All ({THEMES.length})
                    </button>
                    <button
                      onClick={() => setThemeFilter("light")}
                      style={{
                        flex: 1,
                        padding: "5px 6px",
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 700,
                        background: themeFilter === "light" ? `${theme.primary}25` : "transparent",
                        color: themeFilter === "light" ? theme.primary : "rgba(255,255,255,0.5)",
                        border: themeFilter === "light" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                        cursor: "pointer",
                      }}
                    >
                      ☀️ Light ({THEMES.filter(t => t.isLightDefault).length})
                    </button>
                    <button
                      onClick={() => setThemeFilter("dark")}
                      style={{
                        flex: 1,
                        padding: "5px 6px",
                        borderRadius: 6,
                        fontSize: 10,
                        fontWeight: 700,
                        background: themeFilter === "dark" ? `${theme.primary}25` : "transparent",
                        color: themeFilter === "dark" ? theme.primary : "rgba(255,255,255,0.5)",
                        border: themeFilter === "dark" ? `1px solid ${theme.primary}55` : "1px solid transparent",
                        cursor: "pointer",
                      }}
                    >
                      🌙 Dark ({THEMES.filter(t => !t.isLightDefault).length})
                    </button>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 380, overflowY: "auto" }}>
                    {filteredThemes.map((t, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setTheme(t);
                          // Auto switch color mode if currently explicitly opposite
                          if (t.isLightDefault && colorMode === "dark") {
                            setColorMode("auto");
                          } else if (!t.isLightDefault && colorMode === "light") {
                            setColorMode("auto");
                          }
                        }}
                        style={{
                          width: "100%",
                          padding: "9px 12px",
                          borderRadius: 8,
                          background: theme.name === t.name ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)",
                          border: theme.name === t.name ? `1px solid ${t.primary}` : "1px solid rgba(255,255,255,0.04)",
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          cursor: "pointer",
                          transition: "all 0.15s",
                          textAlign: "left",
                        }}
                      >
                        <div style={{ 
                          width: 14, 
                          height: 14, 
                          borderRadius: "50%", 
                          background: t.primary, 
                          boxShadow: theme.name === t.name ? `0 0 10px ${t.primary}` : "none",
                          border: t.isLightDefault ? "2px solid #FFF" : "1px solid rgba(255,255,255,0.2)" 
                        }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                          <span style={{ 
                            fontSize: 12, 
                            color: theme.name === t.name ? "#FFF" : "rgba(255,255,255,0.75)", 
                            fontWeight: theme.name === t.name ? 700 : 500 
                          }}>
                            {t.name}
                          </span>
                          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.4px" }}>
                            {t.isLightDefault ? "Editorial Newsprint / Light Canvas" : "Obsidian Dark Glass"}
                          </span>
                        </div>
                        {theme.name === t.name && (
                          <CheckCircle2 size={13} style={{ marginLeft: "auto", color: t.primary }} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Bottom Export Trigger */}
            <div style={{ marginTop: "auto", paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <button
                onClick={handleExportZip}
                disabled={exportProgress.isExporting || !generated}
                style={{
                  width: "100%",
                  background: theme.primary,
                  color: "#000",
                  border: "none",
                  borderRadius: 10,
                  padding: "14px",
                  fontSize: 13,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  cursor: "pointer",
                  boxShadow: `0 8px 32px -8px ${theme.primary}66`,
                }}
              >
                {exportProgress.isExporting ? <RefreshCw className="animate-spin" size={16} /> : <Package size={16} />}
                {exportProgress.isExporting ? "Packaging ZIP Bundle..." : "Download Full .ZIP Package"}
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* Slide In-Place Editor Modal */}
      {editingSlideIndex !== null && slides[editingSlideIndex] && (
        <SlideEditorModal
          isOpen={true}
          slide={slides[editingSlideIndex]}
          slideIndex={editingSlideIndex}
          totalSlides={slides.length}
          theme={theme}
          onClose={() => setEditingSlideIndex(null)}
          onSave={handleSaveSlideEdit}
        />
      )}

      {/* Custom Dossier Creator Modal */}
      <NewDossierModal
        isOpen={isNewDossierOpen}
        theme={theme}
        onClose={() => setIsNewDossierOpen(false)}
        onCreate={handleCreateCustomDossier}
      />

      {/* Editorial Publishing Planner Modal */}
      <PublishingQueueModal
        isOpen={isPublishingQueueOpen}
        theme={theme}
        onClose={() => setIsPublishingQueueOpen(false)}
        onSelectTopic={(topicKey) => setSelectedPreset(topicKey)}
      />

      {/* Daily WSJ-to-Substack Intelligence Intake Modal */}
      <WsjIntakeModal
        isOpen={isWsjIntakeOpen}
        theme={theme}
        onClose={() => setIsWsjIntakeOpen(false)}
        onSynthesize={handleSynthesizeArticle}
      />

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
        ::-webkit-scrollbar { width: 5px; height: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.16); }
      `}</style>
    </div>
  );
}
