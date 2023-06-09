import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';

import { modalState, stackState } from '../../states/mainPage';

import Button from '../common/Button';

import * as S from './ConfirmModal.style';

const ConfirmModal = () => {
  const stacks = useRecoilValue(stackState);
  const [modal, setModalState] = useRecoilState(modalState);
  const navigate = useNavigate();

  const moveToInterview = () => {
    setModalState(false);
    navigate(`/interview?stacks=${stacks.join(',')}`);
  };

  return modal ? (
    <S.ModalSection>
      <S.Modal>
        <div>현재 선택한 스택은</div>
        <br />
        <div>{`[ ${stacks.join(', ')} ] 입니다.`}</div>
        <br />
        <div> 면접을 진행할까요?</div>
        <br />
        <div
          style={{
            display: 'flex',
            alignItems: 'space-evenly',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <Button value="Yes" onClick={moveToInterview} />
          <Button btnType="SUB" value="No" onClick={() => setModalState(false)} />
        </div>
      </S.Modal>
    </S.ModalSection>
  ) : null;
};

export default ConfirmModal;
