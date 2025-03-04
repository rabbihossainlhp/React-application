import React from 'react';

const ProductCard = ({products}) => {
    return (
        <div className='shadow-lg p-3  '>
            <div className="productImage p-2.5">
                <img src={products.imageUrl} alt="productImage" />
            </div>
            <div className='flex flex-col justify-evenly h-fit' >
                <h3 style={{fontSize:"20px"}} className=' font-bold ' >{products.name}</h3>
                <p style={{fontSize:"14px"}} className='py-3 border-b-1' >{products.description.substring(0,90)+"..."}</p>

                <div className='flex justify-between my-4 '>
                    <p>${products.price}</p>
                    <p className='cursor-pointer w-fit px-2 bg-gray-300 rounded-sm py-1'>View details</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;