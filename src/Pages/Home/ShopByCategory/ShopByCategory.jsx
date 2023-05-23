import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopByCategory = () => {
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("Math Toys");
    const nevigate = useNavigate();

    const handleDetails = id => {
        nevigate(`/toy/${id}`)
    }

    useEffect(() => {

        fetch(`https://toytopia-server-side.vercel.app/allToysSubCategory/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    }, []);

    return (

        <div className='container mx-auto'>
            <div className='text-center my-2 font-bold'>
                <div
                    onClick={() => handleTabClick("Math Toys")}
                    className={`tab text-xl${activeTab === "Math Toys" ? "  text-black underline" : ""
                        }`}
                >
                    Math Toys
                </div>
                <div
                    onClick={() => handleTabClick("Language Toys")}
                    className={`tab text-xl${activeTab === "Language Toys" ? "  text-black underline" : ""
                        }`}
                >
                    Language Toys
                </div>
                <div
                    onClick={() => handleTabClick("Science Toys")}
                    className={`tab text-xl${activeTab === "Science Toys" ? "  text-black underline" : ""
                        }`}
                >
                    Science Toys
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {toys.map(toy => <div key={toy._id} data-aos="fade-up" className="container mx-auto py-10">

                    <div className="bg-white rounded shadow-md p-4">
                        <img className="w-full h-96 mb-4" src={toy?.pictureUrl} alt="" />
                        <h3 className="text-lg font-semibold mb-2">{toy.toyName}</h3>
                        <div>
                            <p>Price: {toy?.price}</p>
                            <p>Ratings: {toy?.rating}</p>
                        </div>
                        <p><span className='font-bold'>Description about </span>{toy.description.slice(0, 120)}...</p>
                        <button onClick={() => handleDetails(toy._id)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                            View Details
                        </button>
                    </div>
                </div>)}
            </div>

        </div>




    );
};

export default ShopByCategory;