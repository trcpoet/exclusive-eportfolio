# Portfolio (Next.js)

React + Next.js rewrite of the legacy static portfolio. The original HTML/CSS/JS site is preserved at [`/classic`](/classic) when deployed.

## Local development

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Legacy reference (repo root, live-server):

```bash
cd ..
npm run dev
```

Open [http://localhost:5174](http://localhost:5174).

## Deploy to Vercel

### 1. Push the `portfolio/` app to GitHub

The Next.js app lives in the `portfolio/` subdirectory. Commit and push `portfolio/` to the `exclusive-eportfolio` repository on `main`.

### 2. Vercel (already configured)

- **Project:** `exclusive-eportfolio` (linked to `trcpoet/exclusive-eportfolio`)
- **Root Directory:** `portfolio`
- **Production:** [exclusive-eportfolio-one.vercel.app](https://exclusive-eportfolio-one.vercel.app)

Pushes to `main` trigger production deploys automatically.

### 3. CLI alternative

```bash
cd portfolio
npx vercel login
npx vercel link
npx vercel --prod
```

When linking, choose **exclusive-eportfolio** and confirm the project root is `portfolio/`.

## URLs after deploy

| Route | Content |
|-------|---------|
| `/` | Next.js portfolio (primary) |
| `/classic` | Legacy static portfolio (redirects to `/classic/index.html`) |

## Environment variables

EmailJS public keys are configured in `content/site.ts` (client-side, same as the legacy site). No Vercel env vars are required for the contact form.

Optional future improvement: move EmailJS IDs to `NEXT_PUBLIC_*` env vars in Vercel for rotation without code changes.

## Project structure

```
portfolio/
├── app/              # Next.js App Router pages & global styles
├── components/       # UI, hero, layout, sections
├── content/          # Copy & data modules
├── hooks/            # Client hooks (scroll, motion, parallax)
├── public/
│   ├── assets/       # Images, resume, favicons
│   └── classic/      # Legacy static site snapshot
└── vercel.json       # Vercel project hints
```
