import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [inventory, setInventory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageInventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
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

        </div>
    );
};

export default ManageItems;