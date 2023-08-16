import React from "react";
import ReactDOM from "react-dom/client";
import Registration from "./components/auth/Registration.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import LogoutButton from "./components/auth/SignOut.jsx";
import AuthProvider from "./components/auth/AuthContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" Component={Homepage} />
                <Route path="/registration" Component={Registration} />
                <Route path="/signin" Component={SignIn} />
            </Routes>
                {/* <LogoutButton /> */}
        </AuthProvider>
    </Router>
);
