import { useMutation, useQueryClient } from 'react-query';

import { supabase } from '../utils/supabase';
import { Profile } from '../types/type';

export const useMutateProfile = () => {
  const queryClient = useQueryClient();

  const createProfileMutation = useMutation(
    async (profile: Omit<Profile, 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase.from('profiles').insert(profile);
      if (error) throw new Error(error.message);
      console.log('createData');
      console.log(data);
      return data;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(['profile'], res[0]);
        console.log('SuccesResponce');
        console.log(res);
      },
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  
  const updateProfileMutation = useMutation(
    async (profile: Omit<Profile, 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(profile)
        .eq('id', profile.id);
      if (error) throw new Error(error.message);
      console.log('updateData');
      console.log(data);
      return data;
    },
    {
      onSuccess: (res) => {
        queryClient.setQueryData(['profile'], res[0]);
        console.log('SuccesResponce');
        console.log(res);
      },
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );
  return { createProfileMutation, updateProfileMutation };
};
