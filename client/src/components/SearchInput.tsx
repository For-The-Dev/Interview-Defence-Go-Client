import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useRecoilState } from 'recoil';
import { stackState } from '../states/stack';

import styled from 'styled-components';

import { stackList } from '../data/stacks';

import searchIcon from '../asset/images/loupe.png';

const SearchBox = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  @media screen and (max-width: 500px) {
    min-width: 200px;
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    min-width: 300px;
  }

  @media screen and (min-width: 801px) {
    min-width: 500px;
  }
`;

const SearchInput = styled.input`
  min-width: 211.5px;
  width: 90%;
  height: 30px;
  text-indent: 5px;
  border: 1px black;
  border-style: none solid none none;
  border-radius: 0px;
`;

const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.searchBg};
  min-width: 45.7px;
  width: 10%;
  border-radius: 0 10px 10px 0px;
`;

const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

const SuggestionKeywords = styled.ul<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  top: 161px;
  background-color: white;
  color: black;
  border-radius: 0 0 10px 10px;

  @media screen and (max-width: 500px) {
    min-width: 208px;
    margin-right: 47px;
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    min-width: 252px;
    margin-right: 46px;
  }

  @media screen and (min-width: 801px) {
    min-width: 448px;
    margin-right: 50px;
  }
`;

const SuggestionKeyword = styled.li`
  margin: 10px 0 10px 10px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

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

  const handleFocusIn = () => {
    setOn(true);
  };

  const handleFocusOut = () => {
    setOn(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} onBlur={handleFocusOut}>
      <SearchBox onSubmit={handleSubmit(handleValid)}>
        <SearchInput
          {...register('stack', { required: '스택을 입력해주세요' })}
          placeholder="보유 기술을 검색해주세요."
          autoComplete="off"
          onFocus={handleFocusIn}
        />
        <SearchButton>
          <SearchImg src={searchIcon} />
        </SearchButton>
      </SearchBox>
      <SuggestionKeywords visible={on}>
        {stackList.map((el, index) => (
          <SuggestionKeyword onMouseDown={keywordSelect} key={index} value={el}>
            {el}
          </SuggestionKeyword>
        ))}
      </SuggestionKeywords>
    </div>
  );
};

export default SearchComponent;
