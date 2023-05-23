import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Discount from '../Discount/Discount';
import { usePageTitle } from '../../../CustomHook/usePageTitle';
import TreandySection from '../TreandySection/TreandySection';
import Marquee from "react-fast-marquee";


const Home = () => {

    usePageTitle("ToyToPia")
    return (
        <div>
            <div className='container mx-auto bg-white'>
                <Banner></Banner>
            </div>
            <div>
                <Gallery></Gallery>
            </div>
            <div>
                <ShopByCategory></ShopByCategory>
            </div>
            <div>
                <Discount></Discount>
            </div>
            <div>
                <div className="container mx-auto py-8">
                    <h2 className="text-3xl font-bold mb-6">We Love Treands</h2>
                    <h3 className='text-xl mb-5'>Featured Products</h3>
                <Marquee pauseOnHover speed={100} gradient>
                    <TreandySection></TreandySection>
                </Marquee>
                </div>
            </div>
            <div className='text-4xl text-center'>comming soon....</div>
        </div>
    );
};

export default Home;