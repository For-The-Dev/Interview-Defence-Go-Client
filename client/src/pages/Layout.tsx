import { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  router: ReactNode;
}

const Layout = ({ router }: LayoutProps) => {
  return (
    <MainContainer>
      <PageContainer>{router}</PageContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: scroll;
  gap: 2rem;
`;

const PageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 100%;
    min-width: 350px;
    min-height: 98px;
    padding: 0 0.5rem;
  }
`;

export default Layout;
