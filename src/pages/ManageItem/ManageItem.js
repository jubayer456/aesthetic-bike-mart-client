import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const ManageItem = ({ inventory }) => {
    const { _id, price, name, quantity, suplier } = inventory;
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{suplier}</td>
            <td><button className='border-0 rounded-circle'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>  </button></td>
        </tr>
    );
};

export default ManageItem;