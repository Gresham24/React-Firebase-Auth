import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/auth/AuthContext";

const PrivateRoutes = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    const location = useLocation();

        if (location.state && location.state.justSignedIn) {
            return children;
        }

    if (currentUser) {
        return children;
    }

    return <Navigate to="/" replace />;
};

export default PrivateRoutes;


