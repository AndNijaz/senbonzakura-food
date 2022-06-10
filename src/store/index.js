import { configureStore } from "@reduxjs/toolkit";
import { uiSliceReducer } from "./ui-slice";
import { cartSliceReducers } from "./cart-slice";
import { foodSliceReducer } from "./food-slice";
import { orderSliceReducer } from "./order-slice";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    cart: cartSliceReducers,
    foodList: foodSliceReducer,
    order: orderSliceReducer,
  },
});

export default store;
