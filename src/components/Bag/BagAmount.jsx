import React, { useState } from 'react'
import { cart } from '../../utils/redux/slice/cartSlice'
import { useSelector } from 'react-redux'
import BillFormat from '../../ui/BillFormat'
import { showOrderForm } from '../../utils/redux/slice/orderFormSlice';
import { useDispatch } from 'react-redux';
import { processingFee, discount } from '../../utils/constants';


function BagAmount() {
    const dispatch = useDispatch()
    const { cartTotal } = useSelector(cart)
    const payableAmmount = cartTotal + processingFee - discount

    const handleCheckout = () => {
        dispatch(showOrderForm())
    }

    return (
        <div className='p-3 border border-slate-300 rounded'>
            <div className="flex flex-col gap-4">

                <BillFormat text="BagTotal" value={cartTotal} />
                <BillFormat text="Processing Fee" value={processingFee} />
                {/* <BillFormat text="Bag Total" value={cartTotal + 99} /> */}
                <BillFormat text="Special Discount" value={`-${discount}`} />
                <hr className='w-full' />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h1 className='font-medium text-2xl'>Total</h1>
                        <h1 className='text-xl'>{payableAmmount}.00 rs</h1>
                    </div>
                    <button
                        onClick={handleCheckout}
                        className='px-5 h-12 text-white font-semibold rounded-full bg-rose-500'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default BagAmount