import { Navigate, Routes, Route } from 'react-router-dom';
import FirstStep from './pages/FirstStep';
import SecondStep from './pages/SecondStep';
import ThirdStep from './pages/ThirdStep';
import FourthStep from './pages/FouthStep';
import LoginPage from './pages/Login';
import NavBar from './components/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/fourth-step" />} />
                <Route path="/first-step" element={<FirstStep />} />
                <Route path="/second-step" element={<SecondStep />} />
                <Route path="/third-step" element={<ThirdStep />} />
                <Route path="/fourth-step" element={<FourthStep />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};

export default Main;
