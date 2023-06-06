import { stackList } from '../../data/stacks';
import * as S from '../../styles/MainPage.style';
import StackAtom from './StackAtom';

const SuggestionStackWrapper = () => {
  return (
    <S.MainRecommend>
      {stackList.map((el) => (
        <StackAtom value={el} key={el} />
      ))}
    </S.MainRecommend>
  );
};

export default SuggestionStackWrapper;
