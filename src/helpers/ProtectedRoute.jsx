import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authData } from '../utils/redux/slice/authSlice';

const ProtectedRoute = () => {
    const { isAuthenticated } = useSelector(authData);

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
