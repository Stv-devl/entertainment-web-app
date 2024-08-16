import { create } from 'zustand';
import { Media, UpdateBookmarkResponse, Users } from '../types/types';
import apiService from '../services/apiDatas';
import updateBookmark from '../services/apiBookmark';
import useAuthStore from './useAuthStore';

interface MediaDataState {
  user: Users | null;
  media: Media[];
  bookmarked: Media[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  toggleBookmark: (movieTitle: string) => Promise<void>;
  setUser: (user: Users) => void;
}

/**
 * Zustand store for managing media data and user interactions.
 * @returns {MediaDataState} The current media data state and actions to modify it.
 */

const useMediaStore = create<MediaDataState>((set, get) => ({
  user: null,
  media: [],
  bookmarked: [],
  loading: false,
  error: null,
  /**
   * Sets the current user in the store.
   * @param {Users} user - The user object to be set in the store.
   */
  setUser: (user: Users) => set({ user }),

  /**
   * Fetches media and user data from the API, and updates the store.
   * It filters the media items based on the user's bookmarked items.
   * @returns {Promise<void>}
   */
  fetchData: async (): Promise<void> => {
    const { userId } = useAuthStore.getState();
    set({ loading: true, error: null });
    try {
      const { media, users } = await apiService();

      const user = users.find((u) => u._id === userId) || null;
      const bookmarked = user
        ? media.filter((item) => user.bookmarkedItems!.includes(item.title))
        : [];
      set({ media, user, bookmarked, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: 'An unknown error occurred', loading: false });
      }
    }
  },

  /**
   * Toggles the bookmark status of a media item for the current user.
   * @param {string} movieTitle - The title of the media item to bookmark/unbookmark.
   * @returns {Promise<void>}
   */
  toggleBookmark: async (movieTitle: string): Promise<void> => {
    const { user, media } = get();
    if (!user) return;

    try {
      const response: UpdateBookmarkResponse = await updateBookmark(
        user._id,
        movieTitle
      );
      const bookmarkedItems = response.bookmarkedItems ?? [];
      const updatedMedia = media.map((item) => ({
        ...item,
        isBookmarked: bookmarkedItems.includes(item.title),
      }));
      set({
        media: updatedMedia,
        bookmarked: updatedMedia.filter((item) => item.isBookmarked),
        user: { ...user, bookmarkedItems },
      });
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  },
}));

export default useMediaStore;
