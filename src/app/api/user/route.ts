import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import user from '../../../../data/user.json';

/**
 * Handles GET requests to retrieve the list of users.
 * @param {Request} request - The incoming HTTP request object.
 * @returns {NextResponse} A response containing the list of users in JSON format.
 */
export async function GET(request: Request) {
  return NextResponse.json(user);
}

/**
 * Handles POST requests to add a new user to the list.
 * The new user is added to the `user.json` file.
 * @param {Request} request - The incoming HTTP request object containing the new user data.
 * @returns {NextResponse} A response confirming the creation of the new user with a status of 201.
 */
export async function POST(request: Request) {
  const newUser = await request.json();
  user.push(newUser);
  const filePath = path.join(process.cwd(), 'data', 'user.json');
  fs.writeFileSync(filePath, JSON.stringify(user, null, 2), 'utf8');
  return NextResponse.json(newUser, { status: 201 });
}

/**
 * Handles PUT requests to toggle a bookmark for a user's media item.
 * If the media item is not bookmarked, it will be added; if it is already bookmarked, it will be removed.
 * @param {Request} request - The incoming HTTP request object containing the user ID and movie title.
 * @returns {NextResponse} A response containing the updated user data, or an error if the user is not found.
 */
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
