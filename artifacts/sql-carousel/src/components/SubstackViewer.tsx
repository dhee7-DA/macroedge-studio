import React, { useState } from "react";
import { 
  FileText, 
  Copy, 
  Check, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Eye, 
  Code, 
  Share2, 
  Sparkles,
  Layers,
  Clock,
  Hash
} from "lucide-react";
import type { SubstackResearchArticle } from "../lib/substack-synthesizer";
import type { Theme } from "../lib/themes";

interface SubstackViewerProps {
  article: SubstackResearchArticle | null;
  onOpenIntake: () => void;
  theme: Theme;
}

export function SubstackViewer({ article, onOpenIntake, theme }: SubstackViewerProps) {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<"formatted" | "raw">("formatted");
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!article) {
    return (
      <div style={{
        padding: "40px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        color: "rgba(255,255,255,0.5)"
      }}>
        <div style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          background: "rgba(255,255,255,0.03)",
          border: "1px dashed rgba(255,255,255,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: theme.primary
        }}>
          <BookOpen size={24} />
        </div>
        <div>
          <h4 style={{ margin: "0 0 6px", fontSize: 15, fontWeight: 700, color: "#FFF" }}>
            No Substack Article Generated Yet
          </h4>
          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.5, maxWidth: 300 }}>
            Synthesize breaking Wall Street Journal headlines into subscriber-grade Substack research.
          </p>
        </div>
        <button
          onClick={onOpenIntake}
          style={{
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
            color: theme.darkText || "#000",
            border: "none",
            borderRadius: 8,
            padding: "8px 16px",
            fontSize: 12,
            fontWeight: 800,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            boxShadow: `0 0 16px ${theme.primary}33`
          }}
        >
          <Sparkles size={14} />
          Open WSJ Intake Hub
        </button>
      </div>
    );
  }

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(article.markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    const blob = new Blob([article.markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const today = new Date().toISOString().slice(0, 10);
    link.href = url;
    link.download = `${today}-${article.id}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Top Banner & Stats */}
      <div style={{
        padding: "14px 16px",
        background: "rgba(255,255,255,0.02)",
        borderRadius: 10,
        border: `1px solid rgba(255,255,255,0.08)`,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{
            fontSize: 9,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            background: `${theme.primary}20`,
            color: theme.primary,
            padding: "2px 6px",
            borderRadius: 4
          }}>
            {article.category}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Clock size={11} /> {article.readingTime}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Hash size={11} /> {article.wordCount} words
            </span>
          </div>
        </div>

        <div>
          <h3 style={{ margin: "0 0 4px", fontSize: 14, fontWeight: 800, color: "#FFF", lineHeight: 1.4 }}>
            {article.title}
          </h3>
          <p style={{ margin: 0, fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.4 }}>
            {article.subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
          <button
            onClick={handleCopyMarkdown}
            style={{
              flex: 1,
              background: copied ? "#10B981" : `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
              color: copied ? "#FFF" : (theme.darkText || "#000"),
              border: "none",
              borderRadius: 6,
              padding: "7px 10px",
              fontSize: 11,
              fontWeight: 800,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              boxShadow: `0 0 12px ${copied ? "rgba(16,185,129,0.4)" : theme.primary + "30"}`,
              transition: "all 0.2s ease"
            }}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? "Copied Full Markdown! ✓" : "Copy for Substack"}
          </button>

          <button
            onClick={handleDownloadMarkdown}
            title="Download .md to Research Vault"
            style={{
              background: downloadSuccess ? "#10B98122" : "rgba(255,255,255,0.06)",
              color: downloadSuccess ? "#10B981" : "rgba(255,255,255,0.8)",
              border: `1px solid ${downloadSuccess ? "#10B981" : "rgba(255,255,255,0.12)"}`,
              borderRadius: 6,
              padding: "7px 10px",
              fontSize: 11,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 6
            }}
          >
            {downloadSuccess ? <Check size={12} /> : <Download size={12} />}
            {downloadSuccess ? "Saved .md! ✓" : "Save Vault"}
          </button>

          {/* Toggle Formatted vs Raw */}
          <div style={{
            display: "flex",
            background: "#08090C",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.1)",
            padding: 2
          }}>
            <button
              onClick={() => setViewMode("formatted")}
              title="Formatted Reader View"
              style={{
                background: viewMode === "formatted" ? "rgba(255,255,255,0.12)" : "transparent",
                color: viewMode === "formatted" ? "#FFF" : "rgba(255,255,255,0.4)",
                border: "none",
                borderRadius: 4,
                padding: "4px 8px",
                cursor: "pointer"
              }}
            >
              <Eye size={12} />
            </button>
            <button
              onClick={() => setViewMode("raw")}
              title="Raw Markdown View"
              style={{
                background: viewMode === "raw" ? "rgba(255,255,255,0.12)" : "transparent",
                color: viewMode === "raw" ? "#FFF" : "rgba(255,255,255,0.4)",
                border: "none",
                borderRadius: 4,
                padding: "4px 8px",
                cursor: "pointer"
              }}
            >
              <Code size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div style={{
        background: "#080A0E",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 10,
        padding: "16px",
        maxHeight: "calc(100vh - 350px)",
        overflowY: "auto",
        lineHeight: 1.6
      }}>
        {viewMode === "raw" ? (
          <pre style={{
            margin: 0,
            fontSize: 11,
            fontFamily: "monospace",
            color: "rgba(255,255,255,0.85)",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word"
          }}>
            {article.markdown}
          </pre>
        ) : (
          /* Formatted Reader View */
          <div style={{ color: "rgba(255,255,255,0.88)", fontSize: 12 }}>
            {article.markdown.split("\n\n").map((para, idx) => {
              const trimmed = para.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith("# ")) {
                return (
                  <h1 key={idx} style={{ fontSize: 18, fontWeight: 800, color: "#FFF", margin: "16px 0 8px", lineHeight: 1.3 }}>
                    {trimmed.replace("# ", "")}
                  </h1>
                );
              }
              if (trimmed.startsWith("### ")) {
                return (
                  <h3 key={idx} style={{ fontSize: 14, fontWeight: 800, color: theme.primary, margin: "18px 0 8px", borderBottom: `1px solid ${theme.primary}22`, paddingBottom: 4 }}>
                    {trimmed.replace("### ", "")}
                  </h3>
                );
              }
              if (trimmed.startsWith("#### ")) {
                return (
                  <h4 key={idx} style={{ fontSize: 13, fontWeight: 700, color: "#FFF", margin: "12px 0 6px" }}>
                    {trimmed.replace("#### ", "")}
                  </h4>
                );
              }
              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote key={idx} style={{
                    margin: "12px 0",
                    padding: "10px 14px",
                    background: `${theme.primary}0D`,
                    borderLeft: `3px solid ${theme.primary}`,
                    borderRadius: "0 8px 8px 0",
                    color: "rgba(255,255,255,0.9)",
                    fontStyle: "italic",
                    fontSize: 12
                  }}>
                    {trimmed.replace(/^>\s*/gm, "")}
                  </blockquote>
                );
              }
              if (trimmed.startsWith("|")) {
                // Table
                const rows = trimmed.split("\n").filter(r => !r.includes(":---"));
                return (
                  <div key={idx} style={{ overflowX: "auto", margin: "14px 0" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                      <tbody>
                        {rows.map((row, rIdx) => {
                          const cols = row.split("|").filter((_, i, arr) => i > 0 && i < arr.length - 1);
                          const isHead = rIdx === 0;
                          return (
                            <tr key={rIdx} style={{
                              background: isHead ? "rgba(255,255,255,0.06)" : (rIdx % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent"),
                              borderBottom: "1px solid rgba(255,255,255,0.06)"
                            }}>
                              {cols.map((col, cIdx) => (
                                <td key={cIdx} style={{
                                  padding: "6px 8px",
                                  fontWeight: isHead ? 800 : 400,
                                  color: isHead ? theme.primary : "rgba(255,255,255,0.85)"
                                }}>
                                  {col.trim()}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (trimmed.startsWith("---")) {
                return <hr key={idx} style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "18px 0" }} />;
              }

              return (
                <p key={idx} style={{ margin: "0 0 10px", lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
                  {trimmed}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
