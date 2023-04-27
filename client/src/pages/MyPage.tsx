import styled from 'styled-components';
import Profile from '../components/myPage/Profile';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MyPage = () => {
  return (
    <PageContainer>
      <Profile
        avatar_url={'https://avatars.githubusercontent.com/u/104412610?v=4'}
        nickName={'billy5982'}
        todayQACnt={10}
        alldayQACnt={20}
      />
    </PageContainer>
  );
};
export default MyPage;
