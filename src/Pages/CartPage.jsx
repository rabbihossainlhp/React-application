import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateItemQuantity } from '../features/cart/CartSlice';
import { Minus, Plus } from 'lucide-react';

const CartPage = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart.items);

    const handleRemoveFromCart =(id)=>{
        dispatch(removeFromCart({id}));
    };

    const handleUpdateCartItems = (id,quantity)=>{
        if(quantity >= 0){
            dispatch(updateItemQuantity({id,quantity}));
        }
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



    return (
        <div className='px-14 py-10'>
            <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='grid grid-cols-1 gap-4'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex justify-between items-center p-4 border rounded'>
                            <div className='flex items-center'>
                                <img src={item.imageUrl} alt={item.name} className='w-20 h-20 object-cover mr-4' />
                                <div>
                                    <h2 className='text-lg font-semibold'>{item.name}</h2>
                                    <p className='text-sm'>{item.description}</p>
                                    <p className='text-sm font-bold'>${item.price}</p>
                                    <p className='text-sm'>Quantity: {item.quantity}</p>
                                    <div className='w-28 p-1 border rounded  flex justify-evenly gap-4'
                                    >
                                    <Plus className=' bg-gray-400 rounded-md px-1 cursor-pointer' onClick={()=>handleUpdateCartItems(item.id, item.quantity+1)}/>
                                        <span>{item.quantity}</span>
                                    <Minus className=' bg-gray-400 rounded-md px-1 cursor-pointer' onClick={()=>handleUpdateCartItems(item.id, item.quantity-1)}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <button
                                    className='bg-red-500 text-white px-4 py-2 rounded'
                                    onClick={() => handleRemoveFromCart(item.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className='mt-8 p-4 border rounded'>
                    <h2 className='text-xl font-bold mb-2'>Summary</h2>
                    <p className='text-lg'>Total Items: {totalItems}</p>
                    <p className='text-lg'>Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
            )}
        </div>   
    );
};

export default CartPage;