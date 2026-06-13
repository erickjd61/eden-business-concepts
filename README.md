# Eden Business Concepts

The website for Eden Business Concepts, LLC — a leadership advisory and
conflict-transformation firm (John D. Erickson & Dennis R. Humphrey).

Rebuilt June 2026 from WordPress (Never Settle) to a self-owned stack.

## Stack
- **TanStack Start** (SSR) + React 19 + Vite
- **Deploy:** Vercel (`tanstackStart({ target: 'vercel' })`)
- **Design:** custom token system (see `src/styles.css`), no UI framework

## ⚠️ Protected files
`vite.config.ts` **must** keep `tanstackStart({ target: 'vercel' })`.
Do not let any tooling export overwrite it — deployment depends on it.

## Brand tokens (source of truth: Eden Design Token System v1.0)
- Navy `#011149`, Green `#009245` (+ derived palette in `src/styles.css`)
- Fonts: **Newsreader** (serif/display+body), **Archivo** (sans/utility)
- Layout signature: the **soil line** — page crosses from canopy (light) to
  roots (dark) only where content moves from surface to depth. Max twice/page.

## Develop
```bash
npm install
npm run dev      # local dev
npm run build    # production build
npm run preview  # preview the build
```

## Structure
```
src/
  routes/            file-based routes (home, what-drives-us, team,
                     services/*, forums, books, contact, thrive-space)
  components/        SiteNav, SiteFooter, SoilLine
  styles.css         design tokens + all component styles
public/img/
  books/             7 cover images
  people/            john, dennis (circular), together (banner)
content/
  thrive-space/      24 blog posts migrated from WordPress (markdown)
```

## Migration notes
- `vercel-redirects.json` (in project deliverables): 40 × 301 redirects from
  old WordPress URLs → new structure. Paste into `vercel.json` before launch.
- DNS currently at Cloudflare (Never Settle account); email on Microsoft 365;
  old host WP Engine. See the Migration Plan doc for the cutover checklist.

## Still to do before launch
- Blog route `/thrive-space/$slug` to render migrated markdown
- Heart Check diagnostic (interactive, `/heart-check`)
- Contact form (Formspree or re-embedded LeadConnector)
- Verify bracketed bio facts (marriage years; Dennis personal para)
- `vercel.json` with redirects, sitemap, favicon from circle logo
