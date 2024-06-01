import { createSlice } from "@reduxjs/toolkit";

// Retrieve cart items and total from local storage
const storedCartItems = localStorage.getItem("cartItems");
const storedCartTotal = localStorage.getItem("cartTotal");

// Define cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
    cartTotal: storedCartTotal ? JSON.parse(storedCartTotal) : 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        if (existingItem.quantity < 5) {
          existingItem.quantity += 1;
          state.cartTotal += existingItem.price;
        }
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
        state.cartTotal += newItem.price;
      }
      // Update local storage with updated cart items
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },

    incrementItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity < 5) {
        existingItem.quantity += 1;
        state.cartTotal += existingItem.price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },

    decrementItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.cartTotal -= existingItem.price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },

    removeItem: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );
      const itemTotal = itemToRemove.price * itemToRemove.quantity;
      state.cartTotal -= itemTotal;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.cartTotal = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("cartTotal", JSON.stringify(state.cartTotal));
    },
  },
});

// Selectors
export const cart = (state) => state.cart;

// Actions
export const { addItem, incrementItem, decrementItem, removeItem, clearCart } =
  cartSlice.actions;

// Reducer
export default cartSlice.reducer;
