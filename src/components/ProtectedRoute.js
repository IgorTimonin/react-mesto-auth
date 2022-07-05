import React from 'react';
import { Navigate } from 'react-router-dom';

// const ProtectedRoute = (props) => {
//   const nav = useNavigate()
//   const appComp = props.children
//   return (
//     <Route>
//       {() => (props.loggedIn ? appComp : nav('/sign-in'))}
//     </Route>
//   );
// };

const ProtectedRoute = (props) => {
  // const nav = useNavigate();
  const appComp = props.children;
  return props.loggedIn ? appComp : <Navigate to='/sign-in' />;
};

export default ProtectedRoute;
