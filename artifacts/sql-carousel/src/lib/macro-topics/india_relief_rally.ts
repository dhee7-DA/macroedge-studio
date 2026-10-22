import type { SlideData } from "../carousel-types";

export const INDIA_RELIEF_RALLY: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INDIA INTELLIGENCE",
    tagRight: "AUG 2026",
    heading: "The Relief",
    headingAccent: "Rally.",
    body: "The bears just got trapped. After weeks of tariff fears and currency pressure, the ++Indian++ markets just ripped higher for a fourth consecutive session, with the Nifty surging ==1.60%==. The macro headwinds have officially broken.",
    levelBadge: "TEARDOWN",
    topicNum: "MACRO",
    keywords: ["NIFTY50", "RELIEF RALLY", "OIL", "GST", "FII"],
    bullets: [
      "📈 The 4-Day Melt-Up",
      "🛢️ The Strait of Hormuz Catalyst",
      "💸 Record ₹2 Lakh Crore GST",
      "🔄 Sector Rotation into IT",
      "🏦 The RBI's Breathing Room",
    ],
  },

  // ═══════════════════ SLIDE 2: THE CATALYST ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "MACRO DRIVER",
    heading: "The Oil",
    headingAccent: "Collapse.",
    body: "The single biggest drag on ++India's++ economy—$100 oil—just collapsed overnight.",
    features: [
      { icon: "📉", label: "The 7% Crash", description: "Brent crude violently reversed, crashing over ==7%== to trade below ==$84/bbl==." },
      { icon: "🤝", label: "The Hormuz Breakthrough", description: "Reports of back-channel diplomatic talks between the ++US++ and ++Iran++ to reopen the Strait of Hormuz triggered the massive sell-off in energy markets." },
      { icon: "💸", label: "Imported Inflation Drops", description: "For ++India++, every $10 drop in crude oil significantly reduces the current account deficit and eases imported inflation." },
    ],
    insightBox: "💡 The Reality: The geopolitical risk premium in oil just evaporated, providing massive relief to emerging markets.",
  },

  // ═══════════════════ SLIDE 3: DOMESTIC STRENGTH ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "FUNDAMENTALS",
    heading: "The Domestic",
    headingAccent: "Engine.",
    body: "The market isn't just rallying on cheap oil; domestic fundamentals are firing on all cylinders.",
    steps: [
      { number: "01", title: "Record GST Print", description: "July GST collections just smashed past the ==₹2 Lakh Crore== mark, hitting a 14-month high." },
      { number: "02", title: "Industrial Acceleration", description: "This follows data showing India's industrial production (IIP) accelerating to a 23-month high." },
      { number: "03", title: "The Decoupling", description: "While ++China++ reports shrinking factory activity and ++Germany++ stagnates, ++India's++ domestic consumption story remains structurally intact despite global volatility." },
    ],
  },

  // ═══════════════════ SLIDE 4: SECTOR ROTATION ═══════════════════
  {
    type: "pitfalls",
    background: "light",
    tag: "MARKET BREADTH",
    heading: "Follow The",
    headingAccent: "Flows.",
    body: "We are witnessing aggressive institutional rotation back into high-quality sectors.",
    pitfalls: [
      {
        title: "The IT Services Rotation",
        description: "Foreign Institutional Investors (FIIs) are pouring capital back into ##Information Technology##. Why? It's a safe-haven sector with highly visible earnings and pristine balance sheets.",
        fix: "Don't ignore the leaders. TCS and Infosys are dragging the headline indices higher."
      },
      {
        title: "PSU Bank Resurgence",
        description: "After facing heavy selling pressure last week, ##PSU Banks## caught a massive bid today. The combination of cheap valuations and dropping bond yields makes them highly attractive.",
        fix: "Watch for technical breakouts in the Nifty PSU Bank index to confirm the trend."
      }
    ],
  },

  // ═══════════════════ SLIDE 5: MONETARY POLICY ═══════════════════
  {
    type: "dosdonts",
    background: "dark",
    tag: "CENTRAL BANK DYNAMICS",
    heading: "The RBI's",
    headingAccent: "Breathing Room.",
    body: "The pressure on the central bank just evaporated right as the MPC meeting begins.",
    dos: [
      { text: "Monitor The Currency", detail: "Last week, the %%RBI%% built a ==$40B== forex swap to defend the currency. Today, the ++Rupee++ strengthened to ==95.31== against the dollar." },
      { text: "Expect A Dovish Tone", detail: "While a rate cut is unlikely this week, the sudden collapse in oil gives the MPC room to adopt a significantly more dovish, pro-growth stance in their commentary." }
    ],
    donts: [
      { text: "Don't Fight The Trend", detail: "When domestic liquidity and improving macro data align, shorting the headline index is a dangerous game." },
      { text: "Don't Ignore The Fed", detail: "The US Dollar index is declining as markets price in potential Fed rate cuts, which further supports the Rupee." }
    ],
  },

  // ═══════════════════ SLIDE 6: CTA ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE PLAYBOOK",
    heading: "The Final",
    headingAccent: "Hurdle.",
    body: "This is a structural breakout. But there is one major macro hurdle left to clear this week.",
    ctaText: "Save this Checklist",
    features: [
      { icon: "🏛️", label: "RBI MPC Commentary", description: "Watch how the governor characterizes the recent oil drop during the rate decision press conference." },
      { icon: "📈", label: "Hold The Gains", description: "The Nifty needs to hold the 24,500 level on a closing basis to confirm this isn't just a short-covering bounce." },
      { icon: "📊", label: "US Nonfarm Payrolls", description: "Friday's US labor data is the final hurdle. A 'Goldilocks' print (not too hot, not too cold) will greenlight a massive emerging market rally." },
      { icon: "🔔", label: "Stay Alert", description: "Turn on notifications. We will break down the US jobs data live on Friday." },
    ],
  },
];
