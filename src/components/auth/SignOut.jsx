import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {
  const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User logged out");
                navigate('/')
            })
            .catch((error) => {
                console.error("Logout Error:", error);
            });
    };

    return (
        <button onClick={handleLogout}>Sign out</button>
    );
};

export default LogoutButton;