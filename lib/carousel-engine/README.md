# Carousel Engine

A reusable Instagram-style carousel generator for educational content. Create beautiful, branded carousels for any topic — SQL, Python, JavaScript, Finance, or anything else.

## What It Does

The engine handles all the rendering logic, slide types, themes, and UI. You just provide the content data.

## Features

- **11 Slide Types**: hero, concept, code, table, steps, reference, cta, dosdonts, pitfalls, problem, schema
- **6 Built-in Themes**: Neon Lime, Hot Magenta, Arctic Blue, Solar Gold, Ultraviolet, Cyber Teal
- **Export Ready**: Scales to 1080x1350 for Instagram
- **Smart Fitting**: Intelligently drops lower-priority slides to hit target count
- **Code Splitting**: Auto-splits long code blocks across multiple slides

## Usage

```typescript
import { SlideData, Theme, Slide, CarouselPreview, THEMES } from "@workspace/carousel-engine";

// Define your content
const slides: SlideData[] = [
  {
    type: "hero",
    background: "light",
    tag: "PYTHON SERIES · BEGINNER",
    tagRight: "EPISODE 01 OF 20",
    heading: "Variables & Data Types",
    headingAccent: "Day 1.",
    body: "Learn the fundamentals...",
    bullets: ["Variables", "Strings", "Numbers", "Booleans"],
    levelBadge: "BEGINNER",
    topicNum: "01",
  },
  // ... more slides
];

// Render
<CarouselPreview 
  slides={slides}
  theme={THEMES[0]}
  handle="yourhandle"
  topic="Python Basics"
/>
```

## Slide Types

### Hero
Opening slide with large heading, body text, and bullet points.

### Concept
Feature list with icons and descriptions.

### Code
Syntax-highlighted code blocks with optional labels.

### Steps
Numbered step-by-step instructions.

### Dos & Don'ts
Two-column best practices layout.

### Pitfalls
Common mistakes with fixes.

### Problem
Practice challenges with solutions.

### Reference
Cheat sheet tables.

### CTA
Closing slide with call-to-action.

## Creating Content

1. Create a new project folder
2. Install the engine: `"@workspace/carousel-engine": "workspace:*"`
3. Define your slides in TypeScript files
4. Import and render with `CarouselPreview`

See `sql-carousel` for a complete example.
