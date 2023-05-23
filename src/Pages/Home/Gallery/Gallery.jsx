import React, { useEffect } from 'react';
import "./Gallery.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    }, []);



    return (
        <div className="gallery-container mx-auto">

            <h1 className="heading">Enchanting Adventures: <span>"A Delightful Journey through Kids Toy Image Gallery"</span></h1>

            <div className="gallery">

                <div className="gallery-item" data-aos="fade-left">
                    <img className="gallery-image" src="https://img.freepik.com/free-photo/little-girl-playing-abacus-counting-practice_53876-137651.jpg?w=740&t=st=1684852152~exp=1684852752~hmac=117e7076865fef4523184bbb994432f40076ed9376611ec7650b33c8b2bf759c" alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
                </div>

                <div className="gallery-item" data-aos="fade-up">
                    <img className="gallery-image" src="https://img.freepik.com/free-photo/multiple-colored-letters_93675-129798.jpg?w=740&t=st=1684852254~exp=1684852854~hmac=7e949affceb2ca7cf9c3f837171411bfb2b82d45612de099ef1f6d529a2e39a6" />
                </div>

                <div className="gallery-item" data-aos="fade-right">
                    <img className="gallery-image" src="https://img.freepik.com/free-photo/cute-baby-with-toys_624325-3269.jpg?w=740&t=st=1684852308~exp=1684852908~hmac=d5e130d25ff62a419ebed11039edd7d3df93cbc5d3e577fc73d664d852d3eea5" alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
                </div>

                <div className="gallery-item" data-aos="fade-left">
                    <img className="gallery-image" src="https://img.freepik.com/free-photo/examining-molecular-model_1098-19572.jpg?w=740&t=st=1684852430~exp=1684853030~hmac=70bc938d772d176c0c2e5d943b43e2e255f833e743d18b74968efc506863f62f" alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
                </div>

                <div className="gallery-item" data-aos="fade-down">
                    <img className="gallery-image" src="https://img.freepik.com/free-photo/colorful-school-supplies-shopping-basket-gray-background-with-copy-text-space-stack-books-with-colorful-covers-concept-returning-school-new-academic-year_73683-2219.jpg?w=826&t=st=1684852477~exp=1684853077~hmac=9d56ae7d3a090e8ac945e3672d9478d4dd9ae5f9ebb3e06a3737e7011f2244e4" alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
                </div>

                <div className="gallery-item" data-aos="fade-left">
                    <img className="gallery-image" src="https://img.freepik.com/free-photo/wooden-blocks-wooden-table_93675-131859.jpg?w=740&t=st=1684852660~exp=1684853260~hmac=89c0aadbf7e61ffa16eede743de23efc0b615fe5215124166888d2e1f52c93ca" alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
                </div>

            </div>

        </div>
    );
};

export default Gallery;