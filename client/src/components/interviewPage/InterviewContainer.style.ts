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
    gap: 10px;
    font-weight: 500;
    > h1 {
      font-size: ${theme.font.xxl};
    }
    > h2 {
      font-size: ${theme.font.xl};
      word-break: keep-all;
      text-align: center;
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

const TypingLimitContainer = styled.div<{ warningSign: boolean }>`
  width: 100%;
  text-align: end;
  color: ${({ warningSign }) => warningSign && 'red'};
  ${({ warningSign }) =>
    warningSign &&
    `
    animation : warning 0.1s alternate;
    @keyframes warning{
      from {
        transform: rotate(1deg);
      }
      to {
        transform: rotate(-1deg);
      }}
    `}
`;

export { Container, QuestionWrapper, InterviewInput, TypingLimitContainer };
