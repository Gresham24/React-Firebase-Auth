import "./Homepage.css";
import React from "react";
import Sidebar from "../../Sidebar";
import Dashboard from "../Dashboard/Dashboard";

function Homepage() {
    return (
        <div className="page">
            <Sidebar />
            <Dashboard />
        </div>
    );
}

export default Homepage;
