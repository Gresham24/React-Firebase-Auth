import React from "react";
import ReactDOM from "react-dom/client";
import Registration from "./components/auth/Registration.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import AuthProvider from "./components/auth/AuthContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing.jsx";
import ForgotPassword from "./components/auth/ForgotPassword.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard.jsx";
import Welcome from "./components/onboarding/Welcome.jsx";
import About from "./components/onboarding/About.jsx";
import UserDetails from "./components/onboarding/UserDetails.jsx";
import Sidebar from "./components/pages/Sidebar.jsx";
import Homepage from "./components/pages/Homepage/Homepage.jsx";
import Reports from "./components/pages/Reports/Reports.jsx";
import PrivateRoutes from "./utilities/PrivateRoutes.jsx";
import AddPackage from "./components/pages/Packages/AddPackage.jsx";
import Packages from "./components/pages/Packages/Packages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoutes>
                            <Dashboard />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/welcome"
                    element={
                        <PrivateRoutes>
                            <Welcome />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <PrivateRoutes>
                            <About />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/userdetails"
                    element={
                        <PrivateRoutes>
                            <UserDetails />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/sidebar/*"
                    element={
                        <PrivateRoutes>
                            <Sidebar />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/homepage/*"
                    element={
                        <PrivateRoutes>
                            <Homepage />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/reports/*"
                    element={
                        <PrivateRoutes>
                            <Reports />
                        </PrivateRoutes>
                    }
                />
                <Route
                    path="/packages/addpackage/*"
                    element={
                        <PrivateRoutes>
                            <AddPackage />
                        </PrivateRoutes>
                    }
                />

                <Route
                    path="/packages/*"
                    element={
                        <PrivateRoutes>
                            <Packages />
                        </PrivateRoutes>
                    }
                />
            </Routes>
        </AuthProvider>
    </Router>
);
