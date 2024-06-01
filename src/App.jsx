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
import { modal } from './utils/redux/slice/modalSlice'
import { selectOrderForm } from './utils/redux/slice/orderFormSlice'
import { useSelector } from 'react-redux'
import Orders from './pages/Orders'
import OrderForm from './components/Order/OrderForm'
import ProtectedRoute from './helpers/ProtectedRoute'

function App() {
  const { showSignIn, showSignUp } = useSelector(modal)
  const orderForm = useSelector(selectOrderForm)


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="fixed right-0 left-0 top-0 z-[100]">
          {orderForm && <OrderForm />}
          {showSignIn && <SignIn />}
          {showSignUp && <SignUp />}
        </div>
        <div className="w-[85%] mx-auto mt-20 mb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<Bag />} />
              <Route path="/order-history" element={<Orders />} />
            </Route>
          </Routes>
        </div>
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App
