import { createSlice } from "@reduxjs/toolkit";

// Define categories slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    allCategories: [],
    selectedCategory: null,
  },
  reducers: {
    addCategory: (state, action) => {
      state.allCategories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

// Selectors
export const categories = (state) => state.categories;

// Actions
export const { addCategory, selectCategory } = categoriesSlice.actions;

// Reducer
export default categoriesSlice.reducer;
