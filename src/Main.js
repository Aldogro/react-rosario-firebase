import { auth } from './firebase/firebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import { NavLink, Routes, Route } from 'react-router-dom';
import FirstStep from './pages/FirstStep';
import SecondStep from './pages/SecondStep';
import ThirdStep from './pages/ThirdStep';
import LoginPage from './pages/Login';

const Main = () => {
    const [loggedUser] = useAuthState(auth)

    return (
        <div>
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
                        <NavLink
                            to="/fifth-step"
                            className={({ isActive }) => isActive ? "active" : ""}
                        >
                            Fifth Step
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
            <Routes>
                <Route path="/" element={<FirstStep />} />
                <Route path="/first-step" element={<FirstStep />} />
                <Route path="/second-step" element={<SecondStep />} />
                <Route path="/third-step" element={<ThirdStep />} />
                <Route path="/fourth-step" element={<FirstStep />} />
                <Route path="/fifth-step" element={<FirstStep />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default Main;
