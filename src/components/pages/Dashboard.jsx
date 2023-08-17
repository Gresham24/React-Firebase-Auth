import React, { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";


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
        </>
    );
}

export default Dashboard;
