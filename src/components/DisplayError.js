const DisplayError = ({ error }) => {
    return (
        <>
            {error && (
                <div className="section section-danger">
                    {error.message}
                </div>
            )}
        </>
    );
};

export default DisplayError;
