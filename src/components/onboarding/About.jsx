import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doc, collection, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { AuthContext } from "../auth/AuthContext";

function About() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/userdetails");
    };

    return (
        <>
            <h1>About</h1>
            <p>
                Lorem ipsum, dolor Esse nam sit ratione recusandae perferendis,
                et id magni odio
            </p>
            <div className="aboutContainer">
                <form>
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        // value={city}
                        // onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
            <p>Page 2/3</p>
        </>
    );
}

export default About;
