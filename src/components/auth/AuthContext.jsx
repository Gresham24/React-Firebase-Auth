import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            // Log the current user object to the console
            if (user) {
                console.log("User state: signed in as", user.email);
            } else {
                console.log("User state: signed out");
            }
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
