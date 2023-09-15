import React from "react";
import { Link } from "react-router-dom";

function Landing() {
    return (
        <>
            <h1>Landing Page</h1>
            <Link to="/registration">Register Account</Link>
            <br></br>
            <Link to="/SignIn">Sign in</Link>
        </>
    );
}

export default Landing;
