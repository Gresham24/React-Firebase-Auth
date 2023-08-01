import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then(
            (userCredentials) => {
                console.log(userCredentials);
            }
        );
    };
    return (
        <div className="signInContainer">
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mail">Email: </label>
                <input
                    id="mail"
                    type="email"
                    name="mail"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="passw">Password </label>
                <input
                    id="passw"
                    type="password"
                    name="passw"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignIn;