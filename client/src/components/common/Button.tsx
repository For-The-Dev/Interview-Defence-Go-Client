import { CSSProperties } from 'styled-components';
import * as S from './Button.style';
import githubLogo from '../../asset/images/github-mark-white.png';
import React from 'react';

export type BtnType = 'MAIN' | 'SUB' | 'LOGIN';

export interface BtnStyledProps {
  btnType?: BtnType;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
}
export interface ButtonProps extends BtnStyledProps {
  onClick: () => void;
  value: string;
  disabled?: boolean;
}

const Button = ({ onClick, value, btnType = 'MAIN', disabled, ...cssProPerty }: ButtonProps) => {
  return (
    <S.Button
      onClick={onClick}
      btnType={btnType}
      disabled={disabled ? true : false}
      {...cssProPerty}
    >
      {btnType === 'LOGIN' && <img src={githubLogo} />}
      {value}
    </S.Button>
  );
};

export default React.memo(Button);
