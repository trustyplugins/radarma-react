// src/components/admin/auth/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  allowedRoles?: string[]; // Example: ['A1']
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const location = useLocation();
  const sessionData = localStorage.getItem('logged_user');
  const loggedUser = sessionData ? JSON.parse(sessionData) : null;

  if (!loggedUser?.session || !loggedUser?.profile) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  const userRole = loggedUser.profile.role;

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
