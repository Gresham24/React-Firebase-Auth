import "./Dashboard.css"
import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { sendEmailVerification } from "firebase/auth";

function Dashboard() {
    const { currentUser, loading } = useContext(AuthContext);

    const { email, emailVerified, details } = currentUser || {};
    
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
        <div className="dashboardContainer">
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
                            }}
                            onClick={resendVerificationEmail}
                        >
                            here
                        </button>{" "}
                        to resend a verification link.
                    </i>
                </p>
            )}
            <h1>Dashboard</h1>

            {loading ? (
                <p>Loading user details...</p>
            ) : email ? (
                <>
                    <p>
                        <strong>Email:</strong> {email}
                    </p>
                    {details ? (
                        <p>
                            <strong>Name:</strong> {details.firstName}{" "}
                            {details.lastName}
                        </p>
                    ) : (
                        <p>Loading user details...</p>
                    )}
                </>
            ) : (
                <p>No user logged in.</p>
            )}
        </div>
    );
}

export default Dashboard;
