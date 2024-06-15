import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../utils/redux/slice/cartSlice'
import { Link } from 'react-router-dom'
import { authData } from '../../utils/redux/slice/authSlice'
import { toast } from 'react-hot-toast'
import { baseApi } from '../../api/axiosInstance'

function ProductCard({ item }) {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector(authData)

    // Function to add item to the cart
    const addToCart = async (item) => {
        // Check if the user is authenticated
        if (!isAuthenticated) {
            // If not authenticated, display error toast and return
            toast.error("You must login first");
            return
        }
        try {
            dispatch(addProductToCart(item._id))
            // Display success toast after adding item to cart
            toast.success("Added to Cart");
        } catch (error) {
            // Display error toast if there's an error adding item to cart
            toast.error(error.message);
        }
    }

    return (
        <div className='mb-3'>
            <div className='w-full py-2 px-3 outline rounded outline-stone-100 h-full hover:scale-[101%] duration-150'>
                {/* Link to the product details page */}
                <Link to={`/product/${item._id}`}>
                    <img src={item.image} className='mx-auto h-[200px] object-contain' alt="" />
                    <div className="mt-4 grid gap-1 text-neutral-800">
                        <h1 className='font-semibold line-clamp-1'>{item.title} </h1>
                        <h2 className='line-clamp-2 text-neutral-600'>{item.description} </h2>
                        <h2 className='text-neutral-600'>rating : {item.rating.rate} </h2>
                        <h2 className='font-semibold'> {item.price} $<span className='font-normal' ></span></h2>
                    </div>
                </Link>
                {/* Button to add item to cart */}
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
