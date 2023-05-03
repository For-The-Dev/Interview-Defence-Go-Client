import styled, { css } from 'styled-components';

const Container = styled.section`
  width: 100%;
  max-width: 600px;
  min-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const QuestionWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    > h1 {
      font-size: ${theme.font.xxl};
    }
    > h2 {
      font-size: ${theme.font.xl};
    }
  `}
`;

const InterviewInput = styled.textarea`
  width: 100%;
  min-height: 300px;
  height: 50%;
  border-radius: 20px;
  padding: 20px;
  overflow: auto;
`;

export { Container, QuestionWrapper, InterviewInput };
