import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doc, collection, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { AuthContext } from "../auth/AuthContext";

function UserDetails() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [contactNum, setContactNum] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = auth.currentUser;

        if (!user) {
            console.log("No user is currently signed in");
            return;
        }

        const docRef = doc(collection(db, "Users"), currentUser.uid);

        try {
            await setDoc(docRef, { contactNum }, { merge: true });
            navigate("/dashboard");
        } catch (error) {
            alert("Error saving city: ", error);
        }
    };

    return (
        <>
            <h1>Contact Information:</h1>
            <div className="userDetailsContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="phoneNumber">Contact Number</label>
                    <input
                        type="number"
                        id="contactNum"
                        name="contactNum"
                        placeholder="Contact Number"
                        value={contactNum}
                        onChange={(e) => setContactNum(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
            <p>Page 3/3</p>
        </>
    );
}

export default UserDetails;
