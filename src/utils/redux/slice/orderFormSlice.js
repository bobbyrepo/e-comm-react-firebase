import { createSlice } from "@reduxjs/toolkit";

const orderFormSlice = createSlice({
  name: "orderForm",
  initialState: {
    showForm: false,
  },
  reducers: {
    showOrderForm(state) {
      state.showForm = true;
    },
    hideOrderForm(state) {
      state.showForm = false;
    },
  },
});

// Selector to get the order modal state
export const selectOrderForm = (state) => state.orderForm.showForm;

// Export actions
export const { showOrderForm, hideOrderForm } = orderFormSlice.actions;

// Export reducer
export default orderFormSlice.reducer;
