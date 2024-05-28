import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, products } from '../../utils/redux/slice/productsSlice'
import { categories } from '../../utils/redux/slice/categoriesSlice'
import { baseApi } from '../../api/axiosInstance'
import ProductCard from './ProductCard'
import axios from 'axios'

function ProductsList() {
    const dispatch = useDispatch()
    const { allProducts } = useSelector(products)
    const { selectedCategory } = useSelector(categories)

    const fetchProducts = async () => {
        try {
            const response = await baseApi("/products")
            const products = response.data
            const conversionResponse = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=usd&to=inr`)
            const unit = conversionResponse.data.rates.INR
            const updatedProducts = products.map(item => ({ ...item, price: Math.round(unit * item.price) }));
            dispatch(addProduct(updatedProducts))
        }
        catch {
            err => console.log("error in fetching products", err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const getTitle = (category) => {
        return category === null ? "All" : category.replace(/\b\w/g, char => char.toUpperCase());
    };


    return (
        <div>
            <h1 className='text-xl font-semibold mb-3'>{getTitle(selectedCategory)}</h1>
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
                {
                    (
                        selectedCategory == null
                            ? allProducts : allProducts.filter(product => product.category === selectedCategory))
                        .map((item, ind) =>
                            <ProductCard key={ind} item={item} />
                        )
                }
            </div>
        </div>
    )
}

export default ProductsList