import { useRef, useState, useEffect } from "react";
import { Slide } from "./Slide";
import type { SlideData, Theme } from "@workspace/carousel-engine";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

interface CarouselPreviewProps {
  slides: SlideData[];
  theme: Theme;
  handle: string;
  topic: string;
  isGlassMode?: boolean;
  colorModeOverride?: "auto" | "light" | "dark";
}

export function CarouselPreview({ slides, theme, handle, topic, isGlassMode = true, colorModeOverride = "auto" }: CarouselPreviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset to first slide when topic changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [topic]);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const SLIDE_W = 420;
  const SLIDE_H = 525;

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, i));
    setCurrentSlide(clamped);
    setDragDelta(0);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragDelta(0);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragDelta(e.clientX - startX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragDelta < -60 && currentSlide < slides.length - 1) {
      goTo(currentSlide + 1);
    } else if (dragDelta > 60 && currentSlide > 0) {
      goTo(currentSlide - 1);
    } else {
      setDragDelta(0);
    }
  };

  const translateX = -currentSlide * SLIDE_W + dragDelta;

  const isLight = colorModeOverride === "light"
    ? true
    : colorModeOverride === "dark"
    ? false
    : Boolean(theme.isLightDefault);

  return (
    <div
      style={{
        background: isLight ? "#FFFFFF" : "#0C0D12",
        borderRadius: 20,
        border: isLight ? "1px solid rgba(0,0,0,0.12)" : "1px solid rgba(255,255,255,0.1)",
        overflow: "hidden",
        width: SLIDE_W,
        fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
        boxShadow: isLight
          ? `0 24px 60px -12px rgba(0,0,0,0.18), 0 0 25px -5px ${theme.primary}25`
          : `0 24px 60px -12px rgba(0,0,0,0.8), 0 0 30px -10px ${theme.primary}22`,
      }}
    >
      {/* Phone / Social Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 16px",
          borderBottom: isLight ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.06)",
          background: isLight ? "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)" : "linear-gradient(180deg, #12141C 0%, #0C0D12 100%)",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: theme.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isLight ? "#FFFFFF" : "#000",
            fontWeight: 800,
            fontSize: 14,
            flexShrink: 0,
            boxShadow: `0 0 12px ${theme.primary}44`,
          }}
        >
          {handle[0].toUpperCase()}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: isLight ? "#0F172A" : "#FFFFFF", letterSpacing: "0.2px" }}>@{handle}</div>
          <div style={{ fontSize: 10, color: isLight ? "rgba(15,23,42,0.55)" : "rgba(255,255,255,0.45)", letterSpacing: "0.5px" }}>MacroEdge Intelligence · Live Preview</div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: theme.primary, background: `${theme.primary}18`, padding: "2px 8px", borderRadius: 10, border: `1px solid ${theme.primary}33` }}>
            {currentSlide + 1}/{slides.length}
          </span>
        </div>
      </div>

      {/* Slides viewport */}
      <div
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          overflow: "hidden",
          position: "relative",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            transform: `translateX(${translateX}px)`,
            transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {slides.map((slide, i) => (
            <Slide
              key={i}
              slide={slide}
              index={i}
              total={slides.length}
              theme={theme}
              handle={handle}
              isGlassMode={isGlassMode}
              colorModeOverride={colorModeOverride}
            />
          ))}
        </div>
      </div>

      {/* Social Actions & Navigation Footer */}
      <div style={{ background: isLight ? "#FFFFFF" : "#0C0D12", padding: "12px 16px 14px", borderTop: isLight ? "1px solid rgba(0,0,0,0.08)" : "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Heart size={20} strokeWidth={1.8} color={isLight ? "#334155" : "rgba(255,255,255,0.8)"} />
          <MessageCircle size={20} strokeWidth={1.8} color={isLight ? "#334155" : "rgba(255,255,255,0.8)"} />
          <Send size={20} strokeWidth={1.8} color={isLight ? "#334155" : "rgba(255,255,255,0.8)"} />
          <Bookmark size={20} strokeWidth={1.8} color={isLight ? "#334155" : "rgba(255,255,255,0.8)"} style={{ marginLeft: "auto" }} />
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, padding: "10px 0 8px" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === currentSlide ? 18 : 6,
                height: 5,
                borderRadius: 3,
                background: i === currentSlide ? theme.primary : isLight ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.18)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
                boxShadow: i === currentSlide ? `0 0 8px ${theme.primary}88` : "none"
              }}
            />
          ))}
        </div>

        <div style={{ fontSize: 11, color: isLight ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
          <span style={{ fontWeight: 700, color: isLight ? "#0F172A" : "#FFFFFF" }}>@{handle}</span>{" "}
          <span style={{ color: isLight ? "rgba(15,23,42,0.7)" : "rgba(255,255,255,0.7)" }}>{topic}</span> · Swipe for full teardown
        </div>
      </div>
    </div>
  );
}
