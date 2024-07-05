import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  token: Cookies.get('token') || null,
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
