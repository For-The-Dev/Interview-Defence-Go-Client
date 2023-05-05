import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserInfomationDropBox } from './UserInfomationDropBox';
import useUser from '../hooks/useUser';
import userIcon from '../asset/images/userIcon.png';

const GNVSection = styled.nav`
  position: fixed;
  width: 100%;
  min-height: 50px;
  background-color: #393e4a;
  z-index: 99;

  > .noLogin {
    position: fixed;
    top: 5px;
    right: 55px;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
  }
`;

const GNVLogo = styled.div`
  position: fixed;
  top: 7px;
  left: 55px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    left: 55px;
  }
`;

export const GNV = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const moveToLogin = () => {
    return window.location.assign(`${process.env.REACT_APP_SERVER_URL}/auth/github`);
  };

  return (
    <GNVSection>
      <GNVLogo onClick={() => navigate('/')}>INDeGo</GNVLogo>
      {user ? (
        <UserInfomationDropBox user={user} />
      ) : (
        <img className="noLogin" src={userIcon} onClick={moveToLogin} />
      )}
    </GNVSection>
  );
};
