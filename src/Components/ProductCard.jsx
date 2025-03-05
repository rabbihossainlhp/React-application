import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    return (
        <Link to={`/product/${product.id}`}>
            <div className='shadow-lg p-3  '>
                <div className="productImage p-2.5">
                    <img src={product.imageUrl} alt="productImage" />
                </div>
                <div className='flex flex-col justify-evenly ' >
                    <h3 style={{fontSize:"20px"}} className=' font-bold ' >{product.name}</h3>
                    <p style={{fontSize:"14px"}} className='py-3 border-b-1' >{product.description.substring(0,90)+"..."}</p>

                    <div className='flex justify-between items-center my-4 '>
                        <p>${product.price}</p>
                        <p className='cursor-pointer w-fit px-2 bg-gray-300 rounded-sm py-1'>View details</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;