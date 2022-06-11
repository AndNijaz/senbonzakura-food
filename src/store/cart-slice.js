import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
};


const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      const cart = state.cart;
      const foodObjectIndex = cart.findIndex(
        (obj) => obj.id === action.payload.id
      );
      const foodObject = cart[foodObjectIndex];

      if (foodObject) {
        foodObject.foodAmount += 1;
        foodObject.foodPrice += action.payload.initialPrice;
        state.totalAmount += 1;
        state.totalPrice += action.payload.initialPrice;

        state.cart[foodObjectIndex] = foodObject;
        return;
      }

      cart.push(action.payload);
      state.totalAmount += 1;
      state.totalPrice += action.payload.initialPrice;
      state.cart = cart;
    },
    removeFromCart(state, action) {
      const cart = state.cart;
      const foodObjectIndex = cart.findIndex(
        (obj) => obj.id === action.payload.id
      );
      const foodObject = cart[foodObjectIndex];

      if (foodObject) {
        foodObject.foodAmount -= 1;
        foodObject.foodPrice -= action.payload.initialPrice;
        state.totalAmount -= 1;
        state.totalPrice -= action.payload.initialPrice;

        state.cart[foodObjectIndex] = foodObject;
        if (foodObject.foodAmount === 0) {
          const filteredCart = cart.filter(
            (foodObject) => foodObject.id !== action.payload.id
          );

          state.cart = filteredCart;
          return;
        }
      }
    },
    cartOrdered(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.totalAmount = 0;
    },
  },
});

const cartSliceActions = cartSlice.actions;

export const cartSliceReducers = cartSlice.reducer;
export default cartSliceActions;
