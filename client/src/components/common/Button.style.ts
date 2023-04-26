import { BtnStyledProps } from './Button';
import styled, { css } from 'styled-components';

export const Button = styled.button<BtnStyledProps>`
  ${({ theme, btnType, width, height, fontSize }) => {
    return css`
      background-color: ${btnType === 'main' ? theme.color.btnBg : theme.color.contentBg};
      width: ${width ? width : '84px'};
      height: ${height ? height : '36px'};
      font-size: ${fontSize ? fontSize : '15px'};
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      font-weight: bold;
      color: ${theme.color.primaryFontColor};
      border-radius: 30px;
      letter-spacing: 0.5px;
      > img {
        width: 20px;
        height: 20px;
      }
    `;
  }}
`;
