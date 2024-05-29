import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { incrementItem, decrementItem, removeItem } from '../../utils/redux/slice/cartSlice'
import { IoIosAdd } from "react-icons/io";
import { HiMinusSmall } from "react-icons/hi2";
import { Link } from 'react-router-dom';

function BagCard({ item }) {
    const dispatch = useDispatch()
    const [hover, setHover] = useState("")

    const decrement = (id) => { dispatch(decrementItem(id)) }
    const increment = (id) => { dispatch(incrementItem(id)) }
    const remove = (id) => { dispatch(removeItem(id)) }

    const handleMouseEnter = (index) => { setHover(index); };
    const handleMouseLeave = (index) => { setHover(null); };

    useEffect(() => {
        console.log(hover)
    }, [hover])

    return (
        <div className={`row gap-6 p-3  border border-slate-300 rounded ${hover == item.id ? `scale-[101%]` : `scale-100`} duration-200`}>
            <img
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave()}
                src={item.image} className='col-3 w-[150px] h-[170px] object-contain rounded overflow-hidden' alt="" />
            <div className="col-9 mt-4 flex flex-col gap-2">
                <Link to={`/product/${item.id}`}
                    onMouseEnter={() => handleMouseEnter(item.id)}
                    onMouseLeave={() => handleMouseLeave()}
                    className='flex flex-col gap-2'>
                    <h1>{item.title}</h1>
                    <h1>{item.category}</h1>
                    <h1>{item.price}.00 rs</h1>
                </Link>
                <hr className='text-slate-500' />
                <div className="flex justify-between">
                    <div className="flex gap-1">
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
                    <button
                        onClick={() => remove(item.id)}
                        className='font-semibold'>Remove</button>
                </div>
            </div>
        </div >)
}

export default BagCard