import React from 'react'
import { addItem } from '../../utils/redux/slice/cartSlice'
import { useDispatch } from 'react-redux'

function ProductCard({ item }) {
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItem(item))
    }
    return (
        <div className='mb-3'>
            <div className='py-2 px-3 hover:outline rounded outline-stone-100 h-full'>
                <img src={item.image} className='mx-auto h-[200px] object-contain' alt="" />
                <div className="">
                    <h1 className='font-semibold line-clamp-1'>{item.title} </h1>
                    <h2 className=''>{item.category} </h2>
                    <h2 className=''>rating : {item.rating.rate} </h2>
                    <h2 className=''> price : <span>{item.price}.00 </span>rs</h2>
                </div>
                <button onClick={() => addToCart(item)} className='w-fit mx-auto px-3 py-1 rounded border hover:bg-slate-300'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductCard