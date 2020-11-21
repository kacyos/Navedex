import React from 'react';
import { Route, Redirect } from 'react-router';

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !!localStorage.getItem('token') ? (
        <Redirect to={{ pathname: '/navers/index', state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);
