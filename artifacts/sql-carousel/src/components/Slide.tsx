import type { SlideData } from "@/lib/carousel-types";
import type { Theme } from "@/lib/themes";
import { Zap } from "lucide-react";
import React from "react";

function renderRichText(text: string | undefined, theme: Theme, forExport: boolean, isLight: boolean) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*|==.*?==|\+\+.*?\+\+|%%.*?%%|##.*?##|_.*?_)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} style={{ fontWeight: 800 }}>{part.slice(2, -2)}</strong>;
    }
    
    // FIGURES / DATA
    if (part.startsWith('==') && part.endsWith('==')) {
      const popColor = isLight ? "#059669" : "#00F5A0"; // Ultra-clean neon emerald
      return (
        <span key={index} style={{ color: popColor, textDecoration: 'underline', textUnderlineOffset: forExport ? 4 : 2, fontWeight: 800 }}>
          {part.slice(2, -2)}
        </span>
      );
    }
    
    // COUNTRIES / LOCATIONS
    if (part.startsWith('++') && part.endsWith('++')) {
      const popColor = isLight ? "#0284C7" : "#00E5FF"; // High-exposure electric cyan
      return (
        <span key={index} style={{ color: popColor, textDecoration: 'underline', textUnderlineOffset: forExport ? 4 : 2, fontWeight: 800 }}>
          {part.slice(2, -2)}
        </span>
      );
    }

    // COMPANIES / ENTITIES
    if (part.startsWith('%%') && part.endsWith('%%')) {
      const popColor = isLight ? "#EA580C" : "#FB923C"; // High-exposure bright orange
      return (
        <span key={index} style={{ color: popColor, textDecoration: 'underline', textUnderlineOffset: forExport ? 4 : 2, fontWeight: 800 }}>
          {part.slice(2, -2)}
        </span>
      );
    }

    // SECTORS / COMMODITIES / CONCEPTS
    if (part.startsWith('##') && part.endsWith('##')) {
      const popColor = isLight ? "#7E22CE" : "#C084FC"; // Radiant neon purple
      return (
        <span key={index} style={{ color: popColor, textDecoration: 'underline', textUnderlineOffset: forExport ? 4 : 2, fontWeight: 800 }}>
          {part.slice(2, -2)}
        </span>
      );
    }

    if (part.startsWith('_') && part.endsWith('_')) {
      return <em key={index} style={{ fontStyle: 'italic' }}>{part.slice(1, -1)}</em>;
    }
    return <span key={index}>{part}</span>;
  });
}

interface SlideProps {
  slide: SlideData;
  index: number;
  total: number;
  theme: Theme;
  handle: string;
  forExport?: boolean;
  isGlassMode?: boolean;
  colorModeOverride?: "auto" | "light" | "dark";
}

export function Slide({ slide, index, total, theme, handle, forExport = false, isGlassMode = true, colorModeOverride = "auto" }: SlideProps) {
  const isLight = colorModeOverride === "light"
    ? true
    : colorModeOverride === "dark"
    ? false
    : Boolean(theme.isLightDefault || slide.background === "light");
  const isLast = index === total - 1;

  const bg = isLight ? (theme.lightGradient || theme.lightBg) : (theme.darkGradient || theme.darkBg);
  const accent = isLight ? theme.primary : theme.primaryLight;
  const headingColor = isLight ? (theme.darkText || "#0C2340") : "#FFFFFF";
  const bodyColor = isLight ? "rgba(15, 23, 42, 0.88)" : (isGlassMode ? "#E2E8F0" : "rgba(255,255,255,0.78)");
  const tagColor = isLight ? theme.primary : accent;
  const handleColor = isLight ? "rgba(15, 23, 42, 0.42)" : (isGlassMode ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.35)");
  const borderColor = isLight ? (theme.lightBorder || "rgba(0,0,0,0.12)") : (isGlassMode ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.11)");
  const trackColor = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)";
  const fillColor = isLight ? theme.primary : "#FFFFFF";
  const counterColor = isLight ? "rgba(15, 23, 42, 0.45)" : (isGlassMode ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.42)");
  const codeBlockBg = isLight ? "rgba(0,0,0,0.035)" : "rgba(0,0,0,0.42)";
  const codeFg = isLight ? (theme.darkText || "#0C2340") : (isGlassMode ? "#F8FAFC" : "rgba(255,255,255,0.88)");
  const highlightFg = accent;
  const mutedFg = isLight ? "rgba(15, 23, 42, 0.52)" : (isGlassMode ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.38)");
  const tableBorderColor = borderColor;
  const tableHeaderColor = isLight ? "rgba(15, 23, 42, 0.65)" : (isGlassMode ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.45)");
  const tableBodyColor = isLight ? (theme.darkText || "#0C2340") : (isGlassMode ? "#F1F5F9" : "rgba(255,255,255,0.85)");
  const insightBg = isLight ? `${theme.primary}12` : "rgba(0,0,0,0.32)";
  const insightBorderColor = isLight ? theme.primary : theme.primaryLight;

  // 💎 High-Exposure Liquid Glass Surface Tokens
  const glassCardBg = isLight
    ? "rgba(255,255,255,0.92)"
    : "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)";
  const glassBorder = isLight 
    ? `1px solid ${borderColor}` 
    : "1px solid rgba(255,255,255,0.18)";
  const glassShadow = isLight
    ? "0 4px 16px -2px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)"
    : "inset 0 1px 0 0 rgba(255,255,255,0.32), 0 12px 32px -6px rgba(0,0,0,0.55)";
  const glassBackdrop = forExport ? "blur(20px)" : "blur(10px)";

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
      {/* 🔮 Studio Overhead High-Exposure Rim Light */}
      {isGlassMode && !isLight && (
        <>
          <div
            style={{
              position: "absolute",
              top: forExport ? -180 : -65,
              left: "5%",
              right: "5%",
              height: forExport ? 400 : 150,
              background: `radial-gradient(ellipse at 50% 0%, ${accent}45 0%, ${accent}10 45%, transparent 75%)`,
              filter: forExport ? "blur(35px)" : "blur(14px)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: forExport ? -90 : -32,
              left: "20%",
              right: "20%",
              height: forExport ? 220 : 80,
              background: `radial-gradient(ellipse at 50% 100%, ${accent}18 0%, transparent 75%)`,
              filter: forExport ? "blur(30px)" : "blur(12px)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        </>
      )}

      {/* 🌐 Clean Technical Dot Grid (Crisp & Minimal) */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)"} 1px, transparent 1px)`,
        backgroundSize: `${forExport ? 48 : 20}px ${forExport ? 48 : 20}px`,
        zIndex: 2,
        pointerEvents: "none",
      }} />

      {/* ─── HERO SLIDE ───────────────────────────────────────────── */}
      {slide.type === "hero" && (
        <>


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
                  textShadow: (!isLight && isGlassMode) ? "0 2px 24px rgba(0,0,0,0.9)" : undefined,
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
                    textShadow: (!isLight && isGlassMode) ? `0 0 35px ${accent}66` : undefined,
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
                  {renderRichText(slide.body, theme, forExport, isLight)}
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
                    gap: forExport ? 10 : 5,
                    background: isGlassMode
                      ? (isLight ? "rgba(255,255,255,0.85)" : "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 100%)")
                      : (isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.08)"),
                    border: isGlassMode ? "1px solid rgba(255,255,255,0.20)" : `1px solid ${isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.15)"}`,
                    boxShadow: isGlassMode ? (isLight ? "0 2px 10px rgba(0,0,0,0.05)" : "inset 0 1px 0 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.5)") : undefined,
                    padding: forExport ? "14px 18px" : "6px 10px",
                    borderRadius: forExport ? 40 : 20,
                    backdropFilter: isGlassMode ? (forExport ? "blur(20px)" : "blur(10px)") : "blur(10px)",
                    WebkitBackdropFilter: isGlassMode ? (forExport ? "blur(20px)" : "blur(10px)") : "blur(10px)",
                  }}>
                    <div style={{ width: forExport ? 8 : 4, height: forExport ? 8 : 4, background: accent, borderRadius: "50%", boxShadow: `0 0 10px ${accent}, 0 0 4px #FFFFFF`, flexShrink: 0 }} />
                    <span style={{ fontSize: F.small, fontWeight: 700, color: isLight ? headingColor : "#FFFFFF", letterSpacing: 1.1, textTransform: "uppercase", textAlign: "center" }}>{b}</span>
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
                color: isLight ? theme.darkText : (isGlassMode ? "#FFFFFF" : "rgba(255,255,255,0.55)"),
                background: isGlassMode ? "rgba(255,255,255,0.10)" : "transparent",
                backdropFilter: isGlassMode ? "blur(6px)" : undefined,
                boxShadow: isGlassMode ? "inset 0 1px 0 rgba(255,255,255,0.25)" : undefined,
                border: isGlassMode ? "1px solid rgba(255,255,255,0.22)" : `1px solid ${isLight ? borderColor : "rgba(255,255,255,0.18)"}`,
                padding: forExport ? "6px 18px" : "2px 7px",
                borderRadius: forExport ? 8 : 4,
                textTransform: "uppercase",
              }}>
                {slide.tagRight}
              </span>
            )}
          </div>

          {/* MACRO SERIES STAMP */}
          {slide.topicNum === "MACRO" && (
            <div style={{
              position: "absolute",
              bottom: forExport ? 20 : 8,
              left: padding,
              fontSize: forExport ? 16 : 6.5,
              fontWeight: 800,
              color: isLight ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.3)",
              letterSpacing: forExport ? 4 : 1.5,
              textTransform: "uppercase",
              zIndex: 5,
            }}>
              MACROEDGE MEGATREND
            </div>
          )}

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
              {slide.type !== "problem" && slide.type !== "schema" && (
                <div style={{ marginBottom: forExport ? 14 : 5 }}>
                  <span style={{
                    display: "block",
                    fontSize: F.heading,
                    fontWeight: 700,
                    color: headingColor,
                    lineHeight: 1.08,
                    letterSpacing: -0.5,
                    textShadow: isGlassMode ? "0 2px 18px rgba(0,0,0,0.8)" : undefined,
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
                      textShadow: isGlassMode ? `0 0 25px ${accent}66` : undefined,
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
                  {renderRichText(slide.body, theme, forExport, isLight)}
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
                      color: isLight ? theme.darkText : "rgba(255,255,255,0.78)",
                      background: isGlassMode
                        ? (isLight ? "rgba(255,255,255,0.65)" : "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)")
                        : (isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.09)"),
                      backdropFilter: isGlassMode ? glassBackdrop : undefined,
                      WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                      boxShadow: isGlassMode ? (isLight ? "0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)" : "inset 0 1px 0 rgba(255,255,255,0.18), 0 4px 12px rgba(0,0,0,0.25)") : undefined,
                      padding: forExport ? "8px 20px" : "2px 8px",
                      borderRadius: forExport ? 24 : 10,
                      border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
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
                    padding: isGlassMode ? (forExport ? "14px 18px" : "6px 10px") : (forExport ? "14px 0" : "5px 0"),
                    background: isGlassMode ? glassCardBg : "transparent",
                    backdropFilter: isGlassMode ? glassBackdrop : undefined,
                    WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                    borderRadius: isGlassMode ? (forExport ? 14 : 7) : 0,
                    border: isGlassMode ? glassBorder : "none",
                    boxShadow: isGlassMode ? glassShadow : "none",
                    borderBottom: !isGlassMode && i < slide.features!.length - 1 ? `1px solid ${borderColor}` : undefined,
                  }}>
                    <span style={{ fontSize: forExport ? 28 : 12, width: forExport ? 32 : 14, flexShrink: 0, marginTop: 2 }}>{f.icon}</span>
                    <div>
                      <span style={{ display: "block", fontSize: F.stepTitle, fontWeight: 700, color: headingColor }}>{f.label}</span>
                      <span style={{ display: "block", fontSize: F.stepDesc, color: bodyColor, marginTop: 2 }}>{renderRichText(f.description, theme, forExport, isLight)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CODE BLOCK */}
            {slide.code && (
              <div style={{
                background: isGlassMode ? glassCardBg : codeBlockBg,
                backdropFilter: isGlassMode ? glassBackdrop : undefined,
                WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                boxShadow: isGlassMode ? glassShadow : undefined,
                borderRadius: forExport ? 16 : 7,
                padding: forExport ? "26px 30px" : "9px 13px",
                border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
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
                background: isGlassMode ? glassCardBg : codeBlockBg,
                backdropFilter: isGlassMode ? glassBackdrop : undefined,
                WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                boxShadow: isGlassMode ? glassShadow : undefined,
                borderRadius: forExport ? 16 : 7,
                padding: forExport ? "26px 30px" : "9px 13px",
                border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
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
                    padding: isGlassMode ? (forExport ? "12px 18px" : "5px 10px") : (forExport ? "12px 0" : "4px 0"),
                    background: isGlassMode ? glassCardBg : "transparent",
                    backdropFilter: isGlassMode ? glassBackdrop : undefined,
                    WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                    borderRadius: isGlassMode ? (forExport ? 14 : 7) : 0,
                    border: isGlassMode ? glassBorder : "none",
                    boxShadow: isGlassMode ? glassShadow : "none",
                    borderBottom: !isGlassMode && i < slide.steps!.length - 1 ? `1px solid ${borderColor}` : undefined,
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
                      <span style={{ display: "block", fontSize: F.stepDesc, color: bodyColor, marginTop: 2 }}>{renderRichText(step.description, theme, forExport, isLight)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TABLE */}
            {slide.table && (
              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                background: isGlassMode ? glassCardBg : "transparent",
                backdropFilter: isGlassMode ? glassBackdrop : undefined,
                WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                boxShadow: isGlassMode ? glassShadow : undefined,
                borderRadius: isGlassMode ? (forExport ? 16 : 8) : 0,
                padding: isGlassMode ? (forExport ? "16px 20px" : "6px 10px") : 0,
                border: isGlassMode ? glassBorder : "none",
              }}>
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
                        color: row.highlight ? (isLight ? theme.darkText : accent) : tableBodyColor,
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
                background: isGlassMode
                  ? (isLight ? "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%)" : `linear-gradient(135deg, ${accent}1C 0%, rgba(255,255,255,0.03) 100%)`)
                  : insightBg,
                backdropFilter: isGlassMode ? glassBackdrop : undefined,
                WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                boxShadow: isGlassMode ? (isLight ? "0 4px 16px rgba(0,0,0,0.04)" : `inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 24px -4px rgba(0,0,0,0.35)`) : undefined,
                borderLeft: `${forExport ? 4 : 2}px solid ${insightBorderColor}`,
                borderTop: isGlassMode ? (isLight ? "1px solid rgba(255,255,255,0.85)" : "1px solid rgba(255,255,255,0.12)") : "none",
                borderRight: isGlassMode ? (isLight ? "1px solid rgba(255,255,255,0.85)" : "1px solid rgba(255,255,255,0.12)") : "none",
                borderBottom: isGlassMode ? (isLight ? "1px solid rgba(255,255,255,0.85)" : "1px solid rgba(255,255,255,0.12)") : "none",
                borderRadius: `0 ${forExport ? 12 : 5}px ${forExport ? 12 : 5}px 0`,
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

            {/* DOS & DON'TS */}
            {slide.type === "dosdonts" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: forExport ? 24 : 9, flex: 1 }}>
                  {/* DO column */}
                  <div style={{
                    flex: 1,
                    background: isGlassMode
                      ? (isLight ? "linear-gradient(135deg, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.06) 100%)" : "linear-gradient(135deg, rgba(34,197,94,0.20) 0%, rgba(34,197,94,0.04) 100%)")
                      : (isLight ? "rgba(34,197,94,0.07)" : "rgba(34,197,94,0.10)"),
                    borderRadius: forExport ? 16 : 8,
                    border: `1px solid rgba(34,197,94,${isGlassMode ? "0.35" : "0.25"})`,
                    backdropFilter: isGlassMode ? glassBackdrop : undefined,
                    WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                    boxShadow: isGlassMode ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.2)" : undefined,
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
                          {renderRichText(item.text, theme, forExport, isLight)}
                        </span>
                        {item.detail && (
                          <span style={{ display: "block", fontSize: forExport ? 20 : 8, color: bodyColor, lineHeight: 1.4, marginTop: 2 }}>
                            {renderRichText(item.detail, theme, forExport, isLight)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* DON'T column */}
                  <div style={{
                    flex: 1,
                    background: isGlassMode
                      ? (isLight ? "linear-gradient(135deg, rgba(239,68,68,0.18) 0%, rgba(239,68,68,0.06) 100%)" : "linear-gradient(135deg, rgba(239,68,68,0.20) 0%, rgba(239,68,68,0.04) 100%)")
                      : (isLight ? "rgba(239,68,68,0.07)" : "rgba(239,68,68,0.10)"),
                    borderRadius: forExport ? 16 : 8,
                    border: `1px solid rgba(239,68,68,${isGlassMode ? "0.35" : "0.25"})`,
                    backdropFilter: isGlassMode ? glassBackdrop : undefined,
                    WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                    boxShadow: isGlassMode ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.2)" : undefined,
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
                          {renderRichText(item.text, theme, forExport, isLight)}
                        </span>
                        {item.detail && (
                          <span style={{ display: "block", fontSize: forExport ? 20 : 8, color: bodyColor, lineHeight: 1.4, marginTop: 2 }}>
                            {renderRichText(item.detail, theme, forExport, isLight)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PITFALLS */}
            {slide.type === "pitfalls" && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: forExport ? 18 : 7, flex: 1, justifyContent: "center" }}>
                  {(slide.pitfalls ?? []).slice(0, 4).map((p, i) => (
                    <div key={i} style={{
                      display: "flex",
                      gap: forExport ? 20 : 8,
                      alignItems: "flex-start",
                      padding: isGlassMode ? (forExport ? "14px 18px" : "6px 10px") : (forExport ? "16px 0" : "5px 0"),
                      background: isGlassMode ? glassCardBg : "transparent",
                      backdropFilter: isGlassMode ? glassBackdrop : undefined,
                      WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                      borderRadius: isGlassMode ? (forExport ? 14 : 7) : 0,
                      border: isGlassMode ? glassBorder : "none",
                      boxShadow: isGlassMode ? glassShadow : "none",
                      borderBottom: !isGlassMode && i < (slide.pitfalls!.length - 1) && i < 3 ? `1px solid ${borderColor}` : "none",
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
                          {renderRichText(p.description, theme, forExport, isLight)}
                        </span>
                        {p.fix && (
                          <span style={{ display: "block", fontSize: F.pitfallDesc, color: accent, fontWeight: 600, marginTop: forExport ? 6 : 2 }}>
                            Fix: {renderRichText(p.fix, theme, forExport, isLight)}
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
                  background: isGlassMode
                    ? (isLight ? "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 100%)" : `linear-gradient(135deg, ${accent}1C 0%, rgba(255,255,255,0.03) 100%)`)
                    : insightBg,
                  backdropFilter: isGlassMode ? glassBackdrop : undefined,
                  WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                  boxShadow: isGlassMode ? (isLight ? "0 4px 16px rgba(0,0,0,0.04)" : `inset 0 1px 0 rgba(255,255,255,0.18), 0 8px 24px -4px rgba(0,0,0,0.35)`) : undefined,
                  borderLeft: `${forExport ? 4 : 2}px solid ${insightBorderColor}`,
                  borderTop: isGlassMode ? (isLight ? "1px solid rgba(255,255,255,0.85)" : "1px solid rgba(255,255,255,0.12)") : "none",
                  borderRight: isGlassMode ? (isLight ? "1px solid rgba(255,255,255,0.85)" : "1px solid rgba(255,255,255,0.12)") : "none",
                  borderBottom: isGlassMode ? (isLight ? "1px solid rgba(255,255,255,0.85)" : "1px solid rgba(255,255,255,0.12)") : "none",
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
                  background: isGlassMode ? glassCardBg : codeBlockBg,
                  backdropFilter: isGlassMode ? glassBackdrop : undefined,
                  WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                  boxShadow: isGlassMode ? glassShadow : undefined,
                  borderRadius: forExport ? 16 : 7,
                  padding: forExport ? "22px 26px" : "8px 12px",
                  border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
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
                  background: isGlassMode ? glassCardBg : codeBlockBg,
                  backdropFilter: isGlassMode ? glassBackdrop : undefined,
                  WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                  boxShadow: isGlassMode ? glassShadow : undefined,
                  borderRadius: forExport ? 16 : 7,
                  padding: forExport ? "28px 26px" : "10px 12px",
                  border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
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
                      {renderRichText(slide.body, theme, forExport, isLight)}
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
                      background: isGlassMode ? glassCardBg : codeBlockBg,
                      backdropFilter: isGlassMode ? glassBackdrop : undefined,
                      WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                      boxShadow: isGlassMode ? glassShadow : undefined,
                      border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
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

            {/* ─── HISTOGRAM (CRISIL-Style) ────────────────────────────────── */}
            {slide.type === "histogram" && slide.histogram && (
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

                <div style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: forExport ? 16 : 6,
                }}>
                  {slide.histogram.bars.map((bar, bi) => {
                    const maxVal = slide.histogram?.maxValue ?? 100;
                    const widthPct = Math.min(100, Math.max(0, (bar.value / maxVal) * 100));
                    
                    return (
                      <div key={bi} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: forExport ? 16 : 6,
                        background: isLight ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)",
                        padding: forExport ? "12px 16px" : "5px 7px",
                        borderRadius: forExport ? 12 : 5,
                        border: `1px solid ${isLight ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)"}`
                      }}>
                        {/* Institutional Ticker Badge (Logo replacement) */}
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: forExport ? 8 : 3,
                          background: bar.highlight ? (isLight ? theme.primary + "25" : theme.primaryLight + "25") : (isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.06)"),
                          padding: forExport ? "8px 12px" : "3px 5px",
                          borderRadius: forExport ? 8 : 4,
                          border: `1px solid ${bar.highlight ? (isLight ? theme.primary + "50" : theme.primaryLight + "50") : borderColor}`,
                          minWidth: forExport ? 120 : 45,
                          justifyContent: "center"
                        }}>
                          {bar.icon && <span style={{ fontSize: forExport ? 18 : 7 }}>{bar.icon}</span>}
                          <span style={{
                            fontSize: forExport ? 16 : 6.5,
                            fontWeight: 800,
                            color: bar.highlight ? accent : mutedFg,
                            letterSpacing: 0.5,
                            fontFamily: "'Space Mono', monospace"
                          }}>{bar.tickerLogo}</span>
                        </div>

                        {/* Label */}
                        <div style={{
                          width: forExport ? 160 : 65,
                          fontSize: forExport ? 16 : 6.5,
                          fontWeight: 600,
                          color: headingColor,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}>
                          {bar.label}
                        </div>

                        {/* Bar Chart Area */}
                        <div style={{
                          flex: 1,
                          height: forExport ? 28 : 12,
                          background: trackColor,
                          borderRadius: forExport ? 6 : 3,
                          overflow: "hidden",
                          position: "relative",
                        }}>
                          <div style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: `${widthPct}%`,
                            background: bar.highlight ? accent : (isLight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.25)"),
                            borderRadius: forExport ? 6 : 3,
                            transition: "width 1s ease-out",
                          }} />
                        </div>

                        {/* Value Text */}
                        <div style={{
                          minWidth: forExport ? 70 : 30,
                          textAlign: "right",
                          fontSize: forExport ? 18 : 7,
                          fontWeight: 800,
                          color: bar.highlight ? accent : headingColor,
                          fontFamily: "'Space Mono', monospace"
                        }}>
                          {bar.valueLabel}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Optional Caption/Legend underneath */}
                {slide.histogram?.caption && (
                  <div style={{
                    marginTop: forExport ? 16 : 6,
                    paddingTop: forExport ? 12 : 5,
                    borderTop: `1px solid ${borderColor}`,
                    fontSize: forExport ? 14 : 5.5,
                    color: mutedFg,
                    fontStyle: "italic",
                    textAlign: "center"
                  }}>
                    {slide.histogram.caption}
                  </div>
                )}
              </div>
            )}

            {/* ─── 📊 KPI BENTO GRID ────────────────────────────── */}
            {(slide.type === "kpi" || slide.kpis) && slide.kpis && (
              <div style={{
                display: "grid",
                gridTemplateColumns: slide.kpis.length <= 2 ? "1fr 1fr" : "1fr 1fr",
                gap: forExport ? 16 : 7,
                flex: 1,
                alignContent: "center",
              }}>
                {slide.kpis.map((kpi, ki) => (
                  <div key={ki} style={{
                    background: isGlassMode ? glassCardBg : codeBlockBg,
                    backdropFilter: isGlassMode ? glassBackdrop : undefined,
                    WebkitBackdropFilter: isGlassMode ? glassBackdrop : undefined,
                    boxShadow: isGlassMode ? glassShadow : undefined,
                    border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
                    borderRadius: forExport ? 16 : 8,
                    padding: forExport ? "20px 24px" : "8px 11px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 6 }}>
                      <span style={{ fontSize: F.tag, fontWeight: 700, color: mutedFg, letterSpacing: 1.5, textTransform: "uppercase" }}>
                        {kpi.label}
                      </span>
                      {kpi.badge && (
                        <span style={{
                          fontSize: forExport ? 16 : 6.5,
                          fontWeight: 800,
                          padding: forExport ? "4px 10px" : "2px 5px",
                          borderRadius: 4,
                          background: `${accent}20`,
                          color: accent,
                          border: `1px solid ${accent}40`,
                        }}>
                          {kpi.badge}
                        </span>
                      )}
                    </div>

                    <div style={{ margin: `${forExport ? 10 : 4}px 0` }}>
                      <span style={{
                        fontSize: forExport ? 52 : 20,
                        fontWeight: 900,
                        color: headingColor,
                        fontFamily: "'Space Mono', monospace",
                        letterSpacing: -1,
                        lineHeight: 1,
                        display: "block",
                      }}>
                        {kpi.value}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: forExport ? 8 : 4 }}>
                      {kpi.change && (
                        <span style={{
                          fontSize: forExport ? 18 : 7.5,
                          fontWeight: 800,
                          color: kpi.isPositive ? (isLight ? "#059669" : "#00F5A0") : (isLight ? "#DC2626" : "#F43F5E"),
                          display: "inline-flex",
                          alignItems: "center",
                        }}>
                          {kpi.change}
                        </span>
                      )}
                      {kpi.subtext && (
                        <span style={{ fontSize: forExport ? 16 : 6.5, color: mutedFg, fontStyle: "italic" }}>
                          {kpi.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ─── ⚖️ BULL VS BEAR SPLIT CARD ───────────────────── */}
            {(slide.type === "bullbear" || slide.bullBear) && slide.bullBear && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: forExport ? 18 : 8,
                flex: 1,
                alignContent: "center",
              }}>
                {/* Bull Thesis */}
                <div style={{
                  background: isGlassMode
                    ? (isLight ? "linear-gradient(180deg, rgba(16,185,129,0.12) 0%, rgba(16,185,129,0.03) 100%)" : "linear-gradient(180deg, rgba(0,245,160,0.12) 0%, rgba(0,245,160,0.02) 100%)")
                    : (isLight ? "rgba(16,185,129,0.06)" : "rgba(16,185,129,0.10)"),
                  border: `1px solid ${isLight ? "rgba(16,185,129,0.4)" : "rgba(0,245,160,0.35)"}`,
                  boxShadow: isGlassMode ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.3)" : undefined,
                  borderRadius: forExport ? 16 : 8,
                  padding: forExport ? "20px 22px" : "8px 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: forExport ? 12 : 5,
                }}>
                  <div style={{
                    fontSize: F.dosDontsHeader,
                    fontWeight: 800,
                    color: isLight ? "#059669" : "#00F5A0",
                    letterSpacing: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    borderBottom: "1px solid rgba(0,245,160,0.2)",
                    paddingBottom: forExport ? 8 : 3,
                  }}>
                    🟢 {slide.bullBear.bullTitle || "THE BULL CASE"}
                  </div>
                  {slide.bullBear.bullPoints.map((pt, pi) => (
                    <div key={pi} style={{ paddingBottom: pi < slide.bullBear!.bullPoints.length - 1 ? (forExport ? 8 : 3) : 0 }}>
                      <span style={{ display: "block", fontSize: F.dosDontsItem, fontWeight: 700, color: headingColor, lineHeight: 1.35 }}>
                        {pt.title}
                      </span>
                      {pt.detail && (
                        <span style={{ display: "block", fontSize: forExport ? 18 : 7.5, color: bodyColor, marginTop: 2, lineHeight: 1.4 }}>
                          {renderRichText(pt.detail, theme, forExport, isLight)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bear Risk */}
                <div style={{
                  background: isGlassMode
                    ? (isLight ? "linear-gradient(180deg, rgba(239,68,68,0.12) 0%, rgba(239,68,68,0.03) 100%)" : "linear-gradient(180deg, rgba(244,63,94,0.12) 0%, rgba(244,63,94,0.02) 100%)")
                    : (isLight ? "rgba(239,68,68,0.06)" : "rgba(239,68,68,0.10)"),
                  border: `1px solid ${isLight ? "rgba(239,68,68,0.4)" : "rgba(244,63,94,0.35)"}`,
                  boxShadow: isGlassMode ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.3)" : undefined,
                  borderRadius: forExport ? 16 : 8,
                  padding: forExport ? "20px 22px" : "8px 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: forExport ? 12 : 5,
                }}>
                  <div style={{
                    fontSize: F.dosDontsHeader,
                    fontWeight: 800,
                    color: isLight ? "#DC2626" : "#F43F5E",
                    letterSpacing: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    borderBottom: "1px solid rgba(244,63,94,0.2)",
                    paddingBottom: forExport ? 8 : 3,
                  }}>
                    🔴 {slide.bullBear.bearTitle || "THE BEAR RISK"}
                  </div>
                  {slide.bullBear.bearPoints.map((pt, pi) => (
                    <div key={pi} style={{ paddingBottom: pi < slide.bullBear!.bearPoints.length - 1 ? (forExport ? 8 : 3) : 0 }}>
                      <span style={{ display: "block", fontSize: F.dosDontsItem, fontWeight: 700, color: headingColor, lineHeight: 1.35 }}>
                        {pt.title}
                      </span>
                      {pt.detail && (
                        <span style={{ display: "block", fontSize: forExport ? 18 : 7.5, color: bodyColor, marginTop: 2, lineHeight: 1.4 }}>
                          {renderRichText(pt.detail, theme, forExport, isLight)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ─── 🧭 CATALYST TIMELINE ──────────────────────────── */}
            {(slide.type === "timeline" || slide.timeline) && slide.timeline && (
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: forExport ? 14 : 5,
                flex: 1,
                justifyContent: "center",
              }}>
                {slide.timeline.map((item, ti) => (
                  <div key={ti} style={{
                    background: item.highlight ? (isLight ? `${theme.primary}18` : `${accent}18`) : (isGlassMode ? glassCardBg : codeBlockBg),
                    border: item.highlight ? `1px solid ${accent}` : (isGlassMode ? glassBorder : `1px solid ${borderColor}`),
                    borderRadius: forExport ? 14 : 7,
                    padding: forExport ? "14px 18px" : "6px 10px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: forExport ? 16 : 7,
                    boxShadow: item.highlight ? `0 0 16px -4px ${accent}66` : (isGlassMode ? glassShadow : undefined),
                  }}>
                    <span style={{
                      fontSize: forExport ? 18 : 7,
                      fontWeight: 800,
                      color: item.highlight ? "#000000" : accent,
                      background: item.highlight ? accent : `${accent}25`,
                      padding: forExport ? "6px 14px" : "2px 6px",
                      borderRadius: 4,
                      fontFamily: "'Space Mono', monospace",
                      flexShrink: 0,
                      marginTop: 2,
                    }}>
                      {item.period}
                    </span>
                    <div style={{ flex: 1 }}>
                      <span style={{ display: "block", fontSize: F.stepTitle, fontWeight: 800, color: headingColor }}>
                        {item.title}
                      </span>
                      <span style={{ display: "block", fontSize: F.stepDesc, color: bodyColor, marginTop: 2, lineHeight: 1.45 }}>
                        {renderRichText(item.description, theme, forExport, isLight)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ─── 🎚️ VALUATION GAUGE / METER ──────────────────── */}
            {(slide.type === "gauge" || slide.valuationGauge) && slide.valuationGauge && (
              <div style={{
                background: isGlassMode ? glassCardBg : codeBlockBg,
                border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
                boxShadow: isGlassMode ? glassShadow : undefined,
                borderRadius: forExport ? 16 : 8,
                padding: forExport ? "24px 28px" : "10px 14px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: F.tag, fontWeight: 700, color: mutedFg, letterSpacing: 2, textTransform: "uppercase" }}>
                    METRIC: {slide.valuationGauge.metric}
                  </span>
                  <span style={{
                    fontSize: forExport ? 16 : 6.5,
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    padding: forExport ? "6px 16px" : "2px 7px",
                    borderRadius: 6,
                    background: slide.valuationGauge.zone === "cheap" ? "#00F5A025" : slide.valuationGauge.zone === "fair" ? "#38BDF825" : slide.valuationGauge.zone === "stretched" ? "#F59E0B25" : "#F43F5E25",
                    color: slide.valuationGauge.zone === "cheap" ? "#00F5A0" : slide.valuationGauge.zone === "fair" ? "#38BDF8" : slide.valuationGauge.zone === "stretched" ? "#F59E0B" : "#F43F5E",
                    border: `1px solid ${slide.valuationGauge.zone === "cheap" ? "#00F5A0" : slide.valuationGauge.zone === "fair" ? "#38BDF8" : slide.valuationGauge.zone === "stretched" ? "#F59E0B" : "#F43F5E"}55`,
                  }}>
                    ZONE: {slide.valuationGauge.zone}
                  </span>
                </div>

                <div style={{ textAlign: "center", margin: `${forExport ? 16 : 6}px 0` }}>
                  <span style={{ fontSize: forExport ? 64 : 26, fontWeight: 900, fontFamily: "'Space Mono', monospace", color: accent }}>
                    {slide.valuationGauge.currentValue}
                  </span>
                  <span style={{ display: "block", fontSize: forExport ? 18 : 7.5, color: mutedFg, marginTop: 4 }}>
                    Current Multiplier
                  </span>
                </div>

                {/* Range Bar */}
                <div>
                  <div style={{ height: forExport ? 12 : 5, background: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)", borderRadius: 6, position: "relative", overflow: "hidden" }}>
                    <div style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: slide.valuationGauge.zone === "cheap" ? "25%" : slide.valuationGauge.zone === "fair" ? "50%" : slide.valuationGauge.zone === "stretched" ? "75%" : "95%",
                      background: `linear-gradient(90deg, #00F5A0 0%, #38BDF8 40%, #F59E0B 70%, #F43F5E 100%)`,
                      borderRadius: 6,
                    }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: forExport ? 8 : 3, fontSize: forExport ? 14 : 6, color: mutedFg }}>
                    <span>Min: {slide.valuationGauge.bandMin}</span>
                    <span>Max: {slide.valuationGauge.bandMax}</span>
                  </div>
                </div>

                <div style={{
                  background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.04)",
                  padding: forExport ? "12px 16px" : "5px 8px",
                  borderRadius: forExport ? 10 : 5,
                  borderLeft: `3px solid ${accent}`,
                  marginTop: forExport ? 12 : 5,
                }}>
                  <p style={{ fontSize: F.stepDesc, color: headingColor, margin: 0, lineHeight: 1.45, fontWeight: 600 }}>
                    💡 Institutional Verdict: {slide.valuationGauge.verdict}
                  </p>
                </div>
              </div>
            )}

            {/* ─── 📈 FINANCIAL CHART / SPARKLINE COMPONENT ────── */}
            {(slide.type === "chart" || slide.chart) && slide.chart && (() => {
              const ch = slide.chart;
              const pts = ch.dataPoints || [];
              const rawVals = pts.map(p => p.value);
              const minVal = ch.yAxisMin !== undefined ? ch.yAxisMin : Math.min(...rawVals);
              const maxVal = ch.yAxisMax !== undefined ? ch.yAxisMax : Math.max(...rawVals);
              const range = maxVal - minVal || 1;

              const W = 460;
              const H = 160;
              const padX = 20;
              const padY = 16;
              const plotW = W - padX * 2;
              const plotH = H - padY * 2;

              const coords = pts.map((p, idx) => {
                const x = padX + (idx / Math.max(1, pts.length - 1)) * plotW;
                const y = H - padY - ((p.value - minVal) / range) * plotH;
                return { x, y, ...p };
              });

              const lineD = coords.reduce((acc, c, idx) => {
                return idx === 0 ? `M ${c.x} ${c.y}` : `${acc} L ${c.x} ${c.y}`;
              }, "");

              const areaD = coords.length > 0
                ? `${lineD} L ${coords[coords.length - 1].x} ${H - padY} L ${coords[0].x} ${H - padY} Z`
                : "";

              const lastPt = coords[coords.length - 1];

              return (
                <div style={{
                  background: isGlassMode ? glassCardBg : codeBlockBg,
                  border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
                  boxShadow: isGlassMode ? glassShadow : undefined,
                  borderRadius: forExport ? 16 : 8,
                  padding: forExport ? "22px 26px" : "10px 14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  {/* Chart Top Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <span style={{ fontSize: F.tag, fontWeight: 700, color: mutedFg, letterSpacing: 2, textTransform: "uppercase" }}>
                        {ch.metricName}
                      </span>
                      <div style={{ display: "flex", alignItems: "baseline", gap: forExport ? 12 : 6, marginTop: 2 }}>
                        <span style={{ fontSize: forExport ? 48 : 20, fontWeight: 900, fontFamily: "'Space Mono', monospace", color: headingColor, letterSpacing: -0.5 }}>
                          {ch.currentValue}
                        </span>
                        {ch.change && (
                          <span style={{
                            fontSize: forExport ? 16 : 7,
                            fontWeight: 800,
                            padding: forExport ? "3px 10px" : "1px 5px",
                            borderRadius: 4,
                            background: ch.isPositive ? "#00F5A022" : "#F43F5E22",
                            color: ch.isPositive ? "#00F5A0" : "#F43F5E",
                            border: `1px solid ${ch.isPositive ? "#00F5A044" : "#F43F5E44"}`,
                            fontFamily: "'Space Mono', monospace",
                          }}>
                            {ch.change}
                          </span>
                        )}
                      </div>
                    </div>

                    {ch.badge && (
                      <span style={{
                        fontSize: forExport ? 14 : 6,
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        padding: forExport ? "4px 10px" : "2px 6px",
                        borderRadius: 4,
                        background: `${accent}22`,
                        color: accent,
                        border: `1px solid ${accent}44`,
                      }}>
                        {ch.badge}
                      </span>
                    )}
                  </div>

                  {/* SVG Chart Area */}
                  <div style={{ position: "relative", width: "100%", margin: `${forExport ? 10 : 4}px 0` }}>
                    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", overflow: "visible" }}>
                      <defs>
                        <linearGradient id={`chartGrad-${slide.tag}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={accent} stopOpacity={isLight ? 0.20 : 0.35} />
                          <stop offset="100%" stopColor={accent} stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Gridlines */}
                      <line x1={padX} y1={padY} x2={W - padX} y2={padY} stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"} strokeDasharray="3 3" />
                      <line x1={padX} y1={H / 2} x2={W - padX} y2={H / 2} stroke={isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)"} strokeDasharray="3 3" />
                      <line x1={padX} y1={H - padY} x2={W - padX} y2={H - padY} stroke={isLight ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)"} />

                      {/* Area Fill */}
                      {areaD && <path d={areaD} fill={`url(#chartGrad-${slide.tag})`} />}

                      {/* Stroke Line */}
                      {lineD && (
                        <path
                          d={lineD}
                          fill="none"
                          stroke={accent}
                          strokeWidth={forExport ? 5 : 2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter={isGlassMode ? `drop-shadow(0 0 8px ${accent})` : undefined}
                        />
                      )}

                      {/* End point pulse indicator */}
                      {lastPt && (
                        <>
                          <circle cx={lastPt.x} cy={lastPt.y} r={forExport ? 12 : 5} fill={accent} fillOpacity="0.25" />
                          <circle cx={lastPt.x} cy={lastPt.y} r={forExport ? 6 : 2.5} fill="#FFFFFF" stroke={accent} strokeWidth={forExport ? 3 : 1.5} />
                        </>
                      )}
                    </svg>

                    {/* X-Axis Labels */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 2, fontSize: forExport ? 13 : 5.5, color: mutedFg, fontFamily: "'Space Mono', monospace" }}>
                      {coords.filter((_, i) => i === 0 || i === Math.floor(coords.length / 2) || i === coords.length - 1).map((c, i) => (
                        <span key={i}>{c.label}</span>
                      ))}
                    </div>
                  </div>

                  {/* Subtext info */}
                  {ch.subtext && (
                    <div style={{
                      background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
                      padding: forExport ? "8px 12px" : "3px 6px",
                      borderRadius: 4,
                      fontSize: forExport ? 13 : 5.5,
                      color: mutedFg,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span>{ch.subtext}</span>
                      {ch.benchmarkName && (
                        <span style={{ color: accent, fontWeight: 700 }}>Benchmark: {ch.benchmarkName}</span>
                      )}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ─── 💧 CAPITAL WATERFALL & MARGIN WALK COMPONENT ─── */}
            {(slide.type === "waterfall" || slide.waterfall) && slide.waterfall && (() => {
              const wf = slide.waterfall;
              return (
                <div style={{
                  background: isGlassMode ? glassCardBg : codeBlockBg,
                  border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
                  boxShadow: isGlassMode ? glassShadow : undefined,
                  borderRadius: forExport ? 16 : 8,
                  padding: forExport ? "22px 26px" : "10px 14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: F.tag, fontWeight: 700, color: mutedFg, letterSpacing: 2, textTransform: "uppercase" }}>
                      {wf.title || "CAPITAL ALLOCATION BRIDGE"}
                    </span>
                    <span style={{ fontSize: forExport ? 15 : 6.5, fontWeight: 800, color: accent, background: `${accent}20`, padding: forExport ? "4px 12px" : "2px 6px", borderRadius: 4 }}>
                      {wf.startingLabel} ➔ {wf.endingLabel}
                    </span>
                  </div>

                  {/* Waterfall Steps Bar List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: forExport ? 10 : 4, margin: `${forExport ? 12 : 5}px 0` }}>
                    {wf.steps.map((st, i) => {
                      const isBase = st.type === "base" || st.type === "total";
                      const isNeg = st.type === "negative";
                      const barColor = isBase ? accent : isNeg ? (isLight ? "#DC2626" : "#F43F5E") : (isLight ? "#059669" : "#00F5A0");
                      const sign = isNeg ? "−" : st.type === "positive" ? "+" : "";

                      return (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: forExport ? 12 : 5 }}>
                          <div style={{ width: forExport ? 150 : 58, fontSize: forExport ? 15 : 6.5, fontWeight: isBase ? 800 : 600, color: isBase ? headingColor : mutedFg, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {st.label}
                          </div>
                          <div style={{ flex: 1, height: forExport ? 18 : 7, background: isLight ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.06)", borderRadius: 4, position: "relative", overflow: "hidden" }}>
                            <div style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              bottom: 0,
                              width: st.percentage || `${Math.max(20, 100 - i * 15)}%`,
                              background: isBase ? `linear-gradient(90deg, ${accent}88, ${accent})` : barColor,
                              borderRadius: 4,
                              boxShadow: isGlassMode ? `0 0 10px ${barColor}44` : undefined,
                            }} />
                          </div>
                          <div style={{ minWidth: forExport ? 75 : 28, textAlign: "right", fontSize: forExport ? 16 : 7, fontWeight: 800, fontFamily: "'Space Mono', monospace", color: barColor }}>
                            {sign}{st.amount}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Summary Insight */}
                  {wf.summaryInsight && (
                    <div style={{
                      background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
                      padding: forExport ? "10px 14px" : "4px 8px",
                      borderRadius: 6,
                      borderLeft: `3px solid ${accent}`,
                      fontSize: forExport ? 14 : 6,
                      color: headingColor,
                      lineHeight: 1.4,
                      fontWeight: 600
                    }}>
                      💡 {wf.summaryInsight}
                    </div>
                  )}
                </div>
              );
            })()}

            {/* ─── ⚔️ VERSUS / DUOPOLY SCORECARD COMPONENT ────── */}
            {(slide.type === "versus" || slide.versus) && slide.versus && (() => {
              const vs = slide.versus;
              return (
                <div style={{
                  background: isGlassMode ? glassCardBg : codeBlockBg,
                  border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
                  boxShadow: isGlassMode ? glassShadow : undefined,
                  borderRadius: forExport ? 16 : 8,
                  padding: forExport ? "20px 24px" : "10px 14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  {/* Versus Dual Header */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: forExport ? 14 : 6 }}>
                    <div style={{
                      background: isLight ? "rgba(0,0,0,0.025)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${vs.entityA.highlight ? accent : (isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)")}`,
                      padding: forExport ? "10px 14px" : "5px 8px",
                      borderRadius: 8,
                      textAlign: "center"
                    }}>
                      <div style={{ fontSize: forExport ? 18 : 7.5, fontWeight: 800, color: vs.entityA.highlight ? accent : headingColor }}>
                        {vs.entityA.name}
                      </div>
                      <span style={{ fontSize: forExport ? 13 : 5.5, fontWeight: 700, color: mutedFg }}>${vs.entityA.ticker}</span>
                    </div>

                    <div style={{
                      width: forExport ? 36 : 16,
                      height: forExport ? 36 : 16,
                      borderRadius: "50%",
                      background: `${accent}22`,
                      border: `1px solid ${accent}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: forExport ? 14 : 6,
                      fontWeight: 900,
                      color: accent
                    }}>
                      VS
                    </div>

                    <div style={{
                      background: isLight ? "rgba(0,0,0,0.025)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${vs.entityB.highlight ? accent : (isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.1)")}`,
                      padding: forExport ? "10px 14px" : "5px 8px",
                      borderRadius: 8,
                      textAlign: "center"
                    }}>
                      <div style={{ fontSize: forExport ? 18 : 7.5, fontWeight: 800, color: vs.entityB.highlight ? accent : headingColor }}>
                        {vs.entityB.name}
                      </div>
                      <span style={{ fontSize: forExport ? 13 : 5.5, fontWeight: 700, color: mutedFg }}>${vs.entityB.ticker}</span>
                    </div>
                  </div>

                  {/* Metrics Comparison Rows */}
                  <div style={{ display: "flex", flexDirection: "column", gap: forExport ? 8 : 3, margin: `${forExport ? 10 : 4}px 0` }}>
                    {vs.metrics.map((m, idx) => (
                      <div key={idx} style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.2fr 1fr",
                        alignItems: "center",
                        padding: forExport ? "7px 10px" : "3px 5px",
                        background: idx % 2 === 0 ? (isLight ? "rgba(0,0,0,0.025)" : "rgba(255,255,255,0.02)") : "transparent",
                        borderRadius: 6,
                        fontSize: forExport ? 14 : 6,
                      }}>
                        <span style={{
                          fontWeight: 800,
                          fontFamily: "'Space Mono', monospace",
                          color: m.advantage === "A" ? (isLight ? "#059669" : "#00F5A0") : headingColor,
                          textAlign: "left"
                        }}>
                          {m.advantage === "A" ? "✓ " : ""}{m.valA}
                        </span>

                        <span style={{ textAlign: "center", color: mutedFg, fontSize: forExport ? 13 : 5.5, fontWeight: 600 }}>
                          {m.label}
                        </span>

                        <span style={{
                          fontWeight: 800,
                          fontFamily: "'Space Mono', monospace",
                          color: m.advantage === "B" ? (isLight ? "#059669" : "#00F5A0") : headingColor,
                          textAlign: "right"
                        }}>
                          {m.valB}{m.advantage === "B" ? " ✓" : ""}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Verdict Footer */}
                  <div style={{
                    background: `${accent}15`,
                    border: `1px solid ${accent}44`,
                    borderRadius: 8,
                    padding: forExport ? "10px 14px" : "4px 8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}>
                    <span style={{ fontSize: forExport ? 13 : 5.5, fontWeight: 800, color: accent, textTransform: "uppercase", letterSpacing: 1 }}>
                      COMMITTEE VERDICT
                    </span>
                    <span style={{ fontSize: forExport ? 14 : 6, fontWeight: 700, color: isLight ? headingColor : "#FFF" }}>
                      {vs.verdict}
                    </span>
                  </div>
                </div>
              );
            })()}

            {/* ─── 📜 CONFIDENTIAL INSTITUTIONAL MEMO COMPONENT ─── */}
            {(slide.type === "memo" || slide.memo) && slide.memo && (() => {
              const mm = slide.memo;
              return (
                <div style={{
                  background: isGlassMode ? glassCardBg : codeBlockBg,
                  border: isGlassMode ? glassBorder : `1px solid ${borderColor}`,
                  boxShadow: isGlassMode ? glassShadow : undefined,
                  borderRadius: forExport ? 16 : 8,
                  padding: forExport ? "20px 24px" : "10px 14px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  fontFamily: "'Space Mono', monospace",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {/* Tilted Red / Amber Classified Stamp */}
                  <div style={{
                    position: "absolute",
                    top: forExport ? 14 : 6,
                    right: forExport ? 18 : 8,
                    transform: "rotate(5deg)",
                    border: `2px solid ${accent}`,
                    color: accent,
                    padding: forExport ? "4px 10px" : "1px 4px",
                    borderRadius: 4,
                    fontSize: forExport ? 13 : 5.5,
                    fontWeight: 900,
                    letterSpacing: 2,
                    opacity: 0.85
                  }}>
                    {mm.securityStamp || "CONFIDENTIAL MEMO"}
                  </div>

                  {/* Memo Metadata Block */}
                  <div style={{
                    borderBottom: isLight ? "1px dashed rgba(0,0,0,0.15)" : "1px dashed rgba(255,255,255,0.15)",
                    paddingBottom: forExport ? 8 : 4,
                    display: "flex",
                    flexDirection: "column",
                    gap: forExport ? 4 : 2,
                    fontSize: forExport ? 13 : 5.5,
                    color: mutedFg
                  }}>
                    <div><strong style={{ color: headingColor }}>DOC ID:</strong> {mm.documentId || "INTERNAL-DESK-2026"}</div>
                    <div><strong style={{ color: headingColor }}>TO:</strong> {mm.targetEntity}</div>
                    <div><strong style={{ color: headingColor }}>FROM:</strong> {mm.sender}</div>
                    <div><strong style={{ color: headingColor }}>DATE:</strong> {mm.date}</div>
                  </div>

                  {/* Redacted Bar Teaser */}
                  <div style={{ display: "flex", gap: 6, margin: `${forExport ? 4 : 2}px 0` }}>
                    <span style={{ background: isLight ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.2)", borderRadius: 2, height: forExport ? 8 : 3, width: forExport ? 120 : 45 }} />
                    <span style={{ background: isLight ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.2)", borderRadius: 2, height: forExport ? 8 : 3, width: forExport ? 80 : 30 }} />
                    <span style={{ background: isLight ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.2)", borderRadius: 2, height: forExport ? 8 : 3, width: forExport ? 160 : 60 }} />
                  </div>

                  {/* Key Finding Box */}
                  <div style={{
                    background: isLight ? "rgba(0,0,0,0.03)" : "rgba(255,255,255,0.03)",
                    borderLeft: `3px solid ${accent}`,
                    padding: forExport ? "8px 12px" : "4px 8px",
                    borderRadius: "0 6px 6px 0",
                  }}>
                    <div style={{ fontSize: forExport ? 12 : 5, color: accent, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 2 }}>
                      ⚠️ CORE FINDING
                    </div>
                    <div style={{ fontSize: forExport ? 14 : 6, fontWeight: 700, color: headingColor, lineHeight: 1.4 }}>
                      {mm.keyFinding}
                    </div>
                  </div>

                  {/* Bullets */}
                  <div style={{ display: "flex", flexDirection: "column", gap: forExport ? 5 : 2 }}>
                    {mm.bulletPoints.map((b, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 6, fontSize: forExport ? 13 : 5.5, color: isLight ? bodyColor : "rgba(255,255,255,0.8)" }}>
                        <span style={{ color: accent }}>▶</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Directive Footer */}
                  <div style={{
                    background: `${accent}20`,
                    padding: forExport ? "8px 12px" : "3px 6px",
                    borderRadius: 4,
                    fontSize: forExport ? 13 : 5.5,
                    fontWeight: 700,
                    color: headingColor,
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                  }}>
                    <span style={{ color: accent, fontWeight: 900 }}>[DIRECTIVE]</span>
                    <span>{mm.actionDirective}</span>
                  </div>
                </div>
              );
            })()}

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
