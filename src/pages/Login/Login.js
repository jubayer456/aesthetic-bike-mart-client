import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const handelLogin = event => {
        event.preventDefault();
    }
    return (
        < div className='container' >
            <h2 className='text-danger text-center p-5'> Please Login here</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-12 col-lg-8 d-flex justify-content-center">
                    <form onSubmit={handelLogin} className='w-75 p-5 border border-secondery rounded' >
                        <div className="form-floating mb-3">
                            <input name='email' type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <button type='submit' className='mt-4 bg bg-danger border-0 rounded py-2 px-4 text-light d-block mx-auto '>Login</button>
                    </form>
                </div>
            </div>
            <p className='text-center p-4 fs-4'>Don't have An Account <span><Link to='/register'>Register Now</Link> </span></p>
        </div >
    );
};

export default Login;