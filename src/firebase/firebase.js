import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref as storageRef } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebase-config';

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app);

export {
    auth,
    db,
    collection,
    storage,
    storageRef,
};
