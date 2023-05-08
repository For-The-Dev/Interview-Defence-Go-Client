import styled from 'styled-components';

export const SearchBox = styled.form`
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

export const SearchInput = styled.input`
  min-width: 211.5px;
  width: 90%;
  height: 30px;
  text-indent: 5px;
  border: 1px black;
  border-style: none solid none none;
  border-radius: 0px;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.color.searchBg};
  min-width: 45.7px;
  width: 10%;
  border-radius: 0 10px 10px 0px;
`;

export const SearchImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const SuggestionKeywords = styled.ul<{ visible: boolean }>`
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

export const SuggestionKeyword = styled.li`
  margin: 10px 0 10px 10px;
  cursor: pointer;

  :hover {
    color: red;
  }
`;
