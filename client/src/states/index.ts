import { atom } from 'recoil';

export type ModeState = 'dark' | 'light';

export const modeState = atom<ModeState>({
  key: 'viewMode',
  default: 'dark',
});
