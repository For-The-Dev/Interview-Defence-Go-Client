import { useRecoilValue, useSetRecoilState } from 'recoil';

import useUser from '../../hooks/useUser';
import { checkSelectStack, modalState } from '../../states/mainPage';
import Button from '../common/Button';
import * as S from '../../styles/MainPage.style';

const StackSubmitWrapper = () => {
  const stackSelect = useRecoilValue(checkSelectStack);
  const { user } = useUser();
  const setModal = useSetRecoilState(modalState);
  const moveToConfirm = () => {
    if (stackSelect) {
      setModal(true);
    } else {
      alert('스택을 선택하세요 !!');
    }
  };
  const moveToLogin = () => {
    return window.location.assign(`${process.env.REACT_APP_SERVER_URL}/auth/github`);
  };
  return (
    <>
      <S.MainBottom>
        <Button
          width={'120px'}
          height={'60px'}
          fontSize={'18px'}
          onClick={user ? moveToConfirm : moveToLogin}
          btnType={user ? 'MAIN' : 'LOGIN'}
          value={user ? '검색' : 'LOGIN'}
        />
      </S.MainBottom>
    </>
  );
};
export default StackSubmitWrapper;
