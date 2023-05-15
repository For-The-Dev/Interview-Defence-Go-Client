import { ReactComponent as NavDark } from '../../asset/images/Nav_dark.svg';
import { ReactComponent as NavLight } from '../../asset/images/Nav_light.svg';
import useCurrentTheme from '../../hooks/useCurrentTheme';

const NavLogo = () => {
  const currentMode = useCurrentTheme();
  const SVGOPTIONS = { height: '90%', width: '100%' };

  return currentMode ? <NavDark {...SVGOPTIONS} /> : <NavLight {...SVGOPTIONS} />;
};
export default NavLogo;
