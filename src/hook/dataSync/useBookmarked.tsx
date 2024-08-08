import { useCallback, useEffect, useState } from 'react';
import updateBookmark from '../../features/apiBookmark';
import useUserId from './useUserId';

const useBookmarked = (user) => {
  const userId = useUserId();

  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>(
    user?.bookmarkedItems ?? []
  );

  useEffect(() => {
    if (user && user.bookmarkedItems !== bookmarkedItems) {
      setBookmarkedItems(user.bookmarkedItems ?? []);
    }
  }, [user, bookmarkedItems]);

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
