'use client';

import { useEffect } from 'react';
import useMediaStore from '../../stores/useMediaStore';

const useMediaData = () => {
  const { users, media, loading, error, fetchData } = useMediaStore();

  useEffect(() => {
    fetchData();
  }, []);

  return { users, media, loading, error };
};

export default useMediaData;
