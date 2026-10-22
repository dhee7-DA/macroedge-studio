import React, { useState } from "react";
import { X, Sparkles, Plus, FileText, Check } from "lucide-react";
import type { SlideData, Theme } from "@workspace/carousel-engine";

interface NewDossierModalProps {
  isOpen: boolean;
  theme: Theme;
  onClose: () => void;
  onCreate: (newTopic: {
    key: string;
    label: string;
    category: string;
    slides: SlideData[];
  }) => void;
}

const TEMPLATES = [
  {
    id: "institutional-full",
    name: "💎 Institutional Full Stack (6 Slides)",
    desc: "Hero Cover → KPI Bento Grid → Bull vs. Bear Matrix → Financial Chart → Catalyst Timeline → CTA",
  },
  {
    id: "valuation-focus",
    name: "📊 Valuation & Multiples Teardown (5 Slides)",
    desc: "Hero Cover → Valuation Range Gauge → KPI Bento Grid → Bull vs. Bear → CTA",
  },
  {
    id: "macro-catalyst",
    name: "⚡ Macro Catalyst Roadmap (5 Slides)",
    desc: "Hero Cover → Catalyst Timeline → Financial Chart → Bull vs. Bear → CTA",
  },
];

export function NewDossierModal({ isOpen, theme, onClose, onCreate }: NewDossierModalProps) {
  if (!isOpen) return null;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("macro");
  const [selectedTemplate, setSelectedTemplate] = useState("institutional-full");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "custom-dossier";

    // Generate slides based on template
    const heroSlide: SlideData = {
      type: "hero",
      background: "dark",
      tag: category.toUpperCase() + " DOSSIER",
      tagRight: "Q4 2026",
      heading: title,
      headingAccent: "Institutional Teardown.",
      body: `An institutional deep-dive into ==${title}== covering high-conviction metrics, asymmetric risk-reward, and macro timeline inflection points.`,
      bullets: ["DATA-BACKED", "INSTITUTIONAL", "VALUATION MATRIX", "SCENARIO ANALYSIS"],
    };

    const kpiSlide: SlideData = {
      type: "kpi",
      background: "dark",
      tag: "CORE METRICS",
      tagRight: "HIGH CONVICTION",
      heading: "Key Market Multiples",
      headingAccent: "At A Glance.",
      body: "High-exposure metrics tracking underlying capital rotation.",
      kpis: [
        { label: "Annualized Run-Rate", value: "$42.5B", change: "+38% YoY", isPositive: true, badge: "GROWTH" },
        { label: "Operating Margin", value: "34.2%", change: "+240 bps", isPositive: true, badge: "EFFICIENCY" },
        { label: "FCF Conversion", value: "88.4%", change: "-120 bps", isPositive: false, badge: "CASH" },
        { label: "EV / EBITDA", value: "22.5x", change: "Fair Value", isPositive: true, badge: "MULTIPLE" },
      ],
      footnote: "Compiled from consensus sell-side estimates and financial filings.",
    };

    const bullBearSlide: SlideData = {
      type: "bullbear",
      background: "dark",
      tag: "THESIS DUALITY",
      tagRight: "RISK SPECTRUM",
      heading: "Institutional",
      headingAccent: "Bull vs. Bear Debate.",
      body: `Conflicting macroeconomic forces governing future performance of ${title}.`,
      bullBear: {
        bullTitle: "THE STRUCTURAL BULL CASE",
        bullPoints: [
          { title: "Defensible Moat", detail: "Pricing power and structural market share gains allow for sustained margin expansion." },
          { title: "Institutional Accumulation", detail: "Active accumulation by Tier-1 asset managers during cyclical drawdowns." },
        ],
        bearTitle: "THE DOWNSIDE RISKS",
        bearPoints: [
          { title: "Multiple Contraction", detail: "Broad market liquidity tightening presents downside re-rating risk." },
          { title: "Regulatory Scrutiny", detail: "Antitrust or compliance bottlenecks could impair capital return programs." },
        ],
      },
      footnote: "Risk matrix synthesized for institutional risk committees.",
    };

    const chartSlide: SlideData = {
      type: "chart",
      background: "dark",
      tag: "TRAJECTORY VECTOR",
      tagRight: "MULTI-YEAR TREND",
      heading: "Capital Inflow Velocity",
      headingAccent: "Historical Trajectory.",
      body: "Exponential acceleration in capital deployment over trailing quarters.",
      chart: {
        chartType: "area",
        metricName: "Quarterly Inflows",
        currentValue: "$18.4B",
        change: "+44.1% YoY",
        isPositive: true,
        badge: "ACCELERATING",
        subtext: "Net capital allocation across institutional accounts.",
        dataPoints: [
          { label: "Q1 '24", value: 6.2 },
          { label: "Q2 '24", value: 8.4 },
          { label: "Q3 '24", value: 11.1 },
          { label: "Q4 '24", value: 13.8 },
          { label: "Q1 '25", value: 16.2 },
          { label: "Q2 '25", value: 18.4 },
        ],
      },
      footnote: "Institutional order-flow data.",
    };

    const timelineSlide: SlideData = {
      type: "timeline",
      background: "dark",
      tag: "CATALYST SEQUENCE",
      tagRight: "2026 ROADMAP",
      heading: "Forward Horizon",
      headingAccent: "Key Inflection Points.",
      body: "Upcoming macro and regulatory catalysts that could trigger price discovery.",
      timeline: [
        { period: "PHASE 01", title: "Earnings Guidance Revision", description: "Consensus forecasts adjust for second-half margin acceleration.", highlight: true },
        { period: "PHASE 02", title: "Institutional Rebalancing", description: "Quarterly index re-weighting drives passive index inflows." },
        { period: "PHASE 03", title: "Capital Distribution Cycle", description: "Initiation of accretive share buybacks and special dividends." },
      ],
      footnote: "Scenario roadmap for systematic portfolio tracking.",
    };

    const gaugeSlide: SlideData = {
      type: "gauge",
      background: "dark",
      tag: "VALUATION BANDS",
      tagRight: "CYCLE BENCHMARK",
      heading: "Historical Multiple",
      headingAccent: "Valuation Positioning.",
      body: "Comparing current trading multiple against multi-year historical bounds.",
      valuationGauge: {
        metric: "Price / Earnings (P/E)",
        currentValue: "24.8x",
        bandMin: "15.0x (Historical Trough)",
        bandMax: "36.0x (Cycle Peak)",
        zone: "fair",
        verdict: "Trading in fair value territory relative to long-term earnings growth.",
      },
      footnote: "Trailing 12-month normalized earnings multiple.",
    };

    const ctaSlide: SlideData = {
      type: "cta",
      background: "dark",
      tag: "MACROEDGE INTELLIGENCE",
      heading: "MacroEdge",
      headingAccent: "Institutional Research.",
      body: "Institutional-grade financial intelligence delivered daily for high-conviction decision makers.",
      ctaText: "Follow @macroedge_in",
    };

    let slides: SlideData[] = [];
    if (selectedTemplate === "valuation-focus") {
      slides = [heroSlide, gaugeSlide, kpiSlide, bullBearSlide, ctaSlide];
    } else if (selectedTemplate === "macro-catalyst") {
      slides = [heroSlide, timelineSlide, chartSlide, bullBearSlide, ctaSlide];
    } else {
      slides = [heroSlide, kpiSlide, bullBearSlide, chartSlide, timelineSlide, ctaSlide];
    }

    onCreate({
      key: slug,
      label: title,
      category,
      slides,
    });

    onClose();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    background: "#0E1017",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    color: "#FFF",
    fontFamily: "inherit",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: "1px",
    color: "rgba(255,255,255,0.45)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: 6,
  };

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.8)",
      backdropFilter: "blur(10px)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    }}>
      <div style={{
        width: "100%",
        maxWidth: 580,
        background: "#08090C",
        border: `1px solid ${theme.primary}55`,
        borderRadius: 16,
        boxShadow: `0 24px 60px rgba(0,0,0,0.9), 0 0 30px ${theme.primary}22`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}>
        {/* Header */}
        <div style={{
          padding: "16px 22px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0C0D12",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Sparkles size={16} color={theme.primary} />
            <span style={{ fontSize: 14, fontWeight: 800, color: "#FFF" }}>
              Create Custom Intel Dossier
            </span>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleCreate} style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={labelStyle}>Dossier Title / Topic</label>
            <input
              type="text"
              required
              placeholder="e.g. The $100B Nuclear Renaissance"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={inputStyle}
              autoFocus
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="macro">🏗️ Macro Mega-Trends</option>
                <option value="stocks">🏢 Stock Teardowns</option>
                <option value="ai">🚀 AI Frontier</option>
                <option value="fundamentals">📊 Fundamentals</option>
                <option value="india">🇮🇳 India Intelligence</option>
                <option value="crypto">🌐 Web3 & Crypto</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Slug Preview</label>
              <div style={{ ...inputStyle, color: "rgba(255,255,255,0.4)", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis" }}>
                {title ? title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "auto-generated-slug"}
              </div>
            </div>
          </div>

          {/* Template Selection */}
          <div>
            <label style={labelStyle}>Institutional Blueprint Template</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.id}
                  type="button"
                  onClick={() => setSelectedTemplate(tmpl.id)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    background: selectedTemplate === tmpl.id ? `${theme.primary}18` : "rgba(255,255,255,0.02)",
                    border: `1px solid ${selectedTemplate === tmpl.id ? theme.primary : "rgba(255,255,255,0.06)"}`,
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: 700, color: selectedTemplate === tmpl.id ? "#FFF" : "rgba(255,255,255,0.8)" }}>
                    {tmpl.name}
                  </div>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                    {tmpl.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 10 }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "#FFF",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8,
                padding: "9px 16px",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!title.trim()}
              style={{
                background: theme.primary,
                color: "#000",
                border: "none",
                borderRadius: 8,
                padding: "9px 22px",
                fontSize: 12,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                boxShadow: `0 0 16px ${theme.primary}55`,
              }}
            >
              <Plus size={14} />
              Scaffold Dossier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
