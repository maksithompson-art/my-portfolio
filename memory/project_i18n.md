---
name: i18n Multi-Language Setup
description: Full IT/FR/EN i18n implemented with geo-detection proxy, dictionary files, and [lang] routing
type: project
---

Full i18n overhaul completed using Next.js 16 built-in approach (no next-intl).

**Architecture:**
- `proxy.ts` at root: geo-detects country via `x-vercel-ip-country` header → redirects to `/it/`, `/fr/`, `/en/`
- `dictionaries/it.json`, `dictionaries/fr.json`, `dictionaries/en.json`: all UI text
- `app/[lang]/dictionaries.ts`: server-only `getDictionary(locale)` function
- `app/[lang]/layout.tsx`: locale layout with hreflang alternates and JSON-LD schema
- All locale pages at `app/[lang]/[page].tsx`

**Geo-mapping:** IT→it, FR/BE/CH/LU→fr, all others→en. Cookie `NEXT_LOCALE` persists preference.

**Why:** User requested 3-language support (IT/FR/EN) with country-based auto-detection and per-locale SEO.

**How to apply:** When modifying pages, always update all 3 dictionary files and the corresponding `app/[lang]/` pages. Components accept `dict` and `lang` props.
