import { useState } from 'react';
import qrReactFirebaseHooksDocs from '../assets/qr-react-firebase-hooks-docs.svg';
import qrRepo from '../assets/qr-repo.svg';
import qrProject from '../assets/qr-project.svg';

const Layout = () => {
    const [openQR, setOpenQR] = useState('');
    return (
        <div className="app">
        <h1>
            Setting up the project
        </h1>
        <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setOpenQR('qr-react-firebase-hooks')}>
            QR react-firebase-hooks
            </button>
            <button onClick={() => setOpenQR('qr-project')}>
            Deployed Project
            </button>
            <button onClick={() => setOpenQR('qr-repo')}>
            Repo
            </button>
        </div>
        <dialog open={openQR === 'qr-react-firebase-hooks'}>
            <h2>react-firebase-hooks Docs</h2>
            <img
            src={qrReactFirebaseHooksDocs}
            className="image"
            alt="react-firebase-hooks-docs-qr"
            height={500}
            />
            <form method="dialog">
            <button onClick={() => setOpenQR('')}>Close</button>
            </form>
        </dialog>
        <dialog open={openQR === 'qr-project'}>
            <h2>Link to the deployed project</h2>
            <img
            src={qrProject}
            className="image"
            alt="react-firebase-hooks-docs-qr"
            height={500}
            />
            <form method="dialog">
            <button onClick={() => setOpenQR('')}>Close</button>
            </form>
        </dialog>
        <dialog open={openQR === 'qr-repo'}>
            <h2>Link to Github Repo</h2>
            <img
            src={qrRepo}
            className="image"
            alt="repo-qr"
            height={500}
            />
            <form method="dialog">
            <button onClick={() => setOpenQR('')}>Close</button>
            </form>
        </dialog>
        </div>
    );
};

export default Layout;
