import styled from 'styled-components';

import searchIcon from '../image/loupe.png';

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  min-width: 300px;
  width: 50%;
  height: 30px;
  text-align: center;
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.searchBg};
  width: 30px;
  border-radius: 0 10px 10px 0px;
`;

const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchComponent = () => {
  return (
    <SearchBox>
      <SearchInput type={'text'} placeholder="보유 기술을 검색해주세요." />
      <SearchButton>
        <SearchImg src={searchIcon} />
      </SearchButton>
    </SearchBox>
  );
};

export default SearchComponent;
