import { getFlag } from '@kittr/flags'
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/dashboard/:path*']
}

export async function middleware(request: NextRequest) {
  const flag = await getFlag('developerTestPage')
  console.log({ flag })
  if (flag) {
    const newUrl = new URL(`/app-future/${request.nextUrl.pathname}`, request.nextUrl)
    // Send user to `app` version
    return NextResponse.rewrite(newUrl, {
      headers: new Headers(request.headers)
    })
  }
  // Send user to `pages` version
  return NextResponse.next()
}