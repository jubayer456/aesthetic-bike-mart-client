import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ManageItem from '../ManageItem/ManageItem';
import PageTitle from '../Shared/PageTitle/PageTitle';
const MyItems = () => {
    const [inventory, setInventory] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const getInventory = async () => {
            const url = `https://powerful-wave-79401.herokuapp.com/manageInventory?email=${user.email}`;
            const { data } = await axios.get(url);
            setInventory(data);
        }
        getInventory();
    }, [user, inventory]);
    return (
        <div>
            <PageTitle title='MyItem'></PageTitle>
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