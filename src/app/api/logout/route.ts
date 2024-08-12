import { NextRequest, NextResponse } from 'next/server';

/**
 * Handles POST requests to log out a user.
 * Clears the authentication token by setting its cookie with a negative `maxAge`, effectively deleting it.
 * @param {NextRequest} request - The incoming HTTP request object.
 * @returns {NextResponse} A response confirming that the user has been logged out.
 */
export async function POST(request: NextRequest) {
  const response = NextResponse.json({ message: 'Logged out' });
  response.cookies.set('token', '', {
    maxAge: -1,
    httpOnly: true,
    secure: true,
  });
  return response;
}
