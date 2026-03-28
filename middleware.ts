import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SECURITY_HEADERS: [string, string][] = [
  ['X-Content-Type-Options', 'nosniff'],
  ['X-Frame-Options', 'DENY'],
  ['X-XSS-Protection', '1; mode=block'],
  ['Referrer-Policy', 'strict-origin-when-cross-origin'],
  ['Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()'],
  ['Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'],
  [
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://cdn.sanity.io https://images.unsplash.com",
      "font-src 'self' data:",
      "connect-src 'self' https://formspree.io https://cdn.sanity.io https://api.sanity.io wss://cdn.sanity.io",
      "media-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://formspree.io",
      "frame-ancestors 'none'",
    ].join('; '),
  ],
]

function withSecurityHeaders(response: NextResponse): NextResponse {
  for (const [key, value] of SECURITY_HEADERS) {
    response.headers.set(key, value)
  }
  return response
}

const LOCALES = ['it', 'en', 'fr'] as const
type Locale = typeof LOCALES[number]
const DEFAULT_LOCALE: Locale = 'it'

// Country → locale mapping for geo-detection
const COUNTRY_LOCALE_MAP: Record<string, Locale> = {
  // Italian-speaking
  IT: 'it',
  // French-speaking
  FR: 'fr', BE: 'fr', CH: 'fr', LU: 'fr', MC: 'fr', SN: 'fr',
  DZ: 'fr', MA: 'fr', TN: 'fr', CI: 'fr', CM: 'fr',
  // Default to English for all others
}

function getLocaleFromRequest(request: NextRequest): Locale {
  // 1. Check if user has a stored preference cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && LOCALES.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  // 2. Geo-detection via Vercel's header (available on Vercel deployments)
  const country = request.headers.get('x-vercel-ip-country')
  if (country && COUNTRY_LOCALE_MAP[country]) {
    return COUNTRY_LOCALE_MAP[country]
  }

  // 3. Parse Accept-Language header as fallback
  const acceptLanguage = request.headers.get('accept-language') || ''
  const languages = acceptLanguage
    .split(',')
    .map((lang) => lang.split(';')[0].trim().toLowerCase().split('-')[0])

  for (const lang of languages) {
    if (LOCALES.includes(lang as Locale)) {
      return lang as Locale
    }
  }

  return DEFAULT_LOCALE
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal Next.js paths, API routes, static files, and Sanity studio
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/studio') ||
    pathname.includes('.') // static files (favicon, images, etc.)
  ) {
    return NextResponse.next()
  }

  // Check if the path already has a valid locale prefix
  const pathnameHasLocale = LOCALES.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return withSecurityHeaders(NextResponse.next())

  // Detect the locale and redirect
  const locale = getLocaleFromRequest(request)
  const newUrl = request.nextUrl.clone()
  newUrl.pathname = `/${locale}${pathname}`

  const response = NextResponse.redirect(newUrl)

  // Persist locale preference in a cookie for 1 year
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/',
  })

  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and Next.js internals
    '/((?!_next/static|_next/image|favicon|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2)$).*)',
  ],
}
