import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { baseApi } from '../api/axiosInstance';
import axios from 'axios';
import { authData } from '../utils/redux/slice/authSlice';
import { toast } from 'react-hot-toast';
import { addProductToCart } from '../utils/redux/slice/cartSlice';

function ProductDetails() {
    const { isAuthenticated } = useSelector(authData)
    const { id } = useParams();
    const dispatch = useDispatch()
    const [product, setProduct] = useState(null)

    // Function to add item to the cart
    // Check if the user is authenticated
    // If not authenticated, display error toast and return
    // If yes, Dispatch action to add item to cart,display success toast
    const addToCart = (product) => {
        if (!isAuthenticated) {
            toast.error("You must login first");
            return
        }
        try {
            dispatch(addProductToCart(id))
            toast.success("Added to Cart");
        } catch (error) {
            toast.error(error.message);
        }
    }



    // Function to fetch product details
    const fetchProductDetails = async (id) => {
        try {
            // Fetch product details from the API
            const response = await baseApi(`/api/product/${id}`)
            const product = response.data
            // Set the product state
            setProduct(product)
        }
        catch { err => console.log("fetching product details error", err) }
    }

    // Fetch product details when the component mounts or when the id parameter changes
    useEffect(() => {
        fetchProductDetails(id)
    }, [id])


    // Render loading message if product details are not yet fetched
    if (product == null) return <h1 className='text-xl font-medium text-center'>loading   . . .</h1>

    return (
        <div className=''>
            <div className="flex gap-6 py-16">
                <img src={product.image} className='w-[350px] h-[400px] p-4 object-contain border rounded-3xl' alt="" />
                <div className="flex flex-col">
                    <h1 className='text-2xl font-medium'>{product.title}</h1>
                    <h1 className='mt-1 text-md italic'>Category : {product.category}</h1>
                    <h1 className='mt-2 text-lg'>{product.description}</h1>
                    <h1 className='mt-2 text-lg'>Rating : {product.rating.rate}</h1>
                    <hr className='mt-10 ' />
                    <div className=" mt-4 flex justify-between items-center">
                        <h1 className='text-2xl'>{product.price} <span className='text-rose-500'>$</span></h1>
                        {/* Button to add item to cart */}
                        <button
                            onClick={() => addToCart(product)}
                            className='px-4 text-lg h-12 text-white font-semibold rounded-full bg-rose-500'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
