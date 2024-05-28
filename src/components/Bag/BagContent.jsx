import React from 'react'
import { useSelector } from 'react-redux'
import { cart } from '../../utils/redux/slice/cartSlice'
import BagCard from './BagCard';

function BagContent() {
    const { cartItems } = useSelector(cart)

    return (
        <div className='flex flex-col gap-4'>
            {
                cartItems.map((item) =>
                    <BagCard key={item.id} item={item} />
                )
            }
        </div>
    )
}

export default BagContent