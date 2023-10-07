import { Link, Routes, Route } from 'react-router-dom';
import FirstStep from './pages/FirstStep';

const Main = () => {
    return (
        <div>
            <div className="links-wrapper">
                <div className="links-group">
                    <Link to="/first-step">First Step</Link>
                    <Link to="/second-step">Second Step</Link>
                    <Link to="/third-step">Third Step</Link>
                    <Link to="/fourth-step">Fourth Step</Link>
                    <Link to="/fifth-step">Fifth Step</Link>
                </div>
                <div className="links-group">
                    <Link to="/login">Login</Link>
                </div>
            </div>
            <Routes>
                <Route path="/first-step" element={<FirstStep />} />
                <Route path="/second-step" element={<FirstStep />} />
                <Route path="/third-step" element={<FirstStep />} />
                <Route path="/fourth-step" element={<FirstStep />} />
                <Route path="/fifth-step" element={<FirstStep />} />
                <Route path="/login" element={<FirstStep />} />
            </Routes>
        </div>
    );
};

export default Main;
