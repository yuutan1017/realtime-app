import { ChangeEvent } from 'react';
import { useMutation } from 'react-query';

import { supabase } from '../utils/supabase';
import { useStore } from '../store';

export const useUploadAvatarImage = () => {
  const editedProfile = useStore((state) => state.editedProfile);
  const updateProfile = useStore((state) => state.updateEditedProfile);

  const useMutateUploadAvatarImage = useMutation(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        throw new Error('イメージファイルを選択してください');
      }
      console.log('file');
      console.log(e.target.files);
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      const { error } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);
      if (error) throw new Error(error.message);
      updateProfile({ ...editedProfile, avatar_url: filePath });
    },
    {
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );

  return { useMutateUploadAvatarImage };
};
