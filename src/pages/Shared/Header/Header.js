import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className='fs-4' to='/home'>Aesthetic bike mart</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            {user ? <div><span className='text-light' >{user?.displayName}</span> <button onClick={() => signOut(auth)} >SignOut</button></div> :
                                <Link to='/login'>Login</Link>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;