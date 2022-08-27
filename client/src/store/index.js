import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";

export default configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
  },
});
