import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sideBar">
            <div className="headerLogo">&lt;&lt; Logo IMG &gt;&gt;</div>
            <ul className="navButtonContainer">
                <li className="navItem">
                    <Link id="dashboard-nav-btn" to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li className="navItem">
                    <Link id="profile-nav-btn" to="/">
                        Profile
                    </Link>
                </li>
                <li className="navItem">
                    <Link id="reports-nav-btn" to="/">
                        Reports
                    </Link>
                </li>
                <li className="navItem">
                    <Link id="settings-nav-btn" to="/">
                        Settings
                    </Link>
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
        </aside>
    );
}

export default Sidebar;
