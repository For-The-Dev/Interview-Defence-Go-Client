import 'styled-components';
import { ColorType, FontType } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorType;
    font: FontType;
  }
}
