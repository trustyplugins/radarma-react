// src/components/admin/auth/ProtectedRoute.tsx
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('logged_user');
    const isAuth = session && JSON.parse(session)?.isAuthenticated;
    setIsAuthenticated(!!isAuth);
  }, []);

  if (isAuthenticated === null) return null; // or loader

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace state={{ from: location }} />
  );
};

export default ProtectedRoute;
