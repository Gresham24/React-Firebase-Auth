import React from "react";
import { doc, collection, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

function UserDetails() {
    return (
        <div className="userDetailsContainer">
            <h1>Complete profile:</h1>
            <form>
                <label htmlFor="companyName"></label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name"
                />
                <label htmlFor="phoneNumber"></label>
                <input
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder="Contact Number"
                />
                <label htmlFor="companyName"></label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default UserDetails;
