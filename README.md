# Karakeep Home Portal

Lightweight, read-only dashboard for your Karakeep bookmarks and stats. Built with
[Next.js](https://nextjs.org) and styled via Tailwind CSS.

## Local Development

Install dependencies and start the development server:

```bash
yarn install
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
