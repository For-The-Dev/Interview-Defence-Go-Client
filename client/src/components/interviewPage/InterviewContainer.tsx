import { useRef, useState } from 'react';
import Button from '../common/Button';
import * as S from './InterviewContainer.style';

interface InterViewData {
  data: string[];
}

interface answerType {
  question: string;
  answer: string;
}

const InterviewContainer = ({ data }: InterViewData) => {
  const [questionIdx, setQuestionIdx] = useState(1);
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [answer, setAnswer] = useState<answerType[]>([]);

  const moveToNextQuestion = () => {
    if (ref.current) {
      const typing = ref.current.value;
      setQuestionIdx((prev) => prev + 1);
      setAnswer((prev) => [...prev, { question: data[questionIdx - 1], answer: typing }]);
      ref.current.value = '';
    }
  };

  const onSubmitAnswer = () => {
    // mutate 가 이뤄져야함 . 해당 mutate가 이뤄지고 난 후엔 이동
  };
  return (
    <S.Container>
      <S.QuestionWrapper>
        <h1>Q{questionIdx}</h1>
        <h2>{data[questionIdx - 1]}</h2>
      </S.QuestionWrapper>
      <S.InterviewInput ref={ref} />
      {questionIdx === data.length ? (
        <Button
          value="제출"
          onClick={() => {
            console.log(data);
            console.log(answer);
          }}
          width={'120px'}
        />
      ) : (
        <Button value="다음 문제로" onClick={moveToNextQuestion} width={'120px'} />
      )}
    </S.Container>
  );
};

export default InterviewContainer;
