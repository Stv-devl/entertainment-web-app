'use client';

import { useState, useEffect } from 'react';
import { Media, MediaDataType, Users } from '../../types/types';
import apiService from '../../features/apiDatas';

const useMediaData = (): MediaDataType => {
  const [users, setUsers] = useState<Users[]>([]);
  const [media, setMedia] = useState<Media[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const { media, users } = await apiService();
        setMedia(media);
        setUsers(users);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { media, users, loading, error };
};

export default useMediaData;
