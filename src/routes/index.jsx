import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Account from '../pages/Account';
import Statement from '../pages/Statement';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/account" component={Account} />
      <PrivateRoute exact path="/statement" component={Statement} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
