import { createSlice } from "@reduxjs/toolkit";

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

export const categories = (state) => state.categories;

export const { addCategory, selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
