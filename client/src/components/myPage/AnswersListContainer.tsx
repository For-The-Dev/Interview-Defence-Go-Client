import { useCallback, useState } from 'react';
import AnswerDetailModal from './AnswerDetailModal';
import AnswersPreview from './AnswersPreview';

const AnswersListContainer = () => {
  const [questionId, setQuestionId] = useState(0);
  const [modalState, setModalState] = useState(false);

  const changeModalState = useCallback((id?: number) => {
    // id가 전달되면 모달을 세팅, 전달되지 않으면 모달을 close
    if (id) {
      setModalState(true);
      setQuestionId(id);
    } else {
      setModalState(false);
      setQuestionId(0);
    }
  }, []);
  return (
    <>
      <AnswersPreview changeModalState={changeModalState} />
      {modalState && (
        <AnswerDetailModal questionId={questionId} changeModalState={changeModalState} />
      )}
    </>
  );
};
export default AnswersListContainer;
