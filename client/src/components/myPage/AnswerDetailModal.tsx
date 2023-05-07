import React, { useEffect, useState, useRef } from 'react';
import * as S from './AnswerDetailModal.style';
import AnswerBox from './modalComponent/AnswerBox';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import useGetDetailAnswer from '../../hooks/useGetDetailAnswer';
import Loading from '../common/Loading';

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

const AnswerDetailModal = ({ questionId, changeModalState }: AnswerDetailModalProps) => {
  const { data: detail } = useGetDetailAnswer(questionId);
  const modalRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const moveToQuestionId = () => {
    navigate(`/interview/${questionId}`);
  };

  const handler = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as HTMLElement)) {
      changeModalState();
    }
  };

  useEffect(() => {
    // 데이터 통신 id를 이용한 요청
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <S.ModalContainer>
      <S.ContentWrapper ref={modalRef}>
        {detail ? (
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
        ) : (
          <Loading height="80%" />
        )}
        <S.ButtonWrapper>
          <Button value={'reply'} onClick={moveToQuestionId} />
        </S.ButtonWrapper>
      </S.ContentWrapper>
    </S.ModalContainer>
  );
};

export default AnswerDetailModal;
