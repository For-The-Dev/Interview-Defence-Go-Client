import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { stackState } from '../../states/mainPage';

import { stackList } from '../../data/stacks';

import * as S from './SearchInput.style';
import searchIcon from '../../asset/images/loupe.png';

interface stackForm {
  stack: string;
}

const SearchComponent = () => {
  // 검색 인풋 관련
  const { register, handleSubmit, setValue } = useForm<stackForm>();
  const [stack, setStack] = useRecoilState(stackState);

  const handleValid = (newStack: stackForm) => {
    if (!stack.includes(newStack.stack)) {
      setStack((oldStacks) => [...oldStacks, newStack.stack]);
    }
    setValue('stack', '');
    setOn(false);
  };

  // 자동 완성 관련
  const [on, setOn] = useState(false);
  const keywordSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    const newStack: stackForm = { stack: event.currentTarget.textContent || '' };
    if (!stack.includes(newStack.stack)) {
      setStack((oldStacks) => [...oldStacks, newStack.stack]);
    }
    setOn(false);
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
        {stackList.map((el, index) => (
          <S.SuggestionKeyword onMouseDown={keywordSelect} key={index} value={el}>
            {el}
          </S.SuggestionKeyword>
        ))}
      </S.SuggestionKeywords>
    </div>
  );
};

export default SearchComponent;
