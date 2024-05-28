import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const products = (state) => state.products;

export const { addProduct } = productsSlice.actions;

export default productsSlice.reducer;
