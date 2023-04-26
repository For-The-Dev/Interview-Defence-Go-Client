import { CSSProperties } from 'styled-components';
import * as S from './Button.style';
import githubLogo from '../../asset/images/github-mark-white.png';
export type BtnType = 'main' | 'sub' | 'login';

export interface BtnStyledProps {
  btnType: BtnType;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
}
export interface ButtonProps extends BtnStyledProps {
  onClick: () => void;
  value: string;
}

const Button = ({ onClick, value, btnType, ...cssProPerty }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} btnType={btnType} {...cssProPerty}>
      {btnType === 'login' && <img src={githubLogo} />}
      {value}
    </S.Button>
  );
};

export default Button;
