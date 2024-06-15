import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseApi } from "../../../api/axiosInstance";

// Thunks for async actions
export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const response = await baseApi.get("/api/cart/getcart");
  return response.data;
});

export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async (productId) => {
    const response = await baseApi.put("/api/cart/add", { productId });
    return response.data;
  }
);

export const incrementProductInCart = createAsyncThunk(
  "cart/incrementProductInCart",
  async (productId) => {
    const response = await baseApi.put("/api/cart/increment", { productId });
    return response.data;
  }
);

export const decrementProductInCart = createAsyncThunk(
  "cart/decrementProductInCart",
  async (productId) => {
    const response = await baseApi.put("/api/cart/decrement", { productId });
    return response.data;
  }
);

export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async (productId) => {
    const response = await baseApi.put("/api/cart/remove", { productId });
    return response.data;
  }
);

// Define cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartTotal: 0,
    status: "idle",
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = action.payload.products;
        state.cartTotal = action.payload.cartPrice;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload.cart.products;
        state.cartTotal = action.payload.cart.cartPrice;
      })
      .addCase(incrementProductInCart.fulfilled, (state, action) => {
        state.cartItems = action.payload.cart.products;
        state.cartTotal = action.payload.cart.cartPrice;
      })
      .addCase(decrementProductInCart.fulfilled, (state, action) => {
        state.cartItems = action.payload.cart.products;
        state.cartTotal = action.payload.cart.cartPrice;
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        state.cartItems = action.payload.cart.products;
        state.cartTotal = action.payload.cart.cartPrice;
      });
  },
});

// Selectors
export const cart = (state) => state.cart;

// Actions
export const { clearCart } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;
