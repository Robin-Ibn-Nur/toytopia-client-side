import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/toy-shop.png"
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully SignOut', { autoClose: 500 })
            })
            .catch(error => {
                toast.info('Please Check your email and password', error.message)
            })
    }

    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoys">All Toys</Link></li>
        <li><Link to="/mytoys">My Toys</Link></li>
        <li><Link to="/addtoys">Add a Toys</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/register">register</Link></li>
        <li><button onClick={handleLogOut}>Log Out</button></li>
    </>
    return (
        <div className="navbar bg-gray-100 text-gray-600 container mx-auto border rounded border-yellow-500">
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
                <img src={logo} className='w-10 ml-8' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}

                </ul>
            </div>
            <div className="navbar-end avater">
                {
                    user ?
                        <div className="w-10 rounded-full">
                            <img data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} className="rounded" src={user?.photoURL} />
                        </div>

                        :
                        <li><Link to="/login">LogIn</Link></li>
                }
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default Header;