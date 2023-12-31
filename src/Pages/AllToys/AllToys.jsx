import React, { useEffect, useState } from 'react';
import { usePageTitle } from '../../CustomHook/usePageTitle';
import { useNavigate } from 'react-router-dom';

const AllToys = () => {
    usePageTitle("ToyToPia")
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState('');

    const nevigate = useNavigate();

    useEffect(() => {
        fetch("https://toytopia-server-side.vercel.app/alltoys")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    const handleDetails = id => {
        nevigate(`/toy/${id}`)
    }

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://toytopia-server-side.vercel.app/getToyNameByText/${searchText}`);
            const data = await response.json();
            setToys(data);
        } catch (error) {
            console.error('Error searching toys:', error);
        }
    };


    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold underline my-4">All Toys</h1>
            <div className="search-box p-2 text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder='Toy Name'
                    className="p-1"
                />{" "}
                <button className='btn btn-sm btn-outline px-8'
                    onClick={handleSearch}>Search</button>
            </div>
            <table className="min-w-full bg-white border border-gray-300 mb-4 ">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Seller</th>
                        <th className="py-2 px-4 border-b">Toy Name</th>
                        <th className="py-2 px-4 border-b">Sub-category</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Available Quantity</th>
                        <th className="py-2 px-4 border-b">View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {toys.map((toy) => (
                        <tr key={toy._id}>
                            <td className="py-2 px-4 border-b">{toy.sellerName || '-'}</td>
                            <td className="py-2 px-4 border-b">{toy.toyName}</td>
                            <td className="py-2 px-4 border-b">{toy.subcategory}</td>
                            <td className="py-2 px-4 border-b">${toy.price}</td>
                            <td className="py-2 px-4 border-b">{toy.quantity}</td>
                            <td className="py-2 px-4 border-b">
                                <button onClick={() => handleDetails(toy._id)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;