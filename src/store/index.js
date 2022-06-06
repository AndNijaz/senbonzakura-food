import { configureStore } from "@reduxjs/toolkit";
import { uiSliceReducer } from "./ui-slice";
import { cartSliceReducers } from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSliceReducers },
});

export default store;
