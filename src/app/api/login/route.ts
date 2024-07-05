import { NextResponse } from 'next/server';
import user from '../../../../data/user.json';
import { SignJWT } from 'jose';

const SECRET_KEY = new TextEncoder().encode(
  '4a7d1ed414474e4033ac29ccb8653d9b967f70b792c90d43c61b7c9744e4397e'
);

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const findUser = user.users.find(
    (user) => user.email === email && user.password === password
  );

  if (findUser) {
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(SECRET_KEY);

    const response = NextResponse.json(
      { message: 'Authentication successful', token },
      { status: 200 }
    );
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'strict',
    });
    return response;
  } else {
    return NextResponse.json(
      { message: 'Authentication failed' },
      { status: 401 }
    );
  }
}
