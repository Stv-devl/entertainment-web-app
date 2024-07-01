'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
import apiService from '../api/apiService';
import { Media, Users, ApiContextType } from '../types/types';

export const ApiContext = createContext<ApiContextType | undefined>(undefined);

interface ApiProviderProps {
  children: ReactNode;
}

/**
 * ApiProvider component
 * Provides API data context to its children components. Fetches data from an API and handles loading and error states.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components to be wrapped by the provider.
 * @returns {JSX.Element} - The API context provider component.
 */

function ApiProvider({ children }: ApiProviderProps): JSX.Element {
  const [media, setMedia] = useState<Media[]>([]);
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { media: resMedia, users: resUsers } = await apiService();
        setMedia(resMedia);
        setUsers(resUsers);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider
      value={{ mediadata: media, userdata: users, loading, error }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export default ApiProvider;
