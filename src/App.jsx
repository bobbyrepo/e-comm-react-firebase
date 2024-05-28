import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bag from './pages/Bag'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="w-[80%] mx-auto mt-16 mb-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Bag />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
