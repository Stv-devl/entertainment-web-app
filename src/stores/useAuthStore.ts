import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  userId: string | null;
  setUserId: (userId: string) => void;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get('token') || null,
  userId: Cookies.get('userId') || null,
  setUserId: (userId) => {
    Cookies.set('userId', userId, { expires: 1 });
    set({ userId });
  },
  login: (token, userId) => {
    Cookies.set('token', token, { expires: 1 });
    Cookies.set('userId', userId, { expires: 1 });
    set({ token, userId });
  },
  logout: () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    set({ token: null, userId: null });
  },
}));

export default useAuthStore;
