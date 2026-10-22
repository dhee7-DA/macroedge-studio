# SQL Carousel Generator

Instagram carousel generator for SQL educational content. Create beautiful, swipeable carousels for learning SQL.

## Features

- 38 SQL episodes covering beginner to advanced topics
- 11 slide types: hero, concept, code, table, steps, reference, cta, dosdonts, pitfalls, problem, schema
- 6 beautiful themes
- Instagram-style preview with swipe navigation
- Export-ready for Instagram (1080x1350)

## Tech Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4
- pnpm workspaces

## Getting Started

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install dependencies
pnpm install

# Run development server
pnpm --filter @workspace/sql-carousel run dev
```

Open http://localhost:5173 to view the app.

## Project Structure

```
sql-carousel/
├── artifacts/
│   └── sql-carousel/     # Main app
│       └── src/
│           ├── lib/
│           │   ├── sql-topics/   # 38 SQL episodes
│           │   └── sql-content.ts
│           └── pages/
├── lib/
│   └── carousel-engine/  # Reusable carousel engine
└── package.json
```

## Topics Covered

- Beginner: Setup, SELECT, DDL, Constraints, Normalization
- Intermediate: JOINs, Subqueries, Aggregation, Window Functions
- Advanced: CTEs, Recursive Queries, JSON, Performance Tuning

## License

MIT