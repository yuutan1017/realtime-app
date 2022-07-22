import { ReactNode } from 'react';
import { Session } from '@supabase/supabase-js';

export type Props = {
  title: string;
  children: ReactNode;
};

export type SessionState = {
  session: Session | null;
  setSession: (payload: Session | null) => void;
  editedProfile: EditedProfile;
  updateEditedProfile: (payload: EditedProfile) => void;
  resetEditedProfile: () => void;
};

export type Profile = {
  id: string | undefined;
  updated_at: string;
  created_at: string;
  username: string | undefined;
  avatar_url: string | undefined;
  favorites: string | undefined;
};

export type EditedProfile = {
  username: string | undefined;
  avatar_url: string | undefined;
  favorites: string | undefined;
};
