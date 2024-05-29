import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart } from '../utils/redux/slice/cartSlice'
import BagContent from '../components/Bag/BagContent'
import BagAmount from '../components/Bag/BagAmount'

function Bag() {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(cart)

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