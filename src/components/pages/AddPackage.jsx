import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { doc, collection, setDoc, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../auth/AuthContext";

function AddPackage() {
    const { currentUser } = useContext(AuthContext);
    const [packageType, setPackageType] = useState("");
    const [packageName, setPackageName] = useState("");
    const [packagePrice, setPackagePrice] = useState("");
    const [packageStartDate, setPackageStartDate] = useState("");
    const [packageEndDate, setPackageEndDate] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "packageName":
                setPackageName(value);
                break;
            case "packagePrice":
                setPackagePrice(value);
                break;
            case "packageStartDate":
                setPackageStartDate(value);
                break;
            case "packageEndDate":
                setPackageEndDate(value);
                break;
            case "packageType":
                setPackageType(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const packageName = e.target.packageName.value;
        const packagePrice = e.target.packagePrice.value;
        const packageStartDate = e.target.packageStartDate.value;
        const packageEndDate = e.target.packageEndDate
            ? e.target.packageEndDate.value
            : null;

        const packageData = {
            packageName: packageName,
            packagePrice: packagePrice,
            packageType: packageType,
            packageStartDate: packageStartDate,
            packageEndDate: packageEndDate,
        };

        // Inner asynchronous function
        const saveToFirestore = async () => {
            const userID = currentUser.uid;
            const userRef = doc(db, "Users", userID);
            const packagesCollectionRef = collection(userRef, "Packages");

            // Add the package data to the Packages subcollection
            await addDoc(packagesCollectionRef, packageData);
        };

        // Call the inner function and handle possible errors
        saveToFirestore().catch((error) => {
            console.error("Error adding document: ", error);
            // You can also show some user-friendly error message if needed
        });

        e.target.reset();
    };

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
                            value={packageName}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="packagePrice">Package Price (R)</label>
                        <input
                            type="number"
                            id="packagePrice"
                            name="packagePrice"
                            placeholder="R0.00"
                            value={packagePrice}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="packageType">Package Type:</label>
                        <select
                            id="packageType"
                            name="packageType"
                            value={packageType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose a package</option>
                            <option value="Standard Package">Standard</option>
                            <option value="Promotion Package">Promotion</option>
                        </select>

                        <label htmlFor="packageStartDate">Start Date</label>
                        <input
                            type="date"
                            id="packageStartDate"
                            name="packageStartDate"
                            value={packageStartDate}
                            onChange={handleChange}
                            required
                        />
                        {packageType === "promoPackageType" && (
                            <>
                                <label htmlFor="packageEndDate">End Date</label>
                                <input
                                    type="date"
                                    id="packageEndDate"
                                    name="packageEndDate"
                                    value={packageEndDate}
                                    onChange={handleChange}
                                    required={
                                        packageType === "promoPackageType"
                                            ? true
                                            : false
                                    }
                                />
                            </>
                        )}
                        <div className="footerButtonWrapper">
                            <Link to="/packages">Cancel</Link>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddPackage;
