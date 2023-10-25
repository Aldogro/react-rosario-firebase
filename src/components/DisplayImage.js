import { useState } from 'react';
import { deleteObject, storage, storageRef } from '../firebase/firebase';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import DisplayError from './DisplayError';

const DisplayImage = ({ imageRef, refetch }) => {
    const [value, loading, error] = useDownloadURL(storageRef(storage, (imageRef && imageRef.fullPath) || '/image'));
    const [confirmDelete, setConfirmDelete] = useState(false);

    const onDelete = async () => {
        try {
            await deleteObject(imageRef);
            refetch();
        } catch (error) {
            console.error(error);
        }
    }

    const ShouldDelete = () => {
        return (
            <div className="buttons-container">
                <button className="button button-cancel" onClick={() => setConfirmDelete(false)}>
                    Cancel
                </button>
                <button className="button button-danger" onClick={onDelete}>
                    Yes, delete!
                </button>
            </div>
        );
    }

    return (
        <>
            {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className="image-card">
                        {value && (
                            <img src={value} alt="loaded" />
                        )}
                        {confirmDelete
                            ? (<ShouldDelete />)
                            : (
                                <button className="button button-danger" onClick={() => setConfirmDelete(true)}>
                                    Delete
                                </button>
                            )
                        }
                    </div>
                )
            }
            {error && <DisplayError error={error} />}
        </>
    );
};

export default DisplayImage;
