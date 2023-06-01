import { useState } from 'react';

import * as S from './InterviewContainer.style';

import Loading from '../common/Loading';

import { UseMutateFunction } from '@tanstack/react-query';
import { AiCheckAnswerType, SubmitData } from '../../hooks/useSubmitAnswer';
import TypingContainer from './TypingContainer';

interface InterViewContainerProps {
  data: string[];
  mutate: UseMutateFunction<AiCheckAnswerType, unknown, SubmitData[], unknown>;
  mutateLoading: boolean;
}

const InterviewContainer = ({ data, mutate, mutateLoading }: InterViewContainerProps) => {
  const [questionIdx, setQuestionIdx] = useState(1);

  const totalQuestionCount = data.length;

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
      </S.QuestionWrapper>
      <TypingContainer
        data={data}
        mutate={mutate}
        questionIdx={questionIdx}
        setQuestionIdx={setQuestionIdx}
      />
    </S.Container>
  );
};

export default InterviewContainer;
