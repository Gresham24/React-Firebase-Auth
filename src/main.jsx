import React from "react";
import ReactDOM from "react-dom/client";
import Registration from "./components/auth/Registration.jsx";
import SignIn from "./components/auth/SignIn.jsx";
import LogoutButton from "./components/auth/SignOut.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Registration />
        <SignIn />
        <LogoutButton />
    </React.StrictMode>
);