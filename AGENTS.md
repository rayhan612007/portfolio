<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio (rayhan.dev)

## Stack & commands

- Next.js 16.4.3 App Router + React 19, **JavaScript only** (`.js`/`.jsx`) — no TypeScript; do not add a `tsconfig.json`.
- Commands: `npm run dev` (http://localhost:3000, Turbopack), `npm run lint` (flat config, `eslint-config-next/core-web-vitals`), `npm run build`. No tests, no CI — verification is lint + build.

## Conventions that differ from defaults

- **React Compiler is enabled** (`reactCompiler: true` in `next.config.mjs`) — write idiomatic React without manual `memo`/`useMemo`/`useCallback`.
- **Tailwind v4, no `tailwind.config.js`** — theme tokens are defined in `src/app/globals.css` via `@theme inline` + CSS variables. Dark mode is the `.dark` class (`@custom-variant dark`); theme switching comes from `next-themes` `ThemeProvider` in `src/app/layout.js`.
- **shadcn/ui with Base UI, not Radix** — `components.json` uses style `base-nova` and `@base-ui/react` primitives; UI components live in `src/components/ui` as `.jsx`. Path alias `@/*` → `src/*` (`jsconfig.json`).
- `next/image` accepts any https remote host (`remotePatterns: hostname "**"` in `next.config.mjs`).

## App layout

- Home page: `src/app/page.js` composed of section components in `src/app/component/` (singular `component`, not `components`).
- Routes: `/` (home), `/projects/[id]` (detail pages), `/resume` (printable resume with `print-button.jsx`; relies on `print:` Tailwind variants).

## Project data — easy to get wrong

- `src/app/data/projects.js` is the live shared source for the home grid (`ProjectSection.jsx`) and `/resume`. Plain module, no `"use client"`, so server and client components can both import it.
- `src/app/projects/[id]/page.jsx` has its **own inline** `projectsDetailsData` — it does NOT import from `data/`. Its keys must match `project.id` in `projects.js` (the grid links to `/projects/${project.id}`), or the "Not Found" fallback renders.
- Adding/editing a project means updating `projects.js` **and** the inline data in `[id]/page.jsx` — the copies have already drifted (different GitHub URLs / techStack lists).
- `src/app/data/projectdata.js` is currently imported by nothing (stale duplicate). Don't edit it expecting changes to appear; don't confuse it with `projects.js`.
