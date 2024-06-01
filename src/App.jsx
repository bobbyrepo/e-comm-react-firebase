import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bag from './pages/Bag'
import Navbar from './components/Navbar/Navbar'
import ProductDetails from './pages/ProductDetails'
import SignIn from './components/Navbar/SignIn'
import SignUp from './components/Navbar/SignUp'
import { Toaster } from 'react-hot-toast'
import { IoMdOpen } from 'react-icons/io'
import { modal } from './utils/redux/slice/modalSlice'
import { selectOrderModal } from './utils/redux/slice/orderModalSlice'
import { useSelector } from 'react-redux'
import Orders from './pages/Orders'
import OrderForm from './components/Order/OrderForm'

function App() {

  const { showSignIn, showSignUp } = useSelector(modal)
  const orderModal = useSelector(selectOrderModal)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="fixed right-0 left-0 top-0 z-[100]">
          {orderModal && <OrderForm />}
          {showSignIn && <SignIn />}
          {showSignUp && <SignUp />}
        </div>
        <div className="w-[85%] mx-auto mt-20 mb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Bag />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/order-history" element={<Orders />} />
          </Routes>
        </div>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
