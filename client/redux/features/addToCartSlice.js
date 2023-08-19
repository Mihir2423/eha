import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
};

const addToCartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    incrementItems: (state, action) => {
      let exist = state.cartItem.includes(action.payload);
      if (!exist) state.cartItem.push(action.payload);
    },
  },
});

export const { incrementItems } = addToCartSlice.actions;
export default addToCartSlice.reducer;
