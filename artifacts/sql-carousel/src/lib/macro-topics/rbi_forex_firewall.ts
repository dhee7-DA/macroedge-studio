import type { SlideData } from "../carousel-types";

export const RBI_FOREX_FIREWALL: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "INDIA INTELLIGENCE",
    tagRight: "AUG 2026",
    heading: "The $40B",
    headingAccent: "Firewall.",
    body: "While global emerging markets bleed capital, the %%Reserve Bank of India (RBI)%% just quietly executed a masterclass in currency defense. By mobilizing ==$40.82 billion== through a concessional swap facility, they built a massive fortress around the ++Indian Rupee++.",
    levelBadge: "TEARDOWN",
    topicNum: "MACRO",
    keywords: ["RBI", "FOREX", "RUPEE", "SWAP FACILITY", "MPC"],
    bullets: [
      "🛡️ The $40.8B Swap Injection",
      "🛢️ Combating the $100 Oil Shock",
      "🏦 Defending the Rupee",
      "📉 The 5.25% Rate Hold",
      "📊 Sector Impact Analysis",
    ],
  },

  // ═══════════════════ SLIDE 2: THE CATALYST ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE THREAT",
    heading: "Why Intervene",
    headingAccent: "Now?",
    body: "The %%RBI%% didn't build a $40 billion firewall for fun. They were responding to an immediate, systemic threat to ++India's++ macroeconomic stability.",
    features: [
      { icon: "🛢️", label: "The Oil Shock", description: "With Brent Crude recently breaking ==$100==, ++India's++ import bill spiked, immediately blowing out the current account deficit." },
      { icon: "🏃‍♂️", label: "The FII Exodus", description: "The sudden ++US++ tariff escalation triggered a massive exit of Foreign Institutional Investors (FIIs) from emerging markets, draining liquidity." },
      { icon: "📉", label: "Currency Pressure", description: "The combination of high oil imports and capital flight put immense depreciation pressure on the ++Rupee++." },
    ],
    insightBox: "💡 The Reality: If the Rupee collapses, imported inflation skyrockets. The central bank had to step in aggressively.",
  },

  // ═══════════════════ SLIDE 3: THE MECHANICS ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "CENTRAL BANK PLUMBING",
    heading: "How the Swap",
    headingAccent: "Works.",
    body: "Instead of simply dumping reserves on the open market, the %%RBI%% used a highly effective 'concessional swap facility'. Here is the anatomy of the trade:",
    steps: [
      { number: "01", title: "The Agreement", description: "The %%RBI%% offers to buy dollars from commercial banks today, while simultaneously agreeing to sell those dollars back at a fixed rate in the future." },
      { number: "02", title: "The Accumulation", description: "This mechanism successfully pulled in ==$40.82 billion== by the July 31 deadline, instantly boosting India's headline forex reserves." },
      { number: "03", title: "The Defense", description: "These bolstered reserves signal to currency speculators that the %%RBI%% has unlimited firepower to crush anyone shorting the ++Rupee++." },
    ],
  },

  // ═══════════════════ SLIDE 4: THE RATE HOLD ═══════════════════
  {
    type: "pitfalls",
    background: "light",
    tag: "MONETARY POLICY",
    heading: "The 5.25%",
    headingAccent: "Hold.",
    body: "Because of the imported inflation risk (oil), the %%RBI%%’s hands are tied regarding interest rates.",
    pitfalls: [
      {
        title: "No Rate Cuts Anytime Soon",
        description: "The upcoming August MPC meeting is universally expected to hold the repo rate at ==5.25%==. A rate cut now would severely weaken the ++Rupee++ further.",
        fix: "Adjust your portfolio duration. Don't buy long-duration bonds expecting an immediate dovish pivot."
      },
      {
        title: "The Growth Constraint",
        description: "Higher rates restrict domestic corporate borrowing. However, keeping inflation anchored is the %%RBI's%% primary mandate, even if it temporarily cools economic expansion.",
        fix: "Focus on zero-debt, cash-rich companies that don't rely on cheap borrowing."
      }
    ],
  },

  // ═══════════════════ SLIDE 5: SECTOR IMPACT ═══════════════════
  {
    type: "dosdonts",
    background: "dark",
    tag: "PORTFOLIO ALLOCATION",
    heading: "The Winners &",
    headingAccent: "Losers.",
    body: "Currency intervention creates massive structural disparities across the equity market.",
    dos: [
      { text: "Banking & Financials", detail: "Domestic ##Banking## stocks benefit. The swap facility injects rupee liquidity into the banking system, supporting credit growth." },
      { text: "FMCG (Defensives)", detail: "By defending the currency, the %%RBI%% limits imported inflation, protecting the margins of ##FMCG## companies from raw material cost spikes." }
    ],
    donts: [
      { text: "Avoid Leveraged Importers", detail: "Sectors heavily reliant on imports (like ##Aviation## fuel or unhedged ##Manufacturing##) are still feeling the pain of the recent oil spike." },
      { text: "Don't Ignore FII Flows", detail: "Wait for the FII outflow data to stabilize. The RBI's actions will eventually lure foreign capital back, but the bottom takes time." }
    ],
  },

  // ═══════════════════ SLIDE 6: CTA ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE PLAYBOOK",
    heading: "The Next",
    headingAccent: "Catalyst.",
    body: "The %%RBI%% has built the fortress. Now we wait for the macro data to catch up. Here is what to monitor in August:",
    ctaText: "Save this Checklist",
    features: [
      { icon: "🏦", label: "August MPC Commentary", description: "The rate will be held at ==5.25%==, but listen closely to the governor's commentary on inflation expectations." },
      { icon: "📊", label: "Q1 GDP Print", description: "Watch the upcoming GDP data to see how well the real economy is absorbing the higher interest rate environment." },
      { icon: "📈", label: "MSCI Index Review", description: "The upcoming MSCI rebalancing will dictate billions in passive index flows into ++Indian++ equities." },
      { icon: "🔔", label: "Stay Alert", description: "Turn on notifications. We will break down the MPC commentary live as it happens." },
    ],
  },
];
