import { AiCheckAnswerType } from './useSubmitAnswer';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Api from '../apis';
import queryKey from '../react-query/queryKey';

interface ReplyType {
  answer: string;
  question: string;
}

const replyToQuestion = async (replyAnswer: ReplyType, id: string): Promise<AiCheckAnswerType> => {
  const successData: AiCheckAnswerType = await Api.post(`user/editQuestion/${id}`, {
    data: replyAnswer,
  });
  return successData;
};

const useReplytoQuestion = (id: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (replyAnswers: ReplyType[]) => {
      const replyData = replyAnswers[0];
      return replyToQuestion(replyData, id);
    },
    {
      onSuccess: (data) => {
        queryClient.refetchQueries([queryKey.userInfo]);
        queryClient.refetchQueries([queryKey.detailQA, +id]);
        queryClient.setQueryData([queryKey.answer], data.data);
        navigate('/result');
      },
    },
  );
  return { mutate, isLoading };
};

export default useReplytoQuestion;
