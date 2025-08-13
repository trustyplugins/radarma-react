import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import PageLoader from '../../core/loader';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { profile, loading } = useUser();
  const location = useLocation();

  if (loading) return <PageLoader />;

  if (!profile) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
