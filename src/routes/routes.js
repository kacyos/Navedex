import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/Login';

import Home from '../pages/Home';
import EditNaver from '../pages/EditNaver';
import CreateNaver  from '../pages/CreateNaver'

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/" component={Login} />
        <PrivateRoute path="/navers/index" component={Home} />
        <PrivateRoute path="/navers/update/:id" component={EditNaver} />
        <PrivateRoute path="/navers/create" component={CreateNaver} />
        <Redirect path="*" to="/navers/index"/>
      </Switch>
    </BrowserRouter>
  );
}
