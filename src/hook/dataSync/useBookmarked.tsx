import { useCallback, useEffect, useState } from 'react';
import updateBookmark from '../../features/apiBookmark';
import { Users } from '@/types/types';

const useBookmarked = (user: Users) => {
  const userId = user && user.id;

  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  useEffect(() => {
    if (user && user.bookmarkedItems) {
      setBookmarkedItems(user.bookmarkedItems);
    }
  }, [user]);

  const toggleBookmark = useCallback(
    async (movieTitle: string) => {
      if (!userId) return;

      try {
        const updatedUser = await updateBookmark(userId, movieTitle);
        if (updatedUser) {
          setBookmarkedItems(updatedUser.bookmarkedItems);
        }
        return updatedUser;
      } catch (error) {
        console.error('Error toggling bookmark:', error);
      }
    },
    [userId]
  );

  return { bookmarkedItems, toggleBookmark };
};

export default useBookmarked;
