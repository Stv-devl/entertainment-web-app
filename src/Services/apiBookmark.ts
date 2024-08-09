const updateBookmark = async (userId: string, movieTitle: string) => {
  try {
    const response = await fetch('http://localhost:3000/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, movieTitle }),
    });

    if (!response.ok) {
      throw new Error('Failed to update bookmark');
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating bookmark:', error);
    throw error;
  }
};

export default updateBookmark;
