import React from 'react'
import { cart } from '../../utils/redux/slice/cartSlice'
import { useSelector } from 'react-redux'
import BillFormat from '../../ui/BillFormat'


function BagAmount() {
    const { cartTotal } = useSelector(cart)

    return (
        <div className='p-3 border border-slate-300 rounded'>
            <div className="flex flex-col gap-4">

                <BillFormat text="BagTotal" value={cartTotal} />
                <BillFormat text="Processing Fee" value="99" />
                <BillFormat text="Bag Total" value={cartTotal + 99} />
                <BillFormat text="Special Discount" value="-99" />
                <hr className='w-full' />
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <h1 className='font-medium text-2xl'>Total</h1>
                        <h1 className='text-xl'>{cartTotal}.00 rs</h1>
                    </div>
                    <button className='px-5 h-12 text-white font-semibold rounded-full bg-rose-500'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default BagAmount