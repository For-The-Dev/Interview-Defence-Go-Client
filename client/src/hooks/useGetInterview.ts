import { useQuery } from '@tanstack/react-query';
import Api from '../apis';
import queryKey from '../react-query/queryKey';
// https://indegoserver.fly.dev/gpt/interview?stacks=리액트,리액트쿼리

const getInterView = async (stacks: string): Promise<string[]> => {
  const { data } = await Api.get(`/gpt/interview?stacks=${stacks}`);
  return data;
};

const useGetInterview = (stacks: string) => {
  const { data = [], isLoading } = useQuery(
    [queryKey.getInterviews, stacks],
    () => getInterView(stacks),
    {
      keepPreviousData: true,
    },
  ); // 인터뷰 쿼리 실행
  return { data, isLoading };
};

export default useGetInterview;
