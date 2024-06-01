import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import cartSlice from "./slice/cartSlice";
import modalSlice from "./slice/modalSlice";
import orderFormSlice from "./slice/orderFormSlice";
import orderSlice from "./slice/orderSlice";

// Configure Redux store
const store = configureStore({
  reducer: {
    auth: authSlice, // Authentication slice
    modal: modalSlice, // Modal slice
    categories: categoriesSlice, // Categories slice
    cart: cartSlice, // Cart slice
    products: productsSlice, // Products slice
    order: orderSlice, // Order slice
    orderForm: orderFormSlice, // Order form slice
  },
});

export default store;
