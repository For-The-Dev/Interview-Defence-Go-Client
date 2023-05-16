import styled from 'styled-components';
import Profile from '../components/myPage/Profile';
import AnswersPreview from '../components/myPage/AnswersPreview';
import { useState } from 'react';
import AnswerDetailModal from '../components/myPage/AnswerDetailModal';
import useUser from '../hooks/useUser';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MyPage = () => {
  const [questionId, setQuestionId] = useState(0);
  const [modalState, setModalState] = useState(false);

  const { user } = useUser();

  const changeModalState = (id?: number) => {
    // id가 전달되면 모달을 세팅, 전달되지 않으면 모달을 close
    if (id) {
      setModalState(true);
      setQuestionId(id);
    } else {
      setModalState(false);
      setQuestionId(0);
    }
  };

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

      <AnswersPreview changeModalState={changeModalState} />

      {modalState && (
        <AnswerDetailModal questionId={questionId} changeModalState={changeModalState} />
      )}
    </PageContainer>
  );
};
export default MyPage;
