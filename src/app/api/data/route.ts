import { clientPromise } from '../../../../lib/mongodb';
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

/**
 * Handles GET requests to fetch data from MongoDB.
 * @returns {NextResponse} A JSON response containing the data.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const client: MongoClient = await clientPromise;
    const db = client.db('web-app');
    const dataCollection = db.collection('data');
    const data = await dataCollection.find({}).toArray();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}
