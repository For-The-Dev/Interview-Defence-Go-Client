import { atom } from 'recoil';

export type LoginState = boolean;

export const loginState = atom<LoginState>({
  key: 'login',
  default: false,
});
