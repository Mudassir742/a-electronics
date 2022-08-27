import { createAsyncThunk } from "@reduxjs/toolkit";
import productInstance from "src/axios/productInstance";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (thunkAPI) => {
    const productResponse = await productInstance.get("/show-product");
    return productResponse.data.data;
  }
);
