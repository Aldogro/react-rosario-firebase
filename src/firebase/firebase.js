import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, updateDoc, deleteDoc, addDoc, query, orderBy } from 'firebase/firestore';
import { deleteObject, getStorage, listAll, ref as storageRef } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import firebaseConfig from './firebase-config';

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app);

const addDocToCollection = async (collectionName, doc) => {
    try {
        return await addDoc(collection(firestore, collectionName), doc);
    } catch (error) {
        throw new Error(error);
    }
};

const sortByOptions = {
    date_desc: ['createdAt', 'desc'],
    date_asc: ['createdAt', 'asc'],
    done_desc: ['done', 'desc'],
    done_asc: ['done', 'asc'],
    title_desc: ['title', 'desc'],
    title_asc: ['title', 'asc'],
};

export {
    auth,
    addDocToCollection,
    firestore,
    collection,
    deleteDoc,
    doc,
    orderBy,
    query,
    sortByOptions,
    storage,
    listAll,
    storageRef,
    deleteObject,
    updateDoc,
};
