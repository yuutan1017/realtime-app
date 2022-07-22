import create from 'zustand';
import { SessionState } from '../types/type';

export const useStore = create<SessionState>((set) => ({
  session: null,
  setSession: (payload) => set({ session: payload }),
  editedProfile: { username: '', avatar_url: '', favorites: '' },
  updateEditedProfile: (payload) =>
    set({
      editedProfile: {
        username: payload.username,
        favorites: payload.favorites,
        avatar_url: payload.avatar_url,
      },
    }),
  resetEditedProfile: () =>
    set({ editedProfile: { username: '', avatar_url: '', favorites: '' } }),
}));
