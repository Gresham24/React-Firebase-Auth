import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import LogoutButton from "../auth/SignOut";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { sendEmailVerification } from "firebase/auth";

function Dashboard() {
    const { currentUser } = useContext(AuthContext); // use the useContext hook to access the AuthContext
    const [userDetails, setUserDetails] = useState(null);

    const { email, emailVerified, uid } = currentUser || {}; // Destructuring with a fallback

    useEffect(() => {
        if (uid) {
            // Using destructured uid
            // Fetch the user details from Firestore using the already initialized db
            const docRef = doc(db, "Users", uid);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) {
                        setUserDetails(docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                })
                .catch((error) => {
                    console.error("Error getting document:", error); // Enhanced error logging
                });
        }

        // Cleanup (no specific cleanup for now, but this is where you'd handle it if needed)
        // return () => {
        //     // Cleanup tasks here
        // }
    }, [uid]); // Using destructured uid as a dependency

    const resendVerificationEmail = () => {
        if (currentUser) {
            sendEmailVerification(currentUser)
                .then(() => {
                    alert("Verification email sent!");
                })
                .catch((error) => {
                    console.error("Error sending verification email:", error);
                });
        }
    };

    return (
        <>
            {!emailVerified && (
                <p>
                    <i>
                        Account not verified. Click{" "}
                        <button
                            style={{
                                color: "red",
                                textAlign: "center",
                                textDecoration: "none",
                                fontSize: "16px",
                                cursor: "pointer",
                                border: "none",
                            }
                        }
                            onClick={resendVerificationEmail}
                        >
                            here
                        </button>{" "}
                        to resend a verification link.
                    </i>
                </p>
            )}
            <h1>Dashboard</h1>
            {email ? ( // Using destructured email
                <p>
                    <strong>Email:</strong> {email}
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
