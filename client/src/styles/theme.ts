import { DefaultTheme } from 'styled-components';
// https://velog.io/@johnyworld/Styled-Components-%EB%A1%9C-Dark-Mode-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0 참고
const font = {
  xs: '8px',
  sm: '10px',
  base: '12px',
  lg: '14px',
  xl: '18px',
  xxl: '25px',
};

const desktopFont = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '22px',
  xxl: '29px',
};

export type FontType = typeof font;

const darkColor = {
  // 폰트 색상
  primaryFontColor: '#F8F8F8',
  subFontColor: '#A6A6A7',

  // 배경 색상
  primaryBg: '#12182B',
  contentBg: '#393E4A',
  qaAnswerBg: '#212832',
  searchBg: '#ffffff',
  popupBg: 'rgba(0,0,0,0.5)',
  btnBg: '#0075FF',
};

export type ColorType = typeof darkColor;

export const lightColor: ColorType = {
  // 폰트 색상
  primaryFontColor: '#FBF6F2',
  subFontColor: '#A6A6A7',

  // 배경 색상
  primaryBg: '#FBF6F2',
  contentBg: '#393E4A',
  qaAnswerBg: '#212832',
  searchBg: '#ffffff',
  popupBg: 'rgba(255,255,255,0.85)',
  btnBg: '#0075FF',
};

export const defalutTheme: DefaultTheme = {
  color: darkColor,
  font,
};

export const lightTheme: DefaultTheme = {
  color: lightColor,
  font,
};
