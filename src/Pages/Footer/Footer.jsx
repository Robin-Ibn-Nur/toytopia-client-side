import React from 'react';
import logo from "../../assets/toy-shop.png"

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 text-center py-5">
            <div className="container mx-auto">
                <img src={logo} className='w-16 mx-auto' alt="" />
                <p className="mt-4">
                    Copyright &copy; 2023 Toytopia. All rights reserved.
                </p>
                <div className="mt-4 flex flex-wrap justify-content-around">
                    <a href="mailto:contact@toytopia.com" className="mx-2">
                        <i className="fas fa-envelope"></i> Contact Us
                    </a>
                    <a href="https://www.facebook.com/toytopia" className="mx-2">
                        <i className="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://twitter.com/toytopia" className="mx-2">
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a href="https://www.instagram.com/toytopia" className="mx-2">
                        <i className="fab fa-instagram"></i> Instagram
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