import React from 'react';
import ProductGrid from '../Components/ProductGrid';
import Footer from '../Components/Footer';
import { useDispatch } from 'react-redux';
import { filteredCategoryWise } from '../features/products/ProductSlice';

const Home = () => {
    const catagories = [
        'All',
        'TV',
        'Mobile',
        'Wearable',
        'Laptop'
    ]

    const dispatch = useDispatch();

    const handleCatogoryWise = (catagory) =>{
        dispatch(filteredCategoryWise(catagory));
    }

    return (
        <div>
            <div className="hero "></div>
            <div className="catagoryContainer overflow-hidden ">
                <div className="grid grid-cols-2 gap-1 sm:gap-3 mt-3 px-6 sm:flex">
                    {
                        catagories.map((catagory,index)=>{
                        return (
                        <button className=' bg-gray-300 px-2 py-1 mt-2 rounded hover:bg-zinc-400 
                                transition-all  ease-in active:scale-90 cursor-pointer' key={index}
                                onClick={()=>handleCatogoryWise(catagory)}
                                > 
                                {catagory}.
                        </button>
                            )
                        })
                    }
                </div>
                <ProductGrid/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;