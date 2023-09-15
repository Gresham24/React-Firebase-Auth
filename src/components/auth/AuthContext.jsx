import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import LoadingComponent from "../common/LoadingComponent";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const fetchUserData = async () => {
                if (user) {
                    console.log("User state: signed in as", user.email);
                    try {
                        const docRef = doc(db, "Users", user.uid);
                        const docSnap = await getDoc(docRef);

                        if (docSnap.exists()) {
                            setCurrentUser({
                                ...user,
                                details: docSnap.data(),
                            });
                        }
                    } catch (error) {
                        console.error("Error fetching user data: ", error);
                    }
                } else {
                    console.log("User state: signed out");
                    setCurrentUser(null);
                }
                setLoading(false);
            };

            fetchUserData();
        });

        return unsubscribe;
    }, []);

        if (loading) {
            return <div><LoadingComponent/> </div>;
        }

    return (
        <AuthContext.Provider value={{ currentUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
