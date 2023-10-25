import { lazy } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

const FirstStep = lazy(() => import('./pages/FirstStep'));
const SecondStep = lazy(() => import('./pages/SecondStep'));
const ThirdStep = lazy(() => import('./pages/ThirdStep'));
const FourthStep = lazy(() => import('./pages/FouthStep'));
const FifthStep = lazy(() => import('./pages/FifthStep'));
const LoginPage = lazy(() => import('./pages/Login'));

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/first-step" />} />
            <Route path="/first-step" element={<FirstStep />} />
            <Route path="/second-step" element={<SecondStep />} />
            <Route path="/third-step" element={<ThirdStep />} />
            <Route path="/fourth-step" element={<FourthStep />} />
            <Route path="/fifth-step" element={<FifthStep />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    );
};

export default Main;
