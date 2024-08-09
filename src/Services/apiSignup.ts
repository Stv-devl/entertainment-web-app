import { Users } from '@/types/types';

const apiSignup = async ({
  id,
  email,
  password,
  username,
  bookmarkedItems,
}: Users): Promise<Users> => {
  try {
    const response = await fetch('http://localhost:3000/api/user', {
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
