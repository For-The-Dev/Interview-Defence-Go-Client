import { useNavigate } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

import queryKey from '../react-query/queryKey';

import Accordion from '../components/resultPage/Accordion';
import Button from '../components/common/Button';

import * as S from '../styles/ResultPage.style';

interface resultDataType {
  question: string;
  aiAnswer: string;
  userAnswer: string;
}

const ResultPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const resultData: resultDataType[] | undefined = queryClient.getQueryData([queryKey.answer]);

  return (
    <S.ResultContainer>
      <S.AccordionContainer>
        {resultData !== undefined
          ? resultData.map(({ question, aiAnswer, userAnswer }, index: number) => (
              <Accordion
                key={index}
                question={question}
                aiAnswer={aiAnswer}
                userAnswer={userAnswer}
                index={index}
              />
            ))
          : null}
      </S.AccordionContainer>
      <Button onClick={() => navigate('/')} value="Home"></Button>
    </S.ResultContainer>
  );
};

export default ResultPage;
