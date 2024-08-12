import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Users } from '@/types/types';

const filePath = path.join(process.cwd(), 'data', 'user.json');
const users: Users[] = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Users[];

/**
 * Handles GET requests to retrieve the list of users.
 * @returns {NextResponse} A response containing the list of users in JSON format.
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(users);
}

/**
 * Handles POST requests to add a new user to the list.
 * The new user is added to the `user.json` file.
 * @param {Request} request - The incoming HTTP request object containing the new user data.
 * @returns {NextResponse} A response confirming the creation of the new user with a status of 201.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const newUser: Users = await request.json();
    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

/**
 * Handles PUT requests to toggle a bookmark for a user's media item.
 * If the media item is not bookmarked, it will be added; if it is already bookmarked, it will be removed.
 * @param {Request} request - The incoming HTTP request object containing the user ID and movie title.
 * @returns {NextResponse} A response containing the updated user data, or an error if the user is not found.
 */
export async function PUT(request: Request): Promise<NextResponse> {
  try {
    const { userId, movieTitle } = await request.json();
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex === -1) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userBookmarks = users[userIndex].bookmarkedItems || [];
    const movieIndex = userBookmarks.indexOf(movieTitle);

    if (movieIndex === -1) {
      userBookmarks.push(movieTitle);
    } else {
      userBookmarks.splice(movieIndex, 1);
    }

    users[userIndex].bookmarkedItems = userBookmarks;
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
    return NextResponse.json(users[userIndex], { status: 200 });
  } catch (error) {
    console.error('Error processing PUT request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
