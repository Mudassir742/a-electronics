import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [
      {
        itemId: "",
        name: "",
        description: "",
        unitPrice: "",
        quantity: "",
        model: "",
        image: "",
      },
    ],
  },
  reducers: {
    addToCart:(state,{payload})=>{
        console.log(payload)
    }
  },
  extraReducers: {},
});

export const cartReducer = cartSlice.reducer;
