

import React, { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const login = useAppSelector((state) => state.user.login);
 

  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
