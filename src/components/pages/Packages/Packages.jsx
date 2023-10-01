import React from "react";
import "./Packages.css"
import { Link } from "react-router-dom";
import Sidebar from "../../Sidebar";
import PackagesTable from "./PackagesTable";

function Packages() {
    return (
        <div className="page">
            <Sidebar />
            <div className="pageContent">
                <div className="header">
                    <h1>Packages</h1>
                    <PackagesTable />

                    <Link className="addPackageBtn" to="/packages/addpackage">
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
