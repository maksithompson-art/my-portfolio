---
name: SEO/AIO Configuration
description: Multi-locale SEO setup with hreflang, JSON-LD, sitemap per locale
type: project
---

SEO is set up per locale in `app/[lang]/layout.tsx` and each page's `generateMetadata`.

**Key features:**
- `hreflang` alternates on every page (it, en, fr, x-default=it)
- JSON-LD Person schema in layout (language-agnostic)
- FAQ schema in webdev and photography service pages
- Sitemap at `app/sitemap.ts` generates URLs for all 3 locales × all pages/projects
- robots.ts allows all except /studio/ and /api/

**Why:** User wanted SEO/AIO optimization per country for IT/FR/EN markets.
