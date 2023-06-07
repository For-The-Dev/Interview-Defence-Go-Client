import { RecoilState } from 'recoil';
import { Snapshot } from 'recoil';
import { stackFamily, stackState } from '../states/mainPage';

interface SelectStackArg {
  snapshot: Snapshot;
  set: <T>(recoilVal: RecoilState<T>, valOrUpdater: ((currVal: T) => T) | T) => void;
}

const selectStack =
  (value: string) =>
  ({ snapshot, set }: SelectStackArg) =>
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
  };

export default selectStack;
