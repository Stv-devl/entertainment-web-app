import { NextRequest, NextResponse } from 'next/server';

import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  '4a7d1ed414474e4033ac29ccb8653d9b967f70b792c90d43c61b7c9744e4397e'
);

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    console.log('No token found, redirecting to login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await jwtVerify(token, SECRET_KEY);
    return NextResponse.next();
  } catch (e) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/bookmarked', '/home', '/series', '/movies'],
};
