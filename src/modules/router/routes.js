import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Login, Signup, ForgotPassword, Verification, RedirectTo, Dashboard, ResetPassword, NotFound } from 'modules';
import PrivateRoute from './index';

export default function Routes() {
  return (
    <HashRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/login">
            <Login redirectTo='/dashboard' signupPath='/signup' forgotpasswordPath='/forgot-password' />
          </Route>
          <Route exact path="/signup">
            <Signup redirectTo='/dashboard' signinPath='/login' />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPassword redirectTo='/verification' signinPath='/login' />
          </Route>
          <Route exact path="/verification">
            <Verification redirectTo='/reset-password' signinPath='/login' />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword redirectTo='/login' signinPath='/login' />
          </Route>
          <PrivateRoute exact path='/dashboard'>
              <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <RedirectTo />
    </HashRouter>
  );
}