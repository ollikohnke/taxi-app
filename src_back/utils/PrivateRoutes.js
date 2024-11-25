import React from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

const PrivateRoutes = ({ Component }) => {
 
    const { isAuthenticated } = useContext(AuthContext);

    // Your authentication logic goes here...
 
    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
    
};

export default PrivateRoutes;