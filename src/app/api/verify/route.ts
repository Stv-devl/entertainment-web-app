import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

export async function GET(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    await jwtVerify(token, secretKey);
    return NextResponse.json({ message: 'Authenticated' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }
}
