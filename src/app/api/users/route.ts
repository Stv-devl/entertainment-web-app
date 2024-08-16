import { NextResponse } from 'next/server';
import { clientPromise } from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcrypt';

const saltRounds = 10;
const dbName = 'web-app';
const collectionName = 'users';

/**
 * Handles GET requests to retrieve the list of users.
 * @returns {NextResponse} A response containing the list of users in JSON format.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    const usersCollection = db.collection(collectionName);
    const users = await usersCollection.find().toArray();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error processing GET request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

/**
 * Handles POST requests to add a new user to the list.
 * The new user is added to the MongoDB collection.
 * @param {Request} request - The incoming HTTP request object containing the new user data.
 * @returns {NextResponse} A response confirming the creation of the new user with a status of 201.
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const newUser = await request.json();
    const client = await clientPromise;
    const db = client.db(dbName);
    const usersCollection = db.collection(collectionName);

    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    const userWithHashedPassword = { ...newUser, password: hashedPassword };

    const result = await usersCollection.insertOne(userWithHashedPassword);
    return NextResponse.json(
      { _id: result.insertedId, ...userWithHashedPassword },
      { status: 201 }
    );
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
    const client = await clientPromise;
    const db = client.db(dbName);
    const usersCollection = db.collection(collectionName);

    const { userId, movieTitle } = await request.json();

    console.log('userId', userId);

    if (!ObjectId.isValid(userId)) {
      return NextResponse.json({ error: 'Invalid user ID' }, { status: 400 });
    }
    const objectId = new ObjectId(userId);
    const user = await usersCollection.findOne({ _id: objectId });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const userBookmarks = user.bookmarkedItems || [];
    const movieIndex = userBookmarks.indexOf(movieTitle);

    if (movieIndex === -1) {
      userBookmarks.push(movieTitle);
    } else {
      userBookmarks.splice(movieIndex, 1);
    }

    await usersCollection.updateOne(
      { _id: objectId },
      { $set: { bookmarkedItems: userBookmarks } }
    );

    const updatedUser = await usersCollection.findOne({
      _id: objectId,
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error('Error processing PUT request:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
