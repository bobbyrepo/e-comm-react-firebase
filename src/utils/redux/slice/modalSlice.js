import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showSignIn: false,
    showSignUp: false,
  },
  reducers: {
    toggleSignIn(state) {
      if (state.showSignIn || state.showSignUp) {
        state.showSignIn = false;
        state.showSignUp = false;
      } else {
        state.showSignIn = true;
      }
    },
    toggleSignUp(state) {
      if (state.showSignIn || state.showSignUp) {
        state.showSignIn = false;
        state.showSignUp = false;
      } else {
        state.showSignUp = true;
      }
    },
    hideModals(state) {
      state.showSignIn = false;
      state.showSignUp = false;
    },
  },
});
export const modal = (state) => state.modal;
export const { toggleSignIn, toggleSignUp, hideModals } = modalSlice.actions;
export default modalSlice.reducer;
