import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

const Reports = () => {
    const { currentUser, loading } = useContext(AuthContext);

    return (
        <div className="reportsContainer">
            <h1>Reports</h1>
            {loading && <p>Loading...</p>}

            {!loading && !currentUser && <p>No user logged in.</p>}

            {currentUser && (
                <div>
                    <p>
                        <strong>City:</strong> {currentUser.details.city}
                    </p>
                    <p>
                        <strong>Company Name:</strong>{" "}
                        {currentUser.details.companyName}
                    </p>
                    <p>
                        <strong>Contact Number:</strong>{" "}
                        {currentUser.details.contactNum}
                    </p>
                    <p>
                        <strong>Email:</strong> {currentUser.details.email}
                    </p>
                    <p>
                        <strong>First Name:</strong>{" "}
                        {currentUser.details.firstName}
                    </p>
                    <p>
                        <strong>Last Name:</strong>{" "}
                        {currentUser.details.lastName}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Reports;
