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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
