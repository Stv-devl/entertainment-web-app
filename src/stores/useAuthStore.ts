import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  userId: string | null;
  login: (token: string, userId: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get('token') || null,
  userId: Cookies.get('userId') || null,

  login: (token, userId) => {
    const oneHour = 1 / 24;
    Cookies.set('token', token, { expires: oneHour });
    Cookies.set('userId', userId, { expires: oneHour });
    set({ token, userId });
  },
  logout: () => {
    Cookies.remove('token');
    Cookies.remove('userId');
    set({ token: null, userId: null });
  },
}));

export default useAuthStore;
