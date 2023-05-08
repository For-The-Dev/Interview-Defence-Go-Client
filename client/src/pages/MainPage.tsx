import { useRecoilState } from 'recoil';
import uuid from 'react-uuid';

import useUser from '../hooks/useUser';

import { modalState, stackState } from '../states/mainPage';

import { stackList } from '../data/stacks';

import Button from '../components/common/Button';
import SearchComponent from '../components/mainPage/SearchInput';
import Stack from '../components/mainPage/Stack';
import ConfirmModal from '../components/mainPage/ConfirmModal';

import * as S from '../styles/MainPage.style';

const MainPage = () => {
  const [stack, setStack] = useRecoilState(stackState);
  const [modal, setModal] = useRecoilState(modalState);
  const { user } = useUser();

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

  const moveToConfirm = () => {
    if (stack.length > 0) {
      setModal(true);
    } else {
      alert('스택을 선택하세요 !!');
    }
  };

  const moveToLogin = () => {
    return window.location.assign(`${process.env.REACT_APP_SERVER_URL}/api/auth/github`);
  };

  return (
    <S.MainContainer>
      <S.MainLogo>
        <h2>INDeGo</h2>
      </S.MainLogo>
      <SearchComponent />
      <S.MainText>추천 스택</S.MainText>
      <S.MainRecommend>
        {stackList.map((el) => (
          <Stack key={uuid()} onClick={selectStack} value={el} />
        ))}
      </S.MainRecommend>
      <S.MainText>현재 선택한 스택</S.MainText>
      <S.MainSelect>
        <S.SelectBox>
          {stack.map((el) => (
            <Stack key={uuid()} onClick={deleteStack} value={el} />
          ))}
        </S.SelectBox>
      </S.MainSelect>
      <S.MainBottom>
        {user ? (
          <Button
            width={'120px'}
            height={'60px'}
            fontSize={'18px'}
            onClick={moveToConfirm}
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
      </S.MainBottom>
      {modal && <ConfirmModal />}
    </S.MainContainer>
  );
};

export default MainPage;
