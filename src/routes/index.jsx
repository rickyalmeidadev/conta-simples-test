import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <h1>Login page</h1>} />
      <Route exact path="/account" render={() => <h1>Account page</h1>} />
      <Route exact path="/statement" render={() => <h1>Statement page</h1>} />
    </Switch>
  </Router>
);

export default Routes;
