import { NavLink } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavBar = () => {
    const [loggedUser] = useAuthState(auth)

    return (
        <div className="nav-bar">
            <div className="links-wrapper">
                <div className="links-group">
                    <NavLink
                        to="/first-step"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        First Step
                    </NavLink>
                    <NavLink
                        to="/second-step"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Second Step
                    </NavLink>
                    <NavLink
                        to="/third-step"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Third Step
                    </NavLink>
                    <NavLink
                        to="/fourth-step"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Fourth Step
                    </NavLink>
                </div>
                <div className="links-group">
                    <NavLink
                        to="/login"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        {loggedUser ? (loggedUser.displayName || loggedUser.email) : 'Login'}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
