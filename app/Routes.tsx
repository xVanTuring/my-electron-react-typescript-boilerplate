import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as routes from './constants/routes.json';
import App from './containers/App';
import CounterPage from './containers/CounterPage';
import HomePage from './containers/HomePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
