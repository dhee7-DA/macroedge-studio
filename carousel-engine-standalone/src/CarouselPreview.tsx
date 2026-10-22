import { useRef, useState, useEffect } from "react";
import { Slide } from "./Slide";
import type { SlideData, Theme } from "@workspace/carousel-engine";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";

interface CarouselPreviewProps {
  slides: SlideData[];
  theme: Theme;
  handle: string;
  topic: string;
}

export function CarouselPreview({ slides, theme, handle, topic }: CarouselPreviewProps) {
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

  return (
    <div
      style={{
        background: "#FAFAFA",
        borderRadius: 16,
        border: "1px solid #DBDBDB",
        overflow: "hidden",
        width: SLIDE_W,
        fontFamily: "'Space Grotesk', sans-serif",
        boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
      }}
    >
      {/* IG Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 14px",
          borderBottom: "1px solid #EFEFEF",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: theme.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          {handle[0].toUpperCase()}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>@{handle}</div>
          <div style={{ fontSize: 11, color: "#8E8E8E" }}>SQL Series</div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="5" cy="12" r="1.5" fill="#1A1A1A" />
            <circle cx="12" cy="12" r="1.5" fill="#1A1A1A" />
            <circle cx="19" cy="12" r="1.5" fill="#1A1A1A" />
          </svg>
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
            />
          ))}
        </div>
      </div>

      {/* IG Actions */}
      <div style={{ background: "#FFFFFF", padding: "10px 14px 2px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Heart size={22} strokeWidth={1.5} color="#1A1A1A" />
          <MessageCircle size={22} strokeWidth={1.5} color="#1A1A1A" />
          <Send size={22} strokeWidth={1.5} color="#1A1A1A" />
          <Bookmark size={22} strokeWidth={1.5} color="#1A1A1A" style={{ marginLeft: "auto" }} />
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 5, padding: "8px 0 4px" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === currentSlide ? 14 : 6,
                height: 6,
                borderRadius: 3,
                background: i === currentSlide ? theme.primary : "#DBDBDB",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>

        <div style={{ fontSize: 11, color: "#8E8E8E", paddingBottom: 10, lineHeight: 1.4 }}>
          <span style={{ fontWeight: 700, color: "#1A1A1A" }}>@{handle}</span>{" "}
          {topic} — SQL Series · Swipe through all {slides.length} slides
          <span style={{ display: "block", color: "#C7C7C7", marginTop: 2 }}>2 HOURS AGO</span>
        </div>
      </div>
    </div>
  );
}
