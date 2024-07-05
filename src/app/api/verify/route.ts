import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  '4a7d1ed414474e4033ac29ccb8653d9b967f70b792c90d43c61b7c9744e4397e'
);

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    await jwtVerify(token, SECRET_KEY);
    return NextResponse.json({ message: 'Authenticated' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }
}
