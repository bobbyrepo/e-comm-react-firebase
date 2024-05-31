import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    // Define a reducer to set authentication state
    addAuth: (state, action) => {
      // Update isAuthenticated and user based on payload
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    deleteAuth: (state, action) => {
      // detete isAuthenticated and user
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Export selectors and actions
export const authData = (state) => state.auth; // Selector to get authentication state
export const { addAuth, deleteAuth } = authSlice.actions; // Action creator for setting authentication state

// Export the reducer
export default authSlice.reducer;
