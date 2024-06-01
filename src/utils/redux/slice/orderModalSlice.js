import { createSlice } from "@reduxjs/toolkit";

const orderModalSlice = createSlice({
  name: "orderModal",
  initialState: {
    showModal: false,
  },
  reducers: {
    showOrderModal(state) {
      state.showModal = true;
    },
    hideOrderModal(state) {
      state.showModal = false;
    },
  },
});

// Selector to get the order modal state
export const selectOrderModal = (state) => state.orderModal.showModal;

// Export actions
export const { showOrderModal, hideOrderModal } = orderModalSlice.actions;

// Export reducer
export default orderModalSlice.reducer;
