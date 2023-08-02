import { signOut } from "firebase/auth";
import { auth } from "../../firebase";


const LogoutButton = () => {
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out");
            })
            .catch((error) => {
                console.error("Logout Error:", error);
            });
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;