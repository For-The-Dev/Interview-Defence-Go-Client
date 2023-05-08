import styled from 'styled-components';

export const DropBox = styled.section`
  position: fixed;
  top: 5px;
  right: 55px;
  z-index: 99;

  @media screen and (max-width: 480px) {
    right: 20px;
  }
`;

export const Profile = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid white;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Menu = styled.div<{ visible: boolean }>`
  position: absolute;
  top: ${(props) => (props.visible ? '70px' : '100px')};
  right: -15px;
  padding: 5px 20px;
  background: #fff;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: 0.5s;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};

  ::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 28px;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
  }
`;

export const MenuTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
  font-weight: 18px;
  color: black;
  line-height: 1.2em;
`;

export const MenuTitleSub = styled.span`
  font-size: 14px;
  color: #cecece;
  font-weight: 400;
`;

export const MenuListUl = styled.ul`
  list-style: none;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  direction: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuListImg = styled.img`
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 0.5s;
`;

export const MenuListText = styled.div`
  display: inline-block;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: 0.5s;
`;

export const MenuListLi = styled.li`
  list-style: none;
  padding: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  direction: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover ${MenuListImg} {
    opacity: 1;
  }

  &:hover ${MenuListText} {
    color: #ff5d94;
  }
`;
