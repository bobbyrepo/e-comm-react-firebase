import React from 'react'
import { addItem } from '../../utils/redux/slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authData } from '../../utils/redux/slice/authSlice'
import { toast } from 'react-hot-toast'

function ProductCard({ item }) {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(authData)

    const addToCart = (item) => {
        if (!isAuthenticated) {
            toast.error("You must login first");
            return
        }
        try {
            dispatch(addItem(item))
            toast.success("Added to Cart");
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className='mb-3'>
            <div className='w-full py-2 px-3 outline rounded outline-stone-100 h-full hover:scale-[101%] duration-150'>
                <Link to={`/product/${item.id}`}>
                    <img src={item.image} className='mx-auto h-[200px] object-contain' alt="" />
                    <div className="mt-4 grid gap-1 text-neutral-800">
                        <h1 className='font-semibold line-clamp-1'>{item.title} </h1>
                        <h2 className='line-clamp-2 text-neutral-600'>{item.description} </h2>
                        <h2 className='text-neutral-600'>rating : {item.rating.rate} </h2>
                        <h2 className='font-semibold'> {item.price}.00<span className='font-normal' > rs</span></h2>
                    </div>
                </Link>
                <div className="flex justify-center">
                    <button
                        onClick={() => addToCart(item)}
                        className='mt-2 w-full mb-1 px-3 py-1 text-md rounded-full outline outline-1 outline-rose-500 text-rose-500 hover:text-white hover:bg-rose-500'>
                        Add To Cart
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard