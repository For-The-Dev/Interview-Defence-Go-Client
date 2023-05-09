import { useSearchParams } from 'react-router-dom';
import checkInterviewParams from '../functions/checkInterviewParams';
import InterviewContainer from '../components/interviewPage/InterviewContainer';
import useGetInterview from '../hooks/useGetInterview';
import Loading from '../components/common/Loading';
import useSubmitAnswer from '../hooks/useSubmitAnswer';

const Interview = () => {
  const [searchParams] = useSearchParams();
  const stacks = checkInterviewParams(searchParams, 'stacks');

  const { data, isLoading } = useGetInterview(stacks as string);
  const { mutate, isLoading: mutateLoading } = useSubmitAnswer();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <InterviewContainer data={data} mutate={mutate} mutateLoading={mutateLoading} />
      )}
    </>
  );
};

export default Interview;
