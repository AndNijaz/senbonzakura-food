import { createSlice } from "@reduxjs/toolkit";

const initialState = { food: [] };

const foodSlice = createSlice({
  name: "foodList",
  initialState,
  reducers: {
    updateFoodList(state, action) {
      //   console.log(action.payload);
      state.food = action.payload;
    },
  },
});

const foodSliceActions = foodSlice.actions;

export const foodSliceReducer = foodSlice.reducer;
export default foodSliceActions;
