import "./Packages.css";
import React, { useContext, useState, useEffect } from "react";
import { doc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar";

import { AuthContext } from "../../auth/AuthContext";

function Packages() {
    const { currentUser, loading } = useContext(AuthContext);
    const [packages, setPackages] = useState([]);
    // console.log(currentUser);

    useEffect(() => {
        const fetchPackages = async () => {
            if (currentUser) {
                try {
                    // Reference to the Packages sub-collection of the current user
                    const packagesRef = collection(
                        doc(db, "Users", currentUser.uid),
                        "Packages"
                    );
                    const packagesSnapshot = await getDocs(packagesRef);

                    const packagesData = packagesSnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));

                    console.table(packagesData);
                    setPackages(packagesData);
                } catch (error) {
                    console.error("Error fetching packages:", error);
                }
            }
        };

        fetchPackages();
    }, [currentUser, db]);

    return (
        <div className="page">
            <Sidebar />
            <div className="pageContent">
                <div className="header">
                    <h1>Packages</h1>
                    <Link className="addPackageBtn" to="/packages/addpackage">
                        Add package
                    </Link>
                </div>
                <div className="packageListContainer">
                    {packages.map((pkg) => (
                        <div key={pkg.id}>
                            <br />
                            <>
                                {" "}
                                <b>Name:</b> {pkg.packageName};{" "}
                            </>
                            <>
                                {" "}
                                <b>Price:</b> {pkg.packagePrice};{" "}
                            </>
                            <>
                                {" "}
                                <b>Type:</b> {pkg.packageType};{" "}
                            </>
                            <>
                                {" "}
                                <b>Start Date:</b> {pkg.packageStartDate};{" "}
                            </>
                            <>
                                {" "}
                                <b>End Date:</b> {pkg.packageEndDate}
                            </>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Packages;
