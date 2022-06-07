import { configureStore } from "@reduxjs/toolkit";
import { uiSliceReducer } from "./ui-slice";
import { cartSliceReducers } from "./cart-slice";
import { foodSliceReducer } from "./food-slice";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartSliceReducers,
    foodList: foodSliceReducer,
  },
});

export default store;
