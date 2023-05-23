// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { Link } from 'react-router-dom';

// const MyToys = () => {
//     const { user } = useContext(AuthContext);
//     const [toyData, setToyData] = useState([]);
//     const [sortBy, setSortBy] = useState('');

//     useEffect(() => {
//         fetch(`http://localhost:5000/users?sellerEmail=${user?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 setToyData(data);
//             })

//     }, [])
//     useEffect(() => {
//         fetch(`http://localhost:5000/toys/${user?.email}?sortBy=${sortBy}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setToyData(data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching toys:', error);
//             });
//     }, [user, sortBy]);

//     const handleSortChange = (e) => {
//         setSortBy(e.target.value);
//     };

//     const handleDelete = id => {
//         swal({
//             title: "Are you sure?",
//             text: "Once deleted, you will not be able to recover this imaginary file!",
//             icon: "warning",
//             buttons: true,
//             dangerMode: true,
//         })
//             .then((willDelete) => {
//                 if (willDelete) {
//                     fetch(`http://localhost:5000/toys/${id}`, {
//                         method: 'DELETE'
//                     })
//                         .then(res => res.json())
//                         .then(data => {
//                             if (data.deletecCount > 0) {
//                                 swal("Poof! Your imaginary file has been deleted!", {
//                                     icon: "success",

//                                 });
//                             }
//                             const remaining = toyData.filter(toy => toy._id !== id);
//                             setToyData(remaining);
//                         })
//                 }
//             });

//     }

//     return (
//         <div className="container mx-auto my-10">
//             <div>
//                 <label htmlFor="sort">Sort by Price:</label>
//                 <select id="sort" value={sortBy} onChange={handleSortChange}>
//                     <option value="">None</option>
//                     <option value="asc">Ascending</option>
//                     <option value="desc">Descending</option>
//                 </select>
//             </div>
//             <ul>
//                 {toyData.map((toy) => (
//                     <li key={toy.id}>
//                         <span>{toy.toyName}</span>
//                         <span>${toy.price}</span>
//                     </li>
//                 ))}
//             </ul>
//             <h1 className="text-2xl text-center underline font-bold mb-4">{user?.email}</h1>
//             <table className="w-full h-auto bg-violet-300 rounded shadow-2xl shadow-indigo-500/40">
//                 <thead>
//                     <tr>
//                         <th>Delete</th>
//                         <th>Seller Name</th>
//                         <th>Toy Name</th>
//                         <th>Sub-Category Name</th>
//                         <th>Description</th>
//                         <th>Price</th>
//                         <th>Available Quantity</th>
//                         <th>Update Product Info</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {toyData.map((toy) => (
//                         <tr key={toy._id}>
//                             <th>
//                                 <button onClick={() => handleDelete(toy._id)} className="btn btn-circle btn-outline">
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
//                                 </button>
//                             </th>
//                             <td>{toy.sellerName || '-'}</td>
//                             <td>{toy.toyName}</td>
//                             <td>{toy.subcategory}</td>
//                             <td>{toy.description}</td>
//                             <td>${toy.price}</td>
//                             <td>{toy.quantity}</td>
//                             <td>
//                                 <Link to={`/updateToyInfo/${toy._id}`}
//                                     className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full'
//                                 >Update</Link>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default MyToys;












import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { usePageTitle } from '../../CustomHook/usePageTitle';

const MyToys = () => {

    usePageTitle("ToyToPiA")
    const { user } = useContext(AuthContext);
    const [toyData, setToyData] = useState([]);
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        // http://localhost:5000/toys?sellerEmail=${user?.email}&sortBy=${sortBy}
        const fetchToys = async () => {
            try {
                const response = await fetch(`http://localhost:5000/toys?sellerEmail=${user?.email}&sortBy=${sortBy}`);
                const data = await response.json();
                data.map(d => console.log(d.price))
                setToyData(data);
            } catch (error) {
                console.error('Error fetching toys:', error);
            }
        };

        fetchToys();
    }, [user, sortBy]);

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        console.log(e.target.value);
    };

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this toy!",
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
                            if (data.deleteCount > 0) {
                                swal("Toy has been deleted!", {
                                    icon: "success",
                                });
                                const remaining = toyData.filter(toy => toy._id !== id)
                                setToyData(remaining)
                            }
                        })
                        .catch(error => {
                            console.error('Error deleting toy:', error);
                        });
                }
            });
    };

    return (
        <div className="container mx-auto my-10">
            {
                toyData.length <= 0 ? <h2 className='text-2xl text-center underline font-bold mb-4'>You have no Product</h2>
                    :
                    <div>
                        <div>
                            <label htmlFor="sort">Sort by Price:</label>
                            <select id="sort" value={sortBy} onChange={handleSortChange}>
                                <option value="">None</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                        <h1 className="text-2xl text-center underline font-bold mb-4">{user?.displayName}</h1>
                        <table className="min-w-full bg-white border border-gray-300 mb-4">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">Delete a Product</th>
                                    <th className="py-2 px-4 border-b">Seller Name</th>
                                    <th className="py-2 px-4 border-b">Toy Name</th>
                                    <th className="py-2 px-4 border-b">Sub-Category Name</th>
                                    <th className="py-2 px-4 border-b">Description</th>
                                    <th className="py-2 px-4 border-b">Price</th>
                                    <th className="py-2 px-4 border-b">Available Quantity</th>
                                    <th className="py-2 px-4 border-b">Update Product Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toyData.map((toy) => (
                                    <tr key={toy._id}>
                                        <td className="py-2 px-4 border-b">
                                            <button onClick={() => handleDelete(toy._id)} className="btn btn-circle btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </td>
                                        <td className="py-2 px-4 border-b">{toy.sellerName || '-'}</td>
                                        <td className="py-2 px-4 border-b">{toy.toyName || '-'}</td>
                                        <td className="py-2 px-4 border-b">{toy.subcategory || '-'}</td>
                                        <td className="py-2 px-4 border-b">{toy.description || '-'}</td>
                                        <td className="py-2 px-4 border-b">${toy.price || '-'}</td>
                                        <td className="py-2 px-4 border-b">{toy.quantity || '-'}</td>
                                        <td className="py-2 px-4 border-b">
                                            <Link to={`/updateToyInfo/${toy._id}`} className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full'>Update</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            }
        </div>
    );
};

export default MyToys;
