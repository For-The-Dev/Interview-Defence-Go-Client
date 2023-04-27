import * as S from './Content.style';
import dayjs from 'dayjs';
import arrowIcon from '../../asset/images/arrow.png';

interface ContentProps {
  createdAt: string;
  question: string;
  id: number;
  answer: string;
}

const Content = ({ createdAt, question, answer, id }: ContentProps) => {
  const editQuestionDate = dayjs(createdAt).format('YYYY-MM-DD');

  return (
    <S.QuestionWrapper>
      <span>{editQuestionDate}</span>
      <div className="mainContent">
        <h3>{question}</h3>
        <img
          src={arrowIcon}
          className="arrow"
          onClick={() => {
            console.log(`모달 이벤트 ${id}`);
          }}
        />
      </div>
      <span className="previewAnswer">{answer}</span>
    </S.QuestionWrapper>
  );
};

export default Content;
