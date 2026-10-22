# MacroEdge Phase 2 UI Protocol

This skill document defines the exact layout constraints, UI logic, and typography rules established during the "MacroEdge Phase 2 Upgrade." Any future carousels, slide engines, or component rebuilds *must* adhere strictly to these rules to maintain the refined institutional aesthetic.

## 1. System Level Chrome
- **Handle Placement:** The brand handle (`@macroedge_in`) must exist EXCLUSIVELY at the **Absolute Top-Left** coordinates of all non-hero slides (e.g., `top: 44px, left: 48px`). 
- **NO Watermarks:** There shall be no heavy background text watermarks, bottom-right brand tags, or bottom-left handles. The background must remain clean and uncluttered.

## 2. The Progress Bar UX
- **The Tracker:** A continuous horizontal line (height: 2px - 4px) must span the bottom of the slide, with dynamic fill mapping to progress percentage.
- **The Slide Counter:** Positioned immediately to the right of the progress track (e.g., `11 / 12`).
- **The SWIPE Pill:** A high-fidelity bordered pill surrounding "SWIPE →". It must be positioned on the absolute bottom-right, aligned with the progress track and counter.

## 3. Hero Slide Construction (The Front Page)
- **Minimalism:** Hero slides MUST be aggressively concise. Remove dense paragraph summaries (`slide.body`).
- **The Build:** 
  1. Top: Category tag.
  2. Center: A massive, punchy, two-line title (`Heading` + `HeadingAccent`).
  3. Below Title: A subtle, thin horizontal line border separating the header from the content.
  4. Bottom: A crisp 1-2 sentence hook or dynamic pill bullets representing "Key Takeaways."

## 4. Typography & Spacing
- **Font Stack:** All text must render with `Space Grotesk` (clean tech aesthetic).
- **List Items (Steps / Features):** Stacked features must be separated by a subtle 1px divider line (`solid rgba(255,255,255,0.15)` for dark mode). Bold the feature titles to immediately draw the eye, keeping descriptions muted.
- **Insight Boxes:** Highlights/Blockquotes should be rendered at the bottom of concept slides with a distinct, thick left-sided border in the theme's core accent color.

**Reference Vault:** The exact reference code components dictating these aesthetics (`Slide.tsx`, `themes.ts`, `Home.tsx`) are preserved in `C:\Users\hp\Desktop\python\macroedge-design-vault\`.
