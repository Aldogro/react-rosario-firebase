import { deleteObject, storage, storageRef } from '../firebase/firebase';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import DisplayError from './DisplayError';

const DisplayImage = ({ imageRef, refetch }) => {
    const [value, loading, error] = useDownloadURL(storageRef(storage, (imageRef && imageRef.fullPath) || '/image'));

    const onDelete = async () => {
        try {
            await deleteObject(imageRef);
            refetch()
        } catch (error) {
            console.error(error);
        }
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
                        <button className="button button-danger" onClick={onDelete}>Delete</button>
                    </div>
                )
            }
            {error && <DisplayError error={error} />}
        </>
    );
};

export default DisplayImage;
