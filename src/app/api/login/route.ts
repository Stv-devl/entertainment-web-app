import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import user from '../../../../data/user.json';

const secretKey = new TextEncoder().encode(process.env.SECRET_KEY);

/**
 * Handles POST requests for user authentication.
 * Validates the provided email and password against stored user data, generates a JWT if valid, and sets it in a cookie.
 * @param {Request} request - The incoming HTTP request object containing the user's email and password.
 * @returns {Promise<NextResponse>} A response containing the authentication status, and in case of success, a JWT and user ID.
 */

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
