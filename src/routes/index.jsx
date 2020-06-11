import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import Account from '../pages/Account';
import Statement from '../pages/Statement';
import CreditCards from '../pages/CreditCards';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/account" component={Account} />
      <PrivateRoute exact path="/statement" component={Statement} />
      <PrivateRoute exact path="/credit-cards" component={CreditCards} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
