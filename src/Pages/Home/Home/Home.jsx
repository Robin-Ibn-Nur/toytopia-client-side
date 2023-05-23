import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Discount from '../Discount/Discount';
import { usePageTitle } from '../../../CustomHook/usePageTitle';
import TreandySection from '../TreandySection/TreandySection';
import Marquee from "react-fast-marquee";
import FaqSection from '../FaqSection/FaqSection';
import GptLoader from '../../GptLoader/GptLoader';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Home = () => {

    usePageTitle("ToyToPia")
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <GptLoader></GptLoader>
    }
    return (
        <div>
            <div className='container mx-auto bg-white my-5'>
                <Banner></Banner>
            </div>
            <div>
                <ShopByCategory></ShopByCategory>
            </div>
            <div>
                <Gallery></Gallery>
            </div>
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4">Special Discount</h2>
                <Marquee gradient autoFill direction='right'>
                    <Discount></Discount>
                </Marquee>
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
            <div>
                <FaqSection></FaqSection>
            </div>
        </div>
    );
};

export default Home;