import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faPlane, faHandPeace, faAward } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Benifit = () => {
    return (
        <div className='container'>
            <h1 className='text-center p-4 m-2'>Why You Choose US?</h1>
            <div className="row g-2">
                <div className="col-12 col-lg-3 col-md-4 text-center">
                    <FontAwesomeIcon className='fs-1 pb-2' icon={faMoneyCheck}></FontAwesomeIcon>
                    <h4>Ultimate flexibility</h4>
                    <p>You're in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                </div>
                <div className="col-12 col-lg-3 col-md-4 text-center">
                    <FontAwesomeIcon className='fs-1 pb-2' icon={faPlane}></FontAwesomeIcon>
                    <h4>Memorable experiences</h4>
                    <p>Get the best price in the town and also our professional support will change your experience.</p>
                </div>
                <div className="col-12 col-lg-3 col-md-4 text-center">
                    <FontAwesomeIcon className='fs-1 pb-2' icon={faHandPeace}></FontAwesomeIcon>
                    <h4>Quality at our core</h4>
                    <p>High quality standards. Millions of reviews. More than 50 showrooms in Bangladesh A BikeSelling Shop</p>
                </div>
                <div className="col-12 col-lg-3 col-md-4 text-center">
                    <FontAwesomeIcon className='fs-1 pb-2' icon={faAward}></FontAwesomeIcon>
                    <h4>Award-winning support</h4>
                    <p>New price? New plan? No problem. We're here to help, 24/7.</p>
                </div>
            </div>
        </div>
    );
};

export default Benifit;