import { useState } from 'react';
import * as S from './Accordion.style';

interface resultDataType {
  question: string;
  aiAnswer: string;
  userAnswer: string;
  index: number;
}

export const Accordion = ({ question, aiAnswer, userAnswer, index }: resultDataType) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <S.AccodionArea>
      <S.ContentBox>
        <S.Label active={checked} onClick={handleChecked}>
          {`Q${index + 1}. ${question}`}
        </S.Label>
        <S.Content active={checked}>
          <S.MyAnswer>
            <S.AnswerTitle>{`My Answer`}</S.AnswerTitle>
            <S.AnswerContent>{userAnswer}</S.AnswerContent>
          </S.MyAnswer>
          <S.AIAnswer>
            <S.AnswerTitle style={{ color: 'red' }}>{`AI's Answer`}</S.AnswerTitle>
            <S.AnswerContent>{aiAnswer}</S.AnswerContent>
          </S.AIAnswer>
        </S.Content>
      </S.ContentBox>
    </S.AccodionArea>
  );
};
