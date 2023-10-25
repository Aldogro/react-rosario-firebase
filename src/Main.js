import { Link, Routes, Route } from 'react-router-dom';
import FirstStep from './pages/FirstStep';

const Main = () => {
    return (
        <div>
            <div className="links-wrapper">
                <div className="links-group">
                    <Link to="/first-step">First Step</Link>
                </div>
                <div className="links-group">
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <Routes>
                <Route path="/first-step" element={<FirstStep />} />
                <Route path="/login" element={<FirstStep />} />
            </Routes>
        </div>
    );
};

export default Main;
