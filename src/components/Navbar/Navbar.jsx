import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { cart } from '../../utils/redux/slice/cartSlice';
import { products } from '../../utils/redux/slice/productsSlice';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import { RiReceiptLine } from "react-icons/ri";
import SeachField from './SeachField';
import SearchCardsList from './SearchCardsList';
import { toggleSignIn } from '../../utils/redux/slice/modalSlice';
import { deleteAuth } from '../../utils/redux/slice/authSlice';
import { authData } from '../../utils/redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../../config.js/firebase';
import { toast } from 'react-hot-toast';

function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { allProducts } = useSelector((products))
    const { cartItems } = useSelector(cart)
    const { isAuthenticated, user } = useSelector(authData)

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

    const handleLogout = async () => {
        await signOut(auth);
        dispatch(deleteAuth({
            user: null
        }))
        toast('Come back soon!', {
            icon: '👋 ',
        });
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
        <div className='fixed top-0 z-[100] w-full  bg-zinc-800  h-[70px] text-white'>
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
                            <SeachField search={search} handleInputChange={handleInputChange} setShowSearch={setShowSearch} />
                            {showSearch && <SearchCardsList searchList={searchList} setSearch={setSearch} />}
                        </div>
                        {isAuthenticated ?
                            <div className="flex gap-4 items-center">
                                <button
                                    onClick={() => navigate("/order-history")}
                                    className='relative text-2xl hover:scale-[105%] h-5 text-neutral-200'>
                                    <RiReceiptLine />

                                </button>
                                <button
                                    onClick={() => navigate("/cart")}
                                    className='relative text-2xl hover:scale-[105%]'>
                                    <HiOutlineShoppingBag />
                                    <h3 className='absolute top-0 -right-2 text-sm px-[6px] rounded-full bg-red-600'>
                                        {cartItems.length}
                                    </h3>
                                </button>
                                <div className="dropdown-center text-[26px] h-8 hover:scale-[105%]">
                                    <button className="" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <RxAvatar />
                                    </button>
                                    <u className="dropdown-menu no-underline py-0 overflow-hidden">
                                        <div
                                            className="w-full px-2 py-2">{user.email.split('@')[0]}</div>
                                        <div
                                            onClick={() => handleLogout()}
                                            className="w-full px-2 py-2 hover:text-white hover:bg-neutral-600">Logout</div>
                                    </u>
                                </div>
                            </div>
                            :
                            <button
                                className='hover:scale-[103%]'
                                onClick={() => dispatch(toggleSignIn())}
                            >
                                Sign In / Up
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar