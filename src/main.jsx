import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import Registration from "./components/auth/Registration.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import AuthProvider from "./components/auth/AuthContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Welcome from "./components/onboarding/Welcome.jsx";
import About from "./components/onboarding/About.jsx";
import UserDetails from "./components/onboarding/UserDetails.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <AuthProvider>
            <Routes>
                <Route exact path="/" Component={Homepage} />
                <Route path="/registration" Component={Registration} />
                <Route path="/signin" Component={SignIn} />
                <Route path="/forgotpassword" Component={ForgotPassword} />
                <Route path="/dashboard" Component={Dashboard} />
                <Route path="/welcome" Component={Welcome} />
                <Route path="/about" Component={About} />
                <Route path="/userdetails" Component={UserDetails}></Route>
            </Routes>
        </AuthProvider>
    </Router>
);
