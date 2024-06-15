import React from 'react'
import { useSelector } from 'react-redux'
import { cart } from '../../utils/redux/slice/cartSlice'
import BagCard from './BagCard';

function BagContent() {

    // Get cart items from the Redux store
    const cartItems = useSelector((state) => state.cart.cartItems);



    return (
        <div className='flex flex-col gap-4'>
            {/* Map through cart items and render BagCard component for each item */}
            {
                cartItems?.map((item) =>
                    <BagCard key={item.product._id} item={item.product} quantity={item.quantity} />
                )
            }
        </div>
    )
}

export default BagContent
