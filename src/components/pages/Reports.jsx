import React, { useContext } from 'react'
import { AuthContext } from "../auth/AuthContext";

const Reports = () => {
  const { currentUser } = useContext(AuthContext);

  return (
      <div className="reportsContainer">
        <h1>Reports</h1>
          {currentUser ? (
    currentUser.details ? (
              <div>
                  <p><strong>City:</strong> {currentUser.details.city}</p>
                  <p><strong>Company Name:</strong> {currentUser.details.companyName}</p>
                  <p><strong>Contact Number:</strong> {currentUser.details.contactNum}</p>
                  <p><strong>Email:</strong> {currentUser.details.email}</p>
                  <p><strong>First Name:</strong> {currentUser.details.firstName}</p>
                  <p><strong>Last Name:</strong> {currentUser.details.lastName}</p>
              </div>
              ) : (
        <p>Loading user details...</p>
    )
) : (
    <p>No user logged in.</p>
          )}
          {/* fYR9AGQ3rwYZb7b7dbhvfFdEGKq2
           */}
          
      </div>
  );
}

export default Reports