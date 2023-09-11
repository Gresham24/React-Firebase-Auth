import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../auth/SignOut";

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
            <LogoutButton />

        </aside>
    );
}

export default Sidebar;
