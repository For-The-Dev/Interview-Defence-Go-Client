import { useQuery } from '@tanstack/react-query';
import Api from '../apis';
import queryKey from '../react-query/queryKey';

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
  const { data, isLoading } = useQuery([queryKey.userInfo, page], () => getPreviewAnswers(page));
  return { data, isLoading };
};
export default usePreviewAnwser;
