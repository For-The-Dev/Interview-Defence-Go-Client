import { useRecoilValue } from 'recoil';
import * as S from '../../styles/MainPage.style';
import { stackState } from '../../states/mainPage';
import StackAtom from './StackAtom';
const SelectedStackWrapper = () => {
  const stack = useRecoilValue(stackState);

  return (
    <>
      <S.MainSelect>
        <S.SelectBox>
          {stack.map((el) => (
            <StackAtom key={el} value={el} />
          ))}
        </S.SelectBox>
      </S.MainSelect>
    </>
  );
};

export default SelectedStackWrapper;
