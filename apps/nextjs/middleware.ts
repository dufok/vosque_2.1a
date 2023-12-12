import { authMiddleware } from '@clerk/nextjs/server'

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
    '/email-verification',
    '/signup/email-verification',
    '/api/(.*)'
  ],
  debug: false
})

// Stop Middleware running on static files
export const config = {
  matcher: [
    '/(.*?trpc.*?|(?!static|.*\\..*|_next|favicon.ico).*)',
  ],
}