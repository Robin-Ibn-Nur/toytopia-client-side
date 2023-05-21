import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toyData, setToyData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users?sellerEmail=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToyData(data);
            })

    }, [])

    const handleDelete = id => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/toys/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletecCount > 0) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",

                                });
                            }
                            const remaining = toyData.filter(toy => toy._id !== id);
                            setToyData(remaining);
                        })
                }
            });

    }

    return (
        <div className="container mx-auto my-10">
            <h1 className="text-2xl text-center underline font-bold mb-4">{user?.email}</h1>
            <table className="w-full h-auto bg-violet-300 rounded shadow-2xl shadow-indigo-500/40">
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-Category Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Update Product Info</th>
                    </tr>
                </thead>
                <tbody>
                    {toyData.map((toy) => (
                        <tr key={toy._id}>
                            <th>
                                <button onClick={() => handleDelete(toy._id)} className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                            <td>{toy.sellerName || '-'}</td>
                            <td>{toy.toyName}</td>
                            <td>{toy.subcategory}</td>
                            <td>{toy.description}</td>
                            <td>${toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td>
                                <Link to={`/updateToyInfo/${toy._id}`}
                                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full'
                                >Update</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;