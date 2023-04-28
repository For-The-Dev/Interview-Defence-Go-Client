import styled from 'styled-components';
import Profile from '../components/myPage/Profile';
import AnswersPreview from '../components/myPage/AnswersPreview';
import { useState } from 'react';
import AnswerDetailModal from '../components/myPage/AnswerDetailModal';

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MyPage = () => {
  const [questionId, setQuestionIdId] = useState(0);
  const [modalState, setModalState] = useState(false);

  const changeModalState = (id?: number) => {
    // id가 전달되면 모달을 세팅, 전달되지 않으면 모달을 close
    if (id) {
      setModalState(true);
      setQuestionIdId(id);
    } else {
      setModalState(false);
      setQuestionIdId(0);
    }
  };
  return (
    <PageContainer>
      <Profile
        avatar_url={'https://avatars.githubusercontent.com/u/104412610?v=4'}
        nickName={'billy5982'}
        todayQACnt={10}
        alldayQACnt={20}
      />
      <AnswersPreview changeModalState={changeModalState} />

      {modalState && (
        <AnswerDetailModal questionId={questionId} changeModalState={changeModalState} />
      )}
    </PageContainer>
  );
};
export default MyPage;
