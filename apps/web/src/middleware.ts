import { getFlag } from '@kittr/flags';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    // Protect from directly accessing /app-future routes
    '/app-future(.*)',
    // Feature-flagged App Router pages
    '/developers',
    '/games',
  ],
};

const handleAppRouterFlag = async (
  request: NextRequest,
  flag: Parameters<typeof getFlag>[0],
) => {
  const pathname = request.nextUrl.pathname;
  const flagValue = await getFlag(flag);

  if (flag === 'gamesAppPage' && flagValue && pathname === '/games') {
    return new URL(`/app-future${request.nextUrl.pathname}`, request.nextUrl);
  }

  return null;
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect from directly accessing /app-future routes
  if (pathname.startsWith('/app-future')) {
    const newUrl = new URL(`/404`, request.nextUrl);
    return NextResponse.rewrite(newUrl, { status: 404 });
  }

  // Check flags, send to `app` version if on
  const gamesPage = await handleAppRouterFlag(request, 'gamesAppPage');
  if (gamesPage && pathname === '/games')
    return NextResponse.rewrite(gamesPage);

  // Send user to `pages` version
  return NextResponse.next();
}
