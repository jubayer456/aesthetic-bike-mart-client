import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, _id, price, description, name } = service;
    const navigate = useNavigate();
    const nevigateToOrder = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top h-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>price: {price}</h6>
                    <p className="card-text">{description}</p>
                </div>
                <div className='p-3'>
                    <button onClick={() => nevigateToOrder(_id)} className='btn btn-primary'>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;