import React from "react";
import ReactDOM from "react-dom/client";
import Registration from "./components/auth/Registration.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import LogoutButton from "./components/auth/SignOut.jsx";
import AuthProvider from "./components/auth/AuthContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" Component={Homepage} />
                <Route path="/registration" Component={Registration} />
                <Route path="/signin" Component={SignIn} />
                <Route path="/forgotpassword" Component={ForgotPassword} />
            </Routes>
            {/* <LogoutButton /> */}
        </AuthProvider>
    </Router>
);
