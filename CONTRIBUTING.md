# Contributing to Karakeep Home Portal

Thank you for your interest in improving the project! This guide explains how to get started and the expectations for new contributions.

## Development Setup

1. Install dependencies with **Yarn**:
   ```bash
   yarn install
   ```
2. Start the development server:
   ```bash
   yarn dev
   ```
3. Run tests and lint checks before submitting a pull request:
   ```bash
   yarn lint
   yarn test
   ```

## Coding Standards

- Use **TypeScript** exclusively; avoid `any` unless absolutely necessary.
- Follow the existing project structure:
  - Components live under `src/app/components`.
  - Typed helpers belong in `lib/`.
  - Tests reside in `tests/` and must cover every public interface.
- Adhere to the lint and format rules. Run `yarn lint` and `yarn format` to automatically fix issues.
- Write JSDoc comments for all exported functions and components.

## Commit and PR Guidelines

- Commit messages follow **Conventional Commits** (e.g. `feat(bookmarks): add favorite filter`).
- Pull request titles use prefixes `[Feat]`, `[Fix]`, `[Chore]`, or `[Docs]`.
- Include context, a summary of changes, and testing evidence in the PR description.
- Target the `main` branch and ensure `yarn lint` and `yarn test` pass in CI.

For more in-depth rules, see `AGENTS.md` in the repository root.
