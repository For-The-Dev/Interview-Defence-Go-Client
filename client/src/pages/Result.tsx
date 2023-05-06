import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Accordion } from '../components/Accordion';
import Button from '../components/common/Button';
import { useQueryClient } from '@tanstack/react-query';
import queryKey from '../react-query/queryKey';

interface resultDataType {
  question: string;
  aiAnswer: string;
  userAnswer: string;
}

const ResultContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > :first-child {
    > :first-child {
      > :first-child {
        border-radius: 5px 5px 0 0;
      }
    }
  }

  > :last-child {
    margin-bottom: 20px;
    > :first-child {
      > :first-child {
        border-radius: 0 0 5px 5px;
      }
    }
  }
`;

const Result = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const resultData: resultDataType[] | undefined = queryClient.getQueryData([queryKey.answer]);

  return (
    <ResultContainer>
      <AccordionContainer>
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
      </AccordionContainer>
      <Button onClick={() => navigate('/')} value="Home"></Button>
    </ResultContainer>
  );
};

export default Result;
