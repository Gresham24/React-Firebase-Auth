import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import LogoutButton from "../auth/SignOut";


function Dashboard() {
    const [error, setError] = useState("");
    const { currentUser } = useContext(AuthContext); // use the useContext hook to access the AuthContext

    return (
        <>
            <h1>Dashboard</h1>
            <p>
                <strong>Email:</strong>{" "}
                {currentUser ? currentUser.email : "Not logged in"}{" "}
            </p>
            <LogoutButton/>
        </>
    );
}

export default Dashboard;
