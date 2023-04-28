import { CSSProperties } from 'styled-components';
import * as S from './Button.style';
import githubLogo from '../../asset/images/github-mark-white.png';
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
}

const Button = ({ onClick, value, btnType = 'MAIN', ...cssProPerty }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} btnType={btnType} {...cssProPerty}>
      {btnType === 'LOGIN' && <img src={githubLogo} />}
      {value}
    </S.Button>
  );
};

export default Button;
