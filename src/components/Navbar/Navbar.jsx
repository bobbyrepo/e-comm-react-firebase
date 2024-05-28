import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { cart } from '../../utils/redux/slice/cartSlice';
import { products } from '../../utils/redux/slice/productsSlice';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import SeachField from './SeachField';
import SearchCardsList from './SearchCardsList';

function Navbar() {
    const navigate = useNavigate()
    const { allProducts } = useSelector((products))
    const { cartItems } = useSelector(cart)

    const [showSearch, setShowSearch] = useState(false)
    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState([])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const searchFunction = async () => {
        try {
            const filteredProducts = allProducts.filter(product =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
            setSearchList(filteredProducts);
        } catch {
            err => console.log("search fetch error", err)
        }
    }


    useEffect(() => {
        if (search.length > 0) setShowSearch(true)
        else setShowSearch(false)

        const timeOut = setTimeout(() => {
            setSearchList([])
            searchFunction()
        }, [500])

        return () => clearTimeout(timeOut)
    }, [search])

    return (
        <div className='w-full  bg-zinc-800  h-[70px] text-white'>
            <div className='flex flex-col item justify-between w-[80%] mx-auto h-full'>
                <div className="flex my-auto justify-between">
                    <button
                        onClick={() => navigate("/")}
                        className="flex flex-col justify-center">
                        <h2 className='text-xl leading-4 '>STOP</h2>
                        <h2 className='text-2xl leading-5 font-medium'>SHOP</h2>
                    </button>
                    <div className="flex gap-4">
                        <div className="relative">
                            <SeachField handleInputChange={handleInputChange} setShowSearch={setShowSearch} />
                            {showSearch && <SearchCardsList searchList={searchList} />}
                        </div>
                        <button
                            onClick={() => navigate("/cart")}
                            className='relative text-2xl'>
                            <HiOutlineShoppingBag />
                            <h3 className='absolute top-0 -right-2 text-sm px-[6px] rounded-full bg-red-600'>
                                {cartItems.length}
                            </h3>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar