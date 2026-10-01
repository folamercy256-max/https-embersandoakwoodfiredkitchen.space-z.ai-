# Ember & Oak — Wood Fired Kitchen

A restaurant website for Ember & Oak, a wood fired kitchen in downtown Austin, TX. Built with Next.js 16, React 19, Tailwind CSS 4 and shadcn/ui, with Prisma handling reservations, contact messages and newsletter signups.

## Pages

The site uses a single route with hash based views, matching the classic one page restaurant site feel:

- Home: hero slider, story, specials, menu tabs, gallery preview, testimonials
- About: story, values, team
- Menu: full menu in four categories
- Gallery: filterable photo grid with lightbox
- Reservations: working booking form
- Contact: contact cards, form and map

## Getting Started

```bash
bun install
bun run db:push   # create the local SQLite database
bun dev           # start the dev server on http://localhost:3000
```

Open http://localhost:3000 in your browser.

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed.

| Variable | Where it is used | Purpose |
|---|---|---|
| `DATABASE_URL` | Local development | SQLite file, e.g. `file:../db/custom.db` |
| `TURSO_DATABASE_URL` | Production (Vercel) | Turso libSQL database URL |
| `TURSO_AUTH_TOKEN` | Production (Vercel) | Turso auth token |

The database layer switches automatically: when the two Turso variables are present it talks to Turso, otherwise it falls back to the local SQLite file. Reservations, contact messages and newsletter subscribers are stored the same way in both environments.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Create a free database at [turso.tech](https://turso.tech) (the free plan is enough) and copy the database URL and an auth token.
3. On [vercel.com](https://vercel.com), import the GitHub repository.
4. Add the two environment variables `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` in the Vercel project settings.
5. Push the database schema once (see below) and deploy.

To create the tables in your Turso database after you have the credentials locally:

```bash
TURSO_DATABASE_URL=libsql://your-db.turso.io TURSO_AUTH_TOKEN=your-token bunx prisma db push
```

Every push to the `main` branch triggers a new deployment on Vercel.
