import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/toy-shop.png"
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';
import { toast } from 'react-hot-toast';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        swal({
            title: "Are you sure?",
            text: "Once logOut, you will be able to logIn again",
            icon: "warning",
            buttons: true,
            dangerMode: true,

        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
        logOut()
            .then(() => {
            })
            .catch(error => {
                toast.info(`Please Check your email and password', ${error.message}`)
            })
    }

    const menu = <>
        <li className='hover:underline'><Link to="/">Home</Link></li>
        <li className='hover:underline'><Link to="/blog">Blogs</Link></li>
        <li className='hover:underline'><Link to="/alltoys">All Toys</Link></li>
        {user &&
            <>
                <li className='hover:underline'><Link to="/mytoys">My Toys</Link></li>
                <li className='hover:underline'><Link to="/addtoys">Add a Toys</Link></li>
                <li className='hover:underline'><button onClick={handleLogOut}>Log Out</button>
                </li>
            </>
        }
    </>
    return (


        <div className="navbar bg-gray-100 text-gray-600 container mx-auto rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="normal-case text-xl">ToyToPiA</a>
                <img src={logo} className='w-10 ml-8 ring rounded p-1' alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <>
                            <div className="w-10 rounded-full">
                                <img data-tooltip-id="my-tooltip"
                                    data-tooltip-content={user?.displayName}
                                    src={user?.photoURL} />
                            </div>
                        </>

                        :
                        <>
                            <Link className='hover:underline' to="/register">Register</Link>
                            <div className="divider lg:divider-horizontal">OR</div>
                            <Link className='hover:underline' to="/login">LogIn</Link>
                        </>

                }
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default Header;