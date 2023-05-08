import styled from 'styled-components';

export const ModalSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
  background-color: white;
  border-radius: 20px;
  color: black;
  box-shadow: 5px 7px 5px #b6b6b6;

  @media screen and (max-width: 500px) {
    min-width: 250px;
  }

  @media screen and (min-width: 501px) and (max-width: 800px) {
    min-width: 300px;
  }

  @media screen and (min-width: 801px) {
    min-width: 500px;
  }
`;
