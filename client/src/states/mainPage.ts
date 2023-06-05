import { atom, selector } from 'recoil';

export const stackState = atom<string[]>({
  key: 'stack',
  default: [],
});

export const checkSelectStack = selector<boolean>({
  key: 'stacksSet',
  get: ({ get }) => {
    const stack = get(stackState);
    return stack.length > 0 ? true : false;
  },
});

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
