import type { SlideData } from "@workspace/carousel-engine";
import type { Theme } from "@workspace/carousel-engine";
import { expandCodeSlides, fitSlidesToCount } from "@workspace/carousel-engine";
import { getSlidesByTopic } from "./sql-content";

export interface GeneratorInput {
  topic: string;
  slideCount: number;
  theme: Theme;
}

export interface GeneratedCarousel {
  topic: string;
  resolvedKey: string;
  topicMatched: boolean;
  slides: SlideData[];
  theme: Theme;
}

export function generateCarousel(input: GeneratorInput): GeneratedCarousel {
  const { topic, slideCount, theme } = input;

  const clampedCount = Math.max(3, Math.min(20, slideCount));
  const { slides: allSlides, resolvedKey, matched } = getSlidesByTopic(topic);

  const fitted = fitSlidesToCount(allSlides, clampedCount);
  const slides = expandCodeSlides(fitted);

  return { topic, resolvedKey, topicMatched: matched, slides, theme };
}
