import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className="container text-light">
                <div className="row text-center d-flex align-items-center py-3">
                    <div className="col-lg-4">
                        <h4>Aesthetic bike mart</h4>
                        <p>Mobile: 01601006802</p>
                    </div>
                    <div className="col-lg-4">
                        <h3>Head Office</h3>
                        <p>Mirpur-14, Dhaka, Bangladesh</p>
                        <h6>Phone : 02-257778543, 02-252228543, 02-254448543</h6>
                        <p>Talhajubayer678@gmail.com</p>
                    </div>
                    <div className="col-lg-4">
                        <h4>Social Media Link</h4>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;