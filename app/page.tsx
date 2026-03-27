import { redirect } from 'next/navigation'

// The proxy.ts handles locale detection and redirects.
// This page is a fallback in case the proxy doesn't fire (e.g. static export).
export default function RootPage() {
  redirect('/it')
}
