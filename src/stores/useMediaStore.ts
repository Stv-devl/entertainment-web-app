import { create } from 'zustand';
import { Media, Users } from '../types/types';
import apiService from '../features/apiDatas';
import updateBookmark from '@/features/apiBookmark';

interface MediaDataState {
  users: Users[];
  media: Media[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useMediaStore = create<MediaDataState>((set) => ({
  users: [],
  media: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const { media, users } = await apiService();
      set({ media, users, loading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, loading: false });
      } else {
        set({ error: 'An unknown error occurred', loading: false });
      }
    }
  },

  toggleBookmark: async (userId: string, movieTitle: string) => {
    try {
      const updatedUser = await updateBookmark(userId, movieTitle);
      if (updatedUser) {
        set((state) => ({
          users: state.users.map((user) =>
            user.id === userId ? updatedUser : user
          ),
        }));
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  },
}));

export default useMediaStore;
