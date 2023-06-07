import SearchComponent from '../components/mainPage/SearchInput';
import * as S from '../styles/MainPage.style';
import MainLogo from '../components/mainPage/MainLogo';
import SuggestionStackWrapper from '../components/mainPage/SuggestionStackWrapper';
import StackSubmitWrapper from '../components/mainPage/StackSubmitWrapper';
import ConfirmModal from '../components/mainPage/ConfirmModal';
import SelectedStackWrapper from '../components/mainPage/SelectedStackWrapper';
import { SearchButton, SearchImg } from '../components/mainPage/SearchInput.style';
import searchIcon from '../asset/images/loupe.png';
const MainPage = () => {
  return (
    <S.MainContainer>
      <S.MainLogo>
        <MainLogo />
      </S.MainLogo>
      <SearchComponent>
        <SearchButton>
          <SearchImg src={searchIcon} />
        </SearchButton>
      </SearchComponent>
      <S.MainText>추천 스택</S.MainText>
      <SuggestionStackWrapper />
      <S.MainText>현재 선택한 스택</S.MainText>
      <SelectedStackWrapper />
      <StackSubmitWrapper />
      <ConfirmModal />
    </S.MainContainer>
  );
};

export default MainPage;
