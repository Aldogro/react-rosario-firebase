const DisplayError = ({ error, onClick }) => {
    return (
        <>
            {error && (
                <div className="section section-danger" onClick={onClick}>
                    {error.message}
                </div>
            )}
        </>
    );
};

export default DisplayError;
