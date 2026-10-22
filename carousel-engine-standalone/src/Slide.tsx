import type { SlideData } from "@/lib/carousel-types";
import type { Theme } from "@/lib/themes";
import { Zap } from "lucide-react";

interface SlideProps {
  slide: SlideData;
  index: number;
  total: number;
  theme: Theme;
  handle: string;
  forExport?: boolean;
}

export function Slide({ slide, index, total, theme, handle, forExport = false }: SlideProps) {
  const isLight = slide.background === "light";
  const isLast = index === total - 1;

  const bg = isLight ? theme.lightBg : theme.darkBg;
  const accent = isLight ? theme.primary : theme.primaryLight;
  const headingColor = isLight ? theme.darkText : "#FFFFFF";
  const bodyColor = isLight ? "rgba(35,35,35,0.78)" : "rgba(255,255,255,0.72)";
  const tagColor = isLight ? theme.primary : theme.primaryLight;
  const handleColor = isLight ? "rgba(0,0,0,0.32)" : "rgba(255,255,255,0.35)";
  const borderColor = isLight ? theme.lightBorder : "rgba(255,255,255,0.11)";
  const trackColor = isLight ? "rgba(0,0,0,0.10)" : "rgba(255,255,255,0.15)";
  const fillColor = isLight ? theme.primary : "#FFFFFF";
  const counterColor = isLight ? "rgba(0,0,0,0.32)" : "rgba(255,255,255,0.42)";
  const codeBlockBg = isLight ? "rgba(0,0,0,0.055)" : "rgba(0,0,0,0.42)";
  const codeFg = isLight ? theme.darkText : "rgba(255,255,255,0.88)";
  const highlightFg = accent;
  const mutedFg = isLight ? "rgba(0,0,0,0.38)" : "rgba(255,255,255,0.38)";
  const tableBorderColor = borderColor;
  const tableHeaderColor = isLight ? "rgba(0,0,0,0.48)" : "rgba(255,255,255,0.45)";
  const tableBodyColor = isLight ? theme.darkText : "rgba(255,255,255,0.85)";
  const insightBg = isLight ? "rgba(0,0,0,0.045)" : "rgba(0,0,0,0.32)";
  const insightBorderColor = isLight ? theme.primary : theme.primaryLight;

  const progressPct = ((index + 1) / total) * 100;

  const slideWidth = forExport ? 1080 : 420;
  const slideHeight = forExport ? 1350 : 525;
  const padding = forExport ? 72 : 28;

  const F = {
    handle: forExport ? 26 : 10,
    tag: forExport ? 22 : 8,
    heading: forExport ? 70 : 22,
    heroHeading: forExport ? 88 : 34,
    headingAccent: forExport ? 70 : 22,
    body: forExport ? 32 : 12,
    heroBody: forExport ? 30 : 11,
    code: forExport ? 24 : 10,
    tableHeader: forExport ? 20 : 8,
    tableCell: forExport ? 24 : 9,
    stepNum: forExport ? 58 : 22,
    stepTitle: forExport ? 34 : 12.5,
    stepDesc: forExport ? 26 : 10,
    counter: forExport ? 22 : 9,
    small: forExport ? 22 : 9,
    insight: forExport ? 26 : 10.5,
    pillBullet: forExport ? 24 : 9,
    dosDontsHeader: forExport ? 28 : 11,
    dosDontsItem: forExport ? 24 : 9,
    pitfallNum: forExport ? 56 : 22,
    pitfallTitle: forExport ? 28 : 11,
    pitfallDesc: forExport ? 23 : 9,
    problemDiff: forExport ? 22 : 8,
    problemQ: forExport ? 36 : 14,
    schemaTableName: forExport ? 24 : 9,
    schemaCol: forExport ? 20 : 7.5,
    diagramLine: forExport ? 24 : 9,
  };

  const levelColors: Record<string, string> = {
    BEGINNER: "#22C55E",
    INTERMEDIATE: "#F59E0B",
    ADVANCED: "#EF4444",
  };

  const difficultyColors: Record<string, string> = {
    EASY: "#22C55E",
    MEDIUM: "#F59E0B",
    HARD: "#EF4444",
  };

  return (
    <div
      style={{
        width: slideWidth,
        height: slideHeight,
        background: bg,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Space Grotesk', sans-serif",
        flexShrink: 0,
        boxSizing: "border-box",
      }}
    >
      {/* 🌐 Global Institutional Radar Grid (Dotted) */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(${isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"} ${forExport ? 3 : 1.5}px, transparent 0)`,
        backgroundSize: `${forExport ? 60 : 24}px ${forExport ? 60 : 24}px`,
        zIndex: 0,
        pointerEvents: "none",
        maskImage: "radial-gradient(circle at center, transparent 10%, black 85%)",
        WebkitMaskImage: "radial-gradient(circle at center, transparent 10%, black 85%)"
      }} />

      {/* ─── HERO SLIDE ───────────────────────────────────────────── */}
      {slide.type === "hero" && (
        <>
          {/* 🔮 Premium Ambient Orbs */}
          <div style={{
            position: "absolute",
            top: "-20%",
            right: "-20%",
            width: "80%",
            height: "70%",
            background: accent,
            opacity: isLight ? 0.15 : 0.25,
            filter: forExport ? "blur(200px)" : "blur(80px)",
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute",
            bottom: "-10%",
            left: "-15%",
            width: "60%",
            height: "50%",
            background: accent,
            opacity: isLight ? 0.1 : 0.18,
            filter: forExport ? "blur(180px)" : "blur(70px)",
            borderRadius: "50%",
            zIndex: 0,
            pointerEvents: "none"
          }} />

          {/* 🧊 Frosted Glass Diffusion Layer */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: isLight ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.15)",
            backdropFilter: forExport ? "blur(60px)" : "blur(24px)",
            WebkitBackdropFilter: forExport ? "blur(60px)" : "blur(24px)",
            zIndex: 1,
            pointerEvents: "none"
          }} />

          {/* 🌐 Institutional Radar Grid (Dotted) */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"} ${forExport ? 3 : 1.5}px, transparent 0)`,
            backgroundSize: `${forExport ? 60 : 24}px ${forExport ? 60 : 24}px`,
            zIndex: 2,
            pointerEvents: "none",
            maskImage: "radial-gradient(circle at center, transparent 10%, black 90%)",
            WebkitMaskImage: "radial-gradient(circle at center, transparent 10%, black 90%)"
          }} />

          {/* 🧩 Background Intelligence Layer (Keywords — topic-specific or default) */}
          <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity: isLight ? 0.04 : 0.07, zIndex: 0 }}>
            {(slide.keywords
              ? slide.keywords.map((t, i) => ({
                  t,
                  x: ["5%","65%","45%","72%","55%","25%","10%","65%","75%","35%","5%","60%"][i % 12],
                  y: ["8%","5%","15%","18%","32%","48%","58%","52%","65%","72%","82%","80%"][i % 12],
                }))
              : [
                  { t: "CRUDE OIL", x: "5%", y: "8%" },
                  { t: "GDP", x: "65%", y: "5%" },
                  { t: "OPEC", x: "45%", y: "15%" },
                  { t: "INFLATION", x: "72%", y: "18%" },
                  { t: "SUPPLY", x: "55%", y: "32%" },
                  { t: "YIELD", x: "25%", y: "48%" },
                  { t: "DEMAND", x: "10%", y: "58%" },
                  { t: "TARIFF", x: "65%", y: "52%" },
                  { t: "FED RATE", x: "75%", y: "65%" },
                  { t: "SANCTIONS", x: "35%", y: "72%" },
                  { t: "FUTURES", x: "5%", y: "82%" },
                  { t: "HEDGE", x: "60%", y: "80%" },
                ]
            ).map((kw, i) => (
              <span key={i} style={{ position: "absolute", left: kw.x, top: kw.y, fontSize: forExport ? 28 : 12, fontWeight: 900, letterSpacing: 3, whiteSpace: "nowrap" }}>
                {kw.t}
              </span>
            ))}
          </div>

          {/* 🔢 Huge Background Part Number */}
          {slide.topicNum && (
            <div style={{
              position: "absolute",
              left: "-2%",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: forExport ? 600 : 240,
              fontWeight: 900,
              color: isLight ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.03)",
              lineHeight: 1,
              zIndex: 0,
              pointerEvents: "none",
              userSelect: "none"
            }}>
              {slide.topicNum.padStart(2, '0')}
            </div>
          )}

          {/* 🏷️ Bottom Signature Watermark (Behind Progress) */}
          <div style={{
            position: "absolute",
            bottom: forExport ? 40 : 10,
            left: "-2%",
            fontSize: forExport ? 160 : 64,
            fontWeight: 900,
            color: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.05)",
            whiteSpace: "nowrap",
            zIndex: 0,
            pointerEvents: "none"
          }}>
            @{handle}_in
          </div>

          {/* 📜 Bottom Disclaimer Footer */}
          <div style={{
            position: "absolute",
            bottom: forExport ? 24 : 8,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: forExport ? 16 : 6.5,
            fontWeight: 800,
            color: isLight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.22)",
            letterSpacing: forExport ? 3 : 1.2,
            textTransform: "uppercase",
            zIndex: 10,
            pointerEvents: "none"
          }}>
            NOT FINANCIAL ADVICE • EDUCATIONAL PURPOSES ONLY
          </div>

          {/* Top Handle Watermark */}
          <div style={{
            position: "absolute",
            top: forExport ? 44 : 17,
            left: padding,
            zIndex: 10,
            fontSize: F.handle,
            color: isLight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.3)",
            fontWeight: 700,
            letterSpacing: 1
          }}>
            @{handle}
          </div>
          
          {/* Level badge + episode top-right */}
          <div style={{
            position: "absolute",
            top: forExport ? 48 : 18,
            right: padding,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: forExport ? 8 : 3,
          }}>
            {slide.levelBadge && (
              <span style={{
                fontSize: F.tag,
                fontWeight: 800,
                letterSpacing: 2,
                color: "#FFFFFF",
                background: levelColors[slide.levelBadge] ?? accent,
                padding: forExport ? "10px 24px" : "3px 10px",
                borderRadius: 8,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 6
              }}>
                <Zap size={forExport ? 16 : 8} fill="#FFF" />
                {slide.levelBadge}
              </span>
            )}
            {slide.tagRight && (
              <span style={{
                fontSize: F.tag,
                fontWeight: 700,
                letterSpacing: 2,
                color: isLight ? theme.darkText : "#FFFFFF",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(4px)",
                border: `1px solid rgba(255,255,255,0.2)`,
                padding: forExport ? "8px 20px" : "3px 10px",
                borderRadius: 8,
                textTransform: "uppercase",
              }}>
                {slide.tagRight}
              </span>
            )}
          </div>

          {/* Hero main content — fills full height between top chrome and progress bar */}
          <div style={{
            position: "absolute",
            top: forExport ? 150 : 58,
            left: 0,
            right: 0,
            bottom: forExport ? 72 : 30,
            padding: `0 ${padding}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            zIndex: 3,
          }}>
            {/* Top: tag + heading + body */}
            <div>
              {/* Tag line */}
              <div style={{ marginBottom: forExport ? 22 : 9 }}>
                <span style={{
                  fontSize: F.tag,
                  fontWeight: 700,
                  letterSpacing: 3,
                  color: tagColor,
                  textTransform: "uppercase",
                }}>
                  {slide.tag}
                </span>
                <div style={{
                  width: forExport ? 60 : 24,
                  height: forExport ? 3 : 1.5,
                  background: accent,
                  borderRadius: 2,
                  marginTop: forExport ? 10 : 4,
                }} />
              </div>

              {/* Heading */}
              <div style={{ marginBottom: forExport ? 24 : 8 }}>
                <span style={{
                  display: "block",
                  fontSize: F.heroHeading,
                  fontWeight: 800,
                  color: headingColor,
                  lineHeight: 1.04,
                  letterSpacing: -1.5,
                }}>
                  {slide.heading}
                </span>
                {slide.headingAccent && (
                  <span style={{
                    display: "block",
                    fontSize: F.heroHeading,
                    fontWeight: 800,
                    color: accent,
                    lineHeight: 1.04,
                    letterSpacing: -1.5,
                    fontStyle: "italic",
                    paddingBottom: forExport ? 20 : 8,
                    borderBottom: `1px solid ${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)"}`,
                    marginBottom: forExport ? 24 : 10,
                  }}>
                    {slide.headingAccent}
                  </span>
                )}
              </div>
              
              {/* Body */}
              {slide.body && (
                <p style={{
                  fontSize: F.heroBody,
                  color: bodyColor,
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: "88%",
                }}>
                  {slide.body}
                </p>
              )}
            </div>

            {/* Bottom: Bullets / Data Strip */}
            {slide.bullets && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: forExport ? 16 : 8,
                marginTop: forExport ? 40 : 16,
                borderTop: `1px solid ${isLight ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.15)"}`,
                paddingTop: forExport ? 24 : 10,
              }}>
                {slide.bullets.map((b, i) => (
                  <div key={i} style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    gap: forExport ? 10 : 4,
                    background: isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.08)",
                    border: `1px solid ${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.15)"}`,
                    padding: forExport ? "12px 16px" : "5px 8px",
                    borderRadius: forExport ? 40 : 20,
                    backdropFilter: "blur(10px)"
                  }}>
                    <div style={{ width: forExport ? 8 : 4, height: forExport ? 8 : 4, background: accent, borderRadius: "50%", boxShadow: `0 0 8px ${accent}`, flexShrink: 0 }} />
                    <span style={{ fontSize: F.small, fontWeight: 700, color: headingColor, letterSpacing: 1, textTransform: "uppercase", textAlign: "center" }}>{b}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {/* ─── NON-HERO SLIDES ─────────────────────────────────────── */}
      {slide.type !== "hero" && (
        <>
          {/* 🏷️ Background Watermark — ghost @handle horizontal */}
          <div style={{
            position: "absolute",
            bottom: forExport ? 40 : 14,
            right: forExport ? 20 : 8,
            fontSize: forExport ? 110 : 44,
            fontWeight: 900,
            color: isLight ? "rgba(0,0,0,0.045)" : "rgba(255,255,255,0.055)",
            whiteSpace: "nowrap",
            zIndex: 0,
            pointerEvents: "none",
            userSelect: "none",
            letterSpacing: -1,
          }}>
            @{handle}
          </div>

          {/* Handle + tagRight row */}
          <div style={{
            position: "absolute",
            top: forExport ? 44 : 17,
            left: padding,
            right: padding,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 5,
          }}>
            <span style={{ fontSize: F.handle, color: handleColor, fontWeight: 700, letterSpacing: 1 }}>
              @{handle}
            </span>
            {slide.tagRight && (
              <span style={{
                fontSize: F.tag,
                fontWeight: 700,
                letterSpacing: 2,
                color: isLight ? theme.darkText : "rgba(255,255,255,0.55)",
                background: "transparent",
                border: `1px solid ${isLight ? borderColor : "rgba(255,255,255,0.18)"}`,
                padding: forExport ? "6px 18px" : "2px 7px",
                borderRadius: forExport ? 8 : 4,
                textTransform: "uppercase",
              }}>
                {slide.tagRight}
              </span>
            )}
          </div>

          {/* Main content area — bottom shrinks when footnote present */}
          <div style={{
            position: "absolute",
            top: forExport ? 118 : 46,
            left: 0,
            right: 0,
            bottom: slide.footnote ? (forExport ? 128 : 50) : (forExport ? 72 : 30),
            padding: `0 ${padding}px ${forExport ? 16 : 6}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflowY: "hidden",
            zIndex: 10,
          }}>
            {/* TAG + HEADING block — always shown */}
            <div>
              {/* Tag */}
              <div style={{ marginBottom: forExport ? 12 : 4 }}>
                <span style={{
                  display: "inline-block",
                  fontSize: F.tag,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: tagColor,
                  textTransform: "uppercase",
                  marginBottom: forExport ? 8 : 3,
                  borderBottom: `${forExport ? 4 : 2}px solid ${accent}`,
                  paddingBottom: forExport ? 4 : 2,
                }}>
                  {slide.tag}
                </span>
              </div>

              {/* Heading */}
              {slide.type !== "dosdonts" && slide.type !== "pitfalls" && slide.type !== "problem" && slide.type !== "schema" && (
                <div style={{ marginBottom: forExport ? 14 : 5 }}>
                  <span style={{
                    display: "block",
                    fontSize: F.heading,
                    fontWeight: 700,
                    color: headingColor,
                    lineHeight: 1.08,
                    letterSpacing: -0.5,
                  }}>
                    {slide.heading}
                  </span>
                  {slide.headingAccent && (
                    <span style={{
                      display: "block",
                      fontSize: F.headingAccent,
                      fontWeight: 700,
                      color: accent,
                      lineHeight: 1.08,
                      letterSpacing: -0.5,
                      fontStyle: "italic",
                    }}>
                      {slide.headingAccent}
                    </span>
                  )}
                </div>
              )}

              {/* Subheading */}
              {slide.subheading && (
                <p style={{ fontSize: F.body, color: bodyColor, lineHeight: 1.45, margin: `0 0 ${forExport ? 10 : 4}px` }}>
                  {slide.subheading}
                </p>
              )}

              {/* Body */}
              {slide.body && (
                <p style={{ fontSize: F.body, color: bodyColor, lineHeight: 1.55, margin: `0 0 ${forExport ? 10 : 4}px`, maxWidth: "95%" }}>
                  {slide.body}
                </p>
              )}

              {/* Bullets */}
              {slide.bullets && (
                <div style={{ display: "flex", gap: forExport ? 14 : 5, flexWrap: "wrap", marginBottom: forExport ? 10 : 4 }}>
                  {slide.bullets.map((b, i) => (
                    <span key={i} style={{
                      fontSize: F.small,
                      fontWeight: 600,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      color: isLight ? theme.darkText : "rgba(255,255,255,0.58)",
                      background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.09)",
                      padding: forExport ? "8px 20px" : "2px 8px",
                      borderRadius: forExport ? 24 : 10,
                      border: `1px solid ${borderColor}`,
                    }}>
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* ─── TYPE-SPECIFIC LOWER CONTENT ──────────────── */}

            {/* CONCEPT: features list fills lower half */}
            {slide.features && (
              <div style={{ display: "flex", flexDirection: "column", gap: forExport ? 16 : 6, flex: 1, justifyContent: "center" }}>
                {slide.features.map((f, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: forExport ? 20 : 8,
                    padding: forExport ? "14px 0" : "5px 0",
                    borderBottom: i < slide.features!.length - 1 ? `1px solid ${borderColor}` : "none",
                  }}>
                    <span style={{ fontSize: forExport ? 28 : 12, width: forExport ? 32 : 14, flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                    <div>
                      <span style={{ display: "block", fontSize: F.stepTitle, fontWeight: 700, color: headingColor }}>{f.label}</span>
                      <span style={{ display: "block", fontSize: F.stepDesc, color: bodyColor, marginTop: 2 }}>{f.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CODE BLOCK */}
            {slide.code && (
              <div style={{
                background: codeBlockBg,
                borderRadius: forExport ? 16 : 7,
                padding: forExport ? "26px 30px" : "9px 13px",
                border: `1px solid ${borderColor}`,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: 0,
                overflowX: "hidden",
                overflowY: "hidden",
              }}>
                {slide.codeLabel && (
                  <div style={{
                    fontSize: F.tag,
                    fontWeight: 700,
                    letterSpacing: 2,
                    color: mutedFg,
                    textTransform: "uppercase",
                    marginBottom: forExport ? 14 : 5,
                  }}>
                    {slide.codeLabel}
                  </div>
                )}
                {slide.code.map((line, i) => (
                  <div key={i} style={{ minHeight: line.text === "" ? (forExport ? 10 : 4) : "auto" }}>
                    {line.text && (
                      <span style={{
                        fontSize: F.code,
                        fontFamily: "'Space Mono', 'Courier New', monospace",
                        color: line.highlight ? highlightFg : codeFg,
                        fontWeight: line.highlight ? 700 : 400,
                        lineHeight: 1.75,
                        whiteSpace: "pre",
                        display: "block",
                      }}>
                        {line.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* DIAGRAM (ASCII flow) */}
            {slide.diagram && (
              <div style={{
                background: codeBlockBg,
                borderRadius: forExport ? 16 : 7,
                padding: forExport ? "26px 30px" : "9px 13px",
                border: `1px solid ${borderColor}`,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                {slide.diagram.map((line, i) => (
                  <div key={i} style={{ minHeight: line === "" ? (forExport ? 10 : 4) : "auto" }}>
                    <span style={{
                      fontSize: F.diagramLine,
                      fontFamily: "'Space Mono', 'Courier New', monospace",
                      color: codeFg,
                      lineHeight: 1.8,
                      whiteSpace: "pre",
                      display: "block",
                    }}>
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* STEPS */}
            {slide.steps && (
              <div style={{ display: "flex", flexDirection: "column", gap: forExport ? 14 : 5, flex: 1, justifyContent: "center" }}>
                {slide.steps.map((step, i) => (
                  <div key={i} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: forExport ? 20 : 8,
                    padding: forExport ? "12px 0" : "4px 0",
                    borderBottom: i < slide.steps!.length - 1 ? `1px solid ${borderColor}` : "none",
                  }}>
                    <span style={{
                      fontSize: F.stepNum,
                      fontWeight: 300,
                      color: accent,
                      minWidth: forExport ? 56 : 22,
                      lineHeight: 1,
                    }}>
                      {step.number}
                    </span>
                    <div>
                      <span style={{ display: "block", fontSize: F.stepTitle, fontWeight: 700, color: headingColor }}>{step.title}</span>
                      <span style={{ display: "block", fontSize: F.stepDesc, color: bodyColor, marginTop: 2 }}>{step.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TABLE */}
            {slide.table && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ borderBottom: `1px solid ${tableBorderColor}` }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${slide.table.headers.length}, 1fr)`,
                    paddingBottom: forExport ? 10 : 4,
                  }}>
                    {slide.table.headers.map((h, i) => (
                      <span key={i} style={{ fontSize: F.tableHeader, fontWeight: 700, color: tableHeaderColor, letterSpacing: 1.5, textTransform: "uppercase" }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
                {slide.table.rows.map((row, i) => (
                  <div key={i} style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${slide.table!.headers.length}, 1fr)`,
                    padding: `${forExport ? 12 : 4}px 0`,
                    borderBottom: i < slide.table!.rows.length - 1 ? `1px solid ${tableBorderColor}` : "none",
                    background: row.highlight ? (isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)") : "transparent",
                  }}>
                    {row.cells.map((cell, j) => (
                      <span key={j} style={{
                        fontSize: F.tableCell,
                        color: row.highlight ? accent : tableBodyColor,
                        fontStyle: row.italic ? "italic" : "normal",
                        fontFamily: slide.type === "reference" ? "'Space Mono', monospace" : "inherit",
                        fontWeight: slide.type === "reference" && j === 0 ? 600 : 400,
                      }}>
                        {cell}
                      </span>
                    ))}
                  </div>
                ))}
                {slide.table.caption && (
                  <p style={{ fontSize: F.small, color: mutedFg, marginTop: forExport ? 8 : 3, fontStyle: "italic" }}>
                    {slide.table.caption}
                  </p>
                )}
              </div>
            )}

            {/* INSIGHT BOX */}
            {slide.insightBox && (
              <div style={{
                background: insightBg,
                borderLeft: `${forExport ? 4 : 2}px solid ${insightBorderColor}`,
                borderRadius: `0 ${forExport ? 10 : 4}px ${forExport ? 10 : 4}px 0`,
                padding: forExport ? "16px 22px" : "5px 9px",
              }}>
                <p style={{ fontSize: F.insight, color: bodyColor, margin: 0, lineHeight: 1.55 }}>
                  {slide.insightBox}
                </p>
              </div>
            )}

            {/* CTA */}
            {slide.type === "cta" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: forExport ? 18 : 7 }}>
                {slide.nextTopic && (
                  <p style={{ fontSize: F.tag, fontWeight: 700, letterSpacing: 2, color: mutedFg, textTransform: "uppercase", margin: 0 }}>
                    Next → {slide.nextTopic}
                  </p>
                )}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: forExport ? 10 : 4,
                  padding: forExport ? "18px 38px" : "7px 18px",
                  background: isLight ? theme.darkBg : "#FFFFFF",
                  color: isLight ? "#FFFFFF" : theme.darkBg,
                  borderRadius: forExport ? 40 : 16,
                  fontSize: F.body,
                  fontWeight: 700,
                }}>
                  {slide.ctaText || "Follow for more"} →
                </div>
              </div>
            )}

            {/* ─── DOS & DON'TS ──────────────────────────────── */}
            {slide.type === "dosdonts" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Heading */}
                <div style={{ marginBottom: forExport ? 18 : 7 }}>
                  <span style={{
                    display: "block",
                    fontSize: F.heading,
                    fontWeight: 700,
                    color: headingColor,
                    lineHeight: 1.08,
                    letterSpacing: -0.5,
                  }}>
                    {slide.heading}
                  </span>
                </div>
                <div style={{ display: "flex", gap: forExport ? 24 : 9, flex: 1 }}>
                  {/* DO column */}
                  <div style={{
                    flex: 1,
                    background: isLight ? "rgba(34,197,94,0.07)" : "rgba(34,197,94,0.10)",
                    borderRadius: forExport ? 16 : 7,
                    border: `1px solid rgba(34,197,94,0.25)`,
                    padding: forExport ? "22px 24px" : "8px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: forExport ? 16 : 6,
                  }}>
                    <div style={{
                      fontSize: F.dosDontsHeader,
                      fontWeight: 800,
                      color: "#22C55E",
                      marginBottom: forExport ? 6 : 2,
                      letterSpacing: 1,
                    }}>
                      ✅ DO
                    </div>
                    {(slide.dos ?? []).slice(0, 4).map((item, i) => (
                      <div key={i} style={{ borderBottom: i < (slide.dos!.length - 1) && i < 3 ? `1px solid rgba(34,197,94,0.15)` : "none", paddingBottom: forExport ? 12 : 4 }}>
                        <span style={{ display: "block", fontSize: F.dosDontsItem, fontWeight: 600, color: headingColor, lineHeight: 1.4 }}>
                          {item.text}
                        </span>
                        {item.detail && (
                          <span style={{ display: "block", fontSize: forExport ? 20 : 8, color: bodyColor, lineHeight: 1.4, marginTop: 2 }}>
                            {item.detail}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* DON'T column */}
                  <div style={{
                    flex: 1,
                    background: isLight ? "rgba(239,68,68,0.07)" : "rgba(239,68,68,0.10)",
                    borderRadius: forExport ? 16 : 7,
                    border: `1px solid rgba(239,68,68,0.25)`,
                    padding: forExport ? "22px 24px" : "8px 10px",
                    display: "flex",
                    flexDirection: "column",
                    gap: forExport ? 16 : 6,
                  }}>
                    <div style={{
                      fontSize: F.dosDontsHeader,
                      fontWeight: 800,
                      color: "#EF4444",
                      marginBottom: forExport ? 6 : 2,
                      letterSpacing: 1,
                    }}>
                      ❌ DON'T
                    </div>
                    {(slide.donts ?? []).slice(0, 4).map((item, i) => (
                      <div key={i} style={{ borderBottom: i < (slide.donts!.length - 1) && i < 3 ? `1px solid rgba(239,68,68,0.15)` : "none", paddingBottom: forExport ? 12 : 4 }}>
                        <span style={{ display: "block", fontSize: F.dosDontsItem, fontWeight: 600, color: headingColor, lineHeight: 1.4 }}>
                          {item.text}
                        </span>
                        {item.detail && (
                          <span style={{ display: "block", fontSize: forExport ? 20 : 8, color: bodyColor, lineHeight: 1.4, marginTop: 2 }}>
                            {item.detail}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── PITFALLS ──────────────────────────────────── */}
            {slide.type === "pitfalls" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Heading */}
                <div style={{ marginBottom: forExport ? 20 : 7 }}>
                  <span style={{ display: "block", fontSize: F.heading, fontWeight: 700, color: headingColor, lineHeight: 1.08, letterSpacing: -0.5 }}>
                    {slide.heading}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: forExport ? 18 : 7, flex: 1, justifyContent: "center" }}>
                  {(slide.pitfalls ?? []).slice(0, 4).map((p, i) => (
                    <div key={i} style={{
                      display: "flex",
                      gap: forExport ? 20 : 8,
                      alignItems: "flex-start",
                      padding: forExport ? "16px 0" : "5px 0",
                      borderBottom: i < (slide.pitfalls!.length - 1) && i < 3 ? `1px solid ${borderColor}` : "none",
                    }}>
                      <span style={{
                        fontSize: F.pitfallNum,
                        fontWeight: 800,
                        color: accent,
                        opacity: 0.60,
                        lineHeight: 1,
                        minWidth: forExport ? 48 : 18,
                        fontFamily: "'Space Mono', monospace",
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div style={{ flex: 1 }}>
                        <span style={{ display: "block", fontSize: F.pitfallTitle, fontWeight: 700, color: headingColor, marginBottom: forExport ? 6 : 2 }}>
                          {p.title}
                        </span>
                        <span style={{ display: "block", fontSize: F.pitfallDesc, color: bodyColor, lineHeight: 1.5 }}>
                          {p.description}
                        </span>
                        {p.fix && (
                          <span style={{ display: "block", fontSize: F.pitfallDesc, color: accent, fontWeight: 600, marginTop: forExport ? 6 : 2 }}>
                            Fix: {p.fix}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─── PROBLEM ───────────────────────────────────── */}
            {slide.type === "problem" && slide.problem && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: forExport ? 14 : 5 }}>
                {/* Difficulty badge + heading */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: forExport ? 16 : 6 }}>
                  <span style={{
                    display: "block",
                    fontSize: F.heading,
                    fontWeight: 700,
                    color: headingColor,
                    lineHeight: 1.08,
                    letterSpacing: -0.5,
                    flex: 1,
                  }}>
                    {slide.heading}
                  </span>
                  <span style={{
                    fontSize: F.problemDiff,
                    fontWeight: 800,
                    letterSpacing: 2,
                    color: "#FFFFFF",
                    background: difficultyColors[slide.problem.difficulty],
                    padding: forExport ? "6px 18px" : "2px 8px",
                    borderRadius: forExport ? 40 : 16,
                    flexShrink: 0,
                    marginTop: forExport ? 6 : 2,
                  }}>
                    {slide.problem.difficulty}
                  </span>
                </div>

                {/* Question */}
                <div style={{
                  background: insightBg,
                  borderLeft: `${forExport ? 4 : 2}px solid ${insightBorderColor}`,
                  borderRadius: `0 ${forExport ? 10 : 4}px ${forExport ? 10 : 4}px 0`,
                  padding: forExport ? "16px 22px" : "5px 9px",
                }}>
                  <p style={{ fontSize: F.problemQ, fontWeight: 600, color: headingColor, margin: 0, lineHeight: 1.45 }}>
                    {slide.problem.question}
                  </p>
                  {slide.problem.hint && (
                    <p style={{ fontSize: F.pitfallDesc, color: mutedFg, margin: `${forExport ? 8 : 3}px 0 0`, fontStyle: "italic" }}>
                      Hint: {slide.problem.hint}
                    </p>
                  )}
                </div>

                {/* Solution — or "next slide" prompt when empty */}
                {slide.problem.solution.length > 0 ? (
                <div style={{
                  background: codeBlockBg,
                  borderRadius: forExport ? 16 : 7,
                  padding: forExport ? "22px 26px" : "8px 12px",
                  border: `1px solid ${borderColor}`,
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}>
                  <div style={{ fontSize: F.tag, fontWeight: 700, letterSpacing: 2, color: mutedFg, textTransform: "uppercase", marginBottom: forExport ? 12 : 5 }}>
                    Solution
                  </div>
                  {slide.problem.solution.map((line, i) => (
                    <div key={i} style={{ minHeight: line.text === "" ? (forExport ? 8 : 3) : "auto" }}>
                      {line.text && (
                        <span style={{
                          fontSize: F.code,
                          fontFamily: "'Space Mono', 'Courier New', monospace",
                          color: line.highlight ? highlightFg : codeFg,
                          fontWeight: line.highlight ? 700 : 400,
                          lineHeight: 1.75,
                          whiteSpace: "pre",
                          display: "block",
                        }}>
                          {line.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                ) : (
                <div style={{
                  background: codeBlockBg,
                  borderRadius: forExport ? 16 : 7,
                  padding: forExport ? "28px 26px" : "10px 12px",
                  border: `1px solid ${borderColor}`,
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: forExport ? 14 : 6,
                }}>
                  <span style={{ fontSize: forExport ? 36 : 14, color: accent }}>→</span>
                  <span style={{ fontSize: forExport ? 30 : 11, fontWeight: 700, color: mutedFg, letterSpacing: 1 }}>
                    Solution on next slide
                  </span>
                </div>
                )}

                {/* Result table (compact) — only shown when solution is present */}
                {slide.problem.solution.length > 0 && slide.problem.result && (
                  <div style={{ borderTop: `1px solid ${tableBorderColor}`, paddingTop: forExport ? 10 : 4 }}>
                    <div style={{ display: "flex", gap: forExport ? 10 : 4, marginBottom: forExport ? 6 : 2 }}>
                      {slide.problem.result.headers.map((h, i) => (
                        <span key={i} style={{ fontSize: F.tableHeader, fontWeight: 700, color: tableHeaderColor, letterSpacing: 1.5, textTransform: "uppercase", flex: 1 }}>
                          {h}
                        </span>
                      ))}
                    </div>
                    {slide.problem.result.rows.map((row, i) => (
                      <div key={i} style={{ display: "flex", gap: forExport ? 10 : 4, padding: `${forExport ? 6 : 2}px 0`, borderTop: `1px solid ${tableBorderColor}` }}>
                        {row.cells.map((cell, j) => (
                          <span key={j} style={{ fontSize: F.tableCell, color: row.highlight ? accent : tableBodyColor, flex: 1 }}>
                            {cell}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ─── SCHEMA ────────────────────────────────────── */}
            {slide.type === "schema" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Heading */}
                <div style={{ marginBottom: forExport ? 18 : 7 }}>
                  <span style={{ display: "block", fontSize: F.heading, fontWeight: 700, color: headingColor, lineHeight: 1.08, letterSpacing: -0.5 }}>
                    {slide.heading}
                  </span>
                  {slide.body && (
                    <span style={{ display: "block", fontSize: F.body, color: bodyColor, lineHeight: 1.45, marginTop: forExport ? 8 : 3 }}>
                      {slide.body}
                    </span>
                  )}
                </div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: forExport ? 18 : 7,
                  flex: 1,
                }}>
                  {(slide.schemaCards ?? []).slice(0, 4).map((card, ci) => (
                    <div key={ci} style={{
                      background: codeBlockBg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: forExport ? 14 : 6,
                      padding: forExport ? "18px 20px" : "7px 9px",
                      display: "flex",
                      flexDirection: "column",
                      gap: forExport ? 6 : 2,
                      overflow: "hidden",
                    }}>
                      <div style={{
                        fontSize: F.schemaTableName,
                        fontWeight: 800,
                        color: accent,
                        fontFamily: "'Space Mono', monospace",
                        marginBottom: forExport ? 6 : 2,
                        borderBottom: `1px solid ${borderColor}`,
                        paddingBottom: forExport ? 8 : 3,
                        letterSpacing: -0.3,
                      }}>
                        {card.tableName}
                      </div>
                      {card.columns.map((col, ci2) => (
                        <div key={ci2} style={{ display: "flex", alignItems: "center", gap: forExport ? 6 : 2 }}>
                          {col.isPK && <span style={{ fontSize: forExport ? 14 : 5.5, flexShrink: 0 }}>🔑</span>}
                          {col.isFK && !col.isPK && <span style={{ fontSize: forExport ? 14 : 5.5, color: accent, flexShrink: 0 }}>→</span>}
                          {!col.isPK && !col.isFK && <span style={{ width: forExport ? 14 : 5.5, flexShrink: 0 }} />}
                          <span style={{
                            fontSize: F.schemaCol,
                            fontFamily: "'Space Mono', monospace",
                            color: col.isPK ? accent : bodyColor,
                            fontWeight: col.isPK ? 700 : 400,
                          }}>
                            {col.name}
                          </span>
                          {col.type && (
                            <span style={{ fontSize: forExport ? 17 : 6.5, color: mutedFg, marginLeft: "auto" }}>
                              {col.type}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ─── PINNED FOOTNOTE — always visible, above progress bar ── */}
          {slide.footnote && (
            <div style={{
              position: "absolute",
              bottom: forExport ? 72 : 30,
              left: 0,
              right: 0,
              padding: `${forExport ? 8 : 3}px ${padding}px`,
              borderTop: `1px solid ${borderColor}`,
              zIndex: 11,
              background: `${bg}ee`,
            }}>
              <p style={{
                fontSize: forExport ? 20 : 7.5,
                color: mutedFg,
                margin: 0,
                lineHeight: 1.45,
                fontStyle: "italic",
                letterSpacing: 0.2,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
              }}>
                {slide.footnote}
              </p>
            </div>
          )}
        </>
      )}

      {/* ─── PROGRESS BAR (all slides) ────────────────────────── */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: forExport ? 72 : 30,
        padding: `0 ${padding}px`,
        display: "flex",
        alignItems: "center",
        gap: forExport ? 14 : 6,
        zIndex: 10,
      }}>
        <div style={{
          flex: 1,
          height: forExport ? 4 : 2,
          background: trackColor,
          borderRadius: 2,
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            width: `${progressPct}%`,
            background: fillColor,
            borderRadius: 2,
          }} />
        </div>
        <span style={{ fontSize: F.counter, color: counterColor, fontWeight: 600, whiteSpace: "nowrap" }}>
          {index + 1} / {total}
        </span>

        {/* SWIPE pill — non-last slides */}
        {!isLast && (
          <span style={{
            fontSize: forExport ? 18 : 7,
            fontWeight: 700,
            letterSpacing: 1.5,
            color: accent,
            background: isLight ? `${theme.primary}15` : `${theme.primaryLight}18`,
            border: `1px solid ${isLight ? theme.primary + "30" : theme.primaryLight + "30"}`,
            padding: forExport ? "6px 18px" : "2px 8px",
            borderRadius: forExport ? 40 : 16,
            whiteSpace: "nowrap",
          }}>
            SWIPE →
          </span>
        )}
      </div>


    </div>
  );
}
