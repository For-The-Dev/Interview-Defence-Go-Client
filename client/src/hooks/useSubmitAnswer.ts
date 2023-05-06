import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query';
import Api from '../apis';
import { useNavigate } from 'react-router-dom';
import queryKey from '../react-query/queryKey';

export interface SubmitData {
  answer: string;
  question: string;
}

interface SuccessData {
  question: string;
  userAnswer: string;
  aiAnswer: string;
}

export interface AiCheckAnswerType {
  data: SuccessData[];
}

interface UseSubmitType {
  mutate: UseMutateFunction<AiCheckAnswerType, unknown, SubmitData[], unknown>;
  isLoading: boolean;
}

const submitAnswer = async (submitData: SubmitData[]): Promise<AiCheckAnswerType> => {
  const successData: AiCheckAnswerType = await Api.post('/user/editQuestions', {
    data: submitData,
  });
  return successData;
};

const useSubmitAnswer = (): UseSubmitType => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (submitData: SubmitData[]) => submitAnswer(submitData),
    {
      onSuccess: (data) => {
        // userInfo, preview, detailQa
        queryClient.invalidateQueries([queryKey.userInfo]);
        queryClient.invalidateQueries([queryKey.userQAPreview]);
        queryClient.removeQueries([queryKey.getInterviews]);
        queryClient.setQueryData([queryKey.answer], data.data);
        navigate('/result');
      },
    },
  );

  return { mutate, isLoading };
};

export default useSubmitAnswer;
