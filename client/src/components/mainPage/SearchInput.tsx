import { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilCallback } from 'recoil';
import searchIcon from '../../asset/images/loupe.png';
import { stackList } from '../../data/stacks';

import * as S from './SearchInput.style';
import { findOrSetStack } from '../../functions/selectStackFns';

interface stackForm {
  stack: string;
}

interface SearchProps {
  children: ReactNode;
}

const SearchComponent = ({ children }: SearchProps) => {
  // 검색 인풋 관련
  const { register, handleSubmit, setValue, watch } = useForm<stackForm>();

  const addStackHandler = useRecoilCallback(findOrSetStack, []);

  const handleValid = (newStack: stackForm) => {
    addStackHandler(newStack.stack);
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
      addStackHandler(event);
    } else {
      addStackHandler(event.currentTarget.textContent || '');
    }
    // false로 선택되어있어  검색창이 지워지지도 않고, 키보드 입력값이 돌아가지 않습니다
    // 만약 클릭 시 스택이 바로 선택되게 된다면 연관검색어 창을 꺼주고 값을 비워주는게 어떨까 합니다.
    setOn(true);
    2;
    setValue('stack', '');
    blurFunc();
  };

  // 결정적으로 해당 함수를 통해서 등록함.
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
        {children}
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
