import { atom } from 'recoil';

export type ModeState = boolean;

export const modeState = atom<ModeState>({
  key: 'viewMode',
  default: true,
});
