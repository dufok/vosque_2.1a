import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/home',
    '/fonts',
    '/payscreen',
    '/userpage',
    '/signup',
    '/signin',
    '/phrasebook',
    '/course',
    '/email-verification',
    '/signup/email-verification',
    '/usercreate',
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