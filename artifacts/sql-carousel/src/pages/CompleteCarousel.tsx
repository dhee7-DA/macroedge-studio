import { useState, useEffect } from "react";
import { Slide } from "../components/Slide";
import type { SlideData } from "@workspace/carousel-engine";
import { THEMES, getRandomTheme } from "../lib/themes";
import type { Theme } from "../lib/themes";
import { generateCarousel } from "../lib/carousel-engine";
import { getAvailableTopics, getTopicSlideCount } from "../lib/sql-content";
import { ChevronLeft, ChevronRight, Palette } from "lucide-react";

const HANDLE = "macroedge_in";

export default function CompleteCarousel() {
  const [slides, setSlides] = useState<SlideData[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState<Theme>(() => getRandomTheme());
  const [selectedTopic, setSelectedTopic] = useState("01-hormuz-closure-effect");
  const [showThemePanel, setShowThemePanel] = useState(false);
  const topics = getAvailableTopics();

  // Load carousel on topic change
  useEffect(() => {
    const result = generateCarousel({
      topic: selectedTopic,
      slideCount: 12,
      theme,
    });
    setSlides(result.slides);
    setCurrentSlide(0);
  }, [selectedTopic, theme]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const randomTheme = () => {
    setTheme(getRandomTheme());
  };

  if (slides.length === 0) {
    return (
      <div style={{ minHeight: "100vh", background: "#0F0F0F", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF" }}>
        Loading carousel...
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0F0F0F", padding: "20px", fontFamily: "'Space Grotesk', sans-serif" }}>
      {/* Header */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", marginBottom: "30px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div>
            <h1 style={{ color: "#FFF", margin: "0 0 5px 0", fontSize: "24px", fontWeight: 700 }}>MacroEdge Studio</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "12px" }}>@{HANDLE}</p>
          </div>
          <button
            onClick={randomTheme}
            style={{
              background: theme.primary,
              color: "#000",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Palette size={16} />
            Random Theme
          </button>
        </div>

        {/* Topic Selector */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 700, display: "block", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Select Topic
          </label>
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#FFF",
              padding: "12px",
              borderRadius: "8px",
              fontSize: "14px",
              fontFamily: "'Space Grotesk', sans-serif",
              cursor: "pointer",
            }}
          >
            {topics.map((topic) => (
              <option key={topic} value={topic} style={{ background: "#0F0F0F", color: "#FFF" }}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        {/* Theme Selector */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "rgba(255,255,255,0.6)", fontSize: "12px", fontWeight: 700, display: "block", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Themes ({THEMES.length} Available)
          </label>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "8px" }}>
            {THEMES.map((t, i) => (
              <button
                key={i}
                onClick={() => setTheme(t)}
                style={{
                  background: theme.name === t.name ? t.primary : "rgba(255,255,255,0.05)",
                  border: theme.name === t.name ? `2px solid ${t.primary}` : "1px solid rgba(255,255,255,0.1)",
                  color: theme.name === t.name ? "#000" : "#FFF",
                  padding: "10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "11px",
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  transition: "all 0.2s",
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Carousel */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", marginBottom: "40px" }}>
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#FFF",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          }}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Slide Display */}
        <div style={{ position: "relative" }}>
          <Slide
            slide={slides[currentSlide]}
            index={currentSlide}
            total={slides.length}
            theme={theme}
            handle={HANDLE}
          />
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#FFF",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Navigation */}
      <div style={{ maxWidth: "1400px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "20px", flexWrap: "wrap" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: i === currentSlide ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === currentSlide ? theme.primary : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            />
          ))}
        </div>

        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", fontWeight: 600 }}>
          Slide {currentSlide + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
}
