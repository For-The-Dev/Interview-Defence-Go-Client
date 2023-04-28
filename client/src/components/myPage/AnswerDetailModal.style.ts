import styled, { css, keyframes } from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.popupBg};
  overflow: auto;
`;

const modalShow = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
`;

const ContentWrapper = styled.section`
  position: relative;
  min-width: 280px;
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: auto;
  background-color: ${({ theme }) => theme.color.contentBg};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  gap: 10px;
  animation: ${modalShow} 0.5s;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  width: 100%;
  font-size: ${({ theme }) => theme.font.xl};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  word-break: break-all;
  > span {
    margin-left: 10px;
    font-size: ${({ theme }) => theme.font.xxl};
    cursor: pointer;
    align-self: flex-start;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 50px;
  bottom: 40px;
`;
export { ModalContainer, ContentWrapper, Title, ButtonWrapper };
