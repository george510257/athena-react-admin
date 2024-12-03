import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const App: React.FC = () => {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('userInfo');

  if (location.pathname === '/') {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isAuthenticated && location.pathname === '/login') {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default App; 