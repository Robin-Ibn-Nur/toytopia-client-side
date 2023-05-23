import React from 'react';

const Cards = ({ d }) => {
    const { image, title, description } = d;
    return (
        <div className="card lg:card-side bg-white rounded-lg shadow-md p-6">
            <figure><img src={image} className='w-40' alt="images" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Cards;