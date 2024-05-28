import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    cart: cartSlice,
    products: productsSlice,
  },
});

export default store;
