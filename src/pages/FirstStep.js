import qrReactFirebaseHooksDocs from '../assets/qr-react-firebase-hooks-docs.svg';

const Layout = () => {
    return (
        <div className="first-step">
            <h1>
                Setting up the project
            </h1>
            <h2>react-firebase-hooks Docs</h2>
            <img
                src={qrReactFirebaseHooksDocs}
                className="image"
                alt="react-firebase-hooks-docs-qr"
                height={500}
            />
        </div>
    );
};

export default Layout;
