import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseApi } from "../../../api/axiosInstance";

// Async thunk to fetch orders
export const fetchOrders = createAsyncThunk("order/fetchOrders", async () => {
  const response = await baseApi.get("/api/order/getorder");
  return response.data;
});

// Async thunk to add an order
export const addOrderToServer = createAsyncThunk(
  "order/addOrderToServer",
  async (body) => {
    const response = await baseApi.put("/api/order/add", body);
    console.log(response.data.order.orders);
    return response.data;
  }
);

// Define order slice
const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload.orders;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addOrderToServer.fulfilled, (state, action) => {
        state.orders.push(action.payload);
      });
  },
});

// Selector to get orders state
export const selectOrders = (state) => state.order;

// Export reducer
export default orderSlice.reducer;
