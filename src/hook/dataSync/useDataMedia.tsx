import { useState, useEffect } from 'react';
import { Media, Users } from '../../types/types';
import apiService from '../../features/apiService';

const useMediaData = () => {
  const [media, setMedia] = useState<Media[]>([]);
  const [users, setUsers] = useState<Users[]>([]);
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
