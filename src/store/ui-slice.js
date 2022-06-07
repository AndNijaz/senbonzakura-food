import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartModalOpen: false,
  cartIconScale: false,
  sort: "asc",
  page: 0,
  comingSoonModalOpen: false,
  status: "loading",
};

const uiSlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    updateCartModalOpen(state) {
      state.cartModalOpen = !state.cartModalOpen;
    },
    updateCartIconScale(state) {
      state.cartIconScale = !state.cartIconScale;
    },
    updatePage(state, action) {
      if (action.payload === "forward") state.page++;
      if (action.payload === "backward") state.page--;
    },
    updateComingSoonModal(state) {
      state.comingSoonModalOpen = !state.comingSoonModalOpen;
    },
    closeModal(state) {
      state.cartModalOpen = false;
      state.comingSoonModalOpen = false;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

const uiSliceActions = uiSlice.actions;

export const uiSliceReducer = uiSlice.reducer;
export default uiSliceActions;
