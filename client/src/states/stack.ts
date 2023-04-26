import { atom } from 'recoil';

export type StackState = {
  stack: string;
};

export const stackState = atom<StackState[]>({
  key: 'stack',
  default: [],
});
