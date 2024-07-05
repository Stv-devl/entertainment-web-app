import { create } from 'zustand';
import type { Users } from '../types/types';

interface UserStore {
  users: Users[];
  addUser: (user: Users) => void;
}

const useUserStore = create<UserStore>((set) => ({
  users: [],
  addUser: (user: Users) =>
    set((state) => ({
      users: [...state.users, user],
    })),
}));

export default useUserStore;
