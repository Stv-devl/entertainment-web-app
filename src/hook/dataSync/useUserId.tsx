import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useAuthStore from '@/stores/useAuthStore';

/**
 * Custom hook to retrieve the user ID.
 * Get the user ID from the state managed, if it's not available, it attempts to retrieve the user ID from cookies.
 * @returns {string | null} The user ID if found, otherwise null.
 */
const useUserId = () => {
  const storeUserId = useAuthStore((state) => state.userId);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (storeUserId) {
      setUserId(storeUserId);
    } else {
      const savedUserId = Cookies.get('userId');
      if (savedUserId) {
        setUserId(savedUserId);
      }
    }
  }, [storeUserId]);

  return userId;
};

export default useUserId;
