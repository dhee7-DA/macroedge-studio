import React, { useState } from "react";
import { 
  X, 
  Sparkles, 
  FileText, 
  Zap, 
  Send, 
  Layers, 
  TrendingUp, 
  DollarSign, 
  Building2, 
  Globe2, 
  CheckCircle2,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { 
  WSJ_PRESETS, 
  synthesizeSubstackArticle, 
  type ArticleInput, 
  type SubstackResearchArticle 
} from "../lib/substack-synthesizer";
import type { Theme } from "../lib/themes";

interface WsjIntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSynthesize: (article: SubstackResearchArticle) => void;
  theme: Theme;
}

export function WsjIntakeModal({ isOpen, onClose, onSynthesize, theme }: WsjIntakeModalProps) {
  const [activeTab, setActiveTab] = useState<"preset" | "custom">("preset");
  const [selectedPresetIndex, setSelectedPresetIndex] = useState(0);
  
  // Custom intake form state
  const [headline, setHeadline] = useState("");
  const [rawText, setRawText] = useState("");
  const [angle, setAngle] = useState<ArticleInput["angle"]>("capex-plumbing");
  const [tickers, setTickers] = useState("MSFT, CEG, VST, AMZN");
  const [author, setAuthor] = useState("MacroEdge Research Desk");
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  if (!isOpen) return null;

  const handleSelectPreset = (index: number) => {
    setSelectedPresetIndex(index);
    const p = WSJ_PRESETS[index];
    setHeadline(p.headline);
    setRawText(p.rawText);
    setAngle(p.angle);
    setTickers(p.tickers || "");
    setAuthor(p.author || "MacroEdge Research Desk");
  };

  const handleRunSynthesize = () => {
    const input: ArticleInput = activeTab === "preset"
      ? WSJ_PRESETS[selectedPresetIndex]
      : {
          headline: headline.trim() || "WSJ Breaking Analysis: The Institutional Plumbing",
          rawText: rawText.trim() || "Recent financial reporting highlights significant inflection in capital allocation and market dynamics.",
          angle,
          tickers: tickers.trim() || "MACRO",
          author: author.trim() || "MacroEdge Research Desk",
        };

    setIsProcessing(true);
    setProcessingStep(1);

    setTimeout(() => {
      setProcessingStep(2);
      setTimeout(() => {
        setProcessingStep(3);
        setTimeout(() => {
          const article = synthesizeSubstackArticle(input);
          setIsProcessing(false);
          setProcessingStep(0);
          onSynthesize(article);
        }, 500);
      }, 500);
    }, 400);
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.85)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div style={{
        background: "#08090C",
        border: `1px solid ${theme.primary}44`,
        boxShadow: `0 24px 60px rgba(0,0,0,0.9), 0 0 30px ${theme.primary}18`,
        borderRadius: 16,
        width: "100%",
        maxWidth: 820,
        maxHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }}>
        {/* Header */}
        <div style={{
          padding: "18px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "#0D0F14",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: `linear-gradient(135deg, ${theme.primary}22, ${theme.primary}44)`,
              border: `1px solid ${theme.primary}66`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme.primary,
              boxShadow: `0 0 15px ${theme.primary}22`
            }}>
              <BookOpen size={18} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 800, color: "#FFF", letterSpacing: "-0.3px" }}>
                  Daily WSJ-to-Substack Intelligence Synthesizer
                </h3>
                <span style={{
                  fontSize: 10,
                  fontWeight: 800,
                  background: `${theme.primary}25`,
                  color: theme.primary,
                  border: `1px solid ${theme.primary}40`,
                  padding: "2px 7px",
                  borderRadius: 12,
                  letterSpacing: "0.5px"
                }}>
                  DUAL-ENGINE
                </span>
              </div>
              <p style={{ margin: "2px 0 0", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                Deconstruct surface financial news into a 1,500-word Substack memo + 7-slide Studio 2.0 carousel.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={isProcessing}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: "6px",
              color: "rgba(255,255,255,0.6)",
              cursor: "pointer"
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: "flex",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "#0A0B0E"
        }}>
          <button
            onClick={() => setActiveTab("preset")}
            style={{
              flex: 1,
              padding: "12px 16px",
              fontSize: 12,
              fontWeight: 800,
              background: activeTab === "preset" ? "#08090C" : "transparent",
              color: activeTab === "preset" ? theme.primary : "rgba(255,255,255,0.45)",
              border: "none",
              borderBottom: activeTab === "preset" ? `2px solid ${theme.primary}` : "2px solid transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8
            }}
          >
            <Zap size={14} />
            Instant WSJ Market Presets (3 Tested Stories)
          </button>

          <button
            onClick={() => setActiveTab("custom")}
            style={{
              flex: 1,
              padding: "12px 16px",
              fontSize: 12,
              fontWeight: 800,
              background: activeTab === "custom" ? "#08090C" : "transparent",
              color: activeTab === "custom" ? theme.primary : "rgba(255,255,255,0.45)",
              border: "none",
              borderBottom: activeTab === "custom" ? `2px solid ${theme.primary}` : "2px solid transparent",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8
            }}
          >
            <FileText size={14} />
            Paste Raw Article / Reporter Notes
          </button>
        </div>

        {/* Body Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 18 }}>
          {activeTab === "preset" ? (
            /* PRESET SELECTION */
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                Select Today's Breaking Financial Story:
              </div>

              {WSJ_PRESETS.map((preset, idx) => {
                const isSelected = selectedPresetIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectPreset(idx)}
                    style={{
                      padding: "16px",
                      borderRadius: 12,
                      background: isSelected ? `${theme.primary}12` : "rgba(255,255,255,0.02)",
                      border: `1px solid ${isSelected ? theme.primary : "rgba(255,255,255,0.08)"}`,
                      cursor: "pointer",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <span style={{
                            fontSize: 10,
                            fontWeight: 800,
                            padding: "2px 6px",
                            borderRadius: 4,
                            background: isSelected ? theme.primary : "rgba(255,255,255,0.1)",
                            color: isSelected ? "#000" : "#FFF",
                            textTransform: "uppercase"
                          }}>
                            {preset.angle}
                          </span>
                          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                            Tickers: <strong style={{ color: "rgba(255,255,255,0.8)" }}>{preset.tickers}</strong>
                          </span>
                        </div>
                        <h4 style={{ margin: "0 0 6px", fontSize: 14, fontWeight: 700, color: isSelected ? "#FFF" : "rgba(255,255,255,0.85)" }}>
                          {preset.headline}
                        </h4>
                        <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.5, maxHeight: 42, overflow: "hidden" }}>
                          {preset.rawText.slice(0, 180)}...
                        </p>
                      </div>
                      <div style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        border: `2px solid ${isSelected ? theme.primary : "rgba(255,255,255,0.2)"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 2
                      }}>
                        {isSelected && <div style={{ width: 10, height: 10, borderRadius: "50%", background: theme.primary }} />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* CUSTOM INTAKE FORM */
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                  WSJ Article Headline / Lead Story
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tech Giants Sign Multi-Billion Nuclear Pacts as Data Center Power Demands Surge"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0E1017",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8,
                    padding: "10px 12px",
                    color: "#FFF",
                    fontSize: 13,
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                  Pasted Article Text, Summary, or Reporter Notes
                </label>
                <textarea
                  rows={6}
                  placeholder="Paste the raw text of the WSJ article, screenshots OCR text, or your analytical notes here..."
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  style={{
                    width: "100%",
                    background: "#0E1017",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8,
                    padding: "12px",
                    color: "#FFF",
                    fontSize: 12,
                    lineHeight: 1.6,
                    outline: "none",
                    resize: "vertical"
                  }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                    Institutional Plumbing Angle
                  </label>
                  <select
                    value={angle}
                    onChange={(e) => setAngle(e.target.value as any)}
                    style={{
                      width: "100%",
                      background: "#0E1017",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8,
                      padding: "10px",
                      color: "#FFF",
                      fontSize: 12,
                      outline: "none"
                    }}
                  >
                    <option value="capex-plumbing">⚡ CapEx & Physical Infrastructure Plumbing</option>
                    <option value="liquidity-rates">📈 Macro Liquidity & Refinancing Cliff</option>
                    <option value="ma-private-equity">💼 M&A, Private Credit & Shadow Banking</option>
                    <option value="valuation-multiples">📊 Multiple Compression & Balance Sheets</option>
                    <option value="geopolitics-energy">🌍 Geopolitics, Energy & Chokepoint Physics</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                    Target Tickers (Comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. MSFT, CEG, VST, NVDA"
                    value={tickers}
                    onChange={(e) => setTickers(e.target.value)}
                    style={{
                      width: "100%",
                      background: "#0E1017",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 8,
                      padding: "10px 12px",
                      color: "#FFF",
                      fontSize: 12,
                      outline: "none"
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Processing Steps Box */}
          {isProcessing && (
            <div style={{
              padding: "16px",
              borderRadius: 10,
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${theme.primary}44`,
              display: "flex",
              flexDirection: "column",
              gap: 8
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: processingStep >= 1 ? theme.primary : "rgba(255,255,255,0.4)" }}>
                <CheckCircle2 size={15} style={{ opacity: processingStep >= 1 ? 1 : 0.4 }} />
                <span>1. Deconstructing surface headline into physical capital mechanics...</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: processingStep >= 2 ? theme.primary : "rgba(255,255,255,0.4)" }}>
                <CheckCircle2 size={15} style={{ opacity: processingStep >= 2 ? 1 : 0.4 }} />
                <span>2. Generating 7-Slide Studio 2.0 Carousel with vector chart & KPI matrix...</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: processingStep >= 3 ? theme.primary : "rgba(255,255,255,0.4)" }}>
                <CheckCircle2 size={15} style={{ opacity: processingStep >= 3 ? 1 : 0.4 }} />
                <span>3. Drafting 1,500-word subscriber-grade Substack Markdown memo & X Thread...</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div style={{
          padding: "16px 24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "#0D0F14",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
            ⚡ Outputs: <strong style={{ color: "#FFF" }}>Substack Markdown</strong> + <strong style={{ color: theme.primary }}>7-Slide Carousel</strong> + <strong style={{ color: "#FFF" }}>X Thread</strong>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button
              onClick={onClose}
              disabled={isProcessing}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                borderRadius: 8,
                padding: "8px 16px",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer"
              }}
            >
              Cancel
            </button>

            <button
              onClick={handleRunSynthesize}
              disabled={isProcessing}
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                border: "none",
                color: theme.darkText || "#000",
                borderRadius: 8,
                padding: "8px 20px",
                fontSize: 12,
                fontWeight: 800,
                cursor: isProcessing ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: `0 0 20px ${theme.primary}40`,
                opacity: isProcessing ? 0.7 : 1
              }}
            >
              <Sparkles size={14} />
              {isProcessing ? "Synthesizing Deep-Dive..." : "⚡ Synthesize Dual Intelligence"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
