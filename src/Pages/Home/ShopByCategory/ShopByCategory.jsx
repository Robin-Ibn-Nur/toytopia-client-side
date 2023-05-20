import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [toys, setToys] = useState([])

    const navigate = useNavigate()

    const handleTabSelect = (index) => {
        setActiveTab(index);
    };

    const handleDetails = id => {
        console.log(id);
        navigate(`/toy/${id}`)

    }

    useEffect(() => {
        fetch("http://localhost:5000/toys")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    return (
        <div className="text-center">
            <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                <TabList>
                    {toys.map((toy) => (
                        <Tab key={toy._id}>
                            <h1>{toy.subcategory}</h1>
                        </Tab>
                    ))}
                </TabList>

                {toys.map((toy) => (
                    <TabPanel key={toy._id}>
                        <div className="grid lg:grid-cols-2 gap-4">
                            {toys
                                .filter((t) => t.subcategory === toy.subcategory)
                                .slice(0, 2) // Display only the first two cards per subcategory
                                .map((filteredToy) => (
                                    <div key={filteredToy._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                        <img src={filteredToy.pictureUrl} alt={filteredToy.toyName} className="w-full h-40 object-cover" />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-2">{filteredToy.toyName}</h3>
                                            <div className="flex items-center mb-2">
                                                <span className="text-gray-600 mr-2">Price:</span>
                                                <span className="font-semibold">${filteredToy.price}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-gray-600 mr-2">Rating:</span>
                                                <span className="font-semibold">{filteredToy.rating}</span>
                                            </div>
                                            <button onClick={() => handleDetails(filteredToy._id)} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default ShopByCategory;