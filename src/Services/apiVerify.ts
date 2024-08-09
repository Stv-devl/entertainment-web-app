const apiVerify = async (): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:3000/api/verify', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error verifying authentication:', error);
    return false;
  }
};

export default apiVerify;
