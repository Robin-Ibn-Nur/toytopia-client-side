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
            image: 'https://img.freepik.com/free-photo/creative-collage-mars-planet-with-astronauts_23-2149488966.jpg?w=740&t=st=1684852939~exp=1684853539~hmac=c6c64dea87670a744f377136a246dd80ef8adb44b4b251ad31e6d4f2c3b3f24a',
            title: "Adventure Awaits",
            description: "Embark on exciting journeys with our adventurous toys and games.",
        },
        {
            image: 'https://img.freepik.com/free-photo/ideas-idea-vision-design-plan-objective-mission-concept_53876-167112.jpg?w=826&t=st=1684852792~exp=1684853392~hmac=75e723fd53b82eb1ac6b8c7d60f69e3288a93bfef9d4355b87d389e8cea9d39a',
            title: "Creativity Unleashed",
            description: "Inspire imagination and unleash creativity with our innovative toys and crafts.",
        },
        {
            image: 'https://img.freepik.com/free-photo/back-school-concept-with-alphabet-letters-wooden-cubes-paper-high-angle-view_176474-7559.jpg?w=740&t=st=1684852710~exp=1684853310~hmac=31087df611769bd38a6a3fc72c85aa57b9d60cceadd8a5729cc11126fbed1416',
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