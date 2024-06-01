import { createSlice } from "@reduxjs/toolkit";

// Define products slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [], // Initialize allProducts array
  },
  reducers: {
    // Add product action
    addProduct: (state, action) => {
      state.allProducts = action.payload; // Set allProducts to the payload (array of products)
    },
  },
});

// Selector to get products state
export const products = (state) => state.products;

// Export actions
export const { addProduct } = productsSlice.actions;

// Export reducer
export default productsSlice.reducer;
