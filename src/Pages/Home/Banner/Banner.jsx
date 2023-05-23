import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
    const banners = [
        {
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB10OtkKFXXXXXkXFXXq6xXFXXX0%2FMontessori-materials-educational-Toys-Dominoes-Children-Preschool-Teaching-Counting-Stacking-Board-Wooden-Math-Toy-W123.jpg&f=1&nofb=1&ipt=6cb0bf4060a3725cc42aadb513f4a44bca8ac95f7496add9e00161bf35d949b3&ipo=images',
            title: "Adventure Awaits",
            description: "Embark on exciting journeys with our adventurous toys and games.",
        },
        {
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F313db21b-9553-4068-a86e-afecef887f69_1.d8ee8bf80cd0c9806fe4217837bc2535.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1&ipt=6ec8b32448587797c3948b5b2434bc6776f65f7cb79fd8cc40da5ecda3a806ed&ipo=images',
            title: "Creativity Unleashed",
            description: "Inspire imagination and unleash creativity with our innovative toys and crafts.",
        },
        {
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FqZ3OVi-gAMo%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=ef3246df96b35fb5662b65c3eeaac49cb63eae41fd3320a5185ecd459ac90834&ipo=images',
            title: "Learning Made Fun",
            description: "Discover educational toys and activities that make learning enjoyable and engaging.",

        },
    ];
    return (
        <div className="container mx-auto py-10">
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <h2 className="text-2xl font-bold mb-2">{banner.title}</h2>
                        <div className="bg-gray-200 rounded-lg p-4">
                            <img src={banner.image} alt={banner.title} className="w-full h-screen mb-4" />
                            <p>{banner.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;