import { stackFamily, stackState, stackType } from './../states/mainPage';
import { useRecoilCallback, SetterOrUpdater } from 'recoil';

const useStackSelect = (value: string) => {
  const selectStack = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        const stacks = snapshot.getLoadable(stackState).getValue();
        const currentStack = snapshot.getLoadable(stackFamily(value)).getValue();
        const currentStackAtom = stackFamily(value);

        if (!currentStack.selected) {
          set(stackState, [...stacks, value]);
        } else {
          set(stackState, [...stacks.filter((stack) => stack !== value)]);
        }

        set(currentStackAtom, {
          ...currentStack,
          selected: !currentStack.selected,
        });
      },
    [],
  );

  return selectStack;
};

export default useStackSelect;
