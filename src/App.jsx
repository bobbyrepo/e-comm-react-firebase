import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bag from './pages/Bag'
import Navbar from './components/Navbar/Navbar'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="w-[85%] mx-auto mt-20 mb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Bag />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
