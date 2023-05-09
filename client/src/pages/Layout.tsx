import { ReactNode } from 'react';
import styled from 'styled-components';
import { GNB } from '../components/GNB/GNB';

interface LayoutProps {
  router: ReactNode;
}

const Layout = ({ router }: LayoutProps) => {
  return (
    <MainContainer>
      <GNB />
      <PageContainer>{router}</PageContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 20px 20px;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 100%;
    min-width: 350px;
    min-height: 98px;
  }
`;

export default Layout;
