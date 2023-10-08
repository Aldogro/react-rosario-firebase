const RenderItem = ({ doc, onEdit, onDelete, onStatusChange }) => {
    const docData = doc.data();

    return (
        <div className="document">
            <div className="document-text">
                <div>
                    <h3>{(docData && docData.title && docData.title.toUpperCase()) || '-'}</h3>
                    <h4>{new Date(docData.createdAt).toDateString()}</h4>
                    <p>{docData.description}</p>
                </div>
                <div className={docData.done ? 'done' : 'pending'}>
                    {docData.done ? 'DONE' : 'PENDING'}
                </div>
            </div>
            <div className="action-buttons">
                <div onClick={() => onEdit(doc)}>Edit</div>
                <div onClick={() => onDelete(doc.id)}>Delete</div>
                <div onClick={() => onStatusChange(doc.id, !docData.done)}>
                    {docData.done ? 'Mark as Pending' : 'Mark as Done'}
                </div>
            </div>
        </div>
    );
};

export default RenderItem;
