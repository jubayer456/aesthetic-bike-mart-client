import React from 'react';
import google from '../../img/Background.png';
import github from '../../img/Layer.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import './SocialLogin.css'
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    let errorElement;
    if (error1 || error2) {
        errorElement = <p className='text-danger'>Error: {error1?.message}{error2?.message}</p>
    }
    if (user1 || user2) {
        console.log(user1);
        navigate(from, { replace: true })
    }
    if (loading1 || loading2) {

    }
    return (
        <div>
            <div className="container">
                <div className='row d-flex justify-content-center'>
                    <div className="col-12 col-lg-8 d-flex justify-content-center">
                        <div className='w-75 p-5 border border-secondery rounded' >
                            {errorElement}
                            <button onClick={() => signInWithGoogle()} className='d-block w-100 border-0 p-2'>
                                <img src={google} alt="" />   Google</button> <br />
                            <button onClick={() => signInWithGithub()} className='d-block w-100 border-0 p-2'>
                                <img src={github} alt="" />  Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;