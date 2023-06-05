import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SetterOrUpdater, useRecoilState } from 'recoil';

import { stackState } from '../../states/mainPage';

import { stackList } from '../../data/stacks';

import * as S from './SearchInput.style';
import searchIcon from '../../asset/images/loupe.png';

interface stackForm {
  stack: string;
}

const SearchComponent = () => {
  // 검색 인풋 관련
  const { register, handleSubmit, setValue, watch } = useForm<stackForm>();
  const [stack, setStack] = useRecoilState(stackState);

  const handleValid = (newStack: stackForm) => {
    findOrSetStack(newStack.stack, stackList, stack, setStack, changeToUpperCase);
    setValue('stack', '');
    setOn(false);
    blurFunc();
  };

  // 자동 완성 관련
  const [on, setOn] = useState(false);

  // undefined일 수 있기에 빈 값으로 자동 할당
  const inputValue = watch('stack') || '';

  const keywordSelect = (event: React.MouseEvent<HTMLLIElement> | string) => {
    if (typeof event === 'string') {
      findOrSetStack(event, stackList, stack, setStack, changeToUpperCase);
    } else {
      findOrSetStack(
        event.currentTarget.textContent || '',
        stackList,
        stack,
        setStack,
        changeToUpperCase,
      );
    }
    // false로 선택되어있어  검색창이 지워지지도 않고, 키보드 입력값이 돌아가지 않습니다
    // 만약 클릭 시 스택이 바로 선택되게 된다면 연관검색어 창을 꺼주고 값을 비워주는게 어떨까 합니다.
    setOn(true);
    setValue('stack', '');
    blurFunc();
  };

  const findOrSetStack = (
    typingStack: string, // 입력값(인풋창)
    suggestions: string[], // 연관검색어 후보군
    currentStacks: string[], // 현재 세팅된 Stacks
    setStack: SetterOrUpdater<string[]>, // Stacks를 바꿀 상태
    changeToUpperCase: (stack: string) => string, // 대문자 변환 함수
  ) => {
    // 사용자가 입력한 입력값 혹은 클릭한 입력값을 대문자로 변경
    const upperCaseTypingStack = changeToUpperCase(typingStack);

    // 현재 스택들과 입력값이 동일한게 있는 지 확인, 없다면 -1 반환
    const findStackIdx = currentStacks
      .map((stack) => stack.toUpperCase())
      .indexOf(upperCaseTypingStack);

    // 후보군을 전부 대문자화
    const upperCaseSuggestions = suggestions.map((stack: string) => stack.toUpperCase());
    // 후보군에 입력값이 있는 지 확인
    const upperCaseSuggestIdx = upperCaseSuggestions.indexOf(upperCaseTypingStack);

    // 현재 세팅된 스택에 input에 작성한 스택이 없고 후보군에는 있다면?
    if (findStackIdx === -1 && upperCaseSuggestIdx > -1) {
      setStack((oldStacks) => [...oldStacks, suggestions[upperCaseSuggestIdx]]);
    } else if (findStackIdx === -1 && upperCaseSuggestIdx === -1) {
      // 후보군에도 존재하지 않는다면
      setStack((oldStacks) => [...oldStacks, typingStack]);
    }
  };

  const changeToUpperCase = (stack: string) => stack.toUpperCase();

  const blurFunc = () => {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      activeElement.blur();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} onBlur={() => setOn(false)}>
      <S.SearchBox onSubmit={handleSubmit(handleValid)}>
        <S.SearchInput
          {...register('stack', { required: '스택을 입력해주세요' })}
          placeholder="보유 기술을 검색해주세요."
          autoComplete="off"
          onFocus={() => setOn(true)}
        />
        <S.SearchButton>
          <S.SearchImg src={searchIcon} />
        </S.SearchButton>
      </S.SearchBox>
      <S.SuggestionKeywords visible={on}>
        {inputValue.length > 0 ? (
          <>
            {stackList
              .filter((stack: string) =>
                changeToUpperCase(stack).includes(changeToUpperCase(inputValue)),
              )
              .map((matchedWord, idx) => (
                <S.SuggestionKeyword onMouseDown={keywordSelect} key={idx} value={matchedWord}>
                  {matchedWord}
                </S.SuggestionKeyword>
              ))}
            <S.SuggestionKeyword onMouseDown={() => keywordSelect(inputValue)} value={inputValue}>
              {inputValue}로 인터뷰하기
            </S.SuggestionKeyword>
          </>
        ) : (
          stackList.map((el, index) => (
            <S.SuggestionKeyword onMouseDown={keywordSelect} key={index} value={el}>
              {el}
            </S.SuggestionKeyword>
          ))
        )}
      </S.SuggestionKeywords>
    </div>
  );
};

export default SearchComponent;
