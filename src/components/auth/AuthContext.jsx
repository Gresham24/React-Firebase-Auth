import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);

            // Define the async function to fetch user data from Firestore
            const fetchUserData = async () => {
                try {
                    const docRef = doc(db, "Users", user.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        console.log(
                            "User data from Firestore:",
                            docSnap.data()
                        );
                        setCurrentUser({
                            ...user,
                            details: docSnap.data(),
                        });
                    } else {
                        console.log(
                            "Document doesn't exist for UID:",
                            user.uid
                        );
                    }
                } catch (error) {
                    console.error("Error fetching user data: ", error);
                }
            };

            if (user) {
                fetchUserData();

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
