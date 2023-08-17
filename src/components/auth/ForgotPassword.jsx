import React, { useState } from "react";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(""); // Clear any previous messages

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset email sent successfully!");
        } catch (error) {
            setMessage(`Error sending password reset email: ${error.message}`);
        }

        setLoading(false);
    };

    return (
        <div className="resetPasswordContainer">
            <h1>Forgotten your Password</h1>
            <p>
                There is nothing to worry about, we'll send you a message to
                help you reset your password.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Address </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    Send Reset Link
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ForgotPassword;
