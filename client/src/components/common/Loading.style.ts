import styled from 'styled-components';

export const Background = styled.div<{ height?: string }>`
  margin-top: 30px;
  width: 100%;
  height: ${({ height }) => height && height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 50px;
    height: 50px;
  }
`;

export const LoadingText = styled.div`
  text-align: center;
`;
