import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useAuthStore from '@/stores/useAuthStore';

/**
 * Custom hook to retrieve the user ID.
 * Get the user ID from the state managed, if it's not available, it attempts to retrieve the user ID from cookies.
 * @returns  The user ID if found, otherwise null.
 */
const useUserId = () => {
  const storeUserId = useAuthStore((state) => state.userId);
  const [userId, setUserId] = useState<string | null>(
    storeUserId || Cookies.get('userId') || null
  );

  useEffect(() => {
    if (storeUserId && storeUserId !== userId) {
      setUserId(storeUserId);
    }
  }, [storeUserId, userId]);

  return userId;
};

export default useUserId;
