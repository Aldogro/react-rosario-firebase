import { useState } from 'react';
import DisplayError from '../components/DisplayError';
import Header from '../components/Header';
import RenderDocument from '../components/RenderDocument';
import TaskForm from '../components/TaskForm';
import {
    addDocToCollection,
    collection,
    deleteDoc,
    doc,
    firestore,
    orderBy,
    query,
    sortByOptions,
    updateDoc,
} from '../firebase/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const FourthStep = () => {
    const [sortBy, setSortBy] = useState(sortByOptions.date_desc);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [value, loadingCollection, errorCollection] = useCollection(
        query(collection(firestore, 'tasks'), orderBy(sortBy[0], sortBy[1])),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const addTask = async (data) => {
        try {
            const task = {
                ...data,
                createdAt: new Date().getTime(),
            }
            await addDocToCollection('tasks', task);
        } catch (error) {
            setError(error)
            console.error(error);
        }
    };

    const editTask = async (data) => {
        try {
            const docRef = doc(firestore, 'tasks', taskToEdit.id);
            await updateDoc(docRef, data);
            setTaskToEdit(null);
        } catch (error) {
            console.error(error);
        }
    };

    const onEditTaskClick = async (doc) => {
        try {
            setTaskToEdit(doc);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (docId) => {
        try {
            const docRef = doc(firestore, 'tasks', docId);
            await deleteDoc(docRef);
        } catch (error) {
            console.error(error);
        }
    };

    const changeTaskStatus = async (docId, newStatus) => {
        const docRef = doc(firestore, 'tasks', docId)
        await updateDoc(docRef, { done: newStatus })
    };

    const orderByOptions = [
        { id: 'date_desc', label: 'By date, new first'},
        { id: 'date_asc', label: 'By date, old first'},
        { id: 'done_desc', label: 'By status, done first'},
        { id: 'done_asc', label: 'By status, pending first'},
        { id: 'title_asc', label: 'By title, ascending'},
        { id: 'title_desc', label: 'By title, descending'},
    ];

    return (
        <div className="step">
            <Header title="Firebase Firestore!!" branchName="04-firebase-firestore" />
            <div className="content">
                <select value={sortByOptions[sortBy]} onChange={(e) => setSortBy(sortByOptions[e.target.value])}>
                    {orderByOptions.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                    ))}
                </select>
                {loadingCollection ? (
                    <h1>Loading...</h1>
                ) : (
                    <>
                        {value && value.docs && value.docs.length ? (
                            <div className="documents-container">
                                {value.docs.map((_doc) => (
                                    <RenderDocument
                                        key={_doc.id}
                                        doc={_doc}
                                        onEdit={onEditTaskClick}
                                        onDelete={deleteTask}
                                        onStatusChange={changeTaskStatus}
                                    />
                                ))}
                            </div>
                        ) : (
                            <h1>No items found</h1>
                        )}
                    </>
                )}
                <TaskForm
                    onAddTask={addTask}
                    onEditTask={editTask}
                    taskToEdit={taskToEdit}
                />
                <DisplayError error={errorCollection} />
                <DisplayError error={error} onClick={() => setError(null)} />
            </div>
        </div>
    );
};

export default FourthStep;
