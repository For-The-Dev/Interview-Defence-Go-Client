import styled, { css } from 'styled-components';
import arrowIcon from '../../asset/images/arrow.png';

const QuestionWrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.color.contentBg};
    min-height: 70px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: ${theme.font.xs};

    cursor: pointer;
    > .mainContent {
      font-size: ${theme.font.base};
      display: flex;
      justify-content: space-between;
      align-items: center;
      &::after {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url(${arrowIcon});
        background-size: contain;
      }
    }

    > .previewAnswer {
      color: ${theme.color.subFontColor};
    }
  `};
`;

export { QuestionWrapper };
