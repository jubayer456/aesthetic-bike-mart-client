import axios from 'axios';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const [signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';
    let errorElement;
    if (loading || sending) {
        return <Loading />;
    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }
    const handelLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        // const { data } = await axios.post('http://localhost:5000/login', { email });
        // localStorage.setItem('accessToken', data.accessToken);
        // navigate(from, { replace: true })
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('send email');
        }
        else {
            toast('please enter a email');
        }
    }
    return (
        < div className='container mb-5' >
            <PageTitle title='Login'></PageTitle>
            <h2 className='text-danger text-center p-5'> Please Login here</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-12 col-lg-8 d-flex justify-content-center">
                    <div className='w-75 p-5 border border-secondery rounded' >
                        <form onSubmit={handelLogin} >
                            <div className="form-floating mb-3">
                                <input ref={emailRef} name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating">
                                <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            {errorElement}
                            <button type='submit' className='mt-4 btn btn-danger border-0 rounded py-2 px-4 text-light d-block mx-auto '>Login</button>
                        </form>
                        <p className='fs-6'>Forget Password ? <span onClick={resetPassword} className='btn btn-link '>Reset Password</span></p>
                        <p className='pb-4 fs-6'>Don't have An Account <span><Link to='/register'>Register Now</Link> </span></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;