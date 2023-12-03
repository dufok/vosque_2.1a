import { authMiddleware } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/home',
    '/payscreen',
    '/userpage',
    '/signup',
    '/signin',
    '/phrasebook',
    '/course',
    '/test',
    '/api/trpc/entry.all'
  ],
  debug: true,
})

// Stop Middleware running on static files
export const config = {
  matcher: [
    '/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)',
  ],
}