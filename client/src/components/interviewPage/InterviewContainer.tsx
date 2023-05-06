import { useRef, useState } from 'react';
import Button from '../common/Button';
import * as S from './InterviewContainer.style';

import Loading from '../common/Loading';
import TimerContainer from './TimerContainer';
import { UseMutateFunction } from '@tanstack/react-query';
import { AiCheckAnswerType, SubmitData } from '../../hooks/useSubmitAnswer';

interface InterViewContainerProps {
  data: string[];
  mutate: UseMutateFunction<AiCheckAnswerType, unknown, SubmitData[], unknown>;
  mutateLoading: boolean;
}

interface Answer {
  question: string;
  answer: string;
}

const MAX_ANSWER_LENGTH = 300;

const InterviewContainer = ({ data, mutate, mutateLoading }: InterViewContainerProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const [questionIdx, setQuestionIdx] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [typingLength, setTypingLength] = useState(0);

  const totalQuestionCount = data.length;
  const isLastQuestion = questionIdx === totalQuestionCount;
  const isTypingLengthWarning = typingLength + 10 >= MAX_ANSWER_LENGTH;
  const isTypingLengthOutOfRange = typingLength > MAX_ANSWER_LENGTH;

  const lengthCheck = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTypingLength(e.target.value.length);
  };

  // 제출 로직 수정. 1차로 버튼에 제한을 줬기 때문에 조건을 제거하고, 만약 타임아웃으로 다음 문제로 넘어가게 된다면
  // 글자수를 맞추고 넘어갈 수 있도록 수정 -> 서버 용량 문제
  const moveToNextQuestion = () => {
    if (ref.current) {
      const typing = ref.current.value.slice(0, 300);
      setQuestionIdx((prev) => prev + 1);
      setTypingLength(0);
      setAnswers((prev) => [...prev, { question: data[questionIdx - 1], answer: typing }]);
      ref.current.value = '';
    }
  };

  const onSubmitAnswer = () => {
    // mutate 가 이뤄져야함 . 해당 mutate가 이뤄지고 난 후엔 이동
    if (ref.current) {
      const allAnswer = [
        ...answers,
        {
          question: data[questionIdx - 1],
          answer: ref.current.value.slice(0, 300),
        },
      ];
      setTypingLength(0);
      mutate(allAnswer);
    }
  };

  if (mutateLoading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <div style={{ width: '100%', textAlign: 'end' }}>
        {questionIdx} / {totalQuestionCount}
      </div>
      <S.QuestionWrapper>
        <h1>Q{questionIdx}</h1>
        <h2>{data[questionIdx - 1]}</h2>
        <TimerContainer
          currentQuestion={questionIdx}
          isLastQuestion={isLastQuestion}
          moveToNextQuestion={moveToNextQuestion}
          onSubmitAnswer={onSubmitAnswer}
        />
      </S.QuestionWrapper>
      <S.InterviewInput ref={ref} onChange={lengthCheck} />
      <S.TypingLimitContainer warningSign={isTypingLengthWarning}>
        {`${typingLength} / ${MAX_ANSWER_LENGTH}`}
      </S.TypingLimitContainer>
      <Button
        value={isLastQuestion ? '제출' : '다음 문제'}
        onClick={isLastQuestion ? onSubmitAnswer : moveToNextQuestion}
        disabled={isTypingLengthOutOfRange ? true : false}
        width={'120px'}
        height={'50px'}
      />
    </S.Container>
  );
};

export default InterviewContainer;
