import type { SlideData } from "@workspace/carousel-engine";

export const AI_WATER_CRISIS: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "THE RESOURCE RIFT",
    tagRight: "SIGNAL: APRIL 19, 2026",
    heading: "AI’s Huge",
    headingAccent: "Water Problem.",
    body: "Intelligence has a thirst. 50 AI prompts consume roughly 500ml of water. As data centers expand, the AI revolution is colliding with global water security.",
    levelBadge: "ENVIRONMENTAL",
    topicNum: "WC1",
    bullets: ["32B Gallon Annual Demand", "Iowa/Arizona Flashpoints", "The 150% Microsoft Spike"],
  },

  // ═══════════════════ SLIDE 2: THE BOTTLE METRIC ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CONSUMPTION MATH",
    heading: "Thirsty",
    headingAccent: "Intelligence.",
    body: "Every time you chat with an LLM, water is evaporating in a data center somewhere to keep the servers cool.",
    features: [
      { icon: "🚰", label: "The Bottle Rule", description: "A conversation of 20-50 prompts consumes ~500ml of water (roughly one bottle)." },
      { icon: "💨", label: "Evaporative Cooling", description: "The most common cooling method, releasing vast amounts of water into the atmosphere." },
      { icon: "📈", label: "Scaling Effect", description: "With billions of prompts daily, the individual footprint becomes a national infrastructure crisis." },
    ],
    insightBox: "💡 Note: Training a model like GPT-5 consumed enough water to fill the cooling towers of a nuclear power plant.",
  },

  // ═══════════════════ SLIDE 3: THE 32B GALLON WALL ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "MACRO PROJECTIONS",
    heading: "The 32B",
    headingAccent: "Gallon Wall.",
    body: "By 2028, AI-related water demand in the U.S. alone is projected to hit 32 billion gallons annually.",
    features: [
      { icon: "🏢", label: "Hyperscale Density", description: "New AI data centers consume 10x more water than traditional cloud facilities." },
      { icon: "📉", label: "Supply Gap", description: "Municipal water systems in tech hubs are hitting their 2030 capacity limits in 2026." },
      { icon: "⚠️", label: "Crisis Point", description: "Water demand is now growing faster than the construction of new treatment facilities." },
    ],
    insightBox: "🎯 Strategic Signal: Water is the new 'HBM'—the physical limit that cannot be bypassed with software.",
  },

  // ═══════════════════ SLIDE 4: REGIONAL FLASHPOINTS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "GEOPOLITICAL WATER",
    heading: "The Iowa",
    headingAccent: "Standoff.",
    body: "The battle for water is local. In West Des Moines, Iowa, Microsoft’s operations forced a municipal crisis.",
    features: [
      { icon: "🌽", label: "Iowa Precedent", description: "Data centers consumed 6% of the city’s water, leading to a mandatory 'Zero-Water' cooling ban." },
      { icon: "🏜️", label: "Arizona Protests", description: "Phoenix residents are blocking new projects that compete with residential and agricultural water." },
      { icon: "🏛️", label: "Moratorium Wave", description: "12+ U.S. states have introduced bills to freeze data center construction until water audits are complete." },
    ],
    insightBox: "💡 Analysis: Data centers are becoming 'Environmental Pariahs' in water-stressed communities.",
  },

  // ═══════════════════ SLIDE 5: THE INDIRECT FOOTPRINT ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "THE HIDDEN COST",
    heading: "The Indirect",
    headingAccent: "Thirst.",
    body: "On-site cooling is only half the story. The water used to generate the electricity to run AI is the true 'Hidden Cost.'",
    features: [
      { icon: "☢️", label: "Power Generation", description: "Nuclear and fossil fuel plants require billions of gallons for steam and cooling to power AI grids." },
      { icon: "📉", label: "Multiplier Effect", description: "For every 1 gallon used at the data center, 4 gallons are consumed at the power plant." },
      { icon: "🌊", label: "Thermal Pollution", description: "Discharging hot water back into ecosystems is creating new regulatory hurdles in Europe." },
    ],
    insightBox: "🎯 Fact: Even 'Waterless' data centers have a massive water footprint at the point of energy generation.",
  },

  // ═══════════════════ SLIDE 6: THE CORPORATE RISK ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "ESG FRAGILITY",
    heading: "The 150%",
    headingAccent: "Spike.",
    body: "Microsoft’s internal projections (April 2026) show a 150% spike in water consumption by 2030 due to AI growth.",
    features: [
      { icon: "📉", label: "Target Risk", description: "Big Tech's 'Water Positive 2030' goals are becoming physically impossible to achieve." },
      { icon: "📊", label: "Replenishment Gap", description: "Companies are replenishing water in one watershed while depleting it in another." },
      { icon: "🛡️", label: "Legal Exposure", description: "Rising shareholder lawsuits over 'Sustainability Greenwashing' as consumption soars." },
    ],
    insightBox: "💡 Verdict: The AI boom is forcing a choice: Scale the intelligence or save the watershed.",
  },

  // ═══════════════════ SLIDE 7: LIQUID COOLING ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "TECHNICAL SOLUTIONS",
    heading: "Direct-to-Chip",
    headingAccent: "Cooling.",
    body: "The industry is pivoting to 'Liquid Cooling'—circulating water in a closed-loop directly over the processors.",
    features: [
      { icon: "🧪", label: "Closed-Loop", description: "Recirculating the same water for years, reducing evaporation loss by 95%." },
      { icon: "🌡️", label: "Heat Density", description: "Necessary for chips like NVIDIA Blackwell which run too hot for traditional air cooling." },
      { icon: "🏢", label: "Retrofit Crisis", description: "Old data centers cannot be easily retrofitted for liquid, creating a 'Stranded Asset' risk." },
    ],
    insightBox: "🎯 Strategic Take: The 'Liquid Cooling' supply chain (Vertiv, Eaton) is the primary beneficiary of the water crisis.",
  },

  // ═══════════════════ SLIDE 8: HEAT RECOVERY ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CIRCULAR ECONOMY",
    heading: "Data Center",
    headingAccent: "District Heating.",
    body: "In 2026, the 'Waste Heat' from AI is being repurposed to heat entire cities.",
    features: [
      { icon: "🏘️", label: "City Heating", description: "Data centers in Finland and Denmark are providing 40% of residential district heating." },
      { icon: "🥦", label: "Greenhouse Farming", description: "Using thermal discharge to power vertical farms, offsetting the environmental footprint." },
      { icon: "🔄", label: "The Synergy", description: "Turning a 'Liability' (Heat) into an 'Asset' (Utility Revenue)." },
    ],
    insightBox: "💡 Innovation: Data centers are being rebranded as 'Thermal Utilities' to win community approval.",
  },

  // ═══════════════════ SLIDE 9: RECYCLED WASTEWATER ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "REDUCED POTABILITY",
    heading: "The Effluent",
    headingAccent: "Solution.",
    body: "Hyperscalers are now using 'Treated Wastewater' (Effluent) instead of drinking water for industrial cooling.",
    features: [
      { icon: "🚽", label: "Effluent Pivot", description: "Google’s Georgia data centers now run 100% on recycled municipal wastewater." },
      { icon: "💰", label: "Cost Advantage", description: "Recycled water is 30% cheaper than potable water, but requires complex filtering." },
      { icon: "🛡️", label: "Community Goodwill", description: "Proven way to bypass moratoriums by showing zero impact on the drinking supply." },
    ],
    insightBox: "🎯 Trend: The 'Gray-to-Green' infrastructure play is the only way to scale in urban centers.",
  },

  // ═══════════════════ SLIDE 10: FUTURE FRONTIERS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "RADICAL SOLUTIONS",
    heading: "Ocean & Space",
    headingAccent: "Compute.",
    body: "If the land has no water, we leave the land. Radical infrastructure shifts for 2027-2030.",
    features: [
      { icon: "🌊", label: "Underwater Pods", description: "Microsoft's Project Natick (2.0) testing sub-sea data centers with infinite ocean cooling." },
      { icon: "🚀", label: "Orbital Compute", description: "Moving 'Cold' workloads to space where the vacuum provides natural thermal management." },
      { icon: "🧊", label: "Arctic Clusters", description: "Moving infrastructure to the poles to utilize ambient sub-zero temperatures." },
    ],
    insightBox: "💡 Forecast: The 'Geography of AI' is moving toward the Cold and the Deep.",
  },

  // ═══════════════════ SLIDE 11: INVESTOR PROXIES ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "PORTFOLIO WATCH",
    heading: "Trading the",
    headingAccent: "Thirst.",
    body: "How to position your portfolio for the 'Liquid Infrastructure' boom.",
    features: [
      { icon: "🏦", label: "Liquid Cooling ($VRT)", description: "Vertiv remains the infrastructure leader for direct-to-chip deployment." },
      { icon: "🚰", label: "Water Utilities ($AWK)", description: "American Water Works and specialized industrial filtering firms (Xylem)." },
      { icon: "🏢", label: "Thermal REITs", description: "Data center REITs with the best 'Water Use Effectiveness' (WUE) scores." },
    ],
    insightBox: "🎯 Tip: WUE (Water Use Effectiveness) is the new 'PE Ratio' for ESG-conscious institutional funds.",
  },

  // ═══════════════════ SLIDE 12: VERDICT ═══════════════════
  {
    type: "cta",
    background: "dark",
    tag: "FINAL VERDICT",
    heading: "The Blue",
    headingAccent: "Gold.",
    body: "Intelligence is finite because water is finite. The next phase of AI isn't about code—it's about the plumbing. Follow the liquid.",
    ctaText: "Follow @macroedge_in",
  },
];
