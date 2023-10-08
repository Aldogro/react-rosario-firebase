import { Link } from 'react-router-dom'

const ThirdStep = () => {
    return (
        <div className="step">
            <h1>Firebase Auth!!</h1>
            <h2><b>BRANCH:</b> 03-firebase-auth</h2>
            <div className="divider"></div>
            <div className="content">
                <Link className="button" to="/login">Go to Login to test this out</Link>
            </div>
        </div>
    );
};

export default ThirdStep;
