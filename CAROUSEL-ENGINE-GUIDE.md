# Carousel Engine - Separation Complete

The carousel engine has been successfully extracted into a reusable package. Here's what changed and how to use it.

## What Was Done

### 1. Created `lib/carousel-engine/` Package

A standalone, reusable package containing:
- **types.ts** - All SlideData types and interfaces
- **themes.ts** - Theme system with 6 built-in themes
- **engine.ts** - Core utilities (expandCodeSlides, fitSlidesToCount)
- **Slide.tsx** - The main slide renderer component
- **CarouselPreview.tsx** - Instagram-style preview wrapper
- **index.ts** - Clean exports for consumers

### 2. Updated `sql-carousel` to Use the Engine

The SQL carousel now imports from `@workspace/carousel-engine` instead of local files:
- Removed duplicate types, themes, and components
- Kept only SQL-specific content (sql-topics/, sql-content.ts)
- Updated all imports to use the engine package

## Project Structure

```
sql-carousel/
├── lib/
│   └── carousel-engine/          # ✨ NEW: Reusable engine
│       ├── src/
│       │   ├── types.ts          # All slide types
│       │   ├── themes.ts         # Theme system
│       │   ├── engine.ts         # Core utilities
│       │   ├── Slide.tsx         # Slide renderer
│       │   ├── CarouselPreview.tsx
│       │   └── index.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── README.md
│
└── artifacts/
    └── sql-carousel/             # SQL content only
        └── src/
            ├── lib/
            │   ├── sql-topics/   # SQL slide data
            │   ├── sql-content.ts # Topic registry
            │   └── carousel-engine.ts # SQL-specific generator
            ├── components/
            │   └── CarouselPreview.tsx # (uses engine's Slide)
            └── pages/
                └── Home.tsx


## Creating a New Content Series (e.g., Python)

### Step 1: Create New Project Folder

```
artifacts/python-carousel/
├── src/
│   ├── lib/
│   │   ├── python-topics/
│   │   │   ├── beginner.ts
│   │   │   ├── intermediate.ts
│   │   │   └── advanced.ts
│   │   ├── python-content.ts
│   │   └── carousel-engine.ts
│   ├── components/
│   │   └── CarouselPreview.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### Step 2: Install the Engine

In `package.json`:

```json
{
  "name": "@workspace/python-carousel",
  "devDependencies": {
    "@workspace/carousel-engine": "workspace:*",
    "react": "catalog:",
    "react-dom": "catalog:",
    "vite": "catalog:",
    // ... other deps
  }
}
```

### Step 3: Define Your Content

`src/lib/python-topics/beginner.ts`:

```typescript
import type { SlideData } from "@workspace/carousel-engine";

export const T01: SlideData[] = [
  {
    type: "hero",
    background: "light",
    tag: "PYTHON SERIES · BEGINNER",
    tagRight: "EPISODE 01 OF 30",
    heading: "Variables & Data Types",
    headingAccent: "Day 1.",
    body: "Learn how to store and manipulate data in Python...",
    bullets: ["Variables", "Strings", "Numbers", "Booleans"],
    levelBadge: "BEGINNER",
    topicNum: "01",
  },
  {
    type: "concept",
    background: "dark",
    tag: "THE CONCEPT",
    tagRight: "OVERVIEW",
    heading: "Variables are containers for data.",
    body: "In Python, you don't need to declare types explicitly...",
    features: [
      { icon: "📝", label: "Strings", description: "Text data in quotes" },
      { icon: "🔢", label: "Integers", description: "Whole numbers" },
      { icon: "💯", label: "Floats", description: "Decimal numbers" },
      { icon: "✅", label: "Booleans", description: "True or False values" },
    ],
  },
  {
    type: "code",
    background: "light",
    tag: "SYNTAX",
    tagRight: "BASICS",
    heading: "Creating variables in Python.",
    body: "No type declaration needed — Python infers the type automatically.",
    code: [
      { text: "# String variable", highlight: false },
      { text: "name = 'Alice'", highlight: true },
      { text: "" },
      { text: "# Integer variable", highlight: false },
      { text: "age = 25", highlight: true },
      { text: "" },
      { text: "# Float variable", highlight: false },
      { text: "price = 19.99", highlight: true },
      { text: "" },
      { text: "# Boolean variable", highlight: false },
      { text: "is_active = True", highlight: true },
    ],
  },
  // ... more slides
  {
    type: "cta",
    background: "light",
    tag: "PYTHON SERIES",
    heading: "Variables.", 
    headingAccent: "Done.",
    body: "You now understand how to store data in Python. Next: operators and expressions.",
    nextTopic: "02-operators",
    ctaText: "Follow @yourhandle",
  },
];
```

### Step 4: Register Topics

`src/lib/python-content.ts`:

```typescript
import type { SlideData } from "@workspace/carousel-engine";
import { T01 } from "./python-topics/beginner";
// ... import other topics

interface TopicContent {
  key: string;
  slides: SlideData[];
}

const PYTHON_TOPICS: Record<string, SlideData[]> = {
  "01-variables": T01,
  // ... register other topics
};

export function getSlidesByTopic(topic: string) {
  const slides = PYTHON_TOPICS[topic] || [];
  return { slides, resolvedKey: topic, matched: !!PYTHON_TOPICS[topic] };
}

export function getAvailableTopics(): string[] {
  return Object.keys(PYTHON_TOPICS);
}
```

### Step 5: Use the Engine

`src/pages/Home.tsx`:

```typescript
import { useState } from "react";
import { CarouselPreview, Slide, THEMES, getRandomTheme } from "@workspace/carousel-engine";
import type { SlideData } from "@workspace/carousel-engine";
import { getSlidesByTopic } from "@/lib/python-content";

export function Home() {
  const [theme, setTheme] = useState(getRandomTheme());
  const [topic, setTopic] = useState("01-variables");
  
  const { slides } = getSlidesByTopic(topic);

  return (
    <div>
      <CarouselPreview 
        slides={slides}
        theme={theme}
        handle="yourhandle"
        topic="Python Variables"
      />
    </div>
  );
}
```

## Key Benefits

1. **Reusable**: Create Python, JavaScript, Finance, DevOps carousels — just change the content
2. **Consistent**: All carousels use the same polished rendering engine
3. **Maintainable**: Bug fixes and features in the engine benefit all content
4. **Type-safe**: Full TypeScript support with shared types
5. **Themeable**: 6 built-in themes, easy to add more

## Available Slide Types

- **hero** - Opening slide with large heading and bullets
- **concept** - Feature list with icons
- **code** - Syntax-highlighted code blocks
- **table** - Data tables with headers
- **steps** - Numbered instructions
- **reference** - Cheat sheet tables
- **cta** - Call-to-action closing slide
- **dosdonts** - Two-column best practices
- **pitfalls** - Common mistakes with fixes
- **problem** - Practice challenges with solutions
- **schema** - Database schema diagrams (SQL-specific, but reusable)

## Themes

```typescript
import { THEMES, getThemeByIndex, getRandomTheme } from "@workspace/carousel-engine";

// Use a specific theme
const theme = THEMES[0]; // Neon Lime + Void

// Random theme
const theme = getRandomTheme();

// Cycle through themes
const theme = getThemeByIndex(index);
```

Available themes:
1. Neon Lime + Void
2. Hot Magenta + Noir
3. Arctic Blue + Abyss
4. Solar Gold + Carbon
5. Ultraviolet + Slate
6. Cyber Teal + Obsidian

## Next Steps

1. ✅ Engine extracted and working
2. ✅ SQL carousel using the engine
3. 🎯 Create your first new content series (Python, JavaScript, etc.)
4. 🎯 Publish the engine as an npm package (optional)
5. 🎯 Add more themes or slide types as needed

The engine is ready to use. Just create content and plug it in!
