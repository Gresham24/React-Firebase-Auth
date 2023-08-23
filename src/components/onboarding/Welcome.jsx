import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doc, collection, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { AuthContext } from "../auth/AuthContext";

/* 
To Do:
- add restriction/logic that only users who are signing in for the first time should be able to access onboarding pages
- 

*/

function Welcome() {
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [companyName, setCompanyName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = auth.currentUser;

        if (!user) {
            console.error("No user is currently signed in");
            return;
        }

        const docRef = doc(collection(db, "Users"), currentUser.uid);

        try {
            await setDoc(docRef, { companyName }, { merge: true });
            navigate("/about");
        } catch (error) {
            console.error("Error saving company name: ", error);
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
                    <button type="submit">Save</button>
                </form>
            </div>
            <p>Page 1/3</p>
        </>
    );
}

export default Welcome;