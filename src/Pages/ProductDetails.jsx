import { ShoppingCart } from 'lucide-react';
import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../features/cart/CartSlice';

const ProductDetails = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const product = useSelector((state)=>
        state.products.products.find((p)=>p.id === parseInt(id))
    );

    if(!product){
        return(
            <div >
                Not Found Products
            </div>
        );
    }


    return (
        <div className='px-14 py-10'>
            <div className='w-full text-center mt-3 text-blue-500 font-semibold text-md '>
                <Link to={'/'}>Back to products</Link>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-between  gap-6
                    items-center shadow-lg py-8 px-8 rounded-2xl' 
                >
                        
                <div className='w-2/5'>
                    <img className='w-3/4 shadow-lg' src={product.imageUrl} alt={product.name} />
                </div>
                <div className='w-3/4 flex flex-col justify-evenly h-3/5 gap-4' >
                    <div>
                        <h1 className='text-2xl font-bold' >{product.name}</h1>
                        <p className='text-md'>{product.description}</p>
                    </div>
                    <span className='font-semibold text-lg'>${product.price}</span>
                    <div className='h-1/4 flex flex-col justify-between gap-2' >
                        <h1 className='font-semibold text-lg'>Catagory</h1>
                        <span className=' w-fit bg-gray-300 px-4 py-1 rounded-lg'>{product.category}</span>
                    </div>
                    <div>
                        <button className='flex bg-gray-300 px-4 py-2 rounded-md cursor-pointer active:scale-95' onClick={()=>dispatch(addToCart(product))}>
                            <ShoppingCart/>Add to cart
                        </button>
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default ProductDetails;