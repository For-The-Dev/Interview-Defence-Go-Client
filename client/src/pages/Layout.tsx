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
`;

export default Layout;
