import userIcon from '../asset/images/userIcon.png';
import logoutIcon from '../asset/images/logoutIcon.png';
import themeIcon from '../asset/images/themeIcon.png';

import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modeState } from '../states';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DropBox = styled.section`
  position: fixed;
  top: 5px;
  right: 55px;
  z-index: 99;

  @media screen and (max-width: 480px) {
    right: 20px;
  }
`;

const Profile = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid white;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Menu = styled.div<{ visible: boolean }>`
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

const MenuTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
  font-weight: 18px;
  color: black;
  line-height: 1.2em;
`;

const MenuTitleSub = styled.span`
  font-size: 14px;
  color: #cecece;
  font-weight: 400;
`;

const MenuListUl = styled.ul`
  list-style: none;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  direction: flex;
  align-items: center;
  justify-content: center;
`;

const MenuListImg = styled.img`
  max-width: 20px;
  margin-right: 10px;
  opacity: 0.5;
  transition: 0.5s;
`;

const MenuListText = styled.div`
  display: inline-block;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  transition: 0.5s;
`;

const MenuListLi = styled.li`
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

export const UserInfomationDropBox = () => {
  const [dropboxOn, setdropboxOn] = useState(false);
  const [mode, setMode] = useRecoilState(modeState);
  const navigate = useNavigate();

  const modeHandler = () => {
    setMode(!mode);
  };

  const logout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_SERVER_URL}/logout`, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DropBox>
      <Profile>
        <Image src={userIcon} onClick={() => setdropboxOn(!dropboxOn)} />
      </Profile>
      <Menu visible={dropboxOn}>
        <MenuTitle>
          OnemoreBottlee
          <br />
          <MenuTitleSub>Frontend Developer</MenuTitleSub>
        </MenuTitle>
        <MenuListUl>
          <MenuListLi>
            <MenuListImg src={userIcon} />
            <MenuListText>My Page</MenuListText>
          </MenuListLi>
          <MenuListLi>
            <MenuListImg src={themeIcon} />
            <MenuListText onClick={modeHandler}>Mode</MenuListText>
          </MenuListLi>
          <MenuListLi onClick={logout}>
            <MenuListImg src={logoutIcon} />
            <MenuListText>Logout</MenuListText>
          </MenuListLi>
        </MenuListUl>
      </Menu>
    </DropBox>
  );
};
