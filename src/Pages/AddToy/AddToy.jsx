import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { usePageTitle } from '../../CustomHook/usePageTitle';

const AddToy = () => {

    usePageTitle("ToyToPiA")
    const { user } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target; // Get a reference to the form element
        const price = parseInt(form.elements.price.value,)
        const formValues = {
            pictureUrl: form.elements.pictureUrl.value,
            toyName: form.elements.toyName.value,
            sellerName: form.elements.sellerName.value,
            sellerEmail: form.elements.sellerEmail.value,
            subcategory: form.elements.subcategory.value,
            price: parseInt(form.elements.price.value,),
            rating: form.elements.rating.value,
            quantity: form.elements.quantity.value,
            description: form.elements.description.value,
        };
        console.log(formValues, price);

        fetch("http://localhost:5000/toys", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    form.reset(); // Reset the form
                    toast.success(`Thank You Mr. ${user?.displayName}`, { autoClose: 500 });
                }
            });
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Add a Toy</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="pictureUrl">
                        Picture URL of the toy
                    </label>
                    <input
                        type="text"
                        id="pictureUrl"
                        className="w-full p-2 border border-gray-300 rounded"
                        name='PhotoUrl'
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="name">
                        Toy Name
                    </label>
                    <input
                        type="text"
                        id="toyName"
                        className="w-full p-2 border border-gray-300 rounded"
                        name='toyName'
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="sellerName">
                        Seller Name
                    </label>
                    <input
                        type="text"
                        id="sellerName"
                        className="w-full p-2 border border-gray-300 rounded"
                        defaultValue={user?.displayName}
                        readOnly
                        name='sellerName'
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="sellerEmail">
                        Seller Email
                    </label>
                    <input
                        type="email"
                        id="sellerEmail"
                        className="w-full p-2 border border-gray-300 rounded"
                        defaultValue={user?.email}
                        readOnly
                        name='email'
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="subcategory">
                        Sub-category
                    </label>
                    <select
                        id="subcategory"
                        className="w-full p-2 border border-gray-300 rounded"
                        name='subcategory'
                    >
                        <option value="">Select a sub-category</option>
                        <option value="Math Toys">Math Toys</option>
                        <option value="Language Toys">Language Toys</option>
                        <option value="Science Toys">Science Toys</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        className="w-full p-2 border border-gray-300 rounded"
                        name='price'
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="rating">
                        Rating
                    </label>
                    <input
                        type="number"
                        id="rating"
                        className="w-full p-2 border border-gray-300 rounded"
                        name='rating'
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="quantity">
                        Available Quantity
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        className="w-full p-2 border border-gray-300 rounded"
                        name='quantity'
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-bold" htmlFor="description">
                        Detail Description
                    </label>
                    <textarea
                        id="description"
                        className="w-full p-2 border border-gray-300 rounded"
                        name='description'
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddToy;