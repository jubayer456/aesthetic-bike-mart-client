import React from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { serviceId } = useParams('');
    return (
        <div>
            <h1 className='text-center'>Order:{serviceId}</h1>
        </div>
    );
};

export default Order;