import { createSlice } from "@reduxjs/toolkit";

const storedOrders = localStorage.getItem("orders");

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: storedOrders ? JSON.parse(storedOrders) : [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    // You can add more reducers here if needed
  },
});

export const selectOrders = (state) => state.order;
export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
