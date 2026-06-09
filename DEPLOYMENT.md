# Deployment guide

## Production app

The **Next.js portfolio** in `portfolio/` is the production target. Deploy it to Vercel with **Root Directory = `portfolio`**.

See [portfolio/README.md](./portfolio/README.md) for step-by-step Vercel setup and CLI commands.

## Legacy site

| Location | Purpose |
|----------|---------|
| Repo root (`index.html`, `style.css`, `index.js`, `assets/`) | Source of truth for the classic build; still runnable via `npm run dev` at repo root |
| `portfolio/public/classic/` | Static snapshot served at **`/classic`** on the Vercel deployment |

After deploy:

- **Primary:** `https://<your-domain>/`
- **Classic:** `https://<your-domain>/classic`

## Pre-deploy checklist

- [ ] `cd portfolio && npm run build` passes locally
- [ ] `portfolio/` committed and pushed to `main`
- [ ] Vercel project Root Directory set to `portfolio`
- [ ] Custom domain attached in Vercel (optional)
- [ ] Contact form tested on preview URL

## Suggested domain flow

1. Deploy to Vercel preview from `main`.
2. Verify `/`, `/classic`, and contact modal on preview.
3. Assign production domain (e.g. existing `tahsinrahman.dev`) in Vercel → Domains.
4. Point DNS to Vercel per their dashboard instructions.
