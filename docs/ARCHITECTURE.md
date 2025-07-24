# Architecture Overview

This document explains how data flows through the Karakeep Home Portal and maps to the project structure described in `AGENTS.md`.

## Directory Structure

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router entry (server-first) |
| `lib/` | Typed helpers (API fetchers, utilities) |
| `public/` | Static assets |
| `tests/` | Unit & component tests (Vitest + Testing Library) |
| `docker/` | Dockerfile and Compose samples |
| `.github/` | CI workflows |

## Data Flow

1. **Server Components** in `app/` request data from the KaraKeep API using helpers under `lib/`. These helpers validate responses with `zod` before returning typed results.
2. The data is passed as props to **client components** under `src/app/components`. Components remain stateless and focus on rendering.
3. Client components may fetch additional data with SWR when necessary, but the preferred approach is to fetch on the server.
4. Tests in `tests/` verify component output and exported helpers, maintaining ≥ 90 % coverage.

The portal is designed for read-only access, so no user data is stored locally. All API keys are supplied at runtime via Docker secrets.
