import React, { Component } from 'react';
import { Router, Route, Redirect } from 'react-router';

import App from './Components/App';
import Manage from './Components/Manage';
import Front from './Components/Front';
import Register from './Components/Register';
import NotFound from './Components/NotFound';
import Login from './Components/Login';

/*const CheckAuth = () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem('refreshToken');

  if (!token || !refreshToken) {
    return false;
  }

  return true;
}

const AuthRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props = (
    CheckAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{ pathname: '/login' }}/>
    )
  )} />
)*/

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/manage" component={Manage}/>
    <Route path="/front" component={Front} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;