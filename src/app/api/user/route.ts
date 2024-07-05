import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import user from '../../../../data/user.json';

export async function GET(request: Request) {
  return NextResponse.json(user);
}

export async function POST(request: Request) {
  const newUser = await request.json();

  user.users.push(newUser);

  const filePath = path.join(process.cwd(), 'data', 'user.json');

  fs.writeFileSync(filePath, JSON.stringify(user, null, 2), 'utf8');

  return NextResponse.json(newUser, { status: 201 });
}
