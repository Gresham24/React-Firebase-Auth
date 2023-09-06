import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function Sidebar() {
    return (
        <div className="sideBar">
            <div className="headerLogo">&lt;&lt; Logo IMG &gt;&gt;</div>
            <ul className="navButtonContainer">
                <li className="navItem">
                    <span id="dashboard-nav-btn">Dashboard</span>
                    {/* <Route path="/dashboard" component={Dashboard} /> */}
                </li>
                <li className="navItem">
                    <span id="profile-nav-btn">Profile</span>
                </li>
                <li className="navItem">
                    <span id="reports-nav-btn">Reports</span>
                </li>
                <li className="navItem">
                    <span id="settings-nav-btn">Settings</span>
                </li>
            </ul>
            <div className="searchContainer ">
                <div className="searchIcon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-tabler-search"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={10} cy={10} r={7} />
                        <line x1={21} y1={21} x2={15} y2={15} />
                    </svg>
                </div>
                <input className="searchBox" type="text" placeholder="Search" />
            </div>
        </div>
    );
}

export default Sidebar;
