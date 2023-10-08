import Header from '../components/Header';
import qrReactFirebaseHooksDocs from '../assets/qr-react-firebase-hooks-docs.svg';

const FirstStep = () => {
    return (
        <div className="step">
            <Header title="Setting up the project" branchName="01-project-set-up" />
            <div className="content">
                <h2>QR to "react-firebase-hooks" Docs</h2>
                <img
                    src={qrReactFirebaseHooksDocs}
                    className="image"
                    alt="react-firebase-hooks-docs-qr"
                    height={500}
                />
            </div>
        </div>
    );
};

export default FirstStep;
