import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [firstName, setFirstName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
              if (userCredentials.user.emailVerified) {
                console.log("Email is verified");
                console.log(userCredentials);
                    // Continue with the login process
                } else {
                    console.log("Email is not verified");
                    alert(
                        "Account not verified. Please follow the verification link in your emails"
                    );
                }
            })
            .then(() => {
                setEmail("");
                setPassword("");
            })
            .catch((error) => {
              console.log(error.message);
                alert(error.message);
            });
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
            <div>
                Don't have an account? <Link to="/registration">Create account</Link>{" "}
            </div>
        </div>
    );
};

export default SignIn;
