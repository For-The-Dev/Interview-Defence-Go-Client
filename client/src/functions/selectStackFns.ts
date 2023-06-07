import { RecoilState } from 'recoil';
import { Snapshot } from 'recoil';
import { stackFamily, stackState } from '../states/mainPage';
import { stackList } from '../data/stacks';

interface SelectStackArg {
  snapshot: Snapshot;
  set: <T>(recoilVal: RecoilState<T>, valOrUpdater: ((currVal: T) => T) | T) => void;
}

export const selectStack =
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

const changeToUpperCase = (stack: string) => stack.toUpperCase();

export const findOrSetStack =
  ({ snapshot, set }: SelectStackArg) =>
  (typingStack: string) => {
    // 사용자가 입력한 입력값 혹은 클릭한 입력값을 대문자로 변경
    const upperCaseTypingStack = changeToUpperCase(typingStack);

    // 현재 선택한 스택
    const currentStacks = snapshot.getLoadable(stackState).getValue();

    // 현재 스택들과 입력값이 동일한게 있는 지 확인, 없다면 -1 반환
    const findStackIdx = currentStacks
      .map((stack) => stack.toUpperCase())
      .indexOf(upperCaseTypingStack);

    // 후보군을 전부 대문자화
    const upperCaseSuggestions = stackList.map((stack: string) => stack.toUpperCase());

    // 후보군에 입력값이 있는 지 확인
    const findSuggestionStack = upperCaseSuggestions.indexOf(upperCaseTypingStack);

    // 타이핑 State한 관리.후보군이 스택에 존재할 경우엔 후보군의 atom을 가지고 옴
    const typingAtom =
      findSuggestionStack > -1
        ? stackFamily(stackList[findSuggestionStack])
        : stackFamily(typingStack);

    const typingStackState =
      findSuggestionStack > -1
        ? snapshot.getLoadable(stackFamily(stackList[findSuggestionStack])).getValue()
        : snapshot.getLoadable(stackFamily(typingStack)).getValue();

    // 현재 세팅된 스택에 input에 작성한 스택이 없고 후보군에는 있다면?
    if (findStackIdx === -1 && findSuggestionStack > -1) {
      // 선택 스택에 suggestionStack을 추가
      set(stackState, [...currentStacks, stackList[findSuggestionStack]]);
    } else if (findStackIdx === -1 && findSuggestionStack === -1) {
      // 새로운 스택을 추가
      set(stackState, [...currentStacks, typingStack]);
    }
    set(typingAtom, {
      ...typingStackState,
      selected: true,
    });
  };
