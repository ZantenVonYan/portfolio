# Ana Mangotić Rajković — Portfolio

Personal portfolio for Ana Mangotić Rajković (Lead UX/UI Designer), ported from the Figma Make project [Create Portfolio Design](https://www.figma.com/make/PggjbRDsUa7brm9t4n0JAT/Create-Portfolio-Design) into a Next.js app.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui

## Routes

- `/` — home (hero, featured projects, leadership, earlier work, about, contact)
- `/project/[slug]` — case studies (`supply-proof`, `foodlink-pro`, `dentai-assist`, `ux-practice-framework`)

## Run locally

```bash
npm install
npm run dev -- --port 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Source

UI, copy, and project imagery were extracted from the Figma Make source via Figma MCP (`get_design_context` + Make source resources), then adapted to Next.js routing and fonts.
