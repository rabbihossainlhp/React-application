import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {User ,  AlignRight , X , ShoppingCart} from "lucide-react"
import { useDispatch } from 'react-redux';
import { filteredSearchProducts } from '../features/products/ProductSlice';
    


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[isNavOpen,setIsNavOpen] = useState(false);

    const handleUserIcon=()=>{
        setIsOpen(!isOpen);
    };

    const handleNavResponsive = ()=>{
        setIsNavOpen(!isNavOpen);
    }

    const dispatch = useDispatch();

    const handleSearchWise = (event) =>{
        dispatch(filteredSearchProducts(event.target.value));
    };
    

    return (
        <header className='navbar flex flex-col items-center justify-between  h-fit'>
            <ul className='bg-blue-100 py-8 h-4 w-full md:overflow-hidden shadow-md flex justify-evenly items-center px-4'>
                <div className='flex absolute left-1/12'>
                    <li>
                        <Link to="/">
                            <img src="src/assets/Logo.png" 
                                alt="DigiSphere-logo" 
                                className='w-36 h-auto object-cover background-cover'
                            />
                        </Link>
                    </li>
                </div>
                <div className={`absolute md:-translate-x-0 top-14 md:left-0 bg-blue-200 w-full 
                        font-bold text-lg md:flex flex-col md:flex-row justify-evenly md:items-center md:w-2/5 transition-all duration-500      
                        md:relative md:top-0 md:bg-transparent ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}>

                    <li className='hover:bg-amber-200 h-10 w-full flex justify-center cursor-pointer items-center transition-duration:2ms'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:bg-amber-200 h-10 w-full flex justify-center cursor-pointer items-center transition-duration:2ms'>
                        <Link to="/about">About</Link>
                    </li>
                    <li className='hover:bg-amber-200 h-10 w-full flex justify-center cursor-pointer items-center duration-300 ease-in-out'>
                        <Link to="/faqs">FAQs</Link>
                    </li>

                </div>
                <div className={`${isOpen ? "w-44 h-20 bg-gray-300 rounded-2xl absolute right-1/12 top-14 flex flex-col justify-evenly items-center" : "hidden"}`}>
                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li></li>

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
                    <div>
                        {isNavOpen? 
                        <X className=' bg-gray-500 order-1 text-black rounded-full cursor-pointer w-10 h-10 p-1 md:hidden' 
                        onClick={handleNavResponsive}/>
                        :
                        <AlignRight className=' bg-gray-500 order-1 text-black rounded-full cursor-pointer w-10 h-10 p-1 md:hidden' 
                        onClick={handleNavResponsive} />   
                        }
                    </div>
                        
                </div>
            </ul>

            <nav className='h-14 w-full flex justify-evenly items-center  '>
                <form className='h-fit text-center w-1/2 sm:block hidden' >
                    <input type="text"
                            placeholder='Search product'
                            className='w-72 rounded-2xl p-1 pl-2.5 focus:outline-none'
                            style={{border:"1px solid green"}}  
                            onChange={handleSearchWise}                          
                    />
                </form>
                <ShoppingCart size={36} className=' cursor-pointer p-1 bg-gray-300 rounded-md' />    
            </nav>
        </header>
    );  
};

export default Navbar;