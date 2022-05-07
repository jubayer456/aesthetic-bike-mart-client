import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageItem from '../ManageItem/ManageItem';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ManageItems = () => {
    const [inventory, setInventory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://powerful-wave-79401.herokuapp.com/manageInventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventory])
    return (
        <div >
            <PageTitle title='ManageInventory'></PageTitle>
            <h1 className='text-success text-center'>All Items</h1>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
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

            <button onClick={() => navigate('/addItem')} className='btn btn-success m-3 d-block mx-auto'>Add Items</button>

        </div>
    );
};

export default ManageItems;