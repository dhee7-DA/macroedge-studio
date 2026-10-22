import { SlideData } from "@workspace/carousel-engine";

export const PHOTONICS_PT1: SlideData[] = [
  // ═══════════════════ SLIDE 1: HERO ═══════════════════
  {
    type: "hero",
    background: "dark",
    tag: "DEEP TECHNOLOGY REPORT",
    tagRight: "PART I",
    heading: "The Optical",
    headingAccent: "Inflection.",
    body: "The semiconductor industry is hitting a physical limit. Silicon Photonics (Light-based chips) is the only way to scale Artificial Intelligence (AI) beyond 2026.",
    levelBadge: "TECH",
    topicNum: "OP",
  },

  // ═══════════════════ SLIDE 2: THE CRISIS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "THE TECHNICAL CRISIS",
    heading: "The Interconnect",
    headingAccent: "Wall.",
    body: "The computer (transistor) continues to shrink, but the Copper (Cu) wires carrying data cannot. We have hit the 'Interconnect Wall' (ICW).",
    features: [
      { icon: "🔥", label: "Thermal Limit", description: "Electrical resistance generates excessive heat in AI clusters." },
      { icon: "📉", label: "Signal Loss", description: "Copper integrity fails at 1.6 Terabit per second (Tbps) speeds." },
      { icon: "🔋", label: "Power Drain", description: "Electrical data movement consumes ~30% of total system energy." },
    ],
    insightBox: "💡 Fundamental Crisis: Without Photonics, the 'Power Wall' will stall the next generation of Artificial Intelligence (AI).",
  },

  // ═══════════════════ SLIDE 3: PHYSICS ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "PHYSICS 101",
    heading: "Photons vs.",
    headingAccent: "Electrons.",
    body: "Silicon Photonics (SiPh) replaces electricity with light to move data. This fundamental shift solves the primary bottleneck of modern computing.",
    steps: [
      {
        number: "01",
        title: "No Resistance",
        description: "Photons (Particles of Light) do not generate heat when traveling through optical waveguides (glass channels).",
      },
      {
        number: "02",
        title: "Speed of Light",
        description: "Optical Input/Output (I/O) provides near-zero latency, allowing thousands of GPUs to work as one massive brain.",
      },
      {
        number: "03",
        title: "Dense Pipelines",
        description: "Wavelength Division Multiplexing (WDM) allows multiple data streams to travel through a single fiber simultaneously.",
      },
    ],
  },

  // ═══════════════════ SLIDE 4: THE MULTIPLIER ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "PERFORMANCE METRICS",
    heading: "The 10x",
    headingAccent: "Multiplier.",
    body: "Silicon Photonics (SiPh) isn't just a marginal improvement. It is a generational leap in how data centers are constructed.",
    features: [
      { icon: "🚀", label: "Bandwidth Density", description: "Up to 5 Terabits per second (Tbps) per millimeter of chip edge." },
      { icon: "⚡", label: "Power Efficiency", description: "Consumes less than 2 Picojoules per bit (pJ/bit)—an 80% reduction vs. copper." },
      { icon: "📡", label: "Extended Reach", description: "Data can travel 100+ meters without loss, compared to <1 meter for copper." },
      { icon: "🎯", label: "Ultra-Low Latency", description: "Critical for Distributed Training (Splitting AI models across many chips)." },
    ],
    insightBox: "📊 Institutional Fact: 1.6 Terabit per second (Tbps) transceivers are the new 2026 industry standard for hyperscale data centers.",
  },

  // ═══════════════════ SLIDE 5: SYMBIOSIS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "TECHNICAL SYMBIOSIS",
    heading: "Lithography",
    headingAccent: "Multiplied.",
    body: "Silicon Photonics (SiPh) does not replace Lithography. It maximizes it. Advanced manufacturing is required to create optical circuits.",
    features: [
      { icon: "🛠️", label: "High-NA EUV", description: "High Numerical Aperture Extreme Ultraviolet lithography is used to print photonic waveguides." },
      { icon: "📦", label: "Advanced Packaging", description: "Co-Packaged Optics (CPO) physically integrates the laser and the processor in one box." },
      { icon: "🧬", label: "CMOS Integration", description: "Modern photonics are manufactured on the same silicon lines as traditional logic chips." },
    ],
    insightBox: "🎯 Strategic Logic: Photonics solves the 'Power Wall' so that Lithography can continue focusing on the 'Shrink Wall.'",
  },

  // ═══════════════════ SLIDE 6: COMPARISON ═══════════════════
  {
    type: "table",
    background: "light",
    tag: "SIDE-BY-SIDE ANALYSIS",
    heading: "Electronic vs.",
    headingAccent: "Photonic.",
    body: "Institutional comparison of traditional Copper (Cu) interconnects vs. Silicon Photonics (SiPh) architecture.",
    table: {
      headers: ["Metric", "Electronic (Cu)", "Photonic (SiPh)"],
      rows: [
        { cells: ["Throughput", "Slow (Gbit/s)", "Fast (Tbit/s)"], highlight: true },
        { cells: ["Heat Generation", "High (Radiated)", "Low (None)"] },
        { cells: ["Power Cost", "High (>15 pJ/b)", "Low (<2 pJ/b)"], highlight: true },
        { cells: ["Distance", "Short (<1m)", "Long (100m+)"] },
        { cells: ["Scaling", "Limited", "Unlimited"] },
      ],
      caption: "Source: IEEE (Institute of Electrical and Electronics Engineers) 2026 Reports.",
    },
  },

  // ═══════════════════ SLIDE 7: STANDARDS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "INDUSTRY STANDARDS",
    heading: "The Unified",
    headingAccent: "Fabric.",
    body: "Silicon Photonics (SiPh) relies on new interconnect standards to ensure different chips can talk to each other seamlessly.",
    features: [
      { icon: "🔗", label: "UCIe Standard", description: "Universal Chiplet Interconnect Express (UCIe) defines how chiplets communicate within a package." },
      { icon: "🛣️", label: "CXL 4.0", description: "Compute Express Link (CXL) allows for memory pooling across optical racks." },
      { icon: "🌐", label: "OpenLight Alliance", description: "Consortium of firms ensuring interoperability between integrated lasers and logic." },
    ],
    insightBox: "💡 Without standardization, Silicon Photonics would remain a proprietary 'Walled Garden' for the giants.",
  },

  // ═══════════════════ SLIDE 8: COOLING ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "DATA CENTER IMPACT",
    heading: "The Cooling",
    headingAccent: "Revolution.",
    body: "Because Photons (Particles of Light) do not generate heat, the massive cost of Data Center cooling is set to decline.",
    features: [
      { icon: "💧", label: "Liquid Cooling", description: "Current AI clusters require Direct-to-Chip Liquid Cooling (DLC) to manage heat." },
      { icon: "🌬️", label: "Optical Offload", description: "By moving data with light, we remove the primary source of 'Idle Heat' in the cluster." },
      { icon: "📉", label: "PUE Reduction", description: "Power Usage Effectiveness (PUE) metrics will drop from 1.5 to near 1.1." },
    ],
  },

  // ═══════════════════ SLIDE 9: THE SHIFT ═══════════════════
  {
    type: "steps",
    background: "dark",
    tag: "THE AI FABRIC",
    heading: "The Roadmap",
    headingAccent: "to 2030.",
    body: "The move to Silicon Photonics (SiPh) is a multi-year transition happening in three distinct institutional phases.",
    steps: [
      {
        number: "01",
        title: "Optical Transceivers",
        description: "Replacing short-distance copper cables with 800G and 1.6T optical modules (Active Now).",
      },
      {
        number: "02",
        title: "Co-Packaged Optics",
        description: "Integrating the 'Optical Engine' inside the Large Scale Processor package (2026-2027).",
      },
      {
        number: "03",
        title: "Optical Computing",
        description: "Performing calculations themselves using light-based gates (Experimental 2030+).",
      },
    ],
  },

  // ═══════════════════ SLIDE 10: RISKS ═══════════════════
  {
    type: "concept",
    background: "light",
    tag: "CRITICAL CHALLENGES",
    heading: "The Yield",
    headingAccent: "Problem.",
    body: "Despite the benefits, high-volume manufacturing of Silicon Photonics (SiPh) faces three primary institutional hurdles.",
    features: [
      { icon: "⚠️", label: "Laser Bonding", description: "Silicon cannot inherently generate light; external lasers must be bonded with high precision." },
      { icon: "⚠️", label: "Packaging Yield", description: "Manufacturing complex photonic circuits alongside logic can lower the overall chip yield." },
      { icon: "⚠️", label: "Material Sourcing", description: "Indium Phosphide (InP) and other exotic materials are expensive and hard to source." },
    ],
    insightBox: "🕵️ Analysts Watch: The first player to reach 90%+ manufacturing yield for Co-Packaged Optics (CPO) will own the market.",
  },

  // ═══════════════════ SLIDE 11: GEOPOLITICS ═══════════════════
  {
    type: "concept",
    background: "dark",
    tag: "GEOPOLITICAL ANGLE",
    heading: "The Photonic",
    headingAccent: "Race.",
    body: "Photonics is now a matter of National Security. Both the U.S. and China are racing to dominate the 'Light-Speed' Era.",
    features: [
      { icon: "🇺🇸", label: "CHIPS Act 2.0", description: "U.S. government subsidies specifically targeting 'Advanced Packaging' and SiPh research." },
      { icon: "🇨🇳", label: "Photonic China", description: "China's 'Greater Bay Area' initiative is pouring billions into domestic photonic foundries." },
      { icon: "🛡️", label: "Export Controls", description: "High-tier optical modulators are now classified as 'Dual-Use' technologies." },
    ],
  },

  // ═══════════════════ SLIDE 12: CONCLUSION ═══════════════════
  {
    type: "cta",
    background: "light",
    tag: "THE BOTTOM LINE",
    heading: "The Future",
    headingAccent: "is Light.",
    body: "Without Photonics, the AI revolution will stall. Part II of this series detailing the 'Silicon Leaderboard' is coming next.",
    ctaText: "Part II: Coming Soon",
    features: [
      { icon: "🌍", label: "Global Shift", description: "Azure, AWS, and GCP are now pivoting to optical I/O (Input/Output)." },
      { icon: "💰", label: "Capex Focus", description: "Capital Expenditure (Capex) is shifting toward optical networking gear." },
      { icon: "🔭", label: "The Alpha Play", description: "Part II breaks down the Top 10 stocks and startups in the sector." },
    ],
  },
];
