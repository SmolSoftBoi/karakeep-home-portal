# Karakeep Home Portal

Lightweight, read-only dashboard for your Karakeep bookmarks and stats. Built with
[Next.js](https://nextjs.org) and styled via Tailwind CSS.

## Local Development

Install dependencies with Corepack and start the development server:

```bash
yarn setup
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portal.

## Scripts

- `yarn lint` – run ESLint
- `yarn test` – run unit tests
- `yarn build && yarn start` – production build

## Dev Container

Launch the project in a [Dev Container](https://containers.dev/) for a ready-to-go environment:

```bash
gh repo clone <this repo>
code --folder-uri "vscode-remote://dev-container+$(pwd)"
```

The container exposes port `3000` to run the Next.js server.

## Project Documentation

| File | Purpose |
| ---- | ------- |
| `README.md` | Quick start and commands |
| `AGENTS.md` | Agent guide and coding conventions |
| `CONTRIBUTING.md` | How to contribute to the project |
| `docs/ARCHITECTURE.md` | Data flow overview |
| `src/app/components/codex.md` | Component-level rules |
