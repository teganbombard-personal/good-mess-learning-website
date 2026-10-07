# Good Mess Learning Website

Astro site, deployed on Netlify.

## Develop
- `npm install`
- `npm run dev` (http://localhost:4321)
- `npm run build` (outputs to `dist/`)

## Structure
- `src/layouts/Layout.astro` - shared head, nav, and footer
- `src/pages/` - index, about, services, programs, pricing, contact, thanks
- `src/styles/` - global.css, and hover.css (hover states from the design)
- `public/images/` - logos and images

## Notes
- Contact form uses Netlify Forms (`data-netlify`); submissions appear in the Netlify dashboard once deployed.
- Programs list lives in `src/pages/programs.astro`; filtering is a small inline script.
