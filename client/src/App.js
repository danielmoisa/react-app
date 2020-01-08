import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from './Routes';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#2F46A7' },
      secondary: { main: '#0c9463' },
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
