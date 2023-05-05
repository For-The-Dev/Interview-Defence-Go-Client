import uuid from 'react-uuid';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Button from '../components/common/Button';

import SearchComponent from '../components/SearchInput';
import { stackList } from '../data/stacks';
import { stackState } from '../states/stack';
import useUser from '../hooks/useUser';

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
  display: grid;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 801px) and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 901px) and (max-width: 1273px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1274px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const MainSelect = styled.div`
  background-color: ${(props) => props.theme.color.qaAnswerBg};
  border-radius: 20px;
`;

const SelectBox = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 20px;
  min-height: 200px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 801px) and (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 901px) and (max-width: 1273px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1274px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

const MainBottom = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 40px;
  margin: 5px;
  background-color: ${(props) => props.theme.color.btnBg};
  font-size: ${(props) => props.theme.font.lg};
  font-weight: bold;
  cursor: pointer;
`;

const Main = () => {
  const [stack, setStack] = useRecoilState(stackState);
  const { user } = useUser();
  const navigate = useNavigate();

  const selectStack = (event: React.MouseEvent<HTMLDivElement>) => {
    const newStack = event.currentTarget.textContent;

    if (newStack && !stack.includes(newStack)) {
      setStack((oldStacks) => [...oldStacks, newStack]);
    }
  };

  const deleteStack = (event: React.MouseEvent<HTMLDivElement>) => {
    const targetStack = event.currentTarget.textContent;
    setStack(stack.filter((el) => el !== targetStack));
  };

  const moveToSearch = () => {
    navigate(`/interview?stacks=${stack.join(',')}`);
  };

  const moveToLogin = () => {
    return window.location.assign(`${process.env.REACT_APP_SERVER_URL}/auth/github`);
  };

  return (
    <MainContainer>
      <MainLogo>
        <h2>INDeGo</h2>
      </MainLogo>
      <SearchComponent />
      <MainText>추천 스택</MainText>
      <MainRecommend>
        {stackList.map((el) => (
          <Stack key={uuid()} onClick={selectStack}>
            {el}
          </Stack>
        ))}
      </MainRecommend>
      <MainText>현재 선택한 스택</MainText>
      <MainSelect>
        <SelectBox>
          {stack.map((el) => (
            <Stack key={uuid()} onClick={deleteStack}>
              {el}
            </Stack>
          ))}
        </SelectBox>
      </MainSelect>
      <MainBottom>
        {user ? (
          <Button
            width={'120px'}
            height={'60px'}
            fontSize={'18px'}
            onClick={moveToSearch}
            value="검색"
          />
        ) : (
          <Button
            width={'120px'}
            height={'60px'}
            fontSize={'18px'}
            onClick={moveToLogin}
            btnType="LOGIN"
            value="LOGIN"
          />
        )}
      </MainBottom>
    </MainContainer>
  );
};

export default Main;
