import { create } from 'zustand';
import { Media, Users } from '../types/types';
import apiService from '../Services/apiDatas';
import updateBookmark from '@/Services/apiBookmark';
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

const useMediaStore = create<MediaDataState>((set, get) => ({
  user: null,
  media: [],
  bookmarked: [],
  loading: false,
  error: null,
  setUser: (user: Users) => set({ user }),

  fetchData: async () => {
    const { userId } = useAuthStore.getState();
    set({ loading: true, error: null });
    try {
      const { media, users } = await apiService();
      const user = users.find((u) => u.id === userId) || null;
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

  toggleBookmark: async (movieTitle: string) => {
    const { user, media } = get();
    if (!user) return;

    try {
      const updatedUser = await updateBookmark(user.id, movieTitle);
      if (updatedUser) {
        const bookmarked = media.filter((item) =>
          updatedUser.bookmarkedItems.includes(item.title)
        );
        set({
          user: updatedUser,
          bookmarked,
        });
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  },
}));

export default useMediaStore;
