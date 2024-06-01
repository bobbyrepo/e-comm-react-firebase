import { createSlice } from "@reduxjs/toolkit";

// Define modal slice
const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showSignIn: false,
    showSignUp: false,
  },
  reducers: {
    // Toggle sign-in modal
    toggleSignIn(state) {
      if (state.showSignIn || state.showSignUp) {
        state.showSignIn = false;
        state.showSignUp = false;
      } else {
        state.showSignIn = true;
      }
    },
    // Toggle sign-up modal
    toggleSignUp(state) {
      if (state.showSignIn || state.showSignUp) {
        state.showSignIn = false;
        state.showSignUp = false;
      } else {
        state.showSignUp = true;
      }
    },
    // Hide all modals
    hideModals(state) {
      state.showSignIn = false;
      state.showSignUp = false;
    },
  },
});

// Selector
export const modal = (state) => state.modal;

// Actions
export const { toggleSignIn, toggleSignUp, hideModals } = modalSlice.actions;

// Reducer
export default modalSlice.reducer;
