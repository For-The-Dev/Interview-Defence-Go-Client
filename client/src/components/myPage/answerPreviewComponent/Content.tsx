import * as S from './Content.style';
import arrowIcon from '../../../asset/images/arrow.png';
import setTimeToZ from '../../../functions/setTimeToZ';

interface ContentProps {
  createdAt: string;
  question: string;
  id: number;
  answer: string;
  changeModalState: (id: number) => void;
}

const Content = ({ createdAt, question, answer, id, changeModalState }: ContentProps) => {
  const editQuestionDate = setTimeToZ(createdAt);

  return (
    <S.QuestionWrapper>
      <span>{editQuestionDate}</span>
      <div className="mainContent">
        <h3>{question}</h3>
        <img src={arrowIcon} className="arrow" onClick={() => changeModalState(id)} />
      </div>
      <span className="previewAnswer">{answer}</span>
    </S.QuestionWrapper>
  );
};

export default Content;
