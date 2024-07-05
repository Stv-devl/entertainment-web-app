import { NextResponse } from 'next/server';
import data from '../../../../data/data.json';

export async function GET(request: Request) {
  return NextResponse.json(data);
}
