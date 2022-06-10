import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newOrder: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    order(state, action) {
      state.newOrder = action.payload;
    },
  },
});

const orderSliceActions = orderSlice.actions;

export const orderSliceReducer = orderSlice.reducer;
export default orderSliceActions;
