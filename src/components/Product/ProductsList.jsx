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

    // Function to fetch products from the API
    const fetchProducts = async () => {
        try {
            // Fetch products from the backend API
            const response = await baseApi("/products")
            const products = response.data

            // Fetch currency conversion rates
            const conversionResponse = await axios.get(`https://api.frankfurter.app/latest?amount=1&from=usd&to=inr`)
            const unit = conversionResponse.data.rates.INR

            // Convert product prices to INR
            const updatedProducts = products.map(item => ({ ...item, price: Math.round(unit * item.price) }))

            // Dispatch action to add products to the Redux store
            dispatch(addProduct(updatedProducts))
        }
        catch (err) {
            console.log("error in fetching products", err)
        }
    }

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            {/* Render the products in a grid layout */}
            <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2">
                {/* Map through products and render ProductCard component for each */}
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
