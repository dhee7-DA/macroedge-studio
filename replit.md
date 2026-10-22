# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## SQL Carousel Generator (`artifacts/sql-carousel`)

Instagram carousel generator for SQL educational content branded as `@dheeSQL`.

- **Framework**: React + Vite, TypeScript
- **Port**: 25243
- **Series**: 38 episodes total (5 new added: Constraints Ep04, Normalization Ep05, Transactions Ep07, Recursive CTEs Ep27, JSON in SQL Ep37)
- **Content files**: `src/lib/sql-topics/` — beginner.ts, beginner-b.ts, intermediate-a through d, advanced-a through e
- **Registration**: `src/lib/sql-content.ts` — SQL_TOPICS record maps topic keys to SlideData arrays
- **Sidebar**: `src/pages/Home.tsx` — TOPIC_GROUPS (order) and TOPIC_LABELS (display names)
- **Next-topic chain**: CTA slides link sequentially via `nextTopic` field using topic key strings
- **Episode numbering convention**: topic keys retain their original prefix (e.g. `04-dml-commands` even though it's Episode 06); only the EPISODE XX OF 38 tagRight and topicNum watermark reflect the true episode number
