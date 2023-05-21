import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        // <div className='text-center text-5xl my-5'>this is banner</div>
        <section className="relative overflow-hidden my-5">
            <div className='text-center text-5xl my-5'>this is banner</div>
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="https://img.freepik.com/free-vector/kids-toys-design_24908-56648.jpg?w=740&t=st=1684491613~exp=1684492213~hmac=383c0bb4053245b8e202b3a7a0c3f6386287c09413ae799a48506ca01d8edfce"
                    alt="Background"
                />
            </div>
            <div className="relative h-screen flex items-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  leading-tight">
                        <span className="text-pink-500">Welcome</span> to our Toy Shop
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  mt-4">
                        Discover endless fun and imagination with our wide selection of toys.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;