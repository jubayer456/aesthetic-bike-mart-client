import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [inventory, setInventory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/manageInventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventory])
    return (
        <div>
            <h1 className='text-success text-center'>All Items</h1>

            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Supplier</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        inventory.map(inventory => <ManageItem key={inventory._id}
                            inventory={inventory}
                        ></ManageItem>)
                    }

                </tbody>
            </table>

            <button onClick={() => navigate('/addItem')} className='btn btn-success m-3 d-block mx-auto'>Manage Inventory</button>

        </div>
    );
};

export default ManageItems;