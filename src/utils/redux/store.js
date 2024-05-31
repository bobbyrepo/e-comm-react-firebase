import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import cartSlice from "./slice/cartSlice";
import modalSlice from "./slice/modalSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    modal: modalSlice,
    categories: categoriesSlice,
    cart: cartSlice,
    products: productsSlice,
  },
});

export default store;
