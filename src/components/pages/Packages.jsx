import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Packages() {
    const [selectedValue, setSelectedValue] = useState();

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };
    return (
        <div className="page">
            <Sidebar />
            <div className="packagesContainer">
                <h1>Add Package</h1>
                <form>
                    <label htmlFor="packageName">Package Name</label>
                    <input
                        type="text"
                        id="packageName"
                        name="packageName"
                        required
                    />
                    <label htmlFor="packagePrice">Package Price</label>
                    <input
                        type="number"
                        id="packagePrice"
                        name="packagePrice"
                        placeholder="R0.00"
                        required
                    />
                    <label htmlFor="packageType">Package Type:</label>
                    <select
                        id="packageType"
                        value={selectedValue}
                        onChange={handleChange}
                        required
                    >
                        <option value=" ">Choose a package</option>
                        <option value="standPackage">Standard</option>
                        <option value="PromoPackage">Promotion</option>
                    </select>

                    <label htmlFor="startDate">Start Date</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        required
                    />

                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" required />
                </form>
                <div className="buttonContainer">
                    <button type="submit">Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </div>
        </div>
    );
}

export default Packages;
