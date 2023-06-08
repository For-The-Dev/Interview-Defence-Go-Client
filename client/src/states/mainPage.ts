import { atom, atomFamily, selector } from 'recoil';

export const stackState = atom<string[]>({
  key: 'stack',
  default: [],
});

export interface stackType {
  value: string;
  selected: boolean;
}

export const stackFamily = atomFamily<stackType, string>({
  key: 'stacks',
  default: (stack: string) => {
    return {
      value: stack,
      selected: false,
    };
  },
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
