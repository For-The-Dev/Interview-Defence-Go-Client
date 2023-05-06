import { useParams } from 'react-router-dom';
import Loading from '../components/common/Loading';
import useGetDetailAnswer from '../hooks/useGetDetailAnswer';
import InterviewContainer from '../components/interviewPage/InterviewContainer';
import useReplytoQuestion from '../hooks/useReplytoQuestion';

const ReplyInterview = () => {
  const { id = '' } = useParams();

  const { data: detailData, isLoading } = useGetDetailAnswer(id);
  const { mutate, isLoading: mutateLoading } = useReplytoQuestion(id);
  const getQuestion = detailData ? [detailData.text] : [];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <InterviewContainer data={getQuestion} mutate={mutate} mutateLoading={mutateLoading} />
      )}
    </>
  );
};

export default ReplyInterview;
