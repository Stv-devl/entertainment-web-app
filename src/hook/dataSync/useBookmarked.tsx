import { useCallback, useEffect, useState } from 'react';
import { Users } from '@/types/types';
import useMediaStore from '@/stores/useMediaStore';

const useBookmarked = (user: Users) => {
  const userId = user && user.id;
  const { users, toggleBookmark } = useMediaStore();
  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  useEffect(() => {
    const currentUser = users.find((u) => u.id === userId);
    if (currentUser && currentUser.bookmarkedItems) {
      setBookmarkedItems(currentUser.bookmarkedItems);
    }
  }, [users, userId]);

  const handleToggleBookmark = useCallback(
    async (movieTitle: string) => {
      if (!userId) return;
      await toggleBookmark(userId, movieTitle);
    },
    [toggleBookmark, userId]
  );

  return { bookmarkedItems, handleToggleBookmark };
};

export default useBookmarked;
