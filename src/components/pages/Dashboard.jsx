import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import LogoutButton from "../auth/SignOut";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";


function Dashboard() {
    const { currentUser } = useContext(AuthContext); // use the useContext hook to access the AuthContext
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (currentUser) {
            // Fetch the user details from Firestore using the already initialized db
            const docRef = doc(db, "Users", currentUser.uid);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        setUserDetails(docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                })
                .catch((error) => {
                    console.log("Error getting document:", error);
                });
        }
    }, [currentUser]);

    return (
        <>
            <p>
                {" "}
                <i>
                    Email not verified. Click{" "}
                    <Link to="/registration">here</Link> to resend a
                    verification link
                </i>{" "}
            </p>
            <h1>Dashboard</h1>
            {currentUser ? (
                <p>
                    <strong>Email:</strong> {currentUser.email}
                </p>
            ) : (
                <p>Loading user details...</p>
            )}
            {userDetails ? (
                <p>
                    <strong>Name:</strong> {userDetails.firstName}{" "}
                    {userDetails.lastName}
                </p>
            ) : (
                <p>Loading user details...</p>
            )}
            <LogoutButton />
        </>
    );
}

export default Dashboard;
