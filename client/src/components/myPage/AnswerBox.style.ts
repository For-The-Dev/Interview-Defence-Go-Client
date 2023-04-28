import styled from 'styled-components';

const AnswerWrapper = styled.article`
  background-color: ${({ theme }) => theme.color.qaAnswerBg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

const Answer = styled.h1`
  font-size: ${({ theme }) => theme.font.base};
  line-height: 14px;
`;

const Date = styled.span`
  font-size: ${({ theme }) => theme.font.sm};
  color: ${({ theme }) => theme.color.subFontColor};
  margin-bottom: 5px;
`;

export { AnswerWrapper, Answer, Date };
