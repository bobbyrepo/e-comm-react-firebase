import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart, incrementItem, decrementItem, removeItem } from '../../utils/redux/slice/cartSlice'
import { IoIosAdd } from "react-icons/io";
import { HiMinusSmall } from "react-icons/hi2";

function BagCard({ item }) {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(cart)

    const decrement = (id) => { dispatch(decrementItem(id)) }
    const increment = (id) => { dispatch(incrementItem(id)) }
    const remove = (id) => { dispatch(removeItem(id)) }

    return (
        <div className="row gap-6 p-3  border border-slate-300 rounded">
            <img src={item.image} className='col-3 w-[150px] h-[170px] object-contain rounded overflow-hidden' alt="" />
            <div className="col-9 mt-4 flex flex-col gap-2">
                <h1>{item.title}</h1>
                <h1>{item.category}</h1>
                <h1>{item.price}.00 rs</h1>
                <div className="flex mt-2 gap-1">
                    <button onClick={() => decrement(item.id)} className='border border-slate-300 hover:bg-slate-200 rounded p-2 text-2xl'>
                        <HiMinusSmall />
                    </button>
                    <button className='py-1 px-2 w-[50px] border border-stale-300 rounded'>
                        <h3 className='text-sm text-start'>Qty</h3>
                        <div className="flex justify-between font-semibold">
                            <h3>{item.quantity}</h3>
                        </div>
                    </button>
                    <button onClick={() => increment(item.id)} className='border border-slate-300 hover:bg-slate-200 rounded p-2 text-2xl'>
                        <IoIosAdd />
                    </button>
                </div>
                <hr className='text-slate-500' />
                <button
                    onClick={() => remove(item.id)}
                    className='font-semibold text-end'>Remove</button>
            </div>
        </div>)
}

export default BagCard