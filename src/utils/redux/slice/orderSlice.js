import { createSlice } from "@reduxjs/toolkit";

// Retrieve stored orders from localStorage
const storedOrders = localStorage.getItem("orders");

// Define order slice
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: storedOrders ? JSON.parse(storedOrders) : [], // Initialize orders array with stored orders or an empty array
  },
  reducers: {
    // Add order action
    addOrder: (state, action) => {
      state.orders.push(action.payload); // Add the new order to the orders array
      localStorage.setItem("orders", JSON.stringify(state.orders)); // Update localStorage with the updated orders array
    },
  },
});

// Selector to get orders state
export const selectOrders = (state) => state.order;

// Export actions
export const { addOrder } = orderSlice.actions;

// Export reducer
export default orderSlice.reducer;
