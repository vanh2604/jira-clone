import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTE } from '../../constant/routing';
import { UserLoginSignUp } from '../../template/UserLoginSignUp';
import Login from '../Login/Login';
import SignUp from '../SignUp/Signup';

const Unauthenticated = () => {
  return (
    <Switch>
      <UserLoginSignUp exact path={ROUTE.LOGIN} Component={Login} />
      <UserLoginSignUp exact path={ROUTE.SIGN_UP} Component={SignUp} />
      <Route path="*">
        <Redirect to={ROUTE.LOGIN} />
      </Route>
    </Switch>
  );
};

export default Unauthenticated;
