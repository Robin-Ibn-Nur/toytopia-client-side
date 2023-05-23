import React from 'react';
import logo from "../../assets/toy-shop.png"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 text-center py-5 container mx-auto">
            <div className="container mx-auto">
                <img src={logo} className='w-16 mx-auto ring rounded p-1' alt="" />
                <p className="mt-4">
                    Copyright &copy; 2023 ToyToPia. All rights reserved.
                </p>
                <div className="mt-4 flex flex-wrap justify-content-around">
                    <a href="mailto:contact@toytopia.com" className="mx-2 underline">
                        <i className="fas fa-envelope"></i> Contact Us:
                    </a>
                    <a href="https://www.facebook.com/toytopia" className="mx-2 hover:text-sky-500 hover:underline flex gap-2">
                        <FaFacebook></FaFacebook>
                        Facebook
                    </a>
                    <a href="https://twitter.com/toytopia" className="mx-2
                    hover:text-sky-400 hover:underline flex gap-2">
                        <FaTwitter></FaTwitter> Twitter
                    </a>
                    <a href="https://www.instagram.com/toytopia" className="mx-2
                    hover:text-orange-300 hover:underline flex gap-2">
                        <FaInstagram></FaInstagram> Instagram
                    </a>
                </div>
                <p className="mt-4">
                    123 Main Street, Anytown, CA 12345
                </p>
            </div>
        </footer>
    );
};

export default Footer;