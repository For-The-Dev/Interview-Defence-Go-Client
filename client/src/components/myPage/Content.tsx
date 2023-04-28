import * as S from './Content.style';
import dayjs from 'dayjs';
import arrowIcon from '../../asset/images/arrow.png';

interface ContentProps {
  createdAt: string;
  question: string;
  id: number;
  answer: string;
  changeModalState: (id: number) => void;
}

const Content = ({ createdAt, question, answer, id, changeModalState }: ContentProps) => {
  const editQuestionDate = dayjs(createdAt).format('YYYY-MM-DD');

  return (
    <S.QuestionWrapper>
      <span>{editQuestionDate}</span>
      <div className="mainContent">
        <h3>{question}asdfadsfadsfasfadsfadsfadsfadsfdsfadsfadsfadsfas</h3>
        <img src={arrowIcon} className="arrow" onClick={() => changeModalState(id)} />
      </div>
      <span className="previewAnswer">{answer}</span>
    </S.QuestionWrapper>
  );
};

export default Content;
