// import { getAllFlags } from '@kittr/flags';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Protect from directly accessing /app-future routes
    '/app-future(.*)',
    // Feature-flagged App Router pages
  ],
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect from directly accessing /app-future routes
  if (pathname.startsWith('/app-future')) {
    const newUrl = new URL(`/404`, request.nextUrl);
    return NextResponse.rewrite(newUrl, { status: 404 });
  }

  // const flags = await getAllFlags();

  // Send user to `pages` version
  return NextResponse.next();
}
