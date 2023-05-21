import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const UpdateToyInfo = () => {
    const data = useLoaderData();

    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedToy = {
            price: form.price.value,
            quantity: form.quantity.value,
            description: form.description.value,
        };
        console.log(updatedToy);
        fetch(`http://localhost:5000/toys/${data?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedToy),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Toy Updated:', data);
                if (data.modifiedCount > 0) {
                    swal({
                        title: "Good job!",
                        text: "Your Product is Updated!",
                        icon: "success",
                        button: "Aww yiss!",
                    });
                }
                // Reset the form fields
                form.reset();
            })
            .catch((error) => {
                console.error('Error updating toy:', error);
                toast.success("Something is Fishy", { autoClose: 500 })
            });
    };
    return (
        <div className='my-5 container mx-auto'>
            <h2 className="text-lg font-semibold mb-4 text-center my-5">Product Name: {data?.toyName}</h2>
            <form className="bg-white rounded-lg shadow-md p-4"
                onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="price"
                        className="block text-gray-700 mb-2">
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder={data?.price}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 mb-2">
                        Available Quantity:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder={data?.quantity}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 mb-2">
                        Detail Description:
                    </label>
                    <textarea
                        id="description"
                        className="w-full h-[150px] border border-gray-300 rounded px-3 py-2"
                        placeholder={data?.description}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                >
                    Update Toy
                </button>
            </form>
        </div>
    );
};

export default UpdateToyInfo;