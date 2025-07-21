import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from './common/Loading';

const ProtectedRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <Loading />;

    if (user && user.email) {
        return children;
    };

    return <Navigate to="/login" state={location.pathname} replace />;
};

export default ProtectedRoute;
