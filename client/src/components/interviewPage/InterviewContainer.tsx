import { useRef, useState } from 'react';
import Button from '../common/Button';
import * as S from './InterviewContainer.style';
import useSubmitAnswer from '../../hooks/useSubmitAnswer';
import Loading from '../common/Loading';

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
  const { mutate, isLoading } = useSubmitAnswer();

  const moveToNextQuestion = () => {
    if (ref.current) {
      const typing = ref.current.value;
      setQuestionIdx((prev) => prev + 1);
      setAnswer((prev) => [...prev, { question: data[questionIdx - 1], answer: typing }]);
      ref.current.value = '';
    }
  };

  // mutate -> recoil.
  // recoil -> 클라이언트 데이터로 저장.
  // react-query -> 서버에서 받은 데이터를 임의 쿼리로 저장.
  // return -> server, client 잠깐 보고 지나치는 걸로 봐야할 지...

  const onSubmitAnswer = () => {
    // mutate 가 이뤄져야함 . 해당 mutate가 이뤄지고 난 후엔 이동
    const allAnswer = [
      ...answer,
      {
        question: data[questionIdx - 1],
        answer: ref.current?.value,
      },
    ] as answerType[];
    mutate(allAnswer);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.QuestionWrapper>
        <h1>Q{questionIdx}</h1>
        <h2>{data[questionIdx - 1]}</h2>
      </S.QuestionWrapper>
      <S.InterviewInput ref={ref} />
      {questionIdx === data.length ? (
        <Button value="제출" onClick={onSubmitAnswer} width={'120px'} />
      ) : (
        <Button value="다음 문제로" onClick={moveToNextQuestion} width={'120px'} />
      )}
    </S.Container>
  );
};

export default InterviewContainer;
