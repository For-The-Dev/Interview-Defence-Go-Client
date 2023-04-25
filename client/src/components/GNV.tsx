import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserInfomationDropBox } from './UserInfomationDropBox';

const GNVSection = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #393e4a;
`;

const GNVBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
    width: 50%;
    min-width: 320px;
  }
`;

const GNVLeft = styled.div`
  flex: 1;
`;

const GNVMid = styled.div`
  display: flex;
  justify-content: center;
  flex: 3;
`;

const GNVRight = styled.div`
  display: flex;
  justify-content: right;
  flex: 1;
`;

export const GNV = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  };

  return (
    <GNVSection>
      <GNVBox>
        <GNVLeft onClick={moveToMain}>INDeGo</GNVLeft>
        <GNVMid></GNVMid>
        <GNVRight>
          <UserInfomationDropBox />
        </GNVRight>
      </GNVBox>
    </GNVSection>
  );
};
