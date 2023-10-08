import { auth } from './firebase/firebase';
import { useAuthState} from 'react-firebase-hooks/auth';
import { Link, Routes, Route } from 'react-router-dom';
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
                        <Link to="/first-step">First Step</Link>
                        <Link to="/second-step">Second Step</Link>
                        <Link to="/third-step">Third Step</Link>
                        <Link to="/fourth-step">Fourth Step</Link>
                        <Link to="/fifth-step">Fifth Step</Link>
                    </div>
                    <div className="links-group">
                        <Link to="/login">
                            {loggedUser ? (loggedUser.displayName || loggedUser.email) : 'Login'}
                        </Link>
                    </div>
                </div>
            </div>
            <Routes>
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
