import React from 'react';
import Cards from './Cards';

const TreandySection = () => {

    const data = [
        {
            title: "New Arrivals",
            description: "Discover the latest toys added to our collection",
            image: "https://img.freepik.com/free-vector/boy-playing-with-abacus_1308-26117.jpg?w=826&t=st=1684833243~exp=1684833843~hmac=ee373b18d6ba818b686b5305a545c5cc3616e795de1e6797e2a0fbbbc73c6766",
        },
        {
            title: "Featured",
            description: "Explore our handpicked selection of featured toys.",
            image: "https://img.freepik.com/free-vector/features-overview-concept-illustration_114360-1500.jpg?w=740&t=st=1684833150~exp=1684833750~hmac=77edcc98fc5637dcfac24602e9856c589788c77d7c02b3445ec81ad83d341d24",
        },
        {
            title: "Trends",
            description: "Stay up-to-date with the hottest toy trends of the season.",
            image: "https://img.freepik.com/free-vector/young-girl-fixing-robot_1308-80979.jpg?w=740&t=st=1684832051~exp=1684832651~hmac=84e74d8ec808a583a859cf7bf99c2956290ee721cbcf57bc7eba6d7a2205844f",
        },
        {
            title: "Best Sellers",
            description: "Check out our top-selling toys loved by kids and parents.",
            image: "https://img.freepik.com/free-vector/early-learning-app-abstract-concept-illustration-preschool-application-early-education-platform-child-learning-routine-studying-software-kid-development-mobile-app_335657-3504.jpg?w=740&t=st=1684833320~exp=1684833920~hmac=ac536e2fa844ab41d2af524b0cfd410f4d0a4c8c314a8a2e81e862583f3afae3",
        },
    ];



    return (
        <div className='flex gap-5 mr-5'>
            {
                data?.map((d, index) => <Cards
                    key={index}
                    d={d}
                ></Cards>)
            }
        </div>
    );
};

export default TreandySection;