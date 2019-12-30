import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#0c9463' },
      secondary: { main: '#4d80e4' },
    }
  });
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
        </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
