import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {User ,  AlignRight} from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleUserIcon=()=>{
        setIsOpen(!isOpen);
    };

    return (
        <header className='navbar bg-blue-100 py-3 flex justify-center items-center shadow-md h-14'>
            <ul className='w-full flex justify-evenly items-center px-4 '>
                <div className='flex absolute left-1/12'>
                    <li className=''>
                        <Link to="/" > 
                            <img src="/src/assets/Logo.png" 
                                alt="DigiSphere-logo" 
                                className='w-36 h-auto object-cover background-cover'
                            />
                        </Link>
                    </li>
                </div>
                <div className='flex justify-evenly w-3/5 align-center absolute  left-2/12 mx-auto font-bold text-lg '>
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
                <div className={`${
                                isOpen
                                ? 
                                "w-44 h-20 bg-gray-300 rounded-2xl absolute right-1/12 top-14 flex flex-col justify-evenly items-center "
                                :
                                "hidden"}`}>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="myaccount">My account</Link>
                    </li>
                </div>
                <div className='flex gap-2 absolute right-1/12'>
                    <User size={28} 
                        className=' bg-gray-500  order-2 text-black rounded-full cursor-pointer w-10 h-10 p-1  '
                        onClick={handleUserIcon}/>
                    <AlignRight size={28} 
                        className=' bg-gray-500 order-1 text-black rounded-full cursor-pointer w-10 h-10 p-1 md:hidden' />  
                </div>
                
            </ul>
        </header>
    );  
};

export default Navbar;