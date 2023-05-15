import { ReactComponent as MainLogoDark } from '../../asset/images/Main_dark.svg';
import { ReactComponent as MainLogoLight } from '../../asset/images/Main_light.svg';
import useCurrentTheme from '../../hooks/useCurrentTheme';

const MainLogo = () => {
  const currentState = useCurrentTheme();

  const SVGOPTIONS = {
    width: '100px',
    height: '100px',
  };
  return currentState ? <MainLogoDark {...SVGOPTIONS} /> : <MainLogoLight {...SVGOPTIONS} />;
};

export default MainLogo;
