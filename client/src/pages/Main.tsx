import uuid from 'react-uuid';
import { useRecoilValue } from 'recoil';

import styled from 'styled-components';

import SearchComponent from '../components/SearchInput';
import { stackState } from '../states/stack';

const MainContainer = styled.section`
  width: 60vw;
`;

const MainLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  font-size: 30px;
  font-weight: bold;
`;

const MainText = styled.div`
  margin: 40px 0 20px 0;
  font-size: 18px;
`;

const MainRecommend = styled.div`
  width: 100%;
  border: 1px solid blue;
`;

const MainSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SelectBox = styled.div`
  display: flex;
  width: 100%;
  min-height: 200px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.qaAnswerBg};
`;

const MainBottom = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainButton = styled.button`
  width: 130px;
  height: 60px;
  background-color: #2929ff;
  border: 1px solid black;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Main = () => {
  const stack = useRecoilValue(stackState);

  return (
    <MainContainer>
      <MainLogo>
        <h2>INDeGo</h2>
      </MainLogo>
      <SearchComponent />
      <MainText>추천 스택</MainText>
      JavaScript, TypeScript, React, Redux, Next.js
      {/* <MainRecommend>
        <div>react html 박스 넣기</div>
      </MainRecommend> */}
      <MainText>현재 선택한 스택</MainText>
      <MainSelect>
        <SelectBox>
          {stack.map((el) => (
            <div key={uuid()}>{el.stack}</div>
          ))}
        </SelectBox>
      </MainSelect>
      <MainBottom>
        <MainButton>검색</MainButton>
      </MainBottom>
    </MainContainer>
  );
};

export default Main;
