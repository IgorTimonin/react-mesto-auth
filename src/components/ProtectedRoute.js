import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const appComp = props.children
  return (
    <Route>
      {() => (props.loggedIn ? appComp : <Redirect to='/sign-up' />)}
    </Route>
  );
};

export default ProtectedRoute;
