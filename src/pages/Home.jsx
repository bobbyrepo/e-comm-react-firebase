import React from 'react'
import Filter from "../components/Filter/Filter"
import ProductsList from '../components/Product/ProductsList'
import { useSelector } from 'react-redux'
import { categories } from '../utils/redux/slice/categoriesSlice'


function Home() {
    const { selectedCategory } = useSelector(categories)

    console.log(selectedCategory)


    const getTitle = (category) => {
        return category === null ? "All Products" : category.replace(/\b\w/g, char => char.toUpperCase());
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className='text-2xl font-semibold my-8'>{getTitle(selectedCategory)}</h1>
            <div className="flex gap-8">
                <div className="w-[20%] min-w-fit">
                    <Filter />
                </div>
                <div className="w-[80%]">
                    <ProductsList />
                </div>
            </div>
        </div>
    )
}

export default Home