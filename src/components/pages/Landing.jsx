import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css"

function Landing() {
    return (
        <div className="container">
            <h1>Landing Page</h1>
            <div>
                <Link to="/registration">Register Account</Link>
                <br></br>
                <Link to="/SignIn">Sign in</Link>
            </div>
        </div>
    );
}

export default Landing;
