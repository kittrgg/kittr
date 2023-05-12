import { getFlag } from '@kittr/flags';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {
  matcher: ['/developers', '/app-future(.*)'],
};

export async function middleware(request: NextRequest) {
  // Protect from directly accessing /app-future routes
  if (request.nextUrl.pathname.startsWith('/app-future')) {
    const newUrl = new URL(`/404`, request.nextUrl);
    return NextResponse.rewrite(newUrl, { status: 404 });
  }

  const flag = await getFlag('developerTestPage');
  if (flag) {
    const newUrl = new URL(
      `/app-future${request.nextUrl.pathname}`,
      request.nextUrl,
    );
    // Send user to `app` version
    return NextResponse.rewrite(newUrl);
  }
  // Send user to `pages` version
  return NextResponse.next();
}
