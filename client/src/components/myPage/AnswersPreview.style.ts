import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  min-height: 310px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-weight: bold;
  gap: 10px;
`;

const QuestionContainer = styled.section`
  max-height: 90%;
  min-height: 70px;
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    > .title {
      font-size: ${theme.font.base};
      margin-bottom: 8px;
    }
    > .contentWrapper {
      height: 100%;
      overflow: auto;
      border-radius: 10px;

      > article {
        border-bottom: solid 0.5px ${theme.color.subFontColor};
      }

      > article:last-child {
        border-bottom: none;
      }
      > .alertNoData {
        min-height: 70px;
        text-align: center;
        line-height: 70px;
      }
    }
  `}
`;

export { Container, QuestionContainer };
