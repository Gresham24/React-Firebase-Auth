import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/SignOut";
import "./Sidebar.css"

function Sidebar() {
    return (
        <aside className="sideBar">
            <div className="headerLogo">
                <NavLink to="/homepage">
                    <img src="/src/assets/logo.svg" alt="placeholder logo" />
                </NavLink>
            </div>
            <ul className="navButtonContainer">
                <li className="navItem">
                    <NavLink
                        to="/homepage"
                        className={({ isActive }) =>
                            isActive ? "selected" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className="navItem">
                    <NavLink
                        to="/packages"
                        className={({ isActive }) =>
                            isActive ? "selected" : ""
                        }
                    >
                        Packages
                    </NavLink>
                </li>
                <li className="navItem">
                    <NavLink
                        to="/reports"
                        className={({ isActive }) =>
                            isActive ? "selected" : ""
                        }
                    >
                        Reports
                    </NavLink>
                </li>
                <li className="navItem">
                    <NavLink>Settings</NavLink>
                </li>
            </ul>
            <LogoutButton />
        </aside>
    );
}

export default Sidebar;
