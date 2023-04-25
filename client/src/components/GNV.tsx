import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserInfomationDropBox } from './UserInfomationDropBox';

const GNVSection = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #393e4a;
`;

const GNVLogo = styled.div`
  position: fixed;
  top: 5px;
  left: 55px;
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    left: 20px;
  }
`;

export const GNV = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  };

  return (
    <GNVSection>
      <GNVLogo onClick={moveToMain}>INDeGo</GNVLogo>
      <UserInfomationDropBox />
    </GNVSection>
  );
};
