import { useNavigate } from 'react-router-dom';

import useUser from '../../hooks/useUser';

import { UserInfomationDropBox } from './UserInfomationDropBox';

import * as S from './GNB.style';
import userIcon from '../../asset/images/userIcon.png';

export const GNB = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const moveToLogin = () => {
    return window.location.assign(`${process.env.REACT_APP_SERVER_URL}/auth/github`);
  };

  return (
    <S.GNBSection>
      <S.GNBLogo onClick={() => navigate('/')}>INDeGo</S.GNBLogo>
      {user ? (
        <UserInfomationDropBox user={user} />
      ) : (
        <img className="noLogin" src={userIcon} onClick={moveToLogin} />
      )}
    </S.GNBSection>
  );
};
