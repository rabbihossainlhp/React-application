import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {User ,  AlignRight} from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[isNavOpen,setIsNavOpen] = useState(false);

    const handleUserIcon=()=>{
        setIsOpen(!isOpen);
    };

    const handleNavResponsive = ()=>{
        setIsNavOpen(!isNavOpen);
    }

    return (
        <header className='navbar  bg-blue-100 py-3 flex justify-center items-center shadow-md h-14'>
            <ul className='w-full md:overflow-hidden md:h-full flex justify-evenly items-center px-4 '>
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
                <div className={`absolute  md:-translate-x-0 top-14 md:left-0 bg-blue-200 w-full 
                        font-bold text-lg md:flex flex-col  md:flex-row justify-evenly md:items-center md:w-2/5 transition-all duration-500      
                        md:relative md:top-0  md:bg-transparent   ${isNavOpen?"translate-x-0 ":" -translate-x-full"}`}>

                    <li className='hover:bg-amber-200 h-10 w-full
                        flex justify-center cursor-pointer items-center transition-duration:2ms
                    '>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:bg-amber-200 h-10 w-full
                        flex justify-center cursor-pointer items-center transition-duration:2ms
                    ' >
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:bg-amber-200 h-10 w-full
                        flex justify-center cursor-pointer items-center
                        duration-300 ease-in-out
                    ' >
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
                        className=' bg-gray-500 order-1 text-black rounded-full cursor-pointer w-10 h-10 p-1 md:hidden' 
                        onClick={handleNavResponsive}/>  
                        
                </div>
                
            </ul>
        </header>
    );  
};

export default Navbar;