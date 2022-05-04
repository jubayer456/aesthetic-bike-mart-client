import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
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
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        // <nav className="navbar navbar-expand-lg navbar-light navClass p-3">
        //     <div className="container">
        //         <Link to='/' className='fs-4'>Aesthetic travel agency</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link to='/home'>Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a as={Link} href="home#services">Services</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/blogs'>Blogs</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/checkout'>Checkout</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/about'>About Me</Link>
        //                 </li>

        //             </ul>

        //         </div>
        //     </div>
        // </nav>
    );
};

export default Header;