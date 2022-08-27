import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      if (state.cartItems.length === 0) {
        state.cartItems = [...state.cartItems, payload];
      } else {
        let isFound = false;
        for (let i = 0; i < state.cartItems.length && !isFound; i++) {
          if (state.cartItems[i].itemId === payload.itemId) {
            state.cartItems[i].quantity += 1;
            isFound = true;
          }
        }
        if (!isFound) {
          state.cartItems = [...state.cartItems, payload];
        }
      }
    },
  },
  extraReducers: {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
