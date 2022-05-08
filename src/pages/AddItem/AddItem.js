import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
const AddItem = () => {
    const [user] = useAuthState(auth);
    const handelAddItem = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const suplier = event.target.suplier.value;
        const img = event.target.imgUrl.value;
        const description = event.target.description.value;
        const newItem = { email, name, price, quantity, suplier, img, description };
        fetch('https://powerful-wave-79401.herokuapp.com/manageInventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('successfull', data);
                toast('new Item Added');
            })
    }
    return (
        < div className='container mb-5' >
            <PageTitle title='AddItem'></PageTitle>
            <h2 className='text-danger text-center p-5'>Add New Item</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-12 col-lg-8 d-flex justify-content-center">
                    <div className='w-75 p-5 border border-secondery rounded' >
                        <form onSubmit={handelAddItem}>
                            <div className="form-floating mb-3">
                                <input name='email' type="text" className="form-control" id="floatingInput7" value={user?.email} placeholder="Your Email" required disabled />
                                <label htmlFor="floatingInput7">Item Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='name' type="text" className="form-control" id="floatingInput1" placeholder="Item Name" required />
                                <label htmlFor="floatingInput1">Item Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='price' type="text" className="form-control" id="floatingInput2" placeholder="Price" required />
                                <label htmlFor="floatingInput2">Price</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='quantity' type="text" className="form-control" id="floatingInput3" placeholder="quantity" required />
                                <label htmlFor="floatingInput3">Quantity</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='suplier' type="text" className="form-control" id="floatingInput4" placeholder="Suplier" required />
                                <label htmlFor="floatingInput4">Suplier</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='imgUrl' type="text" className="form-control" id="floatingInput5" placeholder="img Url" required />
                                <label htmlFor="floatingInput5">Img Url</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input name='description' type="text" className="form-control" id="floatingInput6" placeholder="Description" required />
                                <label htmlFor="floatingInput6">Description</label>
                            </div>
                            <button type='submit' className='mt-4 bg bg-danger border-0 rounded py-2 px-4 text-light d-block mx-auto '>Add New Item</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;