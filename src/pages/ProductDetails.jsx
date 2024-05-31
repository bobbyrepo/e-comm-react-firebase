import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { baseApi } from '../api/axiosInstance';
import axios from 'axios';
import { addItem } from '../utils/redux/slice/cartSlice';
import { authData } from '../utils/redux/slice/authSlice';
import { toast } from 'react-hot-toast';

function ProductDetails() {
    const { isAuthenticated } = useSelector(authData)
    const { id } = useParams();
    const dispatch = useDispatch()
    const [product, setProduct] = useState(null)

    const addToCart = (product) => {
        if (!isAuthenticated) {
            toast.error("You must login first");
            return
        }
        try {
            dispatch(addItem(product))
            toast.success("Added to Cart");
        } catch (error) {
            toast.error(error.message);
        }
    }


    const fetchProductDetails = async (id) => {
        try {
            const response = await baseApi(`/products/${id}`)
            const product = response.data
            const conversionResponse = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=usd&to=inr`)
            const unit = conversionResponse.data.rates.INR
            const updatedProducts = {
                ...product, price: Math.round(unit * product.price)
            }
            setProduct(updatedProducts)
        }
        catch { err => console.log("fetching product details error", err) }
    }

    useEffect(() => {
        fetchProductDetails(id)
    }, [id])


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
                        <h1 className='text-2xl'>{product.price}.00 <span className='text-rose-500'>rs</span></h1>
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