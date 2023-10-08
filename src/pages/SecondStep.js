import Header from "../components/Header";

const SecondStep = () => {
    return (
        <div className="step">
            <Header title="Order Stuff" branchName="02-order-firebase-stuff" />
            <div className="content">
                <ul>
                    <li>Separate Firebase config from APP</li>
                    <li>Create routes for the next steps</li>
                    <li>Sorry for the styles &#128517;</li>
                </ul>
            </div>
        </div>
    );
};

export default SecondStep;
