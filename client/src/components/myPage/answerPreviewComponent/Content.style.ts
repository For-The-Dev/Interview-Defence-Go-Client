import styled, { css } from 'styled-components';

const QuestionWrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.color.contentBg};
    min-height: 70px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: ${theme.font.xs};

    > .mainContent {
      font-size: ${theme.font.base};
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 20px;
      > h3 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      > .arrow {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    > .previewAnswer {
      color: ${theme.color.subFontColor};
      width: calc(100% - 20px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 12px;
    }
  `};
`;

export { QuestionWrapper };
