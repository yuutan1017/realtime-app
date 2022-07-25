import { FC } from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import { CameraIcon } from '@heroicons/react/solid';

import { useStore } from '../store';
import { useQueryProfile } from '../hooks/useQueryProfile';
import { useMutateProfile } from '../hooks/useMutateProfile';
import { useDownloadUrl } from '../hooks/useDownloadUrl';
import { useUploadAvatarImage } from '../hooks/useUploadAvatarImage';

export const UserProfile: FC = () => {
  const session = useStore((state) => state.session);
  const editedProfile = useStore((state) => state.editedProfile);
  const update = useStore((state) => state.updateEditedProfile);
  const { data: profile } = useQueryProfile();
  const { updateProfileMutation } = useMutateProfile();
  const { useMutateUploadAvatarImage } = useUploadAvatarImage();
  const { url: avatarUrl, isLoading } = useDownloadUrl(
    editedProfile.avatar_url,
    'avatars'
  );
  const updateProfile = () => {
    updateProfileMutation.mutate({
      id: session?.user?.id,
      username: editedProfile.username,
      favorites: editedProfile.favorites,
      avatar_url: editedProfile.avatar_url,
    });
  };
  return (
    <>
      <p className='mb-4'>{profile?.username}</p>
    </>
  )
};
