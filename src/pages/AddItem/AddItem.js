import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/manageInventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log('successfull', data);
                toast('new Item Added');
            })

    }
    return (
        < div className='container' >
            <h2 className='text-danger text-center p-5'>Add New Item</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-12 col-lg-8 d-flex justify-content-center">
                    <div className='w-75 p-5 border border-secondery rounded' >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-2 d-block w-100' placeholder='name' {...register("name")} />
                            <input className='mb-2 d-block  w-100' placeholder='price'{...register("price")} />
                            <input className='mb-2 d-block w-100' placeholder='quantity'{...register("quantity")} />
                            <input className='mb-2 d-block w-100' placeholder='suplier'{...register("suplier")} />
                            <input className='mb-2 d-block w-100' placeholder='img Url'{...register("imgUrl")} />
                            <input className='mb-2 d-block w-100' placeholder='description'{...register("description")} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;