import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';
import GlobalStyles from './styles/reset';
import { lightTheme, defalutTheme } from './styles/theme';
import { modeState } from './states';
import Layout from './pages/Layout';
import Routes from './routes';
import useUser from './hooks/useUser';

function App() {
  const currentMode = useRecoilValue(modeState);
  const { user } = useUser();
  console.log(user);
  return (
    <ThemeProvider theme={currentMode ? defalutTheme : lightTheme}>
      <BrowserRouter>
        <GlobalStyles />
        <Layout router={<Routes />} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
