import React from 'react'
import Filter from "../components/Filter/Filter"
import ProductsList from '../components/Product/ProductsList'


function Home() {
    return (
        <div className="flex gap-8">
            <div className="w-[20%] min-w-fit">
                <Filter />
            </div>
            <div className="w-[80%]">
                <ProductsList />
            </div>
        </div>
    )
}

export default Home