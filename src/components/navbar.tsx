import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {

const [user ] = useAuthState(auth);

const signUserOut = async () => {
    await signOut(auth);
}

    return (
        <div className="navbar">
            <Link className="links" to="/">Home</Link>
            {!user ? <Link className="links" to="/login">Login</Link>
            : <Link className="links" to="/createpost">Create Post</Link>}

            <div className="user">
                {user && (
                    <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} width="22" height="22" alt=""/>
                <button onClick={signUserOut}>Sign Out</button>
                </>
            )}
            </div>
        </div>
    );
}