import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Discount from '../Discount/Discount';
import { usePageTitle } from '../../../CustomHook/usePageTitle';


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
            <div className='text-4xl text-center'>comming soon....</div>
            <div className='text-4xl text-center'>comming soon....</div>
        </div>
    );
};

export default Home;