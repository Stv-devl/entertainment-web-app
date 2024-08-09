import { useCallback, useEffect, useState } from 'react';
import useMediaStore from '@/stores/useMediaStore';

const useBookmarked = () => {
  const { user, toggleBookmark } = useMediaStore();

  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      setBookmarkedItems(user.bookmarkedItems ?? []);
    }
  }, [user]);

  const handleToggleBookmark = useCallback(
    async (movieTitle: string) => {
      await toggleBookmark(movieTitle);
    },
    [toggleBookmark]
  );

  return { bookmarkedItems, handleToggleBookmark };
};

export default useBookmarked;
