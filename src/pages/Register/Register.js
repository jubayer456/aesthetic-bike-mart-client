import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [error1, setError1] = useState([]);
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>{error1} {error?.message}</p>
    }
    if (loading || updating) {
        return <Loading />
    }
    if (user) {
        console.log(user);
        navigate('/home');
    }
    const handelRegister = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password1 = event.target.password1.value;
        const name = event.target.name.value;
        const password2 = event.target.password2.value;
        console.log(name, email, password1, password2);
        if (password1 === password2) {
            if (password1 >= 6) {
                await createUserWithEmailAndPassword(email, password2);
                await updateProfile({
                    displayName: name
                })
                toast('Successfully Registered');
                setError1('');
            }
        }
        else {
            setError1('password did not match');
        }
    }
    return (
        < div className='container' >
            <PageTitle title='Register'></PageTitle>
            <h2 className='text-danger text-center p-5'> Please Register here</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-12 col-lg-8 d-flex justify-content-center">
                    <div className='w-75 p-5 border border-secondery rounded' >
                        <form onSubmit={handelRegister} >
                            <div className="form-floating mb-3">
                                <input name='name' type="text" className="form-control" id="floatingInput1" placeholder="Your Name" required />
                                <label htmlFor="floatingInput1">Your Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='email' type="email" className="form-control" id="floatingInput2" placeholder="name@example.com" required />
                                <label htmlFor="floatingInput2">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='password1' type="password" className="form-control" id="floatingPassword1" placeholder="Password" required />
                                <label htmlFor="floatingPassword1">Password</label>
                            </div>
                            <div className="form-floating">
                                <input name='password2' type="password" className="form-control" id="floatingPassword2" placeholder="Password" />
                                <label htmlFor="floatingPassword2">Re-Password</label>
                            </div>
                            {errorElement}
                            <button type='submit' className='mt-4 bg bg-danger border-0 rounded py-2 px-4 text-light d-block mx-auto '>Register</button>
                        </form>
                        <p className='text-center p-4 fs-5'>Already have An Account <span><Link to='/login'>Login Now</Link> </span></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Register;