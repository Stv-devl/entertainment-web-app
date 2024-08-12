import { Media, Users } from '../types/types';

/**
 * fetchData function
 * Fetches data from a given URL and returns the JSON response. Throws an error if the fetch operation fails.
 * @async
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<T>} - The JSON data fetched from the API.
 * @throws {Error} - If the response is not ok.
 */
const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Error fetching data from ${url}. Status: ${response.status}`
    );
  }
  return response.json();
};

/**
 * apiService function
 * Fetches data from both API endpoints and returns them. Logs an error if any fetch operation fails.
 * @async
 * @returns {Promise<{ media: Media[], users: Users[] }>} - The data fetched from the APIs.
 * @throws {Error} - If no response, there is a problem with any fetch operation.
 */
const apiService = async (): Promise<{ media: Media[]; users: Users[] }> => {
  try {
    const [usersData, mediaData] = await Promise.all([
      fetchData<Users[]>(`${process.env.NEXT_PUBLIC_API_URL}/user`),
      fetchData<Media[]>(`${process.env.NEXT_PUBLIC_API_URL}/data`),
    ]);

    return { media: mediaData, users: usersData };
  } catch (error: unknown) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

export default apiService;
