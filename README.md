# RAVINE Next

Independent next-generation RAVINE foundation.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- next-intl 4 (Arabic + English)
- Supabase SSR (`@supabase/ssr` + `@supabase/supabase-js`)
- Vercel-ready

## Local setup

```bash
npm install
```

Copy `.env.example` to `.env.local`, add the Supabase publishable key, then run:

```bash
npm run dev
```

The codebase is independent from the legacy RAVINE project. The current Supabase foundation does not modify existing database schema or data.
