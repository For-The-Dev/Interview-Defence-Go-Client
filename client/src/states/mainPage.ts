import { atom } from 'recoil';

export const stackState = atom<string[]>({
  key: 'stack',
  default: [],
});

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
