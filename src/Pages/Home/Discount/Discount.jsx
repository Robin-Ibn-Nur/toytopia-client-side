import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Discount = () => {

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    }, []);

    const discounts = [
        {
            title: 'Summer Sale',
            description: 'Get up to 50% off on selected items. Limited time offer!',
            image: 'https://img.freepik.com/free-vector/tropical-end-summer-sales-background_52683-44530.jpg?w=740&t=st=1684838392~exp=1684838992~hmac=72fc862e4874de0b5b8f3e6939544292655c61c8e0f5bace1f2f8844aee9e053',
        },
        {
            title: 'Back to School Discount',
            description: 'Enjoy 20% off on all school supplies. Start the new year with savings!',
            image: 'https://img.freepik.com/free-vector/back-school-sales_23-2148607428.jpg?w=740&t=st=1684838616~exp=1684839216~hmac=e7739c5f727c8e2f5f293e3fb62d163ba37714e3088487e7619cd444ed1dcef6',
        },
        {
            title: 'Holiday Special',
            description: 'Celebrate the holidays with our exclusive discounts and deals.',
            image: 'https://img.freepik.com/free-vector/holiday-sale-with-candles-poster-design_1262-17677.jpg?w=740&t=st=1684838753~exp=1684839353~hmac=391c6535d58d7075a3d8e8f0a0510d236657b51ea3bcbba30d0042408ec54400',
        },
    ];
    return (
        <div data-aos="fade-down">
            
            <div className="flex gap-5 mr-5">
                {discounts.map((discount, index) => (
                    <div key={index} className="bg-white rounded shadow-xl p-4">
                        <img className="w-full h-60 mb-4" src={discount.image} alt={discount.title} />
                        <h3 className="text-xl font-semibold mb-2">{discount.title}</h3>
                        <p>{discount.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discount;