import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageItem from '../ManageItem/ManageItem';
const MyItems = () => {
    const [inventory, setInventory] = useState([]);
    const [user] = useAuthState(auth);
    /* useEffect(() => {
        fetch(`http://localhost:5000/manageInventory?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInventory(data);
            })
    }, [user, inventory]); */
    useEffect(() => {
        const getOrder = async () => {
            const url = `http://localhost:5000/manageInventory?email=${user.email}`;
            const { data } = await axios.get(url);
            console.log(data);
            setInventory(data);
        }
        getOrder();
    }, [user, inventory]);
    return (
        <div>
            <h1 className='text-success text-center'>My Items</h1>
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
        </div>
    );
};

export default MyItems;