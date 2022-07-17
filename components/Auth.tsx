import { useState, FormEvent, FC } from 'react';
import { ShieldCheckIcon } from '@heroicons/react/solid';

import { useMutateAuth } from '../hooks/useMutateAuth';

export const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  } = useMutateAuth();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      loginMutation.mutate();
    } else {
      registerMutation.mutate();
    }
  };
  return (
    <>
      <ShieldCheckIcon className="mb-8 h-12 text-blue-500" />
    </>
  );
};
