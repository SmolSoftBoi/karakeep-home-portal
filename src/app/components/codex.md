# codex.md — *Component‑level Rules*

## Component Guidelines

* Export a **default** functional React component only.
* The filename **must** match the default export (PascalCase).
* Declare props with an `interface`; avoid `type Props = …` aliases.
* Do not use `React.FC`; explicitly type `children` when needed.
* Write an accompanying test in `tests/<ComponentName>.test.tsx`.
* Use Tailwind utility classes; avoid inline `style` except for CSS variables.
* Keep components **stateless**; data fetching belongs in parent/server components.
* Avoid dynamic imports unless absolutely necessary.
* Re‑export shared primitives from an `index.ts` barrel file.
