import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Packages() {
    return (
        <div className="page">
            <Sidebar />
            <div className="pageContent">
                <div className="header">
                    <h1>Packages</h1>
                    <Link className="addPackageBtn" to="/addpackage">
                        Add package
                    </Link>
                </div>
                <div className="packageListContainer">
                    <p>
                        **Table with package info from firebase will come here**
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Packages;
