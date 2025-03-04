import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-evenly px-4 pt-6">
                    <div className='w-1/4'>
                        <img className='w-4/5' src="src/assets/Logo.png" alt="LOGO" />
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 px-5 md:text-center">
                        <h5 className="uppercase font-bold mb-2">About Us</h5>
                        <p className="text-sm">
                            We are a leading e-commerce platform providing a wide range of products to cater to all your needs.
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 md:text-center px-5">
                        <h5 className="uppercase font-bold mb-2">Quick Links</h5>
                        <ul className="list-none">
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:underline">Home</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:underline">FAQ's</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/" className="text-sm hover:underline">About</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 px-5 md:text-center ">
                        <h5 className="uppercase font-bold mb-2">Follow Us</h5>
                        <div className="flex flex-row md:flex-col space-x-4">
                            <Link className="text-sm hover:underline">Facebook</Link>
                                <Link className="text-sm hover:underline">Twitter</Link>
                                <Link className="text-sm hover:underline">Instagram</Link>
                            </div>
                        </div>
                    </div>
                <div className="mt-8 text-center text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;