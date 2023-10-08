const Header = ({ title, branchName }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2><b>BRANCH:</b> {branchName}</h2>
            <div className="divider"></div>
        </>
    );
};

export default Header;
