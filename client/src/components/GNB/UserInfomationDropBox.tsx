import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Api from '../../apis';

import { modeState } from '../../states';

import * as S from './UserInfomationDropBox.style';
import userIcon from '../../asset/images/user.png';
import logoutIcon from '../../asset/images/logoutIcon.png';
import themeIcon from '../../asset/images/themeIcon.png';

interface UserProps {
  nickName: string;
  avatar_url: string;
}

export const UserInfomationDropBox = ({ user }: { user: UserProps }) => {
  const [dropboxOn, setdropboxOn] = useState(false);
  const [mode, setMode] = useRecoilState(modeState);
  const navigate = useNavigate();

  const modeHandler = () => {
    setMode(!mode);
  };

  const logout = async () => {
    try {
      await Api.get(`/logout`);
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <S.DropBox>
      <S.Profile>
        <S.Image src={user.avatar_url} onClick={() => setdropboxOn(!dropboxOn)} />
      </S.Profile>
      <S.Menu visible={dropboxOn}>
        <S.MenuTitle>
          {user.nickName}
          <br />
          <S.MenuTitleSub>Frontend Developer</S.MenuTitleSub>
        </S.MenuTitle>
        <S.MenuListUl>
          <S.MenuListLi>
            <S.MenuListImg src={userIcon} />
            <S.MenuListText
              onClick={() => {
                navigate('/myPage');
              }}
            >
              My Page
            </S.MenuListText>
          </S.MenuListLi>
          <S.MenuListLi>
            <S.MenuListImg src={themeIcon} />
            <S.MenuListText onClick={modeHandler}>Mode</S.MenuListText>
          </S.MenuListLi>
          <S.MenuListLi onClick={logout}>
            <S.MenuListImg src={logoutIcon} />
            <S.MenuListText>Logout</S.MenuListText>
          </S.MenuListLi>
        </S.MenuListUl>
      </S.Menu>
    </S.DropBox>
  );
};
