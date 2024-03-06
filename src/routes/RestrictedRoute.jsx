import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// import { getIsLoggedIn } from 'store/auth/auth-selectors';
// import { selectIsLoggedIn } from '../store/auth/authSelectors';

const RestrictedRoute = ({ children, redirectTo }) => {
  // const isLoggedIn = selectIsLoggedIn();
  const isLoggedIn = false; // uncomment other and remove this

  return <>{isLoggedIn ? <Navigate to={redirectTo} replace /> : children}</>;
};

export default RestrictedRoute;
