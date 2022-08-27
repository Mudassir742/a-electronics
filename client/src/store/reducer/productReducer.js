import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../thunk/productThunk";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = [payload];
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.loading = false;
    },
  },
});

export const productReducer = productSlice.reducer;
