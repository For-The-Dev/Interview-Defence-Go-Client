import { DefaultTheme } from 'styled-components';

const color = {
  // white: '#FFFDFB',
};

const font = {
  // xxl: '24px',
};

export type ColorType = typeof color;
export type FontType = typeof font;

const theme: DefaultTheme = {
  color,
  font,
};

export default theme;
