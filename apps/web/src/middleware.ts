import { getAllFlags } from '@kittr/flags';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Protect from directly accessing /app-future routes
    '/app-future(.*)',
    // Feature-flagged App Router pages
    '/',
    '/games',
  ],
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect from directly accessing /app-future routes
  if (pathname.startsWith('/app-future')) {
    const newUrl = new URL(`/404`, request.nextUrl);
    return NextResponse.rewrite(newUrl, { status: 404 });
  }

  const flags = await getAllFlags();

  // Check flags, send to `app` version if on
  if (flags.gamesAppPage && pathname === '/games') {
    const newUrl = new URL(
      `/app-future${request.nextUrl.pathname}`,
      request.nextUrl,
    );
    return NextResponse.rewrite(newUrl);
  }

  if (flags.homeAppPage && pathname === '/') {
    const newUrl = new URL(
      `/app-future${request.nextUrl.pathname}`,
      request.nextUrl,
    );
    return NextResponse.rewrite(newUrl);
  }

  // Send user to `pages` version
  return NextResponse.next();
}
