import React from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/pages/Home';
import Dashboard from './components/dashboard/Index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
  return(
    <BrowserRouter>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
  )
}