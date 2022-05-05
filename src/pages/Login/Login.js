import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';

    const handelLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
        if (user) {
            console.log(user);
            navigate(from, { replace: true })
        }
    }
    return (
        < div className='container mb-5' >
            <h2 className='text-danger text-center p-5'> Please Login here</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-12 col-lg-8 d-flex justify-content-center">
                    <form onSubmit={handelLogin} className='w-75 p-5 border border-secondery rounded' >
                        <div className="form-floating mb-3">
                            <input name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button type='submit' className='mt-4 bg bg-danger border-0 rounded py-2 px-4 text-light d-block mx-auto '>Login</button>
                    </form>
                </div>
            </div>
            <p className='text-center p-4 fs-4'>Don't have An Account <span><Link to='/register'>Register Now</Link> </span></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Login;