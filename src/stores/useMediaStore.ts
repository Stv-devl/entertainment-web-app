import { create } from 'zustand';
import type { Media } from '../types/types';

interface MediaStore {
  media: Media[];
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setMedia: (media: Media[]) => void;
}

const useMediaStore = create<MediaStore>((set) => ({
  media: [],
  loading: false,
  error: null,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setMedia: (media) => set({ media }),
}));

export default useMediaStore;
