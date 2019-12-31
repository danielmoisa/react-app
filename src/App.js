import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/pages/Home';
import Dashboard from './components/dashboard/Index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#2F46A7' },
      secondary: { main: '#FFA85D' },
    }
  });
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/sign-in" component={SignIn} />
        
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/dashboard" component={Dashboard} />
    
        </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
