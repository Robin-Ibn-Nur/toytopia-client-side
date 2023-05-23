import React, { useContext } from 'react';
import { LoaderIcon } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import GptLoader from '../../Pages/GptLoader/GptLoader';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <GptLoader></GptLoader>
    }

    if (user) {
        return children;
    } else {
        swal({
            title: "Are you sure?",
            text: "You have to log in first to view details",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectedRoute;