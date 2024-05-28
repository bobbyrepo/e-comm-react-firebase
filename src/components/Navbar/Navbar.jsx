import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { cart } from '../../utils/redux/slice/cartSlice';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SeachField from './SeachField';

function Navbar() {
    const navigate = useNavigate()
    const { cartItems } = useSelector(cart)
    return (
        <div className='w-full  bg-zinc-800  h-[70px] text-white'>
            <div className='flex flex-col item justify-between w-[80%] mx-auto h-full'>
                <div className="flex my-auto justify-between">
                    <button
                        onClick={() => navigate("/")}
                        className="flex flex-col justify-center">
                        <h2 className='text-xl leading-4 '>STOP</h2>
                        <h2 className='text-2xl leading-5 font-medium'>SHOP</h2>
                    </button>
                    <div className="flex gap-4">
                        <SeachField />
                        <button
                            onClick={() => navigate("/cart")}
                            className='relative text-2xl'>
                            <HiOutlineShoppingBag />
                            <h3 className='absolute top-0 -right-2 text-sm px-[6px] rounded-full bg-red-600'>
                                {cartItems.length}
                            </h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar