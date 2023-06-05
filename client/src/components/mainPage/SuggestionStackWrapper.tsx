import uuid from 'react-uuid';
import { stackList } from '../../data/stacks';
import * as S from '../../styles/MainPage.style';
import Stack from './Stack';

import useStackState from '../../hooks/useStackState';

const SuggestionStackWrapper = () => {
  const [stack, setStack] = useStackState();

  const selectStack = (event: React.MouseEvent<HTMLDivElement>) => {
    const newStack = event.currentTarget.textContent;

    if (newStack && !stack.includes(newStack)) {
      setStack((oldStacks) => [...oldStacks, newStack]);
    }
  };

  return (
    <S.MainRecommend>
      {stackList.map((el) => (
        <Stack key={uuid()} onClick={selectStack} value={el} />
      ))}
    </S.MainRecommend>
  );
};

export default SuggestionStackWrapper;
