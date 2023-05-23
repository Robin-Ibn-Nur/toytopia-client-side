import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    const data = useLoaderData()
    const {
        pictureUrl,
        toyName,
        sellerName,
        sellerEmail,
        price,
        rating,
        quantity,
        description
    } = data;
    return (
        <div className="card lg:card-side font-serif bg-base-100 shadow-xl my-5 container mx-auto bg-white h-fit">
            <figure><img src={pictureUrl} alt={toyName} className='h-4/5 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold my-2 sm:text-3xl">{toyName}</h2>
                <div className='my-5'>
                    <p className="text-lg">Seller Name: {sellerName}</p>
                    <p className="text-lg">Seller Email: {sellerEmail}</p>
                    <p className="text-lg">Price: ${price}</p>
                    <p className="text-lg">Rating: {rating}</p>
                    <p className="text-lg">Available Quantity: {quantity} pcs</p>
                </div>
                <p className="text-lg"><span className='font-bold'>Description:</span> {description}</p>
            </div>
        </div>

    );
};

export default SingleToyDetails;