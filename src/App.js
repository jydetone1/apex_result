import React, { useEffect } from 'react';
import Home from './pages/home/Home';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

const App = () => {
  const appHeight = () => {
    document.documentElement.style.setProperty(
      '--app-height',
      `${window.innerHeight}px`
    );
  };

  useEffect(() => {
    appHeight();
    window.addEventListener('resize', appHeight);
    return () => {
      window.removeEventListener('resize', appHeight);
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
