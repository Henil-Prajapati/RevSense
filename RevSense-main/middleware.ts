import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher([
    '/sign-in(.*)',
    '/',
    '/api(.*)', // allow API routes during local dev
])

export default clerkMiddleware(async (auth, request) => {
    // Relax protection in development to simplify local runs
    const isDev = process.env.NODE_ENV !== 'production'
    if (isDev) {
        return
    }
    if (!isPublicRoute(request)) {
        await auth.protect()
    }
})

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
}