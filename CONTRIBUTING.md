# Contributing to Karakeep Home Portal

Thank you for helping improve the portal! Follow these guidelines to keep the codebase consistent and easy to maintain.

## Getting Started

1. Fork the repository and create a feature branch.
2. Install dependencies with `yarn setup` (runs `corepack enable && yarn install`).
3. Start the dev server using `yarn dev`.

## Commit Style

- Use **Conventional Commits** for all messages.
- Run `yarn lint` and `yarn test` before committing; both must pass.
- Commits should be small and focused.

## Pull Requests

1. Prefix the title with `[Feat]`, `[Fix]`, `[Chore]` or `[Docs]`.
2. Describe the context, changes and testing done.
3. Ensure coverage stays above 90%.
4. Target the `main` branch.

## Coding Conventions

- TypeScript only; avoid `any` unless wrapped with `@ts-expect-error`.
- Components should be functional and stateless.
- Use Tailwind CSS classes for styling.

For a deeper dive into how data flows through the app, see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
