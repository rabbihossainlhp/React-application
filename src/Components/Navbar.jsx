import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {User} from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleUserIcon=()=>{
        setIsOpen(!isOpen);
    };

    return (
        <header className='navbar bg-blue-100 py-3 shadow-md h-14'>
            <ul className='w-full flex justify-evenly align-center '>
                <div className='flex justify-evenly w-3/5 align-center mx-auto font-bold text-lg '>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/faqs" >FAQs</Link>
                    </li>
                </div>
                <div className={`${isOpen? "w-28 h-28 bg-gray-300 rounded-2xl absolute right-4 top-10":"hidden"}`}>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="myaccount">My account</Link>
                    </li>
                </div>
                <User size={28} 
                    className=' bg-gray-500  text-black rounded-full cursor-pointer w-10 h-10 p-1 mr-4'
                    onClick={handleUserIcon}/>
            </ul>
        </header>
    );
};

export default Navbar;