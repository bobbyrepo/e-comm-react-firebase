import React, { useEffect, useState } from 'react'
import { baseApi } from '../../api/axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, selectCategory } from '../../utils/redux/slice/categoriesSlice'
import { categories } from '../../utils/redux/slice/categoriesSlice'
import check from "../../assets/check.png"
import uncheck from "../../assets/uncheck.png"

function Filter() {
    const dispatch = useDispatch()
    const { allCategories, selectedCategory } = useSelector(categories)

    // Function to fetch categories from the API
    const getCategories = async () => {
        try {
            const categories = await baseApi.get("/products/categories")
            dispatch(addCategory(categories.data))
        } catch (err) {
            console.log("fetch categories error", err)
        }
    }

    // Handle category selection
    const handleSelect = (index) => {
        dispatch(selectCategory(selectedCategory == allCategories[index] ? null : allCategories[index]))
    }

    // Fetch categories on component mount
    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div className='px-3 py-2 border-1 rounded-xl border-stale-300'>
            <h1 className='text-xl font-semibold'>Filters</h1>
            <div className='my-3 w-full h-[1px] bg-slate-200'></div>
            <h1 className='my-3 text-lg font-semibold'>Category</h1>
            <div className="flex flex-col gap-2 mt-2">
                {allCategories.map((item, ind) => (
                    <button key={ind} className="flex gap-2 items-center"
                        onClick={() => handleSelect(ind)}>
                        {
                            item == selectedCategory ?
                                <img src={check} className='w-4' alt="" />
                                :
                                <img src={uncheck} className='w-4' alt="" />
                        }
                        <h2 className='text-md font-'>{item.replace(/\b\w/g, char => char.toUpperCase())}</h2>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Filter
