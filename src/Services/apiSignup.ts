import { Users } from '@/types/types';

/**
 * Sends a sign-up request to the server with the user's details and returns the created user data.
 * @param {Users} user - An object containing user details such as id, email, password, username, and bookmarkedItems.
 * @returns {Promise<Users>} The created user data returned from the server.
 * @throws {Error} If the sign-up request fails.
 */

const apiSignup = async ({
  id,
  email,
  password,
  username,
  bookmarkedItems,
}: Users): Promise<Users> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, email, password, username, bookmarkedItems }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful', data);
      return data;
    } else {
      console.error('Login failed with status', response.status);
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export default apiSignup;
