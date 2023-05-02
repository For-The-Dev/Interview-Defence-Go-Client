import * as S from './AnswerBox.style';
import dayjs from 'dayjs';

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
  const date = dayjs(createdAt).format('YYYY-MM-DD');
  return (
    <S.AnswerWrapper>
      <S.Date>{date}</S.Date>
      <S.Answer>{answer.text}</S.Answer>
    </S.AnswerWrapper>
  );
};

export default AnswerBox;
