import React from 'react'
import Filter from "../components/Filter/Filter"
import ProductsList from '../components/Product/ProductsList'
import { useSelector } from 'react-redux'
import { categories } from '../utils/redux/slice/categoriesSlice'

function Home() {
    // Get the selected category from the Redux store
    const { selectedCategory } = useSelector(categories)

    // Function to format the title based on the selected category
    const getTitle = (category) => {
        return category === null ? "All Products" : category.replace(/\b\w/g, char => char.toUpperCase());
    };

    return (
        <div className="flex flex-col items-center">
            {/* Display the formatted title */}
            <h1 className='text-2xl font-semibold my-8'>{getTitle(selectedCategory)}</h1>
            <div className="flex gap-8">
                <div className="w-[20%] min-w-fit">
                    {/* Render the Filter component */}
                    <Filter />
                </div>
                <div className="w-[80%]">
                    {/* Render the ProductsList component */}
                    <ProductsList />
                </div>
            </div>
        </div>
    )
}

export default Home
