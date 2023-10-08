import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ThirdStep = () => {
    return (
        <div className="step">
            <Header title="Firebase Auth!!" branchName="03-firebase-auth" />
            <div className="content">
                <Link className="button" to="/login">Go to Login to test this out</Link>
            </div>
        </div>
    );
};

export default ThirdStep;
