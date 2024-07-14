'use client';

import { useState, useEffect, useCallback } from 'react';
import { Media, MediaDataType, Users } from '../../types/types';
import apiService from '../../features/apiDatas';

const useMediaData = (): MediaDataType => {
  const [users, setUsers] = useState<Users[]>([]);
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { media, users } = await apiService();
      setMedia(media);
      setUsers(users);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { media, users, loading, error };
};

export default useMediaData;
