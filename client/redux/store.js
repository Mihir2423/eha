import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./features/addToCartSlice";
import filterSlice from "./features/filterSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    addToCart: addToCartSlice,
    filter: filterSlice,
    user: userSlice,
  },
});
