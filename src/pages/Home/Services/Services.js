import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    const handelManageInventory = (event) => {
        navigate('/manageInventory');
    }
    useEffect(() => {
        fetch('https://powerful-wave-79401.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center p-4'>Top Selling Bikes</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <button onClick={handelManageInventory} className='btn btn-success d-block mx-auto m-3'>Manage Inventory</button>
        </div>
    );
};

export default Services;