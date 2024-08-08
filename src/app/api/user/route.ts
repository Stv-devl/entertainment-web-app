import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import user from '../../../../data/user.json';

export async function GET(request: Request) {
  return NextResponse.json(user);
}

export async function POST(request: Request) {
  const newUser = await request.json();
  user.push(newUser);
  const filePath = path.join(process.cwd(), 'data', 'user.json');
  fs.writeFileSync(filePath, JSON.stringify(user, null, 2), 'utf8');
  return NextResponse.json(newUser, { status: 201 });
}

export async function PUT(request: Request) {
  const { userId, movieTitle } = await request.json();
  const userIndex = user.findIndex((u) => u.id === userId);

  if (userIndex !== -1) {
    const userBookmarks = user[userIndex].bookmarkedItems;
    const movieIndex = userBookmarks.indexOf(movieTitle);

    if (movieIndex === -1) {
      userBookmarks.push(movieTitle);
    } else {
      userBookmarks.splice(movieIndex, 1);
    }

    const filePath = path.join(process.cwd(), 'data', 'user.json');
    fs.writeFileSync(filePath, JSON.stringify(user, null, 2), 'utf8');

    return NextResponse.json(user[userIndex], { status: 200 });
  } else {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
}
