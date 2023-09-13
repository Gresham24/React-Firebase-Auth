import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function Homepage() {
    return <div className="page">
      <Sidebar />
      <Dashboard />
    </div>;
}

export default Homepage;
