import type { SlideData } from "@workspace/carousel-engine";

export const SP500_PARADOX: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INTELLIGENCE BRIEFING",
    tagRight: "MARKETS × MACRO × RISK",
    heading: "S&P Near ATH.",
    headingAccent: "Nothing Makes Sense.",
    body: "Oil at $125. Fed frozen. Hormuz disrupted. Inflation sticky. And yet — the S&P 500 is trading near 7,100. Here is why the market is defying every macro signal.",
    levelBadge: "MACRO",
    topicNum: "01",
    keywords: [
      "S&P 500", "AI", "EARNINGS", "FED", "RATES", "BONDS",
      "INFLATION", "MEGA-CAP", "BREADTH", "YIELD", "NVIDIA", "BUBBLE",
    ],
    bullets: [
      "📈 S&P ~7,100",
      "🛢️ Oil at $125",
      "🏦 Fed Frozen",
      "🤖 AI Trade Alive",
      "⚠️ Breadth Breaking",
    ],
  },

  // ═══════════════════ SLIDE 2: THE PARADOX ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE PARADOX",
    heading: "The Numbers",
    headingAccent: "Don't Add Up.",
    body: "Every macro signal says markets should be falling. They are not. Here is the disconnect, in numbers.",
    features: [
      { icon: "📈", label: "S&P 500: ~7,100 (Near ATH)", description: "Sharp V-shaped rally from March lows. Index near record despite every headwind." },
      { icon: "🛢️", label: "Brent Crude: $120–126/barrel", description: "Highest since 2022. Classic recessionary signal. Markets have not blinked." },
      { icon: "🏦", label: "Fed Rate: 3.5–3.75% — On Hold", description: "Third consecutive hold. Widest FOMC dissent in 30 years. No cuts coming." },
      { icon: "💸", label: "US 10Y Yield: Rising", description: "Bond market is pricing in sticky inflation. Equity market is pricing in AI growth. Both cannot be right." },
    ],
    insightBox: "⚡ Bonds say recession. Equities say bull market. One of them is lying.",
  },

  // ═══════════════════ SLIDE 3: REASON 1 — AI ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "REASON 01",
    heading: "The AI",
    headingAccent: "Override.",
    body: "The single biggest reason the S&P is ignoring every macro warning: the AI earnings supercycle is real — and it is enormous.",
    features: [
      { icon: "🤖", label: "AI = 40–45% of S&P Market Cap", description: "Microsoft, Alphabet, Amazon, Meta, NVIDIA. Five companies carry the index." },
      { icon: "💰", label: "Earnings Beats — Quarter After Quarter", description: "Big Tech has consistently beaten estimates. Profit reality is justifying the premium valuations." },
      { icon: "🏗️", label: "CapEx Supercycle: $200B+ in 2026", description: "Hyperscalers are spending at record pace on data centres. This spending itself becomes GDP." },
      { icon: "📊", label: "AI Promise vs. Proof Debate", description: "Investors are still buying the promise. The proof — revenue from AI products — is only beginning to emerge." },
    ],
    insightBox: "🤖 The AI trade is not irrational — it is a genuine earnings story. But it is also masking everything else.",
  },

  // ═══════════════════ SLIDE 4: REASON 2 — EARNINGS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "REASON 02",
    heading: "Corporate",
    headingAccent: "Pricing Power.",
    body: "Companies are not just surviving inflation — they are profiting from it. That is the hidden engine of this bull market.",
    features: [
      { icon: "💹", label: "Margins Held Despite Cost Inflation", description: "S&P 500 companies passed higher input costs to consumers. Margins stayed intact." },
      { icon: "🛒", label: "Consumer Spending: Resilient", description: "High-income cohorts — who drive 60%+ of consumption — are insulated by the wealth effect of a rising market." },
      { icon: "📦", label: "Supply Chain Normalisation", description: "Post-2022 supply chain recovery gave companies an earnings tailwind that is still partially running." },
      { icon: "🔁", label: "The Wealth Effect Loop", description: "Rising stocks → wealthier consumers → more spending → better earnings → higher stocks." },
    ],
    insightBox: "📊 The bull market is partially self-reinforcing. The question is when the loop breaks.",
  },

  // ═══════════════════ SLIDE 5: THE BREADTH PROBLEM ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE WARNING",
    heading: "The Index Lies.",
    headingAccent: "Look at Breadth.",
    body: "The S&P 500 headline number is fine. But under the surface, most stocks are struggling. The index is a mask.",
    features: [
      { icon: "📉", label: "Average Stock vs. Index: Diverging", description: "The 'average' S&P 500 stock is underperforming the index significantly. The top 5 carry everything." },
      { icon: "⚠️", label: "Breadth Deteriorating Since March", description: "By March 2026, a significant number of stocks broke below key moving averages — while the index stayed flat." },
      { icon: "🎯", label: "65% Above 200-DMA — Then Falling", description: "February saw healthy breadth (65%+ stocks above 200-day MA). By April, that number had dropped sharply." },
      { icon: "🏗️", label: "3–4 Stocks Can Crash the Index", description: "AI mega-caps are so large, a 20% correction in just 4 names could drag the entire index into bear territory." },
    ],
    insightBox: "⚠️ A market carried by 5 stocks is not a bull market. It is a hostage situation.",
  },

  // ═══════════════════ SLIDE 6: THE BOND MARKET SIGNAL ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE REAL WARNING",
    heading: "Bonds Know",
    headingAccent: "Something.",
    body: "The bond market is flashing red. The equity market is ignoring it. In every historical cycle, one of them was right.",
    features: [
      { icon: "📈", label: "10Y Treasury Yield: Rising", description: "Higher yields = bonds pricing in persistent inflation and no Fed cuts. The opposite of what equities need." },
      { icon: "⚖️", label: "The 60/40 Portfolio Is Broken", description: "Since 2022, stocks and bonds move together in inflationary shocks. The old hedge no longer works." },
      { icon: "💵", label: "Bond Investors: Risk-Off", description: "Institutional money in bonds is pricing stagflation. Institutional money in equities is pricing AI growth." },
      { icon: "🕰️", label: "Historically: Bonds Win", description: "In 2000 and 2007, equities ignored bond signals for 6–12 months — then crashed 40–50%." },
    ],
    insightBox: "📜 The bond market has been right in every major cycle. It is worth listening to.",
    footnote: "Sources: JP Morgan Market Outlook (April 2026) & Charles Schwab Fixed Income Analysis.",
  },

  // ═══════════════════ SLIDE 7: THE THREE BEARS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE RISKS",
    heading: "What Could",
    headingAccent: "Break It?",
    body: "The S&P can stay irrational longer than you can stay solvent. But three specific triggers could end this rally fast.",
    features: [
      { icon: "🛢️", label: "Oil Shock Acceleration", description: "If Hormuz fully closes and Brent hits $150+, corporate margins collapse and consumer spending freezes." },
      { icon: "🤖", label: "AI Earnings Miss", description: "OpenAI already missed internal revenue targets. If Microsoft or Alphabet guide down, the AI premium evaporates." },
      { icon: "💳", label: "Consumer Credit Cracks", description: "US credit card delinquencies are rising. If the high-income spending resilience cracks, the earnings story breaks." },
      { icon: "🏦", label: "Fed Emergency Hike", description: "If CPI re-accelerates above 5%, the Fed could be forced into emergency hikes — the true bear scenario." },
    ],
    insightBox: "🎯 Any one of these alone is manageable. All four together is a 2008-style dislocation.",
  },

  // ═══════════════════ SLIDE 8: EQUITIES VS BONDS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE ASSET CLASS WAR",
    heading: "Two Markets.",
    headingAccent: "One Economy.",
    body: "For the first time since the 1970s, equities and bonds are telling completely different stories about the same economy.",
    features: [
      { icon: "📈", label: "Equities Saying: AI Boom, Soft Landing", description: "S&P at 7,100 implies strong growth, manageable inflation, and Fed cutting later in 2026." },
      { icon: "📉", label: "Bonds Saying: Stagflation, No Cuts", description: "Rising yields and flat/inverted curve imply persistent inflation, no cuts, and slowing growth." },
      { icon: "🏆", label: "Who Has Been Right Before?", description: "Bonds correctly predicted 2022 crash. Equities correctly predicted the 2023 recovery. Both have won." },
      { icon: "⚖️", label: "The Gap Is Widening", description: "The divergence between equity and bond market pricing is at multi-decade highs. A violent convergence is coming." },
    ],
    insightBox: "⚡ The gap between what bonds and equities are pricing is unsustainable. Something has to give.",
  },

  // ═══════════════════ SLIDE 9: THE CONCENTRATION RISK ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE STRUCTURAL RISK",
    heading: "5 Stocks.",
    headingAccent: "One Index.",
    body: "The S&P 500 has never been this concentrated in its 95-year history. That is both the bull case and the biggest risk.",
    features: [
      { icon: "🏢", label: "Top 5 = 40–45% of Index Weight", description: "Apple, Microsoft, NVIDIA, Alphabet, Amazon. Never before has so much depended on so few." },
      { icon: "📉", label: "If Top 5 Fall 20% — Index Falls 8–9%", description: "Instant bear market territory from just the top names correcting — not even a recession needed." },
      { icon: "🔄", label: "Everyone Is Positioned the Same Way", description: "Hedge funds, mutual funds, 401ks — all overweight the same 5 names. When selling starts, it cascades." },
      { icon: "📊", label: "Equal-Weight S&P: -4% YTD", description: "The equal-weight S&P 500 (every stock counts equally) is actually DOWN 4% in 2026. The average stock is losing." },
    ],
    insightBox: "📊 Buy an index fund today and 45 cents of every dollar goes to just 5 companies. That is concentration risk.",
  },

  // ═══════════════════ SLIDE 10: HISTORICAL PARALLELS ═══════════════════
  {
    type: "steps",
    background: "light",
    tag: "HISTORY RHYMES",
    heading: "We Have",
    headingAccent: "Seen This Before.",
    body: "Markets that ignore macro for earnings have a pattern. The ignoring phase can last 12–18 months. Then it ends.",
    steps: [
      {
        number: "1999",
        title: "🖥️ Dot-Com: Ignored Rising Rates",
        description: "Fed hiked 6 times in 1999–2000. NASDAQ ignored it, kept rising. Then fell 78% in 30 months.",
      },
      {
        number: "2007",
        title: "🏘️ Housing: Ignored Credit Signals",
        description: "Bond credit spreads widened for 12 months before equities noticed. S&P fell 57% from Oct 2007 to March 2009.",
      },
      {
        number: "2026",
        title: "🤖 AI: Ignoring Oil + Rates + Breadth",
        description: "Same pattern. Equities focused on earnings. Bonds, oil, breadth, and FII data all flashing amber.",
      },
    ],
    insightBox: "📜 History does not repeat — but it rhymes. The question is not IF this resolves, but WHEN.",
    footnote: "Sources: Bloomberg Historical Market Data & Howland Capital Market Analysis (2026).",
  },

  // ═══════════════════ SLIDE 11: THE SCENARIOS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "WHAT HAPPENS NEXT",
    heading: "Three",
    headingAccent: "Endings.",
    body: "The paradox must resolve. Here are the three ways it ends — and what each means for your portfolio.",
    features: [
      { icon: "🟢", label: "Soft Landing (30%)", description: "Oil drops as Hormuz stabilises. Fed cuts in Q4. AI delivers real revenue. S&P grinds to 7,500+." },
      { icon: "🟡", label: "Stagflation Grind (45%)", description: "Oil stays high. Fed stays frozen. AI hype fades vs reality. S&P range-bound 6,500–7,200 for 12+ months." },
      { icon: "🔴", label: "Macro Shock (25%)", description: "AI misses + oil spike + consumer credit cracks simultaneously. S&P falls 25–35% to 5,000–5,500 range." },
    ],
    insightBox: "⚠️ The base case is a painful grind, not a crash. But the tail risk is underpriced.",
    footnote: "Sources: JP Morgan Q2 2026 Outlook & Goldman Sachs S&P 500 Scenario Analysis.",
  },

  // ═══════════════════ SLIDE 12: CTA ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "THE BOTTOM LINE",
    heading: "The Market",
    headingAccent: "Is Not Wrong. Yet.",
    body: "The S&P is near all-time highs because corporate earnings — driven by AI — are genuinely strong. But the macro environment has never been this hostile for this long without eventually winning. Stay informed. Stay positioned.",
    ctaText: "Follow @macroedge_in",
    features: [
      { icon: "📈", label: "The Level", description: "S&P ~7,100 — near ATH despite every warning signal" },
      { icon: "🤖", label: "The Engine", description: "AI mega-cap earnings carrying 45% of index weight" },
      { icon: "⚠️", label: "The Risk", description: "Breadth deteriorating, bonds flashing red, oil at $125" },
      { icon: "🎯", label: "The Call", description: "Soft landing 30% | Grind 45% | Macro shock 25%" },
    ],
  },
];
