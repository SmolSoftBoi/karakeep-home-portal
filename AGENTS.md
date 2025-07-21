# Karakeep Home Portal · **AGENTS Guide**

## 🔍 Project Overview

**Mission –** *Empower Karakeep users with an instant, clutter‑free homepage that places their most important bookmarks and stats one click away.*

KaraKeep Home Portal is a lightweight, read‑only dashboard that surfaces the most‑used data from your Karakeep instance on a single page. The project is written in **TypeScript**, built with **Next.js (App Router)**, styled with **Tailwind CSS**, and packaged with **Yarn**.

## 🗂️ Project Structure

| Path       | Purpose                                           |
| ---------- | ------------------------------------------------- |
| `app/`     | Next.js App Router entry (server‑first)           |
| `lib/`     | Typed helpers (API fetchers, utilities)           |
| `public/`  | Static assets                                     |
| `tests/`   | Unit & component tests (Vitest + Testing Library) |
| `docker/`  | Dockerfile and Compose samples                    |
| `.github/` | CI workflows                                      |

> **Naming convention** – Directories use **kebab‑case** (e.g. `api-utils/`); React component files use **PascalCase** (e.g. `MasonryGrid.tsx`).

## 🎨 Coding Conventions

### TypeScript

* **TypeScript only** – no `.js` files.
* Avoid `any`; when unavoidable, wrap with `@ts-expect-error` and add a comment.
* Validate all external data with **zod**.
* Document public helpers and utilities with JSDoc (`/** … */`).

### React

* React **functional components** only; default‑export the component.
* Prefer **Server Components**; mark client components with `'use client'`.
* Use **SWR** for client‑side data fetching.
* Keep components **stateless**; data fetching lives in parent/server components.
* Import icons from **lucide‑react** using tree‑shaken paths.

### Styling

* Tailwind utility classes exclusively; avoid external CSS frameworks.
* Follow design tokens; no inline `style` blocks except for CSS variables.

### Dependencies

* Keep new runtime dependencies to a minimum; dev‑deps are allowed for tooling and tests.

## 🧪 Tests

* Framework: **Vitest** + **@testing-library/react**.
* Command: `yarn test`.
* Coverage threshold: **≥ 90 %** – CI fails if coverage drops below this level; Vitest’s coverage reporter surfaces the summary directly in the GitHub Actions run.
* Each component requires a matching test file under `tests/`.

## ✨ Lint & Format

* ESLint config: `./.eslintrc.cjs` (extends `next/core-web-vitals` and Tailwind plugin).
* Prettier config: `./.prettierrc`.
* Commands:

  * `yarn lint` – fail on warnings.
  * `yarn format` – auto‑fix style issues.

## 🔨 Build & Development

| Command                             | Description                |
| ----------------------------------- | -------------------------- |
| `yarn dev`                          | Local development server   |
| `yarn build && yarn start`          | Production build and start |
| `docker build -t karakeep-portal .` | Build the Docker image     |

## 🔐 Security & Secrets

* API key is injected via a **Docker secret** at run‑time (`KARAKEEP_API_KEY`).
* Never commit `.env*` files or secrets to version control.
* Do **not** log sensitive information.

## 🛡️ Sandbox Limits for Codex

The automated agent runs in a sandbox. Only the commands listed below are permitted.

```sh
yarn test
yarn lint
```

## 📦 Pull Requests

1. Use title prefixes: **\[Feat]**, **\[Fix]**, **\[Chore]**, **\[Docs]**.
2. Include in the description:

   * **Context** – why the change is needed.
   * **Changes** – what was done.
   * **Testing Done** – evidence the change works.
3. CI (tests, lint, build) must pass before merge.
4. Target branch: `main`.

## 🗣️ Commit Message Style

Follow **Conventional Commits**, e.g. `feat(masonry): add infinite scroll`.

## 🤖 Agent Etiquette

When the agent modifies or generates code, it **must**:

1. Obey the conventions in this file.
2. Produce minimal, focused diffs.
3. Include or update unit tests.
4. Leave `TODO(question)` comments and stop if unsure; **a human reviewer must resolve these TODOs (or explicitly approve) before the agent continues or the PR is merged**.

## 🧭 Further Reading

* `CONTRIBUTING.md` – coding guide for humans.
* `docs/ARCHITECTURE.md` – data‑flow deep dive.
