import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { doc, collection, setDoc } from "firebase/firestore";

export function AddPackage() {
    const [PackageType, setPackageType] = useState("");
    const [PackageName, setPackageName] = useState("");
    const [PackagePrice, setPackagePrice] = useState("");
    const [PackageStartDate, setPackageStartDate] = useState("");
    const [PackageEndDate, setPackageEndDate] = useState("");

    const handleChange = (e) => {
        setPackageType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const PackageName = e.target.PackageName.value;
        const PackagePrice = e.target.PackagePrice.value;
        const StartDate = e.target.StartDate.value;
        const EndDate = e.target.EndDate ? e.target.EndDate.value : null;

        // Add to Firestore (or any other logic you want)
    };

    // e.target.reset()

    
    return (
        <div className="page">
            <Sidebar />
            <div className="addPackagesContainer">
                <h1>Add Package</h1>
                <div className="addPackageFormContainer">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="packageName">Package Name</label>
                        <input
                            type="text"
                            id="packageName"
                            name="packageName"
                            required
                        />
                        <label htmlFor="packagePrice">Package Price (R)</label>
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
                            value={PackageType}
                            onChange={handleChange}
                            required
                        >
                            <option value=" ">Choose a package</option>
                            <option value="StandPackage">Standard</option>
                            <option value="PromoPackage">Promotion</option>
                        </select>

                        <label htmlFor="startDate">Start Date</label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            required
                        />

                        {PackageType === "PromoPackage" && (
                            <>
                                <label htmlFor="endDate">End Date</label>
                                <input
                                    type="date"
                                    id="endDate"
                                    name="endDate"
                                    required={
                                        PackageType === "PromoPackage"
                                            ? true
                                            : false
                                    }
                                />
                            </>
                        )}
                    </form>
                    <div className="footerButtonWrapper">
                        <Link to="/packages">Cancel</Link>
                        <button type="submit">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddPackage;
