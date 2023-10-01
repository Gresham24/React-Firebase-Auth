import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doc, collection, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { AuthContext } from "../auth/AuthContext";

function Welcome() {
    // Access the current user from the `AuthContext`
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get the current user from Firebase Auth
        const user = auth.currentUser;

        // Check if a user is signed in
        if (!user) {
            console.error("No user is currently signed in");
            return;
        }

        // Create a document reference to the user's document in the `Users` collection in Firestore
        const docRef = doc(collection(db, "Users"), currentUser.uid);

        try {
            // Attempt to save/update the company name in the Firestore document
            // The `merge` option ensures that only the provided fields are updated without overwriting existing fields
            await setDoc(docRef, { companyName }, { merge: true });

            // If successful, navigate to the "/about" route
            navigate("/about");
        } catch (error) {
            // Log any errors that occur during the Firestore operation
            alert("Error saving company name: ", error);
        }
    };

    return (
        <>
            <h1>Welcome</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                nam sit ratione recusandae perferendis, et id magni odio
            </p>
            <div className="welcomeContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Company Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <button type="submit">Next</button>
                </form>
            </div>
            <p>Page 1/3</p>
        </>
    );
}

export default Welcome;
