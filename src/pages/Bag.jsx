import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCart } from '../utils/redux/slice/cartSlice'
import BagContent from '../components/Bag/BagContent'
import BagAmount from '../components/Bag/BagAmount'
import ProductsNotFound from '../ui/ProductsNotFound'

function Bag() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);



    // If the cart is empty, display a message indicating so
    if (cart?.cartItems?.length === 0) {
        return <ProductsNotFound text="Your bag is empty! Let’s fill it up shall we?" />
    }

    return (
        <div className='py-10'>
            <h1 className='text-3xl font-semibold'>My Bag</h1>
            <div className="row mt-2">
                <div className="col-8">
                    <BagContent />
                </div>
                <div className="col-4">
                    <BagAmount />
                </div>
            </div>
        </div>
    )
}

export default Bag
