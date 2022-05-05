import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [error1, setError1] = useState([]);
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || '/';
    let errorElement;
    if (error || error1) {
        errorElement = <p className='text-danger'>{error1} {error?.message}</p>
    }
    const handelRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password1 = event.target.password1.value;
        const name = event.target.name.value;
        const password2 = event.target.password2.value;
        console.log(name, email, password1, password2);
        if (password1 === password2) {
            if (password1 >= 6) {
                createUserWithEmailAndPassword(email, password2);
                setError1('');
            }
        }
        else {
            setError1('password did not match');
        }
        if (user) {
            console.log(user);
            navigate(from, { replace: true })
        }
    }
    return (
        < div className='container' >
            <h2 className='text-danger text-center p-5'> Please Register here</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-12 col-lg-8 d-flex justify-content-center">
                    <form onSubmit={handelRegister} className='w-75 p-5 border border-secondery rounded' >
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
                </div>
            </div>
            <p className='text-center p-4 fs-4'>Already have An Account <span><Link to='/login'>Login Now</Link> </span></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;