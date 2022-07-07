// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// The country to block from accessing the secret page

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: '/dummy-page',
}

export function middleware(req: NextRequest) {

  // Rewrite to URL
  return NextResponse.redirect(new URL("/somewhere-else", req.nextUrl))
}