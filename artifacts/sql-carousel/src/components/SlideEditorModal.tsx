import React, { useState } from "react";
import { X, Check, Sliders, Sparkles, Plus, Trash2 } from "lucide-react";
import type { SlideData, Theme, KPICard, BullBearPoint, TimelineMilestone } from "@workspace/carousel-engine";

interface SlideEditorModalProps {
  slide: SlideData;
  slideIndex: number;
  totalSlides: number;
  theme: Theme;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedSlide: SlideData, index: number) => void;
}

export function SlideEditorModal({
  slide,
  slideIndex,
  totalSlides,
  theme,
  isOpen,
  onClose,
  onSave,
}: SlideEditorModalProps) {
  if (!isOpen) return null;

  const [heading, setHeading] = useState(slide.heading || "");
  const [headingAccent, setHeadingAccent] = useState(slide.headingAccent || "");
  const [subheading, setSubheading] = useState(slide.subheading || "");
  const [tag, setTag] = useState(slide.tag || "");
  const [tagRight, setTagRight] = useState(slide.tagRight || "");
  const [body, setBody] = useState(slide.body || "");
  const [insightBox, setInsightBox] = useState(slide.insightBox || "");
  const [footnote, setFootnote] = useState(slide.footnote || "");

  // KPI state
  const [kpis, setKpis] = useState<KPICard[]>(slide.kpis ? [...slide.kpis] : []);
  
  // Gauge state
  const [gaugeMetric, setGaugeMetric] = useState(slide.valuationGauge?.metric || "");
  const [gaugeVal, setGaugeVal] = useState(slide.valuationGauge?.currentValue || "");
  const [gaugeMin, setGaugeMin] = useState(slide.valuationGauge?.bandMin || "");
  const [gaugeMax, setGaugeMax] = useState(slide.valuationGauge?.bandMax || "");
  const [gaugeZone, setGaugeZone] = useState<"cheap" | "fair" | "stretched" | "euphoric">(
    slide.valuationGauge?.zone || "stretched"
  );
  const [gaugeVerdict, setGaugeVerdict] = useState(slide.valuationGauge?.verdict || "");

  // Chart state
  const [chartMetric, setChartMetric] = useState(slide.chart?.metricName || "");
  const [chartVal, setChartVal] = useState(slide.chart?.currentValue || "");
  const [chartChange, setChartChange] = useState(slide.chart?.change || "");

  const handleSave = () => {
    const updated: SlideData = {
      ...slide,
      heading,
      headingAccent,
      subheading,
      tag,
      tagRight,
      body,
      insightBox,
      footnote,
    };

    if (slide.kpis && kpis.length > 0) {
      updated.kpis = kpis;
    }

    if (slide.valuationGauge) {
      updated.valuationGauge = {
        ...slide.valuationGauge,
        metric: gaugeMetric,
        currentValue: gaugeVal,
        bandMin: gaugeMin,
        bandMax: gaugeMax,
        zone: gaugeZone,
        verdict: gaugeVerdict,
      };
    }

    if (slide.chart) {
      updated.chart = {
        ...slide.chart,
        metricName: chartMetric,
        currentValue: chartVal,
        change: chartChange,
      };
    }

    onSave(updated, slideIndex);
    onClose();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    boxSizing: "border-box",
    background: "#0E1017",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: "8px 12px",
    fontSize: 12,
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
    marginBottom: 5,
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
        maxWidth: 680,
        maxHeight: "90vh",
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
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: theme.primary }} />
            <span style={{ fontSize: 13, fontWeight: 800, color: "#FFF" }}>
              Live Slide Editor — Slide {slideIndex + 1} of {totalSlides}
            </span>
            <span style={{ fontSize: 10, background: `${theme.primary}20`, color: theme.primary, padding: "2px 8px", borderRadius: 4, fontWeight: 700 }}>
              TYPE: {slide.type.toUpperCase()}
            </span>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Tag row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Category Tag (Left)</label>
              <input value={tag} onChange={(e) => setTag(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Badge Tag (Right)</label>
              <input value={tagRight} onChange={(e) => setTagRight(e.target.value)} style={inputStyle} />
            </div>
          </div>

          {/* Heading */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={labelStyle}>Main Heading</label>
              <input value={heading} onChange={(e) => setHeading(e.target.value)} style={inputStyle} />
            </div>
            <div>
              <label style={{ ...labelStyle, color: theme.primary }}>Accent Heading (Neon)</label>
              <input value={headingAccent} onChange={(e) => setHeadingAccent(e.target.value)} style={{ ...inputStyle, borderColor: `${theme.primary}66` }} />
            </div>
          </div>

          {/* Subheading / Body */}
          <div>
            <label style={labelStyle}>Subheading / Context</label>
            <textarea
              value={subheading}
              onChange={(e) => setSubheading(e.target.value)}
              rows={2}
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </div>

          {slide.body && (
            <div>
              <label style={labelStyle}>Slide Body (Supports ==marks==, ++pros++, ##data##)</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
          )}

          {/* KPI Editor */}
          {slide.kpis && kpis.length > 0 && (
            <div style={{ padding: 14, background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px dashed rgba(255,255,255,0.1)" }}>
              <label style={{ ...labelStyle, color: theme.primary }}>Edit KPI Cards ({kpis.length})</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {kpis.map((kpi, ki) => (
                  <div key={ki} style={{ background: "#0E1017", padding: 10, borderRadius: 8, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <input
                      placeholder="Label"
                      value={kpi.label}
                      onChange={(e) => {
                        const copy = [...kpis];
                        copy[ki] = { ...copy[ki], label: e.target.value };
                        setKpis(copy);
                      }}
                      style={{ ...inputStyle, marginBottom: 6, fontSize: 11 }}
                    />
                    <div style={{ display: "flex", gap: 6 }}>
                      <input
                        placeholder="Value"
                        value={kpi.value}
                        onChange={(e) => {
                          const copy = [...kpis];
                          copy[ki] = { ...copy[ki], value: e.target.value };
                          setKpis(copy);
                        }}
                        style={{ ...inputStyle, fontWeight: 700, fontSize: 13, color: theme.primary }}
                      />
                      <input
                        placeholder="+12% YoY"
                        value={kpi.change || ""}
                        onChange={(e) => {
                          const copy = [...kpis];
                          copy[ki] = { ...copy[ki], change: e.target.value };
                          setKpis(copy);
                        }}
                        style={{ ...inputStyle, width: 80, fontSize: 11 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Valuation Gauge Editor */}
          {slide.valuationGauge && (
            <div style={{ padding: 14, background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px dashed rgba(255,255,255,0.1)" }}>
              <label style={{ ...labelStyle, color: theme.primary }}>Edit Valuation Gauge</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 8 }}>
                <div>
                  <label style={labelStyle}>Metric Name</label>
                  <input value={gaugeMetric} onChange={(e) => setGaugeMetric(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Current Value</label>
                  <input value={gaugeVal} onChange={(e) => setGaugeVal(e.target.value)} style={{ ...inputStyle, fontWeight: 700, color: theme.primary }} />
                </div>
                <div>
                  <label style={labelStyle}>Zone</label>
                  <select
                    value={gaugeZone}
                    onChange={(e) => setGaugeZone(e.target.value as any)}
                    style={{ ...inputStyle, background: "#0E1017", cursor: "pointer" }}
                  >
                    <option value="cheap">Cheap</option>
                    <option value="fair">Fair</option>
                    <option value="stretched">Stretched</option>
                    <option value="euphoric">Euphoric</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
                <div>
                  <label style={labelStyle}>Band Min (Trough)</label>
                  <input value={gaugeMin} onChange={(e) => setGaugeMin(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Band Max (Peak)</label>
                  <input value={gaugeMax} onChange={(e) => setGaugeMax(e.target.value)} style={inputStyle} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Institutional Verdict</label>
                <input value={gaugeVerdict} onChange={(e) => setGaugeVerdict(e.target.value)} style={inputStyle} />
              </div>
            </div>
          )}

          {/* Financial Chart Editor */}
          {slide.chart && (
            <div style={{ padding: 14, background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px dashed rgba(255,255,255,0.1)" }}>
              <label style={{ ...labelStyle, color: theme.primary }}>Edit Chart Headline Metrics</label>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                <div>
                  <label style={labelStyle}>Metric Name</label>
                  <input value={chartMetric} onChange={(e) => setChartMetric(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Current Value</label>
                  <input value={chartVal} onChange={(e) => setChartVal(e.target.value)} style={{ ...inputStyle, fontWeight: 700, color: theme.primary }} />
                </div>
                <div>
                  <label style={labelStyle}>Change Pill</label>
                  <input value={chartChange} onChange={(e) => setChartChange(e.target.value)} style={inputStyle} />
                </div>
              </div>
            </div>
          )}

          {/* Footnote */}
          <div>
            <label style={labelStyle}>Data Source / Footnote</label>
            <input value={footnote} onChange={(e) => setFootnote(e.target.value)} style={inputStyle} placeholder="Data Sources: Bloomberg, SEC 10-K, etc." />
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{
          padding: "16px 24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "flex-end",
          gap: 12,
          background: "#0C0D12",
        }}>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#FFF",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "9px 18px",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            style={{
              background: theme.primary,
              color: "#000",
              border: "none",
              borderRadius: 8,
              padding: "9px 24px",
              fontSize: 12,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              boxShadow: `0 0 20px ${theme.primary}55`,
            }}
          >
            <Check size={14} />
            Apply Changes to Stage
          </button>
        </div>
      </div>
    </div>
  );
}
