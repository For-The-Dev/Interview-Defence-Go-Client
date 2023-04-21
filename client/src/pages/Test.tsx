import { useRecoilState } from 'recoil';
import { modeState } from '../states';
import styled, { css } from 'styled-components';
import { useEffect } from 'react';

const Test = () => {
  const [mode, setMode] = useRecoilState(modeState);
  const modeChange = () => {
    setMode((mode) => (mode === 'dark' ? 'light' : 'dark'));
  };
  return (
    <PageContainer>
      <Btn onClick={modeChange}>열기</Btn>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  ${({ theme }) => {
    return css`
      background-color: ${theme.color.primaryBg};
    `;
  }}
`;

const Btn = styled.div`
  width: 100px;
  height: 100px;
`;

export default Test;
