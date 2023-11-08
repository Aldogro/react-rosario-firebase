import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './firebase-config'
import { getFirestore, collection } from 'firebase/firestore';
import qrReactFirebaseHooksDocs from './assets/qr-react-firebase-hooks-docs.svg';
import qrProject from './assets/qr-project.svg';
import qrRepo from './assets/qr-repo.svg';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { getStorage, ref as storageRef } from 'firebase/storage';
import { useDownloadURL } from 'react-firebase-hooks/storage';

import './App.css'
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig)

getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);

function App() {
  const [user] = useAuthState(auth)
  const [openQR, setOpenQR] = useState('');

  const [dbValues, dbLoading, dbError] = useCollection(
    collection(db, 'react-rosario')
  );

  const [files, loadingFiles, errorFiles] = useDownloadURL(storageRef(storage, 'images/40 AÑOS DE PRÁCTICA.png'));

  console.log('USER', user)
  
  console.log('SNAPSHOT', dbValues?.docs[0].data())
  console.log('LOADING', dbLoading)
  console.log('ERROR', dbError)

  console.log('FILES', files)
  console.log('LOADING FILES', loadingFiles)
  console.log('ERROR FILES', errorFiles)

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
  )
}

export default App
