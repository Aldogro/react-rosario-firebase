import { useState} from 'react';
import { auth } from '../firebase/firebase';
import {
    useAuthState,
    useDeleteUser,
    useSignInWithGoogle,
    useSignInWithEmailAndPassword,
    useCreateUserWithEmailAndPassword,
    useSignOut
} from 'react-firebase-hooks/auth';

import './Login.css';

const LoginPage = () => {
    const [loggedUser] = useAuthState(auth)

    // eslint-disable-next-line no-unused-vars
    const [signInWithGoogle, googleUser, loadingSignInWithGoogle, signInWithGoogleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        // eslint-disable-next-line no-unused-vars
        signedInUser,
        loadingSignInWithEmail,
        signInWithEmailError,
    ] = useSignInWithEmailAndPassword(auth)
    const [signOut, loadingSignOut, signOuterror] = useSignOut(auth);
    const [deleteUser, loadingDeleteUser, deleteUserError] = useDeleteUser(auth);
    const [
        createUserWithEmailAndPassword,
        // eslint-disable-next-line no-unused-vars
        createdUser,
        createUserLoading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [confirmDeleteUser, setConfirmDeleteUser] = useState(false);

    const email = 'aldogrojas5+1@gmail.com';
    const password = '12345678';

    const handleLoginWithEmailAndPassword = async () => {
        signInWithEmailAndPassword(email, password)
    };

    const handleCreateUser = async () => {
        await createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className="login-container">
            <h1>
                User: {loggedUser ? `${loggedUser.displayName || loggedUser.email} logged` : 'no user logged'}
            </h1>
            <a href="https://github.com/CSFrequency/react-firebase-hooks/tree/master/auth">
                Link to react-firebase-hooks auth documentation
            </a>
            <h3>Create User</h3>
            <p><b>Email:</b> {email}, <b>Password:</b> {password}</p>
            <div className="section">
                <button
                    className="button"
                    disabled={createUserLoading}
                    onClick={async () => handleCreateUser()}
                >
                    Create User with E-mail and Password
                </button>
            </div>
            {createUserError && (
                <div className="section section-danger">
                    {createUserError.message}
                </div>
            )}
            {!loggedUser && (
                <>
                    <h3>Login Methods</h3>
                    <div className="section">
                        <button
                            className="button"
                            disabled={loadingSignInWithGoogle}
                            onClick={() => signInWithGoogle()}
                        >
                            Login with Google
                        </button>
                        <button
                            disabled={loadingSignInWithEmail}
                            className="button"
                            onClick={handleLoginWithEmailAndPassword}
                        >
                            Login with E-mail and Password
                        </button>
                    </div>
                    {signInWithGoogleError && (
                        <div className="section section-danger">
                            {signInWithGoogleError.message}
                        </div>
                    )}
                    {signInWithEmailError && (
                        <div className="section section-danger">
                            {signInWithEmailError.message}
                        </div>
                    )}
                </>
            )}

            {loggedUser && (
                <>
                    <h3>Logout Method</h3>
                    <div className="section">
                        <button
                            className="button"
                            onClick={async () => await signOut()}
                            disabled={loadingSignOut}
                        >
                            Sign out
                        </button>
                    </div>
                    {signOuterror && (
                        <div className="section section-danger">
                            {signOuterror.message}
                        </div>
                    )}
                    <h3>Remove User from Firebase</h3>
                    <div className="section section-danger">
                        {
                            confirmDeleteUser ? (
                                <>
                                    <button
                                        className="button"
                                        onClick={() => {
                                            setConfirmDeleteUser(false);
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="button button-danger"
                                        onClick={async () => {
                                            await deleteUser();
                                            setConfirmDeleteUser(false);
                                        }}
                                        disabled={loadingDeleteUser}
                                    >
                                        Yes, Delete User
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="button button-danger"
                                    onClick={() => setConfirmDeleteUser(!confirmDeleteUser)}
                                >
                                    Delete User?
                                </button>
                            )
                        }
                    </div>
                    {deleteUserError && (
                        <div className="section section-danger">
                            {deleteUserError.message}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default LoginPage;
