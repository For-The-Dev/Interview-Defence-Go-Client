import { useQuery, useQueryClient } from '@tanstack/react-query';
import Api from '../apis';
import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import queryKey from '../react-query/queryKey';

interface User {
  nickName: string;
  avatar_url: string;
  todayAnswerCount: number;
  allAnswerCount: number;
}

interface UseUser {
  user: User | null;
  isLoading: boolean;
  isError: boolean;
}

const getUser = async (): Promise<User | null> => {
  const token = localStorage.getItem('token');

  if (!token) return null;

  const { data }: AxiosResponse<User> = await Api.get('/user');

  return data;
};

export default function useUser(): UseUser {
  const currentToken = localStorage.getItem('token');
  const { data: user = null, isLoading, isError } = useQuery([queryKey.userInfo], getUser);

  const queryClient = useQueryClient();

  useEffect(() => {
    console.log(queryClient.getQueryCache());
    queryClient.refetchQueries([queryKey.userInfo]);
  }, [queryClient, currentToken]);

  return { user, isLoading, isError };
}
