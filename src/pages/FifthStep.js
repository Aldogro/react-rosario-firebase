import { useState, useCallback, useEffect } from 'react';
import Header from '../components/Header';
import { listAll, storage, storageRef } from '../firebase/firebase';
import { useUploadFile } from 'react-firebase-hooks/storage';
import ImagesList from '../components/ImagesList';
import DisplayError from '../components/DisplayError';

const FifthStep = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [files, setFiles] = useState([]);

    const ref = storageRef(storage, `/images/${selectedFile && selectedFile.name}`);
    const [uploadFile, uploading, snapshot, error] = useUploadFile();


    const listRef = storageRef(storage, '/images');
    
    const fetchImages = useCallback(() => {
        listAll(listRef)
            .then((response) => {
                if (response) {
                    setFiles(response.items);
                }
            })
            .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);
  
    const upload = async () => {
      if (selectedFile) {
        await uploadFile(ref, selectedFile, {
          contentType: `${selectedFile.type}`
        });
        setSelectedFile(null);
        fetchImages();
      }
    }

    return (
        <>
            <Header title="Firebase Storage!!" branchName="05-firebase-storage" />
            <div className="content">
                <input
                    className="button"
                    type="file"
                    onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : undefined;
                        setSelectedFile(file);
                    }}    
                />
                <button className="button" disabled={!selectedFile || uploading} onClick={upload}>
                    Upload
                </button>
                <ImagesList files={files} refetch={fetchImages} />
                
                {error && <DisplayError error={error} />}
            </div>
        </>
    );
};

export default FifthStep;
