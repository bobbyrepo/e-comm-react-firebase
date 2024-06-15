import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    incrementProductInCart,
    decrementProductInCart,
    removeProductFromCart,
} from '../../utils/redux/slice/cartSlice';
import { IoIosAdd } from "react-icons/io";
import { HiMinusSmall } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function BagCard({ item, quantity }) {
    const dispatch = useDispatch()
    const [hover, setHover] = useState("")

    // Function to increment item quantity
    const handleIncrementProduct = (productId) => {
        dispatch(incrementProductInCart(productId));
    };

    // Function to decrement item quantity
    const handleDecrementProduct = (productId) => {
        dispatch(decrementProductInCart(productId));
    };

    // Function to remove item from cart
    const handleRemoveProduct = (productId) => {
        dispatch(removeProductFromCart(productId));
    };

    // Handle mouse enter event
    const handleMouseEnter = (index) => { setHover(index); };
    // Handle mouse leave event
    const handleMouseLeave = () => { setHover(null); };

    return (
        <div className={`row gap-6 p-3  border border-slate-300 rounded ${hover == item._id ? `scale-[101%]` : `scale-100`} duration-200`}>
            <img
                onMouseEnter={() => handleMouseEnter(item._id)}
                onMouseLeave={() => handleMouseLeave()}
                src={item.image} className='col-3 w-[150px] h-[170px] object-contain rounded overflow-hidden' alt="" />
            <div className="col-9 mt-4 flex flex-col gap-2">
                {/* Product Details */}
                <Link to={`/product/${item._id}`}
                    onMouseEnter={() => handleMouseEnter(item._id)}
                    onMouseLeave={() => handleMouseLeave()}
                    className='flex flex-col gap-2'>
                    <h1>{item.title}</h1>
                    <h1>{item.category}</h1>
                    <h1>{item.price} $</h1>
                </Link>
                <hr className='text-slate-500' />
                <div className="flex justify-between">
                    <div className="flex gap-1">
                        {/* Decrement Quantity button */}
                        <button onClick={() => handleDecrementProduct(item._id)} className='border border-slate-300 hover:bg-slate-200 rounded p-2 text-2xl'>
                            <HiMinusSmall />
                        </button>
                        <button className='py-1 px-2 w-[50px] border border-stale-300 rounded'>
                            <h3 className='text-sm text-start'>Qty</h3>
                            <div className="flex justify-between font-semibold">
                                <h3>{quantity}</h3>
                            </div>
                        </button>
                        {/* Increment Quantity button */}
                        <button onClick={() => handleIncrementProduct(item._id)} className='border border-slate-300 hover:bg-slate-200 rounded p-2 text-2xl'>
                            <IoIosAdd />
                        </button>
                    </div>
                    {/* Remove button */}
                    <button
                        onClick={() => handleRemoveProduct(item._id)}
                        className='font-semibold'>Remove</button>
                </div>
            </div>
        </div >
    )
}

export default BagCard
