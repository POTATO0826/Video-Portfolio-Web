# Microeconomic Analysis of Coca-Cola Zero Sugar

A frontend-only, single-page portfolio presenting a group microeconomics study of
Coca-Cola Zero Sugar (consumer demand, price sensitivity, brand loyalty, and
competition in the soft drink market).

Built with **Vite + React + TypeScript + Tailwind CSS**, using **Bun** as the
package manager and runtime. No backend, no database, no API calls — it deploys
to Vercel as a static SPA.

## Getting started

```bash
bun install      # install dependencies
bun run dev      # start the dev server
bun run build    # production build → dist/
bun run preview  # preview the production build
```

## Updating content (no code changes needed)

Almost everything renders from `src/data/surveyData.ts`. To update the site:

- **Charts** — drop the matching PNG into `public/charts/` using the filename
  referenced by each finding's `image` field (e.g. `q1-age-group.png`). The
  Findings cards pick it up automatically; until then a "Chart image pending"
  placeholder shows.
- **Videos** — set each video's `embedUrl` in `surveyData.ts` to a YouTube embed
  URL (`https://www.youtube.com/embed/VIDEO_ID`). An empty string shows the
  "will be added later" placeholder box; a URL renders a live `<iframe>`.
- **Evidence images** — drop files into `public/evidence/` matching the `src`
  paths in the `evidence` array.
- **References** — replace the `references` string with your final APA 7 list.
- **Survey numbers / text** — edit the arrays in `surveyData.ts`; components map
  over them, so no component file needs touching.

## Deploying to Vercel

The repo includes `vercel.json`. On import, Vercel uses:

- **Install Command:** `bun install`
- **Build Command:** `bun run build`
- **Output Directory:** `dist`

## Project structure

```
src/
  components/    one file per section + reusable primitives
  data/          surveyData.ts (all content) + navItems.ts
  hooks/         useReveal, useScrollSpy, useCountUp
  App.tsx
  main.tsx
  index.css
public/
  charts/        q1..q17 chart images
  evidence/      survey/product/observation screenshots
  videos/        optional uploaded video files
```
