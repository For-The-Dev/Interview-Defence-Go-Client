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

const getDetailAnswer = async (id: number | string): Promise<Questions> => {
  const { data }: { data: Questions } = await Api.get(`/user/question/${id}`);
  return data;
};

const useGetDetailAnswer = (id: number | string) => {
  const { data, isLoading } = useQuery([queryKey.detailQA, id], () => getDetailAnswer(id));
  return { data, isLoading };
};

export default useGetDetailAnswer;
