import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../auth/SignOut";

function Sidebar() {
    return (
        <aside className="sideBar">
            <div className="headerLogo">
                <Link to="/homepage">
                    <img src="/src/assets/logo.svg" alt="placeholder logo" />
                </Link>
            </div>
            <ul className="navButtonContainer">
                <li className="navItem">
                    <Link id="dashboard-nav-btn" to="/homepage">
                        Dashboard
                    </Link>
                </li>
                <li className="navItem">
                    <Link to="/packages">Packages</Link>
                </li>
                <li className="navItem">
                    <Link id="reports-nav-btn" to="/reports">
                        Reports
                    </Link>
                </li>
                <li className="navItem">
                    <Link>Settings</Link>
                </li>
            </ul>
            <LogoutButton />
        </aside>
    );
}

export default Sidebar;
