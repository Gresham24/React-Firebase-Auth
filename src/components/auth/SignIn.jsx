import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [justSignedIn, setJustSignedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                if (userCredentials) {
                    setEmail("");
                    setPassword("");
                    setJustSignedIn(true);
                    navigate("/homepage", { state: { justSignedIn: true } });
                } else {
                    console.log("Email is not verified");
                }
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
                <button type="submit">Sign in</button>
            </form>
            <div>
                Don't have an account?{" "}
                <Link to="/registration">Create account</Link>{" "}
            </div>
            <div>
                Forgot password? <Link to="/forgotpassword">Reset</Link>{" "}
            </div>
        </div>
    );
};

export default SignIn;
