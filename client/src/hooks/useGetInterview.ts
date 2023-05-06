import { useQuery } from '@tanstack/react-query';
import Api from '../apis';
import queryKey from '../react-query/queryKey';
// https://indegoserver.fly.dev/gpt/interview?stacks=리액트,리액트쿼리

const getInterView = async (stacks: string): Promise<string[]> => {
  const { data } = await Api.get(`/gpt/interview?stacks=${stacks}`);
  return data;
};

const ONEMIN = 60000;
// 3분 * 문제 수 * 여유시간(1분)=> 1000*180*stacks.length +60000
const useGetInterview = (stacks: string) => {
  const getStacksCount = stacks.split(',').length;
  const getQuestionsCount = getStacksCount >= 5 ? getStacksCount : 5;

  const { data = [], isLoading } = useQuery(
    [queryKey.getInterviews, stacks],
    () => getInterView(stacks),
    {
      keepPreviousData: true,
      staleTime: ONEMIN * 3 * getQuestionsCount + ONEMIN,
      cacheTime: ONEMIN * 3 * getQuestionsCount * 1.5,
    },
  );
  return { data, isLoading };
};

export default useGetInterview;
