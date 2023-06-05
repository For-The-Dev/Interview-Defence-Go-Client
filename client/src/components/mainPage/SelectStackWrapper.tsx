import uuid from 'react-uuid';
import useStackState from '../../hooks/useStackState';
import * as S from '../../styles/MainPage.style';
import Stack from './Stack';
const SelectStackWrapper = () => {
  const [stack, setStack] = useStackState();

  const deleteStack = (event: React.MouseEvent<HTMLDivElement>) => {
    const targetStack = event.currentTarget.textContent;
    setStack((stack: string[]) => stack.filter((el) => el !== targetStack));
  };

  return (
    <S.MainSelect>
      <S.SelectBox>
        {stack.map((el) => (
          <Stack key={uuid()} onClick={deleteStack} value={el} />
        ))}
      </S.SelectBox>
    </S.MainSelect>
  );
};

export default SelectStackWrapper;
