import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Preloader from './Preloader';
import routes from '../routes';
import NoMatch from './NoMatch';

export default (props) => (
  <div>
    <Preloader />
    <Switch>
      {routes.map(({ path, exact, component: C, ...rest }) => (
        <Route 
          key={path}
          path={path}
          exact={exact}
          render={(props) => (
            <C {...props} {...rest} />
          )}
        />
      ))}
      <Route render={(props) => <NoMatch {...props} />} />
    </Switch>
  </div>
)
