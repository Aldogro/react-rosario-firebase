import DisplayImage from './DisplayImage';

const ImagesList = ({ files, refetch }) => {
    return (
        <div className="images-list">
            {files && files.length > 0 && files.map((imageRef) => (
                <DisplayImage key={imageRef.fullPath} imageRef={imageRef} refetch={refetch} />
            ))}
        </div>
    );
};

export default ImagesList;
