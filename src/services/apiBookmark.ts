import { UpdateBookmarkResponse } from '@/types/types';

/**
 * Updates the bookmark status of a movie for a specific user by making a PUT request to the server.
 * @param {string} userId - The ID of the user whose bookmark is being updated.
 * @param {string} movieTitle - The title of the movie to be bookmarked or unbookmarked.
 * @returns {Promise<UpdateBookmarkResponse>} The response data from the server after updating the bookmark.
 * @throws Will throw an error if the request fails.
 */
const updateBookmark = async (
  userId: string,
  movieTitle: string
): Promise<UpdateBookmarkResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, movieTitle }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to update bookmark: ${errorDetails}`);
    }

    return (await response.json()) as UpdateBookmarkResponse;
  } catch (error) {
    console.error('Error updating bookmark:', error);
    throw error;
  }
};

export default updateBookmark;
