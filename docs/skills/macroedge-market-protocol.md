# MacroEdge Market Intelligence Protocol (v1.0)

This skill defines the technical protocol for sourcing and integrating fresh market data and company branding into MacroEdge carousels.

## 1. Data Freshness Protocol
NEVER rely on internal training knowledge for specific stock metrics. When a ticker is mentioned:

1.  **Search Loop**: Use `search_web` for the query: `"[Ticker] stock price today Yahoo Finance"`.
2.  **Metric Verification**: Extract and verify the following "Big Five" metrics:
    *   Current Price & % Change (Day)
    *   Market Cap (B/T)
    *   P/E Ratio (TTM)
    *   52-Week Range
    *   Next Earnings Date
3.  **Timestamp**: Always Include a subtle "Data as of [Current Date]" tag on the final summary slide.

## 2. Company Logo Protocol
Company logos are mandatory for "Stock Breakdown" posts to ensure professional branding.

1.  **Search Query**: `"[Company Name] logo transparent png high resolution"`.
2.  **Selection Criteria**:
    *   Prefer SVG or high-res transparent PNG.
    *   Avoid watermarked or low-quality thumbnails.
3.  **Placement**: In the Carousel Studio, logos should be placed in the top-right or top-left corner, maintaining a consistent padding of 40px from the edges.

## 3. Visual Infrastructure (Phase 2)
Replace ASCII charts with high-fidelity visuals using the **[canvas-design](file:///C:/Users/hp/Desktop/python/fin-guy-carousels/skills/canvas-design.md)** principles.

*   **Chart Aesthetics**: Use "Oxford Navy" or "Carbon" backgrounds with "Solar Gold" price lines.
*   **Vector Fidelity**: Prefer SVG paths over pixel-based drawings for sharp, crisp lines.
*   **Information Architecture**: Use systematic reference markers (e.g., small labels at peaks/troughs) rather than large explanatory text blocks.

---

> [!IMPORTANT]
> **Constraint**: Do not provide investment advice. Maintain the "Head of Research" persona—provide the data and the structural context, but let the reader make the final decision.
