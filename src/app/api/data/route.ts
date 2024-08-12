import { NextResponse } from 'next/server';
import data from '../../../../data/data.json';

/**
 * Handles GET requests to fetch JSON data.
 * @returns {NextResponse} A JSON response containing the data.
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(data);
}
