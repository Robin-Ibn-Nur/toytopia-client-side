import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const ShopByCategory = () => {
    const { loading, user } = useContext(AuthContext)
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("Math Toys");

    const nevigate = useNavigate();

    const handleDetails = id => {
        console.log(id);
        nevigate(`/toy/${id}`)
    }

    useEffect(() => {

        fetch(`http://localhost:5000/allToysSubCategory/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data)
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (

        <div className='container mx-auto'>
            <div className='text-center font-bold'>
                <div
                    onClick={() => handleTabClick("Math Toys")}
                    className={`tab${activeTab === "Math Toys" ? "  text-white" : ""
                        }`}
                >
                    Math Toys
                </div>
                <div
                    onClick={() => handleTabClick("Language Toys")}
                    className={`tab${activeTab === "Language Toys" ? "  text-white" : ""
                        }`}
                >
                    Language Toys
                </div>
                <div
                    onClick={() => handleTabClick("Science Toys")}
                    className={`tab${activeTab === "Science Toys" ? "  text-white" : ""
                        }`}
                >
                    Science Toys
                </div>
            </div>
            {
                toys.map(toy => <div key={toy._id} className="card my-5 lg:card-side bg-base-100 shadow-xl">
                    <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <button onClick={() => handleDetails(toy._id)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                            View Details
                        </button>
                        
                    </div>
                </div>)
            }
        </div>




    );
};

export default ShopByCategory;
{/* <button onClick={() => handleDetails(filteredToy._id)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                                              View Details
                                         </button> */}