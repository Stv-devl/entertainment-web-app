import { NextResponse } from 'next/server';
import data from '../../../../data/data.json';

/**
 * Handles GET requests to fetch JSON data.

 * @param {Request} request - The incoming HTTP request object.
 * @returns {NextResponse} A JSON response containing the data.
 */

export async function GET(request: Request) {
  return NextResponse.json(data);
}
