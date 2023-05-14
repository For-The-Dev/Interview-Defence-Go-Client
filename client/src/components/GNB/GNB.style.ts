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
    right: 15px;
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 50px;
    cursor: pointer;
  }
`;

export const GNBLogo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 20px;
  height: 100%;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    left: 10px;
  }
`;
