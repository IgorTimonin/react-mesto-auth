import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const comp = props.children
  return (
    <Route>
      {() =>
        props.loggedIn ? comp : <Redirect to='./sign-up' />
      }
    </Route>
  );
};

export default ProtectedRoute;
