import * as S from './Loading.style';
import Spinner from '../../asset/images/Spinner-1s-200px.gif';
const Loading = () => {
  return (
    <S.Background>
      <S.LoadingText>잠시만 기다려주세요</S.LoadingText>
      <img src={Spinner} alt="loading" />
    </S.Background>
  );
};

export default Loading;
