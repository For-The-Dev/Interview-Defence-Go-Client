import { atom } from 'recoil';

export const stackState = atom<string[]>({
  key: 'stack',
  default: [],
});
