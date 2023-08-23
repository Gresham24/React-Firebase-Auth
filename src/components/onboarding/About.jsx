import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doc, collection, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { AuthContext } from "../auth/AuthContext";

function About() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [city, setCity] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = auth.currentUser;

        if (!user) {
            console.log("No user is currently signed in");
            return;
        }

        const docRef = doc(collection(db, "Users"), currentUser.uid);

        try {
            await setDoc(docRef, { city }, { merge: true });
            navigate("/userdetails");
        } catch (error) {
            alert("Error saving city: ", error);
        }
    };

    return (
        <>
            <h1>About</h1>
            <p>
                Lorem ipsum, dolor Esse nam sit ratione recusandae perferendis,
                et id magni odio
            </p>
            <div className="aboutContainer">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
            <p>Page 2/3</p>
        </>
    );
}

export default About;
