import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { routing } from './i18n/routing'

export default function proxy(request: NextRequest) {
  return createMiddleware(routing)(request)
}

export const config = {
  matcher: ['/', '/(en|vi)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
