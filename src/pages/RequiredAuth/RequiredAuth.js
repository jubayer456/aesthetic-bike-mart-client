import { sendEmailVerification } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequiredAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div style={{ height: "550px" }} className='d-flex justify-contenet-center align-items-center'>
            <div className='text-center mx-auto'>
                <h3 className='text-danger'>Your Email is not verified!!</h3>
                <h5 className='text-success'> Please Verify your email address</h5>
                <button
                    className='btn btn-primary'
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Sent email');
                    }}
                >
                    Send Verification Email Again
                </button>
            </div>

        </div>
    }
    return children;
};

export default RequiredAuth;