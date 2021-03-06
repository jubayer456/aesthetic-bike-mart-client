import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Review.css'
const Review = () => {
    return (
        <div className='container'>
            <h1 className='text-center p-5 text-info'>Review From The Customer</h1>
            <div className="row row-cols-1 row-cols-lg-4 g-4 mb-4">
                <div className="col">
                    <div className="card h-100 text-center">
                        <div className="card-header">Review</div>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Jubayer Hedayet</h5>
                            <p className="card-text text-info">Price was very much resonable compared to others</p>
                            <div>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <div className="card-header">Review</div>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Omayer hassan</h5>
                            <p className="card-text text-info">Best price in the town</p>
                            <div>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <div className="card-header">Review</div>
                        <div className="card-body">
                            <h5 className="card-title text-danger">King Khaled</h5>
                            <p className="card-text text-info">Need to improve the serive.</p>
                            <div>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='emptyStar'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='emptyStar'></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 text-center">
                        <div className="card-header">Review</div>
                        <div className="card-body">
                            <h5 className="card-title text-danger">Talha Ibrahim</h5>
                            <p className="card-text text-info">Average Service</p>
                            <div>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='star'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='emptyStar'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='emptyStar'></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar} className='emptyStar'></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;