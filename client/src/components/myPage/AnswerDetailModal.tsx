import React, { useEffect, useState, useRef } from 'react';
import * as S from './AnswerDetailModal.style';
import AnswerBox from './modalComponent/AnswerBox';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';

interface AnswerDetailModalProps {
  questionId: number;
  changeModalState: (id?: number) => void;
}

interface QuestionType {
  text: string;
  id: number;
  nickName: string;
  createdAt: string;
}

interface QaType extends QuestionType {
  Answers: QuestionType[];
}

const dummy = {
  text: '리액트에 useState에 대해 설명해주세요',
  id: 82,
  nickName: 'billy5982',
  createdAt: '2023-04-23T08:37:38.790Z',
  Answers: [
    {
      text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.근데 잘 모르겠어요3',
      id: 72,
      createdAt: '2023-04-23T08:37:38.809Z',
      nickName: 'billy5982',
    },
    {
      text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.',
      id: 75,
      createdAt: '2023-04-23T08:39:41.220Z',
      nickName: 'billy5982',
    },
    {
      text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.',
      id: 76,
      createdAt: '2023-04-23T08:39:41.220Z',
      nickName: 'billy5982',
    },
    {
      text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.',
      id: 76,
      createdAt: '2023-04-23T08:39:41.220Z',
      nickName: 'billy5982',
    },
    {
      text: '리액트에 Side-Effect을 방지하기 위해 사용됩니다.',
      id: 76,
      createdAt: '2023-04-23T08:39:41.220Z',
      nickName: 'billy5982',
    },
  ],
};
const AnswerDetailModal = ({ questionId, changeModalState }: AnswerDetailModalProps) => {
  const [detail, setDetail] = useState<QaType | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const moveToQuestionId = () => {
    navigate(`/question/${questionId}`);
  };
  const handler = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as HTMLElement)) {
      changeModalState();
    }
  };

  useEffect(() => {
    // 데이터 통신 id를 이용한 요청
    document.addEventListener('mousedown', handler);
    setDetail(dummy);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <S.ModalContainer>
      <S.ContentWrapper ref={modalRef}>
        {detail && (
          <>
            <S.Title>
              {detail.text}
              <span onClick={() => changeModalState()}>×</span>
            </S.Title>
            <>
              {detail.Answers.map((answer, idx) => (
                <AnswerBox key={idx} answer={answer} />
              ))}
            </>
          </>
        )}
        <S.ButtonWrapper>
          <Button value={'reply'} onClick={moveToQuestionId} />
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </S.ModalContainer>
  );
};

export default AnswerDetailModal;
