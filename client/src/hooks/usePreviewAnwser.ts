import { useQuery } from '@tanstack/react-query';
import Api from '../apis';
import queryKey from '../react-query/queryKey';
import useUser from './useUser';

interface Answers {
  id: number;
  createdAt: string;
  text: string;
  nickName: string;
}
interface Questions extends Answers {
  Answers: Answers[];
}

interface PageInfo {
  limit: number;
  totalCount: number;
}

interface PreviewAnswer {
  data: Questions[];
  pageInfo: PageInfo;
}

const getPreviewAnswers = async (page: number): Promise<PreviewAnswer> => {
  const { data }: { data: PreviewAnswer } = await Api.get(`/user/questions?page=${page}&limit=5`);
  return data;
};

const usePreviewAnwser = (page: number) => {
  const { user } = useUser();
  const { data, isLoading } = useQuery(
    [queryKey.userQAPreview, { page: +page }],
    () => getPreviewAnswers(page),
    { enabled: !!user },
  );
  return { data, isLoading };
};
export default usePreviewAnwser;
