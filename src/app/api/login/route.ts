import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import user from '../../../../data/user.json';

const secretKey = new TextEncoder().encode(
  '4a7d1ed414474e4033ac29ccb8653d9b967f70b792c90d43c61b7c9744e4397e'
);

export async function POST(request: Request) {
  const { email, password } = await request.json();

  const findUser = user.find(
    (user) => user.email === email && user.password === password
  );

  if (findUser) {
    const token = await new SignJWT({ email, userId: findUser.id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(secretKey);

    const response = NextResponse.json(
      { message: 'Authentication successful', token, userId: findUser.id },
      { status: 200 }
    );
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: true,
      path: '/',
      sameSite: 'strict',
    });

    if (findUser.id) {
      response.cookies.set('userId', String(findUser.id), {
        httpOnly: false,
        secure: true,
        path: '/',
        sameSite: 'strict',
      });
    }
    return response;
  } else {
    return NextResponse.json(
      { message: 'Authentication failed' },
      { status: 401 }
    );
  }
}
