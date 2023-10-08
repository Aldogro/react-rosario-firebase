import qrReactFirebaseHooksDocs from '../assets/qr-react-firebase-hooks-docs.svg';

const FirstStep = () => {
    return (
        <div className="step">
            <h1>
                Setting up the project
            </h1>
            <h2><b>BRANCH:</b> 01-project-set-up</h2>
            <div className="divider"></div>
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
