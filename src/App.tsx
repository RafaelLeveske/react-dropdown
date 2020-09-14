import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './hooks/state';

import Header from './components/Header';
import SubHeader from './components/SubHeader';

import Profile from './pages/Profile';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <SubHeader />
      <Profile />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
