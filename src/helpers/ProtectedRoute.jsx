import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authData } from '../utils/redux/slice/authSlice';

const ProtectedRoute = () => {
    // Get authentication state from Redux store
    const { isAuthenticated } = useSelector(authData);

    // If user is authenticated, render the child components
    // Otherwise, redirect to the home page
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
