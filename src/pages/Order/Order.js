import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = () => {
    const { serviceId } = useParams('');
    const [order, setOrder] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [order]);

    const handelDelivered = event => {
        const quantity = order.quantity - 1;
        if (quantity > -1) {
            const updateUser = { quantity };
            fetch(`http://localhost:5000/service/${serviceId}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateUser),
            })
                .then(res => res.json())
                .then(data => {
                    console.log("success", data);
                    toast('successfully update');
                })
        }
    }

    const handelQunatity = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const updateUser = { quantity };
        fetch(`http://localhost:5000/service/${serviceId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data);
                toast('successfully update');
            })

    }
    const handelManageInventory = (event) => {
        navigate('/manageInventory');
    }
    return (
        <div className='container'>
            <div className="row d-flex justify-content-center g-4">
                <div className="col-lg-8 d-flex justify-content-center">
                    <div className='w-75 text-center pb-4'>
                        <img src={order.img} className='img-fluid' style={{ width: "500px", height: "400px" }} alt="" />
                        <h3 className='text-success'>Id: {order._id}</h3>
                        <h3 className='text-success'>Price: {order.price}</h3>
                        <h3 className='text-success'>Quantity: {order.quantity}</h3>
                        <h3 className='text-success'>Supplier Name: {order.suplier}</h3>
                        <p>{order.description}</p>
                        <button onClick={handelDelivered} className='btn btn-primary'>delivered</button>
                        <h2 className='text-danger py-3'>restock the items</h2>
                        <form onSubmit={handelQunatity}>
                            <div className="form-floating mb-3">
                                <input name='quantity' type="text" className="form-control" id="floatingInput1" placeholder="Your Name" required />
                                <label htmlFor="floatingInput1">Re Stock Quantity</label>
                                <button type='submit' className='mt-4 bg bg-danger border-0 rounded py-2 px-4 text-light d-block mx-auto '>Register</button>
                            </div>
                        </form>
                        <button onClick={handelManageInventory} className='btn btn-success'>Manage Inventory</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;