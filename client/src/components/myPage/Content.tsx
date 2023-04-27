import * as S from './Content.style';
import dayjs from 'dayjs';

interface ContentProps {
  createdAt: string;
  question: string;
  id: number;
  answer: string;
}

const Content = ({ createdAt, question, answer, id }: ContentProps) => {
  const editQuestionDate = dayjs(createdAt).format('YYYY-MM-DD');

  return (
    <S.QuestionWrapper
      onClick={() => {
        console.log(`모달 이벤트 ${id}`);
      }}
    >
      <span>{editQuestionDate}</span>
      <div className="mainContent">
        <h3>{question}</h3>
      </div>
      <span className="previewAnswer">{answer}</span>
    </S.QuestionWrapper>
  );
};

export default Content;
