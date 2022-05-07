import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { toast } from 'react-toastify';

const ManageItem = ({ inventory }) => {
    const { _id, price, name, quantity, suplier, email } = inventory;

    const handelRemove = id => {
        const confirm = window.confirm('Are you sure to delete this item?');
        if (confirm) {
            fetch(`http://localhost:5000/manageInventory/${_id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    toast('Delete The Item');
                })
        }

    }
    return (
        <tr >
            <td>{email}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{suplier}</td>
            <td><button onClick={() => handelRemove(_id)} className='border-0 rounded-circle'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>  </button></td>
        </tr>
    );
};

export default ManageItem;