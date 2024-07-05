import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  userId: string | null;
  setUserId: (userId: string) => void;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get('token') || null,
  userId: null,
  setUserId: (userId) => set({ userId }),
  login: (token) => {
    Cookies.set('token', token, { expires: 1 });
    set({ token });
  },
  logout: () => {
    Cookies.remove('token');
    set({ token: null });
  },
}));

export default useAuthStore;
