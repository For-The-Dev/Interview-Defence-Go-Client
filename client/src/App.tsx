import React from 'react';

function App() {
  const currentMode = useRecoilValue(modeState);

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
