import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  cartIconScale: false,
  sort: "asc",
  page: 0,
};

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateModalOpen(state) {
      state.modalOpen = !state.modalOpen;
    },
    updateCartIconScale(state) {
      state.cartIconScale = !state.cartIconScale;
    },
    updatePage(state, action) {
      if (action.payload === "forward") state.page++;
      if (action.payload === "backward") state.page--;
    },
  },
});

const uiSliceActions = uiSlice.actions;

export const uiSliceReducer = uiSlice.reducer;
export default uiSliceActions;
