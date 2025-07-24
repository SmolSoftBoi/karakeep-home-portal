# Karakeep Home Portal Architecture

This document explains how data flows through the portal. The table below lists the key directories.

| Path | Purpose |
| ---- | ------- |
| `app/` | Next.js App Router entry. Server components live here. |
| `lib/` | Typed helpers for API access (future). |
| `public/` | Static assets served as-is. |
| `tests/` | Unit and component tests. |

## Data Flow

1. **Server Load** – `app/page.tsx` fetches bookmark data from the Karakeep API using helpers in `lib/`.
2. **Rendering** – Fetched data is passed to stateless React components like `BookmarkList`.
3. **Client Interaction** – Components are rendered on the client with no additional state; SWR would handle client fetches if needed.

The design keeps logic on the server and components purely presentational.
