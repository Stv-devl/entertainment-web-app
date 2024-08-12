import { useCallback, useEffect, useState } from 'react';
import useMediaStore from '@/stores/useMediaStore';
import { UseBookmarkedReturn } from '@/types/types';

/**
 * Custom hook for managing bookmarked media items.
 * It retrieves the user's bookmarked items and provides a function to toggle bookmarks.
 * @returns {object} An object containing:
 * - `bookmarkedItems`: An array of bookmarked media titles.
 * - `handleToggleBookmark`: Function to toggle the bookmark status of a media item.
 */

const useBookmarked = (): UseBookmarkedReturn => {
  const { user, toggleBookmark } = useMediaStore();

  const [bookmarkedItems, setBookmarkedItems] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      setBookmarkedItems(user.bookmarkedItems ?? []);
    }
  }, [user]);

  /**
   * Toggles the bookmark status of a media item.
   * @param {string} movieTitle - The title of the media item to bookmark/unbookmark.
   */
  const handleToggleBookmark = useCallback(
    async (movieTitle: string) => {
      if (movieTitle) {
        await toggleBookmark(movieTitle);
      }
    },
    [toggleBookmark]
  );

  return { bookmarkedItems, handleToggleBookmark };
};

export default useBookmarked;
