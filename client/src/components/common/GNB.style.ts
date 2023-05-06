import styled from 'styled-components';

export const GNBSection = styled.nav`
  position: fixed;
  width: 100%;
  min-height: 50px;
  background-color: #393e4a;
  z-index: 99;

  > .noLogin {
    position: fixed;
    top: 5px;
    right: 55px;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const GNBLogo = styled.div`
  position: fixed;
  top: 7px;
  left: 55px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    left: 55px;
  }
`;
