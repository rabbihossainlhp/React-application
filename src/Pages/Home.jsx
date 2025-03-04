import React from 'react';
import ProductGrid from '../Components/ProductGrid';

const Home = () => {
    const catagory = [
        'All',
        'Graphics Card',
        'Monitor',
        'Power Supply',
        'Telivision'
    ]
    return (
        <div>
            <div className="hero "></div>
            <div className="catagoryContainer overflow-hidden ">
                <div className="grid grid-cols-2 gap-1 sm:gap-3 mt-3  sm:flex">
                    {
                        catagory.map((catagory,index)=>{
                        return (
                        <button className=' bg-gray-300 px-2 py-1 mt-2 rounded hover:bg-zinc-400 
                                transition-all  ease-in active:scale-90 cursor-pointer' key={index} > 
                                {catagory}.
                        </button>
                            )
                        })
                    }
                </div>
                <ProductGrid/>
            </div>
        </div>
    );
};

export default Home;