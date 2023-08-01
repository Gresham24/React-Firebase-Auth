import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, collection, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Create user and store details to firestore
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log(userCredentials);

                let obj = {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    confirmPassword: confirmPassword,
                };
                // add user details to Users collection in Firestore
                const docRef = doc(collection(db, "Users"));
                return setDoc(docRef, obj);
            })
            .then(() => {
                console.log("User data stored in Firestore");
                // Clear the form fields
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="registrationContainer">
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name: </label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name: </label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password </label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default Registration;
