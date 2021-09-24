import SignIn from 'components/Auth/SignIn/SignIn';
import React from 'react';
import { Route } from 'react-router';
import "./ProtectedRoute.scss"

function PrivateRoute({ authIsEmpty, children: Component, ...rest }) {

  if (authIsEmpty === undefined) {
    authIsEmpty = true;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        !authIsEmpty ? (
          Component
        ) : (
          <SignIn {...props} />
        )
      }
    />
  );
}
export default PrivateRoute;