import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserInfomationDropBox } from './UserInfomationDropBox';
import useUser from '../hooks/useUser';

const GNVSection = styled.nav`
  width: 100%;
  min-height: 50px;
  background-color: #393e4a;

  > .noLogin {
    position: fixed;
    top: 5px;
    right: 55px;
    z-index: 99;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50px;
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
    left: 20px;
  }
`;

export const GNV = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <GNVSection>
      <GNVLogo onClick={() => navigate('/')}>INDeGo</GNVLogo>
      <UserInfomationDropBox />
      <div className="noLogin" />
    </GNVSection>
  );
};
