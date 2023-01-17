import { createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
  cartList: Product[];
};

const initialState: InitialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const result = state.cartList.findIndex((product)=>
        product.id === action.payload
      )
      if (result !== -1){
        state.cartList.splice(result, 1)
      }
    },
    increaseQuantity: (state, action) => {
      const result = state.cartList.findIndex((product)=>
        product.id === action.payload
      )
      state.cartList[result].price += state.cartList[result].price / state.cartList[result].quantity;
      state.cartList[result].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const result = state.cartList.findIndex((product)=>
        product.id === action.payload
      )
      if (state.cartList[result].quantity > 1){
        state.cartList[result].price -= state.cartList[result].price / state.cartList[result].quantity;
        state.cartList[result].quantity -= 1;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;