import styled from 'styled-components';
import Profile from '../components/myPage/Profile';
import useUser from '../hooks/useUser';
import AnswersListContainer from '../components/myPage/AnswersListContainer';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MyPage = () => {
  const { user } = useUser();

  return (
    <PageContainer>
      {user && (
        <Profile
          avatar_url={user.avatar_url}
          nickName={user.nickName}
          todayQACnt={user.todayAnswerCount}
          alldayQACnt={user.allAnswerCount}
        />
      )}

      <AnswersListContainer />
    </PageContainer>
  );
};
export default MyPage;
