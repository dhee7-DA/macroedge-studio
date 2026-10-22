import type { SlideData } from "./types";

/**
 * Expands code slides that exceed MAX_LINES into multiple slides
 */
export function expandCodeSlides(slides: SlideData[], maxLines: number = 12): SlideData[] {
  const result: SlideData[] = [];
  for (const slide of slides) {
    if (slide.type === "code" && slide.code && slide.code.length > maxLines) {
      const pt1 = slide.code.slice(0, maxLines);
      const pt2 = slide.code.slice(maxLines);
      result.push({
        ...slide,
        heading: `${slide.heading} (Pt. 1)`,
        codeLabel: "CONTINUED ON NEXT SLIDE →",
        code: pt1,
      });
      result.push({
        ...slide,
        heading: `${slide.heading} (Pt. 2)`,
        codeLabel: "← CONTINUED FROM PREVIOUS",
        code: pt2,
      });
    } else {
      result.push(slide);
    }
  }
  return result;
}

/**
 * Fits slides to a target count by intelligently dropping lower-priority slides
 */
export function fitSlidesToCount(source: SlideData[], targetCount: number): SlideData[] {
  if (source.length === 0) return [];

  if (targetCount >= source.length) return source;

  const hero = source[0];
  const cta = source[source.length - 1];
  const middle = source.slice(1, -1);

  if (targetCount <= 2) return [hero, cta];

  const middleSlots = targetCount - 2;

  if (middle.length === 0) return [hero, cta];

  if (middle.length <= middleSlots) return source;

  const dropCount = middle.length - middleSlots;

  const tagged = middle.map((slide, idx) => {
    let priority: number;
    if (slide.required) {
      priority = -1;
    } else {
      switch (slide.type) {
        case "reference":  priority = 100; break;
        case "dosdonts":   priority = 90;  break;
        case "pitfalls":   priority = 80;  break;
        case "steps":      priority = 60;  break;
        case "schema":     priority = 50;  break;
        case "concept":    priority = 30;  break;
        case "code":       priority = 40;  break;
        case "problem":    priority = -1;  break;
        default:           priority = 50;
      }
      if (slide.type === "code") {
        const codesBefore = middle.slice(0, idx).filter(s => s.type === "code").length;
        if (codesBefore >= 2) priority = 110;
      }
    }
    return { slide, idx, priority };
  });

  const sorted = [...tagged].sort(
    (a, b) => b.priority - a.priority || b.idx - a.idx
  );

  const toDrop = new Set<number>();
  for (let i = 0; i < dropCount; i++) {
    toDrop.add(sorted[i].idx);
  }

  const kept = middle.filter((_, idx) => !toDrop.has(idx));
  return [hero, ...kept, cta];
}
