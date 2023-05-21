import React, { useEffect, useState } from 'react';
import { usePageTitle } from '../../CustomHook/usePageTitle';
import { useNavigate } from 'react-router-dom';

const AllToys = () => {
    usePageTitle("ToyToPia")
    const [toys, setToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const nevigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:5000/alltoys")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    const handleDetails = id => {
        nevigate(`/toy/${id}`)
    }

    // const handleSearch = () => {
    //     fetch(`http://localhost:5000/getToyNameByText/${searchText}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setToys(data);
    //         });
    // };
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredToys = toys.filter((toy) =>
        toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold underline my-4">All Toys</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="Search by toy name"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>
            <table className="min-w-full bg-white border border-gray-300">
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
                    {filteredToys.map((toy) => (
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