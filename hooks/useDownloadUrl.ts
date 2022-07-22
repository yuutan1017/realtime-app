import { useState, useEffect } from 'react';

import { supabase } from '../utils/supabase';

export const useDownloadUrl = (
  filePath: string | undefined,
  key: 'avatars' | 'posts'
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const bucketName = key === 'avatars' ? 'avatars' : 'posts';
  useEffect(() => {
    if (filePath) {
      const download = async () => {
        setIsLoading(true);
        const { data, error } = await supabase.storage
          .from(bucketName)
          .download(filePath);
        if (error) {
          setIsLoading(false);
          throw error.message;
        }
        setUrl(URL.createObjectURL(data!));
        setIsLoading(false);
      };
      download();
    }
  }, [filePath, bucketName]);
  return { isLoading, url, setUrl };
};
