import setTimeToZ from '../../../functions/setTimeToZ';
import * as S from './AnswerBox.style';

interface AnswerType {
  text: string;
  id: number;
  nickName: string;
  createdAt: string;
}

interface AnswerBoxProps {
  answer: AnswerType;
}

const AnswerBox = ({ answer }: AnswerBoxProps) => {
  const { createdAt } = answer;
  const date = setTimeToZ(createdAt);
  return (
    <S.AnswerWrapper>
      <S.Date>{date}</S.Date>
      <S.Answer>{answer.text}</S.Answer>
    </S.AnswerWrapper>
  );
};

export default AnswerBox;
